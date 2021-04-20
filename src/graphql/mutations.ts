/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGenre = /* GraphQL */ `
  mutation CreateGenre(
    $input: CreateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    createGenre(input: $input, condition: $condition) {
      id
      genre
      profileID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateGenre = /* GraphQL */ `
  mutation UpdateGenre(
    $input: UpdateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    updateGenre(input: $input, condition: $condition) {
      id
      genre
      profileID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteGenre = /* GraphQL */ `
  mutation DeleteGenre(
    $input: DeleteGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    deleteGenre(input: $input, condition: $condition) {
      id
      genre
      profileID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
      id
      profileID
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
      id
      profileID
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
      id
      profileID
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
      id
      profileID
      title
      author
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
      id
      profileID
      title
      author
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
      id
      profileID
      title
      author
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      username
      nickname
      about_me
      birth_date
      latitude
      longitude
      gender
      open_to_meet
      photo_source
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      genres {
        items {
          id
          genre
          profileID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      authors {
        items {
          id
          profileID
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      books {
        items {
          id
          profileID
          title
          author
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      match {
        items {
          id
          matcherID
          matcheeID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          matcherProfile {
            id
            username
            nickname
            about_me
            birth_date
            latitude
            longitude
            gender
            open_to_meet
            photo_source
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      username
      nickname
      about_me
      birth_date
      latitude
      longitude
      gender
      open_to_meet
      photo_source
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      genres {
        items {
          id
          genre
          profileID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      authors {
        items {
          id
          profileID
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      books {
        items {
          id
          profileID
          title
          author
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      match {
        items {
          id
          matcherID
          matcheeID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          matcherProfile {
            id
            username
            nickname
            about_me
            birth_date
            latitude
            longitude
            gender
            open_to_meet
            photo_source
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      username
      nickname
      about_me
      birth_date
      latitude
      longitude
      gender
      open_to_meet
      photo_source
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      genres {
        items {
          id
          genre
          profileID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      authors {
        items {
          id
          profileID
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      books {
        items {
          id
          profileID
          title
          author
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      match {
        items {
          id
          matcherID
          matcheeID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          matcherProfile {
            id
            username
            nickname
            about_me
            birth_date
            latitude
            longitude
            gender
            open_to_meet
            photo_source
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
      id
      matcherID
      matcheeID
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      matcherProfile {
        id
        username
        nickname
        about_me
        birth_date
        latitude
        longitude
        gender
        open_to_meet
        photo_source
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        genres {
          items {
            id
            genre
            profileID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        authors {
          items {
            id
            profileID
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        books {
          items {
            id
            profileID
            title
            author
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        match {
          items {
            id
            matcherID
            matcheeID
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
      id
      matcherID
      matcheeID
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      matcherProfile {
        id
        username
        nickname
        about_me
        birth_date
        latitude
        longitude
        gender
        open_to_meet
        photo_source
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        genres {
          items {
            id
            genre
            profileID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        authors {
          items {
            id
            profileID
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        books {
          items {
            id
            profileID
            title
            author
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        match {
          items {
            id
            matcherID
            matcheeID
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
      id
      matcherID
      matcheeID
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      matcherProfile {
        id
        username
        nickname
        about_me
        birth_date
        latitude
        longitude
        gender
        open_to_meet
        photo_source
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        genres {
          items {
            id
            genre
            profileID
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        authors {
          items {
            id
            profileID
            name
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        books {
          items {
            id
            profileID
            title
            author
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
        match {
          items {
            id
            matcherID
            matcheeID
            status
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
          }
          nextToken
          startedAt
        }
      }
    }
  }
`;
