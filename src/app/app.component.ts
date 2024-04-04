import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { FilterParamsDTO } from './DTOs/filter-params-dto';
import { FilterParamsContract } from './Contracts/filter-params-contract';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomResponse } from './Contracts/custom-response';
import { EstateContract } from './Contracts/estate-contract';
import { FilterParamsInitDTO } from './DTOs/filter-params-init-dto';
import { CountryResponse } from './Contracts/country-response';
import { DistrictResponse } from './Contracts/district-response';
import { AddEstateContract } from './Contracts/add-estate-contract';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  title = 'casefrontend';
  baseUrl="https://localhost:7004/api/"
  listOfEstate: Array<EstateContract> = new Array<EstateContract>();
  filterParams: FilterParamsDTO = new FilterParamsDTO();
  filterParamsInit: FilterParamsDTO = new FilterParamsDTO();
  districtList: Array<DistrictResponse> = new Array<DistrictResponse>();
  districtListOfAddComponenet: Array<DistrictResponse> = new Array<DistrictResponse>();

  addVisibility: boolean = true

  frm1: FormGroup = new FormGroup({
    Price: new FormControl(''),
    Age: new FormControl(''),
    RentType: new FormControl(''),
    Area: new FormControl(''),
    EstateType: new FormControl(''),
    Country: new FormControl(''),
    District: new FormControl(''),
    Description: new FormControl('')
  });

  ngOnInit(): void {

    this.GetFilterParams();
    this.GetEstateList();
  }

  GetFilterParams() {
    this._httpClient
      .get<CustomResponse<FilterParamsContract>>(this.baseUrl+'Estates/filterparams')
      .subscribe({
        next: (x) => {
          this.filterParamsInit.maxBuildingAge = x.data.maxBuildingAge;
          this.filterParamsInit.minBuildingAge = x.data.mimBuildingAge;
          this.filterParamsInit.MaxFieldM2 = x.data.maxFieldM2;
          this.filterParamsInit.MinFieldM2 = x.data.minFieldM2;
          this.filterParamsInit.maxPrice = x.data.maxPrice;
          this.filterParamsInit.minPrice = x.data.minPrice;
          this.filterParamsInit.rentType = null;
          this.filterParamsInit.estateType = null;
          this.filterParamsInit.districtId = null;
          this.filterParamsInit.countryId = null;
          this.filterParamsInit.rentTypeList = x.data.rentTypeList;
          this.filterParamsInit.estateTypeList = x.data.estateTypeList;
        },
        error: (e) => console.error(e),
        complete: () => this.GetAllCountries()
      })
  }

  GetAllCountries() {
    this._httpClient.get<CustomResponse<Array<CountryResponse>>>(this.baseUrl+'Countries')
      .subscribe({
        next: (x) => {
          this.filterParamsInit.countryList = x.data;
          this.filterParams = Object.assign(FilterParamsDTO, this.filterParamsInit)
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  }

  SelectDistrict() {
    this._httpClient.get<CustomResponse<CountryResponse>>(this.baseUrl+'Countries/' + this.filterParams.countryId + "/districts")
      .subscribe({
        next: (x) => {
          this.districtList = x.data.districts
        },
        error: (e) => console.error(e),
        complete: () => { this.filterParams.districtId = null }
      })
  }

  GetEstateList() {
    this._httpClient.get<CustomResponse<Array<EstateContract>>>(this.baseUrl+'Estates?')
      .subscribe({
        next: (x) => {
          this.listOfEstate = x.data;
        },
        error: (e) => console.error(e),
        complete: () => { }
      })
  }

  RemoveEstate(id: number) {
    this._httpClient.delete<CustomResponse<CountryResponse>>(this.baseUrl+'estates/' + id)
      .subscribe({
        next: (x) => {
          this.districtList = x.data.districts
        },
        error: (e) => console.error(e),
        complete: () => { this.listOfEstate = this.listOfEstate.filter(x => x.id != id) }
      })
  }

  AddEstate() {
    let tempDataToSend = new AddEstateContract();
    tempDataToSend.price = parseInt(this.frm1.controls['Price'].value)
    tempDataToSend.buildingAge = parseInt(this.frm1.controls['Age'].value)
    tempDataToSend.fieldM2 = parseInt(this.frm1.controls['Area'].value)
    tempDataToSend.headerDsc = this.frm1.controls['Description'].value
    tempDataToSend.estateType = parseInt(this.frm1.controls['EstateType'].value)
    tempDataToSend.rentType = parseInt(this.frm1.controls['RentType'].value)
    tempDataToSend.districtId = parseInt(this.frm1.controls['District'].value)
    this._httpClient.post<CustomResponse<AddEstateContract>>(this.baseUrl+'Estates', tempDataToSend)
      .subscribe({
        next: (x) => {
        },
        error: (e) => console.error(e),
        complete: () => {this.AddEstateUnLock() ;}
      })


  }
  AddEstateLock() {
    this.addVisibility = false
  }
  AddEstateUnLock() {
    this.addVisibility = true
  }

  GetDistrictListOfAddComponenet(event: any) {
    this._httpClient.get<CustomResponse<CountryResponse>>(this.baseUrl+'Countries/' + event.value + "/districts")
      .subscribe({
        next: (x) => {
          this.districtListOfAddComponenet = x.data.districts
        },
        error: (e) => console.error(e),
        complete: () => { this.filterParams.districtId = null }
      })
  }

  filterAll() {

    let tempEndPoint = this.baseUrl+'Estates?';

    let propertyList = Object.keys(this.filterParams)

    propertyList.forEach((element, index) => {

      if (this.filterParams[element] != "null" && typeof (this.filterParams[element]) != "object") {
        tempEndPoint += element + "=" + this.filterParams[element]
        if (index < propertyList.length - 1) {
          tempEndPoint += "&"
        }
      }
    });





    console.log("it is endpoint ---" + tempEndPoint);


    this._httpClient
      .get<CustomResponse<Array<EstateContract>>>(tempEndPoint)
      .subscribe((x) => {
        this.listOfEstate = x.data;
      });
  }



  getme() {
    console.log(this.districtList);

  }




}

