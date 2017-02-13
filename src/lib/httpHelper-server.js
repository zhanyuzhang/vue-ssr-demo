export default {
    getOrigin: function () {
        return process.env.NODE_ENV === 'production' ? 'bolo.163.com' : 'preview.bobo.com:85';
    }
}