var numArr = [];
var totalCount = 0;
var ulQueue = document.getElementById("queue");
var timeStamp = null;

function init()
{
  
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
      //var delValue = ulQueue.firstChild.firstChild.nodeValue;
      ulQueue.removeChild(ulQueue.firstChild);
      alert("删除的数值为： " + numArr[0]);
      totalCount--;
    }
  };

  var rightOut = document.getElementById("rightout");
  rightOut.onclick = function(){
      if(ulQueue.childNodes.length > 0)
      {
         numArr.splice(totalCount-1,1);
         //var delValue = ulQueue.lastChild.firstChild.nodeValue;
         ulQueue.removeChild(ulQueue.lastChild);
         alert("删除的数值为： " + numArr[totalCount - 1]);
         totalCount--;
      }
      
  };

  var sortObj = document.getElementById("sort");
  // sortObj.onclick = function(){
  //     for(var i = 1;i < totalCount; i++)
  //     {
  //         var temp = numArr[i];
  //         var j = i - 1;
  //         while(j >= 0 && numArr[j] > temp)
  //         {
  //             numArr[j + 1] = numArr[j];
  //             //ulQueue.childNodes[j+1].style.height = numArr[j];
  //             window.setTimeout(updateHeight,2000,j, numArr[j]);
  //             j--;
  //         }
  //         numArr[j + 1] = temp;
  //         //ulQueue.childNodes[j+1].style.height = temp;
  //         window.setTimeout(updateHeight,2000,j, temp);
  //     }
  // };
  
  sortObj.onclick = function(){
      //var i = 1, j = 0;
      console.log(numArr);
      if(numArr.length <= 1)
      {
          return;
      }

      var objIndex = {
        i : 1,
        j : 0,
        temp : numArr[1]
      };
      timeStamp = null;
      timeStamp = window.setInterval(updateHeight,300,objIndex);

  };

   ulQueue.addEventListener("click",function(event){
      if(event.target.nodeName == "LI")
      {
          ulQueue.removeChild(event.target);
          totalCount--;
      }
   });
}

function updateHeight(objIndex)
{
    debugger;
    if(objIndex.i < totalCount)
    {
        //var temp = numArr[objIndex.i];
        if(objIndex.j >= 0 && numArr[objIndex.j] > objIndex.temp)
        {
            numArr[objIndex.j + 1] = numArr[objIndex.j];
            ulQueue.childNodes[objIndex.j+1].style.height = numArr[objIndex.j];
            objIndex.j--;
        }
        else
        {
            numArr[objIndex.j + 1] = objIndex.temp;
            ulQueue.childNodes[objIndex.j+1].style.height = objIndex.temp;
            objIndex.i++;
            objIndex.j = objIndex.i - 1;
            objIndex.temp = numArr[objIndex.i];
        }
    }
    else
    {
        if(timeStamp != null)
        {
          window.clearInterval(timeStamp);
          console.log(numArr);
        }
    }
}

// function updateHeight(j, value)
// {
//     var ulQueue = document.getElementById("queue");
//     ulQueue.childNodes[j+1].style.height = value;
// }


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