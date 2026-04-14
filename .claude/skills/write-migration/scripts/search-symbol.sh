#!/usr/bin/env bash
# Search for a symbol in the previous major version branch via GitHub API.
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

gh api "search/code?q=${SYMBOL}+repo:${REPO}+ref:v${PREV_MAJOR}.x" \
  | jq '.items[].path'
