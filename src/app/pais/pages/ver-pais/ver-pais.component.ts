import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators'
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais! :Country;

  constructor(private activetedoute :ActivatedRoute,
              private servicePais :PaisService) { }

  ngOnInit(): void {

    this.activetedoute.params
      .pipe(
        switchMap(({id}) => this.servicePais.getPaisPorId(id)),
        tap(console.log)
      )
      .subscribe(pais => {
        this.pais=pais[0];
      })

    // alternativa para lo de arriba
    // this.activetedoute.params
    //   .subscribe( ({id}) => {

    //     this.servicePais.getPaisPorId(id)
    //       .subscribe( pais => {
    //         console.log(pais);
    //       });

    //   })
  }

}
