import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

      //axios.get request here
      repos: []
    }

  }

  //work on search function
  search (term) {
    console.log(`${term} was searched`);
    // TODO
    // implement axios post request 

    // $.ajax({
    //   method: 'POST',
    //   url: '/repos',
    //   data: {data : term}
    // })
    // .done( (res) => {
    //   console.log('POST data :' + res)
    // })

    axios.post(`/repos`, {
      params: {name: term}
    })
    .then( res => {
      console.log('POST data success :' + res);
    })
    .catch( err => {
      console.log(err);
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));