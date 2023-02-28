//----------------- Show image on hover --------------------

function show(id){
    var content = document.getElementById(id);
    
    if (window.innerWidth > 576) {
        if (content.src != null) {
            content.style.display = "block";

            //    restart gif on each hover
            setTimeout(() => {
                content.src = content.src;
                content.style.transition = "all 0.12s ease";
            }, 20);
        }
    }
}

function hide(id){
    var content = document.getElementById(id);
    if (window.innerWidth > 576) {
        content.style.display = "none";
        content.style.transition = "none";
        
    }
}

//----------- Image follow mouse on hover ------------------

var xOffset = 60;
var yOffset = 0;

function updatePosition(e){

        var remitbeePre = document.getElementById('remitbee-pre');
        if (remitbeePre.style.display == "block"){
            remitbeePre.style.top = e.y + window.scrollY + 40 + "px";
            remitbeePre.style.left = e.x + xOffset + "px";
        }

        var bauhausPre = document.getElementById('bauhaus-pre');
        if (bauhausPre.style.display == "block"){
            bauhausPre.style.top = e.y + window.scrollY + 40 + "px";
            bauhausPre.style.left = e.x + xOffset + "px";
        }

        var cbcPre = document.getElementById('cbc-pre');
        if (cbcPre.style.display == "block"){
            cbcPre.style.top = e.y + window.scrollY + 40 + "px";
            cbcPre.style.left = e.x + xOffset + "px";
        }
}

document.onmousemove = updatePosition;