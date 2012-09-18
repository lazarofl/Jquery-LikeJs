/*
author: Lazaro Fernandes Lima
blog: www.lazarolima.com.br
linkedin: http://br.linkedin.com/in/lazaroflima
*/

(function ($) {
    $.likeJs = function (el, options) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        base.likeid = base.$el.attr("datalikeid");
        base.likes = base.$el.attr("datalikes");
        base.enjoyed = base.$el.attr("dataenjoyed");

        // Add a reverse reference to the DOM object
        base.$el.data("likeJs", base);

        base.init = function () {
            base.options = $.extend({}, $.likeJs.defaultOptions, options);
            if (base.options.log) console.log("[loading]--> base.init on " + base.likeid);

            base.setAppearance();
            if (base.options.log) console.log("[success]--> base.init on " + base.likeid);
        };

        base.setAppearance = function () {
            base.$el.addClass(base.options.css);
            base.defineText();
            base.defineHandlers();
        };

        base.defineText = function () {
            if (base.likes < 0) {
                return;
            }

            var _liketext = (base.enjoyed === 'true' || base.enjoyed === true) ? base.options.unliketext : base.options.liketext;
            base.$el.text(_liketext + " (" + base.likes + ")");
        };

        base.defineHandlers = function () {
            if (base.likes < 0) {
                return;
            }

            var _handler = (base.enjoyed === 'true' || base.enjoyed === true) ? base.removeLike : base.addLike;
            base.$el.bind("click", _handler);
        };

        base.changeclickhandler = function (handler) {
            base.$el.unbind("click");
            if (handler)
                base.$el.bind("click", handler);
        }

        //base.options.addlikeurl response example
        //data: { totallike: 10 }
        base.addLike = function (element) {
            if (base.options.log) console.log("[click]--> addLike: on " + base.likeid);
            if (base.options.addlikeurl !== undefined && base.options.addlikeurl != "") {
                $.ajax({
                    type: 'POST',
                    url: base.options.addlikeurl,
                    datatype: "JSON",
                    data: { likeid: base.likeid },
                    success: function (data) {
                        base.enjoyed = true;
                        base.likes = data.totallike;
                        base.changeclickhandler();
                        base.setAppearance();
                        if (base.options.log) console.log("[ajax post success]--> addLike: on " + base.likeid);
                        if (base.options.log) console.log("[base.enjoyed === 'true']--> " + (base.enjoyed === 'true' || base.enjoyed === true));
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (base.options.log) console.log("[error]--> addLike: on " + base.likeid + " - textStatus: " + textStatus);
                    }
                });

            }
            else if (base.options.log) console.log("[error]--> addLike: 'base.options.addlikeurl' can not be null on " + base.likeid);
        };

        base.removeLike = function (element) {
            if (base.options.log) console.log("[click]--> removeLike: on " + base.likeid);
            if (base.options.removelikeurl !== undefined && base.options.removelikeurl != "") {
                $.ajax({
                    type: 'DELETE',
                    url: base.options.removelikeurl,
                    datatype: "JSON",
                    data: { likeid: base.likeid },
                    success: function (data) {
                        base.enjoyed = false;
                        base.likes = data.totallike;
                        base.changeclickhandler();
                        base.setAppearance();
                        if (base.options.log) console.log("[ajax post success]--> addLike: on " + base.likeid);
                        if (base.options.log) console.log("[base.enjoyed === 'true']--> " + (base.enjoyed === 'true' || base.enjoyed === true));
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        if (base.options.log) console.log("[error]--> addLike: on " + base.likeid + " - textStatus: " + textStatus);
                    }
                });
            }
            else if (base.options.log) console.log("[error]--> removeLike: 'base.options.removelikeurl' can not be null on " + base.likeid);
        };

        // Run initializer
        base.init();
    };

    $.likeJs.defaultOptions = {
        css: 'btn btn-mini', // using http://twitter.github.com/bootstrap/
        liketext: 'curtir',
        unliketext: 'desfazer curtir',
        log: true
    };

    $.fn.likeJs = function (options) {
        return this.each(function () {
            (new $.likeJs(this, options));
        });
    };

})(jQuery);