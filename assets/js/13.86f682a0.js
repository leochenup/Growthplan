(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{371:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"浏览器事件循环机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器事件循环机制"}},[t._v("#")]),t._v(" 浏览器事件循环机制")]),t._v(" "),a("h2",{attrs:{id:"js是单线程的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js是单线程的"}},[t._v("#")]),t._v(" JS是单线程的")]),t._v(" "),a("p",[t._v("JS 是单线程的，或者说只有一个主线程，也就是它一次只能执行一段代码。JS 中其实是没有线程概念的，所谓的单线程也只是相对于多线程而言。JS 的设计初衷就没有考虑这些，针对 JS 这种不具备并行任务处理的特性，我们称之为“单线程”。")]),t._v(" "),a("p",[t._v("虽然 JS 运行在浏览器中是单线程的，但是浏览器是事件驱动的（Event driven），浏览器中很多行为是异步（Asynchronized）的，会创建事件并放入执行队列中。浏览器中很多异步行为都是由浏览器新开一个线程去完成，一个浏览器至少实现三个常驻线程：")]),t._v(" "),a("ul",[a("li",[t._v("JS 引擎线程")]),t._v(" "),a("li",[t._v("GUI 渲染线程")]),t._v(" "),a("li",[t._v("事件触发线程")])]),t._v(" "),a("h2",{attrs:{id:"js引擎"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js引擎"}},[t._v("#")]),t._v(" JS引擎")]),t._v(" "),a("p",[t._v("JavaScript 引擎是一个专门处理 JavaScript 脚本的虚拟机，一般会附带在网页浏览器之中，比如最出名的就是 Chrome 浏览器的 V8 引擎，如下图所示，JS 引擎主要有两个组件构成：")]),t._v(" "),a("ul",[a("li",[t._v("堆-内存分配发生的地方")]),t._v(" "),a("li",[t._v("栈-函数调用时会形一个个栈帧（frame） "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/16/163677dd80f490c4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})])]),t._v(" "),a("h2",{attrs:{id:"执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行栈"}},[t._v("#")]),t._v(" 执行栈")]),t._v(" "),a("p",[t._v("每一个函数执行的时候，都会生成新的 execution context（执行上下文），执行上下文会包含一些当前函数的参数、局部变量之类的信息，它会被推入栈中， running execution context（正在执行的上下文）始终处于栈的顶部。当函数执行完后，它的执行上下文会从栈弹出。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/16/163677dd815e80e6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}}),t._v(" 举个简单的例子：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("执行过程中栈的变化：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/16/163677dd816c8e88?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"event-loop-事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop-事件循环"}},[t._v("#")]),t._v(" event loop(事件循环)")]),t._v(" "),a("p",[t._v("Wikipedia这样定义:")]),t._v(" "),a("blockquote",[a("p",[t._v('"Event Loop是一个程序结构，用于等待和发送消息和事件。（a programming construct that waits for and dispatches events or messages in a program.）"')])]),t._v(" "),a("p",[a("strong",[t._v('简单说，就是在程序中设置两个线程：一个负责程序本身的运行，称为"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"（可以译为"消息线程"）。')])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/16/163677dda920b2af?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"事件循环与任务队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环与任务队列"}},[t._v("#")]),t._v(" 事件循环与任务队列")]),t._v(" "),a("p",[t._v("事件循环可以简单描述为：")]),t._v(" "),a("ol",[a("li",[t._v("函数入栈，当 Stack 中执行到异步任务的时候，就将他丢给 WebAPIs, 接着执行同步任务,直到 Stack 为空;")]),t._v(" "),a("li",[t._v("在此期间 WebAPIs 完成这个事件，把回调函数放入 CallbackQueue 中等待;")]),t._v(" "),a("li",[t._v("当执行栈为空时，Event Loop 把 Callback Queue 中的一个任务放入Stack中,回到第1步。 "),a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/16/163677dd81721ac8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Event Loop 是由 javascript 宿主环境（像浏览器）来实现的;")])]),t._v(" "),a("li",[t._v("WebAPIs 是由 C++ 实现的浏览器创建的线程，处理诸如 DOM 事件、http 请求、定时器等异步事件;")]),t._v(" "),a("li",[t._v('JavaScript 的并发模型基于"事件循环";')]),t._v(" "),a("li",[t._v("Callback Queue(Event Queue 或者 Message Queue) 任务队列,存放异步任务的回调函数")])]),t._v(" "),a("p",[t._v("接下来看一个异步函数执行的例子：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"时间间隔："')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ms'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ol",[a("li",[t._v("main(Script) 函数入栈, start 变量开始初始化")]),t._v(" "),a("li",[t._v("setTimeout 入栈,出栈,丢给 WebAPIs, 开始定时 500ms;")]),t._v(" "),a("li",[t._v("while 循环入栈,开始阻塞 1000ms;")]),t._v(" "),a("li",[t._v("500ms 过后, WebAPIs 把 cb() 放入任务队列,此时 while 循环还在栈中 ,cb() 等待;")]),t._v(" "),a("li",[t._v("又过了 500ms, while 循环执行完毕从栈中弹出, main() 弹出,此时栈为空, Event Loop, cb() 进入栈, log() 进栈,输出'时间间隔：1003ms', 出栈, cb() 出栈")])]),t._v(" "),a("h2",{attrs:{id:"宏任务-macrotasks-和微任务-microtasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务-macrotasks-和微任务-microtasks"}},[t._v("#")]),t._v(" 宏任务(Macrotasks)和微任务(Microtasks)")]),t._v(" "),a("p",[t._v("其实我们上面所说的都是宏任务 (Macrotasks)，但是js中还有一种队列微任务 (Microtasks)。")]),t._v(" "),a("p",[t._v("macro-task(Task): 一个 event loop 有一个或者多个 task 队列。task 任务源非常宽泛，比如 ajax 的 onload，click 事件，基本上我们经常绑定的各种事件都是 task 任务源，还有数据库操作（IndexedDB ），需要注意的是 setTimeout、setInterval、setImmediate 也是task 任务源。总结来说 task 任务源：")]),t._v(" "),a("ul",[a("li",[t._v("setTimeout")]),t._v(" "),a("li",[t._v("setInterval")]),t._v(" "),a("li",[t._v("setImmediate")]),t._v(" "),a("li",[t._v("I/O")]),t._v(" "),a("li",[t._v("UI rendering")])]),t._v(" "),a("p",[t._v("micro-task(Job): microtask 队列和 task 队列有些相似，都是先进先出的队列，由指定的任务源去提供任务，不同的是一个 event loop里只有一个 microtask 队列。另外 microtask 执行时机和 Macrotasks 也有所差异")]),t._v(" "),a("ul",[a("li",[t._v("process.nextTick")]),t._v(" "),a("li",[t._v("promises")]),t._v(" "),a("li",[t._v("Object.observe")]),t._v(" "),a("li",[t._v("MutationObserver")])]),t._v(" "),a("p",[t._v("那么 Macrotasks 和 Microtasks 有什么别区别呢\n举个简单的例子，假设一个script标签的代码如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("promise1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("promise2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'promise2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setTimeout2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("运行过程：")]),t._v(" "),a("p",[t._v("script里的代码被列为一个task，放入task队列。")]),t._v(" "),a("h4",{attrs:{id:"循环1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环1"}},[t._v("#")]),t._v(" 循环1：")]),t._v(" "),a("ul",[a("li",[t._v("【task队列：script ；microtask队列：】")])]),t._v(" "),a("ol",[a("li",[t._v("从task队列中取出script任务，推入栈中执行。")]),t._v(" "),a("li",[t._v("promise1列为microtask，setTimeout1列为task，setTimeout2列为task。")])]),t._v(" "),a("ul",[a("li",[t._v("【task队列：setTimeout1 setTimeout2；microtask队列：promise1】")])]),t._v(" "),a("ol",[a("li",[t._v("script任务执行完毕，执行microtask checkpoint，取出microtask队列的promise1执行。")])]),t._v(" "),a("h4",{attrs:{id:"循环2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环2"}},[t._v("#")]),t._v(" 循环2：")]),t._v(" "),a("p",[t._v("*【task队列：setTimeout1 setTimeout2；microtask队列：】 4. 从task队列中取出setTimeout1，推入栈中执行，将promise2列为microtask。")]),t._v(" "),a("ul",[a("li",[t._v("【task队列：setTimeout2；microtask队列：promise2】")])]),t._v(" "),a("ol",[a("li",[t._v("执行microtask checkpoint，取出microtask队列的promise2执行。")])]),t._v(" "),a("h4",{attrs:{id:"循环3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#循环3"}},[t._v("#")]),t._v(" 循环3：")]),t._v(" "),a("ul",[a("li",[t._v("【task队列：setTimeout2；microtask队列：】")])]),t._v(" "),a("ol",[a("li",[t._v("从task队列中取出setTimeout2，推入栈中执行。 7.setTimeout2任务执行完毕，执行microtask checkpoint。")])]),t._v(" "),a("ul",[a("li",[t._v("【task队列：；microtask队列：】")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/16/163677dd81bee55c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),t._v(" "),a("p",[t._v("综上所说，每次 event loop 循环执行栈完成后，会继续执行完相应的 microtask 任务")]),t._v(" "),a("h2",{attrs:{id:"event-loop中的update-the-rendering-更新渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-loop中的update-the-rendering-更新渲染"}},[t._v("#")]),t._v(" event loop中的Update the rendering（更新渲染）")]),t._v(" "),a("p",[t._v("这是 event loop 中很重要部分，在第7步会进行 Update the rendering（更新渲染），规范允许浏览器自己选择是否更新视图。也就是说可能不是每轮事件循环都去更新视图，只在有必要的时候才更新视图。")])])}),[],!1,null,null,null);s.default=e.exports}}]);