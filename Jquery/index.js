var myTime = setInterval(myTimer);
var d;
function myTimer() {
  d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString('en-GB');
}

function color(status, ind){
    console.log(ind);
    setTimeout(function(){
        if(status == "Todo") $("#ind" + `${ind}`).css("background-color", "#66d9ff");
        if(status == "Done") $("#ind" + `${ind}`).css("background-color", "#ff9999");
    }, 3000);
}

function data(name, status){
    return{
        name: name, 
        status:status,
        time: d.toLocaleTimeString('en-GB')
    }
}

var array = [];
var index = 0;
var tmp;
var time;
function edit(i){
    document.getElementById("name").value = array[i].name;
    document.getElementById("status").value = array[i].status;
    time = array[i].time;
    tmp = i;
}

$(document).ready(function(){

    $("#time").text(myTime);

    $("#add").click(function(){
        var item;
        var name = document.getElementById("name").value;
        var status = document.getElementById("status").value;
        item = data(name, status);
        var td = '<td>'+ item.name+'</td>' + '<td>'+ item.status+'</td>'+ '<td>'+ item.time+'</td>';
        var tr = $("<tr></tr>").html(td).attr({
            "id": "ind" + `${index}`,
            "onclick": "edit(" + `${index}` +")"
        });
        $("#table").append(tr);
        color(status, index);
        array.push(item);
        index++;
    })

    $("#update").click(function(){
        var name = document.getElementById("name").value;
        var status = document.getElementById("status").value;
        var td = '<td>'+ name+'</td>' + '<td>'+ status+'</td>'+ '<td>'+ time +'</td>';
        $("#ind"+`${tmp}`).html(td);
        array[tmp].name = name;
        array[tmp].status = status;
        color(status, tmp);
    })

    $("#delete").click(function(){
        $("#ind"+`${tmp}`).remove();
    })
    
});

