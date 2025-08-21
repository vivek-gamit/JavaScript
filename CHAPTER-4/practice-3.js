let isLoggedIn;
let isAdmin;

function company(isLoggedIn,isAdmin){
    if(isLoggedIn == true && isAdmin == false){
        return "You are already login in this system";
    }else if(isAdmin && isLoggedIn){
        return "You are admin now!!";
    }else{
        return "You don't have an access of this system "
    }
}

console.log(company(true,false));//loggin
console.log(company(true,true));//admin
console.log(company(false,false));//fake
