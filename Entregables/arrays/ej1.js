for (let i = 0; i < 50; i++) {
  let combinacion = [];
  while (combinacion.length < 6) {
    let num = Math.floor(Math.random() * 49) + 1;
    if (!combinacion.includes(num)) {
      combinacion.push(num);
    }
  }
  
  console.log(`Combinación ${i + 1}: ${combinacion.join(", ")}`);
}