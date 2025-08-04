const database = require("./database");
const discovers = require("./models/discovers");

async function getAllScientists(request, reply) {
  try {
    const sql = "select * from scientists";
    const replyDB = await database.query(sql);

    reply.json(replyDB.rows);
  } catch (error) {
    reply.json({ error: error.message });
  }


}

async function createDiscover(request,reply) {
  const discover = {
    name: "Descobrimento da gravidade",
    age:1687,
  }
  try{
    const replyDB = await discovers.create(discover)
    reply.json(replyDB)
  }catch(error){
    reply.json({error:error.message})
  }
}

module.exports = { getAllScientists, createDiscover };
