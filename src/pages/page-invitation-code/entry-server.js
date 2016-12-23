import {createApp} from './main';
export default function (options) {
    return new Promise(resolve => {
        resolve(createApp(options));
    });
}