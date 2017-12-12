function buildTree(preorder,inorder){
    var root = {
         val:preorder[0],
         rigth:null,
         left:null,

    }
    if(preorder[0] === null){
        return  null;
    }
    for(let i = 0 ; i < preorder.length ; i++){
        
    }
    


}
//二叉树最小深度
var minDepth = function(root){
    if(!root){
        return 0;
    }
    var a = 1 + minDepth(root.left);
    var b = 1 + minDepth(root.right);

    if(a === 1){
        return b;
    }
    if(b == 1){
        return a;
    }
    return a > b ? a : b;
  
}

var reverselist = function(head){
    if(!head){
        return null;
    }
    let last = null;
    let node;
    while(head){
     node = head.next;
    head.next = last;
        last = head;
        head = node;
     }
   return last;
}

var deleteNode = function(Node){
  
    Node.val = Node.next.val;
    Node.next = Node.next.next;
  
}

var deleteDuplicates = function(head){
    if(!head){
        return null;
    }
    let p = head;
    while(p.next){
    if(p.val === p.next.val){                                                                                                                                                                                                                                                                                                        
       p.next = p.next.next;
    } else{
        p = p.next;
    }

    }
    return head;
}

var hasCycle = function(head){
    if(!head){
        return null;
    }
    let prev = head;
    let curr = head.next;
    let i = 0;
    let j = 0;
    while(head.next){
        if(prev.val === curr.val){
            prev = prev.next;
            curr = curr.next;
            i++;
            j++;
        } else{
            curr = curr.next;
            j++;
        }
    }
    return i === j / 2?true:false;

}

var mergeTwoLists = function(l1,l2){
    if(!l1&&!l2){
        return null;
    }
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    let first = l1;
    let second = l2;
      while(second){
        let temp ={
            val:second.val,
            next:null,
        }
      if(second.val >= first.val){
          if(first.next=== null){
              first.next = second;
              return l1;
          } else if(second.val < first.next.val){
          let temp2 = first.next;
          first.next = temp;
          first.next.next = temp2;
          second = second.next;}
       
     } else if(second.val < first.val){
          temp.next = first;
          first = temp;
          second = second.next;
      } else{
          let temp3 = first.next.next;
          first.next.next = temp; 
          first = first.next;
      }
        
        }
        
       
    }
}

回文
var isPalindrome = function(head){
    if(!head||!head.next){
        return true;
    }
    let p = head;
    let count = 0;
    let last = null;
    let curr;
    let temp = new ListNode(head.val);
    let temp2 = temp;
    while(p){
        curr = p.next;
        p.next = last;
        last = p;
        p = curr;
     if(curr !==null){
    temp2.next = new ListNode(curr.val);
    temp2 = temp2.next;
    count++;
   }
        }
    for(let i = 1; i <= Math.floor(count/2); i++){
        if(last.val !== temp.val){
            return false;
        } else{
           last = last.next;
           temp = temp.next;
        }
    }
    return true;
 }   

var removeElements = function(head,val){
    if(!head){
        return null;
    }
    let prehead = new ListNode(-1);
    let pre = prehead;
    while(head){
        if(head.val !== val){
           pre.next = head;
           pre = pre.next;
        }
        head = head.next;
    }
    if(pre&&pre.next){
    if(pre.next.val === val){
        pre.next = null;
    }
}
    return prehead.next;
}

var getIntersectionNode = function(headA,headB){
    if(!headA||!headB){
        return null;
    }
    while(headA&headB){
        if(headA !== headB){

        }
    }
    
}

var findUnsortedSubarray = function(nums){
    let s = nums.length;
    let n = 0;
    let nums2 = nums;
     nums2 =nums2.sort((a,b) => a - b);
    for(let i = 0 ; i < nums.length ; i++){
        if(nums2[i]!== nums[i]){
            s = Math.min(s,i);
            n = Math.max(n,i);
        }
    }
     return (n - s >= 0? n - s +1:0);
}

var binaryTreePaths = function(root){
    let ary = [];
    if(!root){
        return [];
    }
    let 
    
 }


 var merge = function(nums1,m,nums2,n){
     
  }

/**
 * 
 * 
 * @param {[]} nums 
 * @returns {[]}
 */
var findDisappearedNumbers = function(nums){
      let result = [];
      for(i = 0; i < nums.length ; i++){
          let k = Math.abs(nums[i])- 1;
          if(nums[k] > 0){
              nums[k] = - nums[k];
          }
        }
        for(i = 0 ; i < nums.length; i++){
            if(nums[i] > 0){
                result.push(i+1);
            }
        }
         return result;
  }
 
  var convertBST = function(root){
      if(!root){
          return null;
      }
      let temp = 0;
      function sumkey(root){
          if(root){
        convertBST(root.right);
        temp += root.val;
        root.val = temp;
        convertBST(root.left);  
      }
    }
     return root;
  };

  var diameterofBinaryTree = function(root){
      let max = 0;
     maxdepth(root);
      return max;
    function maxdepth(root){
      if(!root){
          return 0;
      }
      let left = maxdepth(root.left);
      let right = maxdepth(root.right);
      max = Math.max(max,left+right);
      return Math.max(left,right) + 1;
    }
     
  }

  function Vector (x,y) {
        this.plus = function (a,b){
          let ary = [];
           ary[0] = x + a;
           ary[1] = y + b;
          return ary;
      }
      this.minus = function(a,b){
        let ary = [];
        ary[0] = x - a;
        ary[1] = y - b;
        return ary;
      }
      Object.defineProperty(this,"length",{
      get : function (){
            res = x*x + y*y;
             return res;
      }
    });
  }

  function Complex(x,y){
    this.plus = function (a,b){
        let ary = [];
         ary[0] = x + a;
         ary[1] = y + b;
        return ary;
    }
    this.minus = function(c,d){
      let ary = [];
      ary[0] = x - c;
      ary[1] = y - d;
      return ary;
    }
    this.multiply = function(a,b){
        let res = [];
        ary[0] = y*b-a*x;
        ary[1] = (a*y+b*x);
        return ary;
    }
  }


  
    var inorderTraversal = function(root) {
        var result = [];
        if (!root) return result;
        if (root.left) {
            result.push(...inorderTraversal(root.left));
        }
        result.push(root.val);
        if (root.right) {
            result.push(...inorderTraversal(root.right));
        }
        return result;
    };
  
   var kthSmallest = function(root,k) {
        let count = k;
        let number;
          function findk(root){
            if(root.left){
              findk(root.left);}
                count--;
                if(count === 0){
                    number = root.val;
                    return ;
              }
              if(root.right){
                findk(root.right);
            }
         }
        
        return number;
   }

   数组上的大多数高阶方法，



   function isInDOM(node){
       var p = node
       while(p.parentnode){
           p = p.parentnode
       }
       return document
   }
  

function queryselector(selector){
    
}

function isMatchSingleSelector(node,selector){
    switch:
}


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
}
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
var net = require('net')
var server = net.createServer(function(conn){
    conn.on('data', function(data){
        var head = data.toString();
        var header = head.split('\r\n')
        var firstLine = header.shift()
        var dsf
    })
})

<p> Drag the bar to change its width:</p>
<div style="background: orange ; width: 60px; height:20px">
</div>
<script>
    var lastX;
    var rect = document.querySelector("div");
    rect.addEventListener("mousedown",function(event){
        if(event.which == 1){
            lastX = event.pageX;
            addEventListener("mousemoe",moved);
            event.preventDefault();
        }
    });
    function buttonPressed(event){
        if(event.buttons == null)
        return event.which !== 0;
        else
        return event.button !== 0;
    }
    function moved(event){
        if(!buttonPressed(event)){
            removeEventListener("mousemove",moved);
        } else {
            var dist = event.pageX - lastX;
            var newWidth = Math.max(10, rect.offsetWidth + dist);
            rect.style.width = newWidth + "px";
            lastX = event.pageX;
        }
    }
</script>

<p> Hover over this <strong>paragraph</strong>.</P>
<script>
    var para = document.querySelector("p");
    function isInside(node,target){
        for(;node !== null;node = node.parentNode)
        if(node == target)
        return true;
    }
    para.addEventListener("mouseover",function(event){
        if(!isInside(event.relatedTarget,para))
        para.style.color = "red";
    });
    para.addEventListener("moveout",function(event){
        if(!isInside(event.relatedTarget,para))
        para.style.color = "";
    });
    </script>

   


