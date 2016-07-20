/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: 0,
  nowGraTime: "day"
}

var color = ["#7c8489", "#4fb3a4", "#ff7073", "#f5b977", "#fdfc7f"];

/**
 * 渲染图表
 */
function renderChart() {
    var select = document.getElementById("city-select");
    var city = select[pageState.nowSelectCity].firstChild.nodeValue;

    var key = city + ":" + pageState.nowGraTime;
    var data = chartData[key];

    var wrapchart = document.querySelector(".aqi-chart-wrap");
    wrapchart.innerHTML = "";
    for(var i in data)
    {
        var div = document.createElement("div");
        div.style.display = "inline-block";
        if(pageState.nowGraTime == "day")
        {
          div.style.width = 10;
        }
        else if(pageState.nowGraTime == "week")
        {
          div.style.width = 40;
        }
        else
        {
          div.style.width = 200;
        }
        div.style.height = data[i];
        div.style.background = getColor();
        div.title = i + "  " + data[i];
        wrapchart.appendChild(div);

    }
}

function getColor() {
    return color[Math.round(Math.random() * (color.length - 1))];
}
  
/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
  if(this.value == pageState.nowGraTime)
  {
     return;
  }
  // 设置对应数据
  pageState.nowGraTime = this.value;
  // 调用图表渲染函数
  renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
  //var select = document.getElementById("city-select");
  
  // 设置对应数据
  var index = this.selectedIndex;
  pageState.nowSelectCity = index;
  // 调用图表渲染函数
  renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var formtime = document.getElementById("form-gra-time");
    var inputs = formtime.getElementsByTagName("input");
    for(var i = 0;i < inputs.length;i++)
    {
        inputs[i].onclick = graTimeChange;
    }
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var cityselect = document.getElementById("city-select");
  cityselect.innerHTML = "";
  for(key in aqiSourceData)
  {
      var option = "<option>" + key + "</option>";
      cityselect.innerHTML += option;
  }
  // 给select设置事件，当选项发生变化时调用函数citySelectChange

  cityselect.onchange = citySelectChange;
}

/**
 * 初始化图表需要的数据格式
 *
 * chartData={
 *   "北京:day":{
 *     "2016-01-01": 10,
 *     "2016-01-02": 10,
 *   },
 *   "北京-year":{
 *     "2016-01-01:2017-01-01": 100
 *   },
 * }
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中

  for(key in aqiSourceData)
  {
     var chartkey = key + ":" + "day";
     chartData[chartkey] = aqiSourceData[key];

     chartkey = key + ":" + "week";
     chartData[chartkey] = getchartDataWeek(key);

     chartkey = key + ":" + "month";
     chartData[chartkey] = getChartDataMonth(key);
  }
}

function getchartDataWeek(key)
{
    var onechartData = {};
    var sourcedata = aqiSourceData[key];
    var count = 0;
    var timekey = "";
    var sum = 0;
    var first = true;
    var lastone = "";
    for(var timestr in sourcedata)
    {
        sum += sourcedata[timestr];
        count++;
        var time = new Date(timestr);
        if(first || time.getDay() == 1)
        {
            timekey = timestr;
            first = false;
        }
        if(time.getDay() == 0)
        {
            timekey += ":";
            timekey += timestr;
            onechartData[timekey] = sum/count;
            timekey = "";
            sum = 0;
            count  = 0;
        }
        lastone = timestr;
    }

    var time = new Date(lastone);
    if(time.getDay() != 0)
    {
       timekey += ":";
       timekey += timestr;
       onechartData[timekey] = sum/count;
    }

    return onechartData;
  }

function getChartDataMonth(key)
{
  debugger;
  var onechartData = {};
  var sourcedata = aqiSourceData[key];
  var count = 0;
  var timekey = "";
  var sum = 0;
  var month = "";
  var lastone = "";
  for(var timestr in sourcedata)
  {
      var time = new Date(timestr);
      if(month === "")
      {
         month = time.getMonth();
         timekey = timestr;
      }
      if(time.getMonth() != month)
      {
          timekey += ":";
          timekey += lastone;
          onechartData[timekey] = sum/count;
          timekey = "";
          sum = 0;
          count  = 0;
          month = "";
      }
      lastone = timestr;
      sum += sourcedata[timestr];
      count++;

  }

  timekey += ":";
  timekey += timestr;
  onechartData[timekey] = sum/count;

  return onechartData;
}


/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();