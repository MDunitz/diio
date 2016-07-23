function dialogBoxBasic(msg, title, onClick){
  var msgBoxDivStyle = "background: rgba(127, 127, 127, 0.6);height: 100%;position: absolute;width: 100%;z-index: 9999;";
    var msgBoxTitleStyle = "background-color: #00478A;color: white;font-size: 20px;font-weight: bold;left: 0px;padding: 4px;text-align: left;top: 0px;";
    var msgBoxErrorTitleStyle = "background-color: red;color: white;font-size: 20px;font-weight: bold;left: 0px;padding: 4px;text-align: left;top: 0px;";
    //var msgBoxSuccessTitleStyle = "background-color: green;color: white;font-size: 20px;font-weight: bold;left: 0px;padding: 4px;text-align: left;top: 0px;";
    //var msgBoxWarningTitleStyle = "background-color: orange;color: white;font-size: 20px;font-weight: bold;left: 0px;padding: 4px;text-align: left;top: 0px;";
    var msgBoxContentsStyle = "background: rgba(255, 255, 255, 1);background-color: white;border: 1px solid black;box-shadow: 6px 6px 6px #070707;";
    msgBoxContentsStyle += "left: 30%;position: absolute;resize: vertical;text-align: center;top: 15%;width: 40%;";
    var msgBoxTextStyle = "font-size: 18px;overflow: auto;padding: 20px;text-align: center;";
    var msgBoxButtonStyle = "margin: 20px;";

    var msgDiv = "";
    if(!title){
      title = "Hello";
    }
    if(!onClick){
      onClick="";
    }
    var titleStyle = msgBoxTitleStyle;
    if(title === "Error"){
      titleStyle=msgBoxErrorTitleStyle;
    }

}