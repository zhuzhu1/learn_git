var position = {
    direction: "up",
    x : 5,
    y : 5
}
function init()
{
    var traLefObj = document.getElementById("tre_lef");
    var traTopObj = document.getElementById("tre_top");
    var traRigObj = document.getElementById("tre_rig");
    var traBotObj = document.getElementById("tre_bot");
    var movLefObj = document.getElementById("mov_lef");
    var movTopObj = document.getElementById("mov_top");
    var movRigObj = document.getElementById("mov_rig");
    var movBotObj = document.getElementById("mov_bot");

    var div1Obj = document.getElementById("div1");
    var div2Obj = document.getElementById("div2");

    //向屏幕的左侧移动一格，方向不变
    traLefObj.onclick = function(){
        var left = div1Obj.offsetLeft - 33;
        if(left < 33)
        {
            left = 33;
        }
        div1Obj.style.left = left+ "px";
    }
    //向屏幕的上面移动一格，方向不变
    traTopObj.onclick = function(){
        var top = div1Obj.offsetTop - 33;
        if(top < 33)
        {
            top = 33;
        }
        div1Obj.style.top = top+ "px";
    }
    //向屏幕的右侧移动一格，方向不变
    traRigObj.onclick = function(){
        var left = div1Obj.offsetLeft + 33;
        if(left > 330)
        {
            left = 330;
        }
        div1Obj.style.left = left+ "px";
    }

    //向屏幕的下面移动一格，方向不变
    traBotObj.onclick = function(){
        var top = div1Obj.offsetTop + 33;
        if(top > 330)
        {
            top = 330;
        }
        div1Obj.style.top = top+ "px";
    }

    //方向转向屏幕左侧，并向屏幕的左侧移动一格
    movLefObj.onclick = function(){
        var left = div1Obj.offsetLeft - 33;
        if(left < 33)
        {
            left = 33;
        }
        div1Obj.style.left = left+ "px";
        div2Obj.className = "div2left";
    }

    //方向转向屏幕上面，向屏幕的上面移动一格
    movTopObj.onclick = function(){
        var top = div1Obj.offsetTop - 33;
        if(top < 33)
        {
            top = 33;
        }
        div1Obj.style.top = top+ "px";
        div2Obj.className = "div2up";
    }
    //方向转向屏幕右侧，向屏幕的右侧移动一格
    movRigObj.onclick = function(){
        var left = div1Obj.offsetLeft + 33;
        if(left > 330)
        {
            left = 330;
        }
        div1Obj.style.left = left+ "px";
        div2Obj.className = "div2right";
    }

    //方向转向屏幕下面，向屏幕的下面移动一格
    movBotObj.onclick = function(){
        var top = div1Obj.offsetTop + 33;
        if(top > 330)
        {
            top = 330;
        }
        div1Obj.style.top = top+ "px";
        div2Obj.className = "div2down";
    }
    

}

init();

