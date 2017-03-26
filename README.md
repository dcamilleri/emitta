# [![emitta](/logo/emitta.png)](https://github.com/dcamilleri/emitta)

> The simplest (and smallest) Event Emitter implementation

`emitta` is an 45 lines of code EventEmitter. `emitta` is smaller and faster than its competitors, simply because its API is **ridiculously simple**. And it's also cross-browser.
Include this **<1ko** (287b gzipped) library to your project to attach and emit events!

[![NPM](https://nodei.co/npm/emitta.png)](https://www.npmjs.com/package/emitta)

## Why emitta ?

We have all seen and used great EventEmitters libraries. And most of the time, we use them to do **only** two things: attaching and emitting events. Nothing else. But these libraries also include other advanced usages of emitters that we, most of the time, don't need.

**`emitta` aims to solve the simple need of emitting and attaching events, without anything else.**

_Why the name **emitta**?_

I didn't want to create yet another `EventEmitterX`, X being the 1000th version. So I picked up a new name, based on the english pronunciation of **emitter** in Japanese.

## Installation

With [Yarn](https://yarnpkg.com/en/docs/install)

```console
$ yarn add emitta
```

With npm

```console
$ npm install emitta --save
```

## Usage

```js
var EventEmitter = require('emitta')

// Create a new instance
var emitta = new EventEmitter()

// Attach event
emitta.on('myEvent', function() {
  console.log('Hello world!')
})

// Emit event
emitta.emit('myEvent') // Hello world!

// Delete event
emitta.removeListener('myEvent')

// Delete all events
emitta.removeAllListeners()

// That's it! Simple right?
```

## API

### .on(eventName, callback)

`.on` is used to attach an event to a callback

If `eventName` or `callback` are not defined, nothing will be attached.
`callback` must be a function. Otherwise, an error is thrown.

⚠️ For simplicity reasons, if you attach the same event multiple times, only the last callback will be stored.

### .emit(eventName)

`.emit` is used to call the function associated with the `eventName` event.

`eventName` must have already been attached to a callback.

### .removeListener(eventName)

`.removeListener` removes the selected event if it exists.

### .removeAllListeners()

`.removeAllListeners` flushes all the events from the EventEmitter

## Benchmarks

⚠️ For now, benchmarks have been taken from the great [EventEmitter3](https://github.com/primus/eventemitter3). Homemade benchmarks are coming!

`emitta` was benchmarked against its competitors on the three things an EventEmitter should do: **attaching**, **emitting** and **removing** events.

**Benchmarking attaching/removing events with `.on` and `.removeListener`**

Run the benchmark:
```console
node benchmarks/eventemitter3-benchmarks/listening.js
```

Results:
```
EventEmitter1 x 4,006,233 ops/sec ±7.24% (67 runs sampled)
EventEmitter2 x 1,136,366 ops/sec ±3.54% (71 runs sampled)
EventEmitter3@0.1.6 x 15,470,152 ops/sec ±9.77% (66 runs sampled)
Drip x 27,336,329 ops/sec ±3.98% (71 runs sampled)
fastemitter x 8,953,721 ops/sec ±3.68% (74 runs sampled)
event-emitter x 1,328,110 ops/sec ±4.37% (68 runs sampled)
contra/emitter x 5,534,475 ops/sec ±3.39% (79 runs sampled)
dcamilleri/emitta x 47,981,718 ops/sec ±5.21% (77 runs sampled)
Fastest is dcamilleri/emitta
```

**Benchmarking emitting events with `.emit`**

Run the benchmark:
```console
node benchmarks/eventemitter3-benchmarks/emit.js
```

Results:
```
EventEmitter1 x 47,965,828 ops/sec ±1.47% (78 runs sampled)
EventEmitter2 x 24,178,318 ops/sec ±12.50% (67 runs sampled)
EventEmitter3@0.1.6 x 33,571,858 ops/sec ±3.31% (70 runs sampled)
Drip x 27,198,636 ops/sec ±2.39% (76 runs sampled)
fastemitter x 16,157,850 ops/sec ±4.33% (72 runs sampled)
event-emitter x 9,982,259 ops/sec ±4.53% (69 runs sampled)
contra/emitter x 443,390 ops/sec ±4.48% (73 runs sampled)
dcamilleri/emitta x 73,502,204 ops/sec ±3.07% (73 runs sampled)
Fastest is dcamilleri/emitta
```

**Bonus: creating an instance**

Run the benchmark:
```console
node benchmarks/eventemitter3-benchmarks/init.js
```

Results:
```
EventEmitter1 x 35,884,967 ops/sec ±2.50% (83 runs sampled)
EventEmitter2 x 31,389,033 ops/sec ±1.56% (78 runs sampled)
EventEmitter3@0.1.6 x 89,695,581 ops/sec ±4.31% (70 runs sampled)
Drip x 99,789,081 ops/sec ±2.83% (78 runs sampled)
fastemitter x 12,505,656 ops/sec ±1.17% (87 runs sampled)
event-emitter x 374,599 ops/sec ±0.95% (81 runs sampled)
contra/emitter x 799,779 ops/sec ±5.48% (53 runs sampled)
dcamilleri/emitta x 97,672,988 ops/sec ±3.25% (78 runs sampled)
Fastest is Drip,dcamilleri/emitta
```

## Run tests

```console
$ yarn && yarn test
```

## License

MIT © [Dorian Camilleri](https://github.com/dcamilleri)