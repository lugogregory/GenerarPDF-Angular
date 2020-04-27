import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generar-pdf';
  titulo = 'Generar PDF con Angular';

  public caballerosZ = [
    {name: "Seiya", imagen: "assets/img/seiya.png", poder: "Meteoros de pegasso"},
    {name: "Ikky", imagen: "assets/img/fenix.png", poder: "Puño fantasma de fénix"},
    {name: "Hyoga", imagen: "assets/img/hyoga.png", poder: "Polvo de diamantes"},
    {name: "Shun", imagen: "assets/img/shun.png", poder: "Cadena nebular"},
    {name: "Shyru", imagen: "assets/img/shyru.png", poder: "Dragon naciente"}]

  generarPDF(){
    html2canvas(document.getElementById('contenido'), {
       // Opciones
       allowTaint: true,
       useCORS: false,
       // Calidad del PDF
       scale: 1
    }).then(function(canvas) {
    var img = canvas.toDataURL("image/png");
    var doc = new jsPDF()
    doc.addImage(img,'PNG',7, 20, 195, 200); // ubicacion de la imagen generada del contenido en el PDF
    doc.setProperties({
      title: 'Caballeros del Zodiaco',
      subject: '',
      author: 'Gregory L',
      keywords: 'generated, javascript, pdf',
      creator: ''
  });
    //doc.addPage(); //Para agregar paginas
    doc.save('caballeros.pdf'); // coordenadas x=7 y en y=20, asi mismo definimos el ancho=195 y el alto=105 del contenido dentro del PDF
   });
}
}
