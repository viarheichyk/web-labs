import { mockedResponse } from './mockedResponse';

export const mockedApiCall = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = mockedResponse;
            mockedResponse !== undefined ? resolve(result) : reject("Api error!");
        }, 500);
    });
}

mockedApiCall().then(result => {
    return result;
}, err => {
    return err;
});