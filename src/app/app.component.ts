import { ServiceNoticiaService } from './service/service-noticia.service';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModelNoticia } from './models/ModelNoticia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  deportes: Array<ModelNoticia>;
  entretenimiento: Array<ModelNoticia>;
  mundo: Array<ModelNoticia>;
  nacion: Array<ModelNoticia>;
  virales: Array<ModelNoticia>;
  otro: Array<ModelNoticia>;

  constructor(public dialog: MatDialog, private service: ServiceNoticiaService) {
    this.deportes = new Array<ModelNoticia>();
    this.entretenimiento = new Array<ModelNoticia>();
    this.mundo = new Array<ModelNoticia>();
    this.nacion = new Array<ModelNoticia>();
    this.virales = new Array<ModelNoticia>();
    this.otro = new Array<ModelNoticia>();

    this.loadNoticias();
    console.log(this.deportes);

  }

  private loadNoticias() {
    this.service.getNoticias().subscribe(res => {
      this.organizate(res);
    },
      error => console.log("Error"));
  }

  private organizate(list: Array<ModelNoticia>) {
    list.forEach(element => {
      this.addToList(element);
    });
  }

  private addToList(noticia: ModelNoticia) {
    var seccion = noticia.noticia.seccion.replace("\n", "");
    console.log(seccion);

    switch (seccion) {
      case "Deportes":
        this.deportes.push(noticia);
        break;
      case "Mundo":
        this.mundo.push(noticia);
        break;
      case "Entretenimiento":
        this.entretenimiento.push(noticia);
        break;
      case "Virales":
        this.virales.push(noticia);
        break;
      case "Nación":
        this.nacion.push(noticia);
        break;
      default:
        this.otro.push(noticia);
        break;
    }
  }

  openMoreInfo(url: String){
  //  this.dialog.open(MoreInfoComponent, {data: url});
  }
}

