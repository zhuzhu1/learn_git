function init()
{

    showStudent();

    var studentObj = document.getElementById("student");
    studentObj.onclick = showStudent;

    var notStudentObj = document.getElementById("not-student");
    notStudentObj.onclick = showCompany;

}

var contentObj = document.getElementById("content");
function showStudent()
{
    var citys={
        "北京":["北京大学","清华大学","北京师范大学","北京交通大学","中央财经大学"],
        "南京":["南京大学","东南大学","河海大学","中国药科大学 ","南京邮电大学"],
        "上海":["复旦大学","同济大学","华东师范大学","上海财经大学","上海海洋大学"],
        "杭州":["浙江大学 ","浙江工业大学 ","浙江海洋学院","浙江理工大学","浙江传媒学院"],
        "苏州":["苏州大学","西交利物浦大学","常熟理工大学","苏州科技学院","江苏科技大学"]
    };
    contentObj.innerHTML = "";

    var labelObj = document.createElement("label");
    var labelText = document.createTextNode("学校");
    labelObj.appendChild(labelText);
    contentObj.appendChild(labelObj);

    var cityObj = document.createElement("select");
    cityObj.setAttribute("id","city");
    cityObj.setAttribute("name","city");
    contentObj.appendChild(cityObj);

    var schoolObj = document.createElement("select");
    schoolObj.setAttribute("id","school");
    schoolObj.setAttribute("name","school");
    contentObj.appendChild(schoolObj);

    cityObj.innerHTML = "";
    schoolObj.innerHTML = "";

    for(key in citys)
    {
        var optionObj = document.createElement("option");
        var optionText = document.createTextNode(key);
        optionObj.appendChild(optionText);
        cityObj.appendChild(optionObj); 
    }

    var schools = citys["北京"];
    for(var j = 0; j < schools.length; j++)
    {
        var optionObj = document.createElement("option");
        var optionText = document.createTextNode(schools[j]);
        optionObj.appendChild(optionText);
        schoolObj.appendChild(optionObj);
    }
}

function showCompany()
{
    debugger;
    contentObj.innerHTML = "<label for=\"company\">就业单位</label>";
    contentObj.innerHTML += "<input type=\"input\" id=\"company\">";
}

init();