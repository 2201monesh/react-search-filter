import { useState } from 'react';
import './index.css'
import {Users} from './users'
import Table from './Table';

function App() {

  const [query, setQuery] = useState("");
  // console.log(query);

  const search = (data) => {
    return data.filter(item => item.first_name.toLowerCase().includes(query) || item.last_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query));
  }

  return (
    <div className="App">
      <input className='search' placeholder='search here' type="text" onChange={e => setQuery(e.target.value)} />

      {/* <ul className="list">
      {Users.filter(user => user.first_name.toLowerCase().includes(search)).map(user => (
        <li key={user.id} className="listItem">{user.first_name}</li>
      ))}
      </ul> */}

      <Table data={search(Users)} />
    </div>
  );
}

export default App;
