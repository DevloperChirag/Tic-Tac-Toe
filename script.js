
let arr =Array(9).fill(null);
let player ="X";
let flag=0;
const audioWin = new Audio();
audioWin.src = "assets/win.mp3";
const audioDraw = new Audio();
audioDraw.src = "assets/draw.mp3";
const audio =document.querySelector("#audio");

document.querySelector(".btn").addEventListener("click",function tapToOpen(){
	document.querySelector(".last").style.transform=`translateY(-100%)`;
	setTimeout(function block(){
		document.querySelector(".last").style.display=`none`;
	},1000);
	
})

//confetti code
const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  shapes: ["star"],
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}



function winner() {
    if( arr[0]!=null&&arr[0]==arr[1]&&arr[1]==arr[2] ||
        arr[3]!=null&&arr[3]==arr[4]&&arr[4]==arr[5] ||
        arr[6]!=null&&arr[6]==arr[7]&&arr[7]==arr[8] ||
        arr[0]!=null&&arr[0]==arr[4]&&arr[4]==arr[8] ||
        arr[2]!=null&&arr[2]==arr[4]&&arr[4]==arr[6] ||
        arr[0]!=null&&arr[0]==arr[3]&&arr[3]==arr[6] ||
        arr[1]!=null&&arr[1]==arr[4]&&arr[4]==arr[7] ||
        arr[2]!=null&&arr[2]==arr[5]&&arr[5]==arr[8] 
    ) {
		setTimeout(shoot, 0);
setTimeout(shoot, 100);
setTimeout(shoot, 200);
        document.querySelector(".winner").style.opacity="1";
		document.querySelector(".winner").innerText=`${player} is winner`;
		audioWin.play();
		setTimeout(function reload(){
		window.location.reload();
	},2000);
		
    }
}
function handler(e){
    if(arr[e.id]==null){
        if(flag==0){
            e.innerText=`${player}`;
			audio.play();
            arr[e.id]=`${player}`;
	winner();
	player="O";
            flag++;
        }else{
            e.innerText=`${player}`;
			audio.play();
            arr[e.id]=`${player}`;
	winner();
	player="X";
            flag--;
        }
    }
   if(arr[0]&&arr[1]&&arr[2]&&arr[3]&&arr[4]&&arr[5]&&arr[6]&&arr[7]&&arr[8]!=null){
	    audioDraw.play();
		document.querySelector(".winner").style.opacity="1";
		document.querySelector(".winner").innerText="DRAW";
		setTimeout(function reload(){
		window.location.reload();
	},1000);
		

}
}


gsap.from(".col",{
    y:100,
    duration:1.2,
    delay:3,
    opacity:0,
    stagger:0.2
})



