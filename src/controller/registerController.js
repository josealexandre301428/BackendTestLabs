const registerService = require('../services/registerServices');

const registerController = {

  async register(req, res) {
    try {
      const response = await registerService.register(req.body);

      return res.status(201).json(response);
    } catch (error) {
      return error.status
        ? res.status(error.status).json({error: error.status, message: error.message })
        : res.status(500).json({error: error.status ,message: error.message });
    }
  },
}

module.exports = registerController;