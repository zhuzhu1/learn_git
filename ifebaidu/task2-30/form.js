function vertify()
{
    var isValidName = false;
    var isValidPass = false;
    var isValidPass2 = false;
    var isValidEmail = false;
    var isValidTel = false;

    var nameObj = document.getElementById("name");
    nameObj.onfocus = function(){
        updateSpan(this.parentNode, "必填，长度为4~16个字符");
    };
    nameObj.onblur = function(){
        isValidName = validLength(this.value, 4, 16);
        verifyObj(this, isValidName, "名称正确","名称输入错误，长度必须为[4,16]。");
    };


    var passwordObj = document.getElementById("password");
    passwordObj.onfocus = function(){
        updateSpan(this.parentNode, "必填，长度为4~16个字符");
    };
    passwordObj.onblur = function(){
        isValidPass = validLength(this.value, 4, 16);
        verifyObj(this, isValidPass,"密码可用","密码输入错误，长度必须为[4,16]。");
    };

    var password2Obj = document.getElementById("password2");
    password2Obj.onfocus = function(){
        updateSpan(this.parentNode, "再次输入相同密码");
    };
    password2Obj.onblur = function(){
        isValidPass2 = (this.value.length > 0 && this.value == passwordObj.value);
        verifyObj(this, isValidPass2,"密码输入一致","请输入相同密码");
    };

    var emailObj = document.getElementById("email");
    emailObj.onfocus = function(){
        updateSpan(this.parentNode, "请输入正确的邮箱格式");
    };
    emailObj.onblur = function(){
        var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
        isValidEmail = pattern.test(this.value);
        verifyObj(this, isValidEmail,"邮箱格式正确","邮箱输入错误");
    }

    var phoneObj = document.getElementById("phone");
    phoneObj.onfocus = function(){
        updateSpan(this.parentNode, "请输入11位数字");
    };
    phoneObj.onblur = function(){
        var isValid0 = validLength(this.value, 11, 11);
        isValidTel = (isValid0 && /^\d*$/.test(this.value));
        verifyObj(this, isValidTel,"手机格式正确","手机号输入错误");
    };

    var submitObj = document.getElementById("submit");
    submitObj.onclick = function(){
        // var isValidName = validLength(nameObj.value, minLen, maxLen);
        // verifyObj(nameObj, isValidName, "名称正确","名称输入错误，长度必须为[4,16]。");

        //  var isValidPass = validLength(passwordObj.value, 4, 6);
        // verifyObj(passwordObj, isValidPass,"密码可用","密码输入错误，长度必须为[4,16]。");

        // var isValidPass2 = (password2Obj.value.length > 0 && password2Obj.value == passwordObj.value);
        // verifyObj(password2Obj, isValidPass2,"密码输入一致","请输入相同密码");

        // var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;
        // var isValidEmail = pattern.test(emailObj.value);
        // verifyObj(emailObj, isValidEmail,"邮箱格式正确","邮箱输入错误");

        // var isValid0 = validLength(phoneObj.value, 11, 11);
        // isValidTel = (isValid0 && /^\d*$/.test(phoneObj.value));
        // verifyObj(phoneObj, isValidTel,"手机格式正确","手机号输入错误");

        if(isValidName && isValidPass && isValidPass2 && isValidEmail && isValidTel)
        {
            alert("提交成功");
        }
        else
        {
            alert("提交失败");
        }

    };
}

function verifyObj(obj, isValid, validValue, invalidValue)
{
    if(isValid)
    {
        updateSpan(obj.parentNode, validValue, "valid");
        obj.className = "validStyle";
    }
    else
    {
        updateSpan(obj.parentNode, invalidValue,"invalid");
        obj.className = "invalidStyle";
    }
}

function updateSpan(parentNode, value, className)
{
    var spanObjs = parentNode.getElementsByTagName("span");
    if(spanObjs.length > 0)
    {
        parentNode.removeChild(spanObjs[0]);
    }
    

    var spanObj = document.createElement("span");
    var spanVal = document.createTextNode(value);
    spanObj.appendChild(spanVal);
    spanObj.className = className;
    parentNode.appendChild(spanObj);
        
}

//每个英文字母、数字、英文符号长度为1
//每个汉字，中文符号长度为2
function validLength(value, minLen, maxLen)
{
    var realLength = 0;
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
    console.log(realLength);
    if(realLength < minLen || realLength > maxLen)
    {
        return false;
    }
    return true;
}


vertify();