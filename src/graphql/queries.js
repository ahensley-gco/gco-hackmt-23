/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSpee = /* GraphQL */ `
  query GetSpee($id: ID!) {
    getSpee(id: $id) {
      id
      name
      bio
      age
      update_user
      createdAt
      updatedAt
    }
  }
`;
export const listSpees = /* GraphQL */ `
  query ListSpees(
    $filter: ModelSpeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        bio
        age
        update_user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserSpeeXref = /* GraphQL */ `
  query GetUserSpeeXref($id: ID!) {
    getUserSpeeXref(id: $id) {
      id
      spee_id
      sponser_date
      sponser_user
      createdAt
      updatedAt
    }
  }
`;
export const listUserSpeeXrefs = /* GraphQL */ `
  query ListUserSpeeXrefs(
    $filter: ModelUserSpeeXrefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSpeeXrefs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        spee_id
        sponser_date
        sponser_user
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUpdate = /* GraphQL */ `
  query GetUpdate($id: ID!) {
    getUpdate(id: $id) {
      id
      name
      description
      spee_id
      createdAt
      updatedAt
    }
  }
`;
export const listUpdates = /* GraphQL */ `
  query ListUpdates(
    $filter: ModelUpdateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        spee_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
