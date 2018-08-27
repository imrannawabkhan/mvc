<?php
	$lng = $_GET['lng'];

	switch($lng){
		case "urdu":
			$MasafiHRLng = parse_ini_file("language_Urdu.ini",true);
			$includefile = file_get_contents("secondscreen.html");		
			$js =  NULL;
			$pic = "_ur";	
		break;
		case "hindi":
			$MasafiHRLng = parse_ini_file("language_Hindi.ini",true);
			$includefile = file_get_contents("secondscreen.html");	
			$js =  NULL;
			$pic = "_hi";		
		break;
		default:
			$MasafiHRLng = parse_ini_file("language_English.ini",true);
			$includefile = file_get_contents("mainscreen.html");
			$js = "<script type=\"text/javascript\" src=\"js/typeit.js\"></script>\n
			<script type=\"text/javascript\" src=\"js/typing.js\"></script>";	
			$pic = NULL;		
		break;
	}
	
			$Quotes				 = $MasafiHRLng["Quotes"]["Quote"];
			$ABCD 			       = $MasafiHRLng["Alphabets"]["ABCD"];							  
			$Dir					= $MasafiHRLng["Direction"]["Dir"];
			$Title				  = $MasafiHRLng["Main"]["Title"];	
			$SelectTitle			= $MasafiHRLng["SelectOption"]["Select"];
			$Multi				  = $MasafiHRLng["SelectOption"]["‏Multi"];
			
			$StartBtn			   = $MasafiHRLng["Buttons"]["StartBtn"];
			$Enter	  			  = $MasafiHRLng["Buttons"]["Enter"];
			$Press				  = $MasafiHRLng["Buttons"]["Press"];
			$Continue			   = $MasafiHRLng["Buttons"]["Continue"];
			$OK					 = $MasafiHRLng["Buttons"]["OK"];
			
			$Intro				  = $MasafiHRLng["Main"]["Intro"];
			$IntroDesc			  = $MasafiHRLng["Main"]["IntroDesc"];
			$Instruction	        = $MasafiHRLng["Main"]["Instruction"];
			$GenericInfo  		    = $MasafiHRLng["Main"]["GenericInfo"];
			$location			   = $MasafiHRLng["Main"]["location"];
			$Cities		 	     = $MasafiHRLng["Cities"]["City"];
			$CitiesVal 	      	  = $MasafiHRLng["Cities"]["CityValue"];
			$CitiesJsOut			= implode("\\",$CitiesVal);
			$Departments 	        = $MasafiHRLng["Departments"]["Dept"];
			$DeptValue	          = $MasafiHRLng["Departments"]["DeptVale"];
			$DeptJsOut			  = implode("\\",$DeptValue);
			$Date 				   = $MasafiHRLng["Main"]["Date"];
			$Department 			 = $MasafiHRLng["Main"]["Department"];
			$Halfway				= $MasafiHRLng["Main"]["Halfway"];
			$IamAllDone		     = $MasafiHRLng["Main"]["IamAllDone"];
			$Completed			  = $MasafiHRLng["Main"]["Complete"];
			$ThankYou			   = $MasafiHRLng["Main"]["ThankYou"];
			$Review		  		 = $MasafiHRLng["Main"]["Review"];
			$ReviewAns	  		  = $MasafiHRLng["Main"]["ReviewAns"];
			$Error		  		  = $MasafiHRLng["Main"]["Error"];
			$ErrorAll			   = $MasafiHRLng["Main"]["ErrorAll"];
			$ErrorFill	  		  = $MasafiHRLng["Main"]["ErrorFill"];
			$ErrorNoFound  		   = $MasafiHRLng["Main"]["ErrorNoFound"];
			
			$Answers 			    = $MasafiHRLng["Options"]["Option"];
			$Q0					 = $MasafiHRLng["Experience"]["Question"];
			$OptQ0 				  = $MasafiHRLng["Experience"]["Answer"];
			$OptQValue0			 = $MasafiHRLng["Experience"]["AnswerValue"];
			$Q1_Title 			   = $MasafiHRLng["Questions1"]["Title"];
			$OptQ1 				  = $MasafiHRLng["Questions1"]["Question"];
			$Q2_Title 			   = $MasafiHRLng["Questions2"]["Title"];
			$OptQ2 				  = $MasafiHRLng["Questions2"]["Question"];	
			$Q3_Title 			   = $MasafiHRLng["Questions3"]["Title"];
			$OptQ3 				  = $MasafiHRLng["Questions3"]["Question"];			
			$Q4_Title 			   = $MasafiHRLng["Questions4"]["Title"];
			$OptQ4 				  = $MasafiHRLng["Questions4"]["Question"];
			$Q5_Title 			   = $MasafiHRLng["Questions5"]["Title"];
			$OptQ5 				  = $MasafiHRLng["Questions5"]["Question"];	
			$Q6_Title 			   = $MasafiHRLng["Questions6"]["Title"];
			$OptQ6 				  = $MasafiHRLng["Questions6"]["Question"];
			$Q7_Title 			   = $MasafiHRLng["Questions6"]["Title"];
			$OptQ7 				  = $MasafiHRLng["Questions6"]["Question"];
			
			$Options	  	     	= $MasafiHRLng["Options"]["Option"];
			$StronglyAgree		  = $Options[0];
			$Agree		  		  = $Options[1];
			$Neutral				= $Options[2];
			$Disagree			   = $Options[3];
			$StronglyDisagree	   = $Options[4];	
					
			$Css 				    = $MasafiHRLng["CssStyle"]["Css"];
			
			$include = str_replace(array("{Dir}","{Title}","{StartBtn}","{Enter}","{Press}"),array($Dir, $Title, $StartBtn, $Enter, $Press),$includefile);
		

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="https://www.facebook.com/2008/fbml" <?=$Dir;?>>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <script src="js/jquery.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="js/jquery.min.js">\x3C/script>');
    </script>
    <script type="text/javascript">
        (window.NREUM || (NREUM = {})).loader_config = {
            xpid: "Vg8GWVBXGwoCVlJUAgc="
        };
        window.NREUM || (NREUM = {}), __nr_require = function(t, e, n) {
            function r(n) {
                if (!e[n]) {
                    var o = e[n] = {
                        exports: {}
                    };
                    t[n][0].call(o.exports, function(e) {
                        var o = t[n][1][e];
                        return r(o || e)
                    }, o, o.exports)
                }
                return e[n].exports
            }
            if ("function" == typeof __nr_require) return __nr_require;
            for (var o = 0; o < n.length; o++) r(n[o]);
            return r
        }({
            1: [function(t, e, n) {
                function r(t) {
                    try {
                        c.console && console.log(t)
                    } catch (e) {}
                }
                var o, i = t("ee"),
                    a = t(20),
                    c = {};
                try {
                    o = localStorage.getItem("__nr_flags").split(","), console && "function" == typeof console.log && (c.console = !0, o.indexOf("dev") !== -1 && (c.dev = !0), o.indexOf("nr_dev") !== -1 && (c.nrDev = !0))
                } catch (s) {}
                c.nrDev && i.on("internal-error", function(t) {
                    r(t.stack)
                }), c.dev && i.on("fn-err", function(t, e, n) {
                    r(n.stack)
                }), c.dev && (r("NR AGENT IN DEVELOPMENT MODE"), r("flags: " + a(c, function(t, e) {
                    return t
                }).join(", ")))
            }, {}],
            2: [function(t, e, n) {
                function r(t, e, n, r, c) {
                    try {
                        h ? h -= 1 : o(c || new UncaughtException(t, e, n), !0)
                    } catch (f) {
                        try {
                            i("ierr", [f, s.now(), !0])
                        } catch (d) {}
                    }
                    return "function" == typeof u && u.apply(this, a(arguments))
                }

                function UncaughtException(t, e, n) {
                    this.message = t || "Uncaught error with no additional information", this.sourceURL = e, this.line = n
                }

                function o(t, e) {
                    var n = e ? null : s.now();
                    i("err", [t, n])
                }
                var i = t("handle"),
                    a = t(21),
                    c = t("ee"),
                    s = t("loader"),
                    f = t("gos"),
                    u = window.onerror,
                    d = !1,
                    p = "nr@seenError",
                    h = 0;
                s.features.err = !0, t(1), window.onerror = r;
                try {
                    throw new Error
                } catch (l) {
                    "stack" in l && (t(13), t(12), "addEventListener" in window && t(6), s.xhrWrappable && t(14), d = !0)
                }
                c.on("fn-start", function(t, e, n) {
                    d && (h += 1)
                }), c.on("fn-err", function(t, e, n) {
                    d && !n[p] && (f(n, p, function() {
                        return !0
                    }), this.thrown = !0, o(n))
                }), c.on("fn-end", function() {
                    d && !this.thrown && h > 0 && (h -= 1)
                }), c.on("internal-error", function(t) {
                    i("ierr", [t, s.now(), !0])
                })
            }, {}],
            3: [function(t, e, n) {
                t("loader").features.ins = !0
            }, {}],
            4: [function(t, e, n) {
                function r() {
                    M++, S = y.hash, this[u] = b.now()
                }

                function o() {
                    M--, y.hash !== S && i(0, !0);
                    var t = b.now();
                    this[l] = ~~this[l] + t - this[u], this[d] = t
                }

                function i(t, e) {
                    E.emit("newURL", ["" + y, e])
                }

                function a(t, e) {
                    t.on(e, function() {
                        this[e] = b.now()
                    })
                }
                var c = "-start",
                    s = "-end",
                    f = "-body",
                    u = "fn" + c,
                    d = "fn" + s,
                    p = "cb" + c,
                    h = "cb" + s,
                    l = "jsTime",
                    m = "fetch",
                    v = "addEventListener",
                    w = window,
                    y = w.location,
                    b = t("loader");
                if (w[v] && b.xhrWrappable) {
                    var g = t(10),
                        x = t(11),
                        E = t(8),
                        P = t(6),
                        O = t(13),
                        R = t(7),
                        T = t(14),
                        L = t(9),
                        j = t("ee"),
                        N = j.get("tracer");
                    t(15), b.features.spa = !0;
                    var S, M = 0;
                    j.on(u, r), j.on(p, r), j.on(d, o), j.on(h, o), j.buffer([u, d, "xhr-done", "xhr-resolved"]), P.buffer([u]), O.buffer(["setTimeout" + s, "clearTimeout" + c, u]), T.buffer([u, "new-xhr", "send-xhr" + c]), R.buffer([m + c, m + "-done", m + f + c, m + f + s]), E.buffer(["newURL"]), g.buffer([u]), x.buffer(["propagate", p, h, "executor-err", "resolve" + c]), N.buffer([u, "no-" + u]), L.buffer(["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"]), a(T, "send-xhr" + c), a(j, "xhr-resolved"), a(j, "xhr-done"), a(R, m + c), a(R, m + "-done"), a(L, "new-jsonp"), a(L, "jsonp-end"), a(L, "cb-start"), E.on("pushState-end", i), E.on("replaceState-end", i), w[v]("hashchange", i, !0), w[v]("load", i, !0), w[v]("popstate", function() {
                        i(0, M > 1)
                    }, !0)
                }
            }, {}],
            5: [function(t, e, n) {
                function r(t) {}
                if (window.performance && window.performance.timing && window.performance.getEntriesByType) {
                    var o = t("ee"),
                        i = t("handle"),
                        a = t(13),
                        c = t(12),
                        s = "learResourceTimings",
                        f = "addEventListener",
                        u = "resourcetimingbufferfull",
                        d = "bstResource",
                        p = "resource",
                        h = "-start",
                        l = "-end",
                        m = "fn" + h,
                        v = "fn" + l,
                        w = "bstTimer",
                        y = "pushState",
                        b = t("loader");
                    b.features.stn = !0, t(8);
                    var g = NREUM.o.EV;
                    o.on(m, function(t, e) {
                        var n = t[0];
                        n instanceof g && (this.bstStart = b.now())
                    }), o.on(v, function(t, e) {
                        var n = t[0];
                        n instanceof g && i("bst", [n, e, this.bstStart, b.now()])
                    }), a.on(m, function(t, e, n) {
                        this.bstStart = b.now(), this.bstType = n
                    }), a.on(v, function(t, e) {
                        i(w, [e, this.bstStart, b.now(), this.bstType])
                    }), c.on(m, function() {
                        this.bstStart = b.now()
                    }), c.on(v, function(t, e) {
                        i(w, [e, this.bstStart, b.now(), "requestAnimationFrame"])
                    }), o.on(y + h, function(t) {
                        this.time = b.now(), this.startPath = location.pathname + location.hash
                    }), o.on(y + l, function(t) {
                        i("bstHist", [location.pathname + location.hash, this.startPath, this.time])
                    }), f in window.performance && (window.performance["c" + s] ? window.performance[f](u, function(t) {
                        i(d, [window.performance.getEntriesByType(p)]), window.performance["c" + s]()
                    }, !1) : window.performance[f]("webkit" + u, function(t) {
                        i(d, [window.performance.getEntriesByType(p)]), window.performance["webkitC" + s]()
                    }, !1)), document[f]("scroll", r, {
                        passive: !0
                    }), document[f]("keypress", r, !1), document[f]("click", r, !1)
                }
            }, {}],
            6: [function(t, e, n) {
                function r(t) {
                    for (var e = t; e && !e.hasOwnProperty(u);) e = Object.getPrototypeOf(e);
                    e && o(e)
                }

                function o(t) {
                    c.inPlace(t, [u, d], "-", i)
                }

                function i(t, e) {
                    return t[1]
                }
                var a = t("ee").get("events"),
                    c = t(23)(a, !0),
                    s = t("gos"),
                    f = XMLHttpRequest,
                    u = "addEventListener",
                    d = "removeEventListener";
                e.exports = a, "getPrototypeOf" in Object ? (r(document), r(window), r(f.prototype)) : f.prototype.hasOwnProperty(u) && (o(window), o(f.prototype)), a.on(u + "-start", function(t, e) {
                    var n = t[1],
                        r = s(n, "nr@wrapped", function() {
                            function t() {
                                if ("function" == typeof n.handleEvent) return n.handleEvent.apply(n, arguments)
                            }
                            var e = {
                                object: t,
                                "function": n
                            }[typeof n];
                            return e ? c(e, "fn-", null, e.name || "anonymous") : n
                        });
                    this.wrapped = t[1] = r
                }), a.on(d + "-start", function(t) {
                    t[1] = this.wrapped || t[1]
                })
            }, {}],
            7: [function(t, e, n) {
                function r(t, e, n) {
                    var r = t[e];
                    "function" == typeof r && (t[e] = function() {
                        var t = r.apply(this, arguments);
                        return o.emit(n + "start", arguments, t), t.then(function(e) {
                            return o.emit(n + "end", [null, e], t), e
                        }, function(e) {
                            throw o.emit(n + "end", [e], t), e
                        })
                    })
                }
                var o = t("ee").get("fetch"),
                    i = t(20);
                e.exports = o;
                var a = window,
                    c = "fetch-",
                    s = c + "body-",
                    f = ["arrayBuffer", "blob", "json", "text", "formData"],
                    u = a.Request,
                    d = a.Response,
                    p = a.fetch,
                    h = "prototype";
                u && d && p && (i(f, function(t, e) {
                    r(u[h], e, s), r(d[h], e, s)
                }), r(a, "fetch", c), o.on(c + "end", function(t, e) {
                    var n = this;
                    e ? e.clone().arrayBuffer().then(function(t) {
                        n.rxSize = t.byteLength, o.emit(c + "done", [null, e], n)
                    }) : o.emit(c + "done", [t], n)
                }))
            }, {}],
            8: [function(t, e, n) {
                var r = t("ee").get("history"),
                    o = t(23)(r);
                e.exports = r, o.inPlace(window.history, ["pushState", "replaceState"], "-")
            }, {}],
            9: [function(t, e, n) {
                function r(t) {
                    function e() {
                        s.emit("jsonp-end", [], p), t.removeEventListener("load", e, !1), t.removeEventListener("error", n, !1)
                    }

                    function n() {
                        s.emit("jsonp-error", [], p), s.emit("jsonp-end", [], p), t.removeEventListener("load", e, !1), t.removeEventListener("error", n, !1)
                    }
                    var r = t && "string" == typeof t.nodeName && "script" === t.nodeName.toLowerCase();
                    if (r) {
                        var o = "function" == typeof t.addEventListener;
                        if (o) {
                            var a = i(t.src);
                            if (a) {
                                var u = c(a),
                                    d = "function" == typeof u.parent[u.key];
                                if (d) {
                                    var p = {};
                                    f.inPlace(u.parent, [u.key], "cb-", p), t.addEventListener("load", e, !1), t.addEventListener("error", n, !1), s.emit("new-jsonp", [t.src], p)
                                }
                            }
                        }
                    }
                }

                function o() {
                    return "addEventListener" in window
                }

                function i(t) {
                    var e = t.match(u);
                    return e ? e[1] : null
                }

                function a(t, e) {
                    var n = t.match(p),
                        r = n[1],
                        o = n[3];
                    return o ? a(o, e[r]) : e[r]
                }

                function c(t) {
                    var e = t.match(d);
                    return e && e.length >= 3 ? {
                        key: e[2],
                        parent: a(e[1], window)
                    } : {
                        key: t,
                        parent: window
                    }
                }
                var s = t("ee").get("jsonp"),
                    f = t(23)(s);
                if (e.exports = s, o()) {
                    var u = /[?&](?:callback|cb)=([^&#]+)/,
                        d = /(.*)\.([^.]+)/,
                        p = /^(\w+)(\.|$)(.*)$/,
                        h = ["appendChild", "insertBefore", "replaceChild"];
                    f.inPlace(HTMLElement.prototype, h, "dom-"), f.inPlace(HTMLHeadElement.prototype, h, "dom-"), f.inPlace(HTMLBodyElement.prototype, h, "dom-"), s.on("dom-start", function(t) {
                        r(t[0])
                    })
                }
            }, {}],
            10: [function(t, e, n) {
                var r = t("ee").get("mutation"),
                    o = t(23)(r),
                    i = NREUM.o.MO;
                e.exports = r, i && (window.MutationObserver = function(t) {
                    return this instanceof i ? new i(o(t, "fn-")) : i.apply(this, arguments)
                }, MutationObserver.prototype = i.prototype)
            }, {}],
            11: [function(t, e, n) {
                function r(t) {
                    var e = a.context(),
                        n = c(t, "executor-", e),
                        r = new f(n);
                    return a.context(r).getCtx = function() {
                        return e
                    }, a.emit("new-promise", [r, e], e), r
                }

                function o(t, e) {
                    return e
                }
                var i = t(23),
                    a = t("ee").get("promise"),
                    c = i(a),
                    s = t(20),
                    f = NREUM.o.PR;
                e.exports = a, f && (window.Promise = r, ["all", "race"].forEach(function(t) {
                    var e = f[t];
                    f[t] = function(n) {
                        function r(t) {
                            return function() {
                                a.emit("propagate", [null, !o], i), o = o || !t
                            }
                        }
                        var o = !1;
                        s(n, function(e, n) {
                            Promise.resolve(n).then(r("all" === t), r(!1))
                        });
                        var i = e.apply(f, arguments),
                            c = f.resolve(i);
                        return c
                    }
                }), ["resolve", "reject"].forEach(function(t) {
                    var e = f[t];
                    f[t] = function(t) {
                        var n = e.apply(f, arguments);
                        return t !== n && a.emit("propagate", [t, !0], n), n
                    }
                }), f.prototype["catch"] = function(t) {
                    return this.then(null, t)
                }, f.prototype = Object.create(f.prototype, {
                    constructor: {
                        value: r
                    }
                }), s(Object.getOwnPropertyNames(f), function(t, e) {
                    try {
                        r[e] = f[e]
                    } catch (n) {}
                }), a.on("executor-start", function(t) {
                    t[0] = c(t[0], "resolve-", this), t[1] = c(t[1], "resolve-", this)
                }), a.on("executor-err", function(t, e, n) {
                    t[1](n)
                }), c.inPlace(f.prototype, ["then"], "then-", o), a.on("then-start", function(t, e) {
                    this.promise = e, t[0] = c(t[0], "cb-", this), t[1] = c(t[1], "cb-", this)
                }), a.on("then-end", function(t, e, n) {
                    this.nextPromise = n;
                    var r = this.promise;
                    a.emit("propagate", [r, !0], n)
                }), a.on("cb-end", function(t, e, n) {
                    a.emit("propagate", [n, !0], this.nextPromise)
                }), a.on("propagate", function(t, e, n) {
                    this.getCtx && !e || (this.getCtx = function() {
                        if (t instanceof Promise) var e = a.context(t);
                        return e && e.getCtx ? e.getCtx() : this
                    })
                }), r.toString = function() {
                    return "" + f
                })
            }, {}],
            12: [function(t, e, n) {
                var r = t("ee").get("raf"),
                    o = t(23)(r),
                    i = "equestAnimationFrame";
                e.exports = r, o.inPlace(window, ["r" + i, "mozR" + i, "webkitR" + i, "msR" + i], "raf-"), r.on("raf-start", function(t) {
                    t[0] = o(t[0], "fn-")
                })
            }, {}],
            13: [function(t, e, n) {
                function r(t, e, n) {
                    t[0] = a(t[0], "fn-", null, n)
                }

                function o(t, e, n) {
                    this.method = n, this.timerDuration = isNaN(t[1]) ? 0 : +t[1], t[0] = a(t[0], "fn-", this, n)
                }
                var i = t("ee").get("timer"),
                    a = t(23)(i),
                    c = "setTimeout",
                    s = "setInterval",
                    f = "clearTimeout",
                    u = "-start",
                    d = "-";
                e.exports = i, a.inPlace(window, [c, "setImmediate"], c + d), a.inPlace(window, [s], s + d), a.inPlace(window, [f, "clearImmediate"], f + d), i.on(s + u, r), i.on(c + u, o)
            }, {}],
            14: [function(t, e, n) {
                function r(t, e) {
                    d.inPlace(e, ["onreadystatechange"], "fn-", c)
                }

                function o() {
                    var t = this,
                        e = u.context(t);
                    t.readyState > 3 && !e.resolved && (e.resolved = !0, u.emit("xhr-resolved", [], t)), d.inPlace(t, y, "fn-", c)
                }

                function i(t) {
                    b.push(t), l && (x ? x.then(a) : v ? v(a) : (E = -E, P.data = E))
                }

                function a() {
                    for (var t = 0; t < b.length; t++) r([], b[t]);
                    b.length && (b = [])
                }

                function c(t, e) {
                    return e
                }

                function s(t, e) {
                    for (var n in t) e[n] = t[n];
                    return e
                }
                t(6);
                var f = t("ee"),
                    u = f.get("xhr"),
                    d = t(23)(u),
                    p = NREUM.o,
                    h = p.XHR,
                    l = p.MO,
                    m = p.PR,
                    v = p.SI,
                    w = "readystatechange",
                    y = ["onload", "onerror", "onabort", "onloadstart", "onloadend", "onprogress", "ontimeout"],
                    b = [];
                e.exports = u;
                var g = window.XMLHttpRequest = function(t) {
                    var e = new h(t);
                    try {
                        u.emit("new-xhr", [e], e), e.addEventListener(w, o, !1)
                    } catch (n) {
                        try {
                            u.emit("internal-error", [n])
                        } catch (r) {}
                    }
                    return e
                };
                if (s(h, g), g.prototype = h.prototype, d.inPlace(g.prototype, ["open", "send"], "-xhr-", c), u.on("send-xhr-start", function(t, e) {
                        r(t, e), i(e)
                    }), u.on("open-xhr-start", r), l) {
                    var x = m && m.resolve();
                    if (!v && !m) {
                        var E = 1,
                            P = document.createTextNode(E);
                        new l(a).observe(P, {
                            characterData: !0
                        })
                    }
                } else f.on("fn-end", function(t) {
                    t[0] && t[0].type === w || a()
                })
            }, {}],
            15: [function(t, e, n) {
                function r(t) {
                    var e = this.params,
                        n = this.metrics;
                    if (!this.ended) {
                        this.ended = !0;
                        for (var r = 0; r < d; r++) t.removeEventListener(u[r], this.listener, !1);
                        if (!e.aborted) {
                            if (n.duration = a.now() - this.startTime, 4 === t.readyState) {
                                e.status = t.status;
                                var i = o(t, this.lastSize);
                                if (i && (n.rxSize = i), this.sameOrigin) {
                                    var s = t.getResponseHeader("X-NewRelic-App-Data");
                                    s && (e.cat = s.split(", ").pop())
                                }
                            } else e.status = 0;
                            n.cbTime = this.cbTime, f.emit("xhr-done", [t], t), c("xhr", [e, n, this.startTime])
                        }
                    }
                }

                function o(t, e) {
                    var n = t.responseType;
                    if ("json" === n && null !== e) return e;
                    var r = "arraybuffer" === n || "blob" === n || "json" === n ? t.response : t.responseText;
                    return l(r)
                }

                function i(t, e) {
                    var n = s(e),
                        r = t.params;
                    r.host = n.hostname + ":" + n.port, r.pathname = n.pathname, t.sameOrigin = n.sameOrigin
                }
                var a = t("loader");
                if (a.xhrWrappable) {
                    var c = t("handle"),
                        s = t(16),
                        f = t("ee"),
                        u = ["load", "error", "abort", "timeout"],
                        d = u.length,
                        p = t("id"),
                        h = t(19),
                        l = t(18),
                        m = window.XMLHttpRequest;
                    a.features.xhr = !0, t(14), f.on("new-xhr", function(t) {
                        var e = this;
                        e.totalCbs = 0, e.called = 0, e.cbTime = 0, e.end = r, e.ended = !1, e.xhrGuids = {}, e.lastSize = null, h && (h > 34 || h < 10) || window.opera || t.addEventListener("progress", function(t) {
                            e.lastSize = t.loaded
                        }, !1)
                    }), f.on("open-xhr-start", function(t) {
                        this.params = {
                            method: t[0]
                        }, i(this, t[1]), this.metrics = {}
                    }), f.on("open-xhr-end", function(t, e) {
                        "loader_config" in NREUM && "xpid" in NREUM.loader_config && this.sameOrigin && e.setRequestHeader("X-NewRelic-ID", NREUM.loader_config.xpid)
                    }), f.on("send-xhr-start", function(t, e) {
                        var n = this.metrics,
                            r = t[0],
                            o = this;
                        if (n && r) {
                            var i = l(r);
                            i && (n.txSize = i)
                        }
                        this.startTime = a.now(), this.listener = function(t) {
                            try {
                                "abort" === t.type && (o.params.aborted = !0), ("load" !== t.type || o.called === o.totalCbs && (o.onloadCalled || "function" != typeof e.onload)) && o.end(e)
                            } catch (n) {
                                try {
                                    f.emit("internal-error", [n])
                                } catch (r) {}
                            }
                        };
                        for (var c = 0; c < d; c++) e.addEventListener(u[c], this.listener, !1)
                    }), f.on("xhr-cb-time", function(t, e, n) {
                        this.cbTime += t, e ? this.onloadCalled = !0 : this.called += 1, this.called !== this.totalCbs || !this.onloadCalled && "function" == typeof n.onload || this.end(n)
                    }), f.on("xhr-load-added", function(t, e) {
                        var n = "" + p(t) + !!e;
                        this.xhrGuids && !this.xhrGuids[n] && (this.xhrGuids[n] = !0, this.totalCbs += 1)
                    }), f.on("xhr-load-removed", function(t, e) {
                        var n = "" + p(t) + !!e;
                        this.xhrGuids && this.xhrGuids[n] && (delete this.xhrGuids[n], this.totalCbs -= 1)
                    }), f.on("addEventListener-end", function(t, e) {
                        e instanceof m && "load" === t[0] && f.emit("xhr-load-added", [t[1], t[2]], e)
                    }), f.on("removeEventListener-end", function(t, e) {
                        e instanceof m && "load" === t[0] && f.emit("xhr-load-removed", [t[1], t[2]], e)
                    }), f.on("fn-start", function(t, e, n) {
                        e instanceof m && ("onload" === n && (this.onload = !0), ("load" === (t[0] && t[0].type) || this.onload) && (this.xhrCbStart = a.now()))
                    }), f.on("fn-end", function(t, e) {
                        this.xhrCbStart && f.emit("xhr-cb-time", [a.now() - this.xhrCbStart, this.onload, e], e)
                    })
                }
            }, {}],
            16: [function(t, e, n) {
                e.exports = function(t) {
                    var e = document.createElement("a"),
                        n = window.location,
                        r = {};
                    e.href = t, r.port = e.port;
                    var o = e.href.split("://");
                    !r.port && o[1] && (r.port = o[1].split("/")[0].split("@").pop().split(":")[1]), r.port && "0" !== r.port || (r.port = "https" === o[0] ? "443" : "80"), r.hostname = e.hostname || n.hostname, r.pathname = e.pathname, r.protocol = o[0], "/" !== r.pathname.charAt(0) && (r.pathname = "/" + r.pathname);
                    var i = !e.protocol || ":" === e.protocol || e.protocol === n.protocol,
                        a = e.hostname === document.domain && e.port === n.port;
                    return r.sameOrigin = i && (!e.hostname || a), r
                }
            }, {}],
            17: [function(t, e, n) {
                function r() {}

                function o(t, e, n) {
                    return function() {
                        return i(t, [f.now()].concat(c(arguments)), e ? null : this, n), e ? void 0 : this
                    }
                }
                var i = t("handle"),
                    a = t(20),
                    c = t(21),
                    s = t("ee").get("tracer"),
                    f = t("loader"),
                    u = NREUM;
                "undefined" == typeof window.newrelic && (newrelic = u);
                var d = ["setPageViewName", "setCustomAttribute", "setErrorHandler", "finished", "addToTrace", "inlineHit", "addRelease"],
                    p = "api-",
                    h = p + "ixn-";
                a(d, function(t, e) {
                    u[e] = o(p + e, !0, "api")
                }), u.addPageAction = o(p + "addPageAction", !0), u.setCurrentRouteName = o(p + "routeName", !0), e.exports = newrelic, u.interaction = function() {
                    return (new r).get()
                };
                var l = r.prototype = {
                    createTracer: function(t, e) {
                        var n = {},
                            r = this,
                            o = "function" == typeof e;
                        return i(h + "tracer", [f.now(), t, n], r),
                            function() {
                                if (s.emit((o ? "" : "no-") + "fn-start", [f.now(), r, o], n), o) try {
                                    return e.apply(this, arguments)
                                } catch (t) {
                                    throw s.emit("fn-err", [arguments, this, t], n), t
                                } finally {
                                    s.emit("fn-end", [f.now()], n)
                                }
                            }
                    }
                };
                a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","), function(t, e) {
                    l[e] = o(h + e)
                }), newrelic.noticeError = function(t) {
                    "string" == typeof t && (t = new Error(t)), i("err", [t, f.now()])
                }
            }, {}],
            18: [function(t, e, n) {
                e.exports = function(t) {
                    if ("string" == typeof t && t.length) return t.length;
                    if ("object" == typeof t) {
                        if ("undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer && t.byteLength) return t.byteLength;
                        if ("undefined" != typeof Blob && t instanceof Blob && t.size) return t.size;
                        if (!("undefined" != typeof FormData && t instanceof FormData)) try {
                            return JSON.stringify(t).length
                        } catch (e) {
                            return
                        }
                    }
                }
            }, {}],
            19: [function(t, e, n) {
                var r = 0,
                    o = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
                o && (r = +o[1]), e.exports = r
            }, {}],
            20: [function(t, e, n) {
                function r(t, e) {
                    var n = [],
                        r = "",
                        i = 0;
                    for (r in t) o.call(t, r) && (n[i] = e(r, t[r]), i += 1);
                    return n
                }
                var o = Object.prototype.hasOwnProperty;
                e.exports = r
            }, {}],
            21: [function(t, e, n) {
                function r(t, e, n) {
                    e || (e = 0), "undefined" == typeof n && (n = t ? t.length : 0);
                    for (var r = -1, o = n - e || 0, i = Array(o < 0 ? 0 : o); ++r < o;) i[r] = t[e + r];
                    return i
                }
                e.exports = r
            }, {}],
            22: [function(t, e, n) {
                e.exports = {
                    exists: "undefined" != typeof window.performance && window.performance.timing && "undefined" != typeof window.performance.timing.navigationStart
                }
            }, {}],
            23: [function(t, e, n) {
                function r(t) {
                    return !(t && t instanceof Function && t.apply && !t[a])
                }
                var o = t("ee"),
                    i = t(21),
                    a = "nr@original",
                    c = Object.prototype.hasOwnProperty,
                    s = !1;
                e.exports = function(t, e) {
                    function n(t, e, n, o) {
                        function nrWrapper() {
                            var r, a, c, s;
                            try {
                                a = this, r = i(arguments), c = "function" == typeof n ? n(r, a) : n || {}
                            } catch (f) {
                                p([f, "", [r, a, o], c])
                            }
                            u(e + "start", [r, a, o], c);
                            try {
                                return s = t.apply(a, r)
                            } catch (d) {
                                throw u(e + "err", [r, a, d], c), d
                            } finally {
                                u(e + "end", [r, a, s], c)
                            }
                        }
                        return r(t) ? t : (e || (e = ""), nrWrapper[a] = t, d(t, nrWrapper), nrWrapper)
                    }

                    function f(t, e, o, i) {
                        o || (o = "");
                        var a, c, s, f = "-" === o.charAt(0);
                        for (s = 0; s < e.length; s++) c = e[s], a = t[c], r(a) || (t[c] = n(a, f ? c + o : o, i, c))
                    }

                    function u(n, r, o) {
                        if (!s || e) {
                            var i = s;
                            s = !0;
                            try {
                                t.emit(n, r, o, e)
                            } catch (a) {
                                p([a, n, r, o])
                            }
                            s = i
                        }
                    }

                    function d(t, e) {
                        if (Object.defineProperty && Object.keys) try {
                            var n = Object.keys(t);
                            return n.forEach(function(n) {
                                Object.defineProperty(e, n, {
                                    get: function() {
                                        return t[n]
                                    },
                                    set: function(e) {
                                        return t[n] = e, e
                                    }
                                })
                            }), e
                        } catch (r) {
                            p([r])
                        }
                        for (var o in t) c.call(t, o) && (e[o] = t[o]);
                        return e
                    }

                    function p(e) {
                        try {
                            t.emit("internal-error", e)
                        } catch (n) {}
                    }
                    return t || (t = o), n.inPlace = f, n.flag = a, n
                }
            }, {}],
            ee: [function(t, e, n) {
                function r() {}

                function o(t) {
                    function e(t) {
                        return t && t instanceof r ? t : t ? s(t, c, i) : i()
                    }

                    function n(n, r, o, i) {
                        if (!p.aborted || i) {
                            t && t(n, r, o);
                            for (var a = e(o), c = l(n), s = c.length, f = 0; f < s; f++) c[f].apply(a, r);
                            var d = u[y[n]];
                            return d && d.push([b, n, r, a]), a
                        }
                    }

                    function h(t, e) {
                        w[t] = l(t).concat(e)
                    }

                    function l(t) {
                        return w[t] || []
                    }

                    function m(t) {
                        return d[t] = d[t] || o(n)
                    }

                    function v(t, e) {
                        f(t, function(t, n) {
                            e = e || "feature", y[n] = e, e in u || (u[e] = [])
                        })
                    }
                    var w = {},
                        y = {},
                        b = {
                            on: h,
                            emit: n,
                            get: m,
                            listeners: l,
                            context: e,
                            buffer: v,
                            abort: a,
                            aborted: !1
                        };
                    return b
                }

                function i() {
                    return new r
                }

                function a() {
                    (u.api || u.feature) && (p.aborted = !0, u = p.backlog = {})
                }
                var c = "nr@context",
                    s = t("gos"),
                    f = t(20),
                    u = {},
                    d = {},
                    p = e.exports = o();
                p.backlog = u
            }, {}],
            gos: [function(t, e, n) {
                function r(t, e, n) {
                    if (o.call(t, e)) return t[e];
                    var r = n();
                    if (Object.defineProperty && Object.keys) try {
                        return Object.defineProperty(t, e, {
                            value: r,
                            writable: !0,
                            enumerable: !1
                        }), r
                    } catch (i) {}
                    return t[e] = r, r
                }
                var o = Object.prototype.hasOwnProperty;
                e.exports = r
            }, {}],
            handle: [function(t, e, n) {
                function r(t, e, n, r) {
                    o.buffer([t], r), o.emit(t, e, n)
                }
                var o = t("ee").get("handle");
                e.exports = r, r.ee = o
            }, {}],
            id: [function(t, e, n) {
                function r(t) {
                    var e = typeof t;
                    return !t || "object" !== e && "function" !== e ? -1 : t === window ? 0 : a(t, i, function() {
                        return o++
                    })
                }
                var o = 1,
                    i = "nr@id",
                    a = t("gos");
                e.exports = r
            }, {}],
            loader: [function(t, e, n) {
                function r() {
                    if (!x++) {
                        var t = g.info = NREUM.info,
                            e = p.getElementsByTagName("script")[0];
                        if (setTimeout(u.abort, 3e4), !(t && t.licenseKey && t.applicationID && e)) return u.abort();
                        f(y, function(e, n) {
                            t[e] || (t[e] = n)
                        }), s("mark", ["onload", a() + g.offset], null, "api");
                        var n = p.createElement("script");
                        n.src = "https://" + t.agent, e.parentNode.insertBefore(n, e)
                    }
                }

                function o() {
                    "complete" === p.readyState && i()
                }

                function i() {
                    s("mark", ["domContent", a() + g.offset], null, "api")
                }

                function a() {
                    return E.exists && performance.now ? Math.round(performance.now()) : (c = Math.max((new Date).getTime(), c)) - g.offset
                }
                var c = (new Date).getTime(),
                    s = t("handle"),
                    f = t(20),
                    u = t("ee"),
                    d = window,
                    p = d.document,
                    h = "addEventListener",
                    l = "attachEvent",
                    m = d.XMLHttpRequest,
                    v = m && m.prototype;
                NREUM.o = {
                    ST: setTimeout,
                    SI: d.setImmediate,
                    CT: clearTimeout,
                    XHR: m,
                    REQ: d.Request,
                    EV: d.Event,
                    PR: d.Promise,
                    MO: d.MutationObserver
                };
                var w = "" + location,
                    y = {
                        beacon: "ma.com",
                        errorBeacon: "ma.com",
                        agent: "js-agent.newrelic.com/nr-spa-1071.min.js"
                    },
                    b = m && v && v[h] && !/CriOS/.test(navigator.userAgent),
                    g = e.exports = {
                        offset: c,
                        now: a,
                        origin: w,
                        features: {},
                        xhrWrappable: b
                    };
                t(17), p[h] ? (p[h]("DOMContentLoaded", i, !1), d[h]("load", r, !1)) : (p[l]("onreadystatechange", o), d[l]("onload", r)), s("mark", ["firstbyte", c], null, "api");
                var x = 0,
                    E = t(22)
            }, {}]
        }, {}, ["loader", 2, 15, 5, 3, 4]);
    </script>
    <meta name="format-detection" content="telephone=no" />
    <script type="text/template" id="stripe-field-description">
        <div class="stripe-description">
            <p>
                <%=price%>
            </p>
            <p>
                <%=advice%>
            </p>
            <a href="http://www.stripe.com" target="_blank" class="stripe-logo">
                <%=stripeBanner%>
            </a>
        </div>
    </script>
    <script type="text/template" id="stripe-logo">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="81.216px" height="33.225px" viewBox="0 0 81.216 33.225" enable-background="new 0 0 81.216 33.225" xml:space="preserve">
            <g>
                <defs>
                    <path id="SVGID_1_" d="M39.262,26.75h6.475V8.69h-6.475V26.75z M0,14.244c0,3.306,2.181,4.533,3.715,5.248l0.818,0.375
					c1.056,0.478,1.533,0.785,1.533,1.466c0,0.884-0.75,1.021-1.738,1.021c-0.886,0-2.896-0.477-4.056-0.783v4.668
					c1.33,0.408,3.306,0.852,5.18,0.852c2.896,0,6.952-0.682,6.952-6.132c0-3.408-2.215-4.566-3.817-5.282l-0.681-0.307
					c-1.125-0.512-1.602-0.75-1.602-1.466c0-0.681,0.579-0.886,1.363-0.886c1.158,0,3.101,0.409,4.055,0.716V9.201
					C10.905,8.895,9.337,8.35,6.952,8.35C3.783,8.35,0,9.405,0,14.244 M32.82,10.428l-0.954-1.738H26.72V26.75h6.475v-12.37
					c0.341-0.204,1.125-0.613,2.147-0.613c0.886,0,1.738,0.17,2.385,0.341V8.724c-0.307-0.17-0.988-0.374-2.011-0.374
					C34.217,8.35,33.195,9.304,32.82,10.428 M54.939,22.387v-8.722c0.408-0.238,1.158-0.545,1.533-0.545
					c1.057,0,1.363,0.442,1.363,4.498c0,3.986-0.682,4.941-1.805,4.941C55.791,22.559,55.246,22.491,54.939,22.387 M54.667,9.814
					l-0.955-1.125h-5.248v24.536h6.475v-6.51c0.613,0.137,1.465,0.375,2.283,0.375c2.385,0,7.088-0.135,7.088-9.472
					c0-8.52-3.135-9.269-5.793-9.269C57.052,8.35,55.656,8.929,54.667,9.814 M73.992,12.2c1.191,0,1.191,1.737,1.191,4.157h-2.725
					C72.525,14.21,72.355,12.2,73.992,12.2 M66.017,17.789c0,8.655,4.941,9.301,8.996,9.301c2.25,0,4.533-0.646,5.283-0.92v-4.703
					c-0.955,0.169-3.443,0.716-5.283,0.716c-1.602,0-2.555-0.375-2.555-2.317h8.758v-2.146c0-7.225-3.033-9.371-7.225-9.371
					C69.902,8.35,66.017,10.155,66.017,17.789 M16.291,4.601l-0.818,4.089h-2.385v4.124h2.385v9.064c0,5.01,3.442,5.213,5.283,5.213
					c1.431,0,3.612-0.34,4.6-0.578v-4.602c-0.477,0.068-1.908,0.273-2.317,0.273c-0.716,0-1.091-0.238-1.091-1.464v-7.906h2.556
					l0.852-4.124h-3.408V3.237L16.291,4.601z M39.296,3.237c0,1.772,1.397,3.237,3.203,3.237c1.807,0,3.203-1.465,3.203-3.237
					C45.702,1.466,44.306,0,42.5,0C40.693,0,39.296,1.466,39.296,3.237" />
                </defs>
                <use xlink:href="#SVGID_1_" overflow="visible" />
            </g>
        </svg>
    </script>
    <script type="text/template" id="stripe-logo-fallback">
        <b>Stripe</b>
    </script>

    <title>Masafi HR Survey</title>
    <style>
		<?php
		
		foreach ($Css as $value) {
			$CssOut .=  $value. "\n"; 
		}
		
		echo $CssOut;
		
		?>
        body {
            height: 100%;
            background-color: #07316B;
            overflow: hidden;
        }
        
        body.preload * {
            visibility: hidden;
        }
        
        body.transparent-background.resizing * {
            visibility: hidden;
        }
        
        body.transparent-background {
            background: transparent;
        }
        
        body.transparent-background #loader {
            background: transparent;
        }
        
        #loader {
            background-color: #07316B;
            position: absolute;
            position: fixed;
            z-index: 999999;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            visibility: visible;
        }
        
        #loader * {
            visibility: visible;
        }
        
        #loader > .wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
        }
        
        #loadingLogo span {
            display: block;
            position: absolute;
            width: 100px;
            top: 50px;
            left: -50px;
            text-align: center;
            font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
            font-size: 11px;
            color: #eeeeee;
            -khtml-opacity: 0.6;
            -moz-opacity: 0.6;
            opacity: 0.6;
        }
        
        #loadingLogo svg {
            position: absolute;
            top: 64px;
            left: -35px;
        }
        
        #loadingLogo svg path,
        #loadingLogo svg rect {
            fill: #eeeeee;
        }
        
        @font-face {
            font-family: 'typeIconFont';
            src: url('fonts/typeform_glyphs.eot');
            src: url('fonts/typeform_glyphs.eot?#iefix') format('embedded-opentype'), url('fonts/typeform_glyphs.woff') format('woff'), url('fonts/typeform_glyphs.ttf') format('truetype'), url('fonts/typeform_glyphs.svg#typeform_glyphs') format('svg');
            font-weight: normal;
            font-style: normal;
        }
    </style>

    <script type="text/javascript">
        var settings = {
            browser: "default",
            uid: "rhSefW",
            language: "en",
            paths: {
                submit: "http://masafi.hrsurvey.com/finished.php",
                token: "http://masafi.hrsurvey.com/token.html" ///~ipromis/hrsurvey_com/
            },
            uniquePath: "",
            uploadPath: "",
            signupPath: "",
            lessPath: "",
            parent: "",
            hiddenFieldsEnabled: false,
            hiddenFields: [],
            font: 'Source+Sans+Pro:400,700',
            showLogo: '1',
            createdAt: '2018-01-29T09:10:15+0000',
            accountId: '11686783',
            userId: '11685643',
            accountPlan: 'Basic',
            stripePublishableKey: '',
            showLoadingBranding: true,
            colors: {
                primary: '#eeeeee',
                secondary: '#eeeeee'
            },
            baseAssetPath: 'http://masafi.hrsurvey.com/',
            collect: true,
            "featureToggles": {
                "retrySubmitEnabled": true,
                "isSignupQuestionsFormEnabled": false
            },
            redirectAfterSubmitEnabled: false,
            redirectAfterSubmitUrl: '',
            embedCloseAfterSubmitEnabled: false,
            formId: '9746617',
            lastEditorUserId: '11685643',
            appBehaviourKey: '5CHFipOVS715Gu3cR2JtJFPrMHc35h4k'
        }
    </script>

    <script type="text/template" id="component-opinion-scale">
        <div class="component-choices"></div>
        <ul class="labels layout-thee-columns layout-columns color-secondary text-subpixel-antialiased">
            <li class="first text-size-m text-align-left negativeLabel"></li>
            <li class="second text-size-m text-align-center neutralLabel"></li>
            <li class="third text-size-m text-align-right positiveLabel"></li>
        </ul>
    </script>
    <script type="text/template" id="component-choice-simple">
        <input <%=checked%> type="radio" value="
        <%=value%>"/>
            <br/>
            <span><%=label%></span>
    </script>
    <script type="text/template" id="component-choice-square">
        <div class="choice-wrapper">
            <div class="label">
                <%=label%>
            </div>
            <div class="line"></div>
            <div class="aux">
                <div class="bg"></div>
                <div class="bd"></div>
            </div>
            <div class="background"></div>
        </div>
    </script>
    <script type="text/template" id="icon-cloud">
        <svg class="icon-cloud" width="132px" height="85px" viewBox="0 0 132 85" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                <g id="Artboard-3" sketch:type="MSArtboardGroup" fill="#000000">
                    <path d="M79,85 L108,85 L108,84.9566146 C121.385069,84.1801879 132,73.0797189 132,59.5 C132,46.906961 122.871557,36.445984 110.870729,34.373127 C110.956288,33.426871 111,32.4685402 111,31.5 C111,14.1030304 96.8969696,0 79.5,0 C65.9387999,0 54.3791415,8.56961829 49.9409394,20.5889401 L49.9409394,20.5889401 C47.0317445,16.5954404 42.3189711,14 37,14 C28.163444,14 21,21.163444 21,30 C21,31.4892152 21.2034561,32.9309107 21.5840885,34.2988067 C9.35984257,36.1828033 0,46.7483475 0,59.5 C0,73.4162144 11.1475089,84.7287886 25,85 L59,85 L59,66 L43,66 L69,32 L95,66 L79,66 L79,85 Z" id="Oval-6" sketch:type="MSShapeGroup"></path>
                </g>
            </g>
        </svg>
    </script>
    <script type="text/template" id="icon-file">
        <svg class="icon-file" version="1.1" id="Layer_1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="65px" height="85px" viewBox="0 0 65 85" enable-background="new 0 0 65 85" xml:space="preserve">
            <g id="Page-1" sketch:type="MSPage">
                <g id="Artboard-1" transform="translate(97.000000, 0.000000)" sketch:type="MSArtboardGroup">
                    <g id="Rectangle-4-_x2B_-Line-_x2B_-Line" transform="translate(3.000000, 1.000000)" sketch:type="MSLayerGroup">
                        <path id="Rectangle-4" sketch:type="MSShapeGroup" fill="none" stroke="#000000" stroke-width="3" d="M-55.333,1
						c0.457,0-42,0-42,0v79h61V18C-36.333,18-54.876,1-55.333,1z" />
                        <path id="Line" sketch:type="MSShapeGroup" fill="none" stroke="#000000" stroke-width="2.837" stroke-linecap="square" d="
						M-55.833,1.579V18.5" />
                        <path id="Line_1_" sketch:type="MSShapeGroup" fill="none" stroke="#000000" stroke-width="3" stroke-linecap="square" d="
						M-55.333,18.5h19" />
                    </g>
                </g>
            </g>
        </svg>
    </script>
    <script type="text/template" id="component-file-upload-box">
        <div class="box">
            <div class="box-cancel">
                <svg viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" x="0px" y="0px" width="14px" height="14px">
                    <g>
                        <path id="Line" d="M 11.5 1.5 L 1.5 11.5 " stroke="#000000" stroke-width="2" fill="none" />
                        <path id="Line2" d="M 1.5 1.5 L 11.5 11.5 " stroke="#000000" stroke-width="2" fill="none" />
                    </g>
                </svg>
                <div class="cancel-background"></div>
            </div>
            <span class="tick"></span>
            <input type="file" name="file" />
            <div class="box-content-wrapper">
                <div class="box-content">
                    <div class="box-image"></div>
                    <div class="box-text"></div>
                </div>
            </div>
            <div class="aux">
                <div class="bg"></div>
                <div class="bd"></div>
            </div>
            <div class="background"></div>
        </div>
    </script>
    <script type="text/template" id="component-file-upload-box-simple">
        <input type="file" name="file" />
        <p class="box-text"></p>
        <div class="progress-bar-target"></div>
    </script>
    <script type="text/template" id="component-file-upload-progress-bar">
        <div class="progress-bar">
            <div class="bar"></div>
        </div>
    </script>
    <script type="text/template" id="component-file-upload-text-start">
        <p>
            <%= textChoose %>
        </p>
        <p>
            <%= textSizeLimit %>:
                <%= maxFileSize %> MB
        </p>
    </script>
    <script type="text/template" id="component-file-upload-text-uploading">
        <p>
            <b><%= textUploading %></b>
        </p>
        <p>
            <%= fileName %>
        </p>
    </script>
    <script type="text/template" id="component-file-upload-text-preview">
        <p>
            <b><%= fileName %></b>
        </p>
    </script>
    <script type="text/template" id="component-confirm-button">
        <div class="button-wrapper confirm">
        </div>
        <div class="text"></div>
    </script>
    <script type="text/javascript">
        var serializedForm = {
            "id": 9746617,
            "fields": [{
                "id": "qw90Q6ys82Ta",
                "question": "<?=$ABCD[0];?> -\t<?=$Intro;?>",
                "label": "<?=$ABCD[0];?> -\t<?=$Intro;?>",
                "type": "statement",
                "required": false,
                "attachment_type": "",
                "position": 0,
                "calculations": [],
                "content": "<?=$ABCD[0];?> -\t<?=$Intro;?>",
                "button": "<?=$Continue;?>",
                "quote_marks_enabled": true
            }, {
                "id": "wSLtFwGmpB5c",
                "question": "<?=$ABCD[1];?> - \t<?=$Instruction[0];?>",
                "label": "<?=$ABCD[1];?> - \t<?=$Instruction[0];?>",
                "type": "statement",
                "required": false,
                "attachment_type": "",
                "position": 1,
                "calculations": [],
                "content": "<?=$ABCD[1];?> - \t<?=$Instruction[0];?>",
                "button": "<?=$Continue;?>",
                "quote_marks_enabled": true
            }, {
                "id": "Tv3VQPiyu35N",
                "question": "<strong><?=$GenericInfo;?><\/strong>  ",
                "label": "<strong><?=$GenericInfo;?><\/strong>  ",
                "type": "group",
                "required": false,
                "attachment_type": "",
                "position": 2,
                "calculations": [],
                "content": "<strong><?=$GenericInfo;?><\/strong>  ",
                "button": "<?=$Continue;?>",
                "button_enabled": true
            }, {
                "id": "aLHrdoD8UmcQ",
                "question": "<?=$location;?>",
                "label": "<?=$location;?>",
                "type": "dropdown",
                "required": true,
                "attachment_type": "",
                "position": 3,
                "calculations": [],
                "choices": ["<?=$CitiesJsOut;?>"],
                "options": "<?=$CitiesJsOut;?>",
                "alphabetical": false
            }, {
                "id": "g0sy8wVDhYS0",
                "question": "<?=$Date;?>",
                "label": "<?=$Date;?>",
                "type": "date",
                "required": true,
                "attachment_type": "",
                "position": 4,
                "calculations": [],
                "dateFormat": {
                    "id": 539732,
                    "structure": "DDMMYYYY",
                    "separator": "\/"
                }
            }, {
                "id": "HkGSk02lBxU1",
                "question": "<?=$Department;?>",
                "label": "<?=$Department;?>",
                "type": "dropdown",
                "required": true,
                "attachment_type": "",
                "position": 5,
                "calculations": [],
                "choices": ["<?=$DeptJsOut;?>"],
                "options": "<?=$DeptJsOut;?>",
                "alphabetical": false
            }, {
                "id": "onQSBxhpV5Qu",
                "question": "<?=$Q1;?>",
                "label": "<?=$Q1;?>",
                "type": "list",
                "required": true,
                "attachment_type": "",
                "position": 6,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "dIjWQlsU1PNy": {
                        "id": "dIjWQlsU1PNy",
                        "label": "<?=$OptQ0[0];?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7"
                    },
                    "eslwsIXrM6oE": {
                        "id": "eslwsIXrM6oE",
                        "label": "<?=$OptQ0[1];?>",
                        "position": 1,
                        "ref": "d2a3e2d6-6390-4b4b-83e0-7f5de173de58"
                    },
                    "LMe4TVhGKsDA": {
                        "id": "LMe4TVhGKsDA",
                        "label": "<?=$OptQ0[2];?>",
                        "position": 2,
                        "ref": "c7cc5474-0412-43d2-911c-39a4050d8ea2"
                    },
                    "hNYZHyPyoIkp": {
                        "id": "hNYZHyPyoIkp",
                        "label": "<?=$OptQ0[3];?>",
                        "position": 3,
                        "ref": "d5a3f563-f391-477b-aa65-2f8127085916"
                    },
                    "hIR0TlTgw1am": {
                        "id": "hIR0TlTgw1am",
                        "label": "<?=$OptQ0[4];?>",
                        "position": 4,
                        "ref": "2d278104-a178-4c33-a67e-330a7229da14"
                    },
                    "E5hUyWxucIli": {
                        "id": "E5hUyWxucIli",
                        "label": "<?=$OptQ0[5];?>",
                        "position": 5,
                        "ref": "06f85ce5-ce70-4a6d-8144-9753b7cc49cc"
                    }
                },
                "vertical": true
            }, {
                "id": "UmSfdU7Lus7Y",
                "question": "<strong><?=$Q1_Title;?><\/strong>",
                "label": "<strong><?=$Q1_Title;?><\/strong>",
                "type": "group",
                "required": false,
                "attachment_type": "",
                "position": 7,
                "calculations": [],
                "content": "<strong><?=$Q1_Title;?><\/strong>",
                "button": "<?=$Continue;?>",
                "button_enabled": true
            }, {
                "id": "fwuu69wXj0QY",
                "question": "<?=$OptQ1[0];?>",
                "label": "<?=$OptQ1[0];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 8,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "dsDULteBUQkz": {
                        "id": "dsDULteBUQkz",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445201
                        }
                    },
                    "S7S3DCdPZMe9": {
                        "id": "S7S3DCdPZMe9",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445202
                        }
                    },
                    "PBMwubzcc3DK": {
                        "id": "PBMwubzcc3DK",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445203
                        }
                    },
                    "I4lPCcSGZWoK": {
                        "id": "I4lPCcSGZWoK",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445204
                        }
                    },
                    "cf83lVFvRWUI": {
                        "id": "cf83lVFvRWUI",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445205
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "RmZZ5NJbjFV5",
                "question": "<?=$OptQ1[1];?>",
                "label": "<?=$OptQ1[1];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 9,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "OWwrmLNRuf6x": {
                        "id": "OWwrmLNRuf6x",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445206
                        }
                    },
                    "uPwenAKvVQpF": {
                        "id": "uPwenAKvVQpF",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445207
                        }
                    },
                    "u0d5tG20mslS": {
                        "id": "u0d5tG20mslS",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445208
                        }
                    },
                    "BmocAlAGnPWY": {
                        "id": "BmocAlAGnPWY",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445209
                        }
                    },
                    "lQTIpGkfVeSn": {
                        "id": "lQTIpGkfVeSn",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445210
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "j2HJChGg5Jkk",
                "question": "<?=$OptQ1[2];?>",
                "label": "<?=$OptQ1[2];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 10,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "EJlGqjGAfNUO": {
                        "id": "EJlGqjGAfNUO",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445211
                        }
                    },
                    "cAIdFciJevs1": {
                        "id": "cAIdFciJevs1",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445212
                        }
                    },
                    "giwvZEN67K12": {
                        "id": "giwvZEN67K12",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445213
                        }
                    },
                    "Y3XK33qIZM3G": {
                        "id": "Y3XK33qIZM3G",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445214
                        }
                    },
                    "kQw6gezdlqjt": {
                        "id": "kQw6gezdlqjt",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445215
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "VulS68msDvtU",
                "question": "<?=$OptQ1[3];?>",
                "label": "<?=$OptQ1[3];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 11,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "f99VCMvjllT8": {
                        "id": "f99VCMvjllT8",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445216
                        }
                    },
                    "gbs5duDV1J4W": {
                        "id": "gbs5duDV1J4W",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445217
                        }
                    },
                    "hcyTIcFfafUX": {
                        "id": "hcyTIcFfafUX",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445218
                        }
                    },
                    "ztXefwx6USa9": {
                        "id": "ztXefwx6USa9",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445219
                        }
                    },
                    "jEmbuuyDb07f": {
                        "id": "jEmbuuyDb07f",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445220
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "ashY8I0T6c4K",
                "question": "<strong><?=$Q2_Title;?><\/strong>",
                "label": "<strong><?=$Q2_Title;?><\/strong>",
                "type": "group",
                "required": false,
                "attachment_type": "",
                "position": 12,
                "calculations": [],
                "content": "<strong><?=$Q2_Title;?><\/strong>",
                "button": "<?=$Continue;?>",
                "button_enabled": true
            }, {
                "id": "I3Dsn5emmoSH",
                "question": "<?=$OptQ2[0];?>",
                "label": "<?=$OptQ2[0];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 13,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "gZK70uIyXw4j": {
                        "id": "gZK70uIyXw4j",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445221
                        }
                    },
                    "RPjOV1namVsc": {
                        "id": "RPjOV1namVsc",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445222
                        }
                    },
                    "JmmmMvbjVtvM": {
                        "id": "JmmmMvbjVtvM",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445223
                        }
                    },
                    "nb4A5s6ahfe2": {
                        "id": "nb4A5s6ahfe2",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445224
                        }
                    },
                    "ClLPKYFxZ9dO": {
                        "id": "ClLPKYFxZ9dO",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445225
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "pqkOstYc7p52",
                "question": "<?=$OptQ2[1];?>",
                "label": "<?=$OptQ2[1];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 14,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "eXMsqUHRLW9m": {
                        "id": "eXMsqUHRLW9m",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445226
                        }
                    },
                    "SpfXANjCWznB": {
                        "id": "SpfXANjCWznB",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445227
                        }
                    },
                    "CW9I6qgfqmSL": {
                        "id": "CW9I6qgfqmSL",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445228
                        }
                    },
                    "Iy5Xp3brvnG3": {
                        "id": "Iy5Xp3brvnG3",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445229
                        }
                    },
                    "FQq7hFHa8r5E": {
                        "id": "FQq7hFHa8r5E",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445230
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "oDxY64Px2GEG",
                "question": "<?=$OptQ2[3];?>",
                "label": "<?=$OptQ2[3];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 15,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "eBKGiPaoxhpq": {
                        "id": "eBKGiPaoxhpq",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445231
                        }
                    },
                    "EdADIAObO7Xw": {
                        "id": "EdADIAObO7Xw",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445232
                        }
                    },
                    "sjSjxat3ENif": {
                        "id": "sjSjxat3ENif",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445233
                        }
                    },
                    "GqffJ1eaTLHv": {
                        "id": "GqffJ1eaTLHv",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445234
                        }
                    },
                    "qbrcieLRdrpl": {
                        "id": "qbrcieLRdrpl",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445235
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "OaZ0XNM4VuLX",
                "question": "<?=$OptQ2[3];?>",
                "label": "<?=$OptQ2[3];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 16,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "Nf1FjMDpjn8H": {
                        "id": "Nf1FjMDpjn8H",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445236
                        }
                    },
                    "agTxNbFaaIVv": {
                        "id": "agTxNbFaaIVv",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445237
                        }
                    },
                    "eYtL04qxYslN": {
                        "id": "eYtL04qxYslN",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445238
                        }
                    },
                    "DjbnHUrXZJt8": {
                        "id": "DjbnHUrXZJt8",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445239
                        }
                    },
                    "tXY6OaStxws4": {
                        "id": "tXY6OaStxws4",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445240
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "vGDw05kTwsN9",
                "question": "<strong><?=$Q3_Title;?><\/strong>",
                "label": "<strong><?=$Q3_Title;?><\/strong>",
                "type": "group",
                "required": false,
                "attachment_type": "",
                "position": 17,
                "calculations": [],
                "content": "<strong><?=$Q3_Title;?><\/strong>",
                "button": "<?=$Continue;?>",
                "button_enabled": true
            }, {
                "id": "kfFnSbeovjvj",
                "question": "<?=$OptQ3[0];?>",
                "label": "<?=$OptQ3[0];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 18,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "CTX4m87o4G06": {
                        "id": "CTX4m87o4G06",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445241
                        }
                    },
                    "Ttunh9CbhWVe": {
                        "id": "Ttunh9CbhWVe",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445242
                        }
                    },
                    "nBXFX9pF4TAk": {
                        "id": "nBXFX9pF4TAk",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445243
                        }
                    },
                    "FAjsEH8gMbgK": {
                        "id": "FAjsEH8gMbgK",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445244
                        }
                    },
                    "TF8qPs2ZJJer": {
                        "id": "TF8qPs2ZJJer",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445245
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "yvdsHr3icaw6",
                "question": "<?=$OptQ3[1];?>",
                "label": "<?=$OptQ3[1];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 19,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "ALseEaQpiMYJ": {
                        "id": "ALseEaQpiMYJ",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445246
                        }
                    },
                    "HHV8nMFF3P0y": {
                        "id": "HHV8nMFF3P0y",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445247
                        }
                    },
                    "JKEuJIYHkGmd": {
                        "id": "JKEuJIYHkGmd",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445248
                        }
                    },
                    "PA1WuaColKuM": {
                        "id": "PA1WuaColKuM",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445249
                        }
                    },
                    "dhtbl52Dlcxl": {
                        "id": "dhtbl52Dlcxl",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445250
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "rWVJd1ODtGb2",
                "question": "<?=$OptQ3[2];?>",
                "label": "<?=$OptQ3[2];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 20,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "o32TrXSrnmOr": {
                        "id": "o32TrXSrnmOr",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445251
                        }
                    },
                    "au82bJEqRX0D": {
                        "id": "au82bJEqRX0D",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445252
                        }
                    },
                    "t8Vg8HCIxORL": {
                        "id": "t8Vg8HCIxORL",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445253
                        }
                    },
                    "fd6MGYBfD7eF": {
                        "id": "fd6MGYBfD7eF",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445254
                        }
                    },
                    "XRMTuhHCVzZu": {
                        "id": "XRMTuhHCVzZu",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445255
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "VDL5rXvOhGZm",
                "question": "<?=$OptQ3[3];?>",
                "label": "<?=$OptQ3[3];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 21,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "hrKdbEviVc8F": {
                        "id": "hrKdbEviVc8F",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445256
                        }
                    },
                    "IybfoaJgS1At": {
                        "id": "IybfoaJgS1At",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445257
                        }
                    },
                    "sXdWCXfNdnGw": {
                        "id": "sXdWCXfNdnGw",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445258
                        }
                    },
                    "zopebCIbgal5": {
                        "id": "zopebCIbgal5",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445259
                        }
                    },
                    "ysT9jhdoguR9": {
                        "id": "ysT9jhdoguR9",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445260
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "UMj3DS7vP3KP",
                "question": "<strong><?=$Q4_Title;?><\/strong>",
                "label": "<strong><?=$Q4_Title;?><\/strong>",
                "type": "group",
                "required": false,
                "attachment_type": "",
                "position": 22,
                "calculations": [],
                "content": "<strong><?=$Q4_Title;?><\/strong>",
                "button": "<?=$Continue;?>",
                "button_enabled": true
            }, {
                "id": "lDWXCvc1txMS",
                "question": "<?=$OptQ4[0];?>",
                "label": "<?=$OptQ4[0];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 23,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "Bo0SAdBs3R9O": {
                        "id": "Bo0SAdBs3R9O",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445261
                        }
                    },
                    "H4XiI1EkgCmU": {
                        "id": "H4XiI1EkgCmU",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445262
                        }
                    },
                    "xb2zu0eHuhnT": {
                        "id": "xb2zu0eHuhnT",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445263
                        }
                    },
                    "a3EER0CGHHyJ": {
                        "id": "a3EER0CGHHyJ",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445264
                        }
                    },
                    "moEWk2oLgKcK": {
                        "id": "moEWk2oLgKcK",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445265
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "qkLWhUhQsEux",
                "question": "<?=$OptQ4[1];?>",
                "label": "<?=$OptQ4[1];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 24,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "srhW1N4ahC9N": {
                        "id": "srhW1N4ahC9N",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445266
                        }
                    },
                    "gnLK4I5YwBFF": {
                        "id": "gnLK4I5YwBFF",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445267
                        }
                    },
                    "yzFKfXfq7nTH": {
                        "id": "yzFKfXfq7nTH",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445268
                        }
                    },
                    "h2sHoiMKW1OE": {
                        "id": "h2sHoiMKW1OE",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445269
                        }
                    },
                    "H2HfKhK0cqy5": {
                        "id": "H2HfKhK0cqy5",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445270
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "ABwFDagfX8AB",
                "question": "<?=$OptQ4[2];?>",
                "label": "<?=$OptQ4[2];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 25,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "adwUgYvbWPDw": {
                        "id": "adwUgYvbWPDw",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445271
                        }
                    },
                    "nuUTFo14ieqX": {
                        "id": "nuUTFo14ieqX",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445272
                        }
                    },
                    "fYB38vx3XSfa": {
                        "id": "fYB38vx3XSfa",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445273
                        }
                    },
                    "SoCX3xXeYZeq": {
                        "id": "SoCX3xXeYZeq",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445274
                        }
                    },
                    "BAeTDCkTacK9": {
                        "id": "BAeTDCkTacK9",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445275
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "yp6ovgaqcTgp",
                "question": "<?=$OptQ4[3];?>",
                "label": "<?=$OptQ4[3];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 26,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "xcjHZR7xK9Qs": {
                        "id": "xcjHZR7xK9Qs",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445276
                        }
                    },
                    "AYGEBsfhA3Mi": {
                        "id": "AYGEBsfhA3Mi",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445277
                        }
                    },
                    "YViQQ7uF9TKr": {
                        "id": "YViQQ7uF9TKr",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445278
                        }
                    },
                    "yOf5WjbcCz4K": {
                        "id": "yOf5WjbcCz4K",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445279
                        }
                    },
                    "FD45eUfE1PpW": {
                        "id": "FD45eUfE1PpW",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445280
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "WckW7gfyWTJF",
                "question": "<strong><?=$Q4_Title;?><\/strong>",
                "label": "<strong><?=$Q4_Title;?><\/strong>",
                "type": "group",
                "required": false,
                "attachment_type": "",
                "position": 27,
                "calculations": [],
                "content": "<strong><?=$Q4_Title;?><\/strong>",
                "button": "<?=$Continue;?>",
                "button_enabled": true
            }, {
                "id": "jyHN71NyYdpk",
                "question": "<?=$OptQ5[0];?>",
                "label": "<?=$OptQ5[0];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 28,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "AezamQyOqQQM": {
                        "id": "AezamQyOqQQM",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445281
                        }
                    },
                    "CyI8AsBUYyy5": {
                        "id": "CyI8AsBUYyy5",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445282
                        }
                    },
                    "hjZMXcyQydTi": {
                        "id": "hjZMXcyQydTi",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445283
                        }
                    },
                    "QaTPHqWcOq3a": {
                        "id": "QaTPHqWcOq3a",

                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445284
                        }
                    },
                    "CddEgxgYmGoh": {
                        "id": "CddEgxgYmGoh",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445285
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "gHgn6r3Q6aT6",
                "question": "T<?=$OptQ5[1];?>",
                "label": "T<?=$OptQ5[1];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 29,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "GM3kym8KD1MW": {
                        "id": "GM3kym8KD1MW",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445286
                        }
                    },
                    "p6VM9EZBMTpY": {
                        "id": "p6VM9EZBMTpY",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445287
                        }
                    },
                    "Ey90q7SR12Wo": {
                        "id": "Ey90q7SR12Wo",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445288
                        }
                    },
                    "Jb6fELniOetE": {
                        "id": "Jb6fELniOetE",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445289
                        }
                    },
                    "KkXzuP9FRRfM": {
                        "id": "KkXzuP9FRRfM",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445290
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "fj5aKeCjqJWC",
                "question": "<?=$OptQ5[2];?>",
                "label": "<?=$OptQ5[2];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 30,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "Anz8nDy99FsT": {
                        "id": "Anz8nDy99FsT",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445291
                        }
                    },
                    "MUQMRZknyR7B": {
                        "id": "MUQMRZknyR7B",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445292
                        }
                    },
                    "JFyLnnONkxHm": {
                        "id": "JFyLnnONkxHm",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445293
                        }
                    },
                    "DUS3Y7ynT8VE": {
                        "id": "DUS3Y7ynT8VE",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445294
                        }
                    },
                    "AW0DWj8jB47j": {
                        "id": "AW0DWj8jB47j",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445295
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "XtPJJsOscCTu",
                "question": "<?=$OptQ5[3];?>",
                "label": "<?=$OptQ5[3];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 31,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "JdcOEOuJJ3Vg": {
                        "id": "JdcOEOuJJ3Vg",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445296
                        }
                    },
                    "dEcZmHTDOmhd": {
                        "id": "dEcZmHTDOmhd",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445297
                        }
                    },
                    "NwOtUHFGvowm": {
                        "id": "NwOtUHFGvowm",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445298
                        }
                    },
                    "FH4qMJBvO2xa": {
                        "id": "FH4qMJBvO2xa",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445299
                        }
                    },
                    "puBl3tDc6o9X": {
                        "id": "puBl3tDc6o9X",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445300
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "r7LjlCrCcUiX",
                "question": "<strong><?=$Q6_Title;?><\/strong>",
                "label": "<strong><?=$Q6_Title;?><\/strong>",
                "type": "group",
                "required": false,
                "attachment_type": "",
                "position": 32,
                "calculations": [],
                "content": "<strong><?=$Q6_Title;?><\/strong>",
                "button": "<?=$Continue;?>",
                "button_enabled": true
            }, {
                "id": "kkhTUGfQLC8h",
                "question": "<?=$OptQ6[0];?>",
                "label": "<?=$OptQ6[0];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 33,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "dxE3BCVwJjxy": {
                        "id": "dxE3BCVwJjxy",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445301
                        }
                    },
                    "U4mYR9uPI4l9": {
                        "id": "U4mYR9uPI4l9",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445302
                        }
                    },
                    "uJe1ruMfQPAM": {
                        "id": "uJe1ruMfQPAM",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445303
                        }
                    },
                    "dxMWsBLHOhp0": {
                        "id": "dxMWsBLHOhp0",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445304
                        }
                    },
                    "SNaLPHlVR193": {
                        "id": "SNaLPHlVR193",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445305
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "axYmMEi1x6bi",
                "question": "<?=$OptQ6[1];?>",
                "label": "<?=$OptQ6[1];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 34,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "GVFVxJ6F9uXE": {
                        "id": "GVFVxJ6F9uXE",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445306
                        }
                    },
                    "iPzsgXfQvkjk": {
                        "id": "iPzsgXfQvkjk",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445307
                        }
                    },
                    "KlKP2baSwwzj": {
                        "id": "KlKP2baSwwzj",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445308
                        }
                    },
                    "hHY4AV8CB685": {
                        "id": "hHY4AV8CB685",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445309
                        }
                    },
                    "MwANFTUx7FH9": {
                        "id": "MwANFTUx7FH9",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445310
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "G6Mz8n3e2PFT",
                "question": "<?=$OptQ6[2];?>",
                "label": "<?=$OptQ6[2];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 35,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "bnggNroOBP9J": {
                        "id": "bnggNroOBP9J",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445311
                        }
                    },
                    "PUtF1QmUDG4S": {
                        "id": "PUtF1QmUDG4S",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445312
                        }
                    },
                    "JLZtvmooQR2H": {
                        "id": "JLZtvmooQR2H",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445313
                        }
                    },
                    "pnF1L2aj8rnr": {
                        "id": "pnF1L2aj8rnr",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445314
                        }
                    },
                    "pyNq3ZFI19Q5": {
                        "id": "pyNq3ZFI19Q5",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445315
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "fNNITsOfLvRv",
                "question": "<?=$OptQ6[3];?>",
                "label": "<?=$OptQ6[3];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 36,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "bPCcq9dEDxlu": {
                        "id": "bPCcq9dEDxlu",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445316
                        }
                    },
                    "IxSTlf83sJ5D": {
                        "id": "IxSTlf83sJ5D",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445317
                        }
                    },
                    "aY0N4HmIHRhL": {
                        "id": "aY0N4HmIHRhL",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445318
                        }
                    },
                    "nWExSXt67Obe": {
                        "id": "nWExSXt67Obe",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445319
                        }
                    },
                    "xUIExOsTocWa": {
                        "id": "xUIExOsTocWa",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445320
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "UiJJsG0PT1ft",
                "question": "<strong><?=$Q7_Title;?><\/strong>",
                "label": "<strong><?=$Q7_Title;?><\/strong>",
                "type": "group",
                "required": false,
                "attachment_type": "",
                "position": 37,
                "calculations": [],
                "content": "<strong><?=$Q7_Title;?><\/strong>",
                "button": "<?=$Continue;?>",
                "button_enabled": true
            }, {
                "id": "peIueBGcqVjx",
                "question": "<?=$OptQ7[0];?>",
                "label": "<?=$OptQ7[0];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 38,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "e6GdKurMhahK": {
                        "id": "e6GdKurMhahK",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445321
                        }
                    },
                    "OZsB0yUm8ezd": {
                        "id": "OZsB0yUm8ezd",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445322
                        }
                    },
                    "OKx4MEVfBI1b": {
                        "id": "OKx4MEVfBI1b",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445323
                        }
                    },
                    "rGjPAIjeQQap": {
                        "id": "rGjPAIjeQQap",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445324
                        }
                    },
                    "BpS46qCXWRZN": {
                        "id": "BpS46qCXWRZN",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445325
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "pYfdrHS7r7Ds",
                "question": "<?=$OptQ7[1];?>",
                "label": "<?=$OptQ7[1];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 39,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "E2Z8oT2e6IvS": {
                        "id": "E2Z8oT2e6IvS",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445326
                        }
                    },
                    "yMFlBY1RbQh1": {
                        "id": "yMFlBY1RbQh1",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445327
                        }
                    },
                    "R958gdW2SWMI": {
                        "id": "R958gdW2SWMI",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445328
                        }
                    },
                    "Jb56fwksd8ue": {
                        "id": "Jb56fwksd8ue",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445329
                        }
                    },
                    "NFLKlcth9Fj9": {
                        "id": "NFLKlcth9Fj9",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445330
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "V4N6hq8IFMgj",
                "question": "<?=$OptQ7[2];?>",
                "label": "<?=$OptQ7[2];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 40,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "r0BvwiYAGwFN": {
                        "id": "r0BvwiYAGwFN",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445331
                        }
                    },
                    "xPag4O9zIq4n": {
                        "id": "xPag4O9zIq4n",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445332
                        }
                    },
                    "HXJwoJny3eiX": {
                        "id": "HXJwoJny3eiX",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445333
                        }
                    },
                    "H2mBTntWL0VL": {
                        "id": "H2mBTntWL0VL",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445334
                        }
                    },
                    "l1w9xQ29NbnV": {
                        "id": "l1w9xQ29NbnV",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445335
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "ASzkt3u4Qi9i",
                "question": "<?=$OptQ7[3];?>",
                "label": "<?=$OptQ7[3];?>",
                "type": "list-image",
                "required": true,
                "attachment_type": "",
                "position": 41,
                "calculations": [],
                "randomize": false,
                "multiple": false,
                "other": false,
                "choices": {
                    "oos1ZGFxIvN7": {
                        "id": "oos1ZGFxIvN7",
                        "label": "<?=$StronglyAgree;?>",
                        "position": 0,
                        "ref": "1db3e400-fb68-44fe-a010-12b5a1b7a4c7",
                        "image": {
                            "id": 32445336
                        }
                    },
                    "CTGCOr3yF7AD": {
                        "id": "CTGCOr3yF7AD",
                        "label": "<?=$Agree;?>",
                        "position": 1,
                        "ref": "91f37d38-be0f-40aa-9df8-76faf5e20e43",
                        "image": {
                            "id": 32445337
                        }
                    },
                    "p5cipZTYlITJ": {
                        "id": "p5cipZTYlITJ",
                        "label": "<?=$Neutral;?>",
                        "position": 2,
                        "ref": "56df9ee0-4878-49d9-929d-6e3f7c317b06",
                        "image": {
                            "id": 32445338
                        }
                    },
                    "E2uhbW9Zq5lu": {
                        "id": "E2uhbW9Zq5lu",
                        "label": "<?=$Disagree;?>",
                        "position": 3,
                        "ref": "4cef1703-ec0b-4609-8dea-649fb71d8902",
                        "image": {
                            "id": 32445339
                        }
                    },
                    "o6GLm2qtGcjj": {
                        "id": "o6GLm2qtGcjj",
                        "label": "<?=$StronglyDisagree;?>",
                        "position": 4,
                        "ref": "27670396-5e73-42f6-94f4-4309cb97ef3a",
                        "image": {
                            "id": 32445340
                        }
                    }
                },
                "supersize": false,
                "labels_enabled": true
            }, {
                "id": "u6VR0EQEgzmH",
                "question": "<?=$Halfway;?>",
                "label": "<?=$Halfway;?>",
                "type": "rating",
                "required": true,
                "attachment_type": "",
                "position": 42,
                "calculations": [],
                "max_value": 5,
                "shape": "up"
            }],
            "outros": [],
            "intros": [{
                "id": 7924811,
                "uid": "754881",
                "ref": "884ca866471e6bd2",
                "image": {
                    "id": 28516832
                },
                "attachment_type": "image",
                "body": "<strong><?=$Survey;?><\/strong> ",
                "body_enabled": true,
                "button": "<?=$StartBtn;?>",
                "button_enabled": true,
                "description": "",
                "description_enabled": false,
                "enabled": true
            }],
            "uid": "rhSefW",
            "name": "Masafi HR Survey",
            "design": {
                "id": 11899753,
                "background": {
                    "id": 3054044
                }
            }
        };
    </script>

    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link id="font" href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&text=' rel='stylesheet' type='text/css'> </head>

<body class="preload   default  repeat  branding " <?=$Dir;?>>

    <div id="typeform" class="">
        <div id="loader">
            <div class="wrapper">
                <div id="spin"></div>
                <div id="loadingLogo" style="display:none">
                    <span><img src="images/masafi.png" style="width:100%;" /></span>
                </div>
            </div>
            <script>
                // apparently we don't have jquery here
                var formCreationDate = Date.parse('2018-01-29T09:10:15+0000'.split('T')[0]),
                    featureReleaseDate = Date.parse("Jan 29, 2018"),
                    showLoadingBranding = 1;
                if (formCreationDate > featureReleaseDate && showLoadingBranding)
                    document.getElementById("loadingLogo").style.display = 'block';
            </script>
        </div>           
                
             
		<?=$include;?>

        <div class="form">
            <ul class="questions">

                <li class="statement active " id="qw90Q6ys82Ta" data-model='{"id":"qw90Q6ys82Ta","type":"statement","required":false,"quoteMarksEnabled":true}'>
                    <div class="wrapper">
                        <div class="item"><?=$Quotes;?></div>
                        <div class="question"><span><?=$ABCD[0];?> - <?=$Intro;?></span></div>
                        <div class="content">
                            <div class="description">
                                <?=$IntroDesc;?>
                            </div>
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="clear"></div>
                                </div>

                                <div class="button-wrapper continue">
                                    <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                </div>

                                <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="statement active " id="wSLtFwGmpB5c" data-model='{"id":"wSLtFwGmpB5c","type":"statement","required":false,"quoteMarksEnabled":true}'>
                    <div class="wrapper">
                        <div class="item"><?=$Quotes;?></div>
                        <div class="question"><span><?=$ABCD[1];?> - <?=$Instruction[0];?></span></div>
                        <div class="content">
                            <div class="description">
                                <?=$ABCD[0];?> - <?=$Instruction[1];?><br>
                                <?=$ABCD[1];?> - <?=$Instruction[2];?><br>
                                <?=$ABCD[2];?> - <?=$Instruction[3];?>
                                <br>
                            </div>
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="clear"></div>
                                </div>

                                <div class="button-wrapper continue">
                                    <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                </div>

                                <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="group active   " id="Tv3VQPiyu35N" data-button=&#039;Continue&#039; data-model='{"id":"Tv3VQPiyu35N","type":"group","name":"","required":false,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><strong><?=$GenericInfo;?></strong>  </span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <div class="button-wrap">

                                            <div class="button-wrapper continue">
                                                <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                            </div>
                                            <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="dropdown active required  " id="aLHrdoD8UmcQ" data-parent="Tv3VQPiyu35N" data-model='{"id":"aLHrdoD8UmcQ","type":"dropdown","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$location;?></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <select>
                                            <option value=""><?=$SelectTitle?></option>
                                            <?php 
											foreach ($Cities as $value) {
												$CitiesOut .= "<option value=\"$value\">$value</option>" . "\n";	
											}
											echo $CitiesOut;
											?>
                                        </select>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="clear"></div>
                                <div class="message "><span onclick="Getlocation();"></span>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="date active required  " id="g0sy8wVDhYS0" data-parent="Tv3VQPiyu35N" data-model='{"id":"g0sy8wVDhYS0","type":"date","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$Date;?></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                    </div>
                                </div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span onclick="GetDate();"><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="dropdown active required  " id="HkGSk02lBxU1" data-parent="Tv3VQPiyu35N" data-model='{"id":"HkGSk02lBxU1","type":"dropdown","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$Department;?></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <select>
                                            <option value=""><?=$SelectTitle?></option>
                                            <?php 
											foreach ($Departments as $value) {
												$DeptOut .= "<option value=\"$value\">$value</option>" . "\n";	
											}
											echo $DeptOut;
											?>
                                        </select>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="clear"></div>
                                <div class="message "><span onclick="GetDepartment();"></span>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list active required   vertical" id="onQSBxhpV5Qu" data-parent="Tv3VQPiyu35N" data-model='{"id":"onQSBxhpV5Qu","type":"list","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span>4</span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$Q0;?></span></div>
                        <div class="content">
                            <div class="description">
                                <?=$GenericInfo;?>
                                <br>
                            </div>
                            <div class="content-wrapper">

                                <div class="attachment-wrapper">

                                    <div class="control">
                                        <div class="multiple"><?=$Multi;?></div>
                                        <ul class="columns">

                                            <li id="dIjWQlsU1PNy" class="container" onclick="MasafiExp('<?=$OptQValue0[0];?>');">
                                                <input type="hidden" name="value" value="<?=$OptQValue0[0];?>" />
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <span class="label"><?=$OptQ0[0];?></span>
                                                <span class="tick"></span>
                                                <div class="aux ">
                                                    <div class="bg"></div>
                                                    <div class="bd"></div>
                                                </div>
                                            </li>

                                            <li id="eslwsIXrM6oE" class="container" onclick="MasafiExp('<?=$OptQValue0[1];?>');">
                                                <input type="hidden" name="value" value="<?=$OptQValue0[1];?>" />
                                                <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <span class="label"><?=$OptQ0[1];?></span>
                                                <span class="tick"></span>
                                                <div class="aux ">
                                                    <div class="bg"></div>
                                                    <div class="bd"></div>
                                                </div>
                                            </li>

                                            <li id="LMe4TVhGKsDA" class="container" onclick="MasafiExp('<?=$OptQValue0[2];?>');">
                                                <input type="hidden" name="value" value="<?=$OptQValue0[2];?>" />
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <span class="label"><?=$OptQ0[2];?></span>
                                                <span class="tick"></span>
                                                <div class="aux ">
                                                    <div class="bg"></div>
                                                    <div class="bd"></div>
                                                </div>
                                            </li>

                                            <li id="hNYZHyPyoIkp" class="container" onclick="MasafiExp('<?=$OptQValue0[3];?>');">
                                                <input type="hidden" name="value" value="<?=$OptQValue0[3];?>" />
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <span class="label"><?=$OptQ0[3];?></span>
                                                <span class="tick"></span>
                                                <div class="aux ">
                                                    <div class="bg"></div>
                                                    <div class="bd"></div>
                                                </div>
                                            </li>

                                            <li id="hIR0TlTgw1am" class="container" onclick="MasafiExp('<?=$OptQValue0[4];?>');">
                                                <input type="hidden" name="value" value="<?=$OptQValue0[4];?>" />
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <span class="label"><?=$OptQ0[4];?></span>
                                                <span class="tick"></span>
                                                <div class="aux ">
                                                    <div class="bg"></div>
                                                    <div class="bd"></div>
                                                </div>
                                            </li>

                                            <li id="E5hUyWxucIli" class="container" onclick="MasafiExp('<?=$OptQValue0[5];?>');">
                                                <input type="hidden" name="value" value="<?=$OptQValue0[5];?>" />
                                                <div class="letter"><span><?=$ABCD[5];?></span></div>
                                                <span class="label"><?=$OptQ0[5];?></span>
                                                <span class="tick"></span>
                                                <div class="aux ">
                                                    <div class="bg"></div>
                                                    <div class="bd"></div>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                    <div class="clear"></div>
                                </div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>

                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="group active   " id="UmSfdU7Lus7Y" data-button=&#039;Continue&#039; data-model='{"id":"UmSfdU7Lus7Y","type":"group","name":"","required":false,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><strong><?=$Q1_Title;?></strong></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <div class="button-wrap">

                                            <div class="button-wrapper continue">
                                                <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                            </div>
                                            <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="fwuu69wXj0QY" data-parent="UmSfdU7Lus7Y" data-model='{"id":"fwuu69wXj0QY","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ1[0];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="dsDULteBUQkz" class="Border container" onclick="chk(1,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="S7S3DCdPZMe9" class="Border container" onclick="chk(1,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="PBMwubzcc3DK" class="Border container" onclick="chk(1,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="I4lPCcSGZWoK" class="Border container" onclick="chk(1,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />

                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="cf83lVFvRWUI" class="Border container" onclick="chk(1,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="RmZZ5NJbjFV5" data-parent="UmSfdU7Lus7Y" data-model='{"id":"RmZZ5NJbjFV5","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ1[1];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="OWwrmLNRuf6x" class="Border container" onclick="chk(2,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="uPwenAKvVQpF" class="Border container" onclick="chk(2,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="u0d5tG20mslS" class="Border container" onclick="chk(2,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="BmocAlAGnPWY" class="Border container" onclick="chk(2,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="lQTIpGkfVeSn" class="Border container" onclick="chk(2,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="j2HJChGg5Jkk" data-parent="UmSfdU7Lus7Y" data-model='{"id":"j2HJChGg5Jkk","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ1[2];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="EJlGqjGAfNUO" class="Border container" onclick="chk(3,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="cAIdFciJevs1" class="Border container" onclick="chk(3,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="giwvZEN67K12" class="Border container" onclick="chk(3,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="Y3XK33qIZM3G" class="Border container" onclick="chk(3,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="kQw6gezdlqjt" class="Border container" onclick="chk(3,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="VulS68msDvtU" data-parent="UmSfdU7Lus7Y" data-model='{"id":"VulS68msDvtU","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ1[3];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="f99VCMvjllT8" class="Border container" onclick="chk(4,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="gbs5duDV1J4W" class="Border container" onclick="chk(4,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="hcyTIcFfafUX" class="Border container" onclick="chk(4,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="ztXefwx6USa9" class="Border container" onclick="chk(4,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="jEmbuuyDb07f" class="Border container" onclick="chk(4,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="group active   " id="ashY8I0T6c4K" data-button=&#039;Continue&#039; data-model='{"id":"ashY8I0T6c4K","type":"group","name":"","required":false,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><strong><?=$Q2_Title;?></strong></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <div class="button-wrap">

                                            <div class="button-wrapper continue">
                                                <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                            </div>
                                            <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="I3Dsn5emmoSH" data-parent="ashY8I0T6c4K" data-model='{"id":"I3Dsn5emmoSH","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ2[0];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="gZK70uIyXw4j" class="Border container" onclick="chk(5,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="RPjOV1namVsc" class="Border container" onclick="chk(5,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="JmmmMvbjVtvM" class="Border container" onclick="chk(5,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="nb4A5s6ahfe2" class="Border container" onclick="chk(5,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="ClLPKYFxZ9dO" class="Border container" onclick="chk(5,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="pqkOstYc7p52" data-parent="ashY8I0T6c4K" data-model='{"id":"pqkOstYc7p52","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ2[1];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="eXMsqUHRLW9m" class="Border container" onclick="chk(6,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="SpfXANjCWznB" class="Border container" onclick="chk(6,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="CW9I6qgfqmSL" class="Border container" onclick="chk(6,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="Iy5Xp3brvnG3" class="Border container" onclick="chk(6,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="FQq7hFHa8r5E" class="Border container" onclick="chk(6,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="oDxY64Px2GEG" data-parent="ashY8I0T6c4K" data-model='{"id":"oDxY64Px2GEG","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ2[2];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="eBKGiPaoxhpq" class="Border container" onclick="chk(7,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="EdADIAObO7Xw" class="Border container" onclick="chk(7,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="sjSjxat3ENif" class="Border container" onclick="chk(7,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="GqffJ1eaTLHv" class="Border container" onclick="chk(7,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="qbrcieLRdrpl" class="Border container" onclick="chk(7,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="OaZ0XNM4VuLX" data-parent="ashY8I0T6c4K" data-model='{"id":"OaZ0XNM4VuLX","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ2[3];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="Nf1FjMDpjn8H" class="Border container" onclick="chk(8,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="agTxNbFaaIVv" class="Border container" onclick="chk(8,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="eYtL04qxYslN" class="Border container" onclick="chk(8,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="DjbnHUrXZJt8" class="Border container" onclick="chk(8,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="tXY6OaStxws4" class="Border container" onclick="chk(8,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="group active   " id="vGDw05kTwsN9" data-button=&#039;Continue&#039; data-model='{"id":"vGDw05kTwsN9","type":"group","name":"","required":false,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><strong><?=$Q3_Title;?></strong></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <div class="button-wrap">

                                            <div class="button-wrapper continue">
                                                <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                            </div>
                                            <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="kfFnSbeovjvj" data-parent="vGDw05kTwsN9" data-model='{"id":"kfFnSbeovjvj","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ3[0];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="CTX4m87o4G06" class="Border container" onclick="chk(9,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="Ttunh9CbhWVe" class="Border container" onclick="chk(9,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="nBXFX9pF4TAk" class="Border container" onclick="chk(9,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="FAjsEH8gMbgK" class="Border container" onclick="chk(9,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="TF8qPs2ZJJer" class="Border container" onclick="chk(9,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="yvdsHr3icaw6" data-parent="vGDw05kTwsN9" data-model='{"id":"yvdsHr3icaw6","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ3[1];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="ALseEaQpiMYJ" class="Border container" onclick="chk(10,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="HHV8nMFF3P0y" class="Border container" onclick="chk(10,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="JKEuJIYHkGmd" class="Border container" onclick="chk(10,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="PA1WuaColKuM" class="Border container" onclick="chk(10,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="dhtbl52Dlcxl" class="Border container" onclick="chk(10,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="rWVJd1ODtGb2" data-parent="vGDw05kTwsN9" data-model='{"id":"rWVJd1ODtGb2","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ3[2];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="o32TrXSrnmOr" class="Border container" onclick="chk(11,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="au82bJEqRX0D" class="Border container" onclick="chk(11,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="t8Vg8HCIxORL" class="Border container" onclick="chk(11,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="fd6MGYBfD7eF" class="Border container" onclick="chk(11,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="XRMTuhHCVzZu" class="Border container" onclick="chk(11,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="VDL5rXvOhGZm" data-parent="vGDw05kTwsN9" data-model='{"id":"VDL5rXvOhGZm","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ3[3];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="hrKdbEviVc8F" class="Border container" onclick="chk(12,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="IybfoaJgS1At" class="Border container" onclick="chk(12,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="sXdWCXfNdnGw" class="Border container" onclick="chk(12,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="zopebCIbgal5" class="Border container" onclick="chk(12,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="ysT9jhdoguR9" class="Border container" onclick="chk(12,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="group active   " id="UMj3DS7vP3KP" data-button=&#039;Continue&#039; data-model='{"id":"UMj3DS7vP3KP","type":"group","name":"","required":false,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><strong><?=$Q4_Title;?></strong></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <div class="button-wrap">

                                            <div class="button-wrapper continue">
                                                <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                            </div>
                                            <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="lDWXCvc1txMS" data-parent="UMj3DS7vP3KP" data-model='{"id":"lDWXCvc1txMS","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ4[0];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="Bo0SAdBs3R9O" class="Border container" onclick="chk(13,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="H4XiI1EkgCmU" class="Border container" onclick="chk(13,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="xb2zu0eHuhnT" class="Border container" onclick="chk(13,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="a3EER0CGHHyJ" class="Border container" onclick="chk(13,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="moEWk2oLgKcK" class="Border container" onclick="chk(13,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="qkLWhUhQsEux" data-parent="UMj3DS7vP3KP" data-model='{"id":"qkLWhUhQsEux","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ4[1];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="srhW1N4ahC9N" class="Border container" onclick="chk(14,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="gnLK4I5YwBFF" class="Border container" onclick="chk(14,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="yzFKfXfq7nTH" class="Border container" onclick="chk(14,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="h2sHoiMKW1OE" class="Border container" onclick="chk(14,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="H2HfKhK0cqy5" class="Border container" onclick="chk(14,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="ABwFDagfX8AB" data-parent="UMj3DS7vP3KP" data-model='{"id":"ABwFDagfX8AB","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ4[2];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="adwUgYvbWPDw" class="Border container" onclick="chk(15,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="nuUTFo14ieqX" class="Border container" onclick="chk(15,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="fYB38vx3XSfa" class="Border container" onclick="chk(15,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="SoCX3xXeYZeq" class="Border container" onclick="chk(15,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="BAeTDCkTacK9" class="Border container" onclick="chk(15,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="yp6ovgaqcTgp" data-parent="UMj3DS7vP3KP" data-model='{"id":"yp6ovgaqcTgp","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ4[3];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="xcjHZR7xK9Qs" class="Border container" onclick="chk(16,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="AYGEBsfhA3Mi" class="Border container" onclick="chk(16,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="YViQQ7uF9TKr" class="Border container" onclick="chk(16,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="yOf5WjbcCz4K" class="Border container" onclick="chk(16,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="FD45eUfE1PpW" class="Border container" onclick="chk(16,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>
                                
                <li class="rating active required  icon-up" id="u6VR0EQEgzmH" data-parent="UMj3DS7vP3KP" data-model='{"id":"u6VR0EQEgzmH","type":"rating","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$Halfway;?></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <ul class="icons" data-steps='{"steps":["1","2","3","4","5"]}'></ul>
                                    </div>
                                </div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="group active   " id="WckW7gfyWTJF" data-button=&#039;Continue&#039; data-model='{"id":"WckW7gfyWTJF","type":"group","name":"","required":false,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><strong><?=$Q4_Title;?></strong></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <div class="button-wrap">

                                            <div class="button-wrapper continue">
                                                <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                            </div>
                                            <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="jyHN71NyYdpk" data-parent="WckW7gfyWTJF" data-model='{"id":"jyHN71NyYdpk","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ5[0];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="AezamQyOqQQM" class="Border container" onclick="chk(18,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="CyI8AsBUYyy5" class="Border container" onclick="chk(18,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="hjZMXcyQydTi" class="Border container" onclick="chk(18,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="QaTPHqWcOq3a" class="Border container" onclick="chk(18,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="CddEgxgYmGoh" class="Border container" onclick="chk(18,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="gHgn6r3Q6aT6" data-parent="WckW7gfyWTJF" data-model='{"id":"gHgn6r3Q6aT6","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ5[1];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="GM3kym8KD1MW" class="Border container" onclick="chk(19,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="p6VM9EZBMTpY" class="Border container" onclick="chk(19,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="Ey90q7SR12Wo" class="Border container" onclick="chk(19,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="Jb6fELniOetE" class="Border container" onclick="chk(19,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="KkXzuP9FRRfM" class="Border container" onclick="chk(19,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="fj5aKeCjqJWC" data-parent="WckW7gfyWTJF" data-model='{"id":"fj5aKeCjqJWC","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ5[2];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="Anz8nDy99FsT" class="Border container" onclick="chk(20,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="MUQMRZknyR7B" class="Border container" onclick="chk(20,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="JFyLnnONkxHm" class="Border container" onclick="chk(20,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="DUS3Y7ynT8VE" class="Border container" onclick="chk(20,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="AW0DWj8jB47j" class="Border container" onclick="chk(20,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="XtPJJsOscCTu" data-parent="WckW7gfyWTJF" data-model='{"id":"XtPJJsOscCTu","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>

                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ5[3];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="JdcOEOuJJ3Vg" class="Border container" onclick="chk(21,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="dEcZmHTDOmhd" class="Border container" onclick="chk(21,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="NwOtUHFGvowm" class="Border container" onclick="chk(21,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="FH4qMJBvO2xa" class="Border container" onclick="chk(21,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="puBl3tDc6o9X" class="Border container" onclick="chk(21,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="group active   " id="r7LjlCrCcUiX" data-button=&#039;Continue&#039; data-model='{"id":"r7LjlCrCcUiX","type":"group","name":"","required":false,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><strong><?=$Q6_Title;?></strong></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <div class="button-wrap">

                                            <div class="button-wrapper continue">
                                                <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                            </div>
                                            <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="kkhTUGfQLC8h" data-parent="r7LjlCrCcUiX" data-model='{"id":"kkhTUGfQLC8h","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ6[0];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="dxE3BCVwJjxy" class="Border container" onclick="chk(22,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="U4mYR9uPI4l9" class="Border container" onclick="chk(22,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="uJe1ruMfQPAM" class="Border container" onclick="chk(22,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="dxMWsBLHOhp0" class="Border container" onclick="chk(22,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="SNaLPHlVR193" class="Border container" onclick="chk(22,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="axYmMEi1x6bi" data-parent="r7LjlCrCcUiX" data-model='{"id":"axYmMEi1x6bi","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ6[1];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="GVFVxJ6F9uXE" class="Border container" onclick="chk(23,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="iPzsgXfQvkjk" class="Border container" onclick="chk(23,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="KlKP2baSwwzj" class="Border container" onclick="chk(23,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="hHY4AV8CB685" class="Border container" onclick="chk(23,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="MwANFTUx7FH9" class="Border container" onclick="chk(23,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="G6Mz8n3e2PFT" data-parent="r7LjlCrCcUiX" data-model='{"id":"G6Mz8n3e2PFT","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ6[2];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="bnggNroOBP9J" class="Border container" onclick="chk(24,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="PUtF1QmUDG4S" class="Border container" onclick="chk(24,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="JLZtvmooQR2H" class="Border container" onclick="chk(24,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="pnF1L2aj8rnr" class="Border container" onclick="chk(24,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="pyNq3ZFI19Q5" class="Border container" onclick="chk(24,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="fNNITsOfLvRv" data-parent="r7LjlCrCcUiX" data-model='{"id":"fNNITsOfLvRv","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ6[3];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="bPCcq9dEDxlu" class="Border container" onclick="chk(25,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="IxSTlf83sJ5D" class="Border container" onclick="chk(25,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="aY0N4HmIHRhL" class="Border container" onclick="chk(25,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="nWExSXt67Obe" class="Border container" onclick="chk(25,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="xUIExOsTocWa" class="Border container" onclick="chk(25,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>


                            </div>
                        </div>
                    </div>
                </li>

                <li class="group active   " id="UiJJsG0PT1ft" data-button=&#039;Continue&#039; data-model='{"id":"UiJJsG0PT1ft","type":"group","name":"","required":false,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><strong><?=$Q7_Title;?></strong></span></div>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="attachment-wrapper">
                                    <div class="control">
                                        <div class="button-wrap">

                                            <div class="button-wrapper continue">
                                                <div class="button nav enabled"><span><?=$Continue;?></span> </div>
                                            </div>
                                            <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="peIueBGcqVjx" data-parent="UiJJsG0PT1ft" data-model='{"id":"peIueBGcqVjx","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ7[0];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="e6GdKurMhahK" class="Border container" onclick="chk(26,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="OZsB0yUm8ezd" class="Border container" onclick="chk(26,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="OKx4MEVfBI1b" class="Border container" onclick="chk(26,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="rGjPAIjeQQap" class="Border container" onclick="chk(26,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="BpS46qCXWRZN" class="Border container" onclick="chk(26,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="pYfdrHS7r7Ds" data-parent="UiJJsG0PT1ft" data-model='{"id":"pYfdrHS7r7Ds","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ7[1];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="E2Z8oT2e6IvS" class="Border container" onclick="chk(27,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>

                                    </li>

                                    <li id="yMFlBY1RbQh1" class="Border container" onclick="chk(27,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="R958gdW2SWMI" class="Border container" onclick="chk(27,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="Jb56fwksd8ue" class="Border container" onclick="chk(27,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="NFLKlcth9Fj9" class="Border container" onclick="chk(27,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="V4N6hq8IFMgj" data-parent="UiJJsG0PT1ft" data-model='{"id":"V4N6hq8IFMgj","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ7[2];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="r0BvwiYAGwFN" class="Border container" onclick="chk(28,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="xPag4O9zIq4n" class="Border container" onclick="chk(28,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="HXJwoJny3eiX" class="Border container" onclick="chk(28,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="H2mBTntWL0VL" class="Border container" onclick="chk(28,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="l1w9xQ29NbnV" class="Border container" onclick="chk(28,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

                <li class="list-image active required  " id="ASzkt3u4Qi9i" data-parent="UiJJsG0PT1ft" data-model='{"id":"ASzkt3u4Qi9i","type":"list-image","name":"","required":true,"showPadlockIcon":false}'>
                    <div class="wrapper">
                        <div class="item">
                            <span></span>
                            <div class="arrow">
                                <div class="arrow-right"></div>
                            </div>
                        </div>
                        <div class="question"><span><?=$OptQ7[3];?></span></div>
                        <div class="content">
                            <div class="content-wrapper">

                                <div class="multiple"><?=$Multi;?></div>
                                <ul class="columns">

                                    <li id="oos1ZGFxIvN7" class="Border container" onclick="chk(29,1);">
                                        <input type="hidden" name="value" value="Strongly Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglyagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyAgree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[0];?></span></div>
                                                <div class="caption"><?=$StronglyAgree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="CTGCOr3yF7AD" class="Border container" onclick="chk(29,2);">
                                        <input type="hidden" name="value" value="Agree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/agree<?=$pic;?>.png" width="135" height="135" alt="<?=$Agree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                 <div class="letter"><span><?=$ABCD[1];?></span></div>
                                                <div class="caption"><?=$Agree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="p5cipZTYlITJ" class="Border container" onclick="chk(29,3);">
                                        <input type="hidden" name="value" value="Neutral" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/neutral<?=$pic;?>.png" width="135" height="135" alt="<?=$Neutral;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[2];?></span></div>
                                                <div class="caption"><?=$Neutral;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="E2uhbW9Zq5lu" class="Border container" onclick="chk(29,4);">
                                        <input type="hidden" name="value" value="Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/disagree<?=$pic;?>.png" width="135" height="135" alt="<?=$Disagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[3];?></span></div>
                                                <div class="caption"><?=$Disagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                    <li id="o6GLm2qtGcjj" class="Border container" onclick="chk(29,5);">
                                        <input type="hidden" name="value" value="Strongly Disagree" />
                                        <div class="tick-wrapper"></div>
                                        <span class="tick"></span>
                                        <div class="image-wrapper">
                                            <img src="images/lazy.png" data-original="images/stronglydisagree<?=$pic;?>.png" width="135" height="135" alt="<?=$StronglyDisagree;?>" />
                                        </div>
                                        <div class="text">

                                            <div class="label">
                                                <div class="letter"><span><?=$ABCD[4];?></span></div>
                                                <div class="caption"><?=$StronglyDisagree;?></div>
                                            </div>
                                        </div>
                                        <div class="aux ">
                                            <div class="bg"></div>
                                            <div class="bd"></div>
                                        </div>
                                    </li>

                                </ul>
                                <div class="clear"></div>
                                <div class="clear"></div>
                                <div class="message "><span></span>
                                    <div></div>
                                </div>
                                <div class="confirm container">

                                    <div class="button-wrapper confirm">
                                        <div class="button nav enabled"><span><?=$OK;?></span><span class="confirm"></span> </div>
                                    </div>
                                    <div class="text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </li>

            </ul>
            <div class="footer-confirm">
                <div class="persistent background"></div>
                <div class="wrapper">
                    <div class="content">

                        <div class="button-wrapper confirm">
                            <div class="button nav enabled hover-effect"><span><?=$OK;?></span><span class="confirm"></span> </div>
                        </div>
                        <div class="text">
                            <span class="default"><?=$Enter;?><strong><?=$Press;?></strong></span>
                            <span class="textarea"><?=$Enter;?><strong><?=$Press;?></strong></span>
                            <span class="multiple"><?=$Enter;?><strong><?=$Press;?></strong></span>
                        </div>

                    </div>
                </div>
            </div>
            <div id="fixed-footer" class="lightness-step">
                <div class="overlay"></div>
                <div class="persistent background"></div>
                <div class="nav-buttons">

                    <div class="button-wrapper up">
                        <div class="button nav enabled hover-effect"><span></span><span class="up"></span> </div>
                    </div>

                    <div class="button-wrapper down">
                        <div class="button nav enabled hover-effect"><span></span><span class="down"></span> </div>
                    </div>
                </div>
                <div class="button-wrapper by">
                    <a target="./" class="button general enabled">Powered by <strong>IT Department</strong> - Masafi Co. L.L.C</a>
                </div>
                <div class="clear"></div>
                <div class="content">
                    <div id="progress"></div>
                </div>

            </div>
            <div id="unfixed-footer" class="lightness-step">
                <div class="footer-message">
                    <div class="background"></div>
                    <div class="content"><span class="default-message"></span></div>
                </div>
                <div class="persistent background lightness-step"></div>
                <div class="content">
                    <div class="button-wrapper submit" onclick="sendata();">
                        <div class="button-text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                    </div>

                    <div class="button-wrapper review">
                        <div class="button general red enabled hover-effect" onclick="sendata();"><?=$Review;?></div>
                        <div class="button-text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                    </div>

                    <div class="phishing-notice primaryColor"></div>
                </div>

            </div>
        </div>

        <div id="0" class="outro screen defaultOutroBranded" data-field="true">
            <div class="content-wrapper">
                <div class="content">

                    <div class="media">

                        <div class="attachment" data-attachment='{"image":"images\/welldone.gif","width":"120","height":"120","video_source":"","video_id":""}'>
                            <img src="images/welldone.gif" data-original="" data-first-frame="images/welldone.gif" />
                        </div>

                    </div>

                    <div class="text">
                        <?=$ThankYou;?>
                    </div>

                    <div class="button-wrapper">
                        <a class="button general full enabled">Powered By<strong> IT Department</strong> - Masafi Co. L.L.C</a>
                    </div>

                </div>
            </div>
            <div class="footer">
                <div class="persistent-wrapper">
                    <div class="persistent background"></div>
                    <div class="persistent"></div>
                </div>
                <div class="overlay"></div>
                <div class="content">
                    <div class="button-wrapper">
                        <a class="button general full enabled hover-effect js-outro-button" target="_blank" style="">Powered By<strong>IT Department</strong> - Masafi Co. L.L.C</a>
                        <div class="button-text"><?=$Enter;?><strong><?=$Press;?></strong></div>
                    </div>
                </div>
                <div class="scroll-smooth"></div>
            </div>
        </div>
        <div id="background">
            <div></div>
        </div>
    </div>

    <form method="post" enctype="multipart/form-data" name="hrdata" id="hrdata">
        <input name="q1" id="q1" type="hidden" />
        <input name="q2" id="q2" type="hidden" />
        <input name="q3" id="q3" type="hidden" />
        <input name="q4" id="q4" type="hidden" />
        <input name="q5" id="q5" type="hidden" />
        <input name="q6" id="q6" type="hidden" />
        <input name="q7" id="q7" type="hidden" />
        <input name="q8" id="q8" type="hidden" />
        <input name="q9" id="q9" type="hidden" />
        <input name="q10" id="q10" type="hidden" />
        <input name="q11" id="q11" type="hidden" />
        <input name="q12" id="q12" type="hidden" />
        <input name="q13" id="q13" type="hidden" />
        <input name="q14" id="q14" type="hidden" />
        <input name="q15" id="q15" type="hidden" />
        <input name="q16" id="q16" type="hidden" />
        <input name="q17" id="q17" type="hidden" />
        <input name="q18" id="q18" type="hidden" />
        <input name="q19" id="q19" type="hidden" />
        <input name="q20" id="q20" type="hidden" />
        <input name="q21" id="q21" type="hidden" />
        <input name="q22" id="q22" type="hidden" />
        <input name="q23" id="q23" type="hidden" />
        <input name="q24" id="q24" type="hidden" />
        <input name="q25" id="q25" type="hidden" />
        <input name="q26" id="q26" type="hidden" />
        <input name="q27" id="q27" type="hidden" />
        <input name="q28" id="q28" type="hidden" />
        <input name="q29" id="q29" type="hidden" />
        <input name="q30" id="q30" type="hidden" />
        <input name="q31" id="q31" type="hidden" />
        <input name="q32" id="q32" type="hidden" />
        <input name="q33" id="q33" type="hidden" />
        <input name="lng" id="lng" type="hidden" value="<?=(!empty($lng))?$lng:"English";?>"/>
    </form>

    <ul id="texts" style="display:none;">
        <li id="keyboard">keyboard</li>
        <li id="key">Key</li>
        <li id="tab-button"><?=$OK;?></li>
        <li id="continue-button">Next please</li>
        <li id="button-tip-default"><?=$Enter;?><strong><?=$Press;?></strong></li>
        <li id="button-tip-multiple">button-tip-multiple</li>
        <li id="button-tip-textarea"><?=$Enter;?><strong><?=$Press;?></strong></li>
        <li id="review-button"><?=$Review;?></li>
        <li id="next-validation">Next validation</li>
        <li id="submit-button"><?=$IamAllDone;?></li>
        <li id="phishing-notice">Never submit passwords!</li>
        <li id="report-phishing">Report abuse</li>
        <li id="report-phishing-link">help/report-abuse/</li>
        <li id="multiple"><?=$Multi;?></li>
        <li id="other">Other</li>
        <li id="resizing">resizing</li>
        <li id="private">This masafi is in private mode. Please don't share this URL.</li>
        <li id="private-embed">This masafi is in private mode.</li>
        <li id="trial-private">This masafi is in Private mode and can only be accessed by you.</li>
        <li id="preview">preview</li>
        <li id="end">end</li>
        <li id="incomplete">Some mandatory fields are blank</li>
        <li id="default-text">Answer goes here...</li>
        <li id="share">Check this out!</li>
        <li id="y">Y</li>
        <li id="yes">Yes</li>
        <li id="n">N</li>
        <li id="no">No</li>
        <li id="success">Maybe you're smarter than you thought—and maybe not—but hopefully you learned a few facts that will be handy at a quiz night!</li>
        <li id="image-placeholder-1">Upload your logo or an image / video</li>
        <li id="image-placeholder-2">We’ll take care of the rest!</li>
        <li id="placeholder-description">Description text goes here...</li>
        <li id="progress-proportion">{{step}} of {{total}} answered</li>
        <li id="progress-percent">{{percent}}% <?=$Completed;?></li>
        <li id="meta-description">Built By Imran Nawab Khan, Masafi IT Department</li>
        <li id="advert-footer">Powered by <strong>IT Department</strong> - Masafi Co. L.L.C</li>
        <li id="advert-footer-core">Powered by <strong>IT Department</strong> - Masafi Co. L.L.C</li>
        <li id="advert-thankyou">Powered by <a target="_blank"><strong>IT Department</strong> - Masafi Co. L.L.C</a></li>
        <li id="legalyes">I accept</li>
        <li id="legalno">I don’t accept</li>
        <li id="type-select">Type or select an option</li>
        <li id="type-select-touch">Select an option</li>
        <li id="not-found"><?=$ErrorNoFound;?></li>
        <li id="banner-text">Ask awesomely...</li>
        <li id="banner-link">Powered by <strong>IT Department</strong> - Masafi Co. L.L.C</li>
        <li id="banner-link-core">Powered by <strong>IT Department</strong> - Masafi Co. L.L.C</li>
        <li id="payment_description_price">:
            <%=price%>
        </li>
        <li id="payment_description_advice"></li>
        <li id="payment_description_stripe"><span></span>
            <%=logo%>
        </li>
        <li id="credit_card_number"></li>
        <li id="cvc_number"></li>
        <li id="cvc_description"></li>
        <li id="credit_card_name"></li>
        <li id="expiry_month"></li>
        <li id="expiry_year"></li>
        <li id="expiry_date"></li>
        <li id="credit_card_number_error">credit_card_number_error</li>
        <li id="credit_card_cvc_error">credit_card_cvc_error</li>
        <li id="file-upload-choose"><b>Choose file</b></li>
        <li id="file-upload-drag">or <b>drag here</b></li>
        <li id="file-upload-uploading">Uploading...</li>
        <li id="file-upload-sizeLimit">Your file is too big</li>
        <li id="file-upload-maxSize">Size limit</li>
        <li id="file-upload-processing">Your file is still uploading, please wait...</li>
        <li id="file-upload-upload-error">An error occurred while uploading the file</li>
        <li id="file-upload-must-upload"><strong>Ooops!</strong> You must upload a file</li>
        <li id="textarea-newline-tip"><strong>SHIFT</strong> + <strong>ENTER</strong> to make a line break</li>
        <li id="ranking-field-tip">Drag and drop the choices...</li>
        <li id="shortcut">shortcut</li>
        <li id="legalquestion">legalquestion</li>
        <li id="yesnoanswer">yesnoanswer</li>
        <li id="proportional">proportional</li>
        <li id="correct">Please, correct the errors listed below</li>
        <li id="required"><?=$ErrorFill;?></li>
        <li id="duplicated"><strong>Mmm...</strong> Seems this value has already been entered by someone else</li>
        <li id="invalid"><strong>Careful!</strong> That value isn't valid!</li>
        <li id="invalid-date">Hmm…that date doesn't look valid</li>
        <li id="must-select"><?=$Error;?></li>
        <li id="must-enter"><strong>Ooops!</strong> You need an answer to keep going...</li>
        <li id="maxlength">Type no more than {{MAXLENGTH}} characters</li>
        <li id="terms">You must agree to the Terms &amp; Conditions</li>
        <li id="email">Mmm… That email does not look valid</li>
        <li id="website">Mmm… That web address does not exist</li>
        <li id="minmax">You must enter a number between {{MIN}} and {{MAX}}</li>
        <li id="min">You must enter a number greater than {{MIN}}</li>
        <li id="max">You must enter a number lower than {{MAX}}</li>
        <li id="review">{{NUM}} <?=$ReviewAns;?></li>
        <li id="connection">Oh no, you can’t seem to connect with the server right now…</li>
        <li id="server">Server error! Your request could not be processed.</li>
        <li id="slow-submission-on-submit">It's taking longer than usual to submit your response. Please leave this page open and we'll keep trying.</li>
        <li id="retrying-in-time-submission">Retrying in {{NEXT_TRY}}s</li>
        <li id="retrying-submission">Retrying...</li>
        <li id="retry-now">retry-now</li>
        <li id="form-down">The masafi {{NAME}}, is currently unavailable. Please try again in a few moments.</li>
        <li id="form-empty">There is no content yet!</li>
        <li id="fallback-alert">You are viewing this masafi in "Simple" mode.
            <br/>This is because your device is not yet supported on the masafi platform.</li>
        <li id="warning-close-when-submitting">We are still submitting your response. Navigating away from the page may cause your response to be lost.</li>
        <li id="and">&</li>
        <li id="pay">pay {{amount}}</li>
        <li id="fallback-warning-payment-unsupported">Sorry, your browser doesn’t support payments</li>
        <li id="fallback-warning-payment-required">Hey! A payment field in this masafi can’t load in your browser. To pay and submit your responses, please view this masafi in <a href="https://browsehappy.com" target="_blank">one of these browsers</a>.</li>
        <li id="fallback-warning-payment-not-required">Hey! A payment field in this masafi can’t load in your browser. To pay, please view this masafi in <a href="https://browsehappy.com" target="_blank">one of these browsers</a>—or submit without paying.</li>
        <li id="incorrect_number">The card number is incorrect.</li>
        <li id="incorrect_cvc">The card's security code is incorrect.</li>
        <li id="incomplete_number">Your card number is incomplete.</li>
        <li id="incomplete_expiry">Your card's expiration date is incomplete.</li>
        <li id="incomplete_cvc">Your card's security code is incomplete.</li>
        <li id="invalid_number">The card number is not a valid credit card number.</li>
        <li id="invalid_cvc">The card's security code is invalid.</li>
        <li id="invalid_expiry_month">The card's expiration month is invalid.</li>
        <li id="invalid_expiry_month_past">Your card's expiration date is in the past.</li>
        <li id="invalid_expiry_year_past">Your card's expiration year is in the past.</li>
        <li id="invalid_expiry_year">The card's expiration year is invalid.</li>
        <li id="invalid_name">Please enter the name that appears on your credit card.</li>
        <li id="expired_card">expired.</li>
        <li id="card_declined">declined.</li>
        <li id="processing_error">An error occurred while processing the card.</li>
        <li id="payment_sync">Price calculation is invalid, please try again</li>
        <li id="generic-error">Oops, something went wrong!</li>
        <li id="meta-image">images/share_masafi.jpg</li>
    </ul>

    <script type="text/javascript" src="js/spin.min.js"></script>

    <script type="text/javascript">
        var opts = {
            lines: 16, // The number of lines to draw
            length: 3, // The length of each line
            width: 3, // The line thickness
            radius: 14, // The radius of the inner circle
            color: '#eeeeee', // #rgb or #rrggbb
            speed: 2.1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false // Whether to use hardware acceleration
        };
        var target = document.getElementById('spin');
        var spinner = new Spinner(opts).spin(target);
    </script>

    <!--<script type="text/javascript" src="js/build/trackingClient.js"></script>-->

    <!-- common scripts -->

    <script type="text/javascript" src="js/custom-min.z.js"></script>

    <!-- end of common scripts -->

    <script type="text/javascript">
        var jumps = [];
        freezeframe_options = {
            animation_icon_image: false,
            loading_background_image: false,
            loading_background_color: "transparent",
            loading_background_position: "top left",
            trigger_event: "focus",
            loading_fade_in_speed: 1,
            auto_run: false
        }
		
        function chk(Question, Answer) {
            var Ans;
            switch (Answer) {
                case 1:
                    Ans = "Strongly Agree";
                    break;
                case 2:
                    Ans = "Agree";
                    break;
                case 3:
                    Ans = "Neutral";
                    break;
                case 4:
                    Ans = "Disagree";
                    break;
                case 5:
                    Ans = "Strongly Disagree";
                    break;
            }

            $("#q" + Question).val(Ans);
            //Qprogress(Question);
            console.log("#q" + Question + " - " + Ans);
        }

        function sendata() {
			Getlocation();
			GetDate();
			GetDepartment();
			
			//for (i = 1; i < 33; i++) {
				
				//var question = $("#q"+i).val().length
			
				if ($("#q1,#q2,#q3,#q4,#q5,#q6,#q7,#q8,#q9,#q10,#q10,#q12,#q13,#q14,#q15,#q16,#q17,#q18,#q19,#q20,#q21,#q22,#q23,#q24,#q25,#q26,#q27,#q28,#q29,#q30,#q31,#q32,#q33").val().length == 0) {
	
								$(".default-message").text("<?=$ErrorAll;?>");
								$("#unfixed-footer").addClass("review");
								$("#unfixed-footer .footer-message").addClass("review");
	
				} else {
		
					$.ajax({
						url: 'finished.php',
						dataType: 'text',
						type: 'post',
						contentType: 'application/x-www-form-urlencoded',
						data: $("#hrdata").serialize(),
						success: function( data, textStatus, jQxhr ){
							if (data == "return") {
								$(".default-message").text("Kindly answer all the questions.");
								$("#unfixed-footer").addClass("review");
								$("#unfixed-footer .footer-message").addClass("review");
															
							} else {
								$("#unfixed-footer").removeClass("review");
								$("#unfixed-footer .footer-message").removeClass("review");
								$(".form").css("display","none");
								$(".screen, .screen .attachment img").css("display","block");
							}				
						},
						error: function( jqXhr, textStatus, errorThrown ){
							console.log( errorThrown );
						}
					});
	
				}
				
			//}
	
        }
		
        function Getlocation() {
			<?php 
			$i = 0;
			foreach ($Cities as $value) {
				$CitiesArray .= "{id:\"".$value."\", name:\"".$CitiesVal[$i]."\"}," . "\n";		
				$i++; 
			}
			?>
			
            var n = $("#aLHrdoD8UmcQ input[type='text']").val();
			var myArray = [
			<?=$CitiesArray;?>
			]
			// grab the Array item which matchs the id 
			//var item = myArray.find(item => item.id === n);
			var obj = $.grep(myArray, function(obj){return obj.id === n;})[0];
            $("#q30").val(obj.name);
			console.log(obj.name);
        }

        function GetDate() {
            var n = $("#g0sy8wVDhYS0 input[type='text']").val();
            $("#q31").val(n);
            console.log(n);
        }

        function GetDepartment() {
			
			<?php 
			$k = 0;
			foreach ($Departments as $value) {
				$DepartArray .= "{id:\"".$value."\", name:\"".$DeptValue[$k]."\"}," . "\n";		
				$k++; 
			}
			?>
			
            var n = $("#HkGSk02lBxU1 input[type='text']").val();
			var myArray = [
			<?=$DepartArray;?>
			]
			// grab the Array item which matchs the id 
			//var item = myArray.find(item => item.id === n);
			var obj = $.grep(myArray, function(obj){return obj.id === n;})[0];
            $("#q32").val(obj.name);
            console.log(obj.name);
        }

        function MasafiExp(n) {
            $("#q33").val(n);
            console.log(n);
        }

        $("#aLHrdoD8UmcQ input[type='text']").bind("enterKey", function(e) {
            Getlocation();
        });

        $("#g0sy8wVDhYS0 input[type='text']").bind("enterKey", function(e) {
            GetDate();
        });

        $("#HkGSk02lBxU1 input[type='text']").bind("enterKey", function(e) {
            GetDepartment();
        });

        $("#aLHrdoD8UmcQ input[type='text'],#g0sy8wVDhYS0 input[type='text'],HkGSk02lBxU1 input[type='text']").keyup(function(e) {
            if (e.keyCode == 13) {
                $(this).trigger("enterKey");
            }
        });

        function rate(Answer) {
            $("#q17").val(Answer);
        }
		
        function checksubmit() {
            Qprogress(15);
        }

        function Qprogress(Question) {
            var calc = Math.round(((Question === 15) ? Question : Question + 2) * (100 / 15));
            $("#fixed-footer .content #progress .label span").text(calc + "% <?=$Completed;?>");
            $("#fixed-footer .content #progress .bar div.progress").css("width", calc + "%");
        }

        $("#progress").css("visibility", "visible");
        $("#progress").css("opacity", "1");
		
		$(".urdu").click(function(){
			window.location.href = '?lng=urdu';
		});
		
		$(".hindi").click(function(){
			window.location.href = '?lng=hindi';
		});
		
		$(".masafihrdash").click(function(){
			window.location.href = './';
		});
		
		$(window).load(function() {
			$(".input-wrapper input[class='secondaryColor']").attr("placeholder","<?=$SelectTitle;?>");
		});
		

	
    </script> 
    <script type="text/javascript" src="js/main-min.z.js"></script>

</body>

</html>