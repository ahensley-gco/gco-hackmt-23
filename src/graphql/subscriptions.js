/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSpee = /* GraphQL */ `
  subscription OnCreateSpee($filter: ModelSubscriptionSpeeFilterInput) {
    onCreateSpee(filter: $filter) {
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
export const onUpdateSpee = /* GraphQL */ `
  subscription OnUpdateSpee($filter: ModelSubscriptionSpeeFilterInput) {
    onUpdateSpee(filter: $filter) {
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
export const onDeleteSpee = /* GraphQL */ `
  subscription OnDeleteSpee($filter: ModelSubscriptionSpeeFilterInput) {
    onDeleteSpee(filter: $filter) {
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
export const onCreateUserSpeeXref = /* GraphQL */ `
  subscription OnCreateUserSpeeXref(
    $filter: ModelSubscriptionUserSpeeXrefFilterInput
  ) {
    onCreateUserSpeeXref(filter: $filter) {
      id
      spee_id
      sponser_date
      sponser_user
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserSpeeXref = /* GraphQL */ `
  subscription OnUpdateUserSpeeXref(
    $filter: ModelSubscriptionUserSpeeXrefFilterInput
  ) {
    onUpdateUserSpeeXref(filter: $filter) {
      id
      spee_id
      sponser_date
      sponser_user
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserSpeeXref = /* GraphQL */ `
  subscription OnDeleteUserSpeeXref(
    $filter: ModelSubscriptionUserSpeeXrefFilterInput
  ) {
    onDeleteUserSpeeXref(filter: $filter) {
      id
      spee_id
      sponser_date
      sponser_user
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUpdate = /* GraphQL */ `
  subscription OnCreateUpdate($filter: ModelSubscriptionUpdateFilterInput) {
    onCreateUpdate(filter: $filter) {
      id
      name
      description
      spee_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUpdate = /* GraphQL */ `
  subscription OnUpdateUpdate($filter: ModelSubscriptionUpdateFilterInput) {
    onUpdateUpdate(filter: $filter) {
      id
      name
      description
      spee_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUpdate = /* GraphQL */ `
  subscription OnDeleteUpdate($filter: ModelSubscriptionUpdateFilterInput) {
    onDeleteUpdate(filter: $filter) {
      id
      name
      description
      spee_id
      createdAt
      updatedAt
    }
  }
`;
