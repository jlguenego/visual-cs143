import { UtilsService } from './../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-llk',
  templateUrl: './llk.component.html',
  styleUrls: ['./llk.component.scss'],
})
export class LlkComponent implements OnInit {
  f = new FormGroup({
    delay: new FormControl(50),
  });
  constructor(public utils: UtilsService) {}

  ngOnInit(): void {}
}
