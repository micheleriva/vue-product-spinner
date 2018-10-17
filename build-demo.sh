#!/usr/bin/env sh

yarn build
git add dist && git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages