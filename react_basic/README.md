# React 基础

## Hello

1. React：用于构建用户界面（视图）的 js 库，（发送请求获取数据，处理数据），操作 DOM 呈现页面。

2. 使用原生 js 操作 DOM 繁琐、效率低（DOM-API 操作 UI），每一次操作 DOM 都会引起游览器的重绘重排。原生 js 没有组件化（html css js）编码方案，代码复用率低。

3. React 采用组件化模式、**声明式编码**（之前是命令式），提高开发效率及组件复用率。且可以在 React Native 中进行移动端开发。**虚拟 DOM + 优秀的 Diffing 算法**，尽量减少与真实 DOM 的交互。

4. React 需要的前置 js 知识：this 指向，class，es6，npm 包管理，原型链，数组，模块化。

5. `babel.min.js` ES6 转 ES5，兼容游览器，比如箭头函数，import，jsx 转 js 等。`react-dom.development.js` 扩展库，操作 DOM，另外一个是核心库。

6. 新建 html 后，! + tab 初始化 html 文件。

7. 如果 jsx 代码很多，游览器翻译的时候会白屏

8. 为什么要用 jsx

   1. 解决了原生 js 操作 DOM 过于繁琐的问题

   2. 多行 html 可以用 () 包起来写在一起，而不用重复调用 createElement

   3. 不带引号的标签写法会经过 babel 翻译成 createElement 的样子给游览器运行（语法糖）

9. 虚拟 DOM

   1. 本质上是 Object 类型的对象，且比真实 DOM 更加轻量，因为虚拟 DOM 是 react 内部在用，无需真实 DOM 上那么多的属性。

   2. 虚拟 DOM 最终会被 react 转换为真实 DOM，呈现在页面上。

10. jsx 语法规则

    1. 定义虚拟 DOM 时，不要写引号

    2. 标签中混入 **js 表达式** 要用 {} 键值对形式

       1. js 表达式会产生一个值，可以放在任何一个需要值的地方，比如变量，方法等

       2. js 语句 不能写到 {} 之中，比如 for 循环，if 判断~~~~

    3. 样式的雷鸣指定不要用 class，要用 className

    4. 内联样式，要用 style={{key:value}} 的形式去写

    5. 虚拟 DOM 中只能有一个根标签

    6. 标签必须闭合

    7. 标签首字母，小写会转换为 html 同名元素，若没有则报错。大写开头则为组件，渲染对应组件，没有定义就报错。

## state

1. 模块：拆分与复用；组件：用来实现局部功能效果的代码和资源的集合

2. 在 chrome 中添加扩展程序 React Developer Tools ---> 检查中多了 Components, profiler

3. 组件可以通过函数式定义 （首字母要大写）

   1. 组件函数中的 this 为 undefined，babel 翻译完 jsx 后会开启 ES5 严格模式，会禁止自定义函数中的 this 指向 window ---> babel 官网 试一试

   2. react 会解析组件标签，找到组件；发现组件是使用函数定义的，随后调用该函数，将返回的虚拟 DOM 转为真实 DOM，呈现在页面上。

4. 类式组件：render 和 return 必须有，render 是在类的原型对象上的，react 会帮我 new 一个实例，然后通过该实例去调用原型上的 render 方法。将 render返回的虚拟 DOM 转为真实 DOM，随后呈现在页面上。

5. 状态 state：组件实例对象上的状态（新出的 hooks 可以让函数式组件也能有三大属性）

6. this：谁调用，this 就指向谁，如果是直接调用组件的自定义方法就是 undefined；类中的方法都会默认开启局部的严格模式，导致 this 无法指向当前 window。

7. 状态里的数据不可以直接修改，react 不认。需要借助内置 api 修改，setState 是更新和合并，不是替换，之后会重新渲染页面

8. 类里面可以直接写赋值语句，往实例追加属性并赋值；**箭头函数中使用 this 会找到外部函数的 this**；so 类中自定义方法可以写成 赋值语句 + 箭头函数的形式

## props

1. 从组件的外部给组件传递信息，而 state 属于组件内部的状态。可以在 html 标签中传递键值对给 props 

2. 三点运算符 用于展开变量，const pp = {name: "hoff", gender: "male", age: "22"}   ---> {...pp}，可用于 数组，map 等，但不能展开一个对象

3. babel + react 可以 enable 展开运算符去展开对象（仅支持在 html 标签中），原生 js 不支持展开对象（可用于复制对象 `let objClone = { ...obj };var d = new Date(...dateFields, name:"aaa");`，合并时可以覆盖部分属性） 

4. 对 props 进行限制：Person.propTypes = { name:~~React.~~PropTypes.string(.isRequired) } React 16 开始弃用了，React 对象过大，引入 prop-types.js，用于对组件标签属性进行限制。Person.defaultProps = { sex: '不男不女' } 数字不传会变成 NaN，限制为函数 func，function 为函数

5. props 简写：props 是只读的，static 将 propTypes 和 defaultProps 移至类中。

6. 类式组件构造器 props：React 中，构造函数仅用于：1. 给 this.state 初始化状态 2. 给事件处理函数绑定实例。在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前前调用 `super(props)`。否则，`this.props` 在构造函数中可能会出现未定义的 bug。所以不写构造器就可以，写了就要调用 super(props)

7. 函数式组件用 props：函数式组件没有实例，所以没有 state 和 ref，但是有 props，因为它可以接收参数。函数的参数可以是 props 接收外界传来的参数，之前的 props 限制只能写在函数外面了。

## refs

1. 字符串 ref 已经不被官方推荐使用了，可能在之后的更新中被废弃。因为 string 类型的 ref 存在一些问题，效率上的问题。ref="input1"

2. ref={(a)=>{this.input1 = a}} a 参数就是 input 标签，可以简化为  ref= { a => this.input1 = a}  箭头函数左侧就一个参数可以省略括号，右侧就一行可以省略花括号

3. 如果 ref 回调函数是以内联函数的方式定义的，在 <mark>更新</mark> 过程中它会被执行两次，第一次传入参数 null，第二次会传入参数 DOM 元素。这是因为在每次渲染时会创建一个新的函数实例，所以 React 清空旧的 ref 并且设置新的。通过将 ref  的回调函数定义成 class 的绑定函数的方式可以避免上述问题，但是大多数情况下它是无关紧要的。

4. 在 JSX 中注释，先在两端写 {} 表名里面是 js 语法，然后再使用 /* */

5. `React.createRef()` 调用后返回一个容器，可以存储被 ref 标识的节点。放置在节点的 ref 上后，会把当前 ref 所在的节点放入 ref 的容器，不是回调函数。需要值的时候，就可以直接从容器中获取 `this.myRefs.current.value` —— 改容器是专人专用的，size = 1，只能使用 createRef 创建多个容器来使用。

## 事件处理

1. 通过 onXxxx 属性指定事件处理函数（注意大小写 —— react 重新 **封装** 了原生事件，为了更好的兼容性）

   1. React 使用的是自定义（合成）事件，而不是使用原生的 DOM 事件

   2. React 中的时间是通过事件委托方式处理的（委托给组件最外层的元素）—— 为了高效

2. 通过 event.target 得到发生事件的 DOM 元素对象 —— 请勿过度使用 refs，实例方法传 event 作为参数，再获取对应 value 值 `event.target.value`（如果发生事件的元素刚好是要拿数据的元素）

## 表单数据

1. 非受控组件：form 表单默认 get 请求，query 方式，input 标签里通过 name 指定参数名

2. onSubmit = {this.handleSubmit}

3. ajax 页面无刷新获取数据，刷新页面会抖，阻止表单提交时刷新页面。`event.preventDefault()` 阻止事件

4. 页面内输入类 DOM 的值 **现用现取** —— 非受控

5. 受控组件：onChange 只要改变就调用，通过 event 拿到值，放到状态里去，在 react 开发者组件里面可以看到（状态可以初始化一下）。页面中输入类的 DOM，随着输入的改变，就可以维护到状态中去，在提交时再从状态中取出数据就可以了。

6. 受控组件 一个 ref 都没用，非受控 有几个输入项  就有几个 ref

## 高阶函数

1. 高阶函数：公用一个方法保存表单数据 `onChange={this.saveFormData('username')}` 事件函数不要加小括号，不然上来直接就调用完了。这个是将 saveFormData 的返回值给的 onChange 作为回调（undefined），而不是写了一个回调函数。所以 saveFormData 需要返回一个箭头函数

2. 高阶函数：接收一个函数 或者返回一个函数

3. 函数柯里化：通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。

   ```javascript
   function sum(a){
       return(b)=>{
           return(c)=>{
               return a+b+c
           }
       }
   }
   const result = sum(1)(2)(3)
   ```

4. 不用柯里化的写法：onChange={(event)=>{this.saveFormData('username', event.target.value)}}

## 组件的生命周期

1. 把组件 **挂载 mount** 到页面上 ------> 卸载 unmount -> ReactDOM.unmountComponentAtNode(document.getElementById('test'))

2. 透明度渐变：状态 `style={{opacity: this.state.opacity}}` 

3. 写完定时器后，render 无限调用的问题：render 中调用定时器，定时器 setState 又继续调用 render，导致 render被调用的次数呈现指数级别的增长

4. 把定时器写到外面，然后通过 button 调用一次就可以了。能不能自动触发？

   ```javascript
   setInterval(()=>{
       let {opacity} = this.state
   })
   ```

5. `componentDidMount(){}` 不需要赋值语句和箭头函数，会在组件的生命周期中被 react 自动调用。组件挂载完毕后调用。

6. 不活了后关闭了组件，但是定时器还在那跑着，就会报错了。clearInterval(this.timer )

7. `componentWillUnmount(){}` 组件卸载前调用。生命周期回调函数 = 生命周期钩子函数

### 生命周期（旧）

1. 组件挂载流程：（左边挂载 右边更新）![](https://github.com/HoffmanZheng/GitNote/blob/master/Web%20%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/images/react-life-cycle-old.png)

2. setState 后是否会自动刷新页面 --- 由 `shouldComponentUpdate` 的返回值来确定。只能返回 false / true 不然会报错

3. `forceUpdate()` 在没有 setState 的情况下进行更新，并且不受 shouldComponentUpdate 这个阀门的控制

4. 父组件 render：render 父组件，但是父组件中引用了子组件，通过 props 给子组件传递信息。在父组件 render 后，子组件会自动调用 `componentWillReceiveProps`（第一次 render 传的不算，不会调用）。父 setState 引起状态改变，调用 render 又引用了子的标签，导致子组件也跟着更新和 render。

   ```html
   <div>A</div>
   <B/>
   ```

5. 初始化阶段 --- 更新阶段 --- 卸载组件，常用的有：componentDidMount() 做一些初始化的事，比如开定时器、发送网络请求、订阅消息等，componentWillUnmount() 做收尾工作，比如关闭定时器、取消订阅消息等，render() 必须使用的一个

### 生命周期（新）

1. 依赖包 之前是 v16.8.4，下载最新版本 文档 - cdn 链接，选择上面没有压缩过的，打开链接保存一下就可以了。bootcdn.cn 前端常用 js 库

   ![](https://github.com/HoffmanZheng/GitNote/blob/master/Web%20%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91/images/react-life-cycle-new.png)

2. 引入新版的 js 依赖，componentWillMount ---> UN_SAFE_componentWillMount，还有 WillUpdate，WillReceiveProps ---> 官方文档

3. react 正在设计异步渲染，过时的生命周期往往会带来不安全的编码实践。上面三个生命周期钩子经常被误解和滥用，预计它们在异步渲染中被滥用的问题会更大。这里的 UN_SAFE 不是指安全性，而是可能在未来版本中出现 BUG。

4. 新的生命周期对比旧的：废弃了三个钩子函数，提出了两个新的钩子，getDerivedStateFromProps 和 getSnapshotBeforeUpdate，不过这两个新的使用场景极其罕见。

5. getDerivedStateFromProps 应该使用静态方法，而不是实例方法，需要返回状态对象或者 null。一旦这里返回了状态对象，就会影响状态的正常更新。但这个方法可以接收参数 props，然后把 props 当作状态（所以被叫做派生状态）使用。此方法适用于罕见的用例，即 **state 的值在任何时候都取决于 props**（才考虑使用这个方法），派生状态会导致代码冗余，并使组件难以维护。—— 了解即可，很少使用

6. getSnapshotBeforeUpdate 需要返回一个快照，在最近一次渲染输出（提交到 DOM 节点）之前（更新前）调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。此生命周期的任何返回值将作为参数传递给 `componentDidUpdate()`。componentDidUpdate(preprops, prostate,snapshotValue) 这边进来的是之前的 props 和 state，以及快照值。—— 也不常用

7. 有个练习做一下 视频 46 新闻列表停止滚动

## DOM 的 Diffing 算法

1. 算法的最小粒度是标签，Diffing 算法会逐层对比。
2. react 中的 key 有什么作用？
   1. key 是虚拟 DOM 对象的标识，react 会根据新数据生成新的虚拟 DOM，随后与旧的虚拟 DOM diffing 对比
   2. 如果在新旧虚拟 DOM 中找到了相同的 key，如果里面内容没变，则直接使用之前的真实 DOM；如果里面内容变了则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM。
   3. 如果没找到相同的 key，则根据数据创建新的真实 DOM，随后渲染到页面
3. 为什么遍历列表时，key 最好不要用 index？
   1. 会导致很多不必要的真实 DOM 生成和渲染。（逆序添加，逆序删除等破坏顺序的操作）
   2. 如果使用 index 作为 key，在 Diffing 对比完外层 li 标签后，仍会继续逐层对比，导致外层数据更新，但是里面标签数据没有更新 ----> 最终导致数据错乱。（结构中还存在输入类的 DOM）
   3. 如果使用 index 作为 key，但是列表是从后面开始添加，就没有问题。所以这个用法只是可能会引发问题，而不是肯定会出现问题。
   4. 因此开发中最好选择每条数据的唯一标识作为 key，如果只是简单的展示数据，使用 index 也是可以的。