import { useQuery } from '@tanstack/react-query';
import axios from "axios";

export default function Projects() {
  const { isPending, error, data } = useQuery({
    queryFn: () => axios({
      url: 'https://api.github.com/graphql',
      method: "POST",
      data: {
        query: `{
            user(login: "abenevaut") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    id,
                    name
                  }
                }
              }
            }
          }`
      },
      headers: {
        Authorization: 'Bearer TOKEN'
      }
    }).then(response => response.data.data)
  });

  if (isPending) {
    return "Loading...";
  }

  if (error) {
    return <pre>{error.message}</pre>;
  }

  return (
    <div>
      <ul>
        { data.user.pinnedItems.nodes.map((project) => (
          <li key={ project.id }>
            <a href={`https://github.com/abenevaut/${project.name}`}>
              { project.name }
            </a>
          </li>
        )) }
      </ul>
    </div>
  )
}
