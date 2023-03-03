const items=document.getElementById('container')
window.addEventListener("DOMContentLoaded",(e)=>{

  e.preventDefault()
  
  axios.get("https://crudcrud.com/api/22f57283c9dd459499739f969b2346ea/savedata")
  .then((res)=>{
      console.log(res)
      const items=document.getElementById('container')
      console.log(res.data.length)
      for(var i=0;i<res.data.length;i++)
      {
        let list = document.createElement('li');
        list.className = "list-group-item";
        data = document.createTextNode(`${res.data[i].name}-${res.data[i].email}-     
        ${res.data[i].phone}`)
        list.appendChild(data);
        items.appendChild(list);
      
        const button = document.createElement('button')
        const btnname = document.createTextNode("Delete")
        button.appendChild(btnname)
        button.className = "delete";
        list.appendChild(button)
        const editbtn=document.createElement('button')
        const editname=document.createTextNode("Edit")
        editbtn.appendChild(editname)
        list.appendChild(editbtn)
        editbtn.className = "edit"; 
      }

  }).catch((err)=>{
      alert("error")
  })

})

items.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete'))
  {
    confirm("Are You Sure!!!")
    e.target.parentElement.remove();
  }
})
  
const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", savedata) 

function savedata(event){
  event.preventDefault(); // Prevents the form from submitting normally

  // Get the values from the form fields
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const obj={
    name,
    email,
    phone,
  }
    axios.post("https://crudcrud.com/api/22f57283c9dd459499739f969b2346ea/savedata/",obj)
    .then((res)=>{
        alert("submitted")
        console.log("Submit")

    }).catch((err)=>{
        alert("error")
    })
    
}