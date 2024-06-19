<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="css/registro.css">
</head>
<body>

    <div class="navbar">
                <input type="text" class="search-bar" placeholder="Buscar...">
                <nav class="nav-links">
                    <a href="index.html">Índice</a>
                    <a href="nutricion.html">Dietas</a>
                    <a href="tablasEjercicios.html">Ejercicios</a>
                    <a href="">Contactos</a>
                </nav>
    </div>

    <div class="contenedores">
    <div id="contenedor-signin">
    <form action="validar.php" method="POST">
   <h1 class="titulos">Sign in</h1>
   <input type="text" placeholder="Ingrese su nombre" name="usuario">
   <br>
   <input type="password" placeholder="Ingrese su contraseña" name="contraseña">
   <input type="submit" value="Ingresar">
   </form>
    </div>
    
    <div id="contenedor-signup">
    <form action="registro.php" method="POST">
   <h1 class="titulos">Sign up</h1>
   <input type="text" placeholder="Ingrese su nombre" name="usuario">
   <br>
   <input type="password" placeholder="Ingrese su contraseña" name="contraseña">
   <br>
   <input type="email" placeholder="Ingrese su email" name="email">
   <input type="submit" value="Ingresar">
    </div> 

    </div>
   
   
   </form> 
</body>
</html>