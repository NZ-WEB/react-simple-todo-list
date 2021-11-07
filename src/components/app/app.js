import React from 'react';

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

const App = () => {

  const data = [
    {label: 'Going to the learn React', important: false, id: 1},
    {label: 'I Want to break free', important: true, id: 2},
    {label: 'I love It', important: false, id: 3},
  ];

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data} />
      <PostAddForm/>
    </div>
  )
}

export default App;
