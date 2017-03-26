const EventEmitter = require('../../emitta')

const emitta = new EventEmitter()

emitta.on('init', function () {
  process.nextTick(function () {
    console.log('Hello world!')
  })
})

emitta.emit('init')
emitta.removeListener('init')
