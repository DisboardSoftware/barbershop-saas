const tenantScope = (req, res, next) => {
  if (!req.user || !req.user.tenantId) {
    return res.status(403).json({ error: 'Tenant scope not available for this user' });
  }

  req.tenantId = req.user.tenantId;

  // Placeholder guard: all data access should include tenantId filters.
  req.withTenantScope = (where = {}) => ({ ...where, tenantId: req.tenantId });

  return next();
};

module.exports = {
  tenantScope
};
