(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{460:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_01-jsx简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-jsx简介"}},[s._v("#")]),s._v(" 01. JSX简介")]),s._v(" "),t("h2",{attrs:{id:"什么是jsx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是jsx"}},[s._v("#")]),s._v(" 什么是JSX？")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" world"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("以类似模板语法的方式描述UI的一种语法。它是JS的"),t("strong",[s._v("语法糖")]),s._v("，"),t("strong",[s._v("本质上也是JS")]),s._v("。可以在其中使用"),t("strong",[s._v("变量或表达式、函数等")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"为什么使用jsx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用jsx"}},[s._v("#")]),s._v(" 为什么使用JSX？")]),s._v(" "),t("p",[s._v("将"),t("em",[s._v("标记与逻辑")]),s._v(" 共同存放在称之为“组件”的松散耦合单元之中，来实现"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Separation_of_concerns",target:"_blank",rel:"noopener noreferrer"}},[t("em",[s._v("关注点分离")]),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("p",[s._v("React不强制使用JSX，但在 JavaScript 代码中将 JSX 和 UI 放在一起时，会在"),t("strong",[s._v("视觉上有辅助作用")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"在-jsx-中嵌入表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-jsx-中嵌入表达式"}},[s._v("#")]),s._v(" 在 JSX 中嵌入表达式")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Hello"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("h1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在 JSX 语法中，你可以在大括号内放置任何有效的 "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript 表达式"),t("OutboundLink")],1),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"jsx-也是一个表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsx-也是一个表达式"}},[s._v("#")]),s._v(" JSX 也是一个表达式")]),s._v(" "),t("p",[s._v("在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后"),t("strong",[s._v("得到 JavaScript 对象")])]),s._v(" "),t("blockquote",[t("p",[s._v("可以把JSX当初一个对象来对待，可以使用它赋值给变量、当参数输入函数、返回JSX等。")])]),s._v(" "),t("h2",{attrs:{id:"jsx-特定属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsx-特定属性"}},[s._v("#")]),s._v(" JSX 特定属性")]),s._v(" "),t("p",[s._v("通过使用引号，来将属性值指定为字符串字面量：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("div tabIndex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("div"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("blockquote",[t("p",[s._v("JSX中的属性名使用camelCase(小驼峰)命名。如上面例子中的"),t("code",[s._v("tabIndex")])])]),s._v(" "),t("p",[s._v("使用大括号，来在属性值中插入一个 JavaScript 表达式：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("img src"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("avatarUrl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("img"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"使用-jsx-指定子元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-jsx-指定子元素"}},[s._v("#")]),s._v(" 使用 JSX 指定子元素")]),s._v(" "),t("p",[s._v("JSX 标签里能够包含很多子元素:")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n    ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("Hello!")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n    ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("Good to see you here.")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n  ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"jsx-防止注入攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsx-防止注入攻击"}},[s._v("#")]),s._v(" JSX 防止注入攻击")]),s._v(" "),t("p",[s._v("React DOM 在渲染所有输入内容之前，默认会进行"),t("a",{attrs:{href:"https://stackoverflow.com/questions/7381974/which-characters-need-to-be-escaped-on-html",target:"_blank",rel:"noopener noreferrer"}},[s._v("转义"),t("OutboundLink")],1),s._v("。它可以确保在你的应用中，"),t("strong",[s._v("永远不会注入那些并非自己明确编写的内容")]),s._v("。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cross-site_scripting",target:"_blank",rel:"noopener noreferrer"}},[s._v("XSS（cross-site-scripting, 跨站脚本）"),t("OutboundLink")],1),s._v("攻击。")]),s._v(" "),t("h2",{attrs:{id:"jsx-表示对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsx-表示对象"}},[s._v("#")]),s._v(" JSX 表示对象")]),s._v(" "),t("p",[s._v("Babel 会把 JSX 转译成一个名为 "),t("code",[s._v("React.createElement()")]),s._v(" 函数调用。")]),s._v(" "),t("p",[s._v("以下两种示例代码完全等效：")]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("h1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("className")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("greeting"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token plain-text"}},[s._v("\n    Hello, world!\n  ")]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("h1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" element "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" React"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createElement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'h1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 标签名")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("className")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'greeting'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 属性对象")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Hello, world!'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);