function displayAbbreviations()
{
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;

	var abbrs = document.getElementsByTagName("abbr");

	var dl = document.createElement("dl");
	//遍历缩略词
	for(var i = 0;i < abbrs.length;i++)
	{
		if(abbrs[i].childNodes.length < 1) continue;
	    //创建定义标题
		var dt = document.createElement("dt");
		var titleTxt = document.createTextNode(abbrs[i].firstChild.nodeValue);
		if(titleTxt.length < 1) return false;
		dt.appendChild(titleTxt);
		//创建定义描述
		var dd = document.createElement("dd");
		var titleAttr = document.createTextNode(abbrs[i].getAttribute("title"));
		//把它们添加到定义列表
		dd.appendChild(titleAttr);
		dl.appendChild(dt);
		dl.appendChild(dd);
	}
	if(dl.childNodes.length < 1) return false;

	//创建标题
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbbreviations");
	header.appendChild(header_text);

	var body = document.getElementsByTagName("body");
	body[0].appendChild(header);
	body[0].appendChild(dl);
}

function displayCitations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//取得所有引用
	blockquotes = document.getElementsByTagName("blockquote");
	//遍历引用
	for(var i = 0;i < blockquotes.length;i++)
	{
		var cite = blockquotes[i].getAttribute("cite");
		if(cite)
		{
			//取得引用中的所有元素节点
			var quoteChilden = blockquotes[i].getElementsByTagName("*");
			if(quoteChilden.length < 1) continue;
			var elem = quoteChilden[quoteChilden.length - 1];

			//创建标记
			var link = document.createElement("a");
			var link_text= document.createTextNode("source");
			link.appendChild(link_text);
			link.setAttribute("href",cite);

			var superscript = document.createElement("sup");
			superscript.appendChild(link);

			//把标记添加到引用中的最后一个元素节点上
			elem.appendChild(superscript);
		}
	}
}

function displayAccesskeys()
{
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;

	var links = document.getElementsByTagName("a");
	var list = document.createElement("ul");

	for(var i = 0;i < links.length;i++)
	{
		if(!links[i].getAttribute("accesskey")) continue;
		var item =document.createElement("li");
		var item_text = document.createTextNode(links[i].getAttribute("accesskey")+" : "+links[i].firstChild.nodeValue);
		item.appendChild(item_text);

		list.appendChild(item);
	}

	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);

	document.body.appendChild(header);
	document.body.appendChild(list);
}

window.onload = function(){
	displayCitations();
	displayAbbreviations();
	displayAccesskeys();
}