import { puppyList } from './data.js'
import { useState } from 'react'

import './App.css'

const [puppies, setPuppies] = useState(puppyList)

export default function App(){
      return (
            <div className="App">
            {
              puppies.map((puppy) => {
                   return <p key={puppy.id}>{puppy.name}</p>;
                 })
             }
          </div>
      );

}
