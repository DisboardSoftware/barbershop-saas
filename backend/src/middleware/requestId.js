const { nanoid } = require('nanoid');

const requestId = (req, res, next) => {
  const incoming = req.header('x-request-id');
  const id = incoming && incoming.trim() ? incoming.trim() : nanoid(12);

  req.requestId = id;
  res.setHeader('x-request-id', id);

  next();
};

module.exports = {
  requestId
};
