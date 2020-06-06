const http = require('./app');
const PORT = 3000;

http.listen(PORT, () => {
  console.log(`Listen port ${PORT}`);
});
