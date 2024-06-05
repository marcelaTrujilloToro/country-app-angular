import { Component } from '@angular/core';
import { Country } from '../../interfaces/countrie';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchRegion(value: string): void {
    this.countriesService
      .searchRegion(value)
      .subscribe((countries) => (this.countries = countries));
  }
}
