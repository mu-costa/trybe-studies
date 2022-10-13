class Student {
    private _matricula: string;
    private _nome: string;
    private _nota1Prova: number;
    private _nota2Prova: number;
    private _nota3Prova: number;
    private _nota4Prova: number;
    private _nota1Trabalho: number;
    private _nota2Trabalho: number;

    sumNotes (){
        return this._nota1Prova + this._nota2Prova + this._nota3Prova + this._nota4Prova + this._nota1Trabalho + this._nota2Trabalho;    
    }

    averageNotes (){
        return (this._nota1Prova + this._nota2Prova + this._nota3Prova + this._nota4Prova + this._nota1Trabalho + this._nota2Trabalho) / 6;
    }
}

const student1 = new Student();


class ClienteLanchonete {
    private _nome:string;
}

class Pedido {
    private _cliente: string;
    private _itensConsumidos: string[];
    private _formaDePagamento: string;
    private _percentualDesconto: number;

    pedidoDesconto(valorPedido:number) {
        if(valorPedido > 100) return true;
        return false;
    }

    totalPedido(valoresPedidos: number[]) : number{
        let totalPedido = 0;
        valoresPedidos.forEach((valor) => totalPedido += valor);

        return totalPedido;
    }
}

class ItemPedido {
    private _nomePedido: string;
    private _preco: string;
}

