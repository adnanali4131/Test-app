/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserSubscription = /* GraphQL */ `
  query GetUserSubscription($id: ID!) {
    getUserSubscription(id: $id) {
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
export const listUserSubscriptions = /* GraphQL */ `
  query ListUserSubscriptions(
    $filter: ModelUserSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;



export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;


export const getUserSubscriptionsByUserId = /* GraphQL */ `
  query GetUserSubscriptionsByUserId(
    $userId: String!
    $limit: Int
    $nextToken: String
  ) {
    listUserSubscriptions(
      filter: { userId: { eq: $userId } }
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;