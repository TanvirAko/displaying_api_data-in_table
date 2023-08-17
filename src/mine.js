//corrit function strkcher
const corrit=(a)=>(b)=>(c)=>(d)=>(e)=>(f)=>{
return a+b+c+d+e+f
}
console.log(corrit(1)(2)(3)(1)(2)(3));
//curried function part 2
function info(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return function(f){
                        return a+b+c+d+e+f
                    }
                }
            }
        }
    }
}
console.log(info(600)(500)(400)(300)(200)(100))
//call back function for stackchers
const callbacks=(a,b,c,texy ,tex)=>{
    return `${texy()} Tanvir akon ${tex()} ${a+b+c}     `
}
const call= callbacks(100,200,300,function(){return `hello`},function(){return `world`})

console.log(call)
//call back function for stackchers part2



const callbacks2=(a,b,c,d,tx,tx2)=>{
    return ` ${a+b+c+d} ${tx}  ${tx2}`
    }
    const txp=()=>{
        return `    tanvir akon`
    }
    const txp2=()=>{
        return `dfurgbjaruig`
    }
    const retur =callbacks2(10,10,10,txp(),txp2())
console.log(retur);

///////////////////
const callbacks3=(name,age,id,phon)=>{
    return `name= ${name} age= ${age} id:${id()} phone:${phon()}`
}
console.log(callbacks3("tanbir akon",20,function(){
    return `099938884i`
},function(){
    return `01741191776`
}));
//asynce await function

let contint='hello node js'
 const async=async()=>{
const data=await contint;
console.log(data)
 }
 console.log("item 1");
 console.log("item 2");
 console.log("item 3");
 console.log("item 4");
 async();
 console.log("item 1");
 console.log("item 1");


 //promize function 
 let age= 6;
const primo= new Promise((resolve, reject)=>{
    if(age>21){
        resolve('tpmar boyse hoisai')
    }
    else{
        reject('tomar boyse hoinai')
    }
})
primo .then((reg)=>{
    console.log(reg);
}).catch((error)=>{
    console.log(error);
})
//api surver data lode
const getuser= async ()=>{
    await fetch("http://my-json-server.typicode.com/deveripon/users-api/users")
    .then((reg)=> reg.json())
    .then((reg)=>{
        let contint="";
        reg.map((item,index)=>{
            contint+=`<h2>${item.id}</h2>
            <h4>${item.title}</h4>
            <img src="${item.image}" alt="">
            
            `
            img.innerHTML=contint;
        })
    })
    .catch((error)=>{
        console.log(error);
    })
}
getuser()
const img= document.getElementById('img')
console.log(img);
//////////////////////////////////////////////////////////////////////////////////
const br =document.querySelector(".br")
br.innerHTML=`<hr>`