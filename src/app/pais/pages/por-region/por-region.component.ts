import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px 
    }
  `]
})
export class PorRegionComponent {

  regiones     :string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva :string = '';
  paises       :Country[] = [];

  constructor(private servicePais :PaisService) { }

  getClaseCSS(region :string) :string{
    return (region === this.regionActiva) ? 'btn btn-danger' : 'btn btn-outline-danger';
  }

  activarRegion(region :string){

    if(region === this.regionActiva) return;

    this.regionActiva=region;
    this.paises=[];
    this.servicePais.buscarPorRegion(region)
      .subscribe(resp => this.paises=resp);
    // hacer el get al servicio
  }

}
