import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralService } from '../servicios/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class HeaderComponent implements OnInit {

  @ViewChild('f') formulario: any;
  filtro: string = '';
  openSearch: boolean = false;
  constructor(private router: Router, private generalService: GeneralService) { }

  ngOnInit() {
  }

  navegar(index: number) {

  }

  filtrarClientes($event: any) {
    this.generalService.filtar(this.filtro);
    this.generalService.enviarDatos.emit(this.filtro);
  }

}
