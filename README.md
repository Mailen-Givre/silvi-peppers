Projecto Final de React - CoderHouse 2021

•	E-commerce pensado para librerías: catálogo online de todos los productos junto con su detalle correspondiente + carrito de compras.
•	HTML, CSS, REACTJS
•	Base de datos con Firebase
React-router-dom
Este proyecto fue desarrollado como ejercitación de los conceptos vistos en clase durante la cursada online de ReactJs en Coderhouse.
De qué se trata el proyecto
Este proyecto es la simulación de un ecommerce, en este caso, de una artista que vende sus productos (dibujos, bordados,etc)
Qué funcionalidades tiene el proyecto
La aplicación se extiende sólo del lado del cliente, es decir, sólo cuenta con el Frontend del desarrollo.
Integración con Firestore
La aplicación está integrada a Cloud Firestore, un servicio de base de datos de Firebase (Google). Este servicio permite almacenar datos, tales como un listado de productos y sus características, y pedir esos datos desde la aplicación.
React-router-dom
React-dom es utilizado en la aplicación para crear rutas de navegación dinámicas.
General
El usuario recibe una landing con un catálogo de productos, cada uno con un enlace para ver su detalle. Además, tiene la posibilidad de navegar hacia distintas categorías desde la barra de navegación, las cuales filtrarán los productos mostrados en pantalla por la categoría respectiva. Una vez en el detalle, el usuario podrá seleccionar una cantidad de ese producto para añadir al carrito, limitado por un stock. Una vez agregado, podrá seguir su compra o terminarla. En el carrito verá los productos agregados con sus cantidades, subtotales y el valor total de la compra En este estado aun puede cambiar las cantidades de compra y tendrá la opción de quitar productos por tipo y de vaciar el carrito completo. Por último, tendrá la opción de comprar. Al decidirse por comprar se le pedirá que complete unos datos, tras lo cual se generará su orden y se le dará un número de orden.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
