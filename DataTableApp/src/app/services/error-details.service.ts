import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorDetailsService {
  private  error_id:number;
	private  batch:String;
	private  formulary_id:String;
	private  formulary_name:String;
	private  coverage_list_id:String;
	private  list_id:String;
	private  rule_set_id:String;
	private  rule_priority:number;
	private  compare_value:number;
	private  error_message:String;
  constructor() { }
}
