import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { GeneralService } from "../servicios/general.service";
import { Cliente } from "./cliente";
import { Respuesta } from "../interfaces/respuesta";
import { environment } from "../../environments/environment";
import * as moment from "moment";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.scss"],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  cargando: boolean = false;
  constructor(private generalServie: GeneralService) {}

  ngOnInit() {
    const url = `${environment.urlApi}/clientes?pagInicio=0&pagTamanio=10`;
    this.obtenerDatos(url);
    this.generalServie.filtroObservable.subscribe((res) => {
      if (res) {
        const url2 = `${environment.urlApi}/clientes?pagInicio=0&pagTamanio=10&filtro=${res}`;
        this.obtenerDatos(url2);
      } else {
        this.obtenerDatos(url);
      }
    });
  }
  obtenerDatos(url: string) {
    this.cargando = true;
    this.generalServie.getData(url).subscribe((res: Respuesta) => {
      this.cargando = false;
      if (res.codigo === 0) {
        this.clientes = res.cuerpo;
        console.log(this.clientes);
      } else {
        console.log(res.mensaje);
      }
    });
  }

  getFormato(fecha: any): string {
    return moment(fecha).format("DD/MM/YYYY");
  }
}
