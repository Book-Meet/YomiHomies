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
  books?: Array<Books>;
  authors?: Array<String>;
  genres?: Array<String>;
  matches?: Array<User>;
  pending?: Array<User>;
  rejection?: Array<User>;
  gender?: String;
  openToMeet?: Boolean
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
}

export enum ActionType {
  LoadData
}

export interface LoadData {
  type: ActionType.LoadData;
  payload: User;
}

export type Actions = LoadData;