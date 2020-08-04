## _**Si en el plazo establecido no puedes terminar, envíanos tu progreso. Evaluaremos también el proceso.**_

##### **CONSIDERACIONES GENERALES**

Eres libre de decidir qué arquitectura implementarás o qué buenas prácticas utilizas, lo importante es que nos demuestres que eres uno de los mejores desarrolladores.

##### **DESCRIPCIÓN**

En **Mi Águila** se hacen aproximadamente 5.000 viajes diarios y satisfacer la demanda es un punto primordial para la compañía. Para propósitos de este reto, tendrás una muestra extraída de viajes reales y deberás realizar los siguientes puntos:

1. Migra los datos a una base de datos. En el correo adjunto encontrarás el **JSON** de muestra.
2. Crea una **API** Rest que se comunique a través de **JSON’s**.
3. Debes crear los siguientes endpoints:
    - Consultar la cantidad de viajes totales.
    - Consultar la cantidad de viajes totales por ciudad.
    - Crear un viaje.
    - Actualizar un viaje.
4. Crear un endpoint que reciba una posición geográfica y que basado en el histórico de viajes genere un multiplicador para tarifas dinámicas. 
5. Crea la documentación del **API** en **Swagger**.
6. Crea un diagrama de la arquitectura de la aplicación desarrollada.

##### **ESTADOS DE LOS VIAJES**

- **OnWay** = El conductor va en camino a recoger al pasajero
- **Near** = El conductor está cerca a la dirección de origen
- **Started** = El pasajero ya está dentro del vehículo

##### **RESTRICCIONES**

- No usar proyectos previamente construidos, todo debe codificarse desde cero.
- Debes resolver el reto individualmente.

##### **TIPS**

- La escalabilidad y la eficiencia son importantes, para el ejemplo pondremos unas pocas ciudades, pero podría haber más, al igual que países, piensa en estrategias como paginación para reducir tiempos de respuesta.
- Podrás usar cualquier librería o framework para el desarrollo.
- El lenguaje es el de tu preferencia (si usas **Node**, puedes trabajar con **Typescript**).
- Puedes utilizar **Git Flow** o cualquier otro flujo para el manejo del repositorio. Deja escrito en el **README.md** qué flujo seguiste.
- Puedes utilizar rebase.
- Usa patrones de diseño.

##### **ENTREGABLE**

- Sube a un repositorio en **GitHub** la solución del reto y adicionalmente agrega en el **README.md** la solución a los ejercicios propuestos.
- Debe contener un archivo **README.md** con una corta explicación del proyecto, los pasos para hacerlo funcionar y alguna otra recomendación que creas relevante.
