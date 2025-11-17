let f_name = document.getElementById("name");
let f_email = document.getElementById("email");
let f_mobile = document.getElementById("mobile");
let userform = document.getElementById("userForm");

let errName = document.getElementById("nameErr");
let errEmail = document.getElementById("emailErr");
let errMobile = document.getElementById("mobileErr");

const url="https://node-crud-api-0n4d.onrender.com";


// read the userid from the router query
let urlParams =new URLSearchParams(window.location.search)
let id = urlParams.get("userId")
console.log(`user id =`,id)


// submit event listner
userform.addEventListener("submit", async (e) => {
    e.preventDefault();
    let user = {
        name: f_name.value,
        email: f_email.value,
        mobile: f_mobile.value
    }
    
    if (validate(user)){
        console.log(`new user=`, user);
        await fetch(`${url}/api/user/update/${id}`,{
            method:"PUT",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(user)
        }).then(out => out.json())
        .then(res =>{
            alert(res?.msg)
            window.location.href ="/13. CRUD Projects/index.html";
        })
        
    }else{
        console.error("error int the form inputs ");
    }
   
})

//validate

function validate(user){
    let isvalid =true;
     if (!user?.name) {
        errName.innerText = "Name is required";
        errName.style.color = "red";
        isvalid=false;
    } else if (!/^[a-zA-Z ]+$/.test(user?.name)) {
        errName.innerText = "invalid name format";
        errName.style.color = "red";
        isvalid=false;  
    }

    if (!user?.email) {
        errEmail.innerText = "Email is required";
        errEmail.style.color = "red";
        isvalid=false;
    } else if(!/\S+@\S+\.\S+/.test(user?.email)){
        errEmail.innerText = "invalid email format";
        errEmail.style.color = "red";
        isvalid=false;
    }

    if (!user?.mobile) {
        errMobile.innerText = "Number is required";
        errMobile.style.color = "red";
       isvalid=false;
    }else if(!/^\d{10}$/.test(user?.mobile)){
         errMobile.innerText = "Number is invalid";
         errMobile.style.color = "red";
         isvalid=false;
    }
        
    

    setTimeout(()=>{
        errEmail.innerText="",errName.innerText="",errMobile.innerText=""
    },3000)


    return isvalid;

}



// read single user data from database ref in userid

async function getUserById(id) {
    await fetch(`${url}/api/user/single/${id}`)
    .then (out => out.json())
    .then(res =>{
        console.log(`single user = `,res)
        f_name.value = res?.user.name
        f_email.value = res?.user?.email
        f_mobile.value = res?.user?.mobile
    }).catch(err => console.error(err?.data?.msg))
         
}
getUserById(id)