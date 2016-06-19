function styleHeaderSiblings(tag, theclass)
{
	if(!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName(tag);
	var elem;
	for(var i = 0;i < headers.length;i++)
	{
		elem = getNextElement(headers[i].nextSibling);
		//elem.style.fongWeight="bold";
		//elem.style.fontSize = "1.2em";
		addClass(elem,theclass);
	}
}

function addClass(element, value)
{
	if(!element.className)
	{
		element.className = value;
	}
	else
	{
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}

function getNextElement(node)
{
	if(node.nodeType == 1)
	{
		return node;
	}
	if(node.nextSibling)
	{
		return getNextElement(node.nextSibling);
	}
	return null;
	
}

window.onload = function(){
	styleHeaderSiblings("h1","intro");
}