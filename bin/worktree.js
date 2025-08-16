#!/usr/bin/env node

const getContext = require('../scripts/utils/getContext')
const currentDir = process.cwd()

getContext(currentDir).then(console.log)
