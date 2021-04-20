/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGenreInput = {
  id?: string | null,
  genre?: string | null,
  profileID?: string | null,
  _version?: number | null,
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
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateGenreInput = {
  id: string,
  genre?: string | null,
  profileID?: string | null,
  _version?: number | null,
};

export type DeleteGenreInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateAuthorInput = {
  id?: string | null,
  profileID?: string | null,
  name?: string | null,
  _version?: number | null,
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
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateAuthorInput = {
  id: string,
  profileID?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteAuthorInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateBookInput = {
  id?: string | null,
  profileID?: string | null,
  title?: string | null,
  author?: string | null,
  _version?: number | null,
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
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateBookInput = {
  id: string,
  profileID?: string | null,
  title?: string | null,
  author?: string | null,
  _version?: number | null,
};

export type DeleteBookInput = {
  id?: string | null,
  _version?: number | null,
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
  _version?: number | null,
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
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  genres?: ModelGenreConnection,
  authors?: ModelAuthorConnection,
  books?: ModelBookConnection,
  match?: ModelMatchConnection,
};

export type ModelGenreConnection = {
  __typename: "ModelGenreConnection",
  items?:  Array<Genre | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAuthorConnection = {
  __typename: "ModelAuthorConnection",
  items?:  Array<Author | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items?:  Array<Book | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelMatchConnection = {
  __typename: "ModelMatchConnection",
  items?:  Array<Match | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Match = {
  __typename: "Match",
  id?: string,
  matcherID?: string,
  matcheeID?: string,
  status?: string,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  matcherProfile?: Profile,
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
  _version?: number | null,
};

export type DeleteProfileInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateMatchInput = {
  id?: string | null,
  matcherID: string,
  matcheeID: string,
  status: string,
  _version?: number | null,
};

export type ModelMatchConditionInput = {
  matcherID?: ModelIDInput | null,
  matcheeID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelMatchConditionInput | null > | null,
  or?: Array< ModelMatchConditionInput | null > | null,
  not?: ModelMatchConditionInput | null,
};

export type UpdateMatchInput = {
  id: string,
  matcherID?: string | null,
  matcheeID?: string | null,
  status?: string | null,
  _version?: number | null,
};

export type DeleteMatchInput = {
  id?: string | null,
  _version?: number | null,
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
  startedAt?: number | null,
};

export type ModelMatchFilterInput = {
  id?: ModelIDInput | null,
  matcherID?: ModelIDInput | null,
  matcheeID?: ModelIDInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelMatchFilterInput | null > | null,
  or?: Array< ModelMatchFilterInput | null > | null,
  not?: ModelMatchFilterInput | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGenresQueryVariables = {
  filter?: ModelGenreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGenresQuery = {
  syncGenres?:  {
    __typename: "ModelGenreConnection",
    items?:  Array< {
      __typename: "Genre",
      id: string,
      genre?: string | null,
      profileID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAuthorsQuery = {
  syncAuthors?:  {
    __typename: "ModelAuthorConnection",
    items?:  Array< {
      __typename: "Author",
      id: string,
      profileID?: string | null,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBooksQuery = {
  syncBooks?:  {
    __typename: "ModelBookConnection",
    items?:  Array< {
      __typename: "Book",
      id: string,
      profileID?: string | null,
      title?: string | null,
      author?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type SyncProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProfilesQuery = {
  syncProfiles?:  {
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        genres?:  {
          __typename: "ModelGenreConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        authors?:  {
          __typename: "ModelAuthorConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        match?:  {
          __typename: "ModelMatchConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
      },
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMatchesQueryVariables = {
  filter?: ModelMatchFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMatchesQuery = {
  syncMatches?:  {
    __typename: "ModelMatchConnection",
    items?:  Array< {
      __typename: "Match",
      id: string,
      matcherID: string,
      matcheeID: string,
      status: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
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
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        genres?:  {
          __typename: "ModelGenreConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        authors?:  {
          __typename: "ModelAuthorConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        books?:  {
          __typename: "ModelBookConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
        match?:  {
          __typename: "ModelMatchConnection",
          nextToken?: string | null,
          startedAt?: number | null,
        } | null,
      },
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateGenreSubscription = {
  onCreateGenre?:  {
    __typename: "Genre",
    id: string,
    genre?: string | null,
    profileID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    genres?:  {
      __typename: "ModelGenreConnection",
      items?:  Array< {
        __typename: "Genre",
        id: string,
        genre?: string | null,
        profileID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    authors?:  {
      __typename: "ModelAuthorConnection",
      items?:  Array< {
        __typename: "Author",
        id: string,
        profileID?: string | null,
        name?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    books?:  {
      __typename: "ModelBookConnection",
      items?:  Array< {
        __typename: "Book",
        id: string,
        profileID?: string | null,
        title?: string | null,
        author?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    match?:  {
      __typename: "ModelMatchConnection",
      items?:  Array< {
        __typename: "Match",
        id: string,
        matcherID: string,
        matcheeID: string,
        status: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
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
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        },
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      genres?:  {
        __typename: "ModelGenreConnection",
        items?:  Array< {
          __typename: "Genre",
          id: string,
          genre?: string | null,
          profileID?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      authors?:  {
        __typename: "ModelAuthorConnection",
        items?:  Array< {
          __typename: "Author",
          id: string,
          profileID?: string | null,
          name?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      books?:  {
        __typename: "ModelBookConnection",
        items?:  Array< {
          __typename: "Book",
          id: string,
          profileID?: string | null,
          title?: string | null,
          author?: string | null,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      match?:  {
        __typename: "ModelMatchConnection",
        items?:  Array< {
          __typename: "Match",
          id: string,
          matcherID: string,
          matcheeID: string,
          status: string,
          _version: number,
          _deleted?: boolean | null,
          _lastChangedAt: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};
