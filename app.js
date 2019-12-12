// var date = new Date();
  
// var h = date.getHours();
// var m = date.getMinutes();
// var s = date.getSeconds();
 

// document.getElementById('clock').innerHTML = `${h}:${m}:${s}`;
// var username = 'sasi';
// setTimeout(function(){
//     document.write(username);

// },1000);
// setInterval(function(){
//     document.write(username);
// },1000);
setInterval(() => {
    var date = new Date();
  
var h = date.getHours();
var m = date.getMinutes();
var s = date.getSeconds();
var format = date.getHours()<12 ?'am' : 'pm';
 

document.getElementById('clock').innerHTML = `${h}:${m}:${s} ${format}`;
    
}, 1000);
