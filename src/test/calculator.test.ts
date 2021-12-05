import {calculator} from "./calculator";
const {sum,multiple} = calculator();
// console.log(zoo.getAnimals());
// test('3 plus 5 is 8',()=>{
//     expect(sum(3,5)).toBe(8);
// })
//
// test('NaN plus 5 is 0',()=>{
//     expect(sum(NaN,5)).toBe(5);
// })
//
// test('3 multiple 5 is 15', ()=>{
//     expect(multiple(3,5)).toBe(15);
// })
//
// test('NaN multiple 5 is 15', ()=>{
//
//     expect(multiple(NaN,5)).not.toBeNaN();
// })
describe('Test sum',()=>{
    test('3 plus 5 is 8',()=>{
        expect(sum(3,5)).toBe(8);
    })

    test('NaN plus 5 is 0',()=>{
        expect(sum(NaN,5)).toBe(5);
    })
})

describe('Multiple test',()=>{
    test('3 multiple 5 is 15', ()=>{
        expect(multiple(3,5)).toBe(15);
    })

    test('NaN multiple 5 is 15', ()=>{

        expect(multiple(NaN,5)).not.toBeNaN();
    })
})


