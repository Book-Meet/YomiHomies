export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Home: undefined
};

export type BottomTabParamList = {
  Homies: undefined;
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type TabHomiesParamList = {
  TabHomiesScreen: undefined;
}

export type TabHomeParamList = {
  TabHomeScreen: undefined;
}

export type TabProfileParamList = {
  TabProfileScreen: undefined;
}

export type TabSettingsParamList = {
  TabSettingsScreen: undefined;
}

export interface User {
  id: String; 
  username: String;
  latitude?: Number;
  longitude?: Number; 
  books?: Object;
  authors?: Array<String>;
  genres?: Array<String>;
  match?: Array<User>;
  gender?: String;
  open_to_meet?: Boolean;
  about_me?: String;
  birth_date?: Date;
  nickname?: String;
  photo_source?: String;
  updatedAt?: any;
  searchRadius?: Number;
}

export const initialUserState: User = {
  id: "",
  username: ""
}

export interface AppState {
  user: User,
  reSearch: Boolean
}

export const initialAppState: AppState = {
    user: initialUserState,
    reSearch: true
}

export interface Books {
  title: String; 
  author: String;
  profileID?: String;
  id?: String;
  imgURL?: String;
}
export interface Authors {
  name: String;
  profileID?: String;
  id?: String;
}
export interface Genres {
  genre: String;
  profileID?: String;
  id?: String;
}

export enum ActionType {
  SetData,
  Search
}

export interface SetData {
  type: ActionType.SetData;
  payload: User;
}

export interface Search {
  type: ActionType.Search;
}

export type ChatUser = {
  id: String;
  name: String;
  inageUri: String;
}

export type Message = {
  id: String;
  user: ChatUser;
  content: String;
  createdAt: Number;
}

export type ChatRoom = {
  id: String;
  users: [ChatUser];
  lastMessage: Message;
}

export type Actions = SetData | Search; 
