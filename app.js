function calcularPropinas() {
    const monto = parseFloat(document.getElementById("monto").value);
    const porcentaje = parseFloat(document.getElementById("porcentaje").value);

    if (isNaN(monto) || isNaN(porcentaje)) {
        alert("Por favor, ingresa valores validos.");
        return;
    }

    const propina = (monto * porcentaje) / 100;
    const total = monto + propina;

    document.getElementById("resultado").textContent = `Propina: $${propina.toFixed(2)} | Total: $${total.toFixed(2)}`;
    
}