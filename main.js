var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
r_x=10;
r_y=10;
r_width=100;
r_height=70;
var mars= ["mars 1.jpeg", "mars 2.jpeg", "mars 3.jpeg", "mars 5.jpeg"];
var rndm=Math.floor( Math.random()*4);
b_img= mars[rndm];
r_img="rover.png";

function add(){
    bg = new Image();
    bg.onload = bgf;
    bg.src=b_img;

    rv = new Image();
    rv.onload = rvf;
    rv.src=r_img;
}


function bgf(){
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}

function rvf(){
    ctx.drawImage(rv, r_x, r_y, r_width, r_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;

    if(keypressed=="37"){
      Left();
    }
    else if(keypressed=="38"){
        up();
    }
    else if(keypressed=="39"){
        right();
    }
    else if(keypressed=="40"){
        bottom();
    }

}
//Class 85 code

function up(){
    if(r_y>=0){
        r_y=r_y-10;
        bgf();
        rvf();
    }
}

function bottom(){
    if(r_y<=430){
        r_y=r_y + 10;
        bgf();
        rvf();
    }
}

function Left(){
    if(r_x>=0){
        r_x=r_x-10
        bgf();
        rvf();
    }
}

function right(){
    if(r_x<=700){
        r_x=r_x+10;
        bgf();
        rvf();
    }
}