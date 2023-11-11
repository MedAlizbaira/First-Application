import { NgModule } from '@angular/core';
19;
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { AjoutCltComponent } from './ajout-clt/ajout-clt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AjoutCltComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AjoutCltComponent],
})
export class ClientModule {}
