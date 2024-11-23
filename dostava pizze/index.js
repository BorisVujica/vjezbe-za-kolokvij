const express=require('express');
const app=express();
const path=require('path');

const port=3000;
app.listen(port,error=>{
    if(error){
        console.error(`greska tijeko pokretanje servera ${error.message}`);

    }else{
        console.log(`server je pokrenut na http://localhost:${port}`)
    };
    
});
app.get('/',(req,res)=>{
    res.sendfile(path.join(__dirname,'public','index.html'));
});
app.get('/about',(req,res)=>{
    res.sendfile(path.join(__dirname,'public','about.html'));
});
app.get('/users',(req,res)=>{
    res.json([
        {
            "id": 1,
            "ime": "boris",
            "prezime": "vujica"
          },
          {
            "id": 2,
            "ime": "robi",
            "prezime": "vujica"
          },
          {
            "id": 3,
            "ime": "filipa",
            "prezime": "bebek"
          }
    ]);
});
