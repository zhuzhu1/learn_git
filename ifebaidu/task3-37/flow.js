
function init()
{

    var flowObj = document.getElementById("flow");
    flowObj.style.top = (window.innerHeight-200) / 2 + "px";
    flowObj.style.left = (window.innerWidth-300) / 2 + "px";

    var oDisplayBtn = document.getElementById("displayBtn");
    oDisplayBtn.onclick = function(){
        
        if(flowObj.style.display == "block")
        {
            flowObj.style.display = "none";
            this.value = "show";
        }
        else
        {
            flowObj.style.display = "block";
            this.value = "hidden";
        }
    }

    document.onclick = function(event){
        debugger;
        if(event.target.id != "flow" && event.target.id != "displayBtn")
        {
            flowObj.style.display="none";
            oDisplayBtn.value = "show";
        }
    }

    var isDrag = false;
    var topOffset = 0;
    var leftOffset = 0;
    flowObj.onmousedown = function(event){

        topOffset = event.clientY - flowObj.offsetTop;
        leftOffset = event.clientX - flowObj.offsetLeft;
        isDrag = true;
    }

    document.onmousemove = function(event){
            if(isDrag == false)
            {
                return false;
            }
       
            var top = event.clientY - topOffset;
            flowObj.style.top = top + "px";
            var left = event.clientX - leftOffset;
            flowObj.style.left = left + "px";

        }

    document.onmouseup = function(event){
        isDrag = false;
    }
}



init();