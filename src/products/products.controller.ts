import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }

    @Post()
    async addProducts(
        @Body('title') ProdTitle: string,
        @Body('description') ProdDescription: string,
        @Body('price') ProdPrice: number
    ) {
        const prodId = await this.productService.insertProduct(
            ProdTitle, ProdDescription, ProdPrice
        );
        return {
            id: prodId
        }
    }

    @Get()
    async getAllProducts(){
        return await this.productService.getProducts();
    }

    @Get(':id')
    async getProductById(@Param('id') prodId: string){
        return await this.productService.getProductById(prodId);
    }

    @Patch(':id')
    async updateProducts(
            @Param('id') id:string, 
            @Body('title') title:string, 
            @Body('description') desc:string, 
            @Body('price') price:number
        ){
        return await this.productService.updateProduct(id,title,desc,price)
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id:string){
        return await this.productService.deleteProduct(id);
        
    }
}
