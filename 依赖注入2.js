var data = { name: 'kingeng' }

observe(data)
data.name = 'dmg'

function observe(data) {
  if (!data || typeof data !== 'object') {
    return
  }

  object.keys(data).forEach(function(key) {
    defineReactive(data, key, data[key])
  })
}

function defineReactive(data, key, val) {
  var dep = new Dep()
  observe(val)

  Object.defineProperties(data, key, {
    enumerable: true,
    configurable: false,
    get: function() {
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set: function(newVal) {
      if (val === newVal) return
      console.log('监听', val, '--->', newVal)
      val = newVal
      dep.notify()
    }
  })
}

function Dep() {
  this.subs = []
}
Dep.prototype = {
  addSub: function(sub) {
    this.subs.push(sub)
  },
  notyfy: function() {
    this.subs.forEach(function(sub) {
      sub.update()
    })
  }
}

Watcher.prototype = {
  get: function(key) {
    Dep.target = this
    this.value = data[key]
    Dep.target = null
  }
}
