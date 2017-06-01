<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style/css/style.css">
    <link rel="stylesheet" href="style/css/header.css">
    <link rel="stylesheet" href="style/css/child-page-linksbar.css">
    <link rel="stylesheet" href="style/css/gallery.css">
    <script src="js/Jquery.js" charset="utf-8"></script>
    <title>Gallery</title>
</head>

<body>
      <?php require 'header.html'; ?>
      <?php require 'linksbar.html'; ?>
    <div class="container">
      <div class="container-head">
        <h2>GALLERY</h2>
        <select name="last-class-attended">
          <option value="">Independece Day</option>
          <option value="">Republic Day</option>
          <option value="">Intiation Ceromony</option>
          <option value="">Diwali Celebration</option>
          <option value="">House Get Together</option>
          <option value="">Children's Day Celebration</option>
          <option value="">Teachers Day Celebration</option>
          <option value="">Primary Class Picnic</option>
          <option value="">Secondary Class Picnic</option>
          <option value="">Senior Class Picnic</option>
          <option value="">Dubai Tour</option>
          <option value="">Cross Country</option>
        </select>
      </div>

        <img id="myImg" src="images/gallery/11.jpg" alt="Northern Lights, Norway" width="960px" >
        <div class="img-view">
          <div class="img-display">
              <img src="images/gallery/11.jpg" class="img-block" alt="">
              <img src="images/gallery/12.jpg" class="img-block" alt="">
              <img src="images/gallery/13.jpg" class="img-block" alt="">
              <img src="images/gallery/14.jpg" class="img-block" alt="">
              <img src="images/gallery/15.jpg" class="img-block" alt="">
              <img src="images/gallery/15.jpg" class="img-block" alt="">
              <img src="images/gallery/15.jpg" class="img-block" alt="">
              <img src="images/gallery/15.jpg" class="img-block" alt="">
              <img src="images/gallery/15.jpg" class="img-block" alt="">
              <img src="images/gallery/16.jpg" class="img-block" alt="">
              <img src="images/gallery/17.jpg" class="img-block" alt="">
          </div>
        </div>
    </div>

    <!-- The Modal -->
    <div id="myModal" class="modal">
        <span class="close">×</span>
        <img class="modal-content" id="img01" src="">

    </div>

    <script>
    $(document).ready(function(){
      $(".img-block").click(function(){
        var srcimg = $(this).attr("src");
        $("#myImg").attr("src",function(){
          return srcimg;
        });
      });
      $("#myImg").click(function(){
        var srcimg = $(this).attr("src");
        $("#img01").attr("src",function() {
          return srcimg ;
        });
        $("#myModal").css("display", "flex");
      });
      $(".close").click(function(){
        $("#myModal").css("display", "none");
      });
    });
    </script>
      <?php require 'footer.html'; ?>
</body>

</html>
