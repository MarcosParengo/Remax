var obj = [];
var containerAgent;
var containerValores
var contador = 0;
var aver;

$(document).ready(function () {
    containerAgent = $("#containerAgent")
    var team = "assets/data/agent.json"
    containerValores = $("#containerValores")
    var perfil = "assets/data/perfil.json"
    containerPropuesta = $("#containerPropuesta")
    var propuesta = "assets/data/propuesta.json"
    LoadJson(team, 1)
    LoadJson(perfil, 2)
    LoadJson(propuesta, 3)
})
function LoadJson(url, which) {
    $.ajax({
        method: "get",
        url: url,
        dataType: "json"
    }).done(function (data) {
        obj = data
        switch (which) {
            case 1:
                fillContainerAgent(obj);
                break
            case 2:
                fillContainerValores(obj);
                break
            case 3:
                fillContainerPropuesta(obj);
                break
        }
    })
        .fail(function (error) {
            console.log(error)
        })
}
function fillContainerAgent(obj) {
    containerAgent.html("")
    contador = 0;
    obj.forEach(function (obj, index) {
        containerAgent.append(`<div class=" col-sm-12 col-md-2  col-xl-2 ">
                    <article class="agent">
                            <a href=${obj.link}
                            target="_blank"><img src="${obj.image}"
                            width="100%"></a>
                            <h2 style="margin-top:1em">${obj.name}</h2>
                            <h2>${obj.phone}</h2>
                    </article>
                </div>`)
        contador++
        /*
        if(contador==11){
            containerAgent.append(`<div class="w-100"></div>`)
            contador=0
        }
        */
        /*
         if(contador==2){
             containerAgent.append(`<div class="w-100"></div>`)
         }else if(contador==13){
             containerAgent.append(`<div class="w-100"></div>`)  
         }else if(contador==19){
             contador=0
         }
         */
        /*
         if(contador==5){
             containerAgent.append(`<div class="w-100"></div>`)
         }else if(contador==11){
             contador=0
         }*/
        if (contador == 3) {
            containerAgent.append(`<div class="w-100"></div>`)
        } else if (contador == 8) {
            containerAgent.append(`<div class="w-100"></div>`)
        } else if (contador == 19) {
            containerAgent.append(`<div class="w-100"></div>`)
        }


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
function fillContainerPropuesta(obj) {
    contador = 0;

    obj.forEach(function (obj, index) {
        /*containerPropuesta.append(`<div class=" col-sm-12 col-md-4  col-xl-4 ">
        <div style="background-color: rgba(193, 27, 43, 1);border-radius: 15px 15px 15px;padding:2em;">
                    <article class="agent">
                        <div class="row align-items-center">
                            <div class="col-3" style="padding:0em">
                                    <img src="${obj.image}"
                                    width="100%">
                                </div>
                                <div class="col-9" style="padding:0em">
                                    <h2>${obj.name}</h2>
                                </div>
                            </div>
                        </div>
                    </article>
                    </div>
                </div>`);*/
        containerPropuesta.append(`
            <div class=" col-sm-12 col-md-4  col-xl-4 ">
                <article class="agent" style="background-color: rgba(193, 27, 43, 1);border-radius: 15px 15px 15px;padding:1em;">
                    <div class="col-sm-4" style="padding:0">
                        <img src="${obj.image}" width="100%">
                    </div>
                    <div class="col-sm-8" style="padding:0">
                        <h2>${obj.name}</h2>
                    </div>
                </article>
            </div>
                `)
        contador++

        if (contador == 5) {
            containerPropuesta.append(`<div class="w-100"></div>`)
        }
    });
}