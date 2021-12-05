
// @ts-ignore

beforeAll(() => { console.log('1.1 全域 beforeAll ：全域的第一个顺序执行') })
beforeEach(()=>{console.log('1.2 全域 beforeEach ：每次测试前都会执行，优先度大于区域的')})
afterAll(() => { console.log('1.3 全域 afterAll ：全域的最后一个顺序执行') })
afterEach(()=>{console.log('1.4 全域 afterEach ：每次测试后都会执行，优先度低于区域')})

test('test 0', () => {
    console.log('test outer t1');
    expect(true).toEqual(true);
});
describe('outer', () => {
    console.log('describe outer-a d1');
    beforeAll(() => { console.log('2.1 区域 beforeAll ：区域的第一个顺序执行') })
    beforeEach(()=>{console.log('2.2 区域 beforeEach ：每次测试前都会执行，优先度低于全域的')})
    afterAll(() => { console.log('2.3 区域 afterAll ：区域的最后一个顺序执行') })
    afterEach(()=>{console.log('2.4 区域 afterEach ：每次测试后都会执行，优先度大于全域的')})

    describe('describe inner 1', () => {
        console.log('describe inner 1 d2');
        test('test 1', () => {
            console.log('test for describe inner 1 t2');
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer-b d3');

    test('test 1', () => {
        console.log('test for describe outer t3');
        expect(true).toEqual(true);
    });

    describe('describe inner 2', () => {
        console.log('describe inner 2 d4');
        test('test for describe inner 2', () => {
            console.log('test for describe inner 2 t4');
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer-c d5');
});
describe('outer 2', () => {
    console.log('describe outer d6');
});
console.log('global outer end g2');

// global outer g1
// describe outer-a d1
// describe inner 1 d2
// describe outer-b d3
// describe inner 2 d4
// describe outer-c d5
// describe outer-d d6
// global outer end g2
//---
// 1.1 全域 beforeAll ：全域的第一个顺序执行
// 1.2 全域 beforeEach ：每次测试前都会执行，优先度大于区域的
// test outer t1
// 1.4 全域 afterEach ：每次测试后都会执行，优先度低于区域
// 2.1 区域 beforeAll ：区域的第一个顺序执行
// 1.2 全域 beforeEach ：每次测试前都会执行，优先度大于区域的
// 2.2 区域 beforeEach ：每次测试前都会执行，优先度低于全域的
// test for describe inner 1 t2
// 2.4 区域 afterEach ：每次测试后都会执行，优先度大于全域的
// 1.4 全域 afterEach ：每次测试后都会执行，优先度低于区域的
//--
// 1.2 全域 beforeEach ：每次测试前都会执行，优先度大于区域的
// 2.2 区域 beforeEach ：每次测试前都会执行，优先度低于全域的
// test for describe outer t3
// 2.4 区域 afterEach ：每次测试后都会执行，优先度大于全域的
// 1.4 全域 afterEach ：每次测试后都会执行，优先度低于区域的
//--
// 1.2 全域 beforeEach ：每次测试前都会执行，优先度大于区域的
// 2.2 区域 beforeEach ：每次测试前都会执行，优先度低于全域的
// test for describe inner 2 t4
// 2.4 区域 afterEach ：每次测试后都会执行，优先度大于全域的
// 1.4 全域 afterEach ：每次测试后都会执行，优先度低于区域的
// 2.3 区域 afterAll ：区域的最后一个顺序执行
// 1.3 全域 afterAll ：全域的最后一个顺序执行