const Notes = () => {
  return (
    <div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Your Notes
        </h2>

        <span className="text-sm text-slate-500">
          2 Notes
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Note */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex justify-between gap-4">
            <h3 className="text-lg font-semibold">
              React
            </h3>

            <button className="text-red-400 hover:text-red-300 text-sm">
              Delete
            </button>
          </div>

          <p className="text-slate-400 mt-3 leading-6">
            Learn about React components, props, state and hooks.
          </p>

          <p className="text-xs text-slate-600 mt-5">
            Today
          </p>

        </div>

        {/* Note */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex justify-between gap-4">
            <h3 className="text-lg font-semibold">
              JavaScript
            </h3>

            <button className="text-red-400 hover:text-red-300 text-sm">
              Delete
            </button>
          </div>

          <p className="text-slate-400 mt-3 leading-6">
            Revise promises, async await, closures and the event loop.
          </p>

          <p className="text-xs text-slate-600 mt-5">
            Yesterday
          </p>

        </div>

      </div>

    </div>
  );
};

export default Notes;