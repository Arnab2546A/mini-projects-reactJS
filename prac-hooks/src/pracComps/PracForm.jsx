import React, { useState } from 'react'

const PracForm = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitle('')
    console.log(title)
    console.log('form submitted...')
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-slate-900 p-6 shadow-2xl border border-slate-800">

  <h1 className="text-2xl font-bold text-white mb-2">
    Fantasy Title
  </h1>

  <p className="text-sm text-slate-400 mb-6">
    Enter your fantasy title below
  </p>

  <form
    className="flex flex-col gap-4"
    onSubmit={(e) => handleSubmit(e)}
  >
    <input
      type="text"
      placeholder="Enter your fantasy..."
      className="w-full rounded-xl bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
      value={title}
      onChange={(e) => handleChange(e)}
    />

    <button
      type="submit"
      className="w-full rounded-xl bg-amber-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-amber-300 active:scale-[0.98]"
    >
      Submit
    </button>
  </form>

</div>
  )
}

export default PracForm