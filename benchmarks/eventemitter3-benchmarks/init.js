/**
 * This benchmark comes from EventEmitter3
 * Link: https://github.com/primus/eventemitter3/blob/master/benchmarks/run/init.js
 */

'use strict'

/**
 * Benchmark related modules.
 */
const benchmark = require('benchmark')

/**
 * Preparation code.
 */
const EventEmitter2 = require('eventemitter2').EventEmitter2
const EventEmitter3 = require('eventemitter3')
const EventEmitter1 = require('events').EventEmitter
const Drip = require('drip').EventEmitter
const EE = require('event-emitter')
const FE = require('fastemitter')
const CE = require('contra/emitter')

const Emitta = require('../../emitta')

const suite = new benchmark.Suite()

suite
.add('EventEmitter1', function () {
  new EventEmitter1() //eslint-disable-line
}).add('EventEmitter2', function () {
  new EventEmitter2() //eslint-disable-line
}).add('EventEmitter3@0.1.6', function () {
  new EventEmitter3() //eslint-disable-line
}).add('Drip', function () {
  new Drip() //eslint-disable-line
}).add('fastemitter', function () {
  new FE() //eslint-disable-line
}).add('event-emitter', function () {
  EE({})
}).add('contra/emitter', function () {
  CE()
}).add('dcamilleri/emitta', function () {
  new Emitta() //eslint-disable-line
}).on('cycle', function cycle (e) {
  console.log(e.target.toString())
}).on('complete', function completed () {
  console.log('Fastest is %s', this.filter('fastest').map('name'))
}).run({ async: true })
