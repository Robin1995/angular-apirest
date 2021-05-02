import { Cliente } from '../clientes/cliente';

export interface Respuesta {
    codigo: number;
    mensaje: string;
    cuerpo: Cliente[];
}
