#!/usr/bin/env sh

git add demo && git commit -m "demo deploy"
git subtree push --prefix demo origin gh-pages