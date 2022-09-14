!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : ((t || self)["'Lenis'"] = e())
})(this, function () {
  function t(t, e) {
    for (var i = 0; i < e.length; i++) {
      var o = e[i]
      ;(o.enumerable = o.enumerable || !1),
        (o.configurable = !0),
        'value' in o && (o.writable = !0),
        Object.defineProperty(t, o.key, o)
    }
  }
  function e(e, i, o) {
    return (
      i && t(e.prototype, i),
      o && t(e, o),
      Object.defineProperty(e, 'prototype', { writable: !1 }),
      e
    )
  }
  function i() {
    return (
      (i = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var i = arguments[e]
              for (var o in i)
                Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
            }
            return t
          }),
      i.apply(this, arguments)
    )
  }
  function o(t, e) {
    return (
      (o = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return (t.__proto__ = e), t
          }),
      o(t, e)
    )
  }
  function n() {}
  n.prototype = {
    on: function (t, e, i) {
      var o = this.e || (this.e = {})
      return (o[t] || (o[t] = [])).push({ fn: e, ctx: i }), this
    },
    once: function (t, e, i) {
      var o = this
      function n() {
        o.off(t, n), e.apply(i, arguments)
      }
      return (n._ = e), this.on(t, n, i)
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          o = 0,
          n = i.length;
        o < n;
        o++
      )
        i[o].fn.apply(i[o].ctx, e)
      return this
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        o = i[t],
        n = []
      if (o && e)
        for (var r = 0, s = o.length; r < s; r++)
          o[r].fn !== e && o[r].fn._ !== e && n.push(o[r])
      return n.length ? (i[t] = n) : delete i[t], this
    },
  }
  var r = n
  ;(r.TinyEmitter = n),
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self && self
  var s = (function (t) {
      var e = { exports: {} }
      return (
        (function (t, e) {
          t.exports = (function () {
            var t = 0
            function e(e) {
              return '__private_' + t++ + '_' + e
            }
            function i(t, e) {
              if (!Object.prototype.hasOwnProperty.call(t, e))
                throw new TypeError(
                  'attempted to use private field on non-instance'
                )
              return t
            }
            function o() {}
            o.prototype = {
              on: function (t, e, i) {
                var o = this.e || (this.e = {})
                return (o[t] || (o[t] = [])).push({ fn: e, ctx: i }), this
              },
              once: function (t, e, i) {
                var o = this
                function n() {
                  o.off(t, n), e.apply(i, arguments)
                }
                return (n._ = e), this.on(t, n, i)
              },
              emit: function (t) {
                for (
                  var e = [].slice.call(arguments, 1),
                    i = ((this.e || (this.e = {}))[t] || []).slice(),
                    o = 0,
                    n = i.length;
                  o < n;
                  o++
                )
                  i[o].fn.apply(i[o].ctx, e)
                return this
              },
              off: function (t, e) {
                var i = this.e || (this.e = {}),
                  o = i[t],
                  n = []
                if (o && e)
                  for (var r = 0, s = o.length; r < s; r++)
                    o[r].fn !== e && o[r].fn._ !== e && n.push(o[r])
                return n.length ? (i[t] = n) : delete i[t], this
              },
            }
            var n = o
            n.TinyEmitter = o
            var r,
              s = 'virtualscroll',
              l = e('options'),
              a = e('el'),
              h = e('emitter'),
              c = e('event'),
              u = e('touchStart'),
              d = e('bodyTouchAction')
            return (function () {
              function t(t) {
                var e = this
                Object.defineProperty(this, l, { writable: !0, value: void 0 }),
                  Object.defineProperty(this, a, {
                    writable: !0,
                    value: void 0,
                  }),
                  Object.defineProperty(this, h, {
                    writable: !0,
                    value: void 0,
                  }),
                  Object.defineProperty(this, c, {
                    writable: !0,
                    value: void 0,
                  }),
                  Object.defineProperty(this, u, {
                    writable: !0,
                    value: void 0,
                  }),
                  Object.defineProperty(this, d, {
                    writable: !0,
                    value: void 0,
                  }),
                  (this._onWheel = function (t) {
                    var o = i(e, l)[l],
                      n = i(e, c)[c]
                    ;(n.deltaX = t.wheelDeltaX || -1 * t.deltaX),
                      (n.deltaY = t.wheelDeltaY || -1 * t.deltaY),
                      r.isFirefox &&
                        1 === t.deltaMode &&
                        ((n.deltaX *= o.firefoxMultiplier),
                        (n.deltaY *= o.firefoxMultiplier)),
                      (n.deltaX *= o.mouseMultiplier),
                      (n.deltaY *= o.mouseMultiplier),
                      e._notify(t)
                  }),
                  (this._onMouseWheel = function (t) {
                    var o = i(e, c)[c]
                    ;(o.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
                      (o.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
                      e._notify(t)
                  }),
                  (this._onTouchStart = function (t) {
                    var o = t.targetTouches ? t.targetTouches[0] : t
                    ;(i(e, u)[u].x = o.pageX), (i(e, u)[u].y = o.pageY)
                  }),
                  (this._onTouchMove = function (t) {
                    var o = i(e, l)[l]
                    o.preventTouch &&
                      !t.target.classList.contains(o.unpreventTouchClass) &&
                      t.preventDefault()
                    var n = i(e, c)[c],
                      r = t.targetTouches ? t.targetTouches[0] : t
                    ;(n.deltaX = (r.pageX - i(e, u)[u].x) * o.touchMultiplier),
                      (n.deltaY = (r.pageY - i(e, u)[u].y) * o.touchMultiplier),
                      (i(e, u)[u].x = r.pageX),
                      (i(e, u)[u].y = r.pageY),
                      e._notify(t)
                  }),
                  (this._onKeyDown = function (t) {
                    var o = i(e, c)[c]
                    o.deltaX = o.deltaY = 0
                    var n = window.innerHeight - 40
                    switch (t.keyCode) {
                      case 37:
                      case 38:
                        o.deltaY = i(e, l)[l].keyStep
                        break
                      case 39:
                      case 40:
                        o.deltaY = -i(e, l)[l].keyStep
                        break
                      case 32:
                        o.deltaY = n * (t.shiftKey ? 1 : -1)
                        break
                      default:
                        return
                    }
                    e._notify(t)
                  }),
                  (i(this, a)[a] = window),
                  t && t.el && ((i(this, a)[a] = t.el), delete t.el),
                  r ||
                    (r = {
                      hasWheelEvent: 'onwheel' in document,
                      hasMouseWheelEvent: 'onmousewheel' in document,
                      hasTouch: 'ontouchstart' in document,
                      hasTouchWin:
                        navigator.msMaxTouchPoints &&
                        navigator.msMaxTouchPoints > 1,
                      hasPointer: !!window.navigator.msPointerEnabled,
                      hasKeyDown: 'onkeydown' in document,
                      isFirefox: navigator.userAgent.indexOf('Firefox') > -1,
                    }),
                  (i(this, l)[l] = Object.assign(
                    {
                      mouseMultiplier: 1,
                      touchMultiplier: 2,
                      firefoxMultiplier: 15,
                      keyStep: 120,
                      preventTouch: !1,
                      unpreventTouchClass: 'vs-touchmove-allowed',
                      useKeyboard: !0,
                      useTouch: !0,
                    },
                    t
                  )),
                  (i(this, h)[h] = new n()),
                  (i(this, c)[c] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
                  (i(this, u)[u] = { x: null, y: null }),
                  (i(this, d)[d] = null),
                  void 0 !== i(this, l)[l].passive &&
                    (this.listenerOptions = { passive: i(this, l)[l].passive })
              }
              var e = t.prototype
              return (
                (e._notify = function (t) {
                  var e = i(this, c)[c]
                  ;(e.x += e.deltaX),
                    (e.y += e.deltaY),
                    i(this, h)[h].emit(s, {
                      x: e.x,
                      y: e.y,
                      deltaX: e.deltaX,
                      deltaY: e.deltaY,
                      originalEvent: t,
                    })
                }),
                (e._bind = function () {
                  r.hasWheelEvent &&
                    i(this, a)[a].addEventListener(
                      'wheel',
                      this._onWheel,
                      this.listenerOptions
                    ),
                    r.hasMouseWheelEvent &&
                      i(this, a)[a].addEventListener(
                        'mousewheel',
                        this._onMouseWheel,
                        this.listenerOptions
                      ),
                    r.hasTouch &&
                      i(this, l)[l].useTouch &&
                      (i(this, a)[a].addEventListener(
                        'touchstart',
                        this._onTouchStart,
                        this.listenerOptions
                      ),
                      i(this, a)[a].addEventListener(
                        'touchmove',
                        this._onTouchMove,
                        this.listenerOptions
                      )),
                    r.hasPointer &&
                      r.hasTouchWin &&
                      ((i(this, d)[d] = document.body.style.msTouchAction),
                      (document.body.style.msTouchAction = 'none'),
                      i(this, a)[a].addEventListener(
                        'MSPointerDown',
                        this._onTouchStart,
                        !0
                      ),
                      i(this, a)[a].addEventListener(
                        'MSPointerMove',
                        this._onTouchMove,
                        !0
                      )),
                    r.hasKeyDown &&
                      i(this, l)[l].useKeyboard &&
                      document.addEventListener('keydown', this._onKeyDown)
                }),
                (e._unbind = function () {
                  r.hasWheelEvent &&
                    i(this, a)[a].removeEventListener('wheel', this._onWheel),
                    r.hasMouseWheelEvent &&
                      i(this, a)[a].removeEventListener(
                        'mousewheel',
                        this._onMouseWheel
                      ),
                    r.hasTouch &&
                      (i(this, a)[a].removeEventListener(
                        'touchstart',
                        this._onTouchStart
                      ),
                      i(this, a)[a].removeEventListener(
                        'touchmove',
                        this._onTouchMove
                      )),
                    r.hasPointer &&
                      r.hasTouchWin &&
                      ((document.body.style.msTouchAction = i(this, d)[d]),
                      i(this, a)[a].removeEventListener(
                        'MSPointerDown',
                        this._onTouchStart,
                        !0
                      ),
                      i(this, a)[a].removeEventListener(
                        'MSPointerMove',
                        this._onTouchMove,
                        !0
                      )),
                    r.hasKeyDown &&
                      i(this, l)[l].useKeyboard &&
                      document.removeEventListener('keydown', this._onKeyDown)
                }),
                (e.on = function (t, e) {
                  i(this, h)[h].on(s, t, e)
                  var o = i(this, h)[h].e
                  o && o[s] && 1 === o[s].length && this._bind()
                }),
                (e.off = function (t, e) {
                  i(this, h)[h].off(s, t, e)
                  var o = i(this, h)[h].e
                  ;(!o[s] || o[s].length <= 0) && this._unbind()
                }),
                (e.destroy = function () {
                  i(this, h)[h].off(), this._unbind()
                }),
                t
              )
            })()
          })()
        })(e),
        e.exports
      )
    })(),
    l = '0.2.1'
  function a(t, e, i) {
    return Math.max(t, Math.min(e, i))
  }
  var h = ['duration', 'easing'],
    c = /*#__PURE__*/ (function () {
      function t() {}
      var o = t.prototype
      return (
        (o.to = function (t, e) {
          var o = this,
            n = void 0 === e ? {} : e,
            r = n.duration,
            s = void 0 === r ? 1 : r,
            l = n.easing,
            a =
              void 0 === l
                ? function (t) {
                    return t
                  }
                : l,
            c = (function (t, e) {
              if (null == t) return {}
              var i,
                o,
                n = {},
                r = Object.keys(t)
              for (o = 0; o < r.length; o++)
                e.indexOf((i = r[o])) >= 0 || (n[i] = t[i])
              return n
            })(n, h)
          ;(this.target = t),
            (this.fromKeys = i({}, c)),
            (this.toKeys = i({}, c)),
            (this.keys = Object.keys(i({}, c))),
            this.keys.forEach(function (e) {
              o.fromKeys[e] = t[e]
            }),
            (this.duration = s),
            (this.easing = a),
            (this.currentTime = 0),
            (this.isRunning = !0)
        }),
        (o.raf = function (t) {
          var e = this
          if (this.isRunning) {
            this.currentTime = Math.min(
              this.currentTime + 0.001 * t,
              this.duration
            )
            var i = this.easing(this.progress)
            this.keys.forEach(function (t) {
              var o = e.fromKeys[t]
              e.target[t] = o + (e.toKeys[t] - o) * i
            }),
              1 === i && (this.isRunning = !1)
          }
        }),
        e(t, [
          {
            key: 'progress',
            get: function () {
              return this.currentTime / this.duration
            },
          },
        ]),
        t
      )
    })(),
    u = /*#__PURE__*/ (function (t) {
      var i, n
      function r(e) {
        var i,
          o,
          n,
          r,
          h = void 0 === e ? {} : e,
          u = h.duration,
          d = void 0 === u ? 1.2 : u,
          p = h.easing,
          f =
            void 0 === p
              ? function (t) {
                  return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                }
              : p,
          v = h.smooth,
          y = void 0 === v || v,
          w = h.direction,
          g = void 0 === w ? 'vertical' : w,
          m = h.wrapper,
          b = void 0 === m ? window : m,
          T = h.content,
          S = void 0 === T ? document.body : T
        ;((r = t.call(this) || this).onWindowResize = function () {
          ;(r.wrapperWidth = window.innerWidth),
            (r.wrapperHeight = window.innerHeight)
        }),
          (r.onWrapperResize = function (t) {
            var e = t[0]
            if (e) {
              var i = e.contentRect
              ;(r.wrapperWidth = i.width), (r.wrapperHeight = i.height)
            }
          }),
          (r.onContentResize = function (t) {
            var e = t[0]
            if (e) {
              var i = e.contentRect
              ;(r.contentWidth = i.width), (r.contentHeight = i.height)
            }
          }),
          (r.onVirtualScroll = function (t) {
            var e = t.deltaY,
              i = t.originalEvent
            !i.ctrlKey &&
              r.smooth &&
              (r.stopped
                ? i.preventDefault()
                : (r.smooth && i.preventDefault(),
                  (r.targetScroll -= e),
                  (r.targetScroll = a(0, r.targetScroll, r.limit)),
                  r.scrollTo(r.targetScroll)))
          }),
          (r.onScroll = function () {
            ;(r.isScrolling && r.smooth) ||
              ((r.targetScroll =
                r.scroll =
                r.lastScroll =
                  r.wrapperNode[r.scrollProperty]),
              r.notify())
          }),
          void 0 !== arguments[0].lerp &&
            console.warn(
              'Lenis: lerp option is deprecated, you must use duration and easing options instead. See documentation https://github.com/studio-freight/lenis'
            ),
          (window.lenisVersion = l),
          (r.wrapperNode = b),
          (r.contentNode = S),
          (r.duration = d),
          (r.easing = f),
          (r.smooth = y),
          (r.direction = g),
          (r.animate = new c()),
          r.wrapperNode.addEventListener('scroll', r.onScroll)
        var _ =
          (null == (i = navigator) || null == (o = i.userAgentData)
            ? void 0
            : o.platform) ||
          (null == (n = navigator) ? void 0 : n.platform) ||
          'unknown'
        return (
          (r.virtualScroll = new s({
            el: r.wrapperNode,
            firefoxMultiplier: 50,
            mouseMultiplier: _.indexOf('Win') > -1 ? 1 : 0.4,
            useKeyboard: !1,
            useTouch: !1,
            passive: !1,
          })),
          r.virtualScroll.on(r.onVirtualScroll),
          r.wrapperNode === window
            ? (r.wrapperNode.addEventListener('resize', r.onWindowResize),
              r.onWindowResize())
            : ((r.wrapperHeight = r.wrapperNode.offsetHeight),
              (r.wrapperWidth = r.wrapperNode.offsetWidth),
              (r.wrapperObserver = new ResizeObserver(r.onWrapperResize)),
              r.wrapperObserver.observe(r.wrapperNode)),
          (r.contentHeight = r.contentNode.offsetHeight),
          (r.contentWidth = r.contentNode.offsetWidth),
          (r.contentObserver = new ResizeObserver(r.onContentResize)),
          r.contentObserver.observe(r.contentNode),
          (r.targetScroll =
            r.scroll =
            r.lastScroll =
              r.wrapperNode[r.scrollProperty]),
          r
        )
      }
      ;(n = t),
        ((i = r).prototype = Object.create(n.prototype)),
        (i.prototype.constructor = i),
        o(i, n)
      var h = r.prototype
      return (
        (h.start = function () {
          this.stopped = !1
        }),
        (h.stop = function () {
          this.stopped = !0
        }),
        (h.destroy = function () {
          var t
          this.wrapperNode === window &&
            this.wrapperNode.removeEventListener('resize', this.onWindowResize),
            this.wrapperNode.removeEventListener('scroll', this.onScroll),
            this.virtualScroll.destroy(),
            null == (t = this.wrapperObserver) || t.disconnect(),
            this.contentObserver.disconnect()
        }),
        (h.raf = function (t) {
          var e = t - this.now
          ;(this.now = t),
            !this.stopped &&
              this.smooth &&
              ((this.lastScroll = this.scroll),
              this.animate.raf(e),
              Math.round(this.scroll) === Math.round(this.targetScroll) &&
                (this.lastScroll = this.targetScroll),
              this.isScrolling && (this.setScroll(this.scroll), this.notify()),
              (this.isScrolling = this.scroll !== this.targetScroll))
        }),
        (h.setScroll = function (t) {
          'horizontal' === this.direction
            ? this.wrapperNode.scrollTo(t, 0)
            : this.wrapperNode.scrollTo(0, t)
        }),
        (h.notify = function () {
          this.emit('scroll', {
            scroll: this.scroll,
            limit: this.limit,
            velocity: this.velocity,
            direction: this.direction,
            progress: this.scroll / this.limit,
          })
        }),
        (h.scrollTo = function (t, e) {
          var i,
            o = void 0 === e ? {} : e,
            n = o.offset,
            r = o.immediate,
            s = void 0 !== r && r,
            l = o.duration,
            a = void 0 === l ? this.duration : l,
            h = o.easing,
            c = void 0 === h ? this.easing : h
          ;(i = 'number' == typeof t ? t : 0),
            (this.targetScroll = i += void 0 === n ? 0 : n),
            !this.smooth || s
              ? this.setScroll(this.targetScroll)
              : this.animate.to(this, {
                  duration: a,
                  easing: c,
                  scroll: this.targetScroll,
                })
        }),
        e(r, [
          {
            key: 'scrollProperty',
            get: function () {
              return this.wrapperNode === window
                ? 'horizontal' === this.direction
                  ? 'scrollX'
                  : 'scrollY'
                : 'horizontal' === this.direction
                ? 'scrollLeft'
                : 'scrollTop'
            },
          },
          {
            key: 'limit',
            get: function () {
              return 'horizontal' === this.direction
                ? this.contentWidth - this.wrapperWidth
                : this.contentHeight - this.wrapperHeight
            },
          },
          {
            key: 'velocity',
            get: function () {
              return this.scroll - this.lastScroll
            },
          },
        ]),
        r
      )
    })(r)
  return u
})
