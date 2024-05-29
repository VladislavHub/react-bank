// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json('Hello World')
})

// ================================================================

router.get('/welcome', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  return res.render('welcome-page', {
    // вказуємо назву контейнера
    name: 'welcome',
    // вказуємо назву компонентів
    component: [],

    // вказуємо назву сторінки
    title: 'Welcome Page',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})

// Підключіть файли роутів
const auth = require('./auth')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', auth)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
