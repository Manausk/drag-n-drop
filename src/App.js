import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Note from "./components/Note";
import Bin from "./components/Bin";
import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [binnedItems, setBinnedItems] = useState([]);

  useEffect(() => {
    const initialNotes = ["Note 1", "Note 2", "Note 3"];
    localStorage.setItem("noteslist", JSON.stringify(initialNotes));

    let array = localStorage.getItem("noteslist");
    setNotes(JSON.parse(array));
  }, []);

  console.log(notes);

  return (
    <DndProvider backend={HTML5Backend}>
      <h1 className="text-center text-3xl font-semibold mt-4 py-2">
        Drag-n-Drop
      </h1>
      {notes.map((item) => (
        <Note
          key={new Date().getTime() + Math.floor(Math.random() * 1000)}
          note={item}
        />
      ))}

      <Bin />
    </DndProvider>
  );
}

export default App;
