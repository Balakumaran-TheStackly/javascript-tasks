let apiData="https://fakestoreapi.com/products/";

let cart=[];

fetch(apiData).then((data)=>{
   
   return data.json()
})
.then((jsdata)=>{
    display(jsdata);    
    return jsdata;
})
.then((jsdata)=>{
    console.log("Task-2 five Products");
    let fiveProducts=jsdata.slice(0,5)
    fiveProducts.forEach((c,i,t)=>{{
        console.log(c);
    }})

    return jsdata
})
.then((jsdata)=>{
    console.log("Task-3 Price Filter");
    let priceFilter=jsdata.filter((c,i,t)=>{
        return c.price>50;
    })
    console.log(priceFilter);

    return jsdata;
})
.then((jsdata)=>{
    console.log("Task-4 Category Filter");
    let priceFilter=jsdata.filter((c,i,t)=>{
        return c.category === "men's clothing";
    })
    console.log(priceFilter);
    return jsdata;
})
.then((jsdata)=>{
    console.log("Task-5 Product Count");
    let h2=document.querySelector("#productCount");    
    
    h2.innerText="Total Products : "+jsdata.length;
    
    return jsdata;
})
.then((jsdata)=>{
    console.log("Task-6 Search Product");
    let input=document.querySelector("input");
    let btn=document.querySelector("#searchbtn");
    let apiCard = document.querySelector(".apiCard");
    btn.addEventListener("click",()=>{
        let search=input.value.toLowerCase();
        let product=jsdata.filter((c,i,t)=>{
            return c.title.toLowerCase().includes(search);
        })
        console.log(product);
        apiCard.innerHTML="";
        
        display(product);
    })
    
    return jsdata
})
.then((jsdata)=>{
    console.log("Task-7 Sort Products by Price low to High");
    
    let low=document.querySelector("#low");
    let apiCard = document.querySelector(".apiCard");

    low.addEventListener("click",()=>{
        let sort=[...jsdata].sort((a,b)=>{
            return  a.price - b.price;
        })
        apiCard.innerHTML="";

        display(sort);
    })

    return jsdata;
})
.then((jsdata)=>{
    console.log("Task-7 Sort Products by Price High to low");
    let high=document.querySelector("#high");
    let apiCard=document.querySelector(".apiCard");
    high.addEventListener("click",()=>{
        let sort=[...jsdata].sort((a,b)=>{
            return b.price-a.price;
        })
        apiCard.innerHTML="";
        display(sort);

    })
    return jsdata;
})
.then((jsdata) => {

    let category = document.querySelector(".getbox");
    let apiCard = document.querySelector(".apiCard");

    let categories = [];

    jsdata.forEach((c) => {

        if (!categories.includes(c.category)) {
            categories.push(c.category);
        }

    });

    let all = document.createElement("button");
    all.innerText = "All";
    category.append(all);

    all.addEventListener("click", () => {
        apiCard.innerHTML = "";
        display(jsdata);
    });

    categories.forEach((c) => {

        let button = document.createElement("button");

        button.innerText = c;

        category.append(button);

        button.addEventListener("click", () => {

            let product = jsdata.filter((p) => {
                return p.category === c;
            });

            apiCard.innerHTML = "";

            display(product);
        });

    });

    return jsdata;
})
function display(jsdata) {
    let apiCard=document.querySelector(".apiCard")
    jsdata.forEach((c,i,t)=>{{
        
        let apiCard2=document.createElement("div")
        apiCard2.innerHTML=`<h1>${c.title.slice(0,50)}</h1><h2>${c.category}</h2><img src="${c.image}" />
        <p>${c.description.slice(0,100)}.........more</p> <button>$${c.price}</button>
        `
        let addCart = document.createElement("button");
        addCart.innerText = "Add to Cart";

        apiCard2.append(addCart);
        apiCard.append(apiCard2);

        addCart.addEventListener("click", () => {
            cart.push(c);
            
            console.log("Cart Products");
            console.log(cart);
            
        });
        
    }})
}
let account = document.querySelector("#account");

account.addEventListener("click", () => {
    viewCart();
});
function viewCart() {

    let apiCard = document.querySelector(".apiCard");

    apiCard.innerHTML = "";
    cart.forEach((c) => {
        let cartCard = document.createElement("div");

        cartCard.innerHTML = `<h1>${c.title.slice(0, 50)}</h1><h2>${c.category}</h2>
        <img src="${c.image}" /><p>${c.description.slice(0, 100)}.........more</p>
        <button>$${c.price}</button>`

        apiCard.append(cartCard);
    });
}
