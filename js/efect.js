var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["Januari", "Februari", "maret","april","mei","juni","juli","agustus","september","oktober","November","desember"];
var date = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]; 
var now = new Date();

// document.getElementById("demo").innerHTML = Date();

document.getElementById("demo").innerHTML = days[now.getDay()] + " " + date[now.getDate()] + " " + month[now.getMonth()];	
