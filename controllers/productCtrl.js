const Products = require('../models/productModel')


// filter, sorting, and pagination

class APIfeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString= queryString;
    }
    filtering(){
        const queryObj = {...this.queryString} // queryString = req.query

      //  console.log({before:queryObj})  // before delete page

        const excludeFields = ['page', 'sort', 'limit']
        excludeFields.forEach(el => delete(queryObj[el]))

      //  console.log({after:queryObj})  // after delete the page

        let queryStr = JSON.stringify(queryObj)
        queryStr=queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match )

        // console.log({queryStr})

        // gt = greater than
        // gte = greater than or equal
        // lt = lesser than
        // lte = lesser than or equal
        // regex = regular expression

        this.query.find(JSON.parse(queryStr))

        return this
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            console.log(sortBy)
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')

        }

        return this
    }

    paginating(){
        const page= this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page -1) * limit;
        this.query = this.query.skip(skip).limit(limit)

        return this
    }

}


const productCtrl = {
        getProducts : async (req, res) => {
            try {
                const features = new APIfeatures(Products.find(), req.query).filtering().sorting().paginating()

                const products = await features.query

                res.json({
                    status: 'success',
                    result: products.length,
                    products: products
                })

            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },

        createProduct : async (req, res) => {
            try {
                const {product_id, title, price, description, content, images, category} = req.body;
                if(!images) return res.status(400).json({msg: "No Image uplaoded"})

                const product = await Products.findOne({product_id})
                if(product)
                 return res.status(400).json({msg: "This product already exist"})

                const newProduct = new Products({
                    product_id, 
                    title: title.toLowerCase(), 
                    price, 
                    description, 
                    content, 
                    images, 
                    category
                })

                    await newProduct.save()
                    res.json({msg:"Created a product"})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },

        deleteProduct : async (req, res) => {
            try {
                await Products.findByIdAndDelete(req.params.id)
                res.json({msg: "Deleted a Product"})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        },

        updateProduct : async (req, res) => {
            try {
                const {title, price, description, content, images, category} = req.body;
                if(!images) return res.status(400).json({msg: "No Image uplaoded"})

                await Products.findOneAndUpdate({_id:req.params.id}, {
                    title: title.toLowerCase(), 
                    price, 
                    description, 
                    content, 
                    images, 
                    category
                })

                    res.json({msg:"Updated a Product"})
            } catch (err) {
                return res.status(500).json({msg: err.message})
            }
        }
}

module.exports = productCtrl