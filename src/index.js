class List {
    notes;

    constructor (name) {
        this.name = name;
        this.init();
    };

    init () {
        const data = localStorage.setItem(this.notes, 'save ');
        this.notes = data ? JSON.parse(data) : [];
    };

     save () {
        const data = JSON.stringify(this.notes);
        localStorage.setItem(this.name, data);
    };

    addNote (value) {
        const note = {
            value,
            completed: false,
            id: Date.now(),
        };
        this.notes = [note, ...this.notes];
        this.save();
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
        };
        this.save();
    };

    removeNote (id, confirm) {
        if (confirm) {
            this.notes = this.notes.filter(note => note.id !== id);
        };
        this.save();
    };


};

class ToDoList extends List {

    getStatistic () {
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
        }));
        this.save();
    };
};

class ContactList extends List{

    searchForANote = function (value) {
        return this.notes.filter(note => note.value.toString() === value.toString());
    };
};

const myNewNote = new ToDoList('firstNote');
myNewNote.addNote('lala');
myNewNote.addNote('lala1');
console.log(myNewNote);
myNewNote.editNote(1596559757142, 'Valera', true);
myNewNote.completeNote(1596559757142);
console.log(myNewNote.getStatistic());
console.log(myNewNote);

const toDo = new ToDoList('ListSave');
console.log(toDo);

const myNewNote2 = new ContactList(myNewNote.notes, 'secondNote');
myNewNote2.addNote('lala');
myNewNote2.addNote('lala1');
myNewNote2.addNote('lala2');
console.log(myNewNote2.searchForANote('lala'));
console.log(myNewNote2.searchForANote('lala1'));


console.log(myNewNote2);
