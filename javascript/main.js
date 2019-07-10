
let bannerStatus = 1;
let timer = 5000;

var projectDisplayBoxInImage = document.getElementById("projectDisplayBox");


window.onload = function(){
    bannerLoop();
}

var startBannerLoop = setInterval(function(){
bannerLoop();
}, timer);

document.getElementById("btn-next").addEventListener('click', showNextImage)

function showNextImage(){
    bannerLoop();
}

document.getElementById('main-imgban').onmouseenter = function(){
   clearInterval(startBannerLoop);
}

document.getElementById('main-imgban').onmouseleave = function(){
   startBannerLoop = setInterval(function(){
       bannerLoop();
   },timer);
 }
 

function bannerLoop(){

    if(bannerStatus === 1){
        document.getElementById('imgban2').style.opacity = "0";
        setTimeout(function(){
            document.getElementById('imgban1').style.right = "0%";
            document.getElementById('imgban1').style.zIndex = "1000";
            document.getElementById('imgban2').style.right = "-100%";
            document.getElementById('imgban2').style.zIndex = "1500";
            document.getElementById('imgban3').style.right = "100%";
            document.getElementById('imgban3').style.zIndex = "500";
            bannerStatus = 2;
    
        }, 500);
        setTimeout(function(){
            document.getElementById('imgban2').style.opacity = "1";
        },1000);
       
    }else if(bannerStatus === 2){
        document.getElementById('imgban3').style.opacity = "0";
        setTimeout(function(){
            document.getElementById('imgban2').style.right = "0%";
            document.getElementById('imgban2').style.zIndex = "1000";
            document.getElementById('imgban3').style.right = "-100%";
            document.getElementById('imgban3').style.zIndex = "1500";
            document.getElementById('imgban1').style.right = "100%";
            document.getElementById('imgban1').style.zIndex = "500";
            bannerStatus = 3;
    
        }, 500);
        setTimeout(function(){
            document.getElementById('imgban3').style.opacity = "1";
        },1000);
    }else if(bannerStatus === 3){
        document.getElementById('imgban1').style.opacity = "0";
        projectDisplayBoxInImage.style.opacity = "0";
        setTimeout(function(){
            document.getElementById('imgban3').style.right = "0%";
            document.getElementById('imgban3').style.zIndex = "1000";
            document.getElementById('imgban1').style.right = "-100%";
            document.getElementById('imgban1').style.zIndex = "1500";
            document.getElementById('imgban2').style.right = "100%";
            document.getElementById('imgban2').style.zIndex = "500";
            bannerStatus = 1;
    
        }, 500);
        setTimeout(function(){
            document.getElementById('imgban1').style.opacity = "1";
        },1000);

        setTimeout(function(){
            
            projectDisplayBoxInImage.style.opacity = "1";
        },1500);
    }
   
}

//the time runner
var time = document.getElementById('time');
var todaystatus = document.getElementById('todaystatus');

function getTime(){
    let today = new Date();
    let hour = today.getHours();
    let mins = today.getMinutes();
    let secs = today.getSeconds();

    hour = hour % 12 || 12;

    let amPm;
        if(hour >= 12){
            amPm = "AM";
        }else{
            amPm = "PM";
        }


    this.time.innerHTML = `${getZero(hour)}<span>:</span>${getZero(mins)}<span>:</span>${secs} ${amPm}`;

    setTimeout(() => {
        getTime();
    }, 1000);
   
}

function getZero(n){
    return(parseInt(n,10) < 10 ? '0' : 0) + n;
}

function getDayStatus(){
let newToday = new Date(),
    hour = newToday.getHours();

    if(hour < 10){
        todaystatus.textContent = "Morning";
    }else if(hour < 18){
        todaystatus.textContent = "Afternoon";
    }else{
        todaystatus.textContent = "Evening";
    }
}

getTime();
getDayStatus();



// var tl = new TimelineMax();
// tl.from('section', 2, {
//     opacity: 0,
//     scale: .5,
//     ease: Power2.easeOut
// }, 0.2);


// window.onscroll = function(){
//     animate();
// }

// var bestWrapper = document.getElementById("bestWrapper");
// var ImageSliderSection = document.getElementById("ImageSlider-Section");
// var bestWrapperOffset = ImageSliderSection.offsetTop;

// function animate(){
   
//     if(window.pageYOffset >= bestWrapperOffset ){
//     //   document.getElementById("clipper").style.background = "red";
//     // // alert(bestWrapperOffset);
//     // console.log(bestWrapperOffset);
//     }else{
//         document.getElementById("clipper").style.background = "rgb(250, 139, 12)";
//     }
// }

