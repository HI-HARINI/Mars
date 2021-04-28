canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
nasa_mars_imgs_array=["download.jpg","PIA17944-MarsCuriosityRover-AfterCrossingDingoGapSanddune-20140209.jpg","mars_surface.jpg","mars_b9ds.jpg"]
random_No=Math.floor(Math.random()*4);
console.log(random_No);
rover_width=100; rover_height=100;
background_image=nasa_mars_imgs_array[random_No];
rover_img="rover.png";
rover_x=10
rover_y=10
function add(){
background_image_tag=new Image();
background_image_tag.onload=uploadBackground();
background_image_tag=background_image;
rover_image_tag=new Image();
rover_image_tag.onload=uploadrover();
rover_image_tag=rover_img;
}
function uploadBackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover.width,rover.height)
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
}
function up(){
    if(rover_y>0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadrover();
    }
}
function down(){
    if(rover_y<600){
        rover_y=rover_y+10;
        uploadBackground();
        uploadrover();
    }
}
function left(){
    if(rover_x>0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadrover();
    }
}
function right(){
    if(rover_x<800){
        rover_x=rover_x+10;
        uploadBackground();
        uploadrover();
    }
}