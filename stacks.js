class Stack {
    constructor() {
        this.data = [];
    }
    push(record) {
        this.data.push(record);
    }
    pop() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}
const s = new Stack();
s.push(1);
s.push(2);
console.log(s); // check stack after adding;
s.pop(); // returns 2
s.pop(); // returns 1
console.log(s); // check stack after popping;