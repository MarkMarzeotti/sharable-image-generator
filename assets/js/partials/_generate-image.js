window.onload = function(){
  var canvas = document.getElementById("create-image");
  var context = canvas.getContext("2d");
  var imageObj = new Image();
  imageObj.onload = function(){
    context.drawImage(imageObj, 10, 10);
    context.font = "20px Calibri";
    context.fillText("My TEXT!", 50, 200);

    // // open the image in a new browser tab
    // // the user can right-click and save that image
    // var win=window.open();
    // win.document.write("<img src='"+canvas.toDataURL()+"'/>");

  };
  imageObj.src = "./assets/img/generator-bg.png";
};
