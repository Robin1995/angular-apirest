import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { Cliente } from "../clientes/cliente";
import { Respuesta } from "../interfaces/respuesta";
import { GeneralService } from "../servicios/general.service";
import * as moment from 'moment';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  titulo: string = "Detalle del cliente";
  edit: boolean = false;
  constructor(
    private clienteService: GeneralService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activatedRoute.params.subscribe((params) => {
      let id = params["id"];
      if (id) {
        const url = `${environment.urlApi}/cliente?identificacion=${id}`;
        this.clienteService
          .getData(url)
          .subscribe((res: any) => (this.cliente = res.cuerpo));
      }
    });
  }

  return(): void {
    this.router.navigate(['/']);
  }

  update(): void {}

  
  getFormato(fecha: any): string {
    return moment(fecha).format('DD/MM/YYYY');
  }

}
