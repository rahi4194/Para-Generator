const input=document.getElementById("noWords");
const container=document.querySelector(".container");

const generateData=(n)=>{
    let s="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let text="";
    for(let i=0;i<n;i++){
         text+=s[(Math.random()*25).toFixed(0)]
    }
    return text;
}
let noOfWords;
const getData=()=>{
    noOfWords=Number(input.value); 
    const para=document.createElement("p");
    let data="";
    for(let i=0;i<noOfWords;i++){
        data+=generateData((Math.random()*15).toFixed(0)).toLowerCase();
        data+=" ";

    }
    para.innerText=data;
    para.setAttribute("class","paras");
    container.append(para);

}