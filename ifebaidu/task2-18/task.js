function init()
{
  
  var ulQueue = document.getElementById("queue");
  //数字输入的合法性
  var inputValue = document.getElementById("inputvalue");
  //允许为空格
  inputvalue.onblur = function(){
      var reg = new RegExp("^[0-9]*$"); 
      if(!reg.test(inputValue.value))
      {
        alert("请输入数字!");
      }
  };

  var leftIn = document.getElementById("leftin");
  leftIn.onclick = function(){
      if(!checkInput(inputValue))
      {
          return;
      }
      var li = "<li>" + inputValue.value + "</li>";
      var innerHtml = ulQueue.innerHTML;
      ulQueue.innerHTML = li;
      ulQueue.innerHTML += innerHtml;
      inputValue.value = "";
      // var liNode = document.createElement("li");
      // var liVal = document.createTextNode(inputValue.value);
      // liNode.appendChild(liVal);

      // appendFirstChild(ulQueue, liNode);
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
      if(!checkInput(inputValue))
      {
          return;
      }
      var li = "<li>" + inputValue.value + "</li>";
      ulQueue.innerHTML += li;
      inputValue.value = "";
      
      // var liNode = document.createElement("li");
      // var liVal = document.createTextNode(inputValue.value);
      // liNode.appendChild(liVal);

      // ulQueue.appendChild(liNode);
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