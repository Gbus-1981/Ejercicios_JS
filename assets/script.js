function convert() {
    const amountUSD = parseFloat(document.getElementById("amount").value);
    const tipoCambio = 745;
    const result = document.getElementById("resultado");

    if (!isNaN(amountUSD) && amountUSD >= 0) {
        const amountCLP = amountUSD * tipoCambio;
        result.textContent = `Equivale a ${amountCLP.toLocaleString("es-CL", { style: "currency", currency: "CLP", minimumFractionDigits: 0 })}.- CLP.`;
    } else {
        result.textContent = "Por favor, ingresa un monto válido.";
        result.style.color = "red";
    }
}