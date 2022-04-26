import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() control!: FormControl
  @Input() type: string = 'number'
  @Input() label: string = 'label'

  @Input() error: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
