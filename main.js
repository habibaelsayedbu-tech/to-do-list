let userContentInput=document.getElementById("userContentInput")
let allContent=document.getElementById("home")
let searchInput=document.getElementById("searchInput")
let  items=[]
if(localStorage.getItem("test")!=null){
    items=JSON.parse(localStorage.getItem("test"))
    display()
}

function addItem(){
items.push(userContentInput.value )
localStorage.setItem("test",JSON.stringify(items))
console.log(items)
display()
}
function display(){
 let cartona=``;
 for (let i= 0; i < items.length; i++) {
    
     cartona=cartona+`<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content: ${items[i]}</p>
      <i class="fa-sharp fa-solid fa-trash" onclick="remove(${i})"></i>
    </div>
`
 }
 allContent.innerHTML=cartona;

}

function remove(ind){
items.splice(ind,1)

localStorage.setItem("test",JSON.stringify(items))
display()
}
searchInput.addEventListener("input",function(e){
searchItem(e.target.value)
})
function searchItem ( searchValue){
     let cartona=``;
 for (let i= 0; i < items.length; i++) {
    if(items[i].toLowerCase().includes(searchValue.toLowerCase())){
           cartona=cartona+`<div id="homeContent"
      class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
      <p id="itemContent" class="m-0 p-0">Content: ${items[i]}</p>
      <i class="fa-sharp fa-solid fa-trash" onclick="remove(${i})"></i>
    </div>
`
    }
  
 }
 allContent.innerHTML=cartona;
}