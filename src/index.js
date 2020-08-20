class List {
    notes = [
        { value: "Js", completed: false, id: 1596559757142 },
        { value: "World", completed: false, id: 1596559757043 },
        { value: "Hello", completed: false, id: 1596559756940 },
    ];

    addNote (value) {
        const note = {
            value,
            completed: false,
            id: Date.now(),
        };
        this.notes = [note, ...this.notes];
    };

    editNote (id, value, confirm) {
        if (confirm) {
            this.notes = this.notes.map(note => {
                let newNote = note;
    
                if (note.id === id) {
                    newNote = {
                        ...note,
                        value
                    }
                };
    
                return newNote
            });
        }
    };

    removeNote (id, confirm) {
        if (confirm) {
            this.notes = this.notes.filter(note => note.id !== id);
        };note => note.id !== id
    };

    save() {
        const dataSave = JSON.stringify(this.notes);
        localStorage.setItem(this.name , data);
    };
    download () {
        this.notes = JSON.parse(localStorage.getItem('notes'))
      }
};

class ToDoList extends List {

    getStatistic = function () {
        return this.notes.reduce(
            (acc, note) => {
                note.completed && acc.completed++;
                return acc;
            },
            { total: this.notes.length, completed: 0 }
        );
    };

    completeNote (id) {
        this.notes = this.notes.map(note => ({
            ...note,
            completed: note.id === id ? !note.completed : note.completed
        }))
    };
};

class ContactList {
    constructor (notes){
        this.notes = notes
    };

    searchForANote = function (value) {
        return this.notes.filter(note => note.value.toString() === value.toString());
    };
};

const myNewNote = new ToDoList;
myNewNote.addNote('lala');
myNewNote.editNote(1596559757142, 'Valera', true);
/* console.log(myNewNote.getStatistic());
console.log(myNewNote); */

const myNewNote2 = new ContactList(myNewNote.notes);
const searchedNote = myNewNote2.searchForANote('World');

/* console.log(myNewNote2)
console.log(searchedNote)

console.log(myNewNote);
console.log(myNewNote2); */