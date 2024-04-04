export class FilterParamsContract {
    maxPrice: number
    minPrice: number

    maxFieldM2: number
    minFieldM2: number

    maxBuildingAge: number
    mimBuildingAge: number

    estateTypeList:Array<{key:number,value:string}>
    rentTypeList:Array<{key:number,value:string}>
}
