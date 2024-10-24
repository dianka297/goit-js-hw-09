const refs = {
    feedbackFormEl: document.querySelector('.feedback-form'),
    userEmailEl: document.querySelector('input[type="email"]'),
    userMessageEl: document.querySelector('textarea'),
    submitBtnEl: document.querySelector('button[type="submit"]'),
  };
  
  const { feedbackFormEl, userEmailEl, userMessageEl, submitBtnEl } = refs;
  const formData = {
    email: '',
    message: '',
  };
  const localStorageKey = 'feedback-form-state';
  
  feedbackFormEl.addEventListener('input', onInputUserInfo);
  feedbackFormEl.addEventListener('submit', onBtnSubmit);
  
  function onBtnSubmit(event) {
    event.preventDefault();
    if (userEmailEl.value === '' || userMessageEl.value === '') {
      alert('Fill please all fields');
      return;
    } else {
      console.log(formData);
    }
  
    localStorage.removeItem(localStorageKey);
    feedbackFormEl.reset();
  }
  
  function onInputUserInfo(event) {
    formData.email = userEmailEl.value.trim();
    formData.message = userMessageEl.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }
  const savedData = JSON.parse(localStorage.getItem(localStorageKey));
  
  if (savedData) {
    userEmailEl.value = savedData.email ?? '';
    userMessageEl.value = savedData.message ?? '';
  }