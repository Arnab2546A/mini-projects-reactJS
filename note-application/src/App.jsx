import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <h1 className="text-2xl font-bold">
            Notes App
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col gap-10">

          {/* Top - Form */}
          <section>
            <NoteForm />
          </section>

          {/* Bottom - Notes */}
          <section>
            <Notes />
          </section>

        </div>

      </main>

    </div>
  );
};

export default App;