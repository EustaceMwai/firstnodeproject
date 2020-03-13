let express = require("express")
let ourApp = express()
ourApp.use(express.urlencoded({extended:false}))
ourApp.get('/', function (req, res){
res.send(`
<form action="/answer" method="POST"> 
<p>What color is the sky on a sunny and and clear day?</p>
<input name= "skyColor" autocomplete="off">
<button>Submit</button>
</form>
`)
})

ourApp.post('/answer', function(req, res){
   
    if(req.body.skyColor == "blue"){
        res.send(`
        <p>Congrats, Correct</p>
        <a href= "/">Back to homePage</a>
        `)

    }else{
        res.send(`
        <p>Sorry, incorrect</p>
        <a href= "/">Back to homePage</a>
        `)

    }

})
ourApp.listen(3000)

