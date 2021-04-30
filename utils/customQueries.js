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
              nickname
              books{
                items{
                  imgURL
                }
              }
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
              nickname
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
        nickname
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
        chatRoom {
          id
          ChatRoomUsers {
            items {
              user{
                id
                username
                nickname
                books{
                  items{
                    imgURL
                  }
                }
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
                nickname
              }
            }
          }
        }
      }
    }
  }
`;