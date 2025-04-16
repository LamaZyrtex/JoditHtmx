/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Kr = "4.6.2", Jr = "es2020";
let Yr = !1;
const Gr = !0, on = "https://xdsoft.net/jodit/", Hs = () => Yr = !0, Fs = {}, ue = "\uFEFF", Nn = " ", Vt = () => /[\uFEFF]/g, Dn = () => /[\uFEFF]+$/g, On = () => /^[\uFEFF]+/g, sn = () => /[\s\n\t\r\uFEFF\u200b]+/g, Xr = () => /^[\s\n\t\r\uFEFF\u200b]+/g, Zr = () => /[\s\n\t\r\uFEFF\u200b]+$/g, Be = typeof window < "u" ? window : void 0, O = typeof document < "u" ? document : void 0, Ni = /^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|CANVAS|DD|DFN|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HGROUP|HR|LI|MAIN|NAV|NOSCRIPT|OUTPUT|P|PRE|RUBY|SCRIPT|STYLE|OBJECT|OL|SECTION|IFRAME|JODIT|JODIT-MEDIA|UL|TR|TD|TH|TBODY|THEAD|TFOOT|TABLE|BODY|HTML|VIDEO)$/i, Us = /^(STRONG|SPAN|I|EM|B|SUP|SUB|A|U)$/i, St = /* @__PURE__ */ new Set(["ul", "ol"]), Qr = [
  "img",
  "video",
  "svg",
  "iframe",
  "script",
  "input",
  "textarea",
  "link",
  "jodit",
  "jodit-media"
], Me = /* @__PURE__ */ new Set([
  ...Qr,
  "br",
  "hr"
]), eo = new Set(Qr), to = "Meta", io = "Backspace", no = "Tab", qn = "Enter", Di = "Escape", Vs = "Alt", ro = "ArrowLeft", oo = "ArrowUp", so = "ArrowRight", ao = "ArrowDown", Ws = "Space", lo = "Delete", co = "F3", $s = 5, Pt = 10, Ks = [
  to,
  io,
  lo,
  oo,
  ao,
  so,
  ro,
  qn,
  Di,
  co,
  no
], Hn = "br", yi = "p", de = 1, nt = 2, ot = 3, Xt = typeof navigator < "u" && (navigator.userAgent.indexOf("MSIE") !== -1 || /rv:11.0/i.test(navigator.userAgent)), Js = Xt ? "text" : "text/plain", Ys = Xt ? "html" : "text/html", Gs = Xt ? "rtf" : "text/rtf", gt = "jodit-selection_marker", uo = 300, ho = "insert_as_html", Xs = "insert_clear_html", Zs = "insert_as_text", Qs = "insert_only_text", fo = 10, po = typeof Be < "u" && /Mac|iPod|iPhone|iPad/.test(Be.navigator.platform), mo = {
  add: "+",
  break: "pause",
  cmd: "meta",
  command: "meta",
  ctl: "control",
  ctrl: "control",
  del: "delete",
  down: "arrowdown",
  esc: "escape",
  ins: "insert",
  left: "arrowleft",
  mod: po ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: "space",
  spacebar: "space",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, Xi = (n) => {
  const e = n.split("/"), t = !1;
  return /\.js/.test(e[e.length - 1]) ? {
    basePath: e.slice(0, e.length - 1).join("/") + "/",
    isMin: t
  } : {
    basePath: n,
    isMin: t
  };
}, { basePath: ea, isMin: ta } = (() => {
  if (typeof document > "u")
    return {
      basePath: "",
      isMin: !1
    };
  const n = O.currentScript;
  if (n)
    return Xi(n.src);
  const e = O.querySelectorAll("script[src]");
  return e && e.length ? Xi(e[e.length - 1].src) : Xi(Be.location.href);
})(), go = ea, vo = ta, pi = "data-jodit-temp", ye = {}, ia = "clipboard", na = "source-consumer", bo = /* @__PURE__ */ new Set([
  "touchstart",
  "touchend",
  "scroll",
  "mousewheel",
  "mousemove",
  "touchmove"
]), an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACCURACY: Pt,
  APP_VERSION: Kr,
  BASE_PATH: go,
  BASE_PATH_IS_MIN: vo,
  BR: Hn,
  CLIPBOARD_ID: ia,
  COMMAND_KEYS: Ks,
  EMULATE_DBLCLICK_TIMEOUT: uo,
  ES: Jr,
  FAT_MODE: Gr,
  HOMEPAGE: on,
  INSEPARABLE_TAGS: Me,
  INSERT_AS_HTML: ho,
  INSERT_AS_TEXT: Zs,
  INSERT_CLEAR_HTML: Xs,
  INSERT_ONLY_TEXT: Qs,
  INVISIBLE_SPACE: ue,
  INVISIBLE_SPACE_REG_EXP: Vt,
  INVISIBLE_SPACE_REG_EXP_END: Dn,
  INVISIBLE_SPACE_REG_EXP_START: On,
  IS_BLOCK: Ni,
  IS_ES_MODERN: !0,
  IS_ES_NEXT: !0,
  IS_IE: Xt,
  IS_INLINE: Us,
  IS_MAC: po,
  IS_PROD: !0,
  get IS_TEST() {
    return Yr;
  },
  KEY_ALIASES: mo,
  KEY_ALT: Vs,
  KEY_BACKSPACE: io,
  KEY_DELETE: lo,
  KEY_DOWN: ao,
  KEY_ENTER: qn,
  KEY_ESC: Di,
  KEY_F3: co,
  KEY_LEFT: ro,
  KEY_META: to,
  KEY_RIGHT: so,
  KEY_SPACE: Ws,
  KEY_TAB: no,
  KEY_UP: oo,
  LIST_TAGS: St,
  MARKER_CLASS: gt,
  MODE_SOURCE: nt,
  MODE_SPLIT: ot,
  MODE_WYSIWYG: de,
  NBSP_SPACE: Nn,
  NEARBY: $s,
  NO_EMPTY_TAGS: eo,
  PARAGRAPH: yi,
  PASSIVE_EVENTS: bo,
  SAFE_COUNT_CHANGE_CALL: fo,
  SET_TEST: Hs,
  SOURCE_CONSUMER: na,
  SPACE_REG_EXP: sn,
  SPACE_REG_EXP_END: Zr,
  SPACE_REG_EXP_START: Xr,
  TEMP_ATTR: pi,
  TEXT_HTML: Ys,
  TEXT_PLAIN: Js,
  TEXT_RTF: Gs,
  TOKENS: Fs,
  globalDocument: O,
  globalWindow: Be,
  lang: ye
}, Symbol.toStringTag, { value: "Module" }));
function mi(n) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mi = function(t) {
    return typeof t;
  } : mi = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mi(n);
}
function wo(n, e, t) {
  var i = t.value;
  if (typeof i != "function")
    throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(mi(i)));
  var r = !1;
  return {
    configurable: !0,
    get: function() {
      if (r || this === n.prototype || this.hasOwnProperty(e) || typeof i != "function")
        return i;
      var s = i.bind(this);
      return r = !0, Object.defineProperty(this, e, {
        configurable: !0,
        get: function() {
          return s;
        },
        set: function(c) {
          i = c, delete this[e];
        }
      }), r = !1, s;
    },
    set: function(s) {
      i = s;
    }
  };
}
function ra(n) {
  var e;
  return typeof Reflect < "u" && typeof Reflect.ownKeys == "function" ? e = Reflect.ownKeys(n.prototype) : (e = Object.getOwnPropertyNames(n.prototype), typeof Object.getOwnPropertySymbols == "function" && (e = e.concat(Object.getOwnPropertySymbols(n.prototype)))), e.forEach(function(t) {
    if (t !== "constructor") {
      var i = Object.getOwnPropertyDescriptor(n.prototype, t);
      typeof i.value == "function" && Object.defineProperty(n.prototype, t, wo(n, t, i));
    }
  }), n;
}
function k() {
  return arguments.length === 1 ? ra.apply(void 0, arguments) : wo.apply(void 0, arguments);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const P = {
  beforeInit: "beforeInit",
  ready: "ready",
  beforeDestruct: "beforeDestruct",
  destructed: "destructed"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function yo(n) {
  return !!n && (typeof n).toLowerCase() === "function" && (n === Function.prototype || /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(n)));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function y(n) {
  return typeof n == "function";
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function M(n) {
  return Array.isArray(n);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function v(n) {
  return typeof n == "string";
}
function pt(n) {
  return M(n) && v(n[0]);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function V(n) {
  return n == null;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function _i(n, e) {
  if (!v(n) || !n.length)
    return null;
  const t = n.split(".");
  let i = e;
  try {
    for (const r of t) {
      if (V(i[r]))
        return null;
      i = i[r];
    }
  } catch {
    return null;
  }
  return V(i) ? null : i;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Zi = {};
function _o(n) {
  var e, t;
  if (!(n in Zi)) {
    const i = O.createElement("iframe");
    try {
      if (i.src = "about:blank", O.body.appendChild(i), !i.contentWindow)
        return null;
      const r = _i(n, i.contentWindow), o = _i(n.split(".").slice(0, -1).join("."), i.contentWindow);
      y(r) && (Zi[n] = r.bind(o));
    } catch {
    } finally {
      (e = i.parentNode) === null || e === void 0 || e.removeChild(i);
    }
  }
  return (t = Zi[n]) !== null && t !== void 0 ? t : null;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const U = function(...e) {
  var t;
  return (yo(Array.from) ? Array.from : (t = _o("Array.from")) !== null && t !== void 0 ? t : Array.from).apply(Array, e);
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function So() {
  let n = !0;
  try {
    const e = O.createElement("input");
    e.type = "color", e.value = "!", n = e.type === "color" && e.value !== "!";
  } catch {
    n = !1;
  }
  return n;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function bt(n) {
  return !!n && n instanceof DOMException && n.name === "AbortError";
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function We(n) {
  return typeof n == "boolean";
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Si(n, e = {}) {
  if (typeof n != "object")
    return String(n);
  const t = new Set(e.excludeKeys), i = /* @__PURE__ */ new WeakMap();
  return JSON.stringify(n, (o, s) => {
    if (!t.has(o)) {
      if (typeof s == "object" && s != null) {
        if (i.get(s))
          return "[refObject]";
        i.set(s, !0);
      }
      return s;
    }
  }, e.prettify);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function oa(n, e) {
  return n === e || Si(n) === Si(e);
}
function Co(n, e) {
  return n === e;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Fn = (n) => v(n) && /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(n.replace(/[\r\n]/g, ""));
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function sa(n) {
  return n.search(/<meta.*?Microsoft Excel\s[\d].*?>/) !== -1 || n.search(/<meta.*?Microsoft Word\s[\d].*?>/) !== -1 || n.search(/style="[^"]*mso-/) !== -1 && n.search(/<font/) !== -1;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ko(n) {
  return !V(n) && y(n.init);
}
function Un(n) {
  return !V(n) && y(n.destruct);
}
function Io(n) {
  return !V(n) && l.isElement(n.container);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Zt(n) {
  if (v(n)) {
    if (!n.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/))
      return !1;
    n = parseFloat(n);
  }
  return typeof n == "number" && !isNaN(n) && isFinite(n);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function aa(n) {
  return v(n) && Zt(n) && (n = parseFloat(n)), typeof n == "number" && Number.isFinite(n) && !(n % 1);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ae(n) {
  return !!(n && n instanceof Object && y(n.constructor) && // @ts-ignore
  (typeof Jodit < "u" && n instanceof Jodit || n.isJodit));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Eo = (n) => v(n) && n.length === 23 && /^[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}$/i.test(n);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function be(n) {
  return l.isNode(n) && l.isTag(n, "span") && n.hasAttribute("data-" + gt);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function le(n) {
  return typeof n == "number" && !isNaN(n) && isFinite(n);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function zo(n) {
  return n != null && n === n.window;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function N(n) {
  return !n || typeof n != "object" || n.nodeType || zo(n) ? !1 : !(n.constructor && !{}.hasOwnProperty.call(n.constructor.prototype, "isPrototypeOf"));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Qt(n) {
  return n && typeof n.then == "function";
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ln(n) {
  return !!n && y(n.has) && y(n.add) && y(n.delete);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Oi(n) {
  if (n.includes(" "))
    return !1;
  if (typeof URL < "u")
    try {
      const t = new URL(n);
      return ["https:", "http:", "ftp:", "file:", "rtmp:"].includes(t.protocol);
    } catch {
      return !1;
    }
  const e = O.createElement("a");
  return e.href = n, !!e.hostname;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function cn(n) {
  return n.length ? !/[^0-9A-Za-zа-яА-ЯЁё\w\-_. ]/.test(n) && n.trim().length > 0 : !1;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function lt(n) {
  return !!(n && n instanceof Object && y(n.constructor) && n.isView);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function K(n) {
  return n.replace(Zr(), "").replace(Xr(), "");
}
function To(n, e) {
  return n.replace(RegExp(`[${e}]+$`), "").replace(RegExp(`^[${e}]+`), "");
}
function xo(n) {
  return n.replace(Dn(), "").replace(On(), "");
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Lo {
  constructor() {
    this.__map = /* @__PURE__ */ new Map();
  }
  on(e, t) {
    var i;
    return this.__map.has(e) || this.__map.set(e, /* @__PURE__ */ new Set()), (i = this.__map.get(e)) === null || i === void 0 || i.add(t), this;
  }
  off(e, t) {
    var i;
    return this.__map.has(e) && ((i = this.__map.get(e)) === null || i === void 0 || i.delete(t)), this;
  }
  destruct() {
    this.__map.clear();
  }
  emit(e, ...t) {
    var i;
    let r;
    return this.__map.has(e) && ((i = this.__map.get(e)) === null || i === void 0 || i.forEach((o) => {
      r = o(...t);
    })), r;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var la = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class Ao extends Lo {
  setWork(e) {
    return this.isWorked && this.break(), this.workNodes = l.eachGen(e, !this.options.reverse), this.isFinished = !1, this._requestStarting(), this;
  }
  constructor(e, t = {}) {
    super(), this.async = e, this.options = t, this.workNodes = null, this.hadAffect = !1, this.isWorked = !1, this.isFinished = !1, this.idleId = 0, this.__schedulerController = null;
  }
  _requestStarting() {
    this.__schedulerController = new AbortController(), this.async.schedulerPostTask(this.__workPerform, {
      delay: this.options.timeout,
      signal: this.__schedulerController.signal
    }).catch(() => null);
  }
  break(e) {
    this.isWorked && (this.stop(), this.emit("break", e));
  }
  end() {
    this.isWorked && (this.stop(), this.emit("end", this.hadAffect), this.hadAffect = !1);
  }
  stop() {
    this.isWorked = !1, this.isFinished = !0, this.workNodes = null, this.async.cancelIdleCallback(this.idleId);
  }
  destruct() {
    super.destruct(), this.stop();
  }
  __workPerform() {
    var e;
    if (this.workNodes) {
      this.isWorked = !0;
      let t = 0;
      const i = (e = this.options.timeoutChunkSize) !== null && e !== void 0 ? e : 50;
      for (; !this.isFinished && t <= i; ) {
        const r = this.workNodes.next();
        if (t += 1, this.visitNode(r.value) && (this.hadAffect = !0), r.done) {
          this.end();
          return;
        }
      }
    } else
      this.end();
    this.isFinished || this._requestStarting();
  }
  visitNode(e) {
    var t;
    return !e || this.options.whatToShow !== void 0 && e.nodeType !== this.options.whatToShow ? !1 : (t = this.emit("visit", e)) !== null && t !== void 0 ? t : !1;
  }
}
la([
  k
], Ao.prototype, "__workPerform", null);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Vn = (n) => {
  if (n === "rgba(0, 0, 0, 0)" || n === "")
    return !1;
  if (!n)
    return "#000000";
  if (n.substr(0, 1) === "#")
    return n;
  const e = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(n) || /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(n);
  if (!e)
    return "#000000";
  const t = parseInt(e[2], 10), i = parseInt(e[3], 10);
  let s = (parseInt(e[4], 10) | i << 8 | t << 16).toString(16).toUpperCase();
  for (; s.length < 6; )
    s = "0" + s;
  return e[1] + "#" + s;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Ce = (n) => n.replace(/([A-Z])([A-Z])([a-z])/g, "$1-$2$3").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), Ro = (n) => n.replace(/([A-Z])([A-Z])([a-z])/g, "$1-$2$3").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Wn = /^(left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size)/i;
function Po(n, e) {
  return !V(e) && Wn.test(n) && Zt(e.toString()) ? parseInt(e.toString(), 10) + "px" : e;
}
function Wt(n, e) {
  switch (Ce(n)) {
    case "font-weight":
      switch (e.toString().toLowerCase()) {
        case "700":
        case "bold":
          return 700;
        case "400":
        case "normal":
          return 400;
        case "900":
        case "heavy":
          return 900;
      }
      return Zt(e) ? Number(e) : e;
  }
  return /color/i.test(n) && /^rgb/i.test(e.toString()) && Vn(e.toString()) || e;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const se = (n) => n.replace(/([-_])(.)/g, (e, t, i) => i.toUpperCase());
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function _(n, e, t, i = !1) {
  if (We(t) && (i = t, t = void 0), N(e) || t !== void 0) {
    const d = (u, h, f) => {
      f = Po(h, f), f !== void 0 && (f == null || _(u, h, !0) !== Wt(h, f)) && (u.style[h] = f);
    };
    if (N(e)) {
      const u = Object.keys(e);
      for (let h = 0; h < u.length; h += 1)
        d(n, se(u[h]), e[u[h]]);
    } else
      d(n, se(e), t);
    return "";
  }
  const r = Ce(e), o = n.ownerDocument || document, s = o ? o.defaultView || o.parentWindow : !1, a = n.style[e];
  let c = "";
  return a !== void 0 && a !== "" ? c = a : s && !i && (c = s.getComputedStyle(n).getPropertyValue(r)), Wn.test(e) && /^[-+]?[0-9.]+px$/.test(c.toString()) && (c = parseInt(c.toString(), 10)), Wt(e, c);
}
const dn = (n) => {
  _(n, "display") === "block" && _(n, "display", "");
  const { style: e } = n;
  e.marginLeft === "auto" && e.marginRight === "auto" && (e.marginLeft = "", e.marginRight = "");
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function un(n, e) {
  e && e !== "normal" ? e !== "center" ? (_(n, "float", e), dn(n)) : _(n, {
    float: "",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  }) : (_(n, "float") && ["right", "left"].indexOf(_(n, "float").toString().toLowerCase()) !== -1 && _(n, "float", ""), dn(n));
}
function Mo(n) {
  l.each(n, (e) => {
    l.isHTMLElement(e) && e.style.textAlign && (e.style.textAlign = "", e.style.cssText.trim().length || e.removeAttribute("style"));
  });
}
function ca(n, e) {
  if (l.isNode(e) && l.isElement(e))
    switch (Mo(e), n.toLowerCase()) {
      case "justifyfull":
        e.style.textAlign = "justify";
        break;
      case "justifyright":
        e.style.textAlign = "right";
        break;
      case "justifyleft":
        e.style.textAlign = "left";
        break;
      case "justifycenter":
        e.style.textAlign = "center";
        break;
    }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const $n = (n) => (Be.location.protocol === "file:" && /^\/\//.test(n) && (n = "https:" + n), n);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const gi = /* @__PURE__ */ new Map(), Bo = (n) => (e, t) => {
  if (gi.has(t))
    return gi.get(t);
  const i = n(e, t);
  return gi.set(t, i), i;
}, Kn = Bo((n, e) => n.async.promise((t, i) => {
  if (n.isInDestruct)
    return i();
  const r = n.c.element("script", {
    type: "text/javascript",
    crossorigin: "anonymous",
    referrerpolicy: "no-referrer",
    async: !0,
    src: $n(e)
  });
  n.e.one(r, "error", i).one(r, "load", t), n.od.body.appendChild(r);
})), Jn = Bo((n, e) => n.async.promise((t, i) => {
  if (n.isInDestruct)
    return i();
  const r = n.c.element("link");
  r.rel = "stylesheet", r.media = "all", r.crossOrigin = "anonymous";
  const o = () => t(r);
  !n.isInDestruct && n.e.on(r, "load", o).on(r, "error", i), r.href = $n(e), n.o.shadowRoot ? n.o.shadowRoot.appendChild(r) : n.od.body.appendChild(r);
}));
function jo(n, e, t = 0) {
  return v(e[t]) ? Kn(n, e[t]).then(() => jo(n, e, t + 1)) : Promise.resolve();
}
function No(n, e, t = 0) {
  return v(e[t]) ? Jn(n, e[t]).then(() => No(n, e, t + 1)) : Promise.resolve();
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class da extends Error {
  constructor(e) {
    super(e), this.name = "AssertionError";
  }
}
function E(n, e) {
  if (!n)
    throw new da(`Assertion failed: ${e}`);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function g(n, e, t) {
  if (!n || !y(n.getAttribute))
    return null;
  if (!v(e))
    return Object.keys(e).forEach((r) => {
      const o = e[r];
      N(o) && r === "style" ? _(n, o) : (r === "className" && (r = "class"), g(n, r, o));
    }), null;
  let i = Ro(e);
  if (/^-/.test(i)) {
    const r = g(n, `data${i}`);
    if (r)
      return r;
    i = i.substr(1);
  }
  if (t !== void 0)
    if (t == null)
      n.hasAttribute(i) && n.removeAttribute(i);
    else {
      let r = t.toString();
      return n.nodeName === "IMG" && (i === "width" || i === "height") && (r = r.replace("px", "")), n.setAttribute(i, r), r;
    }
  return n.getAttribute(i);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ua = (n) => {
  const e = navigator.userAgent.toLowerCase(), t = /(firefox)[\s/]([\w.]+)/.exec(e) || /(chrome)[\s/]([\w.]+)/.exec(e) || /(webkit)[\s/]([\w.]+)/.exec(e) || /(opera)(?:.*version)[\s/]([\w.]+)/.exec(e) || /(msie)[\s]([\w.]+)/.exec(e) || /(trident)\/([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 || [];
  return n === "version" ? t[2] : n === "webkit" ? t[1] === "chrome" || t[1] === "webkit" : n === "ff" ? t[1] === "firefox" : n === "msie" ? t[1] === "trident" || t[1] === "msie" : t[1] === n;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Nt = (n, e) => {
  const t = [], i = encodeURIComponent;
  for (const r in n)
    if (Object.prototype.hasOwnProperty.call(n, r)) {
      const o = e ? e + "[" + r + "]" : r, s = n[r];
      t.push(N(s) ? Nt(s, o) : i(o) + "=" + i(s));
    }
  return t.join("&");
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class b {
  constructor() {
    this.cache = !0, this.defaultTimeout = 100, this.namespace = "", this.safeMode = !1, this.width = "auto", this.height = "auto", this.safePluginsList = [
      "about",
      "enter",
      "backspace",
      "size",
      "bold",
      "hotkeys"
    ], this.license = "", this.preset = "custom", this.presets = {
      inline: {
        inline: !0,
        toolbar: !1,
        toolbarInline: !0,
        toolbarInlineForSelection: !0,
        showXPathInStatusbar: !1,
        showCharsCounter: !1,
        showWordsCounter: !1,
        showPlaceholder: !1
      }
    }, this.ownerDocument = O, this.ownerWindow = Be, this.shadowRoot = null, this.zIndex = 0, this.readonly = !1, this.disabled = !1, this.activeButtonsInReadOnly = [
      "source",
      "fullsize",
      "print",
      "about",
      "dots",
      "selectall"
    ], this.allowCommandsInReadOnly = ["selectall", "preview", "print"], this.toolbarButtonSize = "middle", this.allowTabNavigation = !1, this.inline = !1, this.theme = "default", this.saveModeInStorage = !1, this.editorClassName = !1, this.className = !1, this.style = !1, this.containerStyle = !1, this.styleValues = {}, this.triggerChangeEvent = !0, this.direction = "", this.language = "auto", this.debugLanguage = !1, this.i18n = !1, this.tabIndex = -1, this.toolbar = !0, this.statusbar = !0, this.showTooltip = !0, this.showTooltipDelay = 200, this.useNativeTooltip = !1, this.defaultActionOnPaste = ho, this.enter = yi, this.iframe = !1, this.editHTMLDocumentMode = !1, this.enterBlock = this.enter !== "br" ? this.enter : yi, this.defaultMode = de, this.useSplitMode = !1, this.colors = {
      greyscale: [
        "#000000",
        "#434343",
        "#666666",
        "#999999",
        "#B7B7B7",
        "#CCCCCC",
        "#D9D9D9",
        "#EFEFEF",
        "#F3F3F3",
        "#FFFFFF"
      ],
      palette: [
        "#980000",
        "#FF0000",
        "#FF9900",
        "#FFFF00",
        "#00F0F0",
        "#00FFFF",
        "#4A86E8",
        "#0000FF",
        "#9900FF",
        "#FF00FF"
      ],
      full: [
        "#E6B8AF",
        "#F4CCCC",
        "#FCE5CD",
        "#FFF2CC",
        "#D9EAD3",
        "#D0E0E3",
        "#C9DAF8",
        "#CFE2F3",
        "#D9D2E9",
        "#EAD1DC",
        "#DD7E6B",
        "#EA9999",
        "#F9CB9C",
        "#FFE599",
        "#B6D7A8",
        "#A2C4C9",
        "#A4C2F4",
        "#9FC5E8",
        "#B4A7D6",
        "#D5A6BD",
        "#CC4125",
        "#E06666",
        "#F6B26B",
        "#FFD966",
        "#93C47D",
        "#76A5AF",
        "#6D9EEB",
        "#6FA8DC",
        "#8E7CC3",
        "#C27BA0",
        "#A61C00",
        "#CC0000",
        "#E69138",
        "#F1C232",
        "#6AA84F",
        "#45818E",
        "#3C78D8",
        "#3D85C6",
        "#674EA7",
        "#A64D79",
        "#85200C",
        "#990000",
        "#B45F06",
        "#BF9000",
        "#38761D",
        "#134F5C",
        "#1155CC",
        "#0B5394",
        "#351C75",
        "#733554",
        "#5B0F00",
        "#660000",
        "#783F04",
        "#7F6000",
        "#274E13",
        "#0C343D",
        "#1C4587",
        "#073763",
        "#20124D",
        "#4C1130"
      ]
    }, this.colorPickerDefaultTab = "background", this.imageDefaultWidth = 300, this.removeButtons = [], this.disablePlugins = [], this.extraPlugins = [], this.extraButtons = [], this.extraIcons = {}, this.createAttributes = {
      table: {
        style: "border-collapse:collapse;width: 100%;"
      }
    }, this.sizeLG = 900, this.sizeMD = 700, this.sizeSM = 400, this.buttons = [
      {
        group: "font-style",
        buttons: []
      },
      {
        group: "list",
        buttons: []
      },
      {
        group: "font",
        buttons: []
      },
      "---",
      {
        group: "script",
        buttons: []
      },
      {
        group: "media",
        buttons: []
      },
      `
`,
      {
        group: "state",
        buttons: []
      },
      {
        group: "clipboard",
        buttons: []
      },
      {
        group: "insert",
        buttons: []
      },
      {
        group: "indent",
        buttons: []
      },
      {
        group: "color",
        buttons: []
      },
      {
        group: "form",
        buttons: []
      },
      "---",
      {
        group: "history",
        buttons: []
      },
      {
        group: "search",
        buttons: []
      },
      {
        group: "source",
        buttons: []
      },
      {
        group: "other",
        buttons: []
      },
      {
        group: "info",
        buttons: []
      }
    ], this.events = {}, this.textIcons = !1, this.popupRoot = null, this.showBrowserColorPicker = !0;
  }
  static get defaultOptions() {
    return b.__defaultOptions || (b.__defaultOptions = new b()), b.__defaultOptions;
  }
}
b.prototype.controls = {};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function hn(n) {
  return n && n.isAtom;
}
function Do(n) {
  return Object.defineProperty(n, "isAtom", {
    enumerable: !1,
    value: !0,
    configurable: !1
  }), n;
}
function ha(n) {
  return JSON.parse(Si(n));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Qi = /* @__PURE__ */ new WeakMap(), Z = (n, e, t) => {
  let i = Qi.get(n);
  if (!i) {
    i = {}, Qi.set(n, i);
    let r = null;
    lt(n.j) && (r = n.j.e), lt(n) && (r = n.e), r && r.on("beforeDestruct", () => {
      Qi.delete(n);
    });
  }
  return t === void 0 ? i[e] : (i[e] = t, t);
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function he(n, ...e) {
  return n(...e);
}
function Yn(n, e) {
  g(e, "data-editor_id", n.id), !e.component && Object.defineProperty(e, "jodit", {
    value: n
  });
}
function Ae(n, e) {
  return Qt(n) ? n.then((t) => t, () => null).finally(e) : e == null ? void 0 : e();
}
const fa = (n, e) => e.async.promise((t, i) => {
  const r = new Image(), o = () => {
    e.e.off(r), i == null || i();
  }, s = () => {
    e.e.off(r), t(r);
  };
  e.e.one(r, "load", s).one(r, "error", o).one(r, "abort", o), r.src = n, r.complete && s();
}), Je = (n, e = !0) => {
  if (e)
    return Object.keys(n);
  const t = [];
  for (const i in n)
    t.push(i);
  return t;
}, pa = (n, e, { control: t }, i) => {
  var r;
  const o = `button${t.command}`;
  let s = (r = t.args && t.args[0]) !== null && r !== void 0 ? r : Z(n, o);
  if (V(s))
    return !1;
  Z(n, o, s), i && (s = i(s)), n.execCommand(t.command, !1, s ?? void 0);
}, ma = (n) => {
  if (n.clipboardData)
    return n.clipboardData;
  try {
    return n.dataTransfer || new DataTransfer();
  } catch {
    return null;
  }
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Q(n, e, t = 0) {
  if (Object.getPrototypeOf(n) !== Object.prototype)
    return n;
  const i = b.defaultOptions;
  if (v(n.preset)) {
    if (i.presets[n.preset] !== void 0) {
      const o = i.presets[n.preset];
      Object.keys(o).forEach((s) => {
        V(n[s]) && (n[s] = o[s]);
      });
    }
    delete n.preset;
  }
  const r = {};
  return Object.keys(n).forEach((o) => {
    const s = n[o], a = e ? e[o] : null;
    if (N(s) && N(a) && !hn(s)) {
      r[o] = Q(s, a, t + 1);
      return;
    }
    if (t !== 0 && M(s) && !hn(s) && M(a)) {
      r[o] = [...s, ...a.slice(s.length)];
      return;
    }
    r[o] = s;
  }), Object.setPrototypeOf(r, e), r;
}
function Dt(n) {
  return Je(n, !1).reduce((e, t) => (e[t] = n[t], e), {});
}
function Oo(n) {
  return Je(n, !1).reduce((e, t) => (e[t] = N(n[t]) ? Oo(n[t]) : n[t], e), {});
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Gn = (n) => {
  const e = {}, t = n.substring(1).split("&");
  for (let i = 0; i < t.length; i += 1) {
    const r = t[i].split("=");
    e[decodeURIComponent(r[0])] = decodeURIComponent(r[1] || "");
  }
  return e;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const qo = (n, { width: e = 400, height: t = 345 } = {}) => {
  if (!Oi(n))
    return n;
  const i = O.createElement("a"), r = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
  i.href = n, e || (e = 400), t || (t = 345);
  const o = i.protocol || "";
  switch (i.hostname) {
    case "www.vimeo.com":
    case "vimeo.com":
      return r.test(n) ? n.replace(r, '<iframe width="' + e + '" height="' + t + '" src="' + o + '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>') : n;
    case "youtube.com":
    case "www.youtube.com":
    case "youtu.be":
    case "www.youtu.be": {
      const s = i.search ? Gn(i.search) : { v: i.pathname.substring(1) };
      return /^embed\/.*/.test(s.v) && (s.v = s.v.substring(6)), s.v ? '<iframe width="' + e + '" height="' + t + '" src="' + o + "//www.youtube.com/embed/" + s.v + '" frameborder="0" allowfullscreen></iframe>' : n;
    }
  }
  return n;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const fn = (n) => {
  if (typeof navigator < "u" && navigator.userAgent.indexOf("Mac OS X") !== -1) {
    if (n.metaKey && !n.altKey)
      return !0;
  } else if (n.ctrlKey && !n.altKey)
    return !0;
  return !1;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Ci = (n, e = "en") => n !== "auto" && v(n) ? n : O.documentElement && O.documentElement.lang ? O.documentElement.lang : navigator.language ? navigator.language.substring(0, 2) : e;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function $t(n = "Aborted") {
  return new DOMException(n, "AbortError");
}
const ga = bt;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class qi extends Error {
  constructor(e) {
    super(e), Object.setPrototypeOf(this, qi.prototype);
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Hi extends TypeError {
  constructor(e) {
    super(e), Object.setPrototypeOf(this, Hi.prototype);
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function z(n) {
  return new TypeError(n);
}
function pn(n) {
  return new qi(n);
}
function va(n) {
  return new Hi(n);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const mn = /* @__PURE__ */ new Map(), Xn = (n) => {
  var e;
  if (y(n.className))
    return n.className();
  const t = ((e = n.constructor) === null || e === void 0 ? void 0 : e.originalConstructor) || n.constructor;
  if (mn.has(t))
    return mn.get(t);
  if (t.name)
    return t.name;
  const i = new RegExp(/^\s*function\s*(\S*)\s*\(/), r = t.toString().match(i);
  return r ? r[1] : "";
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const gn = (n) => {
  if (/^[0-9.]+$/.test(n.toString()))
    return parseFloat(n);
  const e = n.substr(-2, 2).toUpperCase(), t = ["KB", "MB", "GB", "TB"], i = parseFloat(n.substr(0, n.length - 2));
  return t.indexOf(e) !== -1 ? i * Math.pow(1024, t.indexOf(e) + 1) : parseInt(n, 10);
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Ho = console;
function ba(n, e = [""], t = null) {
  return (...i) => (Ho.warn(`Method "${e[0]}" deprecated.` + (e[1] ? ` Use "${e[1]}" instead` : "")), n.call(t, ...i));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function j(n, e) {
  let t;
  return t = e.querySelectorAll(n), [].slice.call(t);
}
const Fo = (n, e) => {
  if (!n || n.nodeType !== Node.ELEMENT_NODE || !n.parentNode || e === n)
    return "";
  if (n.id)
    return "//*[@id='" + n.id + "']";
  const t = [].filter.call(n.parentNode.childNodes, (i) => i.nodeName === n.nodeName);
  return Fo(n.parentNode, e) + "/" + n.nodeName.toLowerCase() + (t.length > 1 ? "[" + (U(t).indexOf(n) + 1) + "]" : "");
}, _e = (n) => ("container" in n && (n = n.container), j("[ref],[data-ref]", n).reduce((e, t) => {
  const i = g(t, "-ref");
  return i && v(i) && (e[se(i)] = t, e[i] = t), e;
}, {})), Uo = (n) => {
  if (!l.isElement(n))
    return null;
  const e = [];
  let t = n;
  for (; t && t.nodeType === Node.ELEMENT_NODE; ) {
    let i = t.nodeName.toLowerCase();
    if (t.id) {
      i += "#" + t.id, e.unshift(i);
      break;
    } else {
      let r = t, o = 1;
      do
        r = r.previousElementSibling, r && r.nodeName.toLowerCase() === i && o++;
      while (r);
      i += ":nth-of-type(" + o + ")";
    }
    e.unshift(i), t = t.parentNode;
  }
  return e.join(" > ");
};
function Ot(n, e) {
  let t = n;
  if (v(n))
    try {
      t = e.querySelector(n);
    } catch {
      throw z('String "' + n + '" should be valid HTML selector');
    }
  if (!t || typeof t != "object" || !l.isElement(t) || !t.cloneNode)
    throw z('Element "' + n + '" should be string or HTMLElement instance');
  return t;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function wa(n, e) {
  const t = [];
  try {
    j("img", n.editor).forEach((i) => {
      const r = [
        g(i, "width"),
        g(i, "height"),
        i.src
      ];
      g(i, {
        width: i.offsetWidth + e,
        height: i.offsetHeight + e
      });
      const o = n.createInside.a();
      n.ed.body.appendChild(o), o.href = i.src, i.src = o.href, l.safeRemove(o), t.push(() => {
        var s;
        i.src = (s = r[2]) !== null && s !== void 0 ? s : "", g(i, {
          width: r[0] || null,
          height: r[1] || null
        });
      });
    });
  } catch (i) {
    throw t.forEach((r) => r()), t.length = 0, i;
  }
  return t;
}
function ya(n, e, t = "px", i = null) {
  const r = [], o = wa(n, t);
  try {
    const s = n.e.fire("beforePreviewBox", e, t);
    if (s != null)
      return s;
    let a = n.c.div("jodit__preview-box jodit-context");
    i && i.appendChild(a), _(a, {
      position: "relative",
      padding: 16
    });
    const c = n.value || `<div style='position: absolute;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);color:#ccc;'>${n.i18n("Empty")}</div>`;
    if (n.iframe) {
      const u = n.create.element("iframe");
      _(u, {
        minWidth: 800,
        minHeight: 600,
        border: 0
      }), a.appendChild(u);
      const h = u.contentWindow;
      if (h && (n.e.fire("generateDocumentStructure.iframe", h.document, n), a = h.document.body, typeof ResizeObserver == "function")) {
        let f = !1;
        const p = h.document.body, m = new ResizeObserver(n.async.debounce(() => {
          m.unobserve(p), u.style.height = `${p.offsetHeight + 20}px`, n.async.requestAnimationFrame(() => {
            !f && m.observe(p);
          });
        }, 100)), w = () => {
          f = !0, m.unobserve(p), m.disconnect(), n.e.off("beforeDestruct", w);
        };
        r.push(w), n.e.on("beforeDestruct", w);
      }
    } else
      _(a, {
        minWidth: 1024,
        minHeight: 600,
        border: 0
      });
    const d = (u, h) => {
      const f = v(h) ? n.c.div() : h;
      v(h) && (f.innerHTML = h);
      for (let p = 0; p < f.childNodes.length; p += 1) {
        const m = f.childNodes[p];
        if (l.isElement(m)) {
          const w = u.ownerDocument.createElement(m.nodeName);
          for (let C = 0; C < m.attributes.length; C += 1)
            g(w, m.attributes[C].nodeName, m.attributes[C].nodeValue);
          if (m.childNodes.length === 0 || l.isTag(m, "table"))
            switch (m.nodeName) {
              case "SCRIPT":
                m.textContent && (w.textContent = m.textContent);
                break;
              default:
                m.innerHTML && (w.innerHTML = m.innerHTML);
                break;
            }
          else
            d(w, m);
          try {
            u.appendChild(w);
          } catch {
          }
        } else
          try {
            u.appendChild(m.cloneNode(!0));
          } catch {
          }
      }
    };
    return d(a, c), n.e.fire("afterPreviewBox", a), [
      a,
      () => {
        r.forEach((u) => u());
      }
    ];
  } finally {
    o.forEach((s) => s());
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function vn(n, e, t) {
  let i = n.getBoundingClientRect(), r = n;
  const o = i.top, s = i.height;
  for (; r && r !== e && r.parentNode; )
    if (r = r.parentNode, i = r.getBoundingClientRect(), !(o <= i.bottom) || o + s <= i.top)
      return !1;
  return o <= (t.documentElement && t.documentElement.clientHeight || 0);
}
function zt(n, e, t) {
  l.isHTMLElement(n) && !vn(n, e, t) && (e.clientHeight !== e.scrollHeight && (e.scrollTop = n.offsetTop), vn(n, e, t) || n.scrollIntoView());
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Vo(n, e, t) {
  if (!v(n) || !n.length)
    return;
  const i = n.split(".");
  let r = t, o = i[0];
  for (let s = 0; s < i.length - 1; s += 1)
    o = i[s], !M(r[o]) && !N(r[o]) && (r[o] = Zt(i[s + 1]) ? [] : {}), r = r[o];
  r && (r[i[i.length - 1]] = e);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class _a {
  constructor(e) {
    this.limit = e, this.stack = [];
  }
  push(e) {
    return this.stack.push(e), this.stack.length > this.limit && this.stack.shift(), this;
  }
  pop() {
    return this.stack.pop();
  }
  find(e) {
    return this.stack.find(e);
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class l {
  constructor() {
    throw new Error("Dom is static module");
  }
  /**
   * Remove all content from element
   */
  static detach(e) {
    for (; e && e.firstChild; )
      e.removeChild(e.firstChild);
  }
  /**
   * Wrap all inline next siblings
   */
  static wrapNextInline(e, t, i) {
    let r;
    const o = e;
    let s = e;
    i.s.save();
    let a = !1;
    do
      a = !1, r = s.nextSibling, r && !l.isBlock(r) && !l.isTag(r, "br") && (a = !0, s = r);
    while (a);
    return l.__wrapElements(t, i, o, s);
  }
  static __wrapElements(e, t, i, r) {
    const o = v(e) ? t.createInside.element(e) : e;
    i.parentNode && i.parentNode.insertBefore(o, i);
    let s = i;
    for (; s && (s = i.nextSibling, o.appendChild(i), !(i === r || !s)); )
      i = s;
    return t.s.restore(), o;
  }
  /**
   * Wrap all inline siblings
   */
  static wrapInline(e, t, i) {
    let r, o = e, s = e;
    i.s.save();
    let a = !1;
    do
      a = !1, r = o.previousSibling, r && !l.isBlock(r) && (a = !0, o = r);
    while (a);
    do
      a = !1, r = s.nextSibling, r && !l.isBlock(r) && (a = !0, s = r);
    while (a);
    return l.__wrapElements(t, i, o, s);
  }
  /**
   * Wrap node inside another node
   */
  static wrap(e, t, i) {
    const r = v(t) ? i.element(t) : t;
    if (l.isNode(e)) {
      if (!e.parentNode)
        throw z("Element should be in DOM");
      e.parentNode.insertBefore(r, e), r.appendChild(e);
    } else {
      const o = e.extractContents();
      e.insertNode(r), r.appendChild(o);
    }
    return r;
  }
  /**
   * Remove parent of node and insert this node instead that parent
   */
  static unwrap(e) {
    const t = e.parentNode;
    if (t) {
      for (; e.firstChild; )
        t.insertBefore(e.firstChild, e);
      l.safeRemove(e);
    }
  }
  /**
   * Call functions for all nodes between `start` and `end`
   */
  static between(e, t, i) {
    let r = e;
    for (; r && r !== t && !(e !== r && i(r)); ) {
      let o = r.firstChild || r.nextSibling;
      if (!o) {
        for (; r && !r.nextSibling; )
          r = r.parentNode;
        o = r == null ? void 0 : r.nextSibling;
      }
      r = o;
    }
  }
  static replace(e, t, i, r = !1, o = !1) {
    Fn(t) && (E(i, "Need create instance for new tag"), t = i.fromHTML(t));
    let s;
    if (v(t) ? (E(i, "Need create instance for new tag"), s = i.element(t)) : s = t, !o)
      for (; e.firstChild; )
        s.appendChild(e.firstChild);
    return r && l.isElement(e) && l.isElement(s) && U(e.attributes).forEach((a) => {
      s.setAttribute(a.name, a.value);
    }), e.parentNode && e.parentNode.replaceChild(s, e), s;
  }
  /**
   * Checks whether the Node text and blank (in this case it may contain invisible auxiliary characters ,
   * it is also empty )
   *
   * @param node - The element of wood to be checked
   */
  static isEmptyTextNode(e) {
    return l.isText(e) && (!e.nodeValue || e.nodeValue.replace(Vt(), "").trim().length === 0);
  }
  static isEmptyContent(e) {
    return l.each(e, (t) => l.isEmptyTextNode(t));
  }
  /**
   * The node is editable
   */
  static isContentEditable(e, t) {
    return l.isNode(e) && !l.closest(e, (i) => l.isElement(i) && i.getAttribute("contenteditable") === "false", t);
  }
  static isEmpty(e, t = eo) {
    if (!e)
      return !0;
    let i;
    y(t) ? i = t : i = (o) => t.has(o.nodeName.toLowerCase());
    const r = (o) => o.nodeValue == null || K(o.nodeValue).length === 0;
    return l.isText(e) ? r(e) : !(l.isElement(e) && i(e)) && l.each(e, (o) => {
      if (l.isText(o) && !r(o) || l.isElement(o) && i(o))
        return !1;
    });
  }
  /**
   * Returns true if it is a DOM node
   */
  static isNode(e) {
    return !!(e && v(e.nodeName) && typeof e.nodeType == "number" && e.childNodes && y(e.appendChild));
  }
  /**
   *  Check if element is table cell
   */
  static isCell(e) {
    return l.isNode(e) && (e.nodeName === "TD" || e.nodeName === "TH");
  }
  /**
   * Check if element is a list	element UL or OL
   */
  static isList(e) {
    return l.isTag(e, St);
  }
  /**
   * Check if element is a part of list	element LI
   */
  static isLeaf(e) {
    return l.isTag(e, "li");
  }
  /**
   * Check is element is Image element
   */
  static isImage(e) {
    return l.isNode(e) && /^(img|svg|picture|canvas)$/i.test(e.nodeName);
  }
  /**
   * Check the `node` is a block element
   * @param node - Object to check
   */
  static isBlock(e) {
    return !V(e) && typeof e == "object" && l.isNode(e) && Ni.test(e.nodeName);
  }
  /**
   * Check if element is text node
   */
  static isText(e) {
    return !!(e && e.nodeType === Node.TEXT_NODE);
  }
  /**
   * Check if element is comment node
   */
  static isComment(e) {
    return !!(e && e.nodeType === Node.COMMENT_NODE);
  }
  /**
   * Check if element is element node
   */
  static isElement(e) {
    var t;
    return l.isNode(e) ? !!(((t = e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView) && e.nodeType === Node.ELEMENT_NODE) : !1;
  }
  /**
   * Check if element is document fragment
   */
  static isFragment(e) {
    var t;
    return l.isNode(e) ? !!(((t = e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) : !1;
  }
  /**
   * Check if element is HTMLElement node
   */
  static isHTMLElement(e) {
    var t;
    if (!l.isNode(e))
      return !1;
    const i = (t = e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
    return !!(i && e instanceof i.HTMLElement);
  }
  /**
   * Check element is inline block
   */
  static isInlineBlock(e) {
    return l.isElement(e) && !/^(BR|HR)$/i.test(e.tagName) && ["inline", "inline-block"].indexOf(_(e, "display").toString()) !== -1;
  }
  /**
   * It's block and it can be split
   */
  static canSplitBlock(e) {
    return !V(e) && l.isHTMLElement(e) && l.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && e.style !== void 0 && !/^(fixed|absolute)/i.test(e.style.position);
  }
  /**
   * Get last matched node inside root
   */
  static last(e, t) {
    let i = e == null ? void 0 : e.lastChild;
    if (!i)
      return null;
    do {
      if (t(i))
        return i;
      let r = i.lastChild;
      if (r || (r = i.previousSibling), !r && i.parentNode !== e) {
        do
          i = i.parentNode;
        while (i && !(i != null && i.previousSibling) && i.parentNode !== e);
        r = i == null ? void 0 : i.previousSibling;
      }
      i = r;
    } while (i);
    return null;
  }
  /**
   * Find previous node
   */
  static prev(e, t, i, r = !0) {
    return l.find(e, t, i, !1, r);
  }
  /**
   * Find next node what `condition(next) === true`
   */
  static next(e, t, i, r = !0) {
    return l.find(e, t, i, !0, r);
  }
  static prevWithClass(e, t) {
    return l.prev(e, (i) => l.isElement(i) && i.classList.contains(t), e.parentNode);
  }
  static nextWithClass(e, t) {
    return l.next(e, (i) => l.isElement(i) && i.classList.contains(t), e.parentNode);
  }
  /**
   * Find next/prev node what `condition(next) === true`
   */
  static find(e, t, i, r = !0, o = !0) {
    const s = this.nextGen(e, i, r, o);
    let a = s.next();
    for (; !a.done; ) {
      if (t(a.value))
        return a.value;
      a = s.next();
    }
    return null;
  }
  /**
   * Find next/prev node what `condition(next) === true`
   */
  static *nextGen(e, t, i = !0, r = !0) {
    const o = [];
    let s = e;
    do {
      let a = i ? s.nextSibling : s.previousSibling;
      for (; a; )
        o.unshift(a), a = i ? a.nextSibling : a.previousSibling;
      yield* this.runInStack(e, o, i, r), s = s.parentNode;
    } while (s && s !== t);
    return null;
  }
  /**
   * It goes through all the internal elements of the node, causing a callback function
   *
   * @param elm - the element whose children and descendants you want to iterate over
   * @param callback - It called for each item found
   * @example
   * ```javascript
   * Jodit.modules.Dom.each(editor.s.current(), function (node) {
   *  if (node.nodeType === Node.TEXT_NODE) {
   *      node.nodeValue = node.nodeValue.replace(Jodit.INVISIBLE_SPACE_REG_EX, '') // remove all of the text element codes invisible character
   *  }
   * });
   * ```
   */
  static each(e, t, i = !0) {
    const r = this.eachGen(e, i);
    let o = r.next();
    for (; !o.done; ) {
      if (t(o.value) === !1)
        return !1;
      o = r.next();
    }
    return !0;
  }
  static eachGen(e, t = !0) {
    return this.runInStack(e, [e], t);
  }
  static *runInStack(e, t, i, r = !0) {
    for (; t.length; ) {
      const o = t.pop();
      if (r) {
        let s = i ? o.lastChild : o.firstChild;
        for (; s; )
          t.push(s), s = i ? s.previousSibling : s.nextSibling;
      }
      e !== o && (yield o);
    }
  }
  /**
   * Find next/prev node what `condition(next) === true`
   */
  static findWithCurrent(e, t, i, r = "nextSibling", o = "firstChild") {
    let s = e;
    do {
      if (t(s))
        return s || null;
      if (o && s && s[o]) {
        const a = l.findWithCurrent(s[o], t, s, r, o);
        if (a)
          return a;
      }
      for (; s && !s[r] && s !== i; )
        s = s.parentNode;
      s && s[r] && s !== i && (s = s[r]);
    } while (s && s !== i);
    return null;
  }
  /**
   * Get not empty sibling
   */
  static findSibling(e, t = !0, i = (r) => !l.isEmptyTextNode(r)) {
    let r = l.sibling(e, t);
    for (; r && !i(r); )
      r = l.sibling(r, t);
    return r && i(r) ? r : null;
  }
  /**
   * Returns the nearest non-empty sibling
   */
  static findNotEmptySibling(e, t) {
    return l.findSibling(e, t, (i) => {
      var r;
      return !l.isEmptyTextNode(i) && !!(!l.isText(i) || !((r = i.nodeValue) === null || r === void 0) && r.length && K(i.nodeValue));
    });
  }
  /**
   * Returns the nearest non-empty neighbor
   */
  static findNotEmptyNeighbor(e, t, i) {
    return he(t ? l.prev : l.next, e, (r) => !!(r && (!(l.isText(r) || l.isComment(r)) || K((r == null ? void 0 : r.nodeValue) || "").length)), i);
  }
  static sibling(e, t) {
    return t ? e.previousSibling : e.nextSibling;
  }
  /**
   * It goes through all the elements in ascending order, and checks to see if they meet the predetermined condition
   */
  static up(e, t, i, r = !1) {
    let o = e;
    if (!o)
      return null;
    do {
      if (t(o))
        return o;
      if (o === i || !o.parentNode)
        break;
      o = o.parentNode;
    } while (o && o !== i);
    return o === i && r && t(o) ? o : null;
  }
  static closest(e, t, i) {
    let r;
    const o = (s) => s.toLowerCase();
    if (y(t))
      r = t;
    else if (M(t) || ln(t)) {
      const s = ln(t) ? t : new Set(t.map(o));
      r = (a) => !!(a && s.has(o(a.nodeName)));
    } else
      r = (s) => !!(s && o(t) === o(s.nodeName));
    return l.up(e, r, i);
  }
  /**
   * Furthest parent node matching condition
   */
  static furthest(e, t, i) {
    let r = null, o = e == null ? void 0 : e.parentElement;
    for (; o && o !== i; )
      t(o) && (r = o), o = o == null ? void 0 : o.parentElement;
    return r;
  }
  /**
   * Append new element in the start of root
   */
  static appendChildFirst(e, t) {
    const i = e.firstChild;
    i ? i !== t && e.insertBefore(t, i) : e.appendChild(t);
  }
  /**
   * Insert newElement after element
   */
  static after(e, t) {
    const { parentNode: i } = e;
    i && (i.lastChild === e ? i.appendChild(t) : i.insertBefore(t, e.nextSibling));
  }
  /**
   * Insert newElement before element
   */
  static before(e, t) {
    const { parentNode: i } = e;
    i && i.insertBefore(t, e);
  }
  /**
   * Insert newElement as first child inside element
   */
  static prepend(e, t) {
    e.insertBefore(t, e.firstChild);
  }
  static append(e, t) {
    M(t) ? t.forEach((i) => {
      this.append(e, i);
    }) : e.appendChild(t);
  }
  /**
   * Move all content to another element
   */
  static moveContent(e, t, i = !1, r = () => !0) {
    const o = (e.ownerDocument || O).createDocumentFragment();
    U(e.childNodes).filter((s) => r(s) ? !0 : (l.safeRemove(s), !1)).forEach((s) => {
      o.appendChild(s);
    }), !i || !t.firstChild ? t.appendChild(o) : t.insertBefore(o, t.firstChild);
  }
  /**
   * Check root contains child or equal child
   */
  static isOrContains(e, t, i = !1) {
    return e === t ? !i : !!(t && e && this.up(t, (r) => r === e, e, !0));
  }
  /**
   * Safe remove element from DOM
   */
  static safeRemove(...e) {
    e.forEach((t) => l.isNode(t) && t.parentNode && t.parentNode.removeChild(t));
  }
  static safeInsertNode(e, t) {
    e.collapsed || e.deleteContents();
    const i = l.isFragment(t) ? t.lastChild : t;
    e.startContainer === e.endContainer && e.collapsed && l.isTag(e.startContainer, Me) ? l.after(e.startContainer, t) : (e.insertNode(t), i && e.setStartBefore(i)), e.collapse(!0), [t.nextSibling, t.previousSibling].forEach((r) => l.isText(r) && !r.nodeValue && l.safeRemove(r));
  }
  /**
   * Hide element
   */
  static hide(e) {
    e && (Z(e, "__old_display", e.style.display), e.style.display = "none");
  }
  /**
   * Show element
   */
  static show(e) {
    if (!e)
      return;
    const t = Z(e, "__old_display");
    e.style.display === "none" && (e.style.display = t || "");
  }
  static isTag(e, t) {
    if (!this.isElement(e))
      return !1;
    const i = e.tagName.toLowerCase(), r = e.tagName.toUpperCase();
    if (t instanceof Set)
      return t.has(i) || t.has(r);
    if (Array.isArray(t))
      throw new TypeError("Dom.isTag does not support array");
    const o = t;
    return i === o || r === o;
  }
  /**
   * Marks an item as temporary
   */
  static markTemporary(e, t) {
    return t && g(e, t), g(e, pi, !0), e;
  }
  /**
   * Check if element is temporary
   */
  static isTemporary(e) {
    return l.isElement(e) ? be(e) || g(e, pi) === "true" : !1;
  }
  /**
   * Replace temporary elements from string
   */
  static replaceTemporaryFromString(e) {
    return e.replace(/<([a-z]+)[^>]+data-jodit-temp[^>]+>(.+?)<\/\1>/gi, "$2");
  }
  /**
   * Get temporary list
   */
  static temporaryList(e) {
    return j(`[${pi}]`, e);
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function st(n, e) {
  const t = Object.getOwnPropertyDescriptor(n, e);
  return !t || y(t.get) ? null : t.value;
}
function J(n, e, t) {
  const i = t.get;
  if (!i)
    throw z("Getter property descriptor expected");
  t.get = function() {
    const r = i.call(this);
    return r && r.noCache === !0 || Object.defineProperty(this, e, {
      configurable: t.configurable,
      enumerable: t.enumerable,
      writable: !1,
      value: r
    }), r;
  };
}
function Zn(n, e, t) {
  const i = t.value;
  if (!y(i))
    throw z("Handler must be a Function");
  let r = !0;
  const o = /* @__PURE__ */ new WeakMap();
  t.value = function(...s) {
    var a;
    if (r && o.has(this.constructor))
      return (a = o.get(this.constructor)) === null || a === void 0 ? void 0 : a.cloneNode(!0);
    const c = i.apply(this, s);
    return r && l.isElement(c) && o.set(this.constructor, c), r ? c.cloneNode(!0) : c;
  }, n.hookStatus(P.ready, (s) => {
    r = !!(lt(s) ? s : s.jodit).options.cache;
  });
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function D(n) {
  class e extends n {
    constructor(...i) {
      super(...i), this.constructor === e && (this instanceof e || Object.setPrototypeOf(this, e.prototype), this.setStatus("ready"));
    }
  }
  return e;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Wo(n, e, ...t) {
  if (!e)
    n.call(null, ...t);
  else
    return Be.setTimeout(n, e, ...t);
  return 0;
}
function Mt(n) {
  Be.clearTimeout(n);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Qn {
  constructor() {
    var e, t, i, r, o;
    this.timers = /* @__PURE__ */ new Map(), this.__callbacks = /* @__PURE__ */ new Map(), this.__queueMicrotaskNative = (e = queueMicrotask == null ? void 0 : queueMicrotask.bind(window)) !== null && e !== void 0 ? e : Promise.resolve().then.bind(Promise.resolve()), this.promisesRejections = /* @__PURE__ */ new Set(), this.__requestsIdle = /* @__PURE__ */ new Set(), this.__controllers = /* @__PURE__ */ new Set(), this.__requestsRaf = /* @__PURE__ */ new Set(), this.__requestIdleCallbackNative = (i = (t = window.requestIdleCallback) === null || t === void 0 ? void 0 : t.bind(window)) !== null && i !== void 0 ? i : (s, a) => {
      var c;
      const d = Date.now();
      return this.setTimeout(() => {
        s({
          didTimeout: !1,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - d))
        });
      }, (c = a == null ? void 0 : a.timeout) !== null && c !== void 0 ? c : 1);
    }, this.__cancelIdleCallbackNative = (o = (r = window.cancelIdleCallback) === null || r === void 0 ? void 0 : r.bind(window)) !== null && o !== void 0 ? o : (s) => {
      this.clearTimeout(s);
    }, this.isDestructed = !1;
  }
  delay(e) {
    return this.promise((t) => this.setTimeout(t, e));
  }
  setTimeout(e, t, ...i) {
    if (this.isDestructed)
      return 0;
    let r = {};
    V(t) && (t = 0), le(t) || (r = t, t = r.timeout || 0), r.label && this.clearLabel(r.label);
    const o = Wo(e, t, ...i), s = r.label || o;
    return this.timers.set(s, o), this.__callbacks.set(s, e), o;
  }
  updateTimeout(e, t) {
    if (E(e && this.timers.has(e), "Label does not exist"), !e || !this.timers.has(e))
      return null;
    const i = this.__callbacks.get(e);
    return E(y(i), "Callback is not a function"), this.setTimeout(i, { label: e, timeout: t });
  }
  clearLabel(e) {
    e && this.timers.has(e) && (Mt(this.timers.get(e)), this.timers.delete(e), this.__callbacks.delete(e));
  }
  clearTimeout(e) {
    if (v(e))
      return this.clearLabel(e);
    Mt(e), this.timers.delete(e), this.__callbacks.delete(e);
  }
  /**
   * Debouncing enforces that a function not be called again until a certain amount of time has passed without
   * it being called. As in "execute this function only if 100 milliseconds have passed without it being called."
   *
   * @example
   * ```javascript
   * var jodit = Jodit.make('.editor');
   * jodit.e.on('mousemove', jodit.async.debounce(() => {
   * 	// Do expensive things
   * }, 100));
   * ```
   */
  debounce(e, t, i = !1) {
    let r = 0, o = !1;
    const s = [], a = (...d) => {
      if (!o) {
        r = 0;
        const u = e(...d);
        if (o = !0, s.length) {
          const h = () => {
            s.forEach((f) => f()), s.length = 0;
          };
          Qt(u) ? u.finally(h) : h();
        }
      }
    }, c = (...d) => {
      o = !1, t ? (!r && i && a(...d), Mt(r), r = this.setTimeout(() => a(...d), y(t) ? t() : t), this.timers.set(e, r)) : a(...d);
    };
    return N(t) && t.promisify ? (...d) => {
      const u = this.promise((h) => {
        s.push(h);
      }).catch((h) => {
        if (bt(h))
          return null;
        throw h;
      });
      return c(...d), u;
    } : c;
  }
  microDebounce(e, t = !1) {
    let i = !1, r = !0, o;
    return (...s) => {
      if (o = s, i) {
        r = !0;
        return;
      }
      r = !0, t && (r = !1, e(...o)), i = !0, this.__queueMicrotaskNative(() => {
        i = !1, !this.isDestructed && r && e(...o);
      });
    };
  }
  /**
   * Throttling enforces a maximum number of times a function can be called over time.
   * As in "execute this function at most once every 100 milliseconds."
   *
   * @example
   * ```javascript
   * var jodit = Jodit.make('.editor');
   * jodit.e.on(document.body, 'scroll', jodit.async.throttle(function() {
   * 	// Do expensive things
   * }, 100));
   * ```
   */
  throttle(e, t, i = !1) {
    let r = null, o, s, a;
    return (...c) => {
      if (o = !0, a = c, !t) {
        e(...a);
        return;
      }
      r || (s = () => {
        o ? (e(...a), o = !1, r = this.setTimeout(s, y(t) ? t() : t), this.timers.set(s, r)) : r = null;
      }, s());
    };
  }
  promise(e) {
    let t = () => {
    };
    const i = new Promise((r, o) => {
      t = () => o($t("Abort async")), this.promisesRejections.add(t), e(r, o);
    });
    return !i.finally && typeof process < "u", i.finally(() => {
      this.promisesRejections.delete(t);
    }).catch(() => null), i.rejectCallback = t, i;
  }
  /**
   * Get Promise status
   */
  promiseState(e) {
    if (e.status)
      return e.status;
    if (!Promise.race)
      return new Promise((i) => {
        e.then((r) => (i("fulfilled"), r), (r) => {
          throw i("rejected"), r;
        }), this.setTimeout(() => {
          i("pending");
        }, 100);
      });
    const t = {};
    return Promise.race([e, t]).then((i) => i === t ? "pending" : "fulfilled", () => "rejected");
  }
  requestIdleCallback(e, t = { timeout: 100 }) {
    const i = this.__requestIdleCallbackNative(e, t);
    return this.__requestsIdle.add(i), i;
  }
  requestIdlePromise(e) {
    return this.promise((t) => {
      const i = this.requestIdleCallback(() => t(i), e);
    });
  }
  /**
   * Try to use scheduler.postTask if it is available https://wicg.github.io/scheduling-apis/
   */
  schedulerPostTask(e, t = {
    delay: 0,
    priority: "user-visible"
  }) {
    const i = new AbortController();
    if (t.signal && t.signal.addEventListener("abort", () => i.abort()), this.__controllers.add(i), typeof globalThis.scheduler < "u") {
      const o = globalThis.scheduler.postTask(e, {
        ...t,
        signal: i.signal
      });
      return o.finally(() => {
        this.__controllers.delete(i);
      }).catch(() => null), o;
    }
    return this.promise((r, o) => {
      const s = this.setTimeout(() => {
        try {
          r(e());
        } catch (a) {
          o(a);
        }
        this.__controllers.delete(i);
      }, t.delay || 1);
      i.signal.addEventListener("abort", () => {
        this.clearTimeout(s), this.__controllers.delete(i), o($t());
      });
    });
  }
  schedulerYield() {
    return this.schedulerPostTask(() => {
    }, { priority: "user-visible" });
  }
  cancelIdleCallback(e) {
    return this.__requestsIdle.delete(e), this.__cancelIdleCallbackNative(e);
  }
  requestAnimationFrame(e) {
    const t = requestAnimationFrame(e);
    return this.__requestsRaf.add(t), t;
  }
  cancelAnimationFrame(e) {
    this.__requestsRaf.delete(e), cancelAnimationFrame(e);
  }
  clear() {
    this.__requestsIdle.forEach((e) => this.cancelIdleCallback(e)), this.__requestsRaf.forEach((e) => this.cancelAnimationFrame(e)), this.__controllers.forEach((e) => e.abort()), this.timers.forEach((e) => Mt(this.timers.get(e))), this.timers.clear(), this.promisesRejections.forEach((e) => e()), this.promisesRejections.clear();
  }
  destruct() {
    this.clear(), this.isDestructed = !0;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ei = (n) => M(n) ? n : [n];
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ge(n) {
  return Array.isArray(n) ? n : n.split(/[,\s]+/);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function _r(n) {
  return n.replace(/mso-[a-z-]+:[\s]*[^;]+;/gi, "").replace(/mso-[a-z-]+:[\s]*[^";']+$/gi, "").replace(/border[a-z-]*:[\s]*[^;]+;/gi, "").replace(/([0-9.]+)(pt|cm)/gi, (e, t, i) => {
    switch (i.toLowerCase()) {
      case "pt":
        return (parseFloat(t) * 1.328).toFixed(0) + "px";
      case "cm":
        return (parseFloat(t) * 0.02645833).toFixed(0) + "px";
    }
    return e;
  });
}
function Sa(n) {
  if (n.indexOf("<html ") === -1)
    return n;
  n = n.substring(n.indexOf("<html "), n.length), n = n.substring(0, n.lastIndexOf("</html>") + 7);
  const e = O.createElement("iframe");
  e.style.display = "none", O.body.appendChild(e);
  let t = "", i = [];
  try {
    const r = e.contentDocument || (e.contentWindow ? e.contentWindow.document : null);
    if (r) {
      r.open(), r.write(n), r.close();
      try {
        for (let o = 0; o < r.styleSheets.length; o += 1) {
          const s = r.styleSheets[o].cssRules;
          for (let a = 0; a < s.length; a += 1)
            s[a].selectorText !== "" && (i = j(s[a].selectorText, r.body), i.forEach((c) => {
              c.style.cssText = _r(s[a].style.cssText + ";" + c.style.cssText);
            }));
        }
      } catch {
      }
      l.each(r.body, (o) => {
        if (l.isElement(o)) {
          const s = o, a = s.getAttribute("style");
          a && (s.style.cssText = _r(a)), s.hasAttribute("style") && !s.getAttribute("style") && s.removeAttribute("style");
        }
      }), t = r.firstChild ? K(r.body.innerHTML) : "";
    }
  } catch {
  } finally {
    l.safeRemove(e);
  }
  return t && (n = t), K(n.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, ""));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ca(n) {
  n.indexOf("<html ") !== -1 && (n = n.substring(n.indexOf("<html "), n.length), n = n.substring(0, n.lastIndexOf("</html>") + 7));
  let e = "";
  try {
    const t = O.createElement("div");
    t.innerHTML = n;
    const i = [];
    t.firstChild && l.each(t, (r) => {
      if (r)
        switch (r.nodeType) {
          case Node.ELEMENT_NODE:
            switch (r.nodeName) {
              case "STYLE":
              case "LINK":
              case "META":
                i.push(r);
                break;
              case "W:SDT":
              case "W:SDTPR":
              case "FONT":
                l.unwrap(r);
                break;
              default:
                U(r.attributes).forEach((o) => {
                  [
                    "src",
                    "href",
                    "rel",
                    "content"
                  ].indexOf(o.name.toLowerCase()) === -1 && r.removeAttribute(o.name);
                });
            }
            break;
          case Node.TEXT_NODE:
            break;
          default:
            i.push(r);
        }
    }), l.safeRemove.apply(null, i), e = t.innerHTML;
  } catch {
  }
  return e && (n = e), n = n.split(/(\n)/).filter(K).join(`
`), n.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "");
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ka(n) {
  const e = O.createElement("div");
  return e.textContent = n, e.innerHTML;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ia(n) {
  return n.replace(/\r\n|\r|\n/g, "<br/>");
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ea(n, e) {
  !l.isElement(n) && !l.isFragment(n) || (e.removeOnError && (Bt(n), j("[onerror]", n).forEach((t) => Bt(t, e))), e.safeJavaScriptLink && (Bt(n), j('a[href^="javascript"]', n).forEach((t) => Bt(t, e))));
}
function Bt(n, { safeJavaScriptLink: e, removeOnError: t } = {
  safeJavaScriptLink: !0,
  removeOnError: !0
}) {
  if (!l.isElement(n))
    return !1;
  let i = !1;
  t && n.hasAttribute("onerror") && (g(n, "onerror", null), i = !0);
  const r = n.getAttribute("href");
  return e && r && r.trim().indexOf("javascript") === 0 && (g(n, "href", location.protocol + "//" + r), i = !0), i;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const za = /* @__PURE__ */ new Set([
  "div",
  "p",
  "br",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr"
]), Ta = /* @__PURE__ */ new Set(["script", "style"]), xa = /* @__PURE__ */ new Set(["br", "hr", "input"]);
function er(n, e = document, t = null) {
  const i = e.createElement("div");
  return v(n) ? i.innerHTML = n : i.appendChild(n), j("*", i).forEach((r) => {
    const o = r.parentNode;
    if (!o)
      return;
    if (t && l.isTag(r, t)) {
      const a = r.nodeName.toLowerCase(), c = l.isTag(r, xa) ? `%%%jodit-single-${a}%%%` : `%%%jodit-${a}%%%${er(r.innerHTML, e, t)}%%%/jodit-${a}%%%`;
      l.before(r, e.createTextNode(c)), l.safeRemove(r);
      return;
    }
    if (l.isTag(r, Ta)) {
      l.safeRemove(r);
      return;
    }
    if (!l.isTag(r, za))
      return;
    const s = r.nextSibling;
    l.isText(s) && /^\s/.test(s.nodeValue || "") || s && o.insertBefore(e.createTextNode(" "), s);
  }), La(K(i.innerText));
}
function La(n) {
  return n.replace(/%%%(\/)?jodit(-single)?-([\w\n]+)%%%/g, (e, t, i, r) => `<${t ? "/" : ""}${r}>`);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const tr = (n) => {
  const e = ["#"];
  let t = Vn(n);
  if (!t)
    return !1;
  if (t = K(t.toUpperCase()), t = t.substring(1), t.length === 3) {
    for (let i = 0; i < 3; i += 1)
      e.push(t[i]), e.push(t[i]);
    return e.join("");
  }
  return t.length > 6 && (t = t.slice(0, 6)), "#" + t;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ir(n) {
  const e = {}, t = {
    meta: 1,
    ctrl: 2,
    control: 2,
    alt: 3,
    shift: 4,
    space: 5
  };
  return n.replace(/\+\+/g, "+add").split(/[\s]*\+[\s]*/).map((i) => K(i.toLowerCase())).map((i) => mo[i] || i).sort((i, r) => t[i] && !t[r] ? -1 : !t[i] && t[r] ? 1 : t[i] && t[r] ? t[i] - t[r] : i > r ? 1 : -1).filter((i) => !e[i] && i !== "" && (e[i] = !0)).join("+");
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const $o = (n, e = 8) => {
  const t = [];
  for (; n.length; )
    t.push(n.substr(0, e)), n = n.substr(e);
  return t[1] = t[1].replace(/./g, "*"), t[2] = t[2].replace(/./g, "*"), t.join("-");
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const wt = (...n) => n.filter((e) => K(e).length).map((e, t) => (e = e.replace(/([^:])[\\/]+/g, "$1/"), t && (e = e.replace(/^\//, "")), t !== n.length - 1 && (e = e.replace(/\/$/, "")), e)).join("/");
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Ko = (n) => n.split("/").reduce((i, r) => {
  switch (r) {
    case "":
      break;
    case ".":
      break;
    case "..": {
      i.pop();
      break;
    }
    default: {
      i.push(r);
      break;
    }
  }
  return i;
}, []).join("/") + (n.endsWith("/") ? "/" : "");
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Jo = (n, e) => /^[0-9]+$/.test(n.toString()) ? n + e : n.toString();
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const bn = (...n) => n.filter((e) => e.length).map((e) => e.replace(/\/$/, "")).join("/").replace(/([^:])[\\/]+/g, "$1/");
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Aa = (n, e) => {
  const t = (a) => parseInt(a, 10), i = e.getComputedStyle(n), r = n.offsetWidth, o = t(i.getPropertyValue("padding-left") || "0"), s = t(i.getPropertyValue("padding-right") || "0");
  return r - o - s;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function nr(n) {
  if (!n)
    return null;
  const e = l.isHTMLElement(n), t = e && _(n, "overflowY");
  return e && t !== "visible" && t !== "hidden" && n.scrollHeight >= n.clientHeight ? n : nr(n.parentNode) || O.scrollingElement || O.body;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Ra = (n, e) => {
  const t = e.getComputedStyle(n);
  let i = n.clientWidth;
  return i -= parseFloat(t.paddingLeft || "0") + parseFloat(t.paddingRight || "0"), i;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ct(n) {
  return v(n) || M(n) ? n.length : N(n) ? Object.keys(n).length : 0;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Yo = (n, e, t, i = !1) => {
  let r;
  try {
    r = n.getBoundingClientRect();
  } catch {
    r = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: 0,
      height: 0
    };
  }
  const o = t.body, s = t.documentElement || {
    clientTop: 0,
    clientLeft: 0,
    scrollTop: 0,
    scrollLeft: 0
  }, a = t.defaultView || t.parentWindow, c = a.pageYOffset || s.scrollTop || o.scrollTop, d = a.pageXOffset || s.scrollLeft || o.scrollLeft, u = s.clientTop || o.clientTop || 0, h = s.clientLeft || o.clientLeft || 0;
  let f, p;
  const m = e.iframe;
  if (!i && e && e.options && e.o.iframe && m) {
    const { top: w, left: C } = Yo(m, e, e.od, !0);
    f = r.top + w, p = r.left + C;
  } else
    f = r.top + c - u, p = r.left + d - h;
  return {
    top: Math.round(f),
    left: Math.round(p),
    width: r.width,
    height: r.height
  };
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ke(n, e, t = !1) {
  var i, r;
  const o = n.getBoundingClientRect();
  let s = o.left, a = o.top;
  if (ae(e) && e.iframe && e.ed.body.contains(n) && !t) {
    const { left: c, top: d } = ke(e.iframe, e, !0);
    s += c, a += d;
  }
  return {
    left: Math.round(s),
    top: Math.round(a),
    width: Math.round((i = n.offsetWidth) !== null && i !== void 0 ? i : o.width),
    height: Math.round((r = n.offsetHeight) !== null && r !== void 0 ? r : o.height)
  };
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Pa(n, e, t = 0, i = 1) {
  let r = 0, o = 0, s = -1, a = 0, c = 0;
  for (o = t; r < n.length && o < e.length; )
    n[r].toLowerCase() === e[o].toLowerCase() ? (r++, a++, c = 0, s === -1 && (s = o)) : r > 0 && (c >= i && e[o] !== ue ? (r = 0, s = -1, a = 0, c = 0, o--) : (c++, a++)), o++;
  return r === n.length ? [s, a] : [-1, 0];
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Fi(n) {
  return n.length ? n[0].toUpperCase() + n.substring(1) : "";
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Go = (n, e) => {
  if (!e || !e.length)
    return n;
  const t = /%([sd])/g;
  let i = t.exec(n), r = n, o = 0;
  for (; i && e[o] !== void 0; )
    r = r.replace(i[0], e[o].toString()), o += 1, i = t.exec(n);
  return r;
};
function Xo(n, e, t) {
  if (!v(n))
    throw z("i18n: Need string in first argument");
  if (!n.length)
    return n;
  const i = !!(t != null && t.debugLanguage);
  let r = {};
  const o = (h) => e && e.length ? Go(h, e) : h, s = Ci(b.defaultOptions.language, b.defaultOptions.language), a = Ci(t == null ? void 0 : t.language, s), c = (h) => {
    if (!h)
      return;
    if (v(h[n]))
      return o(h[n]);
    const f = n.toLowerCase();
    if (v(h[f]))
      return o(h[f]);
    const p = Fi(n);
    if (v(h[p]))
      return o(h[p]);
  };
  ye[a] !== void 0 ? r = ye[a] : i || (ye[s] !== void 0 ? r = ye[s] : r = ye.en);
  const d = t == null ? void 0 : t.i18n;
  if (d && d[a]) {
    const h = c(d[a]);
    if (h)
      return h;
  }
  const u = c(r);
  return u || (!i && ye.en && v(ye.en[n]) && ye.en[n] ? o(ye.en[n]) : i ? "{" + n + "}" : o(n));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  $$: j,
  CamelCaseToKebabCase: Ro,
  ConfigDeepFlatten: Oo,
  ConfigFlatten: Dt,
  ConfigProto: Q,
  ConnectionError: qi,
  LimitedStack: _a,
  NUMBER_FIELDS_REG: Wn,
  OptionsError: Hi,
  abort: $t,
  alignElement: ca,
  alreadyLoadedList: gi,
  appendScriptAsync: Kn,
  appendStyleAsync: Jn,
  applyStyles: Sa,
  asArray: ei,
  assert: E,
  attr: g,
  browser: ua,
  buildQuery: Nt,
  call: he,
  callPromise: Ae,
  camelCase: se,
  cleanFromWord: Ca,
  clearAlign: Mo,
  clearCenterAlign: dn,
  clearTimeout: Mt,
  cns: Ho,
  colorToHex: Vn,
  completeUrl: $n,
  connection: pn,
  convertMediaUrlToVideoEmbed: qo,
  css: _,
  cssPath: Uo,
  ctrlKey: fn,
  dataBind: Z,
  defaultLanguage: Ci,
  error: z,
  fastClone: ha,
  fuzzySearchIndex: Pa,
  get: _i,
  getClassName: Xn,
  getContentWidth: Aa,
  getDataTransfer: ma,
  getScrollParent: nr,
  getXPathByElement: Fo,
  hAlignElement: un,
  hasBrowserColorPicker: So,
  hasContainer: Io,
  htmlspecialchars: ka,
  humanSizeToBytes: gn,
  i18n: Xo,
  inView: vn,
  innerWidth: Ra,
  isAbort: ga,
  isAbortError: bt,
  isArray: M,
  isAtom: hn,
  isBoolean: We,
  isDestructable: Un,
  isEqual: oa,
  isFastEqual: Co,
  isFunction: y,
  isHTML: Fn,
  isHtmlFromWord: sa,
  isInitable: ko,
  isInt: aa,
  isJoditObject: ae,
  isLicense: Eo,
  isMarker: be,
  isNativeFunction: yo,
  isNumber: le,
  isNumeric: Zt,
  isPlainObject: N,
  isPromise: Qt,
  isSet: ln,
  isString: v,
  isStringArray: pt,
  isURL: Oi,
  isValidName: cn,
  isViewObject: lt,
  isVoid: V,
  isWindow: zo,
  kebabCase: Ce,
  keepNames: mn,
  keys: Je,
  loadImage: fa,
  loadNext: jo,
  loadNextStyle: No,
  markAsAtomic: Do,
  markDeprecated: ba,
  markOwner: Yn,
  memorizeExec: pa,
  nl2br: Ia,
  normalizeColor: tr,
  normalizeCssNumericValue: Po,
  normalizeCssValue: Wt,
  normalizeKeyAliases: ir,
  normalizeLicense: $o,
  normalizePath: wt,
  normalizeRelativePath: Ko,
  normalizeSize: Jo,
  normalizeUrl: bn,
  offset: Yo,
  options: va,
  parseQuery: Gn,
  position: ke,
  previewBox: ya,
  refs: _e,
  reset: _o,
  resolveElement: Ot,
  safeHTML: Ea,
  sanitizeHTMLElement: Bt,
  scrollIntoViewIfNeeded: zt,
  set: Vo,
  setTimeout: Wo,
  size: Ct,
  splitArray: Ge,
  sprintf: Go,
  stringify: Si,
  stripTags: er,
  toArray: U,
  trim: K,
  trimChars: To,
  trimInv: xo,
  ucfirst: Fi
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function qt(n) {
  return Ce(n).toLowerCase();
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Sr = /* @__PURE__ */ new Set();
async function Ba(n, e) {
  const t = Zo(n, e, !1);
  if (!Sr.has(t))
    return Sr.add(t), Jn(n, t);
}
function Zo(n, e, t) {
  e = Ce(e);
  const i = n.minified ? ".min" : "";
  return n.basePath + "plugins/" + e + "/" + e + i + "." + (t ? "js" : "css");
}
function ja(n, e, t, i) {
  try {
    const r = t.filter((o) => !n.has(qt(o.name)));
    r.length && Na(e, r, i);
  } catch {
  }
}
function Na(n, e, t) {
  e.map((i) => {
    const r = i.url || Zo(n, i.name, !0);
    return Kn(n, r).then(t).catch(() => null);
  });
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Da(n, e, t, i, r, o) {
  if (ko(i))
    try {
      i.init(n);
    } catch (s) {
      console.error(s);
    }
  if (r.set(e, i), o.delete(e), i.hasStyle && Ba(n, e).catch((s) => {
  }), i.styles) {
    const s = ti(n, e, "style");
    s.innerHTML = i.styles;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Oa(n, e) {
  try {
    try {
      return y(e) ? new e(n) : e;
    } catch {
      if (y(e) && !e.prototype)
        return e(n);
    }
  } catch (t) {
    console.error(t);
  }
  return null;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Qo {
  constructor() {
    this.__items = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.__items.size;
  }
  /**
   * Add plugin in store
   */
  add(e, t) {
    this.__items.set(qt(e), t), at.fire(`plugin:${e}:ready`);
  }
  /**
   * Get plugin from store
   */
  get(e) {
    return this.__items.get(qt(e));
  }
  /**
   * Remove plugin from store
   */
  remove(e) {
    this.__items.delete(qt(e));
  }
  __getFullPluginsList(e) {
    const t = [];
    return this.__items.forEach((i, r) => {
      (!e || e.has(r)) && t.push([r, i]);
    }), t;
  }
  /**
   * Public method for async init all plugins
   */
  __init(e) {
    const { extraList: t, disableList: i, filter: r } = Ha(e), o = /* @__PURE__ */ new Map(), s = {}, a = /* @__PURE__ */ new Set();
    e.__plugins = s;
    const c = () => {
      if (e.isInDestruct)
        return;
      let d = !1;
      this.__getFullPluginsList(r).forEach(([u, h]) => {
        if (i.has(u) || o.has(u))
          return;
        const f = h == null ? void 0 : h.requires;
        if (f && M(f) && f.length) {
          if (f.some((m) => i.has(m)))
            return;
          if (!f.every((m) => o.has(m))) {
            a.add(u);
            return;
          }
        }
        d = !0;
        const p = Oa(e, h);
        if (!p) {
          o.set(u, null), a.delete(u);
          return;
        }
        Da(e, u, h, p, o, a), s[u] = p;
      }), d && (e.e.fire("updatePlugins"), c());
    };
    t && t.length && ja(this.__items, e, t, c), c(), qa(e, s);
  }
  /**
   * Returns the promise to wait for the plugin to load.
   */
  wait(e) {
    return new Promise((t) => {
      if (this.get(e))
        return t();
      const i = () => {
        t(), at.off(`plugin:${e}:ready`, i);
      };
      at.on(`plugin:${e}:ready`, i);
    });
  }
}
function qa(n, e) {
  n.e.on("beforeDestruct", () => {
    Object.keys(e).forEach((t) => {
      const i = e[t];
      Un(i) && i.destruct(n), delete e[t];
    }), delete n.__plugins;
  });
}
function Ha(n) {
  const e = n.o.extraPlugins.map((r) => v(r) ? { name: r } : r), t = new Set(Ge(n.o.disablePlugins).map(qt)), i = n.o.safeMode ? new Set(n.o.safePluginsList) : null;
  return { extraList: e, disableList: t, filter: i };
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const vt = "JoditEventDefaultNamespace";
class es {
  constructor() {
    this.__store = /* @__PURE__ */ new Map();
  }
  get(e, t) {
    if (this.__store.has(t)) {
      const i = this.__store.get(t);
      return E(i, "-"), i[e];
    }
  }
  indexOf(e, t, i) {
    const r = this.get(e, t);
    if (r) {
      for (let o = 0; o < r.length; o += 1)
        if (r[o].originalCallback === i)
          return o;
    }
    return !1;
  }
  namespaces(e = !1) {
    const t = U(this.__store.keys());
    return e ? t.filter((i) => i !== vt) : t;
  }
  events(e) {
    const t = this.__store.get(e);
    return t ? Object.keys(t) : [];
  }
  set(e, t, i, r = !1) {
    let o = this.__store.get(t);
    o || (o = {}, this.__store.set(t, o)), o[e] === void 0 && (o[e] = []), r ? o[e].unshift(i) : o[e].push(i);
  }
  clear() {
    this.__store.clear();
  }
  clearEvents(e, t) {
    const i = this.__store.get(e);
    i && i[t] && (delete i[t], Object.keys(i).length || this.__store.delete(e));
  }
  isEmpty() {
    return this.__store.size === 0;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class rr {
  mute(e) {
    return this.__mutedEvents.add(e ?? "*"), this;
  }
  isMuted(e) {
    return e && this.__mutedEvents.has(e) ? !0 : this.__mutedEvents.has("*");
  }
  unmute(e) {
    return this.__mutedEvents.delete(e ?? "*"), this;
  }
  __eachEvent(e, t) {
    Ge(e).map((r) => r.trim()).forEach((r) => {
      const o = r.split("."), s = o[1] || vt;
      t.call(this, o[0], s);
    });
  }
  __getStore(e) {
    if (!e)
      throw z("Need subject");
    if (e[this.__key] === void 0) {
      const t = new es();
      Object.defineProperty(e, this.__key, {
        enumerable: !1,
        configurable: !0,
        writable: !0,
        value: t
      });
    }
    return e[this.__key];
  }
  __removeStoreFromSubject(e) {
    e[this.__key] !== void 0 && Object.defineProperty(e, this.__key, {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: void 0
    });
  }
  __triggerNativeEvent(e, t) {
    const i = this.__doc.createEvent("HTMLEvents");
    v(t) ? i.initEvent(t, !0, !0) : (i.initEvent(t.type, t.bubbles, t.cancelable), [
      "screenX",
      "screenY",
      "clientX",
      "clientY",
      "target",
      "srcElement",
      "currentTarget",
      "timeStamp",
      "which",
      "keyCode"
    ].forEach((r) => {
      Object.defineProperty(i, r, {
        value: t[r],
        enumerable: !0
      });
    }), Object.defineProperty(i, "originalEvent", {
      value: t,
      enumerable: !0
    })), e.dispatchEvent(i);
  }
  /**
   * Get current event name
   *
   * @example
   * ```javascript
   * parent.e.on('openDialog closeDialog', function () {
   *     if (parent.e.current === 'closeDialog') {
   *         alert('Dialog was closed');
   *     } else {
   *         alert('Dialog was opened');
   *     }
   * });
   * ```
   */
  get current() {
    return this.currents[this.currents.length - 1];
  }
  on(e, t, i, r) {
    let o, s, a, c;
    if (v(e) || pt(e) ? (o = this, s = e, a = t, c = i) : (o = e, s = t, a = i, c = r), !(v(s) || pt(s)) || s.length === 0)
      throw z("Need events names");
    if (!y(a))
      throw z("Need event handler");
    if (M(o))
      return o.forEach((p) => {
        this.on(p, s, a, c);
      }), this;
    const d = o, u = this.__getStore(d), h = this;
    let f = function(p, ...m) {
      if (!h.isMuted(p))
        return a && a.call(this, ...m);
    };
    return et(d) && (f = function(p) {
      if (!h.isMuted(p.type) && (h.__prepareEvent(p), a && a.call(this, p) === !1))
        return p.preventDefault(), p.stopImmediatePropagation(), !1;
    }), this.__eachEvent(s, (p, m) => {
      var w, C;
      if (p.length === 0)
        throw z("Need event name");
      if (u.indexOf(p, m, a) === !1) {
        const I = {
          event: p,
          originalCallback: a,
          syntheticCallback: f
        };
        if (u.set(p, m, I, c == null ? void 0 : c.top), et(d)) {
          const A = bo.has(p) ? {
            passive: !0,
            capture: (w = c == null ? void 0 : c.capture) !== null && w !== void 0 ? w : !1
          } : (C = c == null ? void 0 : c.capture) !== null && C !== void 0 ? C : !1;
          f.options = A, d.addEventListener(p, f, A), this.__memoryDOMSubjectToHandler(d, f);
        }
      }
    }), this;
  }
  __memoryDOMSubjectToHandler(e, t) {
    const i = this.__domEventsMap.get(e) || /* @__PURE__ */ new Set();
    i.add(t), this.__domEventsMap.set(e, i);
  }
  __unmemoryDOMSubjectToHandler(e, t) {
    const i = this.__domEventsMap, r = i.get(e) || /* @__PURE__ */ new Set();
    r.delete(t), r.size ? i.set(e, r) : i.delete(e);
  }
  one(e, t, i, r) {
    let o, s, a, c;
    v(e) || pt(e) ? (o = this, s = e, a = t, c = i) : (o = e, s = t, a = i, c = r);
    const d = (...u) => (this.off(o, s, d), a(...u));
    return this.on(o, s, d, c), this;
  }
  off(e, t, i) {
    let r, o, s;
    if (v(e) || pt(e) ? (r = this, o = e, s = t) : (r = e, o = t, s = i), M(r))
      return r.forEach((h) => {
        this.off(h, o, s);
      }), this;
    const a = r, c = this.__getStore(a);
    if (!(v(o) || pt(o)) || o.length === 0)
      return c.namespaces().forEach((h) => {
        this.off(a, "." + h);
      }), this.__removeStoreFromSubject(a), this;
    const d = (h) => {
      var f;
      et(a) && (a.removeEventListener(h.event, h.syntheticCallback, (f = h.syntheticCallback.options) !== null && f !== void 0 ? f : !1), this.__unmemoryDOMSubjectToHandler(a, h.syntheticCallback));
    }, u = (h, f) => {
      if (h === "") {
        c.events(f).forEach((m) => {
          m !== "" && u(m, f);
        });
        return;
      }
      const p = c.get(h, f);
      if (!(!p || !p.length))
        if (!y(s))
          p.forEach(d), p.length = 0, c.clearEvents(f, h);
        else {
          const m = c.indexOf(h, f, s);
          m !== !1 && (d(p[m]), p.splice(m, 1), p.length || c.clearEvents(f, h));
        }
    };
    return this.__eachEvent(o, (h, f) => {
      f === vt ? c.namespaces().forEach((p) => {
        u(h, p);
      }) : u(h, f);
    }), c.isEmpty() && this.__removeStoreFromSubject(a), this;
  }
  stopPropagation(e, t) {
    const i = v(e) ? this : e, r = v(e) ? e : t;
    if (typeof r != "string")
      throw z("Need event names");
    const o = this.__getStore(i);
    this.__eachEvent(r, (s, a) => {
      const c = o.get(s, a);
      c && this.__stopped.push(c), a === vt && o.namespaces(!0).forEach((d) => this.stopPropagation(i, s + "." + d));
    });
  }
  __removeStop(e) {
    if (e) {
      const t = this.__stopped.indexOf(e);
      t !== -1 && this.__stopped.splice(0, t + 1);
    }
  }
  __isStopped(e) {
    return e !== void 0 && this.__stopped.indexOf(e) !== -1;
  }
  fire(e, t, ...i) {
    let r, o;
    const s = v(e) ? this : e, a = v(e) ? e : t, c = v(e) ? [t, ...i] : i;
    if (!et(s) && !v(a))
      throw z("Need events names");
    const d = this.__getStore(s);
    return !v(a) && et(s) ? this.__triggerNativeEvent(s, t) : this.__eachEvent(a, (u, h) => {
      if (et(s))
        this.__triggerNativeEvent(s, u);
      else {
        const f = d.get(u, h);
        if (f)
          try {
            [...f].every((p) => this.__isStopped(f) ? !1 : (this.currents.push(u), o = p.syntheticCallback.call(s, u, ...c), this.currents.pop(), o !== void 0 && (r = o), !0));
          } finally {
            this.__removeStop(f);
          }
        h === vt && !et(s) && d.namespaces().filter((p) => p !== h).forEach((p) => {
          const m = this.fire.apply(this, [
            s,
            u + "." + p,
            ...c
          ]);
          m !== void 0 && (r = m);
        });
      }
    }), r;
  }
  constructor(e) {
    this.__domEventsMap = /* @__PURE__ */ new Map(), this.__mutedEvents = /* @__PURE__ */ new Set(), this.__key = "__JoditEventEmitterNamespaces", this.__doc = O, this.__prepareEvent = (t) => {
      t.cancelBubble || (t.composed && y(t.composedPath) && t.composedPath()[0] && Object.defineProperty(t, "target", {
        value: t.composedPath()[0],
        configurable: !0,
        enumerable: !0
      }), t.type.match(/^touch/) && t.changedTouches && t.changedTouches.length && ["clientX", "clientY", "pageX", "pageY"].forEach((i) => {
        Object.defineProperty(t, i, {
          value: t.changedTouches[0][i],
          configurable: !0,
          enumerable: !0
        });
      }), t.originalEvent || (t.originalEvent = t), t.type === "paste" && t.clipboardData === void 0 && this.__doc.defaultView.clipboardData && Object.defineProperty(t, "clipboardData", {
        get: () => this.__doc.defaultView.clipboardData,
        configurable: !0,
        enumerable: !0
      }));
    }, this.currents = [], this.__stopped = [], this.__isDestructed = !1, e && (this.__doc = e), this.__key += (/* @__PURE__ */ new Date()).getTime();
  }
  destruct() {
    this.__isDestructed || (this.__isDestructed = !0, this.__domEventsMap.forEach((e, t) => {
      this.off(t);
    }), this.__domEventsMap.clear(), this.__mutedEvents.clear(), this.currents.length = 0, this.__stopped.length = 0, this.off(this), this.__getStore(this).clear(), this.__removeStoreFromSubject(this));
  }
}
function et(n) {
  return y(n.addEventListener);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function or(n, e) {
  let t;
  do
    t = Object.getOwnPropertyDescriptor(n, e), n = Object.getPrototypeOf(n);
  while (!t && n);
  return t;
}
function L(n, e) {
  return (t, i) => {
    var r;
    if (!y(t[i]))
      throw z("Handler must be a Function");
    const o = (r = e == null ? void 0 : e.immediately) !== null && r !== void 0 ? r : !0, s = e == null ? void 0 : e.context, a = (c) => {
      const d = lt(c) ? c : c.jodit;
      let u = (h, ...f) => {
        if (!c.isInDestruct)
          return c[i](h, ...f);
      };
      o || (u = c.async.microDebounce(u, !0)), Ge(n).forEach((h) => {
        if (/:/.test(h)) {
          const [I, A] = h.split(":");
          let B = s;
          I.length && (B = c.get(I)), y(B) && (B = B(c)), d.events.on(B || c, A, u), B || d.events.on(A, u), c.hookStatus("beforeDestruct", () => {
            d.events.off(B || c, A, u).off(A, u);
          });
          return;
        }
        const f = h.split("."), [p] = f, m = f.slice(1);
        let w = c[p];
        N(w) && ki(w).on(`change.${m.join(".")}`, u);
        const C = or(t, p);
        Object.defineProperty(c, p, {
          configurable: !0,
          set(I) {
            const A = w;
            A !== I && (w = I, C && C.set && C.set.call(c, I), N(w) && (w = ki(w), w.on(`change.${m.join(".")}`, u)), u(p, A, w));
          },
          get() {
            return C && C.get ? C.get.call(c) : w;
          }
        });
      });
    };
    y(t.hookStatus) ? t.hookStatus(P.ready, a) : a(t);
  };
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ts = Symbol("observable-object");
function Cr(n) {
  return n[ts] !== void 0;
}
function ki(n) {
  if (Cr(n))
    return n;
  const e = {}, t = {}, i = (s, a) => M(s) ? (s.map((c) => i(c, a)), n) : (t[s] || (t[s] = []), t[s].push(a), n), r = (s, ...a) => {
    if (M(s)) {
      s.map((c) => r(c, ...a));
      return;
    }
    try {
      !e[s] && t[s] && (e[s] = !0, t[s].forEach((c) => c.call(n, ...a)));
    } finally {
      e[s] = !1;
    }
  }, o = (s, a = []) => {
    const c = {};
    Cr(s) || (Object.defineProperty(s, ts, {
      enumerable: !1,
      value: !0
    }), Object.keys(s).forEach((d) => {
      const u = d, h = a.concat(u).filter((p) => p.length);
      c[u] = s[u];
      const f = or(s, u);
      Object.defineProperty(s, u, {
        set: (p) => {
          const m = c[u];
          if (!Co(c[u], p)) {
            r([
              "beforeChange",
              `beforeChange.${h.join(".")}`
            ], u, p), N(p) && o(p, h), f && f.set ? f.set.call(n, p) : c[u] = p;
            const w = [];
            r([
              "change",
              ...h.reduce((C, I) => (w.push(I), C.push(`change.${w.join(".")}`), C), [])
            ], h.join("."), m, p != null && p.valueOf ? p.valueOf() : p);
          }
        },
        get: () => f && f.get ? f.get.call(n) : c[u],
        enumerable: !0,
        configurable: !0
      }), N(c[u]) && o(c[u], h);
    }), Object.defineProperty(n, "on", {
      value: i
    }));
  };
  return o(n), n;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const vi = {};
let kr = 1;
const Ir = /* @__PURE__ */ new Set();
function Fa() {
  function n() {
    return kr += 10 * (Math.random() + 1), Math.round(kr).toString(16);
  }
  let e = n();
  for (; Ir.has(e); )
    e = n();
  return Ir.add(e), e;
}
const H = new Qo(), sr = {}, en = /* @__PURE__ */ new WeakMap();
function ti(n, e, t = "div", i = !1) {
  const r = v(e) ? e : e ? Xn(e.prototype) : "jodit-utils", o = en.get(n) || {}, s = r + t, a = lt(n) ? n : n.j;
  let c = null;
  if (!o[s]) {
    let d = a.c;
    if (c = is(a.o, a.container, n.od.body), i && ae(n) && n.od !== n.ed) {
      d = n.createInside;
      const h = t === "style" ? n.ed.head : n.ed.body;
      c = ae(n) && n.o.shadowRoot ? n.o.shadowRoot : h;
    }
    const u = d.element(t, {
      className: `jodit jodit-${Ce(r)}-container jodit-box`
    });
    u.classList.add(`jodit_theme_${a.o.theme || "default"}`), c.appendChild(u), o[s] = u, n.hookStatus("beforeDestruct", () => {
      a.events.off(u), l.safeRemove(u), delete o[s], Object.keys(o).length && en.delete(n);
    }), en.set(n, o), a.events.fire("getContainer", u);
  }
  return o[s].classList.remove("jodit_theme_default", "jodit_theme_dark"), o[s].classList.add(`jodit_theme_${a.o.theme || "default"}`), o[s];
}
function is(n, e, t) {
  var i, r, o;
  return (o = (r = (i = n.popupRoot) !== null && i !== void 0 ? i : n.shadowRoot) !== null && r !== void 0 ? r : l.closest(e, (s) => l.isHTMLElement(s) && (l.isTag(s, "dialog") || ["fixed", "absolute"].includes(_(s, "position"))), t)) !== null && o !== void 0 ? o : t;
}
const at = new rr();
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Rt = /* @__PURE__ */ new Map();
class fe {
  get componentName() {
    return this.__componentName || (this.__componentName = "jodit-" + Ce((y(this.className) ? this.className() : "") || Xn(this))), this.__componentName;
  }
  getFullElName(e, t, i) {
    const r = [this.componentName];
    return e && (e = e.replace(/[^a-z0-9-]/gi, "-"), r.push(`__${e}`)), t && (r.push("_", t), r.push("_", V(i) ? "true" : i.toString())), r.join("");
  }
  /**
   * The document in which jodit was created
   */
  get ownerDocument() {
    return this.ow.document;
  }
  /**
   * Shortcut for `this.ownerDocument`
   */
  get od() {
    return this.ownerDocument;
  }
  get ow() {
    return this.ownerWindow;
  }
  /**
   * Safe get any field
   * @example
   * ```js
   * private a = {
   * 	b: {
   * 		c: {
   * 			e: {
   * 				g: {
   * 					color: 'red'
   * 				}
   * 			}
   * 		}
   * 	}
   * }
   *
   * this.get('a.b.c.e.g.color'); // Safe access to color
   * // instead using optionsl chaining
   * this?.a?.b?.c?.e?.g?.color
   * ```
   *
   * @param chain - the path to be traversed in the obj object
   * @param obj - the object in which the value is searched
   */
  get(e, t) {
    return _i(e, t || this);
  }
  /**
   * Component is ready for work
   */
  get isReady() {
    return this.componentStatus === P.ready;
  }
  /**
   * Component was destructed
   */
  get isDestructed() {
    return this.componentStatus === P.destructed;
  }
  /**
   * The component is currently undergoing destructuring or has already been destroyed.
   * Those. you should not the app froze new events on him now or do anything else with him.
   */
  get isInDestruct() {
    return P.beforeDestruct === this.componentStatus || P.destructed === this.componentStatus;
  }
  /**
   * Bind destructor to some View
   */
  bindDestruct(e) {
    return e.hookStatus(P.beforeDestruct, () => !this.isInDestruct && this.destruct()), this;
  }
  constructor() {
    this.async = new Qn(), this.ownerWindow = window, this.__componentStatus = P.beforeInit, this.uid = "jodit-uid-" + Fa();
  }
  /**
   * Destruct component method
   */
  destruct() {
    this.setStatus(P.destructed), this.async && (this.async.destruct(), this.async = void 0), Rt.get(this) && Rt.delete(this), this.ownerWindow = void 0;
  }
  /**
   * Current component status
   */
  get componentStatus() {
    return this.__componentStatus;
  }
  /**
   * Setter for current component status
   */
  set componentStatus(e) {
    this.setStatus(e);
  }
  /**
   * Set component status
   * @param componentStatus - component status
   * @see ComponentStatus
   */
  setStatus(e) {
    return this.setStatusComponent(e, this);
  }
  /**
   * Set status recursively on all parents
   */
  setStatusComponent(e, t) {
    if (e === this.__componentStatus)
      return;
    t === this && (this.__componentStatus = e);
    const i = Object.getPrototypeOf(this);
    i && y(i.setStatusComponent) && i.setStatusComponent(e, t);
    const r = Rt.get(this), o = r == null ? void 0 : r[e];
    o && o.length && o.forEach((s) => s(t));
  }
  /**
   * Adds a handler for changing the component's status
   *
   * @param status - the status at which the callback is triggered
   * @param callback - a function that will be called when the status is `status`
   */
  hookStatus(e, t) {
    let i = Rt.get(this);
    i || (i = {}, Rt.set(this, i)), i[e] || (i[e] = []), i[e].push(t);
  }
  static isInstanceOf(e, t) {
    return e instanceof t;
  }
}
fe.STATUSES = P;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Te extends fe {
  /**
   * Shortcut for `this.jodit`
   */
  get j() {
    return this.jodit;
  }
  get defaultTimeout() {
    return this.j.defaultTimeout;
  }
  i18n(e, ...t) {
    return this.j.i18n(e, ...t);
  }
  /**
   * Attach component to View
   */
  setParentView(e) {
    return this.jodit = e, e.components.add(this), this;
  }
  constructor(e) {
    super(), this.setParentView(e);
  }
  /** @override */
  destruct() {
    return this.j.components.delete(this), super.destruct();
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Oe(n, e = !1, t = "debounce") {
  return (i, r) => {
    const o = i[r];
    if (!y(o))
      throw z("Handler must be a Function");
    return i.hookStatus(P.ready, (s) => {
      const { async: a } = s;
      E(a != null, `Component ${s.componentName || s.constructor.name} should have "async:IAsync" field`);
      const c = y(n) ? n(s) : n, d = le(c) || N(c) ? c : s.defaultTimeout;
      Object.defineProperty(s, r, {
        configurable: !0,
        value: a[t](s[r].bind(s), d, e)
      });
    }), {
      configurable: !0,
      get() {
        return o.bind(this);
      }
    };
  };
}
function ii(n, e = !1) {
  return Oe(n, e, "throttle");
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Tt(...n) {
  return (e) => {
    const t = e.prototype;
    for (let i = 0; i < n.length; i++) {
      const r = n[i], o = Object.getOwnPropertyNames(r.prototype);
      for (let s = 0; s < o.length; s++) {
        const a = o[s], c = Object.getOwnPropertyDescriptor(r.prototype, a);
        c != null && y(c.value) && !y(t[a]) && Object.defineProperty(t, a, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: function(...u) {
            return c.value.call(this, ...u);
          }
        });
      }
    }
  };
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ct(n) {
  return (e, t) => {
    if (!y(e[t]))
      throw z("Handler must be a Function");
    e.hookStatus(n, (i) => {
      i[t].call(i);
    });
  };
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ua() {
  return (n, e) => {
    if (!y(n[e]))
      throw z("Handler must be a Function");
    n.hookStatus(P.ready, (t) => {
      const { async: i } = t, r = t[e];
      t[e] = (...o) => i.requestIdleCallback(r.bind(t, ...o));
    });
  };
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Va = (n, e) => {
  (Object.getOwnPropertyDescriptor(n, e) || {}).enumerable !== !1 && Object.defineProperty(n, e, {
    enumerable: !1,
    set(i) {
      Object.defineProperty(this, e, {
        enumerable: !1,
        writable: !0,
        value: i
      });
    }
  });
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Wa(n, e) {
  n.hookStatus(P.ready, (t) => {
    const i = lt(t) ? t : t.jodit, r = `${i.options.namespace}${t.componentName}_prop_${e}`, o = t[e];
    Object.defineProperty(t, e, {
      get() {
        var s;
        return (s = i.storage.get(r)) !== null && s !== void 0 ? s : o;
      },
      set(s) {
        i.storage.set(r, s);
      }
    });
  });
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ns(n) {
  return (e, t) => {
    const i = e[t];
    if (!y(i))
      throw z("Handler must be a Function");
    e.hookStatus(P.ready, (r) => {
      const { async: o } = r, s = r[t];
      let a = 0;
      Object.defineProperty(r, t, {
        configurable: !0,
        value: function c(...d) {
          o.clearTimeout(a), n(r) ? s.apply(r, d) : a = o.setTimeout(() => c(...d), 10);
        }
      });
    });
  };
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  autobind: k,
  cache: J,
  cacheHTML: Zn,
  cached: st,
  component: D,
  debounce: Oe,
  derive: Tt,
  getPropertyDescriptor: or,
  hook: ct,
  idle: Ua,
  nonenumerable: Va,
  persistent: Wa,
  throttle: ii,
  wait: ns,
  watch: L
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.defaultAjaxOptions = {
  successStatuses: [200, 201, 202],
  method: "GET",
  url: "",
  data: null,
  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
  headers: {
    "X-REQUESTED-WITH": "XMLHttpRequest"
    // compatible with jQuery
  },
  withCredentials: !1,
  xhr() {
    return new XMLHttpRequest();
  }
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class rs {
  get url() {
    return this.request.url;
  }
  constructor(e, t, i, r) {
    this.request = e, this.status = t, this.statusText = i, this.body = r;
  }
  async json() {
    return JSON.parse(this.body);
  }
  text() {
    return Promise.resolve(this.body);
  }
  async blob() {
    return this.body;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var $a = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class je {
  className() {
    return "Ajax";
  }
  constructor(e, t = b.prototype.defaultAjaxOptions) {
    this.__async = new Qn(), this.__isFulfilled = !1, this.__activated = !1, this.__isDestructed = !1, this.options = Q(e || {}, t), this.xhr = this.o.xhr ? this.o.xhr() : new XMLHttpRequest();
  }
  __buildParams(e, t) {
    return N(e) && this.options.contentType && this.options.contentType.includes("application/json") ? JSON.stringify(e) : y(this.o.queryBuild) ? this.o.queryBuild.call(this, e, t) : v(e) || e instanceof Be.FormData || typeof e == "object" && e != null && y(e.append) ? e : Nt(e);
  }
  get o() {
    return this.options;
  }
  abort() {
    if (this.__isFulfilled)
      return this;
    try {
      this.__isFulfilled = !0, this.xhr.abort();
    } catch {
    }
    return this;
  }
  send() {
    this.__activated = !0;
    const { xhr: e, o: t } = this, i = this.prepareRequest();
    return this.__async.promise(async (r, o) => {
      var s;
      const a = () => {
        this.__isFulfilled = !0, o(pn("Connection error"));
      }, c = () => {
        this.__isFulfilled = !0, r(new rs(i, e.status, e.statusText, e.responseType ? e.response : e.responseText));
      };
      e.onload = c, e.onabort = () => {
        this.__isFulfilled = !0, o($t("Abort connection"));
      }, e.onerror = a, e.ontimeout = a, t.responseType && (e.responseType = t.responseType), e.onprogress = (p) => {
        var m, w;
        let C = 0;
        p.lengthComputable && (C = p.loaded / p.total * 100), (w = (m = this.options).onProgress) === null || w === void 0 || w.call(m, C);
      }, e.onreadystatechange = () => {
        var p, m;
        (m = (p = this.options).onProgress) === null || m === void 0 || m.call(p, 10), e.readyState === XMLHttpRequest.DONE && (t.successStatuses.includes(e.status) ? c() : e.statusText && (this.__isFulfilled = !0, o(pn(e.statusText))));
      }, e.withCredentials = (s = t.withCredentials) !== null && s !== void 0 ? s : !1;
      const { url: d, data: u, method: h } = i;
      e.open(h, d, !0), t.contentType && e.setRequestHeader && e.setRequestHeader("Content-type", t.contentType);
      let { headers: f } = t;
      y(f) && (f = await f.call(this)), f && e.setRequestHeader && Object.keys(f).forEach((p) => {
        e.setRequestHeader(p, f[p]);
      }), this.__async.setTimeout(() => {
        e.send(u ? this.__buildParams(u) : void 0);
      }, 0);
    });
  }
  prepareRequest() {
    if (!this.o.url)
      throw z("Need URL for AJAX request");
    let e = this.o.url;
    const t = this.o.data, i = (this.o.method || "get").toLowerCase();
    if (i === "get" && t && N(t)) {
      const o = e.indexOf("?");
      if (o !== -1) {
        const s = Gn(e);
        e = e.substring(0, o) + "?" + Nt({ ...s, ...t });
      } else
        e += "?" + Nt(this.o.data);
    }
    const r = {
      url: e,
      method: i,
      data: t
    };
    return je.log.splice(100), je.log.push(r), r;
  }
  destruct() {
    this.__isDestructed || (this.__isDestructed = !0, this.__activated && !this.__isFulfilled && (this.abort(), this.__isFulfilled = !0), this.__async.destruct());
  }
}
je.log = [];
$a([
  k
], je.prototype, "destruct", null);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class ar {
  /**
   * Return element with BEM class name
   */
  getElm(e) {
    return this.container.querySelector(`.${this.getFullElName(e)}`);
  }
  /**
   * Return elements with BEM class name
   */
  getElms(e) {
    return U(this.container.querySelectorAll(`.${this.getFullElName(e)}`));
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class lr {
  afterSetMod(e, t) {
  }
  /**
   * Set/remove BEM class modification
   *
   * @param value - if null, mod will be removed
   */
  setMod(e, t, i) {
    e = e.toLowerCase();
    const r = this.mods[e];
    if (r === t)
      return this;
    const o = `${this.componentName}_${e}_`, s = (i || this.container).classList;
    return r != null && s.remove(`${o}${r.toString().toLowerCase()}`), !V(t) && t !== "" && s.add(`${o}${t.toString().toLowerCase()}`), this.mods[e] = t, this.afterSetMod(e, t), this;
  }
  /**
   * Get BEM class modification value
   */
  getMod(e) {
    var t;
    return (t = this.mods[e]) !== null && t !== void 0 ? t : null;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class x {
  static getIcon(e) {
    return /<svg/i.test(e) ? e : x.icons[e] || x.icons[e.replace(/-/g, "_")] || x.icons[e.replace(/_/g, "-")] || x.icons[se(e)] || x.icons[Ce(e)] || x.icons[e.toLowerCase()];
  }
  /**
   * Check if icon exist in store
   */
  static exists(e) {
    return this.getIcon(e) !== void 0;
  }
  /**
   * Return SVG icon
   */
  static get(e, t = "<span></span>") {
    return this.getIcon(e) || t;
  }
  /**
   * Set SVG in store
   */
  static set(e, t) {
    return this.icons[e.replace("_", "-")] = t, this;
  }
  /**
   * Make icon html element
   */
  static makeIcon(e, t) {
    var i, r, o, s;
    if (!t)
      return;
    let a;
    const { name: c, iconURL: d, fill: u } = t, h = c.replace(/[^a-zA-Z0-9]/g, "_");
    let f;
    /<svg/.test(c) || (f = (r = (i = e.o).getIcon) === null || r === void 0 ? void 0 : r.call(i, c, h));
    const p = `${c}${d}${u}${f ?? ""}`;
    if (e.o.cache && this.__cache.has(p))
      return (o = this.__cache.get(p)) === null || o === void 0 ? void 0 : o.cloneNode(!0);
    if (d)
      a = e.c.span(), _(a, "backgroundImage", "url(" + d.replace("{basePath}", (e == null ? void 0 : e.basePath) || "") + ")");
    else {
      const m = f || x.get(c, "") || ((s = e.o.extraIcons) === null || s === void 0 ? void 0 : s[c]);
      m && (a = e.c.fromHTML(m.trim()), /^<svg/i.test(c) || a.classList.add("jodit-icon_" + h));
    }
    return a && (a.classList.add("jodit-icon"), a.style.fill = u, e.o.cache && this.__cache.set(p, a.cloneNode(!0))), a;
  }
}
x.icons = {};
x.__cache = /* @__PURE__ */ new Map();
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Ka = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, bi;
let ie = bi = class extends Te {
  get parentElement() {
    return this.__parentElement;
  }
  set parentElement(e) {
    this.__parentElement = e, e && e.hookStatus("beforeDestruct", () => this.destruct()), this.updateParentElement(this);
  }
  bubble(e) {
    let t = this.parentElement;
    for (; t; )
      e(t), t = t.parentElement;
    return this;
  }
  updateParentElement(e) {
    var t;
    return (t = this.__parentElement) === null || t === void 0 || t.updateParentElement(e), this;
  }
  /** @override */
  get(e, t) {
    return super.get(e, t) || this.getElm(e);
  }
  /**
   * Find match parent
   */
  closest(e) {
    const t = typeof e == "object" ? (r) => r === e : (r) => fe.isInstanceOf(r, e);
    let i = this.__parentElement;
    for (; i; ) {
      if (t(i))
        return i;
      !i.parentElement && i.container.parentElement ? i = bi.closestElement(i.container.parentElement, bi) : i = i.parentElement;
    }
    return null;
  }
  /**
   * Find closest UIElement in DOM
   */
  static closestElement(e, t) {
    const i = l.up(e, (r) => {
      if (r) {
        const { component: o } = r;
        return o && fe.isInstanceOf(o, t);
      }
      return !1;
    });
    return i ? i == null ? void 0 : i.component : null;
  }
  /**
   * Update UI from state
   */
  update() {
  }
  /**
   * Append container to element
   */
  appendTo(e) {
    return e.appendChild(this.container), this;
  }
  /**
   * Valid name only with valid chars
   */
  clearName(e) {
    return e.replace(/[^a-zA-Z0-9]/g, "_");
  }
  /**
   * Method create only box
   */
  render(e) {
    return this.j.c.div(this.componentName);
  }
  /**
   * Create main HTML container
   */
  createContainer(e) {
    const t = this.render(e);
    if (v(t)) {
      const i = this.parseTemplate(t);
      return i.classList.add(this.componentName), i;
    }
    return t;
  }
  parseTemplate(e) {
    return this.j.c.fromHTML(e.replace(/\*([^*]+?)\*/g, (t, i) => x.get(i) || "").replace(/&_/g, this.componentName + "_").replace(/~([^~]+?)~/g, (t, i) => this.i18n(i)));
  }
  /** @override */
  constructor(e, t) {
    super(e), this.name = "", this.__parentElement = null, this.mods = {}, this.container = this.createContainer(t), Object.defineProperty(this.container, "component", {
      value: this,
      configurable: !0
    });
  }
  /** @override */
  destruct() {
    return l.safeRemove(this.container), this.parentElement = null, super.destruct();
  }
};
ie = bi = Ka([
  Tt(lr, ar)
], ie);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var os = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, wn;
let ge = wn = class extends ie {
  className() {
    return "UIGroup";
  }
  /**
   * All group children
   */
  get allChildren() {
    const e = [], t = [
      ...this.elements
    ];
    for (; t.length; ) {
      const i = t.shift();
      M(i) ? t.push(...i) : fe.isInstanceOf(i, wn) ? t.push(...i.elements) : i && e.push(i);
    }
    return e;
  }
  /**
   * Update all children
   */
  update() {
    this.elements.forEach((e) => e.update()), this.setMod("size", this.buttonSize);
  }
  /**
   * Append new element into group
   */
  append(e, t) {
    if (M(e))
      return e.forEach((i) => this.append(i, t)), this;
    if (this.elements.push(e), e.name && e.container.classList.add(this.getFullElName(e.name)), t) {
      const i = this.getElm(t);
      E(i != null, "Element does not exist"), i.appendChild(e.container);
    } else
      this.appendChildToContainer(e.container);
    return e.parentElement = this, this;
  }
  /** @override */
  afterSetMod(e, t) {
    this.syncMod && this.elements.forEach((i) => i.setMod(e, t));
  }
  /**
   * Allow set another container for the box of all children
   */
  appendChildToContainer(e) {
    this.container.appendChild(e);
  }
  /**
   * Remove element from group
   */
  remove(e) {
    const t = this.elements.indexOf(e);
    return t !== -1 && (this.elements.splice(t, 1), l.safeRemove(e.container), e.parentElement = null), this;
  }
  /**
   * Clear group
   */
  clear() {
    return this.elements.forEach((e) => e.destruct()), this.elements.length = 0, this;
  }
  /**
   * @param elements - Items of group
   */
  constructor(e, t, i) {
    super(e, i), this.options = i, this.syncMod = !1, this.elements = [], this.buttonSize = "middle", t == null || t.forEach((r) => r && this.append(r)), i != null && i.name && (this.name = i.name);
  }
  /** @override */
  destruct() {
    return this.clear(), super.destruct();
  }
};
os([
  L("buttonSize")
], ge.prototype, "update", null);
ge = wn = os([
  D
], ge);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Ja = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Ii = class extends ie {
  className() {
    return "UISeparator";
  }
};
Ii = Ja([
  D
], Ii);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Ya = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Ei = class extends ie {
  className() {
    return "UISpacer";
  }
};
Ei = Ya([
  D
], Ei);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ss = (n) => M(n.buttons);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function as(n, e) {
  let t;
  return e || (e = b.defaultOptions.controls), v(n) ? t = ls(n, e) || {
    name: n,
    command: n,
    tooltip: n
  } : (t = { name: "empty", ...Dt(n) }, e[t.name] !== void 0 && (t = {
    ...Dt(e[t.name]),
    ...Dt(t)
  })), t;
}
function ls(n, e) {
  let [t, i] = n.split(/\./), r = e;
  return i != null ? e[t] !== void 0 && (r = e[t]) : i = t, r[i] ? {
    name: i,
    ...Dt(r[i])
    // list: isArray(list)
    // 	? (<Array<string>>list).reduce(
    // 			(
    // 				acc: IDictionary<string | number>,
    // 				k: string | number
    // 			) => {
    // 				acc[String(k)] = k;
    // 				return acc;
    // 			},
    // 			{}
    // 		)
    // 	: list
  } : void 0;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ga(n, e) {
  return (M(n) ? n : Je(n, !1).map((i) => {
    const r = n[i] || {};
    return Q({ name: i }, r);
  })).map((i) => as(i, e || b.defaultOptions.controls));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var cs = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let kt = class extends ge {
  /** @override */
  className() {
    return "UIList";
  }
  __onChangeMode() {
    this.setMod("mode", this.mode);
  }
  constructor(e) {
    super(e), this.mode = "horizontal", this.removeButtons = [];
  }
  /**
   * Make new group and append it in list of elements
   */
  makeGroup() {
    return new ge(this.jodit);
  }
  /**
   * All buttons from list
   */
  get buttons() {
    return this.allChildren.filter((e) => fe.isInstanceOf(e, R));
  }
  /**
   * Helper for getting full plain button list
   */
  getButtonsNames() {
    return this.buttons.map((e) => e instanceof R && e.state.name || "").filter((e) => e !== "");
  }
  setRemoveButtons(e) {
    return this.removeButtons = e || [], this;
  }
  build(e, t = null) {
    e = Ge(e), this.clear();
    let i = !1, r = this.makeGroup();
    this.append(r), r.setMod("line", !0);
    let o;
    const s = (c) => {
      let d = null;
      switch (c.name) {
        case `
`:
          r = this.makeGroup(), r.setMod("line", !0), o = this.makeGroup(), r.append(o), this.append(r);
          break;
        case "|":
          i || (i = !0, d = new Ii(this.j));
          break;
        case "---": {
          o.setMod("before-spacer", !0);
          const u = new Ei(this.j);
          r.append(u), o = this.makeGroup(), r.append(o), i = !1;
          break;
        }
        default:
          switch (i = !1, c.component) {
            case "select":
              d = this.makeSelect(c, t);
              break;
            case "button":
            default:
              d = this.makeButton(c, t);
          }
      }
      d && (o || (o = this.makeGroup(), r.append(o)), o.append(d));
    }, a = (c) => {
      var d;
      return !this.removeButtons.includes(c.name) && (!c.isVisible || ((d = c.isVisible) === null || d === void 0 ? void 0 : d.call(c, this.j, c)));
    };
    return e.forEach((c) => {
      if (ss(c)) {
        const d = c.buttons.filter((u) => u);
        d.length && (o = this.makeGroup(), o.setMod("separated", !0).setMod("group", c.group), r.append(o), Ga(d, this.j.o.controls).filter(a).forEach(s));
      } else {
        o || (o = this.makeGroup(), r.append(o));
        const d = as(c, this.j.o.controls);
        a(d) && s(d);
      }
    }), this.update(), this;
  }
  makeSelect(e, t) {
    throw new Error("Not implemented behaviour");
  }
  /**
   * Create button instance
   */
  makeButton(e, t) {
    return new R(this.j, {
      name: e.name
    });
  }
};
cs([
  L("mode"),
  ct("ready")
], kt.prototype, "__onChangeMode", null);
kt = cs([
  D
], kt);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var te = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
const zi = () => ({
  size: "middle",
  type: "button",
  role: "button",
  name: "",
  value: "",
  variant: "initial",
  disabled: !1,
  activated: !1,
  icon: {
    name: "empty",
    fill: "",
    iconURL: ""
  },
  tooltip: "",
  text: "",
  tabIndex: void 0
});
let R = class extends ie {
  /** @override */
  className() {
    return "UIButton";
  }
  /**
   * Set state
   */
  setState(e) {
    return Object.assign(this.state, e), this;
  }
  /**
   * DOM container for text content
   */
  get text() {
    const e = this.getElm("text");
    return E(e, "Text element not found"), e;
  }
  /**
   * DOM container for icon
   */
  get icon() {
    const e = this.getElm("icon");
    return E(e, "Icon element not found"), e;
  }
  onChangeSize() {
    this.setMod("size", this.state.size);
  }
  onChangeType() {
    g(this.container, "type", this.state.type);
  }
  onChangeRole() {
    g(this.container, "role", this.state.role);
  }
  /**
   * Set size from a parent list
   */
  updateSize() {
    const e = this.closest(kt);
    if (e) {
      this.state.size = e.buttonSize;
      return;
    }
  }
  onChangeStatus() {
    this.setMod("variant", this.state.variant);
  }
  onChangeText() {
    this.text.textContent = this.jodit.i18n(this.state.text);
  }
  onChangeTextSetMode() {
    this.setMod("text-icons", !!this.state.text.trim().length);
  }
  onChangeDisabled() {
    g(this.container, "disabled", this.state.disabled || null);
  }
  onChangeActivated() {
    g(this.container, "aria-pressed", this.state.activated);
  }
  onChangeName() {
    this.container.classList.add(`${this.componentName}_${this.clearName(this.state.name)}`), this.name = this.state.name, g(this.container, "data-ref", this.state.name), g(this.container, "ref", this.state.name);
  }
  onChangeTooltip() {
    this.get("j.o.useNativeTooltip") && g(this.container, "title", this.state.tooltip), g(this.container, "aria-label", this.state.tooltip);
  }
  onChangeTabIndex() {
    g(this.container, "tabindex", this.state.tabIndex);
  }
  onChangeIcon() {
    const e = this.get("j.o.textIcons");
    if (e === !0 || y(e) && e(this.state.name))
      return;
    l.detach(this.icon);
    const t = x.makeIcon(this.j, this.state.icon);
    t && this.icon.appendChild(t);
  }
  /**
   * Set focus on an element
   */
  focus() {
    this.container.focus();
  }
  /**
   * Element has focus
   */
  isFocused() {
    const { activeElement: e } = this.od;
    return !!(e && l.isOrContains(this.container, e));
  }
  /** @override */
  createContainer() {
    const e = this.componentName, t = this.j.c.element("button", {
      class: e,
      type: "button",
      role: "button",
      ariaPressed: !1
    }), i = this.j.c.span(e + "__icon"), r = this.j.c.span(e + "__text");
    return t.appendChild(i), t.appendChild(r), t;
  }
  constructor(e, t) {
    super(e), this.isButton = !0, this.state = zi(), this.actionHandlers = [], this.button = this.container, this.updateSize(), this.onChangeSize(), this.onChangeStatus(), t && this.hookStatus(P.ready, () => {
      this.setState(t);
    });
  }
  destruct() {
    return this.j.e.off(this.container), super.destruct();
  }
  /**
   * Add action handler
   */
  onAction(e) {
    return this.actionHandlers.push(e), this;
  }
  /**
   * Fire all click handlers
   */
  __onActionFire(e) {
    e.buffer = {
      actionTrigger: this
    }, this.actionHandlers.forEach((t) => t.call(this, e));
  }
};
te([
  J
], R.prototype, "text", null);
te([
  J
], R.prototype, "icon", null);
te([
  L("state.size", { immediately: !1 })
], R.prototype, "onChangeSize", null);
te([
  L("state.type", { immediately: !1 })
], R.prototype, "onChangeType", null);
te([
  L("state.role", { immediately: !1 })
], R.prototype, "onChangeRole", null);
te([
  L("parentElement")
], R.prototype, "updateSize", null);
te([
  L("state.variant", { immediately: !1 })
], R.prototype, "onChangeStatus", null);
te([
  L("state.text", { immediately: !1 })
], R.prototype, "onChangeText", null);
te([
  L("state.text", { immediately: !1 })
], R.prototype, "onChangeTextSetMode", null);
te([
  L("state.disabled")
], R.prototype, "onChangeDisabled", null);
te([
  L("state.activated")
], R.prototype, "onChangeActivated", null);
te([
  L("state.name", { immediately: !1 })
], R.prototype, "onChangeName", null);
te([
  L("state.tooltip", { immediately: !1 })
], R.prototype, "onChangeTooltip", null);
te([
  L("state.tabIndex", { immediately: !1 })
], R.prototype, "onChangeTabIndex", null);
te([
  L("state.icon", { immediately: !1 })
], R.prototype, "onChangeIcon", null);
te([
  Zn
], R.prototype, "createContainer", null);
te([
  L("button:click")
], R.prototype, "__onActionFire", null);
R = te([
  D
], R);
function pe(n, e, t, i) {
  const r = new R(n);
  return r.state.tabIndex = n.o.allowTabNavigation ? 0 : -1, v(e) ? (r.state.icon.name = e, r.state.name = e, i && (r.state.variant = i), t && (r.state.text = t)) : r.setState(e), r;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Xa = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let yn = class extends ge {
  /** @override */
  className() {
    return "UIButtonGroup";
  }
  /** @override */
  render(e) {
    return `<div>
			<div class="&__label">~${e.label}~</div>
			<div class="&__options"></div>
		</div>`;
  }
  /** @override */
  appendChildToContainer(e) {
    const t = this.getElm("options");
    E(t != null, "Options does not exist"), t.appendChild(e);
  }
  constructor(e, t = {
    radio: !0
  }) {
    var i, r;
    super(e, (i = t.options) === null || i === void 0 ? void 0 : i.map((o) => {
      const s = new R(e, {
        text: o.text,
        value: o.value,
        variant: "primary"
      });
      return s.onAction(() => {
        this.select(o.value);
      }), s;
    }), t), this.options = t, this.select((r = t.value) !== null && r !== void 0 ? r : 0);
  }
  select(e) {
    var t, i;
    this.elements.forEach((o, s) => {
      s === e || o.state.value === e ? o.state.activated = !0 : this.options.radio && (o.state.activated = !1);
    });
    const r = this.elements.filter((o) => o.state.activated).map((o) => ({
      text: o.state.text,
      value: o.state.value
    }));
    this.jodit.e.fire(this, "select", r), (i = (t = this.options).onChange) === null || i === void 0 || i.call(t, r);
  }
};
yn = Xa([
  D
], yn);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var ni = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, _n;
const zr = [
  "scroll.tooltip",
  "joditCloseDialog",
  "mouseleave.tooltip"
], Tr = [
  "escape.tooltip",
  "change.tooltip",
  "changePlace.tooltip",
  "afterOpenPopup.tooltip",
  "hidePopup.tooltip",
  "beforePopupClose.tooltip",
  "closeAllPopups.tooltip"
];
let Ye = _n = class extends ie {
  className() {
    return "UITooltip";
  }
  render() {
    return '<div><div class="&__content"></div></div>';
  }
  constructor(e) {
    super(e), this.__isOpened = !1, this.__attachedContainers = /* @__PURE__ */ new Set(), this.__listenClose = !1, this.__currentTarget = null, this.__delayShowTimeout = 0, this.__hideTimeout = 0, !e.o.textIcons && e.o.showTooltip && !e.o.useNativeTooltip && (this.j.e.on("getContainer", (t) => {
      this.__onAttach(t);
    }), e.hookStatus(P.ready, () => {
      this.__onAttach(this.j.container);
    }));
  }
  __onAttach(e) {
    ti(this.j, _n).appendChild(this.container), this.__attachedContainers.add(e), this.__attachedContainers.add(this.j.container), this.j.e.on(e, "mouseenter.tooltip", this.__onMouseEnter, {
      capture: !0
    }).on(e, "mouseleave.tooltip", this.__onMouseLeave, {
      capture: !0
    }).on(this.j.container, "mouseleave.tooltip", this.__onMouseLeave, {
      capture: !0
    });
  }
  __addListenersOnEnter() {
    if (this.__listenClose)
      return;
    this.__listenClose = !0;
    const e = this.j;
    e.e.on(e.ow, zr, this.__hide).on(Tr, this.__hide);
  }
  __removeListenersOnLeave() {
    if (!this.__listenClose)
      return;
    this.__listenClose = !1;
    const e = this.j;
    e.e.off(e.ow, zr, this.__hide).off(Tr, this.__hide);
  }
  __onMouseLeave(e) {
    this.__currentTarget === e.target && (this.__hideDelay(), this.__currentTarget = null);
  }
  __onMouseEnter(e) {
    if (!l.isHTMLElement(e.target))
      return;
    const t = g(e.target, "aria-label");
    if (!t || !!g(e.target, "disabled") || !e.target.className.includes("jodit"))
      return;
    this.__currentTarget = e.target;
    const o = e.target;
    this.__open(() => {
      const s = ke(o);
      return {
        x: s.left + s.width / 2,
        y: s.top + s.height
      };
    }, t);
  }
  __open(e, t) {
    this.__addListenersOnEnter(), this.__isOpened = !0, this.j.async.clearTimeout(this.__hideTimeout), this.j.async.clearTimeout(this.__delayShowTimeout);
    const i = this.j.o.showTooltipDelay || this.j.defaultTimeout;
    if (!i) {
      this.__show(e, t);
      return;
    }
    this.__delayShowTimeout = this.j.async.setTimeout(() => this.__show(e, t), i);
  }
  __show(e, t) {
    this.setMod("visible", !0), this.getElm("content").innerHTML = t;
    const i = e();
    _(this.container, {
      left: i.x,
      top: i.y
    });
  }
  __hide() {
    this.j.async.clearTimeout(this.__delayShowTimeout), this.j.async.clearTimeout(this.__hideTimeout), this.__removeListenersOnLeave(), this.__isOpened && (this.__isOpened = !1, this.setMod("visible", !1), this.getElm("content").innerHTML = "", _(this.container, {
      left: -5e3
    }));
  }
  __hideDelay() {
    this.j.async.clearTimeout(this.__delayShowTimeout), this.j.async.clearTimeout(this.__hideTimeout), this.__isOpened && (this.__hideTimeout = this.async.setTimeout(this.__hide, this.j.defaultTimeout));
  }
  destruct() {
    this.__attachedContainers.forEach((e) => {
      this.j.e.off(e, "mouseenter.tooltip", this.__onMouseEnter).off(e, "mouseleave.tooltip", this.__onMouseLeave);
    }), this.__hide(), super.destruct();
  }
};
ni([
  k
], Ye.prototype, "__onMouseLeave", null);
ni([
  k
], Ye.prototype, "__onMouseEnter", null);
ni([
  k
], Ye.prototype, "__hide", null);
ni([
  k
], Ye.prototype, "__hideDelay", null);
Ye = _n = ni([
  D
], Ye);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Za = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let $e = class extends ge {
  /** @override */
  className() {
    return "UIBlock";
  }
  constructor(e, t, i = {
    align: "left"
  }) {
    super(e, t), this.options = i, this.setMod("align", this.options.align || "left"), this.setMod("width", this.options.width || ""), this.options.mod && this.setMod(this.options.mod, !0), this.options.className && this.container.classList.add(this.options.className), g(this.container, "data-ref", i.ref), g(this.container, "ref", i.ref);
  }
};
$e = Za([
  D
], $e);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const cr = function(n) {
  return K(n.value).length ? !0 : (n.error = "Please fill out this field", !1);
}, Qa = function(n) {
  return Oi(K(n.value)) ? !0 : (n.error = "Please enter a web address", !1);
}, el = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  required: cr,
  url: Qa
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const tl = function(n) {
  return K(n.value).length ? !0 : (n.error = "Please fill out this field", !1);
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var xt = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, Sn;
let F = Sn = class extends ie {
  /** @override */
  className() {
    return "UIInput";
  }
  onChangeClear() {
    this.state.clearButton ? l.after(this.nativeInput, this.clearButton) : l.safeRemove(this.clearButton);
  }
  onChangeClassName(e, t) {
    t && this.container.classList.remove(t), this.state.className && this.container.classList.add(this.state.className);
  }
  onChangeState() {
    this.name = this.state.name;
    const e = this.nativeInput, { name: t, icon: i, type: r, ref: o, required: s, placeholder: a, autocomplete: c, label: d } = this.state;
    g(e, "name", t), g(e, "type", r), g(e, "data-ref", o || t), g(e, "ref", o || t), g(e, "required", s || null), g(e, "autocomplete", c ? null : "off"), g(e, "placeholder", a ? this.j.i18n(a) : ""), i && x.exists(i) ? (l.before(e, this.icon), this.icon.innerHTML = x.get(i)) : l.safeRemove(this.icon), d ? (l.before(this.wrapper, this.label), this.label.innerText = this.j.i18n(d)) : l.safeRemove(this.label), this.updateValidators();
  }
  updateValidators() {
    var e;
    this.validators.clear(), this.state.required && this.validators.add(cr), (e = this.state.validators) === null || e === void 0 || e.forEach((t) => {
      const i = el[t];
      i && this.validators.add(i);
    });
  }
  set error(e) {
    this.setMod("has-error", !!e), e ? (this.__errorBox.innerText = this.j.i18n(e, this.j.i18n(this.state.label || "")), this.container.appendChild(this.__errorBox)) : l.safeRemove(this.__errorBox);
  }
  get value() {
    return this.nativeInput.value;
  }
  set value(e) {
    this.value !== e && (this.nativeInput.value = e, this.onChangeValue());
  }
  /**
   * Call on every state value changed
   */
  onChangeStateValue() {
    const e = this.state.value.toString();
    e !== this.value && (this.value = e);
  }
  /**
   * Call on every native value changed
   */
  onChangeValue() {
    var e, t;
    const { value: i } = this;
    this.state.value !== i && (this.state.value = i, this.j.e.fire(this, "change", i), (t = (e = this.state).onChange) === null || t === void 0 || t.call(e, i));
  }
  validate() {
    this.error = "";
    const e = U(this.validators).every((t) => t(this));
    return this.__markInputInvalid(), e;
  }
  __markInputInvalid() {
    var e, t, i, r;
    this.error ? (this.nativeInput.setAttribute("aria-invalid", "true"), (t = (e = this.nativeInput).setCustomValidity) === null || t === void 0 || t.call(e, this.error)) : (this.nativeInput.removeAttribute("aria-invalid"), (r = (i = this.nativeInput).setCustomValidity) === null || r === void 0 || r.call(i, ""));
  }
  /** @override **/
  createContainer(e) {
    const t = super.createContainer();
    this.wrapper = this.j.c.div(this.getFullElName("wrapper")), this.nativeInput || (this.nativeInput = this.createNativeInput());
    const { nativeInput: i } = this;
    return i.classList.add(this.getFullElName("input")), this.wrapper.appendChild(i), t.appendChild(this.wrapper), g(i, "dir", this.j.o.direction || "auto"), t;
  }
  /**
   * Create native input element
   */
  createNativeInput(e) {
    return this.j.create.element("input");
  }
  /** @override **/
  constructor(e, t) {
    super(e, t), this.label = this.j.c.span(this.getFullElName("label")), this.icon = this.j.c.span(this.getFullElName("icon")), this.clearButton = this.j.c.span(this.getFullElName("clear"), x.get("cancel")), this.state = { ...Sn.defaultState }, this.__errorBox = this.j.c.span(this.getFullElName("error")), this.validators = /* @__PURE__ */ new Set([]), (t == null ? void 0 : t.value) !== void 0 && (t.value = t.value.toString()), Object.assign(this.state, t), this.state.clearButton !== void 0 && (this.j.e.on(this.clearButton, "click", (i) => {
      i.preventDefault(), this.nativeInput.value = "", this.j.e.fire(this.nativeInput, "input"), this.focus();
    }).on(this.nativeInput, "input", () => {
      this.state.clearButton = !!this.value.length;
    }), this.state.clearButton = !!this.value.length), this.j.e.on(this.nativeInput, "focus blur", () => {
      this.onChangeFocus();
    }).on(this.nativeInput, "input change", this.onChangeValue), this.onChangeState(), this.onChangeClassName(), this.onChangeStateValue();
  }
  focus() {
    this.nativeInput.focus();
  }
  get isFocused() {
    return this.nativeInput === this.j.od.activeElement;
  }
  /**
   * Set `focused` mod on change focus
   */
  onChangeFocus() {
    this.setMod("focused", this.isFocused);
  }
};
F.defaultState = {
  className: "",
  autocomplete: !0,
  name: "",
  value: "",
  icon: "",
  label: "",
  ref: "",
  type: "text",
  placeholder: "",
  required: !1,
  validators: []
};
xt([
  L("state.clearButton")
], F.prototype, "onChangeClear", null);
xt([
  L("state.className")
], F.prototype, "onChangeClassName", null);
xt([
  L([
    "state.name",
    "state.type",
    "state.label",
    "state.placeholder",
    "state.autocomplete",
    "state.icon"
  ], { immediately: !1 }),
  Oe()
], F.prototype, "onChangeState", null);
xt([
  L("state.value")
], F.prototype, "onChangeStateValue", null);
xt([
  k
], F.prototype, "onChangeValue", null);
F = Sn = xt([
  D
], F);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var il = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, Cn;
let It = Cn = class extends F {
  /** @override */
  className() {
    return "UISelect";
  }
  /** @override **/
  createContainer(e) {
    var t;
    const i = super.createContainer(e), { j: r } = this, { nativeInput: o } = this, s = () => r.create.element("option");
    if (e.placeholder !== void 0) {
      const a = s();
      a.value = "", a.text = r.i18n(e.placeholder), o.add(a);
    }
    return (t = e.options) === null || t === void 0 || t.forEach((a) => {
      const c = s();
      c.value = a.value.toString(), c.text = r.i18n(a.text), o.add(c);
    }), e.size && e.size > 0 && g(o, "size", e.size), e.multiple && g(o, "multiple", ""), i;
  }
  /** @override **/
  createNativeInput() {
    return this.j.create.element("select");
  }
  /** @override **/
  updateValidators() {
    super.updateValidators(), this.state.required && (this.validators.delete(cr), this.validators.add(tl));
  }
  constructor(e, t) {
    super(e, t), this.state = { ...Cn.defaultState }, Object.assign(this.state, t);
  }
};
It.defaultState = {
  ...F.defaultState,
  options: [],
  size: 1,
  multiple: !1
};
It = Cn = il([
  D
], It);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var nl = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Kt = class extends ge {
  /** @override */
  className() {
    return "UIForm";
  }
  submit() {
    this.j.e.fire(this.container, "submit");
  }
  validate() {
    const e = this.allChildren.filter((i) => fe.isInstanceOf(i, F));
    for (const i of e)
      if (!i.validate())
        return !1;
    const t = this.allChildren.filter((i) => fe.isInstanceOf(i, It));
    for (const i of t)
      if (!i.validate())
        return !1;
    return !0;
  }
  onSubmit(e) {
    return this.j.e.on(this.container, "submit", () => {
      const t = this.allChildren.filter((i) => fe.isInstanceOf(i, F));
      return this.validate() && e(t.reduce((i, r) => (i[r.state.name] = r.value, i), {})), !1;
    }), this;
  }
  /** @override */
  createContainer() {
    const e = this.j.c.element("form");
    return e.classList.add(this.componentName), g(e, "dir", this.j.o.direction || "auto"), g(e, "novalidate", ""), e;
  }
  constructor(...e) {
    var t, i;
    super(...e), !((t = this.options) === null || t === void 0) && t.className && this.container.classList.add((i = this.options) === null || i === void 0 ? void 0 : i.className);
  }
};
Kt = nl([
  D
], Kt);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var ds = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, kn;
let Jt = kn = class extends F {
  /** @override */
  className() {
    return "UITextArea";
  }
  createNativeInput(e) {
    return this.j.create.element("textarea");
  }
  constructor(e, t) {
    super(e, t), this.state = { ...kn.defaultState }, Object.assign(this.state, t), this.state.resizable === !1 && (this.nativeInput.style.resize = "none");
  }
  onChangeStateSize() {
    const { size: e, resizable: t } = this.state;
    this.nativeInput.style.resize = t ? "auto" : "none", this.nativeInput.rows = e ?? 5;
  }
};
Jt.defaultState = {
  ...F.defaultState,
  size: 5,
  resizable: !0
};
ds([
  L(["state.size", "state.resizable"])
], Jt.prototype, "onChangeStateSize", null);
Jt = kn = ds([
  D
], Jt);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Ui = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, In;
let Ne = In = class extends F {
  /** @override */
  className() {
    return "UICheckbox";
  }
  /** @override */
  render() {
    return this.j.c.element("label", {
      className: this.componentName
    });
  }
  /** @override **/
  constructor(e, t) {
    super(e, { ...t, type: "checkbox" }), this.state = { ...In.defaultState }, Object.assign(this.state, t);
  }
  onChangeChecked() {
    this.value = this.state.checked.toString(), this.nativeInput.checked = this.state.checked, this.setMod("checked", this.state.checked);
  }
  onChangeNativeCheckBox() {
    this.state.checked = this.nativeInput.checked;
  }
  onChangeSwitch() {
    this.setMod("switch", this.state.switch);
    let e = this.getElm("switch-slider");
    this.state.switch ? (e || (e = this.j.c.div(this.getFullElName("switch-slider"))), l.after(this.nativeInput, e)) : l.safeRemove(e);
  }
};
Ne.defaultState = {
  ...F.defaultState,
  checked: !1,
  switch: !1
};
Ui([
  L("state.checked"),
  ct("ready")
], Ne.prototype, "onChangeChecked", null);
Ui([
  L("nativeInput:change")
], Ne.prototype, "onChangeNativeCheckBox", null);
Ui([
  L("state.switch"),
  ct("ready")
], Ne.prototype, "onChangeSwitch", null);
Ne = In = Ui([
  D
], Ne);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var rl = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Ti = class extends F {
  /** @override */
  className() {
    return "UIFileInput";
  }
  createContainer(e) {
    this.button = new R(this.j, {
      tooltip: e.tooltip,
      icon: {
        name: "plus"
      }
    });
    const { container: t } = this.button;
    this.nativeInput || (this.nativeInput = this.createNativeInput(e));
    const { nativeInput: i } = this;
    return i.classList.add(this.getFullElName("input")), t.classList.add(this.componentName), t.appendChild(i), t;
  }
  createNativeInput(e) {
    return this.j.create.fromHTML(`<input
			type="file"
			accept="${e.onlyImages ? "image/*" : "*"}"
			tabindex="-1"
			dir="auto"
			multiple=""
		/>`);
  }
  constructor(e, t) {
    super(e, {
      type: "file",
      ...t
    }), this.state = {
      ...F.defaultState,
      type: "file",
      onlyImages: !0
    };
  }
};
Ti = rl([
  D
], Ti);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Vi = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
const xr = [
  "escape",
  "cut",
  "delete",
  "backSpaceAfterDelete",
  "beforeCommandDelete"
];
class oe extends ge {
  className() {
    return "Popup";
  }
  appendChildToContainer(e) {
    const t = this.getElm("content");
    E(t, "Content element should exist"), t.appendChild(e);
  }
  updateParentElement(e) {
    return e !== this && fe.isInstanceOf(e, oe) && (this.__childrenPopups.forEach((t) => {
      !e.closest(t) && t.isOpened && t.close();
    }), this.__childrenPopups.has(e) || this.j.e.on(e, "beforeClose", () => {
      this.__childrenPopups.delete(e);
    }), this.__childrenPopups.add(e)), super.updateParentElement(e);
  }
  /**
   * Set popup content
   */
  setContent(e) {
    if (this.allChildren.length)
      throw new Error("Remove children");
    if (fe.isInstanceOf(e, ie))
      this.append(e);
    else {
      const t = v(e) ? this.j.c.fromHTML(e) : e;
      this.appendChildToContainer(t);
    }
    return this.updatePosition(), this;
  }
  /**
   * Open popup near with some bound
   */
  open(e, t = !1, i) {
    if (Yn(this.jodit, this.container), this.container.classList.add(`jodit_theme_${this.jodit.o.theme}`), this.__calculateZIndex(), this.isOpened = !0, this.__addGlobalListeners(), this.__targetBound = t ? this.getKeepBound(e) : e, i)
      i.appendChild(this.container);
    else {
      const r = ti(this.jodit, oe);
      i !== this.container.parentElement && r.appendChild(this.container);
    }
    return this.updatePosition(), this.j.e.fire(this, "afterOpen"), this.j.e.fire("afterOpenPopup", this), this;
  }
  __calculateZIndex() {
    if (this.container.style.zIndex)
      return;
    const e = (r) => {
      const o = r.container.style.zIndex || r.o.zIndex;
      return o ? (this.setZIndex(1 + parseInt(o.toString(), 10)), !0) : !1;
    }, { j: t } = this;
    if (e(t))
      return;
    let i = this.parentElement;
    for (; i; ) {
      if (e(i.j))
        return;
      if (i.container.style.zIndex) {
        this.setZIndex(1 + parseInt(i.container.style.zIndex.toString(), 10));
        return;
      }
      if (!i.parentElement && i.container.parentElement) {
        const r = ie.closestElement(i.container.parentElement, ie);
        if (r) {
          i = r;
          continue;
        }
      }
      i = i.parentElement;
    }
  }
  /**
   * Calculate static bound for point
   */
  getKeepBound(e) {
    const t = e(), i = this.od.elementFromPoint(t.left, t.top);
    if (!i)
      return e;
    const r = l.isHTMLElement(i) ? i : i.parentElement, o = ke(r, this.j);
    return () => {
      const s = e(), a = ke(r, this.j);
      return {
        ...s,
        top: s.top + (a.top - o.top),
        left: s.left + (a.left - o.left)
      };
    };
  }
  /**
   * Update container position
   */
  updatePosition() {
    if (!this.isOpened)
      return this;
    const [e, t] = this.__calculatePosition(this.__targetBound(), this.viewBound(), ke(this.container, this.j));
    return this.setMod("strategy", t), _(this.container, {
      left: e.left,
      top: e.top
    }), this.__childrenPopups.forEach((i) => i.updatePosition()), this;
  }
  __throttleUpdatePosition() {
    this.updatePosition();
  }
  /**
   * Calculate start point
   */
  __calculatePosition(e, t, i, r = this.strategy) {
    const o = {
      left: e.left,
      right: e.left - (i.width - e.width)
    }, s = {
      bottom: e.top + e.height,
      top: e.top - i.height
    }, a = Object.keys(o).reduce((h, f) => h.concat(Object.keys(s).map((p) => `${f}${Fi(p)}`)), []), c = (h) => {
      const [f, p] = Ce(h).split("-");
      return {
        left: o[f],
        top: s[p],
        width: i.width,
        height: i.height
      };
    }, d = (h) => {
      let f = null;
      return oe.boxInView(c(r), h) ? f = r : f = a.find((p) => {
        if (oe.boxInView(c(p), h))
          return p;
      }) || null, f;
    };
    let u = d(ke(this.j.container, this.j));
    return (!u || !oe.boxInView(c(u), t)) && (u = d(t) || u || r), [c(u), u];
  }
  /**
   * Check if one box is inside second
   */
  static boxInView(e, t) {
    return e.top - t.top >= -2 && e.left - t.left >= -2 && t.top + t.height - (e.top + e.height) >= -2 && t.left + t.width - (e.left + e.width) >= -2;
  }
  /**
   * Close popup
   */
  close() {
    return this.isOpened ? (this.isOpened = !1, this.__childrenPopups.forEach((e) => e.close()), this.j.e.fire(this, "beforeClose"), this.j.e.fire("beforePopupClose", this), this.__removeGlobalListeners(), l.safeRemove(this.container), this) : this;
  }
  /**
   * Close popup if click was in outside
   */
  __closeOnOutsideClick(e) {
    !this.isOpened || this.isOwnClick(e) || this.close();
  }
  isOwnClick(e) {
    if (!e.target)
      return !1;
    const t = ie.closestElement(e.target, oe);
    return !!(t && (this === t || t.closest(this)));
  }
  __addGlobalListeners() {
    const e = this.__throttleUpdatePosition, t = this.ow;
    at.on("closeAllPopups", this.close), this.smart && this.j.e.on(xr, this.close).on("mousedown touchstart", this.__closeOnOutsideClick).on(t, "mousedown touchstart", this.__closeOnOutsideClick), this.j.e.on("closeAllPopups", this.close).on("resize", e).on(this.container, "scroll mousewheel", e).on(t, "scroll", e).on(t, "resize", e), l.up(this.j.container, (i) => {
      i && this.j.e.on(i, "scroll mousewheel", e);
    });
  }
  __removeGlobalListeners() {
    const e = this.__throttleUpdatePosition, t = this.ow;
    at.off("closeAllPopups", this.close), this.smart && this.j.e.off(xr, this.close).off("mousedown touchstart", this.__closeOnOutsideClick).off(t, "mousedown touchstart", this.__closeOnOutsideClick), this.j.e.off("closeAllPopups", this.close).off("resize", e).off(this.container, "scroll mousewheel", e).off(t, "scroll", e).off(t, "resize", e), this.j.container.isConnected && l.up(this.j.container, (i) => {
      i && this.j.e.off(i, "scroll mousewheel", e);
    });
  }
  /**
   * Set ZIndex
   */
  setZIndex(e) {
    this.container.style.zIndex = e.toString();
  }
  constructor(e, t = !0) {
    super(e), this.smart = t, this.isOpened = !1, this.strategy = "leftBottom", this.viewBound = () => ({
      left: 0,
      top: 0,
      width: this.ow.innerWidth,
      height: this.ow.innerHeight
    }), this.__childrenPopups = /* @__PURE__ */ new Set(), g(this.container, "role", "popup");
  }
  render() {
    return `<div>
			<div class="&__content"></div>
		</div>`;
  }
  /** @override **/
  destruct() {
    return this.close(), super.destruct();
  }
}
Vi([
  k
], oe.prototype, "updatePosition", null);
Vi([
  ii(10),
  k
], oe.prototype, "__throttleUpdatePosition", null);
Vi([
  k
], oe.prototype, "close", null);
Vi([
  k
], oe.prototype, "__closeOnOutsideClick", null);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class us extends ie {
  /** @override */
  className() {
    return "ProgressBar";
  }
  /** @override */
  render() {
    return "<div><div></div></div>";
  }
  /**
   * Show progress bar
   */
  show() {
    return (this.j.workplace || this.j.container).appendChild(this.container), this;
  }
  hide() {
    return l.safeRemove(this.container), this;
  }
  progress(e) {
    return this.container.style.width = e.toFixed(2) + "%", this;
  }
  destruct() {
    return this.hide(), super.destruct();
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class dr {
  get doc() {
    return y(this.document) ? this.document() : this.document;
  }
  constructor(e, t) {
    this.document = e, this.createAttributes = t;
  }
  element(e, t, i) {
    const r = this.doc.createElement(e.toLowerCase());
    return this.applyCreateAttributes(r), t && (N(t) ? g(r, t) : i = t), i && ei(i).forEach((o) => r.appendChild(v(o) ? this.fromHTML(o) : o)), r;
  }
  div(e, t, i) {
    const r = this.element("div", t, i);
    return e && (r.className = e), r;
  }
  sandbox() {
    var e;
    const t = this.element("iframe", { sandbox: "allow-same-origin" });
    this.doc.body.appendChild(t);
    const i = (e = t.contentWindow) === null || e === void 0 ? void 0 : e.document;
    if (E(i, "iframe.contentWindow.document"), !i)
      throw Error("Iframe error");
    return i.open(), i.write("<!DOCTYPE html><html><head></head><body></body></html>"), i.close(), [i.body, t];
  }
  span(e, t, i) {
    const r = this.element("span", t, i);
    return e && (r.className = e), r;
  }
  a(e, t, i) {
    const r = this.element("a", t, i);
    return e && (r.className = e), r;
  }
  /**
   * Create text node
   */
  text(e) {
    return this.doc.createTextNode(e);
  }
  /**
   * Create invisible text node
   */
  fake() {
    return this.text(ue);
  }
  /**
   * Create HTML Document fragment element
   */
  fragment() {
    return this.doc.createDocumentFragment();
  }
  /**
   * Create a DOM element from HTML text
   *
   // eslint-disable-next-line tsdoc/syntax
   * @param refsToggleElement - State dictionary in which you can set the visibility of some of the elements
   * ```js
   * const editor = Jodit.make('#editor');
   * editor.createInside.fromHTML(`<div>
   *   <input name="name" ref="name"/>
   *   <input name="email" ref="email"/>
   * </div>`, {
   *   name: true,
   *   email: false
   * });
   * ```
   */
  fromHTML(e, t) {
    const i = this.div();
    i.innerHTML = e.toString();
    const r = i.firstChild !== i.lastChild || !i.firstChild ? i : i.firstChild;
    if (l.safeRemove(r), t) {
      const o = _e(r);
      Object.keys(t).forEach((s) => {
        const a = o[s];
        a && t[s] === !1 && l.hide(a);
      });
    }
    return r;
  }
  /**
   * Apply to element `createAttributes` options
   */
  applyCreateAttributes(e) {
    if (this.createAttributes) {
      const t = this.createAttributes;
      if (t && t[e.tagName.toLowerCase()]) {
        const i = t[e.tagName.toLowerCase()];
        y(i) ? i(e) : N(i) && g(e, i);
      }
    }
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ol = /* @__PURE__ */ (() => {
  const n = () => {
    const t = "___Jodit___" + Math.random().toString();
    try {
      localStorage.setItem(t, "1");
      const i = localStorage.getItem(t) === "1";
      return localStorage.removeItem(t), i;
    } catch {
    }
    return !1;
  };
  let e;
  return () => (e === void 0 && (e = n()), e);
})();
class sl {
  set(e, t) {
    try {
      const i = localStorage.getItem(this.rootKey), r = i ? JSON.parse(i) : {};
      r[e] = t, localStorage.setItem(this.rootKey, JSON.stringify(r));
    } catch {
    }
    return this;
  }
  delete(e) {
    try {
      localStorage.removeItem(this.rootKey);
    } catch {
    }
    return this;
  }
  get(e) {
    try {
      const t = localStorage.getItem(this.rootKey), i = t ? JSON.parse(t) : {};
      return i[e] !== void 0 ? i[e] : void 0;
    } catch {
    }
  }
  exists(e) {
    return this.get(e) != null;
  }
  constructor(e) {
    this.rootKey = e;
  }
  clear() {
    try {
      localStorage.removeItem(this.rootKey);
    } catch {
    }
    return this;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class al {
  constructor() {
    this.data = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    return this.data.set(e, t), this;
  }
  delete(e) {
    return this.data.delete(e), this;
  }
  get(e) {
    return this.data.get(e);
  }
  exists(e) {
    return this.data.has(e);
  }
  clear() {
    return this.data.clear(), this;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Lr = "Jodit_";
class Yt {
  set(e, t) {
    return this.provider.set(se(this.prefix + e), t), this;
  }
  delete(e) {
    return this.provider.delete(se(this.prefix + e)), this;
  }
  get(e) {
    return this.provider.get(se(this.prefix + e));
  }
  exists(e) {
    return this.provider.exists(se(this.prefix + e));
  }
  clear() {
    return this.provider.clear(), this;
  }
  constructor(e, t) {
    this.provider = e, this.prefix = Lr, t && (this.prefix += t);
  }
  static makeStorage(e = !1, t) {
    let i;
    return e && ol() && (i = new sl(Lr + t)), i || (i = new al()), new Yt(i, t);
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var ll = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let En = class extends ie {
  className() {
    return "UIMessage";
  }
  constructor(e, t) {
    super(e), this.setMod("active", !0), this.setMod("variant", t.variant), this.container.textContent = t.text;
  }
};
En = ll([
  D
], En);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var cl = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let xi = class extends ge {
  className() {
    return "UIMessages";
  }
  constructor(e, t, i = {
    defaultTimeout: 3e3,
    defaultOffset: 5
  }) {
    super(e), this.__box = t, this.options = i, this.__messages = /* @__PURE__ */ new Set();
  }
  /**
   * Show popup info message in the lower right corner of the container
   * ```js
   * const jodit = Jodit.make('#editor');
   * jodit.info('Hello world', 3000);
   * ```
   */
  info(e, t) {
    this.__message(e, "info", t);
  }
  /**
   * Show popup success message in the lower right corner of the container
   * ```js
   * const jodit = Jodit.make('#editor');
   * jodit.success('Hello world', 3000);
   * ```
   */
  success(e, t) {
    this.__message(e, "success", t);
  }
  /**
   * Show popup error message in the lower right corner of the container
   * ```js
   * const jodit = Jodit.make('#editor');
   * jodit.error('Hello world', 3000);
   * ```
   */
  error(e, t) {
    this.__message(e, "error", t);
  }
  /**
   * Show popup message in the lower right corner of the container
   * ```js
   * const jodit = Jodit.make('#editor');
   * jodit.message('Hello world', 'info', 3000);
   * ```
   */
  message(e, t, i) {
    this.__message(e, t, i);
  }
  __message(e, t = "info", i) {
    const r = e + ":" + t;
    if (this.__messages.has(r)) {
      this.async.updateTimeout(r, i || this.options.defaultTimeout);
      return;
    }
    if (!this.__box)
      throw new Error("Container is not defined: " + r);
    this.__box.appendChild(this.container);
    const o = new En(this.j, { text: e, variant: t });
    this.append(o), this.__calcOffsets(), this.__messages.add(r);
    const s = this.__getRemoveCallback(o, r);
    this.j.e.on(o.container, "pointerdown", s), this.async.setTimeout(s, {
      label: r,
      timeout: i || this.options.defaultTimeout
    });
  }
  __getRemoveCallback(e, t) {
    const i = (r) => {
      r && r.preventDefault(), !e.isInDestruct && (this.async.clearTimeout(t), this.j.e.off(e.container, "pointerdown", i), this.__messages.delete(t), e.setMod("active", !1), this.async.setTimeout(() => {
        this.remove(e), e.destruct(), this.__calcOffsets();
      }, 300));
    };
    return i;
  }
  __calcOffsets() {
    let e = 5;
    this.elements.forEach((t) => {
      _(t.container, "bottom", e + "px"), e += t.container.offsetHeight + this.options.defaultOffset;
    });
  }
};
xi = cl([
  D
], xi);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Xe = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, mt;
let ne = mt = class extends fe {
  /**
   * Get a path for loading extra staff
   */
  get basePath() {
    return this.o.basePath ? this.o.basePath : go;
  }
  /**
   * Plugin autoloader should load minified version of the file
   */
  get minified() {
    return this.o.minified !== void 0 ? this.o.minified : vo;
  }
  /**
   * Return a default timeout period in milliseconds for some debounce or throttle functions.
   * By default, `{history.timeout}` options
   */
  get defaultTimeout() {
    return V(this.o.defaultTimeout) ? 100 : this.o.defaultTimeout;
  }
  /**
   * Some extra data inside editor
   * @see copyformat plugin
   */
  get buffer() {
    return Yt.makeStorage();
  }
  get message() {
    return this.getMessageModule(this.container);
  }
  getMessageModule(e) {
    return new xi(this, e);
  }
  /**
   * Container for persistent set/get value
   */
  get storage() {
    return Yt.makeStorage(!0, this.id);
  }
  /**
   * Short alias for `create`
   */
  get c() {
    return this.create;
  }
  get container() {
    return this.__container;
  }
  set container(e) {
    this.__container = e;
  }
  /**
   * Short alias for `events`
   */
  get e() {
    return this.events;
  }
  /**
   * progress_bar Progress bar
   */
  get progressbar() {
    return new us(this);
  }
  get options() {
    return this.__options;
  }
  set options(e) {
    this.__options = e;
  }
  /**
   * Short alias for options
   */
  get o() {
    return this.options;
  }
  /**
   * Internationalization method. Uses Jodit.lang object
   */
  i18n(e, ...t) {
    return Xo(e, t, this.options);
  }
  toggleFullSize(e) {
    e === void 0 && (e = !this.__isFullSize), e !== this.__isFullSize && (this.__isFullSize = e, this.e.fire("toggleFullSize", e));
  }
  /**
   * View is locked
   */
  get isLocked() {
    return this.__whoLocked !== "";
  }
  /**
   * Disable selecting
   */
  lock(e = "any") {
    return this.isLocked ? !1 : (this.__whoLocked = e, !0);
  }
  /**
   * Enable selecting
   */
  unlock() {
    return this.isLocked ? (this.__whoLocked = "", !0) : !1;
  }
  /**
   * View is in fullSize
   */
  get isFullSize() {
    return this.__isFullSize;
  }
  /**
   * Return current version
   */
  getVersion() {
    return mt.version;
  }
  static getVersion() {
    return mt.version;
  }
  /** @override */
  initOptions(e) {
    this.options = Q(e || {}, Q(this.options || {}, mt.defaultOptions));
  }
  /**
   * Can change ownerWindow here
   */
  initOwners() {
    var e;
    this.ownerWindow = (e = this.o.ownerWindow) !== null && e !== void 0 ? e : window;
  }
  /**
   * Add option's event handlers in emitter
   */
  attachEvents(e) {
    if (!e)
      return;
    const t = e == null ? void 0 : e.events;
    t && Object.keys(t).forEach((i) => this.e.on(i, t[i]));
  }
  constructor(e, t = !1) {
    super(), this.isJodit = t, this.isView = !0, this.parent = null, this.mods = {}, this.components = /* @__PURE__ */ new Set(), this.OPTIONS = mt.defaultOptions, this.__isFullSize = !1, this.__whoLocked = "", this.isLockedNotBy = (i) => this.isLocked && this.__whoLocked !== i, this.__modulesInstances = /* @__PURE__ */ new Map(), this.id = (/* @__PURE__ */ new Date()).getTime().toString(), this.initOptions(e), this.initOwners(), this.events = new rr(this.od), this.create = new dr(this.od), this.container = this.c.div(`jodit ${this.componentName}`);
  }
  getInstance(e, t) {
    const i = y(e) ? e.prototype.className() : e, r = this.e.fire(se("getInstance_" + i), t);
    if (r)
      return r;
    const o = y(e) ? e : sr[i], s = this.__modulesInstances;
    if (!y(o))
      throw z("Need real module name");
    if (!s.has(i)) {
      const a = o.prototype instanceof Te ? new o(this, t) : new o(t);
      this.components.add(a), s.set(i, a);
    }
    return s.get(i);
  }
  /** Add some element to box */
  addDisclaimer(e) {
    this.container.appendChild(e);
  }
  /**
   * Call before destruct
   */
  beforeDestruct() {
    this.e.fire(P.beforeDestruct, this), this.components.forEach((e) => {
      Un(e) && !e.isInDestruct && e.destruct();
    }), this.components.clear();
  }
  /** @override */
  destruct() {
    var e, t, i;
    this.isDestructed || ((e = st(this, "progressbar")) === null || e === void 0 || e.destruct(), (t = st(this, "message")) === null || t === void 0 || t.destruct(), this.events && (this.events.destruct(), this.events = void 0), (i = st(this, "buffer")) === null || i === void 0 || i.clear(), l.safeRemove(this.container), super.destruct());
  }
};
ne.ES = Jr;
ne.version = Kr;
ne.esNext = !0;
ne.esModern = !0;
Xe([
  J
], ne.prototype, "buffer", null);
Xe([
  J
], ne.prototype, "message", null);
Xe([
  J
], ne.prototype, "storage", null);
Xe([
  J
], ne.prototype, "c", null);
Xe([
  J
], ne.prototype, "e", null);
Xe([
  J
], ne.prototype, "progressbar", null);
Xe([
  ct(P.beforeDestruct)
], ne.prototype, "beforeDestruct", null);
ne = mt = Xe([
  Tt(lr, ar)
], ne);
ne.defaultOptions = {
  extraButtons: [],
  cache: !0,
  textIcons: !1,
  namespace: "",
  removeButtons: [],
  zIndex: 100002,
  defaultTimeout: 100,
  fullsize: !1,
  showTooltip: !0,
  useNativeTooltip: !1,
  buttons: [],
  globalFullSize: !0,
  language: "auto"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Wi = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Ie = class extends kt {
  /** @override */
  className() {
    return "ToolbarCollection";
  }
  /**
   * First button in a list
   */
  get firstButton() {
    const [e] = this.buttons;
    return e || null;
  }
  makeButton(e, t = null) {
    return fl(this.j, e, t);
  }
  makeSelect(e, t = null) {
    return pl(this.j, e, t);
  }
  /**
   * Button should be active
   */
  shouldBeActive(e) {
  }
  /**
   * The Button should be disabled
   */
  shouldBeDisabled(e) {
  }
  /**
   * Returns current target for button
   */
  getTarget(e) {
    return e.target || null;
  }
  __immediateUpdate() {
    this.isDestructed || this.j.isLocked || (super.update(), this.j.e.fire("afterUpdateToolbar", this));
  }
  update() {
    this.__immediateUpdate();
  }
  /**
   * Set direction
   */
  setDirection(e) {
    this.container.style.direction = e, this.container.setAttribute("dir", e);
  }
  constructor(e) {
    super(e), this.__listenEvents = "updatePlugins updateToolbar changeStack mousedown mouseup keydown change afterInit readonly afterResize selectionchange changeSelection focus afterSetMode touchstart focus blur";
  }
  __initEvents() {
    this.j.e.on(this.__listenEvents, this.update).on("afterSetMode focus", this.__immediateUpdate);
  }
  hide() {
    this.container.remove();
  }
  show() {
    this.appendTo(this.j.toolbarContainer);
  }
  showInline(e) {
    throw z("The method is not implemented for this class.");
  }
  /** @override **/
  build(e, t = null) {
    const i = this.j.e.fire("beforeToolbarBuild", e);
    return i && (e = i), super.build(e, t), this;
  }
  /** @override **/
  destruct() {
    this.isDestructed || (this.j.e.off(this.__listenEvents, this.update).off("afterSetMode focus", this.__immediateUpdate), super.destruct());
  }
};
Wi([
  k
], Ie.prototype, "__immediateUpdate", null);
Wi([
  Oe((n) => n.j.defaultTimeout, !0)
], Ie.prototype, "update", null);
Wi([
  ct("ready")
], Ie.prototype, "__initEvents", null);
Ie = Wi([
  D
], Ie);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Lt = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Ee = class extends R {
  /** @override */
  className() {
    return "ToolbarButton";
  }
  /**
   * Get parent toolbar
   */
  get toolbar() {
    return this.closest(Ie);
  }
  /** @override **/
  update() {
    var e, t;
    const { control: i, state: r } = this, o = this.closest(Ie);
    if (!o)
      return;
    const s = (e = i.value) === null || e === void 0 ? void 0 : e.call(i, o.jodit, this);
    s !== void 0 && (r.value = s), r.disabled = this.__calculateDisabledStatus(o), r.activated = this.__calculateActivatedStatus(o), (t = i.update) === null || t === void 0 || t.call(i, o.jodit, this);
  }
  /**
   * Calculates whether the button is active
   */
  __calculateActivatedStatus(e) {
    var t, i;
    return ae(this.j) && !this.j.editorIsActive ? !1 : !((i = (t = this.control).isActive) === null || i === void 0) && i.call(t, this.j, this) ? !0 : !!(e && e.shouldBeActive(this));
  }
  /**
   * Calculates whether an element is blocked for the user
   */
  __calculateDisabledStatus(e) {
    var t, i;
    return this.j.o.disabled || this.j.o.readonly && (!this.j.o.activeButtonsInReadOnly || !this.j.o.activeButtonsInReadOnly.includes(this.control.name)) || !((i = (t = this.control).isDisabled) === null || i === void 0) && i.call(t, this.j, this) ? !0 : !!(e && e.shouldBeDisabled(this));
  }
  /** @override */
  onChangeActivated() {
    g(this.button, "aria-pressed", this.state.activated), super.onChangeActivated();
  }
  /** @override */
  onChangeText() {
    y(this.control.template) ? this.text.innerHTML = this.control.template(this.j, this.control.name, this.j.i18n(this.state.text)) : super.onChangeText(), this.setMod("text-icons", !!this.text.innerText.trim().length);
  }
  /** @override */
  onChangeTabIndex() {
    g(this.button, "tabindex", this.state.tabIndex);
  }
  createContainer() {
    const e = this.componentName, t = this.j.c.span(e), i = super.createContainer();
    g(t, "role", "listitem"), i.classList.remove(e), i.classList.add(e + "__button"), Object.defineProperty(i, "component", {
      value: this
    }), t.appendChild(i);
    const r = this.j.c.fromHTML(`<span role="trigger" class="${e}__trigger">${x.get("chevron")}</span>`);
    return i.appendChild(r), t;
  }
  /** @override */
  focus() {
    var e;
    (e = this.container.querySelector("button")) === null || e === void 0 || e.focus();
  }
  onChangeHasTrigger() {
    this.state.hasTrigger ? this.container.appendChild(this.trigger) : l.safeRemove(this.trigger), this.setMod("with-trigger", this.state.hasTrigger || null);
  }
  /** @override */
  onChangeDisabled() {
    const e = this.state.disabled ? "disabled" : null;
    g(this.trigger, "disabled", e), g(this.button, "disabled", e), g(this.container, "disabled", e);
  }
  constructor(e, t, i = null) {
    super(e), this.control = t, this.target = i, this.state = {
      ...zi(),
      theme: "toolbar",
      currentValue: "",
      hasTrigger: !1
    }, this.openedPopup = null;
    const r = this.getElm("button");
    E(r, "Element button should exists"), this.button = r, Object.defineProperty(r, "component", {
      value: this,
      configurable: !0
    });
    const o = this.getElm("trigger");
    E(o, "Element trigger should exists"), this.trigger = o, o.remove(), e.e.on([this.button, this.trigger], "mousedown", (s) => s.preventDefault()), this.onAction(this.onClick), this.hookStatus(P.ready, () => {
      this.__initFromControl(), this.update();
    }), t.mods && Object.keys(t.mods).forEach((s) => {
      t.mods && this.setMod(s, t.mods[s]);
    });
  }
  /**
   * Init constant data from control
   */
  __initFromControl() {
    var e;
    const { control: t, state: i } = this;
    this.updateSize(), i.name = t.name;
    const { textIcons: r } = this.j.o;
    if (r === !0 || y(r) && r(t.name) || t.template)
      i.icon = zi().icon, i.text = t.text || t.name;
    else {
      if (t.iconURL)
        i.icon.iconURL = t.iconURL;
      else {
        const o = t.icon || t.name;
        i.icon.name = x.exists(o) || !((e = this.j.o.extraIcons) === null || e === void 0) && e[o] ? o : "";
      }
      !t.iconURL && !i.icon.name && (i.text = t.text || t.name);
    }
    t.tooltip && (i.tooltip = this.j.i18n(y(t.tooltip) ? t.tooltip(this.j, t, this) : t.tooltip)), i.hasTrigger = !!(t.list || t.popup && t.exec);
  }
  /**
   * Click on trigger button
   */
  onTriggerClick(e) {
    var t, i, r;
    if (this.openedPopup) {
      this.__closePopup();
      return;
    }
    const { control: o } = this;
    if (e.buffer = {
      actionTrigger: this
    }, o.list)
      return this.__openControlList(o);
    if (y(o.popup)) {
      const s = this.openPopup();
      s.parentElement = this;
      try {
        if (this.j.e.fire(se(`before-${o.name}-open-popup`), this.target, o, s) !== !1) {
          const a = (r = (i = (t = this.toolbar) === null || t === void 0 ? void 0 : t.getTarget(this)) !== null && i !== void 0 ? i : this.target) !== null && r !== void 0 ? r : null, c = o.popup(this.j, a, this.__closePopup, this);
          c ? s.setContent(v(c) ? this.j.c.fromHTML(c) : c).open(() => ke(this.container), !1, this.j.o.allowTabNavigation ? this.container : void 0) : this.__closePopup();
        }
      } catch (a) {
        throw this.__closePopup(), a;
      }
      this.j.e.fire(se(`after-${o.name}-open-popup`), s.container);
    }
  }
  /**
   * Create an open popup list
   */
  __openControlList(e) {
    var t;
    const i = (t = this.jodit.options.controls) !== null && t !== void 0 ? t : {}, r = (u) => ls(u, i), o = e.list, s = this.openPopup(), a = ur(this.j);
    s.parentElement = this, a.parentElement = s, a.mode = "vertical";
    const c = (u) => N(u) && "title" in u && "value" in u, d = (u, h) => {
      if (v(h) && r(h))
        return {
          name: h.toString(),
          ...r(h)
        };
      if (v(u) && r(u))
        return {
          name: u.toString(),
          ...r(u),
          ...typeof h == "object" ? h : {}
        };
      c(u) && (h = u.value, u = u.title);
      const { childTemplate: f } = e, p = {
        name: u.toString(),
        template: f && ((m, w, C) => f(m, w, C, this)),
        exec: e.childExec ? (m, w, C) => {
          var I;
          return (I = e.childExec) === null || I === void 0 ? void 0 : I.call(e, m, w, {
            ...C,
            parentControl: e
          });
        } : e.exec,
        data: e.data,
        command: e.command,
        isActive: e.isChildActive,
        value: e.value,
        isDisabled: e.isChildDisabled,
        mode: e.mode,
        args: [...e.args ? e.args : [], u, h]
      };
      return v(h) && (p.text = h), p;
    };
    a.build(M(o) ? o.map(d) : Je(o, !1).map((u) => d(u, o[u])), this.target), s.setContent(a).open(() => ke(this.container), !1, this.j.o.allowTabNavigation ? this.container : void 0), this.state.activated = !0;
  }
  onOutsideClick(e) {
    this.openedPopup && (!e || !l.isNode(e.target) || !l.isOrContains(this.container, e.target) && !this.openedPopup.isOwnClick(e)) && this.__closePopup();
  }
  openPopup() {
    return this.__closePopup(), this.openedPopup = new oe(this.j, !1), this.j.e.on(this.ow, "mousedown touchstart", this.onOutsideClick).on("escape closeAllPopups", this.onOutsideClick), this.openedPopup;
  }
  __closePopup() {
    this.openedPopup && (this.j.e.off(this.ow, "mousedown touchstart", this.onOutsideClick).off("escape closeAllPopups", this.onOutsideClick), this.state.activated = !1, this.openedPopup.close(), this.openedPopup.destruct(), this.openedPopup = null);
  }
  /**
   * Click handler
   */
  onClick(e) {
    var t, i, r, o, s, a, c;
    const { control: d } = this;
    if (y(d.exec)) {
      const u = (r = (i = (t = this.toolbar) === null || t === void 0 ? void 0 : t.getTarget(this)) !== null && i !== void 0 ? i : this.target) !== null && r !== void 0 ? r : null, h = d.exec(this.j, u, {
        control: d,
        originalEvent: e,
        button: this
      });
      if (h !== !1 && h !== !0 && ((s = (o = this.j) === null || o === void 0 ? void 0 : o.e) === null || s === void 0 || s.fire("synchro"), this.parentElement && this.parentElement.update(), (c = (a = this.j) === null || a === void 0 ? void 0 : a.e) === null || c === void 0 || c.fire("closeAllPopups afterExec")), h !== !1)
        return;
    }
    if (d.list)
      return this.__openControlList(d);
    if (y(d.popup))
      return this.onTriggerClick(e);
    (d.command || d.name) && (he(ae(this.j) ? this.j.execCommand.bind(this.j) : this.j.od.execCommand.bind(this.j.od), d.command || d.name, !1, d.args && d.args[0]), this.j.e.fire("closeAllPopups"));
  }
  destruct() {
    return this.__closePopup(), super.destruct();
  }
};
Lt([
  Zn
], Ee.prototype, "createContainer", null);
Lt([
  L("state.hasTrigger", { immediately: !1 })
], Ee.prototype, "onChangeHasTrigger", null);
Lt([
  L("trigger:click")
], Ee.prototype, "onTriggerClick", null);
Lt([
  k
], Ee.prototype, "onOutsideClick", null);
Lt([
  k
], Ee.prototype, "__closePopup", null);
Ee = Lt([
  D
], Ee);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var dl = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Li = class extends R {
  /** @override */
  className() {
    return "ToolbarContent";
  }
  /** @override */
  update() {
    const e = this.control.getContent(this.j, this);
    (v(e) || e.parentNode !== this.container) && (l.detach(this.container), this.container.appendChild(v(e) ? this.j.create.fromHTML(e) : e)), super.update();
  }
  /** @override */
  createContainer() {
    return this.j.c.span(this.componentName);
  }
  constructor(e, t, i = null) {
    super(e), this.control = t, this.target = i, this.container.classList.add(`${this.componentName}_${this.clearName(t.name)}`), g(this.container, "role", "content");
  }
};
Li = dl([
  D
], Li);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var ul = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Ai = class extends Ee {
  className() {
    return "ToolbarSelect";
  }
  update() {
    var e, t, i;
    super.update(), this.state.icon.name = "";
    const { list: r, data: o } = this.control;
    if (r) {
      let s = this.state.value || (o && v(o.currentValue) ? o.currentValue : void 0);
      s || (s = Object.keys(r)[0]);
      const a = (N(r) && r[s.toString()] || s).toString();
      this.state.text = (i = (t = (e = this.control).textTemplate) === null || t === void 0 ? void 0 : t.call(e, this.jodit, a)) !== null && i !== void 0 ? i : a;
    }
  }
};
Ai = ul([
  D
], Ai);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var hl = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Ri = class extends Ie {
  /** @override */
  className() {
    return "ToolbarEditorCollection";
  }
  /** @override */
  shouldBeDisabled(e) {
    const t = super.shouldBeDisabled(e);
    if (t !== void 0)
      return t;
    const i = e.control.mode === void 0 ? de : e.control.mode;
    return !(i === ot || i === this.j.getRealMode());
  }
  /** @override */
  shouldBeActive(e) {
    const t = super.shouldBeActive(e);
    if (t !== void 0)
      return t;
    const i = this.j.selection ? this.j.s.current() : null;
    if (!i)
      return !1;
    let r;
    if (e.control.tags) {
      const o = e.control.tags;
      if (r = i, l.up(r, (s) => {
        if (s && o.indexOf(s.nodeName.toLowerCase()) !== -1)
          return !0;
      }, this.j.editor))
        return !0;
    }
    if (e.control.css) {
      const o = e.control.css;
      if (r = i, l.up(r, (s) => {
        if (s && !l.isText(s) && !l.isComment(s))
          return this.checkActiveStatus(o, s);
      }, this.j.editor))
        return !0;
    }
    return !1;
  }
  /** @override */
  getTarget(e) {
    return e.target || this.j.s.current() || null;
  }
  /** @override */
  constructor(e) {
    super(e), this.checkActiveStatus = (t, i) => {
      let r = 0, o = 0;
      return Object.keys(t).forEach((s) => {
        const a = t[s];
        y(a) ? a(this.j, _(i, s).toString()) && (r += 1) : a.indexOf(_(i, s).toString()) !== -1 && (r += 1), o += 1;
      }), o === r;
    }, this.prependInvisibleInput(this.container);
  }
  /**
   * Adds an invisible element to the container that can handle the
   * situation when the editor is inside the <label>
   *
   * @see https://github.com/jodit/jodit-react/issues/138
   */
  prependInvisibleInput(e) {
    const t = this.j.create.element("input", {
      tabIndex: -1,
      disabled: !0,
      // Because <label> can trigger click
      style: "width: 0; height:0; position: absolute; visibility: hidden;"
    });
    l.appendChildFirst(e, t);
  }
  /**
   * Show the inline toolbar inside WYSIWYG editor.
   * @param bound - you can set the place for displaying the toolbar,
   * or the place will be in the place of the cursor
   */
  showInline(e) {
    this.jodit.e.fire("showInlineToolbar", e);
  }
  hide() {
    this.jodit.e.fire("hidePopup"), super.hide(), this.jodit.e.fire("toggleToolbar");
  }
  show() {
    super.show(), this.jodit.e.fire("toggleToolbar");
  }
};
Ri = hl([
  D
], Ri);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ur(n, e) {
  const t = ae(n) ? new Ri(n) : new Ie(n);
  return n.o.textIcons && t.container.classList.add("jodit_text_icons"), e && (t.parentElement = e), n.o.toolbarButtonSize && (t.buttonSize = n.o.toolbarButtonSize), t;
}
function fl(n, e, t = null) {
  if (y(e.getContent))
    return new Li(n, e, t);
  const i = new Ee(n, e, t);
  return i.state.tabIndex = n.o.allowTabNavigation ? 0 : -1, i;
}
function pl(n, e, t = null) {
  return new Ai(n, e, t);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var hs = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class At extends ne {
  /**
   * Container for toolbar
   */
  get toolbarContainer() {
    return !this.o.fullsize && (v(this.o.toolbar) || l.isHTMLElement(this.o.toolbar)) ? Ot(this.o.toolbar, this.o.shadowRoot || this.od) : (this.o.toolbar && l.appendChildFirst(this.container, this.__defaultToolbarContainer), this.__defaultToolbarContainer);
  }
  /**
   * Change panel container
   */
  setPanel(e) {
    this.o.toolbar = e, this.buildToolbar();
  }
  /**
   * Helper for appended toolbar in its place
   */
  buildToolbar() {
    var e;
    if (!this.o.toolbar)
      return;
    const t = this.o.buttons ? Ge(this.o.buttons) : [];
    (e = this.toolbar) === null || e === void 0 || e.setRemoveButtons(this.o.removeButtons).build(t.concat(this.o.extraButtons || [])).appendTo(this.toolbarContainer);
  }
  getRegisteredButtonGroups() {
    return this.groupToButtons;
  }
  /**
   * Register button for a group
   */
  registerButton(e) {
    var t;
    this.registeredButtons.add(e);
    const i = (t = e.group) !== null && t !== void 0 ? t : "other";
    return this.groupToButtons[i] || (this.groupToButtons[i] = []), e.position != null ? this.groupToButtons[i][e.position] = e.name : this.groupToButtons[i].push(e.name), this;
  }
  /**
   * Remove button from a group
   */
  unregisterButton(e) {
    var t;
    this.registeredButtons.delete(e);
    const i = (t = e.group) !== null && t !== void 0 ? t : "other", r = this.groupToButtons[i];
    if (r) {
      const o = r.indexOf(e.name);
      o !== -1 && r.splice(o, 1), r.length === 0 && delete this.groupToButtons[i];
    }
    return this;
  }
  /**
   * Prepare toolbar items and append buttons in groups
   */
  beforeToolbarBuild(e) {
    if (Object.keys(this.groupToButtons).length)
      return e.map((t) => ss(t) && t.group && this.groupToButtons[t.group] ? {
        group: t.group,
        buttons: [
          ...t.buttons,
          ...this.groupToButtons[t.group]
        ]
      } : t);
  }
  /** @override **/
  constructor(e, t = !1) {
    super(e, t), this.toolbar = ur(this), this.__defaultToolbarContainer = this.c.div("jodit-toolbar__box"), this.registeredButtons = /* @__PURE__ */ new Set(), this.groupToButtons = {}, this.isJodit = !1, this.__tooltip = new Ye(this), this.isJodit = t, this.e.on("beforeToolbarBuild", this.beforeToolbarBuild);
  }
  destruct() {
    this.isDestructed || (this.setStatus(P.beforeDestruct), this.e.off("beforeToolbarBuild", this.beforeToolbarBuild), this.__tooltip.destruct(), this.toolbar.destruct(), this.toolbar = void 0, super.destruct());
  }
}
hs([
  L(":rebuildToolbar")
], At.prototype, "buildToolbar", null);
hs([
  k
], At.prototype, "beforeToolbarBuild", null);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Ze = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, zn;
b.prototype.dialog = {
  namespace: "",
  extraButtons: [],
  /**
   * This dialog can resize by trigger
   */
  resizable: !0,
  /**
   * This dialog can move by header
   */
  draggable: !0,
  buttons: ["dialog.close"],
  removeButtons: [],
  toolbarButtonSize: "middle",
  zIndex: "inherit"
};
b.prototype.controls.dialog = {
  close: {
    icon: "cancel",
    exec: (n) => {
      n.close();
    }
  }
};
let ee = zn = class extends At {
  /** @override */
  className() {
    return "Dialog";
  }
  get destination() {
    const { popupRoot: e, shadowRoot: t } = this.o;
    return e || t || this.od.body;
  }
  setElements(e, t) {
    const i = [];
    ei(t).forEach((r) => {
      if (M(r)) {
        const s = this.c.div(this.getFullElName("column"));
        return i.push(s), e.appendChild(s), this.setElements(s, r);
      }
      let o;
      v(r) ? o = this.c.fromHTML(r) : o = Io(r) ? r.container : r, i.push(o), o.parentNode !== e && e.appendChild(o);
    }), U(e.childNodes).forEach((r) => {
      i.indexOf(r) === -1 && e.removeChild(r);
    });
  }
  __onMouseUp() {
    (this.draggable || this.resizable) && (this.__removeGlobalResizeListeners(), this.draggable = !1, this.resizable = !1, this.unlockSelect(), this.e && (this.__removeGlobalResizeListeners(), this.e.fire(this, "endResize endMove")));
  }
  /**
   *
   */
  __onHeaderMouseDown(e) {
    const t = e.target;
    !this.o.draggable || t && t.nodeName.match(/^(INPUT|SELECT)$/) || (this.draggable = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.x = _(this.dialog, "left"), this.startPoint.y = _(this.dialog, "top"), this.setMaxZIndex(), e.cancelable && e.preventDefault(), this.lockSelect(), this.__addGlobalResizeListeners(), this.e && (this.e.fire(this, "startMove"), this.e.fire("closeAllPopups")));
  }
  __onMouseMove(e) {
    this.draggable && this.o.draggable && (this.setPosition(this.startPoint.x + e.clientX - this.startX, this.startPoint.y + e.clientY - this.startY), this.e && this.e.fire(this, "move", e.clientX - this.startX, e.clientY - this.startY), e.stopImmediatePropagation()), this.resizable && this.o.resizable && (this.setSize(this.startPoint.w + e.clientX - this.startX, this.startPoint.h + e.clientY - this.startY), this.e && this.e.fire(this, "resizeDialog", e.clientX - this.startX, e.clientY - this.startY));
  }
  __onEsc(e) {
    if (this.o.closeOnEsc && this.isOpened && e.key === Di && this.getMod("static") !== !0) {
      const t = this.getMaxZIndexDialog();
      t ? t.close() : this.close(), e.stopImmediatePropagation();
    }
  }
  __onResizerMouseDown(e) {
    this.resizable = !0, this.startX = e.clientX, this.startY = e.clientY, this.startPoint.w = this.dialog.offsetWidth, this.startPoint.h = this.dialog.offsetHeight, this.lockSelect(), this.__addGlobalResizeListeners(), this.e && this.e.fire(this, "startResize");
  }
  __addGlobalResizeListeners() {
    const e = this;
    e.e.on(e.ow, "pointermove touchmove", e.__onMouseMove).on(e.ow, "pointerup touchend", e.__onMouseUp);
  }
  __removeGlobalResizeListeners() {
    const e = this;
    e.e.off(e.ow, "mousemove pointermove", e.__onMouseMove).off(e.ow, "mouseup pointerup", e.__onMouseUp);
  }
  /**
   * Specifies the size of the window
   *
   * @param w - The width of the window
   * @param h - The height of the window
   */
  setSize(e, t) {
    return e == null && (e = this.dialog.offsetWidth), t == null && (t = this.dialog.offsetHeight), _(this.dialog, {
      width: e,
      height: t
    }), this;
  }
  /**
   * Recalculate auto sizes
   */
  calcAutoSize() {
    return this.setSize("auto", "auto"), this.setSize(), this;
  }
  /**
   * Specifies the position of the upper left corner of the window . If x and y are specified,
   * the window is centered on the center of the screen
   *
   * @param x - Position px Horizontal
   * @param y - Position px Vertical
   */
  setPosition(e, t) {
    const i = this.ow.innerWidth, r = this.ow.innerHeight;
    let o = i / 2 - this.dialog.offsetWidth / 2, s = r / 2 - this.dialog.offsetHeight / 2;
    return o < 0 && (o = 0), s < 0 && (s = 0), e !== void 0 && t !== void 0 && (this.offsetX = e, this.offsetY = t, this.moved = Math.abs(e - o) > 100 || Math.abs(t - s) > 100), this.dialog.style.left = (e || o) + "px", this.dialog.style.top = (t || s) + "px", this;
  }
  /**
   * Specifies the dialog box title . It can take a string and an array of objects
   *
   * @param content - A string or an HTML element ,
   * or an array of strings and elements
   * @example
   * ```javascript
   * var dialog = new Jodi.modules.Dialog(parent);
   * dialog.setHeader('Hello world');
   * dialog.setHeader(['Hello world', '<button>OK</button>', $('<div>some</div>')]);
   * dialog.open();
   * ```
   */
  setHeader(e) {
    return this.setElements(this.dialogbox_header, e), this;
  }
  /**
   * It specifies the contents of the dialog box. It can take a string and an array of objects
   *
   * @param content - A string or an HTML element ,
   * or an array of strings and elements
   * @example
   * ```javascript
   * var dialog = new Jodi.modules.Dialog(parent);
   * dialog.setHeader('Hello world');
   * dialog.setContent('<form onsubmit="alert(1);"><input type="text" /></form>');
   * dialog.open();
   * ```
   */
  setContent(e) {
    return this.setElements(this.dialogbox_content, e), this;
  }
  /**
   * Sets the bottom of the dialog. It can take a string and an array of objects
   *
   * @param content - A string or an HTML element ,
   * or an array of strings and elements
   * @example
   * ```javascript
   * var dialog = new Jodi.modules.Dialog(parent);
   * dialog.setHeader('Hello world');
   * dialog.setContent('<form><input id="someText" type="text" /></form>');
   * dialog.setFooter([
   *  $('<a class="jodit-button">OK</a>').click(function () {
   *      alert($('someText').val())
   *      dialog.close();
   *  })
   * ]);
   * dialog.open();
   * ```
   */
  setFooter(e) {
    return this.setElements(this.dialogbox_footer, e), this.setMod("footer", !!e), this;
  }
  /**
   * Get zIndex from dialog
   */
  getZIndex() {
    return parseInt(_(this.container, "zIndex"), 10) || 0;
  }
  /**
   * Get dialog instance with maximum z-index displaying it on top of all the dialog boxes
   */
  getMaxZIndexDialog() {
    let e = 0, t, i, r = this;
    return j(".jodit-dialog", this.destination).forEach((o) => {
      t = o.component, i = parseInt(_(o, "zIndex"), 10), t.isOpened && !isNaN(i) && i > e && (r = t, e = i);
    }), r;
  }
  /**
   * Sets the maximum z-index dialog box, displaying it on top of all the dialog boxes
   */
  setMaxZIndex() {
    if (this.getMod("static"))
      return;
    let e = 20000004, t = 0;
    j(".jodit-dialog", this.destination).forEach((i) => {
      t = parseInt(_(i, "zIndex"), 10), e = Math.max(isNaN(t) ? 0 : t, e);
    }), this.container.style.zIndex = (e + 1).toString();
  }
  /**
   * Expands the dialog on full browser window
   */
  toggleFullSize(e) {
    V(e) && (e = !this.getMod("fullsize")), this.setMod("fullsize", e), super.toggleFullSize(e);
  }
  /**
   * It opens a dialog box to center it, and causes the two event.
   *
   * @param contentOrClose - specifies the contents of the dialog box.
   * Can be false or undefined. see [[Dialog.setContent]]
   * @param title - specifies the title of the dialog box, @see setHeader
   * @param destroyAfterClose - true - After closing the window , the destructor will be called.
   * @param modal - true window will be opened in modal mode
   */
  open(e, t, i, r) {
    if (at.fire("closeAllPopups hideHelpers"), this.e.fire(this, "beforeOpen") === !1)
      return this;
    We(e) && (i = e), We(t) && (r = t), this.destroyAfterClose = i === !0;
    const o = We(e) ? void 0 : e, s = We(t) ? void 0 : t;
    return s !== void 0 && this.setHeader(s), o && this.setContent(o), this.setMod("active", !0), this.isOpened = !0, this.setModal(r), this.destination.appendChild(this.container), this.getMod("static") !== !0 ? (this.setPosition(this.offsetX, this.offsetY), this.setMaxZIndex()) : this.container.style.removeProperty("z-index"), this.o.fullsize && this.toggleFullSize(!0), this.e.fire("afterOpen", this), this;
  }
  /**
   * Set modal mode
   */
  setModal(e) {
    return this.isModal = !!e, this.setMod("modal", this.isModal), this;
  }
  /****
   * Closes the dialog box , if you want to call the method `destruct`
   *
   * @see destroy
   * @example
   * ```javascript
   * //You can close dialog two ways
   * var dialog = new Jodit.modules.Dialog();
   * dialog.open('Hello world!', 'Title');
   * var $close = dialog.create.fromHTML('<a href="#" style="float:left;" class="jodit-button">
   *     <i class="icon icon-check"></i>&nbsp;' + Jodit.prototype.i18n('Ok') + '</a>');
   * $close.addEventListener('click', function () {
   *     dialog.close();
   * });
   * dialog.setFooter($close);
   * // and second way, you can close dialog from content
   * dialog.open('<a onclick="var event = doc.createEvent('HTMLEvents'); event.initEvent('close_dialog', true, true);
   * this.dispatchEvent(event)">Close</a>', 'Title');
   * ```
   */
  close() {
    if (this.isDestructed || !this.isOpened || this.getMod("static") === !0)
      return this;
    const { e } = this;
    return e.fire(this, "beforeClose") === !1 || e.fire("beforeClose", this) === !1 ? this : (this.setMod("active", !1), this.isOpened = !1, this.isFullSize && this.toggleFullSize(!1), l.safeRemove(this.container), this.__removeGlobalResizeListeners(), e.fire(this, "afterClose"), e.fire(this.ow, "joditCloseDialog"), this.destroyAfterClose && this.destruct(), this);
  }
  constructor(e = {}) {
    super(e), this.destroyAfterClose = !1, this.moved = !1, this.resizable = !1, this.draggable = !1, this.startX = 0, this.startY = 0, this.startPoint = { x: 0, y: 0, w: 0, h: 0 }, this.lockSelect = () => {
      this.setMod("moved", !0);
    }, this.unlockSelect = () => {
      this.setMod("moved", !1);
    }, this.__onResize = () => {
      this.options && this.o.resizable && !this.moved && this.isOpened && !this.offsetX && !this.offsetY && this.setPosition();
    }, this.isModal = !1, this.isOpened = !1;
    const t = this;
    t.options = Q(e, Q(b.prototype.dialog, zn.defaultOptions)), l.safeRemove(t.container);
    const i = this.getFullElName.bind(this);
    t.container = this.c.fromHTML(`<div class="jodit jodit-dialog ${this.componentName}">
				<div class="${i("overlay")}"></div>
				<div class="${this.getFullElName("panel")}">
					<div class="${i("header")}">
						<div class="${i("header-title")}"></div>
						<div class="${i("header-toolbar")}"></div>
					</div>
					<div class="${i("content")}"></div>
					<div class="${i("footer")}"></div>
					<div class="${i("resizer")}">${x.get("resize_handler")}</div>
				</div>
			</div>`), t.options.direction === "rtl" && (t.container.style.direction = "rtl", t.container.setAttribute("dir", "rtl")), this.o.zIndex && (this.container.style.zIndex = this.o.zIndex.toString()), g(t.container, "role", "dialog"), Object.defineProperty(t.container, "component", {
      value: this
    }), t.setMod("theme", t.o.theme || "default").setMod("resizable", !!t.o.resizable);
    const r = t.getElm("panel");
    E(r != null, "Panel element does not exist");
    const o = t.getElm("resizer");
    E(o != null, "Resizer element does not exist");
    const s = t.getElm("header-title");
    E(s != null, "header-title element does not exist");
    const a = t.getElm("content");
    E(a != null, "Content element does not exist");
    const c = t.getElm("footer");
    E(c != null, "Footer element does not exist");
    const d = t.getElm("header-toolbar");
    E(d != null, "header-toolbar element does not exist"), this.dialog = r, this.resizer = o, this.dialogbox_header = s, this.dialogbox_content = a, this.dialogbox_footer = c, this.dialogbox_toolbar = d, _(t.dialog, {
      maxWidth: t.options.maxWidth,
      minHeight: t.options.minHeight,
      minWidth: t.options.minWidth
    });
    const u = t.getElm("header");
    u && t.e.on(u, "pointerdown touchstart", t.__onHeaderMouseDown), t.e.on(t.resizer, "mousedown touchstart", t.__onResizerMouseDown);
    const h = H.get("fullsize");
    if (y(h) && h(t), this.e.on(t.container, "close_dialog", t.close).on(this.ow, "keydown", this.__onEsc).on(this.ow, "resize", this.__onResize), this.o.closeOnClickOverlay) {
      const f = t.getElm("overlay");
      E(f != null, "Overlay element does not exist"), this.e.on(f, "click", t.close);
    }
  }
  /**
   * Build toolbar after ready
   */
  buildToolbar() {
    this.o.buttons && this.toolbar.build(Ge(this.o.buttons)).setMod("mode", "header").appendTo(this.dialogbox_toolbar);
  }
  /**
   * It destroys all objects created for the windows and also includes all the handlers for the window object
   */
  destruct() {
    this.isInDestruct || (this.setStatus(P.beforeDestruct), this.isOpened && this.close(), this.events && (this.__removeGlobalResizeListeners(), this.events.off(this.container, "close_dialog", self.close).off(this.ow, "keydown", this.__onEsc).off(this.ow, "resize", this.__onResize)), super.destruct());
  }
};
Ze([
  k
], ee.prototype, "__onMouseUp", null);
Ze([
  k
], ee.prototype, "__onHeaderMouseDown", null);
Ze([
  k
], ee.prototype, "__onMouseMove", null);
Ze([
  k
], ee.prototype, "__onEsc", null);
Ze([
  k
], ee.prototype, "__onResizerMouseDown", null);
Ze([
  k
], ee.prototype, "close", null);
Ze([
  ct("ready")
], ee.prototype, "buildToolbar", null);
ee = zn = Ze([
  D
], ee);
ee.defaultOptions = {
  ...ne.defaultOptions,
  closeOnClickOverlay: !1,
  closeOnEsc: !0
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function fs(n, e, t, i = "jodit-dialog_alert") {
  y(e) && (t = e, e = void 0);
  const r = this instanceof ee ? this : new ee({ closeOnClickOverlay: !0 }), o = r.c.div(i), s = pe(r, "ok", "Ok");
  return ei(n).forEach((a) => {
    o.appendChild(l.isNode(a) ? a : r.c.fromHTML(a));
  }), s.onAction(() => {
    (!t || !y(t) || t(r) !== !1) && r.close();
  }), r.setFooter([s]), r.open(o, e || "&nbsp;", !0, !0), s.focus(), r;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ps(n, e, t) {
  const i = this instanceof ee ? this : new ee({ closeOnClickOverlay: !0 }), r = i.c.fromHTML('<form class="jodit-dialog_prompt"></form>'), o = i.c.element("label");
  y(e) && (t = e, e = void 0), o.appendChild(i.c.fromHTML(n)), r.appendChild(o);
  const s = (d) => () => {
    (!t || t(d) !== !1) && i.close();
  }, a = pe(i, "cancel", "Cancel"), c = pe(i, "ok", "Yes");
  return a.onAction(s(!1)), c.onAction(s(!0)), i.e.on(r, "submit", () => (s(!0)(), !1)), i.setFooter([c, a]), i.open(r, e || "&nbsp;", !0, !0), c.focus(), i;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ms(n, e, t, i, r) {
  const o = this instanceof ee ? this : new ee({ closeOnClickOverlay: !0 }), s = pe(o, "cancel", "Cancel"), a = pe(o, "ok", "Ok"), c = o.c.element("form", {
    class: "jodit-dialog_prompt"
  }), d = o.c.element("input", {
    autofocus: !0,
    class: "jodit-input"
  }), u = o.c.element("label");
  y(e) && (t = e, e = void 0), i && g(d, "placeholder", i), u.appendChild(o.c.text(n)), c.appendChild(u), c.appendChild(d), s.onAction(o.close);
  const h = () => {
    (!t || !y(t) || t(d.value) !== !1) && o.close();
  };
  return a.onAction(h), o.e.on(c, "submit", () => (h(), !1)), o.setFooter([a, s]), o.open(c, e || "&nbsp;", !0, !0), d.focus(), r !== void 0 && r.length && (d.value = r, d.select()), o;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class gs {
  dlg(e) {
    const t = is(this.o, this.container, this.od.body), i = new ee({
      language: this.o.language,
      shadowRoot: this.o.shadowRoot,
      popupRoot: t,
      ownerWindow: this.o.ownerWindow,
      defaultTimeout: this.o.defaultTimeout,
      direction: this.o.direction,
      theme: this.o.theme,
      globalFullSize: this.o.globalFullSize,
      ...e
    });
    return Yn(this, i.container), i.parent = this, i.bindDestruct(this);
  }
  confirm(e, t, i) {
    return e = tt(e, this), t = tt(t, this), ps.call(this.dlg({ closeOnClickOverlay: !0 }), e, t, i);
  }
  prompt(e, t, i, r, o) {
    return e = tt(e, this), t = tt(t, this), r = tt(r, this), ms.call(this.dlg({ closeOnClickOverlay: !0 }), e, t, i, r, o);
  }
  alert(e, t, i, r) {
    return e = tt(e, this), t = tt(t, this), fs.call(this.dlg({ closeOnClickOverlay: !0 }), e, t, i, r);
  }
}
function tt(n, e) {
  return v(n) && !Fn(n) && (n = e.i18n(n)), n;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var ml = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Pi = class extends oe {
  /** @override */
  className() {
    return "ContextMenu";
  }
  /**
   * Generate and show context menu
   *
   * @param x - Global coordinate by X
   * @param y - Global coordinate by Y
   * @param actions - Array with plain objects `{icon: 'bin', title: 'Delete', exec: function () {}}`
   * @example
   * ```javascript
   * parent.show(e.clientX, e.clientY, [{icon: 'bin', title: 'Delete', exec: function () { alert(1) }}]);
   * ```
   */
  show(e, t, i) {
    const r = this;
    r.clear(), M(i) && (i.forEach((o) => {
      if (!o)
        return;
      const s = pe(this.jodit, o.icon || "empty", o.title);
      this.jodit && s.setParentView(this.jodit), s.setMod("context", "menu"), s.onAction((a) => {
        var c;
        return (c = o.exec) === null || c === void 0 || c.call(r, a), r.clear(), r.close(), !1;
      }), this.append(s);
    }), this.open(() => ({ left: e, top: t, width: 0, height: 0 }), !0));
  }
};
Pi = ml([
  D
], Pi);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.filebrowser = {
  namespace: "",
  cache: !0,
  extraButtons: [],
  filter(n, e) {
    return e = e.toLowerCase(), v(n) ? n.toLowerCase().indexOf(e) !== -1 : v(n.name) ? n.name.toLowerCase().indexOf(e) !== -1 : v(n.file) ? n.file.toLowerCase().indexOf(e) !== -1 : !0;
  },
  sortBy: "changed-desc",
  sort(n, e, t) {
    const [i, r] = t.toLowerCase().split("-"), o = r === "asc", s = (a, c) => a < c ? o ? -1 : 1 : a > c ? o ? 1 : -1 : 0;
    if (v(n))
      return s(n.toLowerCase(), e.toLowerCase());
    if (n[i] === void 0 || i === "name")
      return v(n.name) ? s(n.name.toLowerCase(), e.name.toLowerCase()) : v(n.file) ? s(n.file.toLowerCase(), e.file.toLowerCase()) : 0;
    switch (i) {
      case "changed": {
        const a = new Date(n.changed).getTime(), c = new Date(e.changed).getTime();
        return o ? a - c : c - a;
      }
      case "size": {
        const a = gn(n.size), c = gn(e.size);
        return o ? a - c : c - a;
      }
    }
    return 0;
  },
  editImage: !0,
  preview: !0,
  showPreviewNavigation: !0,
  showSelectButtonInPreview: !0,
  contextMenu: !0,
  howLongShowMsg: 3e3,
  createNewFolder: !0,
  deleteFolder: !0,
  renameFolder: !0,
  moveFolder: !0,
  moveFile: !0,
  permissionsPresets: {
    allowFileDownload: void 0,
    allowFileMove: void 0,
    allowFileRemove: void 0,
    allowFileRename: void 0,
    allowFileUpload: void 0,
    allowFileUploadRemote: void 0,
    allowFiles: void 0,
    allowFolderCreate: void 0,
    allowFolderMove: void 0,
    allowFolderRemove: void 0,
    allowFolderRename: void 0,
    allowFolderTree: void 0,
    allowFolders: void 0,
    allowGeneratePdf: void 0,
    allowImageCrop: void 0,
    allowImageResize: void 0
  },
  showFoldersPanel: !0,
  storeLastOpenedFolder: !0,
  width: 859,
  height: 400,
  buttons: [
    "filebrowser.upload",
    "filebrowser.remove",
    "filebrowser.update",
    "filebrowser.select",
    "filebrowser.edit",
    "|",
    "filebrowser.tiles",
    "filebrowser.list",
    "|",
    "filebrowser.filter",
    "|",
    "filebrowser.sort"
  ],
  removeButtons: [],
  fullsize: !1,
  showTooltip: !0,
  view: null,
  isSuccess(n) {
    return n.success;
  },
  getMessage(n) {
    return n.data.messages !== void 0 && M(n.data.messages) ? n.data.messages.join(" ") : "";
  },
  showFileName: !0,
  showFileSize: !0,
  showFileChangeTime: !0,
  saveStateInStorage: {
    storeLastOpenedFolder: !0,
    storeView: !0,
    storeSortBy: !0
  },
  pixelOffsetLoadNewChunk: 200,
  getThumbTemplate(n, e, t) {
    const i = this.options, r = this.files.getFullElName("item"), o = i.showFileName, s = i.showFileSize && n.size, a = i.showFileChangeTime && n.time;
    let c = "";
    n.file !== void 0 && (c = n.file);
    const d = `<div class="${r}-info">${o ? `<span class="${r}-info-filename">${c}</span>` : ""}${s ? `<span class="${r}-info-filesize">${n.size}</span>` : ""}${a ? `<span class="${r}-info-filechanged">${a}</span>` : ""}</div>`;
    return `<a
			data-jodit-file-browser-item="true"
			data-is-file="${n.isImage ? 0 : 1}"
			draggable="true"
			class="${r}"
			href="${n.fileURL}"
			data-source="${t}"
			data-path="${n.path}"
			data-name="${c}"
			title="${c}"
			data-url="${n.fileURL}">
				<img
					data-is-file="${n.isImage ? 0 : 1}"
					data-src="${n.fileURL}"
					src="${n.imageURL}"
					alt="${c}"
					loading="lazy"
				/>
				${o || s || a ? d : ""}
			</a>`;
  },
  ajax: {
    ...b.prototype.defaultAjaxOptions,
    url: "",
    data: {},
    cache: !0,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    method: "POST",
    processData: !0,
    headers: {},
    prepareData(n) {
      return n;
    },
    process(n) {
      return n;
    }
  },
  create: {
    data: { action: "folderCreate" }
  },
  getLocalFileByUrl: {
    data: { action: "getLocalFileByUrl" }
  },
  resize: {
    data: { action: "imageResize" }
  },
  crop: {
    data: { action: "imageCrop" }
  },
  fileMove: {
    data: { action: "fileMove" }
  },
  folderMove: {
    data: { action: "folderMove" }
  },
  fileRename: {
    data: { action: "fileRename" }
  },
  folderRename: {
    data: { action: "folderRename" }
  },
  fileRemove: {
    data: { action: "fileRemove" }
  },
  folderRemove: {
    data: { action: "folderRemove" }
  },
  items: {
    data: { action: "files" }
  },
  folder: {
    data: { action: "folders" }
  },
  permissions: {
    data: { action: "permissions" }
  }
};
b.prototype.controls.filebrowser = {
  upload: {
    icon: "plus",
    tooltip: "Upload file",
    isInput: !0,
    isDisabled: (n) => !n.dataProvider.canI("FileUpload"),
    getContent: (n, e) => {
      const t = new Ti(n, {
        tooltip: e.control.tooltip,
        onlyImages: n.state.onlyImages
      });
      return n.e.fire("bindUploader.filebrowser", t.container), t.container;
    }
  },
  remove: {
    icon: "bin",
    tooltip: "Remove file",
    isDisabled: (n) => !n.state.activeElements.length || !n.dataProvider.canI("FileRemove"),
    exec: (n) => {
      n.e.fire("fileRemove.filebrowser");
    }
  },
  update: {
    tooltip: "Update file list",
    exec: (n) => {
      n.e.fire("update.filebrowser");
    }
  },
  select: {
    tooltip: "Select file",
    icon: "check",
    isDisabled: (n) => !n.state.activeElements.length,
    exec: (n) => {
      n.e.fire("select.filebrowser");
    }
  },
  edit: {
    tooltip: "Edit image",
    icon: "pencil",
    isDisabled: (n) => {
      const e = n.state.activeElements;
      return e.length !== 1 || !e[0].isImage || !(n.dataProvider.canI("ImageCrop") || n.dataProvider.canI("ImageResize"));
    },
    exec: (n) => {
      n.e.fire("edit.filebrowser");
    }
  },
  tiles: {
    tooltip: "Tiles view",
    icon: "th",
    isActive: (n) => n.state.view === "tiles",
    exec: (n) => {
      n.e.fire("view.filebrowser", "tiles");
    }
  },
  list: {
    tooltip: "List view",
    icon: "th-list",
    isActive: (n) => n.state.view === "list",
    exec: (n) => {
      n.e.fire("view.filebrowser", "list");
    }
  },
  filter: {
    isInput: !0,
    getContent: (n, e) => {
      const t = e.container.querySelector(".jodit-input");
      if (t)
        return t;
      const i = n.c.element("input", {
        class: "jodit-input",
        placeholder: n.i18n("Filter")
      });
      return i.value = n.state.filterWord, n.e.on(i, "keydown mousedown", n.async.debounce(() => {
        n.e.fire("filter.filebrowser", i.value);
      }, n.defaultTimeout)), i;
    }
  },
  sort: {
    isInput: !0,
    getContent: (n) => {
      const e = n.c.fromHTML(`<select class="jodit-input jodit-select"><option value="changed-asc">${n.i18n("Sort by changed")} (⬆)</option><option value="changed-desc">${n.i18n("Sort by changed")} (⬇)</option><option value="name-asc">${n.i18n("Sort by name")} (⬆)</option><option value="name-desc">${n.i18n("Sort by name")} (⬇)</option><option value="size-asc">${n.i18n("Sort by size")} (⬆)</option><option value="size-desc">${n.i18n("Sort by size")} (⬇)</option></select>`);
      return e.value = n.state.sortBy, n.e.on("sort.filebrowser", (t) => {
        e.value !== t && (e.value = t);
      }).on(e, "change", () => {
        n.e.fire("sort.filebrowser", e.value);
      }), e;
    }
  }
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ht(n) {
  return n.files.setMod("active", !0), n.files.setMod("loading", !0), n.dataProvider.items(n.state.currentPath, n.state.currentSource, {
    sortBy: n.state.sortBy,
    onlyImages: n.state.onlyImages,
    filterWord: n.state.filterWord
  }).then((e) => {
    e && (n.state.elements = e, n.state.activeElements = []);
  }).catch(n.status).finally(() => n.files.setMod("loading", !1));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
async function Re(n) {
  n.tree.setMod("active", !0), l.detach(n.tree.container);
  const e = Ht(n);
  if (n.o.showFoldersPanel) {
    n.tree.setMod("loading", !0);
    const t = n.dataProvider.tree(n.state.currentPath, n.state.currentSource).then((i) => {
      n.state.sources = i;
    }).catch(n.status).finally(() => n.tree.setMod("loading", !1));
    return Promise.all([t, e]);
  }
  return n.tree.setMod("active", !1), e;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Ar = /* @__PURE__ */ new WeakMap(), hr = (n) => {
  let e = Ar.get(n);
  return e || (e = {}, Ar.set(n, e)), e;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Mi {
  constructor(e) {
    this.data = e, Object.keys(e).forEach((t) => {
      this[t] = e[t];
    });
  }
  static create(e) {
    return e instanceof Mi ? e : new Mi(e);
  }
  get path() {
    return wt(this.data.source.path ? this.data.source.path + "/" : "/");
  }
  get imageURL() {
    const e = this.time || (/* @__PURE__ */ new Date()).getTime().toString(), { thumbIsAbsolute: t, source: i, thumb: r, file: o } = this.data, s = r || o;
    return t && s ? s : bn(i.baseurl, i.path, s || "") + "?_tmst=" + encodeURIComponent(e);
  }
  get fileURL() {
    let { name: e } = this.data;
    const { file: t, fileIsAbsolute: i, source: r } = this.data;
    return t !== void 0 && (e = t), i && e ? e : bn(r.baseurl, r.path, e || "");
  }
  get time() {
    const { changed: e } = this.data;
    return e && (typeof e == "number" ? new Date(e).toLocaleString() : e) || "";
  }
  get uniqueHashKey() {
    const e = this.data;
    let t = [
      e.sourceName,
      e.name,
      e.file,
      this.time,
      e.thumb
    ].join("_");
    return t = t.toLowerCase().replace(/[^0-9a-z\-.]/g, "-"), t;
  }
  toJSON() {
    return this.data;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var gl = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
const vs = "default";
let Tn = class {
  constructor(e, t) {
    this.parent = e, this.options = t, this.__currentPermissions = null, this.__ajaxInstances = /* @__PURE__ */ new Map(), this.progressHandler = (i) => {
    };
  }
  /**
   * Alias for options
   */
  get o() {
    return this.options;
  }
  get(e) {
    const t = this.__ajaxInstances;
    if (t.has(e)) {
      const s = t.get(e);
      s == null || s.abort(), t.delete(e);
    }
    const i = Q(this.options[e] !== void 0 ? this.options[e] : {}, Q({
      onProgress: this.progressHandler
    }, this.o.ajax));
    i.prepareData && (i.data = i.prepareData.call(this, i.data));
    const r = new je(i);
    t.set(e, r);
    const o = r.send();
    return o.finally(() => {
      r.destruct(), t.delete(e), this.progressHandler(100);
    }).catch(() => null), o.then((s) => s.json()).then((s) => {
      if (s && !this.isSuccess(s))
        throw new Error(this.getMessage(s));
      return s;
    });
  }
  onProgress(e) {
    this.progressHandler = e;
  }
  /**
   * Load permissions for path and source
   */
  async permissions(e, t) {
    return this.o.permissions ? (this.o.permissions.data.path = e, this.o.permissions.data.source = t, this.o.permissions.url ? this.get("permissions").then((i) => {
      if (this.parent.isInDestruct)
        throw $t();
      let r = this.o.permissions.process;
      if (r || (r = this.o.ajax.process), r) {
        const o = r.call(self, i);
        o.data.permissions && (this.parent.events.fire(this, "changePermissions", this.__currentPermissions, o.data.permissions), this.__currentPermissions = o.data.permissions);
      }
      return this.__currentPermissions;
    }) : null) : null;
  }
  canI(e) {
    const t = "allow" + e, i = this.o.permissionsPresets[t];
    return i !== void 0 ? i : this.__currentPermissions == null || this.__currentPermissions[t] === void 0 || this.__currentPermissions[t];
  }
  __items(e, t, i, r) {
    const o = this.options;
    return o.items ? (o.items.data.path = e, o.items.data.source = t, o.items.data.mods = i, this.get("items").then((s) => {
      let a = this.o.items.process;
      return a || (a = this.o.ajax.process), a && (s = a.call(self, s)), r(s);
    })) : Promise.reject(Error("Set Items api options"));
  }
  /**
   * Load items list by path and source
   */
  items(e, t, i = {}) {
    return this.__items(e, t, i, (r) => this.generateItemsList(r.data.sources, i));
  }
  /**
   * Load items list by path and source
   */
  itemsEx(e, t, i = {}) {
    const r = (o) => o.reduce((s, a) => s + a.files.length, 0);
    return this.__items(e, t, i, (o) => ({
      items: this.generateItemsList(o.data.sources, i),
      loadedTotal: r(o.data.sources)
    }));
  }
  generateItemsList(e, t = {}) {
    const i = [], r = (s) => s.type === "folder" || !t.onlyImages || s.isImage === void 0 || s.isImage, o = (s) => {
      var a;
      return !(!((a = t.filterWord) === null || a === void 0) && a.length) || this.o.filter === void 0 || this.o.filter(s, t.filterWord);
    };
    return e.forEach((s) => {
      if (s.files && s.files.length) {
        const { sort: a } = this.o;
        y(a) && t.sortBy && s.files.sort((c, d) => a(c, d, t.sortBy)), s.files.forEach((c) => {
          o(c) && r(c) && i.push(Mi.create({
            ...c,
            sourceName: s.name,
            source: s
          }));
        });
      }
    }), i;
  }
  async tree(e, t) {
    return e = Ko(e), this.o.folder ? (await this.permissions(e, t), this.o.folder.data.path = e, this.o.folder.data.source = t, this.get("folder").then((i) => {
      let r = this.o.folder.process;
      return r || (r = this.o.ajax.process), r && (i = r.call(self, i)), i.data.sources;
    })) : Promise.reject(Error("Set Folder Api options"));
  }
  /**
   * Get path by url. You can use this method in another modules
   */
  getPathByUrl(e) {
    return Vo("options.getLocalFileByUrl.data.url", e, this), this.get("getLocalFileByUrl").then((t) => {
      if (this.isSuccess(t))
        return t.data;
      throw z(this.getMessage(t));
    });
  }
  /**
   * Create a directory on the server
   *
   * @param name - Name the new folder
   * @param path - Relative directory in which you want create a folder
   * @param source - Server source key
   */
  createFolder(e, t, i) {
    const { create: r } = this.o;
    if (!r)
      throw z("Set Create api options");
    return r.data.source = i, r.data.path = t, r.data.name = e, this.get("create").then((o) => {
      if (this.isSuccess(o))
        return !0;
      throw z(this.getMessage(o));
    });
  }
  /**
   * Move a file / directory on the server
   *
   * @param filepath - The relative path to the file / folder source
   * @param path - Relative to the directory where you want to move the file / folder
   */
  move(e, t, i, r) {
    const o = r ? "fileMove" : "folderMove", s = this.options[o];
    if (!s)
      throw z("Set Move api options");
    return s.data.from = e, s.data.path = t, s.data.source = i, this.get(o).then((a) => {
      if (this.isSuccess(a))
        return !0;
      throw z(this.getMessage(a));
    });
  }
  /**
   * Deleting item
   *
   * @param path - Relative path
   * @param file - The filename
   * @param source - Source
   */
  remove(e, t, i, r) {
    const o = this.o[e];
    if (!o)
      throw z(`Set "${e}" api options`);
    return o.data.path = t, o.data.name = i, o.data.source = r, this.get(e).then((s) => (o.process && (s = o.process.call(this, s)), this.getMessage(s)));
  }
  /**
   * Deleting a file
   *
   * @param path - Relative path
   * @param file - The filename
   * @param source - Source
   */
  fileRemove(e, t, i) {
    return this.remove("fileRemove", e, t, i);
  }
  /**
   * Deleting a folder
   *
   * @param path - Relative path
   * @param file - The filename
   * @param source - Source
   */
  folderRemove(e, t, i) {
    return this.remove("folderRemove", e, t, i);
  }
  /**
   * Rename action
   *
   * @param path - Relative path
   * @param name - Old name
   * @param newname - New name
   * @param source - Source
   */
  rename(e, t, i, r, o) {
    const s = this.o[e];
    if (!s)
      throw z(`Set "${e}" api options`);
    return s.data.path = t, s.data.name = i, s.data.newname = r, s.data.source = o, this.get(e).then((a) => (s.process && (a = s.process.call(self, a)), this.getMessage(a)));
  }
  /**
   * Rename folder
   */
  folderRename(e, t, i, r) {
    return this.rename("folderRename", e, t, i, r);
  }
  /**
   * Rename file
   */
  fileRename(e, t, i, r) {
    return this.rename("fileRename", e, t, i, r);
  }
  changeImage(e, t, i, r, o, s) {
    this.o[e] || (this.o[e] = {
      data: {}
    });
    const a = this.o[e];
    return a.data === void 0 && (a.data = {
      action: e
    }), a.data.newname = o || r, s && (a.data.box = s), a.data.path = t, a.data.name = r, a.data.source = i, this.get(e).then(() => !0);
  }
  /**
   * Send command to server to crop image
   */
  crop(e, t, i, r, o) {
    return this.changeImage("crop", e, t, i, r, o);
  }
  /**
   * Send command to server to resize image
   */
  resize(e, t, i, r, o) {
    return this.changeImage("resize", e, t, i, r, o);
  }
  getMessage(e) {
    return this.options.getMessage(e);
  }
  isSuccess(e) {
    return this.options.isSuccess(e);
  }
  destruct() {
    this.__ajaxInstances.forEach((e) => e.destruct()), this.__ajaxInstances.clear();
  }
};
Tn = gl([
  k
], Tn);
const vl = Tn;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function bl(n, e) {
  return new vl(n, e);
}
function wl(n) {
  return new Pi(n);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function bs(n, e, t) {
  return n.dataProvider.fileRemove(n.state.currentPath, e, t).then((i) => {
    n.status(i || n.i18n('File "%s" was deleted', e), !0);
  }).catch(n.status);
}
const yl = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"/> </svg> `, _l = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24"> <g transform="translate(-251.000000, -443.000000)"> <g transform="translate(215.000000, 119.000000)"/> <path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"/> </g> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.imageeditor = {
  min_width: 20,
  min_height: 20,
  closeAfterSave: !1,
  width: "85%",
  height: "85%",
  crop: !0,
  resize: !0,
  resizeUseRatio: !0,
  resizeMinWidth: 20,
  resizeMinHeight: 20,
  cropUseRatio: !0,
  cropDefaultWidth: "70%",
  cropDefaultHeight: "70%"
};
x.set("crop", yl).set("resize", _l);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const X = "jodit-image-editor", Rr = x.get.bind(x), tn = (n, e = "jodti-image-editor_active") => n ? e : "", Sl = (n, e) => {
  const t = n.i18n.bind(n), i = (r, o, s = !0) => `<div class="jodit-form__group">
			<label class="jodit-switcher-wrapper">
				<span class='jodit-switcher'>
					<input ${tn(s, "checked")} data-ref="${o}" type="checkbox"/>
					<span class="jodit-switcher__slider"></span>
				</span>
				<span>${t(r)}</span>
			</label>
	</div>`;
  return n.create.fromHTML(`<form class="${X} jodit-properties">
		<div class="jodit-grid jodit-grid_xs-column">
			<div class="jodit_col-lg-3-4 jodit_col-sm-5-5">
			${e.resize ? `<div class="${X}__area ${X}__area_resize ${X}_active">
							<div data-ref="resizeBox" class="${X}__box"></div>
							<div class="${X}__resizer">
								<i class="jodit_bottomright"></i>
							</div>
						</div>` : ""}
			${e.crop ? `<div class="${X}__area ${X}__area_crop ${tn(!e.resize)}">
							<div data-ref="cropBox" class="${X}__box">
								<div class="${X}__croper">
									<i class="jodit_bottomright"></i>
									<i class="${X}__sizes"></i>
								</div>
							</div>
						</div>` : ""}
			</div>
			<div class="jodit_col-lg-1-4 jodit_col-sm-5-5">
			${e.resize ? `<div data-area="resize" class="${X}__slider ${X}_active">
							<div class="${X}__slider-title">
								${Rr("resize")}
								${t("Resize")}
							</div>
							<div class="${X}__slider-content">
								<div class="jodit-form__group">
									<label>
										${t("Width")}
									</label>
									<input type="number" data-ref="widthInput" class="jodit-input"/>
								</div>
								<div class="jodit-form__group">
									<label>
										${t("Height")}
									</label>
									<input type="number" data-ref="heightInput" class="jodit-input"/>
								</div>
								${i("Keep Aspect Ratio", "keepAspectRatioResize")}
							</div>
						</div>` : ""}
			${e.crop ? `<div data-area="crop" class="${X}__slider ${tn(!e.resize)}'">
							<div class="${X}__slider-title">
								${Rr("crop")}
								${t("Crop")}
							</div>
							<div class="${X}__slider-content">
								${i("Keep Aspect Ratio", "keepAspectRatioCrop")}
							</div>
						</div>` : ""}
			</div>
		</div>
	</form>`);
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Qe = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, wi;
const re = "jodit-image-editor", ve = {
  resize: "resize",
  crop: "crop"
};
let Se = wi = class extends Te {
  /** @override */
  className() {
    return "ImageEditor";
  }
  get o() {
    return this.options;
  }
  /**
   * Hide image editor
   */
  hide() {
    this._dialog.close();
  }
  /**
   * Open image editor
   * @example
   * ```javascript
   * const jodit = Jodit.make('.editor', {
   *		 imageeditor: {
   *				 crop: false,
   *				 closeAfterSave: true,
   *				 width: 500
   *		 }
   * });
   * jodit.imageeditor.open('https://xdsoft.net/jodit/images/test.png', function (name, data, success, failed) {
   *		 var img = jodit.node.c('img');
   *		 img.setAttribute('src', 'https://xdsoft.net/jodit/images/test.png');
   *		 if (box.action !== 'resize') {
   *					return failed('Sorry it is work only in resize mode. For croping use FileBrowser');
   *		 }
   *		 img.style.width = data.w;
   *		 img.style.height = data.h;
   *		 jodit.s.insertNode(img);
   *		 success();
   * });
   * ```
   */
  open(e, t) {
    return this.j.async.promise((i) => {
      const r = (/* @__PURE__ */ new Date()).getTime();
      this.image = this.j.c.element("img"), j("img,.jodit-icon_loader", this.resize_box).forEach(l.safeRemove), j("img,.jodit-icon_loader", this.crop_box).forEach(l.safeRemove), _(this.cropHandler, "background", "transparent"), this.onSave = t, this.resize_box.appendChild(this.j.c.element("i", { class: "jodit-icon_loader" })), this.crop_box.appendChild(this.j.c.element("i", { class: "jodit-icon_loader" })), /\?/.test(e) ? e += "&_tst=" + r : e += "?_tst=" + r, this.image.setAttribute("src", e), this._dialog.open();
      const { widthInput: o, heightInput: s } = _e(this.editor), a = () => {
        this.isDestructed || (this.image.removeEventListener("load", a), this.naturalWidth = this.image.naturalWidth, this.naturalHeight = this.image.naturalHeight, o.value = this.naturalWidth.toString(), s.value = this.naturalHeight.toString(), this.ratio = this.naturalWidth / this.naturalHeight, this.resize_box.appendChild(this.image), this.cropImage = this.image.cloneNode(!0), this.crop_box.appendChild(this.cropImage), l.safeRemove.apply(null, j(".jodit-icon_loader", this.editor)), this.activeTab === ve.crop && this.showCrop(), this.j.e.fire(this.resizeHandler, "updatesize"), this.j.e.fire(this.cropHandler, "updatesize"), this._dialog.setPosition(), this.j.e.fire("afterImageEditor"), i(this._dialog));
      };
      this.image.addEventListener("load", a), this.image.complete && a();
    });
  }
  onTitleModeClick(e) {
    const t = this, i = e.target, r = i == null ? void 0 : i.parentElement;
    if (!r)
      return;
    j(`.${re}__slider,.${re}__area`, t.editor).forEach((s) => s.classList.remove(`${re}_active`)), r.classList.add(`${re}_active`), this.activeTab = g(r, "-area") || ve.resize;
    const o = t.editor.querySelector(`.${re}__area.${re}__area_` + t.activeTab);
    o && o.classList.add(`${re}_active`), t.activeTab === ve.crop && t.showCrop();
  }
  onChangeSizeInput(e) {
    const t = this, i = e.target, { widthInput: r, heightInput: o } = _e(this.editor), s = g(i, "data-ref") === "widthInput", a = parseInt(i.value, 10), c = s ? t.o.min_width : t.o.min_height, d = s ? t.o.min_height : t.o.min_width;
    let u;
    a > c && (_(t.image, s ? "width" : "height", a), t.resizeUseRatio && (u = Math.round(s ? a / t.ratio : a * t.ratio), u > d && (_(t.image, s ? "height" : "width", u), s ? o.value = u.toString() : r.value = u.toString()))), this.j.e.fire(t.resizeHandler, "updatesize");
  }
  onResizeHandleMouseDown(e) {
    const t = this;
    t.target = e.target, e.preventDefault(), e.stopImmediatePropagation(), t.clicked = !0, t.start_x = e.clientX, t.start_y = e.clientY, t.activeTab === ve.crop ? (t.top_x = _(t.cropHandler, "left"), t.top_y = _(t.cropHandler, "top"), t.width = t.cropHandler.offsetWidth, t.height = t.cropHandler.offsetHeight) : (t.width = t.image.offsetWidth, t.height = t.image.offsetHeight), t.j.e.on(this.j.ow, "mousemove", this.onGlobalMouseMove).one(this.j.ow, "mouseup", this.onGlobalMouseUp);
  }
  onGlobalMouseUp(e) {
    this.clicked && (this.clicked = !1, e.stopImmediatePropagation(), this.j.e.off(this.j.ow, "mousemove", this.onGlobalMouseMove));
  }
  onGlobalMouseMove(e) {
    const t = this;
    if (!t.clicked)
      return;
    const { widthInput: i, heightInput: r } = _e(this.editor);
    t.diff_x = e.clientX - t.start_x, t.diff_y = e.clientY - t.start_y, t.activeTab === ve.resize && t.resizeUseRatio || t.activeTab === ve.crop && t.cropUseRatio ? t.diff_x ? (t.new_w = t.width + t.diff_x, t.new_h = Math.round(t.new_w / t.ratio)) : (t.new_h = t.height + t.diff_y, t.new_w = Math.round(t.new_h * t.ratio)) : (t.new_w = t.width + t.diff_x, t.new_h = t.height + t.diff_y), t.activeTab === ve.resize ? (t.new_w > t.o.resizeMinWidth && (_(t.image, "width", t.new_w + "px"), i.value = t.new_w.toString()), t.new_h > t.o.resizeMinHeight && (_(t.image, "height", t.new_h + "px"), r.value = t.new_h.toString()), this.j.e.fire(t.resizeHandler, "updatesize")) : (t.target !== t.cropHandler ? (t.top_x + t.new_w > t.cropImage.offsetWidth && (t.new_w = t.cropImage.offsetWidth - t.top_x), t.top_y + t.new_h > t.cropImage.offsetHeight && (t.new_h = t.cropImage.offsetHeight - t.top_y), _(t.cropHandler, {
      width: t.new_w,
      height: t.new_h
    })) : (t.top_x + t.diff_x + t.cropHandler.offsetWidth > t.cropImage.offsetWidth && (t.diff_x = t.cropImage.offsetWidth - t.top_x - t.cropHandler.offsetWidth), _(t.cropHandler, "left", t.top_x + t.diff_x), t.top_y + t.diff_y + t.cropHandler.offsetHeight > t.cropImage.offsetHeight && (t.diff_y = t.cropImage.offsetHeight - t.top_y - t.cropHandler.offsetHeight), _(t.cropHandler, "top", t.top_y + t.diff_y)), this.j.e.fire(t.cropHandler, "updatesize"));
  }
  constructor(e) {
    super(e), this.resizeUseRatio = !0, this.cropUseRatio = !0, this.clicked = !1, this.start_x = 0, this.start_y = 0, this.top_x = 0, this.top_y = 0, this.width = 0, this.height = 0, this.activeTab = ve.resize, this.naturalWidth = 0, this.naturalHeight = 0, this.ratio = 0, this.new_h = 0, this.new_w = 0, this.diff_x = 0, this.diff_y = 0, this.cropBox = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    }, this.resizeBox = {
      w: 0,
      h: 0
    }, this.calcCropBox = () => {
      const o = this.crop_box.parentNode, s = o.offsetWidth * 0.8, a = o.offsetHeight * 0.8;
      let c = s, d = a;
      const { naturalWidth: u, naturalHeight: h } = this;
      s > u && a > h ? (c = u, d = h) : this.ratio > s / a ? (c = s, d = h * (s / u)) : (c = u * (a / h), d = a), _(this.crop_box, {
        width: c,
        height: d
      });
    }, this.showCrop = () => {
      if (!this.cropImage)
        return;
      this.calcCropBox();
      const o = this.cropImage.offsetWidth || this.image.offsetWidth || this.image.naturalWidth;
      this.new_w = wi.calcValueByPercent(o, this.o.cropDefaultWidth);
      const s = this.cropImage.offsetHeight || this.image.offsetHeight || this.image.naturalHeight;
      this.cropUseRatio ? this.new_h = this.new_w / this.ratio : this.new_h = wi.calcValueByPercent(s, this.o.cropDefaultHeight), _(this.cropHandler, {
        backgroundImage: "url(" + g(this.cropImage, "src") + ")",
        width: this.new_w,
        height: this.new_h,
        left: o / 2 - this.new_w / 2,
        top: s / 2 - this.new_h / 2
      }), this.j.e.fire(this.cropHandler, "updatesize");
    }, this.updateCropBox = () => {
      if (!this.cropImage)
        return;
      const o = this.cropImage.offsetWidth / this.naturalWidth, s = this.cropImage.offsetHeight / this.naturalHeight;
      this.cropBox.x = _(this.cropHandler, "left") / o, this.cropBox.y = _(this.cropHandler, "top") / s, this.cropBox.w = this.cropHandler.offsetWidth / o, this.cropBox.h = this.cropHandler.offsetHeight / s, this.sizes.textContent = this.cropBox.w.toFixed(0) + "x" + this.cropBox.h.toFixed(0);
    }, this.updateResizeBox = () => {
      this.resizeBox.w = this.image.offsetWidth || this.naturalWidth, this.resizeBox.h = this.image.offsetHeight || this.naturalHeight;
    }, this.setHandlers = () => {
      const o = this, { widthInput: s, heightInput: a } = _e(this.editor);
      o.j.e.on([
        o.editor.querySelector(".jodit_bottomright"),
        o.cropHandler
      ], `mousedown.${re}`, this.onResizeHandleMouseDown).on(this.j.ow, `resize.${re}`, () => {
        this.j.e.fire(o.resizeHandler, "updatesize"), o.showCrop(), this.j.e.fire(o.cropHandler, "updatesize");
      }), o.j.e.on(U(this.editor.querySelectorAll(`.${re}__slider-title`)), "click", this.onTitleModeClick).on([s, a], "input", this.onChangeSizeInput);
      const { keepAspectRatioResize: c, keepAspectRatioCrop: d } = _e(this.editor);
      c && c.addEventListener("change", () => {
        this.resizeUseRatio = c.checked;
      }), d && d.addEventListener("change", () => {
        this.cropUseRatio = d.checked;
      }), o.j.e.on(o.resizeHandler, "updatesize", () => {
        _(o.resizeHandler, {
          top: 0,
          left: 0,
          width: o.image.offsetWidth || o.naturalWidth,
          height: o.image.offsetHeight || o.naturalHeight
        }), this.updateResizeBox();
      }).on(o.cropHandler, "updatesize", () => {
        if (!o.cropImage)
          return;
        let u = _(o.cropHandler, "left"), h = _(o.cropHandler, "top"), f = o.cropHandler.offsetWidth, p = o.cropHandler.offsetHeight;
        u < 0 && (u = 0), h < 0 && (h = 0), u + f > o.cropImage.offsetWidth && (f = o.cropImage.offsetWidth - u, o.cropUseRatio && (p = f / o.ratio)), h + p > o.cropImage.offsetHeight && (p = o.cropImage.offsetHeight - h, o.cropUseRatio && (f = p * o.ratio)), _(o.cropHandler, {
          width: f,
          height: p,
          left: u,
          top: h,
          backgroundPosition: -u - 1 + "px " + (-h - 1) + "px",
          backgroundSize: o.cropImage.offsetWidth + "px " + o.cropImage.offsetHeight + "px"
        }), o.updateCropBox();
      }), Object.values(o.buttons).forEach((u) => {
        u.onAction(() => {
          const h = {
            action: o.activeTab,
            box: o.activeTab === ve.resize ? o.resizeBox : o.cropBox
          };
          switch (u) {
            case o.buttons.saveas:
              o.j.prompt("Enter new name", "Save in new file", (f) => {
                if (!K(f))
                  return o.j.alert("The name should not be empty"), !1;
                o.onSave(f, h, o.hide, (p) => {
                  o.j.alert(p.message);
                });
              });
              break;
            case o.buttons.save:
              o.onSave(void 0, h, o.hide, (f) => {
                o.j.alert(f.message);
              });
              break;
            case o.buttons.reset:
              o.activeTab === ve.resize ? (_(o.image, {
                width: null,
                height: null
              }), s.value = o.naturalWidth.toString(), a.value = o.naturalHeight.toString(), o.j.e.fire(o.resizeHandler, "updatesize")) : o.showCrop();
              break;
          }
        });
      });
    }, this.options = e && e.o && e.o.imageeditor ? e.o.imageeditor : b.defaultOptions.imageeditor;
    const t = this.options;
    this.resizeUseRatio = t.resizeUseRatio, this.cropUseRatio = t.cropUseRatio, this.buttons = {
      reset: pe(this.j, "update", "Reset"),
      save: pe(this.j, "save", "Save"),
      saveas: pe(this.j, "save", "Save as ...")
    }, this.activeTab = t.resize ? ve.resize : ve.crop, this.editor = Sl(this.j, this.options);
    const { resizeBox: i, cropBox: r } = _e(this.editor);
    this.resize_box = i, this.crop_box = r, this.sizes = this.editor.querySelector(`.${re}__area.${re}__area_crop .jodit-image-editor__sizes`), this.resizeHandler = this.editor.querySelector(`.${re}__resizer`), this.cropHandler = this.editor.querySelector(`.${re}__croper`), this._dialog = this.j.dlg({
      buttons: ["fullsize", "dialog.close"]
    }), this._dialog.setContent(this.editor), this._dialog.setSize(this.o.width, this.o.height), this._dialog.setHeader([
      this.buttons.reset,
      this.buttons.save,
      this.buttons.saveas
    ]), this.setHandlers();
  }
  /** @override */
  destruct() {
    this.isDestructed || (this._dialog && !this._dialog.isInDestruct && this._dialog.destruct(), l.safeRemove(this.editor), this.j.e && this.j.e.off(this.j.ow, "mousemove", this.onGlobalMouseMove).off(this.j.ow, "mouseup", this.onGlobalMouseUp).off(this.ow, `.${re}`).off(`.${re}`), super.destruct());
  }
};
Se.calcValueByPercent = (n, e) => {
  const t = e.toString(), i = parseFloat(n.toString());
  let r;
  return r = /^[-+]?[0-9]+(px)?$/.exec(t), r ? parseInt(t, 10) : (r = /^([-+]?[0-9.]+)%$/.exec(t), r ? Math.round(i * (parseFloat(r[1]) / 100)) : i || 0);
};
Qe([
  k
], Se.prototype, "hide", null);
Qe([
  k
], Se.prototype, "open", null);
Qe([
  k
], Se.prototype, "onTitleModeClick", null);
Qe([
  Oe(),
  k
], Se.prototype, "onChangeSizeInput", null);
Qe([
  k
], Se.prototype, "onResizeHandleMouseDown", null);
Qe([
  k
], Se.prototype, "onGlobalMouseUp", null);
Qe([
  ii(10)
], Se.prototype, "onGlobalMouseMove", null);
Se = wi = Qe([
  D
], Se);
function ws(n, e, t, i, r, o) {
  return this.getInstance("ImageEditor", this.o).open(n, (s, a, c, d) => he(a.action === "resize" ? this.dataProvider.resize : this.dataProvider.crop, t, i, e, s, a.box).then((u) => {
    u && (c(), r && r());
  }).catch((u) => {
    d(u), o && o(u);
  }));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Ft = "jodit-file-browser-preview", Pr = (n = "next", e = "right") => `<div class="${Ft}__navigation ${Ft}__navigation_arrow_${n}">` + x.get("angle-" + e) + "</a>", Cl = (n) => {
  if (!n.o.contextMenu)
    return () => {
    };
  const e = wl(n);
  return (t) => {
    const i = jt(t.target, n.container);
    if (!i)
      return;
    let r = i;
    const o = n.options, s = (a) => g(r, a) || "";
    return n.async.setTimeout(() => {
      const a = ys(i, hr(n));
      a && (n.state.activeElements = [a], e.show(t.clientX, t.clientY, [
        s("data-is-file") !== "1" && o.editImage && (n.dataProvider.canI("ImageResize") || n.dataProvider.canI("ImageCrop")) ? {
          icon: "pencil",
          title: "Edit",
          exec: () => ws.call(n, s("href"), s("data-name"), s("data-path"), s("data-source"))
        } : !1,
        n.dataProvider.canI("FileRename") ? {
          icon: "italic",
          title: "Rename",
          exec: () => {
            n.e.fire("fileRename.filebrowser", s("data-name"), s("data-path"), s("data-source"));
          }
        } : !1,
        n.dataProvider.canI("FileRemove") ? {
          icon: "bin",
          title: "Delete",
          exec: async () => {
            try {
              await bs(n, s("data-name"), s("data-source"));
            } catch (c) {
              return n.status(c);
            }
            return n.state.activeElements = [], Re(n).catch(n.status);
          }
        } : !1,
        o.preview ? {
          icon: "eye",
          title: "Preview",
          exec: () => {
            const c = n.dlg({
              buttons: ["fullsize", "dialog.close"]
            }), d = n.c.div(Ft, '<div class="jodit-icon_loader"></div>'), u = n.c.div(Ft + "__box"), h = n.c.fromHTML(Pr()), f = n.c.fromHTML(Pr("prev", "left")), p = (m) => {
              const w = n.c.element("img");
              w.setAttribute("src", m);
              const C = () => {
                var I;
                n.isInDestruct || (n.e.off(w, "load"), l.detach(d), o.showPreviewNavigation && (l.prevWithClass(r, n.files.getFullElName("item")) && d.appendChild(f), l.nextWithClass(r, n.files.getFullElName("item")) && d.appendChild(h)), d.appendChild(u), u.appendChild(w), c.setPosition(), (I = n == null ? void 0 : n.events) === null || I === void 0 || I.fire("previewOpenedAndLoaded"));
              };
              n.e.on(w, "load", C), w.complete && C();
            };
            n.e.on([h, f], "click", function() {
              if (this === h ? r = l.nextWithClass(r, n.files.getFullElName("item")) : r = l.prevWithClass(r, n.files.getFullElName("item")), !r)
                throw z("Need element");
              l.detach(d), l.detach(u), d.innerHTML = '<div class="jodit-icon_loader"></div>', p(s("href"));
            }), n.e.on("beforeDestruct", () => {
              c.destruct();
            }), c.container.classList.add(Ft + "__dialog"), c.setContent(d), c.setPosition(), c.open(), p(s("href")), n.events.on("beforeDestruct", () => {
              c.destruct();
            }).fire("previewOpened");
          }
        } : !1,
        {
          icon: "upload",
          title: "Download",
          exec: () => {
            const c = s("href");
            c && n.ow.open(c);
          }
        }
      ]));
    }, n.defaultTimeout), n.e.on("beforeClose", () => {
      e.close();
    }).on("beforeDestruct", () => e.destruct()), t.stopPropagation(), t.preventDefault(), !1;
  };
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const jt = (n, e, t = "a") => l.closest(n, (i) => l.isTag(i, t), e), ys = (n, e) => {
  const { key: t } = n.dataset, { item: i } = e[t || ""];
  return i;
};
function kl() {
  let n = !1;
  const e = hr(this), t = this;
  t.e.on(t.tree.container, "dragstart", (i) => {
    const r = jt(i.target, t.container);
    r && t.o.moveFolder && (n = r);
  }).on(t.tree.container, "drop", (i) => {
    if ((t.o.moveFile || t.o.moveFolder) && n) {
      let r = g(n, "-path") || "";
      if (!t.o.moveFolder && n.classList.contains(this.tree.getFullElName("item")) || n.classList.contains(this.files.getFullElName("item")) && (r += g(n, "-name"), !t.o.moveFile))
        return !1;
      const o = jt(i.target, t.container);
      if (!o)
        return;
      t.dataProvider.move(r, g(o, "-path") || "", g(o, "-source") || "", n.classList.contains(this.files.getFullElName("item"))).then(() => Re(this)).catch(t.status), n = !1;
    }
  }).on(t.files.container, "contextmenu", Cl(t)).on(t.files.container, "click", (i) => {
    fn(i) || (this.state.activeElements = []);
  }).on(t.files.container, "click", (i) => {
    const r = jt(i.target, t.container);
    if (!r)
      return;
    const o = ys(r, e);
    if (o)
      return fn(i) ? t.state.activeElements = [
        ...t.state.activeElements,
        o
      ] : t.state.activeElements = [o], i.stopPropagation(), !1;
  }).on(t.files.container, "dragstart", (i) => {
    if (t.o.moveFile) {
      const r = jt(i.target, t.container);
      if (!r)
        return;
      n = r;
    }
  }).on(t.container, "drop", (i) => i.preventDefault());
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Il() {
  const n = this.state, e = this.dataProvider, t = this;
  t.e.on("view.filebrowser", (i) => {
    i !== n.view && (n.view = i);
  }).on("sort.filebrowser", (i) => {
    i !== n.sortBy && (n.sortBy = i, Ht(t));
  }).on("filter.filebrowser", (i) => {
    i !== n.filterWord && (n.filterWord = i, Ht(t));
  }).on("openFolder.filebrowser", (i) => {
    let r;
    i.name === ".." ? r = i.path.split("/").filter((o) => o.length).slice(0, -1).join("/") : r = wt(i.path, i.name), t.state.currentPath = r, t.state.currentSource = i.name === "." ? vs : i.source;
  }).on("removeFolder.filebrowser", (i) => {
    t.confirm("Are you sure?", "Delete", (r) => {
      r && e.folderRemove(i.path, i.name, i.source).then((o) => (t.status(o, !0), Re(t))).catch(t.status);
    });
  }).on("renameFolder.filebrowser", (i) => {
    t.prompt("Enter new name", "Rename", (r) => {
      if (!cn(r))
        return t.status(t.i18n("Enter new name")), !1;
      e.folderRename(i.path, i.name, r, i.source).then((o) => (t.state.activeElements = [], t.status(o, !0), Re(t))).catch(t.status);
    }, "type name", i.name);
  }).on("addFolder.filebrowser", (i) => {
    t.prompt("Enter Directory name", "Create directory", (r) => {
      e.createFolder(r, i.path, i.source).then(() => Re(t)).catch(t.status);
    }, "type name");
  }).on("fileRemove.filebrowser", () => {
    t.state.activeElements.length && t.confirm("Are you sure?", "", (i) => {
      if (i) {
        const r = [];
        t.state.activeElements.forEach((o) => {
          r.push(bs(t, o.file || o.name || "", o.sourceName));
        }), t.state.activeElements = [], Promise.all(r).then(() => Re(t).catch(t.status), t.status);
      }
    });
  }).on("edit.filebrowser", () => {
    if (t.state.activeElements.length === 1) {
      const [i] = this.state.activeElements;
      ws.call(t, i.fileURL, i.file || "", i.path, i.sourceName);
    }
  }).on("fileRename.filebrowser", (i, r, o) => {
    t.state.activeElements.length === 1 && t.prompt("Enter new name", "Rename", (s) => {
      if (!cn(s))
        return t.status(t.i18n("Enter new name")), !1;
      e.fileRename(r, i, s, o).then((a) => {
        t.state.activeElements = [], t.status(a, !0), Ht(t);
      }).catch(t.status);
    }, "type name", i);
  }).on("update.filebrowser", () => {
    Re(this).then(this.status, this.status);
  });
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const El = "default";
function zl() {
  const n = hr(this), { state: e, files: t, create: i, options: r } = this, o = (s) => {
    const a = s.uniqueHashKey;
    if (n[a])
      return n[a].elm;
    const c = i.fromHTML(r.getThumbTemplate.call(this, s, s.source, s.sourceName.toString()));
    return c.dataset.key = a, n[a] = {
      item: s,
      elm: c
    }, n[a].elm;
  };
  e.on(["change.currentPath", "change.currentSource"], this.async.debounce(() => {
    this.o.saveStateInStorage && this.o.saveStateInStorage.storeLastOpenedFolder && this.storage.set("currentPath", this.state.currentPath).set("currentSource", this.state.currentSource), Re(this).catch(this.status);
  }, this.defaultTimeout)).on("beforeChange.activeElements", () => {
    e.activeElements.forEach((s) => {
      const a = s.uniqueHashKey, { elm: c } = n[a];
      c && c.classList.remove(t.getFullElName("item", "active", !0));
    });
  }).on("change.activeElements", () => {
    this.e.fire("changeSelection"), e.activeElements.forEach((s) => {
      const a = s.uniqueHashKey, { elm: c } = n[a];
      c && c.classList.add(t.getFullElName("item", "active", !0));
    });
  }).on("change.view", () => {
    t.setMod("view", e.view), this.o.saveStateInStorage && this.o.saveStateInStorage.storeView && this.storage.set("view", e.view);
  }).on("change.sortBy", () => {
    this.o.saveStateInStorage && this.o.saveStateInStorage.storeSortBy && this.storage.set("sortBy", e.sortBy);
  }).on("change.elements", this.async.debounce(() => {
    l.detach(t.container), e.elements.length ? e.elements.forEach((s) => {
      this.files.container.appendChild(o(s));
    }) : t.container.appendChild(i.div(this.componentName + "_no-files_true", this.i18n("There are no files")));
  }, this.defaultTimeout)).on("change.sources", this.async.debounce(() => {
    l.detach(this.tree.container), e.sources.forEach((s) => {
      const a = s.name;
      if (a && a !== El && this.tree.container.appendChild(i.div(this.tree.getFullElName("source-title"), a)), s.folders.forEach((c) => {
        const d = i.a(this.tree.getFullElName("item"), {
          draggable: "draggable",
          href: "#",
          "data-path": wt(s.path, c + "/"),
          "data-name": c,
          "data-source": a,
          "data-source-path": s.path
        }, i.span(this.tree.getFullElName("item-title"), c)), u = (h) => (f) => {
          this.e.fire(`${h}.filebrowser`, {
            name: c,
            path: wt(s.path + "/"),
            source: a
          }), f.stopPropagation(), f.preventDefault();
        };
        if (this.e.on(d, "click", u("openFolder")), this.tree.container.appendChild(d), !(c === ".." || c === ".")) {
          if (r.renameFolder && this.dataProvider.canI("FolderRename")) {
            const h = pe(this, {
              icon: { name: "pencil" },
              name: "rename",
              tooltip: "Rename",
              size: "tiny"
            });
            h.onAction(u("renameFolder")), d.appendChild(h.container);
          }
          if (r.deleteFolder && this.dataProvider.canI("FolderRemove")) {
            const h = pe(this, {
              icon: { name: "cancel" },
              name: "remove",
              tooltip: "Delete",
              size: "tiny"
            });
            h.onAction(u("removeFolder")), d.appendChild(h.container);
          }
        }
      }), r.createNewFolder && this.dataProvider.canI("FolderCreate")) {
        const c = pe(this, "plus", "Add folder", "secondary");
        c.onAction(() => {
          this.e.fire("addFolder", {
            path: wt(s.path + "/"),
            source: a
          });
        }), this.tree.append(c);
      }
    });
  }, this.defaultTimeout));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Tl extends ge {
  className() {
    return "FileBrowserFiles";
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class xl extends ge {
  className() {
    return "FileBrowserTree";
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var dt = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let De = class extends At {
  /** @override */
  className() {
    return "FileBrowser";
  }
  get dataProvider() {
    return bl(this, this.options);
  }
  onSelect(e) {
    return () => {
      if (this.state.activeElements.length) {
        const t = [], i = [];
        this.state.activeElements.forEach((o) => {
          const s = o.fileURL;
          s && (t.push(s), i.push(o.isImage || !1));
        }), this.close();
        const r = {
          baseurl: "",
          files: t,
          isImages: i
        };
        y(e) && e(r), this.close();
      }
      return !1;
    };
  }
  get _dialog() {
    var e;
    const t = this.dlg({
      minWidth: Math.min(700, screen.width),
      minHeight: 300,
      buttons: (e = this.o.headerButtons) !== null && e !== void 0 ? e : ["fullsize", "dialog.close"]
    });
    return ["beforeClose", "afterClose", "beforeOpen"].forEach((i) => t.events.on(t, i, () => this.e.fire(i))), t.setSize(this.o.width, this.o.height), t;
  }
  /**
   * Container for set/get value
   */
  get storage() {
    return Yt.makeStorage(!!this.o.saveStateInStorage, this.componentName);
  }
  get isOpened() {
    return this._dialog.isOpened && this.browser.style.display !== "none";
  }
  /**
   * It displays a message in the status bar of filebrowser
   *
   * @param message - The message that will be displayed
   * @param success - true It will be shown a message light . If no option is specified ,
   * ßan error will be shown the red
   * @example
   * ```javascript
   * parent.filebrowser.status('There was an error uploading file', false);
   * ```
   */
  status(e, t) {
    !e || bt(e) || (v(e) || (e = e.message), !(!v(e) || !K(e).length) && this.message.message(e, t ? "success" : "error", this.o.howLongShowMsg));
  }
  /**
   * It opens a web browser window
   *
   * @param callback - The function that will be called after the file selection in the browser
   * @param onlyImages - Show only images
   * @example
   * ```javascript
   * var fb = new Jodit.modules.FileBrowser(parent);
   * fb.open(function (data) {
   *     var i;
   *     for (i = 0;i < data.files.length; i += 1) {
   *         parent.s.insertImage(data.baseurl + data.files[i]);
   *     }
   * });
   * ```
   */
  open(e = this.o.defaultCallback, t = !1) {
    return this.state.onlyImages = t, this.async.promise((i, r) => {
      var o;
      if (!this.o.items || !this.o.items.url)
        throw z("Need set options.filebrowser.ajax.url");
      let s = 0;
      this.e.off(this.files.container, "dblclick").on(this.files.container, "dblclick", this.onSelect(e)).on(this.files.container, "touchstart", () => {
        const c = (/* @__PURE__ */ new Date()).getTime();
        c - s < uo && this.onSelect(e)(), s = c;
      }).off("select.filebrowser").on("select.filebrowser", this.onSelect(e));
      const a = this.c.div();
      (o = this.toolbar) === null || o === void 0 || o.appendTo(a), this.__updateToolbarButtons(), this._dialog.open(this.browser, a), this.e.fire("sort.filebrowser", this.state.sortBy), Re(this).then(i, r).finally(() => {
        var c;
        this.isInDestruct || (c = this === null || this === void 0 ? void 0 : this.e) === null || c === void 0 || c.fire("fileBrowserReady.filebrowser");
      });
    }).catch((i) => {
      bt(i);
    });
  }
  __getButtons() {
    var e;
    return ((e = this.o.buttons) !== null && e !== void 0 ? e : []).filter((i) => {
      if (!v(i))
        return !0;
      switch (i) {
        case "filebrowser.upload":
          return this.dataProvider.canI("FileUpload");
        case "filebrowser.edit":
          return this.dataProvider.canI("ImageResize") || this.dataProvider.canI("ImageCrop");
        case "filebrowser.remove":
          return this.dataProvider.canI("FileRemove");
      }
      return !0;
    });
  }
  initUploader(e) {
    var t;
    const i = this, r = (t = e == null ? void 0 : e.options) === null || t === void 0 ? void 0 : t.uploader, o = Q(r || {}, b.defaultOptions.uploader), s = () => Ht(this);
    i.uploader = i.getInstance("Uploader", o), i.uploader.setPath(i.state.currentPath).setSource(i.state.currentSource).bind(i.browser, s, i.errorHandler), this.state.on(["change.currentPath", "change.currentSource"], () => {
      this.uploader.setPath(this.state.currentPath).setSource(this.state.currentSource);
    }), i.e.on("bindUploader.filebrowser", (a) => {
      i.uploader.bind(a, s, i.errorHandler);
    });
  }
  constructor(e) {
    super(e), this.browser = this.c.div(this.componentName), this.status_line = this.c.div(this.getFullElName("status")), this.tree = new xl(this), this.files = new Tl(this), this.state = ki({
      currentPath: "",
      currentSource: vs,
      currentBaseUrl: "",
      activeElements: [],
      elements: [],
      sources: [],
      view: "tiles",
      sortBy: "changed-desc",
      filterWord: "",
      onlyImages: !1
    }), this.errorHandler = (d) => {
      bt(d) || (d instanceof Error ? this.status(this.i18n(d.message)) : this.status(this.dataProvider.getMessage(d)));
    }, this.close = () => {
      this._dialog.close();
    }, this.__prevButtons = [], this.attachEvents(e);
    const t = this;
    t.options = Q(e || {}, b.defaultOptions.filebrowser), t.browser.component = this, t.container = t.browser, t.o.showFoldersPanel && t.browser.appendChild(t.tree.container), t.browser.appendChild(t.files.container), t.browser.appendChild(t.status_line), Il.call(t), kl.call(t), zl.call(t), [
      "getLocalFileByUrl",
      "crop",
      "resize",
      "create",
      "fileMove",
      "folderMove",
      "fileRename",
      "folderRename",
      "fileRemove",
      "folderRemove",
      "folder",
      "items",
      "permissions"
    ].forEach((d) => {
      this.options[d] != null && (this.options[d] = Q(this.options[d], this.o.ajax));
    });
    const { storeView: r, storeSortBy: o, storeLastOpenedFolder: s } = this.o.saveStateInStorage || {
      storeLastOpenedFolder: !1,
      storeView: !1,
      storeSortBy: !1
    }, a = r && this.storage.get("view");
    a && this.o.view == null ? t.state.view = a === "list" ? "list" : "tiles" : t.state.view = t.o.view === "list" ? "list" : "tiles", t.files.setMod("view", t.state.view);
    const c = o && t.storage.get("sortBy");
    if (c) {
      const d = c.split("-");
      t.state.sortBy = ["changed", "name", "size"].includes(d[0]) ? c : "changed-desc";
    } else
      t.state.sortBy = t.o.sortBy || "changed-desc";
    if (s) {
      const d = t.storage.get("currentPath"), u = t.storage.get("currentSource");
      t.state.currentPath = d ?? "", t.state.currentSource = u ?? "";
    }
    t.initUploader(t), t.setStatus(P.ready);
  }
  destruct() {
    var e;
    this.isInDestruct || ((e = st(this, "_dialog")) === null || e === void 0 || e.destruct(), super.destruct(), this.events && this.e.off(".filebrowser"), this.uploader && this.uploader.destruct());
  }
  __updateToolbarButtons() {
    var e;
    const t = this.__getButtons();
    Ll(this.__prevButtons, t) || (this.__prevButtons = t, (e = this.toolbar) === null || e === void 0 || e.build(t));
  }
};
dt([
  J
], De.prototype, "dataProvider", null);
dt([
  J
], De.prototype, "_dialog", null);
dt([
  J
], De.prototype, "storage", null);
dt([
  k
], De.prototype, "status", null);
dt([
  k
], De.prototype, "open", null);
dt([
  L("dataProvider:changePermissions")
], De.prototype, "__updateToolbarButtons", null);
De = dt([
  Tt(gs)
], De);
function Ll(n, e) {
  if (n.length !== e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var fr = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class Y extends Te {
  /** @override */
  className() {
    return "Plugin";
  }
  constructor(e) {
    super(e), this.buttons = [], this.hasStyle = !1, this.__inited = !1, e.e.on("afterPluginSystemInit", this.__afterPluginSystemInit).on("afterInit", this.__afterInit).on("beforeDestruct", this.__beforeDestruct);
  }
  __afterPluginSystemInit() {
    const { j: e, buttons: t } = this;
    t && ae(e) && t.forEach((i) => {
      e.registerButton(i);
    });
  }
  __afterInit() {
    this.__inited = !0, this.setStatus(P.ready), this.afterInit(this.jodit);
  }
  init(e) {
    this.jodit.isReady && (this.afterInit(this.jodit), this.__afterPluginSystemInit(), this.jodit.e.fire("rebuildToolbar"));
  }
  __beforeDestruct() {
    var e;
    if (this.isInDestruct)
      return;
    const { j: t } = this;
    if (t.e.off("afterPluginSystemInit", this.__afterPluginSystemInit).off("afterInit", this.__afterInit).off("beforeDestruct", this.destruct), this.setStatus(P.beforeDestruct), !this.__inited)
      return super.destruct();
    ae(t) && ((e = this.buttons) === null || e === void 0 || e.forEach((i) => {
      t == null || t.unregisterButton(i);
    })), this.beforeDestruct(this.j), super.destruct();
  }
}
Y.requires = [];
fr([
  k
], Y.prototype, "__afterPluginSystemInit", null);
fr([
  k
], Y.prototype, "__afterInit", null);
fr([
  k
], Y.prototype, "__beforeDestruct", null);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Al {
  undo() {
    this.history.snapshot.restore(this.oldValue);
  }
  redo() {
    this.history.snapshot.restore(this.newValue);
  }
  constructor(e, t, i, r) {
    this.oldValue = e, this.newValue = t, this.history = i, this.tick = r;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Ke extends Te {
  constructor() {
    super(...arguments), this.__isBlocked = !1, this.__levelOfTransaction = 0;
  }
  /** @override */
  className() {
    return "Snapshot";
  }
  /**
   * Compare two snapshotes, if and htmls and selections match, then return true
   *
   * @param first - the first snapshote
   * @param second - second shot
   */
  static equal(e, t) {
    return e.html === t.html && JSON.stringify(e.range) === JSON.stringify(t.range);
  }
  /**
   * Calc count element before some node in parentNode. All text nodes are joined
   */
  static countNodesBeforeInParent(e) {
    if (!e.parentNode)
      return 0;
    const t = e.parentNode.childNodes;
    let i = 0, r = null;
    for (let o = 0; o < t.length; o += 1) {
      if (r && !this.isIgnoredNode(t[o]) && !(l.isText(r) && l.isText(t[o])) && (i += 1), t[o] === e)
        return i;
      r = t[o];
    }
    return 0;
  }
  /**
   * Calc normal offset in joined text nodes
   */
  static strokeOffset(e, t) {
    for (; l.isText(e); )
      e = e.previousSibling, l.isText(e) && e.nodeValue && (t += e.nodeValue.length);
    return t;
  }
  /**
   * Calc whole hierarchy path before some element in editor's tree
   */
  calcHierarchyLadder(e) {
    const t = [];
    if (!e || !e.parentNode || !l.isOrContains(this.j.editor, e))
      return [];
    for (; e && e !== this.j.editor; )
      e && !Ke.isIgnoredNode(e) && t.push(Ke.countNodesBeforeInParent(e)), e = e.parentNode;
    return t.reverse();
  }
  getElementByLadder(e) {
    let t = this.j.editor, i;
    for (i = 0; t && i < e.length; i += 1)
      t = t.childNodes[e[i]];
    return t;
  }
  get isBlocked() {
    return this.__isBlocked;
  }
  __block(e) {
    this.__isBlocked = e;
  }
  transaction(e) {
    this.__block(!0), this.__levelOfTransaction += 1;
    try {
      e();
    } catch {
    } finally {
      this.__levelOfTransaction -= 1, this.__levelOfTransaction === 0 && this.__block(!1);
    }
  }
  /**
   * Creates object a snapshot of editor: html and the current selection. Current selection calculate by
   * offset by start document
   * \{html: string, range: \{startContainer: int, startOffset: int, endContainer: int, endOffset: int\}\} or
   * \{html: string\} without selection
   */
  make() {
    const e = {
      html: "",
      range: {
        startContainer: [],
        startOffset: 0,
        endContainer: [],
        endOffset: 0
      }
    };
    e.html = this.__getCleanedEditorValue(this.j.editor);
    const t = this.j.s.sel;
    if (t && t.rangeCount) {
      const i = t.getRangeAt(0), r = this.calcHierarchyLadder(i.startContainer), o = this.calcHierarchyLadder(i.endContainer);
      let s = Ke.strokeOffset(i.startContainer, i.startOffset), a = Ke.strokeOffset(i.endContainer, i.endOffset);
      !r.length && i.startContainer !== this.j.editor && (s = 0), !o.length && i.endContainer !== this.j.editor && (a = 0), e.range = {
        startContainer: r,
        startOffset: s,
        endContainer: o,
        endOffset: a
      };
    }
    return e;
  }
  /**
   * Restores the state of the editor of the snapshot. Rebounding is not only html but selected text
   *
   * @param snapshot - snapshot of editor resulting from the `[[Snapshot.make]]` method
   * @see make
   */
  restore(e) {
    this.transaction(() => {
      const t = this.storeScrollState();
      this.__getCleanedEditorValue(this.j.editor) !== e.html && (this.j.value = e.html), this.restoreOnlySelection(e), this.restoreScrollState(t);
    });
  }
  storeScrollState() {
    return [this.j.ow.scrollY, this.j.editor.scrollTop];
  }
  restoreScrollState(e) {
    const { j: t } = this, { ow: i } = t;
    i.scrollTo(i.scrollX, e[0]), t.editor.scrollTop = e[1];
  }
  /**
   * Restore selection from snapshot
   *
   * @param snapshot - snapshot of editor resulting from the [[Snapshot.make]] method
   * @see make
   */
  restoreOnlySelection(e) {
    try {
      if (e.range) {
        const t = this.j.ed.createRange();
        t.setStart(this.getElementByLadder(e.range.startContainer), e.range.startOffset), t.setEnd(this.getElementByLadder(e.range.endContainer), e.range.endOffset), this.j.s.selectRange(t);
      }
    } catch {
      this.j.editor.lastChild && this.j.s.setCursorAfter(this.j.editor.lastChild);
    }
  }
  destruct() {
    this.__block(!1), super.destruct();
  }
  static isIgnoredNode(e) {
    return l.isText(e) && !e.nodeValue || l.isTemporary(e);
  }
  __getCleanedEditorValue(e) {
    const t = e.cloneNode(!0);
    return l.temporaryList(t).forEach(l.unwrap), t.innerHTML;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Rl {
  constructor(e) {
    this.size = e, this.commands = [], this.stackPosition = -1;
  }
  get length() {
    return this.commands.length;
  }
  clearRedo() {
    this.commands.length = this.stackPosition + 1;
  }
  clear() {
    this.commands.length = 0, this.stackPosition = -1;
  }
  push(e) {
    this.clearRedo(), this.commands.push(e), this.stackPosition += 1, this.commands.length > this.size && (this.commands.shift(), this.stackPosition -= 1);
  }
  replace(e) {
    this.commands[this.stackPosition] = e;
  }
  current() {
    return this.commands[this.stackPosition];
  }
  undo() {
    return this.canUndo() ? (this.commands[this.stackPosition] && this.commands[this.stackPosition].undo(), this.stackPosition -= 1, !0) : !1;
  }
  redo() {
    return this.canRedo() ? (this.stackPosition += 1, this.commands[this.stackPosition] && this.commands[this.stackPosition].redo(), !0) : !1;
  }
  canUndo() {
    return this.stackPosition >= 0;
  }
  canRedo() {
    return this.stackPosition < this.commands.length - 1;
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Pl = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
b.prototype.history = {
  enable: !0,
  maxHistoryLength: 1 / 0,
  timeout: 1e3
};
class pr extends Te {
  /** @override */
  className() {
    return "History";
  }
  /**
   * Return state of the WYSIWYG editor to step back
   */
  redo() {
    this.__stack.redo() && (this.startValue = this.snapshot.make(), this.fireChangeStack());
  }
  canRedo() {
    return this.__stack.canRedo();
  }
  /**
   * Return the state of the WYSIWYG editor to step forward
   */
  undo() {
    this.__stack.undo() && (this.startValue = this.snapshot.make(), this.fireChangeStack());
  }
  canUndo() {
    return this.__stack.canUndo();
  }
  clear() {
    this.startValue = this.snapshot.make(), this.__stack.clear(), this.fireChangeStack();
  }
  get length() {
    return this.__stack.length;
  }
  get startValue() {
    return this.__startValue;
  }
  set startValue(e) {
    this.__startValue = e;
  }
  constructor(e, t = new Rl(e.o.history.maxHistoryLength), i = new Ke(e)) {
    super(e), this.updateTick = 0, this.__stack = t, this.snapshot = i, e.o.history.enable && e.e.on("afterAddPlace.history", () => {
      this.isInDestruct || (this.startValue = this.snapshot.make(), e.events.on("internalChange internalUpdate", () => {
        this.startValue = this.snapshot.make();
      }).on(e.editor, [
        "changeSelection",
        "selectionstart",
        "selectionchange",
        "mousedown",
        "mouseup",
        "keydown",
        "keyup"
      ].map((r) => r + ".history").join(" "), () => {
        this.startValue.html === this.j.getNativeEditorValue() && (this.startValue = this.snapshot.make());
      }).on(this, "change.history", this.onChange));
    });
  }
  /**
   * Update change counter
   * @internal
   */
  __upTick() {
    this.updateTick += 1;
  }
  /**
   * Push new command in stack on some changes
   */
  onChange() {
    this.__processChanges();
  }
  /**
   * @internal
   */
  __processChanges() {
    this.snapshot.isBlocked || !this.j.o.history.enable || this.updateStack();
  }
  /**
   * Update history stack
   */
  updateStack(e = !1) {
    const t = this.snapshot.make();
    if (!Ke.equal(t, this.startValue)) {
      const i = new Al(this.startValue, t, this, this.updateTick);
      if (e) {
        const r = this.__stack.current();
        r && this.updateTick === r.tick && this.__stack.replace(i);
      } else
        this.__stack.push(i);
      this.startValue = t, this.fireChangeStack();
    }
  }
  fireChangeStack() {
    var e;
    this.j && !this.j.isInDestruct && ((e = this.j.events) === null || e === void 0 || e.fire("changeStack"));
  }
  destruct() {
    this.isInDestruct || (this.j.events && this.j.e.off(".history"), this.snapshot.destruct(), super.destruct());
  }
}
Pl([
  Oe()
], pr.prototype, "onChange", null);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Ml = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Bi = class extends Te {
  className() {
    return "StatusBar";
  }
  /**
   * Hide statusbar
   */
  hide() {
    this.container.classList.add("jodit_hidden");
  }
  /**
   * Show statusbar
   */
  show() {
    this.container.classList.remove("jodit_hidden");
  }
  /**
   * Status bar is shown
   */
  get isShown() {
    return !this.container.classList.contains("jodit_hidden");
  }
  /**
   * Height of statusbar
   */
  getHeight() {
    var e, t;
    return (t = (e = this.container) === null || e === void 0 ? void 0 : e.offsetHeight) !== null && t !== void 0 ? t : 0;
  }
  findEmpty(e = !1) {
    const t = this.getElms(e ? "item-right" : "item");
    for (let i = 0; i < t.length; i += 1)
      if (!t[i].innerHTML.trim().length)
        return t[i];
  }
  /**
   * Add element in statusbar
   */
  append(e, t = !1) {
    var i;
    const r = this.findEmpty(t) || this.j.c.div(this.getFullElName("item"));
    t && r.classList.add(this.getFullElName("item-right")), r.appendChild(e), (i = this.container) === null || i === void 0 || i.appendChild(r), this.j.o.statusbar && this.show(), this.j.e.fire("resize");
  }
  constructor(e, t) {
    super(e), this.target = t, this.mods = {}, this.container = e.c.div("jodit-status-bar"), t.appendChild(this.container), this.hide();
  }
  destruct() {
    this.isInDestruct || (this.setStatus(P.beforeDestruct), l.safeRemove(this.container), super.destruct());
  }
};
Bi = Ml([
  D,
  Tt(lr, ar)
], Bi);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Bl = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
const si = /* @__PURE__ */ new WeakMap();
class S extends Te {
  constructor() {
    super(...arguments), this.selected = /* @__PURE__ */ new Set();
  }
  /** @override */
  className() {
    return "Table";
  }
  __recalculateStyles() {
    const e = ti(this.j, S, "style", !0), t = [];
    this.selected.forEach((i) => {
      const r = Uo(i);
      r && t.push(r);
    }), e.innerHTML = t.length ? t.join(",") + `{${this.jodit.options.table.selectionCellStyle}}` : "";
  }
  addSelection(e) {
    this.selected.add(e), this.__recalculateStyles();
    const t = l.closest(e, "table", this.j.editor);
    if (t) {
      const i = S.__selectedByTable.get(t) || /* @__PURE__ */ new Set();
      i.add(e), S.__selectedByTable.set(t, i);
    }
  }
  removeSelection(e) {
    this.selected.delete(e), this.__recalculateStyles();
    const t = l.closest(e, "table", this.j.editor);
    if (t) {
      const i = S.__selectedByTable.get(t);
      i && (i.delete(e), i.size || S.__selectedByTable.delete(t));
    }
  }
  /**
   * Returns array of selected cells
   */
  getAllSelectedCells() {
    return U(this.selected);
  }
  static __getSelectedCellsByTable(e) {
    const t = S.__selectedByTable.get(e);
    return t ? U(t) : [];
  }
  /** @override **/
  destruct() {
    return this.selected.clear(), super.destruct();
  }
  static __getRowsCount(e) {
    return e.rows.length;
  }
  /**
   * Returns rows count in the table
   */
  getRowsCount(e) {
    return S.__getRowsCount(e);
  }
  static __getColumnsCount(e) {
    return S.__formalMatrix(e).reduce((i, r) => Math.max(i, r.length), 0);
  }
  /**
   * Returns columns count in the table
   */
  getColumnsCount(e) {
    return S.__getColumnsCount(e);
  }
  static __formalMatrix(e, t) {
    const i = [[]], r = U(e.rows), o = (s, a) => {
      i[a] === void 0 && (i[a] = []);
      const c = s.colSpan, d = s.rowSpan;
      let u, h, f = 0;
      for (; i[a][f]; )
        f += 1;
      for (h = 0; h < d; h += 1)
        for (u = 0; u < c; u += 1) {
          if (i[a + h] === void 0 && (i[a + h] = []), t && t(s, a + h, f + u, c, d) === !1)
            return !1;
          i[a + h][f + u] = s;
        }
    };
    for (let s = 0; s < r.length; s += 1) {
      const a = U(r[s].cells);
      for (let c = 0; c < a.length; c += 1)
        if (o(a[c], s) === !1)
          return i;
    }
    return i;
  }
  /**
   * Generate formal table martix columns*rows
   * @param table - Working table
   * @param callback - if return false cycle break
   */
  formalMatrix(e, t) {
    return S.__formalMatrix(e, t);
  }
  static __formalCoordinate(e, t, i = !1) {
    let r = 0, o = 0, s = 1, a = 1;
    return S.__formalMatrix(e, (c, d, u, h, f) => {
      if (t === c)
        return r = d, o = u, s = h || 1, a = f || 1, i && (o += (h || 1) - 1, r += (f || 1) - 1), !1;
    }), [r, o, s, a];
  }
  /**
   * Get cell coordinate in formal table (without colspan and rowspan)
   */
  formalCoordinate(e, t, i = !1) {
    return S.__formalCoordinate(e, t, i);
  }
  static __appendRow(e, t, i, r) {
    var o;
    let s;
    if (t)
      s = t.cloneNode(!0), j("td,th", t).forEach((a) => {
        const c = g(a, "rowspan");
        if (c && parseInt(c, 10) > 1) {
          const d = parseInt(c, 10) - 1;
          g(a, "rowspan", d > 1 ? d : null);
        }
      }), j("td,th", s).forEach((a) => {
        a.innerHTML = "";
      });
    else {
      const a = S.__getColumnsCount(e);
      s = r.element("tr");
      for (let c = 0; c < a; c += 1)
        s.appendChild(r.element("td"));
    }
    i && t && t.nextSibling ? t.parentNode && t.parentNode.insertBefore(s, t.nextSibling) : !i && t ? t.parentNode && t.parentNode.insertBefore(s, t) : (((o = e.getElementsByTagName("tbody")) === null || o === void 0 ? void 0 : o[0]) || e).appendChild(s);
  }
  /**
   * Inserts a new line after row what contains the selected cell
   *
   * @param table - Working table
   * @param line - Insert a new line after/before this
   * line contains the selected cell
   * @param after - Insert a new line after line contains the selected cell
   */
  appendRow(e, t, i) {
    return S.__appendRow(e, t, i, this.j.createInside);
  }
  static __removeRow(e, t) {
    const i = S.__formalMatrix(e);
    let r;
    const o = e.rows[t];
    i[t].forEach((s, a) => {
      if (r = !1, t - 1 >= 0 && i[t - 1][a] === s)
        r = !0;
      else if (i[t + 1] && i[t + 1][a] === s) {
        if (s.parentNode === o && s.parentNode.nextSibling) {
          r = !0;
          let c = a + 1;
          for (; i[t + 1][c] === s; )
            c += 1;
          const d = l.next(s.parentNode, (u) => l.isTag(u, "tr"), e);
          d && (i[t + 1][c] ? d.insertBefore(s, i[t + 1][c]) : d.appendChild(s));
        }
      } else
        l.safeRemove(s);
      if (r && (s.parentNode === o || s !== i[t][a - 1])) {
        const c = s.rowSpan;
        g(s, "rowspan", c - 1 > 1 ? c - 1 : null);
      }
    }), l.safeRemove(o);
  }
  /**
   * Remove row
   */
  removeRow(e, t) {
    return S.__removeRow(e, t);
  }
  /**
   * Insert column before / after all the columns containing the selected cells
   */
  appendColumn(e, t, i = !0) {
    const r = S.__formalMatrix(e);
    if (!i && l.isCell(t.previousElementSibling))
      return this.appendColumn(e, t.previousElementSibling, !0);
    const o = i ? t.cellIndex + ((t.colSpan || 1) - 1) : t.cellIndex, s = i ? o + 1 : o;
    for (let a = 0; a < r.length; ) {
      const c = r[a];
      if (c[o] !== c[s] || o === s) {
        const d = this.j.createInside.element("td");
        i ? l.after(c[o], d) : l.before(c[o], d), c[o].rowSpan > 1 && (d.rowSpan = c[o].rowSpan);
      } else
        c[o].colSpan += 1;
      a += c[o].rowSpan || 1;
    }
  }
  static __removeColumn(e, t) {
    const i = S.__formalMatrix(e);
    let r;
    i.forEach((o, s) => {
      const a = o[t];
      if (r = !1, t - 1 >= 0 && i[s][t - 1] === a || t + 1 < o.length && i[s][t + 1] === a ? r = !0 : l.safeRemove(a), r && (s - 1 < 0 || a !== i[s - 1][t])) {
        const c = a.colSpan;
        g(a, "colspan", c - 1 > 1 ? (c - 1).toString() : null);
      }
    });
  }
  /**
   * Remove column by index
   */
  removeColumn(e, t) {
    return S.__removeColumn(e, t);
  }
  static __getSelectedBound(e, t) {
    const i = [
      [1 / 0, 1 / 0],
      [0, 0]
    ], r = S.__formalMatrix(e);
    let o, s, a;
    for (o = 0; o < r.length; o += 1)
      for (s = 0; r[o] && s < r[o].length; s += 1)
        t.includes(r[o][s]) && (i[0][0] = Math.min(o, i[0][0]), i[0][1] = Math.min(s, i[0][1]), i[1][0] = Math.max(o, i[1][0]), i[1][1] = Math.max(s, i[1][1]));
    for (o = i[0][0]; o <= i[1][0]; o += 1)
      for (a = 1, s = i[0][1]; s <= i[1][1]; s += 1) {
        for (; r[o] && r[o][s - a] && r[o][s] === r[o][s - a]; )
          i[0][1] = Math.min(s - a, i[0][1]), i[1][1] = Math.max(s - a, i[1][1]), a += 1;
        for (a = 1; r[o] && r[o][s + a] && r[o][s] === r[o][s + a]; )
          i[0][1] = Math.min(s + a, i[0][1]), i[1][1] = Math.max(s + a, i[1][1]), a += 1;
        for (a = 1; r[o - a] && r[o][s] === r[o - a][s]; )
          i[0][0] = Math.min(o - a, i[0][0]), i[1][0] = Math.max(o - a, i[1][0]), a += 1;
        for (a = 1; r[o + a] && r[o][s] === r[o + a][s]; )
          i[0][0] = Math.min(o + a, i[0][0]), i[1][0] = Math.max(o + a, i[1][0]), a += 1;
      }
    return i;
  }
  /**
   * Define bound for selected cells
   */
  getSelectedBound(e, t) {
    return S.__getSelectedBound(e, t);
  }
  static __normalizeTable(e) {
    const t = [], i = S.__formalMatrix(e);
    S.__removeExtraColspans(i, t), S.__removeExtraRowspans(i, t);
    for (let r = 0; r < i.length; r += 1)
      for (let o = 0; o < i[r].length; o += 1)
        i[r][o] !== void 0 && (i[r][o].hasAttribute("rowspan") && i[r][o].rowSpan === 1 && g(i[r][o], "rowspan", null), i[r][o].hasAttribute("colspan") && i[r][o].colSpan === 1 && g(i[r][o], "colspan", null), i[r][o].hasAttribute("class") && !g(i[r][o], "class") && g(i[r][o], "class", null));
    S.__unmark(t);
  }
  static __removeExtraColspans(e, t) {
    for (let i = 0; i < e[0].length; i += 1) {
      let r = 1e6, o = !1;
      for (let s = 0; s < e.length; s += 1)
        if (e[s][i] !== void 0) {
          if (e[s][i].colSpan < 2) {
            o = !0;
            break;
          }
          r = Math.min(r, e[s][i].colSpan);
        }
      if (!o)
        for (let s = 0; s < e.length; s += 1)
          e[s][i] !== void 0 && S.__mark(e[s][i], "colspan", e[s][i].colSpan - r + 1, t);
    }
  }
  static __removeExtraRowspans(e, t) {
    let i = 0, r = 0;
    for (i = 0; i < e.length; i += 1) {
      let o = 1e6, s = !1;
      for (r = 0; r < e[i].length; r += 1)
        if (e[i][r] !== void 0) {
          if (e[i][r].rowSpan < 2) {
            s = !0;
            break;
          }
          o = Math.min(o, e[i][r].rowSpan);
        }
      if (!s)
        for (r = 0; r < e[i].length; r += 1)
          e[i][r] !== void 0 && S.__mark(e[i][r], "rowspan", e[i][r].rowSpan - o + 1, t);
    }
  }
  /**
   * Try recalculate all coluns and rows after change
   */
  normalizeTable(e) {
    return S.__normalizeTable(e);
  }
  static __mergeSelected(e, t) {
    const i = [], r = S.__getSelectedBound(e, S.__getSelectedCellsByTable(e));
    let o = 0, s = null, a = 0, c, d = 0, u = 0;
    const h = /* @__PURE__ */ new Set(), f = [];
    r && (r[0][0] - r[1][0] || r[0][1] - r[1][1]) && (S.__formalMatrix(e, (p, m, w, C, I) => {
      if (m >= r[0][0] && m <= r[1][0] && w >= r[0][1] && w <= r[1][1]) {
        if (c = p, h.has(c))
          return;
        h.add(c), m === r[0][0] && c.style.width && (o += c.offsetWidth), K(p.innerHTML.replace(/<br(\/)?>/g, "")) !== "" && i.push(p.innerHTML), C > 1 && (d += C - 1), I > 1 && (u += I - 1), s ? (S.__mark(c, "remove", 1, f), ai(t).removeSelection(c)) : (s = p, a = w);
      }
    }), d = r[1][1] - r[0][1] + 1, u = r[1][0] - r[0][0] + 1, s && (d > 1 && S.__mark(s, "colspan", d, f), u > 1 && S.__mark(s, "rowspan", u, f), o && (S.__mark(s, "width", (o / e.offsetWidth * 100).toFixed(Pt) + "%", f), a && S.__setColumnWidthByDelta(e, a, 0, !0, f)), s.innerHTML = i.join("<br/>"), ai(t).addSelection(s), h.delete(s), S.__unmark(f), S.__normalizeTable(e), U(e.rows).forEach((p) => {
      p.cells.length || l.safeRemove(p);
    })));
  }
  /**
   * It combines all the selected cells into one. The contents of the cells will also be combined
   */
  mergeSelected(e) {
    return S.__mergeSelected(e, this.j);
  }
  static __splitHorizontal(e, t) {
    let i, r, o, s, a;
    const c = [];
    S.__getSelectedCellsByTable(e).forEach((d) => {
      r = t.createInside.element("td"), r.appendChild(t.createInside.element("br")), o = t.createInside.element("tr"), i = S.__formalCoordinate(e, d), d.rowSpan < 2 ? (S.__formalMatrix(e, (u, h, f) => {
        i[0] === h && i[1] !== f && u !== d && S.__mark(u, "rowspan", u.rowSpan + 1, c);
      }), l.after(l.closest(d, "tr", e), o), o.appendChild(r)) : (S.__mark(d, "rowspan", d.rowSpan - 1, c), S.__formalMatrix(e, (u, h, f) => {
        h > i[0] && h < i[0] + d.rowSpan && i[1] > f && u.parentNode.rowIndex === h && (a = u), i[0] < h && u === d && (s = e.rows[h]);
      }), a ? l.after(a, r) : s.insertBefore(r, s.firstChild)), d.colSpan > 1 && S.__mark(r, "colspan", d.colSpan, c), S.__unmark(c), ai(t).removeSelection(d);
    }), this.__normalizeTable(e);
  }
  /**
   * Divides all selected by `jodit_focused_cell` class table cell in 2 parts vertical. Those division into 2 columns
   */
  splitHorizontal(e) {
    return S.__splitHorizontal(e, this.j);
  }
  static __splitVertical(e, t) {
    let i, r, o;
    const s = [];
    S.__getSelectedCellsByTable(e).forEach((a) => {
      i = S.__formalCoordinate(e, a), a.colSpan < 2 ? S.__formalMatrix(e, (d, u, h) => {
        i[1] === h && i[0] !== u && d !== a && S.__mark(d, "colspan", d.colSpan + 1, s);
      }) : S.__mark(a, "colspan", a.colSpan - 1, s), r = t.createInside.element("td"), r.appendChild(t.createInside.element("br")), a.rowSpan > 1 && S.__mark(r, "rowspan", a.rowSpan, s);
      const c = a.offsetWidth;
      l.after(a, r), o = c / e.offsetWidth / 2, S.__mark(a, "width", (o * 100).toFixed(Pt) + "%", s), S.__mark(r, "width", (o * 100).toFixed(Pt) + "%", s), S.__unmark(s), ai(t).removeSelection(a);
    }), S.__normalizeTable(e);
  }
  /**
   * It splits all the selected cells into 2 parts horizontally. Those. are added new row
   */
  splitVertical(e) {
    return S.__splitVertical(e, this.j);
  }
  static __setColumnWidthByDelta(e, t, i, r, o) {
    const s = S.__formalMatrix(e);
    let a = 0;
    for (let c = 0; c < s.length; c += 1) {
      const d = s[c][t];
      if (d.colSpan > 1 && s.length > 1)
        continue;
      const h = (d.offsetWidth + i) / e.offsetWidth * 100;
      S.__mark(d, "width", h.toFixed(Pt) + "%", o), a = c;
      break;
    }
    for (let c = a + 1; c < s.length; c += 1) {
      const d = s[c][t];
      S.__mark(d, "width", null, o);
    }
    r || S.__unmark(o);
  }
  /**
   * Set column width used delta value
   */
  setColumnWidthByDelta(e, t, i, r, o) {
    return S.__setColumnWidthByDelta(e, t, i, r, o);
  }
  static __mark(e, t, i, r) {
    var o;
    r.push(e);
    const s = (o = si.get(e)) !== null && o !== void 0 ? o : {};
    s[t] = i === void 0 ? 1 : i, si.set(e, s);
  }
  static __unmark(e) {
    e.forEach((t) => {
      const i = si.get(t);
      i && (Object.keys(i).forEach((r) => {
        const o = i[r];
        switch (r) {
          case "remove":
            l.safeRemove(t);
            break;
          case "rowspan":
            g(t, "rowspan", le(o) && o > 1 ? o : null);
            break;
          case "colspan":
            g(t, "colspan", le(o) && o > 1 ? o : null);
            break;
          case "width":
            o == null ? (t.style.removeProperty("width"), g(t, "style") || g(t, "style", null)) : t.style.width = o.toString();
            break;
        }
        delete i[r];
      }), si.delete(t));
    });
  }
}
S.__selectedByTable = /* @__PURE__ */ new WeakMap();
Bl([
  Oe()
], S.prototype, "__recalculateStyles", null);
const ai = (n) => n.getInstance("Table", n.o);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function jl(n, e) {
  if (y(n.o.buildData))
    return n.o.buildData.call(n, e);
  const t = n.ow.FormData;
  if (t !== void 0) {
    if (e instanceof t || v(e))
      return e;
    const i = new t(), r = e;
    return Object.keys(r).forEach((o) => {
      i.append(o, r[o]);
    }), i;
  }
  return e;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const xn = /* @__PURE__ */ new WeakMap();
function _s(n, e) {
  const t = jl(n, e), i = (r) => {
    const o = new je({
      xhr: () => {
        const a = new XMLHttpRequest();
        return n.j.ow.FormData !== void 0 && a.upload ? (n.j.progressbar.show().progress(10), a.upload.addEventListener("progress", (c) => {
          if (c.lengthComputable) {
            let d = c.loaded / c.total;
            d *= 100, n.j.progressbar.show().progress(d), d >= 100 && n.j.progressbar.hide();
          }
        }, !1)) : n.j.progressbar.hide(), a;
      },
      method: n.o.method || "POST",
      data: r,
      url: y(n.o.url) ? n.o.url(r) : n.o.url,
      headers: n.o.headers,
      queryBuild: n.o.queryBuild,
      contentType: n.o.contentType.call(n, r),
      withCredentials: n.o.withCredentials || !1
    });
    let s = xn.get(n);
    return s || (s = /* @__PURE__ */ new Set(), xn.set(n, s)), s.add(o), n.j.e.one("beforeDestruct", o.destruct), o.send().then((a) => a.json()).catch((a) => ({
      success: !1,
      data: {
        messages: [a]
      }
    })).finally(() => {
      o.destruct(), s == null || s.delete(o);
    });
  };
  return Qt(t) ? t.then(i).catch((r) => {
    n.o.error.call(n, r);
  }) : i(t);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function li(n, e, t, i, r) {
  if (!e)
    return Promise.reject(z("Need files"));
  const { o } = n;
  let s = U(e);
  if (!s.length)
    return Promise.reject(z("Need files"));
  const a = [];
  if (o.insertImageAsBase64URI && Nl(s, o.imagesExtensions, a, n, t, o.defaultHandlerSuccess), s = s.filter((c) => c), s.length) {
    const c = new FormData();
    c.append(o.pathVariableName, n.path), c.append("source", n.source);
    let d;
    for (let u = 0; u < s.length; u += 1)
      if (d = s[u], d) {
        const h = /\.\w+$/.test(d.name), f = d.type.match(/\/([a-z0-9]+)/i), p = f && f[1] ? f[1].toLowerCase() : "";
        let m = s[u].name || Math.random().toString().replace(".", "");
        if (!h && p) {
          let A = p;
          ["jpeg", "jpg"].includes(A) && (A = "jpeg|jpg"), new RegExp(".(" + A + ")$", "i").test(m) || (m += "." + p);
        }
        const [w, C, I] = o.processFileName.call(n, o.filesVariableName(u), s[u], m);
        c.append(w, C, I);
      }
    r && r(c), o.data && N(o.data) && Object.keys(o.data).forEach((u) => {
      c.append(u, o.data[u]);
    }), o.prepareData.call(n, c), a.push(_s(n, c).then((u) => o.isSuccess.call(n, u) ? ((y(t) ? t : o.defaultHandlerSuccess).call(n, o.process.call(n, u)), u) : ((y(i) ? i : o.defaultHandlerError).call(n, z(o.getMessage.call(n, u))), u)).then(() => {
      n.j.events && n.j.e.fire("filesWereUploaded");
    }));
  }
  return Promise.all(a);
}
function Nl(n, e, t, i, r, o) {
  let s, a;
  for (a = 0; a < n.length; a += 1)
    if (s = n[a], s && s.type) {
      const c = s.type.match(/\/([a-z0-9]+)/i), d = c[1] ? c[1].toLowerCase() : "";
      if (!e.includes(d))
        continue;
      const u = new FileReader();
      t.push(i.j.async.promise((h, f) => {
        u.onerror = f, u.onloadend = () => {
          const p = {
            baseurl: "",
            files: [u.result],
            isImages: [!0]
          };
          (y(r) ? r : o).call(i, p), h(p);
        }, u.readAsDataURL(s);
      })), n[a] = null;
    }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ci(n) {
  return !!(n && n.files && n.files.length > 0);
}
function Mr(n) {
  return !!(n && n.items && n.items.length > 0);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.enableDragAndDropFileToEditor = !0;
b.prototype.uploader = {
  url: "",
  insertImageAsBase64URI: !1,
  imagesExtensions: ["jpg", "png", "jpeg", "gif"],
  headers: null,
  data: null,
  filesVariableName(n) {
    return `files[${n}]`;
  },
  withCredentials: !1,
  pathVariableName: "path",
  format: "json",
  method: "POST",
  prepareData(n) {
    return n;
  },
  isSuccess(n) {
    return n.success;
  },
  getMessage(n) {
    return n.data.messages !== void 0 && M(n.data.messages) ? n.data.messages.join(" ") : "";
  },
  /**
   * @see [[IUploader.processFileName]]
   */
  processFileName(n, e, t) {
    return [n, e, t];
  },
  process(n) {
    return n.data;
  },
  error(n) {
    this.j.message.error(n.message, 4e3);
  },
  getDisplayName(n, e) {
    return n + e;
  },
  defaultHandlerSuccess(n) {
    const e = this.j || this;
    ae(e) && n.files && n.files.length && n.files.forEach((t, i) => {
      const [r, o] = n.isImages && n.isImages[i] ? ["img", "src"] : ["a", "href"], s = e.createInside.element(r);
      s.setAttribute(o, n.baseurl + t), r === "a" && (s.textContent = e.o.uploader.getDisplayName.call(this, n.baseurl, t)), r === "img" ? e.s.insertImage(s, null, e.o.imageDefaultWidth) : e.s.insertNode(s);
    });
  },
  defaultHandlerError(n) {
    this.j.message.error(n.message);
  },
  contentType(n) {
    return this.ow.FormData !== void 0 && typeof n != "string" ? !1 : "application/x-www-form-urlencoded; charset=UTF-8";
  }
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Dl extends Te {
  get j() {
    return this.jodit;
  }
  /** @override */
  className() {
    return "Uploader";
  }
  get o() {
    return this.options;
  }
  /**
   * It sets the path for uploading files
   */
  setPath(e) {
    return this.path = e, this;
  }
  /**
   * It sets the source for connector
   */
  setSource(e) {
    return this.source = e, this;
  }
  /**
   * Set the handlers Drag and Drop to `$form`
   *
   * @param form - Form or any Node on which you can drag and drop the file. In addition will be processed
   * <code>&lt;input type="file" &gt;</code>
   * @param handlerSuccess - The function be called when a successful uploading files
   * to the server
   * @param handlerError - The function that will be called during a failed download files a server
   * @example
   * ```javascript
   * var $form = jQuery('<form><input type="text" typpe="file"></form>');
   * jQuery('body').append($form);
   * Jodit.editors.someidfoeditor.uploader.bind($form[0], function (files) {
   *     var i;
   *     for (i = 0; i < data.files.length; i += 1) {
   *         parent.s.insertImage(data.files[i])
   *     }
   * });
   * ```
   */
  bind(e, t, i) {
    const r = () => {
      e.classList.remove("jodit_drag_hover");
    }, o = this, s = (a) => {
      let c, d, u;
      const h = a.clipboardData, f = (p) => {
        d && (p.append("extension", u), p.append("mimetype", d.type));
      };
      if (!Xt && ci(h))
        return li(o, h.files, t, i).finally(r), !1;
      if (Mr(h)) {
        const { items: p } = h;
        for (c = 0; c < p.length; c += 1)
          if (p[c].kind === "file" && p[c].type === "image/png") {
            if (d = p[c].getAsFile(), d) {
              const m = d.type.match(/\/([a-z0-9]+)/i);
              u = m[1] ? m[1].toLowerCase() : "", li(o, [d], t, i, f).finally(r);
            }
            a.preventDefault();
            break;
          }
      }
    };
    o.j && o.j.editor !== e ? o.j.e.on(e, "paste", s) : o.j.e.on("beforePaste", s), this.attachEvents(e, t, i, r);
  }
  attachEvents(e, t, i, r) {
    const o = this;
    o.j.e.on(e, "dragend dragover dragenter dragleave drop", (a) => {
      a.preventDefault();
    }).on(e, "dragover", (a) => {
      (ci(a.dataTransfer) || Mr(a.dataTransfer)) && (e.classList.add("jodit_drag_hover"), a.preventDefault());
    }).on(e, "dragend dragleave", (a) => {
      e.classList.remove("jodit_drag_hover"), ci(a.dataTransfer) && a.preventDefault();
    }).on(e, "drop", (a) => {
      e.classList.remove("jodit_drag_hover"), ci(a.dataTransfer) && (a.preventDefault(), a.stopImmediatePropagation(), li(o, a.dataTransfer.files, t, i).finally(r));
    });
    const s = e.querySelector("input[type=file]");
    s && o.j.e.on(s, "change", () => {
      li(o, s.files, t, i).then(() => {
        s.value = "", /safari/i.test(navigator.userAgent) || (s.type = "", s.type = "file");
      }).finally(r);
    });
  }
  /**
   * Upload images to a server by its URL, making it through the connector server.
   */
  uploadRemoteImage(e, t, i) {
    const r = this, { o } = r, s = y(i) ? i : o.defaultHandlerError;
    _s(r, {
      action: "fileUploadRemote",
      url: e
    }).then((a) => {
      if (o.isSuccess.call(r, a)) {
        (y(t) ? t : o.defaultHandlerSuccess).call(r, o.process.call(r, a));
        return;
      }
      s.call(r, z(o.getMessage.call(r, a)));
    }).catch((a) => s.call(r, a));
  }
  constructor(e, t) {
    super(e), this.path = "", this.source = "default", this.options = Q(t || {}, Q(b.defaultOptions.uploader, ae(e) ? e.o.uploader : {}));
  }
  destruct() {
    this.setStatus(P.beforeDestruct);
    const e = xn.get(this);
    e && (e.forEach((t) => {
      try {
        t.destruct();
      } catch {
      }
    }), e.clear()), super.destruct();
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ol(n, e, t) {
  let i = n;
  for (; i && i !== t; ) {
    if (l.findSibling(i, e))
      return;
    if (l.isBlock(i.parentElement))
      break;
    i = i.parentElement, i && i !== t && (e ? l.before(i, n) : l.after(i, n));
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Ln = "wrap", Pe = "unwrap", $i = "change", Ki = "unset", yt = "initial", rt = "replace", ze = "commitStyle";
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ss(n, e, t) {
  const i = t.s.createRange(), r = be(e.previousSibling) ? e.previousSibling : e;
  i.setStartBefore(n), i.setEndBefore(r), Br(n, i, !0);
  const o = be(e.nextSibling) ? e.nextSibling : e;
  i.setStartAfter(o), i.setEndAfter(n), Br(n, i, !1);
}
function Br(n, e, t) {
  const i = e.extractContents();
  (!i.textContent || !K(i.textContent).length) && i.firstChild && l.unwrap(i.firstChild), n.parentNode && he(t ? l.before : l.after, n, i);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class ql {
  setState(e) {
    E(!this.__previewsStates.has(e), "Circled states"), this.__previewsStates.add(e), this.__state = e;
  }
  getState() {
    return this.__state;
  }
  disableSilent() {
    this.silent = !1;
  }
  constructor(e, t) {
    this.transitions = t, this.silent = !0, this.__previewsStates = /* @__PURE__ */ new Set(), this.setState(e);
  }
  dispatch(e, t) {
    const i = this.transitions[this.getState()][e];
    if (i) {
      const r = i.call(this, t);
      return E(r && r !== t, "Action should return new value"), E(v(r.next), "Value should contain the next state"), E(r.next !== this.getState(), "The new state should not be equal to the old one."), this.setState(r.next), r;
    }
    throw new Error(`invalid action: ${this.getState()}.${e.toString()}`);
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Et(n) {
  return !!(n && !l.isEmptyTextNode(n) && !l.isTemporary(n) && !be(n));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ut(n, e) {
  return !!(!l.isTag(n, "font") && l.isHTMLElement(n) && Object.keys(e).every((t) => {
    const i = _(n, t, !0);
    return i === "" && (e[t] === "" || e[t] == null) ? !0 : !V(i) && i !== "" && !V(e[t]) && Wt(t, e[t]).toString().toLowerCase() === i.toString().toLowerCase();
  }));
}
if (O) {
  const n = O.createElement("div");
  n.style.color = "red", E(Ut(n, { color: "red" }), "Style test"), E(Ut(n, { fontSize: null }), "Style test"), E(Ut(n, { fontSize: "" }), "Style test");
}
function _t(n, e) {
  return !!(!l.isTag(n, "font") && l.isHTMLElement(n) && Object.keys(e).every((t) => _(n, t, !0) !== ""));
}
if (O) {
  const n = O.createElement("div");
  n.style.color = "red", E(_t(n, { color: "red" }), "Style test"), E(!_t(n, { font: "Arial", color: "red" }), "Style test"), E(!_t(n, { border: "1px solid #ccc" }), "Style test");
}
function Ji(n, e, t, i = !0) {
  var r;
  if (!e || !Et(e))
    return !1;
  const { element: o, elementIsDefault: s, options: a } = n;
  if (l.isList(e) && n.elementIsList)
    return !0;
  const c = l.isTag(e, o);
  return c && !(s && t) || !!(!((r = a.attributes) === null || r === void 0) && r.style && (i ? Ut(e, a.attributes.style) : _t(e, a.attributes.style))) && !n.elementIsList ? !0 : !c && !t && s && l.isInlineBlock(e);
}
function jr(n, e, t) {
  return l.closest(e, (i) => Ji(n, i, !0, !1), t);
}
function Hl(n, e) {
  var t, i;
  const { element: r, options: o } = n;
  if (!e || !Et(e))
    return !1;
  const s = e.nodeName.toLowerCase() === r, a = !!(!((t = o.attributes) === null || t === void 0) && t.style && _t(e, (i = o.attributes) === null || i === void 0 ? void 0 : i.style));
  return s && a;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Fl(n, e) {
  let { firstChild: t } = e;
  for (; t && !Et(t); )
    if (t = t.nextSibling, !t)
      return null;
  return t && !l.next(t, Et, e) && Ji(n, t, !1) ? t : null;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function An(n, e, t) {
  const { parentNode: i } = e;
  return i === t || !l.isHTMLElement(i) || l.next(e, Et, i) || l.prev(e, Et, i) ? null : n.isElementCommit && n.elementIsBlock && !l.isBlock(i) ? An(n, i, t) : Ji(n, i, !1) && (!l.isBlock(i) || n.elementIsBlock) ? i : n.isElementCommit && !l.isBlock(i) ? An(n, i, t) : null;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ul(n, e) {
  return !!l.closest(n, ["style", "script"], e);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Vl(n, e) {
  return !n.attributes.length && !Ct(e) || !Ct(e) ? !0 : (E(e, "Attrs must be a non-empty object"), Object.keys(e).every((t) => t === "class" || t === "className" ? n.classList.contains(e[t]) : t === "style" ? Ut(n, e[t]) : g(n, t) === e[t]));
}
function Wl(n, e) {
  return n.attributes.length === e.attributes.length && Array.from(n.attributes).every((t) => e.hasAttribute(t.name) && e.getAttribute(t.name) === t.value);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Nr = "toggleAttributes";
function ji(n, e, t, i, r = !1) {
  if (!r && n.isApplied(e, Nr))
    return i;
  !r && n.setApplied(e, Nr);
  const { attributes: o } = n.options;
  return o && Ct(o) > 0 && Object.keys(o).forEach((s) => {
    const a = o[s];
    switch (s) {
      case "style": {
        i = $l(n, t, a, e, r, i);
        break;
      }
      case "className":
      case "class":
        i = Kl(t, a, e, i, r);
        break;
      default:
        i = Jl(t, a, e, s, r, i);
    }
  }), i;
}
function $l(n, e, t, i, r, o) {
  return E(N(t) && Ct(t), "Style must be an object"), Object.keys(t).forEach((s) => {
    const a = i.style.getPropertyValue(Ce(s)), c = t[s];
    if (!(a === "" && c == null)) {
      if (Gl(e, i, s) === Wt(s, c)) {
        if (!a)
          return;
        !r && _(i, s, null), o = Ki, o = Dr(n, i, o);
        return;
      }
      o = $i, r || (_(i, s, c), o = Dr(n, i, o));
    }
  }), o;
}
function Kl(n, e, t, i, r) {
  E(v(e), "Class name must be a string");
  const o = n.e.fire.bind(n.e, `${ze}AfterToggleAttribute`);
  return t.classList.contains(e.toString()) ? (i = Ki, r || (t.classList.remove(e), t.classList.length === 0 && (g(t, "class", null), o(i, t, "class", null)))) : (i = $i, r || (t.classList.add(e), o(i, t, "class", e))), i;
}
function Jl(n, e, t, i, r, o) {
  E(v(e) || le(e) || We(e) || e == null, "Attribute value must be a string or number or boolean or null");
  const s = n.e.fire.bind(n.e, `${ze}AfterToggleAttribute`);
  return g(t, i) === e ? (!r && g(t, i, null), o = Ki, !r && s(o, t, i, e), o) : (o = $i, r || (g(t, i, e), s(o, t, i, e)), o);
}
function Dr(n, e, t) {
  return g(e, "style") || (g(e, "style", null), e.tagName.toLowerCase() === n.defaultTag && (l.unwrap(e), t = Pe)), t;
}
function Yl(n) {
  var e;
  if (Z(n, "shadowRoot") !== void 0)
    return Z(n, "shadowRoot");
  const t = ti(n), i = O.createElement("iframe");
  _(i, {
    width: 0,
    height: 0,
    position: "absolute",
    border: 0
  }), i.src = "about:blank", t.appendChild(i);
  const r = (e = i.contentWindow) === null || e === void 0 ? void 0 : e.document, o = r ? r.body : n.od.body;
  return Z(n, "shadowRoot", o), o;
}
function Gl(n, e, t) {
  const i = n.create.element(e.tagName.toLowerCase());
  i.style.cssText = e.style.cssText, Yl(n).appendChild(i);
  const o = _(i, t);
  return l.safeRemove(i), o;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Cs(n, e, t) {
  const i = t.e.fire(`${ze}BeforeWrapList`, rt, e, n), r = i ?? l.replace(e, "li", t.createInside), o = r.previousElementSibling, s = r.nextElementSibling;
  let a = l.isTag(o, n.element) ? o : null;
  return a ?? (a = l.isTag(s, n.element) ? s : null), (!l.isList(a) || !Vl(a, n.options.attributes)) && (a = t.createInside.element(n.element), ji(n, a, t, yt), l.before(r, a)), o === a ? l.append(a, r) : l.prepend(a, r), l.isTag(a.nextElementSibling, n.element) && Wl(a, a.nextElementSibling) && (l.append(a, Array.from(a.nextElementSibling.childNodes)), l.safeRemove(a.nextElementSibling)), t.e.fire(`${ze}AfterWrapList`, Ln, a, n), a;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Xl(n, e, t, i) {
  if (!e)
    return i;
  const r = e.parentElement;
  if (!r)
    return i;
  const o = t.e.fire(`${ze}BeforeToggleList`, i, n, r);
  if (o !== void 0)
    return o;
  const s = t.e.fire.bind(t.e, `${ze}AfterToggleList`);
  if (i !== Pe) {
    const c = ji(n, e.parentElement, t, yt, !0) === $i;
    if (i === rt || c || r.tagName.toLowerCase() !== n.element) {
      const d = Or(rt, r, e, t, n), u = Cs(n, d, t);
      return s(rt, u, n), rt;
    }
  }
  const a = Or(Pe, r, e, t, n);
  return s(Pe, a, n), Pe;
}
function Or(n, e, t, i, r) {
  const o = i.e.fire(`${ze}BeforeUnwrapList`, n, e, r);
  return o ? (E(l.isHTMLElement(o), `${ze}BeforeUnwrapList hook must return HTMLElement`), o) : (Ss(e, t, i), E(l.isHTMLElement(t.parentElement), "Element should be inside the list"), l.unwrap(t.parentElement), l.replace(t, i.o.enter.toLowerCase() !== "br" ? i.o.enter : i.createInside.fragment(), i.createInside));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Zl(n, e) {
  var t;
  const i = [], r = [];
  let o;
  const s = (t = n.options.attributes) === null || t === void 0 ? void 0 : t.style;
  if (e.firstChild) {
    const a = l.eachGen(e);
    let c = a.next();
    for (; !c.done; ) {
      const d = c.value;
      Ji(n, d, !0) && (!s || _t(d, s)) ? (o === void 0 && (o = !0), i.push(d)) : s && Hl(n, d) ? (o === void 0 && (o = !1), r.push(() => {
        _(d, Object.keys(s).reduce((u, h) => (u[h] = null, u), {})), g(d, "style") || g(d, "style", null), !g(d, "style") && d.nodeName.toLowerCase() === n.element && i.push(d);
      })) : l.isEmptyTextNode(d) || o === void 0 && (o = !1), c = a.next();
    }
  }
  return r.forEach((a) => a()), i.forEach(l.unwrap), !!o;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ql(n, e, t) {
  const i = t.editor, r = t.createInside, o = (h, f = "previousSibling") => {
    let p = h, m = h;
    for (; m && !be(m) && !(l.isTag(m, t.o.enter) || (p = m, m[f] ? m = m[f] : m = m.parentNode && !l.isBlock(m.parentNode) && m.parentNode !== i ? m.parentNode : null, l.isBlock(m))); )
      ;
    return p;
  }, s = o(e), a = o(e, "nextSibling"), c = t.s.createRange();
  c.setStartBefore(s), c.setEndAfter(a);
  const d = c.extractContents(), u = r.element(n.element);
  return u.appendChild(d), l.safeInsertNode(c, u), n.elementIsBlock && l.isEmpty(u) && !l.isTag(u.firstElementChild, "br") && u.appendChild(r.element("br")), u;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ec(n, e, t) {
  const i = ic(n, e, t);
  return n.elementIsList ? Cs(n, i, t) : l.replace(i, n.element, t.createInside, !0);
}
const tc = /* @__PURE__ */ new Set([
  "td",
  "th",
  "tr",
  "tbody",
  "table",
  "li",
  "ul",
  "ol"
]);
function ic(n, e, t) {
  if (n.elementIsBlock) {
    const i = l.up(e, (r) => l.isBlock(r) && !l.isTag(r, tc), t.editor);
    return i || Ql(n, e, t);
  }
  return g(e, "size", null), e;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const T = {
  START: "START",
  ELEMENT: "ELEMENT",
  UNWRAP: "UNWRAP",
  UNWRAP_CHILDREN: "UNWRAP_CHILDREN",
  CHANGE: "CHANGE",
  REPLACE_DEFAULT: "REPLACE_DEFAULT",
  LIST: "LIST",
  TOGGLE_LIST: "TOGGLE_LIST",
  WRAP: "WRAP",
  EXTRACT: "EXTRACT",
  END: "END"
}, nc = {
  [T.START]: {
    exec(n) {
      const { element: e, jodit: t, style: i, mode: r, collapsed: o } = n;
      if (Ul(e, t.editor) || !o && l.isEmptyContent(e))
        return { ...n, next: T.END };
      const s = An(i, e, t.editor) || Fl(i, e);
      if (s)
        return { ...n, next: T.ELEMENT, element: s };
      const a = jr(i, e, t.editor);
      return i.elementIsList && l.isList(a) ? { ...n, next: T.LIST } : a ? {
        ...n,
        next: T.EXTRACT
      } : {
        ...n,
        next: r !== Pe ? T.UNWRAP_CHILDREN : T.END
      };
    }
  },
  [T.LIST]: {
    exec(n) {
      const { element: e, jodit: t, mode: i } = n;
      if (i !== yt && i !== Pe && i !== rt)
        return { ...n, next: T.END };
      const r = l.closest(e, "li", t.editor);
      return r ? l.closest(e, St, t.editor) ? { ...n, element: r, next: T.TOGGLE_LIST } : {
        ...n,
        next: T.END
      } : { ...n, next: T.END };
    }
  },
  [T.TOGGLE_LIST]: {
    exec(n) {
      return {
        ...n,
        mode: Xl(n.style, n.element, n.jodit, n.mode),
        next: T.END
      };
    }
  },
  [T.EXTRACT]: {
    exec(n) {
      const { element: e, jodit: t, style: i } = n, r = jr(i, e, t.editor);
      return E(r, "This place should have an element"), i.elementIsBlock || Ss(r, e, t), {
        ...n,
        element: r,
        next: T.ELEMENT
      };
    }
  },
  [T.UNWRAP_CHILDREN]: {
    exec(n) {
      const { element: e, style: t } = n;
      return Zl(t, e) ? {
        ...n,
        mode: Pe,
        next: T.END
      } : {
        ...n,
        next: T.WRAP
      };
    }
  },
  [T.WRAP]: {
    exec(n) {
      const { element: e, jodit: t, style: i } = n, r = ec(i, e, t);
      return {
        ...n,
        next: i.elementIsList ? T.END : T.CHANGE,
        mode: Ln,
        element: r
      };
    }
  },
  [T.ELEMENT]: {
    exec(n) {
      const { style: e, element: t, jodit: i } = n;
      return ji(e, t, i, yt, !0) !== yt ? { ...n, next: T.CHANGE } : l.isTag(t, e.element) ? { ...n, next: T.UNWRAP } : { ...n, next: T.END };
    }
  },
  [T.CHANGE]: {
    exec(n) {
      const { style: e, element: t, jodit: i, mode: r } = n, o = ji(e, t, i, n.mode);
      return r !== Ln && o === Ki && !t.attributes.length && l.isTag(t, e.element) ? { ...n, next: T.UNWRAP } : { ...n, mode: o, next: T.END };
    }
  },
  [T.UNWRAP]: {
    exec(n) {
      return n.element.attributes.length && l.isTag(n.element, n.style.element) ? { ...n, next: T.REPLACE_DEFAULT } : (l.unwrap(n.element), { ...n, mode: Pe, next: T.END });
    }
  },
  [T.REPLACE_DEFAULT]: {
    exec(n) {
      return l.replace(n.element, n.style.defaultTag, n.jodit.createInside, !0), { ...n, mode: rt, next: T.END };
    }
  },
  [T.END]: {
    exec(n) {
      return n;
    }
  }
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function rc(n, e) {
  var t;
  const { s: i, editor: r } = n;
  (t = r.firstChild) === null || t === void 0 || t.normalize();
  const o = i.fakes(), s = n.s.wrapInTagGen(o);
  let a = s.next();
  if (a.done)
    return;
  let c = {
    collapsed: i.isCollapsed(),
    mode: yt,
    element: a.value,
    next: T.START,
    jodit: n,
    style: e
  };
  for (; a && !a.done; ) {
    const d = new ql(T.START, nc);
    for (c.element = a.value; d.getState() !== T.END; )
      c = d.dispatch("exec", c);
    a = s.next();
  }
  i.restoreFakes(o);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class ks {
  isApplied(e, t) {
    const i = this.__applyMap.get(e);
    return i ? i[t] : !1;
  }
  setApplied(e, t) {
    var i;
    const r = (i = this.__applyMap.get(e)) !== null && i !== void 0 ? i : {};
    r[t] = !0, this.__applyMap.set(e, r);
  }
  get elementIsList() {
    return !!(this.options.element && St.has(this.options.element));
  }
  get element() {
    return this.options.element || this.defaultTag;
  }
  /**
   * New element is blocked
   */
  get elementIsBlock() {
    return !!(this.options.element && Ni.test(this.options.element));
  }
  /**
   * The commit applies the tag change
   */
  get isElementCommit() {
    return !!(this.options.element && this.options.element !== this.options.defaultTag);
  }
  get defaultTag() {
    return this.options.defaultTag ? this.options.defaultTag : this.elementIsBlock ? "p" : "span";
  }
  get elementIsDefault() {
    return this.element === this.defaultTag;
  }
  constructor(e) {
    this.options = e, this.__applyMap = /* @__PURE__ */ new WeakMap();
  }
  apply(e) {
    const { hooks: t } = this.options, i = t ? Object.keys(t) : [];
    try {
      i.forEach((r) => {
        e.e.on(se(ze + "_" + r), t[r]);
      }), rc(e, this);
    } finally {
      i.forEach((r) => {
        e.e.off(se(ze + "_" + r), t[r]);
      }), this.__applyMap = /* @__PURE__ */ new WeakMap();
    }
    e.synchronizeValues(), e.e.fire("afterCommitStyle", this);
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Is(n, e, t) {
  let i = l.findSibling(e, t), r = l.findSibling(e, !t);
  for (; l.isElement(i) && !l.isTag(i, Me) && l.isContentEditable(i, n.editor) && (!r || !l.closest(e, l.isElement, n.editor)); )
    t || !i.firstChild ? i.appendChild(e) : l.before(i.firstChild, e), i = l.sibling(e, t), r = l.sibling(e, !t);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function oc(n, e, t, i) {
  var r;
  const o = !((r = n.nodeValue) === null || r === void 0) && r.length ? n.nodeValue : "";
  if (i && o.replace(Dn(), "").length > e)
    return !0;
  const s = On().exec(o);
  return t && (s && s[0].length < e || !s && e > 0);
}
function sc(n, e, t, i, r, o) {
  if (n = e.startContainer.childNodes[e.startOffset], n || (n = e.startContainer.childNodes[e.startOffset - 1], t = !0), n && i && !l.isText(n)) {
    if (!t && l.isText(n.previousSibling))
      n = n.previousSibling;
    else if (r) {
      let s = o(n);
      for (; s; ) {
        if (s && l.isText(s)) {
          n = s;
          break;
        }
        s = o(s);
      }
    }
  }
  if (n && !i && !l.isText(n)) {
    let s = n, a = n;
    do
      s = s.firstChild, a = a.lastChild;
    while (s && a && !l.isText(s));
    s === a && s && l.isText(s) && (n = s);
  }
  return { node: n, rightMode: t };
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var ri = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class ut {
  constructor(e) {
    this.jodit = e, e.e.on("removeMarkers", () => {
      this.removeMarkers();
    });
  }
  /**
   * Short alias for this.jodit
   */
  get j() {
    return this.jodit;
  }
  /**
   * Throw Error exception if parameter is not Node
   */
  errorNode(e) {
    if (!l.isNode(e))
      throw z("Parameter node must be instance of Node");
  }
  /**
   * Return current work place - for Jodit is Editor
   */
  get area() {
    return this.j.editor;
  }
  /**
   * Editor Window - it can be different for iframe mode
   */
  get win() {
    return this.j.ew;
  }
  /**
   * Current jodit editor doc
   */
  get doc() {
    return this.j.ed;
  }
  /**
   * Return current selection object
   */
  get sel() {
    return this.j.o.shadowRoot && y(this.j.o.shadowRoot.getSelection) ? this.j.o.shadowRoot.getSelection() : this.win.getSelection();
  }
  /**
   * Return first selected range or create new
   */
  get range() {
    const e = this.sel;
    return e && e.rangeCount ? e.getRangeAt(0) : this.createRange();
  }
  /**
   * Checks if the selected text is currently inside the editor
   */
  get isInsideArea() {
    const { sel: e } = this, t = e != null && e.rangeCount ? e.getRangeAt(0) : null;
    return !(!t || !l.isOrContains(this.area, t.startContainer));
  }
  /**
   * Return current selection object
   * @param select - Immediately add in selection
   */
  createRange(e = !1) {
    const t = this.doc.createRange();
    return e && this.selectRange(t), t;
  }
  /**
   * Remove all selected content
   */
  remove() {
    const e = this.sel, t = this.current();
    if (e && t)
      for (let i = 0; i < e.rangeCount; i += 1)
        e.getRangeAt(i).deleteContents(), e.getRangeAt(i).collapse(!0);
  }
  /**
   * Clear all selection
   */
  clear() {
    var e, t;
    !((e = this.sel) === null || e === void 0) && e.rangeCount && ((t = this.sel) === null || t === void 0 || t.removeAllRanges());
  }
  /**
   * Remove node element from editor
   */
  removeNode(e) {
    if (!l.isOrContains(this.j.editor, e, !0))
      throw z("Selection.removeNode can remove only editor's children");
    l.safeRemove(e), this.j.e.fire("afterRemoveNode", e);
  }
  /**
   * Insert the cursor to any point x, y
   *
   * @param x - Coordinate by horizontal
   * @param y - Coordinate by vertical
   * @returns false - Something went wrong
   */
  insertCursorAtPoint(e, t) {
    this.removeMarkers();
    try {
      const i = this.createRange();
      return (() => {
        if (this.doc.caretPositionFromPoint) {
          const r = this.doc.caretPositionFromPoint(e, t);
          if (r) {
            i.setStart(r.offsetNode, r.offset);
            return;
          }
        }
        if (this.doc.caretRangeFromPoint) {
          const r = this.doc.caretRangeFromPoint(e, t);
          E(r, "Incorrect caretRangeFromPoint behaviour"), i.setStart(r.startContainer, r.startOffset);
        }
      })(), i.collapse(!0), this.selectRange(i), !0;
    } catch {
    }
    return !1;
  }
  /**
   * Check if editor has selection markers
   */
  get hasMarkers() {
    return !!this.markers.length;
  }
  /**
   * Check if editor has selection markers
   */
  get markers() {
    return j("span[data-" + gt + "]", this.area);
  }
  /**
   * Remove all markers
   */
  removeMarkers() {
    l.safeRemove.apply(null, this.markers);
  }
  /**
   * Create marker element
   */
  marker(e = !1, t) {
    let i = null;
    t && (i = t.cloneRange(), i.collapse(e));
    const r = this.j.createInside.span();
    return r.id = gt + "_" + Number(/* @__PURE__ */ new Date()) + "_" + String(Math.random()).slice(2), r.style.lineHeight = "0", r.style.display = "none", l.markTemporary(r), g(r, "data-" + gt, e ? "start" : "end"), r.appendChild(this.j.createInside.text(ue)), i && l.isOrContains(this.area, e ? i.startContainer : i.endContainer) && i.insertNode(r), r;
  }
  /**
   * Restores user selections using marker invisible elements in the DOM.
   */
  restore() {
    let e = !1;
    const t = (o) => `span[data-${gt}=${o ? "start" : "end"}]`, i = this.area.querySelector(t(!0)), r = this.area.querySelector(t(!1));
    if (i) {
      if (e = this.createRange(), r)
        e.setStartAfter(i), l.safeRemove(i), e.setEndBefore(r), l.safeRemove(r);
      else {
        const o = i.previousSibling;
        l.isText(o) ? e.setStart(o, o.nodeValue ? o.nodeValue.length : 0) : e.setStartBefore(i), l.safeRemove(i), e.collapse(!0);
      }
      e && this.selectRange(e);
    }
  }
  fakes() {
    const e = this.sel;
    if (!e || !e.rangeCount)
      return [];
    const t = e.getRangeAt(0);
    E(t, "Range is null");
    const i = t.cloneRange();
    i.collapse(!0);
    const r = this.j.createInside.fake();
    l.safeInsertNode(i, r), t.setStartBefore(r);
    const o = [r];
    if (!t.collapsed) {
      const s = t.cloneRange();
      s.collapse(!1);
      const a = this.j.createInside.fake();
      l.safeInsertNode(s, a), t.setEndAfter(a), o.push(a);
    }
    return this.selectRange(t), o;
  }
  restoreFakes(e) {
    var t, i, r, o;
    const s = e.filter((u) => u.isConnected);
    if (!s.length)
      return;
    const [a, c] = s, d = this.createRange();
    d.setStartAfter(a), c && d.setEndBefore(c), this.selectRange(d), ((t = a.parentNode) === null || t === void 0 ? void 0 : t.firstChild) !== ((i = a.parentNode) === null || i === void 0 ? void 0 : i.lastChild) && l.safeRemove(a), ((r = c == null ? void 0 : c.parentNode) === null || r === void 0 ? void 0 : r.firstChild) !== ((o = c == null ? void 0 : c.parentNode) === null || o === void 0 ? void 0 : o.lastChild) && l.safeRemove(c);
  }
  /**
   * Saves selections using marker invisible elements in the DOM.
   * @param silent - Do not change current range
   */
  save(e = !1) {
    if (this.hasMarkers)
      return [];
    const t = this.sel;
    if (!t || !t.rangeCount)
      return [];
    const i = [], r = t.rangeCount, o = [];
    for (let s = 0; s < r; s += 1)
      if (o[s] = t.getRangeAt(s), o[s].collapsed) {
        const a = this.marker(!0, o[s]);
        i[s] = {
          startId: a.id,
          collapsed: !0,
          startMarker: a.outerHTML
        };
      } else {
        const a = this.marker(!0, o[s]), c = this.marker(!1, o[s]);
        i[s] = {
          startId: a.id,
          endId: c.id,
          collapsed: !1,
          startMarker: a.outerHTML,
          endMarker: c.outerHTML
        };
      }
    if (!e) {
      t.removeAllRanges();
      for (let s = r - 1; s >= 0; --s) {
        const a = this.doc.getElementById(i[s].startId);
        if (a) {
          if (i[s].collapsed)
            o[s].setStartAfter(a), o[s].collapse(!0);
          else if (o[s].setStartBefore(a), i[s].endId) {
            const c = this.doc.getElementById(i[s].endId);
            c && o[s].setEndAfter(c);
          }
          try {
            t.addRange(o[s].cloneRange());
          } catch {
          }
        }
      }
    }
    return i;
  }
  /**
   * Set focus in editor
   */
  focus(e = {
    preventScroll: !0
  }) {
    var t, i;
    if (!this.isFocused()) {
      const r = nr(this.j.container), o = r == null ? void 0 : r.scrollTop;
      this.j.iframe && this.doc.readyState === "complete" && this.j.iframe.focus(e), this.win.focus(), this.area.focus(e), o && (r != null && r.scrollTo) && r.scrollTo(0, o);
      const s = this.sel, a = s != null && s.rangeCount ? s == null ? void 0 : s.getRangeAt(0) : null;
      if (!a || !l.isOrContains(this.area, a.startContainer)) {
        const c = this.createRange();
        c.setStart(this.area, 0), c.collapse(!0), this.selectRange(c, !1);
      }
      return this.j.editorIsActive || (i = (t = this.j) === null || t === void 0 ? void 0 : t.events) === null || i === void 0 || i.fire("focus"), !0;
    }
    return !1;
  }
  /**
   * Checks whether the current selection is something or just set the cursor is
   * @returns true Selection does't have content
   */
  isCollapsed() {
    const e = this.sel;
    for (let t = 0; e && t < e.rangeCount; t += 1)
      if (!e.getRangeAt(t).collapsed)
        return !1;
    return !0;
  }
  /**
   * Checks whether the editor currently in focus
   */
  isFocused() {
    return this.doc.hasFocus && this.doc.hasFocus() && this.area === this.doc.activeElement;
  }
  /**
   * Returns the current element under the cursor inside editor
   */
  current(e = !0) {
    if (this.j.getRealMode() !== de)
      return null;
    const t = this.sel;
    if (!t || t.rangeCount === 0)
      return null;
    const i = t.getRangeAt(0);
    let r = i.startContainer, o = !1;
    const s = (a) => o ? a.lastChild : a.firstChild;
    if (l.isTag(r, "br") && t.isCollapsed)
      return r;
    if (!l.isText(r)) {
      const a = sc(r, i, o, t.isCollapsed, e, s);
      r = a.node, o = a.rightMode;
    }
    return r && l.isOrContains(this.area, r) ? r : null;
  }
  /**
   * Insert element in editor
   *
   * @param node - Node for insert
   * @param insertCursorAfter - After insert, cursor will move after element
   * @param fireChange - After insert, editor fire change event. You can prevent this behavior
   */
  insertNode(e, t = !0, i = !0) {
    this.errorNode(e);
    const r = l.isFragment(e) ? e.lastChild : e;
    this.j.e.fire("safeHTML", e), !this.isFocused() && this.j.isEditorMode() && (this.focus(), this.restore());
    const o = this.sel;
    this.j.history.snapshot.transaction(() => {
      if (this.isCollapsed() || this.j.execCommand("Delete"), this.j.e.fire("beforeInsertNode", e), o && o.rangeCount) {
        const a = o.getRangeAt(0);
        l.isOrContains(this.area, a.commonAncestorContainer) ? l.safeInsertNode(a, e) : this.area.appendChild(e);
      } else
        this.area.appendChild(e);
      const s = (a) => {
        if (l.isBlock(a)) {
          const c = a.lastChild;
          if (c)
            return s(c);
        }
        this.setCursorAfter(a);
      };
      t && (l.isFragment(e) ? r && s(r) : s(e)), this.j.o.scrollToPastedContent && zt(r ?? e, this.j.editor, this.doc);
    }), i && this.j.events && this.j.__imdSynchronizeValues(), this.j.events && this.j.e.fire("afterInsertNode", l.isFragment(e) ? r : e);
  }
  /**
   * Inserts in the current cursor position some HTML snippet
   *
   * @param html - HTML The text to be inserted into the document
   * @param insertCursorAfter - After insert, cursor will move after element
   * @example
   * ```javascript
   * parent.s.insertHTML('<img src="image.png"/>');
   * ```
   */
  insertHTML(e, t = !0) {
    if (e === "")
      return;
    const i = this.j.createInside.div(), r = this.j.createInside.fragment();
    let o;
    if (!this.isFocused() && this.j.isEditorMode() && (this.focus(), this.restore()), l.isNode(e) ? i.appendChild(e) : i.innerHTML = e.toString(), !(!this.j.isEditorMode() && this.j.e.fire("insertHTML", i.innerHTML) === !1) && (o = i.lastChild, !!o)) {
      for (; i.firstChild; )
        o = i.firstChild, r.appendChild(i.firstChild);
      this.insertNode(r, t, !1), this.j.__imdSynchronizeValues();
    }
  }
  /**
   * Insert image in editor
   *
   * @param url - URL for image, or HTMLImageElement
   * @param styles - If specified, it will be applied <code>$(image).css(styles)</code>
   * @param defaultWidth - If specified, it will be applied <code>css('width', defaultWidth)</code>
   */
  insertImage(e, t = null, i = null) {
    const r = v(e) ? this.j.createInside.element("img") : e;
    if (v(e) && r.setAttribute("src", e), i != null) {
      let s = i.toString();
      s && s !== "auto" && String(s).indexOf("px") < 0 && String(s).indexOf("%") < 0 && (s += "px"), g(r, "width", s);
    }
    t && typeof t == "object" && _(r, t);
    const o = () => {
      (r.naturalHeight < r.offsetHeight || r.naturalWidth < r.offsetWidth) && (r.style.width = "", r.style.height = ""), r.removeEventListener("load", o);
    };
    this.j.e.on(r, "load", o), r.complete && o(), this.insertNode(r), this.j.e.fire("afterInsertImage", r);
  }
  /**
   * Call callback for all selection node
   */
  // eslint-disable-next-line complexity
  eachSelection(e) {
    var t;
    const i = this.sel;
    if (!i || !i.rangeCount)
      return;
    const r = i.getRangeAt(0);
    let o = r.commonAncestorContainer;
    l.isHTMLElement(o) || (o = o.parentElement);
    const s = [], a = r.startOffset, c = o.childNodes.length, d = a < c ? a : c - 1;
    let u = r.startContainer === this.area ? o.childNodes[d] : r.startContainer, h = r.endContainer === this.area ? o.childNodes[r.endOffset - 1] : r.endContainer;
    l.isText(u) && u === r.startContainer && r.startOffset === ((t = u.nodeValue) === null || t === void 0 ? void 0 : t.length) && u.nextSibling && (u = u.nextSibling), l.isText(h) && h === r.endContainer && r.endOffset === 0 && h.previousSibling && (h = h.previousSibling);
    const f = (m) => {
      m && m !== o && !l.isEmptyTextNode(m) && !be(m) && s.push(m);
    };
    f(u), u !== h && l.isOrContains(o, u, !0) && l.find(u, (m) => (f(m), m === h || m && m.contains && m.contains(h)), o, !0, !1);
    const p = (m) => {
      if (l.isOrContains(this.j.editor, m, !0)) {
        if (m.nodeName.match(/^(UL|OL)$/))
          return U(m.childNodes).forEach(p);
        if (l.isTag(m, "li"))
          if (m.firstChild)
            m = m.firstChild;
          else {
            const w = this.j.createInside.text(ue);
            m.appendChild(w), m = w;
          }
        e(m);
      }
    };
    s.length === 0 && (l.isEmptyTextNode(u) && s.push(u), u.firstChild && s.push(u.firstChild)), s.forEach(p);
  }
  /**
   * Checks if the cursor is at the end(start) block
   *
   * @param  start - true - check whether the cursor is at the start block
   * @param parentBlock - Find in this
   * @param fake - Node for cursor position
   *
   * @returns true - the cursor is at the end(start) block, null - cursor somewhere outside
   */
  cursorInTheEdge(e, t, i = null) {
    var r;
    const o = !e, s = (r = this.sel) === null || r === void 0 ? void 0 : r.getRangeAt(0);
    if (i ?? (i = this.current(!1)), !s || !i || !l.isOrContains(t, i, !0))
      return null;
    const a = e ? s.startContainer : s.endContainer, c = e ? s.startOffset : s.endOffset, d = (h) => !!(h && !l.isTag(h, "br") && !l.isEmptyTextNode(h) && !l.isTemporary(h) && !(l.isElement(h) && this.j.e.fire("isInvisibleForCursor", h) === !0));
    if (l.isText(a)) {
      if (oc(a, c, e, o))
        return !1;
    } else {
      const h = U(a.childNodes);
      if (o) {
        if (h.slice(c).some(d))
          return !1;
      } else if (h.slice(0, c).some(d))
        return !1;
    }
    let u = i;
    for (; u && u !== t; ) {
      const h = l.sibling(u, e);
      if (!h) {
        u = u.parentNode;
        continue;
      }
      if (u = h, u && d(u))
        return !1;
    }
    return !0;
  }
  /**
   * Wrapper for cursorInTheEdge
   */
  cursorOnTheLeft(e, t) {
    return this.cursorInTheEdge(!0, e, t);
  }
  /**
   * Wrapper for cursorInTheEdge
   */
  cursorOnTheRight(e, t) {
    return this.cursorInTheEdge(!1, e, t);
  }
  /**
   * Set cursor after the node
   * @returns fake invisible textnode. After insert it can be removed
   */
  setCursorAfter(e) {
    return this.setCursorNearWith(e, !1);
  }
  /**
   * Set cursor before the node
   * @returns fake invisible textnode. After insert it can be removed
   */
  setCursorBefore(e) {
    return this.setCursorNearWith(e, !0);
  }
  /**
   * Add fake node for new cursor position
   */
  setCursorNearWith(e, t) {
    var i, r;
    if (this.errorNode(e), !l.up(e, (a) => a === this.area || a && a.parentNode === this.area, this.area))
      throw z("Node element must be in editor");
    const o = this.createRange();
    let s = null;
    return l.isText(e) ? t ? o.setStart(e, 0) : o.setEnd(e, (r = (i = e.nodeValue) === null || i === void 0 ? void 0 : i.length) !== null && r !== void 0 ? r : 0) : (s = this.j.createInside.fake(), t ? o.setStartBefore(e) : o.setEndAfter(e), o.collapse(t), l.safeInsertNode(o, s), o.selectNode(s)), o.collapse(t), this.selectRange(o), s;
  }
  /**
   * Set cursor in the node
   * @param node - Node element
   * @param inStart - set cursor in start of element
   */
  setCursorIn(e, t = !1) {
    if (this.errorNode(e), !l.up(e, (a) => a === this.area || a && a.parentNode === this.area, this.area))
      throw z("Node element must be in editor");
    const i = this.createRange();
    let r = e, o = e;
    do {
      if (l.isText(r) || l.isTag(r, Me))
        break;
      o = r, r = t ? r.firstChild : r.lastChild;
    } while (r);
    if (!r) {
      const a = this.j.createInside.text(ue);
      l.isTag(o, Me) ? r = o : (o.appendChild(a), o = a);
    }
    const s = r || o;
    return l.isTag(s, Me) ? (t || l.isTag(s, "br") ? i.setStartBefore(s) : i.setEndAfter(s), i.collapse(t)) : (i.selectNodeContents(s), i.collapse(t)), this.selectRange(i), o;
  }
  /**
   * Set range selection
   */
  selectRange(e, t = !0) {
    const i = this.sel;
    return t && !this.isFocused() && this.focus(), i && (i.removeAllRanges(), i.addRange(e)), this.j.e.fire("changeSelection"), this;
  }
  /**
   * Select node
   * @param node - Node element
   * @param inward - select all inside
   */
  select(e, t = !1) {
    if (this.errorNode(e), !l.up(e, (r) => r === this.area || r && r.parentNode === this.area, this.area))
      throw z("Node element must be in editor");
    const i = this.createRange();
    return i[t ? "selectNodeContents" : "selectNode"](e), this.selectRange(i);
  }
  /**
   * Return current selected HTML
   * @example
   * ```javascript
   * const editor = Jodit.make();
   * console.log(editor.s.html); // html
   * console.log(Jodit.modules.Helpers.stripTags(editor.s.html)); // plain text
   * ```
   */
  get html() {
    const e = this.sel;
    if (e && e.rangeCount > 0) {
      const i = e.getRangeAt(0).cloneContents(), r = this.j.createInside.div();
      return r.appendChild(i), r.innerHTML;
    }
    return "";
  }
  /**
   * Wrap all selected fragments inside Tag or apply some callback
   */
  *wrapInTagGen(e) {
    if (this.isCollapsed()) {
      const i = this.jodit.createInside.element("font", ue);
      this.insertNode(i, !1, !1), e && e[0] && i.appendChild(e[0]), yield i, l.unwrap(i);
      return;
    }
    j("*[style*=font-size]", this.area).forEach((i) => {
      g(i, "data-font-size", i.style.fontSize.toString()), i.style.removeProperty("font-size");
    }), this.j.nativeExecCommand("fontsize", !1, "7"), j("*[data-font-size]", this.area).forEach((i) => {
      const r = g(i, "data-font-size");
      r && (i.style.fontSize = r, g(i, "data-font-size", null));
    });
    const t = j('font[size="7"]', this.area);
    for (const i of t) {
      const { firstChild: r, lastChild: o } = i;
      if (r && r === o && be(r)) {
        l.unwrap(i);
        continue;
      }
      r && be(r) && l.before(i, r), o && be(o) && l.after(i, o), yield i, l.unwrap(i);
    }
  }
  /**
   * Wrap all selected fragments inside Tag or apply some callback
   */
  wrapInTag(e) {
    const t = [];
    for (const i of this.wrapInTagGen())
      try {
        if (i.firstChild && i.firstChild === i.lastChild && be(i.firstChild))
          continue;
        y(e) ? e(i) : t.push(l.replace(i, e, this.j.createInside));
      } finally {
        const r = i.parentNode;
        r && (l.unwrap(i), l.isEmpty(r) && l.unwrap(r));
      }
    return t;
  }
  /**
   * Apply some css rules for all selections. It method wraps selections in nodeName tag.
   * @example
   * ```js
   * const editor = Jodit.make('#editor');
   * editor.value = 'test';
   * editor.execCommand('selectall');
   *
   * editor.s.commitStyle({
   * 	style: {color: 'red'}
   * }) // will wrap `text` in `span` and add style `color:red`
   * editor.s.commitStyle({
   * 	style: {color: 'red'}
   * }) // will remove `color:red` from `span`
   * ```
   */
  commitStyle(e) {
    E(Ct(e) > 0, "Need to pass at least one option"), new ks(e).apply(this.j);
  }
  /**
   * Split selection on two parts: left and right
   */
  splitSelection(e, t) {
    if (!this.isCollapsed())
      return null;
    const i = this.createRange(), r = this.range;
    i.setStartBefore(e);
    const o = this.cursorOnTheRight(e, t), s = this.cursorOnTheLeft(e, t), a = this.j.createInside.element("br"), c = this.j.createInside.fake(), d = c.cloneNode();
    try {
      if (o || s) {
        t ? l.before(t, a) : l.safeInsertNode(r, a);
        const p = (m, w) => {
          let C = w(m);
          for (; C; ) {
            const I = w(C);
            if (C && (l.isTag(C, "br") || l.isEmptyTextNode(C)))
              l.safeRemove(C);
            else
              break;
            C = I;
          }
        };
        p(a, (m) => m.nextSibling), p(a, (m) => m.previousSibling), l.after(a, d), l.before(a, c), o ? (i.setEndBefore(a), r.setEndBefore(a)) : (i.setEndAfter(a), r.setEndAfter(a));
      } else
        i.setEnd(r.startContainer, r.startOffset);
      const u = i.extractContents(), h = (p) => l.each(p, (m) => l.isEmptyTextNode(m) && l.safeRemove(m));
      E(e.parentNode, "Splitting fails");
      try {
        if (h(u), h(e), e.parentNode.insertBefore(u, e), !t && o && (a != null && a.parentNode)) {
          const p = this.createRange();
          p.setStartBefore(a), this.selectRange(p);
        }
      } catch {
      }
      const f = (p) => {
        var m, w, C;
        ((m = p == null ? void 0 : p.parentNode) === null || m === void 0 ? void 0 : m.firstChild) === ((w = p == null ? void 0 : p.parentNode) === null || w === void 0 ? void 0 : w.lastChild) && ((C = p == null ? void 0 : p.parentNode) === null || C === void 0 || C.appendChild(a.cloneNode()));
      };
      f(c), f(d);
    } finally {
      l.safeRemove(c), l.safeRemove(d);
    }
    return e.previousElementSibling;
  }
  expandSelection() {
    if (this.isCollapsed())
      return this;
    const { range: e } = this, t = e.cloneRange();
    if (!l.isOrContains(this.j.editor, e.commonAncestorContainer, !0))
      return this;
    const i = (c) => {
      const d = this.j.createInside.fake(), u = e.cloneRange();
      return u.collapse(c), l.safeInsertNode(u, d), Ol(d, c, this.j.editor), d;
    }, r = i(!0), o = i(!1);
    t.setStartAfter(r), t.setEndBefore(o);
    const s = l.findSibling(r, !1), a = l.findSibling(o, !0);
    if (s !== a) {
      const c = l.isElement(s) && l.isOrContains(s, o), d = !c && l.isElement(a) && l.isOrContains(a, r);
      if (c || d) {
        let u = c ? s : a, h = u;
        for (; l.isElement(u); )
          u = c ? u.firstElementChild : u.lastElementChild, u && (c ? l.isOrContains(u, o) : l.isOrContains(u, r)) && (h = u);
        c ? t.setStart(h, 0) : t.setEnd(h, h.childNodes.length);
      }
    }
    if (this.selectRange(t), l.safeRemove(r, o), this.isCollapsed())
      throw z("Selection is collapsed");
    return this;
  }
}
ri([
  k
], ut.prototype, "createRange", null);
ri([
  k
], ut.prototype, "focus", null);
ri([
  k
], ut.prototype, "setCursorAfter", null);
ri([
  k
], ut.prototype, "setCursorBefore", null);
ri([
  k
], ut.prototype, "setCursorIn", null);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Ajax: je,
  Alert: fs,
  Async: Qn,
  Button: pe,
  CommitStyle: ks,
  Component: fe,
  Confirm: ps,
  get ContextMenu() {
    return Pi;
  },
  Create: dr,
  get Dialog() {
    return ee;
  },
  Dom: l,
  EventEmitter: rr,
  EventHandlersStore: es,
  Eventify: Lo,
  get FileBrowser() {
    return De;
  },
  Helpers: Ma,
  History: pr,
  Icon: x,
  get ImageEditor() {
    return Se;
  },
  LazyWalker: Ao,
  Plugin: Y,
  PluginSystem: Qo,
  Popup: oe,
  ProgressBar: us,
  Prompt: ms,
  Response: rs,
  STATUSES: P,
  Selection: ut,
  Snapshot: Ke,
  get StatusBar() {
    return Bi;
  },
  Table: S,
  get ToolbarButton() {
    return Ee;
  },
  get ToolbarCollection() {
    return Ie;
  },
  get ToolbarContent() {
    return Li;
  },
  get ToolbarEditorCollection() {
    return Ri;
  },
  get ToolbarSelect() {
    return Ai;
  },
  get UIBlock() {
    return $e;
  },
  get UIButton() {
    return R;
  },
  get UIButtonGroup() {
    return yn;
  },
  UIButtonState: zi,
  get UICheckbox() {
    return Ne;
  },
  get UIElement() {
    return ie;
  },
  get UIFileInput() {
    return Ti;
  },
  get UIForm() {
    return Kt;
  },
  get UIGroup() {
    return ge;
  },
  get UIInput() {
    return F;
  },
  get UIList() {
    return kt;
  },
  get UIMessages() {
    return xi;
  },
  get UISelect() {
    return It;
  },
  get UISeparator() {
    return Ii;
  },
  get UISpacer() {
    return Ei;
  },
  get UITextArea() {
    return Jt;
  },
  get UITooltip() {
    return Ye;
  },
  Uploader: Dl,
  get View() {
    return ne;
  },
  ViewComponent: Te,
  ViewWithToolbar: At,
  defaultNameSpace: vt,
  observable: ki
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var qe = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
}, Pn;
const di = "data-jodit-default-style-display", ui = "data-jodit-default-classes";
let q = Pn = class extends At {
  /** @override */
  className() {
    return "Jodit";
  }
  /**
   * Return promise for ready actions
   * @example
   * ```js
   * const jodit = Jodit.make('#editor');
   * await jodit.waitForReady();
   * jodit.e.fire('someAsyncLoadedPluginEvent', (test) => {
   *   alert(test);
   * });
   * ```
   */
  waitForReady() {
    return this.isReady ? Promise.resolve(this) : this.async.promise((e) => {
      this.hookStatus("ready", () => e(this));
    });
  }
  /**
   * @deprecated I don't know why I wrote itp
   */
  static get ready() {
    return new Promise((e) => {
      at.on("joditready", e);
    });
  }
  /**
   * Plain text editor's value
   */
  get text() {
    if (this.editor)
      return this.editor.innerText || "";
    const e = this.createInside.div();
    return e.innerHTML = this.getElementValue(), e.innerText || "";
  }
  /**
   * Return a default timeout period in milliseconds for some debounce or throttle functions.
   * By default, `{history.timeout}` options
   */
  get defaultTimeout() {
    return le(this.o.defaultTimeout) ? this.o.defaultTimeout : b.defaultOptions.defaultTimeout;
  }
  /**
   * Method wrap usual object in Object helper for prevent deep object merging in options*
   * ```js
   * const editor = Jodit.make('#editor', {
   * 	controls: {
   * 		fontsize: {
   * 			list: Jodit.atom([8, 9, 10])
   * 		}
   * 	}
   * });
   * ```
   * In this case, the array [8, 9, 10] will not be combined with other arrays, but will replace them
   */
  static atom(e) {
    return Do(e);
  }
  /**
   * Factory for creating Jodit instance
   */
  static make(e, t) {
    return new this(e, t);
  }
  /**
   * Checks if the element has already been initialized when for Jodit
   */
  static isJoditAssigned(e) {
    return e && ae(e.component) && !e.component.isInDestruct;
  }
  /**
   * Default settings
   */
  static get defaultOptions() {
    return b.defaultOptions;
  }
  get createInside() {
    return new dr(() => this.ed, this.o.createAttributes);
  }
  __setPlaceField(e, t) {
    this.currentPlace || (this.currentPlace = {}, this.places = [this.currentPlace]), this.currentPlace[e] = t;
  }
  /**
   * element It contains source element
   */
  get element() {
    return this.currentPlace.element;
  }
  /**
   * editor It contains the root element editor
   */
  get editor() {
    return this.currentPlace.editor;
  }
  set editor(e) {
    this.__setPlaceField("editor", e);
  }
  /**
   * Container for all staff
   */
  get container() {
    return this.currentPlace.container;
  }
  set container(e) {
    this.__setPlaceField("container", e);
  }
  /**
   * workplace It contains source and wysiwyg editors
   */
  get workplace() {
    return this.currentPlace.workplace;
  }
  get message() {
    return this.getMessageModule(this.workplace);
  }
  /**
   * Statusbar module
   */
  get statusbar() {
    return this.currentPlace.statusbar;
  }
  /**
   * iframe Iframe for iframe mode
   */
  get iframe() {
    return this.currentPlace.iframe;
  }
  set iframe(e) {
    this.__setPlaceField("iframe", e);
  }
  get history() {
    return this.currentPlace.history;
  }
  /**
   * In iframe mode editor's window can be different by owner
   */
  get editorWindow() {
    return this.currentPlace.editorWindow;
  }
  set editorWindow(e) {
    this.__setPlaceField("editorWindow", e);
  }
  /**
   * Alias for this.ew
   */
  get ew() {
    return this.editorWindow;
  }
  /**
   * In iframe mode editor's window can be different by owner
   */
  get editorDocument() {
    return this.currentPlace.editorWindow.document;
  }
  /**
   * Alias for this.ew
   */
  get ed() {
    return this.editorDocument;
  }
  /**
   * options All Jodit settings default + second arguments of constructor
   */
  get options() {
    return this.currentPlace.options;
  }
  set options(e) {
    this.__setPlaceField("options", e);
  }
  /**
   * Alias for this.selection
   */
  get s() {
    return this.selection;
  }
  get uploader() {
    return this.getInstance("Uploader", this.o.uploader);
  }
  get filebrowser() {
    const e = this, t = Q({
      defaultTimeout: e.defaultTimeout,
      uploader: e.o.uploader,
      language: e.o.language,
      license: e.o.license,
      theme: e.o.theme,
      shadowRoot: e.o.shadowRoot,
      defaultCallback(i) {
        i.files && i.files.length && i.files.forEach((r, o) => {
          const s = i.baseurl + r;
          (i.isImages ? i.isImages[o] : !1) ? e.s.insertImage(s, null, e.o.imageDefaultWidth) : e.s.insertNode(e.createInside.fromHTML(`<a href='${s}' title='${s}'>${s}</a>`));
        });
      }
    }, this.o.filebrowser);
    return e.getInstance("FileBrowser", t);
  }
  /**
   * Editor's mode
   */
  get mode() {
    return this.__mode;
  }
  set mode(e) {
    this.setMode(e);
  }
  /**
   * Return real HTML value from WYSIWYG editor.
   * @internal
   */
  getNativeEditorValue() {
    const e = this.e.fire("beforeGetNativeEditorValue");
    return v(e) ? e : this.editor ? this.editor.innerHTML : this.getElementValue();
  }
  /**
   * Set value to native editor
   */
  setNativeEditorValue(e) {
    const t = {
      value: e
    };
    this.e.fire("beforeSetNativeEditorValue", t) || this.editor && (this.editor.innerHTML = t.value);
  }
  /**
   * HTML value
   */
  get value() {
    return this.getEditorValue();
  }
  set value(e) {
    this.setEditorValue(e), this.history.__processChanges();
  }
  synchronizeValues() {
    this.__imdSynchronizeValues();
  }
  /**
   * This is an internal method, do not use it in your applications.
   * @private
   * @internal
   */
  __imdSynchronizeValues() {
    this.setEditorValue();
  }
  /**
   * Return editor value
   */
  getEditorValue(e = !0, t) {
    let i;
    if (i = this.e.fire("beforeGetValueFromEditor", t), i !== void 0)
      return i;
    i = this.getNativeEditorValue().replace(Vt(), ""), e && (i = i.replace(/<span[^>]+id="jodit-selection_marker_[^>]+><\/span>/g, "")), i === "<br>" && (i = "");
    const r = { value: i };
    return this.e.fire("afterGetValueFromEditor", r, t), r.value;
  }
  /**
   * Set editor html value and if set sync fill source element value
   * When method was called without arguments - it is a simple way to synchronize editor to element
   */
  setEditorValue(e) {
    const t = this.e.fire("beforeSetValueToEditor", e);
    if (t === !1)
      return;
    if (v(t) && (e = t), !this.editor) {
      e !== void 0 && this.__setElementValue(e);
      return;
    }
    if (!v(e) && !V(e))
      throw z("value must be string");
    !V(e) && this.getNativeEditorValue() !== e && this.setNativeEditorValue(e), this.e.fire("postProcessSetEditorValue");
    const i = this.getElementValue(), r = this.getEditorValue();
    if (!this.__isSilentChange && i !== r && this.__callChangeCount < fo) {
      this.__setElementValue(r), this.__callChangeCount += 1;
      try {
        this.history.__upTick(), this.e.fire("change", r, i), this.e.fire(this.history, "change", r, i);
      } finally {
        this.__callChangeCount = 0;
      }
    }
  }
  /**
   * If some plugin changes the DOM directly, then you need to update the content of the original element
   */
  updateElementValue() {
    this.__setElementValue(this.getEditorValue());
  }
  /**
   * Return source element value
   */
  getElementValue() {
    return this.element.value !== void 0 ? this.element.value : this.element.innerHTML;
  }
  __setElementValue(e) {
    if (!v(e))
      throw z("value must be string");
    if (this.element !== this.container && e !== this.getElementValue()) {
      const t = { value: e }, i = this.e.fire("beforeSetElementValue", t);
      Ae(i, () => {
        this.element.value !== void 0 ? this.element.value = t.value : this.element.innerHTML = t.value, this.e.fire("afterSetElementValue", t);
      });
    }
  }
  /**
   * Register custom handler for command
   *
   * @example
   * ```javascript
   * var jodit = Jodit.make('#editor);
   *
   * jodit.setEditorValue('test test test');
   *
   * jodit.registerCommand('replaceString', function (command, needle, replace) {
   *      var value = this.getEditorValue();
   *      this.setEditorValue(value.replace(needle, replace));
   *      return false; // stop execute native command
   * });
   *
   * jodit.execCommand('replaceString', 'test', 'stop');
   *
   * console.log(jodit.value); // stop test
   *
   * // and you can add hotkeys for command
   * jodit.registerCommand('replaceString', {
   *    hotkeys: 'ctrl+r',
   *    exec: function (command, needle, replace) {
   *     var value = this.getEditorValue();
   *     this.setEditorValue(value.replace(needle, replace));
   *    }
   * });
   *
   * ```
   */
  registerCommand(e, t, i) {
    const r = e.toLowerCase();
    let o = this.commands.get(r);
    if (o === void 0 && (o = [], this.commands.set(r, o)), o.push(t), !y(t)) {
      const s = this.o.commandToHotkeys[r] || this.o.commandToHotkeys[e] || t.hotkeys;
      s && this.registerHotkeyToCommand(s, r, i == null ? void 0 : i.stopPropagation);
    }
    return this;
  }
  /**
   * Register hotkey for command
   */
  registerHotkeyToCommand(e, t, i = !0) {
    const r = ei(e).map(ir).map((o) => o + ".hotkey").join(" ");
    this.e.off(r).on(r, (o, s) => (s && (s.shouldStop = i ?? !0), this.execCommand(t)));
  }
  /**
   * Execute command editor
   *
   * @param command - command. It supports all the
   * @see https://developer.mozilla.org/ru/docs/Web/API/Document/execCommand#commands and a number of its own
   * for example applyStyleProperty. Comand fontSize receives the second parameter px,
   * formatBlock and can take several options
   * @example
   * ```javascript
   * this.execCommand('fontSize', 12); // sets the size of 12 px
   * this.execCommand('underline');
   * this.execCommand('formatBlock', 'p'); // will be inserted paragraph
   * ```
   */
  execCommand(e, t, i, ...r) {
    if (this.s.isFocused() || this.s.focus(), this.o.readonly && !this.o.allowCommandsInReadOnly.includes(e))
      return;
    let o;
    if (e = e.toLowerCase(), o = this.e.fire(`beforeCommand${Fi(e)}`, t, i, ...r), o !== !1 && (o = this.e.fire("beforeCommand", e, t, i, ...r)), o !== !1 && (o = this.__execCustomCommands(e, t, i, ...r)), o !== !1) {
      this.s.focus();
      try {
        o = this.nativeExecCommand(e, t, i);
      } catch {
      }
    }
    return this.e.fire("afterCommand", e, t, i), this.__imdSynchronizeValues(), o;
  }
  /**
   * Exec native command
   */
  nativeExecCommand(e, t, i) {
    this.__isSilentChange = !0;
    try {
      return this.ed.execCommand(e, t, i);
    } finally {
      this.__isSilentChange = !1;
    }
  }
  __execCustomCommands(e, t, i, ...r) {
    e = e.toLowerCase();
    const o = this.commands.get(e);
    if (o !== void 0) {
      let s;
      return o.forEach((a) => {
        let c;
        y(a) ? c = a : c = a.exec;
        const d = c.call(this, e, t, i, ...r);
        d !== void 0 && (s = d);
      }), s;
    }
  }
  /**
   * Disable selecting
   */
  lock(e = "any") {
    return super.lock(e) ? (this.__selectionLocked = this.s.save(), this.s.clear(), this.editor.classList.add("jodit_lock"), this.e.fire("lock", !0), !0) : !1;
  }
  /**
   * Enable selecting
   */
  unlock() {
    return super.unlock() ? (this.editor.classList.remove("jodit_lock"), this.__selectionLocked && this.s.restore(), this.e.fire("lock", !1), !0) : !1;
  }
  /**
   * Return current editor mode: Jodit.MODE_WYSIWYG, Jodit.MODE_SOURCE or Jodit.MODE_SPLIT
   */
  getMode() {
    return this.mode;
  }
  isEditorMode() {
    return this.getRealMode() === de;
  }
  /**
   * Return current real work mode. When editor in MODE_SOURCE or MODE_WYSIWYG it will
   * return them, but then editor in MODE_SPLIT it will return MODE_SOURCE if
   * Textarea(CodeMirror) focused or MODE_WYSIWYG otherwise
   *
   * @example
   * ```javascript
   * var editor = Jodit.make('#editor');
   * console.log(editor.getRealMode());
   * ```
   */
  getRealMode() {
    if (this.getMode() !== ot)
      return this.getMode();
    const e = this.od.activeElement;
    return e && (e === this.iframe || l.isOrContains(this.editor, e) || l.isOrContains(this.toolbar.container, e)) ? de : nt;
  }
  /**
   * Set current mode
   */
  setMode(e) {
    const t = this.getMode(), i = {
      mode: parseInt(e.toString(), 10)
    }, r = [
      "jodit-wysiwyg_mode",
      "jodit-source__mode",
      "jodit_split_mode"
    ];
    this.e.fire("beforeSetMode", i) !== !1 && (this.__mode = [
      nt,
      de,
      ot
    ].includes(i.mode) ? i.mode : de, this.o.saveModeInStorage && this.storage.set("jodit_default_mode", this.mode), r.forEach((o) => {
      this.container.classList.remove(o);
    }), this.container.classList.add(r[this.mode - 1]), t !== this.getMode() && this.e.fire("afterSetMode"));
  }
  /**
   * Toggle editor mode WYSIWYG to TEXTAREA(CodeMirror) to SPLIT(WYSIWYG and TEXTAREA) to again WYSIWYG
   *
   * @example
   * ```javascript
   * var editor = Jodit.make('#editor');
   * editor.toggleMode();
   * ```
   */
  toggleMode() {
    let e = this.getMode();
    [
      nt,
      de,
      this.o.useSplitMode ? ot : 9
    ].includes(e + 1) ? e += 1 : e = de, this.setMode(e);
  }
  /**
   * Switch on/off the editor into the disabled state.
   * When disabled, the user is not able to change the editor content
   * This function firing the `disabled` event.
   */
  setDisabled(e) {
    this.o.disabled = e;
    const t = this.__wasReadOnly;
    this.setReadOnly(e || t), this.__wasReadOnly = t, this.editor && (this.editor.setAttribute("aria-disabled", e.toString()), this.container.classList.toggle("jodit_disabled", e), this.e.fire("disabled", e));
  }
  /**
   * Return true if editor in disabled mode
   */
  getDisabled() {
    return this.o.disabled;
  }
  /**
   * Switch on/off the editor into the read-only state.
   * When in readonly, the user is not able to change the editor content, but can still
   * use some editor functions (show source code, print content, or seach).
   * This function firing the `readonly` event.
   */
  setReadOnly(e) {
    this.__wasReadOnly !== e && (this.__wasReadOnly = e, this.o.readonly = e, e ? this.editor && this.editor.removeAttribute("contenteditable") : this.editor && this.editor.setAttribute("contenteditable", "true"), this.e && this.e.fire("readonly", e));
  }
  /**
   * Return true if editor in read-only mode
   */
  getReadOnly() {
    return this.o.readonly;
  }
  focus() {
    this.getMode() !== nt && this.s.focus();
  }
  get isFocused() {
    return this.s.isFocused();
  }
  /**
   * Hook before init
   */
  beforeInitHook() {
  }
  /**
   * Hook after init
   */
  afterInitHook() {
  }
  /** @override **/
  initOptions(e) {
    this.options = Q(e || {}, b.defaultOptions);
  }
  /** @override **/
  initOwners() {
    this.editorWindow = this.o.ownerWindow, this.ownerWindow = this.o.ownerWindow;
  }
  /**
   * Create instance of Jodit
   *
   * @param element - Selector or HTMLElement
   * @param options - Editor's options
   */
  constructor(e, t) {
    super(t, !0), this.isJodit = !0, this.commands = /* @__PURE__ */ new Map(), this.__selectionLocked = null, this.__wasReadOnly = !1, this.editorIsActive = !1, this.__mode = de, this.__callChangeCount = 0, this.__isSilentChange = !1, this.__elementToPlace = /* @__PURE__ */ new Map();
    try {
      const r = Ot(e, this.o.shadowRoot || this.od);
      if (Pn.isJoditAssigned(r))
        return r.component;
    } catch (r) {
      throw this.destruct(), r;
    }
    this.setStatus(P.beforeInit), this.id = g(Ot(e, this.o.shadowRoot || this.od), "id") || (/* @__PURE__ */ new Date()).getTime().toString(), vi[this.id] = this, this.attachEvents(t), this.e.on(this.ow, "resize", () => {
      this.e && this.e.fire("resize");
    }), this.e.on("prepareWYSIWYGEditor", this.__prepareWYSIWYGEditor), this.selection = new ut(this);
    const i = this.beforeInitHook();
    Ae(i, () => {
      if (this.isInDestruct)
        return;
      this.e.fire("beforeInit", this), H.__init(this), this.e.fire("afterPluginSystemInit", this), this.e.on("changePlace", () => {
        this.setReadOnly(this.o.readonly), this.setDisabled(this.o.disabled);
      }), this.places.length = 0;
      const r = this.addPlace(e, t);
      vi[this.id] = this, Ae(r, () => {
        this.isInDestruct || (this.e && this.e.fire("afterInit", this), Ae(this.afterInitHook()), this.setStatus(P.ready), this.e.fire("afterConstructor", this));
      });
    });
  }
  /**
   * Create and init current editable place
   */
  addPlace(e, t) {
    const i = Ot(e, this.o.shadowRoot || this.od);
    this.attachEvents(t), i.attributes && U(i.attributes).forEach((p) => {
      const m = p.name;
      let w = p.value;
      b.defaultOptions[m] !== void 0 && (!t || t[m] === void 0) && (["readonly", "disabled"].indexOf(m) !== -1 && (w = w === "" || w === "true"), /^[0-9]+(\.)?([0-9]+)?$/.test(w.toString()) && (w = Number(w)), this.options[m] = w);
    });
    let r = this.c.div("jodit-container");
    r.classList.add("jodit"), r.classList.add("jodit-container"), r.classList.add(`jodit_theme_${this.o.theme || "default"}`), qr(this.o.className, r), this.o.containerStyle && _(r, this.o.containerStyle);
    const { styleValues: o } = this.o;
    Object.keys(o).forEach((p) => {
      const m = Ce(p);
      r.style.setProperty(`--jd-${m}`, o[p]);
    }), r.setAttribute("contenteditable", "false");
    let s = null;
    this.o.inline && (["TEXTAREA", "INPUT"].indexOf(i.nodeName) === -1 && (r = i, i.setAttribute(ui, i.className.toString()), s = r.innerHTML, r.innerHTML = ""), r.classList.add("jodit_inline"), r.classList.add("jodit-container")), i !== r && (i.style.display && i.setAttribute(di, i.style.display), i.style.display = "none");
    const a = this.c.div("jodit-workplace", {
      contenteditable: !1
    });
    r.appendChild(a), i.parentNode && i !== r && i.parentNode.insertBefore(r, i), Object.defineProperty(i, "component", {
      enumerable: !1,
      configurable: !0,
      value: this
    });
    const c = this.c.div("jodit-wysiwyg", {
      contenteditable: !0,
      "aria-disabled": !1,
      tabindex: this.o.tabIndex
    });
    a.appendChild(c);
    const d = {
      editor: c,
      element: i,
      container: r,
      workplace: a,
      statusbar: new Bi(this, r),
      options: this.isReady ? Q(t || {}, b.defaultOptions) : this.options,
      history: new pr(this),
      editorWindow: this.ow
    };
    this.__elementToPlace.set(c, d), this.setCurrentPlace(d), this.places.push(d), this.setNativeEditorValue(this.getElementValue());
    const u = this.__initEditor(s), h = this.options;
    return Ae(u, () => {
      h.enableDragAndDropFileToEditor && h.uploader && (h.uploader.url || h.uploader.insertImageAsBase64URI) && this.uploader.bind(this.editor), this.__elementToPlace.get(this.editor) || this.__elementToPlace.set(this.editor, d), this.e.fire("afterAddPlace", d);
    });
  }
  addDisclaimer(e) {
    this.workplace.appendChild(e);
  }
  /**
   * Set current place object
   */
  setCurrentPlace(e) {
    this.currentPlace !== e && (this.isEditorMode() || this.setMode(de), this.currentPlace = e, this.buildToolbar(), this.isReady && this.e.fire("changePlace", e));
  }
  __initEditor(e) {
    const t = this.__createEditor();
    return Ae(t, () => {
      if (this.isInDestruct)
        return;
      if (this.element !== this.container) {
        const r = this.getElementValue();
        r !== this.getEditorValue() && this.setEditorValue(r);
      } else
        e != null && this.setEditorValue(e);
      let i = this.o.defaultMode;
      if (this.o.saveModeInStorage) {
        const r = this.storage.get("jodit_default_mode");
        typeof r == "string" && (i = parseInt(r, 10));
      }
      this.setMode(i), this.o.readonly && (this.__wasReadOnly = !1, this.setReadOnly(!0)), this.o.disabled && this.setDisabled(!0);
      try {
        this.ed.execCommand("defaultParagraphSeparator", !1, this.o.enter.toLowerCase());
      } catch {
      }
    });
  }
  /**
   * Create main DIV element and replace source textarea
   */
  __createEditor() {
    const e = this.editor, t = this.e.fire("createEditor", this);
    return Ae(t, () => {
      this.isInDestruct || ((t === !1 || Qt(t)) && l.safeRemove(e), qr(this.o.editorClassName, this.editor), this.o.style && _(this.editor, this.o.style), this.e.on("synchro", () => {
        this.setEditorValue();
      }).on("focus", () => {
        this.editorIsActive = !0;
      }).on("blur", () => this.editorIsActive = !1), this.__prepareWYSIWYGEditor(), this.o.triggerChangeEvent && this.e.on("change", this.async.debounce(() => {
        this.e && this.e.fire(this.element, "change");
      }, this.defaultTimeout)));
    });
  }
  /**
   * Attach some native event listeners
   */
  __prepareWYSIWYGEditor() {
    const { editor: e } = this;
    if (this.o.direction) {
      const t = this.o.direction.toLowerCase() === "rtl" ? "rtl" : "ltr";
      this.editor.style.direction = t, this.editor.setAttribute("dir", t), this.container.style.direction = t, this.container.setAttribute("dir", t), this.toolbar.setDirection(t);
    }
    this.e.on(e, "mousedown touchstart focus", () => {
      const t = this.__elementToPlace.get(e);
      t && this.setCurrentPlace(t);
    }).on(e, "compositionend", this.synchronizeValues).on(e, "selectionchange selectionstart keydown keyup input keypress dblclick mousedown mouseup click copy cut dragstart drop dragover paste resize touchstart touchend focus blur", (t) => {
      if (this.o.readonly || this.__isSilentChange)
        return;
      const i = this.ew;
      if (!(t instanceof i.KeyboardEvent && t.isComposing) && this.e && this.e.fire) {
        if (this.e.fire(t.type, t) === !1)
          return !1;
        this.synchronizeValues();
      }
    });
  }
  fetch(e, t) {
    const i = new je({
      url: e,
      ...t
    }, this.o.defaultAjaxOptions), r = () => {
      this.e.off("beforeDestruct", r), this.progressbar.progress(100).hide(), i.destruct();
    };
    this.e.one("beforeDestruct", r), this.progressbar.show().progress(30);
    const o = i.send();
    return o.finally(r).catch(() => null), o;
  }
  /**
   * Jodit's Destructor. Remove editor, and return source input
   */
  destruct() {
    var e, t;
    if (this.isInDestruct)
      return;
    this.setStatus(P.beforeDestruct), this.__elementToPlace.clear(), (e = st(this, "storage")) === null || e === void 0 || e.clear(), (t = st(this, "buffer")) === null || t === void 0 || t.clear(), this.commands.clear(), this.__selectionLocked = null, this.e.off(this.ow, "resize"), this.e.off(this.ow), this.e.off(this.od), this.e.off(this.od.body);
    const i = this.editor ? this.getEditorValue() : "";
    this.places.forEach(({ container: r, workplace: o, statusbar: s, element: a, iframe: c, editor: d, history: u }) => {
      if (a) {
        if (a !== r)
          if (a.hasAttribute(di)) {
            const h = g(a, di);
            h && (a.style.display = h, a.removeAttribute(di));
          } else
            a.style.display = "";
        else
          a.hasAttribute(ui) && (a.className = g(a, ui) || "", a.removeAttribute(ui));
        a.hasAttribute("style") && !g(a, "style") && a.removeAttribute("style"), s.destruct(), this.e.off(r), this.e.off(a), this.e.off(d), l.safeRemove(o), l.safeRemove(d), r !== a && l.safeRemove(r), Object.defineProperty(a, "component", {
          enumerable: !1,
          configurable: !0,
          value: null
        }), l.safeRemove(c), r === a && (a.innerHTML = i), u.destruct();
      }
    }), this.places.length = 0, this.currentPlace = {}, delete vi[this.id], super.destruct();
  }
};
q.fatMode = Gr;
q.plugins = H;
q.modules = sr;
q.ns = sr;
q.decorators = {};
q.constants = an;
q.instances = vi;
q.lang = ye;
q.core = {
  Plugin: Y
};
qe([
  J
], q.prototype, "createInside", null);
qe([
  J
], q.prototype, "message", null);
qe([
  J
], q.prototype, "s", null);
qe([
  J
], q.prototype, "uploader", null);
qe([
  J
], q.prototype, "filebrowser", null);
qe([
  ii()
], q.prototype, "synchronizeValues", null);
qe([
  L(":internalChange")
], q.prototype, "updateElementValue", null);
qe([
  k
], q.prototype, "__prepareWYSIWYGEditor", null);
q = Pn = qe([
  Tt(gs)
], q);
function qr(n, e) {
  n && n.split(/\s+/).forEach((t) => e.classList.add(t));
}
const ac = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/> </svg> `, lc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/> </svg> `, cc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/> </svg> `, dc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/> </svg> `, uc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/> </svg> `, hc = '<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"> <g stroke="none" stroke-width="1"> <path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"/> </g> </svg> ', fc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"/> </svg> `, pc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"/> </svg> `, mc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 10 10"> <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/> </svg> `, gc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24" > <circle cx="12" cy="12" r="2.2"/> <circle cx="12" cy="5" r="2.2"/> <circle cx="12" cy="19" r="2.2"/> </svg> `, vc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/> </svg> `, bc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"/> </svg> `, wc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/> </svg> `, yc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/> </svg> `, _c = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/> </svg> `, Sc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/></svg> `, Cc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 32 32"> <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"/> </svg> `, kc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg> `, Ic = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg> `, Ec = '<svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.9814 11.8049C5.59087 11.4144 5.59087 10.7812 5.9814 10.3907L10.224 6.14806C10.6146 5.75754 11.2477 5.75754 11.6383 6.14806C12.0288 6.53859 12.0288 7.17175 11.6383 7.56228L7.39561 11.8049C7.00509 12.1954 6.37192 12.1954 5.9814 11.8049Z"/> <path d="M0.707107 12.0208C0.316582 11.6303 0.316582 10.9971 0.707107 10.6066L10.6066 0.707121C10.9971 0.316597 11.6303 0.316596 12.0208 0.707121C12.4113 1.09764 12.4113 1.73081 12.0208 2.12133L2.12132 12.0208C1.7308 12.4114 1.09763 12.4114 0.707107 12.0208Z"/> </svg> ', zc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/> </svg> `, Tc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"/> </svg> `, xc = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <path stroke="null" d="m42.276011,26.302547c0.098397,-0.76605 0.172194,-1.54407 0.172194,-2.33406s-0.073797,-1.56801 -0.172194,-2.33406l5.202718,-3.961917c0.467384,-0.359086 0.602679,-1.005441 0.29519,-1.532101l-4.919828,-8.29489c-0.307489,-0.51469 -0.947067,-0.730142 -1.500548,-0.51469l-6.125186,2.405877c-1.266856,-0.945594 -2.656707,-1.747553 -4.157255,-2.357999l-0.922468,-6.343855c-0.110696,-0.562568 -0.614979,-1.005441 -1.229957,-1.005441l-9.839656,0c-0.614979,0 -1.119261,0.442873 -1.217657,1.005441l-0.922468,6.343855c-1.500548,0.610446 -2.890399,1.400436 -4.157255,2.357999l-6.125186,-2.405877c-0.553481,-0.203482 -1.193058,0 -1.500548,0.51469l-4.919828,8.29489c-0.307489,0.51469 -0.172194,1.161045 0.29519,1.532101l5.190419,3.961917c-0.098397,0.76605 -0.172194,1.54407 -0.172194,2.33406s0.073797,1.56801 0.172194,2.33406l-5.190419,3.961917c-0.467384,0.359086 -0.602679,1.005441 -0.29519,1.532101l4.919828,8.29489c0.307489,0.51469 0.947067,0.730142 1.500548,0.51469l6.125186,-2.405877c1.266856,0.945594 2.656707,1.747553 4.157255,2.357999l0.922468,6.343855c0.098397,0.562568 0.602679,1.005441 1.217657,1.005441l9.839656,0c0.614979,0 1.119261,-0.442873 1.217657,-1.005441l0.922468,-6.343855c1.500548,-0.610446 2.890399,-1.400436 4.157255,-2.357999l6.125186,2.405877c0.553481,0.203482 1.193058,0 1.500548,-0.51469l4.919828,-8.29489c0.307489,-0.51469 0.172194,-1.161045 -0.29519,-1.532101l-5.190419,-3.961917zm-18.277162,6.044617c-4.759934,0 -8.609699,-3.746465 -8.609699,-8.378677s3.849766,-8.378677 8.609699,-8.378677s8.609699,3.746465 8.609699,8.378677s-3.849766,8.378677 -8.609699,8.378677z"/> </svg> ', Lc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"/> </svg> `, Ac = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/> </svg> `, Rc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/> </svg> `, Pc = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Hr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  angle_down: ac,
  angle_left: lc,
  angle_right: cc,
  angle_up: dc,
  bin: uc,
  cancel: hc,
  center: fc,
  check: pc,
  chevron: mc,
  dots: gc,
  eye: vc,
  file: bc,
  folder: wc,
  info_circle: yc,
  left: _c,
  lock: Sc,
  ok: Cc,
  pencil: kc,
  plus: Ic,
  resize_handler: Ec,
  right: zc,
  save: Tc,
  settings: xc,
  unlock: Lc,
  update: Ac,
  upload: Rc,
  valign: Pc
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Mc = {
  "Type something": "إبدأ في الكتابة...",
  "About Jodit": "حول جوديت",
  "Jodit Editor": "محرر جوديت",
  "Jodit User's Guide": "دليل مستخدم جوديت",
  "contains detailed help for using": "يحتوي على مساعدة مفصلة للاستخدام",
  "For information about the license, please go to our website:": "للحصول على معلومات حول الترخيص، يرجى الذهاب لموقعنا:",
  "Buy full version": "شراء النسخة الكاملة",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "حقوق الطبع والنشر © XDSoft.net - Chupurnov Valeriy. كل الحقوق محفوظة.",
  Anchor: "مِرْساة",
  "Open in new tab": "فتح في نافذة جديدة",
  "Open in fullsize": "فتح المحرر في الحجم الكامل",
  "Clear Formatting": "مسح التنسيق",
  "Fill color or set the text color": "ملء اللون أو تعيين لون النص",
  Redo: "إعادة",
  Undo: "تراجع",
  Bold: "عريض",
  Italic: "مائل",
  "Insert Unordered List": "إدراج قائمة غير مرتبة",
  "Insert Ordered List": "إدراج قائمة مرتبة",
  "Align Center": "محاذاة للوسط",
  "Align Justify": "محاذاة مثبتة",
  "Align Left": "محاذاة لليسار",
  "Align Right": "محاذاة لليمين",
  "Insert Horizontal Line": "إدراج خط أفقي",
  "Insert Image": "إدراج صورة",
  "Insert file": "ادخال الملف",
  "Insert youtube/vimeo video": "إدراج فيديو يوتيوب/فيميو ",
  "Insert link": "إدراج رابط",
  "Font size": "حجم الخط",
  "Font family": "نوع الخط",
  "Insert format block": "إدراج كتلة تنسيق",
  Normal: "عادي",
  "Heading 1": "عنوان 1",
  "Heading 2": "عنوان 2",
  "Heading 3": "عنوان 3",
  "Heading 4": "عنوان 4",
  Quote: "إقتباس",
  Code: "كود",
  Insert: "إدراج",
  "Insert table": "إدراج جدول",
  "Decrease Indent": "تقليل المسافة البادئة",
  "Increase Indent": "زيادة المسافة البادئة",
  "Select Special Character": "تحديد أحرف خاصة",
  "Insert Special Character": "إدراج حرف خاص",
  "Paint format": "تنسيق الرسم",
  "Change mode": "تغيير الوضع",
  Margins: "هوامش",
  top: "أعلى",
  right: "يمين",
  bottom: "أسفل",
  left: "يسار",
  Styles: "الأنماط",
  Classes: "الطبقات",
  Align: "محاذاة",
  Right: "اليمين",
  Center: "الوسط",
  Left: "اليسار",
  "--Not Set--": "--غير مضبوط--",
  Src: "Src",
  Title: "العنوان",
  Alternative: "العنوان البديل",
  Link: "الرابط",
  "Open link in new tab": "افتح الرابط في نافذة جديدة",
  Image: "الصورة",
  file: "ملف",
  Advanced: "متقدم",
  "Image properties": "خصائص الصورة",
  Cancel: "إلغاء",
  Ok: "حسنا",
  "File Browser": "متصفح الملفات",
  "Error on load list": "حدث خطأ في تحميل القائمة ",
  "Error on load folders": "حدث خطأ في تحميل المجلدات",
  "Are you sure?": "هل أنت واثق؟",
  "Enter Directory name": "أدخل اسم المجلد",
  "Create directory": "إنشاء مجلد",
  "type name": "أكتب إسم",
  "Drop image": "إسقاط صورة",
  "Drop file": "إسقاط الملف",
  "or click": "أو أنقر",
  "Alternative text": "النص البديل",
  Upload: "رفع",
  Browse: "تصفح",
  Background: "الخلفية",
  Text: "نص",
  Top: "أعلى",
  Middle: "الوسط",
  Bottom: "الأسفل",
  "Insert column before": "إدراج عمود قبل",
  "Insert column after": "إدراج عمود بعد",
  "Insert row above": "إدراج صف أعلى",
  "Insert row below": "إدراج صف أسفل",
  "Delete table": "حذف الجدول",
  "Delete row": "حذف الصف",
  "Delete column": "حذف العمود",
  "Empty cell": "خلية فارغة",
  "Chars: %d": "%d حرف",
  "Words: %d": "%d كلام",
  "Strike through": "اضرب من خلال",
  Underline: "أكد",
  superscript: "حرف فوقي",
  subscript: "مخطوطة",
  "Cut selection": "قطع الاختيار",
  "Select all": "اختر الكل",
  Break: "استراحة",
  "Search for": "البحث عن",
  "Replace with": "استبدل ب",
  Replace: "محل",
  Paste: "معجون",
  "Choose Content to Paste": "اختر محتوى للصق",
  source: "مصدر",
  bold: "بالخط العريض",
  italic: "مائل",
  brush: "شغل",
  link: "صلة",
  undo: "إلغاء",
  redo: "كرر",
  table: "طاولة",
  image: "صورة",
  eraser: "نظيف",
  paragraph: "فقرة",
  fontsize: "حجم الخط",
  video: "فيديو",
  font: "الخط",
  about: "حول المحرر",
  print: "طباعة",
  underline: "أكد",
  strikethrough: "شطب",
  indent: "المسافة البادئة",
  outdent: "نتوء",
  fullsize: "ملء الشاشة",
  shrink: "الحجم التقليدي",
  hr: "الخط",
  ul: "قائمة",
  ol: "قائمة مرقمة",
  cut: "قطع",
  selectall: "اختر الكل",
  "Embed code": "قانون",
  "Open link": "فتح الرابط",
  "Edit link": "تعديل الرابط",
  "No follow": "سمة Nofollow",
  Unlink: "إزالة الرابط",
  Update: "تحديث",
  pencil: "لتحرير",
  Eye: "مراجعة",
  " URL": "URL",
  Edit: "تحرير",
  "Horizontal align": "محاذاة أفقية",
  Filter: "فلتر",
  "Sort by changed": "عن طريق التغيير",
  "Sort by name": "بالاسم",
  "Sort by size": "حسب الحجم",
  "Add folder": "إضافة مجلد",
  Reset: "إعادة",
  Save: "احتفظ",
  "Save as ...": "حفظ باسم",
  Resize: "تغيير الحجم",
  Crop: "حجم القطع",
  Width: "عرض",
  Height: "ارتفاع",
  "Keep Aspect Ratio": "حافظ على النسب",
  Yes: "أن",
  No: "لا",
  Remove: "حذف",
  Select: "تميز",
  "Select %s": "تميز %s",
  "Vertical align": "محاذاة عمودية",
  Split: "انشق، مزق",
  Merge: "اذهب",
  "Add column": "أضف العمود",
  "Add row": "اضف سطر",
  "License: %s": "رخصة %s",
  Delete: "حذف",
  "Split vertical": "انقسام عمودي",
  "Split horizontal": "تقسيم أفقي",
  Border: "الحدود",
  "Your code is similar to HTML. Keep as HTML?": "يشبه الكود الخاص بك HTML. تبقي كما HTML؟",
  "Paste as HTML": "الصق ك HTML",
  Keep: "احتفظ",
  "Insert as Text": "إدراج كنص",
  "Insert only Text": "إدراج النص فقط",
  "You can only edit your own images. Download this image on the host?": "يمكنك فقط تحرير صورك الخاصة. تحميل هذه الصورة على المضيف؟",
  "The image has been successfully uploaded to the host!": "تم تحميل الصورة بنجاح على الخادم!",
  palette: "لوحة",
  "There are no files": "لا توجد ملفات في هذا الدليل.",
  Rename: "إعادة تسمية",
  "Enter new name": "أدخل اسم جديد",
  preview: "معاينة",
  download: "تحميل",
  "Paste from clipboard": "لصق من الحافظة",
  "Your browser doesn't support direct access to the clipboard.": "متصفحك لا يدعم إمكانية الوصول المباشر إلى الحافظة.",
  "Copy selection": "نسخ التحديد",
  copy: "نسخ",
  "Border radius": "دائرة نصف قطرها الحدود",
  "Show all": "عرض كل",
  Apply: "تطبيق",
  "Please fill out this field": "يرجى ملء هذا المجال",
  "Please enter a web address": "يرجى إدخال عنوان ويب",
  Default: "الافتراضي",
  Circle: "دائرة",
  Dot: "نقطة",
  Quadrate: "المربعة",
  Find: "البحث",
  "Find Previous": "تجد السابقة",
  "Find Next": "تجد التالي",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "للصق المحتوى قادم من Microsoft Word/Excel الوثيقة. هل تريد أن تبقي شكل أو تنظيفه ؟ ",
  "Word Paste Detected": "كلمة لصق الكشف عن",
  Clean: "نظيفة",
  "Insert className": "أدخل اسم الفصل",
  "Press Alt for custom resizing": "اضغط البديل لتغيير حجم مخصص",
  "Line height": "ارتفاع الخط",
  spellcheck: "التدقيق الإملائي",
  "Speech Recognize": "التعرف على الكلام"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Bc = {
  "Type something": "Napiš něco",
  "About Jodit": "O Jodit",
  "Jodit Editor": "Editor Jodit",
  "Free Non-commercial Version": "Verze pro nekomerční použití",
  "Jodit User's Guide": "Jodit Uživatelská příručka",
  "contains detailed help for using": "obsahuje detailní nápovědu",
  "For information about the license, please go to our website:": "Pro informace o licenci, prosím, přejděte na naši stránku:",
  "Buy full version": "Koupit plnou verzi",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Všechna práva vyhrazena.",
  Anchor: "Anchor",
  "Open in new tab": "Otevřít v nové záložce",
  "Open in fullsize": "Otevřít v celoobrazovkovém režimu",
  "Clear Formatting": "Vyčistit formátování",
  "Fill color or set the text color": "Barva výplně a písma",
  Redo: "Vpřed",
  Undo: "Zpět",
  Bold: "Tučné",
  Italic: "Kurzíva",
  "Insert Unordered List": "Odrážky",
  "Insert Ordered List": "Číslovaný seznam",
  "Align Center": "Zarovnat na střed",
  "Align Justify": "Zarovnat do bloku",
  "Align Left": "Zarovnat vlevo",
  "Align Right": "Zarovnat vpravo",
  "Insert Horizontal Line": "Vložit horizontální linku",
  "Insert Image": "Vložit obrázek",
  "Insert file": "Vložit soubor",
  "Insert youtube/vimeo video": "Vložit video (YT/Vimeo)",
  "Insert link": "Vložit odkaz",
  "Font size": "Velikost písma",
  "Font family": "Typ písma",
  "Insert format block": "Formátovat blok",
  Normal: "Normální text",
  "Heading 1": "Nadpis 1",
  "Heading 2": "Nadpis 2",
  "Heading 3": "Nadpis 3",
  "Heading 4": "Nadpis 4",
  Quote: "Citát",
  Code: "Kód",
  Insert: "Vložit",
  "Insert table": "Vložit tabulku",
  "Decrease Indent": "Zmenšit odsazení",
  "Increase Indent": "Zvětšit odsazení",
  "Select Special Character": "Vybrat speciální symbol",
  "Insert Special Character": "Vložit speciální symbol",
  "Paint format": "Použít formát",
  "Change mode": "Změnit mód",
  Margins: "Okraje",
  top: "horní",
  right: "pravý",
  bottom: "spodní",
  left: "levý",
  Styles: "Styly",
  Classes: "Třídy",
  Align: "Zarovnání",
  Right: "Vpravo",
  Center: "Na střed",
  Left: "Vlevo",
  "--Not Set--": "--nenastaveno--",
  Src: "src",
  Title: "Titulek",
  Alternative: "Alternativní text (alt)",
  Link: "Link",
  "Open link in new tab": "Otevřít link v nové záložce",
  Image: "Obrázek",
  file: "soubor",
  Advanced: "Rozšířené",
  "Image properties": "Vlastnosti obrázku",
  Cancel: "Zpět",
  Ok: "Ok",
  "Your code is similar to HTML. Keep as HTML?": "Váš text se podobá HTML. Vložit ho jako HTML?",
  "Paste as HTML": "Vložit jako HTML",
  Keep: "Ponechat originál",
  Clean: "Vyčistit",
  "Insert as Text": "Vložit jako TEXT",
  "Insert only Text": "Vložit pouze TEXT",
  "Word Paste Detected": "Detekován fragment z Wordu nebo Excelu",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Obsah, který vkládáte, je pravděpodobně z Microsoft Word / Excel. Chcete ponechat formát nebo vložit pouze text?",
  "File Browser": "Prohlížeč souborů",
  "Error on load list": "Chyba při načítání seznamu souborů",
  "Error on load folders": "Chyba při načítání složek",
  "Are you sure?": "Jste si jistý(á)?",
  "Enter Directory name": "Název složky",
  "Create directory": "Vytvořit složku",
  "type name": "název",
  "Drop image": "Přetáhněte sem obrázek",
  "Drop file": "Přetáhněte sem soubor",
  "or click": "nebo klikněte",
  "Alternative text": "Alternativní text",
  Browse: "Server",
  Upload: "Nahrát",
  Background: "Pozadí",
  Text: "Text",
  Top: "Nahoru",
  Middle: "Na střed",
  Bottom: "Dolu",
  "Insert column before": "Vložit sloupec před",
  "Insert column after": "Vložit sloupec za",
  "Insert row above": "Vložit řádek nad",
  "Insert row below": "Vložit řádek pod",
  "Delete table": "Vymazat tabulku",
  "Delete row": "Vymazat řádku",
  "Delete column": "Vymazat sloupec",
  "Empty cell": "Vyčistit buňku",
  source: "HTML",
  bold: "tučně",
  italic: "kurzíva",
  brush: "štětec",
  link: "odkaz",
  undo: "zpět",
  redo: "vpřed",
  table: "tabulka",
  image: "obrázek",
  eraser: "guma",
  paragraph: "odstavec",
  fontsize: "velikost písma",
  video: "video",
  font: "písmo",
  about: "о editoru",
  print: "tisk",
  underline: "podtrženo",
  strikethrough: "přeškrtnuto",
  indent: "zvětšit odsazení",
  outdent: "zmenšit odsazení",
  fullsize: "celoobrazovkový režim",
  shrink: "smrsknout",
  hr: "Linka",
  ul: "Odrážka",
  ol: "Číslovaný seznam",
  cut: "Vyjmout",
  selectall: "Označit vše",
  "Embed code": "Kód",
  "Open link": "Otevřít odkaz",
  "Edit link": "Upravit odkaz",
  "No follow": "Atribut no-follow",
  Unlink: "Odstranit odkaz",
  Eye: "Zobrazit",
  pencil: "Chcete-li upravit",
  Update: "Aktualizovat",
  " URL": "URL",
  Edit: "Editovat",
  "Horizontal align": "Horizontální zarovnání",
  Filter: "Filtr",
  "Sort by changed": "Dle poslední změny",
  "Sort by name": "Dle názvu",
  "Sort by size": "Dle velikosti",
  "Add folder": "Přidat složku",
  Reset: "Reset",
  Save: "Uložit",
  "Save as ...": "Uložit jako...",
  Resize: "Změnit rozměr",
  Crop: "Ořezat",
  Width: "Šířka",
  Height: "Výška",
  "Keep Aspect Ratio": "Ponechat poměr",
  Yes: "Ano",
  No: "Ne",
  Remove: "Vyjmout",
  Select: "Označit",
  "Chars: %d": "Znaky: %d",
  "Words: %d": "Slova: %d",
  All: "Vše",
  "Select %s": "Označit %s",
  "Select all": "Označit vše",
  "Vertical align": "Vertikální zarovnání",
  Split: "Rozdělit",
  "Split vertical": "Rozdělit vertikálně",
  "Split horizontal": "Rozdělit horizontálně",
  Merge: "Spojit",
  "Add column": "Přidat sloupec",
  "Add row": "Přidat řádek",
  Delete: "Vymazat",
  Border: "Okraj",
  "License: %s": "Licence: %s",
  "Strike through": "Přeškrtnuto",
  Underline: "Podtrženo",
  superscript: "Horní index",
  subscript: "Dolní index",
  "Cut selection": "Vyjmout označené",
  Break: "Zalomení",
  "Search for": "Najdi",
  "Replace with": "Nahradit za",
  Replace: "Vyměňte",
  Paste: "Vložit",
  "Choose Content to Paste": "Vyber obsah pro vložení",
  "You can only edit your own images. Download this image on the host?": "Můžete upravovat pouze své obrázky. Načíst obrázek?",
  "The image has been successfully uploaded to the host!": "Obrázek byl úspěšně nahrán!",
  palette: "paleta",
  "There are no files": "V tomto adresáři nejsou žádné soubory.",
  Rename: "přejmenovat",
  "Enter new name": "Zadejte nový název",
  preview: "náhled",
  download: "Stažení",
  "Paste from clipboard": "Vložit ze schránky",
  "Your browser doesn't support direct access to the clipboard.": "Váš prohlížeč nepodporuje přímý přístup do schránky.",
  "Copy selection": "Kopírovat výběr",
  copy: "kopírování",
  "Border radius": "Border radius",
  "Show all": "Zobrazit všechny",
  Apply: "Platí",
  "Please fill out this field": "Prosím, vyplňte toto pole",
  "Please enter a web address": "Prosím, zadejte webovou adresu",
  Default: "Výchozí",
  Circle: "Kruh",
  Dot: "Dot",
  Quadrate: "Quadrate",
  Find: "Najít",
  "Find Previous": "Najít Předchozí",
  "Find Next": "Najít Další",
  "Insert className": "Vložte název třídy",
  "Press Alt for custom resizing": "Stiskněte Alt pro vlastní změnu velikosti"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const jc = {
  "Type something": "Bitte geben Sie einen Text ein",
  Advanced: "Fortgeschritten",
  "About Jodit": "Über Jodit",
  "Jodit Editor": "Jodit Editor",
  "Jodit User's Guide": "Das Jodit Benutzerhandbuch",
  "contains detailed help for using": "beinhaltet ausführliche Informationen wie Sie den Editor verwenden können.",
  "For information about the license, please go to our website:": "Für Informationen zur Lizenz, besuchen Sie bitte unsere Web-Präsenz:",
  "Buy full version": "Vollversion kaufen",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.",
  Anchor: "Anker",
  "Open in new tab": "In neuer Registerkarte öffnen",
  "Open in fullsize": "Editor in voller Größe öffnen",
  "Clear Formatting": "Formatierung löschen",
  "Fill color or set the text color": "Füllfarbe oder Textfarbe ändern",
  Redo: "Wiederholen",
  Undo: "Rückgängig machen",
  Bold: "Fett",
  Italic: "Kursiv",
  "Insert Unordered List": "Unsortierte Liste einfügen",
  "Insert Ordered List": "Nummerierte Liste einfügen",
  "Align Center": "Mittig ausrichten",
  "Align Justify": "Blocksatz",
  "Align Left": "Links ausrichten",
  "Align Right": "Rechts ausrichten",
  "Insert Horizontal Line": "Horizontale Linie einfügen",
  "Insert Image": "Bild einfügen",
  "Insert file": "Datei einfügen",
  "Insert youtube/vimeo video": "Youtube/vimeo Video einfügen",
  "Insert link": "Link einfügen",
  "Font size": "Schriftgröße",
  "Font family": "Schriftfamilie",
  "Insert format block": "Formatblock einfügen",
  Normal: "Normal",
  "Heading 1": "Überschrift 1",
  "Heading 2": "Überschrift 2",
  "Heading 3": "Überschrift 3",
  "Heading 4": "Überschrift 4",
  Quote: "Zitat",
  Code: "Code",
  Insert: "Einfügen",
  "Insert table": "Tabelle einfügen",
  "Decrease Indent": "Einzug verkleinern",
  "Increase Indent": "Einzug vergrößern",
  "Select Special Character": "Sonderzeichen auswählen",
  "Insert Special Character": "Sonderzeichen einfügen",
  "Paint format": "Format kopieren",
  "Change mode": "Änderungsmodus",
  Margins: "Ränder",
  top: "Oben",
  right: "Rechts",
  bottom: "Unten",
  left: "Links",
  Styles: "CSS Stil",
  Classes: "CSS Klassen",
  Align: "Ausrichtung",
  Right: "Rechts",
  Center: "Zentriert",
  Left: "Links",
  "--Not Set--": "Keine",
  Src: "Pfad",
  Title: "Titel",
  Alternative: "Alternativer Text",
  Link: "Link",
  "Open link in new tab": "Link in neuem Tab öffnen",
  Image: "Bild",
  file: "Datei",
  "Image properties": "Bildeigenschaften",
  Cancel: "Abbrechen",
  Ok: "OK",
  "Your code is similar to HTML. Keep as HTML?": "Ihr Text ähnelt HTML-Code. Als HTML beibehalten?",
  "Paste as HTML": "Als HTML einfügen?",
  Keep: "Original speichern",
  Clean: "Säubern",
  "Insert as Text": "Als Text einfügen",
  "Word Paste Detected": "In Word formatierter Text erkannt",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder bereinigen?",
  "Insert only Text": "Nur Text einfügen",
  "File Browser": "Dateibrowser",
  "Error on load list": "Fehler beim Laden der Liste",
  "Error on load folders": "Fehler beim Laden der Ordner",
  "Are you sure?": "Sind Sie sicher?",
  "Enter Directory name": "Geben Sie den Verzeichnisnamen ein",
  "Create directory": "Verzeichnis erstellen",
  "type name": "Typname",
  "Drop image": "Bild hier hinziehen",
  "Drop file": "Datei löschen",
  "or click": "oder hier klicken",
  "Alternative text": "Alternativtext",
  Browse: "Auswählen",
  Upload: "Hochladen",
  Background: "Hintergrund",
  Text: "Text",
  Top: "Oben",
  Middle: "Mittig",
  Bottom: "Unten",
  "Insert column before": "Spalte davor einfügen",
  "Insert column after": "Spalte danach einfügen",
  "Insert row above": "Zeile oberhalb einfügen",
  "Insert row below": "Zeile unterhalb einfügen",
  "Delete table": "Tabelle löschen",
  "Delete row": "Zeile löschen",
  "Delete column": "Spalte löschen",
  "Empty cell": "Zelle leeren",
  Delete: "Löschen",
  "Strike through": "Durchstreichen",
  Underline: "Unterstreichen",
  Break: "Pause",
  "Search for": "Suche nach",
  "Replace with": "Ersetzen durch",
  Replace: "Ersetzen",
  Edit: "Bearbeiten",
  "Vertical align": "Vertikale Ausrichtung",
  "Horizontal align": "Horizontale Ausrichtung",
  Filter: "Filter",
  "Sort by changed": "Sortieren nach geändert",
  "Sort by name": "Nach Name sortieren",
  "Sort by size": "Nach Größe sortiert",
  "Add folder": "Ordner hinzufügen",
  "Split vertical": "Vertikal unterteilen",
  "Split horizontal": "Horizontal unterteilen",
  Split: "Unterteilen",
  Merge: "Vereinen",
  "Add column": "Spalte hinzufügen",
  "Add row": "Zeile hinzufügen",
  Border: "Rand",
  "Embed code": "Code einbetten",
  Update: "Aktualisieren",
  superscript: "Hochstellen",
  subscript: "Tiefstellen",
  "Cut selection": "Auswahl ausschneiden",
  Paste: "Einfügen",
  "Choose Content to Paste": "Wählen Sie den Inhalt zum Einfügen aus",
  "Chars: %d": "Zeichen: %d",
  "Words: %d": "Wörter: %d",
  All: "Alles markieren",
  "Select %s": "Markieren: %s",
  "Select all": "Alles markieren",
  source: "HTML",
  bold: "Fett gedruckt",
  italic: "Kursiv",
  brush: "Bürste",
  link: "Verknüpfung",
  undo: "Rückgängig machen",
  redo: "Wiederholen",
  table: "Tabelle",
  image: "Bild",
  eraser: "Radiergummi",
  paragraph: "Absatz",
  fontsize: "Schriftgröße",
  video: "Video",
  font: "Schriftart",
  about: "Über",
  print: "Drucken",
  underline: "Unterstreichen",
  strikethrough: "Durchstreichen",
  indent: "Einzug",
  outdent: "Herausstellen",
  fullsize: "Vollgröße",
  shrink: "Schrumpfen",
  hr: "die Linie",
  ul: "Liste von",
  ol: "Nummerierte Liste",
  "Lower Alpha": "Standard, Alphabet (klein)",
  "Upper Alpha": "Standard, Alphabet (gross)",
  "Lower Roman": "Römisch (klein)",
  "Upper Roman": "Römisch (gross)",
  "Lower Greek": "Griechisch",
  cut: "Schneiden",
  selectall: "Wählen Sie Alle aus",
  "Open link": "Link öffnen",
  "Edit link": "Link bearbeiten",
  "No follow": "Nofollow-Attribut",
  Unlink: "Link entfernen",
  Eye: "Ansehen",
  pencil: "Bearbeiten",
  " URL": "URL",
  Reset: "Wiederherstellen",
  Save: "Speichern",
  "Save as ...": "Speichern als",
  Resize: "Größe ändern",
  Crop: "Größe anpassen",
  Width: "Breite",
  Height: "Höhe",
  "Keep Aspect Ratio": "Seitenverhältnis beibehalten",
  Yes: "Ja",
  No: "Nein",
  Remove: "Entfernen",
  Select: "Markieren",
  "You can only edit your own images. Download this image on the host?": "Sie können nur Ihre eigenen Bilder bearbeiten. Dieses Bild auf den Host herunterladen?",
  "The image has been successfully uploaded to the host!": "Das Bild wurde erfolgreich auf den Server hochgeladen!",
  palette: "Palette",
  "There are no files": "In diesem Verzeichnis befinden sich keine Dateien.",
  Rename: "Umbenennen",
  "Enter new name": "Geben Sie einen neuen Namen ein",
  preview: "Vorschau",
  download: "Herunterladen",
  "Paste from clipboard": "Aus Zwischenablage einfügen",
  "Your browser doesn't support direct access to the clipboard.": "Ihr Browser unterstützt keinen direkten Zugriff auf die Zwischenablage.",
  "Copy selection": "Auswahl kopieren",
  copy: "Kopieren",
  "Border radius": "Radius für abgerundete Ecken",
  "Show all": "Alle anzeigen",
  Apply: "Anwenden",
  "Please fill out this field": "Bitte füllen Sie dieses Feld aus",
  "Please enter a web address": "Bitte geben Sie eine Web-Adresse ein",
  Default: "Standard",
  Circle: "Kreis",
  Dot: "Punkte",
  Quadrate: "Quadrate",
  Find: "Suchen",
  "Find Previous": "Suche vorherige",
  "Find Next": "Weitersuchen",
  "Insert className": "className (CSS) einfügen",
  "Press Alt for custom resizing": "Drücken Sie Alt für benutzerdefinierte Größenanpassung"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Nc = {
  "Type something": "Start writing...",
  pencil: "Edit",
  Quadrate: "Square"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Dc = {
  "Type something": "Escriba algo...",
  Advanced: "Avanzado",
  "About Jodit": "Acerca de Jodit",
  "Jodit Editor": "Jodit Editor",
  "Jodit User's Guide": "Guía de usuario Jodit",
  "contains detailed help for using": "contiene ayuda detallada para el uso.",
  "For information about the license, please go to our website:": "Para información sobre la licencia, por favor visite nuestro sitio:",
  "Buy full version": "Compre la versión completa",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Todos los derechos reservados.",
  Anchor: "Anclar",
  "Open in new tab": "Abrir en nueva pestaña",
  "Open in fullsize": "Abrir editor en pantalla completa",
  "Clear Formatting": "Limpiar formato",
  "Fill color or set the text color": "Color de relleno o de letra",
  Redo: "Rehacer",
  Undo: "Deshacer",
  Bold: "Negrita",
  Italic: "Cursiva",
  "Insert Unordered List": "Insertar lista no ordenada",
  "Insert Ordered List": "Insertar lista ordenada",
  "Align Center": "Alinear Centrado",
  "Align Justify": "Alinear Justificado",
  "Align Left": "Alinear Izquierda",
  "Align Right": "Alinear Derecha",
  "Insert Horizontal Line": "Insertar línea horizontal",
  "Insert Image": "Insertar imagen",
  "Insert file": "Insertar archivo",
  "Insert youtube/vimeo video": "Insertar video de Youtube/vimeo",
  "Insert link": "Insertar vínculo",
  "Font size": "Tamaño de letra",
  "Font family": "Familia de letra",
  "Insert format block": "Insertar bloque",
  Normal: "Normal",
  "Heading 1": "Encabezado 1",
  "Heading 2": "Encabezado 2",
  "Heading 3": "Encabezado 3",
  "Heading 4": "Encabezado 4",
  Quote: "Cita",
  Code: "Código",
  Insert: "Insertar",
  "Insert table": "Insertar tabla",
  "Decrease Indent": "Disminuir sangría",
  "Increase Indent": "Aumentar sangría",
  "Select Special Character": "Seleccionar caracter especial",
  "Insert Special Character": "Insertar caracter especial",
  "Paint format": "Copiar formato",
  "Change mode": "Cambiar modo",
  Margins: "Márgenes",
  top: "arriba",
  right: "derecha",
  bottom: "abajo",
  left: "izquierda",
  Styles: "Estilos CSS",
  Classes: "Clases CSS",
  Align: "Alinear",
  Right: "Derecha",
  Center: "Centrado",
  Left: "Izquierda",
  "--Not Set--": "--No Establecido--",
  Src: "Fuente",
  Title: "Título",
  Alternative: "Texto Alternativo",
  Filter: "Filtrar",
  Link: "Vínculo",
  "Open link in new tab": "Abrir vínculo en nueva pestaña",
  Image: "Imagen",
  file: "Archivo",
  "Image properties": "Propiedades de imagen",
  Cancel: "Cancelar",
  Ok: "Aceptar",
  "Your code is similar to HTML. Keep as HTML?": "El código es similar a HTML. ¿Mantener como HTML?",
  "Paste as HTML": "Pegar como HTML?",
  Keep: "Mantener",
  Clean: "Limpiar",
  "Insert as Text": "Insertar como texto",
  "Word Paste Detected": "Pegado desde Word detectado",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "El contenido pegado proviene de un documento de Microsoft Word/Excel. ¿Desea mantener el formato o limpiarlo?",
  "Insert only Text": "Insertar solo texto",
  "File Browser": "Buscar archivo",
  "Error on load list": "Error al cargar la lista",
  "Error on load folders": "Error al cargar las carpetas",
  "Are you sure?": "¿Está seguro?",
  "Enter Directory name": "Entre nombre de carpeta",
  "Create directory": "Crear carpeta",
  "type name": "Entre el nombre",
  "Drop image": "Soltar imagen",
  "Drop file": "Soltar archivo",
  "or click": "o click",
  "Alternative text": "Texto alternativo",
  Browse: "Buscar",
  Upload: "Subir",
  Background: "Fondo",
  Text: "Texto",
  Top: "Arriba",
  Middle: "Centro",
  Bottom: "Abajo",
  "Insert column before": "Insertar columna antes",
  "Insert column after": "Interar columna después",
  "Insert row above": "Insertar fila arriba",
  "Insert row below": "Insertar fila debajo",
  "Delete table": "Borrar tabla",
  "Delete row": "Borrar fila",
  "Delete column": "Borrar columna",
  "Empty cell": "Vaciar celda",
  Delete: "Borrar",
  "Strike through": "Tachado",
  Underline: "Subrayado",
  Break: "Pausa",
  "Search for": "Buscar",
  "Replace with": "Reemplazar con",
  Replace: "Reemplazar",
  Edit: "Editar",
  "Vertical align": "Alineación vertical",
  "Horizontal align": "Alineación horizontal",
  "Sort by changed": "Ordenar por fecha modificación",
  "Sort by name": "Ordenar por nombre",
  "Sort by size": "Ordenar por tamaño",
  "Add folder": "Agregar carpeta",
  Split: "Dividir",
  "Split vertical": "Dividir vertical",
  "Split horizontal": "Dividir horizontal",
  Merge: "Mezclar",
  "Add column": "Agregar columna",
  "Add row": "Agregar fila",
  Border: "Borde",
  "Embed code": "Incluir código",
  Update: "Actualizar",
  superscript: "superíndice",
  subscript: "subíndice",
  "Cut selection": "Cortar selección",
  Paste: "Pegar",
  "Choose Content to Paste": "Seleccionar contenido para pegar",
  "Chars: %d": "Caracteres: %d",
  "Words: %d": "Palabras: %d",
  All: "Todo",
  "Select %s": "Seleccionar: %s",
  "Select all": "Seleccionar todo",
  source: "HTML",
  bold: "negrita",
  italic: "cursiva",
  brush: "Brocha",
  link: "Vínculo",
  undo: "deshacer",
  redo: "rehacer",
  table: "Tabla",
  image: "Imagen",
  eraser: "Borrar",
  paragraph: "Párrafo",
  fontsize: "Tamaño de letra",
  video: "Video",
  font: "Letra",
  about: "Acerca de",
  print: "Imprimir",
  underline: "subrayar",
  strikethrough: "tachar",
  indent: "sangría",
  outdent: "quitar sangría",
  fullsize: "Tamaño completo",
  shrink: "encoger",
  hr: "línea horizontal",
  ul: "lista sin ordenar",
  ol: "lista ordenada",
  cut: "Cortar",
  selectall: "Seleccionar todo",
  "Open link": "Abrir vínculo",
  "Edit link": "Editar vínculo",
  "No follow": "No seguir",
  Unlink: "Desvincular",
  Eye: "Ver",
  pencil: "Para editar",
  " URL": "URL",
  Reset: "Resetear",
  Save: "Guardar",
  "Save as ...": "Guardar como...",
  Resize: "Redimensionar",
  Crop: "Recortar",
  Width: "Ancho",
  Height: "Alto",
  "Keep Aspect Ratio": "Mantener relación de aspecto",
  Yes: "Si",
  No: "No",
  Remove: "Quitar",
  Select: "Seleccionar",
  "You can only edit your own images. Download this image on the host?": "Solo puedes editar tus propias imágenes. ¿Descargar esta imagen en el servidor?",
  "The image has been successfully uploaded to the host!": "¡La imagen se ha subido correctamente al servidor!",
  palette: "paleta",
  "There are no files": "No hay archivos en este directorio.",
  Rename: "renombrar",
  "Enter new name": "Ingresa un nuevo nombre",
  preview: "avance",
  download: "Descargar",
  "Paste from clipboard": "Pegar desde el portapapeles",
  "Your browser doesn't support direct access to the clipboard.": "Su navegador no soporta el acceso directo en el portapapeles.",
  "Copy selection": "Selección de copia",
  copy: "copia",
  "Border radius": "Radio frontera",
  "Show all": "Mostrar todos los",
  Apply: "Aplicar",
  "Please fill out this field": "Por favor, rellene este campo",
  "Please enter a web address": "Por favor, introduzca una dirección web",
  Default: "Predeterminado",
  Circle: "Círculo",
  Dot: "Punto",
  Quadrate: "Cuadro",
  "Lower Alpha": "Letra Minúscula",
  "Lower Greek": "Griego Minúscula",
  "Lower Roman": "Romano Minúscula",
  "Upper Alpha": "Letra Mayúscula",
  "Upper Roman": "Romano Mayúscula",
  Find: "Encontrar",
  "Find Previous": "Buscar Anterior",
  "Find Next": "Buscar Siguiente",
  "Insert className": "Insertar nombre de clase",
  "Press Alt for custom resizing": "Presione Alt para cambiar el tamaño personalizado"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Oc = {
  "Type something": "Kirjoita jotain...",
  Advanced: "Avanzado",
  "About Jodit": "Tietoja Jodit:ista",
  "Jodit Editor": "Jodit Editor",
  "Jodit User's Guide": "Jodit käyttäjän ohje",
  "contains detailed help for using": "sisältää tarkempaa tietoa käyttämiseen",
  "For information about the license, please go to our website:": "Tietoa lisensoinnista, vieraile verkkosivuillamme:",
  "Buy full version": "Osta täysi versio",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Kaikki oikeudet pidätetään.",
  Anchor: "Ankkuri",
  "Open in new tab": "Avaa uudessa välilehdessä",
  "Open in fullsize": "Avaa täysikokoisena",
  "Clear Formatting": "Poista muotoilu",
  "Fill color or set the text color": "Täytä värillä tai aseta tekstin väri",
  Redo: "Tee uudelleen",
  Undo: "Peruuta",
  Bold: "Lihavoitu",
  Italic: "Kursiivi",
  "Insert Unordered List": "Lisää järjestämätön lista",
  "Insert Ordered List": "Lisää järjestetty lista",
  "Align Center": "Asemoi keskelle",
  "Align Justify": "Asemoi tasavälein",
  "Align Left": "Asemoi vasemmalle",
  "Align Right": "Asemoi oikealle",
  "Insert Horizontal Line": "Lisää vaakasuuntainen viiva",
  "Insert Image": "Lisää kuva",
  "Insert file": "Lisää tiedosto",
  "Insert youtube/vimeo video": "Lisää Youtube-/vimeo- video",
  "Insert link": "Lisää linkki",
  "Font size": "Kirjasimen koko",
  "Font family": "Kirjasimen nimi",
  "Insert format block": "Lisää muotoilualue",
  Normal: "Normaali",
  "Heading 1": "Otsikko 1",
  "Heading 2": "Otsikko 2",
  "Heading 3": "Otsikko 3",
  "Heading 4": "Otsikko 4",
  Quote: "Lainaus",
  Code: "Koodi",
  Insert: "Lisää",
  "Insert table": "Lisää taulukko",
  "Decrease Indent": "Pienennä sisennystä",
  "Increase Indent": "Lisää sisennystä",
  "Select Special Character": "Valitse erikoismerkki",
  "Insert Special Character": "Lisää erikoismerkki",
  "Paint format": "Maalaa muotoilu",
  "Change mode": "Vaihda tilaa",
  Margins: "Marginaalit",
  top: "ylös",
  right: "oikealle",
  bottom: "alas",
  left: "vasemmalle",
  Styles: "CSS-tyylit",
  Classes: "CSS-luokat",
  Align: "Asemointi",
  Right: "Oikea",
  Center: "Keskellä",
  Left: "Vasen",
  "--Not Set--": "--Ei asetettu--",
  Src: "Fuente",
  Title: "Otsikko",
  Alternative: "Vaihtoehtoinen teksti",
  Filter: "Suodatin",
  Link: "Linkki",
  "Open link in new tab": "Avaa uudessa välilehdessä",
  Image: "Kuva",
  file: "Tiedosto",
  "Image properties": "Kuvan ominaisuudet",
  Cancel: "Peruuta",
  Ok: "Ok",
  "Your code is similar to HTML. Keep as HTML?": "Koodi on HTML:n tapaista. Säilytetäänkö HTML?",
  "Paste as HTML": "Liitä HTML:nä?",
  Keep: "Säilytä",
  Clean: "Tyhjennä",
  "Insert as Text": "Lisää tekstinä",
  "Word Paste Detected": "Word liittäminen havaittu",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Liitetty sisältö tulee Microsoft Word-/Excel- tiedostosta. Haluatko säilyttää muotoilun vai poistaa sen?",
  "Insert only Text": "Lisää vain teksti",
  "File Browser": "Tiedostoselain",
  "Error on load list": "Virhe listan latauksessa",
  "Error on load folders": "Virhe kansioiden latauksessa",
  "Are you sure?": "Oletko varma?",
  "Enter Directory name": "Syötä hakemiston nimi",
  "Create directory": "Luo hakemisto",
  "type name": "Syötä nimi",
  "Drop image": "Pudota kuva",
  "Drop file": "Pudota tiedosto",
  "or click": "tai klikkaa",
  "Alternative text": "Vaihtoehtoinen teksti",
  Browse: "Selaa",
  Upload: "Lataa",
  Background: "Tausta",
  Text: "Teksti",
  Top: "Ylös",
  Middle: "Keskelle",
  Bottom: "Alas",
  "Insert column before": "Lisää sarake ennen",
  "Insert column after": "Lisää sarake jälkeen",
  "Insert row above": "Lisää rivi ylös",
  "Insert row below": "Lisää rivi alle",
  "Delete table": "Poista taulukko",
  "Delete row": "Poista rivi",
  "Delete column": "Poista sarake",
  "Empty cell": "Tyhjennä solu",
  Delete: "Poista",
  "Strike through": "Yliviivaus",
  Underline: "Alleviivaus",
  Break: "Vaihto",
  "Search for": "Etsi arvoa",
  "Replace with": "Korvaa arvolla",
  Replace: "Korvaa",
  Edit: "Muokkaa",
  "Vertical align": "Pystyasemointi",
  "Horizontal align": "Vaaka-asemointi",
  "Sort by changed": "Järjestä muuttuneilla",
  "Sort by name": "Järjestä nimellä",
  "Sort by size": "Järjestä koolla",
  "Add folder": "Lisää kansio",
  Split: "Jaa",
  "Split vertical": "Jaa pystysuuntaisesti",
  "Split horizontal": "Jaa vaakasuuntaisesti",
  Merge: "Yhdistä",
  "Add column": "Lisää sarake",
  "Add row": "Lisää rivi",
  Border: "Reuna",
  "Embed code": "Sisällytä koodi",
  Update: "Päivitä",
  superscript: "yläviite",
  subscript: "alaviite",
  "Cut selection": "Leikkaa valinta",
  Paste: "Liitä",
  "Choose Content to Paste": "Valitse liitettävä sisältö",
  "Chars: %d": "Merkit: %d",
  "Words: %d": "Sanat: %d",
  All: "Kaikki",
  "Select %s": "Valitse: %s",
  "Select all": "Valitse kaikki",
  source: "HTML",
  bold: "lihavoitu",
  italic: "kursiivi",
  brush: "sivellin",
  link: "linkki",
  undo: "peruuta",
  redo: "tee uudelleen",
  table: "taulukko",
  image: "kuva",
  eraser: "pyyhekumi",
  paragraph: "kappale",
  fontsize: "tekstin koko",
  video: "video",
  font: "kirjasin",
  about: "tietoja",
  print: "tulosta",
  underline: "alleviivaa",
  strikethrough: "yliviivaa",
  indent: "sisennä",
  outdent: "pienennä sisennystä",
  fullsize: "täysikokoinen",
  shrink: "pienennä",
  hr: "vaakaviiva",
  ul: "järjestetty lista",
  ol: "järjestämätön lista",
  cut: "leikkaa",
  selectall: "valitse kaikki",
  "Open link": "Avaa linkki",
  "Edit link": "Muokkaa linkkiä",
  "No follow": "Älä seuraa",
  Unlink: "Pura linkki",
  Eye: "Ver",
  pencil: "Muokkaa",
  " URL": "URL",
  Reset: "Nollaa",
  Save: "Tallenna",
  "Save as ...": "Tallenna nimellä ...",
  Resize: "Muuta kokoa",
  Crop: "Rajaa",
  Width: "Leveys",
  Height: "Korkeus",
  "Keep Aspect Ratio": "Säilytä kuvasuhde",
  Yes: "Kyllä",
  No: "Ei",
  Remove: "Poista",
  Select: "Valitse",
  "You can only edit your own images. Download this image on the host?": "Voit muokata vain omia kuvia. Lataa tämä kuva palvelimelle?",
  "The image has been successfully uploaded to the host!": "Kuva on onnistuneesti ladattu palvelimelle!",
  palette: "paletti",
  "There are no files": "Tiedostoja ei ole",
  Rename: "Nimeä uudelleen",
  "Enter new name": "Syötä uusi nimi",
  preview: "esikatselu",
  download: "Lataa",
  "Paste from clipboard": "Liitä leikepöydältä",
  "Your browser doesn't support direct access to the clipboard.": "Selaimesi ei tue suoraa pääsyä leikepöydälle.",
  "Copy selection": "Kopioi valinta",
  copy: "kopioi",
  "Border radius": "Reunan pyöristys",
  "Show all": "Näytä kaikki",
  Apply: "Käytä",
  "Please fill out this field": "Täytä tämä kenttä",
  "Please enter a web address": "Annan web-osoite",
  Default: "Oletus",
  Circle: "Ympyrä",
  Dot: "Piste",
  Quadrate: "Neliö",
  "Lower Alpha": "Pieni aakkosellinen",
  "Lower Greek": "Pieni kreikkalainen",
  "Lower Roman": "Pieni roomalainen",
  "Upper Alpha": "Suuri aakkosellinen",
  "Upper Roman": "Suuri roomalainen",
  Find: "Hae",
  "Find Previous": "Hae edellinen",
  "Find Next": "Hae seuraava",
  "Insert className": "Lisää luokkanimi",
  "Press Alt for custom resizing": "Paina Alt muokattuun koon muuttamiseen",
  "Class name": "Luokan nimi"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const qc = {
  "Type something": "Ecrivez ici",
  "About Jodit": "A propos de Jodit",
  "Jodit Editor": "Editeur Jodit",
  "Jodit User's Guide": "Guide de l'utilisateur",
  "contains detailed help for using": "Aide détaillée à l'utilisation",
  "For information about the license, please go to our website:": "Consulter la licence sur notre site web:",
  "Buy full version": "Acheter la version complète",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Tous droits réservés.",
  Anchor: "Ancre",
  "Open in new tab": "Ouvrir dans un nouvel onglet",
  "Open in fullsize": "Ouvrir l'éditeur en pleine page",
  "Clear Formatting": "Supprimer le formattage",
  "Fill color or set the text color": "Modifier la couleur du fond ou du texte",
  Redo: "Refaire",
  Undo: "Défaire",
  Bold: "Gras",
  Italic: "Italique",
  "Insert Unordered List": "Liste non ordonnée",
  "Insert Ordered List": "Liste ordonnée",
  "Align Center": "Centrer",
  "Align Justify": "Justifier",
  "Align Left": "Aligner à gauche ",
  "Align Right": "Aligner à droite",
  "Insert Horizontal Line": "Insérer une ligne horizontale",
  "Insert Image": "Insérer une image",
  "Insert file": "Insérer un fichier",
  "Insert youtube/vimeo video": "Insérer une vidéo",
  "Insert link": "Insérer un lien",
  "Font size": "Taille des caractères",
  "Font family": "Famille des caractères",
  "Insert format block": "Bloc formatté",
  Normal: "Normal",
  "Heading 1": "Titre 1",
  "Heading 2": "Titre 2",
  "Heading 3": "Titre 3",
  "Heading 4": "Titre 4",
  Quote: "Citation",
  Code: "Code",
  Insert: "Insérer",
  "Insert table": "Insérer un tableau",
  "Decrease Indent": "Diminuer le retrait",
  "Increase Indent": "Retrait plus",
  "Select Special Character": "Sélectionnez un caractère spécial",
  "Insert Special Character": "Insérer un caractère spécial",
  "Paint format": "Cloner le format",
  "Change mode": "Mode wysiwyg <-> code html",
  Margins: "Marges",
  top: "haut",
  right: "droite",
  bottom: "Bas",
  left: "gauche",
  Styles: "Styles",
  Classes: "Classes",
  Align: "Alignement",
  Right: "Droite",
  Center: "Centre",
  Left: "Gauche",
  "--Not Set--": "--Non disponible--",
  Src: "Source",
  Title: "Titre",
  Alternative: "Alternative",
  Filter: "Filtre",
  Link: "Lien",
  "Open link in new tab": "Ouvrir le lien dans un nouvel onglet",
  Image: "Image",
  file: "fichier",
  Advanced: "Avancé",
  "Image properties": "Propriétés de l'image",
  Cancel: "Annuler",
  Ok: "OK",
  "Your code is similar to HTML. Keep as HTML?": "Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?",
  "Paste as HTML": "Coller en HTML?",
  Keep: "Sauvegarder l'original",
  Clean: "Nettoyer",
  "Insert as Text": "Coller en tant que texte",
  "Word Paste Detected": "C'est peut-être un fragment de Word ou Excel",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Le contenu que vous insérez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?",
  "Insert only Text": "Coller le texte seulement",
  "File Browser": "Explorateur de fichiers",
  "Error on load list": "Erreur de liste de chargement",
  "Error on load folders": "Erreur de dossier de chargement",
  "Are you sure?": "Etes-vous sûrs ?",
  "Enter Directory name": "Entrer le nom de dossier",
  "Create directory": "Créer un dossier",
  "type name": "type de fichier",
  "Drop image": "Coller une image",
  "Drop file": "Déposer un fichier",
  "or click": "ou cliquer",
  "Alternative text": "Texte de remplacemement",
  Browse: "Chercher",
  Upload: "Charger",
  Background: "Arrière-plan",
  Border: "Bordure",
  Text: "Texte",
  Top: "Haut",
  Middle: "Milieu",
  Bottom: "Bas",
  "Insert column before": "Insérer une colonne avant",
  "Insert column after": "Insérer une colonne après",
  "Insert row above": "Insérer une ligne au dessus",
  "Insert row below": "Insérer une ligne en dessous",
  "Delete table": "Supprimer le tableau",
  "Delete row": "Supprimer la ligne",
  "Delete column": "Supprimer la colonne",
  "Empty cell": "Vider la cellule",
  "Chars: %d": "Symboles: %d",
  "Words: %d": "Mots: %d",
  Split: "Split",
  "Split vertical": "Split vertical",
  "Split horizontal": "Split horizontal",
  "Strike through": "Barrer",
  Underline: "Souligner",
  superscript: "exposant",
  subscript: "indice",
  "Cut selection": "Couper la sélection",
  "Select all": "Tout sélectionner",
  Break: "Pause",
  "Search for": "Rechercher",
  "Replace with": "Remplacer par",
  Replace: "Remplacer",
  Paste: "Coller",
  "Choose Content to Paste": "Choisissez le contenu à coller",
  source: "la source",
  bold: "gras",
  italic: "italique",
  brush: "pinceau",
  link: "lien",
  undo: "annuler",
  redo: "refaire",
  table: "tableau",
  image: "image",
  eraser: "gomme",
  paragraph: "clause",
  fontsize: "taille de police",
  video: "Video",
  font: "police",
  about: "à propos de l'éditeur",
  print: "impression",
  underline: "souligné",
  strikethrough: "barré",
  indent: "indentation",
  outdent: "retrait",
  fullsize: "taille réelle",
  shrink: "taille conventionnelle",
  hr: "la ligne",
  ul: "Liste",
  ol: "Liste numérotée",
  cut: "Couper",
  selectall: "Sélectionner tout",
  "Open link": "Ouvrir le lien",
  "Edit link": "Modifier le lien",
  "No follow": "Attribut Nofollow",
  Unlink: "Supprimer le lien",
  Eye: "Voir",
  pencil: "Pour éditer",
  " URL": "URL",
  Reset: "Restaurer",
  Save: "Sauvegarder",
  "Save as ...": "Enregistrer sous",
  Resize: "Changer la taille",
  Crop: "Taille de garniture",
  Width: "Largeur",
  Height: "Hauteur",
  "Keep Aspect Ratio": "Garder les proportions",
  Yes: "Oui",
  No: "Non",
  Remove: "Supprimer",
  Select: "Mettre en évidence",
  "Select %s": "Mettre en évidence: %s",
  Update: "Mettre à jour",
  "Vertical align": "Alignement vertical",
  Merge: "aller",
  "Add column": "Ajouter une colonne",
  "Add row": "Ajouter une rangée",
  Delete: "Effacer",
  "Horizontal align": "Alignement horizontal",
  "Sort by changed": "Trier par modification",
  "Sort by name": "Trier par nom",
  "Sort by size": "Trier par taille",
  "Add folder": "Créer le dossier",
  "You can only edit your own images. Download this image on the host?": "Vous ne pouvez éditer que vos propres images. Téléchargez cette image sur l'hôte?",
  "The image has been successfully uploaded to the host!": "L'image a été téléchargée avec succès sur le serveur!",
  palette: "Palette",
  "There are no files": "Il n'y a aucun fichier dans ce répertoire.",
  Rename: "renommer",
  "Enter new name": "Entrez un nouveau nom",
  preview: "Aperçu",
  download: "Télécharger",
  "Paste from clipboard": "Coller à partir du presse-papiers",
  "Your browser doesn't support direct access to the clipboard.": "Votre navigateur ne prend pas en charge l'accès direct au presse-papiers.",
  "Copy selection": "Copier la sélection",
  copy: "copie",
  "Border radius": "Rayon des bordures",
  "Show all": "Afficher tous",
  Apply: "Appliquer",
  "Please fill out this field": "Veuillez remplir ce champ",
  "Please enter a web address": "Veuillez entrer une adresse web",
  Default: "Par défaut",
  Circle: "Cercle",
  Dot: "Point",
  Quadrate: "Quadratique",
  Find: "Trouver",
  "Find Previous": "Précédent",
  "Find Next": "Suivant",
  "Insert className": "Insérer un nom de classe",
  "Press Alt for custom resizing": "Appuyez sur Alt pour un redimensionnement personnalisé"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Hc = {
  "Type something": "הקלד משהו...",
  Advanced: "מתקדם",
  "About Jodit": "About Jodit",
  "Jodit Editor": "Jodit Editor",
  "Jodit User's Guide": "Jodit User's Guide",
  "contains detailed help for using": "contains detailed help for using.",
  "For information about the license, please go to our website:": "For information about the license, please go to our website:",
  "Buy full version": "Buy full version",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.",
  Anchor: "מקום עיגון",
  "Open in new tab": "פתח בכרטיסיה חדשה",
  "Open in fullsize": "פתח את העורך בחלון חדש",
  "Clear Formatting": "נקה עיצוב",
  "Fill color or set the text color": "שנה צבע טקסט או רקע",
  Redo: "בצע שוב",
  Undo: "בטל",
  Bold: "מודגש",
  Italic: "נטוי",
  "Insert Unordered List": "הכנס רשימת תבליטים",
  "Insert Ordered List": "הכנס רשימה ממוספרת",
  "Align Center": "מרכז",
  "Align Justify": "ישר ",
  "Align Left": "ישר לשמאל",
  "Align Right": "ישר לימין",
  "Insert Horizontal Line": "הכנס קו אופקי",
  "Insert Image": "הכנס תמונה",
  "Insert file": "הכנס קובץ",
  "Insert youtube/vimeo video": "הכנס סרטון וידאו מYouTube/Vimeo",
  "Insert link": "הכנס קישור",
  "Font size": "גודל גופן",
  "Font family": "גופן",
  "Insert format block": "מעוצב מראש",
  Normal: "רגיל",
  "Heading 1": "כותרת 1",
  "Heading 2": "כותרת 2",
  "Heading 3": "כותרת 3",
  "Heading 4": "כותרת 4",
  Quote: "ציטוט",
  Code: "קוד",
  Insert: "הכנס",
  "Insert table": "הכנס טבלה",
  "Decrease Indent": "הקטן כניסה",
  "Increase Indent": "הגדל כניסה",
  "Select Special Character": "בחר תו מיוחד",
  "Insert Special Character": "הכנס תו מיוחד",
  "Paint format": "העתק עיצוב",
  "Change mode": "החלף מצב",
  Margins: "ריווח",
  top: "עליון",
  right: "ימין",
  bottom: "תחתון",
  left: "שמאל",
  Styles: "עיצוב CSS",
  Classes: "מחלקת CSS",
  Align: "יישור",
  Right: "ימין",
  Center: "מרכז",
  Left: "שמאל",
  "--Not Set--": "--לא נקבע--",
  Src: "מקור",
  Title: "כותרת",
  Alternative: "כיתוב חלופי",
  Link: "קישור",
  "Open link in new tab": "פתח בכרטיסיה חדשה",
  Image: "תמונה",
  file: "קובץ",
  "Image properties": "מאפייני תמונה",
  Cancel: "ביטול",
  Ok: "אישור",
  "Your code is similar to HTML. Keep as HTML?": "הקוד דומה לHTML, האם להשאיר כHTML",
  "Paste as HTML": "הדבק כHTML",
  Keep: "השאר",
  Clean: "נקה",
  "Insert as Text": "הכנס כטקסט",
  "Word Paste Detected": 'זוהתה הדבקה מ"וורד"',
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "התוכן המודבק מגיע ממסמך וורד/אקסל. האם ברצונך להשאיר את העיצוב או לנקותו",
  "Insert only Text": "הכנס טקסט בלבד",
  "File Browser": "סייר הקבצים",
  "Error on load list": "שגיאה  בזמן טעינת רשימה",
  "Error on load folders": "שגיאה בזמן טעינת תקיות",
  "Are you sure?": "האם אתה בטוח?",
  "Enter Directory name": "הכנס שם תקיה",
  "Create directory": "צור תקיה",
  "type name": "סוג הקובץ",
  "Drop image": "הסר תמונה",
  "Drop file": "הסר קובץ",
  "or click": "או לחץ",
  "Alternative text": "כיתוב חלופי",
  Browse: "סייר",
  Upload: "העלה",
  Background: "רקע",
  Text: "טקסט",
  Top: "עליון",
  Middle: "מרכז",
  Bottom: "תחתון",
  "Insert column before": "הכנס עמודה לפני",
  "Insert column after": "הכנס עמודה אחרי",
  "Insert row above": "הכנס שורה מעל",
  "Insert row below": "הכנס שורה מתחת",
  "Delete table": "מחק טבלה",
  "Delete row": "מחק שורה",
  "Delete column": "מחק עמודה",
  "Empty cell": "רוקן תא",
  Delete: "מחק",
  "Strike through": "קו חוצה",
  Underline: "קו תחתון",
  Break: "שבירת שורה",
  "Search for": "חפש",
  "Replace with": "החלף ב",
  Replace: "להחליף",
  Edit: "ערוך",
  "Vertical align": "יישור אנכי",
  "Horizontal align": "יישור אופקי",
  Filter: "סנן",
  "Sort by changed": "מין לפי שינוי",
  "Sort by name": "מיין לפי שם",
  "Sort by size": "מיין לפי גודל",
  "Add folder": "הוסף תקייה",
  Split: "פיצול",
  "Split vertical": "פיצול אנכי",
  "Split horizontal": "פיצול אופקי",
  Merge: "מזג",
  "Add column": "הוסף עמודה",
  "Add row": "הוסף שורה",
  Border: "מסגרת",
  "Embed code": "הוסף קוד",
  Update: "עדכן",
  superscript: "superscript",
  subscript: "subscript",
  "Cut selection": "גזור בחירה",
  Paste: "הדבק",
  "Choose Content to Paste": "בחר תוכן להדבקה",
  "Chars: %d": "תווים: %d",
  "Words: %d": "מילים: %d",
  All: "הכל",
  "Select %s": "נבחר: %s",
  "Select all": "בחר הכל",
  source: "HTML",
  bold: "מודגש",
  italic: "נטוי",
  brush: "מברשת",
  link: "קישור",
  undo: "בטל",
  redo: "בצע שוב",
  table: "טבלה",
  image: "תמונה",
  eraser: "מחק",
  paragraph: "פסקה",
  fontsize: "גודל גופן",
  video: "וידאו",
  font: "גופן",
  about: "עלינו",
  print: "הדפס",
  underline: "קו תחתון",
  strikethrough: "קו חוצה",
  indent: "הגדל כניסה",
  outdent: "הקטן כניסה",
  fullsize: "גודל מלא",
  shrink: "כווץ",
  hr: "קו אופקי",
  ul: "רשימת תבליטים",
  ol: "רשימה ממוספרת",
  cut: "חתוך",
  selectall: "בחר הכל",
  "Open link": "פתח קישור",
  "Edit link": "ערוך קישור",
  "No follow": "ללא מעקב",
  Unlink: "בטל קישור",
  Eye: "הצג",
  pencil: "כדי לערוך",
  " URL": "כתובת",
  Reset: "אפס",
  Save: "שמור",
  "Save as ...": "שמור בשם...",
  Resize: "שנה גודל",
  Crop: "חתוך",
  Width: "רוחב",
  Height: "גובה",
  "Keep Aspect Ratio": "שמור יחס",
  Yes: "כן",
  No: "לא",
  Remove: "הסר",
  Select: "בחר",
  "You can only edit your own images. Download this image on the host?": "רק קבצים המשוייכים שלך ניתנים לעריכה. האם להוריד את הקובץ?",
  "The image has been successfully uploaded to the host!": "התמונה עלתה בהצלחה!",
  palette: "לוח",
  "There are no files": "אין קבצים בספריה זו.",
  Rename: "הונגרית",
  "Enter new name": "הזן שם חדש",
  preview: "תצוגה מקדימה",
  download: "הורד",
  "Paste from clipboard": "להדביק מהלוח",
  "Your browser doesn't support direct access to the clipboard.": "הדפדפן שלך לא תומך גישה ישירה ללוח.",
  "Copy selection": "העתק בחירה",
  copy: "העתק",
  "Border radius": "רדיוס הגבול",
  "Show all": "הצג את כל",
  Apply: "החל",
  "Please fill out this field": "נא למלא שדה זה",
  "Please enter a web address": "אנא הזן כתובת אינטרנט",
  Default: "ברירת המחדל",
  Circle: "מעגל",
  Dot: "נקודה",
  Quadrate: "הריבוע הזה",
  Find: "למצוא",
  "Find Previous": "מצא את הקודם",
  "Find Next": "חפש את הבא",
  "Insert className": "הכנס את שם הכיתה",
  "Press Alt for custom resizing": "לחץ על אלט לשינוי גודל מותאם אישית"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Fc = {
  "Type something": "Írjon be valamit",
  Advanced: "Haladó",
  "About Jodit": "Joditról",
  "Jodit Editor": "Jodit Editor",
  "Free Non-commercial Version": "Ingyenes változat",
  "Jodit User's Guide": "Jodit útmutató",
  "contains detailed help for using": "további segítséget tartalmaz",
  "For information about the license, please go to our website:": "További licence információkért látogassa meg a weboldalunkat:",
  "Buy full version": "Teljes verzió megvásárlása",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Minden jog fenntartva.",
  Anchor: "Horgony",
  "Open in new tab": "Megnyitás új lapon",
  "Open in fullsize": "Megnyitás teljes méretben",
  "Clear Formatting": "Formázás törlése",
  "Fill color or set the text color": "Háttér/szöveg szín",
  Redo: "Újra",
  Undo: "Visszavon",
  Bold: "Félkövér",
  Italic: "Dőlt",
  "Insert Unordered List": "Pontozott lista",
  "Insert Ordered List": "Számozott lista",
  "Align Center": "Középre zárt",
  "Align Justify": "Sorkizárt",
  "Align Left": "Balra zárt",
  "Align Right": "Jobbra zárt",
  "Insert Horizontal Line": "Vízszintes vonal beszúrása",
  "Insert Image": "Kép beszúrás",
  "Insert file": "Fájl beszúrás",
  "Insert youtube/vimeo video": "Youtube videó beszúrása",
  "Insert link": "Link beszúrás",
  "Font size": "Betűméret",
  "Font family": "Betűtípus",
  "Insert format block": "Formázott blokk beszúrása",
  Normal: "Normál",
  "Heading 1": "Fejléc 1",
  "Heading 2": "Fejléc 2",
  "Heading 3": "Fejléc 3",
  "Heading 4": "Fejléc 4",
  Quote: "Idézet",
  Code: "Kód",
  Insert: "Beszúr",
  "Insert table": "Táblázat beszúrása",
  "Decrease Indent": "Behúzás csökkentése",
  "Increase Indent": "Behúzás növelése",
  "Select Special Character": "Speciális karakter kiválasztása",
  "Insert Special Character": "Speciális karakter beszúrása",
  "Paint format": "Kép formázása",
  "Change mode": "Nézet váltása",
  Print: "Nyomtatás",
  Margins: "Szegélyek",
  top: "felső",
  right: "jobb",
  bottom: "alsó",
  left: "bal",
  Styles: "CSS stílusok",
  Classes: "CSS osztályok",
  Align: "Igazítás",
  Right: "Jobbra",
  Center: "Középre",
  Left: "Balra",
  "--Not Set--": "Nincs",
  Src: "Forrás",
  Title: "Cím",
  Alternative: "Helyettesítő szöveg",
  Link: "Link",
  "Open link in new tab": "Link megnyitása új lapon",
  Image: "Kép",
  file: "Fájl",
  "Image properties": "Kép tulajdonságai",
  Cancel: "Mégsem",
  Ok: "OK",
  "Your code is similar to HTML. Keep as HTML?": "A beillesztett szöveg HTML-nek tűnik. Megtartsuk HTML-ként?",
  "Paste as HTML": "Beszúrás HTML-ként",
  Keep: "Megtartás",
  Clean: "Elvetés",
  "Insert as Text": "Beszúrás szövegként",
  "Word Paste Detected": "Word-ből másolt szöveg",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "A beillesztett tartalom Microsoft Word/Excel dokumentumból származik. Meg szeretné tartani a formátumát?",
  "Insert only Text": "Csak szöveg beillesztése",
  "File Browser": "Fájl tallózó",
  "Error on load list": "Hiba a lista betöltése közben",
  "Error on load folders": "Hiba a mappák betöltése közben",
  "Are you sure?": "Biztosan ezt szeretné?",
  "Enter Directory name": "Írjon be egy mappanevet",
  "Create directory": "Mappa létrehozása",
  "type name": "írjon be bevet",
  "Drop image": "Húzza ide a képet",
  "Drop file": "Húzza ide a fájlt",
  "or click": "vagy kattintson",
  "Alternative text": "Helyettesítő szöveg",
  Browse: "Tallóz",
  Upload: "Feltölt",
  Background: "Háttér",
  Text: "Szöveg",
  Top: "Fent",
  Middle: "Középen",
  Bottom: "Lent",
  "Insert column before": "Oszlop beszúrás elé",
  "Insert column after": "Oszlop beszúrás utána",
  "Insert row above": "Sor beszúrás fölé",
  "Insert row below": "Sor beszúrás alá",
  "Delete table": "Táblázat törlése",
  "Delete row": "Sor törlése",
  "Delete column": "Oszlop törlése",
  "Empty cell": "Cella tartalmának törlése",
  Delete: "Törlés",
  "Strike through": "Áthúzott",
  Underline: "Aláhúzott",
  Break: "Szünet",
  "Search for": "Keresés",
  "Replace with": "Csere erre",
  Replace: "Cserélje ki",
  Edit: "Szerkeszt",
  "Vertical align": "Függőleges igazítás",
  "Horizontal align": "Vízszintes igazítás",
  Filter: "Szűrő",
  "Sort by changed": "Rendezés módosítás szerint",
  "Sort by name": "Rendezés név szerint",
  "Sort by size": "Rendezés méret szerint",
  "Add folder": "Mappa hozzáadás",
  "Split vertical": "Függőleges felosztás",
  "Split horizontal": "Vízszintes felosztás",
  Merge: "Összevonás",
  "Add column": "Oszlop hozzáadás",
  "Add row": "Sor hozzáadás",
  Border: "Szegély",
  "Embed code": "Beágyazott kód",
  Update: "Frissít",
  superscript: "Felső index",
  subscript: "Alsó index",
  "Cut selection": "Kivágás",
  Paste: "Beillesztés",
  "Choose Content to Paste": "Válasszon tartalmat a beillesztéshez",
  Split: "Felosztás",
  "Chars: %d": "Karakterek száma: %d",
  "Words: %d": "Szavak száma: %d",
  All: "Összes",
  "Select %s": "Kijelöl: %s",
  "Select all": "Összes kijelölése",
  source: "HTML",
  bold: "Félkövér",
  italic: "Dőlt",
  brush: "Ecset",
  link: "Link",
  undo: "Visszavon",
  redo: "Újra",
  table: "Táblázat",
  image: "Kép",
  eraser: "Törlés",
  paragraph: "Paragráfus",
  fontsize: "Betűméret",
  video: "Videó",
  font: "Betű",
  about: "Rólunk",
  print: "Nyomtat",
  underline: "Aláhúzott",
  strikethrough: "Áthúzott",
  indent: "Behúzás",
  outdent: "Aussenseiter",
  fullsize: "Teljes méret",
  shrink: "Összenyom",
  hr: "Egyenes vonal",
  ul: "Lista",
  ol: "Számozott lista",
  cut: "Kivág",
  selectall: "Összes kijelölése",
  "Open link": "Link megnyitása",
  "Edit link": "Link szerkesztése",
  "No follow": "Nincs követés",
  Unlink: "Link leválasztása",
  Eye: "felülvizsgálat",
  pencil: "Szerkesztés",
  " URL": "URL",
  Reset: "Visszaállít",
  Save: "Mentés",
  "Save as ...": "Mentés másként...",
  Resize: "Átméretezés",
  Crop: "Kivág",
  Width: "Szélesség",
  Height: "Magasság",
  "Keep Aspect Ratio": "Képarány megtartása",
  Yes: "Igen",
  No: "Nem",
  Remove: "Eltávolít",
  Select: "Kijelöl",
  "You can only edit your own images. Download this image on the host?": "Csak a saját képeit tudja szerkeszteni. Letölti ezt a képet?",
  "The image has been successfully uploaded to the host!": "Kép sikeresen feltöltve!",
  palette: "Palette",
  "There are no files": "Er zijn geen bestanden in deze map.",
  Rename: "átnevezés",
  "Enter new name": "Adja meg az új nevet",
  preview: "előnézet",
  download: "Letöltés",
  "Paste from clipboard": "Illessze be a vágólap",
  "Your browser doesn't support direct access to the clipboard.": "A böngésző nem támogatja a közvetlen hozzáférést biztosít a vágólapra.",
  "Copy selection": "Másolás kiválasztása",
  copy: "másolás",
  "Border radius": "Határ sugár",
  "Show all": "Összes",
  Apply: "Alkalmazni",
  "Please fill out this field": "Kérjük, töltse ki ezt a mezőt,",
  "Please enter a web address": "Kérjük, írja be a webcímet",
  Default: "Alapértelmezett",
  Circle: "Kör",
  Dot: "Pont",
  Quadrate: "Quadrate",
  Find: "Találni",
  "Find Previous": "Megtalálja Előző",
  "Find Next": "Következő Keresése",
  "Insert className": "Helyezze be az osztály nevét",
  "Press Alt for custom resizing": "Nyomja meg az Alt egyéni átméretezés"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Uc = {
  "Type something": "Ketik sesuatu",
  "About Jodit": "Tentang Jodit",
  "Jodit Editor": "Editor Jodit",
  "Free Non-commercial Version": "Versi Bebas Non-komersil",
  "Jodit User's Guide": "Panduan Pengguna Jodit",
  "contains detailed help for using": "mencakup detail bantuan penggunaan",
  "For information about the license, please go to our website:": "Untuk informasi tentang lisensi, silakan kunjungi website:",
  "Buy full version": "Beli versi lengkap",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Hak Cipta © XDSoft.net - Chupurnov Valeriy. Hak cipta dilindungi undang-undang.",
  Anchor: "Tautan",
  "Open in new tab": "Buka di tab baru",
  "Open in fullsize": "Buka editor dalam ukuran penuh",
  "Clear Formatting": "Hapus Pemformatan",
  "Fill color or set the text color": "Isi warna atau atur warna teks",
  Redo: "Ulangi",
  Undo: "Batalkan",
  Bold: "Tebal",
  Italic: "Miring",
  "Insert Unordered List": "Sisipkan Daftar Tidak Berurut",
  "Insert Ordered List": "Sisipkan Daftar Berurut",
  "Align Center": "Tengah",
  "Align Justify": "Penuh",
  "Align Left": "Kiri",
  "Align Right": "Kanan",
  "Insert Horizontal Line": "Sisipkan Garis Horizontal",
  "Insert Image": "Sisipkan Gambar",
  "Insert file": "Sisipkan Berkas",
  "Insert youtube/vimeo video": "Sisipkan video youtube/vimeo",
  "Insert link": "Sisipkan tautan",
  "Font size": "Ukuran font",
  "Font family": "Keluarga font",
  "Insert format block": "Sisipkan blok format",
  Normal: "Normal",
  "Heading 1": "Heading 1",
  "Heading 2": "Heading 2",
  "Heading 3": "Heading 3",
  "Heading 4": "Heading 4",
  Quote: "Kutip",
  Code: "Kode",
  Insert: "Sisipkan",
  "Insert table": "Sisipkan tabel",
  "Decrease Indent": "Kurangi Indentasi",
  "Increase Indent": "Tambah Indentasi",
  "Select Special Character": "Pilih Karakter Spesial",
  "Insert Special Character": "Sisipkan Karakter Spesial",
  "Paint format": "Formar warna",
  "Change mode": "Ubah mode",
  Margins: "Batas",
  top: "atas",
  right: "kanan",
  bottom: "bawah",
  left: "kiri",
  Styles: "Gaya",
  Classes: "Class",
  Align: "Rata",
  Right: "Kanan",
  Center: "Tengah",
  Left: "Kiri",
  "--Not Set--": "--Tidak diset--",
  Src: "Src",
  Title: "Judul",
  Alternative: "Teks alternatif",
  Link: "Tautan",
  "Open link in new tab": "Buka tautan di tab baru",
  Image: "Gambar",
  file: "berkas",
  Advanced: "Lanjutan",
  "Image properties": "Properti gambar",
  Cancel: "Batal",
  Ok: "Ya",
  "Your code is similar to HTML. Keep as HTML?": "Kode Anda cenderung ke HTML. Biarkan sebagai HTML?",
  "Paste as HTML": "Paste sebagai HTML",
  Keep: "Jaga",
  Clean: "Bersih",
  "Insert as Text": "Sisipkan sebagai teks",
  "Insert only Text": "Sisipkan hanya teks",
  "Word Paste Detected": "Terdeteksi paste dari Word",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Konten dipaste dari dokumen Microsoft Word/Excel. Apakah Anda ingin tetap menjaga format atau membersihkannya?",
  "File Browser": "Penjelajah Berkas",
  "Error on load list": "Error ketika memuat list",
  "Error on load folders": "Error ketika memuat folder",
  "Are you sure?": "Apakah Anda yakin?",
  "Enter Directory name": "Masukkan nama Direktori",
  "Create directory": "Buat direktori",
  "type name": "ketik nama",
  "Drop image": "Letakkan gambar",
  "Drop file": "Letakkan berkas",
  "or click": "atau klik",
  "Alternative text": "Teks alternatif",
  Browse: "Jelajahi",
  Upload: "Unggah",
  Background: "Latar Belakang",
  Text: "Teks",
  Top: "Atas",
  Middle: "Tengah",
  Bottom: "Bawah",
  "Insert column before": "Sisipkan kolom sebelumnya",
  "Insert column after": "Sisipkan kolom setelahnya",
  "Insert row above": "Sisipkan baris di atasnya",
  "Insert row below": "Sisipkan baris di bawahnya",
  "Delete table": "Hapus tabel",
  "Delete row": "Hapus baris",
  "Delete column": "Hapus kolom",
  "Empty cell": "Kosongkan cell",
  source: "sumber",
  bold: "tebal",
  italic: "miring",
  brush: "sikat",
  link: "tautan",
  undo: "batalkan",
  redo: "ulangi",
  table: "tabel",
  image: "gambar",
  eraser: "penghapus",
  paragraph: "paragraf",
  fontsize: "ukuran font",
  video: "video",
  font: "font",
  about: "tentang",
  print: "cetak",
  underline: "garis bawah",
  strikethrough: "coret",
  indent: "menjorok ke dalam",
  outdent: "menjorok ke luar",
  fullsize: "ukuran penuh",
  shrink: "menyusut",
  hr: "hr",
  ul: "ul",
  ol: "ol",
  cut: "potong",
  selectall: "Pilih semua",
  "Embed code": "Kode embed",
  "Open link": "Buka tautan",
  "Edit link": "Edit tautan",
  "No follow": "No follow",
  Unlink: "Hapus tautan",
  Eye: "Mata",
  pencil: "pensil",
  Update: "Perbarui",
  " URL": "URL",
  Edit: "Edit",
  "Horizontal align": "Perataan horizontal",
  Filter: "Filter",
  "Sort by changed": "Urutkan berdasarkan perubahan",
  "Sort by name": "Urutkan berdasarkan nama",
  "Sort by size": "Urutkan berdasarkan ukuran",
  "Add folder": "Tambah folder",
  Reset: "Reset",
  Save: "Simpan",
  "Save as ...": "Simpan sebagai...",
  Resize: "Ubah ukuran",
  Crop: "Crop",
  Width: "Lebar",
  Height: "Tinggi",
  "Keep Aspect Ratio": "Jaga aspek rasio",
  Yes: "Ya",
  No: "Tidak",
  Remove: "Copot",
  Select: "Pilih",
  "Chars: %d": "Karakter: %d",
  "Words: %d": "Kata: %d",
  All: "Semua",
  "Select %s": "Pilih %s",
  "Select all": "Pilih semua",
  "Vertical align": "Rata vertikal",
  Split: "Bagi",
  "Split vertical": "Bagi secara vertikal",
  "Split horizontal": "Bagi secara horizontal",
  Merge: "Gabungkan",
  "Add column": "Tambah kolom",
  "Add row": "tambah baris",
  Delete: "Hapus",
  Border: "Bingkai",
  "License: %s": "Lisensi: %s",
  "Strike through": "Coret",
  Underline: "Garis Bawah",
  superscript: "Superskrip",
  subscript: "Subskrip",
  "Cut selection": "Potong pilihan",
  Break: "Berhenti",
  "Search for": "Mencari",
  "Replace with": "Ganti dengan",
  Replace: "Mengganti",
  Paste: "Paste",
  "Choose Content to Paste": "Pilih konten untuk dipaste",
  "You can only edit your own images. Download this image on the host?": "Anda hanya dapat mengedit gambar Anda sendiri. Unduh gambar ini di host?",
  "The image has been successfully uploaded to the host!": "Gambar telah sukses diunggah ke host!",
  palette: "palet",
  "There are no files": "Tidak ada berkas",
  Rename: "ganti nama",
  "Enter new name": "Masukkan nama baru",
  preview: "pratinjau",
  download: "Unduh",
  "Paste from clipboard": "Paste dari clipboard",
  "Your browser doesn't support direct access to the clipboard.": "Browser anda tidak mendukung akses langsung ke clipboard.",
  "Copy selection": "Copy seleksi",
  copy: "copy",
  "Border radius": "Border radius",
  "Show all": "Tampilkan semua",
  Apply: "Menerapkan",
  "Please fill out this field": "Silahkan mengisi kolom ini",
  "Please enter a web address": "Silahkan masukkan alamat web",
  Default: "Default",
  Circle: "Lingkaran",
  Dot: "Dot",
  Quadrate: "Kuadrat",
  Find: "Menemukan",
  "Find Previous": "Menemukan Sebelumnya",
  "Find Next": "Menemukan Berikutnya",
  "Insert className": "Masukkan nama kelas",
  "Press Alt for custom resizing": "Tekan Alt untuk mengubah ukuran kustom"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Vc = {
  "Type something": "Scrivi qualcosa...",
  Advanced: "Avanzato",
  "About Jodit": "A proposito di Jodit",
  "Jodit Editor": "Jodit Editor",
  "Jodit User's Guide": "Guida utente di Jodit",
  "contains detailed help for using": "contiene una guida dettagliata per l'uso.",
  "For information about the license, please go to our website:": "Per informazioni sulla licenza, si prega di visitare il nostro sito web:",
  "Buy full version": "Acquista la versione completa",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Tutti i diritti riservati.",
  Anchor: "Link",
  "Open in new tab": "Apri in una nuova scheda",
  "Open in fullsize": "Apri l'editor a schermo intero",
  "Clear Formatting": "Pulisci Formattazione",
  "Fill color or set the text color": "Colore di sfondo o del testo",
  Redo: "Ripristina",
  Undo: "Annulla",
  Bold: "Grassetto",
  Italic: "Corsivo",
  "Insert Unordered List": "Inserisci lista non ordinata",
  "Insert Ordered List": "Inserisci lista ordinata",
  "Align Center": "Allinea al centro",
  "Align Justify": "Allineamento Giustificato",
  "Align Left": "Allinea a Sinistra",
  "Align Right": "Allinea a Destra",
  "Insert Horizontal Line": "Inserisci una linea orizzontale",
  "Insert Image": "Inserisci immagine",
  "Insert file": "Inserisci un file",
  "Insert youtube/vimeo video": "Inserisci video Youtube/Vimeo",
  "Insert link": "Inserisci link",
  "Font size": "Dimensione carattere",
  "Font family": "Tipo di font",
  "Insert format block": "Inserisci blocco",
  Normal: "Normale",
  "Heading 1": "Intestazione 1",
  "Heading 2": "Intestazione 2",
  "Heading 3": "Intestazione 3",
  "Heading 4": "Intestazione 4",
  Quote: "Citazione",
  Code: "Codice",
  Insert: "Inserisci",
  "Insert table": "Inserisci tabella",
  "Decrease Indent": "Riduci il rientro",
  "Increase Indent": "Aumenta il rientro",
  "Select Special Character": "Seleziona un carattere speciale",
  "Insert Special Character": "Inserisci un carattere speciale",
  "Paint format": "Copia formato",
  "Change mode": "Cambia modalita'",
  Margins: "Margini",
  top: "su",
  right: "destra",
  bottom: "giù",
  left: "sinistra",
  Styles: "Stili CSS",
  Classes: "Classi CSS",
  Align: "Allinea",
  Right: "Destra",
  Center: "Centro",
  Left: "Sinistra",
  "--Not Set--": "--Non Impostato--",
  Src: "Fonte",
  Title: "Titolo",
  Alternative: "Testo Alternativo",
  Link: "Link",
  "Open link in new tab": "Apri il link in una nuova scheda",
  Image: "Immagine",
  file: "Archivio",
  "Image properties": "Proprietà dell'immagine",
  Cancel: "Annulla",
  Ok: "Accetta",
  "Your code is similar to HTML. Keep as HTML?": "Il codice è simile all'HTML. Mantieni come HTML?",
  "Paste as HTML": "Incolla come HTML",
  Keep: "Mantieni",
  Clean: "Pulisci",
  "Insert as Text": "Inserisci come testo",
  "Word Paste Detected": "Incolla testo da Word rilevato",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Il contenuto incollato proviene da un documento Microsoft Word / Excel. Vuoi mantenere il formato o pulirlo?",
  "Insert only Text": "Inserisci solo il testo",
  "File Browser": "Cerca file",
  "Error on load list": "Errore durante il caricamento dell'elenco",
  "Error on load folders": "Errore durante il caricamento delle cartelle",
  "Are you sure?": "Sei sicuro?",
  "Enter Directory name": "Inserisci il nome della cartella",
  "Create directory": "Crea cartella",
  "type name": "Digita il nome",
  "Drop image": "Cancella immagine",
  "Drop file": "Cancella file",
  "or click": "o clicca",
  "Alternative text": "Testo alternativo",
  Browse: "Sfoglia",
  Upload: "Carica",
  Background: "Sfondo",
  Text: "Testo",
  Top: "Su",
  Middle: "Centro",
  Bottom: "Sotto",
  "Insert column before": "Inserisci la colonna prima",
  "Insert column after": "Inserisci la colonna dopo",
  "Insert row above": "Inserisci la riga sopra",
  "Insert row below": "Inserisci la riga sotto",
  "Delete table": "Elimina tabella",
  "Delete row": "Elimina riga",
  "Delete column": "Elimina colonna",
  "Empty cell": "Cella vuota",
  Delete: "Cancella",
  "Strike through": "Barrato",
  Underline: "Sottolineato",
  Break: "Pausa",
  "Search for": "Cerca per",
  "Replace with": "Sostituisci con",
  Replace: "Sostituisci",
  Edit: "Modifica",
  "Vertical align": "Allineamento verticala",
  "Horizontal align": "Allineamento orizzontale",
  Filter: "Filtro",
  "Sort by changed": "Ordina per data di modifica",
  "Sort by name": "Ordina per nome",
  "Sort by size": "Ordina per dimensione",
  "Add folder": "Aggiungi cartella",
  Split: "Dividi",
  "Split vertical": "Dividi verticalmente",
  "Split horizontal": "Dividi orizzontale",
  Merge: "Fondi",
  "Add column": "Aggiungi colonna",
  "Add row": "Aggiungi riga",
  Border: "Bordo",
  "Embed code": "Includi codice",
  Update: "Aggiorna",
  superscript: "indice",
  subscript: "pedice",
  "Cut selection": "Taglia selezione",
  Paste: "Incolla",
  "Choose Content to Paste": "Seleziona il contenuto da incollare",
  "Chars: %d": "Caratteri: %d",
  "Words: %d": "Parole: %d",
  All: "Tutto",
  "Select %s": "Seleziona: %s",
  "Select all": "Seleziona tutto",
  source: "risorsa",
  bold: "Grassetto",
  italic: "Corsivo",
  brush: "Pennello",
  link: "Link",
  undo: "Annulla",
  redo: "Ripristina",
  table: "Tabella",
  image: "Immagine",
  eraser: "Gomma",
  paragraph: "Paragrafo",
  fontsize: "Dimensione del carattere",
  video: "Video",
  font: "Font",
  about: "Approposito di",
  print: "Stampa",
  underline: "Sottolineato",
  strikethrough: "Barrato",
  indent: "aumenta rientro",
  outdent: "riduci rientro",
  fullsize: "espandi",
  shrink: "comprimi",
  hr: "linea orizzontale",
  ul: "lista non ordinata",
  ol: "lista ordinata",
  cut: "Taglia",
  selectall: "Seleziona tutto",
  "Open link": "Apri link",
  "Edit link": "Modifica link",
  "No follow": "Non seguire",
  Unlink: "Rimuovi link",
  Eye: "Recensione",
  pencil: "Per modificare",
  " URL": " URL",
  Reset: "Reset",
  Save: "Salva",
  "Save as ...": "Salva con nome...",
  Resize: "Ridimensiona",
  Crop: "Ritaglia",
  Width: "Larghezza",
  Height: "Altezza",
  "Keep Aspect Ratio": "Mantieni le proporzioni",
  Yes: "Si",
  No: "No",
  Remove: "Rimuovi",
  Select: "Seleziona",
  "You can only edit your own images. Download this image on the host?": "Puoi modificare solo le tue immagini. Vuoi scaricare questa immagine dal server?",
  "The image has been successfully uploaded to the host!": "L'immagine è stata caricata correttamente sul server!",
  palette: "tavolozza",
  "There are no files": "Non ci sono file in questa directory.",
  Rename: "Rinomina",
  "Enter new name": "Inserisci un nuovo nome",
  preview: "anteprima",
  download: "Scarica",
  "Paste from clipboard": "Incolla dagli appunti",
  "Your browser doesn't support direct access to the clipboard.": "Il tuo browser non supporta l'accesso diretto agli appunti.",
  "Copy selection": "Copia selezione",
  copy: "copia",
  "Border radius": "Border radius",
  "Show all": "Mostra tutti",
  Apply: "Applica",
  "Please fill out this field": "Si prega di compilare questo campo",
  "Please enter a web address": "Si prega di inserire un indirizzo web",
  Default: "Default",
  Circle: "Cerchio",
  Dot: "Punto",
  Quadrate: "Quadrato",
  "Lower Alpha": "Lettera Minuscola",
  "Lower Greek": "Lettera Greca Minuscola",
  "Lower Roman": "Numero Romano Minuscolo",
  "Upper Alpha": "Lettera Maiuscola",
  "Upper Roman": "Numero Romano Maiuscolo",
  Find: "Trova",
  "Find Previous": "Trova Precedente",
  "Find Next": "Trova Successivo",
  "Insert className": "Inserisci il nome della classe",
  "Press Alt for custom resizing": "Premere Alt per il ridimensionamento personalizzato"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Wc = {
  "Type something": "なにかタイプしてください",
  Advanced: "高度な設定",
  "About Jodit": "Joditについて",
  "Jodit Editor": "Jodit Editor",
  "Jodit User's Guide": "Jodit ユーザーズ・ガイド",
  "contains detailed help for using": "詳しい使い方",
  "For information about the license, please go to our website:": "ライセンス詳細についてはJodit Webサイトを確認ください：",
  "Buy full version": "フルバージョンを購入",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.",
  Anchor: "Anchor",
  "Open in new tab": "新しいタブで開く",
  "Open in fullsize": "エディターのサイズ（フル/ノーマル）",
  "Clear Formatting": "書式をクリア",
  "Fill color or set the text color": "テキストの色",
  Redo: "やり直し",
  Undo: "元に戻す",
  Bold: "太字",
  Italic: "斜体",
  "Insert Unordered List": "箇条書き",
  "Insert Ordered List": "番号付きリスト",
  "Align Center": "中央揃え",
  "Align Justify": "両端揃え",
  "Align Left": "左揃え",
  "Align Right": "右揃え",
  "Insert Horizontal Line": "区切り線を挿入",
  "Insert Image": "画像を挿入",
  "Insert file": "ファイルを挿入",
  "Insert youtube/vimeo video": "Youtube/Vimeo 動画",
  "Insert link": "リンクを挿入",
  "Font size": "フォントサイズ",
  "Font family": "フォント",
  "Insert format block": "テキストのスタイル",
  Normal: "指定なし",
  "Heading 1": "タイトル1",
  "Heading 2": "タイトル2",
  "Heading 3": "タイトル3",
  "Heading 4": "タイトル4",
  Quote: "引用",
  Code: "コード",
  Insert: "挿入",
  "Insert table": "表を挿入",
  "Decrease Indent": "インデント減",
  "Increase Indent": "インデント増",
  "Select Special Character": "特殊文字を選択",
  "Insert Special Character": "特殊文字を挿入",
  "Paint format": "書式を貼付け",
  "Change mode": "編集モード切替え",
  Margins: "マージン",
  top: "上",
  right: "右",
  bottom: "下",
  left: "左",
  Styles: "スタイル",
  Classes: "クラス",
  Align: "配置",
  Right: "右寄せ",
  Center: "中央寄せ",
  Left: "左寄せ",
  "--Not Set--": "指定なし",
  Src: "ソース",
  Title: "タイトル",
  Alternative: "代替テキスト",
  Link: "リンク",
  "Open link in new tab": "新しいタブで開く",
  Image: "画像",
  file: "ファイル",
  "Image properties": "画像のプロパティー",
  Cancel: "キャンセル",
  Ok: "確定",
  "Your code is similar to HTML. Keep as HTML?": "HTMLコードを保持しますか？",
  "Paste as HTML": "HTMLで貼付け",
  Keep: "HTMLを保持",
  Clean: "Clean",
  "Insert as Text": "HTMLをテキストにする",
  "Word Paste Detected": "Word Paste Detected",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?",
  "Insert only Text": "テキストだけ",
  "File Browser": "File Browser",
  "Error on load list": "Error on load list",
  "Error on load folders": "Error on load folders",
  "Are you sure?": "Are you sure?",
  "Enter Directory name": "Enter Directory name",
  "Create directory": "Create directory",
  "type name": "type name",
  "Drop image": "ここに画像をドロップ",
  "Drop file": "ここにファイルをドロップ",
  "or click": "or クリック",
  "Alternative text": "代替テキスト",
  Browse: "ブラウズ",
  Upload: "アップロード",
  Background: "背景",
  Text: "文字",
  Top: "上",
  Middle: "中央",
  Bottom: "下",
  "Insert column before": "左に列を挿入",
  "Insert column after": "右に列を挿入",
  "Insert row above": "上に行を挿入",
  "Insert row below": "下に行を挿入",
  "Delete table": "表を削除",
  "Delete row": "行を削除",
  "Delete column": "列を削除",
  "Empty cell": "セルを空にする",
  "Chars: %d": "文字数: %d",
  "Words: %d": "単語数: %d",
  "Strike through": "取り消し線",
  Underline: "下線",
  superscript: "上付き文字",
  subscript: "下付き文字",
  "Cut selection": "切り取り",
  "Select all": "すべて選択",
  Break: "Pause",
  "Search for": "検索",
  "Replace with": "置換",
  Replace: "交換",
  Paste: "貼付け",
  "Choose Content to Paste": "選択した内容を貼付け",
  All: "全部",
  source: "source",
  bold: "bold",
  italic: "italic",
  brush: "brush",
  link: "link",
  undo: "undo",
  redo: "redo",
  table: "table",
  image: "image",
  eraser: "eraser",
  paragraph: "paragraph",
  fontsize: "fontsize",
  video: "video",
  font: "font",
  about: "about",
  print: "print",
  underline: "underline",
  strikethrough: "strikethrough",
  indent: "indent",
  outdent: "outdent",
  fullsize: "fullsize",
  shrink: "shrink",
  hr: "分割線",
  ul: "箇条書き",
  ol: "番号付きリスト",
  cut: "切り取り",
  selectall: "すべて選択",
  "Open link": "リンクを開く",
  "Edit link": "リンクを編集",
  "No follow": "No follow",
  Unlink: "リンク解除",
  Eye: "サイトを確認",
  " URL": "URL",
  Reset: "リセット",
  Save: "保存",
  "Save as ...": "Save as ...",
  Resize: "リサイズ",
  Crop: "Crop",
  Width: "幅",
  Height: "高さ",
  "Keep Aspect Ratio": "縦横比を保持",
  Yes: "はい",
  No: "いいえ",
  Remove: "移除",
  Select: "選択",
  "Select %s": "選択: %s",
  Update: "更新",
  "Vertical align": "垂直方向の配置",
  Merge: "セルの結合",
  "Add column": "列を追加",
  "Add row": "行を追加",
  Border: "境界線",
  "Embed code": "埋め込みコード",
  Delete: "削除",
  Edit: "編集",
  "Horizontal align": "水平方向の配置",
  Filter: "Filter",
  "Sort by changed": "Sort by changed",
  "Sort by name": "Sort by name",
  "Sort by size": "Sort by size",
  "Add folder": "Add folder",
  Split: "分割",
  "Split vertical": "セルの分割（垂直方向）",
  "Split horizontal": "セルの分割（水平方向）",
  "You can only edit your own images. Download this image on the host?": "You can only edit your own images. Download this image on the host?",
  "The image has been successfully uploaded to the host!": "The image has been successfully uploaded to the host!",
  palette: "パレット",
  pencil: "鉛筆",
  "There are no files": "There are no files",
  Rename: "Rename",
  "Enter new name": "Enter new name",
  preview: "プレビュー",
  download: "ダウンロード",
  "Paste from clipboard": "貼り付け",
  "Your browser doesn't support direct access to the clipboard.": "お使いのブラウザはクリップボードを使用できません",
  "Copy selection": "コピー",
  copy: "copy",
  "Border radius": "角の丸み",
  "Show all": "全て表示",
  Apply: "適用",
  "Please fill out this field": "まだこの分野",
  "Please enter a web address": "を入力してくださいウェブアドレス",
  Default: "デフォルト",
  Circle: "白丸",
  Dot: "黒丸",
  Quadrate: "四角",
  Find: "見",
  "Find Previous": "探前",
  "Find Next": "由来",
  "Lower Alpha": "英小文字",
  "Lower Greek": "ギリシャ文字",
  "Lower Roman": "ローマ数字小文字",
  "Upper Alpha": "英大文字",
  "Upper Roman": "ローマ数字大文字",
  "Insert className": "クラス名を挿入",
  "Press Alt for custom resizing": "カスタムサイズ変更のためのAltキーを押します"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Fr = {};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const $c = {
  "Type something": "무엇이든 입력하세요",
  "About Jodit": "Jodit에 대하여",
  "Jodit Editor": "Jodit Editor",
  "Jodit User's Guide": "Jodit 사용자 안내서",
  "contains detailed help for using": "자세한 도움말이 들어있어요",
  "For information about the license, please go to our website:": "라이센스에 관해서는 Jodit 웹 사이트를 방문해주세요：",
  "Buy full version": "풀 버전 구입하기",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "© XDSoft.net - Chupurnov Valeriy. 에게 저작권과 모든 권리가 있습니다.",
  Anchor: "Anchor",
  "Open in new tab": "새 탭에서 열기",
  "Open in fullsize": "전체 크기로 보기",
  "Clear Formatting": "서식 지우기",
  "Fill color or set the text color": "글씨 색상",
  Redo: "재실행",
  Undo: "실행 취소",
  Bold: "굵게",
  Italic: "기울임",
  "Insert Unordered List": "글머리 목록",
  "Insert Ordered List": "번호 목록",
  "Align Center": "가운데 정렬",
  "Align Justify": "양쪽 정렬",
  "Align Left": "왼쪽 정렬",
  "Align Right": "오른쪽 정렬",
  "Insert Horizontal Line": "수평 구분선 넣기",
  "Insert Image": "이미지 넣기",
  "Insert file": "파일 넣기",
  "Insert youtube/vimeo video": "Youtube/Vimeo 동영상",
  "Insert link": "링크 넣기",
  "Font size": "글꼴 크기",
  "Font family": "글꼴",
  "Insert format block": "블록 요소 넣기",
  Normal: "일반 텍스트",
  "Heading 1": "제목 1",
  "Heading 2": "제목 2",
  "Heading 3": "제목 3",
  "Heading 4": "제목 4",
  Quote: "인용",
  Code: "코드",
  Insert: "붙여 넣기",
  "Insert table": "테이블",
  "Decrease Indent": "들여쓰기 감소",
  "Increase Indent": "들여쓰기 증가",
  "Select Special Character": "특수문자 선택",
  "Insert Special Character": "특수문자 입력",
  "Paint format": "페인트 형식",
  "Change mode": "편집모드 변경",
  Margins: "마진",
  top: "위",
  right: "오른쪽",
  bottom: "아래",
  left: "왼쪽",
  Styles: "스타일",
  Classes: "클래스",
  Align: "정렬",
  Right: "오른쪽으로",
  Center: "가운데로",
  Left: "왼쪽으로",
  "--Not Set--": "--지정 안 함--",
  Src: "경로(src)",
  Title: "제목",
  Alternative: "대체 텍스트(alt)",
  Link: "링크",
  "Open link in new tab": "새 탭에서 열기",
  file: "파일",
  Advanced: "고급",
  "Image properties": "이미지 속성",
  Cancel: "취소",
  Ok: "확인",
  "Your code is similar to HTML. Keep as HTML?": "HTML 코드로 감지했어요. 코드인채로 붙여넣을까요?",
  "Paste as HTML": "HTML로 붙여넣기",
  Keep: "원본 유지",
  Clean: "지우기",
  "Insert as Text": "텍스트로 넣기",
  "Insert only Text": "텍스트만 넣기",
  "Word Paste Detected": "Word 붙여넣기 감지",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Microsoft Word/Excel 문서로 감지했어요. 서식을 유지한채로 붙여넣을까요?",
  "File Browser": "파일 탐색기",
  "Error on load list": "목록 불러오기 에러",
  "Error on load folders": "폴더 불러오기",
  "Are you sure?": "정말 진행할까요?",
  "Enter Directory name": "디렉토리 이름 입력",
  "Create directory": "디렉토리 생성",
  "type name": "이름 입력",
  "Drop image": "이미지 드래그",
  "Drop file": "파일 드래그",
  "or click": "혹은 클릭",
  "Alternative text": "대체 텍스트",
  Browse: "탐색",
  Upload: "업로드",
  Background: "배경",
  Text: "텍스트",
  Top: "위",
  Middle: "중앙",
  Bottom: "아래",
  "Insert column before": "이전 열에 삽입",
  "Insert column after": "다음 열에 삽입",
  "Insert row above": "위 행에 삽입",
  "Insert row below": "아래 행에 삽입",
  "Delete table": "테이블 삭제",
  "Delete row": "행 삭제",
  "Delete column": "열 삭제",
  "Empty cell": "빈 셀",
  source: "HTML 소스",
  bold: "볼드",
  italic: "이탤릭",
  brush: "브러시",
  link: "링크",
  undo: "실행 취소",
  redo: "재실행",
  table: "테이블",
  image: "이미지",
  eraser: "지우개",
  paragraph: "문단",
  fontsize: "글꼴 크기",
  video: "비디오",
  font: "글꼴",
  about: "편집기 정보",
  print: "프린트",
  underline: "밑줄",
  strikethrough: "취소선",
  indent: "들여쓰기",
  outdent: "내어쓰기",
  fullsize: "전체 화면",
  shrink: "일반 화면",
  hr: "구분선",
  ul: "글머리 목록",
  ol: "번호 목록",
  cut: "잘라내기",
  selectall: "모두 선택",
  "Embed code": "Embed 코드",
  "Open link": "링크 열기",
  "Edit link": "링크 편집",
  "No follow": "No follow",
  Unlink: "링크 제거",
  Eye: "사이트 확인",
  pencil: "연필",
  Update: "갱신",
  " URL": "URL",
  Edit: "편집",
  "Horizontal align": "수평 정렬",
  Filter: "필터",
  "Sort by changed": "변경일 정렬",
  "Sort by name": "이름 정렬",
  "Sort by size": "크기 정렬",
  "Add folder": "새 폴더",
  Reset: "초기화",
  Save: "저장",
  "Save as ...": "새로 저장하기 ...",
  Resize: "리사이즈",
  Crop: "크롭",
  Width: "가로 길이",
  Height: "세로 높이",
  "Keep Aspect Ratio": "비율 유지하기",
  Yes: "네",
  No: "아니오",
  Remove: "제거",
  Select: "선택",
  "Chars: %d": "문자수: %d",
  "Words: %d": "단어수: %d",
  All: "모두",
  "Select all": "모두 선택",
  "Select %s": "선택: %s",
  "Vertical align": "수직 정렬",
  Split: "분할",
  "Split vertical": "세로 셀 분할",
  "Split horizontal": "가로 셀 분할",
  Merge: "셀 병합",
  "Add column": "열 추가",
  "Add row": "행 추가",
  Delete: "삭제",
  Border: "외곽선",
  "License: %s": "라이센스: %s",
  "Strike through": "취소선",
  Underline: "밑줄",
  superscript: "윗첨자",
  subscript: "아래첨자",
  "Cut selection": "선택 잘라내기",
  Break: "구분자",
  "Search for": "검색",
  "Replace with": "대체하기",
  Replace: "대체",
  Paste: "붙여넣기",
  "Choose Content to Paste": "붙여넣을 내용 선택",
  "You can only edit your own images. Download this image on the host?": "외부 이미지는 편집할 수 없어요. 외부 이미지를 다운로드 할까요?",
  "The image has been successfully uploaded to the host!": "이미지를 무사히 업로드 했어요!",
  palette: "팔레트",
  "There are no files": "파일이 없어요",
  Rename: "이름 변경",
  "Enter new name": "새 이름 입력",
  preview: "미리보기",
  download: "다운로드",
  "Paste from clipboard": "클립보드 붙여넣기",
  "Your browser doesn't support direct access to the clipboard.": "사용중인 브라우저가 클립보드 접근을 지원하지 않아요.",
  "Copy selection": "선택 복사",
  copy: "복사",
  "Border radius": "둥근 테두리",
  "Show all": "모두 보기",
  Apply: "적용",
  "Please fill out this field": "이 항목을 입력해주세요!",
  "Please enter a web address": "웹 URL을 입력해주세요.",
  Default: "기본",
  Circle: "원",
  Dot: "점",
  Quadrate: "정사각형",
  Find: "찾기",
  "Find Previous": "이전 찾기",
  "Find Next": "다음 찾기",
  "Insert className": "className 입력",
  "Press Alt for custom resizing": "사용자 지정 크기 조정에 대 한 고도 누르십시오"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Kc = {
  "Type something": "Бичээд үзээрэй",
  Advanced: "Дэвшилтэт",
  "About Jodit": "Jodit-ын талаар ",
  "Jodit Editor": "Jodit програм",
  "Jodit User's Guide": "Jodit гарын авлага",
  "contains detailed help for using": "хэрэглээний талаар дэлгэрэнгүй мэдээллийг агуулна",
  "For information about the license, please go to our website:": "Лицензийн мэдээллийг манай вэб хуудаснаас авна уу:",
  "Buy full version": "Бүрэн хувилбар худалдан авах",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Зохиогчийн эрх хамгаалагдсан © XDSoft.net - Chupurnov Valeriy. Бүх эрхийг эзэмшинэ.",
  Anchor: "Холбоо барих",
  "Open in new tab": "Шинэ табаар нээх",
  "Open in fullsize": "Бүтэн дэлгэцээр нээх",
  "Clear Formatting": "Форматыг арилгах",
  "Fill color or set the text color": "Өнгөөр будах эсвэл текстийн өнгө сонгох",
  Redo: "Дахих",
  Undo: "Буцаах",
  Bold: "Тод",
  Italic: "Налуу",
  "Insert Unordered List": "Тэмдэгт жагсаалт нэмэх",
  "Insert Ordered List": "Дугаарт жагсаалт нэмэх",
  "Align Center": "Голлож байрлуулах",
  "Align Justify": "Тэгшитгэн байрлуулах",
  "Align Left": "Зүүнд байрлуулах",
  "Align Right": "Баруунд байрлуулах",
  "Insert Horizontal Line": "Хэвтээ зураас нэмэх",
  "Insert Image": "Зураг нэмэх",
  "Insert file": "Файл нэмэх",
  "Insert youtube/vimeo video": "Youtube/Vimeo видео нэмэх",
  "Insert link": "Холбоос нэмэх",
  "Font size": "Фонтын хэмжээ",
  "Font family": "Фонтын бүл",
  "Insert format block": "Блок нэмэх",
  Normal: "Хэвийн",
  "Heading 1": "Гарчиг 1",
  "Heading 2": "Гарчиг 2",
  "Heading 3": "Гарчиг 3",
  "Heading 4": "Гарчиг 4",
  Quote: "Ишлэл",
  Code: "Код",
  Insert: "Оруулах",
  "Insert table": "Хүснэгт оруулах",
  "Decrease Indent": "Доголын зай хасах",
  "Increase Indent": "Доголын зай нэмэх",
  "Select Special Character": "Тусгай тэмдэгт сонгох",
  "Insert Special Character": "Тусгай тэмдэгт нэмэх",
  "Paint format": "Зургийн формат",
  "Change mode": "Горим өөрчлөх",
  Margins: "Цаасны зай",
  top: "Дээрээс",
  right: "Баруунаас",
  bottom: "Доороос",
  left: "Зүүнээс",
  Styles: "CSS стиль",
  Classes: "CSS анги",
  Align: "Байрлуулах",
  Right: "Баруун",
  Center: "Төв",
  Left: "Зүүн",
  "--Not Set--": "--Тодорхойгүй--",
  Src: "Эх үүсвэр",
  Title: "Гарчиг",
  Alternative: "Алтернатив текст",
  Link: "Холбоос",
  "Open link in new tab": "Холбоосыг шинэ хавтсанд нээх",
  Image: "Зураг",
  file: "Файл",
  "Image properties": "Зургийн үзүүлэлт",
  Cancel: "Цуцлах",
  Ok: "Ok",
  "Your code is similar to HTML. Keep as HTML?": "Таны код HTML кодтой адил байна. HTML форматаар үргэлжлүүлэх үү?",
  "Paste as HTML": "HTML байдлаар буулгах",
  Keep: "Хадгалах",
  Clean: "Цэвэрлэх",
  "Insert as Text": "Текст байдлаар нэмэх",
  "Word Paste Detected": "Word байдлаар буулгасан байна",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Буулгасан агуулга Microsoft Word/Excel форматтай байна. Энэ форматыг хэвээр хадгалах уу эсвэл арилгах уу?",
  "Insert only Text": "Зөвхөн текст оруулах",
  "File Browser": "Файлын цонх",
  "Error on load list": "Жагсаалт татах үед алдаа гарлаа",
  "Error on load folders": "Хавтас татах үед алдаа гарлаа",
  "Are you sure?": "Итгэлтэй байна уу?",
  "Enter Directory name": "Хавтсын нэр оруулах",
  "Create directory": "Хавтас үүсгэх",
  "type name": "Нэр бичих",
  "Drop image": "Зураг буулгах",
  "Drop file": "Файл буулгах",
  "or click": "эсвэл товш",
  "Alternative text": "Алтернатив текст",
  Browse: "Үзэх",
  Upload: "Байршуулах",
  Background: "Арын зураг",
  Text: "Текст",
  Top: "Дээр",
  Middle: "Дунд",
  Bottom: "Доор",
  "Insert column before": "Урд нь багана нэмэх",
  "Insert column after": "Ард нь багана нэмэх",
  "Insert row above": "Дээр нь мөр нэмэх",
  "Insert row below": "Доор нь мөр нэмэх",
  "Delete table": "Хүснэгт устгах",
  "Delete row": "Мөр устгах",
  "Delete column": "Багана устгах",
  "Empty cell": "Нүд цэвэрлэх",
  Delete: "Устгах",
  "Strike through": "Дээгүүр зураас",
  Underline: "Доогуур зураас",
  Break: "Мөрийг таслах",
  "Search for": "Хайх",
  "Replace with": "Үүгээр солих",
  Replace: "Солих",
  Edit: "Засах",
  "Vertical align": "Босоо эгнүүлэх",
  "Horizontal align": "Хэвтээ эгнүүлэх",
  Filter: "Шүүх",
  "Sort by changed": "Сүүлд өөрчлөгдсөнөөр жагсаах",
  "Sort by name": "Нэрээр жагсаах",
  "Sort by size": "Хэмжээгээр жагсаах",
  "Add folder": "Хавтас нэмэх",
  Split: "Задлах",
  "Split vertical": "Баганаар задлах",
  "Split horizontal": "Мөрөөр задлах",
  Merge: "Нэгтгэх",
  "Add column": "Багана нэмэх",
  "Add row": "Мөр нэмэх",
  Border: "Хүрээ",
  "Embed code": "Код оруулах",
  Update: "Шинэчлэх",
  superscript: "Дээд индекс",
  subscript: "Доод индекс",
  "Cut selection": "Сонголтыг таслах",
  Paste: "Буулгах",
  "Choose Content to Paste": "Буулгах агуулгаа сонгоно уу",
  "Chars: %d": "Тэмдэгт: %d",
  "Words: %d": "Үг: %d",
  All: "Бүгдийг",
  "Select %s": "Сонго: %s",
  "Select all": "Бүгдийг сонго",
  source: "Эх үүсвэр",
  bold: "Тод",
  italic: "Налуу",
  brush: "Будах",
  link: "Холбоос",
  undo: "Буцаах",
  redo: "Дахих",
  table: "Хүснэгт",
  image: "Зураг",
  eraser: "Баллуур",
  paragraph: "Параграф",
  fontsize: "Фонтын хэмжээ",
  video: "Видео",
  font: "Фонт",
  about: "Тухай",
  print: "Хэвлэх",
  underline: "Доогуур зураас",
  strikethrough: "Дээгүүр зураас",
  indent: "Догол нэмэх",
  outdent: "Догол багасгах",
  fullsize: "Бүтэн дэлгэц",
  shrink: "Багасга",
  hr: "Хаалт",
  ul: "Тэмдэгт жагсаалт",
  ol: "Дугаарласан жагсаалт",
  cut: "Таслах",
  selectall: "Бүгдийг сонго",
  "Open link": "Холбоос нээх",
  "Edit link": "Холбоос засах",
  "No follow": "Nofollow özelliği",
  Unlink: "Холбоос салгах",
  Eye: "Нүд",
  pencil: "Засах",
  " URL": "URL",
  Reset: "Буцаах",
  Save: "Хадгалах",
  "Save as ...": "Өөрөөр хадгалах",
  Resize: "Хэмжээг өөрчил",
  Crop: "Тайрах",
  Width: "Өргөн",
  Height: "Өндөр",
  "Keep Aspect Ratio": "Харьцааг хадгал",
  Yes: "Тийм",
  No: "Үгүй",
  Remove: "Арилга",
  Select: "Сонго",
  "You can only edit your own images. Download this image on the host?": "Та зөвхөн өөрийн зургуудаа янзлах боломжтой. Энэ зургийг өөр лүүгээ татмаар байна уу?",
  "The image has been successfully uploaded to the host!": "Зургийг хост руу амжилттай хадгалсан",
  palette: "Палет",
  "There are no files": "Энд ямар нэг файл алга",
  Rename: "Шинээр нэрлэх",
  "Enter new name": "Шинэ нэр оруулна уу",
  preview: "Урьдчилан харах",
  download: "Татах",
  "Paste from clipboard": "Самбараас хуулах ",
  "Your browser doesn't support direct access to the clipboard.": "Энэ вэб хөтчөөс самбарт хандах эрх алга.",
  "Copy selection": "Сонголтыг хуул",
  copy: "Хуулах",
  "Border radius": "Хүрээний радиус",
  "Show all": "Бүгдийг харуулах",
  Apply: "Хэрэгжүүл",
  "Please fill out this field": "Энэ талбарыг бөглөнө үү",
  "Please enter a web address": "Вэб хаягаа оруулна уу",
  Default: "Үндсэн",
  Circle: "Дугуй",
  Dot: "Цэг",
  Quadrate: "Дөрвөлжин",
  Find: "Хайх",
  "Find Previous": "Өмнөхийг ол",
  "Find Next": "Дараагийнхийг ол",
  "Insert className": "Бүлгийн нэрээ оруулна уу",
  "Press Alt for custom resizing": "Хэмжээсийг шинээр өөчрлөхийн тулд Alt товчин дээр дарна уу"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Jc = {
  "Type something": "Begin met typen..",
  Advanced: "Geavanceerd",
  "About Jodit": "Over Jodit",
  "Jodit Editor": "Jodit Editor",
  "Free Non-commercial Version": "Gratis niet-commerciële versie",
  "Jodit User's Guide": "Jodit gebruikershandleiding",
  "contains detailed help for using": "bevat gedetailleerde informatie voor gebruik.",
  "For information about the license, please go to our website:": "Voor informatie over de licentie, ga naar onze website:",
  "Buy full version": "Volledige versie kopen",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Alle rechten voorbehouden.",
  Anchor: "Anker",
  "Open in new tab": "Open in nieuwe tab",
  "Open in fullsize": "Editor in volledig scherm openen",
  "Clear Formatting": "Opmaak verwijderen",
  "Fill color or set the text color": "Vulkleur of tekstkleur aanpassen",
  Redo: "Opnieuw",
  Undo: "Ongedaan maken",
  Bold: "Vet",
  Italic: "Cursief",
  "Insert Unordered List": "Geordende list invoegen",
  "Insert Ordered List": "Ongeordende lijst invoegen",
  "Align Center": "Centreren",
  "Align Justify": "Uitlijnen op volledige breedte",
  "Align Left": "Links uitlijnen",
  "Align Right": "Rechts uitlijnen",
  "Insert Horizontal Line": "Horizontale lijn invoegen",
  "Insert Image": "Afbeelding invoegen",
  "Insert file": "Bestand invoegen",
  "Insert youtube/vimeo video": "Youtube/Vimeo video invoegen",
  "Insert link": "Link toevoegen",
  "Font size": "Tekstgrootte",
  "Font family": "Lettertype",
  "Insert format block": "Format blok invoegen",
  Normal: "Normaal",
  "Heading 1": "Koptekst 1",
  "Heading 2": "Koptekst 2",
  "Heading 3": "Koptekst 3",
  "Heading 4": "Koptekst 4",
  Quote: "Citaat",
  Code: "Code",
  Insert: "Invoegen",
  "Insert table": "Tabel invoegen",
  "Decrease Indent": "Inspringing verkleinen",
  "Increase Indent": "Inspringing vergroten",
  "Select Special Character": "Symbool selecteren",
  "Insert Special Character": "Symbool invoegen",
  "Paint format": "Opmaak kopieren",
  "Change mode": "Modus veranderen",
  Margins: "Marges",
  top: "Boven",
  right: "Rechts",
  bottom: "Onder",
  left: "Links",
  Styles: "CSS styles",
  Classes: "CSS classes",
  Align: "Uitlijning",
  Right: "Rechts",
  Center: "Gecentreerd",
  Left: "Links",
  "--Not Set--": "--Leeg--",
  Src: "Src",
  Title: "Titel",
  Alternative: "Alternatieve tekst",
  Link: "Link",
  "Open link in new tab": "Link in nieuwe tab openen",
  Image: "Afbeelding",
  file: "Bestand",
  "Image properties": "Afbeeldingseigenschappen",
  Cancel: "Annuleren",
  Ok: "OK",
  "Your code is similar to HTML. Keep as HTML?": "Deze code lijkt op HTML. Als HTML behouden?",
  "Paste as HTML": "Invoegen als HTML",
  Keep: "Origineel behouden",
  Clean: "Opschonen",
  "Insert as Text": "Als tekst invoegen",
  "Word Paste Detected": "Word-tekst gedetecteerd",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "De geplakte tekst is afkomstig van een Microsoft Word/Excel document. Wil je de opmaak behouden of opschonen?",
  "Insert only Text": "Als onopgemaakte tekst invoegen",
  "File Browser": "Bestandsbrowser",
  "Error on load list": "Fout bij het laden van de lijst",
  "Error on load folders": "Fout bij het laden van de mappenlijst",
  "Are you sure?": "Weet je het zeker?",
  "Enter Directory name": "Geef de map een naam",
  "Create directory": "Map aanmaken",
  "type name": "Type naam",
  "Drop image": "Sleep hier een afbeelding naartoe",
  "Drop file": "Sleep hier een bestand naartoe",
  "or click": "of klik",
  "Alternative text": "Alternatieve tekst",
  Browse: "Bladeren",
  Upload: "Uploaden",
  Background: "Achtergrond",
  Text: "Tekst",
  Top: "Boven",
  Middle: "Midden",
  Bottom: "Onder",
  "Insert column before": "Kolom invoegen (voor)",
  "Insert column after": "Kolom invoegen (na)",
  "Insert row above": "Rij invoegen (boven)",
  "Insert row below": "Rij invoegen (onder)",
  "Delete table": "Tabel verwijderen",
  "Delete row": "Rij verwijderen",
  "Delete column": "Kolom verwijderen",
  "Empty cell": "Cel leegmaken",
  Delete: "Verwijderen",
  "Strike through": "Doorstrepen",
  Underline: "Onderstrepen",
  Break: "Enter",
  "Search for": "Zoek naar",
  "Replace with": "Vervangen door",
  Replace: "Vervangen",
  Edit: "Bewerken",
  "Vertical align": "Verticaal uitlijnen",
  "Horizontal align": "Horizontaal uitlijnen",
  Filter: "Filteren",
  "Sort by changed": "Sorteren op wijzigingsdatum",
  "Sort by name": "Sorteren op naam",
  "Sort by size": "Sorteren op grootte",
  "Add folder": "Map toevoegen",
  Split: "Splitsen",
  "Split vertical": "Verticaal splitsen",
  "Split horizontal": "Horizontaal splitsen",
  Merge: "Samenvoegen",
  "Add column": "Kolom toevoegen",
  "Add row": "Rij toevoegen",
  Border: "Rand",
  "Embed code": "Embed code",
  Update: "Updaten",
  superscript: "Superscript",
  subscript: "Subscript",
  "Cut selection": "Selectie knippen",
  Paste: "Plakken",
  "Choose Content to Paste": "Kies content om te plakken",
  "Chars: %d": "Tekens: %d",
  "Words: %d": "Woorden: %d",
  All: "Alles",
  "Select %s": "Selecteer: %s",
  "Select all": "Selecteer alles",
  source: "Broncode",
  bold: "vet",
  italic: "cursief",
  brush: "kwast",
  link: "link",
  undo: "ongedaan maken",
  redo: "opnieuw",
  table: "tabel",
  image: "afbeelding",
  eraser: "gum",
  paragraph: "paragraaf",
  fontsize: "lettergrootte",
  video: "video",
  font: "lettertype",
  about: "over",
  print: "afdrukken",
  underline: "onderstreept",
  strikethrough: "doorgestreept",
  indent: "inspringen",
  outdent: "minder inspringen",
  fullsize: "volledige grootte",
  shrink: "kleiner maken",
  hr: "horizontale lijn",
  ul: "lijst",
  ol: "genummerde lijst",
  cut: "knip",
  selectall: "alles selecteren",
  "Open link": "Link openen",
  "Edit link": "Link aanpassen",
  "No follow": "Niet volgen",
  Unlink: "link verwijderen",
  Eye: "Recensie",
  pencil: "Om te bewerken",
  " URL": " URL",
  Reset: "Herstellen",
  Save: "Opslaan",
  "Save as ...": "Opslaan als ...",
  Resize: "Grootte aanpassen",
  Crop: "Bijknippen",
  Width: "Breedte",
  Height: "Hoogte",
  "Keep Aspect Ratio": "Verhouding behouden",
  Yes: "Ja",
  No: "Nee",
  Remove: "Verwijderen",
  Select: "Selecteren",
  "You can only edit your own images. Download this image on the host?": "Je kunt alleen je eigen afbeeldingen aanpassen. Deze afbeelding downloaden?",
  "The image has been successfully uploaded to the host!": "De afbeelding is succesvol geüploadet!",
  palette: "Palette",
  "There are no files": "Er zijn geen bestanden in deze map.",
  Rename: "Hernoemen",
  "Enter new name": "Voer een nieuwe naam in",
  preview: "Voorvertoning",
  download: "Download",
  "Paste from clipboard": "Plakken van klembord",
  "Your browser doesn't support direct access to the clipboard.": "Uw browser ondersteunt geen directe toegang tot het klembord.",
  "Copy selection": "Selectie kopiëren",
  copy: "kopiëren",
  "Border radius": "Border radius",
  "Show all": "Toon alle",
  Apply: "Toepassen",
  "Please fill out this field": "Vul dit veld in",
  "Please enter a web address": "Voer een webadres in",
  Default: "Standaard",
  Circle: "Cirkel",
  Dot: "Punt",
  Quadrate: "Kwadraat",
  Find: "Zoeken",
  "Find Previous": "Vorige Zoeken",
  "Find Next": "Volgende Zoeken",
  "Insert className": "Voeg de klassenaam in",
  "Press Alt for custom resizing": "Druk op Alt voor aangepaste grootte"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Yc = {
  "Type something": "Skriv noe",
  "About Jodit": "Om Jodit",
  "Jodit Editor": "Jodit-redigerer",
  "Jodit User's Guide": "Jodit brukerveiledning",
  "contains detailed help for using": "Inneholder detaljert hjelp for bruk",
  "For information about the license, please go to our website:": "For informasjon om lisensen, besøk vår nettside:",
  "Buy full version": "Kjøp fullversjon",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Opphavsrett © XDSoft.net - Chupurnov Valeriy. Alle rettigheter forbeholdt.",
  Anchor: "Anker",
  "Open in new tab": "Åpne i ny fane",
  "Open in fullsize": "Åpne i fullskjerm",
  "Clear Formatting": "Fjern formatering",
  "Fill color or set the text color": "Endre bakgrunns- eller tekstfarge",
  Redo: "Gjør om",
  Undo: "Angre",
  Bold: "Fet",
  Italic: "Kursiv",
  "Insert Unordered List": "Sett inn punktliste",
  "Insert Ordered List": "Sett inn nummerert liste",
  "Align Center": "Midtstill",
  "Align Justify": "Juster",
  "Align Left": "Venstrejuster",
  "Align Right": "Høyrejuster",
  "Insert Horizontal Line": "Sett inn horisontal linje",
  "Insert Image": "Sett inn bilde",
  "Insert file": "Sett inn fil",
  "Insert youtube/vimeo video": "Sett inn YouTube/Vimeo-video",
  "Insert link": "Sett inn lenke",
  "Font size": "Skriftstørrelse",
  "Font family": "Skriftfamilie",
  "Insert format block": "Sett inn formateringsblokk",
  Normal: "Normal",
  "Heading 1": "Overskrift 1",
  "Heading 2": "Overskrift 2",
  "Heading 3": "Overskrift 3",
  "Heading 4": "Overskrift 4",
  Quote: "Sitat",
  Code: "Kode",
  Insert: "Sett inn",
  "Insert table": "Sett inn tabell",
  "Decrease Indent": "Reduser innrykk",
  "Increase Indent": "Øk innrykk",
  "Select Special Character": "Velg spesialtegn",
  "Insert Special Character": "Sett inn spesialtegn",
  "Paint format": "Kopier format",
  "Change mode": "Bytt modus (WYSIWYG/HTML)",
  Margins: "Marger",
  top: "topp",
  right: "høyre",
  bottom: "bunn",
  left: "venstre",
  Styles: "Stiler",
  Classes: "Klasser",
  Align: "Justering",
  Right: "Høyre",
  Center: "Senter",
  Left: "Venstre",
  "--Not Set--": "--Ikke satt--",
  Src: "Kilde",
  Title: "Tittel",
  Alternative: "Alternativ",
  Filter: "Filter",
  Link: "Lenke",
  "Open link in new tab": "Åpne lenke i ny fane",
  Image: "Bilde",
  file: "fil",
  Advanced: "Avansert",
  "Image properties": "Bildeegenskaper",
  Cancel: "Avbryt",
  Ok: "OK",
  "Your code is similar to HTML. Keep as HTML?": "Koden din ligner HTML. Beholde som HTML?",
  "Paste as HTML": "Lim inn som HTML",
  Keep: "Behold",
  Clean: "Rens",
  "Insert as Text": "Lim inn som tekst",
  "Word Paste Detected": "Word-innliming oppdaget",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Innholdet du limer inn kommer fra et Microsoft Word/Excel-dokument. Vil du beholde formatet eller rense det?",
  "Insert only Text": "Lim inn kun tekst",
  "File Browser": "Filutforsker",
  "Error on load list": "Feil ved lasting av liste",
  "Error on load folders": "Feil ved lasting av mapper",
  "Are you sure?": "Er du sikker?",
  "Enter Directory name": "Skriv inn mappenavn",
  "Create directory": "Opprett mappe",
  "type name": "skriv navn",
  "Drop image": "Slipp bilde",
  "Drop file": "Slipp fil",
  "or click": "eller klikk",
  "Alternative text": "Alternativ tekst",
  Browse: "Bla gjennom",
  Upload: "Last opp",
  Background: "Bakgrunn",
  Border: "Kantlinje",
  Text: "Tekst",
  Top: "Topp",
  Middle: "Midt",
  Bottom: "Bunn",
  "Insert column before": "Sett inn kolonne før",
  "Insert column after": "Sett inn kolonne etter",
  "Insert row above": "Sett inn rad over",
  "Insert row below": "Sett inn rad under",
  "Delete table": "Slett tabell",
  "Delete row": "Slett rad",
  "Delete column": "Slett kolonne",
  "Empty cell": "Tøm celle",
  "Chars: %d": "Tegn: %d",
  "Words: %d": "Ord: %d",
  Split: "Del",
  "Split vertical": "Del vertikalt",
  "Split horizontal": "Del horisontalt",
  "Strike through": "Gjennomstreking",
  Underline: "Understreking",
  superscript: "hevet skrift",
  subscript: "senket skrift",
  "Cut selection": "Klipp ut markering",
  "Select all": "Velg alt",
  Break: "Pause",
  "Search for": "Søk etter",
  "Replace with": "Erstatt med",
  Replace: "Erstatt",
  Paste: "Lim inn",
  "Choose Content to Paste": "Velg innhold å lime inn",
  source: "kilde",
  bold: "fet",
  italic: "kursiv",
  brush: "pensel",
  link: "lenke",
  undo: "angre",
  redo: "gjør om",
  table: "tabell",
  image: "bilde",
  eraser: "viskelær",
  paragraph: "avsnitt",
  fontsize: "skriftstørrelse",
  video: "video",
  font: "skrift",
  about: "om redigeringsverktøyet",
  print: "skriv ut",
  underline: "understreking",
  strikethrough: "gjennomstreking",
  indent: "innrykk",
  outdent: "reduser innrykk",
  fullsize: "full størrelse",
  shrink: "krympe",
  hr: "linje",
  ul: "punktliste",
  ol: "nummerert liste",
  cut: "klipp ut",
  selectall: "velg alt",
  "Open link": "Åpne lenke",
  "Edit link": "Rediger lenke",
  "No follow": "Ingen oppfølging",
  Unlink: "Fjern lenke",
  Eye: "Forhåndsvisning",
  pencil: "Rediger",
  " URL": "URL",
  Reset: "Tilbakestill",
  Save: "Lagre",
  "Save as ...": "Lagre som ...",
  Resize: "Endre størrelse",
  Crop: "Beskjær",
  Width: "Bredde",
  Height: "Høyde",
  "Keep Aspect Ratio": "Behold proporsjoner",
  Yes: "Ja",
  No: "Nei",
  Remove: "Fjern",
  Select: "Velg",
  "Select %s": "Velg: %s",
  Update: "Oppdater",
  "Vertical align": "Vertikal justering",
  Merge: "Slå sammen",
  "Add column": "Legg til kolonne",
  "Add row": "Legg til rad",
  Delete: "Slett",
  "Horizontal align": "Horisontal justering",
  "Sort by changed": "Sorter etter endring",
  "Sort by name": "Sorter etter navn",
  "Sort by size": "Sorter etter størrelse",
  "Add folder": "Legg til mappe",
  palette: "Palett",
  preview: "Forhåndsvisning",
  "Line height": "Linjehøyde",
  "Insert className": "Sett inn klassenavn",
  apply: "Bruk",
  edit: "Rediger",
  "Show all": "Vis alle",
  sound: "Lyd",
  "Interim Results": "Foreløpige resultater",
  default: "Standard",
  circle: "Sirkel",
  dot: "Punkt",
  square: "Firkant",
  "Press Alt for custom resizing": "Trykk på Alt for å endre størrelse",
  "Copy selection": "Kopier utvalg",
  "Paste from clipboard": "Lim inn fra utklippstavlen",
  Find: "Finne"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Gc = {
  "Type something": "Napisz coś",
  Advanced: "Zaawansowane",
  "About Jodit": "O Jodit",
  "Jodit Editor": "Edytor Jodit",
  "Jodit User's Guide": "Instrukcja Jodit",
  "contains detailed help for using": "zawiera szczegółowe informacje dotyczące użytkowania.",
  "For information about the license, please go to our website:": "Odwiedź naszą stronę, aby uzyskać więcej informacji na temat licencji:",
  "Buy full version": "Zakup pełnej wersji",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Wszystkie prawa zastrzeżone.",
  Anchor: "Kotwica",
  "Open in new tab": "Otwórz w nowej zakładce",
  "Open in fullsize": "Otwórz edytor w pełnym rozmiarze",
  "Clear Formatting": "Wyczyść formatowanie",
  "Fill color or set the text color": "Kolor wypełnienia lub ustaw kolor tekstu",
  Redo: "Ponów",
  Undo: "Cofnij",
  Bold: "Pogrubienie",
  Italic: "Kursywa",
  "Insert Unordered List": "Wstaw listę wypunktowaną",
  "Insert Ordered List": "Wstaw listę numeryczną",
  "Align Center": "Wyśrodkuj",
  "Align Justify": "Wyjustuj",
  "Align Left": "Wyrównaj do lewej",
  "Align Right": "Wyrównaj do prawej",
  "Insert Horizontal Line": "Wstaw linię poziomą",
  "Insert Image": "Wstaw grafikę",
  "Insert file": "Wstaw plik",
  "Insert youtube/vimeo video": "Wstaw film Youtube/vimeo",
  "Insert link": "Wstaw link",
  "Font size": "Rozmiar tekstu",
  "Font family": "Krój czcionki",
  "Insert format block": "Wstaw formatowanie",
  Normal: "Normalne",
  "Heading 1": "Nagłówek 1",
  "Heading 2": "Nagłówek 2",
  "Heading 3": "Nagłówek 3",
  "Heading 4": "Nagłówek 4",
  Quote: "Cytat",
  Code: "Kod",
  Insert: "Wstaw",
  "Insert table": "Wstaw tabelę",
  "Decrease Indent": "Zmniejsz wcięcie",
  "Increase Indent": "Zwiększ wcięcie",
  "Select Special Character": "Wybierz znak specjalny",
  "Insert Special Character": "Wstaw znak specjalny",
  "Paint format": "Malarz formatów",
  "Change mode": "Zmień tryb",
  Margins: "Marginesy",
  top: "Górny",
  right: "Prawy",
  bottom: "Dolny",
  left: "Levy",
  Styles: "Style CSS",
  Classes: "Klasy CSS",
  Align: "Wyrównanie",
  Right: "Prawa",
  Center: "środek",
  Left: "Lewa",
  "--Not Set--": "brak",
  Src: "Źródło",
  Title: "Tytuł",
  Alternative: "Tekst alternatywny",
  Link: "Link",
  "Open link in new tab": "Otwórz w nowej zakładce",
  Image: "Grafika",
  file: "Plik",
  "Image properties": "Właściwości grafiki",
  Cancel: "Anuluj",
  Ok: "OK",
  "Your code is similar to HTML. Keep as HTML?": "Twój kod wygląda jak HTML. Zachować HTML?",
  "Paste as HTML": "Wkleić jako HTML?",
  Keep: "Oryginalny tekst",
  Clean: "Wyczyść",
  "Insert as Text": "Wstaw jako tekst",
  "Word Paste Detected": "Wykryto tekst w formacie Word",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Wklejany tekst pochodzi z dokumentu Microsoft Word/Excel. Chcesz zachować ten format czy wyczyścić go? ",
  "Insert only Text": "Wstaw tylko treść",
  "File Browser": "Przeglądarka plików",
  "Error on load list": "Błąd ładowania listy plików",
  "Error on load folders": "Błąd ładowania folderów",
  "Are you sure?": "Czy jesteś pewien?",
  "Enter Directory name": "Wprowadź nazwę folderu",
  "Create directory": "Utwórz folder",
  "type name": "wprowadź nazwę",
  "Drop image": "Upuść plik graficzny",
  "Drop file": "Upuść plik",
  "or click": "lub kliknij tu",
  "Alternative text": "Tekst alternatywny",
  Browse: "Przeglądaj",
  Upload: "Wczytaj",
  Background: "Tło",
  Text: "Treść",
  Top: "Góra",
  Middle: "Środek",
  Bottom: "Dół",
  "Insert column before": "Wstaw kolumnę przed",
  "Insert column after": "Wstaw kolumnę po",
  "Insert row above": "Wstaw wiersz przed",
  "Insert row below": "Wstaw wiersz po",
  "Delete table": "Usuń tabelę",
  "Delete row": "Usuń wiersz",
  "Delete column": "Usuń kolumnę",
  "Empty cell": "Wyczyść komórkę",
  Delete: "Usuń",
  "Strike through": "Przekreślenie",
  Underline: "Podkreślenie",
  Break: "Przerwa",
  "Search for": "Szukaj",
  "Replace with": "Zamień na",
  Replace: "Wymienić",
  Edit: "Edytuj",
  "Vertical align": "Wyrównywanie w pionie",
  "Horizontal align": "Wyrównywanie w poziomie",
  Filter: "Filtruj",
  "Sort by changed": "Sortuj wg zmiany",
  "Sort by name": "Sortuj wg nazwy",
  "Sort by size": "Sortuj wg rozmiaru",
  "Add folder": "Dodaj folder",
  "Split vertical": "Podziel w pionie",
  "Split horizontal": "Podziel w poziomie",
  Split: "Podziel",
  Merge: "Scal",
  "Add column": "Dodaj kolumnę",
  "Add row": "Dodaj wiersz",
  Border: "Obramowanie",
  "Embed code": "Wstaw kod",
  Update: "Aktualizuj",
  superscript: "indeks górny",
  subscript: "index dolny",
  "Cut selection": "Wytnij zaznaczenie",
  Paste: "Wklej",
  "Choose Content to Paste": "Wybierz zawartość do wklejenia",
  "Chars: %d": "Znaki: %d",
  "Words: %d": "Słowa: %d",
  All: "Wszystko",
  "Select %s": "Wybierz: %s",
  "Select all": "Wybierz wszystko",
  source: "HTML",
  bold: "pogrubienie",
  italic: "kursywa",
  brush: "pędzel",
  link: "link",
  undo: "cofnij",
  redo: "ponów",
  table: "tabela",
  image: "grafika",
  eraser: "wyczyść",
  paragraph: "akapit",
  fontsize: "rozmiar czcionki",
  video: "wideo",
  font: "czcionka",
  about: "O programie",
  print: "drukuj",
  underline: "podkreślenie",
  strikethrough: "przekreślenie",
  indent: "wcięcie",
  outdent: "wycięcie",
  fullsize: "pełen rozmiar",
  shrink: "przytnij",
  hr: "linia pozioma",
  ul: "lista",
  ol: "lista numerowana",
  cut: "wytnij",
  selectall: "zaznacz wszystko",
  "Open link": "otwórz link",
  "Edit link": "edytuj link",
  "No follow": "Atrybut no-follow",
  Unlink: "Usuń link",
  Eye: "szukaj",
  pencil: "edytuj",
  " URL": "URL",
  Reset: "wyczyść",
  Save: "zapisz",
  "Save as ...": "zapisz jako",
  Resize: "Zmień rozmiar",
  Crop: "Przytnij",
  Width: "Szerokość",
  Height: "Wysokość",
  "Keep Aspect Ratio": "Zachowaj proporcje",
  Yes: "Tak",
  No: "Nie",
  Remove: "Usuń",
  Select: "Wybierz",
  "You can only edit your own images. Download this image on the host?": "Możesz edytować tylko swoje grafiki. Czy chcesz pobrać tą grafikę?",
  "The image has been successfully uploaded to the host!": "Grafika została pomyślnienie dodana na serwer",
  palette: "Paleta",
  "There are no files": "Brak plików.",
  Rename: "zmień nazwę",
  "Enter new name": "Wprowadź nową nazwę",
  preview: "podgląd",
  download: "pobierz",
  "Paste from clipboard": "Wklej ze schowka",
  "Your browser doesn't support direct access to the clipboard.": "Twoja przeglądarka nie obsługuje schowka",
  "Copy selection": "Kopiuj zaznaczenie",
  copy: "kopiuj",
  "Border radius": "Zaokrąglenie krawędzi",
  "Show all": "Pokaż wszystkie",
  Apply: "Zastosuj",
  "Please fill out this field": "Proszę wypełnić to pole",
  "Please enter a web address": "Proszę, wpisz adres sieci web",
  Default: "Domyślnie",
  Circle: "Koło",
  Dot: "Punkt",
  Quadrate: "Kwadrat",
  Find: "Znaleźć",
  "Find Previous": "Znaleźć Poprzednie",
  "Find Next": "Znajdź Dalej",
  "Insert className": "Wstaw nazwę zajęć",
  "Press Alt for custom resizing": "Naciśnij Alt, aby zmienić rozmiar"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Xc = {
  "Type something": "Escreva algo...",
  Advanced: "Avançado",
  "About Jodit": "Sobre o Jodit",
  "Jodit Editor": "Editor Jodit",
  "Jodit User's Guide": "Guia de usuário Jodit",
  "contains detailed help for using": "contém ajuda detalhada para o uso.",
  "For information about the license, please go to our website:": "Para informação sobre a licença, por favor visite nosso site:",
  "Buy full version": "Compre a versão completa",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Todos os direitos reservados.",
  Anchor: "Link",
  "Open in new tab": "Abrir em nova aba",
  "Open in fullsize": "Abrir editor em tela cheia",
  "Clear Formatting": "Limpar formatação",
  "Fill color or set the text color": "Cor de preenchimento ou cor do texto",
  Redo: "Refazer",
  Undo: "Desfazer",
  Bold: "Negrito",
  Italic: "Itálico",
  "Insert Unordered List": "Inserir lista não ordenada",
  "Insert Ordered List": "Inserir lista ordenada",
  "Align Center": "Centralizar",
  "Align Justify": "Justificar",
  "Align Left": "Alinhar à Esquerda",
  "Align Right": "Alinhar à Direita",
  "Insert Horizontal Line": "Inserir linha horizontal",
  "Insert Image": "Inserir imagem",
  "Insert file": "Inserir arquivo",
  "Insert youtube/vimeo video": "Inserir vídeo do Youtube/vimeo",
  "Insert link": "Inserir link",
  "Font size": "Tamanho da letra",
  "Font family": "Fonte",
  "Insert format block": "Inserir bloco",
  Normal: "Normal",
  "Heading 1": "Cabeçalho 1",
  "Heading 2": "Cabeçalho 2",
  "Heading 3": "Cabeçalho 3",
  "Heading 4": "Cabeçalho 4",
  Quote: "Citação",
  Code: "Código",
  Insert: "Inserir",
  "Insert table": "Inserir tabela",
  "Decrease Indent": "Diminuir recuo",
  "Increase Indent": "Aumentar recuo",
  "Select Special Character": "Selecionar caractere especial",
  "Insert Special Character": "Inserir caractere especial",
  "Paint format": "Copiar formato",
  "Change mode": "Mudar modo",
  Margins: "Margens",
  top: "cima",
  right: "direta",
  bottom: "baixo",
  left: "esquerda",
  Styles: "Estilos CSS",
  Classes: "Classes CSS",
  Align: "Alinhamento",
  Right: "Direita",
  Center: "Centro",
  Left: "Esquerda",
  "--Not Set--": "--Não Estabelecido--",
  Src: "Fonte",
  Title: "Título",
  Alternative: "Texto Alternativo",
  Link: "Link",
  "Open link in new tab": "Abrir link em nova aba",
  Image: "Imagem",
  file: "Arquivo",
  "Image properties": "Propriedades da imagem",
  Cancel: "Cancelar",
  Ok: "Ok",
  "Your code is similar to HTML. Keep as HTML?": "Seu código é similar ao HTML. Manter como HTML?",
  "Paste as HTML": "Colar como HTML?",
  Keep: "Manter",
  Clean: "Limpar",
  "Insert as Text": "Inserir como Texto",
  "Word Paste Detected": "Colado do Word Detectado",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "O conteúdo colado veio de um documento Microsoft Word/Excel. Você deseja manter o formato ou limpa-lo?",
  "Insert only Text": "Inserir somente o Texto",
  "File Browser": "Procurar arquivo",
  "Error on load list": "Erro ao carregar a lista",
  "Error on load folders": "Erro ao carregar as pastas",
  "Are you sure?": "Você tem certeza?",
  "Enter Directory name": "Escreva o nome da pasta",
  "Create directory": "Criar pasta",
  "type name": "Escreva seu nome",
  "Drop image": "Soltar imagem",
  "Drop file": "Soltar arquivo",
  "or click": "ou clique",
  "Alternative text": "Texto alternativo",
  Browse: "Explorar",
  Upload: "Upload",
  Background: "Fundo",
  Text: "Texto",
  Top: "Cima",
  Middle: "Meio",
  Bottom: "Baixo",
  "Insert column before": "Inserir coluna antes",
  "Insert column after": "Inserir coluna depois",
  "Insert row above": "Inserir linha acima",
  "Insert row below": "Inserir linha abaixo",
  "Delete table": "Excluir tabela",
  "Delete row": "Excluir linha",
  "Delete column": "Excluir coluna",
  "Empty cell": "Limpar célula",
  Delete: "Excluir",
  "Strike through": "Tachado",
  Underline: "Sublinhar",
  Break: "Pausa",
  "Search for": "Procurar por",
  "Replace with": "Substituir com",
  Replace: "Substituir",
  Edit: "Editar",
  "Vertical align": "Alinhamento vertical",
  "Horizontal align": "Alinhamento horizontal",
  Filter: "filtrar",
  "Sort by changed": "Ordenar por modificação",
  "Sort by name": "Ordenar por nome",
  "Sort by size": "Ordenar por tamanho",
  "Add folder": "Adicionar pasta",
  Split: "Dividir",
  "Split vertical": "Dividir vertical",
  "Split horizontal": "Dividir horizontal",
  Merge: "Mesclar",
  "Add column": "Adicionar coluna",
  "Add row": "Adicionar linha",
  Border: "Borda",
  "Embed code": "Incluir código",
  Update: "Atualizar",
  superscript: "sobrescrito",
  subscript: "subscrito",
  "Cut selection": "Cortar seleção",
  Paste: "Colar",
  "Choose Content to Paste": "Escolher conteúdo para colar",
  "Chars: %d": "Caracteres: %d",
  "Words: %d": "Palavras: %d",
  All: "Tudo",
  "Select %s": "Selecionar: %s",
  "Select all": "Selecionar tudo",
  source: "HTML",
  bold: "negrito",
  italic: "itálico",
  brush: "pincel",
  link: "link",
  undo: "desfazer",
  redo: "refazer",
  table: "tabela",
  image: "imagem",
  eraser: "apagar",
  paragraph: "parágrafo",
  fontsize: "tamanho da letra",
  video: "vídeo",
  font: "fonte",
  about: "Sobre de",
  print: "Imprimir",
  underline: "sublinhar",
  strikethrough: "tachado",
  indent: "recuar",
  outdent: "diminuir recuo",
  fullsize: "Tamanho completo",
  shrink: "diminuir",
  hr: "linha horizontal",
  ul: "lista não ordenada",
  ol: "lista ordenada",
  cut: "Cortar",
  selectall: "Selecionar tudo",
  "Open link": "Abrir link",
  "Edit link": "Editar link",
  "No follow": "Não siga",
  Unlink: "Remover link",
  Eye: "Visualizar",
  pencil: "Editar",
  " URL": "URL",
  Reset: "Resetar",
  Save: "Salvar",
  "Save as ...": "Salvar como...",
  Resize: "Redimensionar",
  Crop: "Recortar",
  Width: "Largura",
  Height: "Altura",
  "Keep Aspect Ratio": "Manter a proporção",
  Yes: "Sim",
  No: "Não",
  Remove: "Remover",
  Select: "Selecionar",
  "You can only edit your own images. Download this image on the host?": "Você só pode editar suas próprias imagens. Baixar essa imagem pro servidor?",
  "The image has been successfully uploaded to the host!": "A imagem foi enviada com sucesso para o servidor!",
  palette: "Palette",
  "There are no files": "Não há arquivos nesse diretório.",
  Rename: "Húngara",
  "Enter new name": "Digite um novo nome",
  preview: "preview",
  download: "Baixar",
  "Paste from clipboard": "Colar da área de transferência",
  "Your browser doesn't support direct access to the clipboard.": "O seu navegador não oferece suporte a acesso direto para a área de transferência.",
  "Copy selection": "Selecção de cópia",
  copy: "cópia",
  "Border radius": "Border radius",
  "Show all": "Mostrar todos os",
  Apply: "Aplicar",
  "Please fill out this field": "Por favor, preencha este campo",
  "Please enter a web address": "Por favor introduza um endereço web",
  Default: "Padrão",
  Circle: "Círculo",
  Dot: "Ponto",
  Quadrate: "Quadro",
  "Lower Alpha": "Letra Minúscula",
  "Lower Greek": "Grego Minúscula",
  "Lower Roman": "Romano Minúscula",
  "Upper Alpha": "Letra Maiúscula",
  "Upper Roman": "Romano Maiúscula",
  Find: "Encontrar",
  "Find Previous": "Encontrar Anteriores",
  "Find Next": "Localizar Próxima",
  "Insert className": "Insira o nome da classe",
  "Press Alt for custom resizing": "Pressione Alt para redimensionamento personalizado"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Zc = {
  "Type something": "Напишите что-либо",
  "About Jodit": "О Jodit",
  "Jodit Editor": "Редактор Jodit",
  "Jodit User's Guide": "Jodit Руководство пользователя",
  "contains detailed help for using": "содержит детальную информацию по использованию",
  "For information about the license, please go to our website:": "Для получения сведений о лицензии , пожалуйста, перейдите на наш сайт:",
  "Buy full version": "Купить полную версию",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Авторские права © XDSoft.net - Чупурнов Валерий. Все права защищены.",
  Anchor: "Анкор",
  "Open in new tab": "Открывать ссылку в новой вкладке",
  "Open in fullsize": "Открыть редактор в полном размере",
  "Clear Formatting": "Очистить форматирование",
  "Fill color or set the text color": "Цвет заливки или цвет текста",
  Redo: "Повтор",
  Undo: "Отмена",
  Bold: "Жирный",
  Italic: "Наклонный",
  "Insert Unordered List": "Вставка маркированного списка",
  "Insert Ordered List": "Вставить нумерованный список",
  "Align Center": "Выровнять по центру",
  "Align Justify": "Выровнять по ширине",
  "Align Left": "Выровнять по левому краю",
  "Align Right": "Выровнять по правому краю",
  "Insert Horizontal Line": "Вставить горизонтальную линию",
  "Insert Image": "Вставить изображение",
  "Insert file": "Вставить файл",
  "Insert youtube/vimeo video": "Вставьте видео",
  "Insert link": "Вставить ссылку",
  "Font size": "Размер шрифта",
  "Font family": "Шрифт",
  "Insert format block": "Вставить блочный элемент",
  Normal: "Нормальный текст",
  "Heading 1": "Заголовок 1",
  "Heading 2": "Заголовок 2",
  "Heading 3": "Заголовок 3",
  "Heading 4": "Заголовок 4",
  Quote: "Цитата",
  Code: "Код",
  Insert: "Вставить",
  "Insert table": "Вставить таблицу",
  "Decrease Indent": "Уменьшить отступ",
  "Increase Indent": "Увеличить отступ",
  "Select Special Character": "Выберите специальный символ",
  "Insert Special Character": "Вставить специальный символ",
  "Paint format": "Формат краски",
  "Change mode": "Источник",
  Margins: "Отступы",
  top: "сверху",
  right: "справа",
  bottom: "снизу",
  left: "слева",
  Styles: "Стили",
  Classes: "Классы",
  Align: "Выравнивание",
  Right: "По правому краю",
  Center: "По центру",
  Left: "По левому краю",
  "--Not Set--": "--не устанавливать--",
  Src: "src",
  Title: "Заголовок",
  Alternative: "Альтернативный текст (alt)",
  Link: "Ссылка",
  "Open link in new tab": "Открывать ссылку в новом окне",
  file: "Файл",
  Advanced: "Расширенные",
  "Image properties": "Свойства изображения",
  Cancel: "Отмена",
  Ok: "Ок",
  "Your code is similar to HTML. Keep as HTML?": "Ваш текст, который вы пытаетесь вставить похож на HTML. Вставить его как HTML?",
  "Paste as HTML": "Вставить как HTML?",
  Keep: "Сохранить оригинал",
  Clean: "Почистить",
  "Insert as Text": "Вставить как текст",
  "Insert only Text": "Вставить только текст",
  "Word Paste Detected": "Возможно это фрагмент Word или Excel",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Контент который вы вставляете поступает из документа Microsoft Word / Excel. Вы хотите сохранить формат или очистить его?",
  "File Browser": "Браузер файлов",
  "Error on load list": "Ошибка при загрузке списка изображений",
  "Error on load folders": "Ошибка при загрузке списка директорий",
  "Are you sure?": "Вы уверены?",
  "Enter Directory name": "Введите название директории",
  "Create directory": "Создать директорию",
  "type name": "введите название",
  "Drop image": "Перетащите сюда изображение",
  "Drop file": "Перетащите сюда файл",
  "or click": "или нажмите",
  "Alternative text": "Альтернативный текст",
  Browse: "Сервер",
  Upload: "Загрузка",
  Background: "Фон",
  Text: "Текст",
  Top: " К верху",
  Middle: "По середине",
  Bottom: "К низу",
  "Insert column before": "Вставить столбец до",
  "Insert column after": "Вставить столбец после",
  "Insert row above": "Вставить ряд выше",
  "Insert row below": "Вставить ряд ниже",
  "Delete table": "Удалить таблицу",
  "Delete row": "Удалять ряд",
  "Delete column": "Удалить столбец",
  "Empty cell": "Очистить ячейку",
  source: "HTML",
  bold: "жирный",
  italic: "курсив",
  brush: "заливка",
  link: "ссылка",
  undo: "отменить",
  redo: "повторить",
  table: "таблица",
  image: "Изображение",
  eraser: "очистить",
  paragraph: "параграф",
  fontsize: "размер шрифта",
  video: "видео",
  font: "шрифт",
  about: "о редакторе",
  print: "печать",
  underline: "подчеркнутый",
  strikethrough: "перечеркнутый",
  indent: "отступ",
  outdent: "выступ",
  fullsize: "во весь экран",
  shrink: "обычный размер",
  hr: "линия",
  ul: "Список",
  ol: "Нумерованный список",
  cut: "Вырезать",
  selectall: "Выделить все",
  "Embed code": "Код",
  "Open link": "Открыть ссылку",
  "Edit link": "Редактировать ссылку",
  "No follow": "Атрибут nofollow",
  Unlink: "Убрать ссылку",
  Eye: "Просмотр",
  pencil: "Редактировать",
  Update: "Обновить",
  " URL": "URL",
  Edit: "Редактировать",
  "Horizontal align": "Горизонтальное выравнивание",
  Filter: "Фильтр",
  "Sort by changed": "По изменению",
  "Sort by name": "По имени",
  "Sort by size": "По размеру",
  "Add folder": "Добавить папку",
  Reset: "Восстановить",
  Save: "Сохранить",
  "Save as ...": "Сохранить как",
  Resize: "Изменить размер",
  Crop: "Обрезать размер",
  Width: "Ширина",
  Height: "Высота",
  "Keep Aspect Ratio": "Сохранять пропорции",
  Yes: "Да",
  No: "Нет",
  Remove: "Удалить",
  Select: "Выделить",
  "Chars: %d": "Символов: %d",
  "Words: %d": "Слов: %d",
  All: "Выделить все",
  "Select %s": "Выделить: %s",
  "Select all": "Выделить все",
  "Vertical align": "Вертикальное выравнивание",
  Split: "Разделить",
  "Split vertical": "Разделить по вертикали",
  "Split horizontal": "Разделить по горизонтали",
  Merge: "Объединить в одну",
  "Add column": "Добавить столбец",
  "Add row": "Добавить строку",
  Delete: "Удалить",
  Border: "Рамка",
  "License: %s": "Лицензия: %s",
  "Strike through": "Перечеркнуть",
  Underline: "Подчеркивание",
  superscript: "верхний индекс",
  subscript: "индекс",
  "Cut selection": "Вырезать",
  Break: "Разделитель",
  "Search for": "Найти",
  "Replace with": "Заменить на",
  Replace: "Заменить",
  Paste: "Вставить",
  "Choose Content to Paste": "Выбрать контент для вставки",
  "You can only edit your own images. Download this image on the host?": "Вы можете редактировать только свои собственные изображения. Загрузить это изображение на ваш сервер?",
  "The image has been successfully uploaded to the host!": "Изображение успешно загружено на сервер!",
  palette: "палитра",
  "There are no files": "В данном каталоге нет файлов",
  Rename: "Переименовать",
  "Enter new name": "Введите новое имя",
  preview: "Предпросмотр",
  download: "Скачать",
  "Paste from clipboard": "Вставить из буфера обмена",
  "Your browser doesn't support direct access to the clipboard.": "Ваш браузер не поддерживает прямой доступ к буферу обмена.",
  "Copy selection": "Скопировать выделенное",
  copy: "копия",
  "Border radius": "Радиус границы",
  "Show all": "Показать все",
  Apply: "Применить",
  "Please fill out this field": "Пожалуйста, заполните это поле",
  "Please enter a web address": "Пожалуйста, введите веб-адрес",
  Default: "По умолчанию",
  Circle: "Круг",
  Dot: "Точка",
  Quadrate: "Квадрат",
  Find: "Найти",
  "Find Previous": "Найти Предыдущие",
  "Find Next": "Найти Далее",
  "Insert className": "Вставить название класса",
  "Press Alt for custom resizing": "Нажмите Alt для изменения пользовательского размера"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Qc = {
  "Type something": "Bir şeyler yaz",
  Advanced: "Gelişmiş",
  "About Jodit": "Jodit Hakkında",
  "Jodit Editor": "Jodit Editor",
  "Jodit User's Guide": "Jodit Kullanım Kılavuzu",
  "contains detailed help for using": "kullanım için detaylı bilgiler içerir",
  "For information about the license, please go to our website:": "Lisans hakkında bilgi için lütfen web sitemize gidin:",
  "Buy full version": "Tam versiyonunu satın al",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. Tüm hakları saklıdır.",
  Anchor: "Bağlantı",
  "Open in new tab": "Yeni sekmede aç",
  "Open in fullsize": "Editörü tam ekranda aç",
  "Clear Formatting": "Stili temizle",
  "Fill color or set the text color": "Renk doldur veya yazı rengi seç",
  Redo: "Yinele",
  Undo: "Geri Al",
  Bold: "Kalın",
  Italic: "İtalik",
  "Insert Unordered List": "Sırasız Liste Ekle",
  "Insert Ordered List": "Sıralı Liste Ekle",
  "Align Center": "Ortala",
  "Align Justify": "Kenarlara Yasla",
  "Align Left": "Sola Yasla",
  "Align Right": "Sağa Yasla",
  "Insert Horizontal Line": "Yatay Çizgi Ekle",
  "Insert Image": "Resim Ekle",
  "Insert file": "Dosya Ekle",
  "Insert youtube/vimeo video": "Youtube/Vimeo Videosu Ekle",
  "Insert link": "Bağlantı Ekle",
  "Font size": "Font Boyutu",
  "Font family": "Font Ailesi",
  "Insert format block": "Blok Ekle",
  Normal: "Normal",
  "Heading 1": "Başlık 1",
  "Heading 2": "Başlık 2",
  "Heading 3": "Başlık 3",
  "Heading 4": "Başlık 4",
  Quote: "Alıntı",
  Code: "Kod",
  Insert: "Ekle",
  "Insert table": "Tablo Ekle",
  "Decrease Indent": "Girintiyi Azalt",
  "Increase Indent": "Girintiyi Arttır",
  "Select Special Character": "Özel Karakter Seç",
  "Insert Special Character": "Özel Karakter Ekle",
  "Paint format": "Resim Biçimi",
  "Change mode": "Mod Değiştir",
  Margins: "Boşluklar",
  top: "Üst",
  right: "Sağ",
  bottom: "Alt",
  left: "Sol",
  Styles: "CSS Stilleri",
  Classes: "CSS Sınıfları",
  Align: "Hizalama",
  Right: "Sağ",
  Center: "Ortalı",
  Left: "Sol",
  "--Not Set--": "Belirsiz",
  Src: "Kaynak",
  Title: "Başlık",
  Alternative: "Alternatif Yazı",
  Link: "Link",
  "Open link in new tab": "Bağlantıyı yeni sekmede aç",
  Image: "Resim",
  file: "Dosya",
  "Image properties": "Resim özellikleri",
  Cancel: "İptal",
  Ok: "Tamam",
  "Your code is similar to HTML. Keep as HTML?": "Kodunuz HTML koduna benziyor. HTML olarak devam etmek ister misiniz?",
  "Paste as HTML": "HTML olarak yapıştır",
  Keep: "Sakla",
  Clean: "Temizle",
  "Insert as Text": "Yazı olarak ekle",
  "Word Paste Detected": "Word biçiminde yapıştırma algılandı",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?",
  "Insert only Text": "Sadece yazıyı ekle",
  "File Browser": "Dosya Listeleyici",
  "Error on load list": "Liste yüklenirken hata oluştu",
  "Error on load folders": "Klasörler yüklenirken hata oluştur",
  "Are you sure?": "Emin misiniz?",
  "Enter Directory name": "Dizin yolu giriniz",
  "Create directory": "Dizin oluştur",
  "type name": "İsim yaz",
  "Drop image": "Resim bırak",
  "Drop file": "Dosya bırak",
  "or click": "veya tıkla",
  "Alternative text": "Alternatif yazı",
  Browse: "Gözat",
  Upload: "Yükle",
  Background: "Arka plan",
  Text: "Yazı",
  Top: "Üst",
  Middle: "Orta",
  Bottom: "Aşağı",
  "Insert column before": "Öncesine kolon ekle",
  "Insert column after": "Sonrasına kolon ekle",
  "Insert row above": "Üstüne satır ekle",
  "Insert row below": "Altına satır ekle",
  "Delete table": "Tabloyu sil",
  "Delete row": "Satırı sil",
  "Delete column": "Kolonu sil",
  "Empty cell": "Hücreyi temizle",
  Delete: "Sil",
  "Strike through": "Üstü çizili",
  Underline: "Alt çizgi",
  Break: "Satır sonu",
  "Search for": "Ara",
  "Replace with": "Şununla değiştir",
  Replace: "Değiştir",
  Edit: "Düzenle",
  "Vertical align": "Dikey hizala",
  "Horizontal align": "Yatay hizala",
  Filter: "Filtre",
  "Sort by changed": "Değişime göre sırala",
  "Sort by name": "İsme göre sırala",
  "Sort by size": "Boyuta göre sırala",
  "Add folder": "Klasör ekle",
  Split: "Ayır",
  "Split vertical": "Dikey ayır",
  "Split horizontal": "Yatay ayır",
  Merge: "Birleştir",
  "Add column": "Kolon ekle",
  "Add row": "Satır ekle",
  Border: "Kenarlık",
  "Embed code": "Kod ekle",
  Update: "Güncelle",
  superscript: "Üst yazı",
  subscript: "Alt yazı",
  "Cut selection": "Seçilimi kes",
  Paste: "Yapıştır",
  "Choose Content to Paste": "Yapıştırılacak içerik seç",
  "Chars: %d": "Harfler: %d",
  "Words: %d": "Kelimeler: %d",
  All: "Tümü",
  "Select %s": "Seç: %s",
  "Select all": "Tümünü seç",
  source: "Kaynak",
  bold: "Kalın",
  italic: "italik",
  brush: "Fırça",
  link: "Bağlantı",
  undo: "Geri al",
  redo: "Yinele",
  table: "Tablo",
  image: "Resim",
  eraser: "Silgi",
  paragraph: "Paragraf",
  fontsize: "Font boyutu",
  video: "Video",
  font: "Font",
  about: "Hakkında",
  print: "Yazdır",
  underline: "Alt çizgi",
  strikethrough: "Üstü çizili",
  indent: "Girinti",
  outdent: "Çıkıntı",
  fullsize: "Tam ekran",
  shrink: "Küçült",
  hr: "Ayraç",
  ul: "Sırasız liste",
  ol: "Sıralı liste",
  cut: "Kes",
  selectall: "Tümünü seç",
  "Open link": "Bağlantıyı aç",
  "Edit link": "Bağlantıyı düzenle",
  "No follow": "Nofollow özelliği",
  Unlink: "Bağlantıyı kaldır",
  Eye: "Yorumu",
  pencil: "Düzenlemek için",
  " URL": "URL",
  Reset: "Sıfırla",
  Save: "Kaydet",
  "Save as ...": "Farklı kaydet",
  Resize: "Boyutlandır",
  Crop: "Kırp",
  Width: "Genişlik",
  Height: "Yükseklik",
  "Keep Aspect Ratio": "En boy oranını koru",
  Yes: "Evet",
  No: "Hayır",
  Remove: "Sil",
  Select: "Seç",
  "You can only edit your own images. Download this image on the host?": "Sadece kendi resimlerinizi düzenleyebilirsiniz. Bu görseli kendi hostunuza indirmek ister misiniz?",
  "The image has been successfully uploaded to the host!": "Görsel başarıyla hostunuza yüklendi",
  palette: "Palet",
  "There are no files": "Bu dizinde dosya yok",
  Rename: "Yeniden isimlendir",
  "Enter new name": "Yeni isim girin",
  preview: "Ön izleme",
  download: "İndir",
  "Paste from clipboard": "Panodan yapıştır ",
  "Your browser doesn't support direct access to the clipboard.": "Tarayıcınız panoya doğrudan erişimi desteklemiyor.",
  "Copy selection": "Seçimi kopyala",
  copy: "Kopyala",
  "Border radius": "Sınır yarıçapı",
  "Show all": "Tümünü Göster",
  Apply: "Uygula",
  "Please fill out this field": "Lütfen bu alanı doldurun",
  "Please enter a web address": "Lütfen bir web adresi girin",
  Default: "Varsayılan",
  Circle: "Daire",
  Dot: "Nokta",
  Quadrate: "Kare",
  Find: "Bul",
  "Find Previous": "Öncekini Bul",
  "Find Next": "Sonrakini Bul",
  "Insert className": "Sınıf adı girin",
  "Press Alt for custom resizing": "Özel yeniden boyutlandırma için Alt tuşuna basın"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const ed = {
  "Type something": "Напишіть щось",
  "About Jodit": "Про Jodit",
  "Jodit Editor": "Редактор Jodit",
  "Jodit User's Guide": "Jodit інструкція користувача",
  "contains detailed help for using": "містить детальну інформацію щодо користування",
  "For information about the license, please go to our website:": "Щоб дізнатись більше про ліцензію , будь ласка, перейдіть на наш сайт:",
  "Buy full version": "Купити повну версію",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Авторські права © XDSoft.net - Чупурнов Валерій. Всі права захищені.",
  Anchor: "Анкор",
  "Open in new tab": "Відкрити у новій вкладці",
  "Open in fullsize": "Відкрити редактор в повному розмірі",
  "Clear Formatting": "Очистити форматування",
  "Fill color or set the text color": "Колір заливки або колір текста",
  Redo: "Повторити",
  Undo: "Відмінити",
  Bold: "Жирний",
  Italic: "Курсів",
  "Insert Unordered List": "Вставити невпорядкований список",
  "Insert Ordered List": "Вставити нумерованний список",
  "Align Center": "Вирівняти по центру",
  "Align Justify": "Вирівняти по ширині",
  "Align Left": "Вирівняти по лівому краю",
  "Align Right": "Вирівняти по правому краю",
  "Insert Horizontal Line": "Вставити горизонтальну лінію",
  "Insert Image": "Вставити зображення",
  "Insert file": "Вставити файл",
  "Insert youtube/vimeo video": "Вставити відео",
  "Insert link": "Вставити посилання",
  "Font size": "Розмір шрифту",
  "Font family": "Шрифт",
  "Insert format block": "Вставити блочний елемент",
  Normal: "Нормальний текст",
  "Heading 1": "Заголовок 1",
  "Heading 2": "Заголовок 2",
  "Heading 3": "Заголовок 3",
  "Heading 4": "Заголовок 4",
  Quote: "Цитата",
  Code: "Код",
  Insert: "Вставити",
  "Insert table": "Вставити таблицю",
  "Decrease Indent": "Збільшити відступ",
  "Increase Indent": "Зменшити відступ",
  "Select Special Character": "Оберіть спеціальный символ",
  "Insert Special Character": "Вставити спеціальный символ",
  "Paint format": "Формат краски",
  "Change mode": "Джерело",
  Margins: "Відступи",
  top: "зверху",
  right: "справа",
  bottom: "знизу",
  left: "зліва",
  Styles: "Стилі",
  Classes: "Класи",
  Align: "Вирівнювання",
  Right: "По правому краю",
  Center: "По центру",
  Left: "По лівому краю",
  "--Not Set--": "--не встановлено--",
  Src: "src",
  Title: "Заголовок",
  Alternative: "Альтернативний текст (alt)",
  Link: "Посилання",
  "Open link in new tab": "Відкрити посилання в новій вкладці",
  file: "Файл",
  Advanced: "Розширені",
  "Image properties": "Властивості зображення",
  Cancel: "Відміна",
  Ok: "Ок",
  "Your code is similar to HTML. Keep as HTML?": "Текст, який Ви намагаєтесь вставити схожий на HTML. Вставити його як HTML?",
  "Paste as HTML": "Вставити його як HTML",
  Keep: "Зберегти оригінал",
  Clean: "Почистити",
  "Insert as Text": "Вставити як текст",
  "Insert only Text": "Вставити тільки текст",
  "Word Paste Detected": "Можливо це фрагмент Word або Excel",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "Ви вставляєте контент з документа Microsoft Word або Excel. Бажаєте зберегти форматування?",
  "File Browser": "Браузер файлів",
  "Error on load list": "Помилка при завантаженні списку зображень",
  "Error on load folders": "Помилка при завантаженні списку папок",
  "Are you sure?": "Ви впевнені?",
  "Enter Directory name": "Введіть назву папки",
  "Create directory": "Створити папку",
  "type name": "введіть назву",
  "Drop image": "Перетягніть зображення сюди",
  "Drop file": "Перетягніть файл сюди",
  "or click": "або клікніть",
  "Alternative text": "Альтернативный текст",
  Browse: "Сервер",
  Upload: "Завантаження",
  Background: "Фон",
  Text: "Текст",
  Top: " Вгору",
  Middle: "По центру",
  Bottom: "Донизу",
  "Insert column before": "Вставити стовпець до",
  "Insert column after": "Вставити стовпець після",
  "Insert row above": "Вставити рядок вище",
  "Insert row below": "Вставити рядок нижче",
  "Delete table": "Видалити таблицю",
  "Delete row": "Видалити рядок",
  "Delete column": "Видалити стовпчик",
  "Empty cell": "Очистити кліинку",
  source: "HTML",
  bold: "жирний",
  italic: "курсів",
  brush: "заливка",
  link: "посилання",
  undo: "відмінити",
  redo: "повторити",
  table: "таблиця",
  image: "зображення",
  eraser: "видалення",
  paragraph: "параграф",
  fontsize: "розмір шрифту",
  video: "відео",
  font: "шрифт",
  about: "про редактор",
  print: "друк",
  underline: "підкреслений",
  strikethrough: "закреслений",
  indent: "відступ",
  outdent: "заступ",
  fullsize: "на весь екран",
  shrink: "звичайний розмір",
  hr: "лінія",
  ul: "Список",
  ol: "Нумерований список",
  cut: "Вирізати",
  selectall: "Виділити все",
  "Embed code": "Код",
  "Open link": "Відкрити посилання",
  "Edit link": "Редагувати посилання",
  "No follow": "Атрибут nofollow",
  Unlink: "Видалити посилання",
  Eye: "Перегляд",
  pencil: "Редагування",
  Update: "Оновити",
  " URL": "URL",
  Edit: "Редагувати",
  "Horizontal align": "Горизонтальне вирівнювання",
  Filter: "Фільтр",
  "Sort by changed": "Сортувати за зміною",
  "Sort by name": "Сортувати за ім'ям",
  "Sort by size": "Сортувати за розміром",
  "Add folder": "Додати папку",
  Reset: "Відновити",
  Save: "Зберегти",
  "Save as ...": "Зберегти як",
  Resize: "Змінити розмір",
  Crop: "Обрізати розмір",
  Width: "Ширина",
  Height: "Висота",
  "Keep Aspect Ratio": "Зберегти пропорції",
  Yes: "Так",
  No: "Ні",
  Remove: "Видалити",
  Select: "Вибрати",
  "Chars: %d": "Символів: %d",
  "Words: %d": "Слів: %d",
  All: "Вибрати все",
  "Select %s": "Вибрати: %s",
  "Select all": "Вибрати все",
  "Vertical align": "Вертикальне вирівнювання",
  Split: "Розділити",
  "Split vertical": "Розділити по вертикалі",
  "Split horizontal": "Розділити по горизонталі",
  Merge: "Об'єднати в одну",
  "Add column": "Додати стовпчик",
  "Add row": "Додати рядок",
  Delete: "Видалити",
  Border: "Рамка",
  "License: %s": "Ліцензія: %s",
  "Strike through": "Закреслений",
  Underline: "Підкреслений",
  superscript: "верхній індекс",
  subscript: "індекс",
  "Cut selection": "Обрізати вибране",
  Break: "Межа",
  "Search for": "Шукати",
  "Replace with": "Замінити на",
  Replace: "Замінити",
  Paste: "Вставити",
  "Choose Content to Paste": "Обрати контент для вставки",
  "You can only edit your own images. Download this image on the host?": "Ви можете редагувати лише власні зображення. Завантажити зображення на ваш сервер?",
  "The image has been successfully uploaded to the host!": "Зображення успішно завантажено на сервер!",
  palette: "палітра",
  "There are no files": "Файли відсутні",
  Rename: "Змінити назву",
  "Enter new name": "Введіть нове імя'",
  preview: "Попередній перегляд",
  download: "Завантажити",
  "Paste from clipboard": "Вставити з буфера обміну",
  "Your browser doesn't support direct access to the clipboard.": "Ваш браузер не підтримує доступ до буфера обміну.",
  "Copy selection": "Копіювати виділене",
  copy: "копія",
  "Border radius": "Радіус рамки",
  "Show all": "Показати все",
  Apply: "Застосувати",
  "Please fill out this field": "Будь ласка, заповніть це поле",
  "Please enter a web address": "Будь ласка, введіть веб-адресу",
  Default: "За замовченням",
  Circle: "Коло",
  Dot: "Крапка",
  Quadrate: "Квадрат",
  Find: "Знайти",
  "Find Previous": "Знайти попередні",
  "Find Next": "Знайти наступні",
  "Insert className": "Вставити клас",
  "Press Alt for custom resizing": "Натисніть Alt для зміни розміру"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const td = {
  "Type something": "输入一些内容",
  Advanced: "高级",
  "About Jodit": "关于Jodit",
  "Jodit Editor": "Jodit Editor",
  "Free Non-commercial Version": "Free Non-commercial Version",
  "Jodit User's Guide": "开发者指南",
  "contains detailed help for using": "使用帮助",
  "For information about the license, please go to our website:": "有关许可证的信息，请访问我们的网站：",
  "Buy full version": "购买完整版本",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. 版权所有",
  Anchor: "Anchor",
  "Open in new tab": "在新窗口打开",
  "Open in fullsize": "全屏编辑",
  "Clear Formatting": "清除样式",
  "Fill color or set the text color": "颜色",
  Redo: "重做",
  Undo: "撤销",
  Bold: "粗体",
  Italic: "斜体",
  "Insert Unordered List": "符号列表",
  "Insert Ordered List": "编号",
  "Align Center": "居中",
  "Align Justify": "对齐文本",
  "Align Left": "左对齐",
  "Align Right": "右对齐",
  "Insert Horizontal Line": "分割线",
  "Insert Image": "图片",
  "Insert file": "文件",
  "Insert youtube/vimeo video": "视频",
  "Insert link": "链接",
  "Font size": "字号",
  "Font family": "字体",
  "Insert format block": "格式块",
  Normal: "默认",
  "Heading 1": "标题1",
  "Heading 2": "标题2",
  "Heading 3": "标题3",
  "Heading 4": "标题4",
  Quote: "引用",
  Code: "代码",
  Insert: "插入",
  "Insert table": "表格",
  "Decrease Indent": "减少缩进",
  "Increase Indent": "增加缩进",
  "Select Special Character": "选择特殊符号",
  "Insert Special Character": "特殊符号",
  "Paint format": "格式复制",
  "Change mode": "改变模式",
  Margins: "外边距（Margins）",
  top: "top",
  right: "right",
  bottom: "bottom",
  left: "left",
  Styles: "样式",
  Classes: "Classes",
  Align: "对齐方式",
  Right: "居右",
  Center: "居中",
  Left: "居左",
  "--Not Set--": "无",
  Src: "Src",
  Title: "Title",
  Alternative: "Alternative",
  Link: "Link",
  "Open link in new tab": "在新窗口打开链接",
  Image: "图片",
  file: "file",
  "Image properties": "图片属性",
  Cancel: "取消",
  Ok: "确定",
  "Your code is similar to HTML. Keep as HTML?": "你粘贴的文本是一段html代码，是否保留源格式",
  "Paste as HTML": "html粘贴",
  Keep: "保留源格式",
  Clean: "匹配目标格式",
  "Insert as Text": "把html代码视为普通文本",
  "Word Paste Detected": "文本粘贴",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "正在粘贴 Word/Excel 的文本，是否保留源格式？",
  "Insert only Text": "只保留文本",
  "File Browser": "文件管理",
  "Error on load list": "加载list错误",
  "Error on load folders": "加载folders错误",
  "Are you sure?": "你确定吗？",
  "Enter Directory name": "输入路径",
  "Create directory": "创建路径",
  "type name": "type name",
  "Drop image": "拖动图片到此",
  "Drop file": "拖动文件到此",
  "or click": "或点击",
  "Alternative text": "Alternative text",
  Browse: "浏览",
  Upload: "上传",
  Background: "背景色",
  Text: "文字",
  Top: "顶部",
  Middle: "中间",
  Bottom: "底部",
  "Insert column before": "在之前插入列",
  "Insert column after": "在之后插入列",
  "Insert row above": "在之前插入行",
  "Insert row below": "在之后插入行",
  "Delete table": "删除表格",
  "Delete row": "删除行",
  "Delete column": "删除列",
  "Empty cell": "清除内容",
  "Chars: %d": "字符数: %d",
  "Words: %d": "单词数: %d",
  "Strike through": "删除线",
  Underline: "下划线",
  superscript: "上标",
  subscript: "下标",
  "Cut selection": "剪切",
  "Select all": "全选",
  Break: "Break",
  "Search for": "查找",
  "Replace with": "替换为",
  Replace: "替换",
  Edit: "编辑",
  Paste: "粘贴",
  "Choose Content to Paste": "选择内容并粘贴",
  All: "全部",
  source: "源码",
  bold: "粗体",
  italic: "斜体",
  brush: "颜色",
  link: "链接",
  undo: "撤销",
  redo: "重做",
  table: "表格",
  image: "图片",
  eraser: "橡皮擦",
  paragraph: "段落",
  fontsize: "字号",
  video: "视频",
  font: "字体",
  about: "关于",
  print: "打印",
  underline: "下划线",
  strikethrough: "上出现",
  indent: "增加缩进",
  outdent: "减少缩进",
  fullsize: "全屏",
  shrink: "收缩",
  hr: "分割线",
  ul: "无序列表",
  ol: "顺序列表",
  cut: "剪切",
  selectall: "全选",
  "Open link": "打开链接",
  "Edit link": "编辑链接",
  "No follow": "No follow",
  Unlink: "取消链接",
  Eye: "预览",
  " URL": "URL",
  Reset: "重置",
  Save: "保存",
  "Save as ...": "保存为",
  Resize: "调整大小",
  Crop: "剪切",
  Width: "宽",
  Height: "高",
  "Keep Aspect Ratio": "保持长宽比",
  Yes: "是",
  No: "不",
  Remove: "移除",
  Select: "选择",
  "Select %s": "选择: %s",
  Update: "更新",
  "Vertical align": "垂直对齐",
  Merge: "合并",
  "Add column": "添加列",
  "Add row": "添加行",
  Border: "边框",
  "Embed code": "嵌入代码",
  Delete: "删除",
  "Horizontal align": "水平对齐",
  Filter: "筛选",
  "Sort by changed": "修改时间排序",
  "Sort by name": "名称排序",
  "Sort by size": "大小排序",
  "Add folder": "新建文件夹",
  Split: "拆分",
  "Split vertical": "垂直拆分",
  "Split horizontal": "水平拆分",
  "You can only edit your own images. Download this image on the host?": "你只能编辑你自己的图片。Download this image on the host?",
  "The image has been successfully uploaded to the host!": "图片上传成功",
  palette: "调色板",
  pencil: "铅笔",
  "There are no files": "此目录中沒有文件。",
  Rename: "重命名",
  "Enter new name": "输入新名称",
  preview: "预览",
  download: "下载",
  "Paste from clipboard": "粘贴从剪贴板",
  "Your browser doesn't support direct access to the clipboard.": "你浏览器不支持直接访问的剪贴板。",
  "Copy selection": "复制选中内容",
  copy: "复制",
  "Border radius": "边界半径",
  "Show all": "显示所有",
  Apply: "应用",
  "Please fill out this field": "请填写这个字段",
  "Please enter a web address": "请输入一个网址",
  Default: "默认",
  Circle: "圆圈",
  Dot: "点",
  Quadrate: "方形",
  Find: "搜索",
  "Find Previous": "查找上一个",
  "Find Next": "查找下一个",
  "Insert className": "插入班级名称",
  "Press Alt for custom resizing": "按Alt自定义调整大小"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const id = {
  "Type something": "輸入一些內容",
  Advanced: "進階",
  "About Jodit": "關於Jodit",
  "Jodit Editor": "Jodit Editor",
  "Jodit User's Guide": "開發者指南",
  "contains detailed help for using": "使用幫助",
  "For information about the license, please go to our website:": "相關授權條款資訊，請造訪我們的網站：",
  "Buy full version": "購買完整版本",
  "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.": "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.",
  Anchor: "錨點",
  "Open in new tab": "在新分頁開啟",
  "Open in fullsize": "全螢幕編輯",
  "Clear Formatting": "清除樣式",
  "Fill color or set the text color": "顏色",
  Redo: "取消復原",
  Undo: "復原",
  Bold: "粗體",
  Italic: "斜體",
  "Insert Unordered List": "項目符號清單",
  "Insert Ordered List": "編號清單",
  "Align Center": "置中",
  "Align Justify": "文字對齊",
  "Align Left": "靠左",
  "Align Right": "靠右",
  "Insert Horizontal Line": "分割線",
  "Insert Image": "圖片",
  "Insert file": "檔案",
  "Insert youtube/vimeo video": "插入 youtube/vimeo 影片",
  "Insert link": "插入連結",
  "Font size": "文字大小",
  "Font family": "字型",
  "Insert format block": "格式化區塊",
  Normal: "內文",
  "Heading 1": "標題1",
  "Heading 2": "標題2",
  "Heading 3": "標題3",
  "Heading 4": "標題4",
  Quote: "引文",
  Code: "程式碼",
  Insert: "插入",
  "Insert table": "表格",
  "Decrease Indent": "減少縮排",
  "Increase Indent": "增加縮排",
  "Select Special Character": "選擇特殊符號",
  "Insert Special Character": "特殊符號",
  "Paint format": "格式複製",
  "Change mode": "檢視原始碼",
  Margins: "邊距",
  top: "上",
  right: "右",
  bottom: "下",
  left: "左",
  Styles: "樣式",
  Classes: "Classes",
  Align: "對齊方式",
  Right: "靠右",
  Center: "置中",
  Left: "靠左",
  "--Not Set--": "無",
  Src: "Src",
  Title: "Title",
  Alternative: "替代",
  Link: "Link",
  "Open link in new tab": "在新分頁開啟連結",
  Image: "圖片",
  file: "檔案",
  "Image properties": "圖片屬性",
  Cancel: "取消",
  Ok: "確定",
  "Your code is similar to HTML. Keep as HTML?": "您的程式碼與 HTML 類似，是否貼上 HTML 格式？",
  "Paste as HTML": "貼上 HTML",
  Keep: "保留原始格式",
  Clean: "清除格式",
  "Insert as Text": "以純文字貼上",
  "Word Paste Detected": "貼上 Word 格式",
  "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?": "正在貼上 Word/Excel 文件的內容，是否保留原始格式？",
  "Insert only Text": "僅貼上內文",
  "File Browser": "檔案瀏覽",
  "Error on load list": "清單載入錯誤",
  "Error on load folders": "資料夾載入錯誤",
  "Are you sure?": "您確定嗎？",
  "Enter Directory name": "輸入路徑",
  "Create directory": "創建路徑",
  "type name": "type name",
  "Drop image": "拖曳圖片至此",
  "Drop file": "拖曳檔案至此",
  "or click": "或點擊",
  "Alternative text": "替代文字",
  Browse: "瀏覽",
  Upload: "上傳",
  Background: "背景色",
  Text: "文字",
  Top: "頂部",
  Middle: "中間",
  Bottom: "底部",
  "Insert column before": "插入左方欄",
  "Insert column after": "插入右方欄",
  "Insert row above": "插入上方列",
  "Insert row below": "插入下方列",
  "Delete table": "刪除表格",
  "Delete row": "刪除整列",
  "Delete column": "刪除整欄",
  "Empty cell": "清除內容",
  "Chars: %d": "字元數: %d",
  "Words: %d": "單字數: %d",
  "Strike through": "刪除線",
  Underline: "底線",
  superscript: "上標",
  subscript: "下標",
  "Cut selection": "剪下",
  "Select all": "全選",
  Break: "斷行",
  "Search for": "尋找",
  "Replace with": "取代為",
  Replace: "取代",
  Paste: "貼上",
  "Choose Content to Paste": "選擇內容並貼上",
  All: "全部",
  source: "原始碼",
  bold: "粗體",
  italic: "斜體",
  brush: "顏色",
  link: "連結",
  undo: "復原",
  redo: "取消復原",
  table: "表格",
  image: "圖片",
  eraser: "橡皮擦",
  paragraph: "段落",
  fontsize: "文字大小",
  video: "影片",
  font: "字型",
  about: "關於",
  print: "列印",
  underline: "底線",
  strikethrough: "刪除線",
  indent: "增加縮排",
  outdent: "減少縮排",
  fullsize: "全螢幕",
  shrink: "縮減",
  hr: "分隔線",
  ul: "項目符號清單",
  ol: "編號清單",
  cut: "剪下",
  selectall: "全選",
  "Open link": "打開連結",
  "Edit link": "編輯連結",
  "No follow": "No follow",
  Unlink: "取消連結",
  Eye: "查看",
  " URL": "URL",
  Reset: "重設",
  Save: "儲存",
  "Save as ...": "另存為...",
  Resize: "調整大小",
  Crop: "裁切",
  Width: "寬",
  Height: "高",
  "Keep Aspect Ratio": "維持長寬比",
  Yes: "是",
  No: "否",
  Remove: "移除",
  Select: "選擇",
  "Select %s": "選擇: %s",
  Update: "更新",
  "Vertical align": "垂直對齊",
  Merge: "合併",
  "Add column": "新增欄",
  "Add row": "新增列",
  Border: "邊框",
  "Embed code": "嵌入程式碼",
  Delete: "刪除",
  "Horizontal align": "水平對齊",
  Filter: "篩選",
  "Sort by changed": "修改時間排序",
  "Sort by name": "名稱排序",
  "Sort by size": "大小排序",
  "Add folder": "新增資料夾",
  Split: "分割",
  "Split vertical": "垂直分割",
  "Split horizontal": "水平分割",
  "You can only edit your own images. Download this image on the host?": "您只能編輯您自己的圖片。是否下載此圖片?",
  "The image has been successfully uploaded to the host!": "圖片上傳成功",
  palette: "調色盤",
  pencil: "鉛筆",
  "There are no files": "沒有檔案",
  Rename: "重新命名",
  "Enter new name": "輸入新名稱",
  preview: "預覽",
  download: "下載",
  "Paste from clipboard": "從剪貼簿貼上",
  "Your browser doesn't support direct access to the clipboard.": "瀏覽器無法存取剪貼簿。",
  "Copy selection": "複製已選取項目",
  copy: "複製",
  "Border radius": "邊框圓角",
  "Show all": "顯示全部",
  Apply: "應用",
  "Please fill out this field": "請輸入此欄位",
  "Please enter a web address": "請輸入網址",
  Default: "預設",
  Circle: "圓圈",
  Dot: "點",
  Quadrate: "方形",
  Find: "尋找",
  "Find Previous": "尋找上一個",
  "Find Next": "尋找下一個",
  "Insert className": "插入 class 名稱",
  "Press Alt for custom resizing": "按住 Alt 以調整自訂大小"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
let it = {};
it = {
  ar: Mc,
  cs_cz: Bc,
  de: jc,
  en: Nc,
  es: Dc,
  fi: Oc,
  fr: qc,
  he: Hc,
  hu: Fc,
  id: Uc,
  it: Vc,
  ja: Wc,
  ko: $c,
  mn: Kc,
  nl: Jc,
  no: Yc,
  pl: Gc,
  pt_br: Xc,
  ru: Zc,
  tr: Qc,
  ua: ed,
  zh_cn: td,
  zh_tw: id
};
const Mn = (n) => n ? n.default || n : {}, Es = {};
M(Mn(Fr)) && Mn(Fr).forEach((n, e) => {
  Es[e] = n;
});
Object.keys(it).forEach((n) => {
  const e = Mn(it[n]);
  M(e) ? (it[n] = {}, e.forEach((t, i) => {
    it[n][Es[i]] = t;
  })) : it[n] = e;
});
const Ur = it, nd = '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"> <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/> </svg> ';
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.controls.about = {
  exec: (n) => {
    const e = n.dlg({ closeOnClickOverlay: !0 }), t = n.i18n.bind(n);
    e.setMod("theme", n.o.theme).setHeader(t("About Jodit")).setContent(`<div class="jodit-about">
					<div>${t("Jodit Editor")} v.${n.getVersion()}</div>
					<div>${t("License: %s", Eo(n.o.license) ? $o(n.o.license) : "MIT")}</div>
					<div>
						<a href="${on}" target="_blank">${on}</a>
					</div>
					<div>
						<a href="https://xdsoft.net/jodit/docs/" target="_blank">${t("Jodit User's Guide")}</a>
						${t("contains detailed help for using")}
					</div>
					<div>${t("Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.")}</div>
				</div>`), _(e.dialog, {
      minHeight: 200,
      minWidth: 420
    }), e.open(!0, !0);
  },
  tooltip: "About Jodit",
  mode: nt + de
};
function rd(n) {
  n.registerButton({
    name: "about",
    group: "info"
  });
}
H.add("about", rd);
x.set("about", nd);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.delete = {
  hotkeys: {
    delete: ["delete", "cmd+backspace"],
    deleteWord: ["ctrl+delete", "cmd+alt+backspace", "ctrl+alt+backspace"],
    deleteSentence: ["ctrl+shift+delete", "cmd+shift+delete"],
    backspace: ["backspace"],
    backspaceWord: ["ctrl+backspace"],
    backspaceSentence: ["ctrl+shift+backspace", "cmd+shift+backspace"]
  }
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function od(n) {
  return n.s.isCollapsed() ? !1 : (n.execCommand("Delete"), !0);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function sd(n, e, t, i = !1) {
  const r = (s) => e ? s.firstChild : s.lastChild;
  let o = l.findNotEmptyNeighbor(n, !e, t);
  if (i && l.isElement(o) && !l.isInlineBlock(o))
    return null;
  if (o)
    do
      if (r(o))
        o = r(o);
      else
        return o;
    while (o);
  return null;
}
function zs(n) {
  return (e) => n.e.fire("backSpaceIsMovedIgnore", e) !== !0;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function ad(n, e, t) {
  let i = e, r = i;
  for (; i && !l.findNotEmptySibling(i, t) && i.parentElement !== n.editor; )
    i = i.parentElement, r = i;
  if (l.isElement(r) && l.isContentEditable(r, n.editor)) {
    const o = l.findNotEmptySibling(r, t);
    if (o && (ld(n, r, o, t) || Bn(n, r, o, t)))
      return n.s.setCursorBefore(e), !0;
  }
  return !1;
}
function ld(n, e, t, i) {
  const r = l.isTag(t, St), o = l.isTag(e, St), s = (a, c) => c ? a.firstElementChild : a.lastElementChild;
  return o ? (t = n.createInside.element(n.o.enterBlock), l.before(e, t), Bn(n, s(e, i), t, i)) : t && r && !o ? Bn(n, e, s(t, !i), i) : !1;
}
function Bn(n, e, t, i) {
  if (e && l.isElement(t)) {
    l.moveContent(e, t, !i, zs(n));
    let r = e;
    for (; r && r !== n.editor && l.isEmpty(r); ) {
      const o = r.parentElement;
      l.safeRemove(r), r = o;
    }
    return !0;
  }
  return !1;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ts(n, e, t) {
  const i = l.findSibling(e, t), r = l.findSibling(e, !t);
  if (!l.closest(e, l.isElement, n.editor) && l.isList(i) && l.isList(r) && l.isTag(i.lastElementChild, "li") && l.isTag(r.firstElementChild, "li")) {
    const { setCursorBefore: o, setCursorAfter: s } = n.s, a = i.lastElementChild, c = r.firstElementChild;
    return he(t ? l.prepend : l.append, c, e), l.moveContent(r, i, !t, zs(n)), l.safeRemove(r), he(t ? l.append : l.prepend, a, e), he(t ? o : s, e), !0;
  }
  return !1;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function xs(n, e, t, i) {
  var r, o;
  const s = t ? -1 : 1, a = l.sibling(e, !t);
  let c = l.sibling(e, t), d = null, u = !1, h;
  for (c || (c = Vr(e, t, n.editor)); c && (l.isText(c) || l.isInlineBlock(c)); ) {
    for (; l.isInlineBlock(c); )
      c = t ? c == null ? void 0 : c.lastChild : c == null ? void 0 : c.firstChild;
    if (!c)
      break;
    if (!((r = c.nodeValue) === null || r === void 0) && r.length && (h = ud(c, t, s, a), !c.nodeValue.length && l.isInlineBlock(c.parentNode) && (c.nodeValue = ue)), !((o = c.nodeValue) === null || o === void 0) && o.length || (d = c), !V(h) && h !== ue) {
      fd(t, c, e, i, h, n), u = !0;
      break;
    }
    const f = Vr(c, t, n.editor);
    d && (l.safeRemove(d), d = null), c = f;
  }
  return d && (l.safeRemove(d), d = null), u && (cd(e, "a"), dd(n, e), n.s.setCursorBefore(e), l.isTag(e.previousSibling, "br") && !l.findNotEmptySibling(e, !1) && l.after(e, n.createInside.element("br"))), u;
}
function Vr(n, e, t) {
  let i = l.sibling(n, e);
  return !i && n.parentNode && n.parentNode !== t && (i = sd(n, !e, t, !0)), i;
}
function cd(n, e) {
  let t = n.parentElement;
  for (; t && l.isInlineBlock(t) && l.isTag(t, e); ) {
    const i = t.parentElement;
    l.isEmpty(t) && (l.after(t, n), l.safeRemove(t)), t = i;
  }
}
function dd(n, e) {
  e.parentElement !== n.editor && l.isBlock(e.parentElement) && l.each(e.parentElement, l.isEmptyTextNode) && l.after(e, n.createInside.element("br"));
}
function ud(n, e, t, i) {
  let r = U(n.nodeValue);
  const o = r.length;
  let s = e ? o - 1 : 0;
  if (r[s] === ue)
    for (; r[s] === ue; )
      s += t;
  const a = r[s];
  if (r[s + t] === ue) {
    for (s += t; r[s] === ue; )
      s += t;
    s += e ? 1 : -1;
  }
  return e && s < 0 ? r = [] : r = r.slice(e ? 0 : s + 1, e ? s : o), hd(i, e, r), n.nodeValue = r.join(""), a;
}
function hd(n, e, t) {
  var i;
  if (!n || !l.isText(n) || (e ? /^ / : / $/).test((i = n.nodeValue) !== null && i !== void 0 ? i : "") || !xo(n.nodeValue || "").length)
    for (let r = e ? t.length - 1 : 0; (e ? r >= 0 : r < t.length) && t[r] === " "; r += e ? -1 : 1)
      t[r] = Nn;
}
function fd(n, e, t, i, r, o) {
  he(n ? l.after : l.before, e, t), (i === "sentence" || i === "word" && r !== " " && r !== Nn) && xs(o, t, n, i);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function pd(n, e, t) {
  let i = l.findSibling(e, t);
  return !i && e.parentElement && e.parentElement !== n.editor && (i = l.findSibling(e.parentElement, t)), l.isElement(i) && !l.isContentEditable(i, n.editor) ? (he(t ? l.before : l.after, i, e), l.safeRemove(i), Is(n, e, t), he(t ? n.s.setCursorBefore : n.s.setCursorAfter, e), !0) : !1;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function md(n, e, t) {
  const i = l.closest(e, l.isElement, n.editor);
  if (!i)
    return !1;
  const r = l.findNotEmptySibling(i, t);
  return r && l.isEmpty(r) ? (l.safeRemove(r), n.s.setCursorBefore(e), !0) : !1;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ls(n, e, t) {
  let i = !1;
  const { setCursorBefore: r, setCursorIn: o } = n.s;
  let s = l.closest(e, l.isElement, n.editor);
  if (!s || !l.isEmpty(s))
    return !1;
  const a = l.findNotEmptyNeighbor(e, t, n.editor);
  do
    if (s && l.isEmpty(s) && !l.isCell(s)) {
      l.after(s, e);
      const c = l.closest(s, (d) => l.isElement(d) && d !== s, n.editor);
      l.safeRemove(s), i = !0, s = c;
    } else
      break;
  while (s);
  return i && Ts(n, e, t) ? !0 : (a && !l.isText(a) && !l.isTag(a, Me) ? o(a, !t) : r(e), i);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function gd(n, e, t) {
  const i = l.findSibling(e, t);
  return l.isElement(i) && (l.isTag(i, Me) || l.isEmpty(i)) ? (l.safeRemove(i), l.isTag(i, "br") && !l.findNotEmptySibling(e, !1) && l.after(e, n.createInside.element("br")), n.s.setCursorBefore(e), l.isTag(i, "br") && Ls(n, e, t), !0) : !1;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function vd(n, e) {
  const t = e.parentElement;
  return !!l.isCell(t);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function bd(n, e, t) {
  var i;
  const r = l.closest(e, l.isElement, n.editor), { s: o } = n;
  if (l.isLeaf(r) && ((i = r == null ? void 0 : r.parentElement) === null || i === void 0 ? void 0 : i[t ? "firstElementChild" : "lastElementChild"]) === r && o.cursorInTheEdge(t, r)) {
    const s = r.parentElement, a = n.createInside.element(n.o.enterBlock);
    return he(t ? l.before : l.after, s, a), l.moveContent(r, a), l.safeRemove(r), l.isEmpty(s) && l.safeRemove(s), he(t ? o.setCursorBefore : o.setCursorAfter, e), !0;
  }
  return !1;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const wd = [
  gd,
  pd,
  xs,
  vd,
  Ls,
  md,
  Ts,
  ad,
  bd
];
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class As extends Y {
  afterInit(e) {
    e.registerCommand("deleteButton", {
      exec: () => this.onDelete(!1),
      hotkeys: e.o.delete.hotkeys.delete
    }, {
      stopPropagation: !1
    }).registerCommand("backspaceButton", {
      exec: () => this.onDelete(!0),
      hotkeys: e.o.delete.hotkeys.backspace
    }, {
      stopPropagation: !1
    }).registerCommand("deleteWordButton", {
      exec: () => this.onDelete(!1, "word"),
      hotkeys: e.o.delete.hotkeys.deleteWord
    }).registerCommand("backspaceWordButton", {
      exec: () => this.onDelete(!0, "word"),
      hotkeys: e.o.delete.hotkeys.backspaceWord
    }).registerCommand("deleteSentenceButton", {
      exec: () => this.onDelete(!1, "sentence"),
      hotkeys: e.o.delete.hotkeys.deleteSentence
    }).registerCommand("backspaceSentenceButton", {
      exec: () => this.onDelete(!0, "sentence"),
      hotkeys: e.o.delete.hotkeys.backspaceSentence
    });
  }
  beforeDestruct(e) {
    e.e.off("afterCommand.delete");
  }
  /**
   * Listener BackSpace or Delete button
   */
  onDelete(e, t = "char") {
    const i = this.j, r = i.selection;
    if (r.isFocused() || r.focus(), od(i))
      return !1;
    const o = r.range, s = i.createInside.text(ue);
    try {
      if (l.safeInsertNode(o, s), !l.isOrContains(i.editor, s))
        return;
      if (i.e.fire("backSpaceBeforeCases", e, s) || (Is(i, s, e), wd.some((a) => {
        if (y(a) && a(i, s, e, t))
          return !0;
      })))
        return !1;
    } catch (a) {
      throw a;
    } finally {
      i.e.fire("backSpaceAfterDelete", e, s), this.safeRemoveEmptyNode(s);
    }
    return !1;
  }
  /**
   * Remove node and replace cursor position out of it
   */
  safeRemoveEmptyNode(e) {
    var t, i;
    const { range: r } = this.j.s;
    r.startContainer === e && (e.previousSibling ? l.isText(e.previousSibling) ? r.setStart(e.previousSibling, (i = (t = e.previousSibling.nodeValue) === null || t === void 0 ? void 0 : t.length) !== null && i !== void 0 ? i : 0) : r.setStartAfter(e.previousSibling) : e.nextSibling && (l.isText(e.nextSibling) ? r.setStart(e.nextSibling, 0) : r.setStartBefore(e.nextSibling)), r.collapse(!0), this.j.s.selectRange(r)), l.safeRemove(e);
  }
}
As.requires = ["hotkeys"];
H.add("backspace", As);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Rs extends Y {
  afterInit(e) {
    e.e.on("afterCommand.delete", (t) => {
      t === "delete" && this.__afterDeleteCommand();
    }), e.registerCommand("delete", {
      exec: this.__onDeleteCommand.bind(this)
    }, {
      stopPropagation: !1
    });
  }
  beforeDestruct(e) {
    e.e.off("afterCommand.delete");
  }
  /**
   * After Delete command remove extra BR
   */
  __afterDeleteCommand() {
    const e = this.j, t = e.s.current();
    if (t && l.isTag(t.firstChild, "br") && e.s.removeNode(t.firstChild), !K(e.editor.textContent || "") && !e.editor.querySelector("img,table,jodit,iframe,hr") && (!t || !l.closest(t, "table", e.editor))) {
      e.editor.innerHTML = "";
      const i = e.s.setCursorIn(e.editor);
      e.s.removeNode(i);
    }
  }
  __onDeleteCommand() {
    const { jodit: e } = this;
    if (e.s.isCollapsed())
      return;
    e.s.expandSelection();
    const t = e.s.range;
    t.deleteContents();
    const i = e.createInside.fake();
    t.insertNode(i);
    const r = l.findSibling(i, !0), o = l.findSibling(i, !1);
    return this.__moveContentInLeftSibling(i, r, o), t.setStartBefore(i), t.collapse(!0), this.__moveCursorInEditableSibling(e, r, i, t), this.__addBrInEmptyBlock(i, o, t), l.safeRemove(i), e.s.selectRange(t), !1;
  }
  __moveContentInLeftSibling(e, t, i) {
    t = this.__defineRightLeftBox(t), !l.isList(i) && !l.isTag(i, "table") && l.isBlock(i) && l.isBlock(t) && (l.append(t, e), l.moveContent(i, t), l.safeRemove(i)), l.isList(i) && l.isLeaf(i.firstElementChild) && l.isEmpty(i.firstElementChild) && l.safeRemove(i.firstElementChild);
  }
  /**
   * If left sibling is list - return last leaf
   */
  __defineRightLeftBox(e) {
    if (!l.isList(e))
      return e;
    let t = e.lastElementChild;
    return l.isLeaf(t) || (t = this.j.createInside.element("li"), l.append(e, t)), t;
  }
  /**
   * Add BR in empty blocks left and right(for table cell)
   */
  __addBrInEmptyBlock(e, t, i) {
    const r = this.j;
    if (e.isConnected && l.isBlock(e.parentNode) && !e.nextSibling && !e.previousSibling) {
      const o = r.createInside.element("br");
      l.after(e, o), i.setStartBefore(o), i.collapse(!0);
    }
    if (l.isTag(t, "table")) {
      const o = j("td,th", t).shift();
      l.isCell(o) && l.isEmpty(o) && l.append(o, r.createInside.element("br"));
    }
  }
  __moveCursorInEditableSibling(e, t, i, r) {
    var o;
    if (!t || !l.isText(t)) {
      const s = (o = l.closest(i, l.isBlock, e.editor)) !== null && o !== void 0 ? o : e.editor, a = l.prev(i, l.isText, s);
      a && (r.setStartAfter(a), r.collapse(!0), l.safeRemove(i));
    }
  }
}
Rs.requires = ["backspace"];
H.add("deleteCommand", Rs);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.controls.subscript = {
  tags: ["sub"],
  tooltip: "subscript"
};
b.prototype.controls.superscript = {
  tags: ["sup"],
  tooltip: "superscript"
};
b.prototype.controls.bold = {
  tagRegExp: /^(strong|b)$/i,
  tags: ["strong", "b"],
  css: {
    "font-weight": ["bold", "700"]
  },
  tooltip: "Bold"
};
b.prototype.controls.italic = {
  tagRegExp: /^(em|i)$/i,
  tags: ["em", "i"],
  css: {
    "font-style": "italic"
  },
  tooltip: "Italic"
};
b.prototype.controls.underline = {
  tagRegExp: /^(u)$/i,
  tags: ["u"],
  css: {
    "text-decoration-line": "underline"
  },
  tooltip: "Underline"
};
b.prototype.controls.strikethrough = {
  tagRegExp: /^(s)$/i,
  tags: ["s"],
  css: {
    "text-decoration-line": "line-through"
  },
  tooltip: "Strike through"
};
const yd = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"/> </svg> `, _d = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"/> </svg> `, Sd = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"/> </svg> `, Cd = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"/> </svg> `, kd = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"/> </svg> `, Id = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ed(n) {
  const e = (t) => {
    const i = b.defaultOptions.controls[t], r = {
      ...i.css
    };
    let o;
    return Object.keys(r).forEach((s) => {
      o || (o = {}), o[s] = M(r[s]) ? r[s][0] : r[s];
    }), n.s.commitStyle({
      element: i.tags ? i.tags[0] : void 0
    }), n.synchronizeValues(), !1;
  };
  ["bold", "italic", "underline", "strikethrough"].forEach((t) => {
    n.registerButton({
      name: t,
      group: "font-style"
    });
  }), ["superscript", "subscript"].forEach((t) => {
    n.registerButton({
      name: t,
      group: "script"
    });
  }), n.registerCommand("bold", {
    exec: e,
    hotkeys: ["ctrl+b", "cmd+b"]
  }).registerCommand("italic", {
    exec: e,
    hotkeys: ["ctrl+i", "cmd+i"]
  }).registerCommand("underline", {
    exec: e,
    hotkeys: ["ctrl+u", "cmd+u"]
  }).registerCommand("strikethrough", {
    exec: e
  }).registerCommand("subscript", {
    exec: e
  }).registerCommand("superscript", {
    exec: e
  });
}
H.add("bold", Ed);
x.set("bold", yd).set("italic", _d).set("strikethrough", Sd).set("subscript", Cd).set("superscript", kd).set("underline", Id);
const zd = `<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px" viewBox="0 0 459 459"> <g> <path d="M229.5,0C102,0,0,102,0,229.5S102,459,229.5,459c20.4,0,38.25-17.85,38.25-38.25c0-10.2-2.55-17.85-10.2-25.5 c-5.1-7.65-10.2-15.3-10.2-25.5c0-20.4,17.851-38.25,38.25-38.25h45.9c71.4,0,127.5-56.1,127.5-127.5C459,91.8,357,0,229.5,0z M89.25,229.5c-20.4,0-38.25-17.85-38.25-38.25S68.85,153,89.25,153s38.25,17.85,38.25,38.25S109.65,229.5,89.25,229.5z M165.75,127.5c-20.4,0-38.25-17.85-38.25-38.25S145.35,51,165.75,51S204,68.85,204,89.25S186.15,127.5,165.75,127.5z M293.25,127.5c-20.4,0-38.25-17.85-38.25-38.25S272.85,51,293.25,51s38.25,17.85,38.25,38.25S313.65,127.5,293.25,127.5z M369.75,229.5c-20.4,0-38.25-17.85-38.25-38.25S349.35,153,369.75,153S408,170.85,408,191.25S390.15,229.5,369.75,229.5z" /> </g> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
x.set("palette", zd);
const jn = (n, e, t) => {
  const i = "jodit-color-picker", r = tr(t), o = n.c.div(i), s = n.o.textIcons ? `<span>${n.i18n("palette")}</span>` : x.get("palette"), a = (d) => {
    const u = [];
    return N(d) ? Object.keys(d).forEach((h) => {
      u.push(`<div class="${i}__group ${i}__group-${h}">`), u.push(a(d[h])), u.push("</div>");
    }) : M(d) && d.forEach((h) => {
      u.push(`<span class='${i}__color-item ${r === h ? i + "__color-item_active_true" : ""}' title="${h}" style="background-color:${h}" data-color="${h}"></span>`);
    }), u.join("");
  };
  o.appendChild(n.c.fromHTML(`<div class="${i}__groups">${a(n.o.colors)}</div>`)), o.appendChild(n.c.fromHTML(`<div data-ref="extra" class="${i}__extra"></div>`));
  const { extra: c } = _e(o);
  return n.o.showBrowserColorPicker && So() && (c.appendChild(n.c.fromHTML(`<div class="${i}__native">${s}<input type="color" value="#ffffff"/></div>`)), n.e.on(o, "change", (d) => {
    d.stopPropagation();
    const u = d.target;
    if (!u || !u.tagName || !l.isTag(u, "input"))
      return;
    const h = u.value || "";
    y(e) && e(h), d.preventDefault();
  })), n.e.on(o, "mousedown touchend", (d) => {
    d.stopPropagation(), d.preventDefault();
    let u = d.target;
    if ((!u || !u.tagName || l.isTag(u, "svg") || l.isTag(u, "path")) && u.parentNode && (u = l.closest(u.parentNode, "span", n.editor)), !l.isTag(u, "span") || !u.classList.contains(i + "__color-item"))
      return;
    const h = g(u, "-color") || "";
    e && y(e) && e(h);
  }), n.e.fire("afterGenerateColorPicker", o, c, e, r), o;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const mr = (n, e, t) => {
  const i = n.c.div("jodit-tabs"), r = n.c.div("jodit-tabs__wrapper"), o = n.c.div("jodit-tabs__buttons");
  g(o, {
    role: "tablist",
    "aria-orientation": "horizontal"
  });
  const s = {}, a = [];
  let c = "";
  i.appendChild(o), i.appendChild(r);
  const d = (h) => {
    s[h] && (a.forEach((f) => {
      f.state.activated = !1;
    }), Object.values(s).forEach(({ tab: f }) => f.classList.remove("jodit-tab_active")), s[h].button.state.activated = !0, s[h].tab.classList.add("jodit-tab_active"));
  };
  e.forEach(({ icon: h, name: f, content: p }) => {
    const m = n.c.div("jodit-tab");
    g(m, {
      role: "tabpanel"
    });
    const w = pe(n, h || f, f);
    w.state.role = "tab", n.e.on(w.container, "pointerdown", (C) => C.preventDefault()), c || (c = f), o.appendChild(w.container), a.push(w), w.container.classList.add("jodit-tabs__button", "jodit-tabs__button_columns_" + e.length), y(p) ? m.appendChild(n.c.div("jodit-tab_empty")) : m.appendChild(fe.isInstanceOf(p, ie) ? p.container : p), r.appendChild(m), w.onAction(() => (d(f), y(p) && !l.isElement(p) && p.call(n), t && (t.activeTab = f), !1)), s[f] = {
      button: w,
      tab: m
    };
  }), Object.values(s).forEach(({ button: h }) => {
    h.container.style.width = (100 / e.length).toFixed(10) + "%";
  });
  const u = !t || !t.activeTab || !s[t.activeTab] ? c : t.activeTab;
  if (d(u), t) {
    let h = t.activeTab;
    Object.defineProperty(t, "activeTab", {
      configurable: !0,
      enumerable: !1,
      get() {
        return h;
      },
      set(f) {
        h = f, d(f);
      }
    });
  }
  return i;
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Td = (n, e, t, i, r = !0) => {
  let o;
  const s = [];
  if (e.upload && n.o.uploader && (n.o.uploader.url || n.o.uploader.insertImageAsBase64URI)) {
    const a = n.c.fromHTML(`<div class="jodit-drag-and-drop__file-box"><strong>${n.i18n(r ? "Drop image" : "Drop file")}</strong><span><br>${n.i18n("or click")}</span><input type="file" accept="${r ? "image/*" : "*"}" tabindex="-1" dir="auto" multiple=""/></div>`);
    n.uploader.bind(a, (c) => {
      const d = y(e.upload) ? e.upload : n.o.uploader.defaultHandlerSuccess;
      y(d) && d.call(n, c), n.e.fire("closeAllPopups");
    }, (c) => {
      n.message.error(c.message), n.e.fire("closeAllPopups");
    }), s.push({
      icon: "upload",
      name: "Upload",
      content: a
    });
  }
  if (e.filebrowser && (n.o.filebrowser.ajax.url || n.o.filebrowser.items.url) && s.push({
    icon: "folder",
    name: "Browse",
    content: () => {
      i && i(), e.filebrowser && n.filebrowser.open(e.filebrowser, r);
    }
  }), e.url) {
    const a = new R(n, {
      type: "submit",
      variant: "primary",
      text: "Insert"
    }), c = new Kt(n, [
      new F(n, {
        required: !0,
        label: "URL",
        name: "url",
        type: "text",
        placeholder: "https://"
      }),
      new F(n, {
        name: "text",
        label: "Alternative text"
      }),
      new $e(n, [a])
    ]);
    o = null, t && !l.isText(t) && !l.isComment(t) && (l.isTag(t, "img") || j("img", t).length) && (o = t.tagName === "IMG" ? t : j("img", t)[0], hi(c.container, "input[name=url]", g(o, "src")), hi(c.container, "input[name=text]", g(o, "alt")), a.state.text = "Update"), t && l.isTag(t, "a") && (hi(c.container, "input[name=url]", g(t, "href")), hi(c.container, "input[name=text]", g(t, "title")), a.state.text = "Update"), c.onSubmit((d) => {
      y(e.url) && e.url.call(n, d.url, d.text);
    }), s.push({
      icon: "link",
      name: "URL",
      content: c.container
    });
  }
  return mr(n, s);
};
function hi(n, e, t) {
  const i = n.querySelector(e);
  return i ? (t && (i.value = t), i.value) : "";
}
const xd = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
x.set("brush", xd);
b.prototype.controls.brushCell = {
  isVisible: (n) => !n.o.disablePlugins.includes("color"),
  icon: "brush",
  popup: (n, e, t) => {
    if (!ae(n))
      return;
    const i = n.getInstance("Table", n.o), r = i.getAllSelectedCells();
    if (!r.length)
      return !1;
    const o = (s) => jn(n, (a) => {
      r.forEach((c) => {
        _(c, s, a);
      }), n.lock(), n.synchronizeValues(), t(), n.unlock();
    }, _(r[0], s));
    return mr(n, [
      {
        name: "Background",
        content: o("background-color")
      },
      { name: "Text", content: o("color") },
      { name: "Border", content: o("border-color") }
    ]);
  },
  tooltip: "Background"
};
b.prototype.controls.brush = {
  isVisible: (n) => !n.o.disablePlugins.includes("color"),
  update(n, e) {
    const t = Z(e, "color"), i = (o, s) => {
      if (s && s !== _(n.editor, o).toString()) {
        e.state.icon.fill = s;
        return;
      }
    };
    if (t) {
      const o = Z(e, "color");
      i(o === "color" ? o : "background-color", t);
      return;
    }
    const r = n.s.current();
    if (r && !e.state.disabled) {
      const o = l.closest(r, l.isElement, n.editor) || n.editor;
      i("color", _(o, "color").toString()), i("background-color", _(o, "background-color").toString());
    }
    e.state.icon.fill = "", e.state.activated = !1;
  },
  popup: (n, e, t, i) => {
    let r = "", o = "", s = [], a = null;
    e && e !== n.editor && l.isNode(e) && (l.isElement(e) && n.s.isCollapsed() && !l.isTag(e, /* @__PURE__ */ new Set(["br", "hr"])) && (a = e), l.up(e, (u) => {
      if (l.isHTMLElement(u)) {
        const h = _(u, "color", !0), f = _(u, "background-color", !0);
        if (h)
          return r = h.toString(), !0;
        if (f)
          return o = f.toString(), !0;
      }
    }, n.editor));
    const c = jn(n, (u) => {
      a ? a.style.backgroundColor = u : n.execCommand("background", !1, u), Z(i, "color", u), Z(i, "color-mode", "background"), t();
    }, o), d = jn(n, (u) => {
      a ? a.style.color = u : n.execCommand("forecolor", !1, u), Z(i, "color", u), Z(i, "color-mode", "color"), t();
    }, r);
    return s = [
      {
        name: "Background",
        content: c
      },
      {
        name: "Text",
        content: d
      }
    ], n.o.colorPickerDefaultTab !== "background" && (s = s.reverse()), mr(n, s, a);
  },
  exec(n, e, { button: t }) {
    const i = Z(t, "color-mode"), r = Z(t, "color");
    if (!i)
      return !1;
    if (e && e !== n.editor && l.isNode(e) && l.isElement(e))
      switch (i) {
        case "color":
          e.style.color = r;
          break;
        case "background":
          e.style.backgroundColor = r;
          break;
      }
    else
      n.execCommand(i === "background" ? i : "forecolor", !1, r);
  },
  tooltip: "Fill color or set the text color"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ld(n) {
  n.registerButton({
    name: "brush",
    group: "color"
  });
  const e = (t, i, r) => {
    const o = tr(r);
    switch (t) {
      case "background":
        n.s.commitStyle({
          attributes: {
            style: {
              backgroundColor: o || ""
            }
          }
        });
        break;
      case "forecolor":
        n.s.commitStyle({
          attributes: {
            style: {
              color: o || ""
            }
          }
        });
        break;
    }
    return n.synchronizeValues(), !1;
  };
  n.registerCommand("forecolor", e).registerCommand("background", e);
}
H.add("color", Ld);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ad(n, e, t) {
  const i = !!l.closest(n, ["pre", "blockquote"], e.editor), r = !i && l.closest(n, ["td", "th"], e.editor);
  if (e.o.enter.toLowerCase() === Hn.toLowerCase() || r || t && !i || !t && i) {
    if (i && Rd(n))
      return !1;
    const s = e.createInside.element("br");
    if (l.before(n, s), !l.findNotEmptySibling(s, !1)) {
      const a = s.cloneNode();
      l.after(s, a), l.before(a, n);
    }
    return zt(s, e.editor, e.ed), !0;
  }
  return !1;
}
function Rd(n) {
  const e = nn(nn(n));
  return e ? (l.safeRemove(nn(n)), l.safeRemove(e), !0) : !1;
}
function nn(n) {
  if (!n)
    return !1;
  const e = l.findSibling(n, !0);
  return !e || !l.isTag(e, "br") ? !1 : e;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Pd(n, e, t) {
  return l.canSplitBlock(t) ? !0 : (l.before(n, e.createInside.element("br")), !1);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Ps(n, e, t = Ni) {
  let i = n;
  const r = e.editor;
  do {
    if (!i || i === r)
      break;
    if (t.test(i.nodeName))
      return l.isLeaf(i) ? i : Ps(i.parentNode, e, /^li$/i) || i;
    i = i.parentNode;
  } while (i && i !== r);
  return null;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Md(n, e) {
  return !!l.prev(n, (t) => l.isBlock(t) || l.isImage(t), e.editor);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function gr(n, e, t, i) {
  const r = t.toLowerCase() === "br", { createInside: o } = e, s = o.element(t), a = o.element("br");
  return r || s.appendChild(a), l.after(n, s), l.before(r ? s : a, n), zt(s, e.editor, e.ed), s;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Bd(n, e, t) {
  const { s: i } = n, r = l.closest(e, t, n.editor);
  r && (i.cursorOnTheRight(r, e) ? l.after(r, e) : i.cursorOnTheLeft(r, e) && l.before(r, e));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function jd(n, e, t) {
  const i = l.closest(t, ["ol", "ul"], e.editor);
  if (!i)
    return;
  const r = i.parentElement, o = l.isLeaf(r), s = o ? r : i, a = e.s.createRange();
  a.setStartAfter(t), a.setEndAfter(i);
  const c = a.extractContents();
  l.after(s, n), l.safeRemove(t), j("li", i).length || l.safeRemove(i);
  const d = gr(n, e, o ? "li" : e.o.enter);
  c.querySelector("li") && (o ? d.appendChild(c) : l.after(d, c));
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Nd(n, e, t) {
  const i = e.s, { enter: r } = e.o, o = r.toLowerCase(), s = l.isLeaf(t), a = t.tagName.toLowerCase() === o || s, c = i.cursorOnTheRight(t, n), d = i.cursorOnTheLeft(t, n);
  if (!a && (c || d)) {
    c ? l.after(t, n) : l.before(t, n), gr(n, e, o), d && !c && l.prepend(t, n);
    return;
  }
  const u = i.splitSelection(t, n);
  zt(u, e.editor, e.ed);
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Dd(n, e) {
  let t = n;
  l.up(t, (r) => {
    r && r.hasChildNodes() && r !== e.editor && (t = r);
  }, e.editor);
  const i = l.wrapInline(t, e.o.enter, e);
  if (l.isEmpty(i)) {
    const r = e.createInside.element("br");
    i.appendChild(r), l.before(r, n);
  }
  return i;
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Od = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class Ms extends Y {
  /** @override */
  afterInit(e) {
    const t = e.o.enter.toLowerCase(), i = t === Hn.toLowerCase();
    e.o.enterBlock || (e.o.enterBlock = i ? yi : t), e.registerCommand("enter", (r, o, s = {}) => this.onEnter(s));
  }
  onEnterKeyDown(e) {
    if (e.key === qn) {
      const t = this.j, i = t.e.fire("beforeEnter", e);
      return i !== void 0 ? i : (t.s.isCollapsed() || t.execCommand("Delete"), t.s.focus(), this.onEnter(e), t.e.fire("afterEnter", e), t.synchronizeValues(), !1);
    }
  }
  onEnter(e) {
    const { jodit: t } = this, i = t.createInside.fake();
    try {
      l.safeInsertNode(t.s.range, i), Bd(t, i, ["a"]);
      let r = Ps(i, t);
      const o = l.isLeaf(r);
      if ((!o || e != null && e.shiftKey) && Ad(i, t, e == null ? void 0 : e.shiftKey))
        return !1;
      if (!r && !Md(i, t) && (r = Dd(i, t)), !r)
        return gr(i, t, o ? "li" : t.o.enter), !1;
      if (!Pd(i, t, r))
        return !1;
      if (o && this.__isEmptyListLeaf(r))
        return jd(i, t, r), !1;
      Nd(i, t, r);
    } finally {
      i.isConnected && t.s.setCursorBefore(i), l.safeRemove(i);
    }
  }
  __isEmptyListLeaf(e) {
    const t = this.j.e.fire("enterIsEmptyListLeaf", e);
    return We(t) ? t : l.isEmpty(e);
  }
  /** @override */
  beforeDestruct(e) {
    e.e.off("keydown.enter");
  }
}
Od([
  L(":keydown.enter")
], Ms.prototype, "onEnterKeyDown", null);
H.add("enter", Ms);
const qd = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"/> </svg> `, Hd = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.defaultFontSizePoints = "px";
x.set("font", qd).set("fontsize", Hd);
b.prototype.controls.fontsize = {
  command: "fontsize",
  data: {
    cssRule: "font-size",
    normalise: (n, e) => /pt$/i.test(n) && e.o.defaultFontSizePoints === "pt" ? n.replace(/pt$/i, "") : n
  },
  list: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 32, 34, 36, 48, 60, 72, 96],
  textTemplate: (n, e) => e + n.o.defaultFontSizePoints,
  childTemplate: (n, e, t) => `${t}${n.o.defaultFontSizePoints}`,
  tooltip: "Font size",
  value: (n, e) => {
    var t;
    const i = n.s.current();
    if (!i)
      return;
    const r = l.closest(i, l.isElement, n.editor);
    if (!r)
      return;
    const s = ((t = e.control.data) === null || t === void 0 ? void 0 : t.cssRule) || "font-size";
    return _(r, s).toString();
  },
  isChildActive: (n, e) => {
    var t, i;
    const r = e.state.value, o = (i = (t = e.control.data) === null || t === void 0 ? void 0 : t.normalize) !== null && i !== void 0 ? i : (s) => s;
    return !!(r && e.control.args && o(e.control.args[0].toString()) === o(r.toString()));
  },
  isActive: (n, e) => {
    var t, i;
    const r = e.state.value;
    if (!r)
      return !1;
    const o = (i = (t = e.control.data) === null || t === void 0 ? void 0 : t.normalize) !== null && i !== void 0 ? i : (a) => a;
    let s = e.control.data.cacheListSet;
    if (!s) {
      const a = Object.keys(e.control.list).map(o);
      s = new Set(a), e.control.data.cacheListSet = s;
    }
    return s.has(o(r.toString()));
  }
};
b.prototype.controls.font = {
  ...b.prototype.controls.fontsize,
  command: "fontname",
  textTemplate: (n, e) => {
    const [t] = e.split(",");
    return To(t, `"'`);
  },
  list: {
    "": "Default",
    "Arial, Helvetica, sans-serif": "Arial",
    "'Courier New', Courier, monospace": "Courier New",
    "Georgia, Palatino, serif": "Georgia",
    "'Lucida Sans Unicode', 'Lucida Grande', sans-serif": "Lucida Sans Unicode",
    "Tahoma, Geneva, sans-serif": "Tahoma",
    "'Times New Roman', Times, serif": "Times New Roman",
    "'Trebuchet MS', Helvetica, sans-serif": "Trebuchet MS",
    "Helvetica, sans-serif": "Helvetica",
    "Impact, Charcoal, sans-serif": "Impact",
    "Verdana, Geneva, sans-serif": "Verdana"
  },
  childTemplate: (n, e, t) => {
    let i = !1;
    try {
      i = e.indexOf("dings") === -1 && document.fonts.check(`16px ${e}`, t);
    } catch {
    }
    return `<span data-style="${e}" style="${i ? `font-family: ${e}!important;` : ""}">${t}</span>`;
  },
  data: {
    cssRule: "font-family",
    normalize: (n) => n.toLowerCase().replace(/['"]+/g, "").replace(/[^a-z0-9-]+/g, ",")
  },
  tooltip: "Font family"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Fd(n) {
  n.registerButton({
    name: "font",
    group: "font"
  }).registerButton({
    name: "fontsize",
    group: "font"
  });
  const e = (t, i, r) => {
    switch (t) {
      case "fontsize":
        n.s.commitStyle({
          attributes: {
            style: {
              fontSize: Jo(r, n.o.defaultFontSizePoints)
            }
          }
        });
        break;
      case "fontname":
        n.s.commitStyle({
          attributes: {
            style: {
              fontFamily: r
            }
          }
        });
        break;
    }
    return n.synchronizeValues(), !1;
  };
  n.registerCommand("fontsize", e).registerCommand("fontname", e);
}
H.add("font", Fd);
const Ud = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"/></svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
x.set("paragraph", Ud);
b.prototype.controls.paragraph = {
  command: "formatBlock",
  value(n, e) {
    var t, i;
    const r = e.control, o = n.s.current(), s = l.closest(o, l.isBlock, n.editor);
    return (t = s == null ? void 0 : s.nodeName.toLowerCase()) !== null && t !== void 0 ? t : (i = r.data) === null || i === void 0 ? void 0 : i.currentValue;
  },
  update(n, e) {
    const t = e.control;
    if (!n.s.current())
      return !1;
    const r = e.state.value, o = t.list;
    return N(o) && o[r.toString()] && n.o.textIcons && (e.state.text = o[r.toString()].toString()), !1;
  },
  data: {
    currentValue: "p"
  },
  list: {
    p: "Paragraph",
    h1: "Heading 1",
    h2: "Heading 2",
    h3: "Heading 3",
    h4: "Heading 4",
    blockquote: "Quote",
    pre: "Code"
  },
  isChildActive: (n, e) => {
    var t, i;
    return e.state.value === ((i = (t = e.control) === null || t === void 0 ? void 0 : t.args) === null || i === void 0 ? void 0 : i[0]);
  },
  isActive: (n, e) => e.state.value !== n.o.enter && N(e.control.list) && !!e.control.list[e.state.value],
  childTemplate: (n, e, t) => `<${e} style="margin:0;padding:0"><span>${n.i18n(t)}</span></${e}>`,
  tooltip: "Insert format block"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Vd(n) {
  n.registerButton({
    name: "paragraph",
    group: "font"
  }), n.registerCommand("formatblock", (e, t, i) => (n.s.commitStyle({
    element: i
  }), n.synchronizeValues(), !1));
}
H.add("formatBlock", Vd);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.commandToHotkeys = {
  removeFormat: ["ctrl+shift+m", "cmd+shift+m"],
  insertOrderedList: ["ctrl+shift+7", "cmd+shift+7"],
  insertUnorderedList: ["ctrl+shift+8, cmd+shift+8"],
  selectall: ["ctrl+a", "cmd+a"]
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class Wd extends Y {
  constructor() {
    super(...arguments), this.onKeyPress = (e) => {
      const t = this.specialKeys[e.which], i = (e.key || String.fromCharCode(e.which)).toLowerCase(), r = [t || i];
      return ["alt", "ctrl", "shift", "meta"].forEach((o) => {
        e[o + "Key"] && t !== o && r.push(o);
      }), ir(r.join("+"));
    }, this.specialKeys = {
      8: "backspace",
      9: "tab",
      10: "return",
      13: "return",
      16: "shift",
      17: "ctrl",
      18: "alt",
      19: "pause",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "insert",
      46: "del",
      59: ";",
      61: "=",
      91: "meta",
      96: "0",
      97: "1",
      98: "2",
      99: "3",
      100: "4",
      101: "5",
      102: "6",
      103: "7",
      104: "8",
      105: "9",
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      112: "f1",
      113: "f2",
      114: "f3",
      115: "f4",
      116: "f5",
      117: "f6",
      118: "f7",
      119: "f8",
      120: "f9",
      121: "f10",
      122: "f11",
      123: "f12",
      144: "numlock",
      145: "scroll",
      173: "-",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    };
  }
  /** @override */
  afterInit(e) {
    Je(e.o.commandToHotkeys, !1).forEach((i) => {
      const r = e.o.commandToHotkeys[i];
      r && (M(r) || v(r)) && e.registerHotkeyToCommand(r, i);
    });
    let t = !1;
    e.e.off(".hotkeys").on([e.ow, e.ew], "keydown.hotkeys", (i) => {
      if (i.key === Di)
        return this.j.e.fire("escape", i);
    }).on("keydown.hotkeys", (i) => {
      const r = this.onKeyPress(i), o = {
        shouldStop: !0
      };
      if (this.j.e.fire(r + ".hotkey", i.type, o) === !1) {
        if (o.shouldStop)
          return t = !0, e.e.stopPropagation("keydown"), !1;
        i.preventDefault();
      }
    }, { top: !0 }).on("keyup.hotkeys", () => {
      if (t)
        return t = !1, e.e.stopPropagation("keyup"), !1;
    }, { top: !0 });
  }
  /** @override */
  beforeDestruct(e) {
    e.events && e.e.off(".hotkeys");
  }
}
H.add("hotkeys", Wd);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.iframeBaseUrl = "";
b.prototype.iframeTitle = "Jodit Editor";
b.prototype.iframeDoctype = "<!DOCTYPE html>";
b.prototype.iframeDefaultSrc = "about:blank";
b.prototype.iframeStyle = 'html{margin:0;padding:0;min-height: 100%;}body{box-sizing:border-box;font-size:13px;line-height:1.6;padding:10px;margin:0;background:transparent;color:#000;position:relative;z-index:2;user-select:auto;margin:0px;overflow:auto;outline:none;}table{width:100%;border:none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}';
b.prototype.iframeCSSLinks = [];
b.prototype.iframeSandbox = null;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function $d(n) {
  const e = n.options;
  n.e.on("afterSetMode", () => {
    n.isEditorMode() && n.s.focus();
  }).on("generateDocumentStructure.iframe", (t, i) => {
    const r = t || i.iframe.contentWindow.document;
    if (r.open(), r.write(e.iframeDoctype + `<html dir="${e.direction}" class="jodit" lang="${Ci(e.language)}"><head><title>${e.iframeTitle}</title>` + (e.iframeBaseUrl ? `<base href="${e.iframeBaseUrl}"/>` : "") + '</head><body class="jodit-wysiwyg"></body></html>'), r.close(), e.iframeCSSLinks && e.iframeCSSLinks.forEach((o) => {
      const s = r.createElement("link");
      s.setAttribute("rel", "stylesheet"), s.setAttribute("href", o), r.head && r.head.appendChild(s);
    }), e.iframeStyle) {
      const o = r.createElement("style");
      o.innerHTML = e.iframeStyle, r.head && r.head.appendChild(o);
    }
  }).on("createEditor", () => {
    if (!e.iframe)
      return;
    const t = n.c.element("iframe");
    t.style.display = "block", t.src = "about:blank", t.className = "jodit-wysiwyg_iframe", t.setAttribute("allowtransparency", "true"), t.setAttribute("tabindex", e.tabIndex.toString()), t.setAttribute("frameborder", "0"), e.iframeSandbox != null && t.setAttribute("sandbox", e.iframeSandbox), n.workplace.appendChild(t), n.iframe = t;
    const i = n.e.fire("generateDocumentStructure.iframe", null, n);
    return Ae(i, () => {
      if (!n.iframe)
        return !1;
      const o = n.iframe.contentWindow.document;
      n.editorWindow = n.iframe.contentWindow;
      const s = e.editHTMLDocumentMode, a = () => {
        g(o.body, "contenteditable", n.getMode() !== nt && !n.getReadOnly() || null);
      }, c = (d) => {
        const u = /<body.*<\/body>/im, h = "{%%BODY%%}", f = u.exec(d);
        return f && (d = d.replace(u, h).replace(/<span([^>]*?)>(.*?)<\/span>/gim, "").replace(/&lt;span([^&]*?)&gt;(.*?)&lt;\/span&gt;/gim, "").replace(h, f[0].replace(/(<body[^>]+?)min-height["'\s]*:[\s"']*[0-9]+(px|%)/im, "$1").replace(/(<body[^>]+?)([\s]*["'])?contenteditable["'\s]*=[\s"']*true["']?/im, "$1").replace(/<(style|script|span)[^>]+jodit[^>]+>.*?<\/\1>/g, "")).replace(/(class\s*=\s*)(['"])([^"']*)(jodit-wysiwyg|jodit)([^"']*\2)/g, "$1$2$3$5").replace(/(<[^<]+?)\sclass="[\s]*"/gim, "$1").replace(/(<[^<]+?)\sstyle="[\s;]*"/gim, "$1").replace(/(<[^<]+?)\sdir="[\s]*"/gim, "$1")), d;
      };
      if (s) {
        const d = n.element.tagName;
        if (d !== "TEXTAREA" && d !== "INPUT")
          throw z("If enable `editHTMLDocumentMode` - source element should be INPUT or TEXTAREA");
        n.e.on("beforeGetNativeEditorValue", () => c(n.o.iframeDoctype + o.documentElement.outerHTML)).on("beforeSetNativeEditorValue", ({ value: u }) => {
          if (n.isLocked)
            return !1;
          if (/<(html|body)/i.test(u)) {
            const h = o.documentElement.outerHTML;
            c(h) !== c(u) && (o.open(), o.write(n.o.iframeDoctype + c(u)), o.close(), n.editor = o.body, n.e.fire("safeHTML", n.editor), a(), n.e.fire("prepareWYSIWYGEditor"), n.e.stopPropagation("beforeSetNativeEditorValue"));
          } else
            o.body.innerHTML = u;
          return !0;
        }, { top: !0 });
      }
      if (n.editor = o.body, n.e.on("afterSetMode afterInit afterAddPlace", a), e.height === "auto") {
        o.documentElement && (o.documentElement.style.overflowY = "hidden");
        const d = n.async.throttle((...u) => {
          n.async.requestAnimationFrame(() => {
            if (n.editor && n.iframe && e.height === "auto") {
              const h = n.ew.getComputedStyle(n.editor), f = parseInt(h.marginTop || "0", 10) + parseInt(h.marginBottom || "0", 10);
              _(n.iframe, "height", n.editor.offsetHeight + f);
            }
          });
        }, n.defaultTimeout / 2);
        if (n.e.on("change afterInit afterSetMode resize", d).on([n.iframe, n.ew, o.documentElement], "load", d).on(o, "readystatechange DOMContentLoaded", d), typeof ResizeObserver == "function") {
          const u = new ResizeObserver(d);
          u.observe(o.body), n.e.on("beforeDestruct", () => {
            u.disconnect();
          });
        }
      }
      return o.documentElement && n.e.on(o.documentElement, "mousedown touchend", () => {
        n.s.isFocused() || (n.s.focus(), n.editor === o.body && n.s.setCursorIn(o.body));
      }).on(n.ew, "mousedown touchstart keydown keyup touchend click mouseup mousemove scroll", (d) => {
        var u;
        (u = n.events) === null || u === void 0 || u.fire(n.ow, d);
      }), !1;
    });
  });
}
H.add("iframe", $d);
const Kd = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
x.set("image", Kd);
b.prototype.controls.image = {
  popup: (n, e, t) => {
    let i = null;
    return e && !l.isText(e) && l.isHTMLElement(e) && (l.isTag(e, "img") || j("img", e).length) && (i = l.isTag(e, "img") ? e : j("img", e)[0]), n.s.save(), Td(n, {
      filebrowser: (r) => {
        n.s.restore(), r.files && r.files.forEach((o) => n.s.insertImage(r.baseurl + o, null, n.o.imageDefaultWidth)), t();
      },
      upload: !0,
      url: async (r, o) => {
        n.s.restore(), /^[a-z\d_-]+(\.[a-z\d_-]+)+/i.test(r) && (r = "//" + r);
        const s = i || n.createInside.element("img");
        s.setAttribute("src", r), s.setAttribute("alt", o), i || await n.s.insertImage(s, null, n.o.imageDefaultWidth), t();
      }
    }, i, t);
  },
  tags: ["img"],
  tooltip: "Insert Image"
};
function Jd(n) {
  n.registerButton({
    name: "image",
    group: "media"
  });
}
H.add("image", Jd);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Yd = [
  {
    name: "eye",
    tooltip: "Open link",
    exec: (n, e) => {
      const t = g(e, "href");
      e && t && n.ow.open(t);
    }
  },
  {
    name: "link",
    tooltip: "Edit link",
    icon: "pencil"
  },
  "unlink",
  "brush",
  "file"
];
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const fi = (n) => n.args && v(n.args[0]) ? n.args[0].toLowerCase() : "", Gd = [
  "brushCell",
  {
    name: "valign",
    list: ["Top", "Middle", "Bottom", "Normal"],
    childTemplate: (n, e, t) => t,
    exec: (n, e, { control: t }) => {
      const i = fi(t);
      n.getInstance("Table", n.o).getAllSelectedCells().forEach((r) => {
        _(r, "vertical-align", i === "normal" ? "" : i);
      });
    },
    tooltip: "Vertical align"
  },
  {
    name: "splitv",
    list: {
      tablesplitv: "Split vertical",
      tablesplitg: "Split horizontal"
    },
    tooltip: "Split"
  },
  {
    name: "align",
    icon: "left"
  },
  `
`,
  {
    name: "merge",
    command: "tablemerge",
    tooltip: "Merge"
  },
  {
    name: "addcolumn",
    list: {
      tableaddcolumnbefore: "Insert column before",
      tableaddcolumnafter: "Insert column after"
    },
    exec: (n, e, { control: t }) => {
      if (!ae(n))
        return;
      if (!t.args)
        return !1;
      const i = fi(t);
      n.execCommand(i, !1, e);
    },
    tooltip: "Add column"
  },
  {
    name: "addrow",
    list: {
      tableaddrowbefore: "Insert row above",
      tableaddrowafter: "Insert row below"
    },
    exec: (n, e, { control: t }) => {
      if (!ae(n))
        return;
      if (!t.args)
        return !1;
      const i = fi(t);
      n.execCommand(i, !1, e);
    },
    tooltip: "Add row"
  },
  {
    name: "delete",
    icon: "bin",
    list: {
      tablebin: "Delete table",
      tablebinrow: "Delete row",
      tablebincolumn: "Delete column",
      tableempty: "Empty cell"
    },
    exec: (n, e, { control: t }) => {
      if (!ae(n))
        return;
      if (!t.args)
        return !1;
      const i = fi(t);
      n.execCommand(i, !1, e), n.e.fire("hidePopup");
    },
    tooltip: "Delete"
  }
];
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Bs = {
  name: "left",
  childTemplate: (n, e, t) => t,
  list: ["Left", "Right", "Center", "Normal"],
  exec: (n, e, { control: t }) => {
    if (!l.isTag(e, /* @__PURE__ */ new Set(["img", "jodit", "jodit-media"])))
      return;
    const i = t.args && v(t.args[0]) ? t.args[0].toLowerCase() : "";
    if (!i)
      return !1;
    un(e, i), l.isTag(e, /* @__PURE__ */ new Set(["jodit", "jodit-media"])) && e.firstElementChild && un(e.firstElementChild, i), n.synchronizeValues(), n.e.fire("recalcPositionPopup");
  },
  tooltip: "Horizontal align"
}, Xd = [
  {
    name: "delete",
    icon: "bin",
    tooltip: "Delete",
    exec: (n, e) => {
      e && n.s.removeNode(e);
    }
  },
  {
    name: "pencil",
    exec(n, e) {
      e.tagName.toLowerCase() === "img" && n.e.fire("openImageProperties", e);
    },
    tooltip: "Edit"
  },
  {
    name: "valign",
    list: ["Top", "Middle", "Bottom", "Normal"],
    tooltip: "Vertical align",
    exec: (n, e, { control: t }) => {
      if (!l.isTag(e, "img"))
        return;
      const i = t.args && v(t.args[0]) ? t.args[0].toLowerCase() : "";
      if (!i)
        return !1;
      _(e, "vertical-align", i === "normal" ? "" : i), n.e.fire("recalcPositionPopup");
    }
  },
  Bs
];
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const rn = [
  {
    name: "bin",
    tooltip: "Delete",
    exec: (n, e) => {
      e && n.s.removeNode(e);
    }
  },
  Bs
];
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Zd = [
  "bold",
  "italic",
  "|",
  "ul",
  "ol",
  "eraser",
  "|",
  "fontsize",
  "brush",
  "paragraph",
  "---",
  "image",
  "table",
  `
`,
  "link",
  "|",
  "align",
  "|",
  "undo",
  "redo",
  "|",
  "copyformat",
  "fullsize",
  "---",
  "dots"
], Qd = '<svg viewBox="0 0 18.151 18.151" xmlns="http://www.w3.org/2000/svg"> <g> <path stroke-width="0" d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194 c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"/> <path stroke-width="0" d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938 S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597 s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"/> <polygon stroke-width="0" points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868 10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 "/> </g> </svg> ', eu = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 432 432"> <g> <polygon points="203.688,96 0,96 0,144 155.688,144 "/> <polygon points="155.719,288 0,288 0,336 203.719,336 "/> <path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719 L97.844,230.125z"/> <polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176"/> </g> </svg> `, tu = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 312 312"> <g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32 -30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30 25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27 -503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960 11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40 -47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0 -775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80 -3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10 164 12 777 10 l773 -3 3 -454z"/> <path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104 190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4 289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103 -97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35 -82 -78z"/> <path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0 189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"/> <path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95 106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79 79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95 108 -6 10 -568 11 -577 1z"/> </g> </svg> `, iu = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 48 48"> <path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"/> <path d="M0 0h48v48h-48z" fill="none"/> </svg> `, nu = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 48 48"> <path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"/> <path d="M0 0h48v48h-48z" fill="none"/> </svg> `, ru = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"/> </svg> `, ou = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.toolbarInline = !0;
b.prototype.toolbarInlineForSelection = !1;
b.prototype.toolbarInlineDisableFor = [];
b.prototype.toolbarInlineDisabledButtons = ["source"];
x.set("addcolumn", Qd).set("addrow", eu).set("merge", tu).set("th", ru).set("splitg", iu).set("splitv", nu).set("th-list", ou);
b.prototype.popup = {
  a: Yd,
  img: Xd,
  cells: Gd,
  toolbar: Zd,
  jodit: rn,
  iframe: rn,
  "jodit-media": rn,
  selection: [
    "bold",
    "underline",
    "italic",
    "ul",
    "ol",
    `
`,
    "outdent",
    "indent",
    "fontsize",
    "brush",
    "cut",
    `
`,
    "paragraph",
    "link",
    "align",
    "dots"
  ]
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var xe = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class we extends Y {
  constructor() {
    super(...arguments), this.type = null, this.snapRange = null, this.elmsList = Je(this.j.o.popup, !1).filter((e) => !this.isExcludedTarget(e));
  }
  get popup() {
    return new oe(this.jodit, !1);
  }
  get toolbar() {
    return ur(this.jodit, this.popup);
  }
  onClick(e) {
    const t = this.elmsList, i = l.isTag(e, "img") ? e : l.closest(e, t, this.j.editor);
    if (i && this.canShowPopupForType(i.nodeName.toLowerCase()))
      return this.showPopup(() => ke(i, this.j), i.nodeName.toLowerCase(), i), !1;
  }
  /**
   * Show inline popup with some toolbar
   *
   * @param type - selection, img, a etc.
   */
  showPopup(e, t, i) {
    if (t = t.toLowerCase(), !this.canShowPopupForType(t))
      return !1;
    if (this.type !== t || i !== this.previousTarget) {
      this.previousTarget = i;
      const r = this.j.o.popup[t];
      let o;
      y(r) ? o = r(this.j, i, this.popup.close) : o = r, M(o) && (this.toolbar.build(o, i), this.toolbar.buttonSize = this.j.o.toolbarButtonSize, o = this.toolbar.container), this.popup.setContent(o), this.type = t;
    }
    return this.popup.open(e), !0;
  }
  /**
   * Hide opened popup
   */
  hidePopup(e) {
    this.popup.isOpened && (!v(e) || e === this.type) && this.popup.close();
  }
  onOutsideClick() {
    this.popup.close();
  }
  /**
   * Can show popup for this type
   */
  canShowPopupForType(e) {
    const t = this.j.o.popup[e.toLowerCase()];
    return this.j.o.readonly || !this.j.o.toolbarInline || !t ? !1 : !this.isExcludedTarget(e);
  }
  /**
   * For some elements do not show popup
   */
  isExcludedTarget(e) {
    return Ge(this.j.o.toolbarInlineDisableFor).map((t) => t.toLowerCase()).includes(e.toLowerCase());
  }
  /** @override **/
  afterInit(e) {
    this.j.e.on("getDiffButtons.mobile", (t) => {
      if (this.toolbar === t) {
        const i = this.toolbar.getButtonsNames();
        return U(e.registeredButtons).filter((r) => !this.j.o.toolbarInlineDisabledButtons.includes(r.name)).filter((r) => {
          const o = v(r) ? r : r.name;
          return o && o !== "|" && o !== `
` && !i.includes(o);
        });
      }
    }).on("hidePopup", this.hidePopup).on("showInlineToolbar", this.showInlineToolbar).on("showPopup", (t, i, r) => {
      this.showPopup(i, r || (v(t) ? t : t.nodeName), v(t) ? void 0 : t);
    }).on("mousedown keydown", this.onSelectionStart).on("change", () => {
      this.popup.isOpened && this.previousTarget && !this.previousTarget.parentNode && (this.hidePopup(), this.previousTarget = void 0);
    }).on([this.j.ew, this.j.ow], "mouseup keyup", this.onSelectionEnd), this.addListenersForElements();
  }
  onSelectionStart() {
    this.snapRange = this.j.s.range.cloneRange();
  }
  onSelectionEnd(e) {
    if (e && e.target && ie.closestElement(e.target, oe))
      return;
    const { snapRange: t } = this, { range: i } = this.j.s;
    (!t || i.collapsed || i.startContainer !== t.startContainer || i.startOffset !== t.startOffset || i.endContainer !== t.endContainer || i.endOffset !== t.endOffset) && this.onSelectionChange();
  }
  /**
   * Selection change handler
   */
  onSelectionChange() {
    if (!this.j.o.toolbarInlineForSelection)
      return;
    const e = "selection", t = this.j.s.sel, i = this.j.s.range;
    if (t != null && t.isCollapsed || this.isSelectedTarget(i)) {
      this.type === e && this.popup.isOpened && this.hidePopup();
      return;
    }
    this.j.s.current() && this.showPopup(() => i.getBoundingClientRect(), e);
  }
  /**
   * In not collapsed selection - only one image
   */
  isSelectedTarget(e) {
    const t = e.startContainer;
    return l.isElement(t) && t === e.endContainer && l.isTag(t.childNodes[e.startOffset], new Set(Je(this.j.o.popup, !1))) && e.startOffset === e.endOffset - 1;
  }
  /**
   * Shortcut for Table module
   */
  // private get tableModule(): Table {
  // 	return this.j.getInstance<Table>('Table', this.j.o);
  // }
  /** @override **/
  beforeDestruct(e) {
    e.e.off("showPopup").off([this.j.ew, this.j.ow], "mouseup keyup", this.onSelectionEnd), this.removeListenersForElements();
  }
  _eventsList() {
    const e = this.elmsList;
    return e.map((t) => se(`click_${t}`)).concat(e.map((t) => se(`touchstart_${t}`))).join(" ");
  }
  addListenersForElements() {
    this.j.e.on(this._eventsList(), this.onClick);
  }
  removeListenersForElements() {
    this.j.e.off(this._eventsList(), this.onClick);
  }
  /**
   * Show the inline WYSIWYG toolbar editor.
   */
  showInlineToolbar(e) {
    this.showPopup(() => {
      if (e)
        return e;
      const { range: t } = this.j.s;
      return t.getBoundingClientRect();
    }, "toolbar");
  }
}
we.requires = ["select"];
xe([
  J
], we.prototype, "popup", null);
xe([
  J
], we.prototype, "toolbar", null);
xe([
  k
], we.prototype, "onClick", null);
xe([
  ns((n) => !n.j.isLocked)
], we.prototype, "showPopup", null);
xe([
  L([":clickEditor", ":beforeCommandDelete", ":backSpaceAfterDelete"]),
  k
], we.prototype, "hidePopup", null);
xe([
  L(":outsideClick")
], we.prototype, "onOutsideClick", null);
xe([
  k
], we.prototype, "onSelectionStart", null);
xe([
  k
], we.prototype, "onSelectionEnd", null);
xe([
  Oe((n) => n.defaultTimeout)
], we.prototype, "onSelectionChange", null);
xe([
  k
], we.prototype, "showInlineToolbar", null);
H.add("inlinePopup", we);
const su = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/> </svg> `, au = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const lu = (n) => {
  const { openInNewTabCheckbox: e, noFollowCheckbox: t, modeClassName: i, selectSizeClassName: r, selectMultipleClassName: o, selectOptionsClassName: s } = n.o.link;
  return new Kt(n, [
    new $e(n, [
      new F(n, {
        name: "url",
        type: "text",
        ref: "url_input",
        label: "URL",
        placeholder: "http://",
        required: !0
      })
    ]),
    new $e(n, [
      new F(n, {
        name: "content",
        ref: "content_input",
        label: "Text"
      })
    ], {
      ref: "content_input_box"
    }),
    i ? new $e(n, [
      i === "input" ? new F(n, {
        name: "className",
        ref: "className_input",
        label: "Class name"
      }) : i === "select" ? new It(n, {
        name: "className",
        ref: "className_select",
        label: "Class name",
        size: r,
        multiple: o,
        options: s
      }) : null
    ]) : null,
    e ? new Ne(n, {
      name: "target",
      ref: "target_checkbox",
      label: "Open in new tab"
    }) : null,
    t ? new Ne(n, {
      name: "nofollow",
      ref: "nofollow_checkbox",
      label: "No follow"
    }) : null,
    new $e(n, [
      new R(n, {
        name: "unlink",
        variant: "default",
        text: "Unlink"
      }),
      new R(n, {
        name: "insert",
        type: "submit",
        variant: "primary",
        text: "Insert"
      })
    ], {
      align: "full"
    })
  ]);
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.link = {
  formTemplate: lu,
  followOnDblClick: !1,
  processVideoLink: !0,
  processPastedLink: !0,
  noFollowCheckbox: !0,
  openInNewTabCheckbox: !0,
  modeClassName: "input",
  selectMultipleClassName: !0,
  preventReadOnlyNavigation: !0,
  selectSizeClassName: 3,
  selectOptionsClassName: [],
  hotkeys: ["ctrl+k", "cmd+k"]
};
x.set("link", su).set("unlink", au);
b.prototype.controls.unlink = {
  exec: (n, e) => {
    const t = l.closest(e, "a", n.editor);
    t && l.unwrap(t), n.synchronizeValues(), n.e.fire("hidePopup");
  },
  tooltip: "Unlink"
};
b.prototype.controls.link = {
  isActive: (n) => {
    const e = n.s.current();
    return !!(e && l.closest(e, "a", n.editor));
  },
  popup: (n, e, t) => n.e.fire("generateLinkForm.link", e, t),
  tags: ["a"],
  tooltip: "Insert link"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Yi = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class oi extends Y {
  constructor() {
    super(...arguments), this.buttons = [
      {
        name: "link",
        group: "insert"
      }
    ];
  }
  /** @override */
  afterInit(e) {
    e.o.link.followOnDblClick && e.e.on("dblclick.link", this.__onDblClickOnLink), e.e.on(e.editor, "click.link", this.__onClickReadOnlyLink), e.o.link.processPastedLink && e.e.on("processPaste.link", this.onProcessPasteLink), e.e.on("generateLinkForm.link", this.__generateForm), e.registerCommand("openLinkDialog", {
      exec: () => {
        const t = e.dlg({
          resizable: !1
        }), i = this.__generateForm(e.s.current(), () => {
          t.close();
        });
        i.container.classList.add("jodit-dialog_alert"), t.setContent(i), t.open(), e.async.requestIdleCallback(() => {
          const { url_input: r } = _e(i.container);
          r == null || r.focus();
        });
      },
      hotkeys: e.o.link.hotkeys
    });
  }
  __onDblClickOnLink(e) {
    if (!l.isTag(e.target, "a"))
      return;
    const t = g(e.target, "href");
    t && (location.href = t, e.preventDefault());
  }
  onProcessPasteLink(e, t) {
    var i, r, o, s;
    const { jodit: a } = this;
    if (!(!Oi(t) || !a.o.link.processPastedLink)) {
      if (a.e.stopPropagation("processPaste"), a.o.link.processVideoLink) {
        const c = he((r = (i = a.o.video) === null || i === void 0 ? void 0 : i.parseUrlToVideoEmbed) !== null && r !== void 0 ? r : qo, t, {
          width: (o = a.o.video) === null || o === void 0 ? void 0 : o.defaultWidth,
          height: (s = a.o.video) === null || s === void 0 ? void 0 : s.defaultHeight
        });
        if (c !== t)
          return a.createInside.fromHTML(c);
      }
      if (a.s.isCollapsed()) {
        const c = a.createInside.element("a");
        return c.setAttribute("href", t), c.textContent = t, a.e.fire("applyLink", a, c, null), c;
      }
      return a.s.commitStyle({
        element: "a",
        attributes: {
          href: t
        }
      }), !0;
    }
  }
  __generateForm(e, t) {
    const { jodit: i } = this, r = i.i18n.bind(i), { openInNewTabCheckbox: o, noFollowCheckbox: s, formTemplate: a, formClassName: c, modeClassName: d } = i.o.link, u = a(i), h = v(u) ? i.c.fromHTML(u, {
      target_checkbox_box: o,
      nofollow_checkbox_box: s
    }) : u, f = l.isElement(h) ? h : h.container, p = _e(f), { insert: m, unlink: w, content_input_box: C } = p, { target_checkbox: I, nofollow_checkbox: A, url_input: B } = p, ht = e, Le = l.isImage(ht);
    let { content_input: G } = p;
    const { className_input: me } = p, { className_select: He } = p;
    G || (G = i.c.element("input", {
      type: "hidden",
      ref: "content_input"
    })), c && f.classList.add(c), Le && l.hide(C);
    let W;
    const Fe = () => W ? W.innerText : er(i.s.range.cloneContents(), i.ed);
    e && l.closest(e, "a", i.editor) ? W = l.closest(e, "a", i.editor) : W = !1, !Le && e && (G.value = Fe()), W ? (B.value = g(W, "href") || "", d && du(d, me, W, He), o && I && (I.checked = g(W, "target") === "_blank"), s && A && (A.checked = g(W, "rel") === "nofollow"), m.textContent = r("Update")) : l.hide(w), i.editor.normalize();
    const Ue = i.history.snapshot.make();
    w && i.e.on(w, "click", ($) => {
      i.s.restore(), i.history.snapshot.restore(Ue), W && l.unwrap(W), i.synchronizeValues(), t(), $.preventDefault();
    });
    const Ve = () => {
      if (!B.value.trim().length)
        return B.focus(), B.classList.add("jodit_error"), !1;
      let $;
      i.s.restore(), i.s.removeMarkers(), i.editor.normalize(), i.history.snapshot.restore(Ue);
      const ft = Fe() !== G.value.trim(), yr = i.createInside;
      if (!W || !l.isOrContains(i.editor, W)) {
        if (i.s.isCollapsed()) {
          const ce = yr.element("a");
          i.s.insertNode(ce, !1, !1), $ = [ce];
        } else {
          const ce = i.s.current();
          l.isTag(ce, "img") ? $ = [l.wrap(ce, "a", yr)] : $ = i.s.wrapInTag("a");
        }
        $.forEach((ce) => i.s.select(ce));
      } else
        $ = [W];
      return $.forEach((ce) => {
        g(ce, "href", B.value), cu(d, me, He, ce), Le || uu(ce, G, ft, B), o && I && g(ce, "target", I.checked ? "_blank" : null), s && A && g(ce, "rel", A.checked ? "nofollow" : null), i.e.fire("applyLink", i, ce, h);
      }), i.synchronizeValues(), t(), !1;
    };
    return l.isElement(h) ? i.e.on(h, "submit", ($) => ($.preventDefault(), $.stopImmediatePropagation(), Ve(), !1)) : h.onSubmit(Ve), h;
  }
  /** @override */
  beforeDestruct(e) {
    e.e.off("generateLinkForm.link", this.__generateForm).off("dblclick.link", this.__onDblClickOnLink).off(e.editor, "click.link", this.__onClickReadOnlyLink).off("processPaste.link", this.onProcessPasteLink);
  }
  __onClickReadOnlyLink(e) {
    const { jodit: t } = this;
    t.o.readonly && t.o.link.preventReadOnlyNavigation && l.isTag(e.target, "a") && e.preventDefault();
  }
}
Yi([
  k
], oi.prototype, "__onDblClickOnLink", null);
Yi([
  k
], oi.prototype, "onProcessPasteLink", null);
Yi([
  k
], oi.prototype, "__generateForm", null);
Yi([
  k
], oi.prototype, "__onClickReadOnlyLink", null);
H.add("link", oi);
function cu(n, e, t, i) {
  var r;
  if (n && (e ?? t)) {
    if (n === "input")
      e.value === "" && i.hasAttribute("class") && g(i, "class", null), e.value !== "" && g(i, "class", e.value);
    else if (n === "select") {
      i.hasAttribute("class") && g(i, "class", null);
      for (let o = 0; o < t.selectedOptions.length; o++) {
        const s = (r = t.selectedOptions.item(o)) === null || r === void 0 ? void 0 : r.value;
        s && i.classList.add(s);
      }
    }
  }
}
function du(n, e, t, i) {
  switch (n) {
    case "input":
      e && (e.value = g(t, "class") || "");
      break;
    case "select":
      if (i) {
        for (let o = 0; o < i.selectedOptions.length; o++) {
          const s = i.options.item(o);
          s && (s.selected = !1);
        }
        (g(t, "class") || "").split(" ").forEach((o) => {
          if (o)
            for (let s = 0; s < i.options.length; s++) {
              const a = i.options.item(s);
              a != null && a.value && a.value === o && (a.selected = !0);
            }
        });
      }
      break;
  }
}
function uu(n, e, t, i) {
  let r = n.textContent;
  e.value.trim().length ? t && (r = e.value) : r = i.value;
  const o = n.textContent;
  r !== o && (n.textContent = r);
}
const hu = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path stroke-width="0" d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/> </svg> `, fu = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path stroke-width="0" d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const js = (n, e, { control: t }) => {
  var i;
  const r = `button${t.command}`, o = (i = t.args && t.args[0]) !== null && i !== void 0 ? i : Z(n, r);
  Z(n, r, o), n.execCommand(t.command, !1, o === "default" ? null : o);
};
x.set("ol", hu).set("ul", fu);
b.prototype.controls.ul = {
  command: "insertUnorderedList",
  tags: ["ul"],
  tooltip: "Insert Unordered List",
  list: {
    default: "Default",
    circle: "Circle",
    disc: "Dot",
    square: "Quadrate"
  },
  exec: js
};
b.prototype.controls.ol = {
  command: "insertOrderedList",
  tags: ["ol"],
  tooltip: "Insert Ordered List",
  list: {
    default: "Default",
    "lower-alpha": "Lower Alpha",
    "lower-greek": "Lower Greek",
    "lower-roman": "Lower Roman",
    "upper-alpha": "Upper Alpha",
    "upper-roman": "Upper Roman"
  },
  exec: js
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var pu = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class Ns extends Y {
  constructor() {
    super(...arguments), this.buttons = [
      {
        name: "ul",
        group: "list"
      },
      {
        name: "ol",
        group: "list"
      }
    ];
  }
  afterInit(e) {
    e.registerCommand("insertUnorderedList", this.onCommand).registerCommand("insertOrderedList", this.onCommand);
  }
  onCommand(e, t, i) {
    return this.jodit.s.commitStyle({
      element: e === "insertunorderedlist" ? "ul" : "ol",
      attributes: {
        style: {
          listStyleType: i ?? null
        }
      }
    }), this.jodit.synchronizeValues(), !1;
  }
  beforeDestruct(e) {
  }
}
pu([
  k
], Ns.prototype, "onCommand", null);
H.add("orderedList", Ns);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.showPlaceholder = !0;
b.prototype.placeholder = "Type something";
b.prototype.useInputsPlaceholder = !0;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var mu = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
function gu(n) {
  var e;
  if (!n.firstChild)
    return !0;
  const t = n.firstChild;
  if (Me.has((e = t.nodeName) === null || e === void 0 ? void 0 : e.toLowerCase()) || /^(TABLE)$/i.test(t.nodeName))
    return !1;
  const i = l.next(t, (r) => r && !l.isEmptyTextNode(r), n);
  return l.isText(t) && !i ? l.isEmptyTextNode(t) : !i && l.each(t, (r) => !(l.isLeaf(r) || l.isList(r)) && (l.isEmpty(r) || l.isTag(r, "br")));
}
class Ds extends Y {
  constructor() {
    super(...arguments), this.addNativeListeners = () => {
      this.j.e.off(this.j.editor, "input.placeholder keydown.placeholder").on(this.j.editor, "input.placeholder keydown.placeholder", this.toggle);
    }, this.addEvents = () => {
      const e = this.j;
      e.o.useInputsPlaceholder && e.element.hasAttribute("placeholder") && (this.placeholderElm.innerHTML = g(e.element, "placeholder") || ""), e.e.fire("placeholder", this.placeholderElm.innerHTML), e.e.off(".placeholder").on("changePlace.placeholder", this.addNativeListeners).on("change.placeholder focus.placeholder keyup.placeholder mouseup.placeholder keydown.placeholder mousedown.placeholder afterSetMode.placeholder changePlace.placeholder", this.toggle).on(window, "load", this.toggle), this.addNativeListeners(), this.toggle();
    };
  }
  afterInit(e) {
    e.o.showPlaceholder && (this.placeholderElm = e.c.fromHTML(`<span data-ref="placeholder" style="display: none;" class="jodit-placeholder">${e.i18n(e.o.placeholder)}</span>`), e.o.direction === "rtl" && (this.placeholderElm.style.right = "0px", this.placeholderElm.style.direction = "rtl"), e.e.on("readonly", (t) => {
      t ? this.hide() : this.toggle();
    }).on("changePlace", this.addEvents), this.addEvents());
  }
  show() {
    const e = this.j;
    if (e.o.readonly)
      return;
    let t = 0, i = 0;
    const r = e.s.current(), o = r && l.closest(r, l.isBlock, e.editor) || e.editor, s = e.ew.getComputedStyle(o), a = e.ew.getComputedStyle(e.editor);
    e.workplace.appendChild(this.placeholderElm);
    const { firstChild: c } = e.editor;
    if (l.isElement(c) && !be(c)) {
      const d = e.ew.getComputedStyle(c);
      t = parseInt(d.getPropertyValue("margin-top"), 10), i = parseInt(d.getPropertyValue("margin-left"), 10), this.placeholderElm.style.fontSize = parseInt(d.getPropertyValue("font-size"), 10) + "px", this.placeholderElm.style.lineHeight = d.getPropertyValue("line-height");
    } else
      this.placeholderElm.style.fontSize = parseInt(s.getPropertyValue("font-size"), 10) + "px", this.placeholderElm.style.lineHeight = s.getPropertyValue("line-height");
    _(this.placeholderElm, {
      display: "block",
      textAlign: s.getPropertyValue("text-align"),
      paddingTop: parseInt(a.paddingTop, 10) + "px",
      paddingLeft: parseInt(a.paddingLeft, 10) + "px",
      paddingRight: parseInt(a.paddingRight, 10) + "px",
      marginTop: Math.max(parseInt(s.getPropertyValue("margin-top"), 10), t),
      marginLeft: Math.max(parseInt(s.getPropertyValue("margin-left"), 10), i)
    });
  }
  hide() {
    l.safeRemove(this.placeholderElm);
  }
  toggle() {
    const e = this.j;
    if (!(!e.editor || e.isInDestruct)) {
      if (e.getRealMode() !== de) {
        this.hide();
        return;
      }
      gu(e.editor) ? this.show() : this.hide();
    }
  }
  beforeDestruct(e) {
    this.hide(), e.e.off(".placeholder").off(window, "load", this.toggle);
  }
}
mu([
  Oe((n) => n.defaultTimeout / 10, !0)
], Ds.prototype, "toggle", null);
H.add("placeholder", Ds);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function vu(n) {
  const { o: e } = n;
  !e.hidePoweredByJodit && !e.inline && (e.showCharsCounter || e.showWordsCounter || e.showXPathInStatusbar) && n.hookStatus("ready", () => {
    n.statusbar.append(n.create.fromHTML(`<a
						tabindex="-1"
						style="text-transform: uppercase"
						class="jodit-status-bar-link"
						target="_blank"
						href="https://xdsoft.net/jodit/">
							Powered by Jodit
						</a>`), !0);
  });
}
H.add("poweredByJodit", vu);
const bu = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"/> </svg> `, wu = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
x.set("redo", bu).set("undo", wu);
b.prototype.controls.redo = {
  mode: ot,
  isDisabled: (n) => !n.history.canRedo(),
  tooltip: "Redo"
};
b.prototype.controls.undo = {
  mode: ot,
  isDisabled: (n) => !n.history.canUndo(),
  tooltip: "Undo"
};
class yu extends Y {
  constructor() {
    super(...arguments), this.buttons = [
      {
        name: "undo",
        group: "history"
      },
      {
        name: "redo",
        group: "history"
      }
    ];
  }
  beforeDestruct() {
  }
  afterInit(e) {
    const t = (i) => (e.history[i](), !1);
    e.registerCommand("redo", {
      exec: t,
      hotkeys: ["ctrl+y", "ctrl+shift+z", "cmd+y", "cmd+shift+z"]
    }), e.registerCommand("undo", {
      exec: t,
      hotkeys: ["ctrl+z", "cmd+z"]
    });
  }
}
H.add("redoUndo", yu);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.minWidth = 200;
b.prototype.maxWidth = "100%";
b.prototype.minHeight = 200;
b.prototype.maxHeight = "auto";
b.prototype.saveHeightInStorage = !1;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var vr = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
let Gt = class extends Y {
  constructor() {
    super(...arguments), this.__resizeWorkspaces = this.j.async.debounce(this.__resizeWorkspaceImd, this.j.defaultTimeout, !0);
  }
  afterInit(e) {
    e.e.on("setHeight.size", this.__setHeight).on("setWidth.size", this.__setWidth).on("afterInit.size changePlace.size", this.__initialize, {
      top: !0
    }).on(e.ow, "load.size", this.__resizeWorkspaces).on("afterInit.size resize.size afterUpdateToolbar.size scroll.size afterResize.size", this.__resizeWorkspaces).on("toggleFullSize.size toggleToolbar.size", this.__resizeWorkspaceImd), this.__initialize();
  }
  /**
   * Set editor size by options
   */
  __initialize() {
    const { j: e } = this;
    if (e.o.inline)
      return;
    let { height: t } = e.o;
    if (e.o.saveHeightInStorage && t !== "auto") {
      const i = e.storage.get("height");
      i && (t = i);
    }
    _(e.editor, {
      minHeight: "100%"
    }), _(e.container, {
      minHeight: e.o.minHeight,
      maxHeight: e.o.maxHeight,
      minWidth: e.o.minWidth,
      maxWidth: e.o.maxWidth
    }), e.isFullSize || (this.__setHeight(t), this.__setWidth(e.o.width));
  }
  /**
   * Manually change height
   */
  __setHeight(e) {
    const { clientHeight: t, clientWidth: i } = this.j.container;
    if (le(e)) {
      const { minHeight: r, maxHeight: o } = this.j.o;
      le(r) && r > e && (e = r), le(o) && o < e && (e = o);
    }
    _(this.j.container, "height", e), this.j.o.saveHeightInStorage && this.j.storage.set("height", e), this.__resizeWorkspaceImd({ clientHeight: t, clientWidth: i });
  }
  /**
   * Manually change width
   */
  __setWidth(e) {
    const { clientHeight: t, clientWidth: i } = this.j.container;
    if (le(e)) {
      const { minWidth: r, maxWidth: o } = this.j.o;
      le(r) && r > e && (e = r), le(o) && o < e && (e = o);
    }
    _(this.j.container, "width", e), this.__resizeWorkspaceImd({ clientHeight: t, clientWidth: i });
  }
  /**
   * Returns service spaces: toolbar + statusbar
   */
  __getNotWorkHeight() {
    var e, t;
    return (((e = this.j.toolbarContainer) === null || e === void 0 ? void 0 : e.offsetHeight) || 0) + (((t = this.j.statusbar) === null || t === void 0 ? void 0 : t.getHeight()) || 0) + 2;
  }
  /**
   * Calculate workspace height
   */
  __resizeWorkspaceImd({ clientHeight: e, clientWidth: t } = this.j.container) {
    if (!this.j || this.j.isDestructed || !this.j.o || this.j.o.inline || !this.j.container || !this.j.container.parentNode)
      return;
    const i = (_(this.j.container, "minHeight") || 0) - this.__getNotWorkHeight();
    if (le(i) && i > 0 && ([this.j.workplace, this.j.iframe, this.j.editor].map((s) => {
      s && _(s, "minHeight", i);
    }), this.j.e.fire("setMinHeight", i)), le(this.j.o.maxHeight)) {
      const s = this.j.o.maxHeight - this.__getNotWorkHeight();
      [this.j.workplace, this.j.iframe, this.j.editor].map((a) => {
        a && _(a, "maxHeight", s);
      }), this.j.e.fire("setMaxHeight", s);
    }
    this.j.container && _(this.j.workplace, "height", this.j.o.height !== "auto" || this.j.isFullSize ? this.j.container.offsetHeight - this.__getNotWorkHeight() : "auto");
    const { clientHeight: r, clientWidth: o } = this.j.container;
    (e !== r || t !== o) && this.j.e.fire(this.j, "resize");
  }
  /** @override **/
  beforeDestruct(e) {
    e.e.off(e.ow, "load.size", this.__resizeWorkspaces).off(".size");
  }
};
vr([
  ii()
], Gt.prototype, "__initialize", null);
vr([
  k
], Gt.prototype, "__resizeWorkspaceImd", null);
Gt = vr([
  k
], Gt);
H.add("size", Gt);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.showCharsCounter = !0;
b.prototype.countHTMLChars = !1;
b.prototype.countTextSpaces = !1;
b.prototype.showWordsCounter = !0;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
class _u extends Y {
  constructor() {
    super(...arguments), this.charCounter = null, this.wordCounter = null, this.reInit = () => {
      this.j.o.showCharsCounter && this.charCounter && this.j.statusbar.append(this.charCounter, !0), this.j.o.showWordsCounter && this.wordCounter && this.j.statusbar.append(this.wordCounter, !0), this.j.e.off("change keyup", this.calc).on("change keyup", this.calc), this.calc();
    }, this.calc = this.j.async.throttle(() => {
      const e = this.j.text;
      if (this.j.o.showCharsCounter && this.charCounter) {
        let t;
        this.j.o.countHTMLChars ? t = this.j.value : this.j.o.countTextSpaces ? t = e.replace(Vt(), "").replace(/[\r\n]/g, "") : t = e.replace(sn(), ""), this.charCounter.textContent = this.j.i18n("Chars: %d", t.length);
      }
      this.j.o.showWordsCounter && this.wordCounter && (this.wordCounter.textContent = this.j.i18n("Words: %d", e.replace(Vt(), "").split(sn()).filter((t) => t.length).length));
    }, this.j.defaultTimeout);
  }
  /** @override */
  afterInit() {
    this.charCounter = this.j.c.span(), this.wordCounter = this.j.c.span(), this.j.e.on("afterInit changePlace afterAddPlace", this.reInit), this.reInit();
  }
  /** @override */
  beforeDestruct() {
    l.safeRemove(this.charCounter), l.safeRemove(this.wordCounter), this.j.e.off("afterInit changePlace afterAddPlace", this.reInit), this.charCounter = null, this.wordCounter = null;
  }
}
H.add("stat", _u);
const Su = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/> </svg> `;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.table = {
  selectionCellStyle: "border: 1px double #1e88e5 !important;",
  useExtraClassesOptions: !1
};
x.set("table", Su);
b.prototype.controls.table = {
  data: {
    cols: 10,
    rows: 10,
    classList: {
      "table table-bordered": "Bootstrap Bordered",
      "table table-striped": "Bootstrap Striped",
      "table table-dark": "Bootstrap Dark"
    }
  },
  popup: (n, e, t, i) => {
    n.editor.normalize();
    const r = n.history.snapshot.make(), o = i.control, s = o.data && o.data.rows ? o.data.rows : 10, a = o.data && o.data.cols ? o.data.cols : 10, c = () => {
      if (!n.o.table.useExtraClassesOptions)
        return "";
      const I = [];
      if (o.data) {
        const A = o.data.classList;
        Object.keys(A).forEach((B) => {
          I.push(`<label class="jodit_vertical_middle"><input class="jodit-checkbox" value="${B}" type="checkbox"/>${A[B]}</label>`);
        });
      }
      return I.join("");
    }, d = n.c.fromHTML('<form class="jodit-form jodit-form__inserter"><div class="jodit-form__table-creator-box"><div class="jodit-form__container"></div><div class="jodit-form__options">' + c() + '</div></div><label class="jodit-form__center"><span>1</span> &times; <span>1</span></label></form>'), u = d.querySelectorAll("span")[0], h = d.querySelectorAll("span")[1], f = d.querySelector(".jodit-form__container"), p = d.querySelector(".jodit-form__options"), m = [], w = s * a;
    for (let I = 0; I < w; I += 1)
      m[I] || m.push(n.c.element("span", {
        dataIndex: I
      }));
    const C = (I, A) => {
      const B = I.target;
      if (!l.isTag(B, "span"))
        return;
      const ht = A === void 0 || isNaN(A) ? parseInt(g(B, "-index") || "0", 10) : A || 0, Le = Math.ceil((ht + 1) / a), G = ht % a + 1;
      for (let me = 0; me < m.length; me += 1)
        G >= me % a + 1 && Le >= Math.ceil((me + 1) / a) ? m[me].className = "jodit_hovered" : m[me].className = "";
      h.textContent = G.toString(), u.textContent = Le.toString();
    };
    if (n.e.on(f, "mousemove", C).on(f, "touchstart mousedown", (I) => {
      const A = I.target;
      if (I.preventDefault(), I.stopImmediatePropagation(), !l.isTag(A, "span"))
        return;
      const B = parseInt(g(A, "-index") || "0", 10), ht = Math.ceil((B + 1) / a), Le = B % a + 1, G = n.createInside, me = G.element("tbody"), He = G.element("table");
      He.appendChild(me);
      let W = null, Fe, Ue;
      for (let $ = 1; $ <= ht; $ += 1) {
        Fe = G.element("tr");
        for (let ft = 1; ft <= Le; ft += 1)
          Ue = G.element("td"), W || (W = Ue), _(Ue, "width", (100 / Le).toFixed(4) + "%"), Ue.appendChild(G.element("br")), Fe.appendChild(G.text(`
`)), Fe.appendChild(G.text("	")), Fe.appendChild(Ue);
        me.appendChild(G.text(`
`)), me.appendChild(Fe);
      }
      j("input[type=checkbox]:checked", p).forEach(($) => {
        $.value.split(/[\s]+/).forEach((ft) => {
          He.classList.add(ft);
        });
      }), n.s.restore(), n.s.removeMarkers(), n.editor.normalize(), n.history.snapshot.restore(r);
      const Ve = l.furthest(n.s.current(), l.isBlock, n.editor);
      if (Ve && l.isEmpty(Ve))
        l.replace(Ve, He, void 0, !1, !0);
      else if (Ve) {
        const $ = G.text(`
`);
        l.after(Ve, $), l.after($, He);
      } else
        n.s.insertNode(He, !1);
      W && (n.s.setCursorIn(W), zt(W, n.editor, n.ed)), t();
    }), i && i.parentElement) {
      for (let I = 0; I < s; I += 1) {
        const A = n.c.div();
        for (let B = 0; B < a; B += 1)
          A.appendChild(m[I * a + B]);
        f.appendChild(A);
      }
      m[0] && (m[0].className = "hovered");
    }
    return d;
  },
  tooltip: "Insert table"
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function Cu(n) {
  n.registerButton({
    name: "table",
    group: "insert"
  });
}
H.add("table", Cu);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.wrapNodes = {
  exclude: /* @__PURE__ */ new Set(["hr", "style", "br"]),
  emptyBlockAfterInit: !0
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var Os = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class br extends Y {
  constructor() {
    super(...arguments), this.isSuitableStart = (e) => {
      var t;
      return l.isText(e) && v(e.nodeValue) && (/[^\s]/.test(e.nodeValue) || ((t = e.parentNode) === null || t === void 0 ? void 0 : t.firstChild) === e && this.isSuitable(e.nextSibling)) || this.isNotWrapped(e) && !l.isTemporary(e);
    }, this.isSuitable = (e) => l.isText(e) || this.isNotWrapped(e), this.isNotWrapped = (e) => l.isElement(e) && !(l.isBlock(e) || l.isTag(e, this.j.o.wrapNodes.exclude));
  }
  /** @override **/
  afterInit(e) {
    e.o.enter.toLowerCase() !== "br" && e.e.on("drop.wtn focus.wtn keydown.wtn mousedown.wtn afterInit.wtn backSpaceAfterDelete.wtn", this.preprocessInput, {
      top: !0
    }).on("afterInit.wtn postProcessSetEditorValue.wtn afterCommitStyle.wtn backSpaceAfterDelete.wtn", this.postProcessSetEditorValue);
  }
  /** @override **/
  beforeDestruct(e) {
    e.e.off(".wtn");
  }
  /**
   * Process changed value
   */
  postProcessSetEditorValue() {
    const { jodit: e } = this;
    if (!e.isEditorMode())
      return;
    let t = e.editor.firstChild, i = !1;
    for (; t; ) {
      if (t = ku(t, e), this.isSuitableStart(t)) {
        i || e.s.save(), i = !0;
        const r = e.createInside.element(e.o.enter);
        for (l.before(t, r); t && this.isSuitable(t); ) {
          const o = t.nextSibling;
          r.appendChild(t), t = o;
        }
        r.normalize(), t = r;
      }
      t = t && t.nextSibling;
    }
    i && (e.s.restore(), e.e.current === "afterInit" && e.e.fire("internalChange"));
  }
  /**
   * Process input without parent box
   */
  preprocessInput() {
    const { jodit: e } = this, t = e.e.current === "afterInit";
    if (!e.isEditorMode() || e.editor.firstChild || !e.o.wrapNodes.emptyBlockAfterInit && t)
      return;
    const i = e.createInside.element(e.o.enter), r = e.createInside.element("br");
    l.append(i, r), l.append(e.editor, i), e.s.isFocused() && e.s.setCursorBefore(r), e.e.fire("internalChange");
  }
}
Os([
  k
], br.prototype, "postProcessSetEditorValue", null);
Os([
  k
], br.prototype, "preprocessInput", null);
function ku(n, e) {
  let t = n, i = n;
  do
    if (l.isElement(i) && l.isLeaf(i) && !l.isList(i.parentElement)) {
      const r = l.findNotEmptySibling(i, !1);
      l.isTag(t, "ul") ? t.appendChild(i) : t = l.wrap(i, "ul", e.createInside), i = r;
    } else
      break;
  while (i);
  return t;
}
H.add("wrapNodes", br);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
b.prototype.dtd = {
  removeExtraBr: !0,
  checkBlockNesting: !0,
  blockLimits: {
    article: 1,
    aside: 1,
    audio: 1,
    body: 1,
    caption: 1,
    details: 1,
    dir: 1,
    div: 1,
    dl: 1,
    fieldset: 1,
    figcaption: 1,
    figure: 1,
    footer: 1,
    form: 1,
    header: 1,
    hgroup: 1,
    main: 1,
    menu: 1,
    nav: 1,
    ol: 1,
    section: 1,
    table: 1,
    td: 1,
    th: 1,
    tr: 1,
    ul: 1,
    video: 1
  }
};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Iu = /* @__PURE__ */ new Set([
  "table",
  "pre",
  "blockquote",
  "code"
]);
function Eu(n, e) {
  if (!n.o.dtd.removeExtraBr || l.isTag(e, "br"))
    return;
  const t = l.furthest(e, l.isBlock, n.editor);
  if (t && !l.isTag(t, Iu)) {
    const i = l.isTag(e, "br") ? e : l.findNotEmptySibling(e, !1);
    if (!l.isTag(i, "br"))
      return;
    n.s.setCursorBefore(i), l.safeRemove(i);
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  removeExtraBr: Eu
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
function zu(n, e) {
  if (l.isFragment(e) && (e = e.firstChild), n.o.dtd.checkBlockNesting && l.isBlock(e)) {
    const t = l.furthest(n.s.current(), l.isBlock, n.editor);
    t && !n.o.dtd.blockLimits[t.tagName.toLowerCase()] && (n.s.setCursorAfter(t), l.isEmpty(t) && l.safeRemove(t));
  }
}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
const $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkBlockNesting: zu
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
var qs = function(n, e, t, i) {
  var r = arguments.length, o = r < 3 ? e : i === null ? i = Object.getOwnPropertyDescriptor(e, t) : i, s;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(n, e, t, i);
  else
    for (var a = n.length - 1; a >= 0; a--)
      (s = n[a]) && (o = (r < 3 ? s(o) : r > 3 ? s(e, t, o) : s(e, t)) || o);
  return r > 3 && o && Object.defineProperty(e, t, o), o;
};
class wr extends Y {
  afterInit(e) {
  }
  beforeDestruct(e) {
  }
  __onBeforeInsertNode(e) {
    Object.keys($r).forEach((i) => {
      $r[i](this.j, e);
    });
  }
  __onAfterInsertNode(e) {
    Object.keys(Wr).forEach((i) => {
      Wr[i](this.j, e);
    });
  }
}
qs([
  L(":beforeInsertNode")
], wr.prototype, "__onBeforeInsertNode", null);
qs([
  L(":afterInsertNode")
], wr.prototype, "__onAfterInsertNode", null);
H.add("dtd", wr);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2025 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */
Object.keys(an).forEach((n) => {
  q[n] = an[n];
});
const Gi = (n) => n !== "__esModule";
Object.keys(Hr).filter(Gi).forEach((n) => {
  x.set(n.replace("_", "-"), Hr[n]);
});
Object.keys(Rn).filter(Gi).forEach((n) => {
  var e;
  const t = Rn[n], i = y((e = t.prototype) === null || e === void 0 ? void 0 : e.className) ? t.prototype.className() : n;
  if (!v(i)) {
    console.warn("Module name must be a string", n);
    return;
  }
  q.modules[i] = t;
});
Object.keys(Er).filter(Gi).forEach((n) => {
  q.decorators[n] = Er[n];
});
["Confirm", "Alert", "Prompt"].forEach((n) => {
  q[n] = Rn[n];
});
Object.keys(Ur).filter(Gi).forEach((n) => {
  q.lang[n] = Ur[n];
});
function Tu(n) {
  const e = q.make("#editor1");
  console.log(e), console.log(n);
}
document.addEventListener("DOMContentLoaded", () => {
  Tu("#editor1");
});
