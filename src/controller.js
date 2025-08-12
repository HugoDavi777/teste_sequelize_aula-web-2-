const discovers = require("./models/discovers");

async function createDiscover(request, reply) {
  // const discover = {
  //   name: "Descobrimento da Gravidade",
  //   age: 1687,
  // };
  const discover = request.body;

  try {
    const replyDB = await discovers.create(discover);
    reply.json(replyDB);
  } catch (error) {
    reply.json({ error: error.message });
  }
}

async function getAllDiscovers(request, reply) {
  try {
    const replyDB = await discovers.findAll();
    reply.json(replyDB);
  } catch (error) {
    reply.json({ error: error.message });
  }
}

async function findDiscover(request, reply) {
  try {
    const replyDB = await discovers.findByPk(request.params.id);

    if (replyDB != null) reply.json(replyDB);
    else reply.json("Discover not found!");
  } catch (error) {
    reply.json({ error: error.message });
  }
}

async function deleteDiscover(request, reply) {
  try {
    const replyDB = await discovers.destroy({
      where: { id: request.params.id },
    });

    if (replyDB == 1) reply.json("Delete successfully!");
    else reply.json("Discover not found!");
    
  } catch (error) {
    reply.json({ error: error.message });
  }
}

async function updateDiscover(request, reply){
  
  const {name, age} = request.body;

  try{
    const replyDB = await discovers.update(
      {name, age},
      {
        where: { id: request.params.id },
      }
    )
  }catch(error){
    reply.json({error: error.message});
  }
}



module.exports = {
  createDiscover,
  getAllDiscovers,
  findDiscover,
  deleteDiscover,
  updateDiscover
};
