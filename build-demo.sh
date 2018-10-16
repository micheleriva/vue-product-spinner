yarn build
find ./docs -type f -not -name 'VueProductSpinner.gif' -delete
mv ./dist/* ./docs
yarn build-bundle