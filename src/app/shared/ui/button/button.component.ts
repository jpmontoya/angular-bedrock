import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideAngularModule, LoaderCircle } from 'lucide-angular';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger';

@Component({
  selector: 'app-button',
  imports: [
    LucideAngularModule,
    NgClass
  ],
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {

  readonly icons = { LoaderCircle };

  variant = input<ButtonVariant>('primary');
  type = input<'button' | 'submit' | 'reset'>('button');

  loading = input(false);
  disabled = input(false);
  fullWidth = input(false);

}
