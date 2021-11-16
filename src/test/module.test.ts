import {calculator} from "./calculator";

jest.mock('./calculator', () => {
    return {
        default: jest.fn()
    };
});
const calculatorRequire= require('./calculator').default;
calculatorRequire();
it('calls the mocked function', () => {
    expect(calculator).toHaveBeenCalled();  //Matcher error: received value must be a mock or spy function
});

it('calls the mocked require function', () => {
    expect(calculatorRequire).toHaveBeenCalled();  //Matcher error: received value must be a mock or spy function
});

