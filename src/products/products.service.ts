import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
    products: Product[] = [];

    insertProduct(
        title: string,
        description: string,
        price: number    
    ){
        const prodId = new Date().toString();
        const newProduct = new Product(prodId, title, description, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts(){
        return [...this.products];  
    }

    getProductById(prodId:string){
        const product = this.products.find(prod => prod.id == prodId);
        if(!product) {
            throw new NotFoundException(`Not found product of Id-${prodId}`);
        }
        return {...product};   
    }

    updateProduct(prodId:string, title:string, desc:string, price:number){
        const updateProd = this.getProductById(prodId);
        if(title) {
            updateProd.title = title;
        }
        if(desc) {
            updateProd.description = desc; 
        }
        if(price) {
            updateProd.price = price; 
        }
        return updateProd;
    }

    deleteProduct(id:string){
        const index = this.products.findIndex(prod => prod.id == id);
        this.products.splice(index, 1);
        return 'success';

    }
}
