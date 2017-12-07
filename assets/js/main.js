var a2a_config = a2a_config || {};
a2a_config.linkurl = "https://sig.markmarzeotti.com/assets/img/generator-bg.png";

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

      // genBucket.innerHTML = '<img src="' + canvasData + '">';

      var base64Image = canvasData.split(';base64,').pop();

      // var imagedata = {
      //   image: base64Image,
      //   screenname: screenname
      // };

      // Fire off the request to save.php
      request = $.ajax({
          url: 'save.php',
          method: "POST",
          data: { image: base64Image, screenname: screenname },
          dataType: "html"
      });

      // Callback handler that will be called on success
      request.done(function (response, textStatus, jqXHR){
          // Log a message to the console
          console.log("image created");

          // next we need to update all the share meta
          $('.a2a_kit').attr('data-a2a-url', 'https://sig.markmarzeotti.com/?screenname=' + screenname);

          a2a_config.linkurl = "https://sig.markmarzeotti.com/?screenname=" + screenname;
      });

      // Callback handler that will be called on failure
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
