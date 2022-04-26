import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent implements OnInit {

  crypto: Crypto | null = window.crypto || null

  passwordLength = new FormControl(4, [Validators.required, Validators.min(4), Validators.max(30)]);
  allowNum = new FormControl(false);
  allowSpecialChars = new FormControl(false);
  allowLetters = new FormControl(true);


  generatedPassword = ''

  isCheckBoxError: string = ''


  ngOnInit(): void {
  }

  generatePassword(passwordLength: number, allowLetters = true, allowNum = true, allowSpecialChars = true) {

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "~!#$%&*-+|";

    let allChars = ''

    let requiredVairations = 1

    let randPasswordArray = new Array(passwordLength)
    if (allowLetters) {
      randPasswordArray[requiredVairations - 1] = chars;
      allChars += chars
      requiredVairations++
    }

    if (allowNum) {
      randPasswordArray[requiredVairations - 1] = numberChars;
      allChars += numberChars
      requiredVairations++
    }
    if (allowSpecialChars) {
      randPasswordArray[requiredVairations - 1] = specialChars;
      allChars += specialChars
      requiredVairations++
    }
    randPasswordArray.fill(allChars, requiredVairations, passwordLength);

    if (this.crypto) {
      return this.shuffleArray(randPasswordArray.map((x) => { return x[Math.floor(this.crypto!.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * x.length)] })).join('');
    }
    else {
      return this.shuffleArray(randPasswordArray.map(function (x) { return x[Math.floor(Math.random() * x.length)] })).join('');
    }

  }

  shuffleArray(array: any) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  onGeneratePassword() {
    const len = parseInt(this.passwordLength.value)
    this.isCheckBoxError = ''

    const [isLetter, isNum, isSpecial] = [this.allowLetters.value, this.allowNum.value, this.allowSpecialChars.value]

    if (!(isLetter || isNum || isSpecial)) {
      this.isCheckBoxError = 'Select atleast one checkbox'
      return
    }

    this.generatedPassword = this.generatePassword(len, isLetter, isNum, isSpecial)
  }
}

