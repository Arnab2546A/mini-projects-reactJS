import {useState} from 'react'
const NoteForm = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('form submitted')
        console.log(title);
        console.log(desc)
        setTitle('');
        setDesc('');
    }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      
      <h2 className="text-xl font-semibold mb-6">
        Add New Note
      </h2>

      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Title
          </label>

          <input
            type="text"
            placeholder="Enter title..."
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl outline-none focus:border-blue-500"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Note
          </label>

          <textarea
            rows="7"
            placeholder="Write your note..."
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl outline-none resize-none focus:border-blue-500"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium transition"
        >
          Add Note
        </button>

      </form>
    </div>
  );
};

export default NoteForm;