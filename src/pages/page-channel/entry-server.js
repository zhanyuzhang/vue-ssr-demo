import {createApp, store} from './main'
import types from './types'
export default function (context) {
    store.commit({
        type: types.SET_ORIGIN,
        origin: context.origin
    });
    store.commit({
        type: types.SET_USER_ID,
        userId: context.params.userId
    });
    console.log('ok');
    return store.dispatch(types.GET_CHANNEL_INFO).then(function () {
        context.state = store.state;
        createApp();
    });
}