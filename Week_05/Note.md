## Proxy API
- Proxy API是ES6提供的强大但危险的API，它能代理对象的读写行为，是Vue3的响应式reactive API的实现原理，但同时也增加了对象读写行为的不可预测性，其使用示例如下
    let obj = {name: "obj"}
    let objProxy = new Proxy(obj, {
    set(obj, prop, val) {
        console.log(`set:${prop} =` + val)
    },
    get(obj, prop) {
        console.log(`get:${prop}`)
            return obj.prop
    }
    })
    objProxy.name = "foo" 
    console.log(objProxy.name)
    Proxy与Object.defineProperty区别：
    Object.defineProperty的get和set只能对对象已有的属性进行拦截，而Proxy的get和set对对象没有的属性也能拦截
    Proxy不仅可以拦截get和set，还能拦截改变很多内置或原生的操作，例如handler.apply,handler.defineProperty
    
## 使用Range API实现DOM精确操作
- Range API可用于实现DOM精细操作，包括局部范围的节点和文本

创建range: document.createRange()
设置range的起点：range.setStart(startContainer, startOffset)
设置range的终点：range.setEnd(endContainer, endOffset),range的范围是左闭右开区间[startOffset, endOffset)

- 往range中插入节点（同DOM节点插入）： range.insertNode() 更多细节参考https://developer.mozilla.org/zh-CN/docs/Web/API/Range

- 拖拽功能的典型写法
  let dragable = document.getElementById("dragable")
  let baseX = 0, baseY = 0
  dragable.addEventListener("mousedown", (event)=>{
    // 在目标的mousedown事件后监听mousemove和mouseup事件
    let startX = event.clientX, startY = event.clientY // 获取鼠标点下时的位置
    let up = (event) => {
      // 更新目标的基位置
      baseX = baseX + event.clientX - startX 
      baseY = baseY + event.clientY - startY
      document.removeEventListener("mousemove", move)
      document.removeEventListener("mouseup", up)      
    }
    let move = (event) => {
      dragable.style.transform = `translate(${baseX + event.clientX-startX}px, ${baseY + event.clientY-startY}px)`
    }
    document.addEventListener("mousemove", move)
    document.addEventListener("mouseup", up)
  })

- Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。详细参考https://developer.mozilla.org/zh-CN/docs/web/api/element/getboundingclientrect