(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [417], {
        9101: function(e, t, s) {
            "use strict";
            s.d(t, {
                ZP: function() {
                    return o
                }
            });
            const n = {
                    _origin: "https://api.emailjs.com"
                },
                i = (e, t, s) => {
                    if (!e) throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";
                    if (!t) throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
                    if (!s) throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
                    return !0
                };
            class r {
                constructor(e) {
                    this.status = e.status, this.text = e.responseText
                }
            }
            const a = (e, t, s = {}) => new Promise(((i, a) => {
                const o = new XMLHttpRequest;
                o.addEventListener("load", (({
                    target: e
                }) => {
                    const t = new r(e);
                    200 === t.status || "OK" === t.text ? i(t) : a(t)
                })), o.addEventListener("error", (({
                    target: e
                }) => {
                    a(new r(e))
                })), o.open("POST", n._origin + e, !0), Object.keys(s).forEach((e => {
                    o.setRequestHeader(e, s[e])
                })), o.send(t)
            }));
            var o = {
                init: (e, t = "https://api.emailjs.com") => {
                    n._userID = e, n._origin = t
                },
                send: (e, t, s, r) => {
                    const o = r || n._userID;
                    i(o, e, t);
                    const l = {
                        lib_version: "3.2.0",
                        user_id: o,
                        service_id: e,
                        template_id: t,
                        template_params: s
                    };
                    return a("/api/v1.0/email/send", JSON.stringify(l), {
                        "Content-type": "application/json"
                    })
                },
                sendForm: (e, t, s, r) => {
                    const o = r || n._userID,
                        l = (e => {
                            let t;
                            if (t = "string" === typeof e ? document.querySelector(e) : e, !t || "FORM" !== t.nodeName) throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
                            return t
                        })(s);
                    i(o, e, t);
                    const d = new FormData(l);
                    return d.append("lib_version", "3.2.0"), d.append("service_id", e), d.append("template_id", t), d.append("user_id", o), a("/api/v1.0/email/send-form", d)
                }
            }
        },
        9008: function(e, t, s) {
            e.exports = s(3121)
        },
        5774: function(e, t, s) {
            "use strict";
            s.d(t, {
                Ip: function() {
                    return l
                },
                y3: function() {
                    return d
                }
            });
            var n = s(7294),
                i = function(e, t) {
                    return i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var s in t) t.hasOwnProperty(s) && (e[s] = t[s])
                    }, i(e, t)
                };

            function r(e) {
                var t = e.className,
                    s = e.counterClockwise,
                    i = e.dashRatio,
                    r = e.pathRadius,
                    l = e.strokeWidth,
                    d = e.style;
                return (0, n.createElement)("path", {
                    className: t,
                    style: Object.assign({}, d, o({
                        pathRadius: r,
                        dashRatio: i,
                        counterClockwise: s
                    })),
                    d: a({
                        pathRadius: r,
                        counterClockwise: s
                    }),
                    strokeWidth: l,
                    fillOpacity: 0
                })
            }

            function a(e) {
                var t = e.pathRadius,
                    s = e.counterClockwise ? 1 : 0;
                return "\n      M 50,50\n      m 0,-" + t + "\n      a " + t + "," + t + " " + s + " 1 1 0," + 2 * t + "\n      a " + t + "," + t + " " + s + " 1 1 0,-" + 2 * t + "\n    "
            }

            function o(e) {
                var t = e.counterClockwise,
                    s = e.dashRatio,
                    n = e.pathRadius,
                    i = 2 * Math.PI * n,
                    r = (1 - s) * i;
                return {
                    strokeDasharray: i + "px " + i + "px",
                    strokeDashoffset: (t ? -r : r) + "px"
                }
            }
            var l = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return function(e, t) {
                    function s() {
                        this.constructor = e
                    }
                    i(e, t), e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s)
                }(t, e), t.prototype.getBackgroundPadding = function() {
                    return this.props.background ? this.props.backgroundPadding : 0
                }, t.prototype.getPathRadius = function() {
                    return 50 - this.props.strokeWidth / 2 - this.getBackgroundPadding()
                }, t.prototype.getPathRatio = function() {
                    var e = this.props,
                        t = e.value,
                        s = e.minValue,
                        n = e.maxValue;
                    return (Math.min(Math.max(t, s), n) - s) / (n - s)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.circleRatio,
                        s = e.className,
                        i = e.classes,
                        a = e.counterClockwise,
                        o = e.styles,
                        l = e.strokeWidth,
                        d = e.text,
                        c = this.getPathRadius(),
                        p = this.getPathRatio();
                    return (0, n.createElement)("svg", {
                        className: i.root + " " + s,
                        style: o.root,
                        viewBox: "0 0 100 100",
                        "data-test-id": "CircularProgressbar"
                    }, this.props.background ? (0, n.createElement)("circle", {
                        className: i.background,
                        style: o.background,
                        cx: 50,
                        cy: 50,
                        r: 50
                    }) : null, (0, n.createElement)(r, {
                        className: i.trail,
                        counterClockwise: a,
                        dashRatio: t,
                        pathRadius: c,
                        strokeWidth: l,
                        style: o.trail
                    }), (0, n.createElement)(r, {
                        className: i.path,
                        counterClockwise: a,
                        dashRatio: p * t,
                        pathRadius: c,
                        strokeWidth: l,
                        style: o.path
                    }), d ? (0, n.createElement)("text", {
                        className: i.text,
                        style: o.text,
                        x: 50,
                        y: 50
                    }, d) : null)
                }, t.defaultProps = {
                    background: !1,
                    backgroundPadding: 0,
                    circleRatio: 1,
                    classes: {
                        root: "CircularProgressbar",
                        trail: "CircularProgressbar-trail",
                        path: "CircularProgressbar-path",
                        text: "CircularProgressbar-text",
                        background: "CircularProgressbar-background"
                    },
                    counterClockwise: !1,
                    className: "",
                    maxValue: 100,
                    minValue: 0,
                    strokeWidth: 8,
                    styles: {
                        root: {},
                        trail: {},
                        path: {},
                        text: {},
                        background: {}
                    },
                    text: ""
                }, t
            }(n.Component);

            function d(e) {
                var t = e.rotation,
                    s = e.strokeLinecap,
                    n = e.textColor,
                    i = e.textSize,
                    r = e.pathColor,
                    a = e.pathTransition,
                    o = e.pathTransitionDuration,
                    l = e.trailColor,
                    d = e.backgroundColor,
                    p = null == t ? void 0 : "rotate(" + t + "turn)",
                    u = null == t ? void 0 : "center center";
                return {
                    root: {},
                    path: c({
                        stroke: r,
                        strokeLinecap: s,
                        transform: p,
                        transformOrigin: u,
                        transition: a,
                        transitionDuration: null == o ? void 0 : o + "s"
                    }),
                    trail: c({
                        stroke: l,
                        strokeLinecap: s,
                        transform: p,
                        transformOrigin: u
                    }),
                    text: c({
                        fill: n,
                        fontSize: i
                    }),
                    background: c({
                        fill: d
                    })
                }
            }

            function c(e) {
                return Object.keys(e).forEach((function(t) {
                    null == e[t] && delete e[t]
                })), e
            }
        },
        5541: function() {
            (function() {
                var e, t, s, n, i, r = function(e, t) {
                        return function() {
                            return e.apply(t, arguments)
                        }
                    },
                    a = [].indexOf || function(e) {
                        for (var t = 0, s = this.length; t < s; t++)
                            if (t in this && this[t] === e) return t;
                        return -1
                    };
                t = function() {
                    function e() {}
                    return e.prototype.extend = function(e, t) {
                        var s, n;
                        for (s in t) n = t[s], null == e[s] && (e[s] = n);
                        return e
                    }, e.prototype.isMobile = function(e) {
                        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
                    }, e.prototype.createEvent = function(e, t, s, n) {
                        var i;
                        return null == t && (t = !1), null == s && (s = !1), null == n && (n = null), null != document.createEvent ? (i = document.createEvent("CustomEvent")).initCustomEvent(e, t, s, n) : null != document.createEventObject ? (i = document.createEventObject()).eventType = e : i.eventName = e, i
                    }, e.prototype.emitEvent = function(e, t) {
                        return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
                    }, e.prototype.addEvent = function(e, t, s) {
                        return null != e.addEventListener ? e.addEventListener(t, s, !1) : null != e.attachEvent ? e.attachEvent("on" + t, s) : e[t] = s
                    }, e.prototype.removeEvent = function(e, t, s) {
                        return null != e.removeEventListener ? e.removeEventListener(t, s, !1) : null != e.detachEvent ? e.detachEvent("on" + t, s) : delete e[t]
                    }, e.prototype.innerHeight = function() {
                        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
                    }, e
                }(), s = this.WeakMap || this.MozWeakMap || (s = function() {
                    function e() {
                        this.keys = [], this.values = []
                    }
                    return e.prototype.get = function(e) {
                        var t, s, n, i;
                        for (t = s = 0, n = (i = this.keys).length; s < n; t = ++s)
                            if (i[t] === e) return this.values[t]
                    }, e.prototype.set = function(e, t) {
                        var s, n, i, r;
                        for (s = n = 0, i = (r = this.keys).length; n < i; s = ++n)
                            if (r[s] === e) return void(this.values[s] = t);
                        return this.keys.push(e), this.values.push(t)
                    }, e
                }()), e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
                    function e() {
                        "undefined" !== typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" !== typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                    }
                    return e.notSupported = !0, e.prototype.observe = function() {}, e
                }()), n = this.getComputedStyle || function(e, t) {
                    return this.getPropertyValue = function(t) {
                        var s;
                        return "float" === t && (t = "styleFloat"), i.test(t) && t.replace(i, (function(e, t) {
                            return t.toUpperCase()
                        })), (null != (s = e.currentStyle) ? s[t] : void 0) || null
                    }, this
                }, i = /(\-([a-z]){1})/g, this.WOW = function() {
                    function i(e) {
                        null == e && (e = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(e, this.defaults), null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)), this.animationNameCache = new s, this.wowEvent = this.util().createEvent(this.config.boxClass)
                    }
                    return i.prototype.defaults = {
                        boxClass: "wow",
                        animateClass: "animated",
                        offset: 0,
                        mobile: !0,
                        live: !0,
                        callback: null,
                        scrollContainer: null
                    }, i.prototype.init = function() {
                        var e;
                        return this.element = window.document.documentElement, "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
                    }, i.prototype.start = function() {
                        var t, s, n, i, r;
                        if (this.stopped = !1, this.boxes = function() {
                                var e, s, n, i;
                                for (i = [], e = 0, s = (n = this.element.querySelectorAll("." + this.config.boxClass)).length; e < s; e++) t = n[e], i.push(t);
                                return i
                            }.call(this), this.all = function() {
                                var e, s, n, i;
                                for (i = [], e = 0, s = (n = this.boxes).length; e < s; e++) t = n[e], i.push(t);
                                return i
                            }.call(this), this.boxes.length)
                            if (this.disabled()) this.resetStyle();
                            else
                                for (s = 0, n = (i = this.boxes).length; s < n; s++) t = i[s], this.applyStyle(t, !0);
                        if (this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) return new e((r = this, function(e) {
                            var t, s, n, i, a;
                            for (a = [], t = 0, s = e.length; t < s; t++) i = e[t], a.push(function() {
                                var e, t, s, r;
                                for (r = [], e = 0, t = (s = i.addedNodes || []).length; e < t; e++) n = s[e], r.push(this.doSync(n));
                                return r
                            }.call(r));
                            return a
                        })).observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }, i.prototype.stop = function() {
                        if (this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval) return clearInterval(this.interval)
                    }, i.prototype.sync = function(t) {
                        if (e.notSupported) return this.doSync(this.element)
                    }, i.prototype.doSync = function(e) {
                        var t, s, n, i, r;
                        if (null == e && (e = this.element), 1 === e.nodeType) {
                            for (r = [], s = 0, n = (i = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass)).length; s < n; s++) t = i[s], a.call(this.all, t) < 0 ? (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                            return r
                        }
                    }, i.prototype.show = function(e) {
                        return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), this.util().emitEvent(e, this.wowEvent), this.util().addEvent(e, "animationend", this.resetAnimation), this.util().addEvent(e, "oanimationend", this.resetAnimation), this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation), e
                    }, i.prototype.applyStyle = function(e, t) {
                        var s, n, i, r;
                        return n = e.getAttribute("data-wow-duration"), s = e.getAttribute("data-wow-delay"), i = e.getAttribute("data-wow-iteration"), this.animate((r = this, function() {
                            return r.customStyle(e, t, n, s, i)
                        }))
                    }, i.prototype.animate = "requestAnimationFrame" in window ? function(e) {
                        return window.requestAnimationFrame(e)
                    } : function(e) {
                        return e()
                    }, i.prototype.resetStyle = function() {
                        var e, t, s, n, i;
                        for (i = [], t = 0, s = (n = this.boxes).length; t < s; t++) e = n[t], i.push(e.style.visibility = "visible");
                        return i
                    }, i.prototype.resetAnimation = function(e) {
                        var t;
                        if (e.type.toLowerCase().indexOf("animationend") >= 0) return (t = e.target || e.srcElement).className = t.className.replace(this.config.animateClass, "").trim()
                    }, i.prototype.customStyle = function(e, t, s, n, i) {
                        return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", s && this.vendorSet(e.style, {
                            animationDuration: s
                        }), n && this.vendorSet(e.style, {
                            animationDelay: n
                        }), i && this.vendorSet(e.style, {
                            animationIterationCount: i
                        }), this.vendorSet(e.style, {
                            animationName: t ? "none" : this.cachedAnimationName(e)
                        }), e
                    }, i.prototype.vendors = ["moz", "webkit"], i.prototype.vendorSet = function(e, t) {
                        var s, n, i, r;
                        for (s in n = [], t) i = t[s], e["" + s] = i, n.push(function() {
                            var t, n, a, o;
                            for (o = [], t = 0, n = (a = this.vendors).length; t < n; t++) r = a[t], o.push(e["" + r + s.charAt(0).toUpperCase() + s.substr(1)] = i);
                            return o
                        }.call(this));
                        return n
                    }, i.prototype.vendorCSS = function(e, t) {
                        var s, i, r, a, o, l;
                        for (a = (o = n(e)).getPropertyCSSValue(t), s = 0, i = (r = this.vendors).length; s < i; s++) l = r[s], a = a || o.getPropertyCSSValue("-" + l + "-" + t);
                        return a
                    }, i.prototype.animationName = function(e) {
                        var t;
                        try {
                            t = this.vendorCSS(e, "animation-name").cssText
                        } catch (s) {
                            t = n(e).getPropertyValue("animation-name")
                        }
                        return "none" === t ? "" : t
                    }, i.prototype.cacheAnimationName = function(e) {
                        return this.animationNameCache.set(e, this.animationName(e))
                    }, i.prototype.cachedAnimationName = function(e) {
                        return this.animationNameCache.get(e)
                    }, i.prototype.scrollHandler = function() {
                        return this.scrolled = !0
                    }, i.prototype.scrollCallback = function() {
                        var e;
                        if (this.scrolled && (this.scrolled = !1, this.boxes = function() {
                                var t, s, n, i;
                                for (i = [], t = 0, s = (n = this.boxes).length; t < s; t++)(e = n[t]) && (this.isVisible(e) ? this.show(e) : i.push(e));
                                return i
                            }.call(this), !this.boxes.length && !this.config.live)) return this.stop()
                    }, i.prototype.offsetTop = function(e) {
                        for (var t; void 0 === e.offsetTop;) e = e.parentNode;
                        for (t = e.offsetTop; e = e.offsetParent;) t += e.offsetTop;
                        return t
                    }, i.prototype.isVisible = function(e) {
                        var t, s, n, i, r;
                        return s = e.getAttribute("data-wow-offset") || this.config.offset, i = (r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - s, t = (n = this.offsetTop(e)) + e.clientHeight, n <= i && t >= r
                    }, i.prototype.util = function() {
                        return null != this._util ? this._util : this._util = new t
                    }, i.prototype.disabled = function() {
                        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                    }, i
                }()
            }).call(this)
        },
        8352: function(e, t, s) {
            "use strict";
            s.d(t, {
                tq: function() {
                    return y
                },
                o5: function() {
                    return E
                }
            });
            var n = s(7294),
                i = s(8116);

            function r(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function a(e, t) {
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : a(e[s], t[s]) : e[s] = t[s]
                }))
            }

            function o(e) {
                return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function l(e) {
                return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
            }

            function d(e) {
                return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function c(e) {
                void 0 === e && (e = "");
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    s = [];
                return t.forEach((e => {
                    s.indexOf(e) < 0 && s.push(e)
                })), s.join(" ")
            }
            const p = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"];

            function u(e, t) {
                let s = t.slidesPerView;
                if (t.breakpoints) {
                    const e = i.ZP.prototype.getBreakpoint(t.breakpoints),
                        n = e in t.breakpoints ? t.breakpoints[e] : void 0;
                    n && n.slidesPerView && (s = n.slidesPerView)
                }
                let n = Math.ceil(parseFloat(t.loopedSlides || s, 10));
                return n += t.loopAdditionalSlides, n > e.length && (n = e.length), n
            }

            function f(e) {
                const t = [];
                return n.Children.toArray(e).forEach((e => {
                    e.type && "SwiperSlide" === e.type.displayName ? t.push(e) : e.props && e.props.children && f(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function h(e) {
                const t = [],
                    s = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return n.Children.toArray(e).forEach((e => {
                    if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
                    else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const n = f(e.props.children);
                        n.length > 0 ? n.forEach((e => t.push(e))) : s["container-end"].push(e)
                    } else s["container-end"].push(e)
                })), {
                    slides: t,
                    slots: s
                }
            }

            function m(e) {
                let {
                    swiper: t,
                    slides: s,
                    passedParams: n,
                    changedParams: i,
                    nextEl: o,
                    prevEl: l,
                    scrollbarEl: d,
                    paginationEl: c
                } = e;
                const p = i.filter((e => "children" !== e && "direction" !== e)),
                    {
                        params: u,
                        pagination: f,
                        navigation: h,
                        scrollbar: m,
                        virtual: g,
                        thumbs: v
                    } = t;
                let w, b, y, C, E;
                i.includes("thumbs") && n.thumbs && n.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (w = !0), i.includes("controller") && n.controller && n.controller.control && u.controller && !u.controller.control && (b = !0), i.includes("pagination") && n.pagination && (n.pagination.el || c) && (u.pagination || !1 === u.pagination) && f && !f.el && (y = !0), i.includes("scrollbar") && n.scrollbar && (n.scrollbar.el || d) && (u.scrollbar || !1 === u.scrollbar) && m && !m.el && (C = !0), i.includes("navigation") && n.navigation && (n.navigation.prevEl || l) && (n.navigation.nextEl || o) && (u.navigation || !1 === u.navigation) && h && !h.prevEl && !h.nextEl && (E = !0);
                if (p.forEach((e => {
                        if (r(u[e]) && r(n[e])) a(u[e], n[e]);
                        else {
                            const i = n[e];
                            !0 !== i && !1 !== i || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? u[e] = n[e] : !1 === i && t[s = e] && (t[s].destroy(), "navigation" === s ? (u[s].prevEl = void 0, u[s].nextEl = void 0, t[s].prevEl = void 0, t[s].nextEl = void 0) : (u[s].el = void 0, t[s].el = void 0))
                        }
                        var s
                    })), p.includes("controller") && !b && t.controller && t.controller.control && u.controller && u.controller.control && (t.controller.control = u.controller.control), i.includes("children") && g && u.virtual.enabled ? (g.slides = s, g.update(!0)) : i.includes("children") && t.lazy && t.params.lazy.enabled && t.lazy.load(), w) {
                    v.init() && v.update(!0)
                }
                b && (t.controller.control = u.controller.control), y && (c && (u.pagination.el = c), f.init(), f.render(), f.update()), C && (d && (u.scrollbar.el = d), m.init(), m.updateSize(), m.setTranslate()), E && (o && (u.navigation.nextEl = o), l && (u.navigation.prevEl = l), h.init(), h.update()), i.includes("allowSlideNext") && (t.allowSlideNext = n.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = n.allowSlidePrev), i.includes("direction") && t.changeDirection(n.direction, !1), t.update()
            }

            function g(e, t) {
                return "undefined" === typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
            const v = (0, n.createContext)(null),
                w = (0, n.createContext)(null);

            function b() {
                return b = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }, b.apply(this, arguments)
            }
            const y = (0, n.forwardRef)((function(e, t) {
                let {
                    className: s,
                    tag: f = "div",
                    wrapperTag: v = "div",
                    children: y,
                    onSwiper: C,
                    ...E
                } = void 0 === e ? {} : e, S = !1;
                const [x, T] = (0, n.useState)("swiper"), [k, P] = (0, n.useState)(null), [M, O] = (0, n.useState)(!1), $ = (0, n.useRef)(!1), L = (0, n.useRef)(null), _ = (0, n.useRef)(null), A = (0, n.useRef)(null), N = (0, n.useRef)(null), z = (0, n.useRef)(null), I = (0, n.useRef)(null), D = (0, n.useRef)(null), B = (0, n.useRef)(null), {
                    params: G,
                    passedParams: j,
                    rest: H,
                    events: R
                } = function(e) {
                    void 0 === e && (e = {});
                    const t = {
                            on: {}
                        },
                        s = {},
                        n = {};
                    a(t, i.ZP.defaults), a(t, i.ZP.extendedDefaults), t._emitClasses = !0, t.init = !1;
                    const o = {},
                        l = p.map((e => e.replace(/_/, "")));
                    return Object.keys(e).forEach((i => {
                        l.indexOf(i) >= 0 ? r(e[i]) ? (t[i] = {}, n[i] = {}, a(t[i], e[i]), a(n[i], e[i])) : (t[i] = e[i], n[i] = e[i]) : 0 === i.search(/on[A-Z]/) && "function" === typeof e[i] ? s[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : o[i] = e[i]
                    })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e]
                    })), {
                        params: t,
                        passedParams: n,
                        rest: o,
                        events: s
                    }
                }(E), {
                    slides: F,
                    slots: V
                } = h(y), W = () => {
                    O(!M)
                };
                Object.assign(G.on, {
                    _containerClasses(e, t) {
                        T(t)
                    }
                });
                const q = () => {
                    if (Object.assign(G.on, R), S = !0, _.current = new i.ZP(G), _.current.loopCreate = () => {}, _.current.loopDestroy = () => {}, G.loop && (_.current.loopedSlides = u(F, G)), _.current.virtual && _.current.params.virtual.enabled) {
                        _.current.virtual.slides = F;
                        const e = {
                            cache: !1,
                            slides: F,
                            renderExternal: P,
                            renderExternalUpdate: !1
                        };
                        a(_.current.params.virtual, e), a(_.current.originalParams.virtual, e)
                    }
                };
                L.current || q(), _.current && _.current.on("_beforeBreakpoint", W);
                return (0, n.useEffect)((() => () => {
                    _.current && _.current.off("_beforeBreakpoint", W)
                })), (0, n.useEffect)((() => {
                    !$.current && _.current && (_.current.emitSlidesClasses(), $.current = !0)
                })), g((() => {
                    if (t && (t.current = L.current), L.current) return _.current.destroyed && q(),
                        function(e, t) {
                            let {
                                el: s,
                                nextEl: n,
                                prevEl: i,
                                paginationEl: r,
                                scrollbarEl: a,
                                swiper: c
                            } = e;
                            o(t) && n && i && (c.params.navigation.nextEl = n, c.originalParams.navigation.nextEl = n, c.params.navigation.prevEl = i, c.originalParams.navigation.prevEl = i), l(t) && r && (c.params.pagination.el = r, c.originalParams.pagination.el = r), d(t) && a && (c.params.scrollbar.el = a, c.originalParams.scrollbar.el = a), c.init(s)
                        }({
                            el: L.current,
                            nextEl: z.current,
                            prevEl: I.current,
                            paginationEl: D.current,
                            scrollbarEl: B.current,
                            swiper: _.current
                        }, G), C && C(_.current), () => {
                            _.current && !_.current.destroyed && _.current.destroy(!0, !1)
                        }
                }), []), g((() => {
                    !S && R && _.current && Object.keys(R).forEach((e => {
                        _.current.on(e, R[e])
                    }));
                    const e = function(e, t, s, n) {
                        const i = [];
                        if (!t) return i;
                        const a = e => {
                                i.indexOf(e) < 0 && i.push(e)
                            },
                            o = n.map((e => e.key)),
                            l = s.map((e => e.key));
                        return o.join("") !== l.join("") && a("children"), n.length !== s.length && a("children"), p.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                            if (s in e && s in t)
                                if (r(e[s]) && r(t[s])) {
                                    const n = Object.keys(e[s]),
                                        i = Object.keys(t[s]);
                                    n.length !== i.length ? a(s) : (n.forEach((n => {
                                        e[s][n] !== t[s][n] && a(s)
                                    })), i.forEach((n => {
                                        e[s][n] !== t[s][n] && a(s)
                                    })))
                                } else e[s] !== t[s] && a(s)
                        })), i
                    }(j, A.current, F, N.current);
                    return A.current = j, N.current = F, e.length && _.current && !_.current.destroyed && m({
                        swiper: _.current,
                        slides: F,
                        passedParams: j,
                        changedParams: e,
                        nextEl: z.current,
                        prevEl: I.current,
                        scrollbarEl: B.current,
                        paginationEl: D.current
                    }), () => {
                        R && _.current && Object.keys(R).forEach((e => {
                            _.current.off(e, R[e])
                        }))
                    }
                })), g((() => {
                    var e;
                    !(e = _.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [k]), n.createElement(f, b({
                    ref: L,
                    className: c(`${x}${s?` ${s}`:""}`)
                }, H), n.createElement(w.Provider, {
                    value: _.current
                }, V["container-start"], n.createElement(v, {
                    className: "swiper-wrapper"
                }, V["wrapper-start"], G.virtual ? function(e, t, s) {
                    if (!s) return null;
                    const i = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${s.offset}px`
                    } : {
                        top: `${s.offset}px`
                    };
                    return t.filter(((e, t) => t >= s.from && t <= s.to)).map((t => n.cloneElement(t, {
                        swiper: e,
                        style: i
                    })))
                }(_.current, F, k) : !G.loop || _.current && _.current.destroyed ? F.map((e => n.cloneElement(e, {
                    swiper: _.current
                }))) : function(e, t, s) {
                    const i = t.map(((t, s) => n.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": s
                    })));

                    function r(e, t, i) {
                        return n.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${i}`,
                            className: `${e.props.className||""} ${s.slideDuplicateClass}`
                        })
                    }
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - i.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup)
                            for (let t = 0; t < e; t += 1) {
                                const e = n.createElement("div", {
                                    className: `${s.slideClass} ${s.slideBlankClass}`
                                });
                                i.push(e)
                            }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = i.length);
                    const a = u(i, s),
                        o = [],
                        l = [];
                    return i.forEach(((e, t) => {
                        t < a && l.push(r(e, t, "prepend")), t < i.length && t >= i.length - a && o.push(r(e, t, "append"))
                    })), e && (e.loopedSlides = a), [...o, ...i, ...l]
                }(_.current, F, G), V["wrapper-end"]), o(G) && n.createElement(n.Fragment, null, n.createElement("div", {
                    ref: I,
                    className: "swiper-button-prev"
                }), n.createElement("div", {
                    ref: z,
                    className: "swiper-button-next"
                })), d(G) && n.createElement("div", {
                    ref: B,
                    className: "swiper-scrollbar"
                }), l(G) && n.createElement("div", {
                    ref: D,
                    className: "swiper-pagination"
                }), V["container-end"]))
            }));

            function C() {
                return C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
                    }
                    return e
                }, C.apply(this, arguments)
            }
            y.displayName = "Swiper";
            const E = (0, n.forwardRef)((function(e, t) {
                let {
                    tag: s = "div",
                    children: i,
                    className: r = "",
                    swiper: a,
                    zoom: o,
                    virtualIndex: l,
                    ...d
                } = void 0 === e ? {} : e;
                const p = (0, n.useRef)(null),
                    [u, f] = (0, n.useState)("swiper-slide");

                function h(e, t, s) {
                    t === p.current && f(s)
                }
                g((() => {
                    if (t && (t.current = p.current), p.current && a) {
                        if (!a.destroyed) return a.on("_slideClass", h), () => {
                            a && a.off("_slideClass", h)
                        };
                        "swiper-slide" !== u && f("swiper-slide")
                    }
                })), g((() => {
                    a && p.current && !a.destroyed && f(a.getSlideClasses(p.current))
                }), [a]);
                const m = {
                        isActive: u.indexOf("swiper-slide-active") >= 0 || u.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: u.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: u.indexOf("swiper-slide-prev") >= 0 || u.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: u.indexOf("swiper-slide-next") >= 0 || u.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    w = () => "function" === typeof i ? i(m) : i;
                return n.createElement(s, C({
                    ref: p,
                    className: c(`${u}${r?` ${r}`:""}`),
                    "data-swiper-slide-index": l
                }, d), n.createElement(v.Provider, {
                    value: m
                }, o ? n.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof o ? o : void 0
                }, w()) : w()))
            }));
            E.displayName = "SwiperSlide"
        },
        8116: function(e, t, s) {
            "use strict";

            function n(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function i(e = {}, t = {}) {
                Object.keys(t).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : n(t[s]) && n(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s])
                }))
            }
            s.d(t, {
                pt: function() {
                    return ae
                },
                xW: function() {
                    return le
                },
                W_: function() {
                    return ne
                },
                tl: function() {
                    return re
                },
                ZP: function() {
                    return te
                }
            });
            const r = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return i(e, r), e
            }
            const o = {
                document: r,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function l() {
                const e = "undefined" !== typeof window ? window : {};
                return i(e, o), e
            }
            class d extends Array {
                constructor(e) {
                    "number" === typeof e ? super(e) : (super(...e || []), function(e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function c(e = []) {
                const t = [];
                return e.forEach((e => {
                    Array.isArray(e) ? t.push(...c(e)) : t.push(e)
                })), t
            }

            function p(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function u(e, t) {
                const s = l(),
                    n = a();
                let i = [];
                if (!t && e instanceof d) return e;
                if (!e) return new d(i);
                if ("string" === typeof e) {
                    const s = e.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        let e = "div";
                        0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                        const t = n.createElement(e);
                        t.innerHTML = s;
                        for (let s = 0; s < t.childNodes.length; s += 1) i.push(t.childNodes[s])
                    } else i = function(e, t) {
                        if ("string" !== typeof e) return [e];
                        const s = [],
                            n = t.querySelectorAll(e);
                        for (let i = 0; i < n.length; i += 1) s.push(n[i]);
                        return s
                    }(e.trim(), t || n)
                } else if (e.nodeType || e === s || e === n) i.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof d) return e;
                    i = e
                }
                return new d(function(e) {
                    const t = [];
                    for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
                    return t
                }(i))
            }
            u.fn = d.prototype;
            const f = "resize scroll".split(" ");

            function h(e) {
                return function(...t) {
                    if ("undefined" === typeof t[0]) {
                        for (let t = 0; t < this.length; t += 1) f.indexOf(e) < 0 && (e in this[t] ? this[t][e]() : u(this[t]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            h("click"), h("blur"), h("focus"), h("focusin"), h("focusout"), h("keyup"), h("keydown"), h("keypress"), h("submit"), h("change"), h("mousedown"), h("mousemove"), h("mouseup"), h("mouseenter"), h("mouseleave"), h("mouseout"), h("mouseover"), h("touchstart"), h("touchend"), h("touchmove"), h("resize"), h("scroll");
            const m = {
                addClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.add(...t)
                    })), this
                },
                removeClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return this.forEach((e => {
                        e.classList.remove(...t)
                    })), this
                },
                hasClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    return p(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
                },
                toggleClass: function(...e) {
                    const t = c(e.map((e => e.split(" "))));
                    this.forEach((e => {
                        t.forEach((t => {
                            e.classList.toggle(t)
                        }))
                    }))
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" === typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let s = 0; s < this.length; s += 1)
                        if (2 === arguments.length) this[s].setAttribute(e, t);
                        else
                            for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" !== typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let [t, s, n, i] = e;

                    function r(e) {
                        const t = e.target;
                        if (!t) return;
                        const i = e.target.dom7EventData || [];
                        if (i.indexOf(e) < 0 && i.unshift(e), u(t).is(s)) n.apply(t, i);
                        else {
                            const e = u(t).parents();
                            for (let t = 0; t < e.length; t += 1) u(e[t]).is(s) && n.apply(e[t], i)
                        }
                    }

                    function a(e) {
                        const t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
                    }
                    "function" === typeof e[1] && ([t, n, i] = e, s = void 0), i || (i = !1);
                    const o = t.split(" ");
                    let l;
                    for (let d = 0; d < this.length; d += 1) {
                        const e = this[d];
                        if (s)
                            for (l = 0; l < o.length; l += 1) {
                                const t = o[l];
                                e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                                    listener: n,
                                    proxyListener: r
                                }), e.addEventListener(t, r, i)
                            } else
                                for (l = 0; l < o.length; l += 1) {
                                    const t = o[l];
                                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                                        listener: n,
                                        proxyListener: a
                                    }), e.addEventListener(t, a, i)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, s, n, i] = e;
                    "function" === typeof e[1] && ([t, n, i] = e, s = void 0), i || (i = !1);
                    const r = t.split(" ");
                    for (let a = 0; a < r.length; a += 1) {
                        const e = r[a];
                        for (let t = 0; t < this.length; t += 1) {
                            const r = this[t];
                            let a;
                            if (!s && r.dom7Listeners ? a = r.dom7Listeners[e] : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[e]), a && a.length)
                                for (let t = a.length - 1; t >= 0; t -= 1) {
                                    const s = a[t];
                                    n && s.listener === n || n && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === n ? (r.removeEventListener(e, s.proxyListener, i), a.splice(t, 1)) : n || (r.removeEventListener(e, s.proxyListener, i), a.splice(t, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    const t = l(),
                        s = e[0].split(" "),
                        n = e[1];
                    for (let i = 0; i < s.length; i += 1) {
                        const r = s[i];
                        for (let s = 0; s < this.length; s += 1) {
                            const i = this[s];
                            if (t.CustomEvent) {
                                const s = new t.CustomEvent(r, {
                                    detail: n,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                i.dom7EventData = e.filter(((e, t) => t > 0)), i.dispatchEvent(s), i.dom7EventData = [], delete i.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    const t = this;
                    return e && t.on("transitionend", (function s(n) {
                        n.target === this && (e.call(this, n), t.off("transitionend", s))
                    })), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            const e = this.styles();
                            return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    const e = l();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        const e = l(),
                            t = a(),
                            s = this[0],
                            n = s.getBoundingClientRect(),
                            i = t.body,
                            r = s.clientTop || i.clientTop || 0,
                            o = s.clientLeft || i.clientLeft || 0,
                            d = s === e ? e.scrollY : s.scrollTop,
                            c = s === e ? e.scrollX : s.scrollLeft;
                        return {
                            top: n.top + d - r,
                            left: n.left + c - o
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    const s = l();
                    let n;
                    if (1 === arguments.length) {
                        if ("string" !== typeof e) {
                            for (n = 0; n < this.length; n += 1)
                                for (const t in e) this[n].style[t] = e[t];
                            return this
                        }
                        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" === typeof e) {
                        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    return e ? (this.forEach(((t, s) => {
                        e.apply(t, [t, s])
                    })), this) : this
                },
                html: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if ("undefined" === typeof e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    const t = l(),
                        s = a(),
                        n = this[0];
                    let i, r;
                    if (!n || "undefined" === typeof e) return !1;
                    if ("string" === typeof e) {
                        if (n.matches) return n.matches(e);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                        if (n.msMatchesSelector) return n.msMatchesSelector(e);
                        for (i = u(e), r = 0; r < i.length; r += 1)
                            if (i[r] === n) return !0;
                        return !1
                    }
                    if (e === s) return n === s;
                    if (e === t) return n === t;
                    if (e.nodeType || e instanceof d) {
                        for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
                            if (i[r] === n) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if ("undefined" === typeof e) return this;
                    const t = this.length;
                    if (e > t - 1) return u([]);
                    if (e < 0) {
                        const s = t + e;
                        return u(s < 0 ? [] : [this[s]])
                    }
                    return u([this[e]])
                },
                append: function(...e) {
                    let t;
                    const s = a();
                    for (let n = 0; n < e.length; n += 1) {
                        t = e[n];
                        for (let e = 0; e < this.length; e += 1)
                            if ("string" === typeof t) {
                                const n = s.createElement("div");
                                for (n.innerHTML = t; n.firstChild;) this[e].appendChild(n.firstChild)
                            } else if (t instanceof d)
                            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                        else this[e].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    const t = a();
                    let s, n;
                    for (s = 0; s < this.length; s += 1)
                        if ("string" === typeof e) {
                            const i = t.createElement("div");
                            for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1) this[s].insertBefore(i.childNodes[n], this[s].childNodes[0])
                        } else if (e instanceof d)
                        for (n = 0; n < e.length; n += 1) this[s].insertBefore(e[n], this[s].childNodes[0]);
                    else this[s].insertBefore(e, this[s].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && u(this[0].nextElementSibling).is(e) ? u([this[0].nextElementSibling]) : u([]) : this[0].nextElementSibling ? u([this[0].nextElementSibling]) : u([]) : u([])
                },
                nextAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.nextElementSibling;) {
                        const n = s.nextElementSibling;
                        e ? u(n).is(e) && t.push(n) : t.push(n), s = n
                    }
                    return u(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        const t = this[0];
                        return e ? t.previousElementSibling && u(t.previousElementSibling).is(e) ? u([t.previousElementSibling]) : u([]) : t.previousElementSibling ? u([t.previousElementSibling]) : u([])
                    }
                    return u([])
                },
                prevAll: function(e) {
                    const t = [];
                    let s = this[0];
                    if (!s) return u([]);
                    for (; s.previousElementSibling;) {
                        const n = s.previousElementSibling;
                        e ? u(n).is(e) && t.push(n) : t.push(n), s = n
                    }
                    return u(t)
                },
                parent: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? u(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
                    return u(t)
                },
                parents: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        let n = this[s].parentNode;
                        for (; n;) e ? u(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
                    }
                    return u(t)
                },
                closest: function(e) {
                    let t = this;
                    return "undefined" === typeof e ? u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const n = this[s].querySelectorAll(e);
                        for (let e = 0; e < n.length; e += 1) t.push(n[e])
                    }
                    return u(t)
                },
                children: function(e) {
                    const t = [];
                    for (let s = 0; s < this.length; s += 1) {
                        const n = this[s].children;
                        for (let s = 0; s < n.length; s += 1) e && !u(n[s]).is(e) || t.push(n[s])
                    }
                    return u(t)
                },
                filter: function(e) {
                    return u(p(this, e))
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };
            Object.keys(m).forEach((e => {
                Object.defineProperty(u.fn, e, {
                    value: m[e],
                    writable: !0
                })
            }));
            var g = u;

            function v(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function w() {
                return Date.now()
            }

            function b(e, t) {
                void 0 === t && (t = "x");
                const s = l();
                let n, i, r;
                const a = function(e) {
                    const t = l();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), r = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = r.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
            }

            function y(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function C(e) {
                return "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
            }

            function E() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < arguments.length; s += 1) {
                    const n = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                    if (void 0 !== n && null !== n && !C(n)) {
                        const s = Object.keys(Object(n)).filter((e => t.indexOf(e) < 0));
                        for (let t = 0, i = s.length; t < i; t += 1) {
                            const i = s[t],
                                r = Object.getOwnPropertyDescriptor(n, i);
                            void 0 !== r && r.enumerable && (y(e[i]) && y(n[i]) ? n[i].__swiper__ ? e[i] = n[i] : E(e[i], n[i]) : !y(e[i]) && y(n[i]) ? (e[i] = {}, n[i].__swiper__ ? e[i] = n[i] : E(e[i], n[i])) : e[i] = n[i])
                        }
                    }
                }
                return e
            }

            function S(e, t, s) {
                e.style.setProperty(t, s)
            }

            function x(e) {
                let {
                    swiper: t,
                    targetPosition: s,
                    side: n
                } = e;
                const i = l(),
                    r = -t.translate;
                let a, o = null;
                const d = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
                const c = s > r ? "next" : "prev",
                    p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    u = () => {
                        a = (new Date).getTime(), null === o && (o = a);
                        const e = Math.max(Math.min((a - o) / d, 1), 0),
                            l = .5 - Math.cos(e * Math.PI) / 2;
                        let c = r + l * (s - r);
                        if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                                [n]: c
                            }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [n]: c
                            })
                        })), void i.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = i.requestAnimationFrame(u)
                    };
                u()
            }
            let T, k, P;

            function M() {
                return T || (T = function() {
                    const e = l(),
                        t = a();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                const s = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, s)
                            } catch (s) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), T
            }

            function O(e) {
                return void 0 === e && (e = {}), k || (k = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const s = M(),
                        n = l(),
                        i = n.navigator.platform,
                        r = t || n.navigator.userAgent,
                        a = {
                            ios: !1,
                            android: !1
                        },
                        o = n.screen.width,
                        d = n.screen.height,
                        c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let p = r.match(/(iPad).*OS\s([\d_]+)/);
                    const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                        f = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === i;
                    let m = "MacIntel" === i;
                    return !p && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${d}`) >= 0 && (p = r.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), c && !h && (a.os = "android", a.android = !0), (p || f || u) && (a.os = "ios", a.ios = !0), a
                }(e)), k
            }

            function $() {
                return P || (P = function() {
                    const e = l();
                    return {
                        isSafari: function() {
                            const t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), P
            }
            var L = {
                on(e, t, s) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;
                    const i = s ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
                    })), n
                },
                once(e, t, s) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;

                    function i() {
                        n.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                        for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++) r[a] = arguments[a];
                        t.apply(n, r)
                    }
                    return i.__emitterProxy = t, n.on(e, i, s)
                },
                onAny(e, t) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" !== typeof e) return s;
                    const n = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
                },
                off(e, t) {
                    const s = this;
                    return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((n, i) => {
                            (n === t || n.__emitterProxy && n.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                        }))
                    })), s) : s
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, s, n;
                    for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                    "string" === typeof r[0] || Array.isArray(r[0]) ? (t = r[0], s = r.slice(1, r.length), n = e) : (t = r[0].events, s = r[0].data, n = r[0].context || e), s.unshift(n);
                    return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(n, [t, ...s])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(n, s)
                        }))
                    })), e
                }
            };
            var _ = {
                updateSize: function() {
                    const e = this;
                    let t, s;
                    const n = e.$el;
                    t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : n[0].clientWidth, s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : n[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(n.css("padding-left") || 0, 10) - parseInt(n.css("padding-right") || 0, 10), s = s - parseInt(n.css("padding-top") || 0, 10) - parseInt(n.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[t]
                    }

                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0)
                    }
                    const n = e.params,
                        {
                            $wrapperEl: i,
                            size: r,
                            rtlTranslate: a,
                            wrongRTL: o
                        } = e,
                        l = e.virtual && n.virtual.enabled,
                        d = l ? e.virtual.slides.length : e.slides.length,
                        c = i.children(`.${e.params.slideClass}`),
                        p = l ? e.virtual.slides.length : c.length;
                    let u = [];
                    const f = [],
                        h = [];
                    let m = n.slidesOffsetBefore;
                    "function" === typeof m && (m = n.slidesOffsetBefore.call(e));
                    let g = n.slidesOffsetAfter;
                    "function" === typeof g && (g = n.slidesOffsetAfter.call(e));
                    const v = e.snapGrid.length,
                        w = e.slidesGrid.length;
                    let b = n.spaceBetween,
                        y = -m,
                        C = 0,
                        E = 0;
                    if ("undefined" === typeof r) return;
                    "string" === typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * r), e.virtualSize = -b, a ? c.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), n.centeredSlides && n.cssMode && (S(e.wrapperEl, "--swiper-centered-offset-before", ""), S(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const x = n.grid && n.grid.rows > 1 && e.grid;
                    let T;
                    x && e.grid.initSlides(p);
                    const k = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => "undefined" !== typeof n.breakpoints[e].slidesPerView)).length > 0;
                    for (let S = 0; S < p; S += 1) {
                        T = 0;
                        const i = c.eq(S);
                        if (x && e.grid.updateSlide(S, i, p, t), "none" !== i.css("display")) {
                            if ("auto" === n.slidesPerView) {
                                k && (c[S].style[t("width")] = "");
                                const r = getComputedStyle(i[0]),
                                    a = i[0].style.transform,
                                    o = i[0].style.webkitTransform;
                                if (a && (i[0].style.transform = "none"), o && (i[0].style.webkitTransform = "none"), n.roundLengths) T = e.isHorizontal() ? i.outerWidth(!0) : i.outerHeight(!0);
                                else {
                                    const e = s(r, "width"),
                                        t = s(r, "padding-left"),
                                        n = s(r, "padding-right"),
                                        a = s(r, "margin-left"),
                                        o = s(r, "margin-right"),
                                        l = r.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) T = e + a + o;
                                    else {
                                        const {
                                            clientWidth: s,
                                            offsetWidth: r
                                        } = i[0];
                                        T = e + t + n + a + o + (r - s)
                                    }
                                }
                                a && (i[0].style.transform = a), o && (i[0].style.webkitTransform = o), n.roundLengths && (T = Math.floor(T))
                            } else T = (r - (n.slidesPerView - 1) * b) / n.slidesPerView, n.roundLengths && (T = Math.floor(T)), c[S] && (c[S].style[t("width")] = `${T}px`);
                            c[S] && (c[S].swiperSlideSize = T), h.push(T), n.centeredSlides ? (y = y + T / 2 + C / 2 + b, 0 === C && 0 !== S && (y = y - r / 2 - b), 0 === S && (y = y - r / 2 - b), Math.abs(y) < .001 && (y = 0), n.roundLengths && (y = Math.floor(y)), E % n.slidesPerGroup === 0 && u.push(y), f.push(y)) : (n.roundLengths && (y = Math.floor(y)), (E - Math.min(e.params.slidesPerGroupSkip, E)) % e.params.slidesPerGroup === 0 && u.push(y), f.push(y), y = y + T + b), e.virtualSize += T + b, C = T, E += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, r) + g, a && o && ("slide" === n.effect || "coverflow" === n.effect) && i.css({
                            width: `${e.virtualSize+n.spaceBetween}px`
                        }), n.setWrapperSize && i.css({
                            [t("width")]: `${e.virtualSize+n.spaceBetween}px`
                        }), x && e.grid.updateWrapperSize(T, u, t), !n.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < u.length; s += 1) {
                            let i = u[s];
                            n.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                        }
                        u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
                    }
                    if (0 === u.length && (u = [0]), 0 !== n.spaceBetween) {
                        const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
                        c.filter(((e, t) => !n.cssMode || t !== c.length - 1)).css({
                            [s]: `${b}px`
                        })
                    }
                    if (n.centeredSlides && n.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (n.spaceBetween ? n.spaceBetween : 0)
                        })), e -= n.spaceBetween;
                        const t = e - r;
                        u = u.map((e => e < 0 ? -m : e > t ? t + g : e))
                    }
                    if (n.centerInsufficientSlides) {
                        let e = 0;
                        if (h.forEach((t => {
                                e += t + (n.spaceBetween ? n.spaceBetween : 0)
                            })), e -= n.spaceBetween, e < r) {
                            const t = (r - e) / 2;
                            u.forEach(((e, s) => {
                                u[s] = e - t
                            })), f.forEach(((e, s) => {
                                f[s] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: c,
                            snapGrid: u,
                            slidesGrid: f,
                            slidesSizesGrid: h
                        }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                        S(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), S(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - h[h.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    if (p !== d && e.emit("slidesLengthChange"), u.length !== v && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== w && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !l && !n.cssMode && ("slide" === n.effect || "fade" === n.effect)) {
                        const t = `${n.containerModifierClass}backface-hidden`,
                            s = e.$el.hasClass(t);
                        p <= n.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t)
                    }
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        s = [],
                        n = t.virtual && t.params.virtual.enabled;
                    let i, r = 0;
                    "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const a = e => n ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || g([])).each((e => {
                            s.push(e)
                        }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length && !n) break;
                                s.push(a(e))
                            } else s.push(a(t.activeIndex));
                    for (i = 0; i < s.length; i += 1)
                        if ("undefined" !== typeof s[i]) {
                            const e = s[i].offsetHeight;
                            r = e > r ? e : r
                        }(r || 0 === r) && t.$wrapperEl.css("height", `${r}px`)
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides;
                    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        s = t.params,
                        {
                            slides: n,
                            rtlTranslate: i,
                            snapGrid: r
                        } = t;
                    if (0 === n.length) return;
                    "undefined" === typeof n[0].swiperSlideOffset && t.updateSlidesOffset();
                    let a = -e;
                    i && (a = e), n.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let o = 0; o < n.length; o += 1) {
                        const e = n[o];
                        let l = e.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
                        const d = (a + (s.centeredSlides ? t.minTranslate() : 0) - l) / (e.swiperSlideSize + s.spaceBetween),
                            c = (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) / (e.swiperSlideSize + s.spaceBetween),
                            p = -(a - l),
                            u = p + t.slidesSizesGrid[o];
                        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o), n.eq(o).addClass(s.slideVisibleClass)), e.progress = i ? -d : d, e.originalProgress = i ? -c : c
                    }
                    t.visibleSlides = g(t.visibleSlides)
                },
                updateProgress: function(e) {
                    const t = this;
                    if ("undefined" === typeof e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        n = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: i,
                        isBeginning: r,
                        isEnd: a
                    } = t;
                    const o = r,
                        l = a;
                    0 === n ? (i = 0, r = !0, a = !0) : (i = (e - t.minTranslate()) / n, r = i <= 0, a = i >= 1), Object.assign(t, {
                        progress: i,
                        isBeginning: r,
                        isEnd: a
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !r || l && !a) && t.emit("fromEdge"), t.emit("progress", i)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            $wrapperEl: n,
                            activeIndex: i,
                            realIndex: r
                        } = e,
                        a = e.virtual && s.virtual.enabled;
                    let o;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), o = a ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), o.addClass(s.slideActiveClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? n.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : n.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                    let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === l.length && (l = t.eq(0), l.addClass(s.slideNextClass));
                    let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (l.hasClass(s.slideDuplicateClass) ? n.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : n.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? n.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : n.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: n,
                            snapGrid: i,
                            params: r,
                            activeIndex: a,
                            realIndex: o,
                            snapIndex: l
                        } = t;
                    let d, c = e;
                    if ("undefined" === typeof c) {
                        for (let e = 0; e < n.length; e += 1) "undefined" !== typeof n[e + 1] ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2 ? c = e : s >= n[e] && s < n[e + 1] && (c = e + 1) : s >= n[e] && (c = e);
                        r.normalizeSlideIndex && (c < 0 || "undefined" === typeof c) && (c = 0)
                    }
                    if (i.indexOf(s) >= 0) d = i.indexOf(s);
                    else {
                        const e = Math.min(r.slidesPerGroupSkip, c);
                        d = e + Math.floor((c - e) / r.slidesPerGroup)
                    }
                    if (d >= i.length && (d = i.length - 1), c === a) return void(d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: p,
                        previousIndex: a,
                        activeIndex: c
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    const t = this,
                        s = t.params,
                        n = g(e).closest(`.${s.slideClass}`)[0];
                    let i, r = !1;
                    if (n)
                        for (let a = 0; a < t.slides.length; a += 1)
                            if (t.slides[a] === n) {
                                r = !0, i = a;
                                break
                            }
                    if (!n || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(g(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var A = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: n,
                        $wrapperEl: i
                    } = this;
                    if (t.virtualTranslate) return s ? -n : n;
                    if (t.cssMode) return n;
                    let r = b(i[0], e);
                    return s && (r = -r), r || 0
                },
                setTranslate: function(e, t) {
                    const s = this,
                        {
                            rtlTranslate: n,
                            params: i,
                            $wrapperEl: r,
                            wrapperEl: a,
                            progress: o
                        } = s;
                    let l, d = 0,
                        c = 0;
                    s.isHorizontal() ? d = n ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                    const p = s.maxTranslate() - s.minTranslate();
                    l = 0 === p ? 0 : (e - s.minTranslate()) / p, l !== o && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, s, n, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === n && (n = !0);
                    const r = this,
                        {
                            params: a,
                            wrapperEl: o
                        } = r;
                    if (r.animating && a.preventInteractionOnTransition) return !1;
                    const l = r.minTranslate(),
                        d = r.maxTranslate();
                    let c;
                    if (c = n && e > l ? l : n && e < d ? d : e, r.updateProgress(c), a.cssMode) {
                        const e = r.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!r.support.smoothScroll) return x({
                                swiper: r,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function N(e) {
                let {
                    swiper: t,
                    runCallbacks: s,
                    direction: n,
                    step: i
                } = e;
                const {
                    activeIndex: r,
                    previousIndex: a
                } = t;
                let o = n;
                if (o || (o = r > a ? "next" : r < a ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== a) {
                    if ("reset" === o) return void t.emit(`slideResetTransition${i}`);
                    t.emit(`slideChangeTransition${i}`), "next" === o ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
                }
            }
            var z = {
                slideTo: function(e, t, s, n, i) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" !== typeof e && "string" !== typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const r = this;
                    let a = e;
                    a < 0 && (a = 0);
                    const {
                        params: o,
                        snapGrid: l,
                        slidesGrid: d,
                        previousIndex: c,
                        activeIndex: p,
                        rtlTranslate: u,
                        wrapperEl: f,
                        enabled: h
                    } = r;
                    if (r.animating && o.preventInteractionOnTransition || !h && !n && !i) return !1;
                    const m = Math.min(r.params.slidesPerGroupSkip, a);
                    let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
                    g >= l.length && (g = l.length - 1), (p || o.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
                    const v = -l[g];
                    if (r.updateProgress(v), o.normalizeSlideIndex)
                        for (let b = 0; b < d.length; b += 1) {
                            const e = -Math.floor(100 * v),
                                t = Math.floor(100 * d[b]),
                                s = Math.floor(100 * d[b + 1]);
                            "undefined" !== typeof d[b + 1] ? e >= t && e < s - (s - t) / 2 ? a = b : e >= t && e < s && (a = b + 1) : e >= t && (a = b)
                        }
                    if (r.initialized && a !== p) {
                        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== a) return !1
                    }
                    let w;
                    if (w = a > p ? "next" : a < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(a), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(v), "reset" !== w && (r.transitionStart(s, w), r.transitionEnd(s, w)), !1;
                    if (o.cssMode) {
                        const e = r.isHorizontal(),
                            s = u ? v : -v;
                        if (0 === t) {
                            const t = r.virtual && r.params.virtual.enabled;
                            t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), f[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!r.support.smoothScroll) return x({
                                swiper: r,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            f.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(s, w), 0 === t ? r.transitionEnd(s, w) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, w))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e, t, s, n) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "string" === typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const i = this;
                    let r = e;
                    return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n)
                },
                slideNext: function(e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const n = this,
                        {
                            animating: i,
                            enabled: r,
                            params: a
                        } = n;
                    if (!r) return n;
                    let o = a.slidesPerGroup;
                    "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                    const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
                    if (a.loop) {
                        if (i && a.loopPreventsSlide) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }
                    return a.rewind && n.isEnd ? n.slideTo(0, e, t, s) : n.slideTo(n.activeIndex + l, e, t, s)
                },
                slidePrev: function(e, t, s) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    const n = this,
                        {
                            params: i,
                            animating: r,
                            snapGrid: a,
                            slidesGrid: o,
                            rtlTranslate: l,
                            enabled: d
                        } = n;
                    if (!d) return n;
                    if (i.loop) {
                        if (r && i.loopPreventsSlide) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const p = c(l ? n.translate : -n.translate),
                        u = a.map((e => c(e)));
                    let f = a[u.indexOf(p) - 1];
                    if ("undefined" === typeof f && i.cssMode) {
                        let e;
                        a.forEach(((t, s) => {
                            p >= t && (e = s)
                        })), "undefined" !== typeof e && (f = a[e > 0 ? e - 1 : e])
                    }
                    let h = 0;
                    if ("undefined" !== typeof f && (h = o.indexOf(f), h < 0 && (h = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - n.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), i.rewind && n.isBeginning) {
                        const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                        return n.slideTo(i, e, t, s)
                    }
                    return n.slideTo(h, e, t, s)
                },
                slideReset: function(e, t, s) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s)
                },
                slideToClosest: function(e, t, s, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
                    const i = this;
                    let r = i.activeIndex;
                    const a = Math.min(i.params.slidesPerGroupSkip, r),
                        o = a + Math.floor((r - a) / i.params.slidesPerGroup),
                        l = i.rtlTranslate ? i.translate : -i.translate;
                    if (l >= i.snapGrid[o]) {
                        const e = i.snapGrid[o];
                        l - e > (i.snapGrid[o + 1] - e) * n && (r += i.params.slidesPerGroup)
                    } else {
                        const e = i.snapGrid[o - 1];
                        l - e <= (i.snapGrid[o] - e) * n && (r -= i.params.slidesPerGroup)
                    }
                    return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
                },
                slideToClickedSlide: function() {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: s
                        } = e,
                        n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i, r = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        i = parseInt(g(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - n / 2 || r > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                            e.slideTo(r)
                        }))) : e.slideTo(r) : r > e.slides.length - n ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), v((() => {
                            e.slideTo(r)
                        }))) : e.slideTo(r)
                    } else e.slideTo(r)
                }
            };
            var I = {
                loopCreate: function() {
                    const e = this,
                        t = a(),
                        {
                            params: s,
                            $wrapperEl: n
                        } = e,
                        i = n.children().length > 0 ? g(n.children()[0].parentNode) : n;
                    i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let r = i.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - r.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup) {
                            for (let n = 0; n < e; n += 1) {
                                const e = g(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                i.append(e)
                            }
                            r = i.children(`.${s.slideClass}`)
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > r.length && (e.loopedSlides = r.length);
                    const o = [],
                        l = [];
                    r.each(((t, s) => {
                        const n = g(t);
                        s < e.loopedSlides && l.push(t), s < r.length && s >= r.length - e.loopedSlides && o.push(t), n.attr("data-swiper-slide-index", s)
                    }));
                    for (let a = 0; a < l.length; a += 1) i.append(g(l[a].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let a = o.length - 1; a >= 0; a -= 1) i.prepend(g(o[a].cloneNode(!0)).addClass(s.slideDuplicateClass))
                },
                loopFix: function() {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: s,
                        loopedSlides: n,
                        allowSlidePrev: i,
                        allowSlideNext: r,
                        snapGrid: a,
                        rtlTranslate: o
                    } = e;
                    let l;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const d = -a[t] - e.getTranslate();
                    if (t < n) {
                        l = s.length - 3 * n + t, l += n;
                        e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                    } else if (t >= s.length - n) {
                        l = -s.length + t + n, l += n;
                        e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
                },
                loopDestroy: function() {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: s
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                }
            };

            function D(e) {
                const t = this,
                    s = a(),
                    n = l(),
                    i = t.touchEventsData,
                    {
                        params: r,
                        touches: o,
                        enabled: d
                    } = t;
                if (!d) return;
                if (t.animating && r.preventInteractionOnTransition) return;
                !t.animating && r.cssMode && r.loop && t.loopFix();
                let c = e;
                c.originalEvent && (c = c.originalEvent);
                let p = g(c.target);
                if ("wrapper" === r.touchEventsTarget && !p.closest(t.wrapperEl).length) return;
                if (i.isTouchEvent = "touchstart" === c.type, !i.isTouchEvent && "which" in c && 3 === c.which) return;
                if (!i.isTouchEvent && "button" in c && c.button > 0) return;
                if (i.isTouched && i.isMoved) return;
                !!r.noSwipingClass && "" !== r.noSwipingClass && c.target && c.target.shadowRoot && e.path && e.path[0] && (p = g(e.path[0]));
                const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
                    f = !(!c.target || !c.target.shadowRoot);
                if (r.noSwiping && (f ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(s) {
                                if (!s || s === a() || s === l()) return null;
                                s.assignedSlot && (s = s.assignedSlot);
                                const n = s.closest(e);
                                return n || s.getRootNode ? n || t(s.getRootNode().host) : null
                            }(t)
                    }(u, p[0]) : p.closest(u)[0])) return void(t.allowClick = !0);
                if (r.swipeHandler && !p.closest(r.swipeHandler)[0]) return;
                o.currentX = "touchstart" === c.type ? c.targetTouches[0].pageX : c.pageX, o.currentY = "touchstart" === c.type ? c.targetTouches[0].pageY : c.pageY;
                const h = o.currentX,
                    m = o.currentY,
                    v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                    b = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                if (v && (h <= b || h >= n.innerWidth - b)) {
                    if ("prevent" !== v) return;
                    e.preventDefault()
                }
                if (Object.assign(i, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), o.startX = h, o.startY = m, i.touchStartTime = w(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== c.type) {
                    let e = !0;
                    p.is(i.focusableElements) && (e = !1, "SELECT" === p[0].nodeName && (i.isTouched = !1)), s.activeElement && g(s.activeElement).is(i.focusableElements) && s.activeElement !== p[0] && s.activeElement.blur();
                    const n = e && t.allowTouchMove && r.touchStartPreventDefault;
                    !r.touchStartForcePreventDefault && !n || p[0].isContentEditable || c.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !r.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", c)
            }

            function B(e) {
                const t = a(),
                    s = this,
                    n = s.touchEventsData,
                    {
                        params: i,
                        touches: r,
                        rtlTranslate: o,
                        enabled: l
                    } = s;
                if (!l) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && s.emit("touchMoveOpposite", d));
                if (n.isTouchEvent && "touchmove" !== d.type) return;
                const c = "touchmove" === d.type && d.targetTouches && (d.targetTouches[0] || d.changedTouches[0]),
                    p = "touchmove" === d.type ? c.pageX : d.pageX,
                    u = "touchmove" === d.type ? c.pageY : d.pageY;
                if (d.preventedByNestedSwiper) return r.startX = p, void(r.startY = u);
                if (!s.allowTouchMove) return g(d.target).is(n.focusableElements) || (s.allowClick = !1), void(n.isTouched && (Object.assign(r, {
                    startX: p,
                    startY: u,
                    currentX: p,
                    currentY: u
                }), n.touchStartTime = w()));
                if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                    if (s.isVertical()) {
                        if (u < r.startY && s.translate <= s.maxTranslate() || u > r.startY && s.translate >= s.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                    } else if (p < r.startX && s.translate <= s.maxTranslate() || p > r.startX && s.translate >= s.minTranslate()) return;
                if (n.isTouchEvent && t.activeElement && d.target === t.activeElement && g(d.target).is(n.focusableElements)) return n.isMoved = !0, void(s.allowClick = !1);
                if (n.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                r.currentX = p, r.currentY = u;
                const f = r.currentX - r.startX,
                    h = r.currentY - r.startY;
                if (s.params.threshold && Math.sqrt(f ** 2 + h ** 2) < s.params.threshold) return;
                if ("undefined" === typeof n.isScrolling) {
                    let e;
                    s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? n.isScrolling = !1 : f * f + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(f)) / Math.PI, n.isScrolling = s.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
                }
                if (n.isScrolling && s.emit("touchMoveOpposite", d), "undefined" === typeof n.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (n.startMoving = !0)), n.isScrolling) return void(n.isTouched = !1);
                if (!n.startMoving) return;
                s.allowClick = !1, !i.cssMode && d.cancelable && d.preventDefault(), i.touchMoveStopPropagation && !i.nested && d.stopPropagation(), n.isMoved || (i.loop && !i.cssMode && s.loopFix(), n.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), n.allowMomentumBounce = !1, !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", d)), s.emit("sliderMove", d), n.isMoved = !0;
                let m = s.isHorizontal() ? f : h;
                r.diff = m, m *= i.touchRatio, o && (m = -m), s.swipeDirection = m > 0 ? "prev" : "next", n.currentTranslate = m + n.startTranslate;
                let v = !0,
                    b = i.resistanceRatio;
                if (i.touchReleaseOnEdges && (b = 0), m > 0 && n.currentTranslate > s.minTranslate() ? (v = !1, i.resistance && (n.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + n.startTranslate + m) ** b)) : m < 0 && n.currentTranslate < s.maxTranslate() && (v = !1, i.resistance && (n.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - n.startTranslate - m) ** b)), v && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), s.allowSlidePrev || s.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
                    if (!(Math.abs(m) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, n.currentTranslate = n.startTranslate, void(r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                }
                i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(n.currentTranslate), s.setTranslate(n.currentTranslate))
            }

            function G(e) {
                const t = this,
                    s = t.touchEventsData,
                    {
                        params: n,
                        touches: i,
                        rtlTranslate: r,
                        slidesGrid: a,
                        enabled: o
                    } = t;
                if (!o) return;
                let l = e;
                if (l.originalEvent && (l = l.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", l), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const d = w(),
                    c = d - s.touchStartTime;
                if (t.allowClick) {
                    const e = l.path || l.composedPath && l.composedPath();
                    t.updateClickedSlide(e && e[0] || l.target), t.emit("tap click", l), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
                }
                if (s.lastClickTime = w(), v((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                let p;
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, p = n.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
                if (t.params.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: p
                });
                let u = 0,
                    f = t.slidesSizesGrid[0];
                for (let v = 0; v < a.length; v += v < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    "undefined" !== typeof a[v + e] ? p >= a[v] && p < a[v + e] && (u = v, f = a[v + e] - a[v]) : p >= a[v] && (u = v, f = a[a.length - 1] - a[a.length - 2])
                }
                let h = null,
                    m = null;
                n.rewind && (t.isBeginning ? m = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (h = 0));
                const g = (p - a[u]) / f,
                    b = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (c > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (g >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? h : u + b) : t.slideTo(u)), "prev" === t.swipeDirection && (g > 1 - n.longSwipesRatio ? t.slideTo(u + b) : null !== m && g < 0 && Math.abs(g) > n.longSwipesRatio ? t.slideTo(m) : t.slideTo(u))
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(u + b) : t.slideTo(u) : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : u + b), "prev" === t.swipeDirection && t.slideTo(null !== m ? m : u))
                }
            }

            function j() {
                const e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: n,
                    allowSlidePrev: i,
                    snapGrid: r
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
            }

            function H(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function R() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: s,
                        enabled: n
                    } = e;
                if (!n) return;
                let i;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const r = e.maxTranslate() - e.minTranslate();
                i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            let F = !1;

            function V() {}
            const W = (e, t) => {
                const s = a(),
                    {
                        params: n,
                        touchEvents: i,
                        el: r,
                        wrapperEl: o,
                        device: l,
                        support: d
                    } = e,
                    c = !!n.nested,
                    p = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (d.touch) {
                    const t = !("touchstart" !== i.start || !d.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r[p](i.start, e.onTouchStart, t), r[p](i.move, e.onTouchMove, d.passiveListener ? {
                        passive: !1,
                        capture: c
                    } : c), r[p](i.end, e.onTouchEnd, t), i.cancel && r[p](i.cancel, e.onTouchEnd, t)
                } else r[p](i.start, e.onTouchStart, !1), s[p](i.move, e.onTouchMove, c), s[p](i.end, e.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) && r[p]("click", e.onClick, !0), n.cssMode && o[p]("scroll", e.onScroll), n.updateOnWindowResize ? e[u](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", j, !0) : e[u]("observerUpdate", j, !0)
            };
            var q = {
                attachEvents: function() {
                    const e = this,
                        t = a(),
                        {
                            params: s,
                            support: n
                        } = e;
                    e.onTouchStart = D.bind(e), e.onTouchMove = B.bind(e), e.onTouchEnd = G.bind(e), s.cssMode && (e.onScroll = R.bind(e)), e.onClick = H.bind(e), n.touch && !F && (t.addEventListener("touchstart", V), F = !0), W(e, "on")
                },
                detachEvents: function() {
                    W(this, "off")
                }
            };
            const X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var Y = {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: n = 0,
                            params: i,
                            $el: r
                        } = e,
                        a = i.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
                    if (!o || e.currentBreakpoint === o) return;
                    const l = (o in a ? a[o] : void 0) || e.originalParams,
                        d = X(e, i),
                        c = X(e, l),
                        p = i.enabled;
                    d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                        const s = i[t] && i[t].enabled,
                            n = l[t] && l[t].enabled;
                        s && !n && e[t].disable(), !s && n && e[t].enable()
                    }));
                    const u = l.direction && l.direction !== i.direction,
                        f = i.loop && (l.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(), E(e.params, l);
                    const h = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), p && !h ? e.disable() : !p && h && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), f && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                },
                getBreakpoint: function(e, t, s) {
                    if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                    let n = !1;
                    const i = l(),
                        r = "window" === t ? i.innerHeight : s.clientHeight,
                        a = Object.keys(e).map((e => {
                            if ("string" === typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: r * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let o = 0; o < a.length; o += 1) {
                        const {
                            point: e,
                            value: r
                        } = a[o];
                        "window" === t ? i.matchMedia(`(min-width: ${r}px)`).matches && (n = e) : r <= s.clientWidth && (n = e)
                    }
                    return n || "max"
                }
            };
            var U = {
                addClasses: function() {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: n,
                            $el: i,
                            device: r,
                            support: a
                        } = e,
                        o = function(e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" === typeof e ? Object.keys(e).forEach((n => {
                                    e[n] && s.push(t + n)
                                })) : "string" === typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "pointer-events": !a.touch
                        }, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: n
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: r.android
                        }, {
                            ios: r.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }, {
                            "watch-progress": s.watchSlidesProgress
                        }], s.containerModifierClass);
                    t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            };
            var Z = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function K(e, t) {
                return function(s) {
                    void 0 === s && (s = {});
                    const n = Object.keys(s)[0],
                        i = s[n];
                    "object" === typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
                        auto: !0
                    }), n in e && "enabled" in i ? (!0 === e[n] && (e[n] = {
                        enabled: !0
                    }), "object" !== typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
                        enabled: !1
                    }), E(t, s)) : E(t, s)) : E(t, s)
                }
            }
            const J = {
                    eventsEmitter: L,
                    update: _,
                    translate: A,
                    transition: {
                        setTransition: function(e, t) {
                            const s = this;
                            s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: n
                                } = s;
                            n.cssMode || (n.autoHeight && s.updateAutoHeight(), N({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: n
                                } = s;
                            s.animating = !1, n.cssMode || (s.setTransition(0), N({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: z,
                    loop: I,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: q,
                    breakpoints: Y,
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: s
                                } = e,
                                {
                                    slidesOffsetBefore: n
                                } = s;
                            if (n) {
                                const t = e.slides.length - 1,
                                    s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                                e.isLocked = e.size > s
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: U,
                    images: {
                        loadImage: function(e, t, s, n, i, r) {
                            const a = l();
                            let o;

                            function d() {
                                r && r()
                            }
                            g(e).parent("picture")[0] || e.complete && i ? d() : t ? (o = new a.Image, o.onload = d, o.onerror = d, n && (o.sizes = n), s && (o.srcset = s), t && (o.src = t)) : d()
                        },
                        preloadImages: function() {
                            const e = this;

                            function t() {
                                "undefined" !== typeof e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                                const n = e.imagesToLoad[s];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                Q = {};
            class ee {
                constructor() {
                    let e, t;
                    for (var s = arguments.length, n = new Array(s), i = 0; i < s; i++) n[i] = arguments[i];
                    if (1 === n.length && n[0].constructor && "Object" === Object.prototype.toString.call(n[0]).slice(8, -1) ? t = n[0] : [e, t] = n, t || (t = {}), t = E({}, t), e && !t.el && (t.el = e), t.el && g(t.el).length > 1) {
                        const e = [];
                        return g(t.el).each((s => {
                            const n = E({}, t, {
                                el: s
                            });
                            e.push(new ee(n))
                        })), e
                    }
                    const r = this;
                    r.__swiper__ = !0, r.support = M(), r.device = O({
                        userAgent: t.userAgent
                    }), r.browser = $(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
                    const a = {};
                    r.modules.forEach((e => {
                        e({
                            swiper: r,
                            extendParams: K(t, a),
                            on: r.on.bind(r),
                            once: r.once.bind(r),
                            off: r.off.bind(r),
                            emit: r.emit.bind(r)
                        })
                    }));
                    const o = E({}, Z, a);
                    return r.params = E({}, o, Q, t), r.originalParams = E({}, r.params), r.passedParams = E({}, t), r.params && r.params.on && Object.keys(r.params.on).forEach((e => {
                        r.on(e, r.params.on[e])
                    })), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = g, Object.assign(r, {
                        enabled: r.params.enabled,
                        el: e,
                        classNames: [],
                        slides: g(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === r.params.direction,
                        isVertical: () => "vertical" === r.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: function() {
                            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return r.touchEventsTouch = {
                                start: e[0],
                                move: e[1],
                                end: e[2],
                                cancel: e[3]
                            }, r.touchEventsDesktop = {
                                start: t[0],
                                move: t[1],
                                end: t[2]
                            }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
                        }(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: r.params.focusableElements,
                            lastClickTime: w(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.emit("_swiper"), r.params.init && r.init(), r
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const n = s.minTranslate(),
                        i = (s.maxTranslate() - n) * e + n;
                    s.translateTo(i, "undefined" === typeof t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.each((s => {
                        const n = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: n
                        }), e.emit("_slideClass", s, n)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: s,
                        slides: n,
                        slidesGrid: i,
                        slidesSizesGrid: r,
                        size: a,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if (s.centeredSlides) {
                        let e, t = n[o].swiperSlideSize;
                        for (let s = o + 1; s < n.length; s += 1) n[s] && !e && (t += n[s].swiperSlideSize, l += 1, t > a && (e = !0));
                        for (let s = o - 1; s >= 0; s -= 1) n[s] && !e && (t += n[s].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let d = o + 1; d < n.length; d += 1) {
                            (t ? i[d] + r[d] - i[o] < a : i[d] - i[o] < a) && (l += 1)
                        } else
                            for (let d = o - 1; d >= 0; d -= 1) {
                                i[o] - i[d] < a && (l += 1)
                            }
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: s
                    } = e;

                    function n() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let i;
                    s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || n()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const s = this,
                        n = s.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${n}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), s.emit("changeDirection"), t && s.update()), s
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    const s = g(e || t.params.el);
                    if (!(e = s[0])) return !1;
                    e.swiper = t;
                    const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let i = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            const t = g(e.shadowRoot.querySelector(n()));
                            return t.children = e => s.children(e), t
                        }
                        return s.children ? s.children(n()) : g(s).children(n())
                    })();
                    if (0 === i.length && t.params.createElements) {
                        const e = a().createElement("div");
                        i = g(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                            i.append(e)
                        }))
                    }
                    return Object.assign(t, {
                        $el: s,
                        el: e,
                        $wrapperEl: i,
                        wrapperEl: i[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                        wrongRTL: "-webkit-box" === i.css("display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const s = this,
                        {
                            params: n,
                            $el: i,
                            $wrapperEl: r,
                            slides: a
                        } = s;
                    return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                        s.off(e)
                    })), !1 !== e && (s.$el[0].swiper = null, function(e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                            try {
                                t[e] = null
                            } catch (s) {}
                            try {
                                delete t[e]
                            } catch (s) {}
                        }))
                    }(s)), s.destroyed = !0), null
                }
                static extendDefaults(e) {
                    E(Q, e)
                }
                static get extendedDefaults() {
                    return Q
                }
                static get defaults() {
                    return Z
                }
                static installModule(e) {
                    ee.prototype.__modules__ || (ee.prototype.__modules__ = []);
                    const t = ee.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => ee.installModule(e))), ee) : (ee.installModule(e), ee)
                }
            }
            Object.keys(J).forEach((e => {
                Object.keys(J[e]).forEach((t => {
                    ee.prototype[t] = J[e][t]
                }))
            })), ee.use([function(e) {
                let {
                    swiper: t,
                    on: s,
                    emit: n
                } = e;
                const i = l();
                let r = null,
                    a = null;
                const o = () => {
                        t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && n("orientationchange")
                    };
                s("init", (() => {
                    t.params.resizeObserver && "undefined" !== typeof i.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver((e => {
                        a = i.requestAnimationFrame((() => {
                            const {
                                width: s,
                                height: n
                            } = t;
                            let i = s,
                                r = n;
                            e.forEach((e => {
                                let {
                                    contentBoxSize: s,
                                    contentRect: n,
                                    target: a
                                } = e;
                                a && a !== t.el || (i = n ? n.width : (s[0] || s).inlineSize, r = n ? n.height : (s[0] || s).blockSize)
                            })), i === s && r === n || o()
                        }))
                    })), r.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", d))
                })), s("destroy", (() => {
                    a && i.cancelAnimationFrame(a), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", d)
                }))
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: n,
                    emit: i
                } = e;
                const r = [],
                    a = l(),
                    o = function(e, t) {
                        void 0 === t && (t = {});
                        const s = new(a.MutationObserver || a.WebkitMutationObserver)((e => {
                            if (1 === e.length) return void i("observerUpdate", e[0]);
                            const t = function() {
                                i("observerUpdate", e[0])
                            };
                            a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                        }));
                        s.observe(e, {
                            attributes: "undefined" === typeof t.attributes || t.attributes,
                            childList: "undefined" === typeof t.childList || t.childList,
                            characterData: "undefined" === typeof t.characterData || t.characterData
                        }), r.push(s)
                    };
                s({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), n("init", (() => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = t.$el.parents();
                            for (let t = 0; t < e.length; t += 1) o(e[t])
                        }
                        o(t.$el[0], {
                            childList: t.params.observeSlideChildren
                        }), o(t.$wrapperEl[0], {
                            attributes: !1
                        })
                    }
                })), n("destroy", (() => {
                    r.forEach((e => {
                        e.disconnect()
                    })), r.splice(0, r.length)
                }))
            }]);
            var te = ee;

            function se(e, t, s, n) {
                const i = a();
                return e.params.createElements && Object.keys(n).forEach((r => {
                    if (!s[r] && !0 === s.auto) {
                        let a = e.$el.children(`.${n[r]}`)[0];
                        a || (a = i.createElement("div"), a.className = n[r], e.$el.append(a)), s[r] = a, t[r] = a
                    }
                })), s
            }

            function ne(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: n,
                    emit: i
                } = e;

                function r(e) {
                    let s;
                    return e && (s = g(e), t.params.uniqueNavElements && "string" === typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s
                }

                function a(e, s) {
                    const n = t.params.navigation;
                    e && e.length > 0 && (e[s ? "addClass" : "removeClass"](n.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](n.lockClass))
                }

                function o() {
                    if (t.params.loop) return;
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    a(s, t.isBeginning && !t.params.rewind), a(e, t.isEnd && !t.params.rewind)
                }

                function l(e) {
                    e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev()
                }

                function d(e) {
                    e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext()
                }

                function c() {
                    const e = t.params.navigation;
                    if (t.params.navigation = se(t, t.originalParams.navigation, t.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !e.nextEl && !e.prevEl) return;
                    const s = r(e.nextEl),
                        n = r(e.prevEl);
                    s && s.length > 0 && s.on("click", d), n && n.length > 0 && n.on("click", l), Object.assign(t.navigation, {
                        $nextEl: s,
                        nextEl: s && s[0],
                        $prevEl: n,
                        prevEl: n && n[0]
                    }), t.enabled || (s && s.addClass(e.lockClass), n && n.addClass(e.lockClass))
                }

                function p() {
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    e && e.length && (e.off("click", d), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(t.params.navigation.disabledClass))
                }
                s({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), t.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, n("init", (() => {
                    !1 === t.params.navigation.enabled ? u() : (c(), o())
                })), n("toEdge fromEdge lock unlock", (() => {
                    o()
                })), n("destroy", (() => {
                    p()
                })), n("enable disable", (() => {
                    const {
                        $nextEl: e,
                        $prevEl: s
                    } = t.navigation;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
                })), n("click", ((e, s) => {
                    const {
                        $nextEl: n,
                        $prevEl: r
                    } = t.navigation, a = s.target;
                    if (t.params.navigation.hideOnClick && !g(a).is(r) && !g(a).is(n)) {
                        if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === a || t.pagination.el.contains(a))) return;
                        let e;
                        n ? e = n.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), n && n.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass)
                    }
                }));
                const u = () => {
                    t.$el.addClass(t.params.navigation.navigationDisabledClass), p()
                };
                Object.assign(t.navigation, {
                    enable: () => {
                        t.$el.removeClass(t.params.navigation.navigationDisabledClass), c(), o()
                    },
                    disable: u,
                    update: o,
                    init: c,
                    destroy: p
                })
            }

            function ie(e) {
                return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function re(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: n,
                    emit: i
                } = e;
                const r = "swiper-pagination";
                let a;
                s({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${r}-bullet`,
                        bulletActiveClass: `${r}-bullet-active`,
                        modifierClass: `${r}-`,
                        currentClass: `${r}-current`,
                        totalClass: `${r}-total`,
                        hiddenClass: `${r}-hidden`,
                        progressbarFillClass: `${r}-progressbar-fill`,
                        progressbarOppositeClass: `${r}-progressbar-opposite`,
                        clickableClass: `${r}-clickable`,
                        lockClass: `${r}-lock`,
                        horizontalClass: `${r}-horizontal`,
                        verticalClass: `${r}-vertical`,
                        paginationDisabledClass: `${r}-disabled`
                    }
                }), t.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let o = 0;

                function l() {
                    return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
                }

                function d(e, s) {
                    const {
                        bulletActiveClass: n
                    } = t.params.pagination;
                    e[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`)
                }

                function c() {
                    const e = t.rtl,
                        s = t.params.pagination;
                    if (l()) return;
                    const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        r = t.pagination.$el;
                    let c;
                    const p = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (t.params.loop ? (c = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), c > n - 1 - 2 * t.loopedSlides && (c -= n - 2 * t.loopedSlides), c > p - 1 && (c -= p), c < 0 && "bullets" !== t.params.paginationType && (c = p + c)) : c = "undefined" !== typeof t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === s.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                        const n = t.pagination.bullets;
                        let i, l, p;
                        if (s.dynamicBullets && (a = n.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t.isHorizontal() ? "width" : "height", a * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (o += c - (t.previousIndex - t.loopedSlides || 0), o > s.dynamicMainBullets - 1 ? o = s.dynamicMainBullets - 1 : o < 0 && (o = 0)), i = Math.max(c - o, 0), l = i + (Math.min(n.length, s.dynamicMainBullets) - 1), p = (l + i) / 2), n.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), r.length > 1) n.each((e => {
                            const t = g(e),
                                n = t.index();
                            n === c && t.addClass(s.bulletActiveClass), s.dynamicBullets && (n >= i && n <= l && t.addClass(`${s.bulletActiveClass}-main`), n === i && d(t, "prev"), n === l && d(t, "next"))
                        }));
                        else {
                            const e = n.eq(c),
                                r = e.index();
                            if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                                const e = n.eq(i),
                                    a = n.eq(l);
                                for (let t = i; t <= l; t += 1) n.eq(t).addClass(`${s.bulletActiveClass}-main`);
                                if (t.params.loop)
                                    if (r >= n.length) {
                                        for (let e = s.dynamicMainBullets; e >= 0; e -= 1) n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                                        n.eq(n.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                                    } else d(e, "prev"), d(a, "next");
                                else d(e, "prev"), d(a, "next")
                            }
                        }
                        if (s.dynamicBullets) {
                            const i = Math.min(n.length, s.dynamicMainBullets + 4),
                                r = (a * i - a) / 2 - p * a,
                                o = e ? "right" : "left";
                            n.css(t.isHorizontal() ? o : "top", `${r}px`)
                        }
                    }
                    if ("fraction" === s.type && (r.find(ie(s.currentClass)).text(s.formatFractionCurrent(c + 1)), r.find(ie(s.totalClass)).text(s.formatFractionTotal(p))), "progressbar" === s.type) {
                        let e;
                        e = s.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                        const n = (c + 1) / p;
                        let i = 1,
                            a = 1;
                        "horizontal" === e ? i = n : a = n, r.find(ie(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${a})`).transition(t.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t, c + 1, p)), i("paginationRender", r[0])) : i("paginationUpdate", r[0]), t.params.watchOverflow && t.enabled && r[t.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }

                function p() {
                    const e = t.params.pagination;
                    if (l()) return;
                    const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        n = t.pagination.$el;
                    let r = "";
                    if ("bullets" === e.type) {
                        let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                        t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
                        for (let s = 0; s < i; s += 1) e.renderBullet ? r += e.renderBullet.call(t, s, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                        n.html(r), t.pagination.bullets = n.find(ie(e.bulletClass))
                    }
                    "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, n.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, n.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
                }

                function u() {
                    t.params.pagination = se(t, t.originalParams.pagination, t.params.pagination, {
                        el: "swiper-pagination"
                    });
                    const e = t.params.pagination;
                    if (!e.el) return;
                    let s = g(e.el);
                    0 !== s.length && (t.params.uniqueNavElements && "string" === typeof e.el && s.length > 1 && (s = t.$el.find(e.el), s.length > 1 && (s = s.filter((e => g(e).parents(".swiper")[0] === t.el)))), "bullets" === e.type && e.clickable && s.addClass(e.clickableClass), s.addClass(e.modifierClass + e.type), s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass), e.clickable && s.on("click", ie(e.bulletClass), (function(e) {
                        e.preventDefault();
                        let s = g(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (s += t.loopedSlides), t.slideTo(s)
                    })), Object.assign(t.pagination, {
                        $el: s,
                        el: s[0]
                    }), t.enabled || s.addClass(e.lockClass))
                }

                function f() {
                    const e = t.params.pagination;
                    if (l()) return;
                    const s = t.pagination.$el;
                    s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", ie(e.bulletClass))
                }
                n("init", (() => {
                    !1 === t.params.pagination.enabled ? h() : (u(), p(), c())
                })), n("activeIndexChange", (() => {
                    (t.params.loop || "undefined" === typeof t.snapIndex) && c()
                })), n("snapIndexChange", (() => {
                    t.params.loop || c()
                })), n("slidesLengthChange", (() => {
                    t.params.loop && (p(), c())
                })), n("snapGridLengthChange", (() => {
                    t.params.loop || (p(), c())
                })), n("destroy", (() => {
                    f()
                })), n("enable disable", (() => {
                    const {
                        $el: e
                    } = t.pagination;
                    e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
                })), n("lock unlock", (() => {
                    c()
                })), n("click", ((e, s) => {
                    const n = s.target,
                        {
                            $el: r
                        } = t.pagination;
                    if (t.params.pagination.el && t.params.pagination.hideOnClick && r.length > 0 && !g(n).hasClass(t.params.pagination.bulletClass)) {
                        if (t.navigation && (t.navigation.nextEl && n === t.navigation.nextEl || t.navigation.prevEl && n === t.navigation.prevEl)) return;
                        const e = r.hasClass(t.params.pagination.hiddenClass);
                        i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
                    }
                }));
                const h = () => {
                    t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), f()
                };
                Object.assign(t.pagination, {
                    enable: () => {
                        t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), u(), p(), c()
                    },
                    disable: h,
                    render: p,
                    update: c,
                    init: u,
                    destroy: f
                })
            }

            function ae(e) {
                let t, {
                    swiper: s,
                    extendParams: n,
                    on: i,
                    emit: r
                } = e;

                function o() {
                    const e = s.slides.eq(s.activeIndex);
                    let n = s.params.autoplay.delay;
                    e.attr("data-swiper-autoplay") && (n = e.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t), t = v((() => {
                        let e;
                        s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), r("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), r("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), r("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), r("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), r("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), r("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && o()
                    }), n)
                }

                function l() {
                    return "undefined" === typeof t && (!s.autoplay.running && (s.autoplay.running = !0, r("autoplayStart"), o(), !0))
                }

                function d() {
                    return !!s.autoplay.running && ("undefined" !== typeof t && (t && (clearTimeout(t), t = void 0), s.autoplay.running = !1, r("autoplayStop"), !0))
                }

                function c(e) {
                    s.autoplay.running && (s.autoplay.paused || (t && clearTimeout(t), s.autoplay.paused = !0, 0 !== e && s.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e => {
                        s.$wrapperEl[0].addEventListener(e, u)
                    })) : (s.autoplay.paused = !1, o())))
                }

                function p() {
                    const e = a();
                    "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (o(), s.autoplay.paused = !1)
                }

                function u(e) {
                    s && !s.destroyed && s.$wrapperEl && e.target === s.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e => {
                        s.$wrapperEl[0].removeEventListener(e, u)
                    })), s.autoplay.paused = !1, s.autoplay.running ? o() : d())
                }

                function f() {
                    s.params.autoplay.disableOnInteraction ? d() : (r("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach((e => {
                        s.$wrapperEl[0].removeEventListener(e, u)
                    }))
                }

                function h() {
                    s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, r("autoplayResume"), o())
                }
                s.autoplay = {
                    running: !1,
                    paused: !1
                }, n({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), i("init", (() => {
                    if (s.params.autoplay.enabled) {
                        l();
                        a().addEventListener("visibilitychange", p), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", f), s.$el.on("mouseleave", h))
                    }
                })), i("beforeTransitionStart", ((e, t, n) => {
                    s.autoplay.running && (n || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d())
                })), i("sliderFirstMove", (() => {
                    s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c())
                })), i("touchEnd", (() => {
                    s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && o()
                })), i("destroy", (() => {
                    s.$el.off("mouseenter", f), s.$el.off("mouseleave", h), s.autoplay.running && d();
                    a().removeEventListener("visibilitychange", p)
                })), Object.assign(s.autoplay, {
                    pause: c,
                    run: o,
                    start: l,
                    stop: d
                })
            }

            function oe(e, t) {
                return e.transformEl ? t.find(e.transformEl).css({
                    "backface-visibility": "hidden",
                    "-webkit-backface-visibility": "hidden"
                }) : t
            }

            function le(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: n
                } = e;
                s({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                });
                ! function(e) {
                    const {
                        effect: t,
                        swiper: s,
                        on: n,
                        setTranslate: i,
                        setTransition: r,
                        overwriteParams: a,
                        perspective: o,
                        recreateShadows: l,
                        getEffectParams: d
                    } = e;
                    let c;
                    n("beforeInit", (() => {
                        if (s.params.effect !== t) return;
                        s.classNames.push(`${s.params.containerModifierClass}${t}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                        const e = a ? a() : {};
                        Object.assign(s.params, e), Object.assign(s.originalParams, e)
                    })), n("setTranslate", (() => {
                        s.params.effect === t && i()
                    })), n("setTransition", ((e, n) => {
                        s.params.effect === t && r(n)
                    })), n("transitionEnd", (() => {
                        if (s.params.effect === t && l) {
                            if (!d || !d().slideShadows) return;
                            s.slides.each((e => {
                                s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                            })), l()
                        }
                    })), n("virtualUpdate", (() => {
                        s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame((() => {
                            c && s.slides && s.slides.length && (i(), c = !1)
                        })))
                    }))
                }({
                    effect: "fade",
                    swiper: t,
                    on: n,
                    setTranslate: () => {
                        const {
                            slides: e
                        } = t, s = t.params.fadeEffect;
                        for (let n = 0; n < e.length; n += 1) {
                            const e = t.slides.eq(n);
                            let i = -e[0].swiperSlideOffset;
                            t.params.virtualTranslate || (i -= t.translate);
                            let r = 0;
                            t.isHorizontal() || (r = i, i = 0);
                            const a = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                            oe(s, e).css({
                                opacity: a
                            }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                        }
                    },
                    setTransition: e => {
                        const {
                            transformEl: s
                        } = t.params.fadeEffect;
                        (s ? t.slides.find(s) : t.slides).transition(e),
                            function(e) {
                                let {
                                    swiper: t,
                                    duration: s,
                                    transformEl: n,
                                    allSlides: i
                                } = e;
                                const {
                                    slides: r,
                                    activeIndex: a,
                                    $wrapperEl: o
                                } = t;
                                if (t.params.virtualTranslate && 0 !== s) {
                                    let e, s = !1;
                                    e = i ? n ? r.find(n) : r : n ? r.eq(a).find(n) : r.eq(a), e.transitionEnd((() => {
                                        if (s) return;
                                        if (!t || t.destroyed) return;
                                        s = !0, t.animating = !1;
                                        const e = ["webkitTransitionEnd", "transitionend"];
                                        for (let t = 0; t < e.length; t += 1) o.trigger(e[t])
                                    }))
                                }
                            }({
                                swiper: t,
                                duration: e,
                                transformEl: s,
                                allSlides: !0
                            })
                    },
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
                })
            }
        }
    }
]);