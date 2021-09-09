import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FormInputComponent),
    multi: true
  }]
})
export class FormInputComponent implements ControlValueAccessor {
  public value: string | null = null;
  public inputParams: { type: string, placeholder: string };

  private onChange: (p: any) => void = () => {};
  private onTouched: (p: any) => void = () => {};

  @Input() set inputParameters(params: { type: string, placeholder: string }) {
    this.inputParams = params;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  change(): void {
    this.onChange(this.value);
    this.onTouched(this.value);
  }

}
