
// function popUp(winURL)
// {
// 	window.open(winURL,"popup","width=300,height=480");
// }

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

// window.onload=prepareLinks;
// function prepareLinks()
// {
// 	if(!document.getElementsByTagName) return false;
// 	var links = document.getElementsByTagName("a");
// 	for(var i=0;i<links.length;i++)
// 	{
// 		if(links[i].getAttribute("class") == "popup")
// 		{
// 			links[i].onclick=function(){
// 				popUp(this.getAttribute("href"));
// 				return false;
// 			}
// 		}
// 	}
// }

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
	//var oldonload = window.onload;
	if(typeof window.onload != 'function')
	{
		window.onload = func;
	}
	else
	{
		window.onload = function(){
			window.onload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);