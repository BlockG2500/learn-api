const express = require('express');
const app = express();
// Sample data
const applications = [
  { id: 1, status: 'pending' },
  { id: 2, status: 'approved' },
  { id: 3, status: 'rejected' },
];

// API endpoint to retrieve application statuses
app.get('/api/applications', (req, res) => {
  const applicationStatuses = applications.reduce((acc, cur) => {
    acc[cur.id] = cur.status;
    return acc;
  }, {});
  res.json(applicationStatuses);
});

// Serve the HTML file
app.use(express.static('public'));

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
