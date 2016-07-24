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
 
    var msgDiv = "<div class='msgBoxDiv'><div class='msgBoxContents'><div class="+ messageTypes[type] + ">" + title + "</div><div class='msgBoxText'>" + msg + "</div><button class='answerOK' tabindex='1' accesskey='K' onclick='document.body.removeChild(this.parentElement.parentElement);" + "'>O<u>K</u></button></div></div>";  // Closes the modalBox and modalDiv tags

    console.log('msgDiv', msgDiv)
    var d1 = document.getElementById('one')

    document.body.insertAdjacentHTML("beforeend", msgDiv);
    document.body.focus();

  } catch(e){
    console.log(e);
  }

  console.log(msg, title)
};

