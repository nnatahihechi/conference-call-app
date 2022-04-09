const express = require('express');
const router = express.Router();
const {saveCallId,getCallId } = require('./controller')


router.post('/api/save-call-id', saveCallId);
router.post('/api/get-call-id/:id', getCallId);

module.exports = router