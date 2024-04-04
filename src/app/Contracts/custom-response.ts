export class CustomResponse<T> {
    data:T
    statusCode:string
    errors:string[]
    isSuccsess:boolean
}
