import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit{
  input_value: string = "Try me";

  constructor(private route: ActivatedRoute ){
  }

  ngOnInit(): void {
    
  }
  public btnAlert_Click(){
    alert("Value: " + this.input_value)
  }
  public Clear() {
    this.input_value = ""; 
  }
}
