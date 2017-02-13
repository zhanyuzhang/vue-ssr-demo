import {createApp} from './main';
export default function (context) {
    return new Promise(resolve => {
        resolve(createApp());
    });
}