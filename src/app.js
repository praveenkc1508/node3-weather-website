const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const port = process.env.PORT || 3000;

//Define path for express config
const path = require('path');
const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views'); 
const partialPath = path.join(__dirname,'../templates/partials');

console.log(publicDirectoryPath);

const app = express();
//Set up static directory path to server
app.use(express.static(publicDirectoryPath));
//set up handler engine and views location 
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialPath);

app.get('/home',(req,res)=>{
    res.render('index',{
        name:"Praveen KC",
        title:"Home page"
    })
})

 

var location1 = '';
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }
  
    geocode(req.query.address, (error, { latitude, longitude, location }) => {
        if (error) {
            return res.send({ error })
        }
       
        forecast(req.query.address, (error, {forecast}) => {
            console.log('Error', error)
            console.log('Data', forecast)
            this.location1 = forecast;
          })

       
            res.send({
                location,
                latitude,
                longitude,
                address: req.query.address,
                forecast :  this.location1
                 
            })
        })
    })

 


app.get('/home',(req,res)=>{
    res.render('index',{
        name:"Praveen KC",
        title:"Weather APP"
    })
})

app.get('/products',(req,res)=>{
  if(!req.query.search){
    return res.send({
        error: 'You must provide search term'
    })
  }
    res.send({
        products:[]
    })

})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:"Praveen KC",
        title:"About me "
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        name:"Help page",
        title:"Help content goes here again"
    })
})





// console.log(__dirname);
// console.log(__filename);
// app.get('',(req,res)=>{
//     res.send("<h1>Hello Express!</h1>")

// })
// app.get('/help',(req,res)=>{
//     res.send([{
//         name:'Andrew',
//         age:27

//     },{
//         name:'Praveen K C',
//         age:47
//     }])

// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>About page</h1>');
// })

 
app.get('/help/*',(req,res)=>{
    res.render('error',{
        error:"Error",
        title:"Help Article Not Found!"
    })

})

app.get('*',(req,res)=>{
    res.render('error',{
        error:"Error",
        title:"Page Not Found!"
    })

})

app.listen(port,()=>{
    console.log(" Server is up and running! -- "+port);
})

