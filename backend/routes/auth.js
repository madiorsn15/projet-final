const express = require('express');
const { body } = require('express-validator');
const authController = require('../controllers/authController');
const { protect } = require('../middleware/auth');
const { validateRegister, validateLogin, validate } = require('../middleware/validation');

const router = express.Router();

router.post('/register', validateRegister, authController.register);
router.post('/login', validateLogin, authController.login);
router.post('/logout', protect, authController.logout);
router.get('/me', protect, authController.me);
router.patch('/change-password', protect, [
  body('currentPassword').notEmpty().withMessage('Mot de passe actuel requis.'),
  body('newPassword')
    .isLength({ min: 6, max: 128 }).withMessage('6 à 128 caractères.')
    .matches(/\d/).withMessage('Doit contenir au moins un chiffre.'),
  validate,
], authController.changePassword);

module.exports = router;
