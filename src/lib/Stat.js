import base from './base';
import uadetector from './uadetector';

//_czc.push(["_trackEvent",category,action,label,value,nodeid]);
//各参数含义如下：
//category：事件类别，必填项，表示事件发生在谁身上，如“视频”、“小说”、“轮显层”等等。
//action：事件操作，必填项，表示访客跟元素交互的行为动作，如"播放"、"收藏"、"翻层"等等。
//label：事件标签，选填项，用于更详细的描述事件，从各个方面都可以，比如具体是哪个视频，哪部小说，翻到了第几层等等。
//value：事件值，选填项，整数型，用于填写打分型事件的分值，加载时间型事件的时长，订单型事件的价格等等。
//nodeid：div元素id，选填项，填写网页中的div元素id值，用于在“用户视点”功能上重绘元素的事件发生情况。
export default {
  send: function (category, options) {
    options = base.extend({
      action: uadetector.isDevice('mobile') ? 'tap' : 'click',
      label: '',
      value: ''
    }, options);
    if (_czc) _czc.push(["_trackEvent", category, options.action, options.label, options.value]);
  }
}
