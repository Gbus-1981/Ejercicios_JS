document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const edad = parseInt(document.getElementById('edad').value);
    const tieneCedulaVigente = document.getElementById('cedulaVigente').value === 'true';
    const tipoCedula = document.getElementById('tipoCedula').value;
    const ahorroUF = parseFloat(document.getElementById('ahorroUF').value);
    const porcentajeVulnerabilidad = parseInt(document.getElementById('vulnerabilidad').value);

    const mensaje = puedePostularAlSubsidio({
        edad,
        tieneCedulaVigente,
        tipoCedula,
        ahorroUF,
        porcentajeVulnerabilidad
    });

    document.getElementById('resultado').textContent = mensaje;
});

function puedePostularAlSubsidio(postulante) {
    const {
        edad,
        tieneCedulaVigente,
        tipoCedula,
        ahorroUF,
        porcentajeVulnerabilidad
    } = postulante;

    if (edad < 18) {
        return "❌ No puede postular: debe ser mayor de 18 años";
    }

    if (!tieneCedulaVigente) {
        return "❌ No puede postular: debe tener cédula vigente";
    }

    if (tipoCedula !== 'chilena' && tipoCedula !== 'extranjero') {
        return "❌ No puede postular: tipo de cédula inválido";
    }

    if (ahorroUF < 4) {
        return "❌ No puede postular: debe acreditar al menos 4 UF de ahorro";
    }

    if (porcentajeVulnerabilidad > 70) {
        return "❌ No puede postular: no pertenece al 70% más vulnerable";
    }

    return "✅ ¡Puede postular al subsidio!";
}
