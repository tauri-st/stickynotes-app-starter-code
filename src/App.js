import React, { Component } from "react";
import Header from "./Header.js";
import NotesList from "./NotesList.js";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      },
    ],
    searchText: "search",
  };

  addnote = () => {
    //create a new note
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };
    //add the new note to existing notes array in State
    this.setState({ notes: [newNote, ...this.state.notes] });
  };

  onType = (editMeId, updatedKey, updatedValue) => {
    //editMeId == id of the note that is edited
    //updatedKey == title or description field?
    //updatedValue == value of title or description

    const updatedNotes = this.state.notes.map((note) => {
      if (note.id !== editMeId) {
        return note;
      } else {
        if (updatedKey === "title") {
          note.title = updatedValue;
          return note;
        } else {
          note.description = updatedValue;
          return note;
        }
      }
    });
    this.setState({ notes: updatedNotes });
  };

  render() {
    return (
      <div>
        <Header searchText={this.state.searchText} addNote={this.addNote} />
        <NotesList onType={this.onType} notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
