import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Wig",
    productImg:"https://cdn.shopify.com/s/files/1/0688/3370/6274/products/89C86233-1F06-4BC3-96C2-DEE6C746397D-768x1152_960x_crop_center.webp?v=1673609089"
  },
  {
    _id: uuid(),
    categoryName: "Ponytail Extensions",
    productImg:"https://cdn.shopify.com/s/files/1/0258/2531/2848/products/Ponytail-extensions_2ebcfb1e-f147-4858-9a85-682d38e4b343.jpg?v=1680006343&width=1100"
   
  },
  {
    _id: uuid(),
    categoryName: "Single Clip Highlights",
    productImg:"https://cdn.shopify.com/s/files/1/0591/6422/9806/products/LRFeaturedImage_28040c6f-df53-41a1-bd70-78ce2a7e6e56_800x.jpg?v=1660804194"
    
  },
  
  {
    _id: uuid(),
    categoryName: "Curly Hair",
    productImg:"https://cdn.shopify.com/s/files/1/0688/3370/6274/products/Curlytopknot_960x_crop_center.jpg?v=1674476325"
   
  },
  {
    _id: uuid(),
    categoryName: "Clip-In Bangs",
    productImg:"https://cdn.shopify.com/s/files/1/0591/6422/9806/files/COVERIMAGE_9a7fbca3-2d52-46b4-86eb-9956ec98680a_800x.jpg?v=1684320444"
    
  },
  
];
