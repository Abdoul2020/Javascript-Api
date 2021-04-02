class Profile{
    constructor(){
    
        this.clientid=" ",
        this.clientsecret=" "
    }
    
    async getprofile(username){
    const profileResponse=await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    
    const profile=await profileResponse.json();
    
    
    const toResponse=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);
    
    
    const  toprofile=await toResponse.json();
    
    return{
        profile,
        toprofile
    }
    
    }
    
    }