import { useState } from "react";
import UsersTable from "../components/UsersTable.jsx";

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Jessey pinkman',
    age: 27,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'methchef'],
  }
];
const UsersPage = () => {
  const [page, setPage] = useState(0);
  const paginatedArray = () => {
    // const main = data.map((user) => {
    //   return [user]
    // })
    // return main
    const paginated = [];
    for (var i = 0; i < data.length; i += 2) {
      paginated.push([data[i], data[i + 1]])
    }
    return paginated;
  }


  return (
    <div>
      <h1>UsersPage</h1>
      <UsersTable data={paginatedArray()[page]} />
      <div>
        {
          paginatedArray().map((v, i) => <button key={i} onClick={() => setPage(i)}>{i + 1}</button>)
        }
      </div>
    </div>
  )
}

export default UsersPage