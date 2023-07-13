import React, { useState } from 'react';


const SummaryPage = () => {

  const [checked, setCheckted] = useState(false);


  return (
    <div>
      <form>
        <input 
          type='checkbox'
          checked={checked}
          id='confirm-checkbox'
          onChange={(e) => setCheckted(e.target.checked)}
        />{" "}
        <label htmlFor='confirm-checkbox'>
          주문하려는 것을 확인하셨나요?
        </label>
        <br />
        <button disabled={checked} type='submit'>주문확인하셨나요</button>
      </form>
    </div>
  )
}

export default SummaryPage

