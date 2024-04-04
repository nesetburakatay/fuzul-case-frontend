import { DistrictResponse } from "./district-response"

export class CountryResponse {
    id: number
    countryName: string
    districts: Array<DistrictResponse>
}
