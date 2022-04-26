import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css']
})
export class CheckboxInputComponent implements OnInit {

  @Input() control!: FormControl
  @Input() label: string = 'label'
  constructor() { }

  ngOnInit(): void {
  }

}
