/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGenre = /* GraphQL */ `
  query GetGenre($id: ID!) {
    getGenre(id: $id) {
      id
      genre
      profileID
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      profileID
      name
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
        createdAt
        updatedAt
      }
      nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $id: ID
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
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
        photo_source
        createdAt
        updatedAt
        genres {
          items {
            id
            genre
            profileID
            createdAt
            updatedAt
          }
          nextToken
        }
        authors {
          items {
            id
            profileID
            name
            createdAt
            updatedAt
          }
          nextToken
        }
        books {
          items {
            id
            profileID
            title
            author
            createdAt
            updatedAt
          }
          nextToken
        }
        match {
          items {
            id
            matcherID
            matcheeID
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      nextToken
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
      photo_source
      createdAt
      updatedAt
      genres {
        items {
          id
          genre
          profileID
          createdAt
          updatedAt
        }
        nextToken
      }
      authors {
        items {
          id
          profileID
          name
          createdAt
          updatedAt
        }
        nextToken
      }
      books {
        items {
          id
          profileID
          title
          author
          createdAt
          updatedAt
        }
        nextToken
      }
      match {
        items {
          id
          matcherID
          matcheeID
          status
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
            createdAt
            updatedAt
          }
          matcheeProfile {
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
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const getMatch = /* GraphQL */ `
  query GetMatch($id: ID!) {
    getMatch(id: $id) {
      id
      matcherID
      matcheeID
      status
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
        createdAt
        updatedAt
        genres {
          items {
            id
            genre
            profileID
            createdAt
            updatedAt
          }
          nextToken
        }
        authors {
          items {
            id
            profileID
            name
            createdAt
            updatedAt
          }
          nextToken
        }
        books {
          items {
            id
            profileID
            title
            author
            createdAt
            updatedAt
          }
          nextToken
        }
        match {
          items {
            id
            matcherID
            matcheeID
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      matcheeProfile {
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
        createdAt
        updatedAt
        genres {
          items {
            id
            genre
            profileID
            createdAt
            updatedAt
          }
          nextToken
        }
        authors {
          items {
            id
            profileID
            name
            createdAt
            updatedAt
          }
          nextToken
        }
        books {
          items {
            id
            profileID
            title
            author
            createdAt
            updatedAt
          }
          nextToken
        }
        match {
          items {
            id
            matcherID
            matcheeID
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listMatchs = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMatchs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        matcherID
        matcheeID
        status
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
          createdAt
          updatedAt
          genres {
            nextToken
          }
          authors {
            nextToken
          }
          books {
            nextToken
          }
          match {
            nextToken
          }
        }
        matcheeProfile {
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
          createdAt
          updatedAt
          genres {
            nextToken
          }
          authors {
            nextToken
          }
          books {
            nextToken
          }
          match {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
