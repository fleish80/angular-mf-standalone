import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'angular-mf-standalone-remote1-entry',
  template: `<angular-mf-standalone-nx-welcome></angular-mf-standalone-nx-welcome>`,
})
export class RemoteEntryComponent {}
