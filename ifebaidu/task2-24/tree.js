//全局变量记得初始化，在前序遍历和后序遍历函数里也必须初始化
var timeStamp = null;
var isFind = false;
var TRAVERSAL = "traversal";
var SEARCH = "search";
var selectedNode = [];

function init()
{
    var rootObj = document.getElementById("root");

    var preOrderObj = document.getElementById("preOrder");
    preOrderObj.onclick = function(){
        var arr = [];
        isFind = false;
        preOrderTraversal(rootObj, arr);
        show(arr, TRAVERSAL);
    };

    var afterOrderObj = document.getElementById("afterOrder");
    afterOrderObj.onclick = function(){
        var arr = [];
        isFind = false;
        afterOrderTraversal(rootObj, arr);
        show(arr, TRAVERSAL);
    };

    var queryInputObj = document.getElementById("queryInput");
    var queryBtnObj = document.getElementById("queryBtn");
    queryBtnObj.onclick = function(){
        var arr = [];
        isFind = false;
        var inputValue = queryInputObj.value;
        preOrderQuery(rootObj, arr, inputValue);
        show(arr, SEARCH);
    };

    //点击某个节点元素，则该节点元素呈现一个特殊被选中的样式
    var divObjs = document.getElementsByTagName("div");
    for(var i = 0, divslen = divObjs.length; i < divslen; i++)
    {
        divObjs[i].onclick = function(event){
            debugger;
            if(this.className.indexOf("selected") >= 0)
            {
                var className = removeClass(this.className, "selected");
                this.className= className;
                var index = selectedNode.indexOf(this);
                if(index > -1)
                {
                    selectedNode.splice(index,1);
                }
            }
            else
            {
                this.className += " selected";
                selectedNode.push(this);
            }
            event.stopPropagation();
        };
    }
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
            var divVal = document.createTextNode(addInputObj.value);
            divNode.appendChild(divVal);
            selectedNode[i].appendChild(divNode);
            
        }
    };
}

function preOrderTraversal(node, arr)
{
    if(node != null)
    {
        arr.push(node);
        for(var i = 0, len = node.childNodes.length; i < len; i++)
        {
            if(node.childNodes[i].nodeType == 1)
            {
                preOrderTraversal(node.childNodes[i], arr);
            }
        }
    }
    
}

function preOrderQuery(node, arr, inputValue)
{
    if(node != null)
    {
        arr.push(node);
        
        if(node.firstChild.nodeValue.trim() == inputValue)
        {
            isFind = true;
        }
        for(var i = 0, len = node.childNodes.length; i < len; i++)
        {
            if(isFind == false && node.childNodes[i].nodeType == 1)
            {
                preOrderQuery(node.childNodes[i], arr, inputValue);
            }
        }
    }
}

function afterOrderTraversal(node, arr)
{
    if(node != null)
    {
        for(var i = 0, len = node.childNodes.length; i < len; i++)
        {
            if(node.childNodes[i].nodeType == 1)
            {
                afterOrderTraversal(node.childNodes[i], arr);
            }
        }
        arr.push(node);
    }
}

function show(arr, flag)
{
    var indexObj = {
        i : 0
    }

    if(timeStamp != null)
    {
        window.clearInterval(timeStamp);
    }

    timeStamp = window.setInterval(animation, 500, arr, indexObj, flag);
}

function animation(arr, indexObj, flag)
{
    for(var j = 0; j < arr.length; j++)
    {
        //arr[j].style.backgroundColor="white";
        var className = removeClass(arr[j].className, "blueColor");
        arr[j].className = className;
    }
    if(indexObj.i == arr.length)
    {
        if(timeStamp != null)
        {
            window.clearInterval(timeStamp);
        }
        if(isFind == true)
        {
            //arr[indexObj.i - 1].style.backgroundColor = "blue";
            arr[indexObj.i - 1].className += " blueColor";
        }
        else
        {
            if(flag == SEARCH)
            {
                alert("not found!");
            }
            
        }
        return;
    }
    //arr[indexObj.i].style.backgroundColor = "blue";
    arr[indexObj.i].className += " blueColor";
    indexObj.i++;
}

function removeClass(classStr, value)
{
    var className = "";
    var arr = classStr.split(/\s+/);//以空格分割
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
    return className;
}

init();