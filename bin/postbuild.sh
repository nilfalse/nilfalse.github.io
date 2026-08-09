#/bin/bash

# FIXME: https://github.com/remix-run/react-router/discussions/12596

# Flatten every nested index.html to <path>.html
find build/client -mindepth 2 -name index.html \
  -exec sh -c 'mv -v "$1" "${1%/index.html}.html"' _ {} \;

# Remove any directories left empty by the moves above
find build/client -mindepth 1 -type d -empty -delete
