#!/bin/bash

echo "Should yarn.lock be regenerated?"
if [[ $TRAVIS_PULL_REQUEST_BRANCH != *"greenkeeper"* ]]; then
	# Not a GreenKeeper Pull Request, aborting
	exit 0
fi

echo "Cloning repo"
git clone "https://"$PUSH_TOKEN"@github.com/"$TRAVIS_REPO_SLUG".git" repo
cd repo

echo "Switching to branch $TRAVIS_PULL_REQUEST_BRANCH"
git checkout $TRAVIS_PULL_REQUEST_BRANCH

# See if commit message includes "update"
git log --name-status HEAD^..HEAD | grep "chore(package)" || exit 0

echo "Updating lockfiles"
yarn

PACKAGE=`echo "$TRAVIS_PULL_REQUEST_BRANCH" | sed 's/[^/]*\/\(.*\)/\1/' | sed 's/\(.*\)-[^-]*/\1/'`

cd examples/node && echo "Check $PACKAGE in examples/node"
cat package.json | grep "\"$PACKAGE\":" && yarn upgrade $PACKAGE
cd -

cd examples/protractor && echo "Check $PACKAGE in examples/protractor"
cat package.json | grep "\"$PACKAGE\":" && yarn upgrade $PACKAGE
cd -

cd examples/typescript && echo "Check $PACKAGE in examples/typescript"
cat package.json | grep "\"$PACKAGE\":" && yarn upgrade $PACKAGE
cd -

echo "Commit and push yarn.lock"
git config --global user.email "$PUSH_EMAIL"
git config --global user.name "Travis CI"
git config --global push.default simple

git add yarn.lock examples/node/yarn.lock examples/protractor/yarn.lock examples/typescript/yarn.lock
git commit -m "chore(yarn.lock): update yarn.lock"
git push
