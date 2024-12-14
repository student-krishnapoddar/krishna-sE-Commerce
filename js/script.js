function myform() {
  var juser,jpass;
  juser = document.getElementById('user');
  jpass = document.getElementById('pass');
  if(juser.value == "" || jpass.value == "") {
      alert("form is invalid");
  } else {
      if(juser.value == "krishnapoddar504king@gmail.com" && jpass.value == "123") {
          // alert("Welcom to login page");
          window.location="https://krishnatravels.netlify.app";
      }
      else {
          alert("user and password don't math");
      }
  }
}

function produclist() {
  var mycontainer = document.getElementById("productlistplace");
  fetch("https://dummyjson.com/products").then((d) => {
      return d.json();
    })
    .then((p) => {
      // console.log(p.products);
      var myarr = p.products;
      var newarr = myarr.map((d) => {
        if(d.id===6) {
            return `<div class="card col-md-3 mt-3" style="width: 18rem; margin: 20px;">
        <img src="${d.images[0]}" class="card-img-top cush" style="height: 300px">
        <div class="card-body">
          <h5 class="card-title">${d.brand}</h5>
          <p class="card-text">${d.description}</p>
          <a href="#" class="btn btn-primary">Add Product</a>
        </div>
        <h3>Price: ${d.price}$</h3>
      </div>`;
        }
        return `<div class="card col-md-3 mt-3" style="width: 18rem; margin: 20px;">
        <img src="${d.images[0]}" class="card-img-top cush">
        <div class="card-body">
          <h5 class="card-title">${d.brand}</h5>
          <p class="card-text">${d.description}</p>
          <a href="#" class="btn btn-primary">Add Product</a>
        </div>
        <h3>Price: ${d.price}$</h3>
      </div>`;

      });
      mycontainer.innerHTML=newarr.join("");
    })
}
produclist();

// ------------------------------------------

function electroniceslist() {
  var mycontainer = document.getElementById("electroniceslistplace");
  fetch("https://fake-store-api.mock.beeceptor.com/api/products").then((d) => {
      // console.log(d.json());
      return d.json();
    }).then((p) => {
      console.log(p);
  
      
      var newarr = p.map((d) => {
        return `<div class="card col-md-3 mt-3" style="width: 18rem; margin: 20px;">
        <img src="${d.image}" class="card-img-top cush">
        <div class="card-body">
          <h5 class="card-title">${d.brand}</h5>
          <p class="card-text">${d.description}</p>
          <a href="#" class="btn btn-primary">Add Product</a>
        </div>
        <h3>Price: ${d.price}$</h3>
      </div>`;

      });

      mycontainer.innerHTML=newarr.join("");
    })
}
electroniceslist();