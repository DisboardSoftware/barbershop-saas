const express = require('express');
const { authRequired } = require('../middleware/auth');
const { tenantScope } = require('../middleware/tenantScope');
const { requireRole } = require('../middleware/rbac');
const { listUsers, createUser } = require('../services/userService');

const router = express.Router();
const validRoles = ['super_admin', 'admin', 'collaborator', 'recepcao', 'financeiro'];

router.get('/users', authRequired, tenantScope, requireRole('super_admin', 'admin'), async (req, res, next) => {
  try {
    const users = await listUsers(req.tenantId);
    res.json({ users });
  } catch (error) {
    next(error);
  }
});

router.post('/users', authRequired, tenantScope, requireRole('super_admin', 'admin'), async (req, res, next) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({ error: 'email, password and role are required' });
    }
    if (!validRoles.includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    const user = await createUser({ tenantId: req.tenantId, email, password, role });
    return res.status(201).json({ user });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
