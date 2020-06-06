const http = require('./app');
const PORT = 5000;

http.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});
