function api() {
fetch('/api/applications')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}