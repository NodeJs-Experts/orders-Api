import { getConnectionOptions, Connection, createConnection } from 'typeorm';

// export default async (host = 'database'): Promise<Connection> => {
//   const defaultConnection = await getConnectionOptions();
//   return createConnection(
//     Object.assign(defaultConnection, {
//       host,
//     })
//   );
// };
const create = async () => {
  createConnection();
};

create();
