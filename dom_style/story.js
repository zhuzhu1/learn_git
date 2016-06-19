function styleHeaderSiblings()
{
	if(!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName("h1");
	var elem;
	for(var i = 0;i < headers.length;i++)
	{
		elem = getNextElement(headers[i].nextSibling);
		elem.style.fongWeight="bold";
		elem.style.fontSize = "1.2em";
		//elem.style.color="red";
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

window.onload = styleHeaderSiblings;