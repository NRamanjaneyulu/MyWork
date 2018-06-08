import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the SampleHttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SampleHttpServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SampleHttpServiceProvider Provider');
  }

  public httpGet(url: string): Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json'});  
    let option = new RequestOptions({headers:headers});  
    return this.http.get(url,option) 
    .map(this.extractData)
    .catch(this.handleError);
  };

  public httpPost(url: string, body: any): Observable<Response> {

    let headers = new Headers({ 'Content-Type': 'application/json'});
    let option = new RequestOptions({headers:headers});  
    return this.http.post(url, body, option)
      .map(this.extractData)
      .catch(this.handleError);
    //}
  }


//--------------------------- Error handlers ------------------------------//
  //refactor the response data
  private extractData(res: Response) {
    let body = res.json();
    //hide.toats();
    return body || '';
  }

  //handle all the error data
  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure       
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log("error msg is " + errMsg);
    //  alert("error Msg is "+errMsg);
    return Observable.throw(errMsg);
  }


}
