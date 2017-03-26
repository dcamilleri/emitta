const EventEmitter = require('../emitta')

describe('EventEmitter: on/emit', () => {
  it('on: should throw if the second parameter is not a function', () => {
    const emitta = new EventEmitter()
    expect(() => emitta.on('foo', 'bar')).toThrow()
    expect(() => emitta.on('foo', () => {})).not.toThrow()
  })

  it('on/emit: should register the function and the event name and be able to call it', () => {
    const emitta = new EventEmitter()

    emitta.on('bar', () => 'hey')

    expect(emitta.emit('bar')).toEqual('hey')
  })

  it('on/emit: should override the previous event if re-defined', () => {
    const emitta = new EventEmitter()

    emitta.on('bar', () => 'hey')
    emitta.on('bar', () => 'yo')

    const eventResult = emitta.emit('bar')

    expect(eventResult).not.toEqual('hey')
    expect(eventResult).toEqual('yo')
  })
})

describe('EventEmitter: removeListener', () => {
  it('should remove one of the listeners', () => {
    const emitta = new EventEmitter()

    emitta.on('bar', () => 'bar')
    emitta.on('foo', () => 'foo')

    emitta.removeListener('bar')

    expect(emitta.emit('bar')).not.toEqual('bar')
    expect(emitta.emit('foo')).toEqual('foo')
  })
})

describe('EventEmitter: removeAllListeners', () => {
  it('should remove all the listeners', () => {
    const emitta = new EventEmitter()

    emitta.on('bar', () => 'bar')
    emitta.on('foo', () => 'foo')

    emitta.removeAllListeners()

    expect(emitta.emit('bar')).not.toEqual('bar')
    expect(emitta.emit('foo')).not.toEqual('foo')
  })
})
