document.getElementById('contactSubmitBtn').addEventListener('click', (e) => {
  e.preventDefault();
  handleContactSubmit();
});

const handleContactSubmit = async () => {
  const body = {
    fullName: document.getElementById('formFullName').value,
    email: document.getElementById('formEmail').value,
  };

  try {
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      document.getElementById('emailForm').reset();
    }
  } catch (error) {
    console.log('error', error);
  }
};
