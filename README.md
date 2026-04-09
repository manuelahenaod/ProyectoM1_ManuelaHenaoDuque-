# ColorFly Studio
Generador de paletas de colores interactivo con conversión entre formatos.

## Descripción
Este proyecto es un generador de paletas pensado para diseñadores que necesitan inspiración rápida e intuitiva de combinaciones de colores listas para usar.
Permite crear paletas dinámicas y copiar fácilmente los códigos de color en diferentes formatos.

## Instrucciones de uso
1. Ingresa a la aplicación desde el navegador
2. Selecciona la cantidad de colores que deseas:
    * 6 colores
    * 8 colores
    * 9 colores
3. Escoge el formato de color:
    * HEX
    * HSL
4. Haz clic en el botón crear paleta
5. Haz clic sobre cualquier color para copiar su código en el portapapeles
6. Si deseas cambiar el formato para la paleta que estás viendo, repite el paso 3 y cambiará automáticamente

* ### Para visualizar mejor ve a este enlace:
* https://docs.google.com/document/d/158cH3ZYbWm-oB9sm0ZfZLr16YnR3F4jL/edit?usp=sharing&ouid=118344903681535818322&rtpof=true&sd=true

## Tecnologías utilizadas
* HTML5
* CSS
* JavaScript

## Decisiones técnicas
1. Se eligió como formato básico RGB para poder hacer la conversión entre HEX y HSL
2. Se permite selección de cantidad de colores (6,8 y 9) a petición del cliente
3. Se usaron media queries para permitir un diseño responsive
4. Se crearon funciones de conversión entre formatos para no modificar paleta de colores
5. Implementación de copiar el código a portapapeles para mejorar la experiencia del usuario

## Pasos para ejecutar el proyecto
1. Clonar este repositorio 
* https://github.com/manuelahenaod/ProyectoM1_ManuelaHenaoDuque-
2. Abrir el archivo index.html en el navegador
3. (Opcional) Usar Live Server en Visual Studio Code para una mejor experiencia

## Pasos para desplegar el proyecto
1. Subir el proyecto a GitHub
2. Ingresar al repositorio:
* https://github.com/manuelahenaod/ProyectoM1_ManuelaHenaoDuque-
3. Ir a Settings
4. Acceder a la sección Pages
5. Configurar:
* Branch: main
* Folder: /root
6. Guardar los cambios
7. Acceder a la aplicación en:
* https://manuelahenaod.github.io/ProyectoM1_ManuelaHenaoDuque-/