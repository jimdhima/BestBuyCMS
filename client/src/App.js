import React from "react";
import axios from 'axios';

function App() {
  const foo = e => {
    axios.get('api/products?q=iphone').then(console.log).catch(console.log)
  }

  return (
    <div>
      <button type="button" onClick={(e) => foo(e)}>Test</button>
    </div>
  );
}

export default App;
