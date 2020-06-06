(function (t) {
    function e(e) {
        for (var i, s, a = e[0], c = e[1], l = e[2], d = 0, p = []; d < a.length; d++) s = a[d], Object.prototype.hasOwnProperty.call(o, s) && o[s] && p.push(o[s][0]), o[s] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        u && u(e);
        while (p.length) p.shift()();
        return r.push.apply(r, l || []), n()
    }

    function n() {
        for (var t, e = 0; e < r.length; e++) {
            for (var n = r[e], i = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== o[c] && (i = !1)
            }
            i && (r.splice(e--, 1), t = s(s.s = n[0]))
        }
        return t
    }
    var i = {},
        o = {
            app: 0
        },
        r = [];

    function s(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = t, s.c = i, s.d = function (t, e, n) {
        s.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, s.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, s.t = function (t, e) {
        if (1 & e && (t = s(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) s.d(n, i, function (e) {
                return t[e]
            }.bind(null, i));
        return n
    }, s.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return s.d(e, "a", e), e
    }, s.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, s.p = "/";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = a.push.bind(a);
    a.push = e, a = a.slice();
    for (var l = 0; l < a.length; l++) e(a[l]);
    var u = c;
    r.push([0, "chunk-vendors"]), n()
})({
    0: function (t, e, n) {
        t.exports = n("56d7")
    },
    "034f": function (t, e, n) {
        "use strict";
        var i = n("85ec"),
            o = n.n(i);
        o.a
    },
    "040e": function (t, e, n) {},
    "0752": function (t, e, n) {
        "use strict";
        var i = n("9541"),
            o = n.n(i);
        o.a
    },
    4058: function (t, e, n) {},
    "40be": function (t, e, n) {},
    5245: function (t, e, n) {},
    "529f": function (t, e, n) {
        "use strict";
        var i = n("946b"),
            o = n.n(i);
        o.a
    },
    "56d7": function (t, e, n) {
        "use strict";
        n.r(e);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var i = n("2b0e"),
            o = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("h1", [t._v('I WILL NEVER VISIT "HERE" TODAY')]), n("NeverInput", {
                    on: {
                        neverInputSubmit: t.onNeverInputSubmit
                    }
                }), n("NeverList", {
                    attrs: {
                        neverSites: t.neverSites
                    },
                    on: {
                        imgClick: t.changeVisited,
                        imgCtrlClick: t.deleteSite
                    }
                }), n("div", {
                    staticClass: "todo-title"
                }, [n("h1", [t._v("THINGS TO DO")]), n("div", {
                    staticClass: "clear-done",
                    on: {
                        click: t.clearDone
                    }
                }, [n("i", {
                    staticClass: "fas fa-trash-alt"
                }), t._v(" clear done")])]), n("div", {
                    staticClass: "todo-wrapper"
                }, [n("TodoInput", {
                    on: {
                        todoInputSubmit: t.onTodoInputSubmit
                    }
                }), n("TodoList", {
                    attrs: {
                        todos: t.todos
                    },
                    on: {
                        todoClick: t.changeCompleted,
                        todoCtrlClick: t.deleteTodo
                    }
                })], 1), n("MyFooter")], 1)
            },
            r = [],
            s = (n("4de4"), n("c975"), n("a434"), function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "never-input"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.newNeverInput,
                        expression: "newNeverInput"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "Type and Enter to add NEVERSITE",
                        autofocus: ""
                    },
                    domProps: {
                        value: t.newNeverInput
                    },
                    on: {
                        keypress: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onNeverInputSubmit(e)
                        },
                        input: function (e) {
                            e.target.composing || (t.newNeverInput = e.target.value)
                        }
                    }
                })])
            }),
            a = [],
            c = (n("498a"), {
                name: "NeverInput",
                data: function () {
                    return {
                        newNeverInput: ""
                    }
                },
                methods: {
                    onNeverInputSubmit: function () {
                        this.newNeverInput.trim() && this.$emit("neverInputSubmit", {
                            id: Date.now(),
                            content: this.newNeverInput.toUpperCase(),
                            isVisited: !1
                        }), this.newNeverInput = ""
                    }
                }
            }),
            l = c,
            u = (n("6b4a"), n("2877")),
            d = Object(u["a"])(l, s, a, !1, null, "266e79b6", null),
            p = d.exports,
            m = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "never-list"
                }, [n("div", {
                    staticClass: "never-wrapper"
                }, t._l(t.neverSites, (function (e) {
                    return n("NeverListItem", {
                        key: e.id,
                        attrs: {
                            neverSite: e
                        },
                        on: {
                            imgClick: t.onImgClick,
                            imgCtrlClick: t.onImgCtrlClick
                        }
                    })
                })), 1)])
            },
            f = [],
            v = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "never-list-item"
                }, [t.neverSite.isVisited ? n("div", {
                    staticClass: "x-block",
                    on: {
                        click: [function (e) {
                            return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : t.onImgClick(e)
                        }, function (e) {
                            return e.ctrlKey ? e.shiftKey || e.altKey || e.metaKey ? null : t.onImgCtrlClick(e) : null
                        }]
                    }
                }, [n("div", [t._v("❌")])]) : t._e(), n("h3", [t._v("NO "), n("span", [t._v(t._s(t.neverSite.content))]), t._v(" TODAY")]), n("img", {
                    staticClass: "character-image",
                    attrs: {
                        src: t.characterUrl,
                        alt: "character image"
                    },
                    on: {
                        click: [function (e) {
                            return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : t.onImgClick(e)
                        }, function (e) {
                            return e.ctrlKey ? e.shiftKey || e.altKey || e.metaKey ? null : t.onImgCtrlClick(e) : null
                        }]
                    }
                })])
            },
            h = [],
            g = "https://res.cloudinary.com/kennycld/image/upload/v1591271265/animal%20characters/",
            C = ["animal_characters11_zdksf8.png", "animal_characters12_cfaa1b.png", "animal_characters10_nnipr2.png", "animal_characters09_qz3out.png", "animal_characters05_ifoidc.png", "animal_characters08_ledkiu.png", "animal_characters06_prvayg.png", "animal_characters07_jrkqvo.png", "animal_characters04_yfo55m.png", "animal_characters03_km7am4.png", "animal_characters01_zzktfy.png", "animal_characters02_cfkc86.png", "animal_characters19_txyk3x.png", "animal_characters15_chuyvy.png", "animal_characters14_zqjsuk.png", "animal_characters17_hhx8vo.png", "animal_characters16_c81ynq.png", "animal_characters13_lbeayv.png", "animal_characters00_lrclty.png"],
            _ = {
                name: "NeverListItem",
                props: {
                    neverSite: Object
                },
                methods: {
                    onImgClick: function () {
                        this.$emit("imgClick", this.neverSite)
                    },
                    onImgCtrlClick: function () {
                        this.$emit("imgCtrlClick", this.neverSite)
                    }
                },
                computed: {
                    characterUrl: function () {
                        var t = C[Math.floor(Math.random() * C.length)];
                        return "".concat(g).concat(t)
                    }
                }
            },
            y = _,
            k = (n("ec34"), Object(u["a"])(y, v, h, !1, null, "12513302", null)),
            S = k.exports,
            I = {
                name: "NeverList",
                components: {
                    NeverListItem: S
                },
                props: {
                    neverSites: Array
                },
                methods: {
                    onImgClick: function (t) {
                        this.$emit("imgClick", t)
                    },
                    onImgCtrlClick: function (t) {
                        this.$emit("imgCtrlClick", t)
                    }
                }
            },
            b = I,
            T = (n("ae94"), Object(u["a"])(b, m, f, !1, null, "2db4aee1", null)),
            O = T.exports,
            N = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "todo-list"
                }, [n("div", {
                    staticClass: "todo-list-wrapper"
                }, t._l(t.todos, (function (e) {
                    return n("TodoListItem", {
                        key: e.id,
                        attrs: {
                            todo: e
                        },
                        on: {
                            todoClick: t.onTodoClick,
                            todoCtrlClick: t.onTodoCtrlClick
                        }
                    })
                })), 1)])
            },
            w = [],
            x = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "todo-list-item"
                }, [n("div", {
                    staticClass: "clickable",
                    on: {
                        click: [function (e) {
                            return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : t.onTodoClick(e)
                        }, function (e) {
                            return e.ctrlKey ? e.shiftKey || e.altKey || e.metaKey ? null : t.onTodoCtrlClick(e) : null
                        }]
                    }
                }), t.todo.isCompleted ? n("div", {
                    staticClass: "x-block"
                }, [t._m(0)]) : t._e(), n("i", {
                    staticClass: "fas fa-thumbtack pin-icon"
                }), n("h3", [t._v(" " + t._s(t.todo.content) + " ")])])
            },
            K = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", [n("i", {
                    staticClass: "fas fa-check check-icon"
                }), t._v("DONE")])
            }],
            E = {
                name: "TodoListItem",
                props: {
                    todo: Object
                },
                methods: {
                    onTodoClick: function () {
                        this.$emit("todoClick", this.todo)
                    },
                    onTodoCtrlClick: function () {
                        this.$emit("todoCtrlClick", this.todo)
                    }
                }
            },
            j = E,
            $ = (n("529f"), Object(u["a"])(j, x, K, !1, null, "4e640fe6", null)),
            L = $.exports,
            D = {
                name: "TodoList",
                components: {
                    TodoListItem: L
                },
                props: {
                    todos: Array
                },
                methods: {
                    onTodoClick: function (t) {
                        this.$emit("todoClick", t)
                    },
                    onTodoCtrlClick: function (t) {
                        this.$emit("todoCtrlClick", t)
                    }
                }
            },
            J = D,
            P = (n("75c0"), Object(u["a"])(J, N, w, !1, null, "044ea08b", null)),
            V = P.exports,
            M = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "todo-input"
                }, [n("h3", [t._v("ADD TODO HERE")]), n("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.newTodoInput,
                        expression: "newTodoInput"
                    }],
                    attrs: {
                        type: "text",
                        placeholder: "Type and Enter\nto add TODO"
                    },
                    domProps: {
                        value: t.newTodoInput
                    },
                    on: {
                        keypress: function (e) {
                            return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onTodoInputSubmit(e)
                        },
                        input: function (e) {
                            e.target.composing || (t.newTodoInput = e.target.value)
                        }
                    }
                })])
            },
            A = [],
            z = {
                name: "TodoInput",
                data: function () {
                    return {
                        newTodoInput: ""
                    }
                },
                methods: {
                    onTodoInputSubmit: function () {
                        this.newTodoInput.trim() && this.$emit("todoInputSubmit", {
                            id: Date.now(),
                            content: this.newTodoInput,
                            isCompleted: !1
                        }), this.newTodoInput = ""
                    }
                }
            },
            q = z,
            R = (n("7673"), Object(u["a"])(q, M, A, !1, null, "a4170bfc", null)),
            H = R.exports,
            U = function () {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            Y = [function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "my-footer"
                }, [n("div", {
                    staticClass: "my-helpers"
                }, [n("p", {
                    staticClass: "my-helper"
                }, [t._v("Click : Change Status")]), n("p", {
                    staticClass: "my-helper"
                }, [t._v("/")]), n("p", {
                    staticClass: "my-helper"
                }, [t._v("Ctrl + Click : Delete")])]), n("div", {
                    staticClass: "my-footer-items"
                }, [n("span", {
                    staticClass: "my-footer-item"
                }, [n("span", [t._v("Kenny")])]), n("span", {
                    staticClass: "my-footer-item"
                }, [n("i", {
                    staticClass: "fab fa-github"
                }), n("a", {
                    attrs: {
                        href: "https://github.com/YeongbuCha/neversite"
                    }
                }, [t._v("github")])])])])
            }],
            F = {},
            G = F,
            W = (n("0752"), Object(u["a"])(G, U, Y, !1, null, "be37c87e", null)),
            B = W.exports,
            Q = {
                name: "App",
                components: {
                    NeverInput: p,
                    NeverList: O,
                    TodoInput: H,
                    TodoList: V,
                    MyFooter: B
                },
                data: function () {
                    return {
                        neverSites: this.getNeverSites(),
                        todos: this.getTodos()
                    }
                },
                methods: {
                    changeVisited: function (t) {
                        t.isVisited = !t.isVisited, localStorage.setItem("neverSites", JSON.stringify(this.neverSites))
                    },
                    changeCompleted: function (t) {
                        t.isCompleted = !t.isCompleted, localStorage.setItem("todos", JSON.stringify(this.todos))
                    },
                    deleteSite: function (t) {
                        var e = this.neverSites.indexOf(t);
                        this.neverSites.splice(e, 1), localStorage.setItem("neverSites", JSON.stringify(this.neverSites))
                    },
                    deleteTodo: function (t) {
                        var e = this.todos.indexOf(t);
                        this.todos.splice(e, 1), localStorage.setItem("todos", JSON.stringify(this.todos))
                    },
                    clearDone: function () {
                        var t = this.todos.filter((function (t) {
                            return !1 === t.isCompleted
                        }));
                        this.todos = t, localStorage.setItem("todos", JSON.stringify(this.todos))
                    },
                    onNeverInputSubmit: function (t) {
                        this.neverSites === [] || this.neverSites.length < 8 || this.neverSites.pop(), this.neverSites.push(t), localStorage.setItem("neverSites", JSON.stringify(this.neverSites))
                    },
                    onTodoInputSubmit: function (t) {
                        this.todos === [] || this.todos.length < 8 || this.todos.pop(), this.todos.push(t), localStorage.setItem("todos", JSON.stringify(this.todos))
                    },
                    getNeverSites: function () {
                        var t = localStorage.getItem("neverSites");
                        return null !== t ? JSON.parse(t) : []
                    },
                    getTodos: function () {
                        var t = localStorage.getItem("todos");
                        return null !== t ? JSON.parse(t) : []
                    }
                }
            },
            X = Q,
            Z = (n("034f"), Object(u["a"])(X, o, r, !1, null, null, null)),
            tt = Z.exports;
        i["a"].config.productionTip = !1, new i["a"]({
            render: function (t) {
                return t(tt)
            }
        }).$mount("#app")
    },
    "6b4a": function (t, e, n) {
        "use strict";
        var i = n("4058"),
            o = n.n(i);
        o.a
    },
    "75c0": function (t, e, n) {
        "use strict";
        var i = n("f41f"),
            o = n.n(i);
        o.a
    },
    7673: function (t, e, n) {
        "use strict";
        var i = n("40be"),
            o = n.n(i);
        o.a
    },
    "85ec": function (t, e, n) {},
    "946b": function (t, e, n) {},
    9541: function (t, e, n) {},
    ae94: function (t, e, n) {
        "use strict";
        var i = n("5245"),
            o = n.n(i);
        o.a
    },
    ec34: function (t, e, n) {
        "use strict";
        var i = n("040e"),
            o = n.n(i);
        o.a
    },
    f41f: function (t, e, n) {}
});
//# sourceMappingURL=app.45a65c12.js.map