const express = require('express');
const multer = require('multer');
const { authRequired } = require('../middleware/auth');
const { tenantScope } = require('../middleware/tenantScope');
const { requireRole } = require('../middleware/rbac');
const { uploadFile } = require('../services/mediaService');
const env = require('../config/env');

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: env.uploadMaxBytes }
});
const router = express.Router();

router.post(
  '/media/upload',
  authRequired,
  tenantScope,
  requireRole('super_admin', 'admin', 'collaborator'),
  upload.single('file'),
  async (req, res, next) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'file is required' });
      }

      const media = await uploadFile({ file: req.file, userId: req.user.id, tenantId: req.tenantId });
      return res.status(201).json(media);
    } catch (error) {
      return next(error);
    }
  }
);

module.exports = router;
