/**
 * Created by wbw on 2019/3/17.
 */
requirejs(
    ['jquery', 'ko', 'webapp2', 'httpclient', 'moment'],
    function ($, ko, webApp, httpclient, moment) {
        var ViewModel = function () {
            var self = this;
            this.topOne = ko.observable('陪伴是最长情的告白，无论生老病死，我都愿陪你到天荒地老');
            this.begin1 = ko.observable('我们的遇见，是爱情的开始');
            this.begin2 = ko.observable('我们的爱情，是幸福的开始');
            this.begin3 = ko.observable('我们的幸福，是平平淡淡的陪伴');
            this.beginTime = ko.observable(moment().format('YYYY年MM月DD日'));
            this.rightImg = ko.observable('images/girl.png');
            this.leftImg = ko.observable('images/boy.png');
            this.history = ko.observableArray([]);
            this.photos = ko.observableArray([]);
            this.length = ko.observable();
            this.oath = ko.observable('  与你的相遇，是命中注定的一生一世。与你的相爱，是命中注定的地老天荒<br>'+
            '今生携手徜徉天地间，为你遮风挡雨，相濡以沫，并肩悠游滚滚红尘中<br>'+
            '即使有一天，你的步履变得蹒跚，青丝变成白发，红润的脸上爬满了皱纹，但我仍要携着你的手，漫步在夕阳的余辉下<br>'+
            '你，我一生最爱的人;你，我一生最想的人;你，我一生守候的人;你，我一生唯一的人<br>'+
            '不论你生病或是健康、富有或贫穷，始终忠於你，直到离开世界');

            this.getShowTime = function(time){
                ;
                return moment(time).format('YYYY年MM月DD日');
            };
        };

        var vm = new ViewModel();
        ko.applyBindings(vm);
        vm.init();
    });