! function i(n, a, s) {
    function o(t, e) {
        if (!a[t]) {
            if (!n[t]) {
                var r = "function" == typeof require && require;
                if (!e && r) return r(t, !0);
                if (l) return l(t, !0);
                throw (e = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND", e
            }
            r = a[t] = {
                exports: {}
            }, n[t][0].call(r.exports, function(e) {
                return o(n[t][1][e] || e)
            }, r, r.exports, i, n, a, s)
        }
        return a[t].exports
    }
    for (var l = "function" == typeof require && require, e = 0; e < s.length; e++) o(s[e]);
    return o
}({
    1: [function(e, t, r) {
        "use strict";
        var d = e("@trustpilot/trustbox-framework-vanilla/modules/slider"),
            i = s(e("@trustpilot/trustbox-framework-vanilla/modules/impression")),
            n = e("@trustpilot/trustbox-framework-vanilla/modules/api"),
            v = e("@trustpilot/trustbox-framework-vanilla/modules/dom"),
            f = e("@trustpilot/trustbox-framework-vanilla/modules/utils"),
            a = e("@trustpilot/trustbox-framework-vanilla/modules/queryString"),
            p = s(e("@trustpilot/trustbox-framework-vanilla/modules/templates/reviews")),
            m = e("@trustpilot/trustbox-framework-vanilla/modules/templates/stars"),
            g = e("@trustpilot/trustbox-framework-vanilla/modules/templates/logo"),
            h = e("@trustpilot/trustbox-framework-vanilla/modules/templating"),
            w = e("@trustpilot/trustbox-framework-vanilla/modules/templates/summary"),
            b = s(e("@trustpilot/trustbox-framework-vanilla/modules/reviewFilterText")),
            y = s(e("./styleFirstVisibleReview")),
            e = s(e("@trustpilot/trustbox-framework-vanilla/modules/init"));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        i.default.attachImpressionHandler();

        function o(e) {
            var t, r, i, n, a, s, o, l, u, c = e.baseData,
                e = e.locale;
            c.settings.customStylesAllowed && (O && (0, f.setFont)(O), j && (0, f.setTextColor)(j)), 0 === c.businessEntity.numberOfReviews.total ? (o = {
                baseData: c,
                url: E(c.links.evaluateUrl)
            }, l = o.baseData.translations, o = o.url, u = document.getElementById("tp-widget-wrapper"), l = {
                title: l.noreviews,
                subtitle: l.firstreviewer,
                url: o
            }, o = (0, w.makeEmptySummary)(l), (0, f.setHtmlContent)(u, o, !1)) : (u = (l = {
                baseData: c,
                locale: e
            }).locale, l = l.baseData, o = document.getElementById("trust-score"), t = document.getElementById("translations-basedon"), r = document.getElementById("profileLink"), i = l.businessEntity.numberOfReviews, n = l.links.profileUrl, a = l.starsString, s = l.translations, i = i.total, (0, m.populateStars)(l, "tp-widget-stars"), (0, g.populateLogo)(r), (0, v.populateElements)([{
                element: o,
                string: a
            }, {
                element: t,
                string: s.basedon,
                substitutions: {
                    "[NOREVIEWS]": (0, f.insertNumberSeparator)(i, u)
                }
            }]), o = E(n), r.href = o, (a = document.querySelector("#translations-basedon a")) && (a.href = o), (0, f.addEventListener)(r, "click", L("LogoClick")), l.reviews && 0 < l.reviews.length && (t = (0, b.default)(u, N, T), s = document.getElementById("tp-widget-reviews-filter-label"), (0, f.setTextContent)(s, t)), c.reviews && 0 < c.reviews.length && (i = {
                locale: e,
                reviews: c.reviews
            }, n = i.locale, i = i.reviews, a = {
                slider: document.getElementById("tp-widget-reviews"),
                sliderContainer: document.getElementById("tp-widget-reviews-wrapper")
            }, r = {
                prevArrow: document.getElementById("review-arrow-left"),
                nextArrow: document.getElementById("review-arrow-right")
            }, s = {
                reviewLinkGenerator: function(e) {
                    return E(e.reviewUrl)
                },
                textLength: 80
            }, n = (0, p.default)(n.toLowerCase(), s), [].slice.call(document.getElementsByClassName("svg-slider-arrow")).forEach(function(e) {
                return (0, v.populateElements)([{
                    element: e,
                    string: (0, h.mkElemWithSvgLookup)("arrowSlider")
                }, {
                    element: e,
                    string: (0, h.mkElemWithSvgLookup)("arrowSlider")
                }])
            }), s = {
                prevPage: L("Prev"),
                nextPage: L("Next")
            }, i = new d.ReviewSlider(i, a, n, {
                reviewClass: "tp-widget-review",
                reviewsPerPage: [{
                    minWidth: 1250,
                    reviewsForWidth: 4
                }, {
                    minWidth: 1e3,
                    reviewsForWidth: 3
                }, {
                    minWidth: 750,
                    reviewsForWidth: 2
                }, {
                    minWidth: 0,
                    reviewsForWidth: 1
                }]
            }), new d.ArrowControls(i, r, {
                callbacks: s,
                disabledClass: "display-none"
            }).initialize(), new y.default(i, a.slider).initialize()))
        }
        var L = function(e) {
                return function() {
                    return i.default.engagement({
                        source: e
                    })
                }
            },
            E = (0, f.addUtmParams)("Carousel"),
            a = (0, a.getAsObject)(),
            l = a.businessunitId,
            u = a.locale,
            c = a.theme,
            I = a.reviewLanguages,
            N = a.stars,
            T = a.tags,
            k = a.location,
            R = a.templateId,
            O = a.fontFamily,
            j = a.textColor,
            _ = {
                businessUnitId: l,
                locale: u,
                reviewLanguages: I,
                reviewStars: N,
                reviewTagValue: T,
                includeReviews: !0,
                reviewsPerPage: 15,
                theme: void 0 === c ? "light" : c,
                location: k
            };
        (0, e.default)(function() {
            return (0, n.fetchServiceReviewData)(R)(_, o)
        })
    }, {
        "./styleFirstVisibleReview": 2,
        "@trustpilot/trustbox-framework-vanilla/modules/api": 31,
        "@trustpilot/trustbox-framework-vanilla/modules/dom": 38,
        "@trustpilot/trustbox-framework-vanilla/modules/impression": 40,
        "@trustpilot/trustbox-framework-vanilla/modules/init": 41,
        "@trustpilot/trustbox-framework-vanilla/modules/queryString": 43,
        "@trustpilot/trustbox-framework-vanilla/modules/reviewFilterText": 44,
        "@trustpilot/trustbox-framework-vanilla/modules/slider": 48,
        "@trustpilot/trustbox-framework-vanilla/modules/templates/logo": 54,
        "@trustpilot/trustbox-framework-vanilla/modules/templates/reviews": 55,
        "@trustpilot/trustbox-framework-vanilla/modules/templates/stars": 56,
        "@trustpilot/trustbox-framework-vanilla/modules/templates/summary": 57,
        "@trustpilot/trustbox-framework-vanilla/modules/templating": 58,
        "@trustpilot/trustbox-framework-vanilla/modules/utils": 63
    }],
    2: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function n(e, t) {
            if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
            this.slider = e, this.sliderDomElement = t
        }
        Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            function(e, t, r) {
                t && i(e.prototype, t), r && i(e, r)
            }(n, [{
                key: "initialize",
                value: function() {
                    this.slider.attachObserver(this), this.slider.initialize(), this.onUpdate()
                }
            }, {
                key: "onUpdate",
                value: function() {
                    try {
                        var e, t;
                        this.sliderDomElement.closest("html").clientHeight < 140 && (e = this.slider.getFirstVisibleReviewIndex(), t = this.sliderDomElement.querySelectorAll(".text-single-line"), this.makeFirstVisibleReviewTextSpanOneLine(e), this.makeAllReviewsExceptFirstVisibleSpanTwoLines(t))
                    } catch (e) {}
                }
            }, {
                key: "makeFirstVisibleReviewTextSpanOneLine",
                value: function(e) {
                    this.sliderDomElement.childNodes[e].querySelector(".text").classList.add("text-single-line")
                }
            }, {
                key: "makeAllReviewsExceptFirstVisibleSpanTwoLines",
                value: function(e) {
                    setTimeout(function() {
                        e.forEach(function(e) {
                            e.classList.remove("text-single-line")
                        })
                    }, 1e3)
                }
            }, {
                key: "onPageChange",
                value: function() {
                    this.onUpdate()
                }
            }, {
                key: "onResize",
                value: function() {
                    this.onUpdate()
                }
            }]), r.default = n
    }, {}],
    38: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.populateElements = r.removeClass = r.addClass = void 0;
        var i = e("./utils");

        function n(e, t) {
            return !!e && -1 !== ((e = e.getAttribute("class")) ? e.split(" ") : "").indexOf(t)
        }
        r.addClass = function(e, t) {
            var r;
            e && (r = (r = e.getAttribute("class")) ? r.split(" ") : [], n(e, t) || (r = [].concat(function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                    return r
                }
                return Array.from(e)
            }(r), [t]).join(" "), e.setAttribute("class", r)))
        }, r.removeClass = function(e, t) {
            var r;
            e && (r = e.className.split(" "), e.className = r.filter(function(e) {
                return e !== t
            }).join(" "))
        }, r.populateElements = function(e) {
            e.forEach(function(e) {
                var t = e.element,
                    r = e.string,
                    e = e.substitutions;
                r ? (0, i.setHtmlContent)(t, (0, i.makeTranslations)(void 0 === e ? {} : e, r), !1) : (0, i.removeElement)(t)
            })
        }
    }, {
        "./utils": 63
    }],
    43: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getAsObject = r.getQueryParams = void 0;
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            },
            n = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) {
                    var r = t,
                        i = [],
                        n = !0,
                        t = !1,
                        a = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !r || i.length !== r); n = !0);
                    } catch (e) {
                        t = !0, a = e
                    } finally {
                        try {
                            !n && o.return && o.return()
                        } finally {
                            if (t) throw a
                        }
                    }
                    return i
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            a = e("./fn");

        function s(e) {
            var t = ["?", "#"];
            return (0, a.compose)(a.pairsToObject, function(e) {
                return e.split("&").filter(Boolean).map(function(e) {
                    var e = e.split("="),
                        e = n(e, 2),
                        t = e[0],
                        e = e[1];
                    try {
                        return [decodeURIComponent(t), decodeURIComponent(e)]
                    } catch (e) {}
                }).filter(Boolean)
            }, function(e) {
                return -1 !== t.indexOf(e[0]) ? e.substring(1) : e
            })(e)
        }

        function o() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location,
                t = s(e.search),
                e = s(e.hash);
            return i({}, t, e)
        }
        r.getQueryParams = o, r.getAsObject = o
    }, {
        "./fn": 39
    }],
    40: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            },
            l = e("./queryString"),
            i = e("./utils"),
            u = n(e("./rootUri")),
            c = n(e("./xhr"));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function d(e, t) {
            var r, i = {};
            for (r in e) 0 <= t.indexOf(r) || Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
            return i
        }

        function v(e, t) {
            var r = t.session,
                i = t.testId,
                t = t.sessionExpiry,
                n = (0, l.getAsObject)(),
                a = n.group,
                n = n.businessunitId;
            a && t && (n = "TrustboxSplitTest_" + n, a = encodeURIComponent(JSON.stringify({
                group: a,
                session: r,
                testId: i
            })), r = t, i = "domain=" + window.location.hostname.replace(/^.*\.([^.]+\.[^.]+)/, "$1"), document.cookie = [n + "=" + a, "path=/", r, i, "samesite=none", "secure"].join("; "), document.cookie = [n + "-legacy=" + a, "path=/", r, i].join("; "))
        }

        function a(e, t) {
            v(0, t);
            e = e, r = (t = t).anonymousId, t.sessionExpiry, t = d(t, ["anonymousId", "sessionExpiry"]), i = (s = (0, l.getAsObject)()).businessunitId, n = s.templateId, s = d(s, ["businessunitId", "templateId"]), a = o({}, s, t, s.group && r ? {
                userId: r
            } : {
                nosettings: 1
            }, {
                businessUnitId: i,
                widgetId: n
            }), t = Object.keys(a).map(function(e) {
                return e + "=" + encodeURIComponent(a[e])
            }).join("&");
            var r, i, n, a, s = (0, u.default)() + "/stats/" + e + "?" + t;
            try {
                (0, c.default)({
                    url: s
                })
            } catch (e) {}
        }
        var s;
        r.default = {
            engagement: function(e) {
                a("TrustboxEngagement", e)
            },
            attachImpressionHandler: function() {
                (0, i.addEventListener)(window, "message", function(e) {
                    if ("string" == typeof e.data) {
                        var t = void 0;
                        try {
                            t = {
                                data: JSON.parse(e.data)
                            }
                        } catch (t) {
                            return
                        }
                        "setId" === t.data.command ? (s = t.data.widgetId, window.parent.postMessage(JSON.stringify({
                            command: "impression",
                            widgetId: s
                        }), "*")) : ("impression-received" === t.data.command && (delete t.data.command, a("TrustboxImpression", t.data)), "trustbox-in-viewport" === t.data.command && (delete t.data.command, a("TrustboxView", t.data)))
                    }
                })
            }
        }
    }, {
        "./queryString": 43,
        "./rootUri": 45,
        "./utils": 63,
        "./xhr": 64
    }],
    63: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.showTrustBox = r.setTextContent = r.setTextColor = r.setFont = r.setHtmlContent = r.sanitizeHtmlProp = r.sanitizeColor = r.removeElement = r.makeTranslations = r.handlePopoverPosition = r.insertNumberSeparator = r.getTrustpilotBusinessUnitId = r.getOnPageReady = r.addUtmParams = r.addEventListener = void 0;
        var a = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) {
                    var r = t,
                        i = [],
                        n = !0,
                        t = !1,
                        a = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !r || i.length !== r); n = !0);
                    } catch (e) {
                        t = !0, a = e
                    } finally {
                        try {
                            !n && o.return && o.return()
                        } finally {
                            if (t) throw a
                        }
                    }
                    return i
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            n = e("./dom"),
            e = (e("./models/styleAlignmentPositions"), e("./rootUri")),
            s = (e = e) && e.__esModule ? e : {
                default: e
            };

        function i(t, e, r) {
            t && (t.addEventListener ? t.addEventListener(e, r) : t.attachEvent("on" + e, function(e) {
                (e = e || window.event).preventDefault = e.preventDefault || function() {
                    e.returnValue = !1
                }, e.stopPropagation = e.stopPropagation || function() {
                    e.cancelBubble = !0
                }, r.call(t, e)
            }))
        }

        function o(e) {
            return "string" != typeof e ? e : e.replace(/(<\/?(?:p|b|i|li|ul|a|strong)\/?>)|(?:<\/?.*?\/?>)/gi, "$1")
        }

        function l(t) {
            return function(e) {
                return "" + e + (-1 === e.indexOf("?") ? "?" : "&") + "utm_medium=trustbox&utm_source=" + t
            }
        }

        function u(e, t) {
            function r(e) {
                return 255 < e ? 255 : e < 0 ? 0 : e
            }
            var i = !1,
                n = ("#" === e[0] && (e = e.slice(1), i = !0), parseInt(e, 16));
            return n ? (n = [r((n >> 16) + t), r((n >> 8 & 255) + t), r((255 & n) + t)].map(function(e) {
                return e <= 15 ? "0" + e.toString(16) : e.toString(16)
            }), (i ? "#" : "") + (t = a(n, 3))[0] + t[1] + t[2]) : e
        }

        function c(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                e = "#" === e[0] ? parseInt(e.slice(1), 16) : parseInt(e, 16);
            return "rgba(" + (e >> 16) + "," + (e >> 8 & 255) + "," + (255 & e) + "," + t + ")"
        }
        r.addEventListener = i, r.addUtmParams = l, r.getOnPageReady = function() {
            return new Promise(function(e) {
                function t() {
                    setTimeout(function() {
                        e()
                    }, 0)
                }
                "complete" === document.readyState ? t() : i(window, "load", function() {
                    t()
                })
            })
        }, r.getTrustpilotBusinessUnitId = function() {
            var e = "46d6a890000064000500e0c3";
            return 0 === e.indexOf("#") ? "46d6a890000064000500e0c3" : e
        }, r.insertNumberSeparator = function(t, e) {
            try {
                t.toLocaleString()
            } catch (e) {
                return t
            }
            return t.toLocaleString(e || "en-US")
        }, r.handlePopoverPosition = function(e, t, r, i) {
            var n, a, s = t.getBoundingClientRect(),
                r = r.getBoundingClientRect(),
                e = e.getBoundingClientRect();
            s.left < r.left ? (t.style.left = r.left - e.left + "px", t.style.right = "auto", a = t.getBoundingClientRect(), n = getComputedStyle(i).left, i.style.left = "calc(" + n + " + " + Math.floor(s.left - a.left) + "px)") : s.right > r.right && (t.style.right = e.right - r.right + "px", t.style.left = "auto", n = t.getBoundingClientRect(), a = getComputedStyle(i).left, i.style.left = "calc(" + a + " + " + Math.floor(s.right - n.right) + "px)")
        }, r.makeTranslations = function(r, e) {
            return e ? Object.keys(r).reduce(function(e, t) {
                return e.split(t).join(r[t])
            }, e) : ""
        }, r.removeElement = function(e) {
            if (e && e.parentNode) return e.parentNode.removeChild(e)
        }, r.sanitizeColor = function(e) {
            return "string" == typeof e && /^#(?:[\da-fA-F]{3}){1,2}$/.test(e) ? e : null
        }, r.sanitizeHtmlProp = function(e) {
            return e = "string" == typeof e ? (e = (e = e.replaceAll(">", "")).replaceAll("<", "")).replaceAll('"', "") : e
        }, r.setHtmlContent = function(e, t) {
            e && (e.innerHTML = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2] ? o(t) : t)
        }, r.setFont = function(e) {
            var t = (0, s.default)(),
                r = e.replace(/\s/g, "-").toLowerCase(),
                i = document.createElement("link"),
                t = (i.rel = "stylesheet", i.href = t + "/fonts/" + r + ".css", document.head.appendChild(i), e.replace(/\+/g, " ")),
                r = document.createElement("style");
            r.appendChild(document.createTextNode('\n    * {\n      font-family: inherit !important;\n    }\n    body {\n      font-family: "' + t + '", sans-serif !important;\n    }\n    ')), document.head.appendChild(r)
        }, r.setTextColor = function(e) {
            var t = document.createElement("style");
            t.appendChild(document.createTextNode("\n      * {\n        color: inherit !important;\n      }\n      body {\n        color: " + e + " !important;\n      }\n      .bold-underline {\n        border-bottom-color: " + e + " !important;\n      }\n      .bold-underline:hover {\n        border-color: " + u(e, -30) + " !important;\n      }\n      .secondary-text {\n        color: " + c(e, .6) + " !important;\n      }\n      .secondary-text-arrow {\n        border-color: " + c(e, .6) + " transparent transparent transparent !important;\n      }\n      .read-more {\n        color: " + e + " !important;\n      }\n    ")), document.head.appendChild(t)
        }, r.setTextContent = function(e, t) {
            e && ("innerText" in e ? e.innerText = t : e.textContent = t)
        }, r.showTrustBox = function(e, t) {
            var r = document.getElementsByTagName("body")[0],
                i = document.getElementById("tp-widget-wrapper");
            (0, n.addClass)(r, e), (0, n.addClass)(i, "visible"), t || (0, n.addClass)(r, "first-reviewer")
        }
    }, {
        "./dom": 38,
        "./models/styleAlignmentPositions": 42,
        "./rootUri": 45
    }],
    56: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.populateStars = r.makeStars = void 0;

        function a(e) {
            var t = e.num,
                r = void 0 === (r = e.trustScore) ? null : r,
                i = void 0 === (i = e.wrapperClass) ? "" : i,
                e = e.color,
                n = Math.floor(t),
                a = t === n ? "" : " tp-stars--" + n + "--half",
                e = (0, l.sanitizeColor)(e);
            return (0, s.div)({
                class: i
            }, (0, s.mkElemWithSvgLookup)("stars", e ? "tp-stars-custom-color" : "tp-stars tp-stars--" + n + a, {
                rating: t,
                trustScore: r || t,
                color: e
            }))
        }
        var s = e("../templating"),
            o = e("../dom"),
            l = e("../utils");
        r.makeStars = a, r.populateStars = function(e) {
            var e = e.businessEntity,
                t = e.stars,
                r = e.trustScore,
                e = e.numberOfReviews.total,
                i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "tp-widget-stars",
                n = (0, l.sanitizeColor)(arguments[2]),
                i = "string" == typeof i ? document.getElementById(i) : i;
            (0, o.populateElements)([{
                element: i,
                string: a({
                    num: e ? t : 0,
                    trustScore: r,
                    color: n
                })
            }])
        }
    }, {
        "../dom": 38,
        "../templating": 58,
        "../utils": 63
    }],
    54: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.populateLogo = r.makeLogo = void 0;

        function i() {
            return (0, n.mkElemWithSvgLookup)("logo")
        }
        var n = e("../templating"),
            a = e("../dom");
        r.makeLogo = i, r.populateLogo = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tp-widget-logo",
                e = "string" == typeof e ? document.getElementById(e) : e;
            (0, a.populateElements)([{
                element: e,
                string: i()
            }])
        }
    }, {
        "../dom": 38,
        "../templating": 58
    }],
    57: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.makeEmptySummary = void 0;
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            },
            a = e("../templating"),
            s = e("./stars"),
            o = e("./logo"),
            l = e("../utils");
        var u = "horizontal",
            c = function(e) {
                return e ? {
                    rel: "nofollow"
                } : {}
            },
            d = function(e) {
                var t = e.subtitle,
                    r = e.url,
                    i = e.hasLogo,
                    e = e.nofollow,
                    t = t && (0, l.makeTranslations)({}, t),
                    t = [t && (0, a.span)({
                        class: "tp-widget-empty-vertical__subtitle"
                    }, t), r && (0, a.a)(n({
                        class: "tp-widget-empty-vertical__logo",
                        href: r,
                        target: "_blank"
                    }, c(e)), (0, o.makeLogo)()), i && !r && (0, a.span)({
                        class: "tp-widget-empty-vertical__logo"
                    }, (0, o.makeLogo)())].filter(Boolean);
                return a.div.apply(void 0, [{
                    class: "tp-widget-empty-vertical__subtitle-wrapper"
                }].concat(function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                    return Array.from(e)
                }(t)))
            };
        r.makeEmptySummary = function(e) {
            return e.orientation === u ? (r = (t = e).title, i = e.url, t = e.nofollow, r = (0, l.makeTranslations)({}, r), (0, a.div)({
                class: "tp-widget-empty-horizontal"
            }, (0, a.span)({
                class: "tp-widget-empty-horizontal__title"
            }, r), (0, a.a)(n({
                class: "tp-widget-empty-horizontal__logo",
                href: i,
                target: "_blank"
            }, c(t)), (0, o.makeLogo)()))) : (r = e, i = (0, l.makeTranslations)({}, r.title), r = d(r), (0, a.div)({
                class: "tp-widget-empty-vertical"
            }, (0, a.span)({
                class: "tp-widget-empty-vertical__title"
            }, i), (0, s.makeStars)({
                num: 0,
                wrapperClass: "tp-widget-empty-vertical__stars"
            }), r));
            var t, r, i
        }
    }, {
        "../templating": 58,
        "../utils": 63,
        "./logo": 54,
        "./stars": 56
    }],
    58: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.mkElemWithSvgLookup = r.span = r.div = r.a = void 0;

        function a(t) {
            return Object.keys(t).map(function(e) {
                return e + '="' + (0, s.sanitizeHtmlProp)(t[e]) + '"'
            }).join(" ")
        }

        function i(n) {
            return function(e) {
                for (var t = arguments.length, r = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                return "<" + n + " " + a(e) + ">" + (e = r, [].concat.apply([], e).join("\n")) + "</" + n + ">"
            }
        }
        var n = e("./assets/svg"),
            s = e("./utils"),
            e = i("a"),
            o = i("div"),
            l = (i("img"), i("label"), i("span"));
        r.a = e, r.div = o, r.span = l, r.mkElemWithSvgLookup = function(e) {
            return o({
                class: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : ""
            }, n.svgMap[e](arguments[2]))
        }
    }, {
        "./assets/svg": 36,
        "./utils": 63
    }],
    41: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = e("./communication"),
            n = e("./templates/errorFallback");
        r.default = function(e) {
            var t = !1;
            (0, i.onPong)(function() {
                t = !0, "function" == typeof e && e()
            }), (0, i.ping)(), setTimeout(function() {
                t || (0, n.errorFallback)()
            }, 500)
        }
    }, {
        "./communication": 37,
        "./templates/errorFallback": 52
    }],
    55: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            c = e("../templating"),
            d = i(e("../smartAge")),
            v = e("./stars"),
            f = e("../text"),
            p = e("../translations"),
            m = e("../typeLabel"),
            g = i(m);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var h = function(e) {
            return (0, c.div)({
                class: "tp-widget-review__source__information"
            }, [(0, c.div)({
                class: "tp-widget-review__source__arrow"
            }), (0, c.div)({
                class: "information-title"
            }, e.tooltipTitle()), (0, c.div)({
                class: "information-text"
            }, e.tooltipContent())])
        };
        r.default = function(o) {
            var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            return function(e) {
                function t() {
                    return i ? (0, c.a)({
                        href: i(e),
                        target: "_blank",
                        rel: "nofollow"
                    }, c.div.apply(void 0, arguments)) : c.div.apply(void 0, arguments)
                }
                r = "function" == typeof(a = l), n = null !== a && "object" === (void 0 === a ? "undefined" : u(a)), s = n ? a : {};
                var r = {
                        reviewLinkGenerator: r ? a : n ? a.reviewLinkGenerator : null,
                        textLength: s.textLength,
                        starColor: s.starColor,
                        importedReviews: s.importedReviews,
                        showReviewSource: s.showReviewSource
                    },
                    i = r.reviewLinkGenerator,
                    n = r.textLength,
                    a = void 0 === n ? 85 : n,
                    s = r.showReviewSource,
                    n = void 0 !== s && s;
                return (0, c.div)({
                    class: "tp-widget-review" + (r.importedReviews ? " tp-widget-review--imported" : "")
                }, (0, c.div)({
                    class: "top-row"
                }, [(0, c.div)({
                    class: "tp-widget-stars"
                }, (0, v.makeStars)({
                    num: e.stars,
                    color: r.starColor
                })), (s = o, r = e, (s = (0, g.default)(s, r)).labelType === m.LabelTypes.NOT_VERIFIED ? "" : (r = (0, c.div)({
                    class: "label-icon"
                }, [s.icon(), h(s)]), s = (0, c.div)({
                    class: "label-text"
                }, s.label()), (0, c.div)({
                    class: "tp-widget-review__source popover-activator"
                }, [(0, c.div)({
                    class: "verification-label-wrapper"
                }, [(0, c.div)({
                    class: "verification-label"
                }, [r, s])])])))]), e.title ? t({
                    class: "header"
                }, (0, f.escapeHtml)(e.title)) : "", t({
                    class: "text"
                }, (0, f.truncateText)(e.text || e.content, a)), t({
                    class: "date-and-user-info-wrapper"
                }, [(0, c.div)({
                    class: "name secondary-text"
                }, e.consumer.displayName + ","), (0, c.div)({
                    class: "date secondary-text"
                }, (0, d.default)(o, e.createdAt))]), n ? (0, c.div)({
                    class: "tp-widget-review__source"
                }, [(r = o, (s = e.verifiedBy) ? (0, p.getFrameworkTranslation)("reviews.collectedVia", (0, p.formatLocale)(r), {
                    "[source]": s
                }) : (0, p.getFrameworkTranslation)("reviews.verifiedVia", (0, p.formatLocale)(r), {
                    "[source]": "Trustpilot"
                }))]) : null)
            }
        }
    }, {
        "../smartAge": 51,
        "../templating": 58,
        "../text": 59,
        "../translations": 61,
        "../typeLabel": 62,
        "./stars": 56
    }],
    48: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.ArrowControls = r.ReviewSlider = void 0;
        var i = a(e("./reviewSlider")),
            n = a(e("./arrowControls")),
            e = a(e("./paginationControls"));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        r.ReviewSlider = i.default, r.ArrowControls = n.default, e.default
    }, {
        "./arrowControls": 46,
        "./paginationControls": 49,
        "./reviewSlider": 50
    }],
    44: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });

        function n(e, t) {
            var r = "reviewFilters.byLatest",
                i = {},
                e = (0, a.formatLocale)(e);
            switch (t.length) {
                case 4:
                    r = "reviewFilters.byStars4", i["[star1]"] = t[0], i["[star2]"] = t[1], i["[star3]"] = t[2], i["[star4]"] = t[3];
                    break;
                case 3:
                    r = "reviewFilters.byStars3", i["[star1]"] = t[0], i["[star2]"] = t[1], i["[star3]"] = t[2];
                    break;
                case 2:
                    r = "reviewFilters.byStars2", i["[star1]"] = t[0], i["[star2]"] = t[1];
                    break;
                case 1:
                    r = "reviewFilters.byStars1", i["[star1]"] = t[0]
            }
            return (0, a.getFrameworkTranslation)(r, e, i)
        }
        var a = e("./translations");
        r.default = function(e, t, r) {
            var i = (0, a.formatLocale)(e);
            return r ? (0, a.getFrameworkTranslation)("reviewFilters.byFavoriteOrTag", i) : t && !["1", "2", "3", "4", "5"].every(function(e) {
                return -1 < t.split(",").indexOf(e)
            }) ? n(e, t.split(",").sort()) : (0, a.getFrameworkTranslation)("reviewFilters.byLatest", i)
        }
    }, {
        "./translations": 61
    }],
    31: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.fetchServiceReviewData = void 0;
        var n = e("./fetchData"),
            e = e("./productReviews");
        e.fetchProductData, e.fetchProductReview, n.constructTrustBoxAndComplete, r.fetchServiceReviewData = function(i) {
            return function(e, t, r) {
                (0, n.fetchData)("/trustbox-data/" + i)(e, t, r, n.hasServiceReviews)
            }
        }
    }, {
        "./fetchData": 30,
        "./productReviews": 32
    }],
    3: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "anmeldelse",
                plural: "anmeldelser",
                collectedVia: "Indsamlet via [source]",
                verifiedVia: "Verificeret – indsamlet via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Verificeret",
                        infoTitle: "Verificeret anmeldelse",
                        info: "[LINK-BEGIN]Læs mere[LINK-END] om de forskellige typer anmeldelser"
                    },
                    invitedReview: {
                        label: "Inviteret",
                        infoTitle: "Inviteret anmeldelse",
                        infoTrustpilot: "Anmeldelser af Trustpilot, der er markeret som [BOLD-BEGIN]Inviteret[BOLD-END], blev skrevet via et direkte link til vores anmeldelsesformular.",
                        info: "[LINK-BEGIN]Læs mere[LINK-END] om de forskellige typer anmeldelser"
                    },
                    redirectedReview: {
                        label: "Omdirigeret",
                        infoTitle: "Omdirigeret anmeldelse",
                        info: "[LINK-BEGIN]Læs mere[LINK-END] om de forskellige typer anmeldelser"
                    }
                }
            },
            monthNames: {
                january: "januar",
                february: "februar",
                march: "marts",
                april: "april",
                may: "maj",
                june: "juni",
                july: "juli",
                august: "august",
                september: "september",
                october: "oktober",
                november: "november",
                december: "december"
            },
            timeAgo: {
                days: {
                    singular: "For [count] dag siden",
                    plural: "For [count] dage siden"
                },
                hours: {
                    singular: "For [count] time siden",
                    plural: "For [count] timer siden"
                },
                minutes: {
                    singular: "For [count] minut siden",
                    plural: "For [count] minutter siden"
                },
                seconds: {
                    singular: "For [count] sekund siden",
                    plural: "For [count] sekunder siden"
                }
            },
            reviewFilters: {
                byStars1: "Viser vores [star1]-stjernede anmeldelser",
                byStars2: "Viser vores [star1]- og [star2]-stjernede anmeldelser",
                byStars3: "Viser vores [star1]-, [star2]- og [star3]-stjernede anmeldelser",
                byStars4: "Viser vores [star1]-, [star2]-, [star3]- og [star4]-stjernede anmeldelser",
                byLatest: "Viser vores seneste anmeldelser",
                byFavoriteOrTag: "Viser vores yndlingsanmeldelser"
            },
            notRated: "Ikke bedømt"
        }
    }, {}],
    4: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "Bewertung",
                plural: "Bewertungen",
                collectedVia: "Gesammelt über [source]",
                verifiedVia: "Verifiziert, gesammelt über [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Verifiziert",
                        infoTitle: "Verifizierte Bewertung",
                        info: "[LINK-BEGIN]Erfahren Sie mehr[LINK-END] über verschiedene Arten von Bewertungen"
                    },
                    invitedReview: {
                        label: "Auf Einladung",
                        infoTitle: "Bewertung auf Einladung",
                        infoTrustpilot: "Bewertungen zu Trustpilot, die mit dem Hinweis [BOLD-BEGIN]Auf Einladung[BOLD-END] versehen sind, wurden über einen direkten Link zu unserem Bewertungsformular abgegeben.",
                        info: "[LINK-BEGIN]Erfahren Sie mehr[LINK-END] über verschiedene Arten von Bewertungen"
                    },
                    redirectedReview: {
                        label: "Weitergeleitet",
                        infoTitle: "Weitergeleitete Bewertung",
                        info: "[LINK-BEGIN]Erfahren Sie mehr[LINK-END] über verschiedene Arten von Bewertungen"
                    }
                }
            },
            monthNames: {
                january: "Januar",
                february: "Februar",
                march: "März",
                april: "April",
                may: "Mai",
                june: "Juni",
                july: "Juli",
                august: "August",
                september: "September",
                october: "Oktober",
                november: "November",
                december: "Dezember"
            },
            timeAgo: {
                days: {
                    singular: "vor [count] Tag",
                    plural: "vor [count] Tagen"
                },
                hours: {
                    singular: "vor [count] Stunde",
                    plural: "vor [count] Stunden"
                },
                minutes: {
                    singular: "vor [count] Minute",
                    plural: "vor [count] Minuten"
                },
                seconds: {
                    singular: "vor [count] Sekunde",
                    plural: "vor [count] Sekunden"
                }
            },
            reviewFilters: {
                byStars1: "Einige unserer [star1]-Sterne-Bewertungen",
                byStars2: "Einige unserer [star1]- & [star2]-Sterne-Bewertungen",
                byStars3: "Einige unserer [star1]-, [star2]- & [star3]-Sterne-Bewertungen",
                byStars4: "Einige unserer [star1]-, [star2]-, [star3]- & [star4]-Sterne-Bewertungen",
                byLatest: "Unsere neuesten Bewertungen",
                byFavoriteOrTag: "Unsere Lieblingsbewertungen"
            },
            notRated: "Nicht bewertet"
        }
    }, {}],
    5: [function(e, t, r) {
        arguments[4][4][0].apply(r, arguments)
    }, {
        dup: 4
    }],
    6: [function(e, t, r) {
        arguments[4][4][0].apply(r, arguments)
    }, {
        dup: 4
    }],
    7: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "review",
                plural: "reviews",
                collectedVia: "Collected via [source]",
                verifiedVia: "Verified, collected via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Verified",
                        infoTitle: "Verified review",
                        info: "[LINK-BEGIN]Learn more[LINK-END] about review types"
                    },
                    invitedReview: {
                        label: "Invited",
                        infoTitle: "Invited review",
                        infoTrustpilot: "Reviews for Trustpilot that are labeled [BOLD-BEGIN]Invited[BOLD-END] were written via a link leading directly to our review form.",
                        info: "[LINK-BEGIN]Learn more[LINK-END] about review types"
                    },
                    redirectedReview: {
                        label: "Redirected",
                        infoTitle: "Redirected review",
                        info: "[LINK-BEGIN]Learn more[LINK-END] about review types"
                    }
                }
            },
            monthNames: {
                january: "January",
                february: "February",
                march: "March",
                april: "April",
                may: "May",
                june: "June",
                july: "July",
                august: "August",
                september: "September",
                october: "October",
                november: "November",
                december: "December"
            },
            timeAgo: {
                days: {
                    singular: "[count] day ago",
                    plural: "[count] days ago"
                },
                hours: {
                    singular: "[count] hour ago",
                    plural: "[count] hours ago"
                },
                minutes: {
                    singular: "[count] minute ago",
                    plural: "[count] minutes ago"
                },
                seconds: {
                    singular: "[count] second ago",
                    plural: "[count] seconds ago"
                }
            },
            reviewFilters: {
                byStars1: "Showing our [star1] star reviews",
                byStars2: "Showing our [star1] & [star2] star reviews",
                byStars3: "Showing our [star1], [star2] & [star3] star reviews",
                byStars4: "Showing our [star1], [star2], [star3] & [star4] star reviews",
                byLatest: "Showing our latest reviews",
                byFavoriteOrTag: "Showing our favourite reviews"
            },
            notRated: "Not rated"
        }
    }, {}],
    8: [function(e, t, r) {
        arguments[4][7][0].apply(r, arguments)
    }, {
        dup: 7
    }],
    9: [function(e, t, r) {
        arguments[4][7][0].apply(r, arguments)
    }, {
        dup: 7
    }],
    10: [function(e, t, r) {
        arguments[4][7][0].apply(r, arguments)
    }, {
        dup: 7
    }],
    11: [function(e, t, r) {
        arguments[4][7][0].apply(r, arguments)
    }, {
        dup: 7
    }],
    12: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "review",
                plural: "reviews",
                collectedVia: "Collected via [source]",
                verifiedVia: "Verified, collected via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Verified",
                        infoTitle: "Verified review",
                        info: "[LINK-BEGIN]Learn more[LINK-END] about review types"
                    },
                    invitedReview: {
                        label: "Invited",
                        infoTitle: "Invited review",
                        infoTrustpilot: "Reviews for Trustpilot that are labeled [BOLD-BEGIN]Invited[BOLD-END] were written via a link leading directly to our review form.",
                        info: "[LINK-BEGIN]Learn more[LINK-END] about review types"
                    },
                    redirectedReview: {
                        label: "Redirected",
                        infoTitle: "Redirected review",
                        info: "[LINK-BEGIN]Learn more[LINK-END] about review types"
                    }
                }
            },
            monthNames: {
                january: "January",
                february: "February",
                march: "March",
                april: "April",
                may: "May",
                june: "June",
                july: "July",
                august: "August",
                september: "September",
                october: "October",
                november: "November",
                december: "December"
            },
            timeAgo: {
                days: {
                    singular: "[count] day ago",
                    plural: "[count] days ago"
                },
                hours: {
                    singular: "[count] hour ago",
                    plural: "[count] hours ago"
                },
                minutes: {
                    singular: "[count] minute ago",
                    plural: "[count] minutes ago"
                },
                seconds: {
                    singular: "[count] second ago",
                    plural: "[count] seconds ago"
                }
            },
            reviewFilters: {
                byStars1: "Showing our [star1] star reviews",
                byStars2: "Showing our [star1] & [star2] star reviews",
                byStars3: "Showing our [star1], [star2] & [star3] star reviews",
                byStars4: "Showing our [star1], [star2], [star3] & [star4] star reviews",
                byLatest: "Showing our latest reviews",
                byFavoriteOrTag: "Showing our favorite reviews"
            },
            notRated: "Not rated"
        }
    }, {}],
    13: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "opinión",
                plural: "opiniones",
                collectedVia: "Fuente: [source]",
                verifiedVia: "Verificada, recopilada vía [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Verificada",
                        infoTitle: "Opinión verificada",
                        info: "[LINK-BEGIN]Más información[LINK-END] sobre los tipos de opinión"
                    },
                    invitedReview: {
                        label: "Por invitación",
                        infoTitle: "Opinión por invitación",
                        infoTrustpilot: "Las opiniones de Trustpilot con la etiqueta [BOLD-BEGIN]Por invitación[BOLD-END] se escribieron a través de un enlace que dirige directamente a nuestro formulario para opinar.",
                        info: "[LINK-BEGIN]Más información[LINK-END] sobre los tipos de opinión"
                    },
                    redirectedReview: {
                        label: "Redirigida",
                        infoTitle: "Opinión redirigida",
                        info: "[LINK-BEGIN]Más información[LINK-END] sobre los tipos de opinión"
                    }
                }
            },
            monthNames: {
                january: "enero",
                february: "febrero",
                march: "marzo",
                april: "abril",
                may: "mayo",
                june: "junio",
                july: "julio",
                august: "agosto",
                september: "septiembre",
                october: "octubre",
                november: "noviembre",
                december: "diciembre"
            },
            timeAgo: {
                days: {
                    singular: "Hace [count] día",
                    plural: "Hace [count] días"
                },
                hours: {
                    singular: "Hace [count] hora",
                    plural: "Hace [count] horas"
                },
                minutes: {
                    singular: "Hace [count] minuto",
                    plural: "Hace [count] minutos"
                },
                seconds: {
                    singular: "Hace [count] segundo",
                    plural: "Hace [count] segundos"
                }
            },
            reviewFilters: {
                byStars1: "Nuestras opiniones de [star1] estrellas",
                byStars2: "Nuestras opiniones de [star1] y [star2] estrellas",
                byStars3: "Nuestras opiniones de [star1], [star2] y [star3] estrellas",
                byStars4: "Nuestras opiniones de [star1], [star2], [star3] y [star4] estrellas",
                byLatest: "Nuestras opiniones más recientes",
                byFavoriteOrTag: "Nuestras opiniones preferidas"
            },
            notRated: "Sin valorar"
        }
    }, {}],
    14: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "arvostelu",
                plural: "arvostelua",
                collectedVia: "Arvostelun lähde: [source]",
                verifiedVia: "Varmennettu, lähde: [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Varmennettu",
                        infoTitle: "Varmennettu arvostelu",
                        info: "[LINK-BEGIN]Lue lisää[LINK-END] eri arvostelutyypeistä"
                    },
                    invitedReview: {
                        label: "Kutsuttu",
                        infoTitle: "Kutsuttu arvostelu",
                        infoTrustpilot: "Trustpilotin arvostelut, joissa on merkintä [BOLD-BEGIN]Kutsuttu[BOLD-END], kirjoitettiin linkin kautta, joka johtaa suoraan arvostelulomakkeeseemme.",
                        info: "[LINK-BEGIN]Lue lisää[LINK-END] eri arvostelutyypeistä"
                    },
                    redirectedReview: {
                        label: "Uudelleenohjattu",
                        infoTitle: "Uudelleenohjattu arvostelu",
                        info: "[LINK-BEGIN]Lue lisää[LINK-END] eri arvostelutyypeistä"
                    }
                }
            },
            monthNames: {
                january: "tammikuuta",
                february: "helmikuuta",
                march: "maaliskuuta",
                april: "huhtikuuta",
                may: "toukokuuta",
                june: "kesäkuuta",
                july: "heinäkuuta",
                august: "elokuuta",
                september: "syyskuuta",
                october: "lokakuuta",
                november: "marraskuuta",
                december: "joulukuuta"
            },
            timeAgo: {
                days: {
                    singular: "[count] päivää sitten",
                    plural: "[count] päivää sitten"
                },
                hours: {
                    singular: "[count] tuntia sitten",
                    plural: "[count] tuntia sitten"
                },
                minutes: {
                    singular: "[count] minuuttia sitten",
                    plural: "[count] minuuttia sitten"
                },
                seconds: {
                    singular: "[count] sekuntia sitten",
                    plural: "[count] sekuntia sitten"
                }
            },
            reviewFilters: {
                byStars1: "Näytetään [star1] tähden arvostelumme",
                byStars2: "Näytetään [star1] & [star2] tähden arvostelumme",
                byStars3: "Näytetään [star1], [star2] & [star3] tähden arvostelumme",
                byStars4: "Näytetään [star1], [star2], [star3] & [star4] tähden arvostelumme",
                byLatest: "Näytetään viimeisimmät arvostelumme",
                byFavoriteOrTag: "Näytetään suosikkiarvostelumme"
            },
            notRated: "Ei arvioitu"
        }
    }, {}],
    15: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "avis",
                plural: "avis",
                collectedVia: "Collecté via [source]",
                verifiedVia: "Vérifié, collecté via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Vérifié",
                        infoTitle: "Avis vérifié",
                        info: "[LINK-BEGIN]En savoir plus[LINK-END] sur les types d'avis"
                    },
                    invitedReview: {
                        label: "Sur invitation",
                        infoTitle: "Avis sur invitation",
                        infoTrustpilot: "Les avis au sujet de Trustpilot accompagnés du statut [BOLD-BEGIN]Sur invitation[BOLD-END] ont été écrits via un lien direct vers notre formulaire d'évaluation.",
                        info: "[LINK-BEGIN]En savoir plus[LINK-END] sur les types d'avis"
                    },
                    redirectedReview: {
                        label: "Redirigé",
                        infoTitle: "Avis redirigé",
                        info: "[LINK-BEGIN]En savoir plus[LINK-END] sur les types d'avis"
                    }
                }
            },
            monthNames: {
                january: "janvier",
                february: "février",
                march: "mars",
                april: "avril",
                may: "mai",
                june: "juin",
                july: "juillet",
                august: "août",
                september: "septembre",
                october: "octobre",
                november: "novembre",
                december: "décembre"
            },
            timeAgo: {
                days: {
                    singular: "ll y a [count] jour",
                    plural: "Il y a [count] jours"
                },
                hours: {
                    singular: "Il y a [count] heure",
                    plural: "Il y a [count] heures"
                },
                minutes: {
                    singular: "Il y a [count] minute",
                    plural: "Il y a [count] minutes"
                },
                seconds: {
                    singular: "Il y a [count] seconde",
                    plural: "Il y a [count] secondes"
                }
            },
            reviewFilters: {
                byStars1: "Nos avis [star1] étoiles",
                byStars2: "Nos avis [star1] et [star2] étoiles",
                byStars3: "Nos avis [star1], [star2] et [star3] étoiles",
                byStars4: "Nos avis [star1], [star2], [star3] et [star4] étoiles",
                byLatest: "Nos derniers avis",
                byFavoriteOrTag: "Nos avis préférés"
            },
            notRated: "Non évalué"
        }
    }, {}],
    16: [function(e, t, r) {
        arguments[4][15][0].apply(r, arguments)
    }, {
        dup: 15
    }],
    17: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = R(e("./da-DK/strings.json")),
            n = R(e("./de-AT/strings.json")),
            a = R(e("./de-CH/strings.json")),
            s = R(e("./de-DE/strings.json")),
            o = R(e("./en-AU/strings.json")),
            l = R(e("./en-CA/strings.json")),
            u = R(e("./en-GB/strings.json")),
            c = R(e("./en-IE/strings.json")),
            d = R(e("./en-NZ/strings.json")),
            v = R(e("./en-US/strings.json")),
            f = R(e("./es-ES/strings.json")),
            p = R(e("./fi-FI/strings.json")),
            m = R(e("./fr-BE/strings.json")),
            g = R(e("./fr-FR/strings.json")),
            h = R(e("./it-IT/strings.json")),
            w = R(e("./ja-JP/strings.json")),
            b = R(e("./nb-NO/strings.json")),
            y = R(e("./nl-BE/strings.json")),
            L = R(e("./nl-NL/strings.json")),
            E = R(e("./pl-PL/strings.json")),
            I = R(e("./pt-BR/strings.json")),
            N = R(e("./pt-PT/strings.json")),
            T = R(e("./ru-RU/strings.json")),
            k = R(e("./sv-SE/strings.json")),
            e = R(e("./zh-CN/strings.json"));

        function R(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t.default = e, t
        }
        r.default = {
            "da-DK": i,
            "de-AT": n,
            "de-CH": a,
            "de-DE": s,
            "en-AU": o,
            "en-CA": l,
            "en-GB": u,
            "en-IE": c,
            "en-NZ": d,
            "en-US": v,
            "es-ES": f,
            "fi-FI": p,
            "fr-BE": m,
            "fr-FR": g,
            "it-IT": h,
            "ja-JP": w,
            "nb-NO": b,
            "nl-BE": y,
            "nl-NL": L,
            "pl-PL": E,
            "pt-BR": I,
            "pt-PT": N,
            "ru-RU": T,
            "sv-SE": k,
            "zh-CN": e
        }
    }, {
        "./da-DK/strings.json": 3,
        "./de-AT/strings.json": 4,
        "./de-CH/strings.json": 5,
        "./de-DE/strings.json": 6,
        "./en-AU/strings.json": 7,
        "./en-CA/strings.json": 8,
        "./en-GB/strings.json": 9,
        "./en-IE/strings.json": 10,
        "./en-NZ/strings.json": 11,
        "./en-US/strings.json": 12,
        "./es-ES/strings.json": 13,
        "./fi-FI/strings.json": 14,
        "./fr-BE/strings.json": 15,
        "./fr-FR/strings.json": 16,
        "./it-IT/strings.json": 18,
        "./ja-JP/strings.json": 19,
        "./nb-NO/strings.json": 20,
        "./nl-BE/strings.json": 21,
        "./nl-NL/strings.json": 22,
        "./pl-PL/strings.json": 23,
        "./pt-BR/strings.json": 24,
        "./pt-PT/strings.json": 25,
        "./ru-RU/strings.json": 26,
        "./sv-SE/strings.json": 27,
        "./zh-CN/strings.json": 28
    }],
    18: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "recensione",
                plural: "recensioni",
                collectedVia: "Raccolta tramite [source]",
                verifiedVia: "Verificata, raccolta da [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Verificata",
                        infoTitle: "Recensione verificata",
                        info: "[LINK-BEGIN]Scopri di più[LINK-END] sui diversi tipi di recensioni"
                    },
                    invitedReview: {
                        label: "Su invito",
                        infoTitle: "Recensione su invito",
                        infoTrustpilot: "Le recensioni a proposito di Trustpilot contrassegnate con la dicitura [BOLD-BEGIN]Su invito[BOLD-END] sono state scritte mediante un link che punta direttamente al nostro modulo di recensione.",
                        info: "[LINK-BEGIN]Scopri di più[LINK-END] sui diversi tipi di recensioni"
                    },
                    redirectedReview: {
                        label: "Reindirizzata",
                        infoTitle: "Recensione reindirizzata",
                        info: "[LINK-BEGIN]Scopri di più[LINK-END] sui diversi tipi di recensioni"
                    }
                }
            },
            monthNames: {
                january: "gennaio",
                february: "febbraio",
                march: "marzo",
                april: "aprile",
                may: "maggio",
                june: "giugno",
                july: "luglio",
                august: "agosto",
                september: "settembre",
                october: "ottobre",
                november: "novembre",
                december: "dicembre"
            },
            timeAgo: {
                days: {
                    singular: "[count] giorno fa",
                    plural: "[count] giorni fa"
                },
                hours: {
                    singular: "[count] ora fa",
                    plural: "[count] ore fa"
                },
                minutes: {
                    singular: "[count] minuto fa",
                    plural: "[count] minuti fa"
                },
                seconds: {
                    singular: "[count] secondo fa",
                    plural: "[count] secondi fa"
                }
            },
            reviewFilters: {
                byStars1: "Le nostre recensioni a [star1] stelle",
                byStars2: "Le nostre recensioni a [star1] e a [star2] stelle",
                byStars3: "Le nostre recensioni a [star1], a [star2] e a [star3] stelle",
                byStars4: "Le nostre recensioni a [star1], a [star2], a [star3] e a [star4] stelle",
                byLatest: "Le nostre ultime recensioni",
                byFavoriteOrTag: "Le nostre recensioni preferite"
            },
            notRated: "Nessuna valutazione"
        }
    }, {}],
    19: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "レビュー",
                plural: "レビュー",
                collectedVia: "[source] によって収集",
                verifiedVia: "[source] によって確認・収集",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "確認済み",
                        infoTitle: "確認済みのレビュー",
                        info: "レビューの種類についての詳細は[LINK-BEGIN]こちら[LINK-END]をご覧ください。"
                    },
                    invitedReview: {
                        label: "手動招待",
                        infoTitle: "招待によるレビュー",
                        infoTrustpilot: "[BOLD-BEGIN]招待[BOLD-END]ラベルの付いたTrustpilot に関するレビューは、当社のレビューフォームへのダイレクトリンクを介して書かれたものです。",
                        info: "レビューの種類についての詳細は[LINK-BEGIN]こちら[LINK-END]をご覧ください。"
                    },
                    redirectedReview: {
                        label: "自動転送",
                        infoTitle: "自動転送によるレビュー",
                        info: "レビューの種類についての詳細は[LINK-BEGIN]こちら[LINK-END]をご覧ください。"
                    }
                }
            },
            monthNames: {
                january: "1月",
                february: "2月",
                march: "3月",
                april: "4月",
                may: "5月",
                june: "6月",
                july: "7月",
                august: "8月",
                september: "9月",
                october: "10月",
                november: "11月",
                december: "12月"
            },
            timeAgo: {
                days: {
                    singular: "[count]日前",
                    plural: "[count]日前"
                },
                hours: {
                    singular: "[count]時間前",
                    plural: "[count]時間前"
                },
                minutes: {
                    singular: "[count]分前",
                    plural: "[count]分前"
                },
                seconds: {
                    singular: "[count]秒前",
                    plural: "[count]秒前"
                }
            },
            reviewFilters: {
                byStars1: "[star1]つ星のレビューを表示",
                byStars2: "[star1]つ星と[star2]つ星のレビューを表示",
                byStars3: "[star1]つ星、[star2]つ星、[star3]つ星のレビューを表示",
                byStars4: "[star1]つ星、[star2]つ星、[star3]つ星、[star4]つ星のレビューを表示",
                byLatest: "最新のレビューを表示",
                byFavoriteOrTag: "お気に入りのレビューを表示"
            },
            notRated: "未評価"
        }
    }, {}],
    20: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "anmeldelse",
                plural: "anmeldelser",
                collectedVia: "Samlet inn gjennom [source]",
                verifiedVia: "Bekreftet – samlet inn via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Bekreftet",
                        infoTitle: "Bekreftet kunde",
                        info: "[LINK-BEGIN]Lær mer[LINK-END] om de ulike typene anmeldelser"
                    },
                    invitedReview: {
                        label: "På oppfordring",
                        infoTitle: "Anmeldelse skrevet på oppfordring",
                        infoTrustpilot: "Anmeldelser med benevningen [BOLD-BEGIN]«På oppfordring»[BOLD-END] har blitt sendt inn via en direktekobling til anmeldelsesskjemaet på Trustpilot.",
                        info: "[LINK-BEGIN]Lær mer[LINK-END] om de ulike typene anmeldelser"
                    },
                    redirectedReview: {
                        label: "Omdirigert",
                        infoTitle: "Omdirigert anmeldelse",
                        info: "[LINK-BEGIN]Lær mer[LINK-END] om de ulike typene anmeldelser"
                    }
                }
            },
            monthNames: {
                january: "januar",
                february: "februar",
                march: "mars",
                april: "april",
                may: "mai",
                june: "juni",
                july: "juli",
                august: "august",
                september: "september",
                october: "oktober",
                november: "november",
                december: "desember"
            },
            timeAgo: {
                days: {
                    singular: "For [count] dag siden",
                    plural: "For [count] dager siden"
                },
                hours: {
                    singular: "For [count] time siden",
                    plural: "For [count] timer siden"
                },
                minutes: {
                    singular: "For [count] minutt siden",
                    plural: "For [count] minutter siden"
                },
                seconds: {
                    singular: "For [count] sekund siden",
                    plural: "For [count] sekunder siden"
                }
            },
            reviewFilters: {
                byStars1: "Viser [star1]-stjernersanmeldelsene",
                byStars2: "Viser [star1]- og [star2]-stjernersanmeldelsene",
                byStars3: "Viser [star1]-, [star2]- og [star3]-stjernersanmeldelsene",
                byStars4: "Viser [star1]-, [star2]-, [star3]- og [star4]-stjernersanmeldelsene",
                byLatest: "Viser de nyeste anmeldelsene",
                byFavoriteOrTag: "Viser favorittene våre"
            },
            notRated: "Ikke vurdert"
        }
    }, {}],
    21: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "review",
                plural: "reviews",
                collectedVia: "Verzameld via [source]",
                verifiedVia: "Geverifieerd — verzameld via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Geverifieerd",
                        infoTitle: "Geverifieerde review",
                        info: "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
                    },
                    invitedReview: {
                        label: "Op uitnodiging",
                        infoTitle: "Review op uitnodiging",
                        infoTrustpilot: "Reviews over Trustpilot met het label [BOLD-BEGIN]Op uitnodiging[BOLD-END] zijn ingediend via een directe link naar ons reviewformulier.",
                        info: "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
                    },
                    redirectedReview: {
                        label: "Omgeleid",
                        infoTitle: "Omgeleide review",
                        info: "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
                    }
                }
            },
            monthNames: {
                january: "januari",
                february: "februari",
                march: "maart",
                april: "april",
                may: "mei",
                june: "juni",
                july: "juli",
                august: "augustus",
                september: "september",
                october: "oktober",
                november: "november",
                december: "December"
            },
            timeAgo: {
                days: {
                    singular: "[count] dag geleden",
                    plural: "[count] dagen geleden"
                },
                hours: {
                    singular: "[count] uur geleden",
                    plural: "[count] uur geleden"
                },
                minutes: {
                    singular: "[count] minuut geleden",
                    plural: "[count] minuten geleden"
                },
                seconds: {
                    singular: "[count] seconde geleden",
                    plural: "[count] seconden geleden"
                }
            },
            reviewFilters: {
                byStars1: "Onze reviews met [star1] sterren",
                byStars2: "Onze reviews met [star1] en [star2] sterren",
                byStars3: "Onze reviews met [star1], [star2] en [star3] sterren",
                byStars4: "Onze reviews met [star1], [star2], [star3] en [star4] sterren",
                byLatest: "Onze meest recente reviews",
                byFavoriteOrTag: "Onze favoriete reviews"
            },
            notRated: "Niet beoordeeld"
        }
    }, {}],
    22: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "review",
                plural: "reviews",
                collectedVia: "Verzameld via [source]",
                verifiedVia: "Geverifieerd — verzameld via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Geverifieerd",
                        infoTitle: "Geverifieerde review",
                        info: "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
                    },
                    invitedReview: {
                        label: "Op uitnodiging",
                        infoTitle: "Review op uitnodiging",
                        infoTrustpilot: "Reviews over Trustpilot met het label [BOLD-BEGIN]Op uitnodiging[BOLD-END] zijn ingediend via een directe link naar ons reviewformulier.",
                        info: "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
                    },
                    redirectedReview: {
                        label: "Omgeleid",
                        infoTitle: "Omgeleide review",
                        info: "[LINK-BEGIN]Meer informatie[LINK-END] over de soorten reviews"
                    }
                }
            },
            monthNames: {
                january: "januari",
                february: "februari",
                march: "maart",
                april: "april",
                may: "mei",
                june: "juni",
                july: "juli",
                august: "augustus",
                september: "september",
                october: "oktober",
                november: "november",
                december: "december"
            },
            timeAgo: {
                days: {
                    singular: "[count] dag geleden",
                    plural: "[count] dagen geleden"
                },
                hours: {
                    singular: "[count] uur geleden",
                    plural: "[count] uur geleden"
                },
                minutes: {
                    singular: "[count] minuut geleden",
                    plural: "[count] minuten geleden"
                },
                seconds: {
                    singular: "[count] seconde geleden",
                    plural: "[count] seconden geleden"
                }
            },
            reviewFilters: {
                byStars1: "Onze reviews met [star1] sterren",
                byStars2: "Onze reviews met [star1] en [star2] sterren",
                byStars3: "Onze reviews met [star1], [star2] en [star3] sterren",
                byStars4: "Onze reviews met [star1], [star2], [star3] en [star4] sterren",
                byLatest: "Onze meest recente reviews",
                byFavoriteOrTag: "Onze favoriete reviews"
            },
            notRated: "Niet beoordeeld"
        }
    }, {}],
    23: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "recenzja",
                plural: "recenzji",
                collectedVia: "Zebrane przez [source]",
                verifiedVia: "Zweryfikowano i zebrano przez [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Zweryfikowana",
                        infoTitle: "Zweryfikowana recenzja",
                        info: "[LINK-BEGIN]Dowiedz się więcej[LINK-END] o typach recenzji"
                    },
                    invitedReview: {
                        label: "Na zaproszenie",
                        infoTitle: "Rezenzja na zaproszenie",
                        infoTrustpilot: "Recenzje Trustpilot oznaczone jako [BOLD-BEGIN]Na zaproszenie[BOLD-END] zostały dodane za pośrednictwem łącza prowadzącego bezpośrednio do naszego formularza recenzji.",
                        info: "[LINK-BEGIN]Dowiedz się więcej[LINK-END] o typach recenzji"
                    },
                    redirectedReview: {
                        label: "Z przekierowana",
                        infoTitle: "Recenzja z przekierowana",
                        info: "[LINK-BEGIN]Dowiedz się więcej[LINK-END] o typach recenzji"
                    }
                }
            },
            monthNames: {
                january: "stycznia",
                february: "lutego",
                march: "marca",
                april: "kwietnia",
                may: "maja",
                june: "czerwca",
                july: "lipca",
                august: "sierpnia",
                september: "września",
                october: "października",
                november: "listopada",
                december: "grudnia"
            },
            timeAgo: {
                days: {
                    singular: "[count] dzień temu",
                    plural: "[count] dni temu"
                },
                hours: {
                    singular: "[count] godzinę temu",
                    plural: "[count] godz. temu"
                },
                minutes: {
                    singular: "[count] minutę temu",
                    plural: "[count] min. temu"
                },
                seconds: {
                    singular: "[count] sekundę temu",
                    plural: "[count] sek. temu"
                }
            },
            reviewFilters: {
                byStars1: "Wyświetlamy nasze [star1]-gwiazdkowe recenzje",
                byStars2: "Wyświetlamy nasze [star1]- i [star2]-gwiazdkowe recenzje",
                byStars3: "Wyświetlamy nasze [star1]-, [star2]- i [star3]-gwiazdkowe recenzje",
                byStars4: "Wyświetlamy nasze [star1]-, [star2]-, [star3]- i [star4]-gwiazdkowe recenzje",
                byLatest: "Wyświetlamy najnowsze recenzje",
                byFavoriteOrTag: "Wyświetlamy nasze ulubione recenzje"
            },
            notRated: "Brak oceny"
        }
    }, {}],
    24: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "avaliação",
                plural: "avaliações",
                collectedVia: "Recolhida via [source]",
                verifiedVia: "Verificada, recolhida via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Verificada",
                        infoTitle: "Avaliação verificada",
                        info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de avaliação"
                    },
                    invitedReview: {
                        label: "Por convite",
                        infoTitle: "Avaliação por convite",
                        infoTrustpilot: "As avaliações da Trustpilot marcadas como [BOLD-BEGIN]Por convite[BOLD-END] foram deixadas utilizando um link direto para o nosso formulário de avaliação.",
                        info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de avaliação"
                    },
                    redirectedReview: {
                        label: "Redirecionada",
                        infoTitle: "Avaliação redirecionada",
                        info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de avaliação"
                    }
                }
            },
            monthNames: {
                january: "Janeiro",
                february: "Fevereiro",
                march: "Março",
                april: "Abril",
                may: "Maio",
                june: "Junho",
                july: "Julho",
                august: "Agosto",
                september: "Setembro",
                october: "Outubro",
                november: "Novembro",
                december: "Dezembro"
            },
            timeAgo: {
                days: {
                    singular: "há [count] dia",
                    plural: "há [count] dias"
                },
                hours: {
                    singular: "há [count] hora",
                    plural: "há [count] horas"
                },
                minutes: {
                    singular: "há [count] minuto",
                    plural: "há [count] minutos"
                },
                seconds: {
                    singular: "há [count] segundo",
                    plural: "há [count] segundos"
                }
            },
            reviewFilters: {
                byStars1: "Nossas avaliações com [star1] estrela(s)",
                byStars2: "Nossas avaliações com [star1] & [star2] estrelas",
                byStars3: "Nossas avaliações com [star1], [star2] & [star3] estrelas",
                byStars4: "Nossas avaliações com [star1], [star2], [star3] & [star4] estrelas",
                byLatest: "Mostrando nossas avaliações mais recentes",
                byFavoriteOrTag: "Mostrando nossas avaliações favoritas"
            },
            notRated: "Sem classificação"
        }
    }, {}],
    25: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "opinião",
                plural: "opiniões",
                collectedVia: "Recolhida via [source]",
                verifiedVia: "Verificada, recolhida via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Verificada",
                        infoTitle: "Opinião verificada",
                        info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de opiniões"
                    },
                    invitedReview: {
                        label: "Por convite",
                        infoTitle: "Opinião por convite",
                        infoTrustpilot: "As opiniões da Trustpilot marcadas como [BOLD-BEGIN]Por convite[BOLD-END] foram escritas utilizando um link directo para o nosso formulário de avaliação.",
                        info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de opiniões"
                    },
                    redirectedReview: {
                        label: "Redireccionada",
                        infoTitle: "Opinião redireccionada",
                        info: "[LINK-BEGIN]Saiba mais[LINK-END] sobre os diferentes tipos de opiniões"
                    }
                }
            },
            monthNames: {
                january: "Janeiro",
                february: "Fevereiro",
                march: "Março",
                april: "Abril",
                may: "Maio",
                june: "Junho",
                july: "Julho",
                august: "Agosto",
                september: "Setembro",
                october: "Outubro",
                november: "Novembro",
                december: "Dezembro"
            },
            timeAgo: {
                days: {
                    singular: "há [count] dia",
                    plural: "há [count] dias"
                },
                hours: {
                    singular: "há [count] hora",
                    plural: "há [count] horas"
                },
                minutes: {
                    singular: "há [count] minuto",
                    plural: "há [count] minutos"
                },
                seconds: {
                    singular: "há [count] segundo",
                    plural: "há [count] segundos"
                }
            },
            reviewFilters: {
                byStars1: "As nossas opiniões com [star1] estrela(s)",
                byStars2: "As nossas opiniões com [star1] e [star2] estrelas",
                byStars3: "As nossas opiniões com [star1], [star2] e [star3] estrelas",
                byStars4: "As nossas opiniões com [star1], [star2], [star3] e [star4] estrelas",
                byLatest: "As nossas opiniões mais recentes",
                byFavoriteOrTag: "As nossas opiniões favoritas"
            },
            notRated: "Sem classificação"
        }
    }, {}],
    26: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "отзыв",
                plural: "отзывов",
                collectedVia: "Собрано через [source]",
                verifiedVia: "Подтверждено, собрано через [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Подтверждено",
                        infoTitle: "Подтвержденный отзыв",
                        info: "[LINK-BEGIN]Узнать больше[LINK-END] о типах отзывов"
                    },
                    invitedReview: {
                        label: "По приглашению",
                        infoTitle: "Отзыв по приглашению",
                        infoTrustpilot: "Отзывы о Trustpilot с отметкой [BOLD-BEGIN]По приглашению[BOLD-END] были написаны по ссылке, ведущей непосредственно к нашей форме отзыва.",
                        info: "[LINK-BEGIN]Узнать больше[LINK-END] о типах отзывов"
                    },
                    redirectedReview: {
                        label: "Перенаправлено",
                        infoTitle: "Перенаправленный отзыв",
                        info: "[LINK-BEGIN]Узнать больше[LINK-END] о типах отзывов"
                    }
                }
            },
            monthNames: {
                january: "января",
                february: "февраля",
                march: "марта",
                april: "апреля",
                may: "мая",
                june: "июня",
                july: "Июль",
                august: "августа",
                september: "сентября",
                october: "Октябрь",
                november: "ноября",
                december: "Декабрь"
            },
            timeAgo: {
                days: {
                    singular: "[count] день назад",
                    plural: "[count] дней назад"
                },
                hours: {
                    singular: "[count] час назад",
                    plural: "[count] часов назад"
                },
                minutes: {
                    singular: "[count] минуту назад",
                    plural: "[count] минут назад"
                },
                seconds: {
                    singular: "[count] секунду назад",
                    plural: "[count] секунд назад"
                }
            },
            reviewFilters: {
                byStars1: "Наши отзывы [star1] звезд",
                byStars2: "Наши отзывы [star1] и [star2] звезд",
                byStars3: "Наши отзывы [star1], [star2] и [star3] звезд",
                byStars4: "Наши отзывы [star1], [star2], [star3] и [star4] звезд",
                byLatest: "Наши недавние отзывы",
                byFavoriteOrTag: "Наши любимые отзывы"
            },
            notRated: "Без рейтинга"
        }
    }, {}],
    27: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "omdöme",
                plural: "omdömen",
                collectedVia: "Insamlat via [source]",
                verifiedVia: "Verifierat – insamlat via [source]",
                serviceReviewTypeLabels: {
                    verifiedReview: {
                        label: "Verifierat",
                        infoTitle: "Verifierat omdöme",
                        info: "[LINK-BEGIN]Läs mer[LINK-END] om olika typer av omdömen"
                    },
                    invitedReview: {
                        label: "Med inbjudan",
                        infoTitle: "Omdöme skrivet efter inbjudan",
                        infoTrustpilot: "Omdömen med etiketten [BOLD-BEGIN]Med inbjudan[BOLD-END] har skrivits av personer som har hittat vårt omdömesformulär via en direktlänk.",
                        info: "[LINK-BEGIN]Läs mer[LINK-END] om olika typer av omdömen"
                    },
                    redirectedReview: {
                        label: "Omdirigerat",
                        infoTitle: "Omdirigerat omdöme",
                        info: "[LINK-BEGIN]Läs mer[LINK-END] om olika typer av omdömen"
                    }
                }
            },
            monthNames: {
                january: "januari",
                february: "februari",
                march: "mars",
                april: "april",
                may: "maj",
                june: "juni",
                july: "juli",
                august: "augusti",
                september: "september",
                october: "oktober",
                november: "november",
                december: "december"
            },
            timeAgo: {
                days: {
                    singular: "[count] dag sedan",
                    plural: "[count] dagar sedan"
                },
                hours: {
                    singular: "[count] timme sedan",
                    plural: "[count] timmar sedan"
                },
                minutes: {
                    singular: "[count] minut sedan",
                    plural: "[count] minuter sedan"
                },
                seconds: {
                    singular: "[count] sekund sedan",
                    plural: "[count] sekunder sedan"
                }
            },
            reviewFilters: {
                byStars1: "Visar våra [star1]-stjärniga omdömen",
                byStars2: "Visar våra [star1]- och [star2]-stjärniga omdömen",
                byStars3: "Visar våra [star1]-, [star2]- och [star3]-stjärniga omdömen",
                byStars4: "Visar våra [star1]-, [star2]-, [star3]- och [star4]-stjärniga omdömen",
                byLatest: "Visar våra senaste omdömen",
                byFavoriteOrTag: "Visar våra favoritomdömen"
            },
            notRated: "Ej betygsatt"
        }
    }, {}],
    28: [function(e, t, r) {
        t.exports = {
            reviews: {
                singular: "条评论",
                plural: "条点评,"
            },
            monthNames: {
                january: "一月",
                february: "二月",
                march: "三月",
                april: "四月",
                may: "五月",
                june: "六月",
                july: "七月",
                august: "八月",
                september: "九月",
                october: "十月",
                november: "十一月",
                december: "十二月"
            },
            timeAgo: {
                days: {
                    singular: "[count] day ago",
                    plural: "[count] days ago"
                },
                hours: {
                    singular: "[count] hour ago",
                    plural: "[count] hours ago"
                },
                minutes: {
                    singular: "[count] minute ago",
                    plural: "[count] minutes ago"
                },
                seconds: {
                    singular: "[count] second ago",
                    plural: "[count] seconds ago"
                }
            },
            reviewFilters: {
                byStars1: "Showing our [star1] star reviews",
                byStars2: "Showing our [star1] & [star2] star reviews",
                byStars3: "Showing our [star1], [star2] & [star3] star reviews",
                byStars4: "Showing our [star1], [star2], [star3] & [star4] star reviews",
                byLatest: "Showing our latest reviews",
                byFavoriteOrTag: "Showing our favorite reviews"
            }
        }
    }, {}],
    29: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.apiCall = void 0;
        var s = i(e("../xhr")),
            o = e("../queryString"),
            l = i(e("../rootUri"));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        r.apiCall = function(n, a) {
            return new Promise(function(e, t) {
                var r = void 0,
                    i = void 0;
                if (0 === n.indexOf("/") && (r = a || {}, (0, o.getAsObject)().token && (r.random = function(e) {
                        for (var t = "", r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < e; i++) t += r.charAt(Math.floor(Math.random() * r.length));
                        return t
                    }(20))), 0 === n.indexOf("http")) i = n.replace(/^https?:/, "https:");
                else {
                    if (0 !== n.indexOf("/")) return t();
                    i = (0, l.default)() + n
                }
                return (0, s.default)({
                    url: i,
                    data: r,
                    success: e,
                    error: t
                })
            })
        }
    }, {
        "../queryString": 43,
        "../rootUri": 45,
        "../xhr": 64
    }],
    64: [function(e, t, r) {
        "use strict";

        function s() {
            var e = navigator.userAgent.toLowerCase();
            return -1 !== e.indexOf("msie") && parseInt(e.split("msie")[1])
        }

        function o(t) {
            try {
                return JSON.parse(t.responseText)
            } catch (e) {
                return t.responseText
            }
        }

        function l() {}
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = function(e) {
            var t, r, i, n, a;
            "GET" === (e = {
                type: e.type || "GET",
                error: e.error || l,
                success: e.success || l,
                data: e.data,
                url: e.url || ""
            }).type && e.data && (e.url = e.url + "?" + function(e) {
                var t, r = [];
                for (t in e) e.hasOwnProperty(t) && r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
                return r.join("&")
            }(e.data), delete e.data), s() && s() <= 9 ? (i = e, n = new window.XDomainRequest, a = window.location.protocol, i.url = i.url.replace(/https?:/, a), n.open(i.type, i.url), n.onload = function() {
                i.success(o(n))
            }, n.onerror = function() {
                i.error(o(n))
            }, setTimeout(function() {
                n.send(i.data)
            }, 0)) : (t = e, (r = new(window.XMLHttpRequest || ActiveXObject)("MSXML2.XMLHTTP.3.0")).open(t.type, t.url, !0), r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.onreadystatechange = function() {
                4 === r.readyState && (200 <= r.status && r.status < 300 ? t.success(o(r)) : t.error(o(r)))
            }, r.send(t.data))
        }
    }, {}],
    45: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.default = function() {
            var e = "https://widget.trustpilot.com";
            return 0 === e.indexOf("#") ? "https://widget.tp-staging.com" : e
        }
    }, {}],
    30: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.hasProductReviews = r.hasServiceReviewsMultiFetch = r.hasServiceReviews = r.multiFetchData = r.fetchData = void 0;
        var l = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) {
                    var r = t,
                        i = [],
                        n = !0,
                        t = !1,
                        a = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !r || i.length !== r); n = !0);
                    } catch (e) {
                        t = !0, a = e
                    } finally {
                        try {
                            !n && o.return && o.return()
                        } finally {
                            if (t) throw a
                        }
                    }
                    return i
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            },
            a = e("./call"),
            u = e("../utils"),
            c = e("../templates/loader"),
            d = e("../templates/errorFallback"),
            v = e("../communication"),
            f = e("../fn");

        function i(e) {
            return 0 < e.businessEntity.numberOfReviews.total
        }

        function o(o) {
            return function(e, t, r, i) {
                var n = e[Object.keys(e)[0]],
                    a = n.locale,
                    n = n.theme,
                    s = void 0 === n ? "light" : n,
                    n = (0, f.promiseAllObject)((0, f.mapObject)(g(o), e)),
                    e = (0, u.getOnPageReady)(),
                    n = Promise.all([n, e]).then(function(e) {
                        e = l(e, 1)[0];
                        return {
                            baseData: m(e),
                            locale: a,
                            theme: s
                        }
                    }).then(h(t, r, i)).catch(function(e) {
                        if (e && e.FallbackLogo) return (0, d.errorFallback)()
                    });
                (0, c.withLoader)(n)
            }
        }
        var p = "default_singleFetch_f98ac77b",
            m = function(e) {
                var t = Object.keys(e);
                return p in e && 1 === t.length ? e[p] : e
            },
            g = function(i) {
                return function(e) {
                    var t = e.businessUnitId,
                        r = e.locale,
                        e = function(e, t) {
                            var r, i = {};
                            for (r in e) 0 <= t.indexOf(r) || Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
                            return i
                        }(e, ["businessUnitId", "locale"]),
                        t = (0, f.rejectNullaryValues)(n({
                            businessUnitId: t,
                            locale: r
                        }, e, {
                            theme: null
                        }));
                    return (0, a.apiCall)(i, t)
                }
            },
            h = function(s) {
                var o = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    l = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : i;
                return function(e) {
                    var t = e.baseData,
                        r = e.locale,
                        i = e.theme,
                        n = e.hasMoreReviews,
                        e = e.loadMoreReviews,
                        a = l(t);
                    s({
                        baseData: t,
                        locale: r,
                        hasMoreReviews: n,
                        loadMoreReviews: e
                    });
                    o && (0, v.setListener)(function(e) {
                        e = e.data;
                        (0, v.isLoadedMessage)(e) && (0, v.sendAPIDataMessage)({
                            baseData: t,
                            locale: r
                        })
                    }), (0, u.showTrustBox)(i, a), (0, d.removeErrorFallback)()
                }
            };
        r.fetchData = function(s) {
            return function(e, t, r, i) {
                var n, a;
                e = e, (a = p) in (n = {}) ? Object.defineProperty(n, a, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[a] = e, o(s)(n, t, r, i)
            }
        }, r.multiFetchData = o, r.hasServiceReviews = i, r.hasServiceReviewsMultiFetch = function(t) {
            return Object.keys(t).some(function(e) {
                return i(t[e])
            })
        }, r.hasProductReviews = function(e) {
            var t = e.productReviewsSummary,
                e = e.importedProductReviewsSummary;
            return 0 < (t ? t.numberOfReviews.total : 0) + (e ? e.numberOfReviews.total : 0)
        }
    }, {
        "../communication": 37,
        "../fn": 39,
        "../templates/errorFallback": 52,
        "../templates/loader": 53,
        "../utils": 63,
        "./call": 29
    }],
    37: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.onPong = r.ping = r.sendAPIDataMessage = r.isLoadedMessage = r.setListener = void 0;
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            },
            e = e("./utils.js"),
            n = window.parent,
            a = [],
            s = null,
            o = [];

        function l(e) {
            s ? (e.widgetId = s, e = JSON.stringify(e), n.postMessage(e, "*")) : a.push(e)
        }

        function u(t) {
            return function(e) {
                return l(i({}, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, {
                    message: e,
                    command: "message",
                    name: t
                }))
            }
        }

        function c(e) {
            o.push(e)
        }(0, e.addEventListener)(window, "message", function(e) {
            if ("string" == typeof e.data) {
                var t = void 0;
                try {
                    t = {
                        data: JSON.parse(e.data)
                    }
                } catch (t) {
                    return
                }
                if ("setId" === t.data.command)
                    for (s = t.data.widgetId; a.length;) l(a.pop());
                else
                    for (var r = 0; r < o.length; r++)(0, o[r])(t)
            }
        }), r.setListener = c, r.isLoadedMessage = function(e) {
            return "loaded" === e
        }, r.sendAPIDataMessage = function(e) {
            u("popup")("API data", e)
        }, r.ping = function() {
            return l({
                command: "ping"
            })
        }, r.onPong = function(t) {
            c(function(e) {
                "pong" === e.data.command && t(e)
            })
        }
    }, {
        "./utils.js": 63
    }],
    39: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) {
                    var r = t,
                        i = [],
                        n = !0,
                        t = !1,
                        a = void 0;
                    try {
                        for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !r || i.length !== r); n = !0);
                    } catch (e) {
                        t = !0, a = e
                    } finally {
                        try {
                            !n && o.return && o.return()
                        } finally {
                            if (t) throw a
                        }
                    }
                    return i
                }
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            };

        function a(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }

        function s(t) {
            return function(e) {
                return e.filter(t)
            }
        }

        function o() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(e) {
                return t.reduce(function(e, t) {
                    return u(e) ? e : t(e)
                }, e)
            }
        }

        function l(e) {
            return i(e, 1)[0]
        }
        var u = function(e) {
            return null == e
        };
        r.compose = function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function(e) {
                return t.reduceRight(function(e, t) {
                    return t(e)
                }, e)
            }
        }, r.find = function(e) {
            return o(s(e), l)
        }, r.guard = function(r) {
            return function(e) {
                return u(t = r) || !1 === t ? null : e;
                var t
            }
        }, r.map = function(t) {
            return function(e) {
                return e.map(t)
            }
        }, r.mapObject = function(r, i) {
            return Object.keys(i).reduce(function(e, t) {
                return n({}, e, a({}, t, r(i[t])))
            }, {})
        }, r.pairsToObject = function(e) {
            return e.reduce(function(e, t) {
                var t = i(t, 2),
                    r = t[0],
                    t = t[1];
                return n({}, e, a({}, r, t))
            }, {})
        }, r.pipeMaybe = o, r.promiseAllObject = function(t) {
            var i = Object.keys(t),
                e = i.map(function(e) {
                    return t[e]
                });
            return Promise.all(e).then(function(e) {
                return e.reduce(function(e, t, r) {
                    return n({}, e, a({}, i[r], t))
                }, {})
            })
        }, r.prop = function(e) {
            return function() {
                return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {})[e]
            }
        }, r.propMaybe = function(t) {
            return function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                return e[t] || e
            }
        }, r.rejectNullaryValues = function(r) {
            return Object.keys(r).reduce(function(e, t) {
                return n({}, e, u(r[t]) ? {} : a({}, t, r[t]))
            }, {})
        }
    }, {}],
    52: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.removeErrorFallback = r.errorFallback = void 0;
        var i = e("../dom"),
            n = e("../templating"),
            a = e("../utils");
        r.errorFallback = function() {
            var e = document.getElementById(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tp-widget-fallback");
            (0, i.populateElements)([{
                element: e,
                string: (0, n.a)({
                    href: "https://www.trustpilot.com?utm_medium=trustboxfallback",
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, (0, n.mkElemWithSvgLookup)("logo", "fallback-logo"))
            }])
        }, r.removeErrorFallback = function() {
            var e = document.getElementById(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "tp-widget-fallback");
            (0, a.removeElement)(e)
        }
    }, {
        "../dom": 38,
        "../templating": 58,
        "../utils": 63
    }],
    53: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.withLoader = void 0;
        var a = e("../dom"),
            s = e("../utils"),
            o = e("../templating");
        r.withLoader = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.loaderElement,
                i = void 0 === r ? "tp-widget-loader" : r,
                r = t.delay,
                n = setTimeout(function() {
                    var e = i;
                    e = document.getElementById(e), (0, a.populateElements)([{
                        element: e,
                        string: (0, o.mkElemWithSvgLookup)("logo")
                    }])
                }, void 0 === r ? 1e3 : r);
            return e.finally(function() {
                var e, t;
                clearTimeout(n), e = i, t = document.getElementById(e), (0, a.addClass)(t, e + "--loaded"), t && (t.addEventListener("animationend", function() {
                    return (0, s.removeElement)(t)
                }), t.addEventListener("webkitAnimationEnd", function() {
                    return (0, s.removeElement)(t)
                }), t.addEventListener("oanimationend", function() {
                    return (0, s.removeElement)(t)
                }))
            })
        }
    }, {
        "../dom": 38,
        "../templating": 58,
        "../utils": 63
    }],
    32: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        Object.assign, e("./fetchData"), e("./call");
        r = e("./reviewFetcher");
        (e = r) && e.__esModule
    }, {
        "./call": 29,
        "./fetchData": 30,
        "./reviewFetcher": 33
    }],
    33: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            },
            n = function(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), e
            };

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var s = e("../../fn"),
            o = e("../call"),
            l = e("./util"),
            e = e("./responseProcessor"),
            u = (e = e) && e.__esModule ? e : {
                default: e
            };
        var c = "No reviews available",
            e = (n(d, [{
                key: "consumeReviews",
                value: function(t) {
                    var r = this;
                    return function() {
                        return r.produceReviews().then(function(e) {
                            return t(i({}, r.wrapArgs, {
                                baseData: r.baseData,
                                reviews: e,
                                hasMoreReviews: r.hasMoreReviews,
                                loadMoreReviews: r.consumeReviews.bind(r)
                            }))
                        }).catch(function(e) {
                            if (e === c) return t(i({}, r.wrapArgs, {
                                baseData: r.baseData,
                                reviews: [],
                                hasMoreReviews: !1,
                                loadMoreReviews: r.consumeReviews.bind(r)
                            }));
                            throw e
                        })
                    }
                }
            }, {
                key: "produceReviews",
                value: function() {
                    var r = this;
                    return 0 === this.reviews.length ? Promise.reject(c) : this.reviewsPerPage >= this.reviews.length ? this._fetchReviews().then(function(e) {
                        var t, e = r._makeResponseProcessor(e);
                        return r.nextPage = e.getNextPageLinks(), (t = r.reviews).push.apply(t, function(e) {
                            if (Array.isArray(e)) {
                                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                                return r
                            }
                            return Array.from(e)
                        }(e.getReviews())), r._takeReviews()
                    }) : Promise.resolve(this._takeReviews())
                }
            }, {
                key: "_takeReviews",
                value: function() {
                    return this.reviews.splice(0, this.reviewsPerPage)
                }
            }, {
                key: "_fetchReviews",
                value: function() {
                    return (0, s.promiseAllObject)((0, s.mapObject)(o.apiCall, this.nextPage))
                }
            }, {
                key: "_makeResponseProcessor",
                value: function(e) {
                    return new u.default(e, {
                        includeImportedReviews: this.includeImportedReviews,
                        displayName: this.baseData.businessEntity.displayName
                    })
                }
            }, {
                key: "hasMoreReviews",
                get: function() {
                    return 0 < this.reviews.length
                }
            }]), d);

        function d(e) {
            var t = e.reviewsPerPage,
                r = e.includeImportedReviews,
                i = e.baseData,
                e = function(e, t) {
                    var r, i = {};
                    for (r in e) 0 <= t.indexOf(r) || Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
                    return i
                }(e, ["reviewsPerPage", "includeImportedReviews", "baseData"]);
            if (!(this instanceof d)) throw new TypeError("Cannot call a class as a function");
            var n = (0, l.getNextPageLinks)(function(e) {
                return (0, s.pipeMaybe)((0, s.prop)(e), (0, s.prop)("links"), (0, s.prop)("nextPage"))
            });
            this.reviewsPerPage = t, this.includeImportedReviews = r, this.baseData = i, this.nextPage = n(i, r), this.wrapArgs = e, this.reviews = this._makeResponseProcessor(i).getReviews()
        }
        r.default = e
    }, {
        "../../fn": 39,
        "../call": 29,
        "./responseProcessor": 34,
        "./util": 35
    }],
    35: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getNextPageLinks = void 0;
        var n = e("../../fn");
        r.getNextPageLinks = function(i) {
            return function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    r = i("productReviews")(e),
                    t = (0, n.pipeMaybe)((0, n.guard)(t), i("importedProductReviews"))(e);
                return (0, n.rejectNullaryValues)({
                    productReviews: r,
                    importedProductReviews: t
                })
            }
        }
    }, {
        "../../fn": 39
    }],
    34: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            },
            n = function(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), e
            };

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var s = e("../../fn"),
            o = e("./util");

        function l(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        n(u, [{
            key: "getReviews",
            value: function() {
                var t = this,
                    e = this.response,
                    r = e.productReviews,
                    e = e.importedProductReviews,
                    r = (0, s.pipeMaybe)((0, s.propMaybe)("productReviews"), (0, s.propMaybe)("reviews"))(r) || [],
                    e = (0, s.pipeMaybe)((0, s.guard)(this.includeImportedReviews), (0, s.propMaybe)("importedProductReviews"), (0, s.propMaybe)("productReviews"), (0, s.map)(function(e) {
                        return i({}, e, {
                            verifiedBy: "External" === e.type && e.source ? e.source.name : t.displayName
                        })
                    }))(e) || [];
                return [].concat(l(r), l(e)).sort(function(e, t) {
                    e = e.createdAt, t = t.createdAt;
                    return new Date(t) - new Date(e)
                })
            }
        }, {
            key: "getNextPageLinks",
            value: function() {
                var e = (0, o.getNextPageLinks)(function(e) {
                        return (0, s.pipeMaybe)((0, s.prop)(e), (0, s.prop)("links"), (0, s.find)(function(e) {
                            return "next-page" === e.rel
                        }), (0, s.prop)("href"))
                    }),
                    t = (0, o.getNextPageLinks)(function(e) {
                        return (0, s.pipeMaybe)((0, s.prop)(e), (0, s.prop)(e), (0, s.prop)("links"), (0, s.prop)("nextPage"))
                    })(this.response, this.includeImportedReviews),
                    e = e(this.response, this.includeImportedReviews);
                return i({}, e, t)
            }
        }]);
        e = u;

        function u(e, t) {
            var r = t.includeImportedReviews,
                t = t.displayName;
            if (!(this instanceof u)) throw new TypeError("Cannot call a class as a function");
            this.response = e, this.includeImportedReviews = r, this.displayName = t
        }
        r.default = e
    }, {
        "../../fn": 39,
        "./util": 35
    }],
    36: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.svgMap = void 0;
        var n = e("../utils");

        function i(e, t, r) {
            t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        }

        function a(e, t) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                i = Object.keys(r).reduce(function(e, t) {
                    return e[t] = (0, n.sanitizeHtmlProp)(r[t]), "color" === t && (e[t] = (0, n.sanitizeColor)(e[t])), e
                }, {});
            return '\n    <div style="position: relative; height: 0; width: 100%; padding: 0; padding-bottom: ' + e.height / e.width * 100 + '%;">\n      ' + t(e, i) + "\n    </div>\n  "
        }

        function s(e, t) {
            var r, i = t.dimensionId,
                n = t.color,
                t = t.rating;
            return '\n  <svg role="img" aria-labelledby="scaleRating" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 ' + e.width + " " + e.height + '">\n      <g class="tp-stars">\n        ' + (r = n, m[i].lines.reduce(function(e, t) {
                return e + '<line x1="' + t.x1 + '" y1="' + t.y1 + '" x2="' + t.x2 + '" y2="' + t.y2 + '" stroke="' + r + '"/>'
            }, "")) + "\n        " + (e = i, i = n, 0 === (n = t) ? "" : '\n    <rect x="' + (e = m[e].stars[n - 1]).x + '" y="0.5" width="' + e.w + '" height="' + e.h + '" fill="' + i + '" stroke="' + i + '"/>\n    ' + e.p + "\n  ") + "\n      </g>\n  </svg>"
        }

        function o(e, t) {
            var r = t.rating,
                i = t.trustScore,
                t = t.color,
                n = "starRating-" + Math.random().toString(36).substring(2);
            return '\n    <svg role="img" aria-labelledby="' + n + '" viewBox="0 0 ' + e.width + " " + e.height + '" xmlns="http://www.w3.org/2000/svg" ' + p + '>\n      <title id="' + n + '" lang="en">' + i + ' out of five star rating on Trustpilot</title>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (1 <= r && t ? t : g) + '" d="M0 46.330002h46.375586V0H0z"/>\n          <path class="tp-star__shape" d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (2 <= r && t ? t : g) + '" d="M51.24816 46.330002h46.375587V0H51.248161z"/>\n          <path class="tp-star__canvas--half" fill="' + (1.5 <= r && t ? t : g) + '" d="M51.24816 46.330002h23.187793V0H51.248161z"/>\n          <path class="tp-star__shape" d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (3 <= r && t ? t : g) + '" d="M102.532209 46.330002h46.375586V0h-46.375586z"/>\n          <path class="tp-star__canvas--half" fill="' + (2.5 <= r && t ? t : g) + '" d="M102.532209 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (4 <= r && t ? t : g) + '" d="M153.815458 46.330002h46.375586V0h-46.375586z"/>\n          <path class="tp-star__canvas--half" fill="' + (3.5 <= r && t ? t : g) + '" d="M153.815458 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>\n      </g>\n      <g class="tp-star">\n          <path class="tp-star__canvas" fill="' + (5 === r && t ? t : g) + '" d="M205.064416 46.330002h46.375587V0h-46.375587z"/>\n          <path class="tp-star__canvas--half" fill="' + (4.5 <= r && t ? t : g) + '" d="M205.064416 46.330002h23.187793V0h-23.187793z"/>\n          <path class="tp-star__shape" d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z" fill="#FFF"/>\n      </g>\n    </svg>\n  '
        }

        function l(e) {
            var t = "trustpilotLogo-" + Math.random().toString(36).substring(2);
            return '\n    <svg role="img" aria-labelledby="' + t + '" viewBox="0 0 ' + e.width + " " + e.height + '" xmlns="http://www.w3.org/2000/svg" ' + p + '>\n      <title id="' + t + '">Trustpilot</title>\n      <path class="tp-logo__text" d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z" fill="#191919"/>\n      <path class="tp-logo__star" fill="#00B67A" d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"/>\n      <path class="tp-logo__star-notch" fill="#005128" d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"/>\n    </svg>\n  '
        }

        function u(e) {
            return '\n  <svg viewBox="0 0 ' + e.width + " " + e.height + '" xmlns="http://www.w3.org/2000/svg" ' + p + '>\n      <circle class="arrow-slider-circle" cx="12" cy="12" r="11.5" fill="none" stroke="#8C8C8C"/>\n      <path class="arrow-slider-shape" fill="#8C8C8C" d="M10.5088835 12l3.3080582-3.02451041c.2440777-.22315674.2440777-.5849653 0-.80812204-.2440776-.22315673-.6398058-.22315673-.8838834 0L9.18305826 11.595939c-.24407768.2231567-.24407768.5849653 0 .808122l3.75000004 3.4285714c.2440776.2231568.6398058.2231568.8838834 0 .2440777-.2231567.2440777-.5849653 0-.808122L10.5088835 12z"/>\n  </svg>\n'
        }

        function c(e, t) {
            return t = t.elementColor, '\n<svg viewBox="0 0 ' + e.width + " " + e.height + '" xmlns=“http://www.w3.org/2000/svg“ ' + p + '>\n  <path d="M5.24040526 8.60770645c0 .40275007-.25576387.51300008-.57003092.24825004L.2361338 4.98520583C.0871841 4.86986375 0 4.69208677 0 4.50370575s.0871841-.366158.2361338-.48150008L4.67037434.14470501c.31501709-.26625004.57003092-.15450003.57003092.24825004V2.9992055h.75004069c2.86515541 0 5.31553833 2.3745004 5.91257072 4.93950083a4.3385348 4.3385348 0 0 1 .09375508.5782501c.02250123.20025004-.07500406.24450004-.21826184.10350002 0 0-.0405022-.036-.07500406-.07500001C10.18673699 7.00766398 8.14655579 6.09727666 5.98894586 5.995456h-.75004068l.00150008 2.61225045z" fill="' + (t || "#00B67A") + '" fill-rule="evenodd"/>\n</svg>\n'
        }

        function d(e) {
            return '<svg viewBox="0 0 ' + e.width + " " + e.height + '" fill="none" xmlns="http://www.w3.org/2000/svg ' + p + '">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>\n</svg>\n'
        }

        function v(e) {
            return '<svg viewBox="0 0 ' + e.width + " " + e.height + '" fill="none" xmlns="http://www.w3.org/2000/svg ' + p + '">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.09217 7.81401L9.20311 4.7031C9.44874 4.45757 9.84688 4.45757 10.0923 4.7031C10.338 4.94864 10.338 5.34673 10.0923 5.59226L6.62009 9.06448C6.59573 9.10283 6.56682 9.13912 6.53333 9.17256C6.28787 9.41821 5.88965 9.41821 5.64402 9.17256L3.7059 7.11031C3.46046 6.86464 3.46046 6.46669 3.7059 6.22102C3.95154 5.97548 4.34968 5.97548 4.59512 6.22102L6.09217 7.81401Z" fill="currentColor"/>\n</svg>\n'
        }

        function f(e) {
            return '<svg viewBox="0 0 ' + e.width + " " + e.height + '" fill="none" xmlns="http://www.w3.org/2000/svg" ' + p + '>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7056 4.07227L10.6915 1.04706C10.2986 0.65216 9.66093 0.651152 9.26704 1.04303C8.87214 1.43591 8.87113 2.0746 9.26402 2.46749L10.5656 3.77509L3.42415 3.76602H3.41407C1.96242 3.76602 1.15751 4.40169 0.738429 4.93561C0.255887 5.55012 0.0010157 6.38827 8.3031e-06 7.36041C-0.00301388 8.91482 0.819021 11.8151 2.40265 11.8161H2.40365C2.95974 11.8161 3.41105 11.3668 3.41206 10.8107C3.41206 10.3645 3.12293 9.98467 2.72098 9.85069C2.35429 9.40038 1.72568 7.60218 2.15281 6.48901C2.2868 6.14045 2.54268 5.78081 3.41407 5.78081H3.42012L10.5585 5.78988L9.25495 7.0874C8.86005 7.48029 8.85905 8.11898 9.25193 8.51186C9.44837 8.70931 9.70727 8.80904 9.96617 8.80904C10.2231 8.80904 10.4799 8.71032 10.6764 8.51589L13.7046 5.49874H13.7056C14.1116 5.08369 14.0844 4.45206 13.7056 4.07227Z" fill="currentColor"/>\n</svg>\n'
        }
        var p = 'style="position: absolute; height: 100%; width: 100%; left: 0; top: 0;"',
            m = (i(e = {}, "80x15", {
                dimensions: {
                    width: 80,
                    height: 15
                },
                lines: [{
                    x1: 80,
                    y1: 7.5,
                    x2: 0,
                    y2: 7.5
                }, {
                    x1: .5,
                    y1: 3.5,
                    x2: .5,
                    y2: 11.5
                }, {
                    x1: 20.5,
                    y1: 6,
                    x2: 20.5,
                    y2: 9
                }, {
                    x1: 40.5,
                    y1: 6,
                    x2: 40.5,
                    y2: 9
                }, {
                    x1: 60.5,
                    y1: 6,
                    x2: 60.5,
                    y2: 9
                }, {
                    x1: 80,
                    y1: 3.5,
                    x2: 80,
                    y2: 11.5
                }],
                stars: [{
                    x: 1.5,
                    w: 14,
                    h: 14,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M9.7613 6.02594H13.7205L10.5316 8.29316L8.55968 9.68372L5.35535 11.9509L6.57238 8.29316L3.36804 6.02594H7.32724L8.54427 2.36816L9.7613 6.02594ZM10.7935 9.14011L8.54429 9.69936L11.7332 11.9817L10.7935 9.14011Z" fill="white"/>'
                }, {
                    x: 13.5,
                    w: 14,
                    h: 14,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 6.02606H25.7208L22.5318 8.29328L20.5599 9.68384L17.3556 11.9511L18.5726 8.29328L15.3683 6.02606H19.3275L20.5445 2.36829L21.7615 6.02606ZM22.7938 9.14034L20.5446 9.69959L23.7335 11.9819L22.7938 9.14034Z" fill="white"/>'
                }, {
                    x: 13.5,
                    w: 14,
                    h: 14,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 6.02606H25.7208L22.5318 8.29328L20.5599 9.68384L17.3556 11.9511L18.5726 8.29328L15.3683 6.02606H19.3275L20.5445 2.36829L21.7615 6.02606ZM22.7938 9.14034L20.5446 9.69959L23.7335 11.9819L22.7938 9.14034Z" fill="white"/>'
                }, {
                    x: 33.5,
                    w: 14,
                    h: 14,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M41.7615 6.02606H45.7208L42.5318 8.29328L40.5599 9.68384L37.3556 11.9511L38.5726 8.29328L35.3683 6.02606H39.3275L40.5445 2.36829L41.7615 6.02606ZM42.7938 9.14034L40.5446 9.69959L43.7335 11.9819L42.7938 9.14034Z" fill="white"/>'
                }, {
                    x: 64.5,
                    w: 14,
                    h: 14,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M72.7615 6.02606H76.7208L73.5318 8.29328L71.5599 9.68384L68.3556 11.9511L69.5726 8.29328L66.3683 6.02606H70.3275L71.5445 2.36829L72.7615 6.02606ZM73.7935 9.14022L71.5443 9.69947L74.7332 11.9818L73.7935 9.14022Z" fill="white"/>'
                }]
            }), i(e, "90x16", {
                dimensions: {
                    width: 90,
                    height: 16
                },
                lines: [{
                    x1: 90,
                    y1: 8.5,
                    x2: 0,
                    y2: 8.5
                }, {
                    x1: .5,
                    y1: 5,
                    x2: .5,
                    y2: 12
                }, {
                    x1: 23.2185,
                    y1: 7,
                    x2: 23.2185,
                    y2: 10
                }, {
                    x1: 45.5,
                    y1: 7,
                    x2: 45.5,
                    y2: 10
                }, {
                    x1: 67.7815,
                    y1: 7,
                    x2: 67.7815,
                    y2: 10
                }, {
                    x1: 90,
                    y1: 5,
                    x2: 90,
                    y2: 12
                }],
                stars: [{
                    x: 1.5,
                    w: 15,
                    h: 15,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3454 6.42769H14.5685L11.167 8.84606L9.06363 10.3293L5.64567 12.7477L6.94384 8.84606L3.52588 6.42769H7.74903L9.04719 2.52606L10.3454 6.42769ZM11.4464 9.74948L9.04727 10.346L12.4488 12.7805L11.4464 9.74948Z" fill="white"/>'
                }, {
                    x: 15.5,
                    w: 15,
                    h: 15,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.3456 6.42781H28.5688L25.1672 8.84618L23.0639 10.3294L19.6459 12.7478L20.9441 8.84618L17.5261 6.42781H21.7493L23.0474 2.52618L24.3456 6.42781ZM25.4466 9.74967L23.0475 10.3462L26.449 12.7807L25.4466 9.74967Z" fill="white"/>'
                }, {
                    x: 37.5,
                    w: 15,
                    h: 15,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M46.3456 6.42781H50.5688L47.1672 8.84618L45.0639 10.3294L41.6459 12.7478L42.9441 8.84618L39.5261 6.42781H43.7493L45.0474 2.52618L46.3456 6.42781ZM47.4466 9.74967L45.0475 10.3462L48.449 12.7807L47.4466 9.74967Z" fill="white"/>'
                }, {
                    x: 60.5,
                    w: 15,
                    h: 15,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M69.3456 6.42781H73.5688L70.1672 8.84618L68.0639 10.3294L64.6459 12.7478L65.9441 8.84618L62.5261 6.42781H66.7493L68.0474 2.52618L69.3456 6.42781ZM70.4466 9.74967L68.0475 10.3462L71.449 12.7807L70.4466 9.74967Z" fill="white"/>'
                }, {
                    x: 73.5,
                    w: 15,
                    h: 15,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M82.3456 6.42781H86.5688L83.1672 8.84618L81.0639 10.3294L77.6459 12.7478L78.9441 8.84618L75.5261 6.42781H79.7493L81.0474 2.52618L82.3456 6.42781ZM83.4464 9.74957L81.0473 10.3461L84.4488 12.7806L83.4464 9.74957Z" fill="white"/>'
                }]
            }), i(e, "105x19", {
                dimensions: {
                    width: 105,
                    height: 19
                },
                lines: [{
                    x1: 105,
                    y1: 10,
                    x2: 0,
                    y2: 10
                }, {
                    x1: .5,
                    y1: 6,
                    x2: .5,
                    y2: 14.3125
                }, {
                    x1: 26.5,
                    y1: 8,
                    x2: 26.5,
                    y2: 12
                }, {
                    x1: 52.5,
                    y1: 8,
                    x2: 52.5,
                    y2: 12
                }, {
                    x1: 78.5,
                    y1: 8,
                    x2: 78.5,
                    y2: 12
                }, {
                    x1: 105,
                    y1: 6,
                    x2: 105,
                    y2: 14.3125
                }],
                stars: [{
                    x: 1.5,
                    w: 18,
                    h: 19,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0976 7.63288H17.1126L13.0733 10.5047L10.5756 12.2661L6.51676 15.1379L8.05834 10.5047L3.99951 7.63288H9.0145L10.5561 2.99969L12.0976 7.63288ZM13.4051 11.5774L10.5561 12.2858L14.5954 15.1768L13.4051 11.5774Z" fill="white"/>'
                }, {
                    x: 17.5682,
                    w: 18,
                    h: 18,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M28.1661 7.633H33.1811L29.1418 10.5048L26.6441 12.2662L22.5852 15.138L24.1268 10.5048L20.068 7.633H25.083L26.6246 2.99982L28.1661 7.633ZM29.4736 11.5777L26.6246 12.2861L30.6639 15.1771L29.4736 11.5777Z" fill="white"/>'
                }, {
                    x: 43.5,
                    w: 18,
                    h: 18,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M54.0979 7.633H59.1129L55.0736 10.5048L52.5758 12.2662L48.517 15.138L50.0586 10.5048L45.9998 7.633H51.0147L52.5563 2.99982L54.0979 7.633ZM55.4054 11.5777L52.5564 12.2861L56.5957 15.1771L55.4054 11.5777Z" fill="white"/>'
                }, {
                    x: 69.7046,
                    w: 18,
                    h: 18,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M80.3025 7.633H85.3175L81.2782 10.5048L78.7804 12.2662L74.7216 15.138L76.2632 10.5048L72.2043 7.633H77.2193L78.7609 2.99982L80.3025 7.633ZM81.61 11.5777L78.761 12.2861L82.8003 15.1771L81.61 11.5777Z" fill="white"/>'
                }, {
                    x: 85.7727,
                    w: 18,
                    h: 18,
                    p: '<path fill-rule="evenodd" clip-rule="evenodd" d="M96.3706 7.633H101.386L97.3463 10.5048L94.8485 12.2662L90.7897 15.138L92.3313 10.5048L88.2725 7.633H93.2874L94.829 2.99982L96.3706 7.633ZM97.6778 11.5776L94.8289 12.286L98.8682 15.177L97.6778 11.5776Z" fill="white"/>'
                }]
            }), e),
            g = "#dcdce6",
            h = {
                width: 251,
                height: 46
            },
            w = {
                width: 126,
                height: 31
            },
            b = {
                width: 24,
                height: 24
            },
            y = {
                width: 12,
                height: 9
            },
            L = {
                width: 14,
                height: 14
            },
            E = {
                width: 14,
                height: 14
            },
            I = {
                width: 14,
                height: 12
            };
        r.svgMap = {
            scale: function(e) {
                return a(m[e.dimensionId].dimensions, s, e)
            },
            stars: function(e) {
                return a(h, o, e)
            },
            logo: function() {
                return a(w, l)
            },
            arrowSlider: function() {
                return a(b, u)
            },
            replyArrow: function(e) {
                return a(y, c, e)
            },
            verifiedReview: function(e) {
                return a(L, d, e)
            },
            invitedReview: function(e) {
                return a(E, v, e)
            },
            redirectedReview: function(e) {
                return a(I, f, e)
            }
        }
    }, {
        "../utils": 63
    }],
    42: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        r.styleAlignmentPositions = ["left", "right"]
    }, {}],
    61: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.getFrameworkTranslation = r.formatLocale = r.defaultLocale = void 0;
        var e = e("../localization"),
            n = (e = e) && e.__esModule ? e : {
                default: e
            };

        function a(e) {
            var t, r = (e = e.split("-"))[0],
                e = (e = e[1]) || i[t = r] || t;
            return r && e ? r + "-" + e.toUpperCase() : s
        }
        var s = "en-US",
            i = {
                da: "DK",
                en: "US",
                ja: "JP",
                nb: "NO",
                sv: "SE"
            };
        r.defaultLocale = s, r.formatLocale = a, r.getFrameworkTranslation = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : s,
                r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [],
                t = n.default[a(t)] || n.default[s],
                e = e.split(".").reduce(function(e, t) {
                    return e[t]
                }, t),
                t = Object.keys(r).reduce(function(e, t) {
                    return e.replace(t, r[t])
                }, e);
            return i.reduce(function(e, t) {
                return e.replace("[LINK-END]", "</a>").replace("[LINK-BEGIN]", t)
            }, t)
        }
    }, {
        "../localization": 17
    }],
    46: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = function(e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
        };

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var l = e("../utils"),
            s = e("../dom"),
            e = e("./controls");
        e = function(e) {
            var t = a;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);

            function a(e, t) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    i = this,
                    n = a;
                if (i instanceof n) return (i = function(e, t) {
                    if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e, t))).callbacks = r.callbacks || {}, i.disabledClass = r.disabledClass, i;
                throw new TypeError("Cannot call a class as a function")
            }
            return t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), i(a, [{
                key: "attachListeners",
                value: function() {
                    function e() {}
                    var t = this,
                        r = this.elements,
                        i = r.prevArrow,
                        r = r.nextArrow,
                        n = this.callbacks,
                        a = n.prevPage,
                        s = void 0 === a ? e : a,
                        a = n.nextPage,
                        o = void 0 === a ? e : a;
                    (0, l.addEventListener)(i, "click", function() {
                        t.slider.moveContent(-1), s()
                    }), (0, l.addEventListener)(r, "click", function() {
                        t.slider.moveContent(1), o()
                    })
                }
            }, {
                key: "styleArrow",
                value: function(e, t) {
                    var r = this.disabledClass;
                    (t ? (0, s.addClass) : (0, s.removeClass))(e, r)
                }
            }, {
                key: "styleArrows",
                value: function() {
                    var e = this.elements,
                        t = e.prevArrow,
                        e = e.nextArrow;
                    this.styleArrow(t, this.slider.isAtFirstPage()), this.styleArrow(e, this.slider.isAtLastPage())
                }
            }, {
                key: "onUpdate",
                value: function() {
                    this.styleArrows()
                }
            }]), a
        }(((e = e) && e.__esModule ? e : {
            default: e
        }).default);
        r.default = e
    }, {
        "../dom": 38,
        "../utils": 63,
        "./controls": 47
    }],
    47: [function(e, t, r) {
        "use strict";

        function i(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function n(e, t) {
            if (!(this instanceof n)) throw new TypeError("Cannot call a class as a function");
            this.slider = e, this.elements = t
        }
        Object.defineProperty(r, "__esModule", {
                value: !0
            }),
            function(e, t, r) {
                t && i(e.prototype, t), r && i(e, r)
            }(n, [{
                key: "initialize",
                value: function() {
                    this.attachListeners(), this.slider.attachObserver(this), this.slider.initialize(), this.onUpdate()
                }
            }, {
                key: "attachListeners",
                value: function() {
                    throw new Error("attachListeners method not yet implemented")
                }
            }, {
                key: "onUpdate",
                value: function() {
                    throw new Error("onUpdate method not yet implemented")
                }
            }, {
                key: "onPageChange",
                value: function() {
                    this.onUpdate()
                }
            }, {
                key: "onResize",
                value: function() {
                    this.onUpdate()
                }
            }]), r.default = n
    }, {}],
    49: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = function(e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
        };

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var s = e("../utils"),
            o = e("../dom"),
            e = e("./controls");
        e = function(e) {
            var t = a;
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);

            function a(e, t) {
                var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                    i = this,
                    n = a;
                if (i instanceof n) return (i = function(e, t) {
                    if (e) return !t || "object" != typeof t && "function" != typeof t ? e : t;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, e, t))).callbacks = r.callbacks || [], i.activeClass = r.activeClass, i;
                throw new TypeError("Cannot call a class as a function")
            }
            return t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e), i(a, [{
                key: "attachListeners",
                value: function() {
                    function r() {}
                    var i = this,
                        e = this.elements;
                    e.forEach(function(e, t) {
                        0 === t && (0, o.addClass)(e, i.activeClass), (0, s.addEventListener)(e, "click", function() {
                            i.slider.jumpToPage(t + 1), (i.callbacks[t] || r)()
                        })
                    })
                }
            }, {
                key: "onUpdate",
                value: function() {
                    var r = this;
                    this.elements.forEach(function(e, t) {
                        (r.slider.currentPage === t + 1 ? (0, o.addClass) : (0, o.removeClass))(e, r.activeClass)
                    })
                }
            }]), a
        }(((e = e) && e.__esModule ? e : {
            default: e
        }).default);
        r.default = e
    }, {
        "../dom": 38,
        "../utils": 63,
        "./controls": 47
    }],
    50: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = function(e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
        };

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var a = e("../utils"),
            s = e("../touch");

        function o(e, t, r) {
            return Math.max(Math.min(e, r), t)
        }
        i(l, [{
            key: "setReviewsPerPage",
            value: function(e) {
                "number" == typeof e ? this.reviewsPerPage = [{
                    minWidth: 0,
                    reviewsForWidth: e
                }] : (this.reviewsPerPage = e, this.reviewsPerPage.sort(function(e, t) {
                    e = e.minWidth;
                    return t.minWidth - e
                }))
            }
        }, {
            key: "populateSlider",
            value: function() {
                this.elements.slider.innerHTML = this.reviews.map(this.template.bind(this)).join("")
            }
        }, {
            key: "initialize",
            value: function() {
                this.isInitialized || (this.populateSlider(), this.calculateReviewsPerPage(), this.touch = new s.TrustBoxesTouch({
                    targetElement: this.elements.slider,
                    pageWidth: this.sliderContainerWidth,
                    touchStartCallback: this.touchStartCallback,
                    touchMoveCallback: this.touchMoveCallback,
                    touchEndCallback: this.touchEndCallback
                }), this.touch.attach(), this.windowResize(), this.attachResizeListener(), this.attachPopoverListeners(), this.isInitialized = !0)
            }
        }, {
            key: "getFirstVisibleReviewIndex",
            value: function() {
                return this._reviewsPerPage * (this.currentPage - 1)
            }
        }, {
            key: "isAtFirstPage",
            value: function() {
                return 1 === this.currentPage
            }
        }, {
            key: "isAtLastPage",
            value: function() {
                return this.currentPage === this.totalPages
            }
        }, {
            key: "setSliderTranslateX",
            value: function(e) {
                this.elements.slider.style.transform = "translateX(" + e + "px)"
            }
        }, {
            key: "setSliderTransitionDuration",
            value: function(e) {
                this.elements.slider.style.transitionDuration = e + "s"
            }
        }, {
            key: "reviewElementMargins",
            value: function() {
                var e;
                return 0 !== this.reviewElements.length && this.reviewElements[0] ? (e = window.getComputedStyle(this.reviewElements[0]), {
                    left: parseInt(e.marginLeft),
                    right: parseInt(e.marginRight)
                }) : {
                    left: 0,
                    right: 0
                }
            }
        }, {
            key: "calculateReviewsPerPage",
            value: function() {
                var e = this.reviewsPerPage.reduce(function(e, t) {
                    var r = t.minWidth,
                        t = t.reviewsForWidth;
                    return !e && document.documentElement.clientWidth >= r ? {
                        minWidth: r,
                        reviewsForWidth: t
                    } : e
                }, null);
                this._reviewsPerPage = e.reviewsForWidth, this._defaultSliderWidth = e.minWidth
            }
        }, {
            key: "attachObserver",
            value: function(e) {
                this.observers.push(e)
            }
        }, {
            key: "detachObserver",
            value: function(t) {
                this.observers = this.observers.filter(function(e) {
                    return e !== t
                })
            }
        }, {
            key: "attachResizeListener",
            value: function() {
                var e = this;
                (0, a.addEventListener)(window, "resize", function() {
                    null !== e.resizeTimeout && window.clearTimeout(e.resizeTimeout), e.resizeTimeout = window.setTimeout(function() {
                        e.windowResize()
                    }, 200)
                })
            }
        }, {
            key: "attachPopoverListeners",
            value: function() {
                var i = this;
                this.elements.slider.querySelectorAll(".tp-widget-review__source.popover-activator").forEach(function(r) {
                    (0, a.addEventListener)(r, "mouseover", function() {
                        var e = r.querySelector(".tp-widget-review__source__information"),
                            t = r.querySelector(".tp-widget-review__source__arrow");
                        (0, a.handlePopoverPosition)(r, e, i.elements.sliderContainer, t)
                    })
                })
            }
        }, {
            key: "windowResize",
            value: function() {
                var t = this;
                this.setPageOnResize();
                var e = Math.ceil(this.reviewCount / this._reviewsPerPage) * this._reviewsPerPage * this.reviewWidthWithMargins;
                this.elements.slider.style.width = e + "px", this.reviewElements.forEach(function(e) {
                    e.style.width = t.reviewWidth + "px"
                }), this.observers.forEach(function(e) {
                    return e.onResize()
                })
            }
        }, {
            key: "setPageOnResize",
            value: function() {
                this.currentPage;
                var e = this._reviewsPerPage * (this.currentPage - 1),
                    e = (this.calculateReviewsPerPage(), Math.floor(e / this._reviewsPerPage) + 1);
                this.jumpToPage(e, 0), this.touch.setPageWidth(this.sliderContainerWidth)
            }
        }, {
            key: "moveContent",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                    e = o(e + this.currentPage, 1, this.totalPages);
                this.jumpToPage(e, t)
            }
        }, {
            key: "pageOffset",
            value: function(e) {
                return this.sliderContainerWidth * (e - 1) * -1
            }
        }, {
            key: "jumpToPage",
            value: function(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                    r = this.pageOffset(e);
                this.setSliderTranslateX(r), this.setSliderTransitionDuration(t), this.currentPage = e, this.observers.forEach(function(e) {
                    return e.onPageChange()
                })
            }
        }, {
            key: "totalPages",
            get: function() {
                return Math.ceil(this.reviewCount / this._reviewsPerPage)
            }
        }, {
            key: "reviewWidth",
            get: function() {
                var e = this.reviewElementMargins(),
                    t = e.left,
                    e = e.right;
                return this.reviewWidthWithMargins - (t + e)
            }
        }, {
            key: "reviewWidthWithMargins",
            get: function() {
                return this.sliderContainerWidth / this._reviewsPerPage
            }
        }, {
            key: "sliderContainerWidth",
            get: function() {
                var e = this.reviewElementMargins(),
                    t = e.right,
                    e = e.left;
                return (this.elements.sliderContainer.offsetWidth || this._defaultSliderWidth) + t + e
            }
        }, {
            key: "reviewElements",
            get: function() {
                return [].slice.call(this.elements.slider.getElementsByClassName(this.reviewClass))
            }
        }]);
        e = l;

        function l(e, t, r) {
            var i = this,
                n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {},
                a = this,
                s = l;
            if (!(a instanceof s)) throw new TypeError("Cannot call a class as a function");
            this.reviews = e, this.elements = t, this.reviewCount = e.length, this.template = r, this.reviewClass = n.reviewClass, this.setReviewsPerPage(n.reviewsPerPage), this.currentPage = 1, this.resizeTimeout = null, this.observers = [], this.isInitialized = !1, this.touchStartCallback = function(e) {
                var t = e.translateX,
                    e = e.originPage;
                i.setSliderTransitionDuration(0), i.setSliderTranslateX(t), i.currentPage = e
            }, this.touchMoveCallback = function(e) {
                e = e.translateX;
                i.setSliderTranslateX(e)
            }, this.touchEndCallback = function(e) {
                var t = e.pagesToSwipe,
                    e = e.transitionDuration;
                i.moveContent(t, o(e, .2, 1))
            }
        }
        r.default = e
    }, {
        "../touch": 60,
        "../utils": 63
    }],
    60: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var i = function(e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
        };

        function n(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        Math.sign = Math.sign || function(e) {
            return (0 < e) - (e < 0) || +e
        }, r.TrustBoxesTouch = (i(s, [{
            key: "getDragDistance",
            value: function() {
                return {
                    x: this.touchPosition.stop.x - this.touchPosition.start.x,
                    y: this.touchPosition.stop.y - this.touchPosition.start.y
                }
            }
        }, {
            key: "getPagesToSwipe",
            value: function(e) {
                var t = this.getDragDistance().x + this.offsetDistanceX,
                    r = Math.abs(t) % this.pageWidth,
                    t = Math.ceil(Math.abs(t / this.pageWidth)) || 1;
                return r > this.sensitivity && !e ? t : t - 1
            }
        }, {
            key: "setPageWidth",
            value: function(e) {
                this.pageWidth = e
            }
        }, {
            key: "attach",
            value: function() {
                var i = this;
                this.targetElement.addEventListener("touchstart", function(e) {
                    i.startTouchTime = (new Date).getTime(), i.touchPosition.start.x = e.changedTouches[0].screenX, i.touchPosition.start.y = e.changedTouches[0].screenY;
                    var t = window.getComputedStyle(i.targetElement),
                        r = 0;
                    window.DOMMatrix && (r = new window.DOMMatrix(t.webkitTransform).m41, i.initialX = Math.round(r / i.pageWidth) * i.pageWidth, i.offsetDistanceX = r - i.initialX), i.scrollAxis = "none", 5 < Math.abs(i.offsetDistanceX) && (e.preventDefault(), i.scrollAxis = "x"), i.touchStartCallback({
                        translateX: r,
                        originPage: Math.abs(i.initialX) / i.pageWidth + 1
                    })
                }), this.targetElement.addEventListener("touchmove", function(e) {
                    i.touchPosition.stop.x = e.changedTouches[0].screenX, i.touchPosition.stop.y = e.changedTouches[0].screenY;
                    var t = i.getDragDistance();
                    "none" === i.scrollAxis && (i.scrollAxis = Math.abs(t.x) >= Math.abs(t.y) ? "x" : "y"), "x" === i.scrollAxis && (e.preventDefault(), i.directionX = t.x - i.lastDragDistanceX, i.lastDragDistanceX = t.x, i.touchMoveCallback({
                        translateX: t.x + i.offsetDistanceX + i.initialX
                    }))
                }), this.targetElement.addEventListener("touchend", function() {
                    var e = ((new Date).getTime() - i.startTouchTime) / 1e3,
                        t = i.getDragDistance(),
                        e = Math.abs(t.x) / e,
                        e = i.pageWidth / e,
                        t = t.x + i.offsetDistanceX + i.initialX,
                        t = Math.sign(i.initialX - t),
                        r = Math.sign(i.directionX) === t,
                        r = "x" === i.scrollAxis ? i.getPagesToSwipe(r) : 0;
                    i.touchEndCallback({
                        pagesToSwipe: r * t,
                        transitionDuration: e
                    })
                })
            }
        }]), s);

        function s(e) {
            var t = e.targetElement,
                t = void 0 === t ? null : t,
                r = e.pageWidth,
                r = void 0 === r ? null : r,
                i = e.sensitivity,
                i = void 0 === i ? 25 : i,
                n = e.touchEndCallback,
                n = void 0 === n ? function() {} : n,
                a = e.touchMoveCallback,
                a = void 0 === a ? function() {} : a,
                e = e.touchStartCallback,
                e = void 0 === e ? function() {} : e;
            if (!(this instanceof s)) throw new TypeError("Cannot call a class as a function");
            this.targetElement = t, this.pageWidth = r, this.sensitivity = i, this.touchEndCallback = n, this.touchMoveCallback = a, this.touchStartCallback = e, this.initialX = 0, this.offsetDistanceX = 0, this.startTouchTime = 0, this.lastDragDistanceX = 0, this.directionX = 0, this.scrollAxis = "none", this.touchPosition = {
                start: {
                    x: 0,
                    y: 0
                },
                stop: {
                    x: 0,
                    y: 0
                }
            }, this.targetElement.style.userSelect = "none", this.targetElement.style.transitionTimingFunction = "ease"
        }
    }, {}],
    51: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var o = e("./translations"),
            l = {
                0: "january",
                1: "february",
                2: "march",
                3: "april",
                4: "may",
                5: "june",
                6: "july",
                7: "august",
                8: "september",
                9: "october",
                10: "november",
                11: "december"
            };

        function u(e, t) {
            return (i = t) < (r = e) && i / 2 <= r % i ? Math.ceil(e / t) : Math.floor(e / t);
            var r, i
        }

        function c(e) {
            return 1 === e ? "singular" : "plural"
        }
        r.default = function(e, t) {
            var r, i, n, a, s;
            return t ? (e = (0, o.formatLocale)(e), t = Date.parse(t), a = new Date(t), r = new Date, t = u(r = Math.floor((r - t) / 1e3), 60), i = u(t, 60), 7 <= (n = u(i, 24)) ? (s = a.getMonth(), a = a.getDate(), s = (0, o.getFrameworkTranslation)("monthNames." + l[s], e), e === o.defaultLocale ? s + " " + a : "ja-JP" === e ? s + " " + a + "日" : a + " " + s) : 0 < n ? (0, o.getFrameworkTranslation)("timeAgo.days." + c(n), e, {
                "[count]": n
            }) : 0 < i ? (0, o.getFrameworkTranslation)("timeAgo.hours." + c(i), e, {
                "[count]": i
            }) : 0 < t ? (0, o.getFrameworkTranslation)("timeAgo.minutes." + c(t), e, {
                "[count]": t
            }) : 0 <= r ? (0, o.getFrameworkTranslation)("timeAgo.seconds." + c(r), e, {
                "[count]": r
            }) : void 0) : null
        }
    }, {
        "./translations": 61
    }],
    59: [function(e, t, r) {
        "use strict";

        function i(e) {
            var t = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&apos;",
                "/": "&sol;",
                "=": "&equals;",
                "`": "&grave;"
            };
            return e.replace(/[<>"'`=\/]/g, function(e) {
                return t[e]
            })
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.truncateText = function(e, t) {
            if (isNaN(t)) return e;
            if (t <= 0) return "";
            if (e && e.length > t) {
                for (var r = (e = e.substring(0, t)).charAt(e.length - 1);
                    " " === r || "." === r || "," === r;) r = (e = e.substr(0, e.length - 1)).charAt(e.length - 1);
                e += "..."
            }
            return i(e)
        }, r.escapeHtml = i
    }, {}],
    62: [function(e, t, r) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.LabelTypes = void 0;
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r, i = arguments[t];
                    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
                }
                return e
            },
            n = function(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), e
            };

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        var s = e("./translations"),
            o = e("./templating"),
            l = e("./utils"),
            e = e("./queryString");

        function u(e, t, r) {
            t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        }

        function c(e) {
            var t = {};
            return u(t, g.NOT_VERIFIED, {
                icon: "",
                label: function() {
                    return ""
                },
                infoTitle: function() {
                    return ""
                }
            }), u(t, g.VERIFIED, {
                icon: "verifiedReview",
                label: function() {
                    return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.verifiedReview.label", e)
                },
                infoTitle: function() {
                    return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.verifiedReview.infoTitle", e)
                }
            }), u(t, g.REDIRECTED, {
                icon: "redirectedReview",
                label: function() {
                    return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.redirectedReview.label", e)
                },
                infoTitle: function() {
                    return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.redirectedReview.infoTitle", e)
                }
            }), u(t, g.INVITED, {
                icon: "invitedReview",
                label: function() {
                    return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.label", e)
                },
                infoTitle: function() {
                    return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.infoTitle", e)
                }
            }), t
        }
        var d = (0, l.getTrustpilotBusinessUnitId)(),
            v = (0, e.getQueryParams)().businessunitId,
            f = {
                VERIFIED: "verified",
                INVITED: "invited",
                REDIRECTED: "redirected",
                NOT_VERIFIED: "not-verified"
            },
            p = {
                BASIC_LINK: "BasicLink",
                DOMAIN_LINK: "DomainLink",
                BANNER_REDIRECT: "BannerRedirect",
                INVITATION_LINK_API: "InvitationLinkApi",
                BUSINESS_GENERATED_LINK: "BusinessGeneratedLink",
                LEGACY_UNIQUE_LINK: "LegacyUniqueLink",
                UNIQUE_LINK: "UniqueLink",
                EMBEDDED_BUSINESS_GENERATED_LINK_FORM: "EmbeddedBusinessGeneratedLinkForm",
                EMBEDDED_UNIQUE_LINK_FORM: "EmbeddedUniqueLinkForm",
                KICKSTART: "Kickstart",
                COPY_PASTE_INVITATION: "CopyPasteInvitation",
                FILE_UPLOAD_INVITATION: "FileUploadInvitation",
                MANUAL_INPUT_INVITATION: "ManualInputInvitation"
            },
            m = {
                COMPLIANCE_DOCUMENTATION: "complianceDocumentation"
            },
            g = r.LabelTypes = {
                VERIFIED: "Verified",
                INVITED: "Invited",
                REDIRECTED: "Redirected",
                NOT_VERIFIED: "Not verified"
            },
            h = {
                VERIFIED_DOE: "Verified DoE",
                VERIFIED_AUTOMATIC: "Verified automatic",
                INVITED_MANUAL: "Invited manual",
                INVITED_SELF_INVITER: "Invited self-inviter",
                INVITED_TRUSTPILOT: "Invited Trustpilot",
                REDIRECTED: "Redirected",
                NOT_VERIFIED: "Not verified"
            },
            w = (n(b, [{
                key: "labelNotTranslated",
                value: function() {
                    return this.labelType
                }
            }, {
                key: "label",
                value: function() {
                    return c(this.locale)[this.labelType].label()
                }
            }, {
                key: "tooltipTitle",
                value: function() {
                    return c(this.locale)[this.labelType].infoTitle()
                }
            }, {
                key: "tooltipContent",
                value: function() {
                    return e = this.locale, u(t = {}, h.NOT_VERIFIED, {
                        info: function() {
                            return ""
                        }
                    }), u(t, h.VERIFIED_AUTOMATIC, {
                        info: function() {
                            return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.verifiedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/223402468#verified-reviews-2" target="_blank">'])
                        }
                    }), u(t, h.VERIFIED_DOE, {
                        info: function() {
                            return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.verifiedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/201819697" target="_blank">'])
                        }
                    }), u(t, h.REDIRECTED, {
                        info: function() {
                            return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.redirectedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/223402468#redirected-5" target="_blank">'])
                        }
                    }), u(t, h.INVITED_MANUAL, {
                        info: function() {
                            return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/223402468#invited-reviews-3" target="_blank">'])
                        }
                    }), u(t, h.INVITED_SELF_INVITER, {
                        info: function() {
                            return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.info", e, {}, ['<a href="https://support.trustpilot.com/hc/articles/223402468#invited-reviews-3" target="_blank">'])
                        }
                    }), u(t, h.INVITED_TRUSTPILOT, {
                        info: function() {
                            return (0, s.getFrameworkTranslation)("reviews.serviceReviewTypeLabels.invitedReview.infoTrustpilot", e, {
                                "[BOLD-BEGIN]": "<b>",
                                "[BOLD-END]": "</b>"
                            })
                        }
                    }), t[this.tooltipType].info();
                    var e, t
                }
            }, {
                key: "icon",
                value: function() {
                    var e;
                    return (e = c(this.locale)[this.labelType].icon) && (0, o.mkElemWithSvgLookup)(e)
                }
            }]), b);

        function b(e, t, r) {
            if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function");
            this.labelType = e, this.tooltipType = t, this.locale = r
        }

        function y(e) {
            function t() {
                return -1 !== [p.KICKSTART, p.COPY_PASTE_INVITATION, p.FILE_UPLOAD_INVITATION, p.MANUAL_INPUT_INVITATION].indexOf(s)
            }

            function r() {
                var e = [p.INVITATION_LINK_API, p.BUSINESS_GENERATED_LINK, p.LEGACY_UNIQUE_LINK, p.UNIQUE_LINK, p.EMBEDDED_BUSINESS_GENERATED_LINK_FORM, p.EMBEDDED_UNIQUE_LINK_FORM, p.BANNER_REDIRECT],
                    t = new Date(n),
                    r = new Date("2020-10-02");
                return -1 !== e.indexOf(s) && r <= t
            }
            var i = e.locale,
                n = e.createdAt,
                a = e.isVerified,
                s = e.reviewSource,
                o = e.verificationLevel,
                l = e.verificationSource;
            if (o) switch (o) {
                case f.VERIFIED:
                    return l === m.COMPLIANCE_DOCUMENTATION ? new w(g.VERIFIED, h.VERIFIED_DOE, i) : new w(g.VERIFIED, h.VERIFIED_AUTOMATIC, i);
                case f.INVITED:
                    if (t()) return new w(g.INVITED, h.INVITED_MANUAL, i);
                    if (r()) return new w(g.INVITED, h.INVITED_SELF_INVITER, i);
                    if (s === p.BASIC_LINK) return new w(g.NOT_VERIFIED, h.NOT_VERIFIED, i);
                    break;
                case f.REDIRECTED:
                    return new w(g.REDIRECTED, h.REDIRECTED, i);
                case f.NOT_VERIFIED:
                    return new w(g.NOT_VERIFIED, h.NOT_VERIFIED, i)
            }
            return a ? l === m.COMPLIANCE_DOCUMENTATION ? new w(g.VERIFIED, h.VERIFIED_DOE, i) : t() ? new w(g.INVITED, h.INVITED_MANUAL, i) : r() ? new w(g.INVITED, h.INVITED_SELF_INVITER, i) : new w(g.VERIFIED, h.VERIFIED_AUTOMATIC, i) : s !== p.BASIC_LINK && s === p.DOMAIN_LINK ? new w(g.REDIRECTED, h.REDIRECTED, i) : new w(g.NOT_VERIFIED, h.NOT_VERIFIED, i)
        }
        r.default = function(e, t) {
            t = y(i({
                locale: e
            }, t.verification));
            return t.labelType === g.INVITED && v === d ? new w(g.INVITED, h.INVITED_TRUSTPILOT, e) : t
        }
    }, {
        "./queryString": 43,
        "./templating": 58,
        "./translations": 61,
        "./utils": 63
    }]
}, {}, [1]);
//# sourceMappingURL=main.js.map