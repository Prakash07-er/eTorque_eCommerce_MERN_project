import React,{useContext, useState} from 'react'
import {GlobalState} from "../../../GlobalState"
import ProductItem from '../foloder/productItem/ProductItem'
import Loading from '../foloder/loading/Loading'
import axios from 'axios'
import Filter from './Filter'
import LoadMore from './LoadMore'

function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token]= state.token
    const [callback, setCallback]= state.productAPI.callback
    const [loading,setLoading] = useState(false)
    const [ischeck, setIsCheck] = useState(false)

    const handleCheck = (id) => {
        products.forEach(product => {
            if(product._id === id) product.checked =!product.checked  
        })
        setProducts([...products])
    }

    const deleteProduct = async (id, public_id) => {
        try {
            setLoading(true)
            const destroyImg =  axios.post('/api/destroy' , {public_id},{
                headers:{
                    Authorization: token
                }
            } )
            const deleteProduct =  axios.delete(`/api/products/${id}` , {
                headers:{
                    Authorization: token
                }
            } )

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () => {
        products.forEach(product => {
            product.checked = !ischeck
        })
        setProducts([...products])
        setIsCheck(!ischeck)
    }

    const deleteAll =() => {
        products.forEach(product =>{
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    if(loading) return <div> <Loading /> </div>

    return (
    <>
        <Filter />
        {
            isAdmin && 
            <div className="delete_all">
                <span> Select all </span>
                <input type="checkbox" checked={ischeck} onChange={checkAll} />
                <button onClick={deleteAll}> Delete All </button>
            </div>
        }
        <div className=" products">
            {
                products.map(product => {
                    return <ProductItem key={product._id} 
                    product={product} 
                    setProducts={setProducts}
                    isAdmin={isAdmin}
                    deleteProduct={deleteProduct}
                    handleCheck={handleCheck} />
                })
            }
        </div>
        <LoadMore />
        {products.length === 0 && <Loading />}
    </>
    )
}

export default Products
