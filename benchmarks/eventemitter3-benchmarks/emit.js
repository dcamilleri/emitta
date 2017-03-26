/**
 * This benchmark comes from EventEmitter3
 * Link: https://github.com/primus/eventemitter3/blob/master/benchmarks/run/emit.js
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

ee.on('foo', handle)
fe.on('foo', handle)
ee3.on('foo', handle)
ee2.on('foo', handle)
ee1.on('foo', handle)
drip.on('foo', handle)
ce.on('foo', handle)
emitta.on('foo', handle)

var suite = new benchmark.Suite()

suite.add('EventEmitter1', function () {
  ee1.emit('foo')
}).add('EventEmitter2', function () {
  ee2.emit('foo')
}).add('EventEmitter3@0.1.6', function () {
  ee3.emit('foo')
}).add('Drip', function () {
  drip.emit('foo')
}).add('fastemitter', function () {
  fe.emit('foo')
}).add('event-emitter', function () {
  ee.emit('foo')
}).add('contra/emitter', function () {
  ce.emit('foo')
}).add('dcamilleri/emitta', function () {
  emitta.emit('foo')
}).on('cycle', function cycle (e) {
  console.log(e.target.toString())
}).on('complete', function completed () {
  console.log('Fastest is %s', this.filter('fastest').map('name'))
}).run({ async: true })
