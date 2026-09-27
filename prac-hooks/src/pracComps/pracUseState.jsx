import { useState } from 'react'


const PracUseState = () => {

const [count, setCount] = useState(0)

function increaseCnt(){
    setCount(count+1);
  }

  function decreaseCnt(){
    setCount(count-1);
  }
  return (
       <div className="w-96 rounded-2xl bg-slate-900 p-8 shadow-2xl border border-slate-800">

  <h1 className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
    Counter
  </h1>

  <h2 className="mt-4 mb-8 text-center text-6xl font-bold text-white">
    {count}
  </h2>

  <div className="flex gap-4">
    <button
      onClick={decreaseCnt}
      className="flex-1 rounded-xl bg-red-500 py-3 text-3xl font-bold text-white transition hover:bg-red-600 active:scale-95"
    >
      -
    </button>

    <button
      onClick={increaseCnt}
      className="flex-1 rounded-xl bg-green-500 py-3 text-3xl font-bold text-white transition hover:bg-green-600 active:scale-95"
    >
      +
    </button>
  </div>

</div>
  )
}

export default PracUseState