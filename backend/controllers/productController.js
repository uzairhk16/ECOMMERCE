import {v2 as cloudinary} from "cloudinary"
import productModel from "../models/productModel.js"

// function to add products
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    // Safely access images
    const image1 = req.files.image1 && req.files.image1[0] 
    const image2 = req.files.image2 && req.files.image2[0] 
    const image3 = req.files.image3 && req.files.image3[0] 
    const image4 = req.files.image4 && req.files.image4[0] 

    const images = [image1,image2,image3,image4].filter((item)=> item !== undefined)

    let imagesUrl = await Promise.all(
      images.map(async(item) => {
        let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
        return result.secure_url
      })
    )

    console.log(name,description,price,category,subCategory,sizes,bestseller);
    console.log(imagesUrl);
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: "true" ? "true" : "false",
      date: Date.now()
    }
    console.log(productData);
    
    const product = new productModel(productData);
    await product.save()

    res.json({success: true, message: "product Added"})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function to list products
const listProduct = async (req, res) => {};

// function to remove products
const removeProduct = async (req, res) => {};

// function to show single product info
const singleProduct = async (req, res) => {};

export { addProduct, removeProduct, listProduct, singleProduct };
