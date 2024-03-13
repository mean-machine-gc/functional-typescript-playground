const normal_sum = (a, b) => a + b;

type Sum = (a: number) => (b: number) => number;
const sum: Sum = a => b => a + b;

console.log(sum(1)(1))

type Increment = (x: number) => number;

const increment: Increment = sum(1);

console.log(increment(1))


type Decrement = (x: number) => number;

const decrement: Decrement = sum(-1);

console.log(decrement(2))

type Curry2 = <A, B, Z>
    (f: (x: A, y: B) => Z)
    => (a: A)
    => (b: B)
    => Z

const curry2: Curry2 = f => a => b => f(a, b)

console.log(curry2(normal_sum)(1)(1))