function shahriar(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("shahriars")
        },2000)
    })
}
async function msg()
{
    const msg=await shahriar()
    console.log("hello : ",msg)
}
msg();

app.use(express.static('public'));