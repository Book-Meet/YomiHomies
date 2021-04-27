export const checkMatch = /* GraphQL */ `
  query ListMatchs(
    $filter: ModelMatchFilterInput
  ) {
    listMatchs(filter: $filter) {
      items {
        id
        matcherID
        matcheeID
        status
      }  
    }
  }
`

export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ChatRoomUsers {
          items {
            userID
            user{
              id
              username
            }
          }
        }
        messages {
          items {
            id
            createdAt
            content
            updatedAt
            user{
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage{
      id
      createdAt
      content
      userID
      chatRoomID
      updatedAt
      user {
        id
        username
      }
    }
  }
`;