/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
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
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
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
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
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
export const createSpee = /* GraphQL */ `
  mutation CreateSpee(
    $input: CreateSpeeInput!
    $condition: ModelSpeeConditionInput
  ) {
    createSpee(input: $input, condition: $condition) {
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
export const updateSpee = /* GraphQL */ `
  mutation UpdateSpee(
    $input: UpdateSpeeInput!
    $condition: ModelSpeeConditionInput
  ) {
    updateSpee(input: $input, condition: $condition) {
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
export const deleteSpee = /* GraphQL */ `
  mutation DeleteSpee(
    $input: DeleteSpeeInput!
    $condition: ModelSpeeConditionInput
  ) {
    deleteSpee(input: $input, condition: $condition) {
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
export const createUserSpeeXref = /* GraphQL */ `
  mutation CreateUserSpeeXref(
    $input: CreateUserSpeeXrefInput!
    $condition: ModelUserSpeeXrefConditionInput
  ) {
    createUserSpeeXref(input: $input, condition: $condition) {
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
export const updateUserSpeeXref = /* GraphQL */ `
  mutation UpdateUserSpeeXref(
    $input: UpdateUserSpeeXrefInput!
    $condition: ModelUserSpeeXrefConditionInput
  ) {
    updateUserSpeeXref(input: $input, condition: $condition) {
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
export const deleteUserSpeeXref = /* GraphQL */ `
  mutation DeleteUserSpeeXref(
    $input: DeleteUserSpeeXrefInput!
    $condition: ModelUserSpeeXrefConditionInput
  ) {
    deleteUserSpeeXref(input: $input, condition: $condition) {
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
