var position = {
    direction: "up",
    x : 5,
    y : 5
}
function init()
{
    var divObj = document.createElement("div");
    var divObj2 = document.createElement("div");
    divObj.setAttribute("id","div1");
    divObj2.setAttribute("class","div2up");

    divObj.appendChild(divObj2);

    var trObjs = document.getElementsByTagName("tr");
    var thObjs = [];
    for(var i = 0; i < trObjs.length; i++)
    {
       thObjs[i] = trObjs[i].getElementsByTagName("th");
    }
    
    thObjs[position.x][position.y].appendChild(divObj);

    var goObj = document.getElementById("go");
    goObj.onclick = function(){
        thObjs[position.x][position.y].removeChild(divObj);
        forward();
        thObjs[position.x][position.y].appendChild(divObj);
    }


     document.onkeydown=function(event){
        debugger;
        var e = event || window.event;
        if(e && e.keyCode==38){ // up
            divObj2.className = "div2up";
            position.direction = "up";
        }
        else if(e && e.keyCode==40){ // down
            divObj2.className = "div2down";
            position.direction = "down";
        }
        else if(e && e.keyCode==37){ // left
            divObj2.className = "div2left";
            position.direction = "left";
        }
        else if(e && e.keyCode==39){ // right
            divObj2.className = "div2right";
            position.direction = "right";
        }

     }

}

init();

function forward()
{
    if(position.direction == "up")
    {
        if(position.x > 1)
        {
            position.x--;
        }
    }
    else if(position.direction == "down")
    {
        if(position.x < 10)
        {
            position.x++;
        }
    }
    else if(position.direction == "left")
    {
        if(position.y > 1)
        {
            position.y--;
        }
    }
    else
    {
        if(position.y < 10)
        {
            position.y++;
        }
    }
}


function addClass(node, value)
{
    if(node.className == "")
    {
        node.className = value;
    }
    else
    {
        node.className += " ";
        node.className += value;
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