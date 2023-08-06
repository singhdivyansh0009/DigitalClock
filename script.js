const clock = () =>{
    let a = new Date();
    let h=a.getHours();
    let m=a.getMinutes();
    let s=a.getSeconds();
    document.getElementById("hour").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("sec").innerHTML = s;
    console.log(h,":",m,":",s);
    }
    setInterval(clock,1000);