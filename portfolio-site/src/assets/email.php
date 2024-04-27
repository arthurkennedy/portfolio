<?php
    include("helper.php");

    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
        
        $name = cleanUpData($_POST['name']);
        $email = cleanUpData($_POST['email']);
        $mssg = cleanUpData($_POST['message']);

        $to = 'arthurakennedy@gmail.com';
        $subject = "My Portfolio Contact";

        $message = "
            <!DOCTYPE html>
            <html>
            <head>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <style>
            .card {
              box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
              transition: 0.3s;
              width: 90%;
              margin: auto;
              background-color: white;
              padding: 10px;
              margin: 10px;
            }

            .container {
              padding: 10px;
                background-color: #f9f9f9;
            }

            .footer {
              text-align: center;
            }

            .footer a {
              display: inline-block;
                padding: 5px;
                background: none;
                color: #8e8e8e;
                text-decoration: none;
                font-size: 12px;
                font-weight: 600;
            }
            </style>
            </head>
            <body>

            <div class='container'>
              <div class='card'>
                <p> ".$mssg." </p>
              </div>

              <div class='footer'>
                <hr>
                <strong style='font-size: 13px'>Your Online Portfolio!</strong>
              </div>
            </div>
            </body>
            </html>

        ";

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= "From: ".$name." contact@arthurakennedy.com" . "\r\n";
        $headers .= "Reply-To: <".$email.">";

        if(mail($to,$subject,$message,$headers)){
          echo 'true';
        }else {
          echo 'false';
        }

      }else {
        echo 'false now';
      }

 ?>
