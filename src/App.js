import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Note from "./Components/Note";
import notes from "./notes_collection";
import "./styles.css";

//using basic function component
// function createNotes(noteItems) {
//   return <Note title={noteItems.title} content={noteItems.content} />;
// }

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="note-container">
        {/* using arrow function */}
        {notes.map((noteItems) => (
          <Note
            key={noteItems.id}
            title={noteItems.title}
            content={noteItems.content}
          />
        ))}
        {/* <Note title={notes[0].title} content={notes[0].content} />
        <Note title={notes[0].title} content={notes[0].content} /> */}
      </div>

      <Footer />
    </div>
  );
}
