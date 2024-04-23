const mostrarreloj = () => {
    let fecha = new Date();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

}

setInterval(mostrarreloj, 1000); 