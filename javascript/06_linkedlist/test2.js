class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = new Node("head");
  }

  insert(value) {
    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    node.next = new Node(value);
  }

  delete(value) {
    let node = this.head;

    while (node.next) {
      if (value === node.next.value) {
        break;
      } else {
        node = node.next;
      }
    }

    node.next = node.next.next;
  }

  revert() {
    let obj = {
      ...this.head,
      next: null
    }

    let node = this.head;

    while (node.next) {
      obj = {
        value: node.next.value,
        next: obj
      }
      node = node.next
    }

    console.log(obj,'222')
  }
}

const list = new SinglyLinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.revert();

// list.delete(4);

console.log(list.head);
