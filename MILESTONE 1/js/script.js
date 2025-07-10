

document.getElementById("genera").addEventListener("click", (e) => {
  const km = parseFloat(document.getElementById("km").value);
  const age = parseInt(document.getElementById("age").value);


  e.preventDefault();
        if (km > 0 && age > 0) {
          let prezzo = km * 0.21;

          if (age < 18) {
            prezzo *= 0.8;
          } else if (age > 65) {
            prezzo *= 0.6;
          }

          console.log('Prezzo del biglietto: € ' + prezzo.toFixed(2));
        } else {
          console.log('Errore: inserisci valori validi maggiori di 0.');
        }
      });