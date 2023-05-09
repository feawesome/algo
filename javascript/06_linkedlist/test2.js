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
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  delete(value) {
    let current = this.head;

    while (current.next) {
      if (value === current.next.value) {
        current.next = current.next.next;
      }
      current = current.next;
    }
  }

  revert() {
    let current = this.head;
    let obj = {
      value: current.value,
    };

    while (current.next) {
      current = current.next;
      obj = {
        value: current.value,
        next: obj,
      };
    }

    this.head = obj;
  }
}

const list = new SinglyLinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
// list.revert();

list.delete(3);

console.log(list.head);
