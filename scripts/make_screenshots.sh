#!/usr/bin/env bash
# Generates screenshots of `index.html` using a local headless Chrome/Chromium.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUTDIR="$ROOT/store_screenshots"
mkdir -p "$OUTDIR"

# Find a browser binary
BROWSER="$(command -v chromium-browser || command -v chromium || command -v google-chrome || command -v google-chrome-stable || true)"
if [ -z "$BROWSER" ]; then
  echo "No Chrome/Chromium found in PATH. Install Chrome or Chromium or run this script on your machine with Chrome installed."
  exit 2
fi

echo "Using browser: $BROWSER"
URL="file://$ROOT/index.html"

echo "Creating screenshots in $OUTDIR ..."
"$BROWSER" --headless --hide-scrollbars --screenshot="$OUTDIR/screen1.png" --window-size=1280,720 "$URL"
"$BROWSER" --headless --hide-scrollbars --screenshot="$OUTDIR/screen2.png" --window-size=1280,900 "$URL"
"$BROWSER" --headless --hide-scrollbars --screenshot="$OUTDIR/screen3.png" --window-size=412,915 "$URL"

echo "Screenshots created:"
ls -lh "$OUTDIR"
