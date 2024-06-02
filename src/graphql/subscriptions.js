/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserSubscription = /* GraphQL */ `
  subscription OnCreateUserSubscription(
    $filter: ModelSubscriptionUserSubscriptionFilterInput
    $owner: String
  ) {
    onCreateUserSubscription(filter: $filter, owner: $owner) {
      id
      userId
      title
      description
      checked
      price
      email
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUserSubscription = /* GraphQL */ `
  subscription OnUpdateUserSubscription(
    $filter: ModelSubscriptionUserSubscriptionFilterInput
    $owner: String
  ) {
    onUpdateUserSubscription(filter: $filter, owner: $owner) {
      id
      userId
      title
      description
      checked
      price
      email
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUserSubscription = /* GraphQL */ `
  subscription OnDeleteUserSubscription(
    $filter: ModelSubscriptionUserSubscriptionFilterInput
    $owner: String
  ) {
    onDeleteUserSubscription(filter: $filter, owner: $owner) {
      id
      userId
      title
      description
      checked
      price
      email
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onCreateProfile(filter: $filter, owner: $owner) {
      id
      email
      profilePicture
      fullName
      phoneNumber
      address
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onUpdateProfile(filter: $filter, owner: $owner) {
      id
      email
      profilePicture
      fullName
      phoneNumber
      address
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile(
    $filter: ModelSubscriptionProfileFilterInput
    $owner: String
  ) {
    onDeleteProfile(filter: $filter, owner: $owner) {
      id
      email
      profilePicture
      fullName
      phoneNumber
      address
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
