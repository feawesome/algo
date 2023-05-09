class Node {
  constructor(item) {
    this.value = item;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = new Node('head')
  }

  reverseList() {
    let nextNode = null; // 当前节点
    const head = this.head; // 遍历用
    let tempNode = this.head; // 新数据用

    while (head && head.next) {
      nextNode = head.next; // 保存下一个节点
      head.next = nextNode.next; // 删除源数据的节点
      nextNode.next = tempNode;  // 
      tempNode = nextNode;
      console.log(tempNode);
    }
    this.head = tempNode
  }


  reverseList2() {

    let nextNode = null
    let head = this.head
    let tempNode = this.head

    while(head && head.next) {
      nextNode = head.next
      head.next = nextNode.next
      nextNode.next = tempNode
      tempNode = nextNode
    }

    console.log(tempNode);
  }

  reverseList1() {
    let currentNode = this.head
    let obj = null

    while (currentNode.next) {
      obj = {
        value: currentNode.value,
        next: obj
      }
      currentNode = currentNode.next
    }

    return obj
  }

  findByValue(element) {
    let currentNode = this.head;

    while(currentNode.next) {
      if (currentNode.value === element) {
        return currentNode
      }
      currentNode = currentNode.next;
    }
  }

  insert(element, newElement) {
    const currentNode = this.findByValue(element);
    const newNode = new Node(newElement);

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 查找上一个节点
  findPrev(element) {
    let lastNode = null;
    let currentNode = this.head;

    while(currentNode.next) {
      lastNode = currentNode;
      currentNode = currentNode.next

      if (currentNode.value === element) {
        // lastNode.next = currentNode.next
        return lastNode
      }
    }
  }

  // 根据值删除
  remove1(element) {
    let prevNode = this.findPrev(element);

    prevNode.next = prevNode.next.next
  }

  // 遍历
  display() {
    let currentNode = this.head;

    while(currentNode.next) {
      currentNode = currentNode.next
      console.log(currentNode.value);
    }
  }

  remove2(item) {
    let currentNode = this.head;
    let parentNode = null

    while (currentNode.next) {
      if (item === currentNode.value) {
        parentNode.next = currentNode.next
      }
      parentNode = currentNode
      currentNode = currentNode.next
    }
  }

  // 向后添加
  append(value) {
    let currentNode = this.head;

    while(currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = new Node(value);
  }
}

// Test
const LList = new SinglyLinkedList()
LList.append('1')
LList.append('2')
LList.append('3')
LList.append('4')
// console.log(LList.head);
console.log(LList.reverseList2());
// console.log(LList.reverseList());
// console.log(LList.findByValue('3'));
// LList.insert('2','100')
// LList.remove2('2')
// console.log(LList.findPrev('3'));
// console.log(JSON.stringify(LList.head));

// LList.display()