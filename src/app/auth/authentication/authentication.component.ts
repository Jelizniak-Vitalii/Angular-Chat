import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  inputGroupe: { controlName: string }[] = [
    { controlName: '1' },
    { controlName: '2' },
    { controlName: '3' },
    { controlName: '4' },
    { controlName: '5' },
    { controlName: '6' },
  ]

  public form: FormGroup = new FormGroup({
    1: new FormControl('',[ Validators.required, Validators.maxLength(1) ]),
    2: new FormControl('',[ Validators.required, Validators.maxLength(1) ]),
    3: new FormControl('',[ Validators.required, Validators.maxLength(1) ]),
    4: new FormControl('',[ Validators.required, Validators.maxLength(1) ]),
    5: new FormControl('',[ Validators.required, Validators.maxLength(1) ]),
    6: new FormControl('',[ Validators.required, Validators.maxLength(1) ]),

  })

  constructor() { }

}
