//Cargar la aplicac de electron

const app=require('electron').app;

//Crear ventanas del SO

const BrowserWindow=require('electron').BrowserWindow;

//Ruta de los archivos del SO

const path=require('path');

//Cargarla como pag web 
const url=require('url');

//Declarar la variable de la ventana
let PantallaPrincipal;


function muestraPantallaPrincipal()
 {
	//Crear una pantalla vac;ia
	PantallaPrincipal=new BrowserWindow( {width:380, height:420} );


	//Darle contenido a la pantalla
	PantallaPrincipal.loadURL( url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	})
   );

	

 }



 app.on('ready', muestraPantallaPrincipal);


