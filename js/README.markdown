#LikeJs
###JQuery plugin for a "social network like component" data oriented component

- supported by any html elements (\<a>, \<button>, \<input>, \<span>, \<div> ...)


#Usage


###data attributes
\<!--<br>
\datalikeid:    Defines an unique identifier that represents the like object<br>
\datalikes:     Number of likes (for a better performance, this attribute does not be omitted)<br>
\dataenjoyed:   If current user enjoyed the object. Defines the behavior of appearance<br>
\-->
\<a class="like" data-likeid="d41d8cd98f00b204e9800998ecf8427e" data-likes="7" data-enjoyed="true"></a>
<br>
\<button class="like" data-likeid="2304" data-likes="1" data-enjoyed="false"></button>

###basic options
$(".like").likeJs({
<BR>
	addlikeurl: "http://www.lazarolima.com.br/like",
<BR>
	removelikeurl: "http://www.lazarolima.com.br/dislike"
<BR>
});

###full options
$(".like").likeJs({
<BR>
	css: "btn btn-mini",
<BR>
	liketext: "I Like S2",
<BR>
	unliketext: "not short anymore!",
<BR>
	log: true,
<BR>
	addlikeurl: "http://www.lazarolima.com.br/like",
<BR>
	removelikeurl: "http://www.lazarolima.com.br/dislike"
<BR>
}); 

