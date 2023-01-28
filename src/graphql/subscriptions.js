/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCharity = /* GraphQL */ `
  subscription OnCreateCharity($filter: ModelSubscriptionCharityFilterInput) {
    onCreateCharity(filter: $filter) {
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
export const onUpdateCharity = /* GraphQL */ `
  subscription OnUpdateCharity($filter: ModelSubscriptionCharityFilterInput) {
    onUpdateCharity(filter: $filter) {
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
export const onDeleteCharity = /* GraphQL */ `
  subscription OnDeleteCharity($filter: ModelSubscriptionCharityFilterInput) {
    onDeleteCharity(filter: $filter) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
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
export const onCreateSpee = /* GraphQL */ `
  subscription OnCreateSpee($filter: ModelSubscriptionSpeeFilterInput) {
    onCreateSpee(filter: $filter) {
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
export const onUpdateSpee = /* GraphQL */ `
  subscription OnUpdateSpee($filter: ModelSubscriptionSpeeFilterInput) {
    onUpdateSpee(filter: $filter) {
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
export const onDeleteSpee = /* GraphQL */ `
  subscription OnDeleteSpee($filter: ModelSubscriptionSpeeFilterInput) {
    onDeleteSpee(filter: $filter) {
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
export const onCreateUserSpeeXref = /* GraphQL */ `
  subscription OnCreateUserSpeeXref(
    $filter: ModelSubscriptionUserSpeeXrefFilterInput
  ) {
    onCreateUserSpeeXref(filter: $filter) {
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
export const onUpdateUserSpeeXref = /* GraphQL */ `
  subscription OnUpdateUserSpeeXref(
    $filter: ModelSubscriptionUserSpeeXrefFilterInput
  ) {
    onUpdateUserSpeeXref(filter: $filter) {
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
export const onDeleteUserSpeeXref = /* GraphQL */ `
  subscription OnDeleteUserSpeeXref(
    $filter: ModelSubscriptionUserSpeeXrefFilterInput
  ) {
    onDeleteUserSpeeXref(filter: $filter) {
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
