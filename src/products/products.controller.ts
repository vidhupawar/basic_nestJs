import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) { }

    @Post()
    addProducts(
        @Body('title') ProdTitle: string,
        @Body('description') ProdDescription: string,
        @Body('price') ProdPrice: number
    ): any {
        const prodId = this.productService.insertProduct(
            ProdTitle, ProdDescription, ProdPrice
        );
        return {
            id: prodId
        }
    }

    @Get()
    getAllProducts(){
        return this.productService.getProducts();
    }

    @Get(':id')
    getProductById(@Param('id') prodId: string){
        return this.productService.getProductById(prodId);
    }

    @Patch(':id')
    updateProducts(id:string, title:string, desc:string, price:number){
        return this.productService.updateProduct(id,title,desc,price)
    }

    @Delete(':id')
    deleteProduct(id:string){
        return this.productService.deleteProduct(id);
        
    }
}
