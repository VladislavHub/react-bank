import React, { createContext, useReducer, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Wellcome from "./page/Wellcome"
import SignUp from "./container/sign-up-page"
import SignIn from "./container/sign-in-page"
import Recovery from "./container/recovery"
import RecoveryConfirm from "./container/recovery-confirm"
import SignUpConfirm from "./container/sign-up-confirm-page"
import Notifications from "./container/notifications-page"

// Типи дій
type ActionType = 'LOGIN' | 'LOGOUT'

// Тип для стану
interface AuthState {
  token: string | null,
  user: { [key: string]: any} | null,
}

// Тип для дій
interface AuthAction {
  type: ActionType;
  payload?: { token?: string; user?: { [key: string]: any } }
}

// Функція (reduser) для useReducer
export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload?.token || null,
        user: action.payload?.user || null,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        user: null,
      };
    default:
      return state;
  }
}

const initialState = {
    token: null,
    user: null,
}

const AuthContext = createContext(authReducer)

function App() {
 const [state, dispatch] = useReducer(authReducer, initialState)

  return (
    // <AuthContext.Provider value={{ state, dispatch}}>
    //   <BrowserRouter>
    //     <Routes>
          
    //       <Route index element={<Wellcome />}/>
    //       <Route path="/signup" element={<SignUp />}/>
    //       <Route path="/signin" element={<SignIn />}/>
    //       <Route path="/recovery" element={<Recovery />}/>
    //       <Route path="/recovery-confirm" element={<RecoveryConfirm />}/>
    //       <Route path="/signup-confirm" element={<SignUpConfirm />}/>
    //       <Route path="/notifications" element={<Notifications />}/>

    //     </Routes>
    //   </BrowserRouter>
    // </AuthContext.Provider>
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Wellcome />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/recovery" element={<Recovery />}/>
        <Route path="/recovery-confirm" element={<RecoveryConfirm />}/>
        <Route path="/signup-confirm" element={<SignUpConfirm />}/>
        <Route path="/notifications" element={<Notifications />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


// function Console() {
//   return console.log(initialState)
// }

// ============================================

// // Типи дій
// type ActionType = 'LOGIN' | 'LOGOUT'

// // Тип для стану
// interface AuthState {
//   token: string | null,
//   user: { [key: string]: any} | null
// }

// // Тип для дій
// interface AuthAction {
//   type: ActionType;
//   payload?: { token?: string; user?: { [key: string]: any } }
// }

// // Початковий стан
// export const initialState = {
//   token: null,
//   user: {},
// }

// // Функція (reduser) для useReducer
// export const authReducer = (state: AuthState, action: AuthAction) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         ...state,
//         token: action.payload?.token || null,
//         user: action.payload?.user || null,
//       };
//     case 'LOGOUT':
//       return {
//         ...state,
//         token: null,
//         user: null,
//       };
//     default:
//       return state;
//   }
// }

// // Функція (dispatch) для useReducer
// export const AuthDispatch = () => {
//   const { dispatch } = useContext(AuthContext)

//   const loginUser = (token: string, user: { [key: string]: any }) => {
//     dispatch({
//       type: "LOGIN",
//       payload: { token, user },
//     })
//   }

//   const logoutUser = () => {
//     dispatch({
//       type: "LOGOUT"
//     })
//   }

//   return { loginUser, logoutUser }
// }


// // Створення контексту
// export const AuthContext = createContext({ state: initialState, dispatch: (action: AuthAction) => {} })
// // const handleSignUp = () => dispatch({ type: 'LOGIN' })