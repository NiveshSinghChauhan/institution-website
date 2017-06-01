<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style/css/style.css">
    <link rel="stylesheet" href="style/css/header.css">
    <link rel="stylesheet" href="style/css/child-page-linksbar.css">
    <link rel="stylesheet" href="style/css/alumni.css">
    <title>Alumini</title>
  </head>
  <body>
  <?php require 'header.html'; ?>
    <?php require 'linksbar.html' ?>
    <div class="wrapper">
      <h2>Alumni Registration Form</h2>
      <div class="reg_form">
        <form class="regForm" action="reg-process.php" method="post" enctype="multipart/form-data">
          <input type="text" name="first-name" placeholder="First Name">
          <input type="text" name="middle-name" placeholder="Middle Name">
          <input type="text" name="last-name" placeholder="Last Name">

          <input type="text" name="father-first-name" placeholder="father-First Name">
          <input type="text" name="mother-first-name" placeholder="mother-First Name">
          <input type="text" name="father-middle-name" placeholder="father-Middle Name">
          <input type="text" name="father-last-name" placeholder="father-Last Name">

          <input type="text" name="mother-middle-name" placeholder="mother-Middle Name">
          <input type="text" name="mother-last-name" placeholder="mother-Last Name">
          <input type="date" name="dob" placeholder="Date of Birth">
          <input type="date" name="passout-yr" placeholder="Passout Year">
          <select name="Stream" value="stream">
            <option value="Arts">Arts</option>
            <option value="Commerce">Commerce</option>
            <option value="Science">Science</option>
            <option value="none">N/A</option>
          </select>
          <select class="" name="last-class-attended">
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
          <input type="checkbox" name="marital-status" value="Married">Married
          <input type="checkbox" name="marital-status" value="Single"> Single
          <input type="text" name="occupation" placeholder="Occuption">
          <input type="text" name="department" placeholder="Department">
          <input type="text" name="designation"placeholder="Designation">
          <input type="text" name="address" placeholder="Address">
          <input type="text" name="country" placeholder="Country">
          <input type="text" name="state" placeholder="State">
          <input type="text" name="city" placeholder="City">
          <input type="text" name="phone-no" placeholder="Phone Number">
          <input type="text" name="mobile-no" placeholder="Mobile Number">
          <input type="email" name="email" placeholder="Email ID">
          <input type="text" name="memorable-moment" placeholder="Memorable Moment">
          <input type="text" name="uername" placeholder="Username">
          <input type="file" name="" value="upload image">
          <input type="submit" name="submit" value="Submit">
        </form>
        <p>Note: Student image file size must be less then 60 kb Acceptable Image Formats: jpg, jpeg</p>
        <p>Fields marked with (*) are mandatory.
Registration Fee Rs. 500/-(Compulsory).</p>
      </div>
    </div>

  <?php require 'footer.html'; ?>
  </body>
</html>
