/*
  author: Lazaro Fernandes Lima
  blog: www.lazarolima.com.br
  linkedin: http://br.linkedin.com/in/lazaroflima


  usage:
  <!--
  data-likeid:    Defines an unique identifier that represents the like object
  data-likes:     Number of likes (for a better performance, this attribute does not be omitted)
  data-enjoyed:   If current user enjoyed the object. Defines the behavior of appearance
  -->
  <a class="like" data-likeid="d41d8cd98f00b204e9800998ecf8427e" data-likes="7" data-enjoyed="true"></a>
  <a class="like" data-likeid="2304" data-likes="1" data-enjoyed="false"></a>

  $(".like").likeJs();
  //
  $(".like").likeJs({
    css: "btn btn-mini",
    liketext: "I Like S2",
    unliketext: "not short anymore!",
    log: true,
    addlikeurl: "http://www.lazarolima.com.br/like",
    removelikeurl: "http://www.lazarolima.com.br/dislike"
  }); 

*/

(function($){
  $.likeJs = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        base.likeid = base.$el.attr("data-likeid");
        base.likes = base.$el.attr("data-likes");
        base.enjoyed = base.$el.attr("data-enjoyed");
        
        // Add a reverse reference to the DOM object
        base.$el.data("likeJs", base);
        
        base.init = function(){
          base.options = $.extend({},$.likeJs.defaultOptions, options);
          base.setAppearance();
        };
        
        base.setAppearance = function(){
          base.$el.addClass(base.options.css);
          base.defineText();
        };

        base.defineText = function(){
          if(base.likes < 0){
            if(base.options.log)
              console.log("[error]--> defineText: 'base.likes' must be greater than zero on " + base.likeid);
            return;
          }

          var _liketext = base.enjoyed ? base.options.unliketext : base.options.liketext;
          base.$el.text(_liketext + " (" + base.likes + ")");
        };

        base.addLike = function(element){
          if(base.options.addlikeurl !== undefined && base.options.addlikeurl != "")
          {
            //todo
          }
          else if(base.options.log)
            console.log("[error]--> addLike: 'base.options.addlikeurl' can not be null on " + base.likeid);
        };
        
        base.removeLike = function(element){
          if(base.options.removelikeurl !== undefined && base.options.removelikeurl != "" )
          {
            //todo
          }
          else if(base.options.log)
            console.log("[error]--> removeLike: 'base.options.removelikeurl' can not be null on " + base.likeid);
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

      $.fn.likeJs = function(options){
        return this.each(function(){
          (new $.likeJs(this, options));
        });
      };

    })(jQuery);