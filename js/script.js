(function(){
fetch('	https://api.adviceslip.com/advice')
.then((resp)=>{
    return resp.json();
}).then((data)=>{
    document.querySelector('#advice_num').innerHTML="Advice #"+data["slip"]["id"];
    document.querySelector('#advice').innerHTML='“'+data["slip"]["advice"]+"”";
}).catch((e)=>{
    console.log(e);
})
})();

document.querySelector("#dice").addEventListener('click',function(){
    fetch('	https://api.adviceslip.com/advice')
    .then((resp)=>{
        return resp.json();
    }).then((data)=>{
        document.querySelector('#advice_num').innerHTML="Advice #"+data["slip"]["id"];
        document.querySelector('#advice').innerHTML='“'+data["slip"]["advice"]+"”";
    }).catch((e)=>{
        console.log(e);
    })
    }
);