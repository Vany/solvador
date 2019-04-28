#!/usr/bin/env bash

npm install
ionic build
npx cap sync

cd www
git init
git add .
git commit -a -m 'asda'
git remote add origin git@github.com:solvador-demo/solvador-demo.github.io.git
git push -f origin master
cd ..
echo "https://solvador-demo.github.io/"
