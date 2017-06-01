<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style/css/style.css">
    <link rel="stylesheet" href="style/css/header.css">
    <link rel="stylesheet" href="style/css/child-page-linksbar.css">
    <link rel="stylesheet" href="style/css/form.css">
    <script type="text/javascript" src="js/Jquery.js"></script>
    <title>Alumni Registration</title>
  </head>
  <body>
    <?php require 'header.html'; ?>
      <?php require 'linksbar.html' ?>
      <div class="wrapper" style="height: 450px;">

<div class="modal-wrap">
  <div class="modal-header"><span class="is-active"></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
  <div class="modal-bodies">
    <div class="modal-body modal-body-step-1 is-showing">
      <div class="title">Step 1</div>
      <div class="description">Personal Information</div>
      <form>
        <input type="text" name="name" placeholder="Name"/>
        <input class="dob "type="date" name="dob" placeholder="Date of Birth">
        <div class="text-center">
          <div class="button">Start</div>
        </div>
      </form>
    </div>
    <div class="modal-body modal-body-step-2">
      <div class="title">Step 2</div>
      <div class="description">Parents Information</div>
      <form>
        <input type="text" name="father-name" placeholder="Father's Name">
        <input type="text" name="mother-name" placeholder="Mother's Name">
        <div class="text-center fade-in">
          <div class="button">Next</div>
        </div>
      </form>
    </div>
    <div class="modal-body modal-body-step-3">
      <div class="title">Step 3</div>
      <div class="description">Academic Information</div>
      <form>
        <input type="date" name="passout-yr" placeholder="Passout Year">
          <select name="Stream" value="stream">
            <option value="Arts">Arts</option>
            <option value="Commerce">Commerce</option>
            <option value="Science">Science</option>
            <option value="none">N/A</option>
          </select>
          <select name="last-class-attended">
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
          </select>
          <input type="text" name="highest-qualification" placeholder="Highest Qualification">
        <div class="text-center fade-in">
          <div class="button">Next</div>
        </div>
      </form>
    </div>
    <div class="modal-body modal-body-step-4">
      <div class="title">Step 4</div>
        <div class="description">Your Profession Information</div>
        <input type="text" name="occupation" placeholder="Occuption">
        <input type="text" name="department" placeholder="Department">
        <input type="text" name="designation"placeholder="Designation">
      <div class="text-center">
        <div class="button">Next</div>
      </div>
    </div>
    <div class="modal-body modal-body-step-5">
      <div class="title">Step 5</div>
        <div class="description">Your Residence Information</div>
          <input type="text" name="address" placeholder="Address">
          <input type="text" name="country" placeholder="Country">
          <input style="width: 54%; display:inline;" type="text" name="state" placeholder="State">
          <input style="width:42%; display:inline; margin-left:11px;" type="text" name="city" placeholder="City">
      <div class="text-center">
        <div class="button">Next</div>
      </div>
    </div>
    <div class="modal-body modal-body-step-6">
      <div class="title">Step 6</div>
        <div class="description">Your Contact Information</div>
        <input style="display: inline; width: 47%;" type="text" name="phone-no" placeholder="Phone Number">
        <input style="width: 49%; display: inline; margin-left: 11px;"type="text" name="mobile-no" placeholder="Mobile Number">
        <input type="email" name="email" placeholder="Email ID">
      <div class="text-center">
        <div class="button">Next</div>
      </div>
    </div>
    <div class="modal-body modal-body-step-7">
      <div class="title">Step 7</div>
      <div class="description">Some Extra Information</div>
        <input class="marr" type="checkbox" name="married" value="Married"><p class="label label1">Married</p>
        <input class="sing" type="checkbox" name="single" value="Single"><p class="label label2">Single</p>
        <input type="text" name="memorable-moment" placeholder="Memorable Moment">
      <div class="text-center">
        <div class="button">Next</div>
      </div>
    </div>
    <div class="modal-body modal-body-step-8">
      <div class="title">Step 8</div>
      <div class="description">Almost!! Done</div>
        <input type="text" name="uername" placeholder="Username">
        <input style="margin-left: 28%;"type="file" name="" value="upload image">
      <div class="text-center">
        <div class="button">Done!</div>
      </div>
    </div>
  </div>
</div>
<div class="text-center">
  <div class="message">
    <h2>Congratulations!!</h2>
    <p>Your are now member of Anselm's</p>
    <p>ALUMNI COMMUNITY</p>
    <div class="rerun-button">Register New Member</div>
    <a class="send-login" href="alumni_login.php">Login</a>
  </div>
</div>
</div>
<div class="note">
  <p><strong>Note:</strong> Student image file size must be less then <strong>60 kb</strong> Acceptable Image Formats: jpg, jpeg</p>
  <p> <strong> Registration Fee </strong> Rs. 500/-(Compulsory).</p>
  <p>Fields marked with <strong>(*)</strong> are mandatory.<p>

</div>
<?php require 'footer.html'; ?>
    <script type="text/javascript" src="js/animation-script.js">

    </script>
  </html>

  </body>
