import { Component, OnInit } from '@angular/core';
import { SpaceServicesService } from './space-services.service';
// import { config} from './shared/config'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'space launch programe';
  
  constructor(public spaceService: SpaceServicesService) { }
  dashboarStaticdata:any;
  // launchSuccessData:any;
  staticResults: string[];
  launchsucess: string[];
  successResults: string[];
  launchSuccessContent: string[];

  public ngOnInit() {
        this.dashboardStatics();
        // this.launchSuccessData();

  }

  dashboardStatics() {
        this.spaceService.dashboardStaticData().subscribe(data => {
          this.staticResults = data;
          this.dashboarStaticdata = this.staticResults;
        })
    }
    launchSuccessData(staus:any){
        this.spaceService.launchSuccessData(staus).subscribe(data => {
          this.dashboarStaticdata = data;
        })
    }  
    landingSuccessData(staus:any){
        this.spaceService.landingSuccessData(staus).subscribe(data => {
          this.dashboarStaticdata = data;
        })
    }  
    launchYearData(lyear:any){
        this.spaceService.launchYearData(lyear).subscribe(data => {
          this.dashboarStaticdata = data;

          
        
        })
    }  
     
}
