import { CountryResponse } from "../Contracts/country-response"
import { DistrictResponse } from "../Contracts/district-response"

export class FilterParamsDTO {
    maxPrice:number
    minPrice:number
    MaxFieldM2:number
    MinFieldM2:number
    maxBuildingAge:number
    minBuildingAge:number
    estateType:number
    rentType:number

    countryList:Array<CountryResponse>
    countryId?:number

    districtList:Array<DistrictResponse>
    districtId?:number

    estateTypeList:Array<{key:number,value:string}>
    rentTypeList:Array<{key:number,value:string}>
}
