// recupero il pulsante dal DOM
const calcola = document.getElementById("calcola");
const annulla = document.getElementById("annulla");

//recupero il div in cui mostrare il risultato
const risultato = document.getElementById("result");

//facciamo rimanere in ascolto dell'evento click il pulsante
calcola.addEventListener("click", (e) => {
  e.preventDefault();

  // vado a recuperare i valori dei campi della form
  const km = document.getElementById("km").value;
  const eta = document.getElementById("eta").value;
  const name = document.getElementById("name").value;

  // logica
  // calcoliamo il prezzo base
  const basePrice = 0.21 * km;

  let prezzoFinale = 0;

  if (eta < 18) {
    prezzoFinale = basePrice * 0.8;
  } else if (eta < 65) {
    prezzoFinale = basePrice * 0.6;
  } else {
    prezzoFinale = basePrice;
  }

  risultato.innerHTML = `
  <table border="1" class= 'col-12 table-bordered'>
      <thead>
        <tr>
          <th>Nome e Cognome</th>
          <th>Km da percorrere</th>
          <th>Età del passeggero</th>
          <th>Prezzo finale (€)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${name}</td>
          <td>${km} km</td>
          <td>${eta}</td>
          <td>${prezzoFinale.toFixed(2)} €</td>
        </tr>
      </tbody>
    </table>`;
});

annulla.addEventListener("click", (e) => {
  e.preventDefault();

  //reset del form
    document.getElementById('myForm').reset();

    //pulizia del risultato 
     risultato.innerHTML = '';
});
