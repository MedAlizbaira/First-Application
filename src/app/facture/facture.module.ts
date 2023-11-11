import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureRoutingModule } from './facture-routing.module';
import { AffichageComponent } from './affichage/affichage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { ClientModule } from "../client/client.module";
@NgModule({
  declarations: [AffichageComponent, DetailComponent],
  imports: [
    CommonModule,
    FactureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ClientModule
  ],
})
export class FactureModule {}
