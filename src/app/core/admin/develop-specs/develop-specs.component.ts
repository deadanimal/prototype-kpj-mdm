import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-develop-specs',
  templateUrl: './develop-specs.component.html',
  styleUrls: ['./develop-specs.component.scss']
})
export class DevelopSpecsComponent implements OnInit {

  // Modal
  modal: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered"
  };

  constructor(
    private modalService: BsModalService,
    private toastr: NotifyService
  ) { }

  ngOnInit() {
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modal = this.modalService.show(modalRef, this.modalConfig);
  }

  closeModal() {
    this.modal.hide()
  }

  confirm() {
    this.toastr.openToastr('Success!', '')
  }

}
