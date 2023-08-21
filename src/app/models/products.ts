// "id": 1,
// "title": "macbook pro 15",
// "price": "1200",
// "src": "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
// "configure": {
//   "processor": "Apple M11",
//   "SSD": "512 GB",
//   "display": "15'"
// }

export interface IProductsConfig {
    processor: string;
    ssd: string;
    display: string;
}

export interface IProducts {
    id: number;
    title: string;
    price: number;
    image?: string;
    year: string
    configure: IProductsConfig
}