//  var jinput;
//  var jtbody;
//  var students=[];

//  function loadallobject() {
//     jinput = document.querySelectorAll("input,button");
//     jtbody = document.getElementById('mydata');
//     console.log(jinput);
//  }
//  loadallobject();

// jinput[3].addEventListener("click",()=>{
//         students.push({name:jinput[0].value,course:jinput[1].value,phoneno:jinput[2].value});
//         console.log(students);
//         localStorage.setItem("studentlist", JSON.stringify(students));
//         sessionStorage.setItem("mysession", JSON.stringify(students));
// });
//  var getdatavalue;
//  jinput[4].addEventListener("click", ()=> {
//     var dmap;
//     getdatavalue = JSON.parse(localStorage.getItem('studentlist'));
//     console.log(getdatavalue);
//     if(getdatavalue) 
//         {
//         dmap = getdatavalue.map((d) => {
//             return `<tr >
//                         <td>${d.name}</td>
//                         <td>${d.course}</td>
//                         <td>${d.phoneno}</td>
//                     </tr>`;
//         });
//     }
//         jtbody.innerHTML = `${getdatavalue ? dmap.join("") : "<tr><td colspan='3'>data not found</tr></td>"}`;
//  });


function abc() {
    var mycontainer;

    mycontainer=document.getElementById("productlistplace1");
    var mydata = JSON.parse(localStorage.getItem("productItem"));
    console.log(mydata);
    var dmap=mydata.map((d) => {
        return `<div class="card col-md-3 mt-3" style="width: 18rem; margin: 20px;">
        <img src="${d.image}" class="card-img-top cush">
        <div class="card-body">
          <h5 class="card-title">${d.item}</h5>
          <p class="card-text">${d.description}</p>
          <a href="#" class="btn btn-primary">Add Product</a>
        </div>
        <h3>Price: ${d.price}$</h3>
        <h3>Phone No.: ${d.phone}</h3>
      </div>`;
    });
    mycontainer.innerHTML+=dmap.join(" ");
}
abc();