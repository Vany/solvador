#!/bin/bash

cp solvador.sol t/contracts/
cd t

truffle compile || exit 0

echo build success

cp build/contracts/SolvadorWallet.json ../