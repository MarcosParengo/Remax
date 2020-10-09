var obj = [];
var containerAgent;
var containerValores
var contador = 0;
var aver;


$(document).ready(function () {
    var mediaqueryList = window.matchMedia("(max-width: 992px)");
    containerAgent = $("#containerAgent")
    var team = "assets/data/agent.json"
    containerValores = $("#containerValores")
    var perfil = "assets/data/perfil.json"
    containerPropuesta = $("#containerPropuesta")
    var propuesta = "assets/data/propuesta.json"
    LoadJson(team, 1)
    LoadJson(perfil, 2)
    
    if(mediaqueryList.matches) {
        LoadJson(propuesta, 3, 1)
        console.log("menos de 992")
      }else{
        LoadJson(propuesta, 3, 0)
        console.log("mas de 992") 
      }
    
    mediaqueryList.addListener( function(EventoMediaQueryList) {
        if(mediaqueryList.matches) {
            LoadJson(propuesta, 3,1)
            console.log("se fue a menos de 992")
        }else{
            LoadJson(propuesta, 3,0)
            console.log("se pasa de 992")
        }
});
})
function LoadJson(url, which,MQ) {
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
                fillContainerPropuesta(obj,MQ);
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
        containerAgent.append(`<div class=" col-sm-6 col-md-2  col-xl-2 ">
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
        containerValores.append(`<div class=" col-sm-6 col-md-4  col-xl-2 ">
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
function fillContainerPropuesta(obj,MQ) {
    contador = 0;
    if(MQ==0){containerPropuesta.html("");
    obj.forEach(function (obj, index) {
        containerPropuesta.append(`
        <div class="col-sm-12 col-md-4 col-xl-4">
           <div class="block">
                <div class="row">
                    <div class="col-4 col-sm-4">
                        <img src="${obj.image}" class="img-fluid" alt="Responsive image">
                    </div>
                    <div class="col-8 col-sm-8">
                        <h2>${obj.name}</h2>
                    </div>
                </div>
           </div>
        </div>`)
    contador++
    if (contador == 5) {
        containerPropuesta.append(`<div class="w-100"></div>`)
        contador=0;
    }
        
    });}else{containerPropuesta.html("");
    obj.forEach(function (obj, index) {
        containerPropuesta.append(`
        <div class="col-sm-12 col-md-6 col-xl-6">
           <div class="block">
                <div class="row">
                    <div class="col-4 col-sm-4">
                        <img src="${obj.image}" class="img-fluid" alt="Responsive image">
                    </div>
                    <div class="col-8 col-sm-8">
                        <h2>${obj.name}</h2>
                    </div>
                </div>
           </div>
        </div>`)
    });}
}