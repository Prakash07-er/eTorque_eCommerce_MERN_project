import React,{useContext} from 'react'
import {Switch, Route } from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/login'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Register from "./auth/register"
import Cart from './cart/cart'
import Categories from './categories/Categories'
import NotFound from './foloder/NotFound/NotFound'
import {GlobalState} from '../../GlobalState'
import CreateProduct from './createProduct/CreateProduct'
import Homepage from '../HomePage/homepage'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged]= state.userAPI.isLogged
    const [isAdmin]= state.userAPI.isAdmin


    return (
        <div>
            <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/shop" exact component={Products} />
                <Route path="/detail/:id" exact component={DetailProduct} />
              
                <Route path="/login" exact component={isLogged ? NotFound:  Login} />
                <Route path="/register" exact component={isLogged ? NotFound:  Register} />
               
                <Route path="/category" exact component={isAdmin ? Categories:  NotFound} />
                <Route path="/create_product" exact component={isAdmin ? CreateProduct:  NotFound} />
                <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct:  NotFound} />

                <Route path="/history" exact component={isLogged ? OrderHistory : NotFound } />
                <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound } />
              
                <Route path="/cart" exact component={Cart} />


                <Route path="*" exact component={NotFound} />
            </Switch>
        </div>
    )
}

export default Pages
