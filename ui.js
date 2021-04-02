class UI{
    constructor(){
 this.profilecontainer=document.querySelector("#profilecontainer");
 this.alert=document.querySelector("#alert");
 }
   
  showprofile(profile){
this.profilecontainer.innerHTML=`
<div class="card card-body">
    <div class="row">
     <div class="cold-md-3">
<a href="https://placeholder.com"><img src="https://via.placeholder.com/150x150" class="img-thumbnail"></a>

</div>
<div class="cold-md-9">
<h4>Contact</h4>

<ul  class="list-group">

<li class="list-group-item">

username:${
profile.username

}
</li>
<li class="list-group-item">
email:${
profile.email

}
</li>
<li class="list-group-item">
adress:${
profile.address.street}
${profile.address.city}
    ${profile.address.zipcode}
        ${profile.address.suite}

}
</li>
<li class="list-group-item">
phone:${
profile.phone

}
</li>
<li class="list-group-item">
website:
${profile.website}
</li>
<li class="list-group-item">
company:${
profile.company.name}
${profile.company.catchPhrase}
    ${profile.company.bs}

</li>
</ul>
<h4 class="mt-4"> Todo list </h4>

<ul id="todo" class="list-group" >
</ul>
</div>
</div>
</div>`;
 }




 showtodo(todo){
     let html=" ";
     todo.forEach(item => {
         if(item.completed){
             html+=`
           
  <li class="list-group-item bg-sucess">
  
                 ${item.title}
  </li>
             
             `;}
             else{
            html+=`
            
 <li class="list-group-item bg-secondary">
 
                ${item.title}
 </li>
 
`;
         }
         
     });
this.profilecontainer.querySelector('#todo').innerHTML=html;

 }

showalert(text){
this.alert.innerHTML=`${text} is not found.`;
}

cleanboard(){
  this.profilecontainer.innerHTML="";
  this.alert.innerHTML="";
}

}


