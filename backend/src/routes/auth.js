const express = require('express');
const bcrypt = require('bcryptjs');
const { authRequired } = require('../middleware/auth');
const { validateEmailAndPassword } = require('../utils/validate');
const { findByEmail } = require('../services/userService');
const { createSession, revokeSessionByToken } = require('../services/sessionService');

const router = express.Router();

router.post('/auth/sign-in', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    validateEmailAndPassword(email, password);

    const user = await findByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const session = await createSession(user.id);

    return res.json({
      token: session.token,
      user: {
        id: user.id,
        tenantId: user.tenantId,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    return next(error);
  }
});

router.post('/auth/sign-out', authRequired, async (req, res, next) => {
  try {
    await revokeSessionByToken(req.session.token);
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

router.get('/auth/me', authRequired, async (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
