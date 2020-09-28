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
        containerAgent.append(`<div class=" col-sm-12 col-md-4  col-xl-2 ">
                    <article class="agent">
                            <img src="${obj.image}"
                            width="100%">
                            <h2 style="margin-top:1em">${obj.name}</h2>
                            <h2>${obj.phone}</h2>
                    </article>
                </div>`)
    })
}
function fillContainerValores(obj) {
    containerValores.html("");
    obj.forEach(function (obj, index) {
      containerValores.append(`<div class=" col-sm-12 col-md-4  col-xl-2 ">
                    <article class="agent" >
                            <img src="${obj.image}"
                            width="60%"
                        <div>
                            <h2>${obj.name}</h2>
                        </div>
                    </article>
                </div>`);
    });
}