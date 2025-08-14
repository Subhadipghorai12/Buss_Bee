// role switching
document.querySelectorAll('.role').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.role').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    const role = btn.dataset.role;
    document.getElementById('loginRoleTitle').innerText = (role[0].toUpperCase() + role.slice(1)) + ' Login';
    document.getElementById('displayRole').innerText = role;
  });
});

// Open/Close Create Account Modal
const modal = document.getElementById('modalBackdrop');
document.getElementById('createAccBtn').addEventListener('click', ()=> modal.style.display = 'flex');
document.getElementById('loginOpenBtn').addEventListener('click', ()=> {
  window.scrollTo({top:0, behavior:'smooth'});
  document.querySelector('[data-role].active')?.focus();
  alert('Use the role tabs to select Administrator / Admin / Driver / User, then Sign in.');
});
document.getElementById('closeModal').addEventListener('click', ()=> modal.style.display = 'none');

// Simulate sending OTP
document.getElementById('sendOtpBtn').addEventListener('click', ()=>{
  const id = document.getElementById('newId').value;
  if(!id){ alert('Enter user id or email first'); return; }
  const otp = Math.floor(1000 + Math.random()*9000);
  document.getElementById('newOtp').value = otp;
  alert('Simulated OTP sent: ' + otp + '\n(use this OTP to complete registration)');
});

// Create account logic
document.getElementById('createBtn').addEventListener('click', ()=>{
  const id = document.getElementById('newId').value.trim();
  const otp = document.getElementById('newOtp').value.trim();
  const p1 = document.getElementById('newPwd').value;
  const p2 = document.getElementById('confirmPwd').value;
  if(!id || !otp || !p1 || !p2){ alert('Please fill all fields'); return; }
  if(p1 !== p2){ alert('Passwords do not match'); return; }
  modal.style.display = 'none';
  document.getElementById('user-name').innerText = id;
  document.getElementById('displayName').innerText = id;
  alert('Account created (simulated). Now you can Sign in using the login form.');
});

// Login button
document.getElementById('loginBtn').addEventListener('click', ()=>{
  const id = document.getElementById('userid').value.trim();
  const pwd = document.getElementById('password').value;
  const roleBtn = document.querySelector('.role.active');
  const role = roleBtn ? roleBtn.dataset.role : 'user';
  if(!id || !pwd){ alert('Enter userid and password'); return; }
  document.getElementById('user-name').innerText = id;
  document.getElementById('displayName').innerText = id;
  document.getElementById('displayRole').innerText = role;
  alert('Logged in as ' + role + ' (demo).');
});

// Forgot password
document.getElementById('forgotPwd').addEventListener('click', (e)=>{
  e.preventDefault();
  const uid = prompt('Enter your User ID / Email to receive reset link (simulated):');
  if(uid) alert('Password reset link (simulated) sent to ' + uid);
});

// Contact info
document.getElementById('contactPhone').innerText = '+91-1234567891';
document.getElementById('contactEmail').innerText = 'contact.rds-support@gmail.com';
document.getElementById('contactEmail').href = 'mailto:rdsbusfinder@gmail.com';
