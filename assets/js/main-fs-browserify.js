var fs = require('browserify-fs');

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

      genBucket.innerHTML = '<img src="' + canvasData + '">';

      var base64Image = canvasData.split(';base64,').pop();

      fs.writeFile('generated/' + screenname + '.png', base64Image, {encoding: 'base64'}, function(err) {
          console.log(err);
      });

      genBucket.innerHTML = '<img src="generated/' + screenname + '.png">';

    };
    imageObj.src = "./assets/img/generator-bg.png";
  };

  var bury = document.getElementById("bury");
  bury.addEventListener('submit', buryScreenname);
};
