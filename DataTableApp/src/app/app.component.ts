import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {UserService} from './services/user.service';
import {ExportExcelService} from './services/export-excel.service';
import {ErrorDetailsService} from './services/error-details.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  rowadded=true;
  displayedColumns = [ 'id', 'name', 'city'];
  disColumns = [  'batch', 'formulary_id','formulary_name', 'coverage_list_id', 'list_id',
  'rule_set_id', 'rule_priority', 'compare_value','error_message'];
  selectedRowIndex: number = -1;
  row;
  dataSource= new MatTableDataSource();
  readonlyAll=false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users:UserService[]=[];
  citys = [
    {"id": 1, "name": "Bangalore"},
    {"id": 2, "name": "HYD"}
  ];
  errors:ErrorDetailsService[]=[];
  errorDetails=new MatTableDataSource();

  private baseUrl:string ='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

    constructor(public userservice : UserService,private http:Http , 
      public exportExcel:ExportExcelService, public errorDetailsService:ErrorDetailsService) { }

    exportAsXLSX():void {
      // this.getErrors().subscribe((errors)=>{
      //   console.log(errors);
      //   this.exportExcel.exportAsExcelFile(errors, 'Errors');
      //   // this.errors=errors;
      // },(error)=>{
      //   console.log(error);
      // })

      this.exportExcel.exportAsExcelFile(this.errors, 'Errors');
   }
   errorHandler(error:Response){

    return Observable.throw(error||"SERVER ERROR");
 }
 getErrors(){
  return this.http.get(this.baseUrl+'/errors',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
}
  ngOnInit() {
    this.getErrors().subscribe((errors:ErrorDetailsService[])=>{
      // console.log(errors);
      this.errors=errors;
      this.errorDetails.data=errors;
      // this.ngAfterViewInit()
      // this.dataSource=this.errorDetails.data.slice(1,100);
      console.log(this.errorDetails.data);
    },(error)=>{
      console.log(error);
    })

    // this.http.get("http://jsonplaceholder.typicode.com/users").
    // map((res:Response)=>res.json()).
    // subscribe((data:any)=>this.displaydata(data))
this.users.push(this.userservice);
    this.dataSource.data = this.users;
    // this.addRow("");
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.errorDetails.paginator = this.paginator;
    this.errorDetails.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    this.errorDetails.filter = filterValue;
  }
  rowClicked(row: any): void {
    this.selectedRowIndex = row.id;
    this.row=row;
    console.log(row);
}

addRow(name:string){
  console.log(name);
  this.count=0;
  this.dataSource.data.forEach((row:any )=> this.validateName(row,name))

  if(!this.rowadded && name.trim().length>=2 && this.row.id !=null && this.row.id !='' ){
        
    if(this.count==0){
    this.dataSource.data.push(new UserService());
    console.log(this.dataSource.data);
    this.ngAfterViewInit(); 
    this.rowadded=true;
    this.readonlyAll=false;
    }else{
      this.row.nameDisabl=true;
      // this.row.nameColor='Red'
this.readonlyAll=true;
    }
  }else{
    if(this.count>0 || name==null || name.trim().length<2){
      this.row.nameDisabl=true;
      this.readonlyAll=true;
    }else{
      this.readonlyAll=false;
    }
  }
}
count;
index;
validateName(user:UserService,name:string){ 
    console.log("Row::"+user);
    if(user.name==name && user.id!=this.row.id){
    
      this.count++;
    }
    if(user.nameDisabl){
      user.nameDisabl=false;
      this.index=this.dataSource.data.indexOf(user);
      console.log(this.index);
      this.dataSource.data.fill(user,this.index,this.index+1);
    }
}
validateId(id:string){
  this.rowadded=false;
  this.count=0;
  debugger
  this.dataSource.data.forEach((row:any )=> this.validateRowId(row,id))
  if(this.count>1 || id ==null || id.trim().length==0){
    this.row.idDisabl=true;
    this.readonlyAll=true;
  }else{
    this.readonlyAll=false;
  }
}
validateRowId(user:UserService,id:string){ 
  console.log("Row::"+user);
  if(user.id==id ){
      this.count++;
  }
  if(user.idDisabl){
    user.idDisabl=false;
    this.index=this.dataSource.data.indexOf(user);
    console.log(this.index);
    this.dataSource.data.fill(user,this.index,this.index+1);
  }
}
}

