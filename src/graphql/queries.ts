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
      imgURL
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
        imgURL
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
            imgURL
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
            matchedOn
            createdAt
            updatedAt
          }
          nextToken
        }
        ChatRoomUser {
          items {
            id
            userID
            chatRoomID
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
          imgURL
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
          matchedOn
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
      ChatRoomUser {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          user {
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
          chatRoom {
            id
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
      matchedOn
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
            imgURL
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
            matchedOn
            createdAt
            updatedAt
          }
          nextToken
        }
        ChatRoomUser {
          items {
            id
            userID
            chatRoomID
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
            imgURL
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
            matchedOn
            createdAt
            updatedAt
          }
          nextToken
        }
        ChatRoomUser {
          items {
            id
            userID
            chatRoomID
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
        matchedOn
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
          ChatRoomUser {
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
          ChatRoomUser {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const getChatRoomUser = /* GraphQL */ `
  query GetChatRoomUser($id: ID!) {
    getChatRoomUser(id: $id) {
      id
      userID
      chatRoomID
      createdAt
      updatedAt
      user {
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
            imgURL
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
            matchedOn
            createdAt
            updatedAt
          }
          nextToken
        }
        ChatRoomUser {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      chatRoom {
        id
        createdAt
        updatedAt
        ChatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatRoomID
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listChatRoomUsers = /* GraphQL */ `
  query ListChatRoomUsers(
    $filter: ModelChatRoomUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        chatRoomID
        createdAt
        updatedAt
        user {
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
          ChatRoomUser {
            nextToken
          }
        }
        chatRoom {
          id
          createdAt
          updatedAt
          ChatRoomUsers {
            nextToken
          }
          messages {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        ChatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatRoomID
            updatedAt
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      createdAt
      updatedAt
      ChatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          user {
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
          chatRoom {
            id
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
          user {
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
          chatRoom {
            id
            createdAt
            updatedAt
          }
        }
        nextToken
      }
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      content
      userID
      chatRoomID
      updatedAt
      user {
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
            imgURL
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
            matchedOn
            createdAt
            updatedAt
          }
          nextToken
        }
        ChatRoomUser {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
      }
      chatRoom {
        id
        createdAt
        updatedAt
        ChatRoomUsers {
          items {
            id
            userID
            chatRoomID
            createdAt
            updatedAt
          }
          nextToken
        }
        messages {
          items {
            id
            createdAt
            content
            userID
            chatRoomID
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        content
        userID
        chatRoomID
        updatedAt
        user {
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
          ChatRoomUser {
            nextToken
          }
        }
        chatRoom {
          id
          createdAt
          updatedAt
          ChatRoomUsers {
            nextToken
          }
          messages {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        content
        userID
        chatRoomID
        updatedAt
        user {
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
          ChatRoomUser {
            nextToken
          }
        }
        chatRoom {
          id
          createdAt
          updatedAt
          ChatRoomUsers {
            nextToken
          }
          messages {
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
