function boshlash() {
    const son1 = Math.floor(Math.random() * 10) + 1;
    const son2 = Math.floor(Math.random() * 10) + 1;
  
    document.getElementById("oyinchi1").textContent = `1-o'yinchi soni: ${son1}`;
    document.getElementById("oyinchi2").textContent = `2-o'yinchi soni: ${son2}`;
  
    let natija = "";
  
    if (son1 > son2) {
      natija = "1-o'yinchi g'olib!";
    } else if (son2 > son1) {
      natija = "2-o'yinchi g'olib!";
    } else {
      natija = "Durrang!";
    }
  
    document.getElementById("yakuniyNatija").textContent = natija;
  }