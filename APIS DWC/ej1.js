const body = document.getElementById('body')

navigator.geolocation.getCurrentPosition((pos)=>{
    latitud = document.createElement('p')
    latitud.textContent = `Latitud: ${pos.coords.latitude}`
    body.appendChild(latitud)
    if(pos.coords.latitude >= 100 || pos.coords.latitude >0){
        body.style.backgroundColor = "blue"
    }
})