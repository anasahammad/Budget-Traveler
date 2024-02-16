
let cart = 0;
let totalcost = 0;

const allBtn = document.getElementsByClassName('add-btn');
for(const btn of allBtn){
    btn.addEventListener('click', function(event){
      
        
     
         //get the placename and price
       const placesName = event.target.parentNode.childNodes[1].innerText;
       const price = parseInt(event.target.parentNode.childNodes[3].childNodes[1].innerText);
     

          // check the budget validation
          const budgetContainer = document.getElementById('budget').innerText;
          const budget = parseInt(budgetContainer);

          if(budget - price < 0){
            alert("Low budget please earn more");
            
            return;
          }
          else{

              // increase cart item while click Add to Cart
            cart++;
            const cartContainer = document.getElementById('cart-count');
            cartContainer.innerText = cart;
          }
          document.getElementById('budget').innerText = budget - price;
          
// get the placeContainer 
     const placeContainer =   document.getElementById('selected-place-container');

        //create li element and append p element in the list
     const li = document.createElement('li');
     const p = document.createElement('p');
     p.innerText = placesName;
     li.appendChild(p);
     const p2 =  document.createElement('p');
     p2.innerText = price;
     li.appendChild(p);
     li.appendChild(p2);
    //  append li element in the placeContainer
     placeContainer.appendChild(li);
     

    //  totalcost

   const total = document.getElementById('total-cost');
    totalcost = totalcost + price;
    total.innerText = totalcost;

    // grand Total

    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalcost;
   
 
        
    })
}

function grandTotal(catagory){
    let totalGrand = totalcost;
    const grandTotal = document.getElementById('grand-total');
    if(catagory == 'bus'){
        totalGrand = totalGrand + 100;
    }
    else if(catagory == 'train'){
        totalGrand = totalGrand - 200;
    }else if(catagory == 'flight'){
        totalGrand = totalGrand + 500;
    }
    grandTotal.innerText = totalGrand;
}

