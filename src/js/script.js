document.getElementById('calcola').addEventListener('click', function(e) {
    e.preventDefault();
    
        const nome = document.getElementById('nome').value;
        const km = document.getElementById('km').value;
        const age = document.getElementById('age').value;
        const output = document.getElementById('output');


        // Validazione base: km e age devono essere numeri > 0
        if (km > 0 && age > 0) {
          let prezzo = km * 0.21;

          if (age < 18) {
            prezzo *= 0.8;
          } else if (age > 65) {
            prezzo *= 0.6;
          }

          // Formattazione a due decimali
          prezzo = prezzo.toFixed(2);

          // Mostra in pagina
          output.innerHTML = `
            <p>Nome e Cognome: ${nome}</p>
            <p>Chilometri: ${km}</p>
            <p>Età: ${age}</p>
            <p>Prezzo del biglietto: € ${prezzo}</p>
          `;
        } else {
          output.innerHTML = '<p style="color:red;">Per favore inserisci valori validi maggiori di 0.</p>';
        }
      });