/**
 * This benchmark comes from EventEmitter3
 * Link: https://github.com/primus/eventemitter3/blob/master/benchmarks/run/listening.js
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

function handle () {
  if (arguments.length > 100) console.log('damn')
}

/**
 * Instances.
 */
const ee2 = new EventEmitter2()
const ee3 = new EventEmitter3()
const ee1 = new EventEmitter1()
const drip = new Drip()
const fe = new FE()
const ee = EE({})
const ce = CE()
const emitta = new Emitta()

const suite = new benchmark.Suite()

suite.add('EventEmitter1', function () {
  ee1.on('foo', handle)
  ee1.removeListener('foo', handle)
}).add('EventEmitter2', function () {
  ee2.on('foo', handle)
  ee2.removeListener('foo', handle)
}).add('EventEmitter3@0.1.6', function () {
  ee3.on('foo', handle)
  ee3.removeListener('foo', handle)
}).add('Drip', function () {
  drip.on('foo', handle)
  drip.removeListener('foo', handle)
}).add('fastemitter', function () {
  fe.on('foo', handle)
  fe.removeListener('foo', handle)
}).add('event-emitter', function () {
  ee.on('foo', handle)
  ee.off('foo', handle)
}).add('contra/emitter', function () {
  ce.on('foo', handle)
  ce.off('foo', handle)
}).add('dcamilleri/emitta', function () {
  emitta.on('foo', handle)
  emitta.removeListener('foo')
}).on('cycle', function cycle (e) {
  console.log(e.target.toString())
}).on('complete', function completed () {
  console.log('Fastest is %s', this.filter('fastest').map('name'))
}).run({ async: true })
