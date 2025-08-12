const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  username: "postgres",
  password: "123",
  database: "science",
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;

// # Direct connection to the database. Used for migrations
// DIRECT_URL="postgresql://postgres.vvtfxlfxjpsssqctyvcn:[YOUR-PASSWORD]@aws-1-sa-east-1.pooler.supabase.com:5432/postgres"



// supabase:
// DIRECT_URL="postgresql://postgres.uedecgupkgvelhohwczj:[SUA-SENHA]@aws-1-sa-east-1.pooler.supabase.com:5432/postgres"

// const sequelize = new Sequelize({
//   username: "postgresql://postgres.uedecgupkgvelhohwczj",
//   password: "1234",
//   database: "postgres",
//   host: "aws-1-sa-east-1.pooler.supabase.com",
//   dialect: "postgres",
// });
