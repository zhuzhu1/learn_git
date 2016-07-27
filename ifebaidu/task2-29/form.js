function vertify()
{
    var vertifyObj = document.getElementById("vertify");
    var inputObj = document.getElementById("name");
    vertifyObj.onclick = function(){
        with(inputObj)
        {
            var realLength = 0;
            //每个英文字母、数字、英文符号长度为1
            //每个汉字，中文符号长度为2
            for(var i = 0; i < value.length; i++)
            {
                var charCode = value.charCodeAt(i);
                if (charCode >= 0 && charCode <= 128)
                {
                    realLength += 1;  
                }
                else
                {
                    realLength += 2;  
                }
            }
            if(realLength < 4 || realLength > 16)
            {
                className = "redStyle";
            }
            console.log(realLength);
        }

    };

    inputObj.onfocus = function(){
        with(this)
        {
            className = "";
        }
    };
}

vertify();