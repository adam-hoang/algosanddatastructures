class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    // // using generic function
    // insertFirst(data) {
    //     this.insertAt(data, 0);
    // }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }
    // // using generic function
    // getFirst() {
    //     return getAt(0);
    // }

    getLast() {
        // check to make sure not empty
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }
    // // using generic function
    // getLast() {
    //     return this.getAt(this.size() - 1)
    // }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // check to make sure not empty
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        // check to make sure not empty
        if (!this.head) {
            return;
        }
        // check if there is only one node
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(data) {
        // get last node using getLast function
        const last = this.getLast();
        if (last) {
            // Check if there are nodes
            last.next = new Node(data);
        } else {
            // If there are no nodes
            this.head = new Node(data);
        }
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        // check to make sure not empty
        if (!this.head) {
            return;
        }
        // check if number is first node
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        // find the node before the removeAt index
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        // break the link by pointing to the node after the removeAt index
        previous.next = previous.next.next;
    }

    insertAt(data, index) {
        // check to make sure not empty
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }
        // get the node before the insertAt index
        // if there is no node before, the prev is last node
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }
}