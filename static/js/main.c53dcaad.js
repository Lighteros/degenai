/*! For license information please see main.c53dcaad.js.LICENSE.txt */
(() => {
  "use strict";
  var e = {
      730: (e, t, n) => {
        var r = n(43),
          a = n(853);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, l, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function x(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          j = Symbol.for("react.portal"),
          k = Symbol.for("react.fragment"),
          S = Symbol.for("react.strict_mode"),
          E = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          T = Symbol.for("react.suspense"),
          I = Symbol.for("react.suspense_list"),
          A = Symbol.for("react.memo"),
          R = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var L = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var z = Symbol.iterator;
        function _(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (z && e[z]) || e["@@iterator"])
            ? e
            : null;
        }
        var O,
          F = Object.assign;
        function U(e) {
          if (void 0 === O)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              O = (t && t[1]) || "";
            }
          return "\n" + O + e;
        }
        var D = !1;
        function B(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var s = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            s.includes("<anonymous>") &&
                            (s = s.replace("<anonymous>", e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? U(e) : "";
        }
        function M(e) {
          switch (e.tag) {
            case 5:
              return U(e.type);
            case 16:
              return U("Lazy");
            case 13:
              return U("Suspense");
            case 19:
              return U("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return "";
          }
        }
        function W(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case k:
              return "Fragment";
            case j:
              return "Portal";
            case E:
              return "Profiler";
            case S:
              return "StrictMode";
            case T:
              return "Suspense";
            case I:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case A:
                return null !== (t = e.displayName || null)
                  ? t
                  : W(e.type) || "Memo";
              case R:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (n) {}
            }
          return null;
        }
        function Q(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return W(t);
            case 8:
              return t === S ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function V(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = V(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function G(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function K(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Z(e, t) {
          null != (t = t.checked) && x(e, "checked", t, !1);
        }
        function J(e, t) {
          Z(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function $(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && G(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function le(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function se(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
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
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function xe(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var be = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var je = null,
          ke = null,
          Se = null;
        function Ee(e) {
          if ((e = xa(e))) {
            if ("function" !== typeof je) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = wa(t)), je(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          ke ? (Se ? Se.push(e) : (Se = [e])) : (ke = e);
        }
        function Ce() {
          if (ke) {
            var e = ke,
              t = Se;
            if (((Se = ke = null), Ee(e), t))
              for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Te() {}
        var Ie = !1;
        function Ae(e, t, n) {
          if (Ie) return e(t, n);
          Ie = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Ie = !1), (null !== ke || null !== Se) && (Te(), Ce());
          }
        }
        function Re(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = wa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Le = !1;
        if (u)
          try {
            var ze = {};
            Object.defineProperty(ze, "passive", {
              get: function () {
                Le = !0;
              },
            }),
              window.addEventListener("test", ze, ze),
              window.removeEventListener("test", ze, ze);
          } catch (ue) {
            Le = !1;
          }
        function _e(e, t, n, r, a, l, i, o, s) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Oe = !1,
          Fe = null,
          Ue = !1,
          De = null,
          Be = {
            onError: function (e) {
              (Oe = !0), (Fe = e);
            },
          };
        function Me(e, t, n, r, a, l, i, o, s) {
          (Oe = !1), (Fe = null), _e.apply(Be, arguments);
        }
        function We(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Qe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (We(e) !== e) throw Error(l(188));
        }
        function Ve(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return He(a), e;
                    if (i === r) return He(a), t;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var o = !1, s = a.child; s; ) {
                    if (s === n) {
                      (o = !0), (n = a), (r = i);
                      break;
                    }
                    if (s === r) {
                      (o = !0), (r = a), (n = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!o) {
                    for (s = i.child; s; ) {
                      if (s === n) {
                        (o = !0), (n = i), (r = a);
                        break;
                      }
                      if (s === r) {
                        (o = !0), (r = i), (n = a);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = a.unstable_scheduleCallback,
          Ge = a.unstable_cancelCallback,
          Xe = a.unstable_shouldYield,
          Ke = a.unstable_requestPaint,
          Ze = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          $e = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / st) | 0)) | 0;
              },
          ot = Math.log,
          st = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = dt(o)) : 0 !== (l &= i) && (r = dt(l));
          } else 0 !== (i = n & ~a) ? (r = dt(i)) : 0 !== l && (r = dt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var xt = 0;
        function bt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var wt,
          jt,
          kt,
          St,
          Et,
          Nt = !1,
          Ct = [],
          Pt = null,
          Tt = null,
          It = null,
          At = new Map(),
          Rt = new Map(),
          Lt = [],
          zt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function _t(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              It = null;
              break;
            case "pointerover":
            case "pointerout":
              At.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Rt.delete(t.pointerId);
          }
        }
        function Ot(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = xa(t)) && jt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = We(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Qe(n)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      kt(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ut(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Xt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = xa(n)) && jt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (be = r), n.target.dispatchEvent(r), (be = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          Ut(e) && n.delete(t);
        }
        function Bt() {
          (Nt = !1),
            null !== Pt && Ut(Pt) && (Pt = null),
            null !== Tt && Ut(Tt) && (Tt = null),
            null !== It && Ut(It) && (It = null),
            At.forEach(Dt),
            Rt.forEach(Dt);
        }
        function Mt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)));
        }
        function Wt(e) {
          function t(t) {
            return Mt(t, e);
          }
          if (0 < Ct.length) {
            Mt(Ct[0], e);
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Mt(Pt, e),
              null !== Tt && Mt(Tt, e),
              null !== It && Mt(It, e),
              At.forEach(t),
              Rt.forEach(t),
              n = 0;
            n < Lt.length;
            n++
          )
            (r = Lt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Lt.shift();
        }
        var Qt = b.ReactCurrentBatchConfig,
          Ht = !0;
        function Vt(e, t, n, r) {
          var a = xt,
            l = Qt.transition;
          Qt.transition = null;
          try {
            (xt = 1), Yt(e, t, n, r);
          } finally {
            (xt = a), (Qt.transition = l);
          }
        }
        function qt(e, t, n, r) {
          var a = xt,
            l = Qt.transition;
          Qt.transition = null;
          try {
            (xt = 4), Yt(e, t, n, r);
          } finally {
            (xt = a), (Qt.transition = l);
          }
        }
        function Yt(e, t, n, r) {
          if (Ht) {
            var a = Xt(e, t, n, r);
            if (null === a) Hr(e, t, r, Gt, n), _t(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Ot(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Tt = Ot(Tt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (It = Ot(It, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return At.set(l, Ot(At.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Rt.set(l, Ot(Rt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((_t(e, r), 4 & t && -1 < zt.indexOf(e))) {
              for (; null !== a; ) {
                var l = xa(a);
                if (
                  (null !== l && wt(l),
                  null === (l = Xt(e, t, n, r)) && Hr(e, t, r, Gt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Gt = null;
        function Xt(e, t, n, r) {
          if (((Gt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Qe(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Gt = e), null;
        }
        function Kt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case $e:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zt = null,
          Jt = null,
          $t = null;
        function en() {
          if ($t) return $t;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Zt ? Zt.value : Zt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return ($t = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          sn,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          dn = F({}, cn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = F({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: En,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((ln = e.screenX - sn.screenX),
                        (on = e.screenY - sn.screenY))
                      : (on = ln = 0),
                    (sn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          hn = an(pn),
          mn = an(F({}, pn, { dataTransfer: 0 })),
          vn = an(F({}, dn, { relatedTarget: 0 })),
          gn = an(
            F({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = F({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          xn = an(yn),
          bn = an(F({}, cn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          jn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          kn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function Sn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = kn[e]) && !!t[e];
        }
        function En() {
          return Sn;
        }
        var Nn = F({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? jn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: En,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cn = an(Nn),
          Pn = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tn = an(
            F({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: En,
            })
          ),
          In = an(
            F({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          An = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rn = an(An),
          Ln = [9, 13, 27, 32],
          zn = u && "CompositionEvent" in window,
          _n = null;
        u && "documentMode" in document && (_n = document.documentMode);
        var On = u && "TextEvent" in window && !_n,
          Fn = u && (!zn || (_n && 8 < _n && 11 >= _n)),
          Un = String.fromCharCode(32),
          Dn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Ln.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Mn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Wn = !1;
        var Qn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Qn[e.type] : "textarea" === t;
        }
        function Vn(e, t, n, r) {
          Ne(r),
            0 < (t = qr(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var qn = null,
          Yn = null;
        function Gn(e) {
          Ur(e, 0);
        }
        function Xn(e) {
          if (Y(ba(e))) return e;
        }
        function Kn(e, t) {
          if ("change" === e) return t;
        }
        var Zn = !1;
        if (u) {
          var Jn;
          if (u) {
            var $n = "oninput" in document;
            if (!$n) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                ($n = "function" === typeof er.oninput);
            }
            Jn = $n;
          } else Jn = !1;
          Zn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          qn && (qn.detachEvent("onpropertychange", nr), (Yn = qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Xn(Yn)) {
            var t = [];
            Vn(t, Yn, e, we(e)), Ae(Gn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), (qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Yn);
        }
        function lr(e, t) {
          if ("click" === e) return Xn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function sr(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!d.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = G(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = G((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = ur(n, l));
                var i = ur(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = u && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          xr = !1;
        function br(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          xr ||
            null == vr ||
            vr !== G(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && sr(yr, r)) ||
              ((yr = r),
              0 < (r = qr(gr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function wr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var jr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          kr = {},
          Sr = {};
        function Er(e) {
          if (kr[e]) return kr[e];
          if (!jr[e]) return e;
          var t,
            n = jr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Sr) return (kr[e] = n[t]);
          return e;
        }
        u &&
          ((Sr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete jr.animationend.animation,
            delete jr.animationiteration.animation,
            delete jr.animationstart.animation),
          "TransitionEvent" in window || delete jr.transitionend.transition);
        var Nr = Er("animationend"),
          Cr = Er("animationiteration"),
          Pr = Er("animationstart"),
          Tr = Er("transitionend"),
          Ir = new Map(),
          Ar =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Rr(e, t) {
          Ir.set(e, t), s(t, [e]);
        }
        for (var Lr = 0; Lr < Ar.length; Lr++) {
          var zr = Ar[Lr];
          Rr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)));
        }
        Rr(Nr, "onAnimationEnd"),
          Rr(Cr, "onAnimationIteration"),
          Rr(Pr, "onAnimationStart"),
          Rr("dblclick", "onDoubleClick"),
          Rr("focusin", "onFocus"),
          Rr("focusout", "onBlur"),
          Rr(Tr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var _r =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Or = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(_r)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, o, s, c) {
              if ((Me.apply(this, arguments), Oe)) {
                if (!Oe) throw Error(l(198));
                var u = Fe;
                (Oe = !1), (Fe = null), Ue || ((Ue = !0), (De = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ur(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    s = o.instance,
                    c = o.currentTarget;
                  if (((o = o.listener), s !== l && a.isPropagationStopped()))
                    break e;
                  Fr(a, o, c), (l = s);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((s = (o = r[i]).instance),
                    (c = o.currentTarget),
                    (o = o.listener),
                    s !== l && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, o, c), (l = s);
                }
            }
          }
          if (Ue) throw ((e = De), (Ue = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Qr(t, e, 2, !1), n.add(r));
        }
        function Br(e, t, n) {
          var r = 0;
          t && (r |= 4), Qr(n, e, r, t);
        }
        var Mr = "_reactListening" + Math.random().toString(36).slice(2);
        function Wr(e) {
          if (!e[Mr]) {
            (e[Mr] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Or.has(t) || Br(t, !1, e), Br(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Mr] || ((t[Mr] = !0), Br("selectionchange", !1, t));
          }
        }
        function Qr(e, t, n, r) {
          switch (Kt(t)) {
            case 1:
              var a = Vt;
              break;
            case 4:
              a = qt;
              break;
            default:
              a = Yt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Le ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === a ||
                        (8 === s.nodeType && s.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ya(o))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Ae(function () {
            var r = l,
              a = we(n),
              i = [];
            e: {
              var o = Ir.get(e);
              if (void 0 !== o) {
                var s = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    s = Cn;
                    break;
                  case "focusin":
                    (c = "focus"), (s = vn);
                    break;
                  case "focusout":
                    (c = "blur"), (s = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    s = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    s = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    s = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    s = Tn;
                    break;
                  case Nr:
                  case Cr:
                  case Pr:
                    s = gn;
                    break;
                  case Tr:
                    s = In;
                    break;
                  case "scroll":
                    s = fn;
                    break;
                  case "wheel":
                    s = Rn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    s = xn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    s = Pn;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== o ? o + "Capture" : null) : o;
                u = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== f &&
                        null != (m = Re(h, f)) &&
                        u.push(Vr(h, m, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < u.length &&
                  ((o = new s(o, c, null, n, a)),
                  i.push({ event: o, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === be ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!ya(c) && !c[ha])) &&
                  (s || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  s
                    ? ((s = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? ya(c)
                          : null) &&
                        (c !== (d = We(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((s = null), (c = r)),
                  s !== c))
              ) {
                if (
                  ((u = hn),
                  (m = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Pn),
                    (m = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (h = "pointer")),
                  (d = null == s ? o : ba(s)),
                  (p = null == c ? o : ba(c)),
                  ((o = new u(m, h + "leave", s, n, a)).target = d),
                  (o.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((u = new u(f, h + "enter", c, n, a)).target = p),
                    (u.relatedTarget = d),
                    (m = u)),
                  (d = m),
                  s && c)
                )
                  e: {
                    for (f = c, h = 0, p = u = s; p; p = Yr(p)) h++;
                    for (p = 0, m = f; m; m = Yr(m)) p++;
                    for (; 0 < h - p; ) (u = Yr(u)), h--;
                    for (; 0 < p - h; ) (f = Yr(f)), p--;
                    for (; h--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Yr(u)), (f = Yr(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== s && Gr(i, o, s, u, !1),
                  null !== c && null !== d && Gr(i, d, c, u, !0);
              }
              if (
                "select" ===
                  (s =
                    (o = r ? ba(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === s && "file" === o.type)
              )
                var v = Kn;
              else if (Hn(o))
                if (Zn) v = ir;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (s = o.nodeName) &&
                  "input" === s.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (v = lr);
              switch (
                (v && (v = v(e, r))
                  ? Vn(i, v, n, a)
                  : (g && g(e, o, r),
                    "focusout" === e &&
                      (g = o._wrapperState) &&
                      g.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (g = r ? ba(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  xr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (xr = !1), br(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  br(i, n, a);
              }
              var y;
              if (zn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var x = "onCompositionStart";
                      break e;
                    case "compositionend":
                      x = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      x = "onCompositionUpdate";
                      break e;
                  }
                  x = void 0;
                }
              else
                Wn
                  ? Bn(e, n) && (x = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (x = "onCompositionStart");
              x &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Wn || "onCompositionStart" !== x
                    ? "onCompositionEnd" === x && Wn && (y = en())
                    : ((Jt = "value" in (Zt = a) ? Zt.value : Zt.textContent),
                      (Wn = !0))),
                0 < (g = qr(r, x)).length &&
                  ((x = new bn(x, e, null, n, a)),
                  i.push({ event: x, listeners: g }),
                  y ? (x.data = y) : null !== (y = Mn(n)) && (x.data = y))),
                (y = On
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Mn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Wn)
                        return "compositionend" === e || (!zn && Bn(e, t))
                          ? ((e = en()), ($t = Jt = Zt = null), (Wn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = qr(r, "onBeforeInput")).length &&
                  ((a = new bn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ur(i, t);
          });
        }
        function Vr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Re(e, n)) && r.unshift(Vr(e, l, a)),
              null != (l = Re(e, t)) && r.push(Vr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Gr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              s = o.alternate,
              c = o.stateNode;
            if (null !== s && s === r) break;
            5 === o.tag &&
              null !== c &&
              ((o = c),
              a
                ? null != (s = Re(n, l)) && i.unshift(Vr(n, s, o))
                : a || (null != (s = Re(n, l)) && i.push(Vr(n, s, o)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Xr = /\r\n?/g,
          Kr = /\u0000|\uFFFD/g;
        function Zr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Xr, "\n")
            .replace(Kr, "");
        }
        function Jr(e, t, n) {
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(l(425));
        }
        function $r() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function sa(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Wt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Wt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ha = "__reactContainer$" + da,
          ma = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function xa(e) {
          return !(e = e[fa] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ba(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function wa(e) {
          return e[pa] || null;
        }
        var ja = [],
          ka = -1;
        function Sa(e) {
          return { current: e };
        }
        function Ea(e) {
          0 > ka || ((e.current = ja[ka]), (ja[ka] = null), ka--);
        }
        function Na(e, t) {
          ka++, (ja[ka] = e.current), (e.current = t);
        }
        var Ca = {},
          Pa = Sa(Ca),
          Ta = Sa(!1),
          Ia = Ca;
        function Aa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ca;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Ra(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function La() {
          Ea(Ta), Ea(Pa);
        }
        function za(e, t, n) {
          if (Pa.current !== Ca) throw Error(l(168));
          Na(Pa, t), Na(Ta, n);
        }
        function _a(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, Q(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Oa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (Ia = Pa.current),
            Na(Pa, e),
            Na(Ta, Ta.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = _a(e, t, Ia)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ea(Ta),
              Ea(Pa),
              Na(Pa, e))
            : Ea(Ta),
            Na(Ta, n);
        }
        var Ua = null,
          Da = !1,
          Ba = !1;
        function Ma(e) {
          null === Ua ? (Ua = [e]) : Ua.push(e);
        }
        function Wa() {
          if (!Ba && null !== Ua) {
            Ba = !0;
            var e = 0,
              t = xt;
            try {
              var n = Ua;
              for (xt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ua = null), (Da = !1);
            } catch (a) {
              throw (null !== Ua && (Ua = Ua.slice(e + 1)), Ye($e, Wa), a);
            } finally {
              (xt = t), (Ba = !1);
            }
          }
          return null;
        }
        var Qa = [],
          Ha = 0,
          Va = null,
          qa = 0,
          Ya = [],
          Ga = 0,
          Xa = null,
          Ka = 1,
          Za = "";
        function Ja(e, t) {
          (Qa[Ha++] = qa), (Qa[Ha++] = Va), (Va = e), (qa = t);
        }
        function $a(e, t, n) {
          (Ya[Ga++] = Ka), (Ya[Ga++] = Za), (Ya[Ga++] = Xa), (Xa = e);
          var r = Ka;
          e = Za;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - it(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ka = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Za = l + e);
          } else (Ka = (1 << l) | (n << a) | r), (Za = e);
        }
        function el(e) {
          null !== e.return && (Ja(e, 1), $a(e, 1, 0));
        }
        function tl(e) {
          for (; e === Va; )
            (Va = Qa[--Ha]), (Qa[Ha] = null), (qa = Qa[--Ha]), (Qa[Ha] = null);
          for (; e === Xa; )
            (Xa = Ya[--Ga]),
              (Ya[Ga] = null),
              (Za = Ya[--Ga]),
              (Ya[Ga] = null),
              (Ka = Ya[--Ga]),
              (Ya[Ga] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, t) {
          var n = Ac(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ol(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Xa ? { id: Ka, overflow: Za } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ac(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function sl(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function cl(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!ol(e, t)) {
                if (sl(e)) throw Error(l(418));
                t = ca(n.nextSibling);
                var r = nl;
                t && ol(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (sl(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function ul(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function dl(e) {
          if (e !== nl) return !1;
          if (!al) return ul(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (sl(e)) throw (fl(), Error(l(418)));
            for (; t; ) il(e, t), (t = ca(t.nextSibling));
          }
          if ((ul(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ca(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function hl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var ml = b.ReactCurrentBatchConfig;
        function vl(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function gl(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function yl(e) {
          return (0, e._init)(e._payload);
        }
        function xl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Lc(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Fc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var l = n.type;
            return l === k
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === R &&
                    yl(l) === t.type))
              ? (((r = a(t, n.props)).ref = vl(e, t, n)), (r.return = e), r)
              : (((r = zc(n.type, n.key, n.props, null, e.mode, r)).ref = vl(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Uc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = _c(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Fc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = zc(t.type, t.key, t.props, null, e.mode, n)).ref = vl(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case j:
                  return ((t = Uc(t, e.mode, n)).return = e), t;
                case R:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || _(t))
                return ((t = _c(t, e.mode, n, null)).return = e), t;
              gl(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : s(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? c(e, t, n, r) : null;
                case j:
                  return n.key === a ? u(e, t, n, r) : null;
                case R:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || _(n)) return null !== a ? null : d(e, t, n, r, null);
              gl(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return s(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case j:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || _(r))
                return d(t, (e = e.get(n) || null), r, a, null);
              gl(t, r);
            }
            return null;
          }
          function m(a, l, o, s) {
            for (
              var c = null, u = null, d = l, m = (l = 0), v = null;
              null !== d && m < o.length;
              m++
            ) {
              d.index > m ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(a, d, o[m], s);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(a, d),
                (l = i(g, l, m)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g),
                (d = v);
            }
            if (m === o.length) return n(a, d), al && Ja(a, m), c;
            if (null === d) {
              for (; m < o.length; m++)
                null !== (d = f(a, o[m], s)) &&
                  ((l = i(d, l, m)),
                  null === u ? (c = d) : (u.sibling = d),
                  (u = d));
              return al && Ja(a, m), c;
            }
            for (d = r(a, d); m < o.length; m++)
              null !== (v = h(d, a, m, o[m], s)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? m : v.key),
                (l = i(v, l, m)),
                null === u ? (c = v) : (u.sibling = v),
                (u = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, m),
              c
            );
          }
          function v(a, o, s, c) {
            var u = _(s);
            if ("function" !== typeof u) throw Error(l(150));
            if (null == (s = u.call(s))) throw Error(l(151));
            for (
              var d = (u = null), m = o, v = (o = 0), g = null, y = s.next();
              null !== m && !y.done;
              v++, y = s.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var x = p(a, m, y.value, c);
              if (null === x) {
                null === m && (m = g);
                break;
              }
              e && m && null === x.alternate && t(a, m),
                (o = i(x, o, v)),
                null === d ? (u = x) : (d.sibling = x),
                (d = x),
                (m = g);
            }
            if (y.done) return n(a, m), al && Ja(a, v), u;
            if (null === m) {
              for (; !y.done; v++, y = s.next())
                null !== (y = f(a, y.value, c)) &&
                  ((o = i(y, o, v)),
                  null === d ? (u = y) : (d.sibling = y),
                  (d = y));
              return al && Ja(a, v), u;
            }
            for (m = r(a, m); !y.done; v++, y = s.next())
              null !== (y = h(m, a, v, y.value, c)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (o = i(y, o, v)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, v),
              u
            );
          }
          return function e(r, l, i, s) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === k &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var c = i.key, u = l; null !== u; ) {
                      if (u.key === c) {
                        if ((c = i.type) === k) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((l = a(u, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === R &&
                            yl(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((l = a(u, i.props)).ref = vl(r, u, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    i.type === k
                      ? (((l = _c(i.props.children, r.mode, s, i.key)).return =
                          r),
                        (r = l))
                      : (((s = zc(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          s
                        )).ref = vl(r, l, i)),
                        (s.return = r),
                        (r = s));
                  }
                  return o(r);
                case j:
                  e: {
                    for (u = i.key; null !== l; ) {
                      if (l.key === u) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Uc(i, r.mode, s)).return = r), (r = l);
                  }
                  return o(r);
                case R:
                  return e(r, l, (u = i._init)(i._payload), s);
              }
              if (te(i)) return m(r, l, i, s);
              if (_(i)) return v(r, l, i, s);
              gl(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Fc(i, r.mode, s)).return = r), (r = l)),
                o(r))
              : n(r, l);
          };
        }
        var bl = xl(!0),
          wl = xl(!1),
          jl = Sa(null),
          kl = null,
          Sl = null,
          El = null;
        function Nl() {
          El = Sl = kl = null;
        }
        function Cl(e) {
          var t = jl.current;
          Ea(jl), (e._currentValue = t);
        }
        function Pl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Tl(e, t) {
          (kl = e),
            (El = Sl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xo = !0), (e.firstContext = null));
        }
        function Il(e) {
          var t = e._currentValue;
          if (El !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Sl)
            ) {
              if (null === kl) throw Error(l(308));
              (Sl = e), (kl.dependencies = { lanes: 0, firstContext: e });
            } else Sl = Sl.next = e;
          return t;
        }
        var Al = null;
        function Rl(e) {
          null === Al ? (Al = [e]) : Al.push(e);
        }
        function Ll(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Rl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            zl(e, r)
          );
        }
        function zl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var _l = !1;
        function Ol(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Fl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ul(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Dl(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ps))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              zl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Rl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            zl(e, n)
          );
        }
        function Bl(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ml(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Wl(e, t, n, r) {
          var a = e.updateQueue;
          _l = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var s = o,
              c = s.next;
            (s.next = null), null === i ? (l = c) : (i.next = c), (i = s);
            var u = e.alternate;
            null !== u &&
              (o = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (u.firstBaseUpdate = c) : (o.next = c),
              (u.lastBaseUpdate = s));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, u = c = s = null, o = l; ; ) {
              var f = o.lane,
                p = o.eventTime;
              if ((r & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = o;
                  switch (((f = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, d, f)
                              : h) ||
                        void 0 === f
                      )
                        break e;
                      d = F({}, d, f);
                      break e;
                    case 2:
                      _l = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [o]) : f.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (s = d)) : (u = u.next = p),
                  (i |= f);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (f = o).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (s = d),
              (a.baseState = s),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Os |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Ql(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Hl = {},
          Vl = Sa(Hl),
          ql = Sa(Hl),
          Yl = Sa(Hl);
        function Gl(e) {
          if (e === Hl) throw Error(l(174));
          return e;
        }
        function Xl(e, t) {
          switch ((Na(Yl, t), Na(ql, e), Na(Vl, Hl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, "");
              break;
            default:
              t = se(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ea(Vl), Na(Vl, t);
        }
        function Kl() {
          Ea(Vl), Ea(ql), Ea(Yl);
        }
        function Zl(e) {
          Gl(Yl.current);
          var t = Gl(Vl.current),
            n = se(t, e.type);
          t !== n && (Na(ql, e), Na(Vl, n));
        }
        function Jl(e) {
          ql.current === e && (Ea(Vl), Ea(ql));
        }
        var $l = Sa(0);
        function ei(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ti = [];
        function ni() {
          for (var e = 0; e < ti.length; e++)
            ti[e]._workInProgressVersionPrimary = null;
          ti.length = 0;
        }
        var ri = b.ReactCurrentDispatcher,
          ai = b.ReactCurrentBatchConfig,
          li = 0,
          ii = null,
          oi = null,
          si = null,
          ci = !1,
          ui = !1,
          di = 0,
          fi = 0;
        function pi() {
          throw Error(l(321));
        }
        function hi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function mi(e, t, n, r, a, i) {
          if (
            ((li = i),
            (ii = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ri.current = null === e || null === e.memoizedState ? Ji : $i),
            (e = n(r, a)),
            ui)
          ) {
            i = 0;
            do {
              if (((ui = !1), (di = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (si = oi = null),
                (t.updateQueue = null),
                (ri.current = eo),
                (e = n(r, a));
            } while (ui);
          }
          if (
            ((ri.current = Zi),
            (t = null !== oi && null !== oi.next),
            (li = 0),
            (si = oi = ii = null),
            (ci = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function vi() {
          var e = 0 !== di;
          return (di = 0), e;
        }
        function gi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === si ? (ii.memoizedState = si = e) : (si = si.next = e), si
          );
        }
        function yi() {
          if (null === oi) {
            var e = ii.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = oi.next;
          var t = null === si ? ii.memoizedState : si.next;
          if (null !== t) (si = t), (oi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (oi = e).memoizedState,
              baseState: oi.baseState,
              baseQueue: oi.baseQueue,
              queue: oi.queue,
              next: null,
            }),
              null === si ? (ii.memoizedState = si = e) : (si = si.next = e);
          }
          return si;
        }
        function xi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function bi(e) {
          var t = yi(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = oi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var s = (o = null),
              c = null,
              u = i;
            do {
              var d = u.lane;
              if ((li & d) === d)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((s = c = f), (o = r)) : (c = c.next = f),
                  (ii.lanes |= d),
                  (Os |= d);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === c ? (o = r) : (c.next = s),
              or(r, t.memoizedState) || (xo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (ii.lanes |= i), (Os |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function wi(e) {
          var t = yi(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, t.memoizedState) || (xo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function ji() {}
        function ki(e, t) {
          var n = ii,
            r = yi(),
            a = t(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (xo = !0)),
            (r = r.queue),
            _i(Ni.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== si && 1 & si.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ii(9, Ei.bind(null, n, r, a, t), void 0, null),
              null === Ts)
            )
              throw Error(l(349));
            0 !== (30 & li) || Si(n, t, a);
          }
          return a;
        }
        function Si(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ii.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ii.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ei(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ci(t) && Pi(e);
        }
        function Ni(e, t, n) {
          return n(function () {
            Ci(t) && Pi(e);
          });
        }
        function Ci(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Pi(e) {
          var t = zl(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Ti(e) {
          var t = gi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Yi.bind(null, ii, e)),
            [t.memoizedState, e]
          );
        }
        function Ii(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ii.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ii.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ai() {
          return yi().memoizedState;
        }
        function Ri(e, t, n, r) {
          var a = gi();
          (ii.flags |= e),
            (a.memoizedState = Ii(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Li(e, t, n, r) {
          var a = yi();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== oi) {
            var i = oi.memoizedState;
            if (((l = i.destroy), null !== r && hi(r, i.deps)))
              return void (a.memoizedState = Ii(t, n, l, r));
          }
          (ii.flags |= e), (a.memoizedState = Ii(1 | t, n, l, r));
        }
        function zi(e, t) {
          return Ri(8390656, 8, e, t);
        }
        function _i(e, t) {
          return Li(2048, 8, e, t);
        }
        function Oi(e, t) {
          return Li(4, 2, e, t);
        }
        function Fi(e, t) {
          return Li(4, 4, e, t);
        }
        function Ui(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Di(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Li(4, 4, Ui.bind(null, t, e), n)
          );
        }
        function Bi() {}
        function Mi(e, t) {
          var n = yi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && hi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Wi(e, t) {
          var n = yi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && hi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Qi(e, t, n) {
          return 0 === (21 & li)
            ? (e.baseState && ((e.baseState = !1), (xo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = mt()), (ii.lanes |= n), (Os |= n), (e.baseState = !0)),
              t);
        }
        function Hi(e, t) {
          var n = xt;
          (xt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = ai.transition;
          ai.transition = {};
          try {
            e(!1), t();
          } finally {
            (xt = n), (ai.transition = r);
          }
        }
        function Vi() {
          return yi().memoizedState;
        }
        function qi(e, t, n) {
          var r = tc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Gi(e))
          )
            Xi(t, n);
          else if (null !== (n = Ll(e, t, n, r))) {
            nc(n, e, r, ec()), Ki(n, t, r);
          }
        }
        function Yi(e, t, n) {
          var r = tc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Gi(e)) Xi(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var s = t.interleaved;
                  return (
                    null === s
                      ? ((a.next = a), Rl(t))
                      : ((a.next = s.next), (s.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Ll(e, t, a, r)) &&
              (nc(n, e, r, (a = ec())), Ki(n, t, r));
          }
        }
        function Gi(e) {
          var t = e.alternate;
          return e === ii || (null !== t && t === ii);
        }
        function Xi(e, t) {
          ui = ci = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Ki(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var Zi = {
            readContext: Il,
            useCallback: pi,
            useContext: pi,
            useEffect: pi,
            useImperativeHandle: pi,
            useInsertionEffect: pi,
            useLayoutEffect: pi,
            useMemo: pi,
            useReducer: pi,
            useRef: pi,
            useState: pi,
            useDebugValue: pi,
            useDeferredValue: pi,
            useTransition: pi,
            useMutableSource: pi,
            useSyncExternalStore: pi,
            useId: pi,
            unstable_isNewReconciler: !1,
          },
          Ji = {
            readContext: Il,
            useCallback: function (e, t) {
              return (gi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Il,
            useEffect: zi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ri(4194308, 4, Ui.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ri(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ri(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = gi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = gi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = qi.bind(null, ii, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (gi().memoizedState = e);
            },
            useState: Ti,
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return (gi().memoizedState = e);
            },
            useTransition: function () {
              var e = Ti(!1),
                t = e[0];
              return (
                (e = Hi.bind(null, e[1])), (gi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ii,
                a = gi();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === Ts)) throw Error(l(349));
                0 !== (30 & li) || Si(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                zi(Ni.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ii(9, Ei.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = gi(),
                t = Ts.identifierPrefix;
              if (al) {
                var n = Za;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ka & ~(1 << (32 - it(Ka) - 1))).toString(32) + n)),
                  0 < (n = di++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = fi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          $i = {
            readContext: Il,
            useCallback: Mi,
            useContext: Il,
            useEffect: _i,
            useImperativeHandle: Di,
            useInsertionEffect: Oi,
            useLayoutEffect: Fi,
            useMemo: Wi,
            useReducer: bi,
            useRef: Ai,
            useState: function () {
              return bi(xi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return Qi(yi(), oi.memoizedState, e);
            },
            useTransition: function () {
              return [bi(xi)[0], yi().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: ki,
            useId: Vi,
            unstable_isNewReconciler: !1,
          },
          eo = {
            readContext: Il,
            useCallback: Mi,
            useContext: Il,
            useEffect: _i,
            useImperativeHandle: Di,
            useInsertionEffect: Oi,
            useLayoutEffect: Fi,
            useMemo: Wi,
            useReducer: wi,
            useRef: Ai,
            useState: function () {
              return wi(xi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              var t = yi();
              return null === oi
                ? (t.memoizedState = e)
                : Qi(t, oi.memoizedState, e);
            },
            useTransition: function () {
              return [wi(xi)[0], yi().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: ki,
            useId: Vi,
            unstable_isNewReconciler: !1,
          };
        function to(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function no(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var ro = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              l = Ul(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Dl(e, l, a)) && (nc(t, e, a, r), Bl(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              l = Ul(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Dl(e, l, a)) && (nc(t, e, a, r), Bl(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = Ul(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Dl(e, a, r)) && (nc(t, e, r, n), Bl(t, e, r));
          },
        };
        function ao(e, t, n, r, a, l, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !sr(n, r) ||
                !sr(a, l);
        }
        function lo(e, t, n) {
          var r = !1,
            a = Ca,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Il(l))
              : ((a = Ra(t) ? Ia : Pa.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Aa(e, a)
                  : Ca)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ro),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function io(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && ro.enqueueReplaceState(t, t.state, null);
        }
        function oo(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Ol(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Il(l))
            : ((l = Ra(t) ? Ia : Pa.current), (a.context = Aa(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (no(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && ro.enqueueReplaceState(a, a.state, null),
              Wl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function so(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += M(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function co(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function uo(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var fo = "function" === typeof WeakMap ? WeakMap : Map;
        function po(e, t, n) {
          ((n = Ul(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Hs || ((Hs = !0), (Vs = r)), uo(0, t);
            }),
            n
          );
        }
        function ho(e, t, n) {
          (n = Ul(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                uo(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                uo(0, t),
                  "function" !== typeof r &&
                    (null === qs ? (qs = new Set([this])) : qs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function mo(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fo();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Ec.bind(null, e, t, n)), t.then(e, e));
        }
        function vo(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function go(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ul(-1, 1)).tag = 2), Dl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var yo = b.ReactCurrentOwner,
          xo = !1;
        function bo(e, t, n, r) {
          t.child = null === e ? wl(t, null, n, r) : bl(t, e.child, n, r);
        }
        function wo(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            Tl(t, a),
            (r = mi(e, t, n, r, l, a)),
            (n = vi()),
            null === e || xo
              ? (al && n && el(t), (t.flags |= 1), bo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ho(e, t, a))
          );
        }
        function jo(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Rc(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), ko(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : sr)(i, r) &&
              e.ref === t.ref
            )
              return Ho(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Lc(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function ko(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (sr(l, r) && e.ref === t.ref) {
              if (((xo = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Ho(e, t, a);
              0 !== (131072 & e.flags) && (xo = !0);
            }
          }
          return No(e, t, n, r, a);
        }
        function So(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Ls, Rs),
                (Rs |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Ls, Rs),
                  (Rs |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Na(Ls, Rs),
                (Rs |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Ls, Rs),
              (Rs |= r);
          return bo(e, t, a, n), t.child;
        }
        function Eo(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function No(e, t, n, r, a) {
          var l = Ra(n) ? Ia : Pa.current;
          return (
            (l = Aa(t, l)),
            Tl(t, a),
            (n = mi(e, t, n, r, l, a)),
            (r = vi()),
            null === e || xo
              ? (al && r && el(t), (t.flags |= 1), bo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ho(e, t, a))
          );
        }
        function Co(e, t, n, r, a) {
          if (Ra(n)) {
            var l = !0;
            Oa(t);
          } else l = !1;
          if ((Tl(t, a), null === t.stateNode))
            Qo(e, t), lo(t, n, r), oo(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps;
            i.props = o;
            var s = i.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Il(c))
              : (c = Aa(t, (c = Ra(n) ? Ia : Pa.current)));
            var u = n.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== r || s !== c) && io(t, i, r, c)),
              (_l = !1);
            var f = t.memoizedState;
            (i.state = f),
              Wl(t, r, i, a),
              (s = t.memoizedState),
              o !== r || f !== s || Ta.current || _l
                ? ("function" === typeof u &&
                    (no(t, n, u, r), (s = t.memoizedState)),
                  (o = _l || ao(t, n, o, r, f, s, c))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = c),
                  (r = o))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Fl(e, t),
              (o = t.memoizedProps),
              (c = t.type === t.elementType ? o : to(t.type, o)),
              (i.props = c),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (s = n.contextType) && null !== s
                ? (s = Il(s))
                : (s = Aa(t, (s = Ra(n) ? Ia : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (u =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== d || f !== s) && io(t, i, r, s)),
              (_l = !1),
              (f = t.memoizedState),
              (i.state = f),
              Wl(t, r, i, a);
            var h = t.memoizedState;
            o !== d || f !== h || Ta.current || _l
              ? ("function" === typeof p &&
                  (no(t, n, p, r), (h = t.memoizedState)),
                (c = _l || ao(t, n, c, r, f, h, s) || !1)
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, s),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, s)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = s),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Po(e, t, n, r, l, a);
        }
        function Po(e, t, n, r, a, l) {
          Eo(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Fa(t, n, !1), Ho(e, t, l);
          (r = t.stateNode), (yo.current = t);
          var o =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = bl(t, e.child, null, l)),
                (t.child = bl(t, null, o, l)))
              : bo(e, t, o, l),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function To(e) {
          var t = e.stateNode;
          t.pendingContext
            ? za(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && za(0, t.context, !1),
            Xl(e, t.containerInfo);
        }
        function Io(e, t, n, r, a) {
          return pl(), hl(a), (t.flags |= 256), bo(e, t, n, r), t.child;
        }
        var Ao,
          Ro,
          Lo,
          zo,
          _o = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Oo(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Fo(e, t, n) {
          var r,
            a = t.pendingProps,
            i = $l.current,
            o = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((r = s) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Na($l, 1 & i),
            null === e)
          )
            return (
              cl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (s = { mode: "hidden", children: s }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = s))
                        : (o = Oc(s, a, 0, null)),
                      (e = _c(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Oo(n)),
                      (t.memoizedState = _o),
                      e)
                    : Uo(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Do(e, t, o, (r = co(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Oc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = _c(i, a, o, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && bl(t, e.child, null, o),
                    (t.child.memoizedState = Oo(o)),
                    (t.memoizedState = _o),
                    i);
              if (0 === (1 & t.mode)) return Do(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var s = r.dgst;
                return (
                  (r = s), Do(e, t, o, (r = co((i = Error(l(419))), r, void 0)))
                );
              }
              if (((s = 0 !== (o & e.childLanes)), xo || s)) {
                if (null !== (r = Ts)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), zl(e, a), nc(r, e, a, -1));
                }
                return mc(), Do(e, t, o, (r = co(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (rl = ca(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((Ya[Ga++] = Ka),
                    (Ya[Ga++] = Za),
                    (Ya[Ga++] = Xa),
                    (Ka = e.id),
                    (Za = e.overflow),
                    (Xa = t)),
                  (t = Uo(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, a, r, i, n);
          if (o) {
            (o = a.fallback), (s = t.mode), (r = (i = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Lc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Lc(r, o))
                : ((o = _c(o, s, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Oo(n)
                  : {
                      baseLanes: s.baseLanes | n,
                      cachePool: null,
                      transitions: s.transitions,
                    }),
              (o.memoizedState = s),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = _o),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Lc(o, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Uo(e, t) {
          return (
            ((t = Oc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Do(e, t, n, r) {
          return (
            null !== r && hl(r),
            bl(t, e.child, null, n),
            ((e = Uo(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bo(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Pl(e.return, t, n);
        }
        function Mo(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Wo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((bo(e, t, r.children, n), 0 !== (2 & (r = $l.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bo(e, n, t);
                else if (19 === e.tag) Bo(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na($l, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ei(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Mo(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ei(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Mo(t, !0, n, null, l);
                break;
              case "together":
                Mo(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Qo(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ho(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Os |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Lc((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Lc(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Vo(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function qo(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Yo(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return qo(t), null;
            case 1:
            case 17:
              return Ra(t.type) && La(), qo(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Kl(),
                Ea(Ta),
                Ea(Pa),
                ni(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (ic(ll), (ll = null)))),
                Ro(e, t),
                qo(t),
                null
              );
            case 5:
              Jl(t);
              var a = Gl(Yl.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Lo(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return qo(t), null;
                }
                if (((e = Gl(Vl.current)), dl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Dr("cancel", r), Dr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < _r.length; a++) Dr(_r[a], r);
                      break;
                    case "source":
                      Dr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dr("error", r), Dr("load", r);
                      break;
                    case "details":
                      Dr("toggle", r);
                      break;
                    case "input":
                      K(r, i), Dr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Dr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Dr("invalid", r);
                  }
                  for (var s in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(s)) {
                      var c = i[s];
                      "children" === s
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Jr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : o.hasOwnProperty(s) &&
                          null != c &&
                          "onScroll" === s &&
                          Dr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      q(r), $(r, i, !0);
                      break;
                    case "textarea":
                      q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = $r);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (s = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Ao(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = xe(n, r)), n)) {
                      case "dialog":
                        Dr("cancel", e), Dr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < _r.length; a++) Dr(_r[a], e);
                        a = r;
                        break;
                      case "source":
                        Dr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dr("error", e), Dr("load", e), (a = r);
                        break;
                      case "details":
                        Dr("toggle", e), (a = r);
                        break;
                      case "input":
                        K(e, r), (a = X(e, r)), Dr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Dr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Dr("invalid", e);
                    }
                    for (i in (ye(n, a), (c = a)))
                      if (c.hasOwnProperty(i)) {
                        var u = c[i];
                        "style" === i
                          ? ve(e, u)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === i
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && fe(e, u)
                            : "number" === typeof u && fe(e, "" + u)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != u && "onScroll" === i && Dr("scroll", e)
                              : null != u && x(e, i, u, s));
                      }
                    switch (n) {
                      case "input":
                        q(e), $(e, r, !1);
                        break;
                      case "textarea":
                        q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = $r);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return qo(t), null;
            case 6:
              if (e && null != t.stateNode) zo(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = Gl(Yl.current)), Gl(Vl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return qo(t), null;
            case 13:
              if (
                (Ea($l),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (i = !1);
                else if (((i = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[fa] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  qo(t), (i = !1);
                } else null !== ll && (ic(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & $l.current)
                        ? 0 === zs && (zs = 3)
                        : mc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  qo(t),
                  null);
            case 4:
              return (
                Kl(),
                Ro(e, t),
                null === e && Wr(t.stateNode.containerInfo),
                qo(t),
                null
              );
            case 10:
              return Cl(t.type._context), qo(t), null;
            case 19:
              if ((Ea($l), null === (i = t.memoizedState))) return qo(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (r) Vo(i, !1);
                else {
                  if (0 !== zs || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ei(e))) {
                        for (
                          t.flags |= 128,
                            Vo(i, !1),
                            null !== (r = s.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Na($l, (1 & $l.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ze() > Ws &&
                    ((t.flags |= 128),
                    (r = !0),
                    Vo(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ei(s))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Vo(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !s.alternate &&
                        !al)
                    )
                      return qo(t), null;
                  } else
                    2 * Ze() - i.renderingStartTime > Ws &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Vo(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = i.last) ? (n.sibling = s) : (t.child = s),
                    (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ze()),
                  (t.sibling = null),
                  (n = $l.current),
                  Na($l, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (qo(t), null);
            case 22:
            case 23:
              return (
                dc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Rs) &&
                    (qo(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : qo(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Go(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Ra(t.type) && La(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Kl(),
                Ea(Ta),
                Ea(Pa),
                ni(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Jl(t), null;
            case 13:
              if (
                (Ea($l),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ea($l), null;
            case 4:
              return Kl(), null;
            case 10:
              return Cl(t.type._context), null;
            case 22:
            case 23:
              return dc(), null;
            default:
              return null;
          }
        }
        (Ao = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ro = function () {}),
          (Lo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Gl(Vl.current);
              var l,
                i = null;
              switch (n) {
                case "input":
                  (a = X(e, a)), (r = X(e, r)), (i = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = $r);
              }
              for (u in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var s = a[u];
                    for (l in s)
                      s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (o.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((s = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== s && (null != c || null != s))
                )
                  if ("style" === u)
                    if (s) {
                      for (l in s)
                        !s.hasOwnProperty(l) ||
                          (c && c.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in c)
                        c.hasOwnProperty(l) &&
                          s[l] !== c[l] &&
                          (n || (n = {}), (n[l] = c[l]));
                    } else n || (i || (i = []), i.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (i = i || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (i = i || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (o.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Dr("scroll", e),
                            i || s === c || (i = []))
                          : (i = i || []).push(u, c));
              }
              n && (i = i || []).push("style", n);
              var u = i;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (zo = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xo = !1,
          Ko = !1,
          Zo = "function" === typeof WeakSet ? WeakSet : Set,
          Jo = null;
        function $o(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Sc(e, t, r);
              }
            else n.current = null;
        }
        function es(e, t, n) {
          try {
            n();
          } catch (r) {
            Sc(e, t, r);
          }
        }
        var ts = !1;
        function ns(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && es(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ls(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ls(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function is(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function os(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || is(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ss(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = $r));
          else if (4 !== r && null !== (e = e.child))
            for (ss(e, t, n), e = e.sibling; null !== e; )
              ss(e, t, n), (e = e.sibling);
        }
        function cs(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cs(e, t, n), e = e.sibling; null !== e; )
              cs(e, t, n), (e = e.sibling);
        }
        var us = null,
          ds = !1;
        function fs(e, t, n) {
          for (n = n.child; null !== n; ) ps(e, t, n), (n = n.sibling);
        }
        function ps(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Ko || $o(n, t);
            case 6:
              var r = us,
                a = ds;
              (us = null),
                fs(e, t, n),
                (ds = a),
                null !== (us = r) &&
                  (ds
                    ? ((e = us),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : us.removeChild(n.stateNode));
              break;
            case 18:
              null !== us &&
                (ds
                  ? ((e = us),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? sa(e.parentNode, n)
                      : 1 === e.nodeType && sa(e, n),
                    Wt(e))
                  : sa(us, n.stateNode));
              break;
            case 4:
              (r = us),
                (a = ds),
                (us = n.stateNode.containerInfo),
                (ds = !0),
                fs(e, t, n),
                (us = r),
                (ds = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ko &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      es(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              fs(e, t, n);
              break;
            case 1:
              if (
                !Ko &&
                ($o(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  Sc(n, t, o);
                }
              fs(e, t, n);
              break;
            case 21:
              fs(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ko = (r = Ko) || null !== n.memoizedState),
                  fs(e, t, n),
                  (Ko = r))
                : fs(e, t, n);
              break;
            default:
              fs(e, t, n);
          }
        }
        function hs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zo()),
              t.forEach(function (t) {
                var r = Pc.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ms(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  o = t,
                  s = o;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (us = s.stateNode), (ds = !1);
                      break e;
                    case 3:
                    case 4:
                      (us = s.stateNode.containerInfo), (ds = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === us) throw Error(l(160));
                ps(i, o, a), (us = null), (ds = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Sc(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), gs(e), 4 & r)) {
                try {
                  ns(3, e, e.return), rs(3, e);
                } catch (v) {
                  Sc(e, e.return, v);
                }
                try {
                  ns(5, e, e.return);
                } catch (v) {
                  Sc(e, e.return, v);
                }
              }
              break;
            case 1:
              ms(t, e), gs(e), 512 & r && null !== n && $o(n, n.return);
              break;
            case 5:
              if (
                (ms(t, e),
                gs(e),
                512 & r && null !== n && $o(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (v) {
                  Sc(e, e.return, v);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : i,
                  s = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === s &&
                      "radio" === i.type &&
                      null != i.name &&
                      Z(a, i),
                      xe(s, o);
                    var u = xe(s, i);
                    for (o = 0; o < c.length; o += 2) {
                      var d = c[o],
                        f = c[o + 1];
                      "style" === d
                        ? ve(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : x(a, d, f, u);
                    }
                    switch (s) {
                      case "input":
                        J(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (v) {
                    Sc(e, e.return, v);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), gs(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (v) {
                  Sc(e, e.return, v);
                }
              }
              break;
            case 3:
              if (
                (ms(t, e),
                gs(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Wt(t.containerInfo);
                } catch (v) {
                  Sc(e, e.return, v);
                }
              break;
            case 4:
            default:
              ms(t, e), gs(e);
              break;
            case 13:
              ms(t, e),
                gs(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Ms = Ze())),
                4 & r && hs(e);
              break;
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ko = (u = Ko) || d), ms(t, e), (Ko = u))
                  : ms(t, e),
                gs(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                )
                  for (Jo = e, d = e.child; null !== d; ) {
                    for (f = Jo = d; null !== Jo; ) {
                      switch (((h = (p = Jo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          $o(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (v) {
                              Sc(r, n, v);
                            }
                          }
                          break;
                        case 5:
                          $o(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ws(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Jo = h)) : ws(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (a = f.stateNode),
                          u
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((s = f.stateNode),
                              (o =
                                void 0 !== (c = f.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (s.style.display = me("display", o)));
                      } catch (v) {
                        Sc(e, e.return, v);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                      } catch (v) {
                        Sc(e, e.return, v);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), gs(e), 4 & r && hs(e);
            case 21:
          }
        }
        function gs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (is(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    cs(e, os(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ss(e, os(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (o) {
              Sc(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, n) {
          (Jo = e), xs(e, t, n);
        }
        function xs(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jo; ) {
            var a = Jo,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Xo;
              if (!i) {
                var o = a.alternate,
                  s = (null !== o && null !== o.memoizedState) || Ko;
                o = Xo;
                var c = Ko;
                if (((Xo = i), (Ko = s) && !c))
                  for (Jo = a; null !== Jo; )
                    (s = (i = Jo).child),
                      22 === i.tag && null !== i.memoizedState
                        ? js(a)
                        : null !== s
                        ? ((s.return = i), (Jo = s))
                        : js(a);
                for (; null !== l; ) (Jo = l), xs(l, t, n), (l = l.sibling);
                (Jo = a), (Xo = o), (Ko = c);
              }
              bs(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Jo = l))
                : bs(e);
          }
        }
        function bs(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ko || rs(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ko)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : to(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Ql(t, i, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ql(t, o, n);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = s;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Wt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Ko || (512 & t.flags && as(t));
              } catch (p) {
                Sc(t, t.return, p);
              }
            }
            if (t === e) {
              Jo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function ws(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (t === e) {
              Jo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function js(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rs(4, t);
                  } catch (s) {
                    Sc(t, n, s);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (s) {
                      Sc(t, a, s);
                    }
                  }
                  var l = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Sc(t, l, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Sc(t, i, s);
                  }
              }
            } catch (s) {
              Sc(t, t.return, s);
            }
            if (t === e) {
              Jo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Jo = o);
              break;
            }
            Jo = t.return;
          }
        }
        var ks,
          Ss = Math.ceil,
          Es = b.ReactCurrentDispatcher,
          Ns = b.ReactCurrentOwner,
          Cs = b.ReactCurrentBatchConfig,
          Ps = 0,
          Ts = null,
          Is = null,
          As = 0,
          Rs = 0,
          Ls = Sa(0),
          zs = 0,
          _s = null,
          Os = 0,
          Fs = 0,
          Us = 0,
          Ds = null,
          Bs = null,
          Ms = 0,
          Ws = 1 / 0,
          Qs = null,
          Hs = !1,
          Vs = null,
          qs = null,
          Ys = !1,
          Gs = null,
          Xs = 0,
          Ks = 0,
          Zs = null,
          Js = -1,
          $s = 0;
        function ec() {
          return 0 !== (6 & Ps) ? Ze() : -1 !== Js ? Js : (Js = Ze());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ps) && 0 !== As
            ? As & -As
            : null !== ml.transition
            ? (0 === $s && ($s = mt()), $s)
            : 0 !== (e = xt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Ks) throw ((Ks = 0), (Zs = null), Error(l(185)));
          gt(e, n, r),
            (0 !== (2 & Ps) && e === Ts) ||
              (e === Ts && (0 === (2 & Ps) && (Fs |= n), 4 === zs && oc(e, As)),
              rc(e, r),
              1 === n &&
                0 === Ps &&
                0 === (1 & t.mode) &&
                ((Ws = Ze() + 500), Da && Wa()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - it(l),
                o = 1 << i,
                s = a[i];
              -1 === s
                ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = pt(o, t))
                : s <= t && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, t);
          var r = ft(e, e === Ts ? As : 0);
          if (0 === r)
            null !== n && Ge(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ge(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Da = !0), Ma(e);
                  })(sc.bind(null, e))
                : Ma(sc.bind(null, e)),
                ia(function () {
                  0 === (6 & Ps) && Wa();
                }),
                (n = null);
            else {
              switch (bt(r)) {
                case 1:
                  n = $e;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Tc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Js = -1), ($s = 0), 0 !== (6 & Ps))) throw Error(l(327));
          var n = e.callbackNode;
          if (jc() && e.callbackNode !== n) return null;
          var r = ft(e, e === Ts ? As : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vc(e, r);
          else {
            t = r;
            var a = Ps;
            Ps |= 2;
            var i = hc();
            for (
              (Ts === e && As === t) ||
              ((Qs = null), (Ws = Ze() + 500), fc(e, t));
              ;

            )
              try {
                yc();
                break;
              } catch (s) {
                pc(e, s);
              }
            Nl(),
              (Es.current = i),
              (Ps = a),
              null !== Is ? (t = 0) : ((Ts = null), (As = 0), (t = zs));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = lc(e, a))),
              1 === t)
            )
              throw ((n = _s), fc(e, 0), oc(e, r), rc(e, Ze()), n);
            if (6 === t) oc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vc(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = lc(e, i))),
                  1 === t))
              )
                throw ((n = _s), fc(e, 0), oc(e, r), rc(e, Ze()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  wc(e, Bs, Qs);
                  break;
                case 3:
                  if (
                    (oc(e, r),
                    (130023424 & r) === r && 10 < (t = Ms + 500 - Ze()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(wc.bind(null, e, Bs, Qs), t);
                    break;
                  }
                  wc(e, Bs, Qs);
                  break;
                case 4:
                  if ((oc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ze() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Ss(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(wc.bind(null, e, Bs, Qs), r);
                    break;
                  }
                  wc(e, Bs, Qs);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return rc(e, Ze()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function lc(e, t) {
          var n = Ds;
          return (
            e.current.memoizedState.isDehydrated && (fc(e, t).flags |= 256),
            2 !== (e = vc(e, t)) && ((t = Bs), (Bs = n), null !== t && ic(t)),
            e
          );
        }
        function ic(e) {
          null === Bs ? (Bs = e) : Bs.push.apply(Bs, e);
        }
        function oc(e, t) {
          for (
            t &= ~Us,
              t &= ~Fs,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function sc(e) {
          if (0 !== (6 & Ps)) throw Error(l(327));
          jc();
          var t = ft(e, 0);
          if (0 === (1 & t)) return rc(e, Ze()), null;
          var n = vc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = lc(e, r)));
          }
          if (1 === n) throw ((n = _s), fc(e, 0), oc(e, t), rc(e, Ze()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            wc(e, Bs, Qs),
            rc(e, Ze()),
            null
          );
        }
        function cc(e, t) {
          var n = Ps;
          Ps |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ps = n) && ((Ws = Ze() + 500), Da && Wa());
          }
        }
        function uc(e) {
          null !== Gs && 0 === Gs.tag && 0 === (6 & Ps) && jc();
          var t = Ps;
          Ps |= 1;
          var n = Cs.transition,
            r = xt;
          try {
            if (((Cs.transition = null), (xt = 1), e)) return e();
          } finally {
            (xt = r), (Cs.transition = n), 0 === (6 & (Ps = t)) && Wa();
          }
        }
        function dc() {
          (Rs = Ls.current), Ea(Ls);
        }
        function fc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Is))
            for (n = Is.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    La();
                  break;
                case 3:
                  Kl(), Ea(Ta), Ea(Pa), ni();
                  break;
                case 5:
                  Jl(r);
                  break;
                case 4:
                  Kl();
                  break;
                case 13:
                case 19:
                  Ea($l);
                  break;
                case 10:
                  Cl(r.type._context);
                  break;
                case 22:
                case 23:
                  dc();
              }
              n = n.return;
            }
          if (
            ((Ts = e),
            (Is = e = Lc(e.current, null)),
            (As = Rs = t),
            (zs = 0),
            (_s = null),
            (Us = Fs = Os = 0),
            (Bs = Ds = null),
            null !== Al)
          ) {
            for (t = 0; t < Al.length; t++)
              if (null !== (r = (n = Al[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            Al = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Is;
            try {
              if ((Nl(), (ri.current = Zi), ci)) {
                for (var r = ii.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ci = !1;
              }
              if (
                ((li = 0),
                (si = oi = ii = null),
                (ui = !1),
                (di = 0),
                (Ns.current = null),
                null === n || null === n.return)
              ) {
                (zs = 1), (_s = t), (Is = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  s = n,
                  c = t;
                if (
                  ((t = As),
                  (s.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vo(o);
                  if (null !== h) {
                    (h.flags &= -257),
                      go(h, o, s, 0, t),
                      1 & h.mode && mo(i, u, t),
                      (c = u);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(c), (t.updateQueue = v);
                    } else m.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    mo(i, u, t), mc();
                    break e;
                  }
                  c = Error(l(426));
                } else if (al && 1 & s.mode) {
                  var g = vo(o);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      go(g, o, s, 0, t),
                      hl(so(c, s));
                    break e;
                  }
                }
                (i = c = so(c, s)),
                  4 !== zs && (zs = 2),
                  null === Ds ? (Ds = [i]) : Ds.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Ml(i, po(0, c, t));
                      break e;
                    case 1:
                      s = c;
                      var y = i.type,
                        x = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== x &&
                            "function" === typeof x.componentDidCatch &&
                            (null === qs || !qs.has(x))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Ml(i, ho(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              bc(n);
            } catch (b) {
              (t = b), Is === n && null !== n && (Is = n = n.return);
              continue;
            }
            break;
          }
        }
        function hc() {
          var e = Es.current;
          return (Es.current = Zi), null === e ? Zi : e;
        }
        function mc() {
          (0 !== zs && 3 !== zs && 2 !== zs) || (zs = 4),
            null === Ts ||
              (0 === (268435455 & Os) && 0 === (268435455 & Fs)) ||
              oc(Ts, As);
        }
        function vc(e, t) {
          var n = Ps;
          Ps |= 2;
          var r = hc();
          for ((Ts === e && As === t) || ((Qs = null), fc(e, t)); ; )
            try {
              gc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((Nl(), (Ps = n), (Es.current = r), null !== Is))
            throw Error(l(261));
          return (Ts = null), (As = 0), zs;
        }
        function gc() {
          for (; null !== Is; ) xc(Is);
        }
        function yc() {
          for (; null !== Is && !Xe(); ) xc(Is);
        }
        function xc(e) {
          var t = ks(e.alternate, e, Rs);
          (e.memoizedProps = e.pendingProps),
            null === t ? bc(e) : (Is = t),
            (Ns.current = null);
        }
        function bc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Yo(n, t, Rs))) return void (Is = n);
            } else {
              if (null !== (n = Go(n, t)))
                return (n.flags &= 32767), void (Is = n);
              if (null === e) return (zs = 6), void (Is = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Is = t);
            Is = t = e;
          } while (null !== t);
          0 === zs && (zs = 5);
        }
        function wc(e, t, n) {
          var r = xt,
            a = Cs.transition;
          try {
            (Cs.transition = null),
              (xt = 1),
              (function (e, t, n, r) {
                do {
                  jc();
                } while (null !== Gs);
                if (0 !== (6 & Ps)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, i),
                  e === Ts && ((Is = Ts = null), (As = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ys ||
                    ((Ys = !0),
                    Tc(tt, function () {
                      return jc(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Cs.transition), (Cs.transition = null);
                  var o = xt;
                  xt = 1;
                  var s = Ps;
                  (Ps |= 4),
                    (Ns.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (w) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                s = -1,
                                c = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (s = o + a),
                                    f !== i ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (c = o + r),
                                    3 === f.nodeType &&
                                      (o += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++u === a && (s = o),
                                    p === i && ++d === r && (c = o),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              n =
                                -1 === s || -1 === c
                                  ? null
                                  : { start: s, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Jo = t;
                        null !== Jo;

                      )
                        if (
                          ((e = (t = Jo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jo = e);
                        else
                          for (; null !== Jo; ) {
                            t = Jo;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        x = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : to(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = x;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    1 === b.nodeType
                                      ? (b.textContent = "")
                                      : 9 === b.nodeType &&
                                        b.documentElement &&
                                        b.removeChild(b.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (w) {
                              Sc(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jo = e);
                              break;
                            }
                            Jo = t.return;
                          }
                      (m = ts), (ts = !1);
                    })(e, n),
                    vs(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    ys(n, e, a),
                    Ke(),
                    (Ps = s),
                    (xt = o),
                    (Cs.transition = i);
                } else e.current = n;
                if (
                  (Ys && ((Ys = !1), (Gs = e), (Xs = a)),
                  (i = e.pendingLanes),
                  0 === i && (qs = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Hs) throw ((Hs = !1), (e = Vs), (Vs = null), e);
                0 !== (1 & Xs) && 0 !== e.tag && jc(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Zs
                      ? Ks++
                      : ((Ks = 0), (Zs = e))
                    : (Ks = 0),
                  Wa();
              })(e, t, n, r);
          } finally {
            (Cs.transition = a), (xt = r);
          }
          return null;
        }
        function jc() {
          if (null !== Gs) {
            var e = bt(Xs),
              t = Cs.transition,
              n = xt;
            try {
              if (((Cs.transition = null), (xt = 16 > e ? 16 : e), null === Gs))
                var r = !1;
              else {
                if (((e = Gs), (Gs = null), (Xs = 0), 0 !== (6 & Ps)))
                  throw Error(l(331));
                var a = Ps;
                for (Ps |= 4, Jo = e.current; null !== Jo; ) {
                  var i = Jo,
                    o = i.child;
                  if (0 !== (16 & Jo.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var c = 0; c < s.length; c++) {
                        var u = s[c];
                        for (Jo = u; null !== Jo; ) {
                          var d = Jo;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Jo = f);
                          else
                            for (; null !== Jo; ) {
                              var p = (d = Jo).sibling,
                                h = d.return;
                              if ((ls(d), d === u)) {
                                Jo = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Jo = p);
                                break;
                              }
                              Jo = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Jo = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Jo = o);
                  else
                    e: for (; null !== Jo; ) {
                      if (0 !== (2048 & (i = Jo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Jo = y);
                        break e;
                      }
                      Jo = i.return;
                    }
                }
                var x = e.current;
                for (Jo = x; null !== Jo; ) {
                  var b = (o = Jo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== b)
                    (b.return = o), (Jo = b);
                  else
                    e: for (o = x; null !== Jo; ) {
                      if (0 !== (2048 & (s = Jo).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rs(9, s);
                          }
                        } catch (j) {
                          Sc(s, s.return, j);
                        }
                      if (s === o) {
                        Jo = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Jo = w);
                        break e;
                      }
                      Jo = s.return;
                    }
                }
                if (
                  ((Ps = a),
                  Wa(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (j) {}
                r = !0;
              }
              return r;
            } finally {
              (xt = n), (Cs.transition = t);
            }
          }
          return !1;
        }
        function kc(e, t, n) {
          (e = Dl(e, (t = po(0, (t = so(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (gt(e, 1, t), rc(e, t));
        }
        function Sc(e, t, n) {
          if (3 === e.tag) kc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                kc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === qs || !qs.has(r)))
                ) {
                  (t = Dl(t, (e = ho(t, (e = so(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (gt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Ec(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ts === e &&
              (As & n) === n &&
              (4 === zs ||
              (3 === zs && (130023424 & As) === As && 500 > Ze() - Ms)
                ? fc(e, 0)
                : (Us |= n)),
            rc(e, t);
        }
        function Nc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = zl(e, t)) && (gt(e, t, n), rc(e, n));
        }
        function Cc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nc(e, n);
        }
        function Pc(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Nc(e, n);
        }
        function Tc(e, t) {
          return Ye(e, t);
        }
        function Ic(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ac(e, t, n, r) {
          return new Ic(e, t, n, r);
        }
        function Rc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Lc(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ac(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zc(e, t, n, r, a, i) {
          var o = 2;
          if (((r = e), "function" === typeof e)) Rc(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case k:
                return _c(n.children, a, i, t);
              case S:
                (o = 8), (a |= 8);
                break;
              case E:
                return (
                  ((e = Ac(12, n, t, 2 | a)).elementType = E), (e.lanes = i), e
                );
              case T:
                return (
                  ((e = Ac(13, n, t, a)).elementType = T), (e.lanes = i), e
                );
              case I:
                return (
                  ((e = Ac(19, n, t, a)).elementType = I), (e.lanes = i), e
                );
              case L:
                return Oc(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      o = 10;
                      break e;
                    case C:
                      o = 9;
                      break e;
                    case P:
                      o = 11;
                      break e;
                    case A:
                      o = 14;
                      break e;
                    case R:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ac(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function _c(e, t, n, r) {
          return ((e = Ac(7, e, r, t)).lanes = n), e;
        }
        function Oc(e, t, n, r) {
          return (
            ((e = Ac(22, e, r, t)).elementType = L),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Fc(e, t, n) {
          return ((e = Ac(6, e, null, t)).lanes = n), e;
        }
        function Uc(e, t, n) {
          return (
            ((t = Ac(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Dc(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bc(e, t, n, r, a, l, i, o, s) {
          return (
            (e = new Dc(e, t, n, o, s)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Ac(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ol(l),
            e
          );
        }
        function Mc(e) {
          if (!e) return Ca;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ra(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ra(n)) return _a(e, n, t);
          }
          return t;
        }
        function Wc(e, t, n, r, a, l, i, o, s) {
          return (
            ((e = Bc(n, r, !0, e, 0, l, 0, o, s)).context = Mc(null)),
            (n = e.current),
            ((l = Ul((r = ec()), (a = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Dl(n, l, a),
            (e.current.lanes = a),
            gt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Qc(e, t, n, r) {
          var a = t.current,
            l = ec(),
            i = tc(a);
          return (
            (n = Mc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ul(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Dl(a, t, i)) && (nc(e, a, i, l), Bl(e, a, i)),
            i
          );
        }
        function Hc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Vc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function qc(e, t) {
          Vc(e, t), (e = e.alternate) && Vc(e, t);
        }
        ks = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Ta.current) xo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        To(t), pl();
                        break;
                      case 5:
                        Zl(t);
                        break;
                      case 1:
                        Ra(t.type) && Oa(t);
                        break;
                      case 4:
                        Xl(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(jl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na($l, 1 & $l.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Fo(e, t, n)
                            : (Na($l, 1 & $l.current),
                              null !== (e = Ho(e, t, n)) ? e.sibling : null);
                        Na($l, 1 & $l.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Wo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na($l, $l.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), So(e, t, n);
                    }
                    return Ho(e, t, n);
                  })(e, t, n)
                );
              xo = 0 !== (131072 & e.flags);
            }
          else (xo = !1), al && 0 !== (1048576 & t.flags) && $a(t, qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Qo(e, t), (e = t.pendingProps);
              var a = Aa(t, Pa.current);
              Tl(t, n), (a = mi(null, t, r, e, a, n));
              var i = vi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ra(r) ? ((i = !0), Oa(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ol(t),
                    (a.updater = ro),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    oo(t, r, e, n),
                    (t = Po(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    bo(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Qo(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Rc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === A) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = to(r, e)),
                  a)
                ) {
                  case 0:
                    t = No(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Co(null, t, r, e, n);
                    break e;
                  case 11:
                    t = wo(null, t, r, e, n);
                    break e;
                  case 14:
                    t = jo(null, t, r, to(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                No(e, t, r, (a = t.elementType === r ? a : to(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Co(e, t, r, (a = t.elementType === r ? a : to(r, a)), n)
              );
            case 3:
              e: {
                if ((To(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Fl(e, t),
                  Wl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Io(e, t, r, n, (a = so(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Io(e, t, r, n, (a = so(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ca(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = wl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Ho(e, t, n);
                    break e;
                  }
                  bo(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Zl(t),
                null === e && cl(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Eo(e, t),
                bo(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && cl(t), null;
            case 13:
              return Fo(e, t, n);
            case 4:
              return (
                Xl(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = bl(t, null, r, n)) : bo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                wo(e, t, r, (a = t.elementType === r ? a : to(r, a)), n)
              );
            case 7:
              return bo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return bo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (o = a.value),
                  Na(jl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !Ta.current) {
                      t = Ho(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        o = i.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === i.tag) {
                              (c = Ul(-1, n & -n)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (c.next = c)
                                  : ((c.next = d.next), (d.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (i.lanes |= n),
                              null !== (c = i.alternate) && (c.lanes |= n),
                              Pl(i.return, n, t),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= n),
                          null !== (s = o.alternate) && (s.lanes |= n),
                          Pl(o, n, t),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                bo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Tl(t, n),
                (r = r((a = Il(a)))),
                (t.flags |= 1),
                bo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = to((r = t.type), t.pendingProps)),
                jo(e, t, r, (a = to(r.type, a)), n)
              );
            case 15:
              return ko(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : to(r, a)),
                Qo(e, t),
                (t.tag = 1),
                Ra(r) ? ((e = !0), Oa(t)) : (e = !1),
                Tl(t, n),
                lo(t, r, a),
                oo(t, r, a, n),
                Po(null, t, r, !0, e, n)
              );
            case 19:
              return Wo(e, t, n);
            case 22:
              return So(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Yc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gc(e) {
          this._internalRoot = e;
        }
        function Xc(e) {
          this._internalRoot = e;
        }
        function Kc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Jc() {}
        function $c(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = Hc(i);
                o.call(e);
              };
            }
            Qc(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Hc(i);
                    l.call(e);
                  };
                }
                var i = Wc(t, r, e, 0, null, !1, 0, "", Jc);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  Wr(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = Hc(s);
                  o.call(e);
                };
              }
              var s = Bc(e, 0, !1, null, 0, !1, 0, "", Jc);
              return (
                (e._reactRootContainer = s),
                (e[ha] = s.current),
                Wr(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Qc(t, s, n, r);
                }),
                s
              );
            })(n, t, e, a, r);
          return Hc(i);
        }
        (Xc.prototype.render = Gc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Qc(e, t, null, null);
          }),
          (Xc.prototype.unmount = Gc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uc(function () {
                  Qc(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Xc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Lt.length && 0 !== t && t < Lt[n].priority;
                n++
              );
              Lt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    rc(t, Ze()),
                    0 === (6 & Ps) && ((Ws = Ze() + 500), Wa()));
                }
                break;
              case 13:
                uc(function () {
                  var t = zl(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  qc(e, 1);
            }
          }),
          (jt = function (e) {
            if (13 === e.tag) {
              var t = zl(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              qc(e, 134217728);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = zl(e, t);
              if (null !== n) nc(n, e, t, ec());
              qc(e, t);
            }
          }),
          (St = function () {
            return xt;
          }),
          (Et = function (e, t) {
            var n = xt;
            try {
              return (xt = e), t();
            } finally {
              xt = n;
            }
          }),
          (je = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = wa(r);
                      if (!a) throw Error(l(90));
                      Y(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = cc),
          (Te = uc);
        var eu = {
            usingClientEntryPoint: !1,
            Events: [xa, ba, wa, Ne, Ce, cc],
          },
          tu = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ve(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (at = ru.inject(nu)), (lt = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Kc(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: j,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Kc(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Yc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Wr(8 === e.nodeType ? e.parentNode : e),
              new Gc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = Ve(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zc(t)) throw Error(l(200));
            return $c(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Kc(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              o = Yc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Wc(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
              (e[ha] = t.current),
              Wr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zc(t)) throw Error(l(200));
            return $c(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zc(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                $c(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zc(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return $c(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        var r = n(43),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            l = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: l,
            _owner: o.current,
          };
        }
        (t.Fragment = l), (t.jsx = c), (t.jsxs = c);
      },
      202: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function x(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var b = (x.prototype = new y());
        (b.constructor = x), m(b, g.prototype), (b.isPureReactComponent = !0);
        var w = Array.isArray,
          j = Object.prototype.hasOwnProperty,
          k = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              j.call(t, a) && !S.hasOwnProperty(a) && (l[a] = t[a]);
          var s = arguments.length - 2;
          if (1 === s) l.children = r;
          else if (1 < s) {
            for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
            l.children = c;
          }
          if (e && e.defaultProps)
            for (a in (s = e.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: k.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var C = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function T(e, t, a, l, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (o) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = "" === l ? "." + P(s, 0) : l),
              w(i)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  T(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (N(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (s && s.key === i.key)
                          ? ""
                          : ("" + i.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (l = "" === l ? "." : l + ":"), w(e)))
            for (var c = 0; c < e.length; c++) {
              var u = l + P((o = e[c]), c);
              s += T(o, t, a, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(o = e.next()).done; )
              s += T((o = o.value), t, a, (u = l + P(o, c++)), i);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return s;
        }
        function I(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function A(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var R = { current: null },
          L = { transition: null },
          z = {
            ReactCurrentDispatcher: R,
            ReactCurrentBatchConfig: L,
            ReactCurrentOwner: k,
          };
        function _() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: I,
          forEach: function (e, t, n) {
            I(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              I(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              I(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = x),
          (t.StrictMode = l),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z),
          (t.act = _),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (o = k.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                j.call(t, c) &&
                  !S.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              s = Array(c);
              for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
              a.children = s;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: A,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = L.transition;
            L.transition = {};
            try {
              e();
            } finally {
              L.transition = t;
            }
          }),
          (t.unstable_act = _),
          (t.useCallback = function (e, t) {
            return R.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return R.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return R.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return R.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return R.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return R.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R.current.useRef(e);
          }),
          (t.useState = function (e) {
            return R.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return R.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return R.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        e.exports = n(202);
      },
      579: (e, t, n) => {
        e.exports = n(153);
      },
      234: (e, t) => {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                s = e[o],
                c = o + 1,
                u = e[c];
              if (0 > l(s, n))
                c < a && 0 > l(u, s)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = s), (e[o] = n), (r = o));
              else {
                if (!(c < a && 0 > l(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            s = o.now();
          t.unstable_now = function () {
            return o.now() - s;
          };
        }
        var c = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          x = "undefined" !== typeof setImmediate ? setImmediate : null;
        function b(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function w(e) {
          if (((v = !1), b(e), !m))
            if (null !== r(c)) (m = !0), L(j);
            else {
              var t = r(u);
              null !== t && z(w, t.startTime - e);
            }
        }
        function j(e, n) {
          (m = !1), v && ((v = !1), y(N), (N = -1)), (h = !0);
          var l = p;
          try {
            for (
              b(n), f = r(c);
              null !== f && (!(f.expirationTime > n) || (e && !T()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var o = i(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (f.callback = o)
                    : f === r(c) && a(c),
                  b(n);
              } else a(c);
              f = r(c);
            }
            if (null !== f) var s = !0;
            else {
              var d = r(u);
              null !== d && z(w, d.startTime - n), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = l), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var k,
          S = !1,
          E = null,
          N = -1,
          C = 5,
          P = -1;
        function T() {
          return !(t.unstable_now() - P < C);
        }
        function I() {
          if (null !== E) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = E(!0, e);
            } finally {
              n ? k() : ((S = !1), (E = null));
            }
          } else S = !1;
        }
        if ("function" === typeof x)
          k = function () {
            x(I);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var A = new MessageChannel(),
            R = A.port2;
          (A.port1.onmessage = I),
            (k = function () {
              R.postMessage(null);
            });
        } else
          k = function () {
            g(I, 0);
          };
        function L(e) {
          (E = e), S || ((S = !0), k());
        }
        function z(e, n) {
          N = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), L(j));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (v ? (y(N), (N = -1)) : (v = !0), z(w, l - i)))
                : ((e.sortIndex = o), n(c, e), m || h || ((m = !0), L(j))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  (() => {
    var e,
      t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__;
    n.t = function (r, a) {
      if ((1 & a && (r = this(r)), 8 & a)) return r;
      if ("object" === typeof r && r) {
        if (4 & a && r.__esModule) return r;
        if (16 & a && "function" === typeof r.then) return r;
      }
      var l = Object.create(null);
      n.r(l);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var o = 2 & a && r; "object" == typeof o && !~e.indexOf(o); o = t(o))
        Object.getOwnPropertyNames(o).forEach((e) => (i[e] = () => r[e]));
      return (i.default = () => r), n.d(l, i), l;
    };
  })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/");
  var r,
    a = n(43),
    l = n.t(a, 2),
    i = n(391);
  function o() {
    return (
      (o = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      o.apply(this, arguments)
    );
  }
  !(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
  })(r || (r = {}));
  const s = "popstate";
  function c(e, t) {
    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t);
  }
  function u(e, t) {
    if (!e) {
      "undefined" !== typeof console && console.warn(t);
      try {
        throw new Error(t);
      } catch (n) {}
    }
  }
  function d(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function f(e, t, n, r) {
    return (
      void 0 === n && (n = null),
      o(
        {
          pathname: "string" === typeof e ? e : e.pathname,
          search: "",
          hash: "",
        },
        "string" === typeof t ? h(t) : t,
        {
          state: n,
          key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
        }
      )
    );
  }
  function p(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
      n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
      r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
      t
    );
  }
  function h(e) {
    let t = {};
    if (e) {
      let n = e.indexOf("#");
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
      let r = e.indexOf("?");
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
        e && (t.pathname = e);
    }
    return t;
  }
  function m(e, t, n, a) {
    void 0 === a && (a = {});
    let { window: l = document.defaultView, v5Compat: i = !1 } = a,
      u = l.history,
      h = r.Pop,
      m = null,
      v = g();
    function g() {
      return (u.state || { idx: null }).idx;
    }
    function y() {
      h = r.Pop;
      let e = g(),
        t = null == e ? null : e - v;
      (v = e), m && m({ action: h, location: b.location, delta: t });
    }
    function x(e) {
      let t =
          "null" !== l.location.origin ? l.location.origin : l.location.href,
        n = "string" === typeof e ? e : p(e);
      return (
        (n = n.replace(/ $/, "%20")),
        c(
          t,
          "No window.location.(origin|href) available to create URL for href: " +
            n
        ),
        new URL(n, t)
      );
    }
    null == v && ((v = 0), u.replaceState(o({}, u.state, { idx: v }), ""));
    let b = {
      get action() {
        return h;
      },
      get location() {
        return e(l, u);
      },
      listen(e) {
        if (m) throw new Error("A history only accepts one active listener");
        return (
          l.addEventListener(s, y),
          (m = e),
          () => {
            l.removeEventListener(s, y), (m = null);
          }
        );
      },
      createHref: (e) => t(l, e),
      createURL: x,
      encodeLocation(e) {
        let t = x(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: function (e, t) {
        h = r.Push;
        let a = f(b.location, e, t);
        n && n(a, e), (v = g() + 1);
        let o = d(a, v),
          s = b.createHref(a);
        try {
          u.pushState(o, "", s);
        } catch (c) {
          if (c instanceof DOMException && "DataCloneError" === c.name) throw c;
          l.location.assign(s);
        }
        i && m && m({ action: h, location: b.location, delta: 1 });
      },
      replace: function (e, t) {
        h = r.Replace;
        let a = f(b.location, e, t);
        n && n(a, e), (v = g());
        let l = d(a, v),
          o = b.createHref(a);
        u.replaceState(l, "", o),
          i && m && m({ action: h, location: b.location, delta: 0 });
      },
      go: (e) => u.go(e),
    };
    return b;
  }
  var v;
  !(function (e) {
    (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
  })(v || (v = {}));
  new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
  function g(e, t, n) {
    return void 0 === n && (n = "/"), y(e, t, n, !1);
  }
  function y(e, t, n, r) {
    let a = R(("string" === typeof t ? h(t) : t).pathname || "/", n);
    if (null == a) return null;
    let l = x(e);
    !(function (e) {
      e.sort((e, t) =>
        e.score !== t.score
          ? t.score - e.score
          : (function (e, t) {
              let n =
                e.length === t.length &&
                e.slice(0, -1).every((e, n) => e === t[n]);
              return n ? e[e.length - 1] - t[t.length - 1] : 0;
            })(
              e.routesMeta.map((e) => e.childrenIndex),
              t.routesMeta.map((e) => e.childrenIndex)
            )
      );
    })(l);
    let i = null;
    for (let o = 0; null == i && o < l.length; ++o) {
      let e = A(a);
      i = T(l[o], e, r);
    }
    return i;
  }
  function x(e, t, n, r) {
    void 0 === t && (t = []),
      void 0 === n && (n = []),
      void 0 === r && (r = "");
    let a = (e, a, l) => {
      let i = {
        relativePath: void 0 === l ? e.path || "" : l,
        caseSensitive: !0 === e.caseSensitive,
        childrenIndex: a,
        route: e,
      };
      i.relativePath.startsWith("/") &&
        (c(
          i.relativePath.startsWith(r),
          'Absolute route path "' +
            i.relativePath +
            '" nested under path "' +
            r +
            '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
        ),
        (i.relativePath = i.relativePath.slice(r.length)));
      let o = F([r, i.relativePath]),
        s = n.concat(i);
      e.children &&
        e.children.length > 0 &&
        (c(
          !0 !== e.index,
          'Index routes must not have child routes. Please remove all child routes from route path "' +
            o +
            '".'
        ),
        x(e.children, t, s, o)),
        (null != e.path || e.index) &&
          t.push({ path: o, score: P(o, e.index), routesMeta: s });
    };
    return (
      e.forEach((e, t) => {
        var n;
        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
          for (let r of b(e.path)) a(e, t, r);
        else a(e, t);
      }),
      t
    );
  }
  function b(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
      a = n.endsWith("?"),
      l = n.replace(/\?$/, "");
    if (0 === r.length) return a ? [l, ""] : [l];
    let i = b(r.join("/")),
      o = [];
    return (
      o.push(...i.map((e) => ("" === e ? l : [l, e].join("/")))),
      a && o.push(...i),
      o.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
  }
  const w = /^:[\w-]+$/,
    j = 3,
    k = 2,
    S = 1,
    E = 10,
    N = -2,
    C = (e) => "*" === e;
  function P(e, t) {
    let n = e.split("/"),
      r = n.length;
    return (
      n.some(C) && (r += N),
      t && (r += k),
      n
        .filter((e) => !C(e))
        .reduce((e, t) => e + (w.test(t) ? j : "" === t ? S : E), r)
    );
  }
  function T(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
      a = {},
      l = "/",
      i = [];
    for (let o = 0; o < r.length; ++o) {
      let e = r[o],
        s = o === r.length - 1,
        c = "/" === l ? t : t.slice(l.length) || "/",
        u = I(
          { path: e.relativePath, caseSensitive: e.caseSensitive, end: s },
          c
        ),
        d = e.route;
      if (
        (!u &&
          s &&
          n &&
          !r[r.length - 1].route.index &&
          (u = I(
            { path: e.relativePath, caseSensitive: e.caseSensitive, end: !1 },
            c
          )),
        !u)
      )
        return null;
      Object.assign(a, u.params),
        i.push({
          params: a,
          pathname: F([l, u.pathname]),
          pathnameBase: U(F([l, u.pathnameBase])),
          route: d,
        }),
        "/" !== u.pathnameBase && (l = F([l, u.pathnameBase]));
    }
    return i;
  }
  function I(e, t) {
    "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = (function (e, t, n) {
        void 0 === t && (t = !1);
        void 0 === n && (n = !0);
        u(
          "*" === e || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
            e +
            '" will be treated as if it were "' +
            e.replace(/\*$/, "/*") +
            '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
            e.replace(/\*$/, "/*") +
            '".'
        );
        let r = [],
          a =
            "^" +
            e
              .replace(/\/*\*?$/, "")
              .replace(/^\/*/, "/")
              .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
              .replace(
                /\/:([\w-]+)(\?)?/g,
                (e, t, n) => (
                  r.push({ paramName: t, isOptional: null != n }),
                  n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                )
              );
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
          ? (a += "\\/*$")
          : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
        let l = new RegExp(a, t ? void 0 : "i");
        return [l, r];
      })(e.path, e.caseSensitive, e.end),
      a = t.match(n);
    if (!a) return null;
    let l = a[0],
      i = l.replace(/(.)\/+$/, "$1"),
      o = a.slice(1);
    return {
      params: r.reduce((e, t, n) => {
        let { paramName: r, isOptional: a } = t;
        if ("*" === r) {
          let e = o[n] || "";
          i = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
        }
        const s = o[n];
        return (e[r] = a && !s ? void 0 : (s || "").replace(/%2F/g, "/")), e;
      }, {}),
      pathname: l,
      pathnameBase: i,
      pattern: e,
    };
  }
  function A(e) {
    try {
      return e
        .split("/")
        .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        u(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
            t +
            ")."
        ),
        e
      );
    }
  }
  function R(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
  }
  function L(e, t, n, r) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified `to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the `to." +
      n +
      '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function z(e) {
    return e.filter(
      (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
    );
  }
  function _(e, t) {
    let n = z(e);
    return t
      ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
      : n.map((e) => e.pathnameBase);
  }
  function O(e, t, n, r) {
    let a;
    void 0 === r && (r = !1),
      "string" === typeof e
        ? (a = h(e))
        : ((a = o({}, e)),
          c(
            !a.pathname || !a.pathname.includes("?"),
            L("?", "pathname", "search", a)
          ),
          c(
            !a.pathname || !a.pathname.includes("#"),
            L("#", "pathname", "hash", a)
          ),
          c(!a.search || !a.search.includes("#"), L("#", "search", "hash", a)));
    let l,
      i = "" === e || "" === a.pathname,
      s = i ? "/" : a.pathname;
    if (null == s) l = n;
    else {
      let e = t.length - 1;
      if (!r && s.startsWith("..")) {
        let t = s.split("/");
        for (; ".." === t[0]; ) t.shift(), (e -= 1);
        a.pathname = t.join("/");
      }
      l = e >= 0 ? t[e] : "/";
    }
    let u = (function (e, t) {
        void 0 === t && (t = "/");
        let {
            pathname: n,
            search: r = "",
            hash: a = "",
          } = "string" === typeof e ? h(e) : e,
          l = n
            ? n.startsWith("/")
              ? n
              : (function (e, t) {
                  let n = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/"
                  );
                })(n, t)
            : t;
        return { pathname: l, search: D(r), hash: B(a) };
      })(a, l),
      d = s && "/" !== s && s.endsWith("/"),
      f = (i || "." === s) && n.endsWith("/");
    return u.pathname.endsWith("/") || (!d && !f) || (u.pathname += "/"), u;
  }
  const F = (e) => e.join("/").replace(/\/\/+/g, "/"),
    U = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    D = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    B = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
  Error;
  function M(e) {
    return (
      null != e &&
      "number" === typeof e.status &&
      "string" === typeof e.statusText &&
      "boolean" === typeof e.internal &&
      "data" in e
    );
  }
  const W = ["post", "put", "patch", "delete"],
    Q = (new Set(W), ["get", ...W]);
  new Set(Q), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
  Symbol("deferred");
  function H() {
    return (
      (H = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      H.apply(this, arguments)
    );
  }
  const V = a.createContext(null);
  const q = a.createContext(null);
  const Y = a.createContext(null);
  const G = a.createContext(null);
  const X = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  const K = a.createContext(null);
  function Z() {
    return null != a.useContext(G);
  }
  function J() {
    return Z() || c(!1), a.useContext(G).location;
  }
  function $(e) {
    a.useContext(Y).static || a.useLayoutEffect(e);
  }
  function ee() {
    let { isDataRoute: e } = a.useContext(X);
    return e
      ? (function () {
          let { router: e } = ue(se.UseNavigateStable),
            t = fe(ce.UseNavigateStable),
            n = a.useRef(!1);
          return (
            $(() => {
              n.current = !0;
            }),
            a.useCallback(
              function (r, a) {
                void 0 === a && (a = {}),
                  n.current &&
                    ("number" === typeof r
                      ? e.navigate(r)
                      : e.navigate(r, H({ fromRouteId: t }, a)));
              },
              [e, t]
            )
          );
        })()
      : (function () {
          Z() || c(!1);
          let e = a.useContext(V),
            { basename: t, future: n, navigator: r } = a.useContext(Y),
            { matches: l } = a.useContext(X),
            { pathname: i } = J(),
            o = JSON.stringify(_(l, n.v7_relativeSplatPath)),
            s = a.useRef(!1);
          return (
            $(() => {
              s.current = !0;
            }),
            a.useCallback(
              function (n, a) {
                if ((void 0 === a && (a = {}), !s.current)) return;
                if ("number" === typeof n) return void r.go(n);
                let l = O(n, JSON.parse(o), i, "path" === a.relative);
                null == e &&
                  "/" !== t &&
                  (l.pathname = "/" === l.pathname ? t : F([t, l.pathname])),
                  (a.replace ? r.replace : r.push)(l, a.state, a);
              },
              [t, r, o, i, e]
            )
          );
        })();
  }
  function te(e, t) {
    let { relative: n } = void 0 === t ? {} : t,
      { future: r } = a.useContext(Y),
      { matches: l } = a.useContext(X),
      { pathname: i } = J(),
      o = JSON.stringify(_(l, r.v7_relativeSplatPath));
    return a.useMemo(() => O(e, JSON.parse(o), i, "path" === n), [e, o, i, n]);
  }
  function ne(e, t, n, l) {
    Z() || c(!1);
    let { navigator: i } = a.useContext(Y),
      { matches: o } = a.useContext(X),
      s = o[o.length - 1],
      u = s ? s.params : {},
      d = (s && s.pathname, s ? s.pathnameBase : "/");
    s && s.route;
    let f,
      p = J();
    if (t) {
      var m;
      let e = "string" === typeof t ? h(t) : t;
      "/" === d ||
        (null == (m = e.pathname) ? void 0 : m.startsWith(d)) ||
        c(!1),
        (f = e);
    } else f = p;
    let v = f.pathname || "/",
      y = v;
    if ("/" !== d) {
      let e = d.replace(/^\//, "").split("/");
      y = "/" + v.replace(/^\//, "").split("/").slice(e.length).join("/");
    }
    let x = g(e, { pathname: y });
    let b = oe(
      x &&
        x.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, u, e.params),
            pathname: F([
              d,
              i.encodeLocation
                ? i.encodeLocation(e.pathname).pathname
                : e.pathname,
            ]),
            pathnameBase:
              "/" === e.pathnameBase
                ? d
                : F([
                    d,
                    i.encodeLocation
                      ? i.encodeLocation(e.pathnameBase).pathname
                      : e.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      l
    );
    return t && b
      ? a.createElement(
          G.Provider,
          {
            value: {
              location: H(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                f
              ),
              navigationType: r.Pop,
            },
          },
          b
        )
      : b;
  }
  function re() {
    let e = (function () {
        var e;
        let t = a.useContext(K),
          n = de(ce.UseRouteError),
          r = fe(ce.UseRouteError);
        if (void 0 !== t) return t;
        return null == (e = n.errors) ? void 0 : e[r];
      })(),
      t = M(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
        ? e.message
        : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = "rgba(200,200,200, 0.5)",
      l = { padding: "0.5rem", backgroundColor: r };
    return a.createElement(
      a.Fragment,
      null,
      a.createElement("h2", null, "Unexpected Application Error!"),
      a.createElement("h3", { style: { fontStyle: "italic" } }, t),
      n ? a.createElement("pre", { style: l }, n) : null,
      null
    );
  }
  const ae = a.createElement(re, null);
  class le extends a.Component {
    constructor(e) {
      super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        ("idle" !== t.revalidation && "idle" === e.revalidation)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: void 0 !== e.error ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      console.error(
        "React Router caught the following error during render",
        e,
        t
      );
    }
    render() {
      return void 0 !== this.state.error
        ? a.createElement(
            X.Provider,
            { value: this.props.routeContext },
            a.createElement(K.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  }
  function ie(e) {
    let { routeContext: t, match: n, children: r } = e,
      l = a.useContext(V);
    return (
      l &&
        l.static &&
        l.staticContext &&
        (n.route.errorElement || n.route.ErrorBoundary) &&
        (l.staticContext._deepestRenderedBoundaryId = n.route.id),
      a.createElement(X.Provider, { value: t }, r)
    );
  }
  function oe(e, t, n, r) {
    var l;
    if (
      (void 0 === t && (t = []),
      void 0 === n && (n = null),
      void 0 === r && (r = null),
      null == e)
    ) {
      var i;
      if (!n) return null;
      if (n.errors) e = n.matches;
      else {
        if (
          !(
            null != (i = r) &&
            i.v7_partialHydration &&
            0 === t.length &&
            !n.initialized &&
            n.matches.length > 0
          )
        )
          return null;
        e = n.matches;
      }
    }
    let o = e,
      s = null == (l = n) ? void 0 : l.errors;
    if (null != s) {
      let e = o.findIndex(
        (e) => e.route.id && void 0 !== (null == s ? void 0 : s[e.route.id])
      );
      e >= 0 || c(!1), (o = o.slice(0, Math.min(o.length, e + 1)));
    }
    let u = !1,
      d = -1;
    if (n && r && r.v7_partialHydration)
      for (let a = 0; a < o.length; a++) {
        let e = o[a];
        if (
          ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
            (d = a),
          e.route.id)
        ) {
          let { loaderData: t, errors: r } = n,
            a =
              e.route.loader &&
              void 0 === t[e.route.id] &&
              (!r || void 0 === r[e.route.id]);
          if (e.route.lazy || a) {
            (u = !0), (o = d >= 0 ? o.slice(0, d + 1) : [o[0]]);
            break;
          }
        }
      }
    return o.reduceRight((e, r, l) => {
      let i,
        c = !1,
        f = null,
        p = null;
      var h;
      n &&
        ((i = s && r.route.id ? s[r.route.id] : void 0),
        (f = r.route.errorElement || ae),
        u &&
          (d < 0 && 0 === l
            ? ((h = "route-fallback"),
              !1 || pe[h] || (pe[h] = !0),
              (c = !0),
              (p = null))
            : d === l &&
              ((c = !0), (p = r.route.hydrateFallbackElement || null))));
      let m = t.concat(o.slice(0, l + 1)),
        v = () => {
          let t;
          return (
            (t = i
              ? f
              : c
              ? p
              : r.route.Component
              ? a.createElement(r.route.Component, null)
              : r.route.element
              ? r.route.element
              : e),
            a.createElement(ie, {
              match: r,
              routeContext: { outlet: e, matches: m, isDataRoute: null != n },
              children: t,
            })
          );
        };
      return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === l)
        ? a.createElement(le, {
            location: n.location,
            revalidation: n.revalidation,
            component: f,
            error: i,
            children: v(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          })
        : v();
    }, null);
  }
  var se = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(se || {}),
    ce = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(ce || {});
  function ue(e) {
    let t = a.useContext(V);
    return t || c(!1), t;
  }
  function de(e) {
    let t = a.useContext(q);
    return t || c(!1), t;
  }
  function fe(e) {
    let t = (function () {
        let e = a.useContext(X);
        return e || c(!1), e;
      })(),
      n = t.matches[t.matches.length - 1];
    return n.route.id || c(!1), n.route.id;
  }
  const pe = {};
  const he = {};
  const me = (e, t, n) => {
    var r;
    he[
      (r =
        "\u26a0\ufe0f React Router Future Flag Warning: " +
        t +
        ". You can use the `" +
        e +
        "` future flag to opt-in early. For more information, see " +
        n +
        ".")
    ] || ((he[r] = !0), console.warn(r));
  };
  function ve(e, t) {
    (null != e && e.v7_startTransition) ||
      me(
        "v7_startTransition",
        "React Router will begin wrapping state updates in `React.startTransition` in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
      ),
      (null != e && e.v7_relativeSplatPath) ||
        (t && t.v7_relativeSplatPath) ||
        me(
          "v7_relativeSplatPath",
          "Relative route resolution within Splat routes is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
        ),
      t &&
        (t.v7_fetcherPersist ||
          me(
            "v7_fetcherPersist",
            "The persistence behavior of fetchers is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"
          ),
        t.v7_normalizeFormMethod ||
          me(
            "v7_normalizeFormMethod",
            "Casing of `formMethod` fields is being normalized to uppercase in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"
          ),
        t.v7_partialHydration ||
          me(
            "v7_partialHydration",
            "`RouterProvider` hydration behavior is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"
          ),
        t.v7_skipActionErrorRevalidation ||
          me(
            "v7_skipActionErrorRevalidation",
            "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"
          ));
  }
  l.startTransition;
  function ge(e) {
    c(!1);
  }
  function ye(e) {
    let {
      basename: t = "/",
      children: n = null,
      location: l,
      navigationType: i = r.Pop,
      navigator: o,
      static: s = !1,
      future: u,
    } = e;
    Z() && c(!1);
    let d = t.replace(/^\/*/, "/"),
      f = a.useMemo(
        () => ({
          basename: d,
          navigator: o,
          static: s,
          future: H({ v7_relativeSplatPath: !1 }, u),
        }),
        [d, u, o, s]
      );
    "string" === typeof l && (l = h(l));
    let {
        pathname: p = "/",
        search: m = "",
        hash: v = "",
        state: g = null,
        key: y = "default",
      } = l,
      x = a.useMemo(() => {
        let e = R(p, d);
        return null == e
          ? null
          : {
              location: { pathname: e, search: m, hash: v, state: g, key: y },
              navigationType: i,
            };
      }, [d, p, m, v, g, y, i]);
    return null == x
      ? null
      : a.createElement(
          Y.Provider,
          { value: f },
          a.createElement(G.Provider, { children: n, value: x })
        );
  }
  function xe(e) {
    let { children: t, location: n } = e;
    return ne(be(t), n);
  }
  new Promise(() => {});
  a.Component;
  function be(e, t) {
    void 0 === t && (t = []);
    let n = [];
    return (
      a.Children.forEach(e, (e, r) => {
        if (!a.isValidElement(e)) return;
        let l = [...t, r];
        if (e.type === a.Fragment)
          return void n.push.apply(n, be(e.props.children, l));
        e.type !== ge && c(!1), e.props.index && e.props.children && c(!1);
        let i = {
          id: e.props.id || l.join("-"),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          loader: e.props.loader,
          action: e.props.action,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            null != e.props.ErrorBoundary || null != e.props.errorElement,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        e.props.children && (i.children = be(e.props.children, l)), n.push(i);
      }),
      n
    );
  }
  var we = n(950),
    je = n.t(we, 2);
  function ke() {
    return (
      (ke = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      ke.apply(this, arguments)
    );
  }
  function Se(e, t) {
    if (null == e) return {};
    var n,
      r,
      a = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++)
      (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
    return a;
  }
  new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  const Ee = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ];
  try {
    window.__reactRouterVersion = "6";
  } catch (Gt) {}
  new Map();
  const Ne = l.startTransition;
  je.flushSync, l.useId;
  function Ce(e) {
    let { basename: t, children: n, future: r, window: l } = e,
      i = a.useRef();
    var o;
    null == i.current &&
      (i.current =
        (void 0 === (o = { window: l, v5Compat: !0 }) && (o = {}),
        m(
          function (e, t) {
            let { pathname: n, search: r, hash: a } = e.location;
            return f(
              "",
              { pathname: n, search: r, hash: a },
              (t.state && t.state.usr) || null,
              (t.state && t.state.key) || "default"
            );
          },
          function (e, t) {
            return "string" === typeof t ? t : p(t);
          },
          null,
          o
        )));
    let s = i.current,
      [c, u] = a.useState({ action: s.action, location: s.location }),
      { v7_startTransition: d } = r || {},
      h = a.useCallback(
        (e) => {
          d && Ne ? Ne(() => u(e)) : u(e);
        },
        [u, d]
      );
    return (
      a.useLayoutEffect(() => s.listen(h), [s, h]),
      a.useEffect(() => ve(r), [r]),
      a.createElement(ye, {
        basename: t,
        children: n,
        location: c.location,
        navigationType: c.action,
        navigator: s,
        future: r,
      })
    );
  }
  const Pe =
      "undefined" !== typeof window &&
      "undefined" !== typeof window.document &&
      "undefined" !== typeof window.document.createElement,
    Te = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ie = a.forwardRef(function (e, t) {
      let n,
        {
          onClick: r,
          relative: l,
          reloadDocument: i,
          replace: o,
          state: s,
          target: u,
          to: d,
          preventScrollReset: f,
          viewTransition: h,
        } = e,
        m = Se(e, Ee),
        { basename: v } = a.useContext(Y),
        g = !1;
      if ("string" === typeof d && Te.test(d) && ((n = d), Pe))
        try {
          let e = new URL(window.location.href),
            t = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
            n = R(t.pathname, v);
          t.origin === e.origin && null != n
            ? (d = n + t.search + t.hash)
            : (g = !0);
        } catch (Gt) {}
      let y = (function (e, t) {
          let { relative: n } = void 0 === t ? {} : t;
          Z() || c(!1);
          let { basename: r, navigator: l } = a.useContext(Y),
            { hash: i, pathname: o, search: s } = te(e, { relative: n }),
            u = o;
          return (
            "/" !== r && (u = "/" === o ? r : F([r, o])),
            l.createHref({ pathname: u, search: s, hash: i })
          );
        })(d, { relative: l }),
        x = (function (e, t) {
          let {
              target: n,
              replace: r,
              state: l,
              preventScrollReset: i,
              relative: o,
              viewTransition: s,
            } = void 0 === t ? {} : t,
            c = ee(),
            u = J(),
            d = te(e, { relative: o });
          return a.useCallback(
            (t) => {
              if (
                (function (e, t) {
                  return (
                    0 === e.button &&
                    (!t || "_self" === t) &&
                    !(function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(e)
                  );
                })(t, n)
              ) {
                t.preventDefault();
                let n = void 0 !== r ? r : p(u) === p(d);
                c(e, {
                  replace: n,
                  state: l,
                  preventScrollReset: i,
                  relative: o,
                  viewTransition: s,
                });
              }
            },
            [u, c, d, r, l, n, e, i, o, s]
          );
        })(d, {
          replace: o,
          state: s,
          target: u,
          preventScrollReset: f,
          relative: l,
          viewTransition: h,
        });
      return a.createElement(
        "a",
        ke({}, m, {
          href: n || y,
          onClick:
            g || i
              ? r
              : function (e) {
                  r && r(e), e.defaultPrevented || x(e);
                },
          ref: t,
          target: u,
        })
      );
    });
  var Ae, Re;
  (function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState");
  })(Ae || (Ae = {})),
    (function (e) {
      (e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(Re || (Re = {}));
  const Le = n.p + "static/media/logo.03eabfe3171233976479149fcc8ccec8.svg";
  const ze =
    n.p + "static/media/coingecko-icon.7f8babe5183d89ffeda2b23fca813adf.svg";
  const _e = n.p + "static/media/x-icon.70c571d5a2e9306e2a3a51a40f99fea1.svg";
  const Oe =
    n.p + "static/media/telegram-icon.82cb1a114e130392c24e5ed174bd2ae8.svg";
  const Fe =
    n.p + "static/media/dextools-icon.4dc0ae5b0abe0e5bb33d32a6324e62fc.svg";
  const Ue =
    n.p + "static/media/uniswap-icon.17605649f37dc494cfe0b94d0aa9aa79.svg";
  var De = n(579);
  const Be = (e) => {
      let {
          pageScrollPosition: t,
          isHeaderActive: n,
          setIsHeaderActive: r,
        } = e,
        { pathname: l } = J();
      const i = (0, a.useMemo)(() => "/" === l, [l]),
        o = (0, a.useCallback)(
          (e) => {
            r(!1),
              e &&
                window.scrollTo({
                  top:
                    document.getElementById(e).offsetTop -
                    window.innerHeight / 7,
                  behavior: "smooth",
                });
          },
          [r]
        );
      return (0, De.jsxs)("header", {
        className: `${n ? "active-header" : ""} ${
          t > 80 ? "scroll-header" : ""
        }`,
        children: [
          (0, De.jsx)("div", {
            className: "logo-wrap",
            children: (0, De.jsx)(Ie, {
              to: "/",
              children: (0, De.jsx)("img", { src: Le, alt: "Logo" }),
            }),
          }),
          (0, De.jsx)("div", {
            className: "toggle-wrap mobile-only",
            children: (0, De.jsxs)("div", {
              className: "btn-toggle",
              onClick: () => r(!n),
              children: [
                (0, De.jsx)("span", {
                  className: "text",
                  children: (0, De.jsx)("p", { children: "Menu" }),
                }),
                (0, De.jsxs)("span", {
                  className: "icons",
                  children: [
                    (0, De.jsx)("span", { className: "icon" }),
                    (0, De.jsx)("span", { className: "icon" }),
                  ],
                }),
              ],
            }),
          }),
          (0, De.jsxs)("div", {
            className: "nav-wrap",
            children: [
              (0, De.jsx)("div", {
                className: "nav-links-wrap",
                children: i
                  ? (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)(Ie, {
                            to: "/",
                            onClick: () => o("why"),
                            children: (0, De.jsx)("p", { children: "Why Us" }),
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)(Ie, {
                            to: "/",
                            onClick: () => o("strategies"),
                            children: (0, De.jsx)("p", {
                              children: "Strategies",
                            }),
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)(Ie, {
                            to: "/",
                            onClick: () => o("features"),
                            children: (0, De.jsx)("p", {
                              children: "Features",
                            }),
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)(Ie, {
                            to: "/",
                            onClick: () => o("packages"),
                            children: (0, De.jsx)("p", { children: "Pricing" }),
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)(Ie, {
                            to: "/",
                            onClick: () => o("ecosystem"),
                            children: (0, De.jsx)("p", {
                              children: "Ecosystem",
                            }),
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)(Ie, {
                            to: "https://docs.degenai.cc",
                            children: (0, De.jsx)("p", { children: "Docs" }),
                          }),
                        }),
                      ],
                    })
                  : (0, De.jsx)("ul", {
                      children: (0, De.jsx)("li", {
                        children: (0, De.jsx)(Ie, {
                          to: "/",
                          onClick: () => r(!1),
                          children: (0, De.jsx)("p", {
                            children: "Back To Homepage",
                          }),
                        }),
                      }),
                    }),
              }),
              (0, De.jsxs)("div", {
                className: "action-wrap",
                children: [
                  (0, De.jsxs)("div", {
                    className: "socials-wrap",
                    children: [
                      (0, De.jsx)("a", {
                        href: "https://www.dextools.io/app/en/ether/pair-explorer/0x00000000",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, De.jsx)("img", {
                          src: Fe,
                          alt: "DEXTools",
                        }),
                      }),
                      (0, De.jsx)("a", {
                        href: "https://x.com/DegenAI_ETH",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, De.jsx)("img", { src: _e, alt: "X" }),
                      }),
                      (0, De.jsx)("a", {
                        href: "https://t.me/DegenAI_ETH",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, De.jsx)("img", {
                          src: Oe,
                          alt: "Telegram",
                        }),
                      }),
                      (0, De.jsx)("a", {
                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x00000000000000000000000000000000000000",
                        target: "_blank",
                        rel: "noreferrer",
                        children: (0, De.jsx)("img", {
                          src: Ue,
                          alt: "Uniswap",
                        }),
                      }),
                    ],
                  }),
                  (0, De.jsx)("div", {
                    className: "btn-wrap",
                    children: (0, De.jsx)("a", {
                      href: "https://app.degenai.cc",
                      children: (0, De.jsx)("span", {
                        className: "text",
                        children: "dApp",
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    },
    Me = n.p + "static/media/hero-bg-img.0cee02029ab42bdfb7be.png";
  const We =
    n.p +
    "static/media/hero-notification-1.5388cf81e2e08538e6e4a2c20a736fa4.svg";
  const Qe =
    n.p +
    "static/media/hero-notification-2.55fa2e286c43d94ddcc05458a43a453c.svg";
  const He =
    n.p + "static/media/hero-scroll-icon.ea61cdf16e420ed591841330f53b4fe0.svg";
  const Ve =
      n.p + "static/media/btn-arrow-icon.f7c374d02dced3dd0456cbb9c238f752.svg",
    qe = () => {
      const [e, t] = (0, a.useState)(!1);
      return (
        (0, a.useEffect)(() => t(!0), []),
        (0, De.jsxs)("section", {
          id: "hero",
          className: "hero-section " + (e ? "active" : ""),
          children: [
            (0, De.jsx)("div", {
              className: "bg-wrap",
              children: (0, De.jsx)("img", { src: Me, alt: "Bg" }),
            }),
            (0, De.jsxs)("div", {
              className: "content-wrap",
              children: [
                (0, De.jsxs)("div", {
                  className: "text-wrap",
                  children: [
                    (0, De.jsx)("h1", {
                      className: "active-element",
                      children: "Join the Elite Traders with Degen AI",
                    }),
                    (0, De.jsx)("h6", {
                      className: "active-element",
                      children:
                        "Degen AI is an AI Portfolio Advisor and tracker, which helps you build, grow, and liquidate your portfolio.",
                    }),
                  ],
                }),
                (0, De.jsx)("div", {
                  className: "btn-wrap active-element",
                  children: (0, De.jsxs)("a", {
                    href: "https://app.degenai.cc/",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "btn-main",
                    children: [
                      (0, De.jsx)("span", {
                        className: "text",
                        children: "Go to DAPP",
                      }),
                      (0, De.jsx)("span", {
                        className: "icon",
                        children: (0, De.jsx)("img", { src: Ve, alt: "Icon" }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, De.jsx)("div", {
              className: "notification-wrap notification-1 active-element",
              children: (0, De.jsx)("div", {
                className: "img-wrap",
                children: (0, De.jsx)("img", { src: We, alt: "Notification" }),
              }),
            }),
            (0, De.jsx)("div", {
              className: "notification-wrap notification-2 active-element",
              children: (0, De.jsx)("div", {
                className: "img-wrap",
                children: (0, De.jsx)("img", { src: Qe, alt: "Notification" }),
              }),
            }),
            (0, De.jsx)("div", {
              className: "scroll-wrap active-element",
              children: (0, De.jsx)("img", { src: He, alt: "Scroll" }),
            }),
          ],
        })
      );
    };
  const Ye =
    n.p +
    "static/media/why-build-small-icon.47a31c8c80f83a8eb976a667637d795f.svg";
  const Ge =
    n.p + "static/media/why-build-bg-icon.172c01c0526d97be07c774ec8a2c48cd.svg";
  const Xe =
    n.p +
    "static/media/why-maintain-small-icon.386984646990c4ca01f79da3afc60266.svg";
  const Ke =
    n.p +
    "static/media/why-maintain-bg-icon.20c50d03d119b13b7871704d5cc4c46f.svg";
  const Ze =
    n.p +
    "static/media/why-liquidate-small-icon.7f343233f14d8255cf21259c41248938.svg";
  const Je =
      n.p +
      "static/media/why-liquidate-bg-icon.d3edbf2771c3c812f7fb54efaa851bab.svg",
    $e = () =>
      (0, De.jsxs)("section", {
        id: "why",
        className: "why-section",
        children: [
          (0, De.jsxs)("div", {
            className: "title-wrap animation",
            children: [
              (0, De.jsxs)("h2", {
                children: [
                  "Why should you",
                  (0, De.jsx)("br", {}),
                  " use Degen AI?",
                ],
              }),
              (0, De.jsxs)("h6", {
                children: [
                  "Empowering the crypto industry",
                  (0, De.jsx)("br", {}),
                  " with cutting-edge AI solutions",
                ],
              }),
            ],
          }),
          (0, De.jsxs)("div", {
            className: "items-wrap",
            children: [
              (0, De.jsxs)("div", {
                className: "item",
                children: [
                  (0, De.jsx)("div", {
                    className: "bg-wrap",
                    children: (0, De.jsx)("img", { src: Ge, alt: "Icon" }),
                  }),
                  (0, De.jsx)("div", {
                    className: "icon-wrap animation",
                    children: (0, De.jsx)("img", { src: Ye, alt: "Icon" }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "text-wrap",
                    children: [
                      (0, De.jsx)("h4", {
                        className: "animation",
                        children: "Build",
                      }),
                      (0, De.jsx)("p", {
                        className: "animation",
                        children:
                          "Degen AI helps you find opportunities and decide how much to invest on it.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, De.jsxs)("div", {
                className: "item",
                children: [
                  (0, De.jsx)("div", {
                    className: "bg-wrap",
                    children: (0, De.jsx)("img", { src: Ke, alt: "Icon" }),
                  }),
                  (0, De.jsx)("div", {
                    className: "icon-wrap animation",
                    children: (0, De.jsx)("img", { src: Xe, alt: "Icon" }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "text-wrap",
                    children: [
                      (0, De.jsx)("h4", {
                        className: "animation",
                        children: "Maintain",
                      }),
                      (0, De.jsx)("p", {
                        className: "animation",
                        children:
                          "Should you buy more, or derisk a little bit? These day to day decisions are not overwhelming anymore.",
                      }),
                    ],
                  }),
                ],
              }),
              (0, De.jsxs)("div", {
                className: "item",
                children: [
                  (0, De.jsx)("div", {
                    className: "bg-wrap",
                    children: (0, De.jsx)("img", { src: Je, alt: "Icon" }),
                  }),
                  (0, De.jsx)("div", {
                    className: "icon-wrap animation",
                    children: (0, De.jsx)("img", { src: Ze, alt: "Icon" }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "text-wrap",
                    children: [
                      (0, De.jsx)("h4", {
                        className: "animation",
                        children: "Liquidate",
                      }),
                      (0, De.jsx)("p", {
                        className: "animation",
                        children:
                          "It has happened to everyone. Unrealized gains become realized loses. Learn when to take profits!",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    et = n.p + "static/media/strategies-item-3.0b58fb1e0ef144bcd6ae.png",
    tt = n.p + "static/media/strategies-item-2.7a0dd6669cf470a282cc.png",
    nt = n.p + "static/media/strategies-item-1.21d7ff8c7ff7142362b7.png",
    rt = n.p + "static/media/strategies-bg-img.04c4d291dd3cbe9e262d.png",
    at = (e) => {
      let { isMobile: t } = e;
      return (0, De.jsxs)("section", {
        id: "strategies",
        className: "strategies-section",
        children: [
          (0, De.jsx)("div", {
            className: "bg-wrap",
            children: (0, De.jsx)("img", { src: rt, alt: "Bg" }),
          }),
          (0, De.jsx)("div", {
            className: "title-wrap animation",
            children: (0, De.jsxs)("h2", {
              children: ["Choose your", (0, De.jsx)("br", {}), " Strategy"],
            }),
          }),
          (0, De.jsxs)("div", {
            className: "items-wrap",
            children: [
              (0, De.jsxs)("div", {
                className: "item item-1 " + (t ? "animation" : ""),
                children: [
                  (0, De.jsx)("div", {
                    className: "img-wrap",
                    children: (0, De.jsx)("img", { src: et, alt: "Item" }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "description-wrap",
                    children: [
                      (0, De.jsx)("h4", { children: "Degen" }),
                      (0, De.jsx)("p", {
                        children:
                          "Aims to find the next gem. Will lose in most plays. Will win big in others. Ge 10 tokens, aiming to make at least one 10x.",
                      }),
                    ],
                  }),
                  (0, De.jsxs)("div", {
                    className: "info-wrap",
                    children: [
                      (0, De.jsx)("h4", { children: "Degen" }),
                      (0, De.jsxs)("ul", {
                        children: [
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", {
                                children: "Take profit style:",
                              }),
                              (0, De.jsx)("p", { children: "All or nothing!" }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "Derisk:" }),
                              (0, De.jsx)("p", { children: "What is that?" }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "Balance:" }),
                              (0, De.jsx)("p", {
                                children:
                                  "Largest part of its portfolio are microcaps",
                              }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "Cut Loss:" }),
                              (0, De.jsx)("p", {
                                children: "Diamond hands or if project rugs",
                              }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "DCA:" }),
                              (0, De.jsx)("p", {
                                children: "Buys microcaps in a regular basis",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, De.jsxs)("div", {
                className: "item item-2 " + (t ? "animation" : ""),
                children: [
                  (0, De.jsx)("div", {
                    className: "img-wrap",
                    children: (0, De.jsx)("img", { src: tt, alt: "Item" }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "description-wrap",
                    children: [
                      (0, De.jsx)("h4", { children: "Moderate" }),
                      (0, De.jsx)("p", {
                        children:
                          "A balanced profile that makes calculated risks and has moderate returns.",
                      }),
                    ],
                  }),
                  (0, De.jsxs)("div", {
                    className: "info-wrap",
                    children: [
                      (0, De.jsx)("h4", { children: "Moderate" }),
                      (0, De.jsxs)("ul", {
                        children: [
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", {
                                children: "Take profit style:",
                              }),
                              (0, De.jsx)("p", {
                                children: "Calculated goals",
                              }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "Derisk:" }),
                              (0, De.jsx)("p", {
                                children: "Derisks before taking profit",
                              }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "Balance:" }),
                              (0, De.jsx)("p", {
                                children:
                                  "Strategic allocations for each mcap range",
                              }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "Cut Loss:" }),
                              (0, De.jsx)("p", {
                                children:
                                  "Willing to lose half of an investment",
                              }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "DCA:" }),
                              (0, De.jsx)("p", {
                                children: "DCA out after derisking",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, De.jsxs)("div", {
                className: "item item-3 " + (t ? "animation" : ""),
                children: [
                  (0, De.jsx)("div", {
                    className: "img-wrap",
                    children: (0, De.jsx)("img", { src: nt, alt: "Item" }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "description-wrap",
                    children: [
                      (0, De.jsx)("h4", { children: "Conservative" }),
                      (0, De.jsx)("p", {
                        children:
                          "Cannot accept high fluctuations. Prefers to make a small, steady return.",
                      }),
                    ],
                  }),
                  (0, De.jsxs)("div", {
                    className: "info-wrap",
                    children: [
                      (0, De.jsx)("h4", { children: "Conservative" }),
                      (0, De.jsxs)("ul", {
                        children: [
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", {
                                children: "Take profit style:",
                              }),
                              (0, De.jsx)("p", { children: "Jeet" }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "Derisk:" }),
                              (0, De.jsx)("p", {
                                children: "Takes profit before derisking",
                              }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "Balance:" }),
                              (0, De.jsx)("p", {
                                children: "Prefers blue-chip and stables",
                              }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "Cut Loss:" }),
                              (0, De.jsx)("p", {
                                children:
                                  "Not willing to lose much of its investment",
                              }),
                            ],
                          }),
                          (0, De.jsxs)("li", {
                            children: [
                              (0, De.jsx)("h6", { children: "DCA:" }),
                              (0, De.jsx)("p", {
                                children: "DCA in into blue-chips",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, De.jsx)("div", {
            className: "btn-wrap",
            children: (0, De.jsxs)("a", {
              href: "https://app.degenai.cc/",
              target: "_blank",
              rel: "noreferrer",
              className: "btn-main",
              children: [
                (0, De.jsx)("span", {
                  className: "text",
                  children: "Go to DAPP",
                }),
                (0, De.jsx)("span", {
                  className: "icon",
                  children: (0, De.jsx)("img", { src: Ve, alt: "Icon" }),
                }),
              ],
            }),
          }),
        ],
      });
    };
  const lt =
    n.p +
    "static/media/subscriptions-wallet-icon.4173ba602c84d9c3a8487050351bf122.svg";
  const it =
    n.p +
    "static/media/subscriptions-swap-fee-icon.ddd0b31e37feabaf22eca80f0dcc7b1a.svg";
  const ot =
    n.p +
    "static/media/subscriptions-analytics-icon.06214b6b7b1a04366dfce71cdd27d670.svg";
  const st =
    n.p +
    "static/media/subscriptions-ideas-icon.08bdf9ec955f20f82db2c88d0201f0e1.svg";
  const ct =
    n.p +
    "static/media/subscriptions-advisor-icon.1cf4e8ae510a11e542f91160fea1f1a4.svg";
  const ut =
    n.p +
    "static/media/subscriptions-ads-icon.5513a5f9a1e43f6b4143ec0b7f2ac17a.svg";
  const dt =
    n.p +
    "static/media/subscriptions-plugins-icon.a2d82d08f55bfebb00afa7719a8f3678.svg";
  const ft =
    n.p +
    "static/media/subscriptions-news-icon.832a2beecce37badadaa808ce807e1e9.svg";
  const pt =
    n.p +
    "static/media/subscriptions-team-activity-icon.d0a4773cbe84f514c0f4569ce01e8c87.svg";
  const ht =
    n.p +
    "static/media/subscriptions-staking-icon.eec9b58a08ba597c9baab2fd3be47494.svg";
  const mt =
    n.p + "static/media/beta-access.fcf6927ba62f4cdd09a777e14e2592fe.svg";
  const vt = n.p + "static/media/unlocked.25d5c470825ea74a0bed92812d72e04d.svg",
    gt = n.p + "static/media/tier-smart-image.1595bc60695e2bc4c4ec.png",
    yt = n.p + "static/media/tier-genius-image.b40a9d6ba5f4f049c69d.png",
    xt = () =>
      (0, De.jsxs)("section", {
        id: "packages",
        className: "packages-section",
        children: [
          (0, De.jsx)("div", {
            className: "title-wrap animation",
            children: (0, De.jsxs)("h2", {
              children: [
                "Degen AI ",
                (0, De.jsx)("span", {
                  className: "gradient",
                  children: "Intelligence",
                }),
              ],
            }),
          }),
          (0, De.jsxs)("div", {
            className: "items-wrap",
            children: [
              (0, De.jsx)("a", {
                href: "#",
                className: "item animation",
                children: (0, De.jsxs)("span", {
                  className: "text-wrap",
                  children: [
                    (0, De.jsxs)("div", {
                      className: "header",
                      children: [
                        (0, De.jsx)("h5", { children: "Starter" }),
                        (0, De.jsx)("img", {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACbCAYAAAB1YemMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAvqSURBVHgB7Z3Lb11XFcbXPue+/biOmyrQpqGqjFTVKhNLMAEpEogBZdSSMfNSGIMYuJFAMKfwB3RqtaPSQQHJEoxAnlClrUQGpg0pbl527Ov7OC++tfY+9564gSa2Q6/d7xft7vO45+xU59Paa6+99o4IIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGnl6IoXFmXRT4nPreGyXFQQETiQGFnEJIe/xdBOXugeqHyXPX8UREJObGotnw9tlioX8U3vWzHlRL5ury+FvnfTiyd08uFPFLLR8t2AikFcdmLR56T56y+hD8i6zi+qBYK9Ubl+67Yo7gfzvU3a/pULhWr9yitG8V2grjX6qjQVsPxerQhc87kJK3wm+aBb1vDeQohDYOYBqh3K8K6mJdHEFxedslyjFBsJ4gDXZxbh8jmILIWBNaEuGpyDfefxp+PUT+Fn0SoP0Z9DqLZcr72bEJ4KcqSLOUbsgG7t5JXLJ1vgGL7YlL6ZOHUhe4S5QrKTOQtl4rrJkrs/LnIbRwvWn1LFmUB4llE+QRXMtQ9COvLoS4tnXXBpciOtWuNhUw9FYsWBLcBcXWjq3I3WpRZfMMazrdRp6jbqJsofZTZKJH9eITvvCCLeK6O+wO3jfstiPCmtKKOdPDKT3BPJald70coT5RNH2tXSss2xRzsNrWgy4tWzC/z1uyG7MSPo96GuCKIaV4WcK/n9iS2SMMsrF3PHu/JjLQLfSsECUuWoeQ4TlF3URKUUe6t3HLZlWp9bNaNYptafAxN7uk61aKtoN5E3Yi8pdoNlm2AWgXmS1/6rm3dKmwcrJnWbWnk+3hrR5omtj0c5zLM5qWdicznW3I9Pyfz2aRbXSnFdiyCY5xtSglC0/CGVsFHa1WEpiLbjXdlVNuTpA7x1PsoYiWtOykaejyQvAGR4bxew3P1DkpferjXhFITqLSF6yOUvficNMO7u7EX9UaIz8k4nidHgGKbckIMzV2Rx6NN6zpVDA3zy3YhqkiaEExa60sDI4I8iC2vt0xcda1xXsO9RmMI4ek1LzwVZGbP9lBUcDsmOn135DZN1K0DlvVosBudUiqjz0iDs1cxIFiCQ48urqb+WSyteA5CExPOKB5IAqe/pgM+OGDuJVi2r+PxZ3H+ZHjlB3jrv2Aw/5SIvNEU9KBSQ5eZZX1J4cAl2YzUU4gNZSZVH24TPhwCKfiNHEt3SrFNIV5oGrR9DgOCZzAg0C7tWqw+2h2I7YxZoHqs3WYbAhvAMqnQcsm/6yT6FV4x9xlNQHTyGpT7BqwdRglx2pIk7UFs8OHSOQjuhvSzoXSzgQxyxOKyNVkrLoUYHMV2SqiGOTRoexHdpx95tuPb8NEWrZtrQGxDdJ171iV6obmfw5r9UB+EIv4C0b0Ff+wtkS996F93/flcRl9DV/sznFywBsS9NpThb5oSwZLV0n0T2yidlTqM3wgWrZOqdethwLAsy2rhzLpRbKeEidh0svySBm2D2Hq1EENDndSDVasNpQ+nrPljCO0VPLRTwLJF8vTv/lcbuWy+HETXxZj39UjcL2AdEeWNkwJi68j8SIUGvy67htHqednJQjjkSKEQim3KmPhq6xDYnNPgLT587EefbXPk+3D01aI52YfQ2j/Aj7Tr3HHS+h4Csu8+WEvXny9k8DYOunj+R7CW70DEsGgJRBajVuumglMLt4+yk1dDIYcRG0ej00n4kC2bdtoaT0FpDK0W+/hZYnE1HLziH1Bf7UGFpjzxrn/GInq/htHqQg4hTjdnbd2Rf0bVqS8ffpFDx9ootikjWAz7uFfCtdjiXxq47Uf6C1yBApKoLo0XxY82P/ysrvN+6DPw2/6Md2JAkbzoxabv9+2ckcfCfGsNoZeWm/wVD+ezUWxThu9G1+zDNm2usrQqEaagnOubRXOuKW2Hj/dteyZYqMOAgcXvw+E3htLDyHaE2YdhtGeCi8Zu1vI4ZWnt0K4XxTaVXCq0K1sKZ2flMbkru07nOds4H5j1ETUv5/V+JI2/yyHxI1ZL0kVMriEtiFhFNhvu35Tbrio6++0hZxIotuljbNmuolwPH9qZ76S0IQjnRpbhIc/6aw/jqx2kDI3Ik83xNZW0trsL66nt5tZtbpgvd3gotulj7A9pMqRP9tmGUzU7vo5Aq5+mf0S08W6fKdINOXARZjD+4RPLjwDFNrVUU7b1g6t16RR96cOyNX2sCzMB/v6/L8ihuf68r90H5RXNEpmx9vLwd8iLJfnqgb/Tw0OxTSXvmc+WSv/Ax90T/fCwa0VT6hrzel+v5jL4vhwSnVUIRyrcYgdWU9vQlnZEfbZb4ZfDI1tSim0qWRUNoC7JhcInNBaFFwBcczu28xxzoX/TX0dSvCCHJMwk6NTVH4d4b1caedlGgTbPWhp5lckahYeFYpsyyhgW5kUR23ovXPVdWiFpromPhezDuuVFJtmbYn1b8S2dgpKHxp65oNkgqN9sSpZjdsLamLUM3rLttPAxv4vsRk8TIePDjpflmcIvv9PFKUk+J518D4JoSzdrST2rS+cOQhbBMqmFKv2vB0Gnq7xVwztew3/zAaxa27J42/ldtJnLVu7bTiHuQVhneplxttPGRbMi6pAvha40tfUCBcS2L7s4b0Ic+zm60HcgltfFJtUHbz+Yhdt8uZwXxUt/q6lGmtvWsny21OZBNVV8UZ6xdQoaglmxv8ulI1k2TsRPIZOg6Xrs5ykfi8sM3buyVZ+31VOakauJkzWUKM4l+UnI/FA+1FmFXKJ3a3LBAr4j+egrNclegAXUwcQ3rR0pXk/E/RLdc9qSWqpJlJkMkllZGKcY+Un4pWp60aF9NoptCjmwdC+sA9iMfYpRr6brDjQdfMYSJ/fqLcyViuW0yUtecO7Jz2hhFwOCn0K8f4DlsmxdiCvRnLZdWM5MGumC9CC0rlo5lBt49Y3Cj5JXmc92mqju5bEqqyHl6CoEtYPSirYlqcXSgeDq8QysW19GOjGPUoub4iIo40U88B3xk/Q2ywArdh0Cex8q+SvUi4FFsV2mhfuus6GCuyctPFi1Mo/tSFm69qyQqaSyBiEUTaLUyfAyt61pS/h6sq3Zuia0tmVtJPHQ0oRc1Ky8byg6sS/F0EIatmbU/L+2zAc/TUWWZLcxKFiUp9JyDek6rNrFyT4gBcV2Crn/KvhycXK5wmov9utF67EueumHNaNt2J+BCW/ofMqQp4XRpopMBxd96ZnoOmbRkmwHlqxrghvm1yCy87Z+dLx29MhWTakJmUomm/pZGER9pTwkL1aYKe7IreKMPG7hilxuo1t1bh8WryMzDg6/K9+m8sU55j3rKq6iLXG+ayLSc5cnciv3XWY/Oy/q/i2rsMZp4McBQx9TjWpl9Z5NXry16YWtEobZGWmh6xuZvzVjawcWko6ldddGsHAocYLuFT/Wena4Z2nfA0v71lVU/tl+dhbv2USt795AGwgqj5fuXT5CbO3g/w2Zcvzq+FdtaZ+MN/wrV10p5VYMzm3LtXhBFjCvueu64zy0rmi8TOc6dQpqQeZtdHkT5xm6zXOymG/K1aIHC7nsF7YUlWJwr48vABPfrWpdVg8MHq7q1gzRZMusZhDhtsbo7Oi26D5FWZiROFtsyZaoyGDlgvOvC1o0cHtjHLw97k0BKbYTgrdu1W9uS/30oBytOhmnketmgA2UL4tuBrgldeeF5VEr9rScr+xCeSPcm4w6feXU2zs2n41iOyEcEFu5yqkyYi03B9wQP2pt3vfbXgkCW55si1Xcr34Ue+tSbCcM69ZEzc09wgusuYm1W//Us3plzvbeXakI7bKEvXmLcgT8qLeoJyeNyjbyhT+O7i2vRp++Ni5uUuT/9o9x0LKdEh5ULNV/lIOWjBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIC/wGN/QmxEovkkAAAAABJRU5ErkJggg==",
                          alt: "Starter",
                        }),
                      ],
                    }),
                    (0, De.jsx)("div", {
                      className: "pricing",
                      children: (0, De.jsx)("h6", { children: "Free" }),
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: lt, alt: "Wallets" }),
                            (0, De.jsx)("p", {
                              children: "Track up to 3 wallets",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", {
                              src: it,
                              alt: "Swap & Strategies Fees",
                            }),
                            (0, De.jsx)("p", {
                              children: "1% Swap & Strategies Fees",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ot, alt: "Analytics" }),
                            (0, De.jsx)("p", {
                              children: "Basic Holder Analysis",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: st, alt: "Ideas" }),
                            (0, De.jsx)("p", { children: "Ideas" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ct, alt: "Advisor" }),
                            (0, De.jsx)("p", { children: "Basic Advisor" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ut, alt: "Ads" }),
                            (0, De.jsx)("p", { children: "All Ads" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, De.jsx)("a", {
                href: "#",
                className: "item animation",
                children: (0, De.jsxs)("span", {
                  className: "text-wrap",
                  children: [
                    (0, De.jsxs)("div", {
                      className: "header",
                      children: [
                        (0, De.jsx)("h5", { children: "Holder" }),
                        (0, De.jsx)("img", {
                          src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACbCAYAAAB1YemMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAxeSURBVHgB7ZxbbBxXGce/ueyu1/baSZr0hpuGKkhV3T7QCEQFqJGQQEAf+hKpgjfECxRRIUGlVqDED1GEUl5AKleJi+ABDAgJeEFQUqACIfmF1qGFCOXipoqS2Fl713udOfy/c8541xvbcZqN167+v+rrzJyZObPJ/POdc77znREhhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghZBXGmCDbZrbW+a0iFPKOwRhZJa5s35/uOncs1C0wa4mQkA1ZLTAnJljo7FjY2V9VFqw2oejI+qhAVgtL7RcRtl3253j1fnZsrwt7BXe7PB2b0R1A98vvEkboyu25bsM73ef3Z0J/DJuNnB0O3LGEM/IAtqdg02HnfnPdM/sFxbZNWd2pn1rxXE4YmTimvZgkmFkR1mzoBKX747CzENg4bNFu52QuFhlB+ZnwkBwK3LUPdInt9jWlbKO3EWt4k66Xf0qFIbLqnc1ivwA7KBBROCETcEtzOL4EuwfnI3/tleCKxMFeaeP8Xue6JME2hU2kqMeXXcb+Zewf0WNbpoMI6RMU2zagZ8RoZEVkmcBmsB3ywoq9XfC3qJe6C9vQ1zEfLEgFB3dAJanZbcuquGYkvSaLwS7ZJU5kY6nt8Ukrdcd1bA+mejL7WdJnwVFs2wAvNv8upgPX5yr1CCwfqoeCx4KVffdHBaY2rh5Nm01fVgmW/PkSrIK9UXus/1/0Hm0YomqnTmy7/LZtZqWaTsLDTcPDnZbT5qgcNfrTgkBuWXAU2wDpaTaz/dB5Mu1vDcFyXmQFbCuwvboNOkKLvPBUQHqcmmVpRsNSVHF8zIh5Ck+axP59/jGvoey1UKKTIrVzZYhsXIqJSANiG0+chyvDlnD/4RUv1w/vRrENkJ7m09osOviTtmnMe6EtoWOfhy2HTlh1WOwFpsdFbOu2nhr8T1EKEEj9YUQwXkDR5EbPh786WZHk5Kjk287LjbTn5H/phIxBdJMqtKwp7YvYOBodENko0x1NW6GdkTORE9qiF1gtV5E0DyHApOBsuFCXYAhCK7pjM9SQQqGB/aLkcV3zvRDaz+UGQrO/QcxXRiR6CeKNVMDzEPaE3O+b7v47oljIADkqLnyhfbTZMJYR3zdr4b3UI92OSiF2x/quAi3blZPoIbidiRC+IpVaJZbgzUjCN9AUav/qM7h2bPO/wTyMOo6H0np+j+RR7YIdTLiR7qSGV3DNaf3HccsDBTajA6IzKJj2ca47IKRitCDVeLc0IawkB4vrUsgNSS5OxDwWSvAF3PO+dap8C0r4Xijmt2gDH8W1U+LiH5sikPBJNHR/gWfE7cNoVpeTGfTdDqFZzUIhFNsOpWsEqgFWCG04mpflOJZGPCZDEJtBk6hNaHwHfMoJHH9k5V6RV8WZVrBfOqYlbwWSPNuS6D+RmC/h/FOb+j0SQKi551Rol2QuqaHfdlWuJgj82r4bhJbKLUKxDQA34X0M9riP9muUfwQCq8YVaedGrcgK2ld7Ny79CW55F6xsJHwxlLEXRfYsaj0LshBoUAKxsyCR808E0jqOYzvqhCc8Hkv0OyPJV/GaP7mJn3WhstR+tFSKWzpQQH8xycIgflRKz7YTcV5N+2pHAufVliG00XgJQovQfKIJLAyhs483i867Fdr5QIY/IXL3eV/FqpBJGXE39N/CEoK3qTSehWf7srso+CJU8wY83I9kE01qVdI7RyVsqtDmZDHxo1LYFH7K0VsWG0ejW8zqUegpTDNpLE0DtVWIJQqHZRwR3FwMV/KMrC00W033/jiCuiVJNXRhalJ8Ad7w+3oiFfN8Iq0Ix8dlE8CjmmuI1V32x7MrZx7qi1OiZ9tiumJrPhNDJ8mr8GomX5IhDAoEYY3kAQjkT3oRhPZwj9AyegPCgYvJBRqLi40s/QqhjcdQ/kOI7geRBL+UDb2bma1I6/GSjblpvK2FeNultg/uJvYh9Gw7kSk/71nwswD7MK00ptNSUUPaUSrhB/QqCO5n6wjNnb6+yJcNJajjG77w4ypAnHhZNgBN7qslPzl/SS5J207aHxI3MS8Bg7o7kOtfmmZmLOI91GCNsIC+VyDpk3oGYvv9DaozXVvjxGZsZz6S4Ve0Ytjd6BDeiaL/blxViumrktFskET2GhXbjMyID3v0Jb+NYhsIGsw93FOmHi7wzWHwoJZEMvZXuTFd4h3vElwRFr6ipdh5D170m+tXEJzE4OScTlldhshSOWcOykFzyDah7hJ6th3I9R4ixGhyyZZhGipoOMGV3Lk9ZdkcK3OYZSc2U7GqM4v+9Oh6QTKdHw2l8XX0FxPN/Ngnu9O23OPrO2zW/903D8U2UGL/AscRdljGhKcxnX7XTWM08jbu7x+V0bRTF8JwYkZ6LkcTG3wNzebJRdtXa/jMj2Z6APE19Cm7m2ihZ9uBdF7aKRHbCU8RurD5ZQhb1FCGMJeYi+6ai4/Ippn3wt2ldaaatxb4tCLE7dCExgfFpfH+QSPKTQnfD0/2HczFtsdEA7mNdG5uT+p+Uz3zarcssG4oti3Gx9l6SlO4nYJ6H1OQXAqP809bKs0nZNPsge3WiXR/vKRC+6Du1cT8Gy/6mxh4HMYzPluV8LsFKVx1CZQ6F6rJk2PJxEQ56eSyTfVVaArFtsWs3xwZU7TJi3GCqabf2Gsl/bRsHpPV49O9n3J1hC9Fki40JEXdITxY3B6x/bO2Jkq23aR7DfsHILJJDXfY6akpe29gBwb9Sgun2LYY59l0NKrxq4ZfA6CWpFVZ1G0SSfsfxjWl+1M5+9xNPcB6OLnPSPo5X/DTvBRbRlrtmhVYDoKrw2qYcF9OtI/mms5T3esPRNPBjWa89XFJH8W2xXgvoSuYxPWN9EXvsusBDJrSGvpbGJW2MNdpRQbvhu35T23+CRf2G1nQ+Nx44Dzk3+tSxUMaLXhOiGzBL3BppHfZgYDawURDMdM2d21q1UIXrq56B+DWgNq/f0wxzehEPLbtXBU99hEpZpm5z+BNPy32wvAEmroTG9WZyLkPh5J8G7v71TNiYIDgcOsKHtGqwkZkGWLT9QbabGpmhwp9Dvsvp87bdkSWfQtE+gjFNgBWr6ZSsWmKkWbo1jE3qpm5FQgtn3M5bR3BgfOaZoSpqL/Fsv9fWtCUC/dHkjwSSvp5HH7IX/c6vNrTdUnODknYrEoD/bRdKrSW66fdm7i1otk6A81Vs79Jj/susgyKbUB00ow0JVw/hzASXsaE/D6b19bOuUzdfK4BwRUwoQ4VnECH/d4bVIvocPBj1P4tHQhAik31ahreWIDgEvQN90qh5ZpOTR3K+miaFWfM7ZYDxTZAuprSwH02QTNAyj6RMg8rq6eDxTEm6OOcBB8NXMbug96UJSjm9UjCP0I7v4Y4rxUkgtDKENUorOBHnC3ffF5NxGffSp+moTYLxTZAXMZu94dhznixaf+tANO1CLmoJq24aFdARdqvi9wcahA2pRXkJU4bqKRgA7lRWwcYRevNmm2xIQ6No5W80A5k3qzvq903A0ejA8J1wDtzmm5GoewXCo+0r9jpI43s5zCK1OxZaw0EaOu4sFG3q4kTnXKoQ2jYpvVlqauyGk5o+Xa2cEXkrvasbTqzZ7mg8lYKTaHYBkTnRWeNy2UfUNUwRDmpyzziYJW269BXNBjbXJJas2jFZOoakR2SoTrmVBsVCSDE0cawlBqjEnlhVtsX5ZxfKTVrJtFHQ2jDe7Njt7x45e3AdaMDRr2bmy4/7Us0qbJkXP5/Ib0oZXOvTKDsWti2K+Q1SyQMxv3nFkZk1HRSi+bFTabrtNUQ7iv4j8XYSXVzZCU37faNODf8swoZON3ft3VZvA8FvR+X0bUKE/bqef/VIuWKf397TfYJrLOInR2w8bNMZIe7mmrHIIRmnytkW+AHC9L5alYmOkWFp0v+su+xKZrAcUBcYNYxi+mvSTu/aSuwTeUU/nNfIhqcyDIotm3KGl846nlXp3qOs0RHnXI64gcB20NkZIdw/Re9ez/WvPaXv7N7hZC3y3qCorBI39Gh6xpCE0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIUTk/2lBwEkwKXH+AAAAAElFTkSuQmCC",
                          alt: "Holder",
                        }),
                      ],
                    }),
                    (0, De.jsxs)("div", {
                      className: "pricing",
                      children: [
                        (0, De.jsx)("h6", { children: "Hold $100 in DEGEN" }),
                        (0, De.jsx)("h6", {
                          children: "Hold $200 in partner token",
                        }),
                      ],
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: lt, alt: "Wallets" }),
                            (0, De.jsx)("p", {
                              children: "Track up to 5 wallets",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", {
                              src: it,
                              alt: "Swap & Strategies Fees",
                            }),
                            (0, De.jsx)("p", {
                              children: "1% Swap & Strategies Fees",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ot, alt: "Analytics" }),
                            (0, De.jsx)("p", {
                              children: "Basic Holder Analysis",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: st, alt: "Ideas" }),
                            (0, De.jsx)("p", { children: "Ideas" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ct, alt: "Advisor" }),
                            (0, De.jsx)("p", { children: "Basic Advisor" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ut, alt: "Ads" }),
                            (0, De.jsx)("p", { children: "All Ads" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ht, alt: "Staking" }),
                            (0, De.jsx)("p", { children: "Staking" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, De.jsx)("a", {
                href: "#",
                className: "item animation",
                children: (0, De.jsxs)("span", {
                  className: "text-wrap",
                  children: [
                    (0, De.jsxs)("div", {
                      className: "header",
                      children: [
                        (0, De.jsx)("h5", { children: "Smart" }),
                        (0, De.jsx)("img", { src: gt, alt: "Smart" }),
                      ],
                    }),
                    (0, De.jsxs)("div", {
                      className: "pricing",
                      children: [
                        (0, De.jsx)("h6", { children: "\u039e0.08/year" }),
                        (0, De.jsx)("h6", { children: "0.1% DEGEN" }),
                      ],
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: lt, alt: "Wallets" }),
                            (0, De.jsx)("p", {
                              children: "Track up to 10 wallets",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", {
                              src: it,
                              alt: "Swap & Strategies Fees",
                            }),
                            (0, De.jsx)("p", {
                              children: "0.5% Swap & Strategies Fees",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ot, alt: "Analytics" }),
                            (0, De.jsx)("p", {
                              children: "Advanced Holder Analysis",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: st, alt: "Ideas" }),
                            (0, De.jsx)("p", {
                              children: "AI Summarized Ideas",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ct, alt: "Advisor" }),
                            (0, De.jsx)("p", { children: "Smart LLM Advisor" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ut, alt: "Ads" }),
                            (0, De.jsx)("p", {
                              children: "Targeted/Relevant Ads",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ht, alt: "Staking" }),
                            (0, De.jsx)("p", { children: "Staking" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ft, alt: "News" }),
                            (0, De.jsx)("p", { children: "Project News" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", {
                              src: pt,
                              alt: "Team Activity",
                            }),
                            (0, De.jsx)("p", { children: "Team Activity" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: dt, alt: "Plugins" }),
                            (0, De.jsx)("p", { children: "Plugins" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, De.jsx)("a", {
                href: "#",
                className: "item item-color animation",
                children: (0, De.jsxs)("span", {
                  className: "text-wrap",
                  children: [
                    (0, De.jsxs)("div", {
                      className: "header",
                      children: [
                        (0, De.jsxs)("h5", {
                          children: [
                            (0, De.jsx)("span", {
                              className: "text",
                              children: "Genius",
                            }),
                            (0, De.jsx)("span", {
                              className: "badge",
                              children: "BEST ROI",
                            }),
                          ],
                        }),
                        (0, De.jsx)("img", { src: yt, alt: "Genius" }),
                      ],
                    }),
                    (0, De.jsxs)("div", {
                      className: "pricing",
                      children: [
                        (0, De.jsx)("h6", { children: "\u039e0.2/year" }),
                        (0, De.jsx)("h6", { children: "0.4% DEGEN" }),
                      ],
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: lt, alt: "Wallets" }),
                            (0, De.jsx)("p", {
                              children: "Track up to 50 wallets",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", {
                              src: it,
                              alt: "Swap & Strategies Fees",
                            }),
                            (0, De.jsx)("p", {
                              children: "0.25% Swap & Strategies Fees",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ot, alt: "Analytics" }),
                            (0, De.jsx)("p", {
                              children: "Advanced Holder Analysis",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: st, alt: "Ideas" }),
                            (0, De.jsx)("p", {
                              children: "AI Summarized Ideas",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ct, alt: "Advisor" }),
                            (0, De.jsx)("p", {
                              children: "Genius LLM Advisor",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ut, alt: "Ads" }),
                            (0, De.jsx)("p", {
                              children: "Can opt-out of Ads",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ht, alt: "Staking" }),
                            (0, De.jsx)("p", { children: "Staking" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: ft, alt: "News" }),
                            (0, De.jsx)("p", {
                              children: "AI Summarized Project News",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", {
                              src: pt,
                              alt: "Team Activity",
                            }),
                            (0, De.jsx)("p", {
                              children: "AI Summarized Team Activity",
                            }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          children: [
                            (0, De.jsx)("img", { src: dt, alt: "Plugins" }),
                            (0, De.jsx)("p", { children: "Plugins" }),
                          ],
                        }),
                        (0, De.jsxs)("li", {
                          className: "beta-access",
                          children: [
                            (0, De.jsxs)("div", {
                              className: "main",
                              children: [
                                (0, De.jsx)("img", { src: mt, alt: "Plugins" }),
                                (0, De.jsx)("p", {
                                  children: "Beta Access Pass",
                                }),
                              ],
                            }),
                            (0, De.jsx)("img", { src: vt, alt: "Plugins" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    bt = n.p + "static/media/features-video-1.3b339319a36d48738814.webm",
    wt = n.p + "static/media/features-video-2.4aa81b41e732445ad7f2.webm",
    jt = n.p + "static/media/features-video-3.e0db8f911cb562da19b8.webm",
    kt = n.p + "static/media/features-video-4.ce065a72b68407097582.webm";
  const St =
    n.p + "static/media/services-ai-icon.d7fb0fe616c7a1834f9248615c4d39f8.svg";
  const Et =
    n.p +
    "static/media/services-insights-icon.0d43d317f035e3b7642a6693b5ec7920.svg";
  const Nt =
    n.p +
    "static/media/services-ideas-icon.3942fb5918131d3c47da2f96643f1854.svg";
  const Ct =
      n.p +
      "static/media/services-trading-icon.6b5069d346b85dbdb3f8c79a58fc6664.svg",
    Pt = () => {
      const e = document.querySelectorAll(".features-section video");
      console.log({ featuresVideos: e });
      const t = () => {
        Array.from(
          document.querySelectorAll(".features-section video")
        ).forEach((e) => {
          const { bottom: t = 0, height: n = 0 } = e.getBoundingClientRect();
          t - n / 2 - window.innerHeight < 0 && e.play(),
            e.hasAttribute("controls") && e.removeAttribute("controls");
        });
      };
      return (
        (0, a.useEffect)(
          () => (
            window.addEventListener("scroll", t, { passive: !0 }),
            () => window.removeEventListener("scroll", t)
          ),
          []
        ),
        (0, De.jsxs)("section", {
          id: "features",
          className: "features-section",
          children: [
            (0, De.jsx)("div", {
              className: "title-wrap animation",
              children: (0, De.jsxs)("h2", {
                children: [
                  "What makes us",
                  (0, De.jsx)("br", {}),
                  " different?",
                ],
              }),
            }),
            (0, De.jsxs)("div", {
              className: "item",
              children: [
                (0, De.jsxs)("div", {
                  className: "text-wrap",
                  children: [
                    (0, De.jsx)("div", {
                      className: "icon-wrap animation",
                      children: (0, De.jsx)("img", { src: St, alt: "Icon" }),
                    }),
                    (0, De.jsx)("h3", {
                      className: "animation",
                      children: "AI Copilot",
                    }),
                    (0, De.jsx)("h6", {
                      className: "animation",
                      children:
                        "Our AI Copilot is trained on your personal preferences and trades history. This allow us to give you the best decision for your own circumstances.",
                    }),
                  ],
                }),
                (0, De.jsx)("div", {
                  className: "img-wrap",
                  children: (0, De.jsx)("video", {
                    src: bt,
                    muted: "muted",
                    playsInline: !0,
                  }),
                }),
              ],
            }),
            (0, De.jsxs)("div", {
              className: "item item-revert",
              children: [
                (0, De.jsx)("div", {
                  className: "img-wrap",
                  children: (0, De.jsx)("video", {
                    src: wt,
                    muted: "muted",
                    playsInline: !0,
                  }),
                }),
                (0, De.jsxs)("div", {
                  className: "text-wrap",
                  children: [
                    (0, De.jsx)("div", {
                      className: "icon-wrap animation",
                      children: (0, De.jsx)("img", { src: Et, alt: "Icon" }),
                    }),
                    (0, De.jsx)("h3", {
                      className: "animation",
                      children: "Algorithmic Insights",
                    }),
                    (0, De.jsx)("h6", {
                      className: "animation",
                      children:
                        "Full analytics of your portfolio helps you understand the performance of your actions, and the exposure you have to different narratives and risk levels.",
                    }),
                  ],
                }),
              ],
            }),
            (0, De.jsxs)("div", {
              className: "item",
              children: [
                (0, De.jsxs)("div", {
                  className: "text-wrap",
                  children: [
                    (0, De.jsx)("div", {
                      className: "icon-wrap animation",
                      children: (0, De.jsx)("img", { src: Nt, alt: "Icon" }),
                    }),
                    (0, De.jsx)("h3", {
                      className: "animation",
                      children: "Degen Ideas",
                    }),
                    (0, De.jsx)("h6", {
                      className: "animation",
                      children:
                        "Read and rate the ideas of fellow traders. Good ideas get rewarded, incentivizing alpha sharing.",
                    }),
                  ],
                }),
                (0, De.jsx)("div", {
                  className: "img-wrap",
                  children: (0, De.jsx)("video", {
                    src: jt,
                    muted: "muted",
                    playsInline: !0,
                  }),
                }),
              ],
            }),
            (0, De.jsxs)("div", {
              className: "item item-revert",
              children: [
                (0, De.jsx)("div", {
                  className: "img-wrap",
                  children: (0, De.jsx)("video", {
                    src: kt,
                    muted: "muted",
                    playsInline: !0,
                  }),
                }),
                (0, De.jsxs)("div", {
                  className: "text-wrap",
                  children: [
                    (0, De.jsx)("div", {
                      className: "icon-wrap animation",
                      children: (0, De.jsx)("img", { src: Ct, alt: "Icon" }),
                    }),
                    (0, De.jsx)("h3", {
                      className: "animation",
                      children: "Automatic Trading",
                    }),
                    (0, De.jsx)("h6", {
                      className: "animation",
                      children:
                        "Some strategies require speed. Our infrastructure based on account abstractions allows you fast and secure transactions.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    },
    Tt = n.p + "static/media/ecosystem-main-img.b92ed5413391d6d1fe5b.png",
    It =
      n.p + "static/media/ecosystem-main-img-mobile.0d514380a12125dfa5c3.png",
    At = n.p + "static/media/ecosystem-circles-img.c0e77ba003f2f677a646.png",
    Rt = (e) => {
      let { isMobile: t } = e;
      return (0, De.jsxs)("section", {
        id: "ecosystem",
        className: "ecosystem-section",
        children: [
          (0, De.jsx)("div", {
            className: "title-wrap animation",
            children: (0, De.jsxs)("h2", {
              children: ["Revenue", (0, De.jsx)("br", {}), " Ecosystem"],
            }),
          }),
          (0, De.jsx)("div", {
            className: "content-wrap",
            children: t
              ? (0, De.jsx)("div", {
                  className: "main-img-wrap",
                  children: (0, De.jsx)("img", { src: It, alt: "Main Image" }),
                })
              : (0, De.jsxs)(De.Fragment, {
                  children: [
                    (0, De.jsx)("div", {
                      className: "circles-img-wrap animation",
                      children: (0, De.jsx)("img", {
                        src: At,
                        alt: "Circles Image",
                      }),
                    }),
                    (0, De.jsx)("div", {
                      className: "main-img-wrap animation",
                      children: (0, De.jsx)("img", {
                        src: Tt,
                        alt: "Main Image",
                      }),
                    }),
                  ],
                }),
          }),
        ],
      });
    };
  const Lt =
    n.p +
    "static/media/roadmap-foundation-icon.20c8b68fa79ecb2ff65b8c978ac0ec33.svg";
  const zt =
    n.p + "static/media/roadmap-grow-icon.2a96ac9e8b39615fae6319a2a9784165.svg";
  const _t =
    n.p +
    "static/media/roadmap-evolve-icon.0eee77524574050fdddfdb6075c3a72c.svg";
  const Ot =
      n.p +
      "static/media/roadmap-scale-icon.dc62fd3a0e77bd17f3c627a70e0cb538.svg",
    Ft = () =>
      (0, De.jsxs)("section", {
        id: "roadmap",
        className: "roadmap-section",
        children: [
          (0, De.jsxs)("div", {
            className: "title-wrap animation",
            children: [
              (0, De.jsx)("h2", { children: "Roadmap" }),
              (0, De.jsx)("h6", {
                children: "Simple beginning, disruptive vision.",
              }),
            ],
          }),
          (0, De.jsxs)("div", {
            className: "items-wrap",
            children: [
              (0, De.jsxs)("div", {
                className: "item animation",
                children: [
                  (0, De.jsx)("div", {
                    className: "icon-wrap",
                    children: (0, De.jsx)("img", {
                      src: Lt,
                      alt: "Foundation",
                    }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "headline-wrap",
                    children: [
                      (0, De.jsx)("h5", { children: "Foundation" }),
                      (0, De.jsx)("p", {
                        children: "A big vision requires a strong foundation.",
                      }),
                    ],
                  }),
                  (0, De.jsxs)("ul", {
                    children: [
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Website Launch",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", { children: "Bot MVP" }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Onboard Marketers",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Algorithmic Recommendations",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Ideas Platform",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Onboard KOLs",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Explanatory Video",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", { children: "Launch" }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Lock Liquidity",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Renounce Contract",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, De.jsxs)("div", {
                className: "item animation",
                children: [
                  (0, De.jsx)("div", {
                    className: "icon-wrap",
                    children: (0, De.jsx)("img", { src: zt, alt: "Grow" }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "headline-wrap",
                    children: [
                      (0, De.jsx)("h5", { children: "Grow" }),
                      (0, De.jsxs)("p", {
                        children: [
                          "Our path to a critical",
                          (0, De.jsx)("br", {}),
                          " user base.",
                        ],
                      }),
                    ],
                  }),
                  (0, De.jsxs)("ul", {
                    children: [
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Multi-chain Support",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Rebalance Strategy",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", { children: "AMA Tour" }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Partnerships",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", { children: "Backtesting" }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", { children: "CG Listing" }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Educational Material",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Competitions",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", { children: "dApp" }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Derisk Strategy",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        className: "done",
                        children: (0, De.jsx)("p", {
                          children: "Tiered Features",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, De.jsxs)("div", {
                className: "item animation",
                children: [
                  (0, De.jsx)("div", {
                    className: "icon-wrap",
                    children: (0, De.jsx)("img", { src: _t, alt: "Evolve" }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "headline-wrap",
                    children: [
                      (0, De.jsx)("h5", { children: "Evolve" }),
                      (0, De.jsxs)("p", {
                        children: [
                          "Not only an AI advisor.",
                          (0, De.jsx)("br", {}),
                        ],
                      }),
                    ],
                  }),
                  (0, De.jsxs)("ul", {
                    children: [
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", { children: "Staking" }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "DCA In Strategy",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Create Ads Network",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Revenue Share",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Natural Language Addition",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "AI Recommendations",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Opportunity Finder",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Narrative Exposure",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Alpha Community",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Telegram Analytics",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", { children: "X Analytics" }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, De.jsxs)("div", {
                className: "item animation",
                children: [
                  (0, De.jsx)("div", {
                    className: "icon-wrap",
                    children: (0, De.jsx)("img", { src: Ot, alt: "Scale" }),
                  }),
                  (0, De.jsxs)("div", {
                    className: "headline-wrap",
                    children: [
                      (0, De.jsx)("h5", { children: "Scale" }),
                      (0, De.jsxs)("p", {
                        children: [
                          "Become the largest crypto profitability and advertisement platform.",
                          (0, De.jsx)("br", {}),
                        ],
                      }),
                    ],
                  }),
                  (0, De.jsxs)("ul", {
                    children: [
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Advanced Ads Network",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Account Abstraction",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Automatic Trading",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", { children: "News Feed" }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", {
                          children: "Advanced Opportunity Finder",
                        }),
                      }),
                      (0, De.jsx)("li", {
                        children: (0, De.jsx)("p", { children: "Plugins" }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    Ut = n.p + "static/media/trade-bg-img.f14f99b34329ca176214.png",
    Dt = n.p + "static/media/trade-phone-img.388aa7a2282c3faf1a55.png",
    Bt = () =>
      (0, De.jsxs)("section", {
        id: "trade",
        className: "trade-section",
        children: [
          (0, De.jsx)("div", {
            className: "bg-wrap",
            children: (0, De.jsx)("img", { src: Ut, alt: "Bg" }),
          }),
          (0, De.jsxs)("div", {
            className: "content-wrap",
            children: [
              (0, De.jsxs)("div", {
                className: "text-wrap",
                children: [
                  (0, De.jsxs)("h1", {
                    children: [
                      "Trade like",
                      (0, De.jsx)("br", {}),
                      " a pro with",
                      (0, De.jsx)("br", {}),
                      " Degen AI",
                    ],
                  }),
                  (0, De.jsx)("h6", {
                    children: "Leave the times of emotional trading behind.",
                  }),
                ],
              }),
              (0, De.jsx)("div", {
                className: "btn-wrap",
                children: (0, De.jsxs)("a", {
                  href: "https://app.degenai.cc/",
                  target: "_blank",
                  rel: "noreferrer",
                  className: "btn-main",
                  children: [
                    (0, De.jsx)("span", {
                      className: "text",
                      children: "Go to DAPP",
                    }),
                    (0, De.jsx)("span", {
                      className: "icon",
                      children: (0, De.jsx)("img", { src: Ve, alt: "Icon" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, De.jsx)("div", {
            className: "phone-wrap",
            children: (0, De.jsx)("img", { src: Dt, alt: "phone" }),
          }),
        ],
      }),
    Mt = () =>
      (0, De.jsxs)("section", {
        className: "grid-section",
        children: [
          (0, De.jsx)("div", { className: "item" }),
          (0, De.jsx)("div", { className: "item" }),
          (0, De.jsx)("div", { className: "item" }),
          (0, De.jsx)("div", { className: "item" }),
          (0, De.jsx)("div", { className: "item" }),
        ],
      }),
    Wt = () => {
      const [e, t] = (0, a.useState)(window.innerWidth),
        n = () => {
          t(window.innerWidth);
        },
        r = () => {
          const e = document.querySelector(".strategies-section .items-wrap"),
            { bottom: t = 0, height: n = 0 } =
              null === e || void 0 === e ? void 0 : e.getBoundingClientRect();
          t - n / 5 - window.innerHeight < 0
            ? e.classList.add("animation-active")
            : e.classList.remove("animation-active");
        };
      (0, a.useEffect)(
        () => (
          window.addEventListener("resize", n),
          () => {
            window.removeEventListener("resize", n);
          }
        ),
        []
      ),
        (0, a.useEffect)(
          () => (
            window.addEventListener("scroll", r, { passive: !0 }),
            () => window.removeEventListener("scroll", r)
          ),
          []
        );
      const l = (0, a.useMemo)(() => e <= 768, [e]);
      return (0, De.jsxs)("main", {
        children: [
          (0, De.jsx)(Mt, {}),
          (0, De.jsx)(qe, {}),
          (0, De.jsx)($e, {}),
          (0, De.jsx)(at, { isMobile: l }),
          (0, De.jsx)(Pt, {}),
          (0, De.jsx)(xt, {}),
          (0, De.jsx)(Rt, { isMobile: l }),
          (0, De.jsx)(Ft, {}),
          (0, De.jsx)(Bt, {}),
        ],
      });
    },
    Qt = n.p + "static/media/info-page-bg.59e798e0774781ef3a21.png",
    Ht = () =>
      (0, De.jsx)("main", {
        children: (0, De.jsxs)("div", {
          className: "info-page-section",
          children: [
            (0, De.jsx)("div", {
              className: "bg-wrap",
              children: (0, De.jsx)("img", { src: Qt, alt: "Bg" }),
            }),
            (0, De.jsxs)("div", { className: "headline-wrap", children: [] }),
            (0, De.jsxs)("div", {
              className: "text-wrap",
              children: [
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "1. Acceptance of Terms" }),
                    (0, De.jsx)("p", {
                      children:
                        'Welcome to Degen AI! By accessing or using our website, https://apescreener.xyz/, and related services (collectively, the "Service"), you agree to comply with and be bound by the following Terms of Service ("Terms"). Please read them carefully. If you do not agree to these Terms, do not use the Service.',
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "2. Eligibility" }),
                    (0, De.jsx)("p", {
                      children:
                        "You must be at least 18 years old and legally capable of entering into contracts to use our Service. By using Degen AI, you represent and warrant that you meet these requirements.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", {
                      children: "3. Description of Service",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        "Degen AI provides an AI-driven portfolio advisor and tracker for cryptocurrencies. Our Service aims to help users manage, grow, and monitor their cryptocurrency investments.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "4. User Responsibilities" }),
                    (0, De.jsx)("p", {
                      children:
                        "You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "5. Prohibited Uses" }),
                    (0, De.jsx)("p", { children: "You agree not to:" }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Use the Service for any illegal activities.",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Interfere with the security or integrity of the Service.",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Attempt to gain unauthorized access to any part of the Service.",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Transmit any harmful or malicious software.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "6. Intellectual Property" }),
                    (0, De.jsx)("p", {
                      children:
                        "All content, trademarks, logos, and other intellectual property related to Degen AI are the property of Degen AI Inc. You may not use, reproduce, distribute, or create derivative works from any content provided through the Service without our explicit permission.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "7. Privacy" }),
                    (0, De.jsx)("p", {
                      children:
                        "We value your privacy and strive to protect your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data. By using the Service, you agree to the terms of our Privacy Policy.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "8. Third-Party Links" }),
                    (0, De.jsx)("p", {
                      children:
                        "Our Service may contain links to third-party websites. We do not control, endorse, or assume responsibility for any third-party content. Accessing third-party sites is at your own risk.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", {
                      children: "9. Disclaimer of Warranties",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        'The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or free of viruses or other harmful components.',
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", {
                      children: "10. Limitation of Liability",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        "In no event shall Degen AI Inc., its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, use, goodwill, or other intangible losses, resulting from:",
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Your use or inability to use the Service.",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Any unauthorized access to or use of our servers and/or any personal information stored therein.",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Any bugs, viruses, trojan horses, or similar issues transmitted through the Service by any third party.",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the Service.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "11. Indemnification" }),
                    (0, De.jsx)("p", {
                      children:
                        "You agree to defend, indemnify, and hold harmless Degen AI Inc. and its affiliates from any claims, damages, liabilities, losses, costs, and expenses arising from your use of the Service or violation of these Terms.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "12. Governing Law" }),
                    (0, De.jsx)("p", {
                      children:
                        "These Terms are governed by the laws of the State of Delaware, without regard to its conflict of law principles. Any legal action or proceeding related to your access to or use of the Service shall be instituted in a state or federal court in Delaware.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "13. Dispute Resolution" }),
                    (0, De.jsx)("p", {
                      children:
                        "Any disputes arising out of or in connection with these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration will take place in Delaware, and the arbitrator's decision will be final and binding.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "14. Termination" }),
                    (0, De.jsx)("p", {
                      children:
                        "We reserve the right to terminate or suspend your access to the Service at our sole discretion, without prior notice or liability, for any reason, including but not limited to a breach of these Terms.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "15. Contact Information" }),
                    (0, De.jsxs)("p", {
                      children: [
                        "For any questions about these Terms, please contact us at ",
                        (0, De.jsx)("a", {
                          href: "mailto:support@apescreener.xyz",
                          children: "support@apescreener.xyz",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    Vt = () =>
      (0, De.jsx)("main", {
        children: (0, De.jsxs)("div", {
          className: "info-page-section",
          children: [
            (0, De.jsx)("div", {
              className: "bg-wrap",
              children: (0, De.jsx)("img", { src: Qt, alt: "Bg" }),
            }),
            (0, De.jsxs)("div", {
              className: "headline-wrap",
              children: [
                (0, De.jsxs)("h2", {
                  children: [
                    "Privacy Policy",
                    (0, De.jsx)("br", {}),
                    " for Degen AI",
                  ],
                }),
                (0, De.jsxs)("h6", {
                  children: [
                    "This Privacy Policy (\u201cPolicy\u201d) outlines how Degen AI Inc. (\u201cCompany\u201d, \u201cwe\u201d, \u201cour\u201d, or \u201cus\u201d) gathers, uses, discloses, and protects personal information of users of its website: ",
                    (0, De.jsx)(Ie, {
                      to: "/",
                      children: "https://apescreener.xyz",
                    }),
                    " (the \u201cSite\u201d) and associated services (collectively, \u201cServices\u201d). This Policy applies wherever it is referenced or linked within our Services.",
                  ],
                }),
                (0, De.jsx)("h6", {
                  children:
                    "By accessing or using our Services, you agree to the terms of this Policy and our Terms of Use, and consent to our handling of your information as described herein. Please ensure you also review our Terms of Use, which include important limitations on liability and stipulate that any disputes must be resolved individually.",
                }),
                (0, De.jsx)("h6", {
                  children:
                    "IF YOU DISAGREE WITH ANY PART OF THIS PRIVACY POLICY OR OUR TERMS OF USE, PLEASE DO NOT USE OUR SERVICES.",
                }),
                (0, De.jsx)("h6", {
                  children:
                    "This Policy does not cover information collected through third-party websites or services that you may access through our Services or information submitted to us via email, text message, or other electronic messages, or offline.",
                }),
              ],
            }),
            (0, De.jsxs)("div", {
              className: "text-wrap",
              children: [
                (0, De.jsx)("div", {
                  className: "item-headline",
                  children: (0, De.jsx)("h4", {
                    children: "1. Information We Collect",
                  }),
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "1.1 Personal Information" }),
                    (0, De.jsx)("p", {
                      children:
                        "We aim to collect minimal personal information to enhance user experience. The personal information we may collect includes:",
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Telegram usernames",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Cryptocurrency wallet addresses",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Transaction histories of provided wallets",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", {
                      children: "1.2 Non-Personal Information",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        "We also collect non-personal information which does not directly identify you, such as:",
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "IP addresses",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Browser types",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Operating systems",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Device types",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Usage data (e.g., pages visited, time spent on the site)",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", {
                      children: "1.3 Automatically Collected Information",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        "When you use our Site, certain information is automatically collected, referred to as \u201cLog Data.\u201d This includes:",
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Internet Protocol (IP) addresses",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Device and browser types",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Operating systems",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Pages or features accessed on our Site and the duration of access",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Frequency of use",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Search terms",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Links clicked on the Site",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "We use this information to manage and improve our Services, and may engage third-party services to analyze this data.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item-headline",
                  children: [
                    (0, De.jsx)("h4", {
                      children: "2. Use of Personal Information",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        "We use the personal information collected for the following purposes:",
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "To provide and maintain our Services",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "To enable access to our Services",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "To deliver products and services you request",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "To process transactions and send related information",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "To send updates, security alerts, and support messages",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "To optimize user experience and improve our Services",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "To communicate about promotions, events, and news from us and our partners",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item-headline",
                  children: [
                    (0, De.jsx)("h4", {
                      children: "3. Sharing of Personal Information",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        "We do not share your personal information with third parties without your explicit consent, except in the following situations:",
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Business Transfers: During negotiations or completion of business transactions, such as mergers or acquisitions.",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children:
                              "Legal Requirements: To comply with applicable laws, regulations, and legal processes.",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item-headline",
                  children: [
                    (0, De.jsx)("h4", {
                      children: "4. Security of Information",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        "We retain personal information as long as necessary to fulfill the purposes outlined in this Policy and comply with legal obligations. We implement industry-standard security measures to protect your information, but cannot guarantee absolute security due to the inherent risks of internet transmissions. Users are responsible for maintaining the security of their account credentials.",
                    }),
                  ],
                }),
                (0, De.jsx)("div", {
                  className: "item-headline",
                  children: (0, De.jsx)("h4", {
                    children: "5. User Choices and Rights",
                  }),
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "5.1 Access and Control" }),
                    (0, De.jsx)("p", {
                      children:
                        "You can access and manage your personal information through your account or by contacting us. You may:",
                    }),
                    (0, De.jsxs)("ul", {
                      children: [
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Review and update your information",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Correct inaccuracies",
                          }),
                        }),
                        (0, De.jsx)("li", {
                          children: (0, De.jsx)("p", {
                            children: "Request deletion of your information",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item",
                  children: [
                    (0, De.jsx)("h5", { children: "5.2 Cookies and Tracking" }),
                    (0, De.jsx)("p", {
                      children:
                        "You can control the use of cookies through your browser settings. For more information, see our Cookies Policy.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item-headline",
                  children: [
                    (0, De.jsx)("h4", {
                      children: "6. Children\u2019s Privacy",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        "Our Services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received such information, we will delete it promptly.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item-headline",
                  children: [
                    (0, De.jsx)("h4", { children: "7. Contact Information" }),
                    (0, De.jsxs)("p", {
                      children: [
                        "If you have any questions or comments about this Policy, please contact us at: ",
                        (0, De.jsx)("a", {
                          href: "mailto:support@apescreener.xyz",
                          children: "support@apescreener.xyz",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item-headline",
                  children: [
                    (0, De.jsx)("h4", {
                      children: "8. Changes to This Privacy Policy",
                    }),
                    (0, De.jsx)("p", {
                      children:
                        "We may update this Privacy Policy from time to time. We encourage you to review this page periodically for the latest information on our privacy practices. Any changes will be effective upon posting on our Site, and your continued use of our Services indicates your acceptance of these changes.",
                    }),
                  ],
                }),
                (0, De.jsxs)("div", {
                  className: "item-headline",
                  children: [
                    (0, De.jsx)("h4", { children: "9. Disclaimer" }),
                    (0, De.jsx)("p", {
                      children:
                        "The advice provided by our AI is based on the analysis of your portfolio and trading history. However, it should not be considered financial advice. Users should conduct their own research and consult with a financial advisor before making investment decisions.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    qt = () =>
      (0, De.jsx)("footer", {
        children: (0, De.jsxs)("div", {
          className: "content-wrap",
          children: [
            (0, De.jsx)("div", {
              className: "copyright-wrap",
              children: (0, De.jsx)("p", {
                children: "Copyright \xa9 2024 Degen AI",
              }),
            }),
          ],
        }),
      }),
    Yt = () => {
      let e = J();
      const { pathname: t } = e,
        [n, r] = (0, a.useState)(0),
        [l, i] = (0, a.useState)(!1),
        o = document.querySelector("body");
      (0, a.useEffect)(() => {
        "scrollRestoration" in window.history &&
          (window.history.scrollRestoration = "manual"),
          window.scrollTo({ top: 0, behavior: "smooth" });
      }, [t]),
        (0, a.useEffect)(() => {
          l
            ? o.classList.add("overflow-hidden")
            : o.classList.remove("overflow-hidden");
        }, [l, o]);
      const s = () => {
          const e = window.scrollY;
          r(Math.round(e));
          const t = document.querySelectorAll(".animation");
          t.length &&
            Array.from(t).forEach((e) => {
              const { bottom: t = 0, height: n = 0 } =
                e.getBoundingClientRect();
              t - n / 2 - window.innerHeight < 0
                ? e.classList.add("animation-active")
                : e.classList.remove("animation-active");
            });
        },
        c = () => {
          document
            .querySelector("body")
            .style.setProperty("--app-height", window.innerHeight + "px");
        };
      return (
        window.addEventListener("resize", () => {
          window.innerWidth < 1200 && c();
        }),
        (0, a.useEffect)(
          () => (
            window.addEventListener("scroll", s, { passive: !0 }),
            () => window.removeEventListener("scroll", s)
          ),
          []
        ),
        c(),
        (0, De.jsxs)(De.Fragment, {
          children: [
            (0, De.jsx)(Be, {
              pageScrollPosition: n,
              isHeaderActive: l,
              setIsHeaderActive: i,
            }),
            (0, De.jsxs)(xe, {
              children: [
                (0, De.jsx)(ge, { path: "*", element: (0, De.jsx)(Wt, {}) }),
                (0, De.jsx)(ge, {
                  path: "/terms",
                  element: (0, De.jsx)(Ht, {}),
                }),
                (0, De.jsx)(ge, {
                  path: "/privacy",
                  element: (0, De.jsx)(Vt, {}),
                }),
              ],
            }),
            (0, De.jsx)(qt, {}),
          ],
        })
      );
    };
  i.createRoot(document.getElementById("root")).render(
    (0, De.jsx)(Ce, { children: (0, De.jsx)(Yt, {}) })
  );
})();
//# sourceMappingURL=main.c53dcaad.js.map
