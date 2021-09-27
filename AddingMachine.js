var Sum = 0;
var TotalNum = 0;

function add(x)
{
  var num = x;
  Sum = Sum+num;
  TotalNum = TotalNum +1;

  document.getElementById("out").innerHTML = "<hr><br><br> Sum: " + Sum + "<br> Total Numbers Clicked: " + TotalNum;
}


function ClearNums()
{
  Sum = 0;
  TotalNum = 0;
  document.getElementById("out").innerHTML = "";
}
