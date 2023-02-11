import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ComicsService {

db_url:string ="http://localhost:3000/comics" // me estoy guardando la variable db_url


  constructor(private http:HttpClient) {  } // el nombre de la varialbe "http" puede sr cualquier, el "httpClient" nos permite hacer peticiones a clientes , se usa siempre ese module HttpClient  
  // CTRL + click en "HttpCliente " par ver que hace y que hay en ese MOdule.

  getComics(){  // api !! traer la url  //
return this.http.get(this.db_url) // aquie hacemos la "peticion "a nuestro array de comics. me de
                                  // me devuelve el array del htt" http://localhost:3000/comics"
}

}
