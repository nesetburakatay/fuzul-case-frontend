import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomclientService {

  constructor() { }







//   constructor(private httpClient:HttpClient, @Inject("baseUrl") private baseUrl: string) { }

//   private generateUrl(requestParameter: Partial<RequestParameters>): string{
//     return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/${requestParameter.action}`: ""}`
//   }

//   get<T>(requestParameter: Partial<RequestParameters>, id?: string): Observable<T>{
//     let url:string = ""
//     if(requestParameter.fullEndPoint){
//       url = requestParameter.fullEndPoint
//     }else{
//       url = `${this.generateUrl(requestParameter)}${id ? `/${id}` : ""}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`
//     }

//     return this.httpClient.get<T>(url, { headers: requestParameter.headers})
//   }
//   post2<T>(requestParameter: Partial<RequestParameters>, body?: Partial<T>): Observable<T>{
//     console.log("merhaba şu an post attın");
    
//     let url: string = ""
//     if(requestParameter.fullEndPoint){
//       url = requestParameter.fullEndPoint
//     }else{
//       url = `${this.generateUrl(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`
//     }
//     var a= this.httpClient.post<T>(url, body, { headers: requestParameter.headers})
//     a.subscribe(x=>{console.log("bitti")})
//     return a
//   }
//   post<T>(requestParameter: Partial<RequestParameters>, body?: Partial<T>): Observable<T>{
//     let url: string = ""
//     if(requestParameter.fullEndPoint){
//       url = requestParameter.fullEndPoint
//     }else{
//       url = `${this.generateUrl(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`
//     }
//     return this.httpClient.post<T>(url, body, { headers: requestParameter.headers})
//   }

//   patch<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T>{
//     let url: string = ""
//     if(requestParameter.fullEndPoint){
//       url = requestParameter.fullEndPoint
//     }else{
//       url = `${this.generateUrl(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`
//     }
//     return this.httpClient.patch<T>(url, body, { headers: requestParameter.headers})
//   }

//   put<T>(requestParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T>{
//     let url: string = ""
//     if(requestParameter.fullEndPoint){
//       url = requestParameter.fullEndPoint
//     }else{
//       url = `${this.generateUrl(requestParameter)}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`
//     }
//     return this.httpClient.put<T>(url, body, { headers: requestParameter.headers})
//   }

//   delete<T>(requestParameter: Partial<RequestParameters>, id: string): Observable<T>{
//     let url: string = ""
//     if(requestParameter.fullEndPoint){
//       url = requestParameter.fullEndPoint
//     }else{
//       url = `${this.generateUrl(requestParameter)}/${id}${requestParameter.queryString ? `?${requestParameter.queryString}` : ""}`
//     }
//     return this.httpClient.delete<T>(url, {headers: requestParameter.headers})
//   }
// }


















}
