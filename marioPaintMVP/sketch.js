let color = 0; //test for connection thinkpad
function setup(){
    color = 0;
    createCanvas(500, 500);
    background(225);

    fill('yellow');
    rect(475, 0, 25, 25);

    fill('blue');
    rect(475, 25, 25, 25);

    fill('red');
    rect(475, 50, 25, 25);

    fill(255);
    rect(474, 474, 25, 25);
}
function mouseDragged(){
    fill(color);
    ellipse(mouseX, mouseY, random(50));
    return false;
}

function mouseClicked(){
    if((475 <= mouseX && mouseX <= 500) && (0 < mouseY && mouseY < 25)){
        color = 'yellow';
    }
    if((475 <= mouseX && mouseX <= 500) && (25 < mouseY && mouseY < 50)){
        color = 'blue';
    }
    if((475 <= mouseX && mouseX <= 500) && (50 < mouseY && mouseY < 75)){
        color = 'red';
    }
    if((474 <= mouseX && mouseX <= 499) && (474 < mouseY && mouseY < 499)){
        setup();
    }
    return false;
}

