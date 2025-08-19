#!/usr/bin/env node

const commandLineArgs = require('command-line-args')
const getContext = require('../scripts/utils/getContext')
const { hasCommand, commands } = require('../commands')

const start = async () => {
  const context = await getContext()

  const mainDefinitions = [
    { name: 'command', defaultOption: true }
  ]

  const mainOptions = commandLineArgs(mainDefinitions, { stopAtFirstUnknown: true })
  const argv = mainOptions._unknown || []

  if (hasCommand(mainOptions.command)) {
    const command = commands[mainOptions.command]
    command(argv, context)
  }
}

start()
