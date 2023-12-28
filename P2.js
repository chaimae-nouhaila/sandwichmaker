var sets = [document.getElementById('buttonSet1'), document.getElementById('buttonSet2'), document.getElementById('buttonSet3'),document.getElementById('buttonSets4')];
var currentIndex = 0;
updateBackButtonStyle();

function showNext() {
    if (currentIndex < sets.length - 1) {
        sets[currentIndex].style.display = 'none';
        currentIndex++;
        sets[currentIndex].style.display = 'flex';
        updateBackButtonStyle(); 
        changeNexttoSubmit();
    }
    else{sets[currentIndex].style.display='none';
  var submitButton=document.getElementById('next');
var backButton=document.getElementById('back');
var h3=document.getElementById('h3');
backButton.style.display='none';
submitButton.style.backgroundColor = '';
submitButton.style.color='';
submitButton.style.boxShadow='';
submitButton.style.display='none';
h3.style.display='none';
var b=document.getElementById('bonappetit');
b.style.display='flex';
var div2=document.getElementById('div2');
div2.style.borderRadius='0px 40px 40px 40px';
div2.style.justifyContent='center';
div2.style.alignItems='center';
}
}

function showPrevious() {
    if (currentIndex > 0) {
        sets[currentIndex].style.display = 'none';
        currentIndex--;
        sets[currentIndex].style.display = 'flex';
        updateBackButtonStyle(); // Call the function to update Back button style
    }
}

function showbottomBread(color) {
    var bottomBread = document.getElementById("bottomBread");
    bottomBread.style.backgroundColor = color;
    bottomBread.style.display = "flex";
}
function showTopBread(color){
  var topBread = document.getElementById("topBread");
  var seeds=document.querySelectorAll('.seeds span');
  topBread.style.backgroundColor = color;
  topBread.style.display = 'flex';
  seeds.forEach(span => {
    span.style.display = 'flex';
    span.style.backgroundColor = 'yellow';
    // ... d'autres modifications de style selon vos besoins
  });
}

function updateBackButtonStyle() {
    // Get the Back button element
    var backButton = document.getElementById('back');

    // Check if the current set is the first set (index 0)
    if (currentIndex === 0) {
        // Apply yellow box style
        backButton.style.backgroundColor = 'orange';
        backButton.style.color='orange';
        backButton.style.boxShadow='0 4px orange';
    } else {
        // Remove yellow box style
        backButton.style.backgroundColor = '';
        backButton.style.color='';
        backButton.style.boxShadow='';
    }
}
function changeNexttoSubmit(){
    var nextButton=document.getElementById('next');
    if(currentIndex ===sets.length-1){
    nextButton.textContent='submit';

    }
}
var element1 = document.getElementById("element1") ;
var element2 = document.getElementById("element2") ;
var element3 = document.getElementById("element3") ;
var element4 = document.getElementById("element4") ;
var element5 = document.getElementById("element5") ;
var element6 = document.getElementById("element6") ;
var topBread=document.getElementById("topBread") ;
var c = 1 ;

dragElement(element1) ; 
dragElement(element2);
dragElement(element3);
dragElement(element4);
dragElement(element5);
dragElement(element6);
dragElement(topBread);

function allowDrop(ev) {
  ev.preventDefault();
}
  
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
  
  
  
  
function dragElement(elmnt) {
     
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  var a=elmnt.style.top ;
  var b=elmnt.style.left ;
  elmnt.onmousedown = dragMouseDown;
      
  function dragMouseDown(e) {
      
    e = e || window.event;
    e.preventDefault();
    elmnt.style.zIndex=++c;
      
    
    pos3 = e.clientX;
    pos4 = e.clientY;
      
    document.onmouseup = closeDragElement;
     
   
    document.onmousemove = elementDrag;
  }
  
  
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
     
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
     
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }
  
  function closeDragElement() {
      
      
   document.onmouseup = null;
      document.onmousemove = null;
  
      //elmnt.style.top=a ;
      //elmnt.style.left =b ;
      
  
      
  
    }
  
  
}
var c=0;
var v1=0;
function showElement1(e){
    if(v1==0){
      e.style.display="flex";
    v1=1;}
    else{e.style.display='none';
  v1=0;}
}
var v2=0;
function showElement2(e){
    if(v2==0){
      e.style.display="flex";
    v2=1;}
    else{e.style.display='none';
  v2=0;}
}
var v3=0;
function showElement3(e){
    if(v3==0){
      e.style.display="flex";
    v3=1;}
    else{e.style.display='none';
  v3=0;}
}
var v4=0;
function showElement4(e){
    if(v4==0){
      e.style.display="flex";
    v4=1;}
    else{e.style.display='none';
  v4=0;}
}
var v5=0;
function showElement5(e){
    if(v5==0){
      e.style.display="flex";
    v5=1;}
    else{e.style.display='none';
  v5=0;}
}
var v6=0;
function showElement6(e){
    if(v6==0){
      e.style.display="flex";
    v6=1;}
    else{e.style.display='none';
  v6=0;}
}