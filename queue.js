class Queue {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}
const q = new Queue();
console.log(q); // check to see new queue
q.add(1); // add 1 to queue
console.log(q);  // check queue after adding 1
q.remove(); // remove last value in queue
console.log(q);  // check queue after removing

function weave(sourceOne, sourceTwo) {
    const q = new Queue();
    while (sourceOne.peek() || sourceTwo.peek()) {
        if (sourceOne.peek()) {
            q.add(sourceOne.remove());
        }
        if (sourceTwo.peek()) {
            q.add(sourceTwo.remove());
        }
    }
    return q;
}
const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
console.log(queueOne); // check queueOne
const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('There');
console.log(queueTwo); // check queueTwo
const q2 = weave(queueOne, queueTwo);
console.log(q2);  // check q2 after weave
q2.remove();
q2.remove();
q2.remove();
q2.remove();
console.log(q2); // check q2 after removing
