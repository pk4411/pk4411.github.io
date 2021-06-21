import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { config} from './shared/config'

@Injectable({
  providedIn: 'root'
})
export class SpaceServicesService {

  constructor(private http: HttpClient) { }
  
  public dashboardStaticData() {
    const headersObject = new HttpHeaders().set('Content-Type', 'application/json;');
    const observe = 'response';
    return this.http.get<any>(config.apiUrl + config.dashboardStaticData, { headers: headersObject });

}
public launchSuccessData(staus:any) {
  const headersObject = new HttpHeaders().set('Content-Type', 'application/json;');
  const observe = 'response';
  return this.http.get<any>(config.apiUrl + config.dashboardStaticData +'&launch_success=' + staus, { headers: headersObject });
  
}
public landingSuccessData(staus:any) {
  const headersObject = new HttpHeaders().set('Content-Type', 'application/json;');
  const observe = 'response';
  return this.http.get<any>(config.apiUrl + config.dashboardStaticData +'&launch_success=' + staus +'&land_success=' + staus, { headers: headersObject });
  
}
public launchYearData(lyear:any) {
  const headersObject = new HttpHeaders().set('Content-Type', 'application/json;');
  const observe = 'response';
  return this.http.get<any>(config.apiUrl + config.dashboardStaticData +'&launch_year=' + lyear, { headers: headersObject });
  
}

}
