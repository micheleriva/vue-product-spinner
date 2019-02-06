#!/usr/bin/env sh

git add dist && git commit -m "demo deploy"
git subtree push --prefix dist origin gh-pages