/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      spee_id
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
        spee_id
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
      notes {
        items {
          id
          name
          description
          image
          spee_id
          createdAt
          updatedAt
        }
        nextToken
      }
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
        notes {
          nextToken
        }
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
      sponsor_date
      sponsor_user
      created_by
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
        sponsor_date
        sponsor_user
        created_by
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const notesBySpee_idAndName = /* GraphQL */ `
  query NotesBySpee_idAndName(
    $spee_id: ID!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notesBySpee_idAndName(
      spee_id: $spee_id
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        image
        spee_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
