import { StoreRepository } from '../repository/product.repository';

export class ProductService {

    private storeRepository: StoreRepository;

    constructor() {
        this.storeRepository = new StoreRepository();
    }

    async getProducts() {
        return await this.storeRepository.getProducts();
    }

    async createProduct(product) {
        return await this.storeRepository.createProduct(product);
    }

    async updateProduct(product) {
        return await this.storeRepository.updateProduct(product);
    }

    async deleteProduct(productId) {
        return await this.storeRepository.deleteProduct(productId);
    }

}