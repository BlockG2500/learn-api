function api() {
fetch('http://nodejs.le-tran-minh-nh.repl.co/api/post')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const { name, email } = data;
    console.log('Name:', name);
    console.log('Email:', email);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}