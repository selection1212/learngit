/**
 * 538.convert bst to greater Tree
 * 
 * @param {any} root 
 * @returns 
 */
var convertBST = function(root){
    let temp = 0;
    function convert_BST(root){
        if(root){
            convert_BST(root.right);
            temp += root.val;
            convert_BST(root.left);
        }
        return root;
    }
    return convert_BST(root);
}


/**
 * 543.
 * 求一棵树的最大直径（指二叉树任意两个节点之间的最长路径）
 * 注意：这条路径可以不通过根节点（可能通过，也可能不通过）
 * @param {any} root 
 * @returns 
 */
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
    max = Math.max(max,left+right); //“根”节点的总深度与它的所有子树的总深度的最大值
    return Math.max(left,right) + 1;
  } 
}
/**
 * 669.Trim a Binary Search Tree
 * 将[L,R]以外的节点删除掉
 * @param {any} root 
 * @param {any} L 
 * @param {any} R 
 * @returns 
 */
var trimBST = function(root,L,R){
   if(root === null){
       return null;
   }
   if(root.val > R){
       return trimBST(root.left,L,R);
   }
   if(root.val < L){
       return trimBST(root.right,L,R);
   }
   root.left = trimBST(root.left,L,R);
   root.right = trimBST(root.right,L,R);
   return root;
}

653.
/**
 * 
 * 
 * @param {any} root 
 * @param {any} k 
 * @returns 
 */
var findTarget = function(root,k){
    let ary = [];
    ary = tree2arry(root,item => ary.push(item));
    function tree2arry(root,action){
    if(root){
     tree2arry(root.left,action);
     action(root.val);
     tree2arry(root.right,action);
    }
      return ary;
}
    let i = 0, j = ary.length -1;
    while(i < j){
      let p = ary[i] + ary[j];
      if(p === k){
          return true;
      }
      if(p > k){
          j--;
      } else{
          i++;
      }
    }
    
    return false;
}
653.
var findTarget = function (root,k){
    let obj = {};
    return traverAndFind(root,obj,k);
}
function traverAndFind(node,obj,k){
    if(!node){
        return false; //全部遍历一遍没有返回假，左子树遍历完后会进入右子树
    }
    //if(k === node.val*2){
       // return traverAndFind(node.left,obj,k) || traverAndFind(node.right,obj,k);
    //}
    if(obj[k - node.val]){
        return true;
    } else {
        obj[node.val] = true;
        return traverAndFind(node.left,obj,k) ||traverAndFind(node.right,obj,k);//进入第一个为真的表达式
    }
}

/**
 * 606.
 * 
 * @param {any} t 
 * @returns 
 */
var tree2str = function(t){
      if(!t){
        return "";
    } 
    if(!t.left&&!t.right){
       return   t.val + "";
    }
    if(!t.right){
        return  t.val + "(" + tree2str(t.left) + ")";
    }
    
    return t.val + "("+ tree2str(t.left) + ")"+ "(" + tree2str(t.right) + ")";
}

404.
var sumOfLeftLeaves = function(root){
    
  }



  173. Binary Search Tree Iterator