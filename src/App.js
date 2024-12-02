import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { v4 as uuid } from "uuid";
import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
	const [notes, setNotes] = useState([
		{
			id: uuid(),
			text: "This is my first note!",
			date: "11/30/2024",
		},
		{
			id: uuid(),
			text: "This is my second note!",
			date: "11/29/2024",
		},
		{
			id: uuid(),
			text: "This is my third note!",
			date: "11/28/2024",
		},
		{
			id: uuid(),
			text: "This is my fourth note!",
			date: "11/27/2024",
		},
	]);

	const [searchText, setSearchText] = useState("");
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: uuid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNode = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && "dark-mode"}`}>
			<div className="container">
				<Navbar handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNode}
				/>
			</div>
		</div>
	);
}

export default App;
