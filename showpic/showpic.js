function showPic(whichpic)
{
	if(!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	if(placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("discription"))
	{
		var text = whichpic.getAttribute("title");
		var discription = document.getElementById("discription");
		discription.firstChild.nodeValue = text;
	}
	return true;
	
}

function preparePlaceholder()
{
	var imgNode = document.createElement("img");
	imgNode.setAttribute("id","placeholder");
	imgNode.setAttribute("src","images/fireworks.jpg");
	imgNode.setAttribute("alt","my image gallery");
	var pNode = document.createElement("p");
	pNode.setAttribute("id","discription");

	txt = document.createTextNode("choose an image");
	pNode.appendChild(txt);

	var gallery = document.getElementById("imagegallery");
	gallery.parentNode.insertBefore(imgNode,gallery);
	gallery.parentNode.insertBefore(pNode,gallery);

}

//window.onload=prepareGallery;
function prepareGallery()
{
	if(!document.getElementsByTagName || !document.getElementById) return false;
	var gallery = document.getElementById("imagegallery");
	if(!gallery) return false;

	var links = gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++)
	{
		links[i].onclick=function(){
			return !showPic(this);  //验证返回值，用来决定是否阻止默认行为
		}
	}

}

function addLoadEvent(func)
{
	var oldonload = window.onload;
	if(typeof window.onload != 'function')
	{
		window.onload = func;
	}
	else
	{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
// window.onload = function(){
// 	preparePlaceholder();
// 	prepareGallery();
// }