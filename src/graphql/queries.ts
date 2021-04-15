/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncGenres = /* GraphQL */ `
  query SyncGenres(
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGenres(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getGenre = /* GraphQL */ `
  query GetGenre($id: ID!) {
    getGenre(id: $id) {
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
export const listGenres = /* GraphQL */ `
  query ListGenres(
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGenres(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncAuthors = /* GraphQL */ `
  query SyncAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAuthors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
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
export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncBooks = /* GraphQL */ `
  query SyncBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBooks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
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
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        nickname
        about_me
        birth_date
        latitude
        longitude
        gender
        open_to_meet
        books {
          nextToken
          startedAt
        }
        authors {
          nextToken
          startedAt
        }
        genres {
          nextToken
          startedAt
        }
        matches {
          nextToken
          startedAt
        }
        rejections {
          nextToken
          startedAt
        }
        photo_source
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
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      username
      nickname
      about_me
      birth_date
      latitude
      longitude
      gender
      open_to_meet
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
      matches {
        items {
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
        nextToken
        startedAt
      }
      rejections {
        items {
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
        nextToken
        startedAt
      }
      photo_source
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        nickname
        about_me
        birth_date
        latitude
        longitude
        gender
        open_to_meet
        books {
          nextToken
          startedAt
        }
        authors {
          nextToken
          startedAt
        }
        genres {
          nextToken
          startedAt
        }
        matches {
          nextToken
          startedAt
        }
        rejections {
          nextToken
          startedAt
        }
        photo_source
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
`;
