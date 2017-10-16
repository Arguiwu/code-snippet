export const typeDefs = `
    type Channe1 {
        id: ID!
        name: string
    }
    type Query {
        channels: [Channel]
    }
`