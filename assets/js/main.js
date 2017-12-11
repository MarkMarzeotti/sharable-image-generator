var pageLink = 'https://sig.markmarzeotti.com/';
// var pageLink = 'http://localhost:8888/personal/sharable-image-generator/';

var a2a_config = a2a_config || {};
a2a_config.linkurl = pageLink + "assets/img/generator-bg.png";

a2a_config.templates = a2a_config.templates || {};

a2a_config.templates.facebook = {
    app_id: "5303202981",
    redirect_uri: "",
    quote: ""
};

window.onload = function(){
  var genBucket = document.getElementById("gen-bucket");

  var screennameInput = document.getElementById("screenname");
  screennameInput.focus();

  var buryScreenname = function(e) {
    e.preventDefault();
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function(){
      context.drawImage(imageObj, 0, 0);

      var x = canvas.width / 2;
      var y = canvas.height / 3 + 40;
      var screenname = screennameInput.value;

      context.font = '140px Calibri';
      context.textAlign = 'center';
      context.fillStyle = '#fff';
      context.fillText(screenname, x, y);

      var canvasData = canvas.toDataURL("image/png");

      var base64Image = canvasData.split(';base64,').pop();

      // Fire off the request to save.php
      request = $.ajax({
          url: 'save.php',
          method: "POST",
          data: { image: base64Image, screenname: screenname },
          dataType: "html"
      });

      request.done(function (response, textStatus, jqXHR){
          // Log a message to the console
          console.log("image created");

          // next we need to update all the share meta
          $('.a2a_kit').attr('data-a2a-url', pageLink + '?screenname=' + screenname);
          a2a_config.linkurl = pageLink + "?screenname=" + screenname;

          genBucket.innerHTML = '<img src="' + pageLink + 'generated/' + screenname + '.png">';
          $('.create-image').remove();
      });

      request.fail(function (jqXHR, textStatus, errorThrown){
          // Log the error to the console
          console.error(
              "The following error occurred: "+
              textStatus, errorThrown
          );
      });

    };
    imageObj.src = "./assets/img/generator-bg.png";
  };

  var bury = document.getElementById("bury");
  bury.addEventListener('submit', buryScreenname);
};
