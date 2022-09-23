## Funciones

### globales

- registrarUsuario(): Esta funcion representa el registro de un usuario en la página y la asignacion de sus datos a variables para utilizar en el resto del programa.
- loguearse(): Este funcion sirve para que un usuario registrado pueda loguearse en la pagina con los datos que uso a la hora de registrarse.
- resetearContador(): Esta es una funcion interna que sirve para delimitar la cantidad de veces que un usuario puede escribir mal su contraseña, siendo el maximo 2 veces.

### Game

- comprarComida(): Esta funcion sirve para comprar alimento para darle al pescado. Por el momento solo se puede comprar 1 alimento por vez desde esta funcion, sin embargo se va a seguir desarrollando.

- alimentar(): Esta funcion sirve para darle al pescado el alimento que se compro en la funcion comprarComida(). Por el momento solo se puede dar 1 alimento por vez desde esta funcion, sin embargo se va a seguir desarrollando.

- venderComida(): Esta funcion sirve para vender los alimentos que se compraron en la funcion comprarComida(). Por el momento solo se puede vender 1 alimento por vez desde esta funcion, sin embargo se va a seguir desarrollando.

- comprarTodo(): Esta funcion sirve para gastar todas tus monedas en comprar comida con la funcion comprarComida()

## Variables

- contador: variable interna para los intentos de inicio de sesion
- pescadoAlimento: muestra la cantidad de alimento que recibio el pescado
- peceraEnergia: muestra la cantidad de energia que tiene el usuario en su pecera
- peceraComida: muestra la cantidad de comida que tiene el usuario en su pecera
- tiendaManzanas: muestra la cantidad de manzanas que quedan en la tienda
- precioManzanas: muestra el precio de (1) manzana en la tienda
- monedaCorales: muestra la cantidad de moneda o corales que tiene el usuario en su pecera, se utilizan para comprar en la tienda.

### Pruebas

##### Para probar las funcionalidades que no se activan automaticamente por en alert/prompt/confirm, recomiendo realizar las pruebas desde consola para poder ver como se modifican los valores de cada variable al usar las funciones.
