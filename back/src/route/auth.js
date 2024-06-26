// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const { User } = require('../class/user')

// User.create({
//   email: 'admin@email.com',
//   password: 123,
// })

User.create({
  email: 'user@email.com',
  password: "passwordNew13",
})


// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/signup', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  return res.render('sign-up-page', {
    // вказуємо назву контейнера
    name: 'signup',
    // вказуємо назву компонентів
    component: ['field', 'field-password'],

    // вказуємо назву сторінки
    title: 'Signup page',
    // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

    // вказуємо дані,
    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.post('/signup', function (req, res) {
  const { email, password } = req.body

  console.log('email =', email)
  console.log('password =', password)


  if (email) {
    console.log(email, 'this email')
  }

  if(!email || !password) {
    return res.status(400).json({
      message: "Помилка. Поля відсутні"
    })
  }

  try {
    User.create({ email, password })

    return res.status(200).json({
      message: "Користувач зареєстрованний"
    })
  
  } catch (err) {
    return res.status(400).json({
      message: "Помилка створення користувача"
    })
  }

  
})


// ================================================================

// ↙️ тут вводимо шлях (PATH) до сторінки
// router.get('/recovery', function (req, res) {
//   // res.render генерує нам HTML сторінку

//   // ↙️ cюди вводимо назву файлу з сontainer
//   return res.render('recovery', {
//     // вказуємо назву контейнера
//     name: 'recovery',
//     // вказуємо назву компонентів
//     component: ['back-button', 'field'],

//     // вказуємо назву сторінки
//     title: 'Recovery page',
//     // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

//     // вказуємо дані,
//     data: {},
//   })
//   // ↑↑ сюди вводимо JSON дані
// })

// ================================================================


/// ================================================================

// router.get Створює нам один ентпоїнт

// router.get('/recovery-confirm', function (req, res) {
//   return res.render('recovery-confirm', {
//     name: 'recovery-confirm',
//     component: ['back-button', 'field', 'field-password'],
//     title: 'Recovery confirm page',
//     data: {},
//   })
// })

// ================================================================

// router.post('/recovery-confirm', function (req, res) {
//   const { password, code } = req.body

//   console.log(password, code)

//   if (!code || !password) {
//     return res.status(400).json({
//       message: "Помилка, обов'язкові поля відсутні",
//     })
//   }

//   try {
//     const email = Confirm.getData(Number(code))

//     if (!email) {
//       return res.status(400).json({
//         message: 'Код не існує',
//       })
//     }

//     const user = User.getByEmail(email)

//     if (!user) {
//       return res.status(400).json({
//         message: 'Користувачa з таким email не існує',
//       })
//     }

//     user.password = password

//     console.log(user)

//     const session = Session.create(user)

//     return res.status(200).json({
//       message: 'Пароль змінено',
//       session,
//     })
//   } catch (err) {
//     return res.status(400).json({
//       message: err.message,
//     })
//   }
// })

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки

// ================================================================

// router.post('/signup-confirm', function (req, res) {
//   const { code, token } = req.body

//   if (!code || !token) {
//     return res.status(400).json({
//       message: "Помилка. Обов'язкові поля відсутні",
//     })
//   }

//   try {
//     const session = Session.get(token)

//     if (!session) {
//       return res.status(400).json({
//         message: 'Помилка. Ви не увійшли в аккаунт',
//       })
//     }

//     const email = Confirm.getData(code)

//     if (!email) {
//       return res.status(400).json({
//         message: 'Код не існує',
//       })
//     }

//     if (email !== session.user.email) {
//       return res.status(400).json({
//         message: 'Код не дійсний',
//       })
//     }

//     const user = User.getByEmail(session.user.email)
//     user.isConfirm = true
//     session.user.isConfirm = true

//     return res.status(200).json({
//       message: 'Ви підтвердили свою пошту',
//       session,
//     })
//   } catch (err) {
//     return res.status(400).json({
//       message: err.message,
//     })
//   }
// })

// ================================================================

// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
// router.get('/login', function (req, res) {
//   // res.render генерує нам HTML сторінку

//   // ↙️ cюди вводимо назву файлу з сontainer
//   return res.render('login', {
//     // вказуємо назву контейнера
//     name: 'login',
//     // вказуємо назву компонентів
//     component: ['back-button', 'field', 'field-password'],

//     // вказуємо назву сторінки
//     title: 'Login page',
//     // ... сюди можна далі продовжувати додавати потрібні технічні дані, які будуть використовуватися в layout

//     // вказуємо дані,
//     data: {},
//   })
//   // ↑↑ сюди вводимо JSON дані
// })

// ================================================================

// router.post('/login', function (req, res) {
//   const { email, password } = req.body

//   if (!email || !password) {
//     return res.status(400).json({
//       message: "Помилка. Обов'язкові поля відсутні",
//     })
//   }

//   try {
//     const user = User.getByEmail(email)

//     if (!user) {
//       return res.status(400).json({
//         message:
//           'Помилка. Користувача з таким email не існує',
//       })
//     }

//     if (user.password !== password) {
//       return res.status(400).json({
//         message: 'Помилка. Пароль не підходить',
//       })
//     }

//     const session = Session.create(user)

//     return res.status(200).json({
//       message: 'Ви увійшли',
//       session,
//     })
//   } catch (err) {
//     return res.status(400).json({
//       message: err.message,
//     })
//   }

//   console.log(email, password)
// })

// Підключаємо роутер до бек-енду
module.exports = router
