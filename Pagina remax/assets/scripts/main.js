var obj = [];
var containerAgent;
var containerValores
var contador=0;
var aver;

$(document).ready(function () {
    containerAgent = $("#containerAgent")
    var team = "assets/data/agent.json"
    containerValores = $("#containerValores")
    var perfil = "assets/data/perfil.json"
    LoadJson(team,1)
    LoadJson(perfil,2)
})
function LoadJson(url,which){
    $.ajax({method: "get",
        url: url,
        dataType : "json"
    }).done(function(data){
        obj = data
        if(which==1){
        fillContainerAgent(obj);
        }else{
        fillContainerValores(obj);  
        }
    })
    .fail(function (error){
        console.log(error)})
}
function fillContainerAgent(obj) {
    containerAgent.html("")
    obj.forEach(function (obj, index) {
        containerAgent.append(`<div class="col-1-6" align="center">
                    <article class="agent" >
                        <div class="col-1-1"  >
                            <img src="${obj.image}"
                            width="150"
                            height="150">
                        </div>
                        <div class="col-1-1">
                            <h2 style="font-size:14px;text-align: center;line-height:0.25em">${obj.name}</h2>
                            <h2 style="font-size:14px;text-align: center;line-height:0.25em">${obj.phone}</h2>
                        </div>
                    </article>
                </div>`)
    })
}
function fillContainerValores(obj) {
    containerValores.html("");
    obj.forEach(function (obj, index) {
      containerValores.append(`<div class=" col-sm-12 col-md-4  col-xl-2 ">
                    <article class="agent" >
                        <div class="">
                            <img src="${obj.image}"
                            width="30%"
                            >
                        </div>
                        <div class="">
                            <h3 style="line-height:1em">${obj.name}</h3>
                        </div>
                    </article>
                </div>`);
    });
}