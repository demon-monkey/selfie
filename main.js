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
speakInfo()
}

function speakInfo(){
var Synth= window.speechSynthesis;
speakdata=document.getElementById("textbox").value;
var utter=new SpeechSynthesisUtterance(speakdata);
utter.lang="en-GB";
utter.pitch=10.2;
Synth.speak(utter)
Webcam.attach(camera);
}

Webcam.set({
    width:360,height:250,image_format:'jpeg',jpeg_quality:100
});

camera=document.getElementById("camera");