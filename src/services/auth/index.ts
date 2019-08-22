import { ISignIn, ISignUp } from '../../interfaces';

export const Auth = {
  setLocalStorage: (storageKey : string, data : ISignIn) : void =>
    localStorage.setItem(storageKey, JSON.stringify(data)),
  clearLocalStorage: () : void => localStorage.clear(),
  logout: () : void => localStorage.removeItem('user'),
  getAuth: () : boolean => {
    const userProfile : ISignUp = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const user : ISignIn = JSON.parse(localStorage.getItem('user') || '{}');
    return Object.keys(user).length > 0 && Object.keys(userProfile).length > 0 &&
      user.email === userProfile.email ? true : false;
  },
};
