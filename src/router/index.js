import {createRouter, createWebHistory} from "vue-router"

import Home from "../views/Home.vue"
import Produk from "../views/Produk.vue"
import Cart from "../views/Cart.vue"
import Checkout from "../views/Checkout.vue"
import Admin from "../views/Admin.vue"


const router = createRouter({

history:createWebHistory(),

routes:[

{
path:"/",
component:Home
},

{
path:"/produk",
component:Produk
},

{
path:"/cart",
component:Cart
},

{
path:"/checkout",
component:Checkout
},

{
path:"/admin",
component:Admin
}

]

})


export default router