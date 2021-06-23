let dropdown= document.getElementById("dropdown");
var price=0;
var count=0;

if(document.getElementById("dropdown").innerText==="Select a movie"){
  document.getElementById("numbers").innerText=`Please Select a Movie`
}


dropdown.addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("myDropdown").classList.add("show");
});

window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  var temp=document.getElementById("myDropdown");
  
  temp.addEventListener("click",function(e){
    dropdown.innerText=e.target.innerText;  
    //console.log(e.target.innerText);
    var str=/\$(\d+)/;
    price=(/\d+/).exec(str.exec(e.target.innerText))
    document.getElementById("numbers").innerText=`You have selected ${count} seats for a price of \$${count*price}`;
    //console.log(parseInt(price)+10);
  })


  function myfunction(event) { 
    if(event.target.classList.contains("seats")){
      event.target.classList.toggle("selected");
    }
    count=(document.getElementsByClassName("selected").length)-1;
    if(document.getElementById("dropdown").innerText!=="Select a movie")
      document.getElementById("numbers").innerText=`You have selected ${count} seats for a price of \$${count*price}`;
    
    
    
  }

  

