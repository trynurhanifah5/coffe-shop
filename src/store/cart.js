import { reactive } from "vue";

export const cart = reactive({

items:[],

add(menu){

const ada=this.items.find(item=>item.id===menu.id)

if(ada){

ada.qty++

}else{

this.items.push({

...menu,

qty:1

})

}

},

plus(id){

const item=this.items.find(i=>i.id===id)

item.qty++

},

minus(id){

const item=this.items.find(i=>i.id===id)

if(item.qty>1){

item.qty--

}

},

remove(id){

const index=this.items.findIndex(i=>i.id===id)

this.items.splice(index,1)

},

total(){

return this.items.reduce((a,b)=>a+b.harga*b.qty,0)

}

})