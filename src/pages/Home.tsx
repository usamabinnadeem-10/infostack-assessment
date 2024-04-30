import { useState } from "react";

const Home = ({ notes, addNote, handleLogout }) => {
  const [currNote, setCurrNote] = useState("");
  const [currNoteTitle, setCurrNoteTitle] = useState("");
  const [currNoteDate, setCurrNoteDate] = useState("");
  const [isNoteAdding, setIsNoteAdding] = useState(false);

  const handleAddCurrNote = () => {
    if (!currNoteTitle) {
      window.alert("Please add note title");
      return;
    }

    if (!currNote) {
      window.alert("Please add note text");
      return;
    }

    if (!currNoteDate) {
      window.alert("Please add note date");
      return;
    }

    addNote({
      title: currNoteTitle,
      text: currNote,
      date: currNoteDate,
    });
    setIsNoteAdding(false);
    setCurrNote("");
    setCurrNoteTitle("");
    setCurrNoteDate("");
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-screen h-screen flex flex-col items-center p-10">
      <div className="w-full justify-end flex">
        <button className="bg-red-500" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="flex">
        <button
          className="bg-white text-black"
          onClick={() => setIsNoteAdding(true)}
        >
          Add new note
        </button>
      </div>
      {isNoteAdding && (
        <div className="space-y-4 md:space-y-6 mt-10 p-4 border-amber-600 border rounded-md">
          <input
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title"
            onChange={(e) => setCurrNoteTitle(e.target.value)}
          />
          <textarea
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add text here..."
            onChange={(e) => setCurrNote(e.target.value)}
          />
          <input
            name="date"
            id="date"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add text here..."
            onChange={(e) => setCurrNoteDate(e.target.value)}
          />
          <button
            onClick={handleAddCurrNote}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Create Note
          </button>
        </div>
      )}
      <div className="flex gap-10 flex-wrap mt-10 mx-auto max-w-lg overflow-auto max-h-[70vh]">
        {notes.map((n, idx) => {
          return (
            <div
              key={idx}
              className="bg-white p-2 flex flex-col text-sm rounded-md max-w-[400px] min-w-[200px] gap-2"
            >
              <h3 className="text-black font-extrabold">{n.title}</h3>
              <p className="text-gray-500">{n.text}</p>
              <span className="text-black text-[12px]">{n.date}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
