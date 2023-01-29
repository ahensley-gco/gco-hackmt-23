/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCharity = /* GraphQL */ `
  mutation CreateCharity(
    $input: CreateCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    createCharity(input: $input, condition: $condition) {
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
export const updateCharity = /* GraphQL */ `
  mutation UpdateCharity(
    $input: UpdateCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    updateCharity(input: $input, condition: $condition) {
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
export const deleteCharity = /* GraphQL */ `
  mutation DeleteCharity(
    $input: DeleteCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    deleteCharity(input: $input, condition: $condition) {
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
      note_date_time
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
      note_date_time
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
      note_date_time
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
          spee_id
          sponsor_date
          sponsor_user
          created_by
          createdAt
          updatedAt
        }
        nextToken
      }
      user_spee_xrefs {
        items {
          id
          speeId
          userSpeeXrefId
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
          spee_id
          sponsor_date
          sponsor_user
          created_by
          createdAt
          updatedAt
        }
        nextToken
      }
      user_spee_xrefs {
        items {
          id
          speeId
          userSpeeXrefId
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
          spee_id
          sponsor_date
          sponsor_user
          created_by
          createdAt
          updatedAt
        }
        nextToken
      }
      user_spee_xrefs {
        items {
          id
          speeId
          userSpeeXrefId
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
      spees {
        items {
          id
          speeId
          userSpeeXrefId
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
      spees {
        items {
          id
          speeId
          userSpeeXrefId
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
      spees {
        items {
          id
          speeId
          userSpeeXrefId
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
export const createSpeeUserSpeeXref = /* GraphQL */ `
  mutation CreateSpeeUserSpeeXref(
    $input: CreateSpeeUserSpeeXrefInput!
    $condition: ModelSpeeUserSpeeXrefConditionInput
  ) {
    createSpeeUserSpeeXref(input: $input, condition: $condition) {
      id
      speeId
      userSpeeXrefId
      spee {
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
      userSpeeXref {
        id
        spee_id
        sponsor_date
        sponsor_user
        created_by
        spees {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSpeeUserSpeeXref = /* GraphQL */ `
  mutation UpdateSpeeUserSpeeXref(
    $input: UpdateSpeeUserSpeeXrefInput!
    $condition: ModelSpeeUserSpeeXrefConditionInput
  ) {
    updateSpeeUserSpeeXref(input: $input, condition: $condition) {
      id
      speeId
      userSpeeXrefId
      spee {
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
      userSpeeXref {
        id
        spee_id
        sponsor_date
        sponsor_user
        created_by
        spees {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpeeUserSpeeXref = /* GraphQL */ `
  mutation DeleteSpeeUserSpeeXref(
    $input: DeleteSpeeUserSpeeXrefInput!
    $condition: ModelSpeeUserSpeeXrefConditionInput
  ) {
    deleteSpeeUserSpeeXref(input: $input, condition: $condition) {
      id
      speeId
      userSpeeXrefId
      spee {
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
      userSpeeXref {
        id
        spee_id
        sponsor_date
        sponsor_user
        created_by
        spees {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
