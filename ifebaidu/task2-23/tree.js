//全局变量记得初始化，在前序遍历和后序遍历函数里也必须初始化
var timeStamp = null;
var isFind = false;

function init()
{
    var rootObj = document.getElementById("root");

    var preOrderObj = document.getElementById("preOrder");
    preOrderObj.onclick = function(){
        var arr = [];
        isFind = false;
        preOrderTraversal(rootObj, arr);
        show(arr);
    };

    var afterOrderObj = document.getElementById("afterOrder");
    afterOrderObj.onclick = function(){
        var arr = [];
        isFind = false;
        afterOrderTraversal(rootObj, arr);
        show(arr);
    };

    var queryInputObj = document.getElementById("queryInput");
    var queryBtnObj = document.getElementById("queryBtn");
    queryBtnObj.onclick = function(){
        var arr = [];
        isFind = false;
        var inputValue = queryInputObj.value;
        preOrderQuery(rootObj, arr, inputValue);
        show(arr);
    }
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
    debugger;
    for(var j = 0; j < arr.length; j++)
    {
        //arr[j].style.backgroundColor="white";
        if(arr[j].className.trim() == "blueColor")
        {
            arr[j].className = "";
        }
        else
        {
            var spaceIndex = arr[j].className.indexOf(" ");
            if(spaceIndex > 0)
            {
                var className = arr[j].className.substring(0,spaceIndex);
                arr[j].className = className;
            }
        } 
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
        return;
    }
    //arr[indexObj.i].style.backgroundColor = "blue";
    arr[indexObj.i].className += " blueColor";
    indexObj.i++;
}

init();