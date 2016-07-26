function dialogBoxBasic(msg, type, title){
  try {
    var messageTypes = {
      basic: ['msgBoxTitle', 'Basic'],
      success: ['msgBoxSuccessTitle', 'Success'],
      warning: ['msgBoxWarningTitle', 'Warning'],
      error: ['msgBoxErrorTitle', 'Error']
    }

    if(!type){
      type = 'basic';
    }
    if(title===undefined){
      title = messageTypes[type][1];
    }
    
    var msgDiv = "<div class='msgBoxDiv' id='msgBox'><div class='msgBoxContents'><div class="+ 
      messageTypes[type][0] + ">" + 
      title + "</div><div class='msgBoxText'>" + 
      msg + 
      "</div><button class='answerOK' tabindex='1' accesskey='K' onkeydown='on_esc()' onclick='removeModal.bind(this)()" + 
      "'>O<u>K</u></button></div></div>";

    var d1 = document.getElementById('one')
    document.body.insertAdjacentHTML("beforeend", msgDiv);
    document.body.focus();
    var msg=document.getElementById('msgBox');
    console.log('msg', msg)
    msg.addEventListener("keydown", onEsc())
    

  } catch(e){
    console.log(e);
  }
};

function onEsc(){
  console.log('key pressed?', event)
  if(event.keyCode===27){
    console.log('you hit the esc button')
  }   
};

function removeModal(){
  console.log('in removeModal', this)
  document.body.removeChild(this.parentElement.parentElement);
}



