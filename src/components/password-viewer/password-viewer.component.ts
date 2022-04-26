import { Component, Input, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-password-viewer',
  templateUrl: './password-viewer.component.html',
  styleUrls: ['./password-viewer.component.css']
})
export class PasswordViewerComponent implements OnInit {

  @Input() password: string = ''
  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  copyPassword() {
    this.clipboard.copy(this.password);
    this.openSnackBar()
  }

  openSnackBar() {
    this._snackBar.open('Copied to clipboard 📋', undefined, { duration: 2000 })
  }



}
