<?php

        // include 'db_conn.php';

        $usuario = $_POST['usuario'];
        $email = $_POST['email'];
        $contraseña = $_POST['contraseña'];
        session_start();

        $conexion=mysqli_connect("localhost","root","","prueba_app");

        // $_SESSION['usuario'] = $usuario;

        $entrada = "INSERT INTO prueba (nickname, email_address, contraseña)
                    VALUES('$usuario', '$email', '$contraseña')";
    
        $ejecutar = mysqli_query($conexion, $entrada);

        if($ejecutar){
  
            header("location:home.php");
        
        }else{
            ?>
            <?php
            include("index.php");
        
          ?>
          <h1 class="bad">ERROR DE AUTENTIFICACION</h1>
          <?php
        }

?>