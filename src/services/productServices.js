const db = require('../db/models');


const productService = {
  async create(data) {
    const result = await db.products.create(data);
    return result;
  },
  
  async read(_req, _res) {
   const result =  await db.products.findAll();
   return result;
  },

  async update(id, data) {
    console.log(id);
    const product = await db.products.findByPk(id);

    if (!product) {
      throw new Error('Produto não encontrado.');
    }
    const result = await db.products.update(data, { where: { id } });
    return result;
  },
  async delete(id) {
    const product = await db.products.findByPk(id);

    if (!product) {
      throw new Error('Produto não encontrado.');
    }
    const result = await db.products.destroy({ where: { id } });
    return result; 
  },

}

module.exports = productService;