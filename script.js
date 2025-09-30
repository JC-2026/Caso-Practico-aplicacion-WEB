// Dataset ficticio
const datos = {
    anios: ["2018", "2019", "2020", "2021", "2022"],
    poblacion: [126, 127, 128, 129, 130],
    nacimientos: [2.1, 2.0, 1.9, 1.8, 1.7]
};

// Gráfico de líneas: Población
new Chart(document.getElementById("graficoLineas"), {
    type: "line",
    data: {
        labels: datos.anios,
        datasets: [{
            label: "Población (millones)",
            data: datos.poblacion,
            borderColor: "#007bff",
            backgroundColor: "#007bff33",
            borderWidth: 2,
            tension: 0.3,
            fill: true
        }]
    },
    options: { responsive: true }
});

// Gráfico de barras: Nacimientos
new Chart(document.getElementById("graficoBarras"), {
    type: "bar",
    data: {
        labels: datos.anios,
        datasets: [{
            label: "Nacimientos (millones)",
            data: datos.nacimientos,
            backgroundColor: "#27ae60",
            borderColor: "#1e8449",
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
    }
});

// Gráfico de pastel: Distribución de nacimientos
new Chart(document.getElementById("graficoPastel"), {
    type: "pie",
    data: {
        labels: datos.anios,
        datasets: [{
            label: "Nacimientos (millones)",
            data: datos.nacimientos,
            backgroundColor: ["#e74c3c", "#f39c12", "#f1c40f", "#27ae60", "#2980b9"]
        }]
    },
    options: { responsive: true }
});
