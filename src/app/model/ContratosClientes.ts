import { Clientes } from "./Clientes";

export class ContratosClientes{
    idContrato?: string;
    cliente?: Clientes;
    dataContratoOriginal?: Date;
    dataInicioDivida?: Date;
    valorContratoOriginal?: number;
    valorContratoAtualizado?: number;
}
