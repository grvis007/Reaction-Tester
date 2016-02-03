/*** Created by Gaurav on 1/14/2016.*/
var clickedTime;var createdTime; var timeDifference;

function getRandomColor(){
    var letters='0123456789ABCDEF'.split('');
    var colors = '#';

    for(var i=0;i<6;i++){
        colors +=letters[Math.round(Math.random()*15)];
    }
    return colors;
}

function makeBox(){
    var time= Math.random();
    time=time*6000;
    //x=Math.floor(x);

    setTimeout(function(){
        if(Math.random()>0.5){
            document.getElementById("box1").style.borderRadius="100px";
        }
        else{
            document.getElementById("box1").style.borderRadius="0";

        }

        var top= Math.random();
        top = top*500; // for moving it by 300
        var left = Math.random();
        left= left*1000;
        document.getElementById("box1").style.top=top+"px";
        document.getElementById("box1").style.left=left+"px";
        document.getElementById("box1").style.backgroundColor=getRandomColor();
        document.getElementById("box1").style.display="block";
        createdTime = Date.now();
        //console.log(createdTime);

    },time);

}
//makeBox();
document.getElementById("box1").onclick=function(){
    clickedTime=Date.now();
    timeDifference = (clickedTime-createdTime)/1000;

    document.getElementById("answer").innerHTML=timeDifference;
    document.getElementById("box1").style.display="none";
    makeBox();
};

makeBox();