const { findValidSessionByToken } = require('../services/sessionService');

const authRequired = async (req, res, next) => {
  try {
    const header = req.headers.authorization || '';
    const [scheme, token] = header.split(' ');

    if (scheme !== 'Bearer' || !token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const session = await findValidSessionByToken(token);
    if (!session) {
      return res.status(401).json({ error: 'Invalid or expired session' });
    }

    req.session = session;
    req.user = {
      id: session.user.id,
      email: session.user.email,
      role: session.user.role,
      tenantId: session.user.tenantId
    };

    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  authRequired
};
