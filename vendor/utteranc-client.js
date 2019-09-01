// Source code from https://utteranc.es/client.js
// Modified by Hyeseong Kim <cometkim.kr@gmail.com>

parcelRequire = function(e) {
  var r = "function" == typeof parcelRequire && parcelRequire,
  n = "function" == typeof require && require,
  i = {};

  function u(e, u) {
    if (e in i) return i[e];
    var t = "function" == typeof parcelRequire && parcelRequire;
    if (!u && t) return t(e, !0);
    if (r) return r(e, !0);
    if (n && "string" == typeof e) return n(e);
    var o = new Error("Cannot find module '" + e + "'");
    throw o.code = "MODULE_NOT_FOUND", o
  }
  return u.register = function(e, r) {
    i[e] = r
  }, i = e(u), u.modules = i, u
}(function(require) {
  var c = {};

  function i(e) {
    for (var r, o = /\+/g, n = /([^&=]+)=?([^&]*)/g, p = function(e) {
      return decodeURIComponent(e.replace(o, " "))
    }, a = {}; r = n.exec(e);) a[p(r[1])] = p(r[2]);
    return a
  }

  function g(e) {
    var r = [];
    for (var o in e) e.hasOwnProperty(o) && e[o] && r.push(encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
    return r.join("&")
  }
  c.deparam = i, c.param = g;
  var d = i(location.search.substr(1)),
  h = d.utterances;
  if (h) {
    delete d.utterances;
    var f = g(d);
    f.length && (f = "?" + f), history.replaceState(void 0, document.title, location.pathname + f + location.hash)
  }
  var b = document.currentScript;
  // void 0 === b && (b = document.querySelector("script[src^=\"https://utteranc.es/client.js\"],script[src^=\"http://localhost:4000/client.js\"]"));
  void 0 === b && (b = document.getElementById("utteranc-client"));
  for (var a = {}, e = 0; e < b.attributes.length; e++) {
    var j = b.attributes.item(e);
    a[j.name.replace(/^data-/, "")] = j.value
  }
  var k = document.querySelector("link[rel='canonical']");
  a.url = k ? k.href : location.origin + location.pathname + location.search, a.origin = location.origin, a.pathname = location.pathname.length < 2 ? "index" : location.pathname.substr(1).replace(/\.\w+$/, ""), a.title = document.title;
  var l = document.querySelector("meta[name='description']");
  a.description = l ? l.content : "";
  var m = document.querySelector("meta[property='og:title'],meta[name='og:title']");
  a["og:title"] = m ? m.content : "", a.token = h
  ;// Prevent <style/> tag duplication
  //, document.head.insertAdjacentHTML("afterbegin", "<style>\n    .utterances {\n      position: relative;\n      box-sizing: border-box;\n      width: 100%;\n      max-width: 760px;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .utterances-frame {\n      position: absolute;\n      left: 0;\n      right: 0;\n      width: 1px;\n      min-width: 100%;\n      max-width: 100%;\n      height: 100%;\n      border: 0;\n    }\n  </style>");
  // var n = b.src.match(/^https:\/\/utteranc\.es|http:\/\/localhost:\d+/)[0],
  var n = 'https://utteranc.es',
  o = n + "/utterances.html";
  b.insertAdjacentHTML("afterend", "<div class=\"utterances\">\n    <iframe class=\"utterances-frame\" title=\"Comments\" scrolling=\"no\" src=\"" + o + "?" + g(a) + "\"></iframe>\n  </div>");
  var p = b.nextElementSibling;
  b.parentElement.removeChild(b), addEventListener("message", function(t) {
    if (t.origin === n) {
      var a = t.data;
      a && "resize" === a.type && a.height && (p.style.height = a.height + "px")
    }
  });
  c.__esModule = true;
  return {
    "D53L": {},
    "ieWq": c
  };
});
