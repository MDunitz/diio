function dialogBoxBasic(msg, title, type){
  try {
    if(!title){
      title = "Hello";
    }
    if(!type){
      type = 'basic';
    }

    var messageTypes = {
      basic: 'msgBoxTitle',
      success: 'msgBoxSuccessTitle',
      warning: 'msgBoxWarningTitle',
      error: 'msgBoxErrorTitle'
    }
 
    var msgDiv = "<div class='msgBoxDiv' id='msgBox'><div class='msgBoxContents'><div class="+ 
    messageTypes[type] + ">" + 
    title + "</div><div class='msgBoxText'>" + 
    msg + 
    "</div><button class='answerOK' tabindex='1' accesskey='K' onkeydown='on_esc()' onclick='removeModal.bind(this)()" + 
    "'>O<u>K</u></button></div></div>";

    console.log('msgDiv', msgDiv)
    var d1 = document.getElementById('one')

    document.body.insertAdjacentHTML("beforeend", msgDiv);
    document.body.focus();

  } catch(e){
    console.log(e);
  }

  console.log(msg, title)
};

function removeModal(){
  console.log('in removeModal', this)
  document.body.removeChild(this.parentElement.parentElement);
}

function on_esc(){
  console.log('key pressed?')
  if(event.keyCode===27){
    console.log('you hit the esc button')
  }
}

