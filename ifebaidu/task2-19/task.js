function init()
{
  var totalCount = 0;
  var numArr = [];
  var ulQueue = document.getElementById("queue");
  var inputValue = document.getElementById("inputvalue");

  var leftIn = document.getElementById("leftin");
  leftIn.onclick = function(){
      if(!checkInput(inputValue))
      {
          return;
      }
      if(totalCount >= 60)
      {
          alert("队列元素数量最多为60个!");
          return;
      }
      numArr.unshift(inputValue.value);
      var liNode = document.createElement("li");
      liNode.style.height = inputValue.value + "px";
      appendFirstChild(ulQueue, liNode);

      inputValue.value = "";
      totalCount++;
  };
  
  var rightIn = document.getElementById("rightin");
  rightIn.onclick = function(){
      if(!checkInput(inputValue))
      {
          return;
      }
      if(totalCount >= 60)
      {
          alert("队列元素数量最多为60个!");
          return;
      }
      numArr.push(inputValue.value);
      var liNode = document.createElement("li");
      liNode.style.height = inputValue.value + "px";
      ulQueue.appendChild(liNode);

      inputValue.value = "";
      totalCount++;
  };

  var leftOut = document.getElementById("leftout");
  leftOut.onclick = function(){
    if(ulQueue.childNodes.length > 0)
    {
      numArr.splice(0,1);
      var delValue = ulQueue.firstChild.firstChild.nodeValue;
      ulQueue.removeChild(ulQueue.firstChild);
      alert("删除的数值为： " + delValue);
      totalCount--;
    }
  };

  var rightOut = document.getElementById("rightout");
  rightOut.onclick = function(){
      if(ulQueue.childNodes.length > 0)
      {
         numArr.splice(totalCount-1,1);
         var delValue = ulQueue.lastChild.firstChild.nodeValue;
         ulQueue.removeChild(ulQueue.lastChild);
         alert("删除的数值为： " + delValue);
         totalCount--;
      }
      
  };

  var sortObj = document.getElementById("sort");
  sortObj.onclick = function(){
      for(var i = 1;i < totalCount; i++)
      {
          var temp = numArr[i];
          var j = i - 1;
          while(j >= 0 && numArr[j] > temp)
          {
              numArr[j + 1] = numArr[j];
              j--;
          }
          numArr[j + 1] = temp;

          

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
    var reg = new RegExp("^(([1-9][0-9])|100)$"); 
    if(!reg.test(inputValue.value))
    {
      alert("请输入数字，范围[10,100]!");
      return false;
    }  
    return true;
}

function appendFirstChild(parent, newNode)
  {
      if(parent.childNodes.length == 0)
      {
          parent.appendChild(newNode);
          return;
      }
      parent.insertBefore(newNode, parent.firstChild);
  }


init();