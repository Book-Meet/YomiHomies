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
          }
        }
        messages {
          items {
            id
            createdAt
            content
            updatedAt
          }
        }
      }
    }
  }
`;