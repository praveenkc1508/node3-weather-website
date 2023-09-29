console.log("Loaded from js file"); 
// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })

// })

// const url = 'http://localhost:3000/weather?address=Bangalore';
// fetch(url).then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else {
//             console.log(data.location);
//            // console.log(data.forecast);
//         }
//     })

// })

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
messageOne.textContent ='There';

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    messageOne.textContent = 'Loading....';
   
     
    const urlWeather = 'http://localhost:3000/weather?address='+search.value;
fetch(urlWeather).then((response)=>{
    
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error)
           // messageOne.textContent =data.location;
        }else {
            console.log(data.location);
            messageOne.textContent =data.location;
            messageTwo.textContent =data.forecast;
           // console.log(data.forecast);
        }
    })

})
})