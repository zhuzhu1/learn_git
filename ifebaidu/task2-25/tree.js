//全局变量记得初始化，在前序遍历和后序遍历函数里也必须初始化
var timeStamp = null;
var isFind = false;
var selectedNode = [];

function init()
{
    var rootObj = document.getElementById("root");

    var queryInputObj = document.getElementById("queryInput");
    var queryBtnObj = document.getElementById("queryBtn");
    queryBtnObj.onclick = function(){
        var arr = [];
        isFind = false;
        var inputValue = queryInputObj.value;
        preOrderQuery(rootObj, arr, inputValue);
        show(arr);
    };

    //点击某个节点元素，则该节点元素呈现一个特殊被选中的样式
    rootObj.addEventListener("mousedown",function(event){
        //左键 节点的折叠与展开
        if(event.button ==0){
            foldOrNot(event);
        }
        //右键 选中节点
        if(event.button ==2){
            chooseNode(event);
            
        }
        event.stopPropagation();
    });

    //删除
    var deleteObj = document.getElementById("delete");
    deleteObj.onclick = function(){
        for(var i = 0, len = selectedNode.length; i < len; i++)
        {
            if(selectedNode[i].parentNode != null)
            {
                selectedNode[i].parentNode.removeChild(selectedNode[i]);
            }
        }
        selectedNode = [];
    }

    //添加
    var addInputObj = document.getElementById("addInput");
    var addBtnObj = document.getElementById("addBtn");
    addBtnObj.onclick = function(){
        for(var i = 0, len = selectedNode.length; i < len; i++)
        {
            var divNode = document.createElement("div");
            var spanNode = document.createElement("span");
            var spanVal = document.createTextNode(addInputObj.value);
            spanNode.appendChild(spanVal);
            divNode.appendChild(spanNode);
            selectedNode[i].appendChild(divNode);
        }

        for(var j = 0; j < selectedNode.length; j++)
        {
            removeClass(selectedNode[j].firstChild, "selected");
            removeClass(selectedNode[j].childNodes[3], "selected");
        }
        selectedNode = [];
    };
}

function foldOrNot(event)
{
    if(event.target.nodeName == "SPAN")
    { 
        debugger;
        var divs = event.target.parentNode.childNodes;
        for(var i = 0; i < divs.length; i++)
        {
            // + -
            if(divs[i].nodeName == "SPAN")
            {
                if(divs[i].className.indexOf("image") >= 0)
                {
                    removeClass(divs[i], "image");
                }
                else
                {
                    divs[i].className += " image";
                }
            }
            //show hide
            if(divs[i].nodeName == "DIV")
            {
                if(divs[i].className.indexOf("hide") >= 0)
                {
                    removeClass(divs[i], "hide");
                }
                else
                {
                    divs[i].className="hide";
                }
            }
            
        }
        
    }
}

function chooseNode(event)
{
    if(event.target.nodeName == "SPAN")
    { 
        var parentNode = event.target.parentNode;
        if(event.target.className.indexOf("selected") >= 0)
        {
            removeClass(event.target, "selected");

            var index = selectedNode.indexOf(parentNode);
            if(index > -1)
            {
                selectedNode.splice(index,1);
            }
        }
        else
        {
            event.target.className += " selected";
            selectedNode.push(parentNode);
        }
    }
}
//arr里存放的是span
function preOrderQuery(node, arr, inputValue)
{
    if(node != null)
    {
        //arr.push(node);
        
        for(var i = 0, len = node.childNodes.length; i < len; i++)
        {
            if(node.childNodes[i].nodeName == "SPAN")
            {
                arr.push(node.childNodes[i]);
                if(node.childNodes[i].firstChild.nodeValue.trim() == inputValue)
                {
                    isFind = true;
                    break;
                }
            }
            if(isFind == false && node.childNodes[i].nodeName == "DIV")
            {
                preOrderQuery(node.childNodes[i], arr, inputValue);
            }
        }
    }
}

function show(arr)
{
    var indexObj = {
        i : 0
    }

    if(timeStamp != null)
    {
        window.clearInterval(timeStamp);
    }

    timeStamp = window.setInterval(animation, 500, arr, indexObj);
}

function animation(arr, indexObj)
{
    for(var j = 0; j < arr.length; j++)
    {
        removeClass(arr[j], "blueColor");
    }
    if(indexObj.i == arr.length)
    {
        if(timeStamp != null)
        {
            window.clearInterval(timeStamp);
        }
        if(isFind == true)
        {
            arr[indexObj.i - 1].className += " blueColor";
        }
        else
        {
            alert("not found!"); 
        }
        
        return;
    }
    arr[indexObj.i].className += " blueColor";
    //打开子节点
    openChild(arr[indexObj.i].parentNode);
    indexObj.i++;
    
}

function openChild(node)
{
    var childs = node.childNodes;
    for(var i = 0; i < childs.length; i++)
    {
        if(childs[i].nodeName == "DIV")
        {
            if(childs[i].className.indexOf("hide") >=0)
            {
                removeClass(childs[i], "hide");
            }
            
        }
    }
}

function removeClass(node, value)
{
    if(node != null)
    {
        var className = "";
        var arr = node.className.split(/\s+/);//以空格分割
        for(var i = 0; i < arr.length; i++)
        {
            if(arr[i] != value)
            {
                if(className != "")
                {
                    className += " ";
                }
                className += arr[i];
            }
        }
        node.className = className;
    }
    
}

init();