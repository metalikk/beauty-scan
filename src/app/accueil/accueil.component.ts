import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';


@Injectable()

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
public valeur = new FormControl('');

private apiUrl = 'https://ssl-api.openbeautyfacts.org/api/v0/product/';
public photo : any ;
public ingredients : any ;
public allergenes: any;
public bio : any;
public additifs :any;



  constructor(private http: HttpClient) { 

  }

  ngOnInit()  {
  }

  resultatApi() {

this.http.get(this.apiUrl+this.valeur.value).subscribe(data=>{

this.photo = data['product']['image_front_url'],
this.ingredients = data['product']['ingredients_text'],
this.bio = data['product']['_keywords'].includes('bio'),
this.allergenes = data['product']['allergens_from_ingredients'],
this.additifs = data ['product']['additives_tags']

if (this.bio == false){

  return this.bio ="bio2.jpg";
}
else{


return this.bio = "bio.jpg";
}

} )


}
getConfig() {
  return this.http.get(this.apiUrl);
}

}
