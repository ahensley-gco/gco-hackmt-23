/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCharity = /* GraphQL */ `
  query GetCharity($id: ID!) {
    getCharity(id: $id) {
      id
      name
      description
      spee_id {
        items {
          id
          name
          bio
          age
          update_user
          charityID
          createdAt
          updatedAt
        }
        nextToken
      }
      charity_user
      charity_date
      createdAt
      updatedAt
    }
  }
`;
export const listCharities = /* GraphQL */ `
  query ListCharities(
    $filter: ModelCharityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        spee_id {
          nextToken
        }
        charity_user
        charity_date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      spee_id
      note_date_time
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
        note_date_time
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
        note_date_time
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
          note_date_time
          createdAt
          updatedAt
        }
        nextToken
      }
      user_spee_xrefs {
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
      charityID
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
        user_spee_xrefs {
          nextToken
        }
        charityID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const speesByCharityID = /* GraphQL */ `
  query SpeesByCharityID(
    $charityID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSpeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    speesByCharityID(
      charityID: $charityID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        bio
        age
        update_user
        notes {
          nextToken
        }
        user_spee_xrefs {
          nextToken
        }
        charityID
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
export const userSpeeXrefsBySpee_idAndSponsor_user = /* GraphQL */ `
  query UserSpeeXrefsBySpee_idAndSponsor_user(
    $spee_id: ID!
    $sponsor_user: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserSpeeXrefFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSpeeXrefsBySpee_idAndSponsor_user(
      spee_id: $spee_id
      sponsor_user: $sponsor_user
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
