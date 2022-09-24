const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const dataForm = {
    email: email.value,
    password: password.value,
  };
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('Всі поля повинні бути заповнені!');
  }
  event.currentTarget.reset();
};