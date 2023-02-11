
// let image = document.getElementById("image")
fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log("DATA>>>", data);
    let myArr = data.products;
    let myDiv = document.getElementById("results");
    
    myArr.map((products) => {
       
        let images_arr = products.images;
        console.log(images_arr);
        let img = document.createElement("img");
        // img.src = images_arr[4];
        if(images_arr.length!=1){
        createImageCarousel(images_arr , img);
        }
        else{
          img.src = images_arr[0];
        }
        let image = document.createElement("div");
        image.setAttribute('class' ,'container')
        img.style.width ="300px"
        img.style.height="350px"
        image.append(img);
        
  
        
    
        
        let div = document.createElement("div");
      div.innerHTML = `<strong>${products.id} - ${products.title} <br></strong>`;
      div.style.fontWeight = 900
      div.style.fontSize = "20px"
      image.append(div);
      let div_des = document.createElement("div");
      div_des.innerText = products.description;
      div_des.style.borderBottom = "1px solid grey"
      image.append(div_des);
      let price = document.createElement("div");
      price.innerHTML =`--Stock-${products.stock} <strong>--||  ₹ ${products.price}</strong>  FOR EACH`
      price.style.color = "darkgreen"
      price.style.fontWeight = 500
      image.append(price);
      let discount = document.createElement("div");
      discount.innerHTML = `${products.discountPercentage}% OFF| Use WELCOME50`
      discount.style.color ="brown"
      discount.style.fontWeight = 600;
      image.append(discount);
     
      //   info.append(div);
     
      myDiv.append(image)
      div.setAttribute('class','boxes');
    });
  });


  
function createImageCarousel(images ,img) {

    console.log(images);
  console.log("hello");
    let i = 0;

  
    setInterval(function(){ 
      
       
      if(i == 0) {
        img.className= "fade-in-image";
        
      } else if(i == images.length) {
        
        
        img.className = "fade-out-image";
        img.className = "fade-in-image";
        i = 0;
      } else {
       
        img.className = "fade-out-image";
        img.className = "fade-in-image";
      }
    
      img.src = images[i];
      
      i++;
  
    }, 3000);
}