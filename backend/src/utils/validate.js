const validateEmailAndPassword = (email, password) => {
  if (!email || !password) {
    const err = new Error('Email and password are required');
    err.status = 400;
    throw err;
  }
};

module.exports = {
  validateEmailAndPassword
};
