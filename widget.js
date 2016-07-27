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
    
    var msgDiv = "<div class='msgBoxDiv'><div class='msgBoxContents'><div class="+ 
      messageTypes[type][0] + ">" + 
      title + "</div><div class='msgBoxText'>" + 
      msg + 
      "</div><button class='answerOK' id='okButton' tabindex='1' onclick='removeModal.bind(this)()" + 
      "'>O<u>K</u></button></div></div>";

    var d1 = document.getElementById('one')
    document.body.insertAdjacentHTML("beforeend", msgDiv);
    document.body.focus();
    

    document.getElementById('okButton').onkeydown = function(button){
      if(button.keyCode===27){
        removeModal.bind(this)();
        return false;
      }
    }
    document.getElementById('okButton').focus();

  } catch(e){
    console.log(e);
  }
};

function removeModal(){
  console.log('in removeModal', this)
  document.body.removeChild(this.parentElement.parentElement);
}



