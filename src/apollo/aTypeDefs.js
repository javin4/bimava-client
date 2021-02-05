import gql from 'graphql-tag';

export const typeDefs = gql`
  type Item {
    id: ID!
    text: String!
    done: Boolean!
  }

type Mutation {
    changeItem(id: ID!): Boolean
    deleteItem(id: ID!): Boolean
    addItem(text: String!): Item
}

`;