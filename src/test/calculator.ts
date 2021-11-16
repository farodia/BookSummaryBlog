export const calculator = ()=>{
    const sum = (a:number,b:number) =>{
        return (isNaN(a)?0:a) + (isNaN(b)?0:b);
    }

    const multiple = (a:number,b:number)=>{
        return (isNaN(a)?0:a) * (isNaN(b)?0:b);
    }

    return {sum,multiple}
}
