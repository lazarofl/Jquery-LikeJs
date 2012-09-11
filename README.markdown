#LikeJs
###JQuery plugin for a "social network like component"


##What elements are supported?
- `<a>`
- `<button>`
- `<input>`
- `<span>`
- `<div>`

#How to use?
Add any html object into your page and add datalikeid, datalikecount and dataenjoyed attributes.

```html
<!--
Data attributes is used to provide all information to the component

datalikeid:    Defines an unique identifier that represents the like object
datalikes:     Number of likes
dataenjoyed:   If current user enjoyed the object. Defines the behavior of appearance
-->

<a class="like" datalikeid="d41d8cd98f00b204e9800998ecf8427e" datalikes="7" dataenjoyed="true"></a>
<button class="like" datalikeid="2304" datalikes="0" dataenjoyed="false"></button>
```

Before that, you can initialize `likeJs` in all elements using a JQuery selector.

```javascript
//basic options
$(".like").likeJs({
	addlikeurl: "http://www.lazarolima.com.br/like",
	removelikeurl: "http://www.lazarolima.com.br/dislike"
});


//full options
$(".like").likeJs({
	addlikeurl: "http://www.lazarolima.com.br/like",
	removelikeurl: "http://www.lazarolima.com.br/dislike",
	css: "btn btn-mini",
	liketext: "I Like S2",
	unliketext: "not short anymore!",
	log: true
}); 
```