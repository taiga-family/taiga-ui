#!/usr/bin/env bash
# Search which package exports a symbol in the previous major version.
# Converts symbol name to a directory name and searches the git tree.
#
# Usage:
#   ./search-symbol.sh <symbol>
#
# Examples:
#   ./search-symbol.sh TuiInputPhone
#   ./search-symbol.sh TuiCarousel

set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <symbol>" >&2
  echo "Example: $0 TuiInputPhone" >&2
  exit 1
fi

if ! command -v gh &>/dev/null; then
  echo "Error: gh CLI not found. Install and authenticate via https://cli.github.com" >&2
  exit 1
fi

REPO_ROOT="$(git -C "$(dirname "$0")" rev-parse --show-toplevel)"
CURRENT_MAJOR="$(node -p "require('${REPO_ROOT}/package.json').version.split('.')[0]")"
PREV_MAJOR="$((CURRENT_MAJOR - 1))"
REPO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
SYMBOL="$1"
REF="v${PREV_MAJOR}.x"

# Strip "Tui" prefix and convert PascalCase → kebab-case
# e.g. TuiInputPhone → input-phone, TuiCarousel → carousel
STRIPPED="${SYMBOL#Tui}"
KEBAB="$(echo "$STRIPPED" | sed 's/\([A-Z]\)/-\1/g' | tr '[:upper:]' '[:lower:]' | sed 's/^-//')"

echo "Searching for '${SYMBOL}' (→ directory '${KEBAB}') in ${REF}..."
echo ""

# Find directories matching the kebab name under projects/ (exclude demo)
MATCHES="$(
  gh api "repos/${REPO}/git/trees/${REF}?recursive=1" \
    | jq -r --arg dir "$KEBAB" '
        .tree[]
        | select(.type == "tree")
        | select(.path | test("^projects/(?!demo)") and endswith("/" + $dir))
        | .path
      '
)"

if [[ -z "$MATCHES" ]]; then
  echo "  No directory named '${KEBAB}' found under projects/ in ${REF}."
  echo ""
  echo "  Try browsing package exports manually:"
  echo "  $(dirname "$0")/browse-exports.sh projects/kit/index.ts"
  exit 0
fi

while IFS= read -r path; do
  # Derive @taiga-ui/package from projects/package/...
  package="$(echo "$path" | sed 's|^projects/\([^/]*\)/.*|\1|')"
  echo "  @taiga-ui/${package}  ($path)"
done <<< "$MATCHES"
