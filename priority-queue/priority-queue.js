"use strict";
const app = document.querySelector("#app");
app.innerHTML = "hello";
class PriorityQueue {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }
    top() {
        return this.data.reduce((acc, current) => {
            if (this.compare(acc, current)) {
                return acc;
            }
            else {
                return current;
            }
        }, this.data[0]);
    }
    empty() {
        return (this.data.length === 0);
    }
    size() {
        return this.data.length;
    }
    push(data) {
        this.data.push(data);
    }
    pop() {
        const data = this.top();
        const index = this.data.findIndex((target) => target === data);
        if (index !== -1) {
            this.data.splice(index, 1);
        }
        /* 아래와 같이 하면 중복된 모든 요소가 삭제될테니 의도한 동작은 아닐 것.
        this.data.filter((value, index)=> {
           if(value === data) {
               return false;
           }

           return true;
        });
        */
    }
}
;
console.log("less");
const less = (lhs, rhs) => {
    return lhs < rhs;
};
const lessQ = new PriorityQueue(less);
lessQ.push(10);
lessQ.push(20);
lessQ.push(50);
lessQ.push(5);
lessQ.push(1000);
console.log(lessQ.top());
lessQ.pop();
console.log(lessQ.top());
lessQ.pop();
console.log(lessQ.top());
lessQ.pop();
console.log(lessQ.top());
lessQ.pop();
console.log("greater");
const greater = (lhs, rhs) => {
    return lhs > rhs;
};
const greaterQ = new PriorityQueue(greater);
greaterQ.push(10);
greaterQ.push(50);
greaterQ.push(30);
greaterQ.push(1000);
greaterQ.push(5);
console.log(greaterQ.top());
greaterQ.pop();
console.log(greaterQ.top());
greaterQ.pop();
console.log(greaterQ.top());
greaterQ.pop();
console.log(greaterQ.top());
greaterQ.pop();
