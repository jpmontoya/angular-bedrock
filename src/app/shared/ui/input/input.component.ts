import { Component, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { LucideAngularModule, Eye, EyeClosed } from 'lucide-angular';

export type InputType =
  | 'text'
  | 'password';

@Component({
  selector: 'app-input',
  imports: [
    LucideAngularModule
  ],
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {

  readonly icons = { Eye, EyeClosed };

  placeholder = input('');

  value = '';

  disabled = false;

  type = input<InputType>('text');

  showPassword: boolean = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string | null): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }

  getType(){
    if(this.showPassword && this.type() === 'password'){
      return 'text'
    }
      return this.type();
  }
}