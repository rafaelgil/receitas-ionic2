import { Ingrediente } from "../models/ingrediente";

export class ListaComprasService {

    private itens: Ingrediente[] = [];
    private indice: number;

    incluiItem(nome: string, quantidade: number) {
        this.indice = this.findItem(nome);
        if (this.indice >= 0){
            this.itens[this.indice] = new Ingrediente(nome, Number(quantidade) + Number(this.itens[this.indice].quantidade));
        } else{
            this.itens.push(new Ingrediente(nome, quantidade));
        }
    }

    incluiItens(itens: Ingrediente[]) {
        for (let i = itens.length - 1; i >= 0; i--){
            this.incluiItem(itens[i].nome, itens[i].quantidade);
        }
    }

    getItens() {
        return this.itens.slice();
    }

    removeItem(index: number) {
        this.itens.splice(index, 1);
    }

    findItem(nome: string){
      for(let i = this.itens.length - 1; i >= 0; i--){
        if (this.itens[i].nome == nome){
            return i;
        }
      }
      return -1;
    }
}