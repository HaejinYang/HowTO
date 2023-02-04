const app = document.querySelector("#app");
app!.innerHTML = "hello";

/*
    우선 순위 큐는 각 데이터마다 우선순위가 정해져 있고, 큐는 우선순위가 가장 높은 데이터만을 바라보고 있는 자료구조이다.
    C++ STL의 메소드를 참고해서 메소드를 정했다. top, empty, size, push, pop
    push O(1)
    pop O(N)
    top O(N)
    힙 구조를 응용하지 않아서 시간복잡도가 좋지 않지만, 그래도 간단히 써먹긴 좋아보인다.
 */

type CompareFn<T> = (lhs: T, rhs: T) => boolean;
class PriorityQueue<T, Compare extends CompareFn<T>> {
    private readonly data: T[];
    private readonly compare: Compare;
    constructor(compare: Compare) {
        this.data = [];
        this.compare = compare;
    }

    top(): T {
        return this.data.reduce((acc, current) => {
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

    push(data: T) {
        this.data.push(data);
    }

    pop (): void {
        const data = this.top();
        const index = this.data.findIndex((target) => target === data);
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
const less: CompareFn<number> = (lhs: number, rhs: number) => {
    return lhs < rhs;
};

const lessQ = new PriorityQueue<number, CompareFn<number>>(less);

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

const greater: CompareFn<number> = (lhs: number, rhs: number): boolean => {
    return lhs > rhs;
}

const greaterQ: PriorityQueue<number, CompareFn<number>> = new PriorityQueue<number, CompareFn<number>>(greater);

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




