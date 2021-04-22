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