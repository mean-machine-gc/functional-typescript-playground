type Sumall = (xs: number[]) => number;

const sum_all: Sumall = (xs: number[]) => {
    //base-case
    if(xs.length === 0){
        return 0
    }

    const [head, ...rest] = xs;
    return head + sum_all(rest)
}

console.log(sum_all([1, 2, 3, 4]))