const API_URL = "https://my-json-server.typicode.com/FreSauce/json-ipl/data";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    data.sort((a, b) => a.NRR - b.NRR);
    const tbody = document.querySelector("#pointsTable tbody");
    data.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${10 - index}</td>
        <td>${team.Team}</td>
        <td>${team.Matches}</td>
        <td>${team.Won}</td>
        <td>${team.Lost}</td>
        <td>${team.Tied}</td>
        <td>${team.NRR.toFixed(3)}</td>
        <td>${team.Points}</td>
      `;
      tbody.appendChild(row);
    });
  });
