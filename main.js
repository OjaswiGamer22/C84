canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width= 100;
rover_height=90;
rover_x=10;
rover_y=10;
rover_image="rover.png";
background_image="mars.jpg";
function add(){
    back_img=new Image();
    back_img.src=background_image;
    back_img.onload=uploadBackground;

    rover_img=new Image();
    rover_img.src=rover_image;
    rover_img.onload=uploadRover;
}
function uploadBackground(){
   ctx.drawImage(back_img,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}