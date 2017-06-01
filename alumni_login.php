<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style/css/style.css">
    <link rel="stylesheet" href="style/css/header.css">
    <link rel="stylesheet" href="style/css/child-page-linksbar.css">
    <link rel="stylesheet" href="style/css/alumni-login.css">
    <title>Login</title>
  </head>
  <body>
    <?php require 'header.html'; ?>
    <?php require 'linksbar.html'; ?>
    <div class="wrapper">
      <h2>Login</h2>
      <div class="login-form">
        <form class="logForm" action="" method="post">
          <input type="text" name="username" placeholder="Username">
          <input type="password" name="password" placeholder="Password">
          <input type="submit" name="login-submit" value="login">
        </form>

      </div>
    </div>
    <?php require 'footer.html'; ?>
  </body>
</html>
