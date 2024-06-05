import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countrie';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) {
          return this.router.navigateByUrl('');
        }
        this.country = country;

        return;
      });

    //?una forma de hacerlo es un Observable dentro de otro observable
    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.countriesService
    //     .searchCountryByAlphaCode(id)
    //     .subscribe((country) => console.log(country));
    // });
  }
}
