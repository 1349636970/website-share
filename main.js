$(document).ready(function() {
    alert("test")
})


$("button").click(function() {
    $.post('https://yingzheng.000webhostapp.com/', function (data) {
        if (data) {
            window.open(data)
        }
    })
})

$("input").keyup(function () {
    var content = $("input").val()
    content = content.trim()
    if(event.keyCode == 13) {
        $.get(`https://yingzheng.000webhostapp.com/?link=${content}`)
        alert("request complete")
    }
})