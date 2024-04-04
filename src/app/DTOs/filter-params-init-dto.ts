export class FilterParamsInitDTO {
    maxPrice:number
    minPrice:number
    MaxFieldM2:number
    MinFieldM2:number
    maxBuildingAge:number
    minBuildingAge:number
    estateType:number
    rentType:number
    estateTypeList:Array<{key:number,value:string}>
    rentTypeList:Array<{key:number,value:string}>
}
