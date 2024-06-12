#!/usr/bin/env node

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const dayjs = require('dayjs');

yargs(hideBin(process.argv))
  .command('current', 'Get current date/time', (yargs) => {
    return yargs
      .option('year', {
        alias: 'y',
        type: 'boolean',
        description: 'Show current year'
      })
      .option('month', {
        alias: 'm',
        type: 'boolean',
        description: 'Show current month'
      })
      .option('date', {
        alias: 'd',
        type: 'boolean',
        description: 'Show current date'
      })
  }, (argv) => {
    const now = dayjs();
    if (argv.year) {
      console.log(now.year());
    } else if (argv.month) {
      console.log(now.month() + 1); 
    } else if (argv.date) {
      console.log(now.date());
    } else {
      console.log(now.toISOString());
    }
  })
  .command('add', 'Add to current date', (yargs) => {
    return yargs
      .option('days', {
        alias: 'd',
        type: 'number',
        description: 'Add days'
      })
      .option('months', {
        alias: 'm',
        type: 'number',
        description: 'Add months'
      })
      .option('years', {
        alias: 'y',
        type: 'number',
        description: 'Add years'
      })
  }, (argv) => {
    let date = dayjs();
    if (argv.days) {
      date = date.add(argv.days, 'day');
    }
    if (argv.months) {
      date = date.add(argv.months, 'month');
    }
    if (argv.years) {
      date = date.add(argv.years, 'year');
    }
    console.log(date.toISOString());
  })
  .command('sub', 'Subtract from current date', (yargs) => {
    return yargs
      .option('days', {
        alias: 'd',
        type: 'number',
        description: 'Subtract days'
      })
      .option('months', {
        alias: 'm',
        type: 'number',
        description: 'Subtract months'
      })
      .option('years', {
        alias: 'y',
        type: 'number',
        description: 'Subtract years'
      })
  }, (argv) => {
    let date = dayjs();
    if (argv.days) {
      date = date.subtract(argv.days, 'day');
    }
    if (argv.months) {
      date = date.subtract(argv.months, 'month');
    }
    if (argv.years) {
      date = date.subtract(argv.years, 'year');
    }
    console.log(date.toISOString());
  })
  .help()
  .argv;
