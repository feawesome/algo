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
  }

  // 广度优先
  BFS() {
    let quene = [this.root]
    while (quene.length) {
      const node = quene.shift()
      console.log(node);
      if (node.left) {
        quene.push(node.left)
      }
      if (node.right) {
        quene.push(node.right)
      }
    }
  }

  // 深度优先
  DFS(root) {
    console.log(root);
    if (root.left) {
      this.DFS(root.left)
    }
    if (root.right) {
      this.DFS(root.right)
    }
  }

  remove(num) {
  }

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
    cb(root, parent, cb)
    //访问输出根节点
    // 左节点存在
    if (root.left) {
      this.postOrderTraversal(root.left, root,cb);
    }
    //右节点存在
    if (root.right) {
      // root.right作为根节点
      this.postOrderTraversal(root.right, root, cb);
    }
    // console.log(root);
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
// tree.remove(3)
tree.BFS(tree.root)
// tree.postOrderTraversal(tree.root);
// console.log(tree.root);
