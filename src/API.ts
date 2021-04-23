/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGenreInput = {
  id?: string | null,
  genre?: string | null,
  profileID?: string | null,
};

export type ModelGenreConditionInput = {
  genre?: ModelStringInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelGenreConditionInput | null > | null,
  or?: Array< ModelGenreConditionInput | null > | null,
  not?: ModelGenreConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Genre = {
  __typename: "Genre",
  id?: string,
  genre?: string | null,
  profileID?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateGenreInput = {
  id: string,
  genre?: string | null,
  profileID?: string | null,
};

export type DeleteGenreInput = {
  id?: string | null,
};

export type CreateAuthorInput = {
  id?: string | null,
  profileID?: string | null,
  name?: string | null,
};

export type ModelAuthorConditionInput = {
  profileID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAuthorConditionInput | null > | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  not?: ModelAuthorConditionInput | null,
};

export type Author = {
  __typename: "Author",
  id?: string,
  profileID?: string | null,
  name?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateAuthorInput = {
  id: string,
  profileID?: string | null,
  name?: string | null,
};

export type DeleteAuthorInput = {
  id?: string | null,
};

export type CreateBookInput = {
  id?: string | null,
  profileID?: string | null,
  title?: string | null,
  author?: string | null,
};

export type ModelBookConditionInput = {
  profileID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type Book = {
  __typename: "Book",
  id?: string,
  profileID?: string | null,
  title?: string | null,
  author?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateBookInput = {
  id: string,
  profileID?: string | null,
  title?: string | null,
  author?: string | null,
};

export type DeleteBookInput = {
  id?: string | null,
};

export type CreateProfileInput = {
  id?: string | null,
  username?: string | null,
  nickname?: string | null,
  about_me?: string | null,
  birth_date?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  gender?: string | null,
  open_to_meet?: boolean | null,
  photo_source?: string | null,
};

export type ModelProfileConditionInput = {
  username?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  about_me?: ModelStringInput | null,
  birth_date?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  gender?: ModelStringInput | null,
  open_to_meet?: ModelBooleanInput | null,
  photo_source?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Profile = {
  __typename: "Profile",
  id?: string,
  username?: string | null,
  nickname?: string | null,
  about_me?: string | null,
  birth_date?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  gender?: string | null,
  open_to_meet?: boolean | null,
  photo_source?: string | null,
  createdAt?: string,
  updatedAt?: string,
  genres?: ModelGenreConnection,
  authors?: ModelAuthorConnection,
  books?: ModelBookConnection,
  match?: ModelMatchConnection,
  ChatRoomUser?: ModelChatRoomUserConnection,
};

export type ModelGenreConnection = {
  __typename: "ModelGenreConnection",
  items?:  Array<Genre | null > | null,
  nextToken?: string | null,
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items?:  Array<Author | null > | null,
  nextToken?: string | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items?:  Array<Book | null > | null,
  nextToken?: string | null,
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection",
  items?:  Array<Match | null > | null,
  nextToken?: string | null,
};

export type Match = {
  __typename: "Match",
  id?: string,
  matcherID?: string,
  matcheeID?: string,
  status?: string,
  matchedOn?: string | null,
  createdAt?: string,
  updatedAt?: string,
  matcherProfile?: Profile,
  matcheeProfile?: Profile,
};

export type ModelChatRoomUserConnection = {
  __typename: "ModelChatRoomUserConnection",
  items?:  Array<ChatRoomUser | null > | null,
  nextToken?: string | null,
};

export type ChatRoomUser = {
  __typename: "ChatRoomUser",
  id?: string,
  userID?: string,
  chatRoomID?: string,
  createdAt?: string,
  updatedAt?: string,
  user?: Profile,
  chatRoom?: ChatRoom,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id?: string,
  createdAt?: string,
  updatedAt?: string,
  ChatRoomUsers?: ModelChatRoomUserConnection,
  messages?: ModelMessageConnection,
};

export type ModelMessageConnection = {
  __typename: "ModelMessageConnection",
  items?:  Array<Message | null > | null,
  nextToken?: string | null,
};

export type Message = {
  __typename: "Message",
  id?: string,
  createdAt?: string,
  content?: string,
  userID?: string,
  chatRoomID?: string,
  updatedAt?: string,
  user?: Profile,
  chatRoom?: ChatRoom,
};

export type UpdateProfileInput = {
  id: string,
  username?: string | null,
  nickname?: string | null,
  about_me?: string | null,
  birth_date?: string | null,
  latitude?: number | null,
  longitude?: number | null,
  gender?: string | null,
  open_to_meet?: boolean | null,
  photo_source?: string | null,
};

export type DeleteProfileInput = {
  id?: string | null,
};

export type CreateMatchInput = {
  id?: string | null,
  matcherID: string,
  matcheeID: string,
  status: string,
  matchedOn?: string | null,
};

export type ModelMatchConditionInput = {
  matcherID?: ModelIDInput | null,
  matcheeID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  matchedOn?: ModelStringInput | null,
  and?: Array< ModelMatchConditionInput | null > | null,
  or?: Array< ModelMatchConditionInput | null > | null,
  not?: ModelMatchConditionInput | null,
};

export type UpdateMatchInput = {
  id: string,
  matcherID?: string | null,
  matcheeID?: string | null,
  status?: string | null,
  matchedOn?: string | null,
};

export type DeleteMatchInput = {
  id?: string | null,
};

export type CreateChatRoomUserInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelChatRoomUserConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserConditionInput | null > | null,
  or?: Array< ModelChatRoomUserConditionInput | null > | null,
  not?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteChatRoomUserInput = {
  id?: string | null,
};

export type CreateChatRoomInput = {
  id?: string | null,
};

export type ModelChatRoomConditionInput = {
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
};

export type DeleteChatRoomInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  createdAt: string,
  content: string,
  userID: string,
  chatRoomID: string,
};

export type ModelMessageConditionInput = {
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type UpdateMessageInput = {
  id: string,
  createdAt?: string | null,
  content?: string | null,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelGenreFilterInput = {
  id?: ModelIDInput | null,
  genre?: ModelStringInput | null,
  profileID?: ModelIDInput | null,
  and?: Array< ModelGenreFilterInput | null > | null,
  or?: Array< ModelGenreFilterInput | null > | null,
  not?: ModelGenreFilterInput | null,
};

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAuthorFilterInput | null > | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
  not?: ModelAuthorFilterInput | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  profileID?: ModelIDInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  nickname?: ModelStringInput | null,
  about_me?: ModelStringInput | null,
  birth_date?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  gender?: ModelStringInput | null,
  open_to_meet?: ModelBooleanInput | null,
  photo_source?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items?:  Array<Profile | null > | null,
  nextToken?: string | null,
};

export type ModelMatchFilterInput = {
  id?: ModelIDInput | null,
  matcherID?: ModelIDInput | null,
  matcheeID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  matchedOn?: ModelStringInput | null,
  and?: Array< ModelMatchFilterInput | null > | null,
  or?: Array< ModelMatchFilterInput | null > | null,
  not?: ModelMatchFilterInput | null,
};

export type ModelChatRoomUserFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomUserFilterInput | null > | null,
  or?: Array< ModelChatRoomUserFilterInput | null > | null,
  not?: ModelChatRoomUserFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items?:  Array<ChatRoom | null > | null,
  nextToken?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  content?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateGenreMutationVariables = {
  input?: CreateGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type CreateGenreMutation = {
  createGenre?:  {
    __typename: "Genre",
    id: string,
    genre?: string | null,
    profileID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGenreMutationVariables = {
  input?: UpdateGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type UpdateGenreMutation = {
  updateGenre?:  {
    __typename: "Genre",
    id: string,
    genre?: string | null,
    profileID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGenreMutationVariables = {
  input?: DeleteGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type DeleteGenreMutation = {
  deleteGenre?:  {
    __typename: "Genre",
    id: string,
    genre?: string | null,
    profileID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthorMutationVariables = {
  input?: CreateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type CreateAuthorMutation = {
  createAuthor?:  {
    __typename: "Author",
    id: string,
    profileID?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  input?: UpdateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorMutation = {
  updateAuthor?:  {
    __typename: "Author",
    id: string,
    profileID?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  input?: DeleteAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type DeleteAuthorMutation = {
  deleteAuthor?:  {
    __typename: "Author",
    id: string,
    profileID?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBookMutationVariables = {
  input?: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    id: string,
    profileID?: string | null,
    title?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookMutationVariables = {
  input?: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    id: string,
    profileID?: string | null,
    title?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookMutationVariables = {
  input?: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    id: string,
    profileID?: string | null,
    title?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProfileMutationVariables = {
  input?: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    username?: string | null,
    nickname?: string | null,
    about_me?: string | null,
    birth_date?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    gender?: string | null,
    open_to_meet?: boolean | null,
    photo_source?: string | null,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        matchedOn?: string | null,
        createdAt: string,
        updatedAt: string,
        matcherProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        matcheeProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ChatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input?: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    username?: string | null,
    nickname?: string | null,
    about_me?: string | null,
    birth_date?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    gender?: string | null,
    open_to_meet?: boolean | null,
    photo_source?: string | null,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        matchedOn?: string | null,
        createdAt: string,
        updatedAt: string,
        matcherProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        matcheeProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ChatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input?: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    username?: string | null,
    nickname?: string | null,
    about_me?: string | null,
    birth_date?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    gender?: string | null,
    open_to_meet?: boolean | null,
    photo_source?: string | null,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        matchedOn?: string | null,
        createdAt: string,
        updatedAt: string,
        matcherProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        matcheeProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ChatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateMatchMutationVariables = {
  input?: CreateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type CreateMatchMutation = {
  createMatch?:  {
    __typename: "Match",
    id: string,
    matcherID: string,
    matcheeID: string,
    status: string,
    matchedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    matcherProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
    matcheeProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type UpdateMatchMutationVariables = {
  input?: UpdateMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type UpdateMatchMutation = {
  updateMatch?:  {
    __typename: "Match",
    id: string,
    matcherID: string,
    matcheeID: string,
    status: string,
    matchedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    matcherProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
    matcheeProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type DeleteMatchMutationVariables = {
  input?: DeleteMatchInput,
  condition?: ModelMatchConditionInput | null,
};

export type DeleteMatchMutation = {
  deleteMatch?:  {
    __typename: "Match",
    id: string,
    matcherID: string,
    matcheeID: string,
    status: string,
    matchedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    matcherProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
    matcheeProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type CreateChatRoomUserMutationVariables = {
  input?: CreateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type CreateChatRoomUserMutation = {
  createChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateChatRoomUserMutationVariables = {
  input?: UpdateChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type UpdateChatRoomUserMutation = {
  updateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteChatRoomUserMutationVariables = {
  input?: DeleteChatRoomUserInput,
  condition?: ModelChatRoomUserConditionInput | null,
};

export type DeleteChatRoomUserMutation = {
  deleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input?: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    createdAt: string,
    updatedAt: string,
    ChatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input?: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    createdAt: string,
    updatedAt: string,
    ChatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input?: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    createdAt: string,
    updatedAt: string,
    ChatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateMessageMutationVariables = {
  input?: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input?: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input?: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetGenreQueryVariables = {
  id?: string,
};

export type GetGenreQuery = {
  getGenre?:  {
    __typename: "Genre",
    id: string,
    genre?: string | null,
    profileID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGenresQueryVariables = {
  filter?: ModelGenreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGenresQuery = {
  listGenres?:  {
    __typename: "ModelGenreConnection",
    items?:  Array< {
      __typename: "Genre",
      id: string,
      genre?: string | null,
      profileID?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAuthorQueryVariables = {
  id?: string,
};

export type GetAuthorQuery = {
  getAuthor?:  {
    __typename: "Author",
    id: string,
    profileID?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorsQuery = {
  listAuthors?:  {
    __typename: "ModelAuthorConnection",
    items?:  Array< {
      __typename: "Author",
      id: string,
      profileID?: string | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id?: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    profileID?: string | null,
    title?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items?:  Array< {
      __typename: "Book",
      id: string,
      profileID?: string | null,
      title?: string | null,
      author?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListProfilesQueryVariables = {
  id?: string | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id?: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    username?: string | null,
    nickname?: string | null,
    about_me?: string | null,
    birth_date?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    gender?: string | null,
    open_to_meet?: boolean | null,
    photo_source?: string | null,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        matchedOn?: string | null,
        createdAt: string,
        updatedAt: string,
        matcherProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        matcheeProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ChatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetMatchQueryVariables = {
  id?: string,
};

export type GetMatchQuery = {
  getMatch?:  {
    __typename: "Match",
    id: string,
    matcherID: string,
    matcheeID: string,
    status: string,
    matchedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    matcherProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
    matcheeProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type ListMatchsQueryVariables = {
  filter?: ModelMatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMatchsQuery = {
  listMatchs?:  {
    __typename: "ModelMatchConnection",
    items?:  Array< {
      __typename: "Match",
      id: string,
      matcherID: string,
      matcheeID: string,
      status: string,
      matchedOn?: string | null,
      createdAt: string,
      updatedAt: string,
      matcherProfile:  {
        __typename: "Profile",
        id: string,
        username?: string | null,
        nickname?: string | null,
        about_me?: string | null,
        birth_date?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        gender?: string | null,
        open_to_meet?: boolean | null,
        photo_source?: string | null,
        createdAt: string,
        updatedAt: string,
        genres?:  {
          __typename: "ModelGenreConnection",
          nextToken?: string | null,
        } | null,
        authors?:  {
          __typename: "ModelAuthorConnection",
          nextToken?: string | null,
        } | null,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        match?:  {
          __typename: "ModelMatchConnection",
          nextToken?: string | null,
        } | null,
        ChatRoomUser?:  {
          __typename: "ModelChatRoomUserConnection",
          nextToken?: string | null,
        } | null,
      },
      matcheeProfile:  {
        __typename: "Profile",
        id: string,
        username?: string | null,
        nickname?: string | null,
        about_me?: string | null,
        birth_date?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        gender?: string | null,
        open_to_meet?: boolean | null,
        photo_source?: string | null,
        createdAt: string,
        updatedAt: string,
        genres?:  {
          __typename: "ModelGenreConnection",
          nextToken?: string | null,
        } | null,
        authors?:  {
          __typename: "ModelAuthorConnection",
          nextToken?: string | null,
        } | null,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        match?:  {
          __typename: "ModelMatchConnection",
          nextToken?: string | null,
        } | null,
        ChatRoomUser?:  {
          __typename: "ModelChatRoomUserConnection",
          nextToken?: string | null,
        } | null,
      },
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomUserQueryVariables = {
  id?: string,
};

export type GetChatRoomUserQuery = {
  getChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListChatRoomUsersQueryVariables = {
  filter?: ModelChatRoomUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomUsersQuery = {
  listChatRoomUsers?:  {
    __typename: "ModelChatRoomUserConnection",
    items?:  Array< {
      __typename: "ChatRoomUser",
      id: string,
      userID: string,
      chatRoomID: string,
      createdAt: string,
      updatedAt: string,
      user?:  {
        __typename: "Profile",
        id: string,
        username?: string | null,
        nickname?: string | null,
        about_me?: string | null,
        birth_date?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        gender?: string | null,
        open_to_meet?: boolean | null,
        photo_source?: string | null,
        createdAt: string,
        updatedAt: string,
        genres?:  {
          __typename: "ModelGenreConnection",
          nextToken?: string | null,
        } | null,
        authors?:  {
          __typename: "ModelAuthorConnection",
          nextToken?: string | null,
        } | null,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        match?:  {
          __typename: "ModelMatchConnection",
          nextToken?: string | null,
        } | null,
        ChatRoomUser?:  {
          __typename: "ModelChatRoomUserConnection",
          nextToken?: string | null,
        } | null,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        ChatRoomUsers?:  {
          __typename: "ModelChatRoomUserConnection",
          nextToken?: string | null,
        } | null,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items?:  Array< {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id?: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    createdAt: string,
    updatedAt: string,
    ChatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id?: string,
};

export type GetMessageQuery = {
  getMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      updatedAt: string,
      user?:  {
        __typename: "Profile",
        id: string,
        username?: string | null,
        nickname?: string | null,
        about_me?: string | null,
        birth_date?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        gender?: string | null,
        open_to_meet?: boolean | null,
        photo_source?: string | null,
        createdAt: string,
        updatedAt: string,
        genres?:  {
          __typename: "ModelGenreConnection",
          nextToken?: string | null,
        } | null,
        authors?:  {
          __typename: "ModelAuthorConnection",
          nextToken?: string | null,
        } | null,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        match?:  {
          __typename: "ModelMatchConnection",
          nextToken?: string | null,
        } | null,
        ChatRoomUser?:  {
          __typename: "ModelChatRoomUserConnection",
          nextToken?: string | null,
        } | null,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        ChatRoomUsers?:  {
          __typename: "ModelChatRoomUserConnection",
          nextToken?: string | null,
        } | null,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type MessagesByChatRoomQueryVariables = {
  chatRoomID?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MessagesByChatRoomQuery = {
  messagesByChatRoom?:  {
    __typename: "ModelMessageConnection",
    items?:  Array< {
      __typename: "Message",
      id: string,
      createdAt: string,
      content: string,
      userID: string,
      chatRoomID: string,
      updatedAt: string,
      user?:  {
        __typename: "Profile",
        id: string,
        username?: string | null,
        nickname?: string | null,
        about_me?: string | null,
        birth_date?: string | null,
        latitude?: number | null,
        longitude?: number | null,
        gender?: string | null,
        open_to_meet?: boolean | null,
        photo_source?: string | null,
        createdAt: string,
        updatedAt: string,
        genres?:  {
          __typename: "ModelGenreConnection",
          nextToken?: string | null,
        } | null,
        authors?:  {
          __typename: "ModelAuthorConnection",
          nextToken?: string | null,
        } | null,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
        } | null,
        match?:  {
          __typename: "ModelMatchConnection",
          nextToken?: string | null,
        } | null,
        ChatRoomUser?:  {
          __typename: "ModelChatRoomUserConnection",
          nextToken?: string | null,
        } | null,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        createdAt: string,
        updatedAt: string,
        ChatRoomUsers?:  {
          __typename: "ModelChatRoomUserConnection",
          nextToken?: string | null,
        } | null,
        messages?:  {
          __typename: "ModelMessageConnection",
          nextToken?: string | null,
        } | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateGenreSubscription = {
  onCreateGenre?:  {
    __typename: "Genre",
    id: string,
    genre?: string | null,
    profileID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGenreSubscription = {
  onUpdateGenre?:  {
    __typename: "Genre",
    id: string,
    genre?: string | null,
    profileID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGenreSubscription = {
  onDeleteGenre?:  {
    __typename: "Genre",
    id: string,
    genre?: string | null,
    profileID?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor?:  {
    __typename: "Author",
    id: string,
    profileID?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor?:  {
    __typename: "Author",
    id: string,
    profileID?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor?:  {
    __typename: "Author",
    id: string,
    profileID?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    id: string,
    profileID?: string | null,
    title?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    id: string,
    profileID?: string | null,
    title?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    id: string,
    profileID?: string | null,
    title?: string | null,
    author?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    username?: string | null,
    nickname?: string | null,
    about_me?: string | null,
    birth_date?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    gender?: string | null,
    open_to_meet?: boolean | null,
    photo_source?: string | null,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        matchedOn?: string | null,
        createdAt: string,
        updatedAt: string,
        matcherProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        matcheeProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ChatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    username?: string | null,
    nickname?: string | null,
    about_me?: string | null,
    birth_date?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    gender?: string | null,
    open_to_meet?: boolean | null,
    photo_source?: string | null,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        matchedOn?: string | null,
        createdAt: string,
        updatedAt: string,
        matcherProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        matcheeProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ChatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    username?: string | null,
    nickname?: string | null,
    about_me?: string | null,
    birth_date?: string | null,
    latitude?: number | null,
    longitude?: number | null,
    gender?: string | null,
    open_to_meet?: boolean | null,
    photo_source?: string | null,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        matchedOn?: string | null,
        createdAt: string,
        updatedAt: string,
        matcherProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
        matcheeProfile:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
    } | null,
    ChatRoomUser?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateMatchSubscription = {
  onCreateMatch?:  {
    __typename: "Match",
    id: string,
    matcherID: string,
    matcheeID: string,
    status: string,
    matchedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    matcherProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
    matcheeProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnUpdateMatchSubscription = {
  onUpdateMatch?:  {
    __typename: "Match",
    id: string,
    matcherID: string,
    matcheeID: string,
    status: string,
    matchedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    matcherProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
    matcheeProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnDeleteMatchSubscription = {
  onDeleteMatch?:  {
    __typename: "Match",
    id: string,
    matcherID: string,
    matcheeID: string,
    status: string,
    matchedOn?: string | null,
    createdAt: string,
    updatedAt: string,
    matcherProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
    matcheeProfile:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    },
  } | null,
};

export type OnCreateChatRoomUserSubscription = {
  onCreateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateChatRoomUserSubscription = {
  onUpdateChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteChatRoomUserSubscription = {
  onDeleteChatRoomUser?:  {
    __typename: "ChatRoomUser",
    id: string,
    userID: string,
    chatRoomID: string,
    createdAt: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    createdAt: string,
    updatedAt: string,
    ChatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    createdAt: string,
    updatedAt: string,
    ChatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    createdAt: string,
    updatedAt: string,
    ChatRoomUsers?:  {
      __typename: "ModelChatRoomUserConnection",
      items?:  Array< {
        __typename: "ChatRoomUser",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    messages?:  {
      __typename: "ModelMessageConnection",
      items?:  Array< {
        __typename: "Message",
        id: string,
        createdAt: string,
        content: string,
        userID: string,
        chatRoomID: string,
        updatedAt: string,
        user?:  {
          __typename: "Profile",
          id: string,
          username?: string | null,
          nickname?: string | null,
          about_me?: string | null,
          birth_date?: string | null,
          latitude?: number | null,
          longitude?: number | null,
          gender?: string | null,
          open_to_meet?: boolean | null,
          photo_source?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        chatRoom?:  {
          __typename: "ChatRoom",
          id: string,
          createdAt: string,
          updatedAt: string,
        } | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage?:  {
    __typename: "Message",
    id: string,
    createdAt: string,
    content: string,
    userID: string,
    chatRoomID: string,
    updatedAt: string,
    user?:  {
      __typename: "Profile",
      id: string,
      username?: string | null,
      nickname?: string | null,
      about_me?: string | null,
      birth_date?: string | null,
      latitude?: number | null,
      longitude?: number | null,
      gender?: string | null,
      open_to_meet?: boolean | null,
      photo_source?: string | null,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          matchedOn?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      ChatRoomUser?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      createdAt: string,
      updatedAt: string,
      ChatRoomUsers?:  {
        __typename: "ModelChatRoomUserConnection",
        items?:  Array< {
          __typename: "ChatRoomUser",
          id: string,
          userID: string,
          chatRoomID: string,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      messages?:  {
        __typename: "ModelMessageConnection",
        items?:  Array< {
          __typename: "Message",
          id: string,
          createdAt: string,
          content: string,
          userID: string,
          chatRoomID: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
      } | null,
    } | null,
  } | null,
};
