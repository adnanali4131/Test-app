/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserSubscription = /* GraphQL */ `
  mutation CreateUserSubscription(
    $input: CreateUserSubscriptionInput!
    $condition: ModelUserSubscriptionConditionInput
  ) {
    createUserSubscription(input: $input, condition: $condition) {
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
export const updateUserSubscription = /* GraphQL */ `
  mutation UpdateUserSubscription(
    $input: UpdateUserSubscriptionInput!
    $condition: ModelUserSubscriptionConditionInput
  ) {
    updateUserSubscription(input: $input, condition: $condition) {
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
export const deleteUserSubscription = /* GraphQL */ `
  mutation DeleteUserSubscription(
    $input: DeleteUserSubscriptionInput!
    $condition: ModelUserSubscriptionConditionInput
  ) {
    deleteUserSubscription(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
