import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent {

  public link: String;

  constructor(@Inject(MAT_DIALOG_DATA) public data: String) {
    this.link = data;
  }
}
