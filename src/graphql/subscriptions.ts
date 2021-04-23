/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre {
    onCreateGenre {
      id
      genre
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre {
    onUpdateGenre {
      id
      genre
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre {
    onDeleteGenre {
      id
      genre
      profileID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
      id
      profileID
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
      id
      profileID
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
      id
      profileID
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
      id
      profileID
      title
      author
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
      id
      profileID
      title
      author
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
      id
      profileID
      title
      author
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateMatch = /* GraphQL */ `
  subscription OnCreateMatch {
    onCreateMatch {
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
export const onUpdateMatch = /* GraphQL */ `
  subscription OnUpdateMatch {
    onUpdateMatch {
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
export const onDeleteMatch = /* GraphQL */ `
  subscription OnDeleteMatch {
    onDeleteMatch {
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
export const onCreateChatRoomUser = /* GraphQL */ `
  subscription OnCreateChatRoomUser {
    onCreateChatRoomUser {
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
export const onUpdateChatRoomUser = /* GraphQL */ `
  subscription OnUpdateChatRoomUser {
    onUpdateChatRoomUser {
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
export const onDeleteChatRoomUser = /* GraphQL */ `
  subscription OnDeleteChatRoomUser {
    onDeleteChatRoomUser {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom {
    onCreateChatRoom {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom {
    onUpdateChatRoom {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom {
    onDeleteChatRoom {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
