import { Component, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked,AfterContentChecked } from '@angular/core';
import * as AOS from 'aos';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  closeResult = '';

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load',AOS.refresh);
    window.addEventListener('scroll',AOS.refresh);
  }


	open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'Info', size: 'xl', scrollable:true }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}








}
