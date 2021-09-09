import {Component, ElementRef, forwardRef, QueryList, ViewChildren} from '@angular/core';
import { ControlValueAccessor, FormArray, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";

@Component({
  selector: 'app-authentication-input',
  templateUrl: './authentication-input.component.html',
  styleUrls: ['./authentication-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AuthenticationInputComponent),
    multi: true
  }]
})
export class AuthenticationInputComponent implements ControlValueAccessor {
  @ViewChildren('input') authInputs: QueryList<ElementRef> | null = null;

  public value: string | null = null;

  public readonly authenticationForm: FormGroup = new FormGroup({
    authArray: new FormArray([
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
      new FormControl('', [Validators.required, Validators.maxLength(1)]),
    ]),
  });

  private onChange: (p: any) => void = () => {};
  private onTouched: (p: any) => void = () => {};

  constructor() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  getControls(): any {
    return this.authenticationForm.controls.authArray as FormArray;
  }

  change(index: number): void {
    const item = this.authInputs?.toArray()[index].nativeElement;
    const nextItem = this.authInputs?.toArray()[index + 1].nativeElement;
    if (item.value.length >= 1) {
      nextItem.focus();
    }
    const value = this.authenticationForm.controls.authArray.value.join('')
    this.onChange(value);
  }

  keyDetection(event: KeyboardEvent, index: number): void {
    const item = this.authInputs?.toArray()[index].nativeElement;
    const previousItem = this.authInputs?.toArray()[index - 1].nativeElement;
    if (event.key === 'Backspace') {
      previousItem.focus();
      item.value = '';
    }
  }

}
