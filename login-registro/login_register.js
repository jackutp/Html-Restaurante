// Cambiar entre Login y Registro
function showLogin() {
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.toggle-btn:nth-child(1)').classList.add('active');
  document.getElementById('loginForm').classList.add('active');
  document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
  document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.toggle-btn:nth-child(2)').classList.add('active');
  document.getElementById('registerForm').classList.add('active');
  document.getElementById('loginForm').classList.remove('active');
}

// Registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  // Guardar en localStorage
  const user = { name, email, password };
  localStorage.setItem('luxuryUser', JSON.stringify(user));
  
  document.getElementById('registerMessage').textContent = '¡Cuenta creada con éxito!';
  document.getElementById('registerMessage').style.color = '#d4af37';
  
  setTimeout(() => {
    showLogin();
    document.getElementById('registerMessage').textContent = '';
  }, 2000);
});

// Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = this.querySelector('input[type="email"]').value;
  const password = this.querySelector('input[type="password"]').value;
  
  const savedUser = localStorage.getItem('luxuryUser');
  
  if (!savedUser) {
    document.getElementById('loginMessage').textContent = 'No existe ninguna cuenta. Regístrate primero.';
    document.getElementById('loginMessage').style.color = '#ff6b6b';
    return;
  }
  
  const user = JSON.parse(savedUser);
  
  if (user.email === email && user.password === password) {
    document.getElementById('loginMessage').textContent = '¡Acceso concedido! Redirigiendo...';
    document.getElementById('loginMessage').style.color = '#d4af37';
    
    setTimeout(() => {
      // Aquí pones la URL de tu página principal
      window.location.href = "dashboard.html"; // crea esta página o cambia la URL
    }, 1500);
  } else {
    document.getElementById('loginMessage').textContent = 'Correo o contraseña incorrectos';
    document.getElementById('loginMessage').style.color = '#ff6b6b';
  }
});