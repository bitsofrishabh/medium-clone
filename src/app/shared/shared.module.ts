import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

const modules = [MdbFormsModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
