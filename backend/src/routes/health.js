const express = require('express');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ ok: true, ts: new Date().toISOString(), requestId: req.requestId });
});

module.exports = router;
