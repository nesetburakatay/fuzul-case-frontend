import { CountryDTO } from "../DTOs/country-dto"
import { CountryResponse } from "./country-response"

export class DistrictResponse {
    id: number
    districtName: string
    countryId: number
    country:CountryDTO
}
