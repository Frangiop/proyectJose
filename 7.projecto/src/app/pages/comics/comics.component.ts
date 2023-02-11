import { ComicsService } from './../../services/comics.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent {
comicList : any [] =[];   // no sabemos qe tipo de datos tendra, pero si sabemos que será una array 

constructor (private comicsService:ComicsService) {}   // voy a crear esto para llamar a mi servicio para traerman esa informacion 
// aquie siempre igual  (private comicsService(nombre que quiera para llamar mi moduloe"ComicsServie"):ComicsService)
//  ComicsService, ( CTRL + CLIC) llama a la API! es decir a todo lo que hay dentro de la funcions "ComicService "
 
ngOnInit(): void {   // cremaos ngOninit par adecire que del "comicsSERVICE "de la variable que hemos creado
 this.comicsService.getComics().subscribe((data:any)=>{  // dentro de ComicsService solo nos llamaraemos a la funcion dentr de esta que se llama "getComics()" pero nada mas.
 // hacemos un "fetch : ((data:any)=> " // ((data:any)=> que no nos intente tipar nada.
  console.log(data)
 // con esot hacemos que nos SUBSCRIBA los datos que viene de la funcions getComics()
 })  
 }
}
