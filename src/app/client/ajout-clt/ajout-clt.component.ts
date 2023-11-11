import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-ajout-clt',
  templateUrl: './ajout-clt.component.html',
  styleUrls: ['./ajout-clt.component.css'],
})
export class AjoutCltComponent {
  @Output() newClientEvent = new EventEmitter<string>();
  clientName: any;
  ;
  onAddClient() {
    console.log('client in ChildComponent:', this.clientName);
    this.newClientEvent.emit(this.clientName);
  }
}
