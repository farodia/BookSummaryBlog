export const calculator = ()=>{
    const sum = (a:number,b:number) =>{
        return (isNaN(a)?0:a) + (isNaN(b)?0:b);
    }

    const multiple = (a:number,b:number)=>{
        return (isNaN(a)?0:a) * (isNaN(b)?0:b);
    }


    return {sum,multiple}
}

function hailstoneSequence(n:number):Array<number> {
    const array:Array<number> = [];
    while (n !== 1) {
        array.push(n);
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }
    array.push(n);
    return array;
}

