import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  //Title to display
  @Input() title:string = "";
  @Input() dataArray: any;
  @Input() firstCol: string = " ";
  @Input() secondCol: string = " ";
  @Input() thirdCol: string = " ";
  @Input() fourthCol: string = " ";
  // Action Button definition
  @Input() editUrl: any;
  @Input() deleteElement: any = (args: any) => {};

  constructor() { }

  ngOnInit(): void {
    
  }
  displayedColumns: string[] = [
    "firstCol",
    "secondCol",
    "thirdCol"
  ];
}
