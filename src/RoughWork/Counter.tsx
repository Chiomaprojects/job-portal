import React, { useState } from 'react';

function Counter() {
  // Declares a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3 className="text-xl font-bold align-middle object-center justify-center">{count}</h3>
 <button onClick={() => setCount(count + 1)} className=" bg-black text-white space-y-4 mr-5 border-2 border-black border-radius-10 p-2">
      Increment
    </button>
    <button onClick={() => setCount(count - 1)} className=" bg-black text-white space-y-4 border-2 border-black border-radius-10 p-2">
      Decrement
    </button>
    </div>
   
  );
}

export default Counter;