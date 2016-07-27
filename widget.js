function dialogBoxBasic(msg, type, title){
  try {
    var messageTypes = {
      basic: ['msgBoxTitle', 'Alert'],
      success: ['msgBoxSuccessTitle', 'Success'],
      warning: ['msgBoxWarningTitle', 'Warning'],
      error: ['msgBoxErrorTitle', 'Error']
    }

    if(!title){
      title = messageTypes[type][1];
    }
    
    //create popup
    var msgDiv = "<div class='msgBoxDiv'><div class='msgBoxContents'><div class="+ 
      messageTypes[type][0] + ">" + 
      title + "</div><div class='msgBoxText'>" + 
      msg + 
      "</div><button class='answerOK' id='okButton' tabindex='1' onclick='removeModal.bind(this)()" + 
      "'>O<u>K</u></button></div></div>";

    //insert popup
    document.body.insertAdjacentHTML("beforeend", msgDiv);
    document.body.focus();
    
    //close on esc
    document.getElementById('okButton').onkeydown = function(button){
      if(button.keyCode===27){
        removeModal.bind(this)();
        return false;
      }
    }
    document.getElementById('okButton').focus();
    //clear text fields 
    document.getElementById('messageTitle').value = '';
    document.getElementById('messageValue').value = '';


  } catch(e){
    console.log(e);
  }
};

function removeModal(){
  document.body.removeChild(this.parentElement.parentElement);
}



