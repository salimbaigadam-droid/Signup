let step=0;
const data={};
const steps=[
["Welcome","Press Next"],
["Username","Username"],
["Email","Email"],
["Password","Password","password"],
["Finish","Create account"]
];

function render(){
 document.getElementById("title").innerText=steps[step][0];
 document.getElementById("subtitle").innerText="";
 const input=document.getElementById("input");
 input.placeholder=steps[step][1];
 input.type=steps[step][2]||"text";
 document.getElementById("bar").style.width=((step+1)/steps.length*100)+"%";
 input.value="";
}

async function next(){
 const input=document.getElementById("input");
 if(step===1)data.username=input.value;
 if(step===2)data.email=input.value;
 if(step===3)data.password=input.value;
 if(step<steps.length-1){step++;render();}
 else{
  const r=await fetch("http://localhost:3000/signup",{
   method:"POST",
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify(data)
  });
  if(r.ok)location.href="https://www.roblox.com";
  else alert("Signup failed");
 }
}
function prev(){if(step>0){step--;render();}}
render();
