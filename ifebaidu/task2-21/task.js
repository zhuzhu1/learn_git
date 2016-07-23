var tagArr = [];
var interstArr = [];

function init()
{
  

  var tagQueueObj = document.getElementById("tagQueue");
  var tagInputObj = document.getElementById("tagInput");
  
  tagInputObj.onkeyup = function(event){
      var e = event || window.event;
      //console.log(e.keyCode);
      var value = tagInputObj.value;
      if(e.keyCode == 13 || e.keyCode == 188 || e.keyCode == 32 )
      {
          //trim
          if(e.keyCode == 32 || e.keyCode == 188)
          {
              value = value.substring(0,value.length-1);
          }
          
          if(!inArray(tagArr, value))
          {
              tryRemoveFirst(tagQueueObj, tagArr);
              appendLast(tagQueueObj, tagArr, value);
              
          }
          tagInputObj.value = "";
      }
  };

  tagQueueObj.addEventListener("mouseover",function(event){
      if(event.target.nodeName == "LI")
      {
          var oldValue = event.target.firstChild.nodeValue;
          event.target.firstChild.nodeValue = "删除" + oldValue;
      }
   });

  tagQueueObj.addEventListener("mouseout",function(event){

      if(event.target.nodeName == "LI")
      {
          var oldValue = event.target.firstChild.nodeValue;
          oldValue = oldValue.substring(2,oldValue.length);
          event.target.firstChild.nodeValue = oldValue;
      }
   });


  tagQueueObj.addEventListener("click",function(event){
      if(event.target.nodeName == "LI")
      {
          var value = event.target.firstChild.nodeValue;
          for(var i = 0; i < tagArr.length; i++)
          {
              if(value == tagArr[i])
              {
                  tagArr.splice(i,1);
              }
          }

          tagQueueObj.removeChild(event.target);
      }
   });

  var interstConfirmObj = document.getElementById("interstConfirm");
  var interstInputObj = document.getElementById("interstInput");
  var interstQueueObj = document.getElementById("interstQueue");

  interstConfirmObj.onclick = function(){
      var myarr = interstInputObj.value.split(/[\s/,，，，、]/);
      for(var i = 0; i < myarr.length; i++)
      {
          if(myarr[i].length > 0 && !inArray(interstArr, myarr[i]))
          {
              tryRemoveFirst(interstQueueObj, interstArr);
              appendLast(interstQueueObj, interstArr, myarr[i]);
          }
      }
      interstInputObj.value = "";
      
  };
}

function appendLast(parent, arr, value)
{
    arr.push(value);

    var liNode = document.createElement("li");
    var liVal = document.createTextNode(value);
    liNode.appendChild(liVal);
    parent.appendChild(liNode);
}

function tryRemoveFirst(parent, arr)
{
    if(arr.length >= 10)
    {
      var delValue = arr.shift();

      parent.removeChild(parent.firstChild);
    }
}

function inArray(arr, value)
{
    for(var i = 0; i < arr.length;i++)
    {
        if(arr[i] == value)
        {
            return true;
        }
    }
    return false;
}

init();