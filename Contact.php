<!doctype html>
<html  lang="nl">
  <head>
    <title>Website Sam
    </title>
    <meta charset="UTF-8">
    <meta name="bootstrap" content="bootstrap">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="assets/css/styleContact.css">
  </head>
  <body>
    <?php  include('assets/inc/header.php')?>
    <section class="container">
      <h2 class="h1-responsive font-weight-bold text-center my-4">Contact me!
      </h2>
      <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me.
      <div class="row">
        <div class="col-md-9 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" id="name" name="name" class="form-control">
                  <label for="name" class="">Your name
                  </label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <input type="text" id="email" name="email" class="form-control">
                  <label for="email" class="">Your email
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <input type="text" id="subject" name="subject" class="form-control">
                  <label for="subject" class="">Subject
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form">
                  <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea">
                  </textarea>
                  <label for="message">Your message
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div class="text-center ">
            <a class="btn btn-secondary" onclick="document.getElementById('contact-form').submit();">Send
            </a>
          </div>
          <div class="status">
          </div>
        </div>
        <div class="col-md-3 text-center">
          <ul class="mb-0 text-white shadow-lg">
            <li>
              <i class="">
              </i>
              <p>Limburg
              </p>
            </li>
            <li>
              <i class="">
              </i>
              <p>Opoeteren Maaseik
              </p>
            </li>
            <li>
              <i class="">
              </i>
              <p>Niesstraat 16
              </p>
            </li>
            <li>
              <i class="">
              </i>
              <p>+ 32 479 26 17 52
              </p>
            </li>
            <li>
              <i class="">
              </i>
              <p>corstsam@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
      <?php include 'assets/inc/footer.php'; ?>
      <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous">
      </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous">
      </script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous">
      </script>
  </body>
</html>
