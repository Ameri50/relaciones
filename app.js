document.getElementById('userForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = e.target.name.value.trim();
    const age = parseInt(e.target.age.value);
    const paymentInfo = document.getElementById('payment-info');
    const paymentSection = document.getElementById('payment-section');
    const paymentMethods = document.getElementById('payment-methods');
    const socialContainer = document.getElementById('social-container');
  
    if (!name || isNaN(age)) {
      alert('Por favor, completa correctamente los datos.');
      return;
    }
  
    paymentSection.style.display = 'block';
    socialContainer.style.display = 'block'; // ✅ Mostrar redes sociales para todos
  
    if (age < 18) {
      paymentInfo.innerHTML = `
        Hola ${name}, como eres menor de edad, el acceso tiene un costo de <strong>S/ 20.00</strong>.
        Puedes escribirnos por nuestras redes sociales para más información.
      `;
      paymentMethods.style.display = 'none';
    } else {
      paymentInfo.innerHTML = `
        Hola ${name}, como eres mayor de edad, el acceso tiene un costo de <strong>S/ 50.00</strong>.
        Escanea uno de los siguientes QR para pagar o contáctanos por nuestras redes:
      `;
      paymentMethods.style.display = 'flex';
    }
  });
  
  // Código para redireccionar a redes sociales según selección
  const socialSelect = document.getElementById('social-select');
  const socialButton = document.getElementById('social-button');
  const socialButtonContainer = document.getElementById('social-button-container');
  
  socialSelect.addEventListener('change', () => {
    const selected = socialSelect.value;
    let url = '#';
  
    switch (selected) {
      case 'whatsapp1':
        url = 'https://wa.me/51951012633';
        break;
      case 'whatsapp2':
        url = 'https://wa.me/51904208040';
        break;
      case 'instagram':
        url = 'https://ig.me/1NsBcjZBTzkid8p'; // 🔁 reemplaza con tu enlace real
        break;
      case 'facebook':
        url = 'https://web.facebook.com/profile.php?id=61578442203052'; // 🔁 reemplaza con tu enlace real
        break;
      default:
        socialButtonContainer.style.display = 'none';
        return;
    }
  
    socialButton.href = url;
    socialButtonContainer.style.display = 'block';
  });
  