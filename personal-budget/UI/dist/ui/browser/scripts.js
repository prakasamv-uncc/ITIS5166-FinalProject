/*! jQuery v3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document)
      throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : this, function(ie, e) {
  "use strict";
  var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
    return oe.flat.call(e2);
  } : function(e2) {
    return oe.concat.apply([], e2);
  }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, y = function(e2) {
    return null != e2 && e2 === e2.window;
  }, m = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
  function b(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || m).createElement("script");
    if (o2.text = e2, t2)
      for (r2 in u)
        (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function x(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
  }
  var t = "3.7.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween", l = /HTML$/i, ce = function(e2, t2) {
    return new ce.fn.init(e2, t2);
  };
  function c(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
    return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  function fe(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
    return ae.call(this);
  }, get: function(e2) {
    return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = ce.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return ce.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(ce.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(ae.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++)
      if (null != (e2 = arguments[s2]))
        for (t2 in e2)
          r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2)
      return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    b(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (c(e2)) {
      for (n2 = e2.length; r2 < n2; r2++)
        if (false === t2.call(e2[r2], r2, e2[r2]))
          break;
    } else
      for (r2 in e2)
        if (false === t2.call(e2[r2], r2, e2[r2]))
          break;
    return e2;
  }, text: function(e2) {
    var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
    if (!i2)
      while (t2 = e2[r2++])
        n2 += ce.text(t2);
    return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : se.call(t2, e2, n2);
  }, isXMLDoc: function(e2) {
    var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
    return !l.test(t2 || n2 && n2.nodeName || "HTML");
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++)
      e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++)
      !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (c(e2))
      for (r2 = e2.length; o2 < r2; o2++)
        null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else
      for (o2 in e2)
        null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return g(a2);
  }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var de = oe.pop, pe = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function(e2, t2) {
    var n2 = t2 && t2.parentNode;
    return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function d(e2, t2) {
    return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
  }
  ce.escapeSelector = function(e2) {
    return (e2 + "").replace(f, d);
  };
  var ye = m, me = s;
  !function() {
    var e2, x2, w2, o2, a2, C2, r2, T2, p2, i2, E2 = me, k2 = ce.expando, S2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
      return e3 === t3 && (a2 = true), 0;
    }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", d2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + d2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), b2 = new RegExp(ge + "|>"), A2 = new RegExp(g2), D2 = new RegExp("^" + t2 + "$"), N2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + d2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, L2 = /^(?:input|select|textarea|button)$/i, j2 = /^h\d$/i, O2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, P2 = /[+~]/, H2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), q2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, R2 = function() {
      V2();
    }, M2 = K2(function(e3) {
      return true === e3.disabled && fe(e3, "fieldset");
    }, { dir: "parentNode", next: "legend" });
    try {
      E2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e3) {
      E2 = { apply: function(e4, t3) {
        me.apply(e4, ae.call(t3));
      }, call: function(e4) {
        me.apply(e4, ae.call(arguments, 1));
      } };
    }
    function I2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, d3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== d3 && 9 !== d3 && 11 !== d3)
        return n3;
      if (!r3 && (V2(e3), e3 = e3 || C2, T2)) {
        if (11 !== d3 && (u3 = O2.exec(t3)))
          if (i3 = u3[1]) {
            if (9 === d3) {
              if (!(a3 = e3.getElementById(i3)))
                return n3;
              if (a3.id === i3)
                return E2.call(n3, a3), n3;
            } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3)
              return E2.call(n3, a3), n3;
          } else {
            if (u3[2])
              return E2.apply(n3, e3.getElementsByTagName(t3)), n3;
            if ((i3 = u3[3]) && e3.getElementsByClassName)
              return E2.apply(n3, e3.getElementsByClassName(i3)), n3;
          }
        if (!(h2[t3 + " "] || p2 && p2.test(t3))) {
          if (c3 = t3, f3 = e3, 1 === d3 && (b2.test(t3) || m2.test(t3))) {
            (f3 = P2.test(t3) && X2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = k2)), o3 = (l3 = Y2(t3)).length;
            while (o3--)
              l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + G2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            return E2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            h2(t3, true);
          } finally {
            s3 === k2 && e3.removeAttribute("id");
          }
        }
      }
      return re2(t3.replace(ve, "$1"), e3, n3, r3);
    }
    function W2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > x2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function B2(e3) {
      return e3[k2] = true, e3;
    }
    function F2(e3) {
      var t3 = C2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function $2(t3) {
      return function(e3) {
        return fe(e3, "input") && e3.type === t3;
      };
    }
    function _2(t3) {
      return function(e3) {
        return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
      };
    }
    function z2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && M2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function U2(a3) {
      return B2(function(o3) {
        return o3 = +o3, B2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--)
            e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function X2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    function V2(e3) {
      var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
      return n3 != C2 && 9 === n3.nodeType && n3.documentElement && (r2 = (C2 = n3).documentElement, T2 = !ce.isXMLDoc(C2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != C2 && (t3 = C2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", R2), le.getById = F2(function(e4) {
        return r2.appendChild(e4).id = ce.expando, !C2.getElementsByName || !C2.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = F2(function(e4) {
        return i2.call(e4, "*");
      }), le.scope = F2(function() {
        return C2.querySelectorAll(":scope");
      }), le.cssHas = F2(function() {
        try {
          return C2.querySelector(":has(*,:jqfake)"), false;
        } catch (e4) {
          return true;
        }
      }), le.getById ? (x2.filter.ID = function(e4) {
        var t4 = e4.replace(H2, q2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, x2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && T2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (x2.filter.ID = function(e4) {
        var n4 = e4.replace(H2, q2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, x2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && T2) {
          var n4, r3, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
              return [o3];
            i3 = t4.getElementsByName(e4), r3 = 0;
            while (o3 = i3[r3++])
              if ((n4 = o3.getAttributeNode("id")) && n4.value === e4)
                return [o3];
          }
          return [];
        }
      }), x2.find.TAG = function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
      }, x2.find.CLASS = function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && T2)
          return t4.getElementsByClassName(e4);
      }, p2 = [], F2(function(e4) {
        var t4;
        r2.appendChild(e4).innerHTML = "<a id='" + k2 + "' href='' disabled='disabled'></a><select id='" + k2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || p2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + k2 + "-]").length || p2.push("~="), e4.querySelectorAll("a#" + k2 + "+*").length || p2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || p2.push(":checked"), (t4 = C2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && p2.push(":enabled", ":disabled"), (t4 = C2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || p2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
      }), le.cssHas || p2.push(":has"), p2 = p2.length && new RegExp(p2.join("|")), l2 = function(e4, t4) {
        if (e4 === t4)
          return a2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === C2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === C2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
      }), C2;
    }
    for (e2 in I2.matches = function(e3, t3) {
      return I2(e3, null, null, t3);
    }, I2.matchesSelector = function(e3, t3) {
      if (V2(e3), T2 && !h2[t3 + " "] && (!p2 || !p2.test(t3)))
        try {
          var n3 = i2.call(e3, t3);
          if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType)
            return n3;
        } catch (e4) {
          h2(t3, true);
        }
      return 0 < I2(t3, C2, null, [e3]).length;
    }, I2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != C2 && V2(e3), ce.contains(e3, t3);
    }, I2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != C2 && V2(e3);
      var n3 = x2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(x2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !T2) : void 0;
      return void 0 !== r3 ? r3 : e3.getAttribute(t3);
    }, I2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, ce.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), pe.call(e3, l2), a2) {
        while (t3 = e3[i3++])
          t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--)
          he.call(e3, n3[r3], 1);
      }
      return o2 = null, e3;
    }, ce.fn.uniqueSort = function() {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (x2 = ce.expr = { cacheLength: 50, createPseudo: B2, match: N2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(H2, q2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(H2, q2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return N2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && A2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(H2, q2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return fe(e4, t3);
      };
    }, CLASS: function(e3) {
      var t3 = s2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = I2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(p3, e3, t3, h3, g3) {
      var v3 = "nth" !== p3.slice(0, 3), y3 = "last" !== p3.slice(-4), m3 = "of-type" === e3;
      return 1 === h3 && 0 === g3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, d3 = false;
        if (l3) {
          if (v3) {
            while (u3) {
              o3 = e4;
              while (o3 = o3[u3])
                if (m3 ? fe(o3, c3) : 1 === o3.nodeType)
                  return false;
              s3 = u3 = "only" === p3 && !s3 && "nextSibling";
            }
            return true;
          }
          if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
            d3 = (a3 = (r3 = (i3 = l3[k2] || (l3[k2] = {}))[p3] || [])[0] === S2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
            while (o3 = ++a3 && o3 && o3[u3] || (d3 = a3 = 0) || s3.pop())
              if (1 === o3.nodeType && ++d3 && o3 === e4) {
                i3[p3] = [S2, a3, d3];
                break;
              }
          } else if (f3 && (d3 = a3 = (r3 = (i3 = e4[k2] || (e4[k2] = {}))[p3] || [])[0] === S2 && r3[1]), false === d3) {
            while (o3 = ++a3 && o3 && o3[u3] || (d3 = a3 = 0) || s3.pop())
              if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++d3 && (f3 && ((i3 = o3[k2] || (o3[k2] = {}))[p3] = [S2, d3]), o3 === e4))
                break;
          }
          return (d3 -= g3) === h3 || d3 % h3 == 0 && 0 <= d3 / h3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = x2.pseudos[e3] || x2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
      return a3[k2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], x2.setFilters.hasOwnProperty(e3.toLowerCase()) ? B2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--)
          e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: B2(function(e3) {
      var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
      return s3[k2] ? B2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--)
          (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: B2(function(t3) {
      return function(e3) {
        return 0 < I2(t3, e3).length;
      };
    }), contains: B2(function(t3) {
      return t3 = t3.replace(H2, q2), function(e3) {
        return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
      };
    }), lang: B2(function(n3) {
      return D2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(H2, q2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = T2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang"))
            return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = ie.location && ie.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === r2;
    }, focus: function(e3) {
      return e3 === function() {
        try {
          return C2.activeElement;
        } catch (e4) {
        }
      }() && C2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
      return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling)
        if (e3.nodeType < 6)
          return false;
      return true;
    }, parent: function(e3) {
      return !x2.pseudos.empty(e3);
    }, header: function(e3) {
      return j2.test(e3.nodeName);
    }, input: function(e3) {
      return L2.test(e3.nodeName);
    }, button: function(e3) {
      return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
    }, text: function(e3) {
      var t3;
      return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: U2(function() {
      return [0];
    }), last: U2(function(e3, t3) {
      return [t3 - 1];
    }), eq: U2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: U2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2)
        e3.push(n3);
      return e3;
    }), odd: U2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2)
        e3.push(n3);
      return e3;
    }), lt: U2(function(e3, t3, n3) {
      var r3;
      for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; )
        e3.push(r3);
      return e3;
    }), gt: U2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; )
        e3.push(r3);
      return e3;
    }) } }).pseudos.nth = x2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true })
      x2.pseudos[e2] = $2(e2);
    for (e2 in { submit: true, reset: true })
      x2.pseudos[e2] = _2(e2);
    function Q2() {
    }
    function Y2(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
      if (l3)
        return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = x2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), x2.filter)
          !(r3 = N2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3)
          break;
      }
      return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
    }
    function G2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++)
        r3 += e3[t3].value;
      return r3;
    }
    function K2(a3, e3, t3) {
      var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[s3])
          if (1 === e4.nodeType || c3)
            return a3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3 = [S2, f3];
        if (n3) {
          while (e4 = e4[s3])
            if ((1 === e4.nodeType || c3) && a3(e4, t4, n3))
              return true;
        } else
          while (e4 = e4[s3])
            if (1 === e4.nodeType || c3)
              if (i3 = e4[k2] || (e4[k2] = {}), u3 && fe(e4, u3))
                e4 = e4[s3] || e4;
              else {
                if ((r3 = i3[l3]) && r3[0] === S2 && r3[1] === f3)
                  return o3[2] = r3[2];
                if ((i3[l3] = o3)[2] = a3(e4, t4, n3))
                  return true;
              }
        return false;
      };
    }
    function J2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--)
          if (!i3[r3](e3, t3, n3))
            return false;
        return true;
      } : i3[0];
    }
    function Z2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++)
        (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function ee2(p3, h3, g3, v3, y3, e3) {
      return v3 && !v3[k2] && (v3 = ee2(v3)), y3 && !y3[k2] && (y3 = ee2(y3, e3)), B2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++)
            I2(e5, t4[r4], n4);
          return n4;
        }(h3 || "*", n3.nodeType ? [n3] : n3, []), d3 = !p3 || !e4 && h3 ? f3 : Z2(f3, u3, p3, n3, r3);
        if (g3 ? g3(d3, s3 = y3 || (e4 ? p3 : c3 || v3) ? [] : t3, n3, r3) : s3 = d3, v3) {
          i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--)
            (a3 = i3[o3]) && (s3[l3[o3]] = !(d3[l3[o3]] = a3));
        }
        if (e4) {
          if (y3 || p3) {
            if (y3) {
              i3 = [], o3 = s3.length;
              while (o3--)
                (a3 = s3[o3]) && i3.push(d3[o3] = a3);
              y3(null, s3 = [], i3, r3);
            }
            o3 = s3.length;
            while (o3--)
              (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else
          s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : E2.apply(t3, s3);
      });
    }
    function te2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = x2.relative[e3[0].type], a3 = o3 || x2.relative[" "], s3 = o3 ? 1 : 0, u3 = K2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = K2(function(e4) {
        return -1 < se.call(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++)
        if (t3 = x2.relative[e3[s3].type])
          c3 = [K2(J2(c3), t3)];
        else {
          if ((t3 = x2.filter[e3[s3].type].apply(null, e3[s3].matches))[k2]) {
            for (n3 = ++s3; n3 < r3; n3++)
              if (x2.relative[e3[n3].type])
                break;
            return ee2(1 < s3 && J2(c3), 1 < s3 && G2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && G2(e3));
          }
          c3.push(t3);
        }
      return J2(c3);
    }
    function ne2(e3, t3) {
      var n3, v3, y3, m3, b3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
      if (!a3) {
        t3 || (t3 = Y2(e3)), n3 = t3.length;
        while (n3--)
          (a3 = te2(t3[n3]))[k2] ? i3.push(a3) : o3.push(a3);
        (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, b3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], d3 = w2, p3 = e4 || b3 && x2.find.TAG("*", i4), h3 = S2 += null == d3 ? 1 : Math.random() || 0.1, g3 = p3.length;
          for (i4 && (w2 = t4 == C2 || t4 || i4); l3 !== g3 && null != (o4 = p3[l3]); l3++) {
            if (b3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == C2 || (V2(o4), n4 = !T2);
              while (s3 = v3[a4++])
                if (s3(o4, t4 || C2, n4)) {
                  E2.call(r4, o4);
                  break;
                }
              i4 && (S2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++])
              s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3)
                while (l3--)
                  c3[l3] || f3[l3] || (f3[l3] = de.call(r4));
              f3 = Z2(f3);
            }
            E2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
          }
          return i4 && (S2 = h3, w2 = d3), c3;
        }, m3 ? B2(r3) : r3))).selector = e3;
      }
      return a3;
    }
    function re2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && T2 && x2.relative[o3[1].type]) {
          if (!(t3 = (x2.find.ID(a3.matches[0].replace(H2, q2), t3) || [])[0]))
            return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = N2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], x2.relative[s3 = a3.type])
            break;
          if ((u3 = x2.find[s3]) && (r3 = u3(a3.matches[0].replace(H2, q2), P2.test(o3[0].type) && X2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && G2(o3)))
              return E2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || ne2(e3, c3))(r3, t3, !T2, n3, !t3 || P2.test(e3) && X2(t3.parentNode) || t3), n3;
    }
    Q2.prototype = x2.filters = x2.pseudos, x2.setFilters = new Q2(), le.sortStable = k2.split("").sort(l2).join("") === k2, V2(), le.sortDetached = F2(function(e3) {
      return 1 & e3.compareDocumentPosition(C2.createElement("fieldset"));
    }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
  }();
  var p = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType)
      if (1 === e2.nodeType) {
        if (i2 && ce(e2).is(n2))
          break;
        r2.push(e2);
      }
    return r2;
  }, h = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling)
      1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, w = ce.expr.match.needsContext, C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e2, n2, r2) {
    return v(n2) ? ce.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? ce.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
      return -1 < se.call(n2, e3) !== r2;
    }) : ce.filter(n2, e2, r2);
  }
  ce.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, ce.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2)
      return this.pushStack(ce(e2).filter(function() {
        for (t2 = 0; t2 < r2; t2++)
          if (ce.contains(i2[t2], this))
            return true;
      }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++)
      ce.find(e2, i2[t2], n2);
    return 1 < r2 ? ce.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(T(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(T(this, e2 || [], true));
  }, is: function(e2) {
    return !!T(this, "string" == typeof e2 && w.test(e2) ? ce(e2) : e2 || [], false).length;
  } });
  var E, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2)
      return this;
    if (n2 = n2 || E, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : k.exec(e2)) || !r2[1] && t2)
        return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : m, true)), C.test(r2[1]) && ce.isPlainObject(t2))
          for (r2 in t2)
            v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = m.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
  }).prototype = ce.fn, E = ce(m);
  var S = /^(?:parents|prev(?:Until|All))/, A = { children: true, contents: true, next: true, prev: true };
  function D(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType)
      ;
    return e2;
  }
  ce.fn.extend({ has: function(e2) {
    var t2 = ce(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++)
        if (ce.contains(this, t2[e3]))
          return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
    if (!w.test(e2)) {
      for (; r2 < i2; r2++)
        for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode)
          if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
            o2.push(n2);
            break;
          }
    }
    return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), ce.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return p(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return p(e2, "parentNode", n2);
  }, next: function(e2) {
    return D(e2, "nextSibling");
  }, prev: function(e2) {
    return D(e2, "previousSibling");
  }, nextAll: function(e2) {
    return p(e2, "nextSibling");
  }, prevAll: function(e2) {
    return p(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return p(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return p(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return h((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return h(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
  } }, function(r2, i2) {
    ce.fn[r2] = function(e2, t2) {
      var n2 = ce.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (A[r2] || ce.uniqueSort(n2), S.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var N = /[^\x20\t\r\n\f]+/g;
  function L(e2) {
    return e2;
  }
  function j(e2) {
    throw e2;
  }
  function O(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  ce.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(N) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : ce.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length)
          false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
        ce.each(e3, function(e4, t3) {
          v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
        });
      }(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return ce.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = ce.inArray(t3, s2, n3)))
          s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, ce.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return ce.Deferred(function(r2) {
        ce.each(o2, function(e3, t2) {
          var n2 = v(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise())
                throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, L, s3), l2(u2, o3, j, s3)) : (u2++, t4.call(e4, l2(u2, o3, L, s3), l2(u2, o3, j, s3), l2(u2, o3, L, o3.notifyWith))) : (a3 !== L && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== j && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
        };
      }
      return ce.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, v(r2) ? r2 : L, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : L)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : j));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? ce.extend(e3, a2) : a2;
    } }, s2 = {};
    return ce.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (O(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then)))
      return o2.then();
    while (t2--)
      O(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function(e2, t2) {
    ie.console && ie.console.warn && e2 && P.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, ce.readyException = function(e2) {
    ie.setTimeout(function() {
      throw e2;
    });
  };
  var H = ce.Deferred();
  function q() {
    m.removeEventListener("DOMContentLoaded", q), ie.removeEventListener("load", q), ce.ready();
  }
  ce.fn.ready = function(e2) {
    return H.then(e2)["catch"](function(e3) {
      ce.readyException(e3);
    }), this;
  }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || H.resolveWith(m, [ce]);
  } }), ce.ready.then = H.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? ie.setTimeout(ce.ready) : (m.addEventListener("DOMContentLoaded", q), ie.addEventListener("load", q));
  var R = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === x(n2))
      for (s2 in i2 = true, n2)
        R(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(ce(e3), n3);
    })), t2))
      for (; s2 < u2; s2++)
        t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, M = /^-ms-/, I = /-([a-z])/g;
  function W(e2, t2) {
    return t2.toUpperCase();
  }
  function B(e2) {
    return e2.replace(M, "ms-").replace(I, W);
  }
  var F = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function $() {
    this.expando = ce.expando + $.uid++;
  }
  $.uid = 1, $.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, F(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2)
      i2[B(t2)] = n2;
    else
      for (r2 in t2)
        i2[B(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][B(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(B) : (t2 = B(t2)) in r2 ? [t2] : t2.match(N) || []).length;
        while (n2--)
          delete r2[t2[n2]];
      }
      (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !ce.isEmptyObject(t2);
  } };
  var _ = new $(), z = new $(), U = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, X = /[A-Z]/g;
  function V(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType)
      if (r2 = "data-" + t2.replace(X, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
        try {
          n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : U.test(i2) ? JSON.parse(i2) : i2);
        } catch (e3) {
        }
        z.set(e2, t2, n2);
      } else
        n2 = void 0;
    return n2;
  }
  ce.extend({ hasData: function(e2) {
    return z.hasData(e2) || _.hasData(e2);
  }, data: function(e2, t2, n2) {
    return z.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    z.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return _.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    _.remove(e2, t2);
  } }), ce.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--)
          a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = B(r2.slice(5)), V(o2, r2, i2[r2]));
        _.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      z.set(this, n2);
    }) : R(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3)
        return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
      this.each(function() {
        z.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      z.remove(this, e2);
    });
  } }), ce.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2)
      return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      ce.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
      _.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), ce.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = ce.queue(this, t2, n2);
      ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      ce.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--)
      (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), G = ["Top", "Right", "Bottom", "Left"], K = m.documentElement, J = function(e2) {
    return ce.contains(e2.ownerDocument, e2);
  }, Z = { composed: true };
  K.getRootNode && (J = function(e2) {
    return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
  });
  var ee = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && J(e2) && "none" === ce.css(e2, "display");
  };
  var te = {};
  function ne(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++)
      (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = te[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), te[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++)
      null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  ce.fn.extend({ show: function() {
    return ne(this, true);
  }, hide: function() {
    return ne(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ee(this) ? ce(this).show() : ce(this).hide();
    });
  } });
  var re, be, xe = /^(?:checkbox|radio)$/i, we = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
  re = m.createDocumentFragment().appendChild(m.createElement("div")), (be = m.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), re.appendChild(be), le.checkClone = re.cloneNode(true).cloneNode(true).lastChild.checked, re.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!re.cloneNode(true).lastChild.defaultValue, re.innerHTML = "<option></option>", le.option = !!re.lastChild;
  var Te = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function Ee(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
  }
  function ke(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++)
      _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
  }
  Te.tbody = Te.tfoot = Te.colgroup = Te.caption = Te.thead, Te.th = Te.td, le.option || (Te.optgroup = Te.option = [1, "<select multiple='multiple'>", "</select>"]);
  var Se = /<|&#?\w+;/;
  function Ae(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), d2 = [], p2 = 0, h2 = e2.length; p2 < h2; p2++)
      if ((o2 = e2[p2]) || 0 === o2)
        if ("object" === x(o2))
          ce.merge(d2, o2.nodeType ? [o2] : o2);
        else if (Se.test(o2)) {
          a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (we.exec(o2) || ["", ""])[1].toLowerCase(), u2 = Te[s2] || Te._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
          while (c2--)
            a2 = a2.lastChild;
          ce.merge(d2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
        } else
          d2.push(t2.createTextNode(o2));
    f2.textContent = "", p2 = 0;
    while (o2 = d2[p2++])
      if (r2 && -1 < ce.inArray(o2, r2))
        i2 && i2.push(o2);
      else if (l2 = J(o2), a2 = Ee(f2.appendChild(o2), "script"), l2 && ke(a2), n2) {
        c2 = 0;
        while (o2 = a2[c2++])
          Ce.test(o2.type || "") && n2.push(o2);
      }
    return f2;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return true;
  }
  function Le() {
    return false;
  }
  function je(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2)
        je(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2)
      i2 = Le;
    else if (!i2)
      return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return ce().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
      ce.event.add(this, t2, i2, r2, n2);
    });
  }
  function Oe(e2, r2, t2) {
    t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
      var t3, n2 = _.get(this, r2);
      if (1 & e3.isTrigger && this[r2]) {
        if (n2)
          (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
        else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3)
          return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
      } else
        n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
    } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
  }
  ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, d2, p2, h2, g2, v2 = _.get(t2);
    if (F(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(K, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(N) || [""]).length;
      while (l2--)
        p2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), p2 && (f2 = ce.event.special[p2] || {}, p2 = (i2 ? f2.delegateType : f2.bindType) || p2, f2 = ce.event.special[p2] || {}, c2 = ce.extend({ type: p2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (d2 = u2[p2]) || ((d2 = u2[p2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(p2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? d2.splice(d2.delegateCount++, 0, c2) : d2.push(c2), ce.event.global[p2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, d2, p2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(N) || [""]).length;
      while (l2--)
        if (p2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), p2) {
          f2 = ce.event.special[p2] || {}, d2 = u2[p2 = (r2 ? f2.delegateType : f2.bindType) || p2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = d2.length;
          while (o2--)
            c2 = d2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (d2.splice(o2, 1), c2.selector && d2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
          a2 && !d2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, p2, v2.handle), delete u2[p2]);
        } else
          for (p2 in u2)
            ce.event.remove(e2, p2 + t2[l2], n2, r2, true);
      ce.isEmptyObject(u2) && _.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++)
      s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped())
          u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this)
        if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
          for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++)
            void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
          o2.length && s2.push({ elem: l2, handlers: o2 });
        }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
      if (this.originalEvent)
        return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent)
        return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[ce.expando] ? e2 : new ce.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return xe.test(t2.type) && t2.click && fe(t2, "input") && Oe(t2, "click", true), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return xe.test(t2.type) && t2.click && fe(t2, "input") && Oe(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return xe.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, ce.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, ce.Event = function(e2, t2) {
    if (!(this instanceof ce.Event))
      return new ce.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : Le, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
  }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: Le, isPropagationStopped: Le, isImmediatePropagationStopped: Le, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
    function o2(e2) {
      if (m.documentMode) {
        var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
        n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
      } else
        ce.event.simulate(i2, e2.target, ce.event.fix(e2));
    }
    ce.event.special[r2] = { setup: function() {
      var e2;
      if (Oe(this, r2, true), !m.documentMode)
        return false;
      (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
    }, trigger: function() {
      return Oe(this, r2), true;
    }, teardown: function() {
      var e2;
      if (!m.documentMode)
        return false;
      (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
    }, _default: function(e2) {
      return _.get(e2.target, r2);
    }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = m.documentMode ? this : e2, n2 = _.get(t2, i2);
      n2 || (m.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = m.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
      n2 ? _.set(t2, i2, n2) : (m.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
    } };
  }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
    return je(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return je(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj)
      return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2)
        this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = Le), this.each(function() {
      ce.event.remove(this, e2, n2, t2);
    });
  } });
  var Pe = /<script|<style|<link/i, He = /checked\s*(?:[^=]|=\s*.checked.)/i, qe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e2, t2) {
    return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
  }
  function Me(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function Ie(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function We(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (_.hasData(e2) && (s2 = _.get(e2).events))
        for (i2 in _.remove(t2, "handle events"), s2)
          for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++)
            ce.event.add(t2, i2, s2[i2][n2]);
      z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
    }
  }
  function Be(n2, r2, i2, o2) {
    r2 = g(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, d2 = f2 - 1, p2 = r2[0], h2 = v(p2);
    if (h2 || 1 < f2 && "string" == typeof p2 && !le.checkClone && He.test(p2))
      return n2.each(function(e3) {
        var t3 = n2.eq(e3);
        h2 && (r2[0] = p2.call(this, e3, t3.html())), Be(t3, r2, i2, o2);
      });
    if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = ce.map(Ee(e2, "script"), Me)).length; c2 < f2; c2++)
        u2 = e2, c2 !== d2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Ee(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2)
        for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, Ie), c2 = 0; c2 < s2; c2++)
          u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : b(u2.textContent.replace(qe, ""), u2, l2));
    }
    return n2;
  }
  function Fe(e2, t2, n2) {
    for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++)
      n2 || 1 !== r2.nodeType || ce.cleanData(Ee(r2)), r2.parentNode && (n2 && J(r2) && ke(Ee(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  ce.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = J(e2);
    if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2)))
      for (a2 = Ee(c2), r2 = 0, i2 = (o2 = Ee(e2)).length; r2 < i2; r2++)
        s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && xe.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2)
      if (n2)
        for (o2 = o2 || Ee(e2), a2 = a2 || Ee(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++)
          We(o2[r2], a2[r2]);
      else
        We(e2, c2);
    return 0 < (a2 = Ee(c2, "script")).length && ke(a2, !f2 && Ee(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++)
      if (F(n2)) {
        if (t2 = n2[_.expando]) {
          if (t2.events)
            for (r2 in t2.events)
              i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
          n2[_.expando] = void 0;
        }
        n2[z.expando] && (n2[z.expando] = void 0);
      }
  } }), ce.fn.extend({ detach: function(e2) {
    return Fe(this, e2, true);
  }, remove: function(e2) {
    return Fe(this, e2);
  }, text: function(e2) {
    return R(this, function(e3) {
      return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return Be(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return Be(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = Re(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return Be(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return Be(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++)
      1 === e2.nodeType && (ce.cleanData(Ee(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return ce.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return R(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType)
        return t2.innerHTML;
      if ("string" == typeof e3 && !Pe.test(e3) && !Te[(we.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = ce.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++)
            1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Ee(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return Be(this, arguments, function(e2) {
      var t2 = this.parentNode;
      ce.inArray(this, n2) < 0 && (ce.cleanData(Ee(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    ce.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++)
        t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var $e = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), _e = /^--/, ze = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
  }, Ue = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2)
      o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2)
      e2.style[i2] = o2[i2];
    return r2;
  }, Xe = new RegExp(G.join("|"), "i");
  function Ve(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = _e.test(t2), u2 = e2.style;
    return (n2 = n2 || ze(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || J(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && $e.test(a2) && Xe.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function Qe(e2, t2) {
    return { get: function() {
      if (!e2())
        return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", K.appendChild(u2).appendChild(l2);
        var e3 = ie.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), K.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = m.createElement("div"), l2 = m.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = m.createElement("table"), t3 = m.createElement("tr"), n3 = m.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", K.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, K.removeChild(e3)), a2;
    } }));
  }();
  var Ye = ["Webkit", "Moz", "ms"], Ge = m.createElement("div").style, Ke = {};
  function Je(e2) {
    var t2 = ce.cssProps[e2] || Ke[e2];
    return t2 || (e2 in Ge ? e2 : Ke[e2] = function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Ye.length;
      while (n2--)
        if ((e3 = Ye[n2] + t3) in Ge)
          return e3;
    }(e2) || e2);
  }
  var Ze, et, tt = /^(none|table(?!-c[ea]).+)/, nt = { position: "absolute", visibility: "hidden", display: "block" }, rt = { letterSpacing: "0", fontWeight: "400" };
  function it(e2, t2, n2) {
    var r2 = Y.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function ot(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
    if (n2 === (r2 ? "border" : "content"))
      return 0;
    for (; a2 < 4; a2 += 2)
      "margin" === n2 && (l2 += ce.css(e2, n2 + G[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + G[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + G[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + G[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + G[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + G[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
  }
  function at(e2, t2, n2) {
    var r2 = ze(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ve(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if ($e.test(a2)) {
      if (!n2)
        return a2;
      a2 = "auto";
    }
    return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + ot(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Ve(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = B(t2), u2 = _e.test(t2), l2 = e2.style;
      if (u2 || (t2 = Je(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2)
        return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = function(e3, t3, n3, r3) {
        var i3, o3, a3 = 20, s3 = r3 ? function() {
          return r3.cur();
        } : function() {
          return ce.css(e3, t3, "");
        }, u3 = s3(), l3 = n3 && n3[3] || (ce.cssNumber[t3] ? "" : "px"), c2 = e3.nodeType && (ce.cssNumber[t3] || "px" !== l3 && +u3) && Y.exec(ce.css(e3, t3));
        if (c2 && c2[3] !== l3) {
          u3 /= 2, l3 = l3 || c2[3], c2 = +u3 || 1;
          while (a3--)
            ce.style(e3, t3, c2 + l3), (1 - o3) * (1 - (o3 = s3() / u3 || 0.5)) <= 0 && (a3 = 0), c2 /= o3;
          c2 *= 2, ce.style(e3, t3, c2 + l3), n3 = n3 || [];
        }
        return n3 && (c2 = +c2 || +u3 || 0, i3 = n3[1] ? c2 + (n3[1] + 1) * n3[2] : +n3[2], r3 && (r3.unit = l3, r3.start = c2, r3.end = i3)), i3;
      }(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = B(t2);
    return _e.test(t2) || (t2 = Je(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ve(e2, t2, r2)), "normal" === i2 && t2 in rt && (i2 = rt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), ce.each(["height", "width"], function(e2, u2) {
    ce.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2)
        return !tt.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? at(e3, u2, n2) : Ue(e3, nt, function() {
          return at(e3, u2, n2);
        });
    }, set: function(e3, t2, n2) {
      var r2, i2 = ze(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? ot(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - ot(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), it(0, t2, s2);
    } };
  }), ce.cssHooks.marginLeft = Qe(le.reliableMarginLeft, function(e2, t2) {
    if (t2)
      return (parseFloat(Ve(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
        return e2.getBoundingClientRect().left;
      })) + "px";
  }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    ce.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++)
        n2[i2 + G[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = it);
  }), ce.fn.extend({ css: function(e2, t2) {
    return R(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = ze(e3), i2 = t3.length; a2 < i2; a2++)
          o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), ce.fn.delay = function(r2, e2) {
    return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = ie.setTimeout(e3, r2);
      t2.stop = function() {
        ie.clearTimeout(n2);
      };
    });
  }, Ze = m.createElement("input"), et = m.createElement("select").appendChild(m.createElement("option")), Ze.type = "checkbox", le.checkOn = "" !== Ze.value, le.optSelected = et.selected, (Ze = m.createElement("input")).value = "t", Ze.type = "radio", le.radioValue = "t" === Ze.value;
  var st, ut = ce.expr.attrHandle;
  ce.fn.extend({ attr: function(e2, t2) {
    return R(this, ce.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      ce.removeAttr(this, e2);
    });
  } }), ce.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2)
      return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? st : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(N);
    if (i2 && 1 === e2.nodeType)
      while (n2 = i2[r2++])
        e2.removeAttribute(n2);
  } }), st = { set: function(e2, t2, n2) {
    return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var a2 = ut[t2] || ce.find.attr;
    ut[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = ut[o2], ut[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, ut[o2] = i2), r2;
    };
  });
  var lt = /^(?:input|select|textarea|button)$/i, ct = /^(?:a|area)$/i;
  function ft(e2) {
    return (e2.match(N) || []).join(" ");
  }
  function dt(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function pt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(N) || [];
  }
  ce.fn.extend({ prop: function(e2, t2) {
    return R(this, ce.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[ce.propFix[e2] || e2];
    });
  } }), ce.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2)
      return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = ce.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : lt.test(e2.nodeName) || ct.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).addClass(t2.call(this, e3, dt(this)));
    }) : (e2 = pt(t2)).length ? this.each(function() {
      if (r2 = dt(this), n2 = 1 === this.nodeType && " " + ft(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++)
          i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
        a2 = ft(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).removeClass(t2.call(this, e3, dt(this)));
    }) : arguments.length ? (e2 = pt(t2)).length ? this.each(function() {
      if (r2 = dt(this), n2 = 1 === this.nodeType && " " + ft(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) {
          i2 = e2[o2];
          while (-1 < n2.indexOf(" " + i2 + " "))
            n2 = n2.replace(" " + i2 + " ", " ");
        }
        a2 = ft(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function(t2, n2) {
    var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
    return v(t2) ? this.each(function(e3) {
      ce(this).toggleClass(t2.call(this, e3, dt(this), n2), n2);
    }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = pt(t2), this.each(function() {
      if (s2)
        for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++)
          r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
      else
        void 0 !== t2 && "boolean" !== a2 || ((r2 = dt(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
    }));
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++])
      if (1 === n2.nodeType && -1 < (" " + ft(dt(n2)) + " ").indexOf(t2))
        return true;
    return false;
  } });
  var ht = /\r/g;
  ce.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = v(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(ht, "") : null == e2 ? "" : e2 : void 0;
  } }), ce.extend({ valHooks: { option: { get: function(e2) {
    var t2 = ce.find.attr(e2, "value");
    return null != t2 ? t2 : ft(ce.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++)
      if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
        if (t2 = ce(n2).val(), a2)
          return t2;
        s2.push(t2);
      }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
    while (a2--)
      ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), ce.each(["radio", "checkbox"], function() {
    ce.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2))
        return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
    } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  }), ce.parseXML = function(e2) {
    var t2, n2;
    if (!e2 || "string" != typeof e2)
      return null;
    try {
      t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
    }
    return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
      return e3.textContent;
    }).join("\n") : e2)), t2;
  };
  var gt = /^(?:focusinfocus|focusoutblur)$/, vt = function(e2) {
    e2.stopPropagation();
  };
  ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, d2 = [n2 || m], p2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || m, 3 !== n2.nodeType && 8 !== n2.nodeType && !gt.test(p2 + ce.event.triggered) && (-1 < p2.indexOf(".") && (p2 = (h2 = p2.split(".")).shift(), h2.sort()), u2 = p2.indexOf(":") < 0 && "on" + p2, (e2 = e2[ce.expando] ? e2 : new ce.Event(p2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[p2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !y(n2)) {
        for (s2 = c2.delegateType || p2, gt.test(s2 + p2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode)
          d2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || m) && d2.push(a2.defaultView || a2.parentWindow || ie);
      }
      i2 = 0;
      while ((o2 = d2[i2++]) && !e2.isPropagationStopped())
        f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || p2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && F(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = p2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(d2.pop(), t2) || !F(n2) || u2 && v(n2[p2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = p2, e2.isPropagationStopped() && f2.addEventListener(p2, vt), n2[p2](), e2.isPropagationStopped() && f2.removeEventListener(p2, vt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
    ce.event.trigger(r2, null, t2);
  } }), ce.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      ce.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2)
      return ce.event.trigger(e2, t2, n2, true);
  } });
  var yt, mt = /\[\]$/, bt = /\r?\n/g, xt = /^(?:submit|button|image|reset|file)$/i, wt = /^(?:input|select|textarea|keygen)/i;
  function Ct(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2))
      ce.each(e2, function(e3, t3) {
        r2 || mt.test(n2) ? i2(n2, t3) : Ct(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
      });
    else if (r2 || "object" !== x(e2))
      i2(n2, e2);
    else
      for (t2 in e2)
        Ct(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  ce.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = v(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2)
      return "";
    if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2))
      ce.each(e2, function() {
        i2(this.name, this.value);
      });
    else
      for (n2 in e2)
        Ct(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, ce.fn.extend({ serialize: function() {
    return ce.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = ce.prop(this, "elements");
      return e2 ? ce.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !ce(this).is(":disabled") && wt.test(this.nodeName) && !xt.test(e2) && (this.checked || !xe.test(e2));
    }).map(function(e2, t2) {
      var n2 = ce(this).val();
      return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(bt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(bt, "\r\n") };
    }).get();
  } }), ce.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild)
        e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return v(n2) ? this.each(function(e2) {
      ce(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = ce(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = v(t2);
    return this.each(function(e2) {
      ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      ce(this).replaceWith(this.childNodes);
    }), this;
  } }), ce.expr.pseudos.hidden = function(e2) {
    return !ce.expr.pseudos.visible(e2);
  }, ce.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, le.createHTMLDocument = ((yt = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === yt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, t2.head.appendChild(r2)) : t2 = m), o2 = !n2 && [], (i2 = C.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, ce.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
  } }, ce.fn.extend({ offset: function(t2) {
    if (arguments.length)
      return void 0 === t2 ? this : this.each(function(e3) {
        ce.offset.setOffset(this, t2, e3);
      });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === ce.css(r2, "position"))
        t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position"))
          e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === ce.css(e2, "position"))
        e2 = e2.offsetParent;
      return e2 || K;
    });
  } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    ce.fn[t2] = function(e2) {
      return R(this, function(e3, t3, n2) {
        var r2;
        if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2)
          return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), ce.each(["top", "left"], function(e2, n2) {
    ce.cssHooks[n2] = Qe(le.pixelPosition, function(e3, t2) {
      if (t2)
        return t2 = Ve(e3, n2), $e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
    });
  }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
    ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      ce.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return R(this, function(e3, t3, n3) {
          var r3;
          return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), ce.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
  } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    ce.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var Tt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2))
      return r2 = ae.call(arguments, 2), (i2 = function() {
        return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
      }).guid = e2.guid = e2.guid || ce.guid++, i2;
  }, ce.holdReady = function(e2) {
    e2 ? ce.readyWait++ : ce.ready(true);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = B, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
    var t2 = ce.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, ce.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(Tt, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ce;
  });
  var Et = ie.jQuery, kt = ie.$;
  return ce.noConflict = function(e2) {
    return ie.$ === ce && (ie.$ = kt), e2 && ie.jQuery === ce && (ie.jQuery = Et), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).Popper = {});
}(this, function(e) {
  "use strict";
  function t(e2) {
    if (null == e2)
      return window;
    if ("[object Window]" !== e2.toString()) {
      var t2 = e2.ownerDocument;
      return t2 && t2.defaultView || window;
    }
    return e2;
  }
  function n(e2) {
    return e2 instanceof t(e2).Element || e2 instanceof Element;
  }
  function r(e2) {
    return e2 instanceof t(e2).HTMLElement || e2 instanceof HTMLElement;
  }
  function o(e2) {
    return "undefined" != typeof ShadowRoot && (e2 instanceof t(e2).ShadowRoot || e2 instanceof ShadowRoot);
  }
  var i = Math.max, a = Math.min, s = Math.round;
  function f() {
    var e2 = navigator.userAgentData;
    return null != e2 && e2.brands && Array.isArray(e2.brands) ? e2.brands.map(function(e3) {
      return e3.brand + "/" + e3.version;
    }).join(" ") : navigator.userAgent;
  }
  function c() {
    return !/^((?!chrome|android).)*safari/i.test(f());
  }
  function p(e2, o2, i2) {
    void 0 === o2 && (o2 = false), void 0 === i2 && (i2 = false);
    var a2 = e2.getBoundingClientRect(), f2 = 1, p2 = 1;
    o2 && r(e2) && (f2 = e2.offsetWidth > 0 && s(a2.width) / e2.offsetWidth || 1, p2 = e2.offsetHeight > 0 && s(a2.height) / e2.offsetHeight || 1);
    var u2 = (n(e2) ? t(e2) : window).visualViewport, l2 = !c() && i2, d2 = (a2.left + (l2 && u2 ? u2.offsetLeft : 0)) / f2, h2 = (a2.top + (l2 && u2 ? u2.offsetTop : 0)) / p2, m2 = a2.width / f2, v2 = a2.height / p2;
    return { width: m2, height: v2, top: h2, right: d2 + m2, bottom: h2 + v2, left: d2, x: d2, y: h2 };
  }
  function u(e2) {
    var n2 = t(e2);
    return { scrollLeft: n2.pageXOffset, scrollTop: n2.pageYOffset };
  }
  function l(e2) {
    return e2 ? (e2.nodeName || "").toLowerCase() : null;
  }
  function d(e2) {
    return ((n(e2) ? e2.ownerDocument : e2.document) || window.document).documentElement;
  }
  function h(e2) {
    return p(d(e2)).left + u(e2).scrollLeft;
  }
  function m(e2) {
    return t(e2).getComputedStyle(e2);
  }
  function v(e2) {
    var t2 = m(e2), n2 = t2.overflow, r2 = t2.overflowX, o2 = t2.overflowY;
    return /auto|scroll|overlay|hidden/.test(n2 + o2 + r2);
  }
  function y(e2, n2, o2) {
    void 0 === o2 && (o2 = false);
    var i2, a2, f2 = r(n2), c2 = r(n2) && function(e3) {
      var t2 = e3.getBoundingClientRect(), n3 = s(t2.width) / e3.offsetWidth || 1, r2 = s(t2.height) / e3.offsetHeight || 1;
      return 1 !== n3 || 1 !== r2;
    }(n2), m2 = d(n2), y2 = p(e2, c2, o2), g2 = { scrollLeft: 0, scrollTop: 0 }, b2 = { x: 0, y: 0 };
    return (f2 || !f2 && !o2) && (("body" !== l(n2) || v(m2)) && (g2 = (i2 = n2) !== t(i2) && r(i2) ? { scrollLeft: (a2 = i2).scrollLeft, scrollTop: a2.scrollTop } : u(i2)), r(n2) ? ((b2 = p(n2, true)).x += n2.clientLeft, b2.y += n2.clientTop) : m2 && (b2.x = h(m2))), { x: y2.left + g2.scrollLeft - b2.x, y: y2.top + g2.scrollTop - b2.y, width: y2.width, height: y2.height };
  }
  function g(e2) {
    var t2 = p(e2), n2 = e2.offsetWidth, r2 = e2.offsetHeight;
    return Math.abs(t2.width - n2) <= 1 && (n2 = t2.width), Math.abs(t2.height - r2) <= 1 && (r2 = t2.height), { x: e2.offsetLeft, y: e2.offsetTop, width: n2, height: r2 };
  }
  function b(e2) {
    return "html" === l(e2) ? e2 : e2.assignedSlot || e2.parentNode || (o(e2) ? e2.host : null) || d(e2);
  }
  function x(e2) {
    return ["html", "body", "#document"].indexOf(l(e2)) >= 0 ? e2.ownerDocument.body : r(e2) && v(e2) ? e2 : x(b(e2));
  }
  function w(e2, n2) {
    var r2;
    void 0 === n2 && (n2 = []);
    var o2 = x(e2), i2 = o2 === (null == (r2 = e2.ownerDocument) ? void 0 : r2.body), a2 = t(o2), s2 = i2 ? [a2].concat(a2.visualViewport || [], v(o2) ? o2 : []) : o2, f2 = n2.concat(s2);
    return i2 ? f2 : f2.concat(w(b(s2)));
  }
  function O(e2) {
    return ["table", "td", "th"].indexOf(l(e2)) >= 0;
  }
  function j(e2) {
    return r(e2) && "fixed" !== m(e2).position ? e2.offsetParent : null;
  }
  function E(e2) {
    for (var n2 = t(e2), i2 = j(e2); i2 && O(i2) && "static" === m(i2).position; )
      i2 = j(i2);
    return i2 && ("html" === l(i2) || "body" === l(i2) && "static" === m(i2).position) ? n2 : i2 || function(e3) {
      var t2 = /firefox/i.test(f());
      if (/Trident/i.test(f()) && r(e3) && "fixed" === m(e3).position)
        return null;
      var n3 = b(e3);
      for (o(n3) && (n3 = n3.host); r(n3) && ["html", "body"].indexOf(l(n3)) < 0; ) {
        var i3 = m(n3);
        if ("none" !== i3.transform || "none" !== i3.perspective || "paint" === i3.contain || -1 !== ["transform", "perspective"].indexOf(i3.willChange) || t2 && "filter" === i3.willChange || t2 && i3.filter && "none" !== i3.filter)
          return n3;
        n3 = n3.parentNode;
      }
      return null;
    }(e2) || n2;
  }
  var D = "top", A = "bottom", L = "right", P = "left", M = "auto", k = [D, A, L, P], W = "start", B = "end", H = "viewport", T = "popper", R = k.reduce(function(e2, t2) {
    return e2.concat([t2 + "-" + W, t2 + "-" + B]);
  }, []), S = [].concat(k, [M]).reduce(function(e2, t2) {
    return e2.concat([t2, t2 + "-" + W, t2 + "-" + B]);
  }, []), V = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];
  function q(e2) {
    var t2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set(), r2 = [];
    function o2(e3) {
      n2.add(e3.name), [].concat(e3.requires || [], e3.requiresIfExists || []).forEach(function(e4) {
        if (!n2.has(e4)) {
          var r3 = t2.get(e4);
          r3 && o2(r3);
        }
      }), r2.push(e3);
    }
    return e2.forEach(function(e3) {
      t2.set(e3.name, e3);
    }), e2.forEach(function(e3) {
      n2.has(e3.name) || o2(e3);
    }), r2;
  }
  function C(e2, t2) {
    var n2 = t2.getRootNode && t2.getRootNode();
    if (e2.contains(t2))
      return true;
    if (n2 && o(n2)) {
      var r2 = t2;
      do {
        if (r2 && e2.isSameNode(r2))
          return true;
        r2 = r2.parentNode || r2.host;
      } while (r2);
    }
    return false;
  }
  function N(e2) {
    return Object.assign({}, e2, { left: e2.x, top: e2.y, right: e2.x + e2.width, bottom: e2.y + e2.height });
  }
  function I(e2, r2, o2) {
    return r2 === H ? N(function(e3, n2) {
      var r3 = t(e3), o3 = d(e3), i2 = r3.visualViewport, a2 = o3.clientWidth, s2 = o3.clientHeight, f2 = 0, p2 = 0;
      if (i2) {
        a2 = i2.width, s2 = i2.height;
        var u2 = c();
        (u2 || !u2 && "fixed" === n2) && (f2 = i2.offsetLeft, p2 = i2.offsetTop);
      }
      return { width: a2, height: s2, x: f2 + h(e3), y: p2 };
    }(e2, o2)) : n(r2) ? function(e3, t2) {
      var n2 = p(e3, false, "fixed" === t2);
      return n2.top = n2.top + e3.clientTop, n2.left = n2.left + e3.clientLeft, n2.bottom = n2.top + e3.clientHeight, n2.right = n2.left + e3.clientWidth, n2.width = e3.clientWidth, n2.height = e3.clientHeight, n2.x = n2.left, n2.y = n2.top, n2;
    }(r2, o2) : N(function(e3) {
      var t2, n2 = d(e3), r3 = u(e3), o3 = null == (t2 = e3.ownerDocument) ? void 0 : t2.body, a2 = i(n2.scrollWidth, n2.clientWidth, o3 ? o3.scrollWidth : 0, o3 ? o3.clientWidth : 0), s2 = i(n2.scrollHeight, n2.clientHeight, o3 ? o3.scrollHeight : 0, o3 ? o3.clientHeight : 0), f2 = -r3.scrollLeft + h(e3), c2 = -r3.scrollTop;
      return "rtl" === m(o3 || n2).direction && (f2 += i(n2.clientWidth, o3 ? o3.clientWidth : 0) - a2), { width: a2, height: s2, x: f2, y: c2 };
    }(d(e2)));
  }
  function _(e2, t2, o2, s2) {
    var f2 = "clippingParents" === t2 ? function(e3) {
      var t3 = w(b(e3)), o3 = ["absolute", "fixed"].indexOf(m(e3).position) >= 0 && r(e3) ? E(e3) : e3;
      return n(o3) ? t3.filter(function(e4) {
        return n(e4) && C(e4, o3) && "body" !== l(e4);
      }) : [];
    }(e2) : [].concat(t2), c2 = [].concat(f2, [o2]), p2 = c2[0], u2 = c2.reduce(function(t3, n2) {
      var r2 = I(e2, n2, s2);
      return t3.top = i(r2.top, t3.top), t3.right = a(r2.right, t3.right), t3.bottom = a(r2.bottom, t3.bottom), t3.left = i(r2.left, t3.left), t3;
    }, I(e2, p2, s2));
    return u2.width = u2.right - u2.left, u2.height = u2.bottom - u2.top, u2.x = u2.left, u2.y = u2.top, u2;
  }
  function F(e2) {
    return e2.split("-")[0];
  }
  function U(e2) {
    return e2.split("-")[1];
  }
  function z(e2) {
    return ["top", "bottom"].indexOf(e2) >= 0 ? "x" : "y";
  }
  function X(e2) {
    var t2, n2 = e2.reference, r2 = e2.element, o2 = e2.placement, i2 = o2 ? F(o2) : null, a2 = o2 ? U(o2) : null, s2 = n2.x + n2.width / 2 - r2.width / 2, f2 = n2.y + n2.height / 2 - r2.height / 2;
    switch (i2) {
      case D:
        t2 = { x: s2, y: n2.y - r2.height };
        break;
      case A:
        t2 = { x: s2, y: n2.y + n2.height };
        break;
      case L:
        t2 = { x: n2.x + n2.width, y: f2 };
        break;
      case P:
        t2 = { x: n2.x - r2.width, y: f2 };
        break;
      default:
        t2 = { x: n2.x, y: n2.y };
    }
    var c2 = i2 ? z(i2) : null;
    if (null != c2) {
      var p2 = "y" === c2 ? "height" : "width";
      switch (a2) {
        case W:
          t2[c2] = t2[c2] - (n2[p2] / 2 - r2[p2] / 2);
          break;
        case B:
          t2[c2] = t2[c2] + (n2[p2] / 2 - r2[p2] / 2);
      }
    }
    return t2;
  }
  function Y(e2) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e2);
  }
  function G(e2, t2) {
    return t2.reduce(function(t3, n2) {
      return t3[n2] = e2, t3;
    }, {});
  }
  function J(e2, t2) {
    void 0 === t2 && (t2 = {});
    var r2 = t2, o2 = r2.placement, i2 = void 0 === o2 ? e2.placement : o2, a2 = r2.strategy, s2 = void 0 === a2 ? e2.strategy : a2, f2 = r2.boundary, c2 = void 0 === f2 ? "clippingParents" : f2, u2 = r2.rootBoundary, l2 = void 0 === u2 ? H : u2, h2 = r2.elementContext, m2 = void 0 === h2 ? T : h2, v2 = r2.altBoundary, y2 = void 0 !== v2 && v2, g2 = r2.padding, b2 = void 0 === g2 ? 0 : g2, x2 = Y("number" != typeof b2 ? b2 : G(b2, k)), w2 = m2 === T ? "reference" : T, O2 = e2.rects.popper, j2 = e2.elements[y2 ? w2 : m2], E2 = _(n(j2) ? j2 : j2.contextElement || d(e2.elements.popper), c2, l2, s2), P2 = p(e2.elements.reference), M2 = X({ reference: P2, element: O2, strategy: "absolute", placement: i2 }), W2 = N(Object.assign({}, O2, M2)), B2 = m2 === T ? W2 : P2, R2 = { top: E2.top - B2.top + x2.top, bottom: B2.bottom - E2.bottom + x2.bottom, left: E2.left - B2.left + x2.left, right: B2.right - E2.right + x2.right }, S2 = e2.modifiersData.offset;
    if (m2 === T && S2) {
      var V2 = S2[i2];
      Object.keys(R2).forEach(function(e3) {
        var t3 = [L, A].indexOf(e3) >= 0 ? 1 : -1, n2 = [D, A].indexOf(e3) >= 0 ? "y" : "x";
        R2[e3] += V2[n2] * t3;
      });
    }
    return R2;
  }
  var K = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Q() {
    for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++)
      t2[n2] = arguments[n2];
    return !t2.some(function(e3) {
      return !(e3 && "function" == typeof e3.getBoundingClientRect);
    });
  }
  function Z(e2) {
    void 0 === e2 && (e2 = {});
    var t2 = e2, r2 = t2.defaultModifiers, o2 = void 0 === r2 ? [] : r2, i2 = t2.defaultOptions, a2 = void 0 === i2 ? K : i2;
    return function(e3, t3, r3) {
      void 0 === r3 && (r3 = a2);
      var i3, s2, f2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, K, a2), modifiersData: {}, elements: { reference: e3, popper: t3 }, attributes: {}, styles: {} }, c2 = [], p2 = false, u2 = { state: f2, setOptions: function(r4) {
        var i4 = "function" == typeof r4 ? r4(f2.options) : r4;
        l2(), f2.options = Object.assign({}, a2, f2.options, i4), f2.scrollParents = { reference: n(e3) ? w(e3) : e3.contextElement ? w(e3.contextElement) : [], popper: w(t3) };
        var s3, p3, d2 = function(e4) {
          var t4 = q(e4);
          return V.reduce(function(e5, n2) {
            return e5.concat(t4.filter(function(e6) {
              return e6.phase === n2;
            }));
          }, []);
        }((s3 = [].concat(o2, f2.options.modifiers), p3 = s3.reduce(function(e4, t4) {
          var n2 = e4[t4.name];
          return e4[t4.name] = n2 ? Object.assign({}, n2, t4, { options: Object.assign({}, n2.options, t4.options), data: Object.assign({}, n2.data, t4.data) }) : t4, e4;
        }, {}), Object.keys(p3).map(function(e4) {
          return p3[e4];
        })));
        return f2.orderedModifiers = d2.filter(function(e4) {
          return e4.enabled;
        }), f2.orderedModifiers.forEach(function(e4) {
          var t4 = e4.name, n2 = e4.options, r5 = void 0 === n2 ? {} : n2, o3 = e4.effect;
          if ("function" == typeof o3) {
            var i5 = o3({ state: f2, name: t4, instance: u2, options: r5 }), a3 = function() {
            };
            c2.push(i5 || a3);
          }
        }), u2.update();
      }, forceUpdate: function() {
        if (!p2) {
          var e4 = f2.elements, t4 = e4.reference, n2 = e4.popper;
          if (Q(t4, n2)) {
            f2.rects = { reference: y(t4, E(n2), "fixed" === f2.options.strategy), popper: g(n2) }, f2.reset = false, f2.placement = f2.options.placement, f2.orderedModifiers.forEach(function(e5) {
              return f2.modifiersData[e5.name] = Object.assign({}, e5.data);
            });
            for (var r4 = 0; r4 < f2.orderedModifiers.length; r4++)
              if (true !== f2.reset) {
                var o3 = f2.orderedModifiers[r4], i4 = o3.fn, a3 = o3.options, s3 = void 0 === a3 ? {} : a3, c3 = o3.name;
                "function" == typeof i4 && (f2 = i4({ state: f2, options: s3, name: c3, instance: u2 }) || f2);
              } else
                f2.reset = false, r4 = -1;
          }
        }
      }, update: (i3 = function() {
        return new Promise(function(e4) {
          u2.forceUpdate(), e4(f2);
        });
      }, function() {
        return s2 || (s2 = new Promise(function(e4) {
          Promise.resolve().then(function() {
            s2 = void 0, e4(i3());
          });
        })), s2;
      }), destroy: function() {
        l2(), p2 = true;
      } };
      if (!Q(e3, t3))
        return u2;
      function l2() {
        c2.forEach(function(e4) {
          return e4();
        }), c2 = [];
      }
      return u2.setOptions(r3).then(function(e4) {
        !p2 && r3.onFirstUpdate && r3.onFirstUpdate(e4);
      }), u2;
    };
  }
  var $ = { passive: true };
  var ee = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
  }, effect: function(e2) {
    var n2 = e2.state, r2 = e2.instance, o2 = e2.options, i2 = o2.scroll, a2 = void 0 === i2 || i2, s2 = o2.resize, f2 = void 0 === s2 || s2, c2 = t(n2.elements.popper), p2 = [].concat(n2.scrollParents.reference, n2.scrollParents.popper);
    return a2 && p2.forEach(function(e3) {
      e3.addEventListener("scroll", r2.update, $);
    }), f2 && c2.addEventListener("resize", r2.update, $), function() {
      a2 && p2.forEach(function(e3) {
        e3.removeEventListener("scroll", r2.update, $);
      }), f2 && c2.removeEventListener("resize", r2.update, $);
    };
  }, data: {} };
  var te = { name: "popperOffsets", enabled: true, phase: "read", fn: function(e2) {
    var t2 = e2.state, n2 = e2.name;
    t2.modifiersData[n2] = X({ reference: t2.rects.reference, element: t2.rects.popper, strategy: "absolute", placement: t2.placement });
  }, data: {} }, ne = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function re(e2) {
    var n2, r2 = e2.popper, o2 = e2.popperRect, i2 = e2.placement, a2 = e2.variation, f2 = e2.offsets, c2 = e2.position, p2 = e2.gpuAcceleration, u2 = e2.adaptive, l2 = e2.roundOffsets, h2 = e2.isFixed, v2 = f2.x, y2 = void 0 === v2 ? 0 : v2, g2 = f2.y, b2 = void 0 === g2 ? 0 : g2, x2 = "function" == typeof l2 ? l2({ x: y2, y: b2 }) : { x: y2, y: b2 };
    y2 = x2.x, b2 = x2.y;
    var w2 = f2.hasOwnProperty("x"), O2 = f2.hasOwnProperty("y"), j2 = P, M2 = D, k2 = window;
    if (u2) {
      var W2 = E(r2), H2 = "clientHeight", T2 = "clientWidth";
      if (W2 === t(r2) && "static" !== m(W2 = d(r2)).position && "absolute" === c2 && (H2 = "scrollHeight", T2 = "scrollWidth"), W2 = W2, i2 === D || (i2 === P || i2 === L) && a2 === B)
        M2 = A, b2 -= (h2 && W2 === k2 && k2.visualViewport ? k2.visualViewport.height : W2[H2]) - o2.height, b2 *= p2 ? 1 : -1;
      if (i2 === P || (i2 === D || i2 === A) && a2 === B)
        j2 = L, y2 -= (h2 && W2 === k2 && k2.visualViewport ? k2.visualViewport.width : W2[T2]) - o2.width, y2 *= p2 ? 1 : -1;
    }
    var R2, S2 = Object.assign({ position: c2 }, u2 && ne), V2 = true === l2 ? function(e3, t2) {
      var n3 = e3.x, r3 = e3.y, o3 = t2.devicePixelRatio || 1;
      return { x: s(n3 * o3) / o3 || 0, y: s(r3 * o3) / o3 || 0 };
    }({ x: y2, y: b2 }, t(r2)) : { x: y2, y: b2 };
    return y2 = V2.x, b2 = V2.y, p2 ? Object.assign({}, S2, ((R2 = {})[M2] = O2 ? "0" : "", R2[j2] = w2 ? "0" : "", R2.transform = (k2.devicePixelRatio || 1) <= 1 ? "translate(" + y2 + "px, " + b2 + "px)" : "translate3d(" + y2 + "px, " + b2 + "px, 0)", R2)) : Object.assign({}, S2, ((n2 = {})[M2] = O2 ? b2 + "px" : "", n2[j2] = w2 ? y2 + "px" : "", n2.transform = "", n2));
  }
  var oe = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(e2) {
    var t2 = e2.state, n2 = e2.options, r2 = n2.gpuAcceleration, o2 = void 0 === r2 || r2, i2 = n2.adaptive, a2 = void 0 === i2 || i2, s2 = n2.roundOffsets, f2 = void 0 === s2 || s2, c2 = { placement: F(t2.placement), variation: U(t2.placement), popper: t2.elements.popper, popperRect: t2.rects.popper, gpuAcceleration: o2, isFixed: "fixed" === t2.options.strategy };
    null != t2.modifiersData.popperOffsets && (t2.styles.popper = Object.assign({}, t2.styles.popper, re(Object.assign({}, c2, { offsets: t2.modifiersData.popperOffsets, position: t2.options.strategy, adaptive: a2, roundOffsets: f2 })))), null != t2.modifiersData.arrow && (t2.styles.arrow = Object.assign({}, t2.styles.arrow, re(Object.assign({}, c2, { offsets: t2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: f2 })))), t2.attributes.popper = Object.assign({}, t2.attributes.popper, { "data-popper-placement": t2.placement });
  }, data: {} };
  var ie = { name: "applyStyles", enabled: true, phase: "write", fn: function(e2) {
    var t2 = e2.state;
    Object.keys(t2.elements).forEach(function(e3) {
      var n2 = t2.styles[e3] || {}, o2 = t2.attributes[e3] || {}, i2 = t2.elements[e3];
      r(i2) && l(i2) && (Object.assign(i2.style, n2), Object.keys(o2).forEach(function(e4) {
        var t3 = o2[e4];
        false === t3 ? i2.removeAttribute(e4) : i2.setAttribute(e4, true === t3 ? "" : t3);
      }));
    });
  }, effect: function(e2) {
    var t2 = e2.state, n2 = { popper: { position: t2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return Object.assign(t2.elements.popper.style, n2.popper), t2.styles = n2, t2.elements.arrow && Object.assign(t2.elements.arrow.style, n2.arrow), function() {
      Object.keys(t2.elements).forEach(function(e3) {
        var o2 = t2.elements[e3], i2 = t2.attributes[e3] || {}, a2 = Object.keys(t2.styles.hasOwnProperty(e3) ? t2.styles[e3] : n2[e3]).reduce(function(e4, t3) {
          return e4[t3] = "", e4;
        }, {});
        r(o2) && l(o2) && (Object.assign(o2.style, a2), Object.keys(i2).forEach(function(e4) {
          o2.removeAttribute(e4);
        }));
      });
    };
  }, requires: ["computeStyles"] };
  var ae = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(e2) {
    var t2 = e2.state, n2 = e2.options, r2 = e2.name, o2 = n2.offset, i2 = void 0 === o2 ? [0, 0] : o2, a2 = S.reduce(function(e3, n3) {
      return e3[n3] = function(e4, t3, n4) {
        var r3 = F(e4), o3 = [P, D].indexOf(r3) >= 0 ? -1 : 1, i3 = "function" == typeof n4 ? n4(Object.assign({}, t3, { placement: e4 })) : n4, a3 = i3[0], s3 = i3[1];
        return a3 = a3 || 0, s3 = (s3 || 0) * o3, [P, L].indexOf(r3) >= 0 ? { x: s3, y: a3 } : { x: a3, y: s3 };
      }(n3, t2.rects, i2), e3;
    }, {}), s2 = a2[t2.placement], f2 = s2.x, c2 = s2.y;
    null != t2.modifiersData.popperOffsets && (t2.modifiersData.popperOffsets.x += f2, t2.modifiersData.popperOffsets.y += c2), t2.modifiersData[r2] = a2;
  } }, se = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function fe(e2) {
    return e2.replace(/left|right|bottom|top/g, function(e3) {
      return se[e3];
    });
  }
  var ce = { start: "end", end: "start" };
  function pe(e2) {
    return e2.replace(/start|end/g, function(e3) {
      return ce[e3];
    });
  }
  function ue(e2, t2) {
    void 0 === t2 && (t2 = {});
    var n2 = t2, r2 = n2.placement, o2 = n2.boundary, i2 = n2.rootBoundary, a2 = n2.padding, s2 = n2.flipVariations, f2 = n2.allowedAutoPlacements, c2 = void 0 === f2 ? S : f2, p2 = U(r2), u2 = p2 ? s2 ? R : R.filter(function(e3) {
      return U(e3) === p2;
    }) : k, l2 = u2.filter(function(e3) {
      return c2.indexOf(e3) >= 0;
    });
    0 === l2.length && (l2 = u2);
    var d2 = l2.reduce(function(t3, n3) {
      return t3[n3] = J(e2, { placement: n3, boundary: o2, rootBoundary: i2, padding: a2 })[F(n3)], t3;
    }, {});
    return Object.keys(d2).sort(function(e3, t3) {
      return d2[e3] - d2[t3];
    });
  }
  var le = { name: "flip", enabled: true, phase: "main", fn: function(e2) {
    var t2 = e2.state, n2 = e2.options, r2 = e2.name;
    if (!t2.modifiersData[r2]._skip) {
      for (var o2 = n2.mainAxis, i2 = void 0 === o2 || o2, a2 = n2.altAxis, s2 = void 0 === a2 || a2, f2 = n2.fallbackPlacements, c2 = n2.padding, p2 = n2.boundary, u2 = n2.rootBoundary, l2 = n2.altBoundary, d2 = n2.flipVariations, h2 = void 0 === d2 || d2, m2 = n2.allowedAutoPlacements, v2 = t2.options.placement, y2 = F(v2), g2 = f2 || (y2 === v2 || !h2 ? [fe(v2)] : function(e3) {
        if (F(e3) === M)
          return [];
        var t3 = fe(e3);
        return [pe(e3), t3, pe(t3)];
      }(v2)), b2 = [v2].concat(g2).reduce(function(e3, n3) {
        return e3.concat(F(n3) === M ? ue(t2, { placement: n3, boundary: p2, rootBoundary: u2, padding: c2, flipVariations: h2, allowedAutoPlacements: m2 }) : n3);
      }, []), x2 = t2.rects.reference, w2 = t2.rects.popper, O2 = /* @__PURE__ */ new Map(), j2 = true, E2 = b2[0], k2 = 0; k2 < b2.length; k2++) {
        var B2 = b2[k2], H2 = F(B2), T2 = U(B2) === W, R2 = [D, A].indexOf(H2) >= 0, S2 = R2 ? "width" : "height", V2 = J(t2, { placement: B2, boundary: p2, rootBoundary: u2, altBoundary: l2, padding: c2 }), q2 = R2 ? T2 ? L : P : T2 ? A : D;
        x2[S2] > w2[S2] && (q2 = fe(q2));
        var C2 = fe(q2), N2 = [];
        if (i2 && N2.push(V2[H2] <= 0), s2 && N2.push(V2[q2] <= 0, V2[C2] <= 0), N2.every(function(e3) {
          return e3;
        })) {
          E2 = B2, j2 = false;
          break;
        }
        O2.set(B2, N2);
      }
      if (j2)
        for (var I2 = function(e3) {
          var t3 = b2.find(function(t4) {
            var n3 = O2.get(t4);
            if (n3)
              return n3.slice(0, e3).every(function(e4) {
                return e4;
              });
          });
          if (t3)
            return E2 = t3, "break";
        }, _2 = h2 ? 3 : 1; _2 > 0; _2--) {
          if ("break" === I2(_2))
            break;
        }
      t2.placement !== E2 && (t2.modifiersData[r2]._skip = true, t2.placement = E2, t2.reset = true);
    }
  }, requiresIfExists: ["offset"], data: { _skip: false } };
  function de(e2, t2, n2) {
    return i(e2, a(t2, n2));
  }
  var he = { name: "preventOverflow", enabled: true, phase: "main", fn: function(e2) {
    var t2 = e2.state, n2 = e2.options, r2 = e2.name, o2 = n2.mainAxis, s2 = void 0 === o2 || o2, f2 = n2.altAxis, c2 = void 0 !== f2 && f2, p2 = n2.boundary, u2 = n2.rootBoundary, l2 = n2.altBoundary, d2 = n2.padding, h2 = n2.tether, m2 = void 0 === h2 || h2, v2 = n2.tetherOffset, y2 = void 0 === v2 ? 0 : v2, b2 = J(t2, { boundary: p2, rootBoundary: u2, padding: d2, altBoundary: l2 }), x2 = F(t2.placement), w2 = U(t2.placement), O2 = !w2, j2 = z(x2), M2 = "x" === j2 ? "y" : "x", k2 = t2.modifiersData.popperOffsets, B2 = t2.rects.reference, H2 = t2.rects.popper, T2 = "function" == typeof y2 ? y2(Object.assign({}, t2.rects, { placement: t2.placement })) : y2, R2 = "number" == typeof T2 ? { mainAxis: T2, altAxis: T2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, T2), S2 = t2.modifiersData.offset ? t2.modifiersData.offset[t2.placement] : null, V2 = { x: 0, y: 0 };
    if (k2) {
      if (s2) {
        var q2, C2 = "y" === j2 ? D : P, N2 = "y" === j2 ? A : L, I2 = "y" === j2 ? "height" : "width", _2 = k2[j2], X2 = _2 + b2[C2], Y2 = _2 - b2[N2], G2 = m2 ? -H2[I2] / 2 : 0, K2 = w2 === W ? B2[I2] : H2[I2], Q2 = w2 === W ? -H2[I2] : -B2[I2], Z2 = t2.elements.arrow, $2 = m2 && Z2 ? g(Z2) : { width: 0, height: 0 }, ee2 = t2.modifiersData["arrow#persistent"] ? t2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, te2 = ee2[C2], ne2 = ee2[N2], re2 = de(0, B2[I2], $2[I2]), oe2 = O2 ? B2[I2] / 2 - G2 - re2 - te2 - R2.mainAxis : K2 - re2 - te2 - R2.mainAxis, ie2 = O2 ? -B2[I2] / 2 + G2 + re2 + ne2 + R2.mainAxis : Q2 + re2 + ne2 + R2.mainAxis, ae2 = t2.elements.arrow && E(t2.elements.arrow), se2 = ae2 ? "y" === j2 ? ae2.clientTop || 0 : ae2.clientLeft || 0 : 0, fe2 = null != (q2 = null == S2 ? void 0 : S2[j2]) ? q2 : 0, ce2 = _2 + ie2 - fe2, pe2 = de(m2 ? a(X2, _2 + oe2 - fe2 - se2) : X2, _2, m2 ? i(Y2, ce2) : Y2);
        k2[j2] = pe2, V2[j2] = pe2 - _2;
      }
      if (c2) {
        var ue2, le2 = "x" === j2 ? D : P, he2 = "x" === j2 ? A : L, me2 = k2[M2], ve2 = "y" === M2 ? "height" : "width", ye2 = me2 + b2[le2], ge2 = me2 - b2[he2], be2 = -1 !== [D, P].indexOf(x2), xe2 = null != (ue2 = null == S2 ? void 0 : S2[M2]) ? ue2 : 0, we2 = be2 ? ye2 : me2 - B2[ve2] - H2[ve2] - xe2 + R2.altAxis, Oe = be2 ? me2 + B2[ve2] + H2[ve2] - xe2 - R2.altAxis : ge2, je = m2 && be2 ? function(e3, t3, n3) {
          var r3 = de(e3, t3, n3);
          return r3 > n3 ? n3 : r3;
        }(we2, me2, Oe) : de(m2 ? we2 : ye2, me2, m2 ? Oe : ge2);
        k2[M2] = je, V2[M2] = je - me2;
      }
      t2.modifiersData[r2] = V2;
    }
  }, requiresIfExists: ["offset"] };
  var me = { name: "arrow", enabled: true, phase: "main", fn: function(e2) {
    var t2, n2 = e2.state, r2 = e2.name, o2 = e2.options, i2 = n2.elements.arrow, a2 = n2.modifiersData.popperOffsets, s2 = F(n2.placement), f2 = z(s2), c2 = [P, L].indexOf(s2) >= 0 ? "height" : "width";
    if (i2 && a2) {
      var p2 = function(e3, t3) {
        return Y("number" != typeof (e3 = "function" == typeof e3 ? e3(Object.assign({}, t3.rects, { placement: t3.placement })) : e3) ? e3 : G(e3, k));
      }(o2.padding, n2), u2 = g(i2), l2 = "y" === f2 ? D : P, d2 = "y" === f2 ? A : L, h2 = n2.rects.reference[c2] + n2.rects.reference[f2] - a2[f2] - n2.rects.popper[c2], m2 = a2[f2] - n2.rects.reference[f2], v2 = E(i2), y2 = v2 ? "y" === f2 ? v2.clientHeight || 0 : v2.clientWidth || 0 : 0, b2 = h2 / 2 - m2 / 2, x2 = p2[l2], w2 = y2 - u2[c2] - p2[d2], O2 = y2 / 2 - u2[c2] / 2 + b2, j2 = de(x2, O2, w2), M2 = f2;
      n2.modifiersData[r2] = ((t2 = {})[M2] = j2, t2.centerOffset = j2 - O2, t2);
    }
  }, effect: function(e2) {
    var t2 = e2.state, n2 = e2.options.element, r2 = void 0 === n2 ? "[data-popper-arrow]" : n2;
    null != r2 && ("string" != typeof r2 || (r2 = t2.elements.popper.querySelector(r2))) && C(t2.elements.popper, r2) && (t2.elements.arrow = r2);
  }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
  function ve(e2, t2, n2) {
    return void 0 === n2 && (n2 = { x: 0, y: 0 }), { top: e2.top - t2.height - n2.y, right: e2.right - t2.width + n2.x, bottom: e2.bottom - t2.height + n2.y, left: e2.left - t2.width - n2.x };
  }
  function ye(e2) {
    return [D, L, A, P].some(function(t2) {
      return e2[t2] >= 0;
    });
  }
  var ge = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(e2) {
    var t2 = e2.state, n2 = e2.name, r2 = t2.rects.reference, o2 = t2.rects.popper, i2 = t2.modifiersData.preventOverflow, a2 = J(t2, { elementContext: "reference" }), s2 = J(t2, { altBoundary: true }), f2 = ve(a2, r2), c2 = ve(s2, o2, i2), p2 = ye(f2), u2 = ye(c2);
    t2.modifiersData[n2] = { referenceClippingOffsets: f2, popperEscapeOffsets: c2, isReferenceHidden: p2, hasPopperEscaped: u2 }, t2.attributes.popper = Object.assign({}, t2.attributes.popper, { "data-popper-reference-hidden": p2, "data-popper-escaped": u2 });
  } }, be = Z({ defaultModifiers: [ee, te, oe, ie] }), xe = [ee, te, oe, ie, ae, le, he, me, ge], we = Z({ defaultModifiers: xe });
  e.applyStyles = ie, e.arrow = me, e.computeStyles = oe, e.createPopper = we, e.createPopperLite = be, e.defaultModifiers = xe, e.detectOverflow = J, e.eventListeners = ee, e.flip = le, e.hide = ge, e.offset = ae, e.popperGenerator = Z, e.popperOffsets = te, e.preventOverflow = he, Object.defineProperty(e, "__esModule", { value: true });
});
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(this, function(t) {
  "use strict";
  function e(t2) {
    const e2 = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
    if (t2) {
      for (const i2 in t2)
        if ("default" !== i2) {
          const s2 = Object.getOwnPropertyDescriptor(t2, i2);
          Object.defineProperty(e2, i2, s2.get ? s2 : { enumerable: true, get: () => t2[i2] });
        }
    }
    return e2.default = t2, Object.freeze(e2);
  }
  const i = e(t), s = /* @__PURE__ */ new Map(), n = { set(t2, e2, i2) {
    s.has(t2) || s.set(t2, /* @__PURE__ */ new Map());
    const n2 = s.get(t2);
    n2.has(e2) || 0 === n2.size ? n2.set(e2, i2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n2.keys())[0]}.`);
  }, get: (t2, e2) => s.has(t2) && s.get(t2).get(e2) || null, remove(t2, e2) {
    if (!s.has(t2))
      return;
    const i2 = s.get(t2);
    i2.delete(e2), 0 === i2.size && s.delete(t2);
  } }, o = "transitionend", r = (t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), a = (t2) => {
    t2.dispatchEvent(new Event(o));
  }, l = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), c = (t2) => l(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(r(t2)) : null, h = (t2) => {
    if (!l(t2) || 0 === t2.getClientRects().length)
      return false;
    const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
    if (!i2)
      return e2;
    if (i2 !== t2) {
      const e3 = t2.closest("summary");
      if (e3 && e3.parentNode !== i2)
        return false;
      if (null === e3)
        return false;
    }
    return e2;
  }, d = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), u = (t2) => {
    if (!document.documentElement.attachShadow)
      return null;
    if ("function" == typeof t2.getRootNode) {
      const e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? u(t2.parentNode) : null;
  }, _ = () => {
  }, g = (t2) => {
    t2.offsetHeight;
  }, f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, m = [], p = () => "rtl" === document.documentElement.dir, b = (t2) => {
    var e2;
    e2 = () => {
      const e3 = f();
      if (e3) {
        const i2 = t2.NAME, s2 = e3.fn[i2];
        e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = s2, t2.jQueryInterface);
      }
    }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", () => {
      for (const t3 of m)
        t3();
    }), m.push(e2)) : e2();
  }, v = (t2, e2 = [], i2 = t2) => "function" == typeof t2 ? t2(...e2) : i2, y = (t2, e2, i2 = true) => {
    if (!i2)
      return void v(t2);
    const s2 = ((t3) => {
      if (!t3)
        return 0;
      let { transitionDuration: e3, transitionDelay: i3 } = window.getComputedStyle(t3);
      const s3 = Number.parseFloat(e3), n3 = Number.parseFloat(i3);
      return s3 || n3 ? (e3 = e3.split(",")[0], i3 = i3.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i3))) : 0;
    })(e2) + 5;
    let n2 = false;
    const r2 = ({ target: i3 }) => {
      i3 === e2 && (n2 = true, e2.removeEventListener(o, r2), v(t2));
    };
    e2.addEventListener(o, r2), setTimeout(() => {
      n2 || a(e2);
    }, s2);
  }, w = (t2, e2, i2, s2) => {
    const n2 = t2.length;
    let o2 = t2.indexOf(e2);
    return -1 === o2 ? !i2 && s2 ? t2[n2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, s2 && (o2 = (o2 + n2) % n2), t2[Math.max(0, Math.min(o2, n2 - 1))]);
  }, A = /[^.]*(?=\..*)\.|.*/, E = /\..*/, C = /::\d+$/, T = {};
  let k = 1;
  const $ = { mouseenter: "mouseover", mouseleave: "mouseout" }, S = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function L(t2, e2) {
    return e2 && `${e2}::${k++}` || t2.uidEvent || k++;
  }
  function O(t2) {
    const e2 = L(t2);
    return t2.uidEvent = e2, T[e2] = T[e2] || {}, T[e2];
  }
  function I(t2, e2, i2 = null) {
    return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === i2);
  }
  function D(t2, e2, i2) {
    const s2 = "string" == typeof e2, n2 = s2 ? i2 : e2 || i2;
    let o2 = M(t2);
    return S.has(o2) || (o2 = t2), [s2, n2, o2];
  }
  function N(t2, e2, i2, s2, n2) {
    if ("string" != typeof e2 || !t2)
      return;
    let [o2, r2, a2] = D(e2, i2, s2);
    if (e2 in $) {
      const t3 = (t4) => function(e3) {
        if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget))
          return t4.call(this, e3);
      };
      r2 = t3(r2);
    }
    const l2 = O(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = I(c2, r2, o2 ? i2 : null);
    if (h2)
      return void (h2.oneOff = h2.oneOff && n2);
    const d2 = L(r2, e2.replace(A, "")), u2 = o2 ? /* @__PURE__ */ function(t3, e3, i3) {
      return function s3(n3) {
        const o3 = t3.querySelectorAll(e3);
        for (let { target: r3 } = n3; r3 && r3 !== this; r3 = r3.parentNode)
          for (const a3 of o3)
            if (a3 === r3)
              return F(n3, { delegateTarget: r3 }), s3.oneOff && j.off(t3, n3.type, e3, i3), i3.apply(r3, [n3]);
      };
    }(t2, i2, r2) : /* @__PURE__ */ function(t3, e3) {
      return function i3(s3) {
        return F(s3, { delegateTarget: t3 }), i3.oneOff && j.off(t3, s3.type, e3), e3.apply(t3, [s3]);
      };
    }(t2, r2);
    u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = n2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
  }
  function P(t2, e2, i2, s2, n2) {
    const o2 = I(e2[i2], s2, n2);
    o2 && (t2.removeEventListener(i2, o2, Boolean(n2)), delete e2[i2][o2.uidEvent]);
  }
  function x(t2, e2, i2, s2) {
    const n2 = e2[i2] || {};
    for (const [o2, r2] of Object.entries(n2))
      o2.includes(s2) && P(t2, e2, i2, r2.callable, r2.delegationSelector);
  }
  function M(t2) {
    return t2 = t2.replace(E, ""), $[t2] || t2;
  }
  const j = { on(t2, e2, i2, s2) {
    N(t2, e2, i2, s2, false);
  }, one(t2, e2, i2, s2) {
    N(t2, e2, i2, s2, true);
  }, off(t2, e2, i2, s2) {
    if ("string" != typeof e2 || !t2)
      return;
    const [n2, o2, r2] = D(e2, i2, s2), a2 = r2 !== e2, l2 = O(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
    if (void 0 === o2) {
      if (h2)
        for (const i3 of Object.keys(l2))
          x(t2, l2, i3, e2.slice(1));
      for (const [i3, s3] of Object.entries(c2)) {
        const n3 = i3.replace(C, "");
        a2 && !e2.includes(n3) || P(t2, l2, r2, s3.callable, s3.delegationSelector);
      }
    } else {
      if (!Object.keys(c2).length)
        return;
      P(t2, l2, r2, o2, n2 ? i2 : null);
    }
  }, trigger(t2, e2, i2) {
    if ("string" != typeof e2 || !t2)
      return null;
    const s2 = f();
    let n2 = null, o2 = true, r2 = true, a2 = false;
    e2 !== M(e2) && s2 && (n2 = s2.Event(e2, i2), s2(t2).trigger(n2), o2 = !n2.isPropagationStopped(), r2 = !n2.isImmediatePropagationStopped(), a2 = n2.isDefaultPrevented());
    const l2 = F(new Event(e2, { bubbles: o2, cancelable: true }), i2);
    return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && n2 && n2.preventDefault(), l2;
  } };
  function F(t2, e2 = {}) {
    for (const [i2, s2] of Object.entries(e2))
      try {
        t2[i2] = s2;
      } catch (e3) {
        Object.defineProperty(t2, i2, { configurable: true, get: () => s2 });
      }
    return t2;
  }
  function z(t2) {
    if ("true" === t2)
      return true;
    if ("false" === t2)
      return false;
    if (t2 === Number(t2).toString())
      return Number(t2);
    if ("" === t2 || "null" === t2)
      return null;
    if ("string" != typeof t2)
      return t2;
    try {
      return JSON.parse(decodeURIComponent(t2));
    } catch (e2) {
      return t2;
    }
  }
  function H(t2) {
    return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
  }
  const B = { setDataAttribute(t2, e2, i2) {
    t2.setAttribute(`data-bs-${H(e2)}`, i2);
  }, removeDataAttribute(t2, e2) {
    t2.removeAttribute(`data-bs-${H(e2)}`);
  }, getDataAttributes(t2) {
    if (!t2)
      return {};
    const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
    for (const s2 of i2) {
      let i3 = s2.replace(/^bs/, "");
      i3 = i3.charAt(0).toLowerCase() + i3.slice(1, i3.length), e2[i3] = z(t2.dataset[s2]);
    }
    return e2;
  }, getDataAttribute: (t2, e2) => z(t2.getAttribute(`data-bs-${H(e2)}`)) };
  class q {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2;
    }
    _mergeConfigObj(t2, e2) {
      const i2 = l(e2) ? B.getDataAttribute(e2, "config") : {};
      return { ...this.constructor.Default, ..."object" == typeof i2 ? i2 : {}, ...l(e2) ? B.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
    }
    _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
      for (const [s2, n2] of Object.entries(e2)) {
        const e3 = t2[s2], o2 = l(e3) ? "element" : null == (i2 = e3) ? `${i2}` : Object.prototype.toString.call(i2).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(n2).test(o2))
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s2}" provided type "${o2}" but expected type "${n2}".`);
      }
      var i2;
    }
  }
  class W extends q {
    constructor(t2, e2) {
      super(), (t2 = c(t2)) && (this._element = t2, this._config = this._getConfig(e2), n.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      n.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY);
      for (const t2 of Object.getOwnPropertyNames(this))
        this[t2] = null;
    }
    _queueCallback(t2, e2, i2 = true) {
      y(t2, e2, i2);
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    static getInstance(t2) {
      return n.get(c(t2), this.DATA_KEY);
    }
    static getOrCreateInstance(t2, e2 = {}) {
      return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
    }
    static get VERSION() {
      return "5.3.3";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t2) {
      return `${t2}${this.EVENT_KEY}`;
    }
  }
  const R = (t2) => {
    let e2 = t2.getAttribute("data-bs-target");
    if (!e2 || "#" === e2) {
      let i2 = t2.getAttribute("href");
      if (!i2 || !i2.includes("#") && !i2.startsWith("."))
        return null;
      i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
    }
    return e2 ? e2.split(",").map((t3) => r(t3)).join(",") : null;
  }, K = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
    const i2 = [];
    let s2 = t2.parentNode.closest(e2);
    for (; s2; )
      i2.push(s2), s2 = s2.parentNode.closest(e2);
    return i2;
  }, prev(t2, e2) {
    let i2 = t2.previousElementSibling;
    for (; i2; ) {
      if (i2.matches(e2))
        return [i2];
      i2 = i2.previousElementSibling;
    }
    return [];
  }, next(t2, e2) {
    let i2 = t2.nextElementSibling;
    for (; i2; ) {
      if (i2.matches(e2))
        return [i2];
      i2 = i2.nextElementSibling;
    }
    return [];
  }, focusableChildren(t2) {
    const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
    return this.find(e2, t2).filter((t3) => !d(t3) && h(t3));
  }, getSelectorFromElement(t2) {
    const e2 = R(t2);
    return e2 && K.findOne(e2) ? e2 : null;
  }, getElementFromSelector(t2) {
    const e2 = R(t2);
    return e2 ? K.findOne(e2) : null;
  }, getMultipleElementsFromSelector(t2) {
    const e2 = R(t2);
    return e2 ? K.find(e2) : [];
  } }, V = (t2, e2 = "hide") => {
    const i2 = `click.dismiss${t2.EVENT_KEY}`, s2 = t2.NAME;
    j.on(document, i2, `[data-bs-dismiss="${s2}"]`, function(i3) {
      if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), d(this))
        return;
      const n2 = K.getElementFromSelector(this) || this.closest(`.${s2}`);
      t2.getOrCreateInstance(n2)[e2]();
    });
  }, Q = ".bs.alert", X = `close${Q}`, Y = `closed${Q}`;
  class U extends W {
    static get NAME() {
      return "alert";
    }
    close() {
      if (j.trigger(this._element, X).defaultPrevented)
        return;
      this._element.classList.remove("show");
      const t2 = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t2);
    }
    _destroyElement() {
      this._element.remove(), j.trigger(this._element, Y), this.dispose();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = U.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
            throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  V(U, "close"), b(U);
  const G = '[data-bs-toggle="button"]';
  class J extends W {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = J.getOrCreateInstance(this);
        "toggle" === t2 && e2[t2]();
      });
    }
  }
  j.on(document, "click.bs.button.data-api", G, (t2) => {
    t2.preventDefault();
    const e2 = t2.target.closest(G);
    J.getOrCreateInstance(e2).toggle();
  }), b(J);
  const Z = ".bs.swipe", tt = `touchstart${Z}`, et = `touchmove${Z}`, it = `touchend${Z}`, st = `pointerdown${Z}`, nt = `pointerup${Z}`, ot = { endCallback: null, leftCallback: null, rightCallback: null }, rt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
  class at extends q {
    constructor(t2, e2) {
      super(), this._element = t2, t2 && at.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
    }
    static get Default() {
      return ot;
    }
    static get DefaultType() {
      return rt;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      j.off(this._element, Z);
    }
    _start(t2) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
    }
    _end(t2) {
      this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback);
    }
    _move(t2) {
      this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t2 = Math.abs(this._deltaX);
      if (t2 <= 40)
        return;
      const e2 = t2 / this._deltaX;
      this._deltaX = 0, e2 && v(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents ? (j.on(this._element, st, (t2) => this._start(t2)), j.on(this._element, nt, (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (j.on(this._element, tt, (t2) => this._start(t2)), j.on(this._element, et, (t2) => this._move(t2)), j.on(this._element, it, (t2) => this._end(t2)));
    }
    _eventIsPointerPenTouch(t2) {
      return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const lt = ".bs.carousel", ct = ".data-api", ht = "next", dt = "prev", ut = "left", _t = "right", gt = `slide${lt}`, ft = `slid${lt}`, mt = `keydown${lt}`, pt = `mouseenter${lt}`, bt = `mouseleave${lt}`, vt = `dragstart${lt}`, yt = `load${lt}${ct}`, wt = `click${lt}${ct}`, At = "carousel", Et = "active", Ct = ".active", Tt = ".carousel-item", kt = Ct + Tt, $t = { ArrowLeft: _t, ArrowRight: ut }, St = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, Lt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
  class Ot extends W {
    constructor(t2, e2) {
      super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = K.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === At && this.cycle();
    }
    static get Default() {
      return St;
    }
    static get DefaultType() {
      return Lt;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(ht);
    }
    nextWhenVisible() {
      !document.hidden && h(this._element) && this.next();
    }
    prev() {
      this._slide(dt);
    }
    pause() {
      this._isSliding && a(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? j.one(this._element, ft, () => this.cycle()) : this.cycle());
    }
    to(t2) {
      const e2 = this._getItems();
      if (t2 > e2.length - 1 || t2 < 0)
        return;
      if (this._isSliding)
        return void j.one(this._element, ft, () => this.to(t2));
      const i2 = this._getItemIndex(this._getActive());
      if (i2 === t2)
        return;
      const s2 = t2 > i2 ? ht : dt;
      this._slide(s2, e2[t2]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.defaultInterval = t2.interval, t2;
    }
    _addEventListeners() {
      this._config.keyboard && j.on(this._element, mt, (t2) => this._keydown(t2)), "hover" === this._config.pause && (j.on(this._element, pt, () => this.pause()), j.on(this._element, bt, () => this._maybeEnableCycle())), this._config.touch && at.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t3 of K.find(".carousel-item img", this._element))
        j.on(t3, vt, (t4) => t4.preventDefault());
      const t2 = { leftCallback: () => this._slide(this._directionToOrder(ut)), rightCallback: () => this._slide(this._directionToOrder(_t)), endCallback: () => {
        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
      } };
      this._swipeHelper = new at(this._element, t2);
    }
    _keydown(t2) {
      if (/input|textarea/i.test(t2.target.tagName))
        return;
      const e2 = $t[t2.key];
      e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
    }
    _getItemIndex(t2) {
      return this._getItems().indexOf(t2);
    }
    _setActiveIndicatorElement(t2) {
      if (!this._indicatorsElement)
        return;
      const e2 = K.findOne(Ct, this._indicatorsElement);
      e2.classList.remove(Et), e2.removeAttribute("aria-current");
      const i2 = K.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
      i2 && (i2.classList.add(Et), i2.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t2 = this._activeElement || this._getActive();
      if (!t2)
        return;
      const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
      this._config.interval = e2 || this._config.defaultInterval;
    }
    _slide(t2, e2 = null) {
      if (this._isSliding)
        return;
      const i2 = this._getActive(), s2 = t2 === ht, n2 = e2 || w(this._getItems(), i2, s2, this._config.wrap);
      if (n2 === i2)
        return;
      const o2 = this._getItemIndex(n2), r2 = (e3) => j.trigger(this._element, e3, { relatedTarget: n2, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 });
      if (r2(gt).defaultPrevented)
        return;
      if (!i2 || !n2)
        return;
      const a2 = Boolean(this._interval);
      this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = n2;
      const l2 = s2 ? "carousel-item-start" : "carousel-item-end", c2 = s2 ? "carousel-item-next" : "carousel-item-prev";
      n2.classList.add(c2), g(n2), i2.classList.add(l2), n2.classList.add(l2), this._queueCallback(() => {
        n2.classList.remove(l2, c2), n2.classList.add(Et), i2.classList.remove(Et, c2, l2), this._isSliding = false, r2(ft);
      }, i2, this._isAnimated()), a2 && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return K.findOne(kt, this._element);
    }
    _getItems() {
      return K.find(Tt, this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
    _directionToOrder(t2) {
      return p() ? t2 === ut ? dt : ht : t2 === ut ? ht : dt;
    }
    _orderToDirection(t2) {
      return p() ? t2 === dt ? ut : _t : t2 === dt ? _t : ut;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Ot.getOrCreateInstance(this, t2);
        if ("number" != typeof t2) {
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
              throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        } else
          e2.to(t2);
      });
    }
  }
  j.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", function(t2) {
    const e2 = K.getElementFromSelector(this);
    if (!e2 || !e2.classList.contains(At))
      return;
    t2.preventDefault();
    const i2 = Ot.getOrCreateInstance(e2), s2 = this.getAttribute("data-bs-slide-to");
    return s2 ? (i2.to(s2), void i2._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
  }), j.on(window, yt, () => {
    const t2 = K.find('[data-bs-ride="carousel"]');
    for (const e2 of t2)
      Ot.getOrCreateInstance(e2);
  }), b(Ot);
  const It = ".bs.collapse", Dt = `show${It}`, Nt = `shown${It}`, Pt = `hide${It}`, xt = `hidden${It}`, Mt = `click${It}.data-api`, jt = "show", Ft = "collapse", zt = "collapsing", Ht = `:scope .${Ft} .${Ft}`, Bt = '[data-bs-toggle="collapse"]', qt = { parent: null, toggle: true }, Wt = { parent: "(null|element)", toggle: "boolean" };
  class Rt extends W {
    constructor(t2, e2) {
      super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
      const i2 = K.find(Bt);
      for (const t3 of i2) {
        const e3 = K.getSelectorFromElement(t3), i3 = K.find(e3).filter((t4) => t4 === this._element);
        null !== e3 && i3.length && this._triggerArray.push(t3);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return qt;
    }
    static get DefaultType() {
      return Wt;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown())
        return;
      let t2 = [];
      if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => Rt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning)
        return;
      if (j.trigger(this._element, Dt).defaultPrevented)
        return;
      for (const e3 of t2)
        e3.hide();
      const e2 = this._getDimension();
      this._element.classList.remove(Ft), this._element.classList.add(zt), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(zt), this._element.classList.add(Ft, jt), this._element.style[e2] = "", j.trigger(this._element, Nt);
      }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown())
        return;
      if (j.trigger(this._element, Pt).defaultPrevented)
        return;
      const t2 = this._getDimension();
      this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, g(this._element), this._element.classList.add(zt), this._element.classList.remove(Ft, jt);
      for (const t3 of this._triggerArray) {
        const e2 = K.getElementFromSelector(t3);
        e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
      }
      this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(zt), this._element.classList.add(Ft), j.trigger(this._element, xt);
      }, this._element, true);
    }
    _isShown(t2 = this._element) {
      return t2.classList.contains(jt);
    }
    _configAfterMerge(t2) {
      return t2.toggle = Boolean(t2.toggle), t2.parent = c(t2.parent), t2;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }
    _initializeChildren() {
      if (!this._config.parent)
        return;
      const t2 = this._getFirstLevelChildren(Bt);
      for (const e2 of t2) {
        const t3 = K.getElementFromSelector(e2);
        t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
      }
    }
    _getFirstLevelChildren(t2) {
      const e2 = K.find(Ht, this._config.parent);
      return K.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
    }
    _addAriaAndCollapsedClass(t2, e2) {
      if (t2.length)
        for (const i2 of t2)
          i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
    }
    static jQueryInterface(t2) {
      const e2 = {};
      return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
        const i2 = Rt.getOrCreateInstance(this, e2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2])
            throw new TypeError(`No method named "${t2}"`);
          i2[t2]();
        }
      });
    }
  }
  j.on(document, Mt, Bt, function(t2) {
    ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
    for (const t3 of K.getMultipleElementsFromSelector(this))
      Rt.getOrCreateInstance(t3, { toggle: false }).toggle();
  }), b(Rt);
  const Kt = "dropdown", Vt = ".bs.dropdown", Qt = ".data-api", Xt = "ArrowUp", Yt = "ArrowDown", Ut = `hide${Vt}`, Gt = `hidden${Vt}`, Jt = `show${Vt}`, Zt = `shown${Vt}`, te = `click${Vt}${Qt}`, ee = `keydown${Vt}${Qt}`, ie = `keyup${Vt}${Qt}`, se = "show", ne = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', oe = `${ne}.${se}`, re = ".dropdown-menu", ae = p() ? "top-end" : "top-start", le = p() ? "top-start" : "top-end", ce = p() ? "bottom-end" : "bottom-start", he = p() ? "bottom-start" : "bottom-end", de = p() ? "left-start" : "right-start", ue = p() ? "right-start" : "left-start", _e = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, ge = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
  class fe extends W {
    constructor(t2, e2) {
      super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = K.next(this._element, re)[0] || K.prev(this._element, re)[0] || K.findOne(re, this._parent), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return _e;
    }
    static get DefaultType() {
      return ge;
    }
    static get NAME() {
      return Kt;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (d(this._element) || this._isShown())
        return;
      const t2 = { relatedTarget: this._element };
      if (!j.trigger(this._element, Jt, t2).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
          for (const t3 of [].concat(...document.body.children))
            j.on(t3, "mouseover", _);
        this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(se), this._element.classList.add(se), j.trigger(this._element, Zt, t2);
      }
    }
    hide() {
      if (d(this._element) || !this._isShown())
        return;
      const t2 = { relatedTarget: this._element };
      this._completeHide(t2);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(t2) {
      if (!j.trigger(this._element, Ut, t2).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t3 of [].concat(...document.body.children))
            j.off(t3, "mouseover", _);
        this._popper && this._popper.destroy(), this._menu.classList.remove(se), this._element.classList.remove(se), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, Gt, t2);
      }
    }
    _getConfig(t2) {
      if ("object" == typeof (t2 = super._getConfig(t2)).reference && !l(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect)
        throw new TypeError(`${Kt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t2;
    }
    _createPopper() {
      if (void 0 === i)
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t2 = this._element;
      "parent" === this._config.reference ? t2 = this._parent : l(this._config.reference) ? t2 = c(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
      const e2 = this._getPopperConfig();
      this._popper = i.createPopper(t2, this._menu, e2);
    }
    _isShown() {
      return this._menu.classList.contains(se);
    }
    _getPlacement() {
      const t2 = this._parent;
      if (t2.classList.contains("dropend"))
        return de;
      if (t2.classList.contains("dropstart"))
        return ue;
      if (t2.classList.contains("dropup-center"))
        return "top";
      if (t2.classList.contains("dropdown-center"))
        return "bottom";
      const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t2.classList.contains("dropup") ? e2 ? le : ae : e2 ? he : ce;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig() {
      const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ...v(this._config.popperConfig, [t2]) };
    }
    _selectMenuItem({ key: t2, target: e2 }) {
      const i2 = K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => h(t3));
      i2.length && w(i2, e2, t2 === Yt, !i2.includes(e2)).focus();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = fe.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2])
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
    static clearMenus(t2) {
      if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)
        return;
      const e2 = K.find(oe);
      for (const i2 of e2) {
        const e3 = fe.getInstance(i2);
        if (!e3 || false === e3._config.autoClose)
          continue;
        const s2 = t2.composedPath(), n2 = s2.includes(e3._menu);
        if (s2.includes(e3._element) || "inside" === e3._config.autoClose && !n2 || "outside" === e3._config.autoClose && n2)
          continue;
        if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName)))
          continue;
        const o2 = { relatedTarget: e3._element };
        "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
      }
    }
    static dataApiKeydownHandler(t2) {
      const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, s2 = [Xt, Yt].includes(t2.key);
      if (!s2 && !i2)
        return;
      if (e2 && !i2)
        return;
      t2.preventDefault();
      const n2 = this.matches(ne) ? this : K.prev(this, ne)[0] || K.next(this, ne)[0] || K.findOne(ne, t2.delegateTarget.parentNode), o2 = fe.getOrCreateInstance(n2);
      if (s2)
        return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
      o2._isShown() && (t2.stopPropagation(), o2.hide(), n2.focus());
    }
  }
  j.on(document, ee, ne, fe.dataApiKeydownHandler), j.on(document, ee, re, fe.dataApiKeydownHandler), j.on(document, te, fe.clearMenus), j.on(document, ie, fe.clearMenus), j.on(document, te, ne, function(t2) {
    t2.preventDefault(), fe.getOrCreateInstance(this).toggle();
  }), b(fe);
  const me = "backdrop", pe = "show", be = `mousedown.bs.${me}`, ve = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, ye = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
  class we extends q {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
    }
    static get Default() {
      return ve;
    }
    static get DefaultType() {
      return ye;
    }
    static get NAME() {
      return me;
    }
    show(t2) {
      if (!this._config.isVisible)
        return void v(t2);
      this._append();
      const e2 = this._getElement();
      this._config.isAnimated && g(e2), e2.classList.add(pe), this._emulateAnimation(() => {
        v(t2);
      });
    }
    hide(t2) {
      this._config.isVisible ? (this._getElement().classList.remove(pe), this._emulateAnimation(() => {
        this.dispose(), v(t2);
      })) : v(t2);
    }
    dispose() {
      this._isAppended && (j.off(this._element, be), this._element.remove(), this._isAppended = false);
    }
    _getElement() {
      if (!this._element) {
        const t2 = document.createElement("div");
        t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
      }
      return this._element;
    }
    _configAfterMerge(t2) {
      return t2.rootElement = c(t2.rootElement), t2;
    }
    _append() {
      if (this._isAppended)
        return;
      const t2 = this._getElement();
      this._config.rootElement.append(t2), j.on(t2, be, () => {
        v(this._config.clickCallback);
      }), this._isAppended = true;
    }
    _emulateAnimation(t2) {
      y(t2, this._getElement(), this._config.isAnimated);
    }
  }
  const Ae = ".bs.focustrap", Ee = `focusin${Ae}`, Ce = `keydown.tab${Ae}`, Te = "backward", ke = { autofocus: true, trapElement: null }, $e = { autofocus: "boolean", trapElement: "element" };
  class Se extends q {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
    }
    static get Default() {
      return ke;
    }
    static get DefaultType() {
      return $e;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), j.off(document, Ae), j.on(document, Ee, (t2) => this._handleFocusin(t2)), j.on(document, Ce, (t2) => this._handleKeydown(t2)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, j.off(document, Ae));
    }
    _handleFocusin(t2) {
      const { trapElement: e2 } = this._config;
      if (t2.target === document || t2.target === e2 || e2.contains(t2.target))
        return;
      const i2 = K.focusableChildren(e2);
      0 === i2.length ? e2.focus() : this._lastTabNavDirection === Te ? i2[i2.length - 1].focus() : i2[0].focus();
    }
    _handleKeydown(t2) {
      "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? Te : "forward");
    }
  }
  const Le = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Oe = ".sticky-top", Ie = "padding-right", De = "margin-right";
  class Ne {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t2 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t2);
    }
    hide() {
      const t2 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, Ie, (e2) => e2 + t2), this._setElementAttributes(Le, Ie, (e2) => e2 + t2), this._setElementAttributes(Oe, De, (e2) => e2 - t2);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ie), this._resetElementAttributes(Le, Ie), this._resetElementAttributes(Oe, De);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(t2, e2, i2) {
      const s2 = this.getWidth();
      this._applyManipulationCallback(t2, (t3) => {
        if (t3 !== this._element && window.innerWidth > t3.clientWidth + s2)
          return;
        this._saveInitialAttribute(t3, e2);
        const n2 = window.getComputedStyle(t3).getPropertyValue(e2);
        t3.style.setProperty(e2, `${i2(Number.parseFloat(n2))}px`);
      });
    }
    _saveInitialAttribute(t2, e2) {
      const i2 = t2.style.getPropertyValue(e2);
      i2 && B.setDataAttribute(t2, e2, i2);
    }
    _resetElementAttributes(t2, e2) {
      this._applyManipulationCallback(t2, (t3) => {
        const i2 = B.getDataAttribute(t3, e2);
        null !== i2 ? (B.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
      });
    }
    _applyManipulationCallback(t2, e2) {
      if (l(t2))
        e2(t2);
      else
        for (const i2 of K.find(t2, this._element))
          e2(i2);
    }
  }
  const Pe = ".bs.modal", xe = `hide${Pe}`, Me = `hidePrevented${Pe}`, je = `hidden${Pe}`, Fe = `show${Pe}`, ze = `shown${Pe}`, He = `resize${Pe}`, Be = `click.dismiss${Pe}`, qe = `mousedown.dismiss${Pe}`, We = `keydown.dismiss${Pe}`, Re = `click${Pe}.data-api`, Ke = "modal-open", Ve = "show", Qe = "modal-static", Xe = { backdrop: true, focus: true, keyboard: true }, Ye = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
  class Ue extends W {
    constructor(t2, e2) {
      super(t2, e2), this._dialog = K.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new Ne(), this._addEventListeners();
    }
    static get Default() {
      return Xe;
    }
    static get DefaultType() {
      return Ye;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || this._isTransitioning || j.trigger(this._element, Fe, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(Ke), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
    }
    hide() {
      this._isShown && !this._isTransitioning && (j.trigger(this._element, xe).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(Ve), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
    }
    dispose() {
      j.off(window, Pe), j.off(this._dialog, Pe), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new we({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new Se({ trapElement: this._element });
    }
    _showElement(t2) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const e2 = K.findOne(".modal-body", this._dialog);
      e2 && (e2.scrollTop = 0), g(this._element), this._element.classList.add(Ve), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, j.trigger(this._element, ze, { relatedTarget: t2 });
      }, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      j.on(this._element, We, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
      }), j.on(window, He, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), j.on(this._element, qe, (t2) => {
        j.one(this._element, Be, (e2) => {
          this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove(Ke), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, je);
      });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (j.trigger(this._element, Me).defaultPrevented)
        return;
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
      "hidden" === e2 || this._element.classList.contains(Qe) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(Qe), this._queueCallback(() => {
        this._element.classList.remove(Qe), this._queueCallback(() => {
          this._element.style.overflowY = e2;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
      if (i2 && !t2) {
        const t3 = p() ? "paddingLeft" : "paddingRight";
        this._element.style[t3] = `${e2}px`;
      }
      if (!i2 && t2) {
        const t3 = p() ? "paddingRight" : "paddingLeft";
        this._element.style[t3] = `${e2}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(t2, e2) {
      return this.each(function() {
        const i2 = Ue.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2])
            throw new TypeError(`No method named "${t2}"`);
          i2[t2](e2);
        }
      });
    }
  }
  j.on(document, Re, '[data-bs-toggle="modal"]', function(t2) {
    const e2 = K.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), j.one(e2, Fe, (t3) => {
      t3.defaultPrevented || j.one(e2, je, () => {
        h(this) && this.focus();
      });
    });
    const i2 = K.findOne(".modal.show");
    i2 && Ue.getInstance(i2).hide(), Ue.getOrCreateInstance(e2).toggle(this);
  }), V(Ue), b(Ue);
  const Ge = ".bs.offcanvas", Je = ".data-api", Ze = `load${Ge}${Je}`, ti = "show", ei = "showing", ii = "hiding", si = ".offcanvas.show", ni = `show${Ge}`, oi = `shown${Ge}`, ri = `hide${Ge}`, ai = `hidePrevented${Ge}`, li = `hidden${Ge}`, ci = `resize${Ge}`, hi = `click${Ge}${Je}`, di = `keydown.dismiss${Ge}`, ui = { backdrop: true, keyboard: true, scroll: false }, _i = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
  class gi extends W {
    constructor(t2, e2) {
      super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get Default() {
      return ui;
    }
    static get DefaultType() {
      return _i;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || j.trigger(this._element, ni, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new Ne().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(ei), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(ti), this._element.classList.remove(ei), j.trigger(this._element, oi, { relatedTarget: t2 });
      }, this._element, true));
    }
    hide() {
      this._isShown && (j.trigger(this._element, ri).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add(ii), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove(ti, ii), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Ne().reset(), j.trigger(this._element, li);
      }, this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t2 = Boolean(this._config.backdrop);
      return new we({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
        "static" !== this._config.backdrop ? this.hide() : j.trigger(this._element, ai);
      } : null });
    }
    _initializeFocusTrap() {
      return new Se({ trapElement: this._element });
    }
    _addEventListeners() {
      j.on(this._element, di, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : j.trigger(this._element, ai));
      });
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = gi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
            throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  j.on(document, hi, '[data-bs-toggle="offcanvas"]', function(t2) {
    const e2 = K.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), d(this))
      return;
    j.one(e2, li, () => {
      h(this) && this.focus();
    });
    const i2 = K.findOne(si);
    i2 && i2 !== e2 && gi.getInstance(i2).hide(), gi.getOrCreateInstance(e2).toggle(this);
  }), j.on(window, Ze, () => {
    for (const t2 of K.find(si))
      gi.getOrCreateInstance(t2).show();
  }), j.on(window, ci, () => {
    for (const t2 of K.find("[aria-modal][class*=show][class*=offcanvas-]"))
      "fixed" !== getComputedStyle(t2).position && gi.getOrCreateInstance(t2).hide();
  }), V(gi), b(gi);
  const fi = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, mi = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), pi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, bi = (t2, e2) => {
    const i2 = t2.nodeName.toLowerCase();
    return e2.includes(i2) ? !mi.has(i2) || Boolean(pi.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
  }, vi = { allowList: fi, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, yi = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, wi = { entry: "(string|element|function|null)", selector: "(string|element)" };
  class Ai extends q {
    constructor(t2) {
      super(), this._config = this._getConfig(t2);
    }
    static get Default() {
      return vi;
    }
    static get DefaultType() {
      return yi;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t2) {
      return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
    }
    toHtml() {
      const t2 = document.createElement("div");
      t2.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e3, i3] of Object.entries(this._config.content))
        this._setContent(t2, i3, e3);
      const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
      return i2 && e2.classList.add(...i2.split(" ")), e2;
    }
    _typeCheckConfig(t2) {
      super._typeCheckConfig(t2), this._checkContent(t2.content);
    }
    _checkContent(t2) {
      for (const [e2, i2] of Object.entries(t2))
        super._typeCheckConfig({ selector: e2, entry: i2 }, wi);
    }
    _setContent(t2, e2, i2) {
      const s2 = K.findOne(i2, t2);
      s2 && ((e2 = this._resolvePossibleFunction(e2)) ? l(e2) ? this._putElementInTemplate(c(e2), s2) : this._config.html ? s2.innerHTML = this._maybeSanitize(e2) : s2.textContent = e2 : s2.remove());
    }
    _maybeSanitize(t2) {
      return this._config.sanitize ? function(t3, e2, i2) {
        if (!t3.length)
          return t3;
        if (i2 && "function" == typeof i2)
          return i2(t3);
        const s2 = new window.DOMParser().parseFromString(t3, "text/html"), n2 = [].concat(...s2.body.querySelectorAll("*"));
        for (const t4 of n2) {
          const i3 = t4.nodeName.toLowerCase();
          if (!Object.keys(e2).includes(i3)) {
            t4.remove();
            continue;
          }
          const s3 = [].concat(...t4.attributes), n3 = [].concat(e2["*"] || [], e2[i3] || []);
          for (const e3 of s3)
            bi(e3, n3) || t4.removeAttribute(e3.nodeName);
        }
        return s2.body.innerHTML;
      }(t2, this._config.allowList, this._config.sanitizeFn) : t2;
    }
    _resolvePossibleFunction(t2) {
      return v(t2, [this]);
    }
    _putElementInTemplate(t2, e2) {
      if (this._config.html)
        return e2.innerHTML = "", void e2.append(t2);
      e2.textContent = t2.textContent;
    }
  }
  const Ei = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Ci = "fade", Ti = "show", ki = ".modal", $i = "hide.bs.modal", Si = "hover", Li = "focus", Oi = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, Ii = { allowList: fi, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, Di = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
  class Ni extends W {
    constructor(t2, e2) {
      if (void 0 === i)
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }
    static get Default() {
      return Ii;
    }
    static get DefaultType() {
      return Di;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout), j.off(this._element.closest(ki), $i, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled)
        return;
      const t2 = j.trigger(this._element, this.constructor.eventName("show")), e2 = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (t2.defaultPrevented || !e2)
        return;
      this._disposePopper();
      const i2 = this._getTipElement();
      this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
      const { container: s2 } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (s2.append(i2), j.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i2), i2.classList.add(Ti), "ontouchstart" in document.documentElement)
        for (const t3 of [].concat(...document.body.children))
          j.on(t3, "mouseover", _);
      this._queueCallback(() => {
        j.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
      }, this.tip, this._isAnimated());
    }
    hide() {
      if (this._isShown() && !j.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        if (this._getTipElement().classList.remove(Ti), "ontouchstart" in document.documentElement)
          for (const t2 of [].concat(...document.body.children))
            j.off(t2, "mouseover", _);
        this._activeTrigger.click = false, this._activeTrigger[Li] = false, this._activeTrigger[Si] = false, this._isHovered = null, this._queueCallback(() => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.eventName("hidden")));
        }, this.tip, this._isAnimated());
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
    }
    _createTipElement(t2) {
      const e2 = this._getTemplateFactory(t2).toHtml();
      if (!e2)
        return null;
      e2.classList.remove(Ci, Ti), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i2 = ((t3) => {
        do {
          t3 += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t3));
        return t3;
      })(this.constructor.NAME).toString();
      return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(Ci), e2;
    }
    setContent(t2) {
      this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t2) {
      return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new Ai({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(t2) {
      return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(Ci);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(Ti);
    }
    _createPopper(t2) {
      const e2 = v(this._config.placement, [this, t2, this._element]), s2 = Oi[e2.toUpperCase()];
      return i.createPopper(this._element, t2, this._getPopperConfig(s2));
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _resolvePossibleFunction(t2) {
      return v(t2, [this._element]);
    }
    _getPopperConfig(t2) {
      const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
        this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
      } }] };
      return { ...e2, ...v(this._config.popperConfig, [e2]) };
    }
    _setListeners() {
      const t2 = this._config.trigger.split(" ");
      for (const e2 of t2)
        if ("click" === e2)
          j.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
            this._initializeOnDelegatedTarget(t3).toggle();
          });
        else if ("manual" !== e2) {
          const t3 = e2 === Si ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === Si ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
          j.on(this._element, t3, this._config.selector, (t4) => {
            const e3 = this._initializeOnDelegatedTarget(t4);
            e3._activeTrigger["focusin" === t4.type ? Li : Si] = true, e3._enter();
          }), j.on(this._element, i2, this._config.selector, (t4) => {
            const e3 = this._initializeOnDelegatedTarget(t4);
            e3._activeTrigger["focusout" === t4.type ? Li : Si] = e3._element.contains(t4.relatedTarget), e3._leave();
          });
        }
      this._hideModalHandler = () => {
        this._element && this.hide();
      }, j.on(this._element.closest(ki), $i, this._hideModalHandler);
    }
    _fixTitle() {
      const t2 = this._element.getAttribute("title");
      t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
    }
    _setTimeout(t2, e2) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(t2) {
      const e2 = B.getDataAttributes(this._element);
      for (const t3 of Object.keys(e2))
        Ei.has(t3) && delete e2[t3];
      return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2.container = false === t2.container ? document.body : c(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
    }
    _getDelegateConfig() {
      const t2 = {};
      for (const [e2, i2] of Object.entries(this._config))
        this.constructor.Default[e2] !== i2 && (t2[e2] = i2);
      return t2.selector = false, t2.trigger = "manual", t2;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Ni.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2])
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  b(Ni);
  const Pi = { ...Ni.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, xi = { ...Ni.DefaultType, content: "(null|string|element|function)" };
  class Mi extends Ni {
    static get Default() {
      return Pi;
    }
    static get DefaultType() {
      return xi;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Mi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2])
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  b(Mi);
  const ji = ".bs.scrollspy", Fi = `activate${ji}`, zi = `click${ji}`, Hi = `load${ji}.data-api`, Bi = "active", qi = "[href]", Wi = ".nav-link", Ri = `${Wi}, .nav-item > ${Wi}, .list-group-item`, Ki = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, Vi = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
  class Qi extends W {
    constructor(t2, e2) {
      super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
    }
    static get Default() {
      return Ki;
    }
    static get DefaultType() {
      return Vi;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const t2 of this._observableSections.values())
        this._observer.observe(t2);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.target = c(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (j.off(this._config.target, zi), j.on(this._config.target, zi, qi, (t2) => {
        const e2 = this._observableSections.get(t2.target.hash);
        if (e2) {
          t2.preventDefault();
          const i2 = this._rootElement || window, s2 = e2.offsetTop - this._element.offsetTop;
          if (i2.scrollTo)
            return void i2.scrollTo({ top: s2, behavior: "smooth" });
          i2.scrollTop = s2;
        }
      }));
    }
    _getNewObserver() {
      const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
      return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
    }
    _observerCallback(t2) {
      const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
        this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
      }, s2 = (this._rootElement || document.documentElement).scrollTop, n2 = s2 >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = s2;
      for (const o2 of t2) {
        if (!o2.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e2(o2));
          continue;
        }
        const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (n2 && t3) {
          if (i2(o2), !s2)
            return;
        } else
          n2 || t3 || i2(o2);
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
      const t2 = K.find(qi, this._config.target);
      for (const e2 of t2) {
        if (!e2.hash || d(e2))
          continue;
        const t3 = K.findOne(decodeURI(e2.hash), this._element);
        h(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
      }
    }
    _process(t2) {
      this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(Bi), this._activateParents(t2), j.trigger(this._element, Fi, { relatedTarget: t2 }));
    }
    _activateParents(t2) {
      if (t2.classList.contains("dropdown-item"))
        K.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(Bi);
      else
        for (const e2 of K.parents(t2, ".nav, .list-group"))
          for (const t3 of K.prev(e2, Ri))
            t3.classList.add(Bi);
    }
    _clearActiveClass(t2) {
      t2.classList.remove(Bi);
      const e2 = K.find(`${qi}.${Bi}`, t2);
      for (const t3 of e2)
        t3.classList.remove(Bi);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Qi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  j.on(window, Hi, () => {
    for (const t2 of K.find('[data-bs-spy="scroll"]'))
      Qi.getOrCreateInstance(t2);
  }), b(Qi);
  const Xi = ".bs.tab", Yi = `hide${Xi}`, Ui = `hidden${Xi}`, Gi = `show${Xi}`, Ji = `shown${Xi}`, Zi = `click${Xi}`, ts = `keydown${Xi}`, es = `load${Xi}`, is = "ArrowLeft", ss = "ArrowRight", ns = "ArrowUp", os = "ArrowDown", rs = "Home", as = "End", ls = "active", cs = "fade", hs = "show", ds = ".dropdown-toggle", us = `:not(${ds})`, _s = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', gs = `.nav-link${us}, .list-group-item${us}, [role="tab"]${us}, ${_s}`, fs = `.${ls}[data-bs-toggle="tab"], .${ls}[data-bs-toggle="pill"], .${ls}[data-bs-toggle="list"]`;
  class ms extends W {
    constructor(t2) {
      super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), j.on(this._element, ts, (t3) => this._keydown(t3)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t2 = this._element;
      if (this._elemIsActive(t2))
        return;
      const e2 = this._getActiveElem(), i2 = e2 ? j.trigger(e2, Yi, { relatedTarget: t2 }) : null;
      j.trigger(t2, Gi, { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
    }
    _activate(t2, e2) {
      t2 && (t2.classList.add(ls), this._activate(K.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), j.trigger(t2, Ji, { relatedTarget: e2 })) : t2.classList.add(hs);
      }, t2, t2.classList.contains(cs)));
    }
    _deactivate(t2, e2) {
      t2 && (t2.classList.remove(ls), t2.blur(), this._deactivate(K.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), j.trigger(t2, Ui, { relatedTarget: e2 })) : t2.classList.remove(hs);
      }, t2, t2.classList.contains(cs)));
    }
    _keydown(t2) {
      if (![is, ss, ns, os, rs, as].includes(t2.key))
        return;
      t2.stopPropagation(), t2.preventDefault();
      const e2 = this._getChildren().filter((t3) => !d(t3));
      let i2;
      if ([rs, as].includes(t2.key))
        i2 = e2[t2.key === rs ? 0 : e2.length - 1];
      else {
        const s2 = [ss, os].includes(t2.key);
        i2 = w(e2, t2.target, s2, true);
      }
      i2 && (i2.focus({ preventScroll: true }), ms.getOrCreateInstance(i2).show());
    }
    _getChildren() {
      return K.find(gs, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
    }
    _setInitialAttributes(t2, e2) {
      this._setAttributeIfNotExists(t2, "role", "tablist");
      for (const t3 of e2)
        this._setInitialAttributesOnChild(t3);
    }
    _setInitialAttributesOnChild(t2) {
      t2 = this._getInnerElement(t2);
      const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
      t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
    }
    _setInitialAttributesOnTargetPanel(t2) {
      const e2 = K.getElementFromSelector(t2);
      e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `${t2.id}`));
    }
    _toggleDropDown(t2, e2) {
      const i2 = this._getOuterElement(t2);
      if (!i2.classList.contains("dropdown"))
        return;
      const s2 = (t3, s3) => {
        const n2 = K.findOne(t3, i2);
        n2 && n2.classList.toggle(s3, e2);
      };
      s2(ds, ls), s2(".dropdown-menu", hs), i2.setAttribute("aria-expanded", e2);
    }
    _setAttributeIfNotExists(t2, e2, i2) {
      t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
    }
    _elemIsActive(t2) {
      return t2.classList.contains(ls);
    }
    _getInnerElement(t2) {
      return t2.matches(gs) ? t2 : K.findOne(gs, t2);
    }
    _getOuterElement(t2) {
      return t2.closest(".nav-item, .list-group-item") || t2;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = ms.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2)
            throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  j.on(document, Zi, _s, function(t2) {
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), d(this) || ms.getOrCreateInstance(this).show();
  }), j.on(window, es, () => {
    for (const t2 of K.find(fs))
      ms.getOrCreateInstance(t2);
  }), b(ms);
  const ps = ".bs.toast", bs = `mouseover${ps}`, vs = `mouseout${ps}`, ys = `focusin${ps}`, ws = `focusout${ps}`, As = `hide${ps}`, Es = `hidden${ps}`, Cs = `show${ps}`, Ts = `shown${ps}`, ks = "hide", $s = "show", Ss = "showing", Ls = { animation: "boolean", autohide: "boolean", delay: "number" }, Os = { animation: true, autohide: true, delay: 5e3 };
  class Is extends W {
    constructor(t2, e2) {
      super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get Default() {
      return Os;
    }
    static get DefaultType() {
      return Ls;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      j.trigger(this._element, Cs).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(ks), g(this._element), this._element.classList.add($s, Ss), this._queueCallback(() => {
        this._element.classList.remove(Ss), j.trigger(this._element, Ts), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
    hide() {
      this.isShown() && (j.trigger(this._element, As).defaultPrevented || (this._element.classList.add(Ss), this._queueCallback(() => {
        this._element.classList.add(ks), this._element.classList.remove(Ss, $s), j.trigger(this._element, Es);
      }, this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove($s), super.dispose();
    }
    isShown() {
      return this._element.classList.contains($s);
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(t2, e2) {
      switch (t2.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e2;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e2;
      }
      if (e2)
        return void this._clearTimeout();
      const i2 = t2.relatedTarget;
      this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
    }
    _setListeners() {
      j.on(this._element, bs, (t2) => this._onInteraction(t2, true)), j.on(this._element, vs, (t2) => this._onInteraction(t2, false)), j.on(this._element, ys, (t2) => this._onInteraction(t2, true)), j.on(this._element, ws, (t2) => this._onInteraction(t2, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Is.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2])
            throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  return V(Is), b(Is), { Alert: U, Button: J, Carousel: Ot, Collapse: Rt, Dropdown: fe, Modal: Ue, Offcanvas: gi, Popover: Mi, ScrollSpy: Qi, Tab: ms, Toast: Is, Tooltip: Ni };
});
//# sourceMappingURL=scripts.js.map
