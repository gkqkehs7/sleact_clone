(self.webpackChunksleact_ts_front = self.webpackChunksleact_ts_front || []).push([
  [18],
  {
    93379: function (e) {
      var t = {
        animationIterationCount: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridRow: !0,
        gridColumn: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        stopOpacity: !0,
        strokeDashoffset: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      };
      e.exports = function (e, n) {
        return 'number' != typeof n || t[e] ? n : n + 'px';
      };
    },
    3682: function (e, t) {
      'use strict';
      var n,
        r,
        u =
          'function' == typeof Map
            ? new Map()
            : ((n = []),
              (r = []),
              {
                has: function (e) {
                  return n.indexOf(e) > -1;
                },
                get: function (e) {
                  return r[n.indexOf(e)];
                },
                set: function (e, t) {
                  -1 === n.indexOf(e) && (n.push(e), r.push(t));
                },
                delete: function (e) {
                  var t = n.indexOf(e);
                  t > -1 && (n.splice(t, 1), r.splice(t, 1));
                },
              }),
        o = function (e) {
          return new Event(e, { bubbles: !0 });
        };
      try {
        new Event('test');
      } catch (n) {
        o = function (e) {
          var t = document.createEvent('Event');
          return t.initEvent(e, !0, !1), t;
        };
      }
      function i(e) {
        var t = u.get(e);
        t && t.destroy();
      }
      function a(e) {
        var t = u.get(e);
        t && t.update();
      }
      var s = null;
      'undefined' == typeof window || 'function' != typeof window.getComputedStyle
        ? (((s = function (e) {
            return e;
          }).destroy = function (e) {
            return e;
          }),
          (s.update = function (e) {
            return e;
          }))
        : (((s = function (e, t) {
            return (
              e &&
                Array.prototype.forEach.call(e.length ? e : [e], function (e) {
                  return (function (e) {
                    if (e && e.nodeName && 'TEXTAREA' === e.nodeName && !u.has(e)) {
                      var t,
                        n = null,
                        r = null,
                        i = null,
                        a = function () {
                          e.clientWidth !== r && f();
                        },
                        s = function (t) {
                          window.removeEventListener('resize', a, !1),
                            e.removeEventListener('input', f, !1),
                            e.removeEventListener('keyup', f, !1),
                            e.removeEventListener('autosize:destroy', s, !1),
                            e.removeEventListener('autosize:update', f, !1),
                            Object.keys(t).forEach(function (n) {
                              e.style[n] = t[n];
                            }),
                            u.delete(e);
                        }.bind(e, {
                          height: e.style.height,
                          resize: e.style.resize,
                          overflowY: e.style.overflowY,
                          overflowX: e.style.overflowX,
                          wordWrap: e.style.wordWrap,
                        });
                      e.addEventListener('autosize:destroy', s, !1),
                        'onpropertychange' in e && 'oninput' in e && e.addEventListener('keyup', f, !1),
                        window.addEventListener('resize', a, !1),
                        e.addEventListener('input', f, !1),
                        e.addEventListener('autosize:update', f, !1),
                        (e.style.overflowX = 'hidden'),
                        (e.style.wordWrap = 'break-word'),
                        u.set(e, { destroy: s, update: f }),
                        'vertical' === (t = window.getComputedStyle(e, null)).resize
                          ? (e.style.resize = 'none')
                          : 'both' === t.resize && (e.style.resize = 'horizontal'),
                        (n =
                          'content-box' === t.boxSizing
                            ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom))
                            : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth)),
                        isNaN(n) && (n = 0),
                        f();
                    }
                    function l(t) {
                      var n = e.style.width;
                      (e.style.width = '0px'), (e.style.width = n), (e.style.overflowY = t);
                    }
                    function c() {
                      if (0 !== e.scrollHeight) {
                        var t = (function (e) {
                            for (var t = []; e && e.parentNode && e.parentNode instanceof Element; )
                              e.parentNode.scrollTop &&
                                t.push({ node: e.parentNode, scrollTop: e.parentNode.scrollTop }),
                                (e = e.parentNode);
                            return t;
                          })(e),
                          u = document.documentElement && document.documentElement.scrollTop;
                        (e.style.height = ''),
                          (e.style.height = e.scrollHeight + n + 'px'),
                          (r = e.clientWidth),
                          t.forEach(function (e) {
                            e.node.scrollTop = e.scrollTop;
                          }),
                          u && (document.documentElement.scrollTop = u);
                      }
                    }
                    function f() {
                      c();
                      var t = Math.round(parseFloat(e.style.height)),
                        n = window.getComputedStyle(e, null),
                        r = 'content-box' === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
                      if (
                        (r < t
                          ? 'hidden' === n.overflowY &&
                            (l('scroll'),
                            c(),
                            (r =
                              'content-box' === n.boxSizing
                                ? Math.round(parseFloat(window.getComputedStyle(e, null).height))
                                : e.offsetHeight))
                          : 'hidden' !== n.overflowY &&
                            (l('hidden'),
                            c(),
                            (r =
                              'content-box' === n.boxSizing
                                ? Math.round(parseFloat(window.getComputedStyle(e, null).height))
                                : e.offsetHeight)),
                        i !== r)
                      ) {
                        i = r;
                        var u = o('autosize:resized');
                        try {
                          e.dispatchEvent(u);
                        } catch (e) {}
                      }
                    }
                  })(e);
                }),
              e
            );
          }).destroy = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], i), e;
          }),
          (s.update = function (e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], a), e;
          }));
      var l = s;
      t.Z = l;
    },
    27484: function (e) {
      e.exports = (function () {
        'use strict';
        var e = 6e4,
          t = 36e5,
          n = 'millisecond',
          r = 'second',
          u = 'minute',
          o = 'hour',
          i = 'day',
          a = 'week',
          s = 'month',
          l = 'quarter',
          c = 'year',
          f = 'date',
          d = 'Invalid Date',
          h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          g = {
            name: 'en',
            weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
            months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          },
          v = function (e, t, n) {
            var r = String(e);
            return !r || r.length >= t ? e : '' + Array(t + 1 - r.length).join(n) + e;
          },
          y = {
            s: v,
            z: function (e) {
              var t = -e.utcOffset(),
                n = Math.abs(t),
                r = Math.floor(n / 60),
                u = n % 60;
              return (t <= 0 ? '+' : '-') + v(r, 2, '0') + ':' + v(u, 2, '0');
            },
            m: function e(t, n) {
              if (t.date() < n.date()) return -e(n, t);
              var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                u = t.clone().add(r, s),
                o = n - u < 0,
                i = t.clone().add(r + (o ? -1 : 1), s);
              return +(-(r + (n - u) / (o ? u - i : i - u)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (e) {
              return (
                { M: s, y: c, w: a, d: i, D: f, h: o, m: u, s: r, ms: n, Q: l }[e] ||
                String(e || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          },
          E = 'en',
          m = {};
        m[E] = g;
        var b = function (e) {
            return e instanceof A;
          },
          S = function (e, t, n) {
            var r;
            if (!e) return E;
            if ('string' == typeof e) m[e] && (r = e), t && ((m[e] = t), (r = e));
            else {
              var u = e.name;
              (m[u] = e), (r = u);
            }
            return !n && r && (E = r), r || (!n && E);
          },
          w = function (e, t) {
            if (b(e)) return e.clone();
            var n = 'object' == typeof t ? t : {};
            return (n.date = e), (n.args = arguments), new A(n);
          },
          D = y;
        (D.l = S),
          (D.i = b),
          (D.w = function (e, t) {
            return w(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
          });
        var A = (function () {
            function g(e) {
              (this.$L = S(e.locale, null, !0)), this.parse(e);
            }
            var v = g.prototype;
            return (
              (v.parse = function (e) {
                (this.$d = (function (e) {
                  var t = e.date,
                    n = e.utc;
                  if (null === t) return new Date(NaN);
                  if (D.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ('string' == typeof t && !/Z$/i.test(t)) {
                    var r = t.match(h);
                    if (r) {
                      var u = r[2] - 1 || 0,
                        o = (r[7] || '0').substring(0, 3);
                      return n
                        ? new Date(Date.UTC(r[1], u, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o))
                        : new Date(r[1], u, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o);
                    }
                  }
                  return new Date(t);
                })(e)),
                  (this.$x = e.x || {}),
                  this.init();
              }),
              (v.init = function () {
                var e = this.$d;
                (this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds());
              }),
              (v.$utils = function () {
                return D;
              }),
              (v.isValid = function () {
                return !(this.$d.toString() === d);
              }),
              (v.isSame = function (e, t) {
                var n = w(e);
                return this.startOf(t) <= n && n <= this.endOf(t);
              }),
              (v.isAfter = function (e, t) {
                return w(e) < this.startOf(t);
              }),
              (v.isBefore = function (e, t) {
                return this.endOf(t) < w(e);
              }),
              (v.$g = function (e, t, n) {
                return D.u(e) ? this[t] : this.set(n, e);
              }),
              (v.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (v.valueOf = function () {
                return this.$d.getTime();
              }),
              (v.startOf = function (e, t) {
                var n = this,
                  l = !!D.u(t) || t,
                  d = D.p(e),
                  h = function (e, t) {
                    var r = D.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                    return l ? r : r.endOf(i);
                  },
                  p = function (e, t) {
                    return D.w(n.toDate()[e].apply(n.toDate('s'), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n);
                  },
                  g = this.$W,
                  v = this.$M,
                  y = this.$D,
                  E = 'set' + (this.$u ? 'UTC' : '');
                switch (d) {
                  case c:
                    return l ? h(1, 0) : h(31, 11);
                  case s:
                    return l ? h(1, v) : h(0, v + 1);
                  case a:
                    var m = this.$locale().weekStart || 0,
                      b = (g < m ? g + 7 : g) - m;
                    return h(l ? y - b : y + (6 - b), v);
                  case i:
                  case f:
                    return p(E + 'Hours', 0);
                  case o:
                    return p(E + 'Minutes', 1);
                  case u:
                    return p(E + 'Seconds', 2);
                  case r:
                    return p(E + 'Milliseconds', 3);
                  default:
                    return this.clone();
                }
              }),
              (v.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (v.$set = function (e, t) {
                var a,
                  l = D.p(e),
                  d = 'set' + (this.$u ? 'UTC' : ''),
                  h = ((a = {}),
                  (a[i] = d + 'Date'),
                  (a[f] = d + 'Date'),
                  (a[s] = d + 'Month'),
                  (a[c] = d + 'FullYear'),
                  (a[o] = d + 'Hours'),
                  (a[u] = d + 'Minutes'),
                  (a[r] = d + 'Seconds'),
                  (a[n] = d + 'Milliseconds'),
                  a)[l],
                  p = l === i ? this.$D + (t - this.$W) : t;
                if (l === s || l === c) {
                  var g = this.clone().set(f, 1);
                  g.$d[h](p), g.init(), (this.$d = g.set(f, Math.min(this.$D, g.daysInMonth())).$d);
                } else h && this.$d[h](p);
                return this.init(), this;
              }),
              (v.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (v.get = function (e) {
                return this[D.p(e)]();
              }),
              (v.add = function (n, l) {
                var f,
                  d = this;
                n = Number(n);
                var h = D.p(l),
                  p = function (e) {
                    var t = w(d);
                    return D.w(t.date(t.date() + Math.round(e * n)), d);
                  };
                if (h === s) return this.set(s, this.$M + n);
                if (h === c) return this.set(c, this.$y + n);
                if (h === i) return p(1);
                if (h === a) return p(7);
                var g = ((f = {}), (f[u] = e), (f[o] = t), (f[r] = 1e3), f)[h] || 1,
                  v = this.$d.getTime() + n * g;
                return D.w(v, this);
              }),
              (v.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (v.format = function (e) {
                var t = this,
                  n = this.$locale();
                if (!this.isValid()) return n.invalidDate || d;
                var r = e || 'YYYY-MM-DDTHH:mm:ssZ',
                  u = D.z(this),
                  o = this.$H,
                  i = this.$m,
                  a = this.$M,
                  s = n.weekdays,
                  l = n.months,
                  c = function (e, n, u, o) {
                    return (e && (e[n] || e(t, r))) || u[n].substr(0, o);
                  },
                  f = function (e) {
                    return D.s(o % 12 || 12, e, '0');
                  },
                  h =
                    n.meridiem ||
                    function (e, t, n) {
                      var r = e < 12 ? 'AM' : 'PM';
                      return n ? r.toLowerCase() : r;
                    },
                  g = {
                    YY: String(this.$y).slice(-2),
                    YYYY: this.$y,
                    M: a + 1,
                    MM: D.s(a + 1, 2, '0'),
                    MMM: c(n.monthsShort, a, l, 3),
                    MMMM: c(l, a),
                    D: this.$D,
                    DD: D.s(this.$D, 2, '0'),
                    d: String(this.$W),
                    dd: c(n.weekdaysMin, this.$W, s, 2),
                    ddd: c(n.weekdaysShort, this.$W, s, 3),
                    dddd: s[this.$W],
                    H: String(o),
                    HH: D.s(o, 2, '0'),
                    h: f(1),
                    hh: f(2),
                    a: h(o, i, !0),
                    A: h(o, i, !1),
                    m: String(i),
                    mm: D.s(i, 2, '0'),
                    s: String(this.$s),
                    ss: D.s(this.$s, 2, '0'),
                    SSS: D.s(this.$ms, 3, '0'),
                    Z: u,
                  };
                return r.replace(p, function (e, t) {
                  return t || g[e] || u.replace(':', '');
                });
              }),
              (v.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (v.diff = function (n, f, d) {
                var h,
                  p = D.p(f),
                  g = w(n),
                  v = (g.utcOffset() - this.utcOffset()) * e,
                  y = this - g,
                  E = D.m(this, g);
                return (
                  (E =
                    ((h = {}),
                    (h[c] = E / 12),
                    (h[s] = E),
                    (h[l] = E / 3),
                    (h[a] = (y - v) / 6048e5),
                    (h[i] = (y - v) / 864e5),
                    (h[o] = y / t),
                    (h[u] = y / e),
                    (h[r] = y / 1e3),
                    h)[p] || y),
                  d ? E : D.a(E)
                );
              }),
              (v.daysInMonth = function () {
                return this.endOf(s).$D;
              }),
              (v.$locale = function () {
                return m[this.$L];
              }),
              (v.locale = function (e, t) {
                if (!e) return this.$L;
                var n = this.clone(),
                  r = S(e, t, !0);
                return r && (n.$L = r), n;
              }),
              (v.clone = function () {
                return D.w(this.$d, this);
              }),
              (v.toDate = function () {
                return new Date(this.valueOf());
              }),
              (v.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (v.toISOString = function () {
                return this.$d.toISOString();
              }),
              (v.toString = function () {
                return this.$d.toUTCString();
              }),
              g
            );
          })(),
          C = A.prototype;
        return (
          (w.prototype = C),
          [
            ['$ms', n],
            ['$s', r],
            ['$m', u],
            ['$H', o],
            ['$W', i],
            ['$M', s],
            ['$y', c],
            ['$D', f],
          ].forEach(function (e) {
            C[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (w.extend = function (e, t) {
            return e.$i || (e(t, A, w), (e.$i = !0)), w;
          }),
          (w.locale = S),
          (w.isDayjs = b),
          (w.unix = function (e) {
            return w(1e3 * e);
          }),
          (w.en = m[E]),
          (w.Ls = m),
          (w.p = {}),
          w
        );
      })();
    },
    53879: function (e, t, n) {
      var r = n(87236),
        u = n(6189),
        o = { float: 'cssFloat' },
        i = n(93379);
      function a(e, t, n) {
        var a = o[t];
        if (
          (void 0 === a &&
            (a = (function (e) {
              var t = u(e),
                n = r(t);
              return (o[t] = o[e] = o[n] = n), n;
            })(t)),
          a)
        ) {
          if (void 0 === n) return e.style[a];
          e.style[a] = i(a, n);
        }
      }
      function s(e, t) {
        for (var n in t) t.hasOwnProperty(n) && a(e, n, t[n]);
      }
      function l() {
        2 === arguments.length
          ? 'string' == typeof arguments[1]
            ? (arguments[0].style.cssText = arguments[1])
            : s(arguments[0], arguments[1])
          : a(arguments[0], arguments[1], arguments[2]);
      }
      (e.exports = l),
        (e.exports.set = l),
        (e.exports.get = function (e, t) {
          return Array.isArray(t)
            ? t.reduce(function (t, n) {
                return (t[n] = a(e, n || '')), t;
              }, {})
            : a(e, t || '');
        });
    },
    41143: function (e) {
      'use strict';
      e.exports = function (e, t, n, r, u, o, i, a) {
        if (!e) {
          var s;
          if (void 0 === t)
            s = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            );
          else {
            var l = [n, r, u, o, i, a],
              c = 0;
            (s = new Error(
              t.replace(/%s/g, function () {
                return l[c++];
              }),
            )).name = 'Invariant Violation';
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    75: function (e) {
      (function () {
        var t, n, r, u, o, i;
        'undefined' != typeof performance && null !== performance && performance.now
          ? (e.exports = function () {
              return performance.now();
            })
          : 'undefined' != typeof process && null !== process && process.hrtime
          ? ((e.exports = function () {
              return (t() - o) / 1e6;
            }),
            (n = process.hrtime),
            (u = (t = function () {
              var e;
              return 1e9 * (e = n())[0] + e[1];
            })()),
            (i = 1e9 * process.uptime()),
            (o = u - i))
          : Date.now
          ? ((e.exports = function () {
              return Date.now() - r;
            }),
            (r = Date.now()))
          : ((e.exports = function () {
              return new Date().getTime() - r;
            }),
            (r = new Date().getTime()));
      }.call(this));
    },
    87236: function (e) {
      var t = null,
        n = ['Webkit', 'Moz', 'O', 'ms'];
      e.exports = function (e) {
        t || (t = document.createElement('div'));
        var r = t.style;
        if (e in r) return e;
        for (var u = e.charAt(0).toUpperCase() + e.slice(1), o = n.length; o >= 0; o--) {
          var i = n[o] + u;
          if (i in r) return i;
        }
        return !1;
      };
    },
    54087: function (e, t, n) {
      for (
        var r = n(75),
          u = 'undefined' == typeof window ? n.g : window,
          o = ['moz', 'webkit'],
          i = 'AnimationFrame',
          a = u['request' + i],
          s = u['cancel' + i] || u['cancelRequest' + i],
          l = 0;
        !a && l < o.length;
        l++
      )
        (a = u[o[l] + 'Request' + i]), (s = u[o[l] + 'Cancel' + i] || u[o[l] + 'CancelRequest' + i]);
      if (!a || !s) {
        var c = 0,
          f = 0,
          d = [];
        (a = function (e) {
          if (0 === d.length) {
            var t = r(),
              n = Math.max(0, 16.666666666666668 - (t - c));
            (c = n + t),
              setTimeout(function () {
                var e = d.slice(0);
                d.length = 0;
                for (var t = 0; t < e.length; t++)
                  if (!e[t].cancelled)
                    try {
                      e[t].callback(c);
                    } catch (e) {
                      setTimeout(function () {
                        throw e;
                      }, 0);
                    }
              }, Math.round(n));
          }
          return d.push({ handle: ++f, callback: e, cancelled: !1 }), f;
        }),
          (s = function (e) {
            for (var t = 0; t < d.length; t++) d[t].handle === e && (d[t].cancelled = !0);
          });
      }
      (e.exports = function (e) {
        return a.call(u, e);
      }),
        (e.exports.cancel = function () {
          s.apply(u, arguments);
        }),
        (e.exports.polyfill = function (e) {
          e || (e = u), (e.requestAnimationFrame = a), (e.cancelAnimationFrame = s);
        });
    },
    33485: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
      (t.renderViewDefault = function (e) {
        return o.default.createElement('div', e);
      }),
        (t.renderTrackHorizontalDefault = function (e) {
          var t = e.style,
            n = i(e, ['style']),
            u = r({}, t, { right: 2, bottom: 2, left: 2, borderRadius: 3 });
          return o.default.createElement('div', r({ style: u }, n));
        }),
        (t.renderTrackVerticalDefault = function (e) {
          var t = e.style,
            n = i(e, ['style']),
            u = r({}, t, { right: 2, bottom: 2, top: 2, borderRadius: 3 });
          return o.default.createElement('div', r({ style: u }, n));
        }),
        (t.renderThumbHorizontalDefault = function (e) {
          var t = e.style,
            n = i(e, ['style']),
            u = r({}, t, { cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0,0,0,.2)' });
          return o.default.createElement('div', r({ style: u }, n));
        }),
        (t.renderThumbVerticalDefault = function (e) {
          var t = e.style,
            n = i(e, ['style']),
            u = r({}, t, { cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0,0,0,.2)' });
          return o.default.createElement('div', r({ style: u }, n));
        });
      var u,
        o = (u = n(67294)) && u.__esModule ? u : { default: u };
      function i(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
    },
    36164: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        u = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = n(54087),
        i = y(o),
        a = y(n(53879)),
        s = n(67294),
        l = y(n(45697)),
        c = y(n(77928)),
        f = y(n(66445)),
        d = y(n(18309)),
        h = y(n(51608)),
        p = y(n(43840)),
        g = n(58285),
        v = n(33485);
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function E(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function m(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || ('object' != typeof t && 'function' != typeof t) ? e : t;
      }
      var b = (function (e) {
        function t(e) {
          var n;
          E(this, t);
          for (var r = arguments.length, u = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) u[o - 1] = arguments[o];
          var i = m(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this, e].concat(u)));
          return (
            (i.getScrollLeft = i.getScrollLeft.bind(i)),
            (i.getScrollTop = i.getScrollTop.bind(i)),
            (i.getScrollWidth = i.getScrollWidth.bind(i)),
            (i.getScrollHeight = i.getScrollHeight.bind(i)),
            (i.getClientWidth = i.getClientWidth.bind(i)),
            (i.getClientHeight = i.getClientHeight.bind(i)),
            (i.getValues = i.getValues.bind(i)),
            (i.getThumbHorizontalWidth = i.getThumbHorizontalWidth.bind(i)),
            (i.getThumbVerticalHeight = i.getThumbVerticalHeight.bind(i)),
            (i.getScrollLeftForOffset = i.getScrollLeftForOffset.bind(i)),
            (i.getScrollTopForOffset = i.getScrollTopForOffset.bind(i)),
            (i.scrollLeft = i.scrollLeft.bind(i)),
            (i.scrollTop = i.scrollTop.bind(i)),
            (i.scrollToLeft = i.scrollToLeft.bind(i)),
            (i.scrollToTop = i.scrollToTop.bind(i)),
            (i.scrollToRight = i.scrollToRight.bind(i)),
            (i.scrollToBottom = i.scrollToBottom.bind(i)),
            (i.handleTrackMouseEnter = i.handleTrackMouseEnter.bind(i)),
            (i.handleTrackMouseLeave = i.handleTrackMouseLeave.bind(i)),
            (i.handleHorizontalTrackMouseDown = i.handleHorizontalTrackMouseDown.bind(i)),
            (i.handleVerticalTrackMouseDown = i.handleVerticalTrackMouseDown.bind(i)),
            (i.handleHorizontalThumbMouseDown = i.handleHorizontalThumbMouseDown.bind(i)),
            (i.handleVerticalThumbMouseDown = i.handleVerticalThumbMouseDown.bind(i)),
            (i.handleWindowResize = i.handleWindowResize.bind(i)),
            (i.handleScroll = i.handleScroll.bind(i)),
            (i.handleDrag = i.handleDrag.bind(i)),
            (i.handleDragEnd = i.handleDragEnd.bind(i)),
            (i.state = { didMountUniversal: !1 }),
            i
          );
        }
        return (
          (function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t);
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
          })(t, e),
          u(t, [
            {
              key: 'componentDidMount',
              value: function () {
                this.addListeners(), this.update(), this.componentDidMountUniversal();
              },
            },
            {
              key: 'componentDidMountUniversal',
              value: function () {
                this.props.universal && this.setState({ didMountUniversal: !0 });
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.update();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.removeListeners(),
                  (0, o.cancel)(this.requestFrame),
                  clearTimeout(this.hideTracksTimeout),
                  clearInterval(this.detectScrollingInterval);
              },
            },
            {
              key: 'getScrollLeft',
              value: function () {
                return this.view ? this.view.scrollLeft : 0;
              },
            },
            {
              key: 'getScrollTop',
              value: function () {
                return this.view ? this.view.scrollTop : 0;
              },
            },
            {
              key: 'getScrollWidth',
              value: function () {
                return this.view ? this.view.scrollWidth : 0;
              },
            },
            {
              key: 'getScrollHeight',
              value: function () {
                return this.view ? this.view.scrollHeight : 0;
              },
            },
            {
              key: 'getClientWidth',
              value: function () {
                return this.view ? this.view.clientWidth : 0;
              },
            },
            {
              key: 'getClientHeight',
              value: function () {
                return this.view ? this.view.clientHeight : 0;
              },
            },
            {
              key: 'getValues',
              value: function () {
                var e = this.view || {},
                  t = e.scrollLeft,
                  n = void 0 === t ? 0 : t,
                  r = e.scrollTop,
                  u = void 0 === r ? 0 : r,
                  o = e.scrollWidth,
                  i = void 0 === o ? 0 : o,
                  a = e.scrollHeight,
                  s = void 0 === a ? 0 : a,
                  l = e.clientWidth,
                  c = void 0 === l ? 0 : l,
                  f = e.clientHeight,
                  d = void 0 === f ? 0 : f;
                return {
                  left: n / (i - c) || 0,
                  top: u / (s - d) || 0,
                  scrollLeft: n,
                  scrollTop: u,
                  scrollWidth: i,
                  scrollHeight: s,
                  clientWidth: c,
                  clientHeight: d,
                };
              },
            },
            {
              key: 'getThumbHorizontalWidth',
              value: function () {
                var e = this.props,
                  t = e.thumbSize,
                  n = e.thumbMinSize,
                  r = this.view,
                  u = r.scrollWidth,
                  o = r.clientWidth,
                  i = (0, h.default)(this.trackHorizontal),
                  a = Math.ceil((o / u) * i);
                return i <= a ? 0 : t || Math.max(a, n);
              },
            },
            {
              key: 'getThumbVerticalHeight',
              value: function () {
                var e = this.props,
                  t = e.thumbSize,
                  n = e.thumbMinSize,
                  r = this.view,
                  u = r.scrollHeight,
                  o = r.clientHeight,
                  i = (0, p.default)(this.trackVertical),
                  a = Math.ceil((o / u) * i);
                return i <= a ? 0 : t || Math.max(a, n);
              },
            },
            {
              key: 'getScrollLeftForOffset',
              value: function (e) {
                var t = this.view,
                  n = t.scrollWidth,
                  r = t.clientWidth;
                return (e / ((0, h.default)(this.trackHorizontal) - this.getThumbHorizontalWidth())) * (n - r);
              },
            },
            {
              key: 'getScrollTopForOffset',
              value: function (e) {
                var t = this.view,
                  n = t.scrollHeight,
                  r = t.clientHeight;
                return (e / ((0, p.default)(this.trackVertical) - this.getThumbVerticalHeight())) * (n - r);
              },
            },
            {
              key: 'scrollLeft',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.view && (this.view.scrollLeft = e);
              },
            },
            {
              key: 'scrollTop',
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                this.view && (this.view.scrollTop = e);
              },
            },
            {
              key: 'scrollToLeft',
              value: function () {
                this.view && (this.view.scrollLeft = 0);
              },
            },
            {
              key: 'scrollToTop',
              value: function () {
                this.view && (this.view.scrollTop = 0);
              },
            },
            {
              key: 'scrollToRight',
              value: function () {
                this.view && (this.view.scrollLeft = this.view.scrollWidth);
              },
            },
            {
              key: 'scrollToBottom',
              value: function () {
                this.view && (this.view.scrollTop = this.view.scrollHeight);
              },
            },
            {
              key: 'addListeners',
              value: function () {
                if ('undefined' != typeof document && this.view) {
                  var e = this.view,
                    t = this.trackHorizontal,
                    n = this.trackVertical,
                    r = this.thumbHorizontal,
                    u = this.thumbVertical;
                  e.addEventListener('scroll', this.handleScroll),
                    (0, f.default)() &&
                      (t.addEventListener('mouseenter', this.handleTrackMouseEnter),
                      t.addEventListener('mouseleave', this.handleTrackMouseLeave),
                      t.addEventListener('mousedown', this.handleHorizontalTrackMouseDown),
                      n.addEventListener('mouseenter', this.handleTrackMouseEnter),
                      n.addEventListener('mouseleave', this.handleTrackMouseLeave),
                      n.addEventListener('mousedown', this.handleVerticalTrackMouseDown),
                      r.addEventListener('mousedown', this.handleHorizontalThumbMouseDown),
                      u.addEventListener('mousedown', this.handleVerticalThumbMouseDown),
                      window.addEventListener('resize', this.handleWindowResize));
                }
              },
            },
            {
              key: 'removeListeners',
              value: function () {
                if ('undefined' != typeof document && this.view) {
                  var e = this.view,
                    t = this.trackHorizontal,
                    n = this.trackVertical,
                    r = this.thumbHorizontal,
                    u = this.thumbVertical;
                  e.removeEventListener('scroll', this.handleScroll),
                    (0, f.default)() &&
                      (t.removeEventListener('mouseenter', this.handleTrackMouseEnter),
                      t.removeEventListener('mouseleave', this.handleTrackMouseLeave),
                      t.removeEventListener('mousedown', this.handleHorizontalTrackMouseDown),
                      n.removeEventListener('mouseenter', this.handleTrackMouseEnter),
                      n.removeEventListener('mouseleave', this.handleTrackMouseLeave),
                      n.removeEventListener('mousedown', this.handleVerticalTrackMouseDown),
                      r.removeEventListener('mousedown', this.handleHorizontalThumbMouseDown),
                      u.removeEventListener('mousedown', this.handleVerticalThumbMouseDown),
                      window.removeEventListener('resize', this.handleWindowResize),
                      this.teardownDragging());
                }
              },
            },
            {
              key: 'handleScroll',
              value: function (e) {
                var t = this,
                  n = this.props,
                  r = n.onScroll,
                  u = n.onScrollFrame;
                r && r(e),
                  this.update(function (e) {
                    var n = e.scrollLeft,
                      r = e.scrollTop;
                    (t.viewScrollLeft = n), (t.viewScrollTop = r), u && u(e);
                  }),
                  this.detectScrolling();
              },
            },
            {
              key: 'handleScrollStart',
              value: function () {
                var e = this.props.onScrollStart;
                e && e(), this.handleScrollStartAutoHide();
              },
            },
            {
              key: 'handleScrollStartAutoHide',
              value: function () {
                this.props.autoHide && this.showTracks();
              },
            },
            {
              key: 'handleScrollStop',
              value: function () {
                var e = this.props.onScrollStop;
                e && e(), this.handleScrollStopAutoHide();
              },
            },
            {
              key: 'handleScrollStopAutoHide',
              value: function () {
                this.props.autoHide && this.hideTracks();
              },
            },
            {
              key: 'handleWindowResize',
              value: function () {
                (0, f.default)(!1), this.forceUpdate();
              },
            },
            {
              key: 'handleHorizontalTrackMouseDown',
              value: function (e) {
                e.preventDefault();
                var t = e.target,
                  n = e.clientX,
                  r = t.getBoundingClientRect().left,
                  u = this.getThumbHorizontalWidth(),
                  o = Math.abs(r - n) - u / 2;
                this.view.scrollLeft = this.getScrollLeftForOffset(o);
              },
            },
            {
              key: 'handleVerticalTrackMouseDown',
              value: function (e) {
                e.preventDefault();
                var t = e.target,
                  n = e.clientY,
                  r = t.getBoundingClientRect().top,
                  u = this.getThumbVerticalHeight(),
                  o = Math.abs(r - n) - u / 2;
                this.view.scrollTop = this.getScrollTopForOffset(o);
              },
            },
            {
              key: 'handleHorizontalThumbMouseDown',
              value: function (e) {
                e.preventDefault(), this.handleDragStart(e);
                var t = e.target,
                  n = e.clientX,
                  r = t.offsetWidth,
                  u = t.getBoundingClientRect().left;
                this.prevPageX = r - (n - u);
              },
            },
            {
              key: 'handleVerticalThumbMouseDown',
              value: function (e) {
                e.preventDefault(), this.handleDragStart(e);
                var t = e.target,
                  n = e.clientY,
                  r = t.offsetHeight,
                  u = t.getBoundingClientRect().top;
                this.prevPageY = r - (n - u);
              },
            },
            {
              key: 'setupDragging',
              value: function () {
                (0, a.default)(document.body, g.disableSelectStyle),
                  document.addEventListener('mousemove', this.handleDrag),
                  document.addEventListener('mouseup', this.handleDragEnd),
                  (document.onselectstart = d.default);
              },
            },
            {
              key: 'teardownDragging',
              value: function () {
                (0, a.default)(document.body, g.disableSelectStyleReset),
                  document.removeEventListener('mousemove', this.handleDrag),
                  document.removeEventListener('mouseup', this.handleDragEnd),
                  (document.onselectstart = void 0);
              },
            },
            {
              key: 'handleDragStart',
              value: function (e) {
                (this.dragging = !0), e.stopImmediatePropagation(), this.setupDragging();
              },
            },
            {
              key: 'handleDrag',
              value: function (e) {
                if (this.prevPageX) {
                  var t = e.clientX,
                    n =
                      -this.trackHorizontal.getBoundingClientRect().left +
                      t -
                      (this.getThumbHorizontalWidth() - this.prevPageX);
                  this.view.scrollLeft = this.getScrollLeftForOffset(n);
                }
                if (this.prevPageY) {
                  var r = e.clientY,
                    u =
                      -this.trackVertical.getBoundingClientRect().top +
                      r -
                      (this.getThumbVerticalHeight() - this.prevPageY);
                  this.view.scrollTop = this.getScrollTopForOffset(u);
                }
                return !1;
              },
            },
            {
              key: 'handleDragEnd',
              value: function () {
                (this.dragging = !1),
                  (this.prevPageX = this.prevPageY = 0),
                  this.teardownDragging(),
                  this.handleDragEndAutoHide();
              },
            },
            {
              key: 'handleDragEndAutoHide',
              value: function () {
                this.props.autoHide && this.hideTracks();
              },
            },
            {
              key: 'handleTrackMouseEnter',
              value: function () {
                (this.trackMouseOver = !0), this.handleTrackMouseEnterAutoHide();
              },
            },
            {
              key: 'handleTrackMouseEnterAutoHide',
              value: function () {
                this.props.autoHide && this.showTracks();
              },
            },
            {
              key: 'handleTrackMouseLeave',
              value: function () {
                (this.trackMouseOver = !1), this.handleTrackMouseLeaveAutoHide();
              },
            },
            {
              key: 'handleTrackMouseLeaveAutoHide',
              value: function () {
                this.props.autoHide && this.hideTracks();
              },
            },
            {
              key: 'showTracks',
              value: function () {
                clearTimeout(this.hideTracksTimeout),
                  (0, a.default)(this.trackHorizontal, { opacity: 1 }),
                  (0, a.default)(this.trackVertical, { opacity: 1 });
              },
            },
            {
              key: 'hideTracks',
              value: function () {
                var e = this;
                if (!this.dragging && !this.scrolling && !this.trackMouseOver) {
                  var t = this.props.autoHideTimeout;
                  clearTimeout(this.hideTracksTimeout),
                    (this.hideTracksTimeout = setTimeout(function () {
                      (0, a.default)(e.trackHorizontal, { opacity: 0 }),
                        (0, a.default)(e.trackVertical, { opacity: 0 });
                    }, t));
                }
              },
            },
            {
              key: 'detectScrolling',
              value: function () {
                var e = this;
                this.scrolling ||
                  ((this.scrolling = !0),
                  this.handleScrollStart(),
                  (this.detectScrollingInterval = setInterval(function () {
                    e.lastViewScrollLeft === e.viewScrollLeft &&
                      e.lastViewScrollTop === e.viewScrollTop &&
                      (clearInterval(e.detectScrollingInterval), (e.scrolling = !1), e.handleScrollStop()),
                      (e.lastViewScrollLeft = e.viewScrollLeft),
                      (e.lastViewScrollTop = e.viewScrollTop);
                  }, 100)));
              },
            },
            {
              key: 'raf',
              value: function (e) {
                var t = this;
                this.requestFrame && i.default.cancel(this.requestFrame),
                  (this.requestFrame = (0, i.default)(function () {
                    (t.requestFrame = void 0), e();
                  }));
              },
            },
            {
              key: 'update',
              value: function (e) {
                var t = this;
                this.raf(function () {
                  return t._update(e);
                });
              },
            },
            {
              key: '_update',
              value: function (e) {
                var t = this.props,
                  n = t.onUpdate,
                  r = t.hideTracksWhenNotNeeded,
                  u = this.getValues();
                if ((0, f.default)()) {
                  var o = u.scrollLeft,
                    i = u.clientWidth,
                    s = u.scrollWidth,
                    l = (0, h.default)(this.trackHorizontal),
                    c = this.getThumbHorizontalWidth(),
                    d = { width: c, transform: 'translateX(' + (o / (s - i)) * (l - c) + 'px)' },
                    g = u.scrollTop,
                    v = u.clientHeight,
                    y = u.scrollHeight,
                    E = (0, p.default)(this.trackVertical),
                    m = this.getThumbVerticalHeight(),
                    b = { height: m, transform: 'translateY(' + (g / (y - v)) * (E - m) + 'px)' };
                  if (r) {
                    var S = { visibility: s > i ? 'visible' : 'hidden' },
                      w = { visibility: y > v ? 'visible' : 'hidden' };
                    (0, a.default)(this.trackHorizontal, S), (0, a.default)(this.trackVertical, w);
                  }
                  (0, a.default)(this.thumbHorizontal, d), (0, a.default)(this.thumbVertical, b);
                }
                n && n(u), 'function' == typeof e && e(u);
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = (0, f.default)(),
                  n = this.props,
                  u = (n.onScroll, n.onScrollFrame, n.onScrollStart, n.onScrollStop, n.onUpdate, n.renderView),
                  o = n.renderTrackHorizontal,
                  i = n.renderTrackVertical,
                  a = n.renderThumbHorizontal,
                  l = n.renderThumbVertical,
                  d = n.tagName,
                  h = (n.hideTracksWhenNotNeeded, n.autoHide),
                  p = (n.autoHideTimeout, n.autoHideDuration),
                  v = (n.thumbSize, n.thumbMinSize, n.universal),
                  y = n.autoHeight,
                  E = n.autoHeightMin,
                  m = n.autoHeightMax,
                  b = n.style,
                  S = n.children,
                  w = (function (e, t) {
                    var n = {};
                    for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
                    return n;
                  })(n, [
                    'onScroll',
                    'onScrollFrame',
                    'onScrollStart',
                    'onScrollStop',
                    'onUpdate',
                    'renderView',
                    'renderTrackHorizontal',
                    'renderTrackVertical',
                    'renderThumbHorizontal',
                    'renderThumbVertical',
                    'tagName',
                    'hideTracksWhenNotNeeded',
                    'autoHide',
                    'autoHideTimeout',
                    'autoHideDuration',
                    'thumbSize',
                    'thumbMinSize',
                    'universal',
                    'autoHeight',
                    'autoHeightMin',
                    'autoHeightMax',
                    'style',
                    'children',
                  ]),
                  D = this.state.didMountUniversal,
                  A = r(
                    {},
                    g.containerStyleDefault,
                    y && r({}, g.containerStyleAutoHeight, { minHeight: E, maxHeight: m }),
                    b,
                  ),
                  C = r(
                    {},
                    g.viewStyleDefault,
                    { marginRight: t ? -t : 0, marginBottom: t ? -t : 0 },
                    y &&
                      r({}, g.viewStyleAutoHeight, {
                        minHeight: (0, c.default)(E) ? 'calc(' + E + ' + ' + t + 'px)' : E + t,
                        maxHeight: (0, c.default)(m) ? 'calc(' + m + ' + ' + t + 'px)' : m + t,
                      }),
                    y && v && !D && { minHeight: E, maxHeight: m },
                    v && !D && g.viewStyleUniversalInitial,
                  ),
                  O = { transition: 'opacity ' + p + 'ms', opacity: 0 },
                  T = r({}, g.trackHorizontalStyleDefault, h && O, (!t || (v && !D)) && { display: 'none' }),
                  F = r({}, g.trackVerticalStyleDefault, h && O, (!t || (v && !D)) && { display: 'none' });
                return (0, s.createElement)(
                  d,
                  r({}, w, {
                    style: A,
                    ref: function (t) {
                      e.container = t;
                    },
                  }),
                  [
                    (0, s.cloneElement)(
                      u({ style: C }),
                      {
                        key: 'view',
                        ref: function (t) {
                          e.view = t;
                        },
                      },
                      S,
                    ),
                    (0, s.cloneElement)(
                      o({ style: T }),
                      {
                        key: 'trackHorizontal',
                        ref: function (t) {
                          e.trackHorizontal = t;
                        },
                      },
                      (0, s.cloneElement)(a({ style: g.thumbHorizontalStyleDefault }), {
                        ref: function (t) {
                          e.thumbHorizontal = t;
                        },
                      }),
                    ),
                    (0, s.cloneElement)(
                      i({ style: F }),
                      {
                        key: 'trackVertical',
                        ref: function (t) {
                          e.trackVertical = t;
                        },
                      },
                      (0, s.cloneElement)(l({ style: g.thumbVerticalStyleDefault }), {
                        ref: function (t) {
                          e.thumbVertical = t;
                        },
                      }),
                    ),
                  ],
                );
              },
            },
          ]),
          t
        );
      })(s.Component);
      (t.default = b),
        (b.propTypes = {
          onScroll: l.default.func,
          onScrollFrame: l.default.func,
          onScrollStart: l.default.func,
          onScrollStop: l.default.func,
          onUpdate: l.default.func,
          renderView: l.default.func,
          renderTrackHorizontal: l.default.func,
          renderTrackVertical: l.default.func,
          renderThumbHorizontal: l.default.func,
          renderThumbVertical: l.default.func,
          tagName: l.default.string,
          thumbSize: l.default.number,
          thumbMinSize: l.default.number,
          hideTracksWhenNotNeeded: l.default.bool,
          autoHide: l.default.bool,
          autoHideTimeout: l.default.number,
          autoHideDuration: l.default.number,
          autoHeight: l.default.bool,
          autoHeightMin: l.default.oneOfType([l.default.number, l.default.string]),
          autoHeightMax: l.default.oneOfType([l.default.number, l.default.string]),
          universal: l.default.bool,
          style: l.default.object,
          children: l.default.node,
        }),
        (b.defaultProps = {
          renderView: v.renderViewDefault,
          renderTrackHorizontal: v.renderTrackHorizontalDefault,
          renderTrackVertical: v.renderTrackVerticalDefault,
          renderThumbHorizontal: v.renderThumbHorizontalDefault,
          renderThumbVertical: v.renderThumbVerticalDefault,
          tagName: 'div',
          thumbMinSize: 30,
          hideTracksWhenNotNeeded: !1,
          autoHide: !1,
          autoHideTimeout: 1e3,
          autoHideDuration: 200,
          autoHeight: !1,
          autoHeightMin: 0,
          autoHeightMax: 200,
          universal: !1,
        });
    },
    58285: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.containerStyleDefault = { position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }),
        (t.containerStyleAutoHeight = { height: 'auto' }),
        (t.viewStyleDefault = {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'scroll',
          WebkitOverflowScrolling: 'touch',
        }),
        (t.viewStyleAutoHeight = { position: 'relative', top: void 0, left: void 0, right: void 0, bottom: void 0 }),
        (t.viewStyleUniversalInitial = { overflow: 'hidden', marginRight: 0, marginBottom: 0 }),
        (t.trackHorizontalStyleDefault = { position: 'absolute', height: 6 }),
        (t.trackVerticalStyleDefault = { position: 'absolute', width: 6 }),
        (t.thumbHorizontalStyleDefault = { position: 'relative', display: 'block', height: '100%' }),
        (t.thumbVerticalStyleDefault = { position: 'relative', display: 'block', width: '100%' }),
        (t.disableSelectStyle = { userSelect: 'none' }),
        (t.disableSelectStyleReset = { userSelect: '' });
    },
    86658: function (e, t, n) {
      'use strict';
      t.$B = void 0;
      var r,
        u = (r = n(36164)) && r.__esModule ? r : { default: r };
      u.default, (t.$B = u.default);
    },
    43840: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var t = e.clientHeight,
            n = getComputedStyle(e),
            r = n.paddingTop,
            u = n.paddingBottom;
          return t - parseFloat(r) - parseFloat(u);
        });
    },
    51608: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          var t = e.clientWidth,
            n = getComputedStyle(e),
            r = n.paddingLeft,
            u = n.paddingRight;
          return t - parseFloat(r) - parseFloat(u);
        });
    },
    66445: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (e && !1 !== o) return o;
          if ('undefined' != typeof document) {
            var t = document.createElement('div');
            (0, u.default)(t, {
              width: 100,
              height: 100,
              position: 'absolute',
              top: -9999,
              overflow: 'scroll',
              MsOverflowStyle: 'scrollbar',
            }),
              document.body.appendChild(t),
              (o = t.offsetWidth - t.clientWidth),
              document.body.removeChild(t);
          } else o = 0;
          return o || 0;
        });
      var r,
        u = (r = n(53879)) && r.__esModule ? r : { default: r },
        o = !1;
    },
    77928: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e) {
          return 'string' == typeof e;
        });
    },
    18309: function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function () {
          return !1;
        });
    },
    32034: function (e, t, n) {
      'use strict';
      function r(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
              return n;
            }
          })(e) ||
          (function (e) {
            if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e))
              return Array.from(e);
          })(e) ||
          (function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      function u() {
        return (
          (u =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          u.apply(this, arguments)
        );
      }
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
      }
      function s(e) {
        return (
          (s =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          s(e)
        );
      }
      function l(e) {
        return (
          (l =
            'function' == typeof Symbol && 'symbol' === s(Symbol.iterator)
              ? function (e) {
                  return s(e);
                }
              : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? 'symbol'
                    : s(e);
                }),
          l(e)
        );
      }
      function c(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
      }
      function f(e, t) {
        return !t || ('object' !== l(t) && 'function' != typeof t) ? c(e) : t;
      }
      function d(e) {
        return (
          (d = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          d(e)
        );
      }
      function h(e, t) {
        return (
          (h =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          h(e, t)
        );
      }
      function p(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && h(e, t);
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      n.d(t, {
        p: function () {
          return Ie;
        },
        r: function () {
          return $e;
        },
      });
      var v = n(67294),
        y = n(41143),
        E = n.n(y);
      function m(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function S(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return b(e);
          })(e) ||
          (function (e) {
            if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return b(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === n && e.constructor && (n = e.constructor.name),
                'Map' === n || 'Set' === n
                  ? Array.from(e)
                  : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? b(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      var w = function (e) {
          return e === Object(e) ? Object.keys(e) : [];
        },
        D = function (e) {
          return e === Object(e) ? Object.values(e) : [];
        };
      function A(e, t) {
        var n = Object.assign({}, e);
        return (
          T(e) &&
            T(t) &&
            w(t).forEach(function (r) {
              T(t[r]) && r in e ? (n[r] = A(e[r], t[r])) : Object.assign(n, m({}, r, t[r]));
            }),
          n
        );
      }
      var C = function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return n.reduce(function (e, t) {
            return A(e, t);
          }, e);
        },
        O = function (e, t) {
          var n = Object.assign({}, e);
          if (t) for (var r = 0; r < t.length; r++) delete n[t[r]];
          return n;
        },
        T = function (e) {
          return !(e !== Object(e) || e instanceof Date || Array.isArray(e));
        },
        F = function (e) {
          return (e || []).filter(Boolean);
        },
        k = function (e) {
          return '&' === e[0];
        },
        x = function (e) {
          return !k(e);
        },
        M = function (e) {
          return e.replace(/-(\w)/g, function (e, t) {
            return t.toUpperCase();
          });
        },
        H = function (e) {
          for (
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
              n = w(e),
              r = {},
              u = 0,
              o = n.length;
            u < o;
            u += 1
          ) {
            var i = n[u],
              a =
                '[object Object]' !== Object.prototype.toString.call(e[i]) ||
                ':' === i[0] ||
                '@' === i[0] ||
                t.indexOf(i) >= 0;
            a && (r[i] = e[i]);
          }
          return r;
        },
        L = function (e, t) {
          for (var n = t.map(M), r = w(e), u = {}, o = 0, i = r.length; o < i; o += 1) {
            var a = r[o];
            (t.indexOf(a) >= 0 || n.indexOf(M(a)) >= 0) && (u[a] = e[a]);
          }
          return u;
        },
        P = function e(t, n) {
          for (
            var r = C.apply(void 0, [{}, O(t, n)].concat(S(D(L(t, n))))), u = w(r).filter(k), o = 0, i = u.length;
            o < i;
            o += 1
          ) {
            var a = u[o],
              s = e(r[a], n);
            n.indexOf(a) >= 0 ? (delete r[a], (r = C({}, r, s))) : (r[a] = s);
          }
          return r;
        };
      function j(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(n), !0).forEach(function (t) {
                m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var z = ['animationName'],
        _ = function (e) {
          var t = e.style,
            n = e.className;
          return B(B({}, t ? { style: H(t, z) } : {}), n ? { className: n } : {});
        },
        $ = (0, v.createContext)(_),
        R =
          ($.Provider,
          function (e) {
            if (!e) return [];
            if ('string' == typeof e) return [e];
            if (!Array.isArray(e)) {
              var t = e;
              return w(e).reduce(function (e, n) {
                return e.concat(t[n] ? [n] : []);
              }, []);
            }
            return e;
          }),
        I = {},
        N = function (e) {
          return function (t, n) {
            var r,
              u = n || I;
            (e.memoize = e.memoize || new WeakMap()),
              e.memoize.has(u) ? (r = e.memoize.get(u)) : ((r = {}), e.memoize.set(u, r));
            var o = R(t).join(' ');
            return o in r ? r[o] : (r[o] = e(t || [], n));
          };
        };
      function V(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function W(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(n), !0).forEach(function (t) {
                m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var q = function (e) {
          var t = e && w(e)[0];
          return t && t.split('__')[0].split('--')[0];
        },
        U = function (e, t, n) {
          if (e) {
            var r = e.split(' ')[0],
              u = [].concat(
                S(
                  0 === t.length
                    ? n.map(function (e) {
                        return ''.concat(r, '--').concat(e.substring(1));
                      })
                    : [],
                ),
                S(
                  t.map(function (e) {
                    return ''.concat(r, '__').concat(e);
                  }),
                ),
              );
            return 0 === t.length ? [e].concat(S(u)) : u;
          }
        },
        Y = function e(t) {
          var n = t.style,
            r = t.className,
            u = t.classNames,
            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
            i = r || q(u) || (null == n ? void 0 : n.className),
            a =
              'function' == typeof n
                ? n
                : N(function (t, r) {
                    var a = R(t);
                    E()(
                      Array.isArray(a),
                      'First parameter must be a string, an array of strings, a plain object with boolean values, or a falsy value.',
                    ),
                      E()(!r || T(r), 'Optional second parameter must be a plain object.');
                    var s = a.filter(k),
                      l = a.filter(x),
                      c =
                        l.length > 0
                          ? function (e) {
                              return D(L(e, l));
                            }
                          : function (e) {
                              return [e];
                            },
                      f = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return c(P(e, s));
                      },
                      d = U(i, l, s);
                    return e(
                      W(
                        W(
                          W({}, (n || r) && { style: C.apply(void 0, [{}].concat(S(f(r)), S(f(n)))) }),
                          d && { className: d.join(' ') },
                        ),
                        u && { classNames: u },
                      ),
                      o,
                    );
                  }),
            s = W({}, 'function' == typeof n ? n : { style: n }),
            l = S(new Set([].concat(S(s.className ? s.className.split(' ') : []), S(i ? i.split(' ') : [])))),
            c = u
              ? F(
                  l.map(function (e) {
                    return u[e];
                  }),
                )
              : l,
            f = o(W(W({}, s), c.length > 0 ? { className: c.join(' ') } : {}));
          return Object.assign(a, f), a;
        },
        Z = function (e, t, n) {
          var r = t.style,
            u = t.className,
            o = t.classNames,
            i = (0, v.useContext)($);
          return (0, v.useMemo)(
            function () {
              return Y({ style: r, className: u, classNames: o }, i);
            },
            [r, u, o, i],
          )(n, e);
        };
      function X(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(n), !0).forEach(function (t) {
                m(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : X(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var K = n(45697),
        Q = n.n(K),
        G = n(73935),
        ee = function (e) {
          return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        },
        te = '__id__',
        ne = '__display__',
        re = function (e, t) {
          E()('id' === t || 'display' === t, 'Second arg must be either "id" or "display", got: "'.concat(t, '"'));
          var n = e.indexOf(ne),
            r = e.indexOf(te);
          return (
            n < 0 && (n = null),
            r < 0 && (r = null),
            E()(
              null !== n || null !== r,
              "The markup '".concat(e, "' does not contain either of the placeholders '__id__' or '__display__'"),
            ),
            null !== n && null !== r ? (('id' === t && r <= n) || ('display' === t && n <= r) ? 0 : 1) : 0
          );
        },
        ue = function (e) {
          var t = /^\/(.+)\/(\w+)?$/;
          return new RegExp(
            e
              .map(function (e) {
                var n,
                  r,
                  u =
                    ((n = t.exec(e.toString())),
                    (r = 3),
                    (function (e) {
                      if (Array.isArray(e)) return e;
                    })(n) ||
                      (function (e, t) {
                        var n = [],
                          r = !0,
                          u = !1,
                          o = void 0;
                        try {
                          for (
                            var i, a = e[Symbol.iterator]();
                            !(r = (i = a.next()).done) && (n.push(i.value), !t || n.length !== t);
                            r = !0
                          );
                        } catch (e) {
                          (u = !0), (o = e);
                        } finally {
                          try {
                            r || null == a.return || a.return();
                          } finally {
                            if (u) throw o;
                          }
                        }
                        return n;
                      })(n, r) ||
                      (function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance');
                      })()),
                  o = u[1],
                  i = u[2];
                return (
                  E()(
                    !i,
                    'RegExp flags are not supported. Change /'.concat(o, '/').concat(i, ' into /').concat(o, '/'),
                  ),
                  '('.concat(o, ')')
                );
              })
              .join('|'),
            'g',
          );
        },
        oe = function (e) {
          var t = 0;
          return e.indexOf('__id__') >= 0 && t++, e.indexOf('__display__') >= 0 && t++, t;
        },
        ie = function () {},
        ae = function (e, t, n) {
          for (
            var r,
              u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ie,
              o = ue(
                t.map(function (e) {
                  return e.regex;
                }),
              ),
              i = 2,
              a = t.map(function (e) {
                var t = e.markup,
                  n = i;
                return (i += oe(t) + 1), n;
              }),
              s = 0,
              l = 0;
            null !== (r = o.exec(e));

          ) {
            var c = a.find(function (e) {
                return !!r[e];
              }),
              f = a.indexOf(c),
              d = t[f],
              h = d.markup,
              p = d.displayTransform,
              g = c + re(h, 'id'),
              v = c + re(h, 'display'),
              y = r[g],
              E = p(y, r[v]),
              m = e.substring(s, r.index);
            u(m, s, l), (l += m.length), n(r[0], r.index, l, y, E, f, s), (l += E.length), (s = o.lastIndex);
          }
          s < e.length && u(e.substring(s), s, l);
        },
        se = function (e, t) {
          var n = '';
          return (
            ae(
              e,
              t,
              function (e, t, r, u, o) {
                n += o;
              },
              function (e) {
                n += e;
              },
            ),
            n
          );
        },
        le = function (e, t, n) {
          var r,
            u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'START';
          if ('number' != typeof n) return n;
          var o = function (e, t, u) {
              void 0 === r && u + e.length >= n && (r = t + n - u);
            },
            i = function (e, t, o, i, a, s, l) {
              void 0 === r && o + a.length > n && (r = 'NULL' === u ? null : t + ('END' === u ? e.length : 0));
            };
          return ae(e, t, i, o), void 0 === r ? e.length : r;
        },
        ce = function (e, t, n, r) {
          return e.substring(0, t) + r + e.substring(n);
        },
        fe = function (e, t) {
          var n = [];
          return (
            ae(e, t, function (e, t, r, u, o, i, a) {
              n.push({ id: u, display: o, childIndex: i, index: t, plainTextIndex: r });
            }),
            n
          );
        },
        de = function (e, t) {
          return ''.concat(e, '-').concat(t);
        },
        he = function (e) {
          return Object.values(e).reduce(function (e, t) {
            return e + t.results.length;
          }, 0);
        },
        pe = function (e) {
          var t = ee(e),
            n = e[e.indexOf(ne) + ne.length],
            r = e[e.indexOf(te) + te.length];
          return new RegExp(
            t.replace(ne, '([^'.concat(ee(n || ''), ']+?)')).replace(te, '([^'.concat(ee(r || ''), ']+?)')),
          );
        },
        ge = function (e) {
          return v.Children.toArray(e).map(function (e) {
            var t = e.props,
              n = t.markup,
              r = t.regex,
              u = t.displayTransform;
            return {
              markup: n,
              regex: r ? ve(r, n) : pe(n),
              displayTransform:
                u ||
                function (e, t) {
                  return t || e;
                },
            };
          });
        },
        ve = function (e, t) {
          var n = new RegExp(e.toString() + '|').exec('').length - 1,
            r = oe(t);
          return (
            E()(
              n === r,
              'Number of capturing groups in RegExp '
                .concat(e.toString(), ' (')
                .concat(n, ") does not match the number of placeholders in the markup '")
                .concat(t, "' (")
                .concat(r, ')'),
            ),
            e
          );
        },
        ye = [
          {
            base: 'A',
            letters:
              /(&#65;|&#9398;|&#65313;|&#192;|&#193;|&#194;|&#7846;|&#7844;|&#7850;|&#7848;|&#195;|&#256;|&#258;|&#7856;|&#7854;|&#7860;|&#7858;|&#550;|&#480;|&#196;|&#478;|&#7842;|&#197;|&#506;|&#461;|&#512;|&#514;|&#7840;|&#7852;|&#7862;|&#7680;|&#260;|&#570;|&#11375;|[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F])/g,
          },
          { base: 'AA', letters: /(&#42802;|[\uA732])/g },
          { base: 'AE', letters: /(&#198;|&#508;|&#482;|[\u00C6\u01FC\u01E2])/g },
          { base: 'AO', letters: /(&#42804;|[\uA734])/g },
          { base: 'AU', letters: /(&#42806;|[\uA736])/g },
          { base: 'AV', letters: /(&#42808;|&#42810;|[\uA738\uA73A])/g },
          { base: 'AY', letters: /(&#42812;|[\uA73C])/g },
          {
            base: 'B',
            letters:
              /(&#66;|&#9399;|&#65314;|&#7682;|&#7684;|&#7686;|&#579;|&#386;|&#385;|[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181])/g,
          },
          {
            base: 'C',
            letters:
              /(&#67;|&#9400;|&#65315;|&#262;|&#264;|&#266;|&#268;|&#199;|&#7688;|&#391;|&#571;|&#42814;|[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E])/g,
          },
          {
            base: 'D',
            letters:
              /(&#68;|&#9401;|&#65316;|&#7690;|&#270;|&#7692;|&#7696;|&#7698;|&#7694;|&#272;|&#395;|&#394;|&#393;|&#42873;|&#208;|[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0])/g,
          },
          { base: 'DZ', letters: /(&#497;|&#452;|[\u01F1\u01C4])/g },
          { base: 'Dz', letters: /(&#498;|&#453;|[\u01F2\u01C5])/g },
          {
            base: 'E',
            letters:
              /(&#69;|&#9402;|&#65317;|&#200;|&#201;|&#202;|&#7872;|&#7870;|&#7876;|&#7874;|&#7868;|&#274;|&#7700;|&#7702;|&#276;|&#278;|&#203;|&#7866;|&#282;|&#516;|&#518;|&#7864;|&#7878;|&#552;|&#7708;|&#280;|&#7704;|&#7706;|&#400;|&#398;|[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E])/g,
          },
          {
            base: 'F',
            letters: /(&#70;|&#9403;|&#65318;|&#7710;|&#401;|&#42875;|[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B])/g,
          },
          {
            base: 'G',
            letters:
              /(&#71;|&#9404;|&#65319;|&#500;|&#284;|&#7712;|&#286;|&#288;|&#486;|&#290;|&#484;|&#403;|&#42912;|&#42877;|&#42878;|[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E])/g,
          },
          {
            base: 'H',
            letters:
              /(&#72;|&#9405;|&#65320;|&#292;|&#7714;|&#7718;|&#542;|&#7716;|&#7720;|&#7722;|&#294;|&#11367;|&#11381;|&#42893;|[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D])/g,
          },
          {
            base: 'I',
            letters:
              /(&#73;|&#9406;|&#65321;|&#204;|&#205;|&#206;|&#296;|&#298;|&#300;|&#304;|&#207;|&#7726;|&#7880;|&#463;|&#520;|&#522;|&#7882;|&#302;|&#7724;|&#407;|[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197])/g,
          },
          { base: 'J', letters: /(&#74;|&#9407;|&#65322;|&#308;|&#584;|[\u004A\u24BF\uFF2A\u0134\u0248])/g },
          {
            base: 'K',
            letters:
              /(&#75;|&#9408;|&#65323;|&#7728;|&#488;|&#7730;|&#310;|&#7732;|&#408;|&#11369;|&#42816;|&#42818;|&#42820;|&#42914;|[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2])/g,
          },
          {
            base: 'L',
            letters:
              /(&#76;|&#9409;|&#65324;|&#319;|&#313;|&#317;|&#7734;|&#7736;|&#315;|&#7740;|&#7738;|&#321;|&#573;|&#11362;|&#11360;|&#42824;|&#42822;|&#42880;|[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780])/g,
          },
          { base: 'LJ', letters: /(&#455;|[\u01C7])/g },
          { base: 'Lj', letters: /(&#456;|[\u01C8])/g },
          {
            base: 'M',
            letters:
              /(&#77;|&#9410;|&#65325;|&#7742;|&#7744;|&#7746;|&#11374;|&#412;|[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C])/g,
          },
          {
            base: 'N',
            letters:
              /(&#78;|&#9411;|&#65326;|&#504;|&#323;|&#209;|&#7748;|&#327;|&#7750;|&#325;|&#7754;|&#7752;|&#544;|&#413;|&#42896;|&#42916;|&#330;|[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4\u014A])/g,
          },
          { base: 'NJ', letters: /(&#458;|[\u01CA])/g },
          { base: 'Nj', letters: /(&#459;|[\u01CB])/g },
          {
            base: 'O',
            letters:
              /(&#79;|&#9412;|&#65327;|&#210;|&#211;|&#212;|&#7890;|&#7888;|&#7894;|&#7892;|&#213;|&#7756;|&#556;|&#7758;|&#332;|&#7760;|&#7762;|&#334;|&#558;|&#560;|&#214;|&#554;|&#7886;|&#336;|&#465;|&#524;|&#526;|&#416;|&#7900;|&#7898;|&#7904;|&#7902;|&#7906;|&#7884;|&#7896;|&#490;|&#492;|&#216;|&#510;|&#390;|&#415;|&#42826;|&#42828;|[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C])/g,
          },
          { base: 'OE', letters: /(&#338;|[\u0152])/g },
          { base: 'OI', letters: /(&#418;|[\u01A2])/g },
          { base: 'OO', letters: /(&#42830;|[\uA74E])/g },
          { base: 'OU', letters: /(&#546;|[\u0222])/g },
          {
            base: 'P',
            letters:
              /(&#80;|&#9413;|&#65328;|&#7764;|&#7766;|&#420;|&#11363;|&#42832;|&#42834;|&#42836;|[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754])/g,
          },
          {
            base: 'Q',
            letters: /(&#81;|&#9414;|&#65329;|&#42838;|&#42840;|&#586;|[\u0051\u24C6\uFF31\uA756\uA758\u024A])/g,
          },
          {
            base: 'R',
            letters:
              /(&#82;|&#9415;|&#65330;|&#340;|&#7768;|&#344;|&#528;|&#530;|&#7770;|&#7772;|&#342;|&#7774;|&#588;|&#11364;|&#42842;|&#42918;|&#42882;|[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782])/g,
          },
          {
            base: 'S',
            letters:
              /(&#83;|&#9416;|&#65331;|&#7838;|&#346;|&#7780;|&#348;|&#7776;|&#352;|&#7782;|&#7778;|&#7784;|&#536;|&#350;|&#11390;|&#42920;|&#42884;|[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784])/g,
          },
          {
            base: 'T',
            letters:
              /(&#84;|&#9417;|&#65332;|&#7786;|&#356;|&#7788;|&#538;|&#354;|&#7792;|&#7790;|&#358;|&#428;|&#430;|&#574;|&#42886;|[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786])/g,
          },
          { base: 'TH', letters: /(&#222;|[\u00DE])/g },
          { base: 'TZ', letters: /(&#42792;|[\uA728])/g },
          {
            base: 'U',
            letters:
              /(&#85;|&#9418;|&#65333;|&#217;|&#218;|&#219;|&#360;|&#7800;|&#362;|&#7802;|&#364;|&#220;|&#475;|&#471;|&#469;|&#473;|&#7910;|&#366;|&#368;|&#467;|&#532;|&#534;|&#431;|&#7914;|&#7912;|&#7918;|&#7916;|&#7920;|&#7908;|&#7794;|&#370;|&#7798;|&#7796;|&#580;|[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244])/g,
          },
          {
            base: 'V',
            letters:
              /(&#86;|&#9419;|&#65334;|&#7804;|&#7806;|&#434;|&#42846;|&#581;|[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245])/g,
          },
          { base: 'VY', letters: /(&#42848;|[\uA760])/g },
          {
            base: 'W',
            letters:
              /(&#87;|&#9420;|&#65335;|&#7808;|&#7810;|&#372;|&#7814;|&#7812;|&#7816;|&#11378;|[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72])/g,
          },
          { base: 'X', letters: /(&#88;|&#9421;|&#65336;|&#7818;|&#7820;|[\u0058\u24CD\uFF38\u1E8A\u1E8C])/g },
          {
            base: 'Y',
            letters:
              /(&#89;|&#9422;|&#65337;|&#7922;|&#221;|&#374;|&#7928;|&#562;|&#7822;|&#376;|&#7926;|&#7924;|&#435;|&#590;|&#7934;|[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE])/g,
          },
          {
            base: 'Z',
            letters:
              /(&#90;|&#9423;|&#65338;|&#377;|&#7824;|&#379;|&#381;|&#7826;|&#7828;|&#437;|&#548;|&#11391;|&#11371;|&#42850;|[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762])/g,
          },
          {
            base: 'a',
            letters:
              /(&#97;|&#9424;|&#65345;|&#7834;|&#224;|&#225;|&#226;|&#7847;|&#7845;|&#7851;|&#7849;|&#227;|&#257;|&#259;|&#7857;|&#7855;|&#7861;|&#7859;|&#551;|&#481;|&#228;|&#479;|&#7843;|&#229;|&#507;|&#462;|&#513;|&#515;|&#7841;|&#7853;|&#7863;|&#7681;|&#261;|&#11365;|&#592;|[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250])/g,
          },
          { base: 'aa', letters: /(&#42803;|[\uA733])/g },
          { base: 'ae', letters: /(&#230;|&#509;|&#483;|[\u00E6\u01FD\u01E3])/g },
          { base: 'ao', letters: /(&#42805;|[\uA735])/g },
          { base: 'au', letters: /(&#42807;|[\uA737])/g },
          { base: 'av', letters: /(&#42809;|&#42811;|[\uA739\uA73B])/g },
          { base: 'ay', letters: /(&#42813;|[\uA73D])/g },
          {
            base: 'b',
            letters:
              /(&#98;|&#9425;|&#65346;|&#7683;|&#7685;|&#7687;|&#384;|&#387;|&#595;|[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253])/g,
          },
          {
            base: 'c',
            letters:
              /(&#99;|&#9426;|&#65347;|&#263;|&#265;|&#267;|&#269;|&#231;|&#7689;|&#392;|&#572;|&#42815;|&#8580;|[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184])/g,
          },
          {
            base: 'd',
            letters:
              /(&#100;|&#9427;|&#65348;|&#7691;|&#271;|&#7693;|&#7697;|&#7699;|&#7695;|&#273;|&#396;|&#598;|&#599;|&#42874;|&#240;|[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A\u00F0])/g,
          },
          { base: 'dz', letters: /(&#499;|&#454;|[\u01F3\u01C6])/g },
          {
            base: 'e',
            letters:
              /(&#101;|&#9428;|&#65349;|&#232;|&#233;|&#234;|&#7873;|&#7871;|&#7877;|&#7875;|&#7869;|&#275;|&#7701;|&#7703;|&#277;|&#279;|&#235;|&#7867;|&#283;|&#517;|&#519;|&#7865;|&#7879;|&#553;|&#7709;|&#281;|&#7705;|&#7707;|&#583;|&#603;|&#477;|[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD])/g,
          },
          {
            base: 'f',
            letters: /(&#102;|&#9429;|&#65350;|&#7711;|&#402;|&#42876;|[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C])/g,
          },
          {
            base: 'g',
            letters:
              /(&#103;|&#9430;|&#65351;|&#501;|&#285;|&#7713;|&#287;|&#289;|&#487;|&#291;|&#485;|&#608;|&#42913;|&#7545;|&#42879;|[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F])/g,
          },
          {
            base: 'h',
            letters:
              /(&#104;|&#9431;|&#65352;|&#293;|&#7715;|&#7719;|&#543;|&#7717;|&#7721;|&#7723;|&#7830;|&#295;|&#11368;|&#11382;|&#613;|[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265])/g,
          },
          { base: 'hv', letters: /(&#405;|[\u0195])/g },
          {
            base: 'i',
            letters:
              /(&#105;|&#9432;|&#65353;|&#236;|&#237;|&#238;|&#297;|&#299;|&#301;|&#239;|&#7727;|&#7881;|&#464;|&#521;|&#523;|&#7883;|&#303;|&#7725;|&#616;|&#305;|[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131])/g,
          },
          { base: 'ij', letters: /(&#307;|[\u0133])/g },
          {
            base: 'j',
            letters: /(&#106;|&#9433;|&#65354;|&#309;|&#496;|&#585;|[\u006A\u24D9\uFF4A\u0135\u01F0\u0249])/g,
          },
          {
            base: 'k',
            letters:
              /(&#107;|&#9434;|&#65355;|&#7729;|&#489;|&#7731;|&#311;|&#7733;|&#409;|&#11370;|&#42817;|&#42819;|&#42821;|&#42915;|[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3])/g,
          },
          {
            base: 'l',
            letters:
              /(&#108;|&#9435;|&#65356;|&#320;|&#314;|&#318;|&#7735;|&#7737;|&#316;|&#7741;|&#7739;|&#322;|&#410;|&#619;|&#11361;|&#42825;|&#42881;|&#42823;|[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u0142\u019A\u026B\u2C61\uA749\uA781\uA747])/g,
          },
          { base: 'lj', letters: /(&#457;|[\u01C9])/g },
          {
            base: 'm',
            letters:
              /(&#109;|&#9436;|&#65357;|&#7743;|&#7745;|&#7747;|&#625;|&#623;|[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F])/g,
          },
          {
            base: 'n',
            letters:
              /(&#110;|&#9437;|&#65358;|&#505;|&#324;|&#241;|&#7749;|&#328;|&#7751;|&#326;|&#7755;|&#7753;|&#414;|&#626;|&#329;|&#42897;|&#42917;|&#331;|[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u014B])/g,
          },
          { base: 'nj', letters: /(&#460;|[\u01CC])/g },
          {
            base: 'o',
            letters:
              /(&#111;|&#9438;|&#65359;|&#242;|&#243;|&#244;|&#7891;|&#7889;|&#7895;|&#7893;|&#245;|&#7757;|&#557;|&#7759;|&#333;|&#7761;|&#7763;|&#335;|&#559;|&#561;|&#246;|&#555;|&#7887;|&#337;|&#466;|&#525;|&#527;|&#417;|&#7901;|&#7899;|&#7905;|&#7903;|&#7907;|&#7885;|&#7897;|&#491;|&#493;|&#248;|&#511;|&#596;|&#42827;|&#42829;|&#629;|[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275])/g,
          },
          { base: 'oe', letters: /(&#339;|[\u0153])/g },
          { base: 'oi', letters: /(&#419;|[\u01A3])/g },
          { base: 'ou', letters: /(&#547;|[\u0223])/g },
          { base: 'oo', letters: /(&#42831;|[\uA74F])/g },
          {
            base: 'p',
            letters:
              /(&#112;|&#9439;|&#65360;|&#7765;|&#7767;|&#421;|&#7549;|&#42833;|&#42835;|&#42837;|[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755])/g,
          },
          {
            base: 'q',
            letters: /(&#113;|&#9440;|&#65361;|&#587;|&#42839;|&#42841;|[\u0071\u24E0\uFF51\u024B\uA757\uA759])/g,
          },
          {
            base: 'r',
            letters:
              /(&#114;|&#9441;|&#65362;|&#341;|&#7769;|&#345;|&#529;|&#531;|&#7771;|&#7773;|&#343;|&#7775;|&#589;|&#637;|&#42843;|&#42919;|&#42883;|[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783])/g,
          },
          {
            base: 's',
            letters:
              /(&#115;|&#9442;|&#65363;|&#347;|&#7781;|&#349;|&#7777;|&#353;|&#7783;|&#7779;|&#7785;|&#537;|&#351;|&#575;|&#42921;|&#42885;|&#7835;|&#383;|[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u017F])/g,
          },
          { base: 'ss', letters: /(&#223;|[\u00DF])/g },
          {
            base: 't',
            letters:
              /(&#116;|&#9443;|&#65364;|&#7787;|&#7831;|&#357;|&#7789;|&#539;|&#355;|&#7793;|&#7791;|&#359;|&#429;|&#648;|&#11366;|&#42887;|[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787])/g,
          },
          { base: 'th', letters: /(&#254;|[\u00FE])/g },
          { base: 'tz', letters: /(&#42793;|[\uA729])/g },
          {
            base: 'u',
            letters:
              /(&#117;|&#9444;|&#65365;|&#249;|&#250;|&#251;|&#361;|&#7801;|&#363;|&#7803;|&#365;|&#252;|&#476;|&#472;|&#470;|&#474;|&#7911;|&#367;|&#369;|&#468;|&#533;|&#535;|&#432;|&#7915;|&#7913;|&#7919;|&#7917;|&#7921;|&#7909;|&#7795;|&#371;|&#7799;|&#7797;|&#649;|[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289])/g,
          },
          {
            base: 'v',
            letters:
              /(&#118;|&#9445;|&#65366;|&#7805;|&#7807;|&#651;|&#42847;|&#652;|[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C])/g,
          },
          { base: 'vy', letters: /(&#42849;|[\uA761])/g },
          {
            base: 'w',
            letters:
              /(&#119;|&#9446;|&#65367;|&#7809;|&#7811;|&#373;|&#7815;|&#7813;|&#7832;|&#7817;|&#11379;|[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73])/g,
          },
          { base: 'x', letters: /(&#120;|&#9447;|&#65368;|&#7819;|&#7821;|[\u0078\u24E7\uFF58\u1E8B\u1E8D])/g },
          {
            base: 'y',
            letters:
              /(&#121;|&#9448;|&#65369;|&#7923;|&#253;|&#375;|&#7929;|&#563;|&#7823;|&#255;|&#7927;|&#7833;|&#7925;|&#436;|&#591;|&#7935;|[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF])/g,
          },
          {
            base: 'z',
            letters:
              /(&#122;|&#9449;|&#65370;|&#378;|&#7825;|&#380;|&#382;|&#7827;|&#7829;|&#438;|&#549;|&#576;|&#11372;|&#42851;|[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763])/g,
          },
        ],
        Ee = function (e) {
          return (function (e) {
            var t = e;
            return (
              ye.forEach(function (e) {
                t = t.replace(e.letters, e.base);
              }),
              t
            );
          })(e).toLowerCase();
        },
        me = function (e, t, n) {
          return n ? Ee(e).indexOf(Ee(t)) : e.toLowerCase().indexOf(t.toLowerCase());
        },
        be = function (e) {
          return 'number' == typeof e;
        },
        Se = function (e) {
          return e === Object(e) ? Object.keys(e) : [];
        },
        we = function (e) {
          for (var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
            r[u - 1] = arguments[u];
          var o = (t = []).concat.apply(t, r);
          return Object.keys(e).reduce(function (t, n) {
            return e.hasOwnProperty(n) && !o.includes(n) && void 0 !== e[n] && (t[n] = e[n]), t;
          }, {});
        };
      function De(e, t) {
        return function (n) {
          var r = function (r) {
              var o = r.style,
                i = r.className,
                a = r.classNames,
                s = (function (e, t) {
                  if (null == e) return {};
                  var n,
                    r,
                    u = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        u = {},
                        o = Object.keys(e);
                      for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (u[n] = e[n]);
                      return u;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++)
                      (n = o[r]),
                        t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (u[n] = e[n]));
                  }
                  return u;
                })(r, ['style', 'className', 'classNames']),
                l = t ? t(s) : void 0,
                c = Z(e, { style: o, className: i, classNames: a }, l);
              return v.createElement(n, u({}, s, { style: c }));
            },
            o = n.displayName || n.name || 'Component';
          return (r.displayName = 'defaultStyle('.concat(o, ')')), r;
        };
      }
      var Ae = (function (e) {
        function t() {
          var e;
          return (
            o(this, t),
            g(c((e = f(this, d(t).apply(this, arguments)))), 'setCaretElement', function (t) {
              e.caretElement = t;
            }),
            (e.state = { left: void 0, top: void 0 }),
            e
          );
        }
        return (
          p(t, e),
          a(t, [
            {
              key: 'componentDidMount',
              value: function () {
                this.notifyCaretPosition();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.notifyCaretPosition();
              },
            },
            {
              key: 'notifyCaretPosition',
              value: function () {
                if (this.caretElement) {
                  var e = this.caretElement,
                    t = e.offsetLeft,
                    n = e.offsetTop;
                  if (this.state.left !== t || this.state.top !== n) {
                    var r = { left: t, top: n };
                    this.setState(r), this.props.onCaretPositionChange(r);
                  }
                }
              },
            },
            {
              key: 'render',
              value: function () {
                var e,
                  t = this,
                  n = this.props,
                  r = n.selectionStart,
                  o = n.selectionEnd,
                  i = n.value,
                  a = n.style,
                  s = n.children,
                  l = n.containerRef,
                  c = ge(s);
                r === o && (e = le(i, c, r, 'START'));
                var f = [],
                  d = {},
                  h = f,
                  p = 0;
                return (
                  ae(
                    i,
                    c,
                    function (e, n, r, u, o, i, a) {
                      var s = (function (e, t) {
                        return e.hasOwnProperty(t) ? e[t]++ : (e[t] = 0), t + '_' + e[t];
                      })(d, u);
                      h.push(t.getMentionComponentForMatch(u, o, i, s));
                    },
                    function (n, r, u) {
                      if (be(e) && e >= r && e <= r + n.length) {
                        var o = e - r;
                        h.push(t.renderSubstring(n.substring(0, o), p)), (h = [t.renderSubstring(n.substring(o), p)]);
                      } else h.push(t.renderSubstring(n, p));
                      p++;
                    },
                  ),
                  h.push(' '),
                  h !== f && f.push(this.renderHighlighterCaret(h)),
                  v.createElement('div', u({}, a, { ref: l }), f)
                );
              },
            },
            {
              key: 'renderSubstring',
              value: function (e, t) {
                return v.createElement('span', u({}, this.props.style('substring'), { key: t }), e);
              },
            },
            {
              key: 'getMentionComponentForMatch',
              value: function (e, t, n, r) {
                var u = { id: e, display: t, key: r },
                  o = v.Children.toArray(this.props.children)[n];
                return v.cloneElement(o, u);
              },
            },
            {
              key: 'renderHighlighterCaret',
              value: function (e) {
                return v.createElement(
                  'span',
                  u({}, this.props.style('caret'), { ref: this.setCaretElement, key: 'caret' }),
                  e,
                );
              },
            },
          ]),
          t
        );
      })(v.Component);
      g(Ae, 'propTypes', {
        selectionStart: Q().number,
        selectionEnd: Q().number,
        value: Q().string.isRequired,
        onCaretPositionChange: Q().func.isRequired,
        containerRef: Q().oneOfType([
          Q().func,
          Q().shape({ current: 'undefined' == typeof Element ? Q().any : Q().instanceOf(Element) }),
        ]),
        children: Q().oneOfType([Q().element, Q().arrayOf(Q().element)]).isRequired,
      }),
        g(Ae, 'defaultProps', { value: '' });
      var Ce = De(
          {
            position: 'relative',
            boxSizing: 'border-box',
            width: '100%',
            color: 'transparent',
            overflow: 'hidden',
            whiteSpace: 'pre-wrap',
            wordWrap: 'break-word',
            border: '1px solid transparent',
            textAlign: 'start',
            '&singleLine': { whiteSpace: 'pre', wordWrap: null },
            substring: { visibility: 'hidden' },
          },
          function (e) {
            return { '&singleLine': e.singleLine };
          },
        )(Ae),
        Oe = (function (e) {
          function t() {
            return o(this, t), f(this, d(t).apply(this, arguments));
          }
          return (
            p(t, e),
            a(t, [
              {
                key: 'render',
                value: function () {
                  var e = we(this.props, ['style', 'classNames', 'className'], Se(t.propTypes));
                  return v.createElement(
                    'li',
                    u({ id: this.props.id, role: 'option', 'aria-selected': this.props.focused }, e, this.props.style),
                    this.renderContent(),
                  );
                },
              },
              {
                key: 'renderContent',
                value: function () {
                  var e = this.props,
                    t = e.query,
                    n = e.renderSuggestion,
                    r = e.suggestion,
                    u = e.index,
                    o = e.focused,
                    i = this.getDisplay(),
                    a = this.renderHighlightedDisplay(i, t);
                  return n ? n(r, t, a, u, o) : a;
                },
              },
              {
                key: 'getDisplay',
                value: function () {
                  var e = this.props.suggestion;
                  if ('string' == typeof e) return e;
                  var t = e.id,
                    n = e.display;
                  return void 0 !== t && n ? n : t;
                },
              },
              {
                key: 'renderHighlightedDisplay',
                value: function (e) {
                  var t = this.props,
                    n = t.ignoreAccents,
                    r = t.query,
                    u = t.style,
                    o = me(e, r, n);
                  return -1 === o
                    ? v.createElement('span', u('display'), e)
                    : v.createElement(
                        'span',
                        u('display'),
                        e.substring(0, o),
                        v.createElement('b', u('highlight'), e.substring(o, o + r.length)),
                        e.substring(o + r.length),
                      );
                },
              },
            ]),
            t
          );
        })(v.Component);
      g(Oe, 'propTypes', {
        id: Q().string.isRequired,
        query: Q().string.isRequired,
        index: Q().number.isRequired,
        ignoreAccents: Q().bool,
        suggestion: Q().oneOfType([
          Q().string,
          Q().shape({ id: Q().oneOfType([Q().string, Q().number]).isRequired, display: Q().string }),
        ]).isRequired,
        renderSuggestion: Q().func,
        focused: Q().bool,
      });
      var Te = De({ cursor: 'pointer' }, function (e) {
        return { '&focused': e.focused };
      })(Oe);
      function Fe() {
        var e = Z(),
          t = e('spinner');
        return v.createElement(
          'div',
          e,
          v.createElement(
            'div',
            t,
            v.createElement('div', t(['element', 'element1'])),
            v.createElement('div', t(['element', 'element2'])),
            v.createElement('div', t(['element', 'element3'])),
            v.createElement('div', t(['element', 'element4'])),
            v.createElement('div', t(['element', 'element5'])),
          ),
        );
      }
      var ke = (function (e) {
        function t() {
          var e, n;
          o(this, t);
          for (var r = arguments.length, u = new Array(r), i = 0; i < r; i++) u[i] = arguments[i];
          return (
            g(c((n = f(this, (e = d(t)).call.apply(e, [this].concat(u))))), 'handleMouseEnter', function (e, t) {
              n.props.onMouseEnter && n.props.onMouseEnter(e);
            }),
            g(c(n), 'select', function (e, t) {
              n.props.onSelect(e, t);
            }),
            g(c(n), 'setUlElement', function (e) {
              n.ulElement = e;
            }),
            n
          );
        }
        return (
          p(t, e),
          a(t, [
            {
              key: 'componentDidUpdate',
              value: function () {
                if (
                  this.ulElement &&
                  !(this.ulElement.offsetHeight >= this.ulElement.scrollHeight) &&
                  this.props.scrollFocusedIntoView
                ) {
                  var e = this.ulElement.scrollTop,
                    t = this.ulElement.children[this.props.focusIndex].getBoundingClientRect(),
                    n = t.top,
                    r = t.bottom,
                    u = this.ulElement.getBoundingClientRect().top;
                  (r = r - u + e),
                    (n = n - u + e) < e
                      ? (this.ulElement.scrollTop = n)
                      : r > this.ulElement.offsetHeight && (this.ulElement.scrollTop = r - this.ulElement.offsetHeight);
                }
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.id,
                  n = e.a11ySuggestionsListLabel,
                  r = e.isOpened,
                  o = e.style,
                  i = e.onMouseDown,
                  a = e.containerRef,
                  s = e.position,
                  l = e.left,
                  c = e.top;
                return r
                  ? v.createElement(
                      'div',
                      u(
                        {},
                        (function () {
                          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                          return t.reduce(function (e, t) {
                            return J(
                              J(J({}, e), 'function' == typeof t ? t : {}),
                              {},
                              { style: J(J({}, e.style), 'function' == typeof t ? t.style : t) },
                            );
                          }, {});
                        })({ position: s || 'absolute', left: l, top: c }, o),
                        { onMouseDown: i, ref: a },
                      ),
                      v.createElement(
                        'ul',
                        u({ ref: this.setUlElement, id: t, role: 'listbox', 'aria-label': n }, o('list')),
                        this.renderSuggestions(),
                      ),
                      this.renderLoadingIndicator(),
                    )
                  : null;
              },
            },
            {
              key: 'renderSuggestions',
              value: function () {
                var e = this;
                return Object.values(this.props.suggestions).reduce(function (t, n) {
                  var u = n.results,
                    o = n.queryInfo;
                  return [].concat(
                    r(t),
                    r(
                      u.map(function (n, r) {
                        return e.renderSuggestion(n, o, t.length + r);
                      }),
                    ),
                  );
                }, []);
              },
            },
            {
              key: 'renderSuggestion',
              value: function (e, t, n) {
                var r = this,
                  u = n === this.props.focusIndex,
                  o = t.childIndex,
                  i = t.query,
                  a = v.Children.toArray(this.props.children)[o].props.renderSuggestion,
                  s = this.props.ignoreAccents;
                return v.createElement(Te, {
                  style: this.props.style('item'),
                  key: ''.concat(o, '-').concat(xe(e)),
                  id: de(this.props.id, n),
                  query: i,
                  index: n,
                  ignoreAccents: s,
                  renderSuggestion: a,
                  suggestion: e,
                  focused: u,
                  onClick: function () {
                    return r.select(e, t);
                  },
                  onMouseEnter: function () {
                    return r.handleMouseEnter(n);
                  },
                });
              },
            },
            {
              key: 'renderLoadingIndicator',
              value: function () {
                if (this.props.isLoading) return v.createElement(Fe, { style: this.props.style('loadingIndicator') });
              },
            },
          ]),
          t
        );
      })(v.Component);
      g(ke, 'propTypes', {
        id: Q().string.isRequired,
        suggestions: Q().object.isRequired,
        a11ySuggestionsListLabel: Q().string,
        focusIndex: Q().number,
        position: Q().string,
        left: Q().number,
        top: Q().number,
        scrollFocusedIntoView: Q().bool,
        isLoading: Q().bool,
        isOpened: Q().bool.isRequired,
        onSelect: Q().func,
        ignoreAccents: Q().bool,
        containerRef: Q().oneOfType([
          Q().func,
          Q().shape({ current: 'undefined' == typeof Element ? Q().any : Q().instanceOf(Element) }),
        ]),
        children: Q().oneOfType([Q().element, Q().arrayOf(Q().element)]).isRequired,
      }),
        g(ke, 'defaultProps', {
          suggestions: {},
          onSelect: function () {
            return null;
          },
        });
      var xe = function (e) {
          return 'string' == typeof e ? e : e.id;
        },
        Me = De({
          zIndex: 1,
          backgroundColor: 'white',
          marginTop: 14,
          minWidth: 100,
          list: { margin: 0, padding: 0, listStyleType: 'none' },
        })(ke);
      function He(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? He(n, !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : He(n).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var Pe = { TAB: 9, RETURN: 13, ESC: 27, UP: 38, DOWN: 40 },
        je = !1,
        Be = {
          singleLine: Q().bool,
          allowSpaceInQuery: Q().bool,
          allowSuggestionsAboveCursor: Q().bool,
          forceSuggestionsAboveCursor: Q().bool,
          ignoreAccents: Q().bool,
          a11ySuggestionsListLabel: Q().string,
          value: Q().string,
          onKeyDown: Q().func,
          onSelect: Q().func,
          onBlur: Q().func,
          onChange: Q().func,
          suggestionsPortalHost: 'undefined' == typeof Element ? Q().any : Q().PropTypes.instanceOf(Element),
          inputRef: Q().oneOfType([
            Q().func,
            Q().shape({ current: 'undefined' == typeof Element ? Q().any : Q().instanceOf(Element) }),
          ]),
          children: Q().oneOfType([Q().element, Q().arrayOf(Q().element)]).isRequired,
        },
        ze = (function (e) {
          function t(e) {
            var n;
            return (
              o(this, t),
              g(c((n = f(this, d(t).call(this, e)))), 'setContainerElement', function (e) {
                n.containerElement = e;
              }),
              g(c(n), 'getInputProps', function () {
                var e = n.props,
                  t = e.readOnly,
                  r = e.disabled,
                  u = e.style;
                return Le(
                  {},
                  we(n.props, ['style', 'classNames', 'className'], Se(Be)),
                  {},
                  u('input'),
                  { value: n.getPlainText() },
                  !t &&
                    !r && {
                      onChange: n.handleChange,
                      onSelect: n.handleSelect,
                      onKeyDown: n.handleKeyDown,
                      onBlur: n.handleBlur,
                      onCompositionStart: n.handleCompositionStart,
                      onCompositionEnd: n.handleCompositionEnd,
                      onScroll: n.updateHighlighterScroll,
                    },
                  {},
                  n.isOpened() && {
                    role: 'combobox',
                    'aria-controls': n.uuidSuggestionsOverlay,
                    'aria-expanded': !0,
                    'aria-autocomplete': 'list',
                    'aria-haspopup': 'listbox',
                    'aria-activedescendant': de(n.uuidSuggestionsOverlay, n.state.focusIndex),
                  },
                );
              }),
              g(c(n), 'renderControl', function () {
                var e = n.props,
                  t = e.singleLine,
                  r = e.style,
                  u = n.getInputProps();
                return v.createElement(
                  'div',
                  r('control'),
                  n.renderHighlighter(),
                  t ? n.renderInput(u) : n.renderTextarea(u),
                );
              }),
              g(c(n), 'renderInput', function (e) {
                return v.createElement('input', u({ type: 'text', ref: n.setInputRef }, e));
              }),
              g(c(n), 'renderTextarea', function (e) {
                return v.createElement('textarea', u({ ref: n.setInputRef }, e));
              }),
              g(c(n), 'setInputRef', function (e) {
                n.inputElement = e;
                var t = n.props.inputRef;
                'function' == typeof t ? t(e) : t && (t.current = e);
              }),
              g(c(n), 'setSuggestionsElement', function (e) {
                n.suggestionsElement = e;
              }),
              g(c(n), 'renderSuggestionsOverlay', function () {
                if (!be(n.state.selectionStart)) return null;
                var e = n.state.suggestionsPosition,
                  t = e.position,
                  r = e.left,
                  u = e.top,
                  o = v.createElement(
                    Me,
                    {
                      id: n.uuidSuggestionsOverlay,
                      style: n.props.style('suggestions'),
                      position: t,
                      left: r,
                      top: u,
                      focusIndex: n.state.focusIndex,
                      scrollFocusedIntoView: n.state.scrollFocusedIntoView,
                      containerRef: n.setSuggestionsElement,
                      suggestions: n.state.suggestions,
                      onSelect: n.addMention,
                      onMouseDown: n.handleSuggestionsMouseDown,
                      onMouseEnter: n.handleSuggestionsMouseEnter,
                      isLoading: n.isLoading(),
                      isOpened: n.isOpened(),
                      ignoreAccents: n.props.ignoreAccents,
                      a11ySuggestionsListLabel: n.props.a11ySuggestionsListLabel,
                    },
                    n.props.children,
                  );
                return n.props.suggestionsPortalHost ? G.createPortal(o, n.props.suggestionsPortalHost) : o;
              }),
              g(c(n), 'renderHighlighter', function () {
                var e = n.state,
                  t = e.selectionStart,
                  r = e.selectionEnd,
                  u = n.props,
                  o = u.singleLine,
                  i = u.children,
                  a = u.value,
                  s = u.style;
                return v.createElement(
                  Ce,
                  {
                    containerRef: n.setHighlighterElement,
                    style: s('highlighter'),
                    value: a,
                    singleLine: o,
                    selectionStart: t,
                    selectionEnd: r,
                    onCaretPositionChange: n.handleCaretPositionChange,
                  },
                  i,
                );
              }),
              g(c(n), 'setHighlighterElement', function (e) {
                n.highlighterElement = e;
              }),
              g(c(n), 'handleCaretPositionChange', function (e) {
                n.setState({ caretPosition: e });
              }),
              g(c(n), 'getPlainText', function () {
                return se(n.props.value || '', ge(n.props.children));
              }),
              g(c(n), 'executeOnChange', function (e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
                  r[u - 1] = arguments[u];
                var o, i;
                return n.props.onChange
                  ? (o = n.props).onChange.apply(o, [e].concat(r))
                  : n.props.valueLink
                  ? (i = n.props.valueLink).requestChange.apply(i, [e.target.value].concat(r))
                  : void 0;
              }),
              g(c(n), 'handleChange', function (e) {
                if (
                  ((je = !1),
                  !document.documentMode ||
                    ((document.activeElement && document.activeElement.contentDocument) || document).activeElement ===
                      e.target)
                ) {
                  var t = n.props.value || '',
                    r = ge(n.props.children),
                    u = e.target.value,
                    o = (function (e, t, n, r) {
                      var u = n.selectionStartBefore,
                        o = n.selectionEndBefore,
                        i = n.selectionEndAfter,
                        a = se(e, r),
                        s = a.length - t.length;
                      'undefined' === u && (u = i + s),
                        'undefined' === o && (o = u),
                        u === o && o === i && a.length === t.length && (u -= 1);
                      var l = t.slice(u, i),
                        c = Math.min(u, i),
                        f = o;
                      u === i && (f = Math.max(o, u + s));
                      var d = le(e, r, c, 'START'),
                        h = le(e, r, f, 'END'),
                        p = le(e, r, c, 'NULL'),
                        g = le(e, r, f, 'NULL'),
                        v = null === p || null === g,
                        y = ce(e, d, h, l);
                      if (!v) {
                        var E = se(y, r);
                        if (E !== t) {
                          for (c = 0; t[c] === E[c]; ) c++;
                          (l = t.slice(c, i)),
                            (f = a.lastIndexOf(t.substring(i))),
                            (d = le(e, r, c, 'START')),
                            (h = le(e, r, f, 'END')),
                            (y = ce(e, d, h, l));
                        }
                      }
                      return y;
                    })(
                      t,
                      u,
                      {
                        selectionStartBefore: n.state.selectionStart,
                        selectionEndBefore: n.state.selectionEnd,
                        selectionEndAfter: e.target.selectionEnd,
                      },
                      r,
                    );
                  u = se(o, r);
                  var i = e.target.selectionStart,
                    a = e.target.selectionEnd,
                    s = !1,
                    l = (function (e, t, n) {
                      var r = n,
                        u = !1;
                      if (
                        (ae(e, t, function (e, t, o, i, a, s, l) {
                          o <= n && o + a.length > n && ((r = o), (u = !0));
                        }),
                        u)
                      )
                        return r;
                    })(t, r, i);
                  void 0 !== l && n.state.selectionEnd > l && ((a = i = l), (s = !0)),
                    n.setState({ selectionStart: i, selectionEnd: a, setSelectionAfterMentionChange: s });
                  var c = fe(o, r),
                    f = { target: { value: o } };
                  n.executeOnChange(f, o, u, c);
                }
              }),
              g(c(n), 'handleSelect', function (e) {
                if (
                  (n.setState({ selectionStart: e.target.selectionStart, selectionEnd: e.target.selectionEnd }), !je)
                ) {
                  var t = n.inputElement;
                  e.target.selectionStart === e.target.selectionEnd
                    ? n.updateMentionsQueries(t.value, e.target.selectionStart)
                    : n.clearSuggestions(),
                    n.updateHighlighterScroll(),
                    n.props.onSelect(e);
                }
              }),
              g(c(n), 'handleKeyDown', function (e) {
                if (0 !== he(n.state.suggestions) && n.suggestionsElement)
                  switch (
                    (Object.values(Pe).indexOf(e.keyCode) >= 0 && (e.preventDefault(), e.stopPropagation()), e.keyCode)
                  ) {
                    case Pe.ESC:
                      return void n.clearSuggestions();
                    case Pe.DOWN:
                      return void n.shiftFocus(1);
                    case Pe.UP:
                      return void n.shiftFocus(-1);
                    case Pe.RETURN:
                    case Pe.TAB:
                      return void n.selectFocused();
                    default:
                      return;
                  }
                else n.props.onKeyDown(e);
              }),
              g(c(n), 'shiftFocus', function (e) {
                var t = he(n.state.suggestions);
                n.setState({ focusIndex: (t + n.state.focusIndex + e) % t, scrollFocusedIntoView: !0 });
              }),
              g(c(n), 'selectFocused', function () {
                var e = n.state,
                  t = e.suggestions,
                  u = e.focusIndex,
                  o = Object.values(t).reduce(function (e, t) {
                    var n = t.results,
                      u = t.queryInfo;
                    return [].concat(
                      r(e),
                      r(
                        n.map(function (e) {
                          return { result: e, queryInfo: u };
                        }),
                      ),
                    );
                  }, [])[u],
                  i = o.result,
                  a = o.queryInfo;
                n.addMention(i, a), n.setState({ focusIndex: 0 });
              }),
              g(c(n), 'handleBlur', function (e) {
                var t = n._suggestionsMouseDown;
                (n._suggestionsMouseDown = !1),
                  t || n.setState({ selectionStart: null, selectionEnd: null }),
                  window.setTimeout(function () {
                    n.updateHighlighterScroll();
                  }, 1),
                  n.props.onBlur(e, t);
              }),
              g(c(n), 'handleSuggestionsMouseDown', function (e) {
                n._suggestionsMouseDown = !0;
              }),
              g(c(n), 'handleSuggestionsMouseEnter', function (e) {
                n.setState({ focusIndex: e, scrollFocusedIntoView: !1 });
              }),
              g(c(n), 'updateSuggestionsPosition', function () {
                var e = n.state.caretPosition,
                  t = n.props,
                  r = t.suggestionsPortalHost,
                  u = t.allowSuggestionsAboveCursor,
                  o = t.forceSuggestionsAboveCursor;
                if (e && n.suggestionsElement) {
                  var i = n.suggestionsElement,
                    a = n.highlighterElement,
                    s = a.getBoundingClientRect(),
                    l = _e(a, 'font-size'),
                    c = { left: s.left + e.left, top: s.top + e.top + l },
                    f = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                  if (i) {
                    var d = {};
                    if (r) {
                      d.position = 'fixed';
                      var h = c.left,
                        p = c.top;
                      (h -= _e(i, 'margin-left')), (p -= _e(i, 'margin-top')), (h -= a.scrollLeft), (p -= a.scrollTop);
                      var g = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                      h + i.offsetWidth > g ? (d.left = Math.max(0, g - i.offsetWidth)) : (d.left = h),
                        (u && p + i.offsetHeight > f && i.offsetHeight < p - l) || o
                          ? (d.top = Math.max(0, p - i.offsetHeight - l))
                          : (d.top = p);
                    } else {
                      var v = e.left - a.scrollLeft,
                        y = e.top - a.scrollTop;
                      v + i.offsetWidth > n.containerElement.offsetWidth ? (d.right = 0) : (d.left = v),
                        u && c.top - a.scrollTop + i.offsetHeight > f && i.offsetHeight < s.top - l - a.scrollTop
                          ? (d.top = y - i.offsetHeight - l)
                          : (d.top = y);
                    }
                    (d.left === n.state.suggestionsPosition.left &&
                      d.top === n.state.suggestionsPosition.top &&
                      d.position === n.state.suggestionsPosition.position) ||
                      n.setState({ suggestionsPosition: d });
                  }
                }
              }),
              g(c(n), 'updateHighlighterScroll', function () {
                var e = n.inputElement,
                  t = n.highlighterElement;
                e && t && ((t.scrollLeft = e.scrollLeft), (t.scrollTop = e.scrollTop), (t.height = e.height));
              }),
              g(c(n), 'handleCompositionStart', function () {
                je = !0;
              }),
              g(c(n), 'handleCompositionEnd', function () {
                je = !1;
              }),
              g(c(n), 'setSelection', function (e, t) {
                if (null !== e && null !== t) {
                  var r = n.inputElement;
                  if (r.setSelectionRange) r.setSelectionRange(e, t);
                  else if (r.createTextRange) {
                    var u = r.createTextRange();
                    u.collapse(!0), u.moveEnd('character', t), u.moveStart('character', e), u.select();
                  }
                }
              }),
              g(c(n), 'updateMentionsQueries', function (e, t) {
                n._queryId++, (n.suggestions = {}), n.setState({ suggestions: {} });
                var r = n.props.value || '',
                  u = n.props.children,
                  o = ge(u),
                  i = le(r, o, t, 'NULL');
                if (null !== i) {
                  var a = (function (e, t) {
                      var n = fe(e, t),
                        r = n[n.length - 1];
                      return r ? r.plainTextIndex + r.display.length : 0;
                    })(r.substring(0, i), o),
                    s = e.substring(a, t);
                  v.Children.forEach(u, function (t, r) {
                    if (t) {
                      var u = (function (e) {
                          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                          if (e instanceof RegExp) return e;
                          var n = t.allowSpaceInQuery,
                            r = ee(e);
                          return new RegExp(
                            '(?:^|\\s)('
                              .concat(r, '([^')
                              .concat(n ? '' : '\\s')
                              .concat(r, ']*))$'),
                          );
                        })(t.props.trigger, n.props),
                        o = s.match(u);
                      if (o) {
                        var i = a + s.indexOf(o[1], o.index);
                        n.queryData(o[2], r, i, i + o[1].length, e);
                      }
                    }
                  });
                }
              }),
              g(c(n), 'clearSuggestions', function () {
                n._queryId++, (n.suggestions = {}), n.setState({ suggestions: {}, focusIndex: 0 });
              }),
              g(c(n), 'queryData', function (e, t, r, u, o) {
                var i = n.props,
                  a = i.children,
                  s = i.ignoreAccents,
                  l = (function (e, t) {
                    return e instanceof Array
                      ? function (n, r) {
                          for (var u = [], o = 0, i = e.length; o < i; ++o) {
                            var a = e[o].display || e[o].id;
                            me(a, n, t) >= 0 && u.push(e[o]);
                          }
                          return u;
                        }
                      : e;
                  })(v.Children.toArray(a)[t].props.data, s),
                  c = l(e, n.updateSuggestions.bind(null, n._queryId, t, e, r, u, o));
                c instanceof Array && n.updateSuggestions(n._queryId, t, e, r, u, o, c);
              }),
              g(c(n), 'updateSuggestions', function (e, t, r, u, o, i, a) {
                if (e === n._queryId) {
                  n.suggestions = Le(
                    {},
                    n.suggestions,
                    g({}, t, {
                      queryInfo: {
                        childIndex: t,
                        query: r,
                        querySequenceStart: u,
                        querySequenceEnd: o,
                        plainTextValue: i,
                      },
                      results: a,
                    }),
                  );
                  var s = n.state.focusIndex,
                    l = he(n.suggestions);
                  n.setState({ suggestions: n.suggestions, focusIndex: s >= l ? Math.max(l - 1, 0) : s });
                }
              }),
              g(c(n), 'addMention', function (e, t) {
                var r = e.id,
                  u = e.display,
                  o = t.childIndex,
                  i = t.querySequenceStart,
                  a = t.querySequenceEnd,
                  s = t.plainTextValue,
                  l = n.props.value || '',
                  c = ge(n.props.children),
                  f = v.Children.toArray(n.props.children)[o].props,
                  d = f.markup,
                  h = f.displayTransform,
                  p = f.appendSpaceOnAdd,
                  g = f.onAdd,
                  y = le(l, c, i, 'START'),
                  E = y + a - i,
                  m = (function (e, t, n) {
                    return e.replace(te, t).replace(ne, n);
                  })(d, r, u);
                p && (m += ' ');
                var b = ce(l, y, E, m);
                n.inputElement.focus();
                var S = h(r, u);
                p && (S += ' ');
                var w = i + S.length;
                n.setState({ selectionStart: w, selectionEnd: w, setSelectionAfterMentionChange: !0 });
                var D = { target: { value: b } },
                  A = fe(b, c),
                  C = ce(s, i, a, S);
                n.executeOnChange(D, b, C, A), g && g(r, u, y, E), n.clearSuggestions();
              }),
              g(c(n), 'isLoading', function () {
                var e = !1;
                return (
                  v.Children.forEach(n.props.children, function (t) {
                    e = e || (t && t.props.isLoading);
                  }),
                  e
                );
              }),
              g(c(n), 'isOpened', function () {
                return be(n.state.selectionStart) && (0 !== he(n.state.suggestions) || n.isLoading());
              }),
              g(c(n), '_queryId', 0),
              (n.suggestions = {}),
              (n.uuidSuggestionsOverlay = Math.random().toString(16).substring(2)),
              (n.handleCopy = n.handleCopy.bind(c(n))),
              (n.handleCut = n.handleCut.bind(c(n))),
              (n.handlePaste = n.handlePaste.bind(c(n))),
              (n.state = {
                focusIndex: 0,
                selectionStart: null,
                selectionEnd: null,
                suggestions: {},
                caretPosition: null,
                suggestionsPosition: {},
              }),
              n
            );
          }
          return (
            p(t, e),
            a(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  document.addEventListener('copy', this.handleCopy),
                    document.addEventListener('cut', this.handleCut),
                    document.addEventListener('paste', this.handlePaste),
                    this.updateSuggestionsPosition();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e, t) {
                  t.suggestionsPosition === this.state.suggestionsPosition && this.updateSuggestionsPosition(),
                    this.state.setSelectionAfterMentionChange &&
                      (this.setState({ setSelectionAfterMentionChange: !1 }),
                      this.setSelection(this.state.selectionStart, this.state.selectionEnd));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  document.removeEventListener('copy', this.handleCopy),
                    document.removeEventListener('cut', this.handleCut),
                    document.removeEventListener('paste', this.handlePaste);
                },
              },
              {
                key: 'render',
                value: function () {
                  return v.createElement(
                    'div',
                    u({ ref: this.setContainerElement }, this.props.style),
                    this.renderControl(),
                    this.renderSuggestionsOverlay(),
                  );
                },
              },
              {
                key: 'handlePaste',
                value: function (e) {
                  if (e.target === this.inputElement && this.supportsClipboardActions(e)) {
                    e.preventDefault();
                    var t = this.state,
                      n = t.selectionStart,
                      r = t.selectionEnd,
                      u = this.props,
                      o = u.value,
                      i = u.children,
                      a = ge(i),
                      s = le(o, a, n, 'START'),
                      l = le(o, a, r, 'END'),
                      c = e.clipboardData.getData('text/react-mentions'),
                      f = e.clipboardData.getData('text/plain'),
                      d = ce(o, s, l, c || f).replace(/\r/g, ''),
                      h = se(d, a),
                      p = { target: Le({}, e.target, { value: d }) };
                    this.executeOnChange(p, d, h, fe(d, a));
                  }
                },
              },
              {
                key: 'saveSelectionToClipboard',
                value: function (e) {
                  var t = this.state,
                    n = t.selectionStart,
                    r = t.selectionEnd,
                    u = this.props,
                    o = u.children,
                    i = u.value,
                    a = ge(o),
                    s = le(i, a, n, 'START'),
                    l = le(i, a, r, 'END');
                  e.clipboardData.setData('text/plain', e.target.value.slice(n, r)),
                    e.clipboardData.setData('text/react-mentions', i.slice(s, l));
                },
              },
              {
                key: 'supportsClipboardActions',
                value: function (e) {
                  return !!e.clipboardData;
                },
              },
              {
                key: 'handleCopy',
                value: function (e) {
                  e.target === this.inputElement &&
                    this.supportsClipboardActions(e) &&
                    (e.preventDefault(), this.saveSelectionToClipboard(e));
                },
              },
              {
                key: 'handleCut',
                value: function (e) {
                  if (e.target === this.inputElement && this.supportsClipboardActions(e)) {
                    e.preventDefault(), this.saveSelectionToClipboard(e);
                    var t = this.state,
                      n = t.selectionStart,
                      r = t.selectionEnd,
                      u = this.props,
                      o = u.children,
                      i = u.value,
                      a = ge(o),
                      s = le(i, a, n, 'START'),
                      l = le(i, a, r, 'END'),
                      c = [i.slice(0, s), i.slice(l)].join(''),
                      f = se(c, a),
                      d = { target: Le({}, e.target, { value: f }) };
                    this.executeOnChange(d, c, f, fe(i, a));
                  }
                },
              },
            ]),
            t
          );
        })(v.Component);
      g(ze, 'propTypes', Be),
        g(ze, 'defaultProps', {
          ignoreAccents: !1,
          singleLine: !1,
          allowSuggestionsAboveCursor: !1,
          onKeyDown: function () {
            return null;
          },
          onSelect: function () {
            return null;
          },
          onBlur: function () {
            return null;
          },
        });
      var _e = function (e, t) {
          var n = parseFloat(window.getComputedStyle(e, null).getPropertyValue(t));
          return isFinite(n) ? n : 0;
        },
        $e = De(
          {
            position: 'relative',
            overflowY: 'visible',
            input: {
              display: 'block',
              width: '100%',
              position: 'absolute',
              margin: 0,
              top: 0,
              left: 0,
              boxSizing: 'border-box',
              backgroundColor: 'transparent',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              letterSpacing: 'inherit',
            },
            '&multiLine': {
              input: Le(
                { height: '100%', bottom: 0, overflow: 'hidden', resize: 'none' },
                'undefined' != typeof navigator && /iPhone|iPad|iPod/i.test(navigator.userAgent)
                  ? { marginTop: 1, marginLeft: -3 }
                  : null,
              ),
            },
          },
          function (e) {
            var t = e.singleLine;
            return { '&singleLine': t, '&multiLine': !t };
          },
        )(ze),
        Re = { fontWeight: 'inherit' },
        Ie = function (e) {
          var t = e.display,
            n = e.style,
            r = e.className,
            u = e.classNames,
            o = Z(Re, { style: n, className: r, classNames: u });
          return v.createElement('strong', o, t);
        };
      (Ie.propTypes = {
        onAdd: Q().func,
        onRemove: Q().func,
        renderSuggestion: Q().func,
        trigger: Q().oneOfType([Q().string, Q().instanceOf(RegExp)]),
        markup: Q().string,
        displayTransform: Q().func,
        allowSpaceInQuery: Q().bool,
        isLoading: Q().bool,
      }),
        (Ie.defaultProps = {
          trigger: '@',
          markup: '@[__display__](__id__)',
          displayTransform: function (e, t) {
            return t || e;
          },
          onAdd: function () {
            return null;
          },
          onRemove: function () {
            return null;
          },
          renderSuggestion: null,
          isLoading: !1,
          appendSpaceOnAdd: !1,
        });
    },
    38817: function (e, t) {
      'use strict';
      t.Z = function (e) {
        for (var t = e.pattern, n = e.decorator, r = [], u = 0, o = e.input, i = t.exec(o); null !== i; ) {
          var a = i.index,
            s = i[0],
            l = o.substring(0, a),
            c = n(s, u);
          r.push(l), r.push(c), (o = o.substring(a + s.length, o.length + 1)), (t.lastIndex = 0), (i = t.exec(o)), ++u;
        }
        return o && r.push(o), r;
      };
    },
    6189: function (e, t, n) {
      var r = n(7966);
      e.exports = function (e) {
        return r(e).replace(/\s(\w)/g, function (e, t) {
          return t.toUpperCase();
        });
      };
    },
    71788: function (e) {
      e.exports = function (e) {
        return t.test(e)
          ? e.toLowerCase()
          : n.test(e)
          ? (
              (function (e) {
                return e.replace(u, function (e, t) {
                  return t ? ' ' + t : '';
                });
              })(e) || e
            ).toLowerCase()
          : r.test(e)
          ? (function (e) {
              return e.replace(o, function (e, t, n) {
                return t + ' ' + n.toLowerCase().split('').join(' ');
              });
            })(e).toLowerCase()
          : e.toLowerCase();
      };
      var t = /\s/,
        n = /(_|-|\.|:)/,
        r = /([a-z][A-Z]|[A-Z][a-z])/,
        u = /[\W_]+(.|$)/g,
        o = /(.)([A-Z]+)/g;
    },
    7966: function (e, t, n) {
      var r = n(71788);
      e.exports = function (e) {
        return r(e)
          .replace(/[\W_]+(.|$)/g, function (e, t) {
            return t ? ' ' + t : '';
          })
          .trim();
      };
    },
    44593: function (e, t, n) {
      'use strict';
      n.d(t, {
        ZP: function () {
          return m;
        },
      });
      var r = n(67294),
        u = n(8100),
        o = function () {
          return (
            (o =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var u in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, u) && (e[u] = t[u]);
                return e;
              }),
            o.apply(this, arguments)
          );
        };
      var i,
        a,
        s = function () {},
        l = s(),
        c = Object,
        f = function (e) {
          return e === l;
        },
        d = function (e) {
          return 'function' == typeof e;
        },
        h = 'undefined' == typeof window || 'Deno' in window ? r.useEffect : r.useLayoutEffect,
        p = new WeakMap(),
        g = 0,
        v = function (e) {
          var t,
            n,
            r = typeof e,
            u = e && e.constructor,
            o = u == Date;
          if (c(e) !== e || o || u == RegExp)
            t = o ? e.toJSON() : 'symbol' == r ? e.toString() : 'string' == r ? JSON.stringify(e) : '' + e;
          else {
            if ((t = p.get(e))) return t;
            if (((t = ++g + '~'), p.set(e, t), u == Array)) {
              for (t = '@', n = 0; n < e.length; n++) t += v(e[n]) + ',';
              p.set(e, t);
            }
            if (u == c) {
              t = '#';
              for (var i = c.keys(e).sort(); !f((n = i.pop())); ) f(e[n]) || (t += n + ':' + v(e[n]) + ',');
              p.set(e, t);
            }
          }
          return t;
        },
        y = function (e) {
          if (d(e))
            try {
              e = e();
            } catch (t) {
              e = '';
            }
          var t = [].concat(e);
          return [
            (e = 'string' == typeof e ? e : (Array.isArray(e) ? e.length : e) ? v(e) : ''),
            t,
            e ? '$swr$' + e : '',
          ];
        },
        E = function (e) {
          return d(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}];
        },
        m =
          ((i = u.ZP),
          (a = function (e) {
            return function (t, n, u) {
              var o = (0, r.useState)({})[1],
                i = (0, r.useRef)(!1),
                a = (0, r.useRef)(),
                s = u.cache,
                c = u.initialSize,
                p = void 0 === c ? 1 : c,
                g = u.revalidateAll,
                v = void 0 !== g && g,
                E = u.persistSize,
                m = void 0 !== E && E,
                b = u.revalidateFirstPage,
                S = void 0 === b || b,
                w = u.revalidateOnMount,
                D = void 0 !== w && w,
                A = null;
              try {
                A = (function (e) {
                  return y(e ? e(0, null) : null)[0];
                })(t);
              } catch (e) {}
              var C = null,
                O = null;
              A && ((C = '$ctx$' + A), (O = '$len$' + A));
              var T = (0, r.useCallback)(
                  function () {
                    var e = s.get(O);
                    return f(e) ? p : e;
                  },
                  [O, p],
                ),
                F = (0, r.useRef)(T());
              h(
                function () {
                  i.current ? A && s.set(O, m ? F.current : p) : (i.current = !0);
                },
                [A],
              );
              var k = D && !i.current,
                x = e(
                  A ? '$inf$' + A : null,
                  function () {
                    return (
                      (e = void 0),
                      (r = void 0),
                      (i = function () {
                        var e, r, o, i, l, c, d, h, p, g, E, m;
                        return (function (e, t) {
                          var n,
                            r,
                            u,
                            o,
                            i = {
                              label: 0,
                              sent: function () {
                                if (1 & u[0]) throw u[1];
                                return u[1];
                              },
                              trys: [],
                              ops: [],
                            };
                          return (
                            (o = { next: a(0), throw: a(1), return: a(2) }),
                            'function' == typeof Symbol &&
                              (o[Symbol.iterator] = function () {
                                return this;
                              }),
                            o
                          );
                          function a(o) {
                            return function (a) {
                              return (function (o) {
                                if (n) throw new TypeError('Generator is already executing.');
                                for (; i; )
                                  try {
                                    if (
                                      ((n = 1),
                                      r &&
                                        (u =
                                          2 & o[0]
                                            ? r.return
                                            : o[0]
                                            ? r.throw || ((u = r.return) && u.call(r), 0)
                                            : r.next) &&
                                        !(u = u.call(r, o[1])).done)
                                    )
                                      return u;
                                    switch (((r = 0), u && (o = [2 & o[0], u.value]), o[0])) {
                                      case 0:
                                      case 1:
                                        u = o;
                                        break;
                                      case 4:
                                        return i.label++, { value: o[1], done: !1 };
                                      case 5:
                                        i.label++, (r = o[1]), (o = [0]);
                                        continue;
                                      case 7:
                                        (o = i.ops.pop()), i.trys.pop();
                                        continue;
                                      default:
                                        if (
                                          !(
                                            (u = (u = i.trys).length > 0 && u[u.length - 1]) ||
                                            (6 !== o[0] && 2 !== o[0])
                                          )
                                        ) {
                                          i = 0;
                                          continue;
                                        }
                                        if (3 === o[0] && (!u || (o[1] > u[0] && o[1] < u[3]))) {
                                          i.label = o[1];
                                          break;
                                        }
                                        if (6 === o[0] && i.label < u[1]) {
                                          (i.label = u[1]), (u = o);
                                          break;
                                        }
                                        if (u && i.label < u[2]) {
                                          (i.label = u[2]), i.ops.push(o);
                                          break;
                                        }
                                        u[2] && i.ops.pop(), i.trys.pop();
                                        continue;
                                    }
                                    o = t.call(e, i);
                                  } catch (e) {
                                    (o = [6, e]), (r = 0);
                                  } finally {
                                    n = u = 0;
                                  }
                                if (5 & o[0]) throw o[1];
                                return { value: o[0] ? o[1] : void 0, done: !0 };
                              })([o, a]);
                            };
                          }
                        })(this, function (b) {
                          switch (b.label) {
                            case 0:
                              (e = s.get(C) || []),
                                (r = e[0]),
                                (o = e[1]),
                                (i = []),
                                (l = T()),
                                (c = null),
                                (d = 0),
                                (b.label = 1);
                            case 1:
                              return d < l
                                ? ((h = y(t(d, c))),
                                  (p = h[0]),
                                  (g = h[1]),
                                  p
                                    ? ((E = s.get(p)),
                                      (m =
                                        v ||
                                        r ||
                                        f(E) ||
                                        (S && !d && !f(a.current)) ||
                                        k ||
                                        (o && !f(o[d]) && !u.compare(o[d], E))),
                                      n && m ? [4, n.apply(void 0, g)] : [3, 3])
                                    : [3, 5])
                                : [3, 5];
                            case 2:
                              (E = b.sent()), s.set(p, E), (b.label = 3);
                            case 3:
                              i.push(E), (c = E), (b.label = 4);
                            case 4:
                              return ++d, [3, 1];
                            case 5:
                              return s.delete(C), [2, i];
                          }
                        });
                      }),
                      new ((o = void 0) || (o = Promise))(function (t, n) {
                        function u(e) {
                          try {
                            s(i.next(e));
                          } catch (e) {
                            n(e);
                          }
                        }
                        function a(e) {
                          try {
                            s(i.throw(e));
                          } catch (e) {
                            n(e);
                          }
                        }
                        function s(e) {
                          var n;
                          e.done
                            ? t(e.value)
                            : ((n = e.value),
                              n instanceof o
                                ? n
                                : new o(function (e) {
                                    e(n);
                                  })).then(u, a);
                        }
                        s((i = i.apply(e, r || [])).next());
                      })
                    );
                    var e, r, o, i;
                  },
                  u,
                );
              h(
                function () {
                  a.current = x.data;
                },
                [x.data],
              );
              var M = (0, r.useCallback)(
                  function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = e[0],
                      r = !1 !== e[1];
                    if (C) {
                      if (r)
                        if (f(n)) s.set(C, [!0]);
                        else {
                          var u = a.current;
                          s.set(C, [!1, u]);
                        }
                      return e.length ? x.mutate(n, r) : x.mutate();
                    }
                  },
                  [C],
                ),
                H = (0, r.useCallback)(
                  function (e) {
                    var n;
                    if (O && (d(e) ? (n = e(T())) : 'number' == typeof e && (n = e), 'number' == typeof n))
                      return (
                        s.set(O, n),
                        (F.current = n),
                        o({}),
                        M(
                          (function (e) {
                            for (var n = [], r = null, u = 0; u < e; ++u) {
                              var o = y(t(u, r))[0],
                                i = o ? s.get(o) : l;
                              if (f(i)) return a.current;
                              n.push(i), (r = i);
                            }
                            return n;
                          })(n),
                        )
                      );
                  },
                  [O, T, M],
                );
              return {
                size: T(),
                setSize: H,
                mutate: M,
                get error() {
                  return x.error;
                },
                get data() {
                  return x.data;
                },
                get isValidating() {
                  return x.isValidating;
                },
              };
            };
          }),
          function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = E(e),
              r = n[0],
              u = n[1],
              s = n[2],
              l = (s.use || []).concat(a);
            return i(r, u, o(o({}, s), { use: l }));
          });
    },
  },
]);
