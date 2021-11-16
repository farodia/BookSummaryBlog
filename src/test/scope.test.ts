
// @ts-ignore

beforeAll(() => { console.log('全域 beforeAll ：全域的第一个顺序执行') })
beforeEach(()=>{console.log('全域 beforeEach ：每次测试前都会执行，优先度大于区域的')})
afterAll(() => { console.log('全域 afterAll ：全域的最后一个顺序执行') })
afterEach(()=>{console.log('全域 afterEach ：每次测试后都会执行，优先度低于区域')})
console.log('global outer');
test('test 0', () => {
    console.log('test outer');
    expect(true).toEqual(true);
});
describe('outer', () => {
    console.log('describe outer-a');
    beforeAll(() => { console.log('区域 beforeAll ：区域的第一个顺序执行') })
    beforeEach(()=>{console.log('区域 beforeEach ：每次测试前都会执行，优先度低于全域的')})
    afterAll(() => { console.log('区域 afterAll ：区域的最后一个顺序执行') })
    afterEach(()=>{console.log('区域 afterEach ：每次测试后都会执行，优先度大于全域的')})

    describe('describe inner 1', () => {
        console.log('describe inner 1');
        test('test 1', () => {
            console.log('test for describe inner 1');
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer-b');

    test('test 1', () => {
        console.log('test for describe outer');
        expect(true).toEqual(true);
    });

    describe('describe inner 2', () => {
        console.log('describe inner 2');
        test('test for describe inner 2', () => {
            console.log('test for describe inner 2');
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer-c');
});
describe('outer 2', () => {
    console.log('describe outer d');
});
console.log('global outer end');

// global outer
// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// describe outer-d
// global outer end
//---
// 全域 beforeAll ：全域的第一个顺序执行
// 全域 beforeEach ：每次测试前都会执行，优先度大于区域的
// test outer
// 全域 afterEach ：每次测试后都会执行，优先度低于区域
// 区域 beforeAll ：区域的第一个顺序执行
// 全域 beforeEach ：每次测试前都会执行，优先度大于区域的
// 区域 beforeEach ：每次测试前都会执行，优先度低于全域的
// test for describe inner 1
// 区域 afterEach ：每次测试后都会执行，优先度大于全域的
// 全域 afterEach ：每次测试后都会执行，优先度低于区域的
//--
// 全域 beforeEach ：每次测试前都会执行，优先度大于区域的
// 区域 beforeEach ：每次测试前都会执行，优先度低于全域的
// test for describe outer
// 区域 afterEach ：每次测试后都会执行，优先度大于全域的
// 全域 afterEach ：每次测试后都会执行，优先度低于区域的
//--
// 全域 beforeEach ：每次测试前都会执行，优先度大于区域的
// 区域 beforeEach ：每次测试前都会执行，优先度低于全域的
// test for describe inner 2
// 区域 afterEach ：每次测试后都会执行，优先度大于全域的
// 全域 afterEach ：每次测试后都会执行，优先度低于区域的
// 区域 afterAll ：区域的最后一个顺序执行
// 全域 afterAll ：全域的最后一个顺序执行