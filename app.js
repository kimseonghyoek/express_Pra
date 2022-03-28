const express = require("express");
const nunjucks = require("nunjucks");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const { sequelize, User } = require("./models");
const app = express();
const post = require("./routes/post")

app.set("view engine", "html");
nunjucks.configure("views", {
  express: app,
  watch: true,
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/js", express.static(__dirname + "/js"));
app.use("/", express.static(__dirname + "/public"));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/", post);

app.set("port", 3000);

app.listen(app.get("port"), () => {
  console.log("3000번대 포트에서 활동");
  console.log(`http://localhost:3000`);
});
