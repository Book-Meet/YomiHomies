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
  _lastChangedAt?: any;
}

export const initialUserState: User = {
  id: "",
  username: ""
}

export interface AppState {
  user: User,
}

export const initialAppState: AppState = {
    user: initialUserState
}

export interface Books {
  title: String; 
  author: String;
  profileID?: String;
  id?: String;
}

export enum ActionType {
  SetData
}

export interface SetData {
  type: ActionType.SetData;
  payload: User;
}

export type Actions = SetData; 

export type ChatUser = {
  id: String;
  name: String;
  imageUri: String
}

export type Message = {
  id: String;
  user: ChatUser;
  content: String;
  createdAt: Date;
}

export type ChatRoom = {
  id: String;
  users: ChatUser[];
  lasrMessage: Message;
}