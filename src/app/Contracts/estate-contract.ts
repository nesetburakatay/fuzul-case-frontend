import { DistrictResponse } from "./district-response"

export class EstateContract {
    id :number
    fieldM2 :number
    buildingAge :number
    estateType :string
    rentType :string
    dsc :string
    price :number
    headerDsc:string
    district:DistrictResponse
}
