import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      search_box : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState( {monsters : users}));
  }

  render(){
    const {monsters, search_box} = this.state;
    const filtered_monsters = monsters.filter(monster => monster.name.toLowerCase().includes(search_box.toLowerCase()))

    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder = "find monsters" handleChange={e => {this.setState({search_box : e.target.value})}}></SearchBox>
        <CardList monsters={filtered_monsters}></CardList>
      </div>
    );
  }
}

export default App;
