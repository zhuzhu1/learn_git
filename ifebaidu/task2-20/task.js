function init()
{
  
  var ulQueue = document.getElementById("queue");
  var inputValue = document.getElementById("inputvalue");

  var leftIn = document.getElementById("leftin");
  leftIn.onclick = function(){
      var myarr = inputValue.value.split(/[\s/,，，，、]/);
      for(var i = myarr.length - 1; i >= 0;i--)
      {
          var liNode = document.createElement("li");
          var liVal = document.createTextNode(myarr[i]);
          liNode.appendChild(liVal);
          appendFirstChild(ulQueue, liNode);
      }
      inputValue.value = "";
      
  };

  function appendFirstChild(parent, newNode)
  {
      if(parent.childNodes.length == 0)
      {
          parent.appendChild(newNode);
          return;
      }
      parent.insertBefore(newNode, parent.firstChild);
  }

  var rightIn = document.getElementById("rightin");
  rightIn.onclick = function(){
      var myarr = inputValue.value.split(/[\s/,，，，、]/);
      for(var i = 0; i < myarr.length;i++)
      {
          var liNode = document.createElement("li");
          var liVal = document.createTextNode(myarr[i]);
          liNode.appendChild(liVal);
          ulQueue.appendChild(liNode);
      }

      inputValue.value = "";
  };

  var leftOut = document.getElementById("leftout");
  leftOut.onclick = function(){
    if(ulQueue.childNodes.length > 0)
    {
      var delValue = ulQueue.firstChild.firstChild.nodeValue;
      ulQueue.removeChild(ulQueue.firstChild);
      alert("删除的数值为： " + delValue);
    }
  };

  var rightOut = document.getElementById("rightout");
  rightOut.onclick = function(){
      if(ulQueue.childNodes.length > 0)
      {
         var delValue = ulQueue.lastChild.firstChild.nodeValue;
         ulQueue.removeChild(ulQueue.lastChild);
         alert("删除的数值为： " + delValue);
      }
      
  };

   ulQueue.addEventListener("click",function(event){
      if(event.target.nodeName == "LI")
      {
          ulQueue.removeChild(event.target);
      }
   });

   var queryInputObj = document.getElementById("queryInput");
   var queryBtnObj = document.getElementById("queryBtn");
   queryBtnObj.onclick = function(){

      for(var i = 0;i < ulQueue.childNodes.length;i++)
      {
          ulQueue.childNodes[i].style.backgroundColor = "red";
          if(ulQueue.childNodes[i].firstChild.nodeValue.indexOf(queryInputObj.value) >= 0)
          {
              ulQueue.childNodes[i].style.backgroundColor = "rgb(170, 170, 170)";
          }
      }
      queryInputObj.value = "";
   }
}

function checkInput(inputValue)
{
    var reg = new RegExp("^[0-9]+$"); 
    if(!reg.test(inputValue.value))
    {
      alert("请输入数字!");
      return false;
    }  
    return true;
}

init();