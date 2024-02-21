/**!
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function le(o, t) {
  var e = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(o);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(o, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function z(o) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? le(Object(e), !0).forEach(function(n) {
      xe(o, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(e)) : le(Object(e)).forEach(function(n) {
      Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return o;
}
function Mt(o) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mt = function(t) {
    return typeof t;
  } : Mt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mt(o);
}
function xe(o, t, e) {
  return t in o ? Object.defineProperty(o, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[t] = e, o;
}
function q() {
  return q = Object.assign || function(o) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
    }
    return o;
  }, q.apply(this, arguments);
}
function Me(o, t) {
  if (o == null)
    return {};
  var e = {}, n = Object.keys(o), i, r;
  for (r = 0; r < n.length; r++)
    i = n[r], !(t.indexOf(i) >= 0) && (e[i] = o[i]);
  return e;
}
function Fe(o, t) {
  if (o == null)
    return {};
  var e = Me(o, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(o);
    for (i = 0; i < r.length; i++)
      n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(o, n) && (e[n] = o[n]);
  }
  return e;
}
var Re = "1.15.2";
function U(o) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(o);
}
var V = U(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ct = U(/Edge/i), se = U(/firefox/i), yt = U(/safari/i) && !U(/chrome/i) && !U(/android/i), me = U(/iP(ad|od|hone)/i), ve = U(/chrome/i) && U(/android/i), be = {
  capture: !1,
  passive: !1
};
function E(o, t, e) {
  o.addEventListener(t, e, !V && be);
}
function b(o, t, e) {
  o.removeEventListener(t, e, !V && be);
}
function kt(o, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), o)
      try {
        if (o.matches)
          return o.matches(t);
        if (o.msMatchesSelector)
          return o.msMatchesSelector(t);
        if (o.webkitMatchesSelector)
          return o.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Xe(o) {
  return o.host && o !== document && o.host.nodeType ? o.host : o.parentNode;
}
function W(o, t, e, n) {
  if (o) {
    e = e || document;
    do {
      if (t != null && (t[0] === ">" ? o.parentNode === e && kt(o, t) : kt(o, t)) || n && o === e)
        return o;
      if (o === e)
        break;
    } while (o = Xe(o));
  }
  return null;
}
var ue = /\s+/g;
function F(o, t, e) {
  if (o && t)
    if (o.classList)
      o.classList[e ? "add" : "remove"](t);
    else {
      var n = (" " + o.className + " ").replace(ue, " ").replace(" " + t + " ", " ");
      o.className = (n + (e ? " " + t : "")).replace(ue, " ");
    }
}
function h(o, t, e) {
  var n = o && o.style;
  if (n) {
    if (e === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? e = document.defaultView.getComputedStyle(o, "") : o.currentStyle && (e = o.currentStyle), t === void 0 ? e : e[t];
    !(t in n) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), n[t] = e + (typeof e == "string" ? "" : "px");
  }
}
function ct(o, t) {
  var e = "";
  if (typeof o == "string")
    e = o;
  else
    do {
      var n = h(o, "transform");
      n && n !== "none" && (e = n + " " + e);
    } while (!t && (o = o.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(e);
}
function Ee(o, t, e) {
  if (o) {
    var n = o.getElementsByTagName(t), i = 0, r = n.length;
    if (e)
      for (; i < r; i++)
        e(n[i], i);
    return n;
  }
  return [];
}
function L() {
  var o = document.scrollingElement;
  return o || document.documentElement;
}
function C(o, t, e, n, i) {
  if (!(!o.getBoundingClientRect && o !== window)) {
    var r, a, l, s, u, d, c;
    if (o !== window && o.parentNode && o !== L() ? (r = o.getBoundingClientRect(), a = r.top, l = r.left, s = r.bottom, u = r.right, d = r.height, c = r.width) : (a = 0, l = 0, s = window.innerHeight, u = window.innerWidth, d = window.innerHeight, c = window.innerWidth), (t || e) && o !== window && (i = i || o.parentNode, !V))
      do
        if (i && i.getBoundingClientRect && (h(i, "transform") !== "none" || e && h(i, "position") !== "static")) {
          var m = i.getBoundingClientRect();
          a -= m.top + parseInt(h(i, "border-top-width")), l -= m.left + parseInt(h(i, "border-left-width")), s = a + r.height, u = l + r.width;
          break;
        }
      while (i = i.parentNode);
    if (n && o !== window) {
      var y = ct(i || o), v = y && y.a, w = y && y.d;
      y && (a /= w, l /= v, c /= v, d /= w, s = a + d, u = l + c);
    }
    return {
      top: a,
      left: l,
      bottom: s,
      right: u,
      width: c,
      height: d
    };
  }
}
function fe(o, t, e) {
  for (var n = tt(o, !0), i = C(o)[t]; n; ) {
    var r = C(n)[e], a = void 0;
    if (e === "top" || e === "left" ? a = i >= r : a = i <= r, !a)
      return n;
    if (n === L())
      break;
    n = tt(n, !1);
  }
  return !1;
}
function dt(o, t, e, n) {
  for (var i = 0, r = 0, a = o.children; r < a.length; ) {
    if (a[r].style.display !== "none" && a[r] !== p.ghost && (n || a[r] !== p.dragged) && W(a[r], e.draggable, o, !1)) {
      if (i === t)
        return a[r];
      i++;
    }
    r++;
  }
  return null;
}
function oe(o, t) {
  for (var e = o.lastElementChild; e && (e === p.ghost || h(e, "display") === "none" || t && !kt(e, t)); )
    e = e.previousElementSibling;
  return e || null;
}
function Y(o, t) {
  var e = 0;
  if (!o || !o.parentNode)
    return -1;
  for (; o = o.previousElementSibling; )
    o.nodeName.toUpperCase() !== "TEMPLATE" && o !== p.clone && (!t || kt(o, t)) && e++;
  return e;
}
function ce(o) {
  var t = 0, e = 0, n = L();
  if (o)
    do {
      var i = ct(o), r = i.a, a = i.d;
      t += o.scrollLeft * r, e += o.scrollTop * a;
    } while (o !== n && (o = o.parentNode));
  return [t, e];
}
function Ye(o, t) {
  for (var e in o)
    if (o.hasOwnProperty(e)) {
      for (var n in t)
        if (t.hasOwnProperty(n) && t[n] === o[e][n])
          return Number(e);
    }
  return -1;
}
function tt(o, t) {
  if (!o || !o.getBoundingClientRect)
    return L();
  var e = o, n = !1;
  do
    if (e.clientWidth < e.scrollWidth || e.clientHeight < e.scrollHeight) {
      var i = h(e);
      if (e.clientWidth < e.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || e.clientHeight < e.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!e.getBoundingClientRect || e === document.body)
          return L();
        if (n || t)
          return e;
        n = !0;
      }
    }
  while (e = e.parentNode);
  return L();
}
function ke(o, t) {
  if (o && t)
    for (var e in t)
      t.hasOwnProperty(e) && (o[e] = t[e]);
  return o;
}
function zt(o, t) {
  return Math.round(o.top) === Math.round(t.top) && Math.round(o.left) === Math.round(t.left) && Math.round(o.height) === Math.round(t.height) && Math.round(o.width) === Math.round(t.width);
}
var _t;
function we(o, t) {
  return function() {
    if (!_t) {
      var e = arguments, n = this;
      e.length === 1 ? o.call(n, e[0]) : o.apply(n, e), _t = setTimeout(function() {
        _t = void 0;
      }, t);
    }
  };
}
function Be() {
  clearTimeout(_t), _t = void 0;
}
function ye(o, t, e) {
  o.scrollLeft += t, o.scrollTop += e;
}
function _e(o) {
  var t = window.Polymer, e = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(o).cloneNode(!0) : e ? e(o).clone(!0)[0] : o.cloneNode(!0);
}
function De(o, t, e) {
  var n = {};
  return Array.from(o.children).forEach(function(i) {
    var r, a, l, s;
    if (!(!W(i, t.draggable, o, !1) || i.animated || i === e)) {
      var u = C(i);
      n.left = Math.min((r = n.left) !== null && r !== void 0 ? r : 1 / 0, u.left), n.top = Math.min((a = n.top) !== null && a !== void 0 ? a : 1 / 0, u.top), n.right = Math.max((l = n.right) !== null && l !== void 0 ? l : -1 / 0, u.right), n.bottom = Math.max((s = n.bottom) !== null && s !== void 0 ? s : -1 / 0, u.bottom);
    }
  }), n.width = n.right - n.left, n.height = n.bottom - n.top, n.x = n.left, n.y = n.top, n;
}
var X = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function He() {
  var o = [], t;
  return {
    captureAnimationState: function() {
      if (o = [], !!this.options.animation) {
        var n = [].slice.call(this.el.children);
        n.forEach(function(i) {
          if (!(h(i, "display") === "none" || i === p.ghost)) {
            o.push({
              target: i,
              rect: C(i)
            });
            var r = z({}, o[o.length - 1].rect);
            if (i.thisAnimationDuration) {
              var a = ct(i, !0);
              a && (r.top -= a.f, r.left -= a.e);
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(n) {
      o.push(n);
    },
    removeAnimationState: function(n) {
      o.splice(Ye(o, {
        target: n
      }), 1);
    },
    animateAll: function(n) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof n == "function" && n();
        return;
      }
      var r = !1, a = 0;
      o.forEach(function(l) {
        var s = 0, u = l.target, d = u.fromRect, c = C(u), m = u.prevFromRect, y = u.prevToRect, v = l.rect, w = ct(u, !0);
        w && (c.top -= w.f, c.left -= w.e), u.toRect = c, u.thisAnimationDuration && zt(m, c) && !zt(d, c) && // Make sure animatingRect is on line between toRect & fromRect
        (v.top - c.top) / (v.left - c.left) === (d.top - c.top) / (d.left - c.left) && (s = Ge(v, m, y, i.options)), zt(c, d) || (u.prevFromRect = d, u.prevToRect = c, s || (s = i.options.animation), i.animate(u, v, c, s)), s && (r = !0, a = Math.max(a, s), clearTimeout(u.animationResetTimer), u.animationResetTimer = setTimeout(function() {
          u.animationTime = 0, u.prevFromRect = null, u.fromRect = null, u.prevToRect = null, u.thisAnimationDuration = null;
        }, s), u.thisAnimationDuration = s);
      }), clearTimeout(t), r ? t = setTimeout(function() {
        typeof n == "function" && n();
      }, a) : typeof n == "function" && n(), o = [];
    },
    animate: function(n, i, r, a) {
      if (a) {
        h(n, "transition", ""), h(n, "transform", "");
        var l = ct(this.el), s = l && l.a, u = l && l.d, d = (i.left - r.left) / (s || 1), c = (i.top - r.top) / (u || 1);
        n.animatingX = !!d, n.animatingY = !!c, h(n, "transform", "translate3d(" + d + "px," + c + "px,0)"), this.forRepaintDummy = We(n), h(n, "transition", "transform " + a + "ms" + (this.options.easing ? " " + this.options.easing : "")), h(n, "transform", "translate3d(0,0,0)"), typeof n.animated == "number" && clearTimeout(n.animated), n.animated = setTimeout(function() {
          h(n, "transition", ""), h(n, "transform", ""), n.animated = !1, n.animatingX = !1, n.animatingY = !1;
        }, a);
      }
    }
  };
}
function We(o) {
  return o.offsetWidth;
}
function Ge(o, t, e, n) {
  return Math.sqrt(Math.pow(t.top - o.top, 2) + Math.pow(t.left - o.left, 2)) / Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) * n.animation;
}
var lt = [], jt = {
  initializeByDefault: !0
}, Ot = {
  mount: function(t) {
    for (var e in jt)
      jt.hasOwnProperty(e) && !(e in t) && (t[e] = jt[e]);
    lt.forEach(function(n) {
      if (n.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), lt.push(t);
  },
  pluginEvent: function(t, e, n) {
    var i = this;
    this.eventCanceled = !1, n.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = t + "Global";
    lt.forEach(function(a) {
      e[a.pluginName] && (e[a.pluginName][r] && e[a.pluginName][r](z({
        sortable: e
      }, n)), e.options[a.pluginName] && e[a.pluginName][t] && e[a.pluginName][t](z({
        sortable: e
      }, n)));
    });
  },
  initializePlugins: function(t, e, n, i) {
    lt.forEach(function(l) {
      var s = l.pluginName;
      if (!(!t.options[s] && !l.initializeByDefault)) {
        var u = new l(t, e, t.options);
        u.sortable = t, u.options = t.options, t[s] = u, q(n, u.defaults);
      }
    });
    for (var r in t.options)
      if (t.options.hasOwnProperty(r)) {
        var a = this.modifyOption(t, r, t.options[r]);
        typeof a < "u" && (t.options[r] = a);
      }
  },
  getEventProperties: function(t, e) {
    var n = {};
    return lt.forEach(function(i) {
      typeof i.eventProperties == "function" && q(n, i.eventProperties.call(e[i.pluginName], t));
    }), n;
  },
  modifyOption: function(t, e, n) {
    var i;
    return lt.forEach(function(r) {
      t[r.pluginName] && r.optionListeners && typeof r.optionListeners[e] == "function" && (i = r.optionListeners[e].call(t[r.pluginName], n));
    }), i;
  }
};
function Le(o) {
  var t = o.sortable, e = o.rootEl, n = o.name, i = o.targetEl, r = o.cloneEl, a = o.toEl, l = o.fromEl, s = o.oldIndex, u = o.newIndex, d = o.oldDraggableIndex, c = o.newDraggableIndex, m = o.originalEvent, y = o.putSortable, v = o.extraEventProperties;
  if (t = t || e && e[X], !!t) {
    var w, k = t.options, j = "on" + n.charAt(0).toUpperCase() + n.substr(1);
    window.CustomEvent && !V && !Ct ? w = new CustomEvent(n, {
      bubbles: !0,
      cancelable: !0
    }) : (w = document.createEvent("Event"), w.initEvent(n, !0, !0)), w.to = a || e, w.from = l || e, w.item = i || e, w.clone = r, w.oldIndex = s, w.newIndex = u, w.oldDraggableIndex = d, w.newDraggableIndex = c, w.originalEvent = m, w.pullMode = y ? y.lastPutMode : void 0;
    var A = z(z({}, v), Ot.getEventProperties(n, t));
    for (var B in A)
      w[B] = A[B];
    e && e.dispatchEvent(w), k[j] && k[j].call(t, w);
  }
}
var ze = ["evt"], N = function(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = n.evt, r = Fe(n, ze);
  Ot.pluginEvent.bind(p)(t, e, z({
    dragEl: f,
    parentEl: S,
    ghostEl: g,
    rootEl: _,
    nextEl: at,
    lastDownEl: Ft,
    cloneEl: D,
    cloneHidden: J,
    dragStarted: bt,
    putSortable: O,
    activeSortable: p.active,
    originalEvent: i,
    oldIndex: ft,
    oldDraggableIndex: Dt,
    newIndex: R,
    newDraggableIndex: Q,
    hideGhostForTarget: Oe,
    unhideGhostForTarget: Ie,
    cloneNowHidden: function() {
      J = !0;
    },
    cloneNowShown: function() {
      J = !1;
    },
    dispatchSortableEvent: function(l) {
      P({
        sortable: e,
        name: l,
        originalEvent: i
      });
    }
  }, r));
};
function P(o) {
  Le(z({
    putSortable: O,
    cloneEl: D,
    targetEl: f,
    rootEl: _,
    oldIndex: ft,
    oldDraggableIndex: Dt,
    newIndex: R,
    newDraggableIndex: Q
  }, o));
}
var f, S, g, _, at, Ft, D, J, ft, R, Dt, Q, At, O, ut = !1, Bt = !1, Ht = [], it, H, $t, Ut, de, he, bt, st, St, Tt = !1, Pt = !1, Rt, I, qt = [], Jt = !1, Wt = [], Lt = typeof document < "u", Nt = me, pe = Ct || V ? "cssFloat" : "float", je = Lt && !ve && !me && "draggable" in document.createElement("div"), Se = function() {
  if (Lt) {
    if (V)
      return !1;
    var o = document.createElement("x");
    return o.style.cssText = "pointer-events:auto", o.style.pointerEvents === "auto";
  }
}(), Te = function(t, e) {
  var n = h(t), i = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth), r = dt(t, 0, e), a = dt(t, 1, e), l = r && h(r), s = a && h(a), u = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + C(r).width, d = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + C(a).width;
  if (n.display === "flex")
    return n.flexDirection === "column" || n.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (n.display === "grid")
    return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && l.float && l.float !== "none") {
    var c = l.float === "left" ? "left" : "right";
    return a && (s.clear === "both" || s.clear === c) ? "vertical" : "horizontal";
  }
  return r && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || u >= i && n[pe] === "none" || a && n[pe] === "none" && u + d > i) ? "vertical" : "horizontal";
}, $e = function(t, e, n) {
  var i = n ? t.left : t.top, r = n ? t.right : t.bottom, a = n ? t.width : t.height, l = n ? e.left : e.top, s = n ? e.right : e.bottom, u = n ? e.width : e.height;
  return i === l || r === s || i + a / 2 === l + u / 2;
}, Ue = function(t, e) {
  var n;
  return Ht.some(function(i) {
    var r = i[X].options.emptyInsertThreshold;
    if (!(!r || oe(i))) {
      var a = C(i), l = t >= a.left - r && t <= a.right + r, s = e >= a.top - r && e <= a.bottom + r;
      if (l && s)
        return n = i;
    }
  }), n;
}, Ce = function(t) {
  function e(r, a) {
    return function(l, s, u, d) {
      var c = l.options.group.name && s.options.group.name && l.options.group.name === s.options.group.name;
      if (r == null && (a || c))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (a && r === "clone")
        return r;
      if (typeof r == "function")
        return e(r(l, s, u, d), a)(l, s, u, d);
      var m = (a ? l : s).options.group.name;
      return r === !0 || typeof r == "string" && r === m || r.join && r.indexOf(m) > -1;
    };
  }
  var n = {}, i = t.group;
  (!i || Mt(i) != "object") && (i = {
    name: i
  }), n.name = i.name, n.checkPull = e(i.pull, !0), n.checkPut = e(i.put), n.revertClone = i.revertClone, t.group = n;
}, Oe = function() {
  !Se && g && h(g, "display", "none");
}, Ie = function() {
  !Se && g && h(g, "display", "");
};
Lt && !ve && document.addEventListener("click", function(o) {
  if (Bt)
    return o.preventDefault(), o.stopPropagation && o.stopPropagation(), o.stopImmediatePropagation && o.stopImmediatePropagation(), Bt = !1, !1;
}, !0);
var rt = function(t) {
  if (f) {
    t = t.touches ? t.touches[0] : t;
    var e = Ue(t.clientX, t.clientY);
    if (e) {
      var n = {};
      for (var i in t)
        t.hasOwnProperty(i) && (n[i] = t[i]);
      n.target = n.rootEl = e, n.preventDefault = void 0, n.stopPropagation = void 0, e[X]._onDragOver(n);
    }
  }
}, qe = function(t) {
  f && f.parentNode[X]._isOutsideThisEl(t.target);
};
function p(o, t) {
  if (!(o && o.nodeType && o.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));
  this.el = o, this.options = t = q({}, t), o[X] = this;
  var e = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(o.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return Te(o, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(a, l) {
      a.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: p.supportPointer !== !1 && "PointerEvent" in window && !yt,
    emptyInsertThreshold: 5
  };
  Ot.initializePlugins(this, o, e);
  for (var n in e)
    !(n in t) && (t[n] = e[n]);
  Ce(t);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : je, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? E(o, "pointerdown", this._onTapStart) : (E(o, "mousedown", this._onTapStart), E(o, "touchstart", this._onTapStart)), this.nativeDraggable && (E(o, "dragover", this), E(o, "dragenter", this)), Ht.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), q(this, He());
}
p.prototype = /** @lends Sortable.prototype */
{
  constructor: p,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (st = null);
  },
  _getDirection: function(t, e) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, e, f) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var e = this, n = this.el, i = this.options, r = i.preventOnFilter, a = t.type, l = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, s = (l || t).target, u = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || s, d = i.filter;
      if (nn(n), !f && !(/mousedown|pointerdown/.test(a) && t.button !== 0 || i.disabled) && !u.isContentEditable && !(!this.nativeDraggable && yt && s && s.tagName.toUpperCase() === "SELECT") && (s = W(s, i.draggable, n, !1), !(s && s.animated) && Ft !== s)) {
        if (ft = Y(s), Dt = Y(s, i.draggable), typeof d == "function") {
          if (d.call(this, t, s, this)) {
            P({
              sortable: e,
              rootEl: u,
              name: "filter",
              targetEl: s,
              toEl: n,
              fromEl: n
            }), N("filter", e, {
              evt: t
            }), r && t.cancelable && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(c) {
          if (c = W(u, c.trim(), n, !1), c)
            return P({
              sortable: e,
              rootEl: c,
              name: "filter",
              targetEl: s,
              fromEl: n,
              toEl: n
            }), N("filter", e, {
              evt: t
            }), !0;
        }), d)) {
          r && t.cancelable && t.preventDefault();
          return;
        }
        i.handle && !W(u, i.handle, n, !1) || this._prepareDragStart(t, l, s);
      }
    }
  },
  _prepareDragStart: function(t, e, n) {
    var i = this, r = i.el, a = i.options, l = r.ownerDocument, s;
    if (n && !f && n.parentNode === r) {
      var u = C(n);
      if (_ = r, f = n, S = f.parentNode, at = f.nextSibling, Ft = n, At = a.group, p.dragged = f, it = {
        target: f,
        clientX: (e || t).clientX,
        clientY: (e || t).clientY
      }, de = it.clientX - u.left, he = it.clientY - u.top, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, f.style["will-change"] = "all", s = function() {
        if (N("delayEnded", i, {
          evt: t
        }), p.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !se && i.nativeDraggable && (f.draggable = !0), i._triggerDragStart(t, e), P({
          sortable: i,
          name: "choose",
          originalEvent: t
        }), F(f, a.chosenClass, !0);
      }, a.ignore.split(",").forEach(function(d) {
        Ee(f, d.trim(), Vt);
      }), E(l, "dragover", rt), E(l, "mousemove", rt), E(l, "touchmove", rt), E(l, "mouseup", i._onDrop), E(l, "touchend", i._onDrop), E(l, "touchcancel", i._onDrop), se && this.nativeDraggable && (this.options.touchStartThreshold = 4, f.draggable = !0), N("delayStart", this, {
        evt: t
      }), a.delay && (!a.delayOnTouchOnly || e) && (!this.nativeDraggable || !(Ct || V))) {
        if (p.eventCanceled) {
          this._onDrop();
          return;
        }
        E(l, "mouseup", i._disableDelayedDrag), E(l, "touchend", i._disableDelayedDrag), E(l, "touchcancel", i._disableDelayedDrag), E(l, "mousemove", i._delayedDragTouchMoveHandler), E(l, "touchmove", i._delayedDragTouchMoveHandler), a.supportPointer && E(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(s, a.delay);
      } else
        s();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var e = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    f && Vt(f), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    b(t, "mouseup", this._disableDelayedDrag), b(t, "touchend", this._disableDelayedDrag), b(t, "touchcancel", this._disableDelayedDrag), b(t, "mousemove", this._delayedDragTouchMoveHandler), b(t, "touchmove", this._delayedDragTouchMoveHandler), b(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, e) {
    e = e || t.pointerType == "touch" && t, !this.nativeDraggable || e ? this.options.supportPointer ? E(document, "pointermove", this._onTouchMove) : e ? E(document, "touchmove", this._onTouchMove) : E(document, "mousemove", this._onTouchMove) : (E(f, "dragend", this), E(_, "dragstart", this._onDragStart));
    try {
      document.selection ? Xt(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, e) {
    if (ut = !1, _ && f) {
      N("dragStarted", this, {
        evt: e
      }), this.nativeDraggable && E(document, "dragover", qe);
      var n = this.options;
      !t && F(f, n.dragClass, !1), F(f, n.ghostClass, !0), p.active = this, t && this._appendGhost(), P({
        sortable: this,
        name: "start",
        originalEvent: e
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (H) {
      this._lastX = H.clientX, this._lastY = H.clientY, Oe();
      for (var t = document.elementFromPoint(H.clientX, H.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(H.clientX, H.clientY), t !== e); )
        e = t;
      if (f.parentNode[X]._isOutsideThisEl(t), e)
        do {
          if (e[X]) {
            var n = void 0;
            if (n = e[X]._onDragOver({
              clientX: H.clientX,
              clientY: H.clientY,
              target: t,
              rootEl: e
            }), n && !this.options.dragoverBubble)
              break;
          }
          t = e;
        } while (e = e.parentNode);
      Ie();
    }
  },
  _onTouchMove: function(t) {
    if (it) {
      var e = this.options, n = e.fallbackTolerance, i = e.fallbackOffset, r = t.touches ? t.touches[0] : t, a = g && ct(g, !0), l = g && a && a.a, s = g && a && a.d, u = Nt && I && ce(I), d = (r.clientX - it.clientX + i.x) / (l || 1) + (u ? u[0] - qt[0] : 0) / (l || 1), c = (r.clientY - it.clientY + i.y) / (s || 1) + (u ? u[1] - qt[1] : 0) / (s || 1);
      if (!p.active && !ut) {
        if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n)
          return;
        this._onDragStart(t, !0);
      }
      if (g) {
        a ? (a.e += d - ($t || 0), a.f += c - (Ut || 0)) : a = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: c
        };
        var m = "matrix(".concat(a.a, ",").concat(a.b, ",").concat(a.c, ",").concat(a.d, ",").concat(a.e, ",").concat(a.f, ")");
        h(g, "webkitTransform", m), h(g, "mozTransform", m), h(g, "msTransform", m), h(g, "transform", m), $t = d, Ut = c, H = r;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!g) {
      var t = this.options.fallbackOnBody ? document.body : _, e = C(f, !0, Nt, !0, t), n = this.options;
      if (Nt) {
        for (I = t; h(I, "position") === "static" && h(I, "transform") === "none" && I !== document; )
          I = I.parentNode;
        I !== document.body && I !== document.documentElement ? (I === document && (I = L()), e.top += I.scrollTop, e.left += I.scrollLeft) : I = L(), qt = ce(I);
      }
      g = f.cloneNode(!0), F(g, n.ghostClass, !1), F(g, n.fallbackClass, !0), F(g, n.dragClass, !0), h(g, "transition", ""), h(g, "transform", ""), h(g, "box-sizing", "border-box"), h(g, "margin", 0), h(g, "top", e.top), h(g, "left", e.left), h(g, "width", e.width), h(g, "height", e.height), h(g, "opacity", "0.8"), h(g, "position", Nt ? "absolute" : "fixed"), h(g, "zIndex", "100000"), h(g, "pointerEvents", "none"), p.ghost = g, t.appendChild(g), h(g, "transform-origin", de / parseInt(g.style.width) * 100 + "% " + he / parseInt(g.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, e) {
    var n = this, i = t.dataTransfer, r = n.options;
    if (N("dragStart", this, {
      evt: t
    }), p.eventCanceled) {
      this._onDrop();
      return;
    }
    N("setupClone", this), p.eventCanceled || (D = _e(f), D.removeAttribute("id"), D.draggable = !1, D.style["will-change"] = "", this._hideClone(), F(D, this.options.chosenClass, !1), p.clone = D), n.cloneId = Xt(function() {
      N("clone", n), !p.eventCanceled && (n.options.removeCloneOnHide || _.insertBefore(D, f), n._hideClone(), P({
        sortable: n,
        name: "clone"
      }));
    }), !e && F(f, r.dragClass, !0), e ? (Bt = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (b(document, "mouseup", n._onDrop), b(document, "touchend", n._onDrop), b(document, "touchcancel", n._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(n, i, f)), E(document, "drop", n), h(f, "transform", "translateZ(0)")), ut = !0, n._dragStartId = Xt(n._dragStarted.bind(n, e, t)), E(document, "selectstart", n), bt = !0, yt && h(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var e = this.el, n = t.target, i, r, a, l = this.options, s = l.group, u = p.active, d = At === s, c = l.sort, m = O || u, y, v = this, w = !1;
    if (Jt)
      return;
    function k(vt, Pe) {
      N(vt, v, z({
        evt: t,
        isOwner: d,
        axis: y ? "vertical" : "horizontal",
        revert: a,
        dragRect: i,
        targetRect: r,
        canSort: c,
        fromSortable: m,
        target: n,
        completed: A,
        onMove: function(ae, Ne) {
          return xt(_, e, f, i, ae, C(ae), t, Ne);
        },
        changed: B
      }, Pe));
    }
    function j() {
      k("dragOverAnimationCapture"), v.captureAnimationState(), v !== m && m.captureAnimationState();
    }
    function A(vt) {
      return k("dragOverCompleted", {
        insertion: vt
      }), vt && (d ? u._hideClone() : u._showClone(v), v !== m && (F(f, O ? O.options.ghostClass : u.options.ghostClass, !1), F(f, l.ghostClass, !0)), O !== v && v !== p.active ? O = v : v === p.active && O && (O = null), m === v && (v._ignoreWhileAnimating = n), v.animateAll(function() {
        k("dragOverAnimationComplete"), v._ignoreWhileAnimating = null;
      }), v !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (n === f && !f.animated || n === e && !n.animated) && (st = null), !l.dragoverBubble && !t.rootEl && n !== document && (f.parentNode[X]._isOutsideThisEl(t.target), !vt && rt(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), w = !0;
    }
    function B() {
      R = Y(f), Q = Y(f, l.draggable), P({
        sortable: v,
        name: "change",
        toEl: e,
        newIndex: R,
        newDraggableIndex: Q,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), n = W(n, l.draggable, e, !0), k("dragOver"), p.eventCanceled)
      return w;
    if (f.contains(t.target) || n.animated && n.animatingX && n.animatingY || v._ignoreWhileAnimating === n)
      return A(!1);
    if (Bt = !1, u && !l.disabled && (d ? c || (a = S !== _) : O === this || (this.lastPutMode = At.checkPull(this, u, f, t)) && s.checkPut(this, u, f, t))) {
      if (y = this._getDirection(t, n) === "vertical", i = C(f), k("dragOverValid"), p.eventCanceled)
        return w;
      if (a)
        return S = _, j(), this._hideClone(), k("revert"), p.eventCanceled || (at ? _.insertBefore(f, at) : _.appendChild(f)), A(!0);
      var x = oe(e, l.draggable);
      if (!x || Qe(t, y, this) && !x.animated) {
        if (x === f)
          return A(!1);
        if (x && e === t.target && (n = x), n && (r = C(n)), xt(_, e, f, i, n, r, t, !!n) !== !1)
          return j(), x && x.nextSibling ? e.insertBefore(f, x.nextSibling) : e.appendChild(f), S = e, B(), A(!0);
      } else if (x && Ze(t, y, this)) {
        var et = dt(e, 0, l, !0);
        if (et === f)
          return A(!1);
        if (n = et, r = C(n), xt(_, e, f, i, n, r, t, !1) !== !1)
          return j(), e.insertBefore(f, et), S = e, B(), A(!0);
      } else if (n.parentNode === e) {
        r = C(n);
        var G = 0, nt, ht = f.parentNode !== e, M = !$e(f.animated && f.toRect || i, n.animated && n.toRect || r, y), pt = y ? "top" : "left", K = fe(n, "top", "top") || fe(f, "top", "top"), gt = K ? K.scrollTop : void 0;
        st !== n && (nt = r[pt], Tt = !1, Pt = !M && l.invertSwap || ht), G = Je(t, n, r, y, M ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Pt, st === n);
        var $;
        if (G !== 0) {
          var ot = Y(f);
          do
            ot -= G, $ = S.children[ot];
          while ($ && (h($, "display") === "none" || $ === g));
        }
        if (G === 0 || $ === n)
          return A(!1);
        st = n, St = G;
        var mt = n.nextElementSibling, Z = !1;
        Z = G === 1;
        var It = xt(_, e, f, i, n, r, t, Z);
        if (It !== !1)
          return (It === 1 || It === -1) && (Z = It === 1), Jt = !0, setTimeout(Ke, 30), j(), Z && !mt ? e.appendChild(f) : n.parentNode.insertBefore(f, Z ? mt : n), K && ye(K, 0, gt - K.scrollTop), S = f.parentNode, nt !== void 0 && !Pt && (Rt = Math.abs(nt - C(n)[pt])), B(), A(!0);
      }
      if (e.contains(f))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    b(document, "mousemove", this._onTouchMove), b(document, "touchmove", this._onTouchMove), b(document, "pointermove", this._onTouchMove), b(document, "dragover", rt), b(document, "mousemove", rt), b(document, "touchmove", rt);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    b(t, "mouseup", this._onDrop), b(t, "touchend", this._onDrop), b(t, "pointerup", this._onDrop), b(t, "touchcancel", this._onDrop), b(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var e = this.el, n = this.options;
    if (R = Y(f), Q = Y(f, n.draggable), N("drop", this, {
      evt: t
    }), S = f && f.parentNode, R = Y(f), Q = Y(f, n.draggable), p.eventCanceled) {
      this._nulling();
      return;
    }
    ut = !1, Pt = !1, Tt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), te(this.cloneId), te(this._dragStartId), this.nativeDraggable && (b(document, "drop", this), b(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), yt && h(document.body, "user-select", ""), h(f, "transform", ""), t && (bt && (t.cancelable && t.preventDefault(), !n.dropBubble && t.stopPropagation()), g && g.parentNode && g.parentNode.removeChild(g), (_ === S || O && O.lastPutMode !== "clone") && D && D.parentNode && D.parentNode.removeChild(D), f && (this.nativeDraggable && b(f, "dragend", this), Vt(f), f.style["will-change"] = "", bt && !ut && F(f, O ? O.options.ghostClass : this.options.ghostClass, !1), F(f, this.options.chosenClass, !1), P({
      sortable: this,
      name: "unchoose",
      toEl: S,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), _ !== S ? (R >= 0 && (P({
      rootEl: S,
      name: "add",
      toEl: S,
      fromEl: _,
      originalEvent: t
    }), P({
      sortable: this,
      name: "remove",
      toEl: S,
      originalEvent: t
    }), P({
      rootEl: S,
      name: "sort",
      toEl: S,
      fromEl: _,
      originalEvent: t
    }), P({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: t
    })), O && O.save()) : R !== ft && R >= 0 && (P({
      sortable: this,
      name: "update",
      toEl: S,
      originalEvent: t
    }), P({
      sortable: this,
      name: "sort",
      toEl: S,
      originalEvent: t
    })), p.active && ((R == null || R === -1) && (R = ft, Q = Dt), P({
      sortable: this,
      name: "end",
      toEl: S,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    N("nulling", this), _ = f = S = g = at = D = Ft = J = it = H = bt = R = Q = ft = Dt = st = St = O = At = p.dragged = p.ghost = p.clone = p.active = null, Wt.forEach(function(t) {
      t.checked = !0;
    }), Wt.length = $t = Ut = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        f && (this._onDragOver(t), Ve(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], e, n = this.el.children, i = 0, r = n.length, a = this.options; i < r; i++)
      e = n[i], W(e, a.draggable, this.el, !1) && t.push(e.getAttribute(a.dataIdAttr) || en(e));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, e) {
    var n = {}, i = this.el;
    this.toArray().forEach(function(r, a) {
      var l = i.children[a];
      W(l, this.options.draggable, i, !1) && (n[r] = l);
    }, this), e && this.captureAnimationState(), t.forEach(function(r) {
      n[r] && (i.removeChild(n[r]), i.appendChild(n[r]));
    }), e && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, e) {
    return W(t, e || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, e) {
    var n = this.options;
    if (e === void 0)
      return n[t];
    var i = Ot.modifyOption(this, t, e);
    typeof i < "u" ? n[t] = i : n[t] = e, t === "group" && Ce(n);
  },
  /**
   * Destroy
   */
  destroy: function() {
    N("destroy", this);
    var t = this.el;
    t[X] = null, b(t, "mousedown", this._onTapStart), b(t, "touchstart", this._onTapStart), b(t, "pointerdown", this._onTapStart), this.nativeDraggable && (b(t, "dragover", this), b(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(e) {
      e.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Ht.splice(Ht.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!J) {
      if (N("hideClone", this), p.eventCanceled)
        return;
      h(D, "display", "none"), this.options.removeCloneOnHide && D.parentNode && D.parentNode.removeChild(D), J = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (J) {
      if (N("showClone", this), p.eventCanceled)
        return;
      f.parentNode == _ && !this.options.group.revertClone ? _.insertBefore(D, f) : at ? _.insertBefore(D, at) : _.appendChild(D), this.options.group.revertClone && this.animate(f, D), h(D, "display", ""), J = !1;
    }
  }
};
function Ve(o) {
  o.dataTransfer && (o.dataTransfer.dropEffect = "move"), o.cancelable && o.preventDefault();
}
function xt(o, t, e, n, i, r, a, l) {
  var s, u = o[X], d = u.options.onMove, c;
  return window.CustomEvent && !V && !Ct ? s = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (s = document.createEvent("Event"), s.initEvent("move", !0, !0)), s.to = t, s.from = o, s.dragged = e, s.draggedRect = n, s.related = i || t, s.relatedRect = r || C(t), s.willInsertAfter = l, s.originalEvent = a, o.dispatchEvent(s), d && (c = d.call(u, s, a)), c;
}
function Vt(o) {
  o.draggable = !1;
}
function Ke() {
  Jt = !1;
}
function Ze(o, t, e) {
  var n = C(dt(e.el, 0, e.options, !0)), i = De(e.el, e.options, g), r = 10;
  return t ? o.clientX < i.left - r || o.clientY < n.top && o.clientX < n.right : o.clientY < i.top - r || o.clientY < n.bottom && o.clientX < n.left;
}
function Qe(o, t, e) {
  var n = C(oe(e.el, e.options.draggable)), i = De(e.el, e.options, g), r = 10;
  return t ? o.clientX > i.right + r || o.clientY > n.bottom && o.clientX > n.left : o.clientY > i.bottom + r || o.clientX > n.right && o.clientY > n.top;
}
function Je(o, t, e, n, i, r, a, l) {
  var s = n ? o.clientY : o.clientX, u = n ? e.height : e.width, d = n ? e.top : e.left, c = n ? e.bottom : e.right, m = !1;
  if (!a) {
    if (l && Rt < u * i) {
      if (!Tt && (St === 1 ? s > d + u * r / 2 : s < c - u * r / 2) && (Tt = !0), Tt)
        m = !0;
      else if (St === 1 ? s < d + Rt : s > c - Rt)
        return -St;
    } else if (s > d + u * (1 - i) / 2 && s < c - u * (1 - i) / 2)
      return tn(t);
  }
  return m = m || a, m && (s < d + u * r / 2 || s > c - u * r / 2) ? s > d + u / 2 ? 1 : -1 : 0;
}
function tn(o) {
  return Y(f) < Y(o) ? 1 : -1;
}
function en(o) {
  for (var t = o.tagName + o.className + o.src + o.href + o.textContent, e = t.length, n = 0; e--; )
    n += t.charCodeAt(e);
  return n.toString(36);
}
function nn(o) {
  Wt.length = 0;
  for (var t = o.getElementsByTagName("input"), e = t.length; e--; ) {
    var n = t[e];
    n.checked && Wt.push(n);
  }
}
function Xt(o) {
  return setTimeout(o, 0);
}
function te(o) {
  return clearTimeout(o);
}
Lt && E(document, "touchmove", function(o) {
  (p.active || ut) && o.cancelable && o.preventDefault();
});
p.utils = {
  on: E,
  off: b,
  css: h,
  find: Ee,
  is: function(t, e) {
    return !!W(t, e, t, !1);
  },
  extend: ke,
  throttle: we,
  closest: W,
  toggleClass: F,
  clone: _e,
  index: Y,
  nextTick: Xt,
  cancelNextTick: te,
  detectDirection: Te,
  getChild: dt
};
p.get = function(o) {
  return o[X];
};
p.mount = function() {
  for (var o = arguments.length, t = new Array(o), e = 0; e < o; e++)
    t[e] = arguments[e];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(n) {
    if (!n.prototype || !n.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));
    n.utils && (p.utils = z(z({}, p.utils), n.utils)), Ot.mount(n);
  });
};
p.create = function(o, t) {
  return new p(o, t);
};
p.version = Re;
var T = [], Et, ee, ne = !1, Kt, Zt, Gt, wt;
function on() {
  function o() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return o.prototype = {
    dragStarted: function(e) {
      var n = e.originalEvent;
      this.sortable.nativeDraggable ? E(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? E(document, "pointermove", this._handleFallbackAutoScroll) : n.touches ? E(document, "touchmove", this._handleFallbackAutoScroll) : E(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(e) {
      var n = e.originalEvent;
      !this.options.dragOverBubble && !n.rootEl && this._handleAutoScroll(n);
    },
    drop: function() {
      this.sortable.nativeDraggable ? b(document, "dragover", this._handleAutoScroll) : (b(document, "pointermove", this._handleFallbackAutoScroll), b(document, "touchmove", this._handleFallbackAutoScroll), b(document, "mousemove", this._handleFallbackAutoScroll)), ge(), Yt(), Be();
    },
    nulling: function() {
      Gt = ee = Et = ne = wt = Kt = Zt = null, T.length = 0;
    },
    _handleFallbackAutoScroll: function(e) {
      this._handleAutoScroll(e, !0);
    },
    _handleAutoScroll: function(e, n) {
      var i = this, r = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, l = document.elementFromPoint(r, a);
      if (Gt = e, n || this.options.forceAutoScrollFallback || Ct || V || yt) {
        Qt(e, this.options, l, n);
        var s = tt(l, !0);
        ne && (!wt || r !== Kt || a !== Zt) && (wt && ge(), wt = setInterval(function() {
          var u = tt(document.elementFromPoint(r, a), !0);
          u !== s && (s = u, Yt()), Qt(e, i.options, u, n);
        }, 10), Kt = r, Zt = a);
      } else {
        if (!this.options.bubbleScroll || tt(l, !0) === L()) {
          Yt();
          return;
        }
        Qt(e, this.options, tt(l, !1), !1);
      }
    }
  }, q(o, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Yt() {
  T.forEach(function(o) {
    clearInterval(o.pid);
  }), T = [];
}
function ge() {
  clearInterval(wt);
}
var Qt = we(function(o, t, e, n) {
  if (t.scroll) {
    var i = (o.touches ? o.touches[0] : o).clientX, r = (o.touches ? o.touches[0] : o).clientY, a = t.scrollSensitivity, l = t.scrollSpeed, s = L(), u = !1, d;
    ee !== e && (ee = e, Yt(), Et = t.scroll, d = t.scrollFn, Et === !0 && (Et = tt(e, !0)));
    var c = 0, m = Et;
    do {
      var y = m, v = C(y), w = v.top, k = v.bottom, j = v.left, A = v.right, B = v.width, x = v.height, et = void 0, G = void 0, nt = y.scrollWidth, ht = y.scrollHeight, M = h(y), pt = y.scrollLeft, K = y.scrollTop;
      y === s ? (et = B < nt && (M.overflowX === "auto" || M.overflowX === "scroll" || M.overflowX === "visible"), G = x < ht && (M.overflowY === "auto" || M.overflowY === "scroll" || M.overflowY === "visible")) : (et = B < nt && (M.overflowX === "auto" || M.overflowX === "scroll"), G = x < ht && (M.overflowY === "auto" || M.overflowY === "scroll"));
      var gt = et && (Math.abs(A - i) <= a && pt + B < nt) - (Math.abs(j - i) <= a && !!pt), $ = G && (Math.abs(k - r) <= a && K + x < ht) - (Math.abs(w - r) <= a && !!K);
      if (!T[c])
        for (var ot = 0; ot <= c; ot++)
          T[ot] || (T[ot] = {});
      (T[c].vx != gt || T[c].vy != $ || T[c].el !== y) && (T[c].el = y, T[c].vx = gt, T[c].vy = $, clearInterval(T[c].pid), (gt != 0 || $ != 0) && (u = !0, T[c].pid = setInterval((function() {
        n && this.layer === 0 && p.active._onTouchMove(Gt);
        var mt = T[this.layer].vy ? T[this.layer].vy * l : 0, Z = T[this.layer].vx ? T[this.layer].vx * l : 0;
        typeof d == "function" && d.call(p.dragged.parentNode[X], Z, mt, o, Gt, T[this.layer].el) !== "continue" || ye(T[this.layer].el, Z, mt);
      }).bind({
        layer: c
      }), 24))), c++;
    } while (t.bubbleScroll && m !== s && (m = tt(m, !1)));
    ne = u;
  }
}, 30), Ae = function(t) {
  var e = t.originalEvent, n = t.putSortable, i = t.dragEl, r = t.activeSortable, a = t.dispatchSortableEvent, l = t.hideGhostForTarget, s = t.unhideGhostForTarget;
  if (e) {
    var u = n || r;
    l();
    var d = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, c = document.elementFromPoint(d.clientX, d.clientY);
    s(), u && !u.el.contains(c) && (a("spill"), this.onSpill({
      dragEl: i,
      putSortable: n
    }));
  }
};
function ie() {
}
ie.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var e = t.oldDraggableIndex;
    this.startIndex = e;
  },
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable;
    this.sortable.captureAnimationState(), n && n.captureAnimationState();
    var i = dt(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(e, i) : this.sortable.el.appendChild(e), this.sortable.animateAll(), n && n.animateAll();
  },
  drop: Ae
};
q(ie, {
  pluginName: "revertOnSpill"
});
function re() {
}
re.prototype = {
  onSpill: function(t) {
    var e = t.dragEl, n = t.putSortable, i = n || this.sortable;
    i.captureAnimationState(), e.parentNode && e.parentNode.removeChild(e), i.animateAll();
  },
  drop: Ae
};
q(re, {
  pluginName: "removeOnSpill"
});
p.mount(new on());
p.mount(re, ie);
htmx.onLoad(function(o) {
  let t = o.querySelectorAll("#items");
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    new p(n, {
      draggable: ".draggable",
      handle: ".handle"
    });
  }
});
