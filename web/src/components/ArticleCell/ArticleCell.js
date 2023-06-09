import Article from '../Article/Article'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>
    Error: {error?.message}{' '}
    <pre>
      {JSON.stringify(
        error?.networkError?.result?.errors?.map(({ message }) => message),
        null,
        2
      )}
    </pre>
  </div>
)

export const Success = Article
