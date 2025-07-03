import { AuthTypes } from "./authTypes";
import { AUTH_ACTIONS } from "./authTypes";

// export const _authReducer = (state, action) => {
//   switch (action.type) {
//     case AuthTypes.SET_LOADING: {
//       return {
//         ...state,
//         loading: action.payload,
//       };
//     }

//     case AuthTypes.SET_USER: {
//       return {
//         ...state,
//         user: action.payload,
//         loading: false,
//         error: null,
//       };
//     }

//     case AuthTypes.SET_ERROR: {
//       return {
//         ...state,
//         loading: false,
//         error: action.payload,
//       };
//     }

//     case AuthTypes.LOGOUT: {
//       return {
//         ...state,
//         user: null,
//         error: null,
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };

const initialAuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_START:
    case AUTH_ACTIONS.REGISTER_START:
      return { ...state, loading: true, error: null };

    case AUTH_ACTIONS.LOGIN_SUCCESS:
    case AUTH_ACTIONS.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user,
        token: action.payload.jwt,
        isAuthenticated: true,
      };

    case AUTH_ACTIONS.LOGIN_FAILURE:
    case AUTH_ACTIONS.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
        token: null,
        isAuthenticated: false,
      };

    case AUTH_ACTIONS.LOGOUT:
      return { ...initialAuthState };

    case AUTH_ACTIONS.CLEAR_ERROR:
      return { ...state, error: null };

    case AUTH_ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };

    case AUTH_ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
