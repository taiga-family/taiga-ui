#!/usr/bin/env bash
# Browse a file from the previous major version branch via GitHub API.
#
# Usage:
#   ./browse-exports.sh <path>
#
# Examples:
#   ./browse-exports.sh projects/kit/index.ts
#   ./browse-exports.sh projects/core/index.ts

set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 <path>" >&2
  echo "Example: $0 projects/kit/index.ts" >&2
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
FILE_PATH="$1"

gh api "repos/${REPO}/contents/${FILE_PATH}?ref=v${PREV_MAJOR}.x" \
  | jq -r '.content' \
  | base64 -d
