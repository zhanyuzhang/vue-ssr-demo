var remHelper = {
    originWidth: 750,
    maxWidth: null,
    remResize: function() {
        var screenWidth = document.documentElement.clientWidth;
        if(this.maxWidth && screenWidth > this.maxWidth) screenWidth = this.maxWidth;
        document.documentElement.style.fontSize = ((screenWidth / this.originWidth) * 100) + 'px';
        console.log('ok');
    }
}

export default {
    init: function(originWidth, maxWidth) {
        originWidth && (remHelper.originWidth = originWidth);
        maxWidth && (remHelper.maxWidth = maxWidth);
        remHelper.remResize();
        window.onresize = remHelper.remResize.bind(remHelper);
    }
}