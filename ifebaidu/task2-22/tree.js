
var timeStamp = null;

function init()
{
    var rootObj = document.getElementById("root");

    var preOrderObj = document.getElementById("preOrder");
    preOrderObj.onclick = function(){
        var arr = [];
        preOrderTraversal(rootObj, arr);
        show(arr);
    };

    var inOrderObj = document.getElementById("inOrder");
    inOrderObj.onclick = function(){
        var arr = [];
        inOrderTraversal(rootObj, arr);
        show(arr);
    };

    var afterOrderObj = document.getElementById("afterOrder");
    afterOrderObj.onclick = function(){
        var arr = [];
        afterOrderTraversal(rootObj, arr);
        show(arr);
    };

    
}

function preOrderTraversal(node, arr)
{
    if(node != null)
    {
        console.log(node.getAttribute("value"));
        arr.push(node);
        preOrderTraversal(node.childNodes[1], arr);
        preOrderTraversal(node.childNodes[3], arr);
    }
    
}
function inOrderTraversal(node, arr)
{
    if(node != null)
    {
        inOrderTraversal(node.childNodes[1], arr);
        console.log(node.getAttribute("value"));
        arr.push(node);
        inOrderTraversal(node.childNodes[3], arr);
    }
}

function afterOrderTraversal(node, arr)
{
    if(node != null)
    {
        afterOrderTraversal(node.childNodes[1], arr);
        afterOrderTraversal(node.childNodes[3], arr);
        console.log(node.getAttribute("value"));
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
    for(var j = 0; j < arr.length; j++)
    {
        arr[j].style.backgroundColor="white";
    }
    if(indexObj.i == arr.length)
    {
        if(timeStamp != null)
        {
            window.clearInterval(timeStamp);
        }
        return;
    }
    arr[indexObj.i].style.backgroundColor = "blue";
    indexObj.i++;
}

init();