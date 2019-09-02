import { USER_SORT, USER_FILTER, USER_FETCH, INPUT_SEARCH, USER_FETCH_REJECTED, USER_FETCH_FULFILLED } from '../type';
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ComponentType } from 'react';

export interface IAction {
  type? : string;
  payload? : Object & string & Array<IUser> & IError;
}

export interface IUserAction {
  type : typeof USER_SORT | typeof USER_FILTER | typeof USER_FETCH | typeof INPUT_SEARCH |
  typeof USER_FETCH_FULFILLED | typeof USER_FETCH_REJECTED;
  payload? : any;
}
export interface IUserSortAction {
  type : typeof USER_SORT;
}
export interface IUserFilterAction {
  type : typeof USER_FILTER;
}
export interface IUserFetchAction {
  type : typeof USER_FETCH;
}
export interface IInputSearchAction {
  type : typeof INPUT_SEARCH;
  payload : string;
}
export interface IUserFetchFulfilledAction {
  type : typeof USER_FETCH_FULFILLED;
  payload : Array<IUser>;
}
export interface IUserFetchRejectedAction {
  type : typeof USER_FETCH_REJECTED;
  payload : string;
}

export interface IUserListState {
  users : Array<IUser>;
  fetching : boolean;
  search : string;
  sort : boolean;
  error : string;
}
export interface IState {
  user : IUserListState;
}

export interface IUserListProps {
  users : Array<IUser>;
  fetching : boolean;
  searchInput (search : string) : IInputSearchAction;
  filterUser (payload : string) : IUserFilterAction;
  fetchUsers () : IUserFetchAction;
  sortUser () : IUserSortAction;
}
export interface IUserProps {
  users : Array<IUser>;
}
export interface IUser {
  receivedEventsUrl : string;
  organizationsUrl : string;
  subscriptionsUrl : string;
  followersUrl : string;
  followingUrl : string;
  gravatarId : string;
  starredUrl : string;
  siteAdmin : boolean;
  avatarUrl : string;
  eventsUrl : string;
  gistsUrl : string;
  reposUrl : string;
  htmlUrl : string;
  nodeId : string;
  login : string;
  type : string;
  url : string;
  id : number;
}
export interface IError {
  message : string;
}
export interface ISearchProps {
  searcHandler (event : ChangeEvent<HTMLInputElement>) : void;
  sortHandler () : IUserSortAction;
}
export interface IInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label : string;
}
export interface IAuth {
  authented : boolean;
}
export interface IProtectedRoute {
  component : ComponentType;
  exact? : boolean;
  path : string;
}
export interface ISignIn {
  email : string;
  password : string;
}
export interface ISignUp {
  email : string;
  username : string;
  phone : string;
  password : string;
}
