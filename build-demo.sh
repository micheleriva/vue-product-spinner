#!/usr/bin/env sh

yarn build
cd dist
git add -A
git commit -m 'deploy'
git push -f git@github.com:micheleriva/vue-product-spinner.git master:gh-pages
cd -
