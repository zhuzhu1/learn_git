var position = {
    direction: "up",
    x : 5,
    y : 5
}

var timerHor = null;
function startMoveHorizontal(obj,iTarget)
{
    if(iTarget < 33 || iTarget > 330)
    {
        return;
    }
    clearInterval(timerHor);
    timerHor = setInterval(function(){
        if(obj.offsetLeft == iTarget)
        {
            clearInterval(timerHor);
        }
        else
        {
            var left = 0;
            if(obj.offsetLeft > iTarget)
            {
                left = obj.offsetLeft - 3;
            }
            else
            {
                left = obj.offsetLeft + 3;
            }
            obj.style.left = left+ "px";
        }
        

    },30);
    
}
var timerVer = null;
function startMoveVertival(obj,iTarget)
{
    if(iTarget < 33 || iTarget > 330)
    {
        return;
    }
    clearInterval(timerVer);
    timerVer = setInterval(function(){
        if(obj.offsetTop == iTarget)
        {
            clearInterval(timerVer);
        }
        else
        {
            var top = 0;
            if(obj.offsetTop > iTarget)
            {
                top = obj.offsetTop - 3;
            }
            else
            {
                top = obj.offsetTop + 3;
            }
            obj.style.top = top+ "px";
        }
        

    },30);
    
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
        startMoveHorizontal(div1Obj, div1Obj.offsetLeft - 33);
    }
    //向屏幕的上面移动一格，方向不变
    traTopObj.onclick = function(){
        startMoveVertival(div1Obj,div1Obj.offsetTop - 33);
    }
    //向屏幕的右侧移动一格，方向不变
    traRigObj.onclick = function(){
        startMoveHorizontal(div1Obj, div1Obj.offsetLeft + 33);
    }

    //向屏幕的下面移动一格，方向不变
    traBotObj.onclick = function(){
        startMoveVertival(div1Obj,div1Obj.offsetTop + 33);
    }

    //方向转向屏幕左侧，并向屏幕的左侧移动一格
    movLefObj.onclick = function(){

        div2Obj.className = "div2left";
        startMoveHorizontal(div1Obj, div1Obj.offsetLeft - 33);
    }

    //方向转向屏幕上面，向屏幕的上面移动一格
    movTopObj.onclick = function(){

        div2Obj.className = "div2up";
        startMoveVertival(div1Obj,div1Obj.offsetTop - 33);
    }
    //方向转向屏幕右侧，向屏幕的右侧移动一格
    movRigObj.onclick = function(){
        
        div2Obj.className = "div2right";
        startMoveHorizontal(div1Obj, div1Obj.offsetLeft + 33);
    }

    //方向转向屏幕下面，向屏幕的下面移动一格
    movBotObj.onclick = function(){

        div2Obj.className = "div2down";
        startMoveVertival(div1Obj,div1Obj.offsetTop + 33);
    }
    

}

init();

