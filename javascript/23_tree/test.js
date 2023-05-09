class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.max = 1;
  }

  isSymmetric() {
    const check = (l, r) => {
      if (!l && !r) return true;
      if (!l || !r) return false;
      return (
        l.val === r.val && check(l.left, r.right) && check(l.right, r.left)
      );
    };
    return check(this.root.left, this.root.right);
  }

  // 广度优先
  BFS() {
    let queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      console.log(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  // 深度优先
  DFS(root) {
    console.log(root);
    if (root.left) {
      this.DFS(root.left);
    }
    if (root.right) {
      this.DFS(root.right);
    }
  }

  // 深度优先
  getDep(root, level = 1) {
    this.max = Math.max(this.max, level);
    console.log(this.max);
    if (root.left) {
      this.getDep(root.left, level + 1);
    }
    if (root.right) {
      this.getDep(root.right, level + 1);
    }
  }

  remove(num) {}

  insert(num) {
    const node = new Node(num);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      // 防止死循环，新增变量
      let parent = current;
      if (num < current.value) {
        current = current.left;
        if (!current) {
          parent.left = node;
        }
      } else {
        current = current.right;
        if (!current) {
          parent.right = node;
        }
      }
    }
  }

  // 后序遍历
  postOrderTraversal(root, parent, cb) {
    // console.log(cb);
    // cb(root, parent, cb);
    //访问输出根节点
    // 左节点存在
    if (root.left) {
      this.postOrderTraversal(root.left, root, cb);
    }
    //右节点存在
    if (root.right) {
      // root.right作为根节点
      this.postOrderTraversal(root.right, root, cb);
    }
    console.log(root);
  }

  // 中序遍历
  inOrderTraversal(root) {
    //访问输出根节点
    // 左节点存在
    if (root.left) {
      this.inOrderTraversal(root.left);
    }
    console.log(root);
    //右节点存在
    if (root.right) {
      // root.right作为根节点
      this.inOrderTraversal(root.right);
    }
  }

  // 前序遍历
  preOrderTraversal(root) {
    console.log(root);
    //访问输出根节点
    // 左节点存在
    if (root.left) {
      this.preOrderTraversal(root.left);
    }
    //右节点存在
    if (root.right) {
      // root.right作为根节点
      this.preOrderTraversal(root.right);
    }
  }
}

const tree = new Tree();

tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(10);
tree.insert(14);
tree.insert(13);

tree.postOrderTraversal(tree.root)
// tree.remove(3)
// tree.getDep(tree.root)

// 递归BFS
function BFS(root) {
  let arr = [];
  function walk(nodes) {
    if (!nodes.length) return;
    const children = [];
    nodes.forEach((item) => {
      // console.log(item);
      if (item.left) {
        children.push(item.left);
      }
      if (item.right) {
        children.push(item.right);
      }
    });
    walk(children);
    // console.log(children);
    if (children.length) arr.unshift(children);
  }

  walk([root]);
  arr.unshift([root]);
  return arr;
}

function levelOrder(root) {
  //边界处理
  if (root == null) {
    return [];
  }
  let arr = [];
  //将根节点转换成森林，也就是[root]，对它进行递归
  traversal([root], arr);
  return arr;

  function traversal(nodes, arr) {
    //递归基线条件
    if (nodes.length == 0) {
      return;
    }
    let tempNodes = []; //用来存放子节点
    let tempArr = []; //临时的数组， 用来存放每一层的遍历结果
    for (let node of nodes) {
      //将子节点push到tempNodes数组中，对他们进行递归调用
      if (!!node.left) {
        tempNodes.push(node.left);
      }
      if (!!node.right) {
        tempNodes.push(node.right);
      }
      tempArr.push(node.value);
    }
    //每一层的递归结果 push 到 arr 中
    arr.push(tempArr);
    traversal(tempNodes, arr);
  }
}

function DFS(root) {
  console.log(root);
  if (root.left) {
    DFS(root.left);
  }
  if (root.right) {
    DFS(root.right);
  }
}

// tree.BFS(tree.root)
// tree.inOrderTraversal(tree.root);
function maxDepth(root) {
  if (root == null) {
    return 0;
  }
  return 1 + Math.min(maxDepth(root.left), maxDepth(root.right));
}

// 路径之和
function pathSum(root, targetSum) {
  let res = [];

  function DFS(root1, path = []) {
    const arr = [...path, root1.value];
    // console.log(arr);
    if (root1.left) {
      DFS(root1.left, arr);
    }
    if (root1.right) {
      DFS(root1.right, arr);
    }
    if (!root1.left && !root1.right) {
      console.log(root1, arr);
      if (arr.reduce((a, b) => a + b) === targetSum) {
        res.push(arr);
      }
    }
  }
  DFS(root);
  return res;
}

// console.log(tree.root);

function DFS(root) {
  console.log(root.value);
  if (root.left) {
    DFS(root.left);
  }
  if (root.right) {
    DFS(root.right);
  }
}

function BFS1(root) {
  console.log(root[0].value)
  let queue = root
  if (queue.length) {
    const item = queue.shift();
    // console.log(item,'item')
    if (item.left) {
      queue = queue.concat(item.left);
    }
    if (item.right) {
      queue = queue.concat(item.right);
    }
    if (queue && queue.length)    BFS(queue)
    // console.log(queue)
  }
}

function BFS2(root) {
  const queue = [root]

  while (queue.length) {
    const item = queue.shift()
    console.log(item.value)
    if (item.left) {
      queue.push(item.left)
    }
    if (item.right) {
      queue.push(item.right)
    }
  }
}

// DFS(tree.root);

