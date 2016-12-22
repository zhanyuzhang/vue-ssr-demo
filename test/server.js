import {createApp} from './index';

export default function () {
    const app = createApp();
    return new Promise(resolve => {
        resolve(app);
    });
}