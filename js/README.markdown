#LikeJs
###JQuery plugin for a "social network like component" data oriented component

- supported by any html elements (<a>, <button>, <input>, <span>, <div> ...)


#Usage

<!--
data-likeid:    Defines an unique identifier that represents the like object
data-likes:     Number of likes (for a better performance, this attribute does not be omitted)
data-enjoyed:   If current user enjoyed the object. Defines the behavior of appearance
-->
\<a class="like" data-likeid="d41d8cd98f00b204e9800998ecf8427e" data-likes="7" data-enjoyed="true"></a>
\<a class="like" data-likeid="2304" data-likes="1" data-enjoyed="false"></a>

\//basic options
\$(".like").likeJs({
\	addlikeurl: "http://www.lazarolima.com.br/like",
\	removelikeurl: "http://www.lazarolima.com.br/dislike"
\});

\// full options
\$(".like").likeJs({
\	css: "btn btn-mini",
\	liketext: "I Like S2",
\	unliketext: "not short anymore!",
\	log: true,
\	addlikeurl: "http://www.lazarolima.com.br/like",
\	removelikeurl: "http://www.lazarolima.com.br/dislike"
\}); 

