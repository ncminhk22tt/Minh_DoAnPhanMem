require("dotenv").config()
const app = require("./app")

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server đang chạy trên port: ${PORT}`);
});

console.log({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  db: process.env.DB_NAME
})
