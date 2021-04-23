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
export const createChatRoomUser = /* GraphQL */ `
  mutation CreateChatRoomUser(
    $input: CreateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    createChatRoomUser(input: $input, condition: $condition) {
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
export const updateChatRoomUser = /* GraphQL */ `
  mutation UpdateChatRoomUser(
    $input: UpdateChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    updateChatRoomUser(input: $input, condition: $condition) {
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
export const deleteChatRoomUser = /* GraphQL */ `
  mutation DeleteChatRoomUser(
    $input: DeleteChatRoomUserInput!
    $condition: ModelChatRoomUserConditionInput
  ) {
    deleteChatRoomUser(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
