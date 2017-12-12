//前序遍历，数组转二叉树
function ary2tree(ary,pos=0){
    if(ary[pos] == null){  //双等号是因为当到最后一个节点后，会返回undefined。
        return null;
    }
    var root = {
        val:ary[pos],
        left:ary2tree(ary,pos * 2 + 1),
        right:ary2tree(ary,pos * 2 + 2),
    }
    return root;
}

//





//二叉树最大深度
function maxDepth(root){
    if(!root){
       return 0;
    }
 return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
    
}

var maxDepth = 0;
function maxDepth(root,d=0){
       if(d > maxDepth){
        maxDepth = d;
    }
    if(root){
        maxDepth(root.left,d+1);

        maxDepth(root.right,d+1);
    }
    return maxDepth;
}

function leveOrdertravelTree(root){
    if(!root){
        return
    }
    var currRow = [root];
    var nextRow = [];
    while(currRow){
        for(var i = 0 ; i< currRow.length; i++){
             console.log(currRow[i].val)
             currRow[i].left &&  nextRow.push(currRow[i].left)
             currRow[i].right&& nextRow.push(currRow[i].right)
        }
        console.log("--------------")
        currRow = nextRow
        nextRow = []
    }

}

选择排序//不稳定排序
function selectsort(ary){
    for(i = 0 ; i < ary.length - 1; i++){
        var temp = i;
        for(j = i + 1 ; j < ary.length ; j++){
            if(ary[j] < ary[temp] ){
                temp = j;
            }
     } var temp2 = ary[i];
       ary[i] = ary[temp];
       ary[j] = temp2;
  }  return ary;
}

复数的计算
function Complex(real,image) {
   this.real = real;
   this.image  = image;
}
Complex.prototype = {
    add:function(c){
        return new Complex(this.real + c.real,this.image + c.image)
    },
    multiply:function(c,d=0){
        if(c instanceof Complex){
         return new Complex(this.real*c.real - this.image*c.image, 
                           this.real*c.image + this.image*c.real)
         } else{
             return new Complex(this.real*c - this.image*d,
                                this.real.c + this.image*d)
         }
    }
}

数组转链表
function ary2list(ary){
    if(ary.length == 0){
        return null;
    }
    var head = {
        val: ary[0],
        next:null,
    }
    var current = head;
    for(var i = 1; i < ary.length ; i++){
        var node = {
            val: ary[i],
            next: null,
        }  
        current.next = node;
        current = node; //指向下一个节点
    }
    return head;
}

链表转数组
function link2ary(head){
    //if(!head){
       // return null;
   // }
    var ary = [];
    while(head){
        ary.unshift(head.value);
        head = head.next;
    }
    return ary;
}

得到链表第i个值
function get(l,i){
    if(!l){
     return null;
    }
    var count = 0;
     while(l){
         if(count === i){
         return l.value;
        } 
        l = l.next;
        count++;
    }
    return null;
}

得到链表第i个值2
function get (l,i){
    if(!l){
        return null;
    }
    for(var k = 0 ; k < i ; k++){
        if(l ){
            l =  l.next;
        }
    }
    return l === null ? l : l.value;
}

返回链表某个值的下标
function indexOf(l,value){
   

}

在链表第i个位置插入值
function insert(l,i,value){
    var node = {
        value: value,
        next: null
    }
    var count = 0;
    var p = l ; //希望返回的时候从头结点开始
    if(i === 0){
        node.next = l;
        return node;
    }
    while(p.next){ //主要考虑i大于l的长度
           if(i - count === 1){
           node.next = p.next;
           p.next = node;
           return l;
        }
        p = p.next;
        count++;
    }
    p.next = node; //说明i已经大于p的长度
    return l;
}

快速排序
function partition(ary){
    var label = ary[Math.floor(ary.length / 2)];
     ary[Math.floor(ary.length / 2)] = ary[ary.length-1];
     ary[ary.length-1] = label;
     var pre ;
     var next = 0;
     if()

        
        
    var pre;
    var
}

function swap(ary,i,j){
}

归并排序
/*不断的将数组一分为二，直至只剩单个元素后，再排序*/
function mergesort(ary){
if(ary.length < 2){
    return ary.slice();
}
let mid = Math.floor(ary.length / 2);
let left = mergesort(ary.slice(0,mid));
let right = mergesort(ary.slice(mid));
let result = [];
while(left.length&&right.length){
    if(left[0] <= right[0]){
        result.push(left.shift());
    } else{
        result.push(right.shift());
    }
 }
    return result.concat(left.concat(right)); //左右两个数组至少有一个为空
}

function parese(jsonStr){
}
var i
function parseObject(){
}
function parseValue(){
    if(jsonStr[i] === "{"){
        return parseObject()
    }
    if(jsonStr[i] === "["){
        return 
    }
}



十三章----DOM

(1)获取html中某一个特定的节点的所有特定标签？
var  getElementsByTagName = function(){
    var tagName
    var result
    return function getElementsByTagName(node,tag){
        tagName = tag.toUpperCase()
        result = []
        traverse(node,tagName)
        return result
    }
    function traverse(node,tagName){
       if(node.nodeType === document.ELEMENT_NODE){
          for(var i = 0 ; i < node.children.length ; i++){
              if(node.children[i].tagName === tagName){
              result.push(node.children[i])
              }
              traverse(node.children[i],tagName)
            }
      }  
    }
}()

（2）
function getElementsByTagName(node, tagName, result = []) {
    tagName = tagName.toUpperCase()
    if (node.nodeType === document.ELEMENT_NODE) {
      for(var i = 0; i<node.children.length; i++) {
        if (node.children[i].tagName === tagName) {
          result.push(node.children[i])
        }
        getElementsByTagName(node.children[i], tagName, result)
      }
    }
    return result
  }

（3）强制只能传入两个参数，类似封装
  function getElementsByTagName(node, tagName) {
    return traverse(node, tagName)
  }
  function traverse(node, tagName, result = []) {
    tagName = tagName.toUpperCase()
    if (node.nodeType === document.ELEMENT_NODE) {
      for(var i = 0; i<node.children.length; i++) {
        if (node.children[i].tagName === tagName) {
          result.push(node.children[i])
        }
        traverse(node.children[i], tagName, result)
      }
    }
    return result
  }

  获取某个节点第一个id标签
  function getElementById(node, id) {
    if (node) {
      for(var i = 0; i<node.children.length; i++) {
        if (node.children[i].id===id) {
          return node.children[i]
        }
        let result
        if (result = getElementById(node.children[i], id)) {
          return result
        }
      }
      return null
    }
  }


  js 动画
  <style>
      img {
          border-radius:50%;
      }
      #hat {
          position:relative;
          width:50px;
          height:50px;
          border-radius:50%;
          background-color:black;
      }
  </style>
  <p style = "text-align:center"> 
      <img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj7x5rAzcjYAhUB2oMKHbLzC6cQjRwIBw&url=http%3A%2F%2Fwww.enterdesk.com%2F&psig=AOvVaw3t4oTwFW5lECEVSDNoeMSS&ust=1515509095792577" style = "position:relative" >
  </p>
  <span id = "hat"></span>
  <script>
      var cat = document.querySelector('#cat')
      var angle = 0
      var angle2 = 0
     // var lasttime = null

      function animate(time){
          angle = time *0.001
          angle2 = time*0.01
          //lasttime = time
          hat.style.top = Math.sin(angle)*20 + Math.sin(angle)*50+'px'
          hat.style.left = Math.cos(angle)*200 + Math.cos(angle)*50+'px'
          cat.style.top = Math.sin(angle)*20 + 'px'
          cat.style.left = Math.cos(angle)*200 + 'px'
          requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate) //异步递归
      //告诉浏览器在页面重绘之前调用这个函数
  </script>
 

 function fibb(n){
     if(n < 3){
         return 1
     } else{
         return fibb(n-1) + fibb(n-2)
     }
 }
 var sum = 0
 for(var i = 0 ; i < 20; i++){
     sum += n
 }

//--------------------------------
function each(f,times,action){
    for(var i = 0; i < times; i++){
        action(f());
    }
}
//----------------------------
function getfibb(){
var a = 0
var b = 1
return function fibb(){
    b = a + b
    a = b - a
    return a
   }
}
//-------------------------
var fibb = getfibb()
var sum = 0
for (i = 0 ; i < 20 ; i++){
    sum += fibb()
}
console.log(sum)
fibb = null

//---------------
var sum = 0
each(getfibb(),15,value =>{
    sum += value
})
console.log(sum)

器：有next方法并且返回{value,done}这种形式的对象的函数
for.....of
yield
Symbol..........es6



<pre data-language


建立表格
function buildTable(ary){
    var table = document.createElement('table')
    var headRow = document.createElement('tr')
    //var props = Object.keys(ary[0])//
    props = Array.from(new Set([].concat(...ary.map(Object.keys))))//set的功能是去重
    for (var prop of props){
        //props.push(prop)
        var th = document.createElement('th')
        th.appendChild(document.createTextNode(prop))
        headRow.appendChild(th)
    }
   table.appendChild(headRow)

   ary.forEach(item =>{
       var tr = document.createElement('tr')
       for(var prop of  props){
           var td = document.createElement('td')
           if(prop in item){
               td.appendChild(document.createTextNode(item[prop]))
           } else {
               td.appendChild(document.createTextNode(''))
           }
           tr.appendChild(td)
       }
       table.appendChild(tr)
   })
   return table
}

var data = [{
   name:"liming",
   age:"10",
   gender:"male",
   weight:"180"
},
{
    name:"xiaohu",
    age:"15",
    gender:"male",
    height:"180"
}]



function ajax(method,url,header,data,callback){
   var xhr = new XMLHttpRequest()
   
}

ajax('get','/a.jason',{
    foo:'bar',
    'Content-Type':'application/jason',
},{
    name:'',
    password:'',
},function(data){
})