'use strict'

const moment = require('moment')
moment().format()

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: '1m',
    mm: '%dm',
    h: '1h',
    hh: '%dh',
    d: '1d',
    dd: '%dd',
    M: '1m',
    MM: '%dm',
    y: '1y',
    yy: '%d years'
  }
})

const formatdate = date => {
  const dateObj = new Date(date)
  return moment(dateObj, 'YYYYMMDD').fromNow()
}

module.exports = formatdate
