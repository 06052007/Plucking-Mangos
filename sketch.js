var options={
    isStatic: false,
    resolution: 0,
    friction:1,
    density:1.2
}

var options={
    isStatic:true,
    restitution :0,
    friction :1,
}

function draw(){
    detectollision(stoneObj, mango1);
    detectollision(stoneObj, mango2);
    detectollision(stoneObj, mango3);
    detectollision(stoneObj, mango4);
    detectollision(stoneObj, mango5);



}

function keyPressed() {
    if(keyCode === 32){
        Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
        launcherObject.attach(stoneObj.body);

    }
}
function detectollision(lstone,lmango){
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition=lstone.body.position

    var distance=dist(stoneBodyPosition.x, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r)
}
Matter.Body.setStatic(lmango.body,false);

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

