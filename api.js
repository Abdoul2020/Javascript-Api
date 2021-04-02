const profile =new Profile();

window.onload = config;
let controller;

function config() {
    controller = new UI();
}

//const ui=new UI();

const searchprofile= document.querySelector('#searchprofile');
//const text= document.querySelector('#alert');

searchprofile.addEventListener('keyup',(event)=>{

    controller.cleanboard();

let tet=event.target.value;

if(tet!==''){
profile.getprofile(tet).then(res=>{

if(res.profile.length===0){

    controller.showalert(tet);

}
else{
    //console.log(res);
    //console.log(ui.showprofile(res));
    controller.showprofile(res.profile[0]);
    controller.showtodo(res.todo);
}

})
.catch(err=>{
    controller.showalert(tet);
})

}
});
