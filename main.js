var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("textbox").innerHTML=content;
if(content=="take my selfie"){
 speakInfo()   
}
}

function speakInfo(){
var Synth= window.speechSynthesis;
speakdata="Taking you selfie in 5 seconds"
var utter=new SpeechSynthesisUtterance(speakdata);
utter.lang="en-GB";
utter.pitch=10.2;
Synth.speak(utter)
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot()
    save_img()
},5000);
}

Webcam.set({
    width:360,height:250,image_format:'jpeg',jpeg_quality:100
});

camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_url){
document.getElementById("result").innerHTML="<img id='src_img' src='"+data_url+"'>"
    });
}

function save_img(){
    link=document.getElementById("link");
    img=document.getElementById("src_img").src;
    link.href=img;
    link.click()
}