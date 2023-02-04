const app = document.querySelector("#app");
app!.innerHTML = "hello";

/*
    우선 순위 큐는 각 데이터마다 우선순위가 정해져 있고, 큐는 우선순위가 가장 높은 데이터만을 바라보고 있는 자료구조이다.
    C++ STL의 메소드를 참고해서 메소드를 정했다.
 */

type Compare = (lhs: number, rhs: number) => boolean;
class PriorityQueue {
    private data: number[];
    private compare: Compare;
    constructor(compare: Compare) {
        this.data = [];
        this.compare = compare;
    }

    top(): number {
        return this.data.reduce((acc, current, index, arr) => {
            if(this.compare(acc, current)) {
                return acc;
            } else {
                return current;
            }
        }, this.data[0]);
    }

    empty(): boolean {
        return (this.data.length === 0);
    }

    size(): number {
        return this.data.length;
    }

    push(data: number) {
        this.data.push(data);
    }

    pop (): void {
        const data = this.top();
        const index = this.data.findIndex((target) => target === data;);
        if(index !== -1) {
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
};

console.log("less");
const less: Compare = (lhs: number, rhs: number) => {
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

const greater: Compare = (lhs: number, rhs: number): boolean => {
    return lhs > rhs;
}

const greaterQ: PriorityQueue = new PriorityQueue(greater);

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




