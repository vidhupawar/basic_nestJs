import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './products.model';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
    products: Product[] = [];

    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>
    ){}

    async insertProduct(
        title: string,
        description: string,
        price: number       
    ){
        const newProduct = new this.productModel({
            title, 
            description,
            price
        });
        const product = await newProduct.save();
        return product.id;
    }

    async getProducts(){
        const products = await this.productModel.find().exec();
        return products.map(prod => ({
            id : prod.id,
            title: prod.title,
            description:prod.description,
            price: prod.price
        }));
    }

    async getProductById(prodId:string){
        let product;
        try{
            product = await this.productModel.findById(prodId).exec();
        }
        catch (err) {
            throw new NotFoundException(`Not found product of Id-${prodId}`);
        }   
        return {
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price
        };   
    }

    async updateProduct(prodId:string, title:string, desc:string, price:number){
        const updateProd = await this.getProductById(prodId);
        if(title) {
            updateProd.title = title;
        }
        if(desc) {
            updateProd.description = desc; 
        }
        if(price) {
            updateProd.price = price; 
        }
        await this.productModel.findOneAndUpdate({_id: prodId}, updateProd);
    }

    async deleteProduct(id:string){
        const result = await this.productModel.deleteOne({_id: id}).exec();
        if(!result.deletedCount) {
            throw new NotFoundException(`Not found product of Id-${id}`);
        }
        return 'success';
    }
}
