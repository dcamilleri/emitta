;(function () {
  function EventEmitter () {
    this._events = {}
  }

  EventEmitter.prototype.emit = function (eventName) {
    var targetEvent = this._events[eventName]
    if (!targetEvent) {
      return
    }
    return targetEvent()
  }

  EventEmitter.prototype.on = function (eventName, fn) {
    if (!eventName || !fn) {
      return
    }
    if (typeof fn !== 'function') {
      throw Error('EventEmitter: second parameter of on should be a function ')
    }
    this._events[eventName] = fn
  }

  EventEmitter.prototype.removeListener = function (eventName) {
    if (this._events[eventName]) {
      this._events[eventName] = null
    }
  }

  EventEmitter.prototype.removeAllListeners = function (eventName) {
    this._events = {}
  }

  if (typeof exports === 'object') {
    module.exports = EventEmitter
  } else {
    window.EventEmitter = EventEmitter
  }
}())
