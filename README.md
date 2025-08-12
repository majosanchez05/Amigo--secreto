
Es una aplicación que permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".
El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". 
Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

##  Funcionalidades

- **Agregar amigos**  
  - Ingresar un nombre en el campo de texto.  
  - Validación para evitar campos vacíos.  
  - Prevención de nombres duplicados.  
  - Visualización automática en una lista.  

- **Mostrar lista de amigos**  
  - Los nombres se muestran en una lista HTML `<ul>`.  
  - Se actualiza dinámicamente sin duplicados.  

- **Sorteo aleatorio**  
  - Selección aleatoria usando `Math.random()` y `Math.floor()`.  
  - Resultado mostrado con formato resaltado.  
  - Validación para evitar sorteo si no hay amigos.  

---
