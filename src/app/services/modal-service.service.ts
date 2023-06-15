import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  constructor(private modalService: BsModalService) { }

  hide(): void{
    this.modalService.hide();
  }
}
