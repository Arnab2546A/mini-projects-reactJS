
const Notes = (props) => {
  return (
        <div className="mt-10">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-semibold">
          Your Notes
        </h2>

        <span className="text-sm text-slate-500">
          {props.noteArr.length}
        </span>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {props.noteArr.map((note,key)=>(
             <div key={key} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex justify-between gap-4">

            <h3 className="text-lg font-semibold">
              {note.title}
            </h3>

            <button className="text-red-400 hover:text-red-300 text-sm"
            onClick={()=>{props.handleDelete(props.noteArr,key)}}>
              Delete
            </button>

          </div>

          <p className="text-slate-400 mt-3 leading-6">
            {note.desc}
          </p>
        </div>
    ))}
       

      </div>

    </div>

  );
};

export default Notes;