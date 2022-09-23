import { useQuery, gql } from "@apollo/client";
import { Python, PythonT } from "./Python";

const GET_PYTHONS_QUERY = gql`
  query getPythons {
    pythons {
      id
      first
      last
    }
  }
`;

export function Pythons() {
  const { data, loading, error } = useQuery<{ pythons: PythonT[] }>(
    GET_PYTHONS_QUERY,
    {
      onError: (error) => {
        console.error(error);
      },
      // fetchPolicy: "no-cache"
      errorPolicy: "all"
    }
  );
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p className="error">ERROR: Unexpected Server Error</p>;
  }
  return (
    <ul>
      {data?.pythons.map(({ id, ...rest }) => {
        return (
          <li key={id}>
            <Python {...rest} />
          </li>
        );
      })}
    </ul>
  );
}
