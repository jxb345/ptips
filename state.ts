interface BaseEntity {
  id: string | null
}

interface Entry extends BaseEntity {
  user: string;
  title: string;
  content: string;
  votes: number;
  tags: string[];
  comments: string[];
  // dateCreated:
}

const entry = {
  user: '',
  title: '',
  content: '',
  votes: 0,
  tags: [],
  comments: []
  // dateCreated:
};

const entries: Entry[] = [];

interface User {
  firstName: string;
  lastName: string;
  email: string;
  entries: number;
  // dateJoined
}

const user = {
  firstName: '',
  lastName: '',
  email: '',
  entries: 0,
  // dateJoined: new Date(),
}

const users: User[] = []


const newEntry: Entry = {
  id: null,
  user: '',
  title: '',
  content: '',
  votes: 0,
  tags: [],
  comments: []

}

class UsersStore {
  users: User[];
  currentUser: User

  create(newUser: User) {
    this.users = [...this.users, newUser]
  }

  delete(deleteUser: User) {
    // delete user
  }

  edit(editUser: User) {
    // edit user
  }

  load(allUsers: User[]) {
    this.users = allUsers
  }
}

class EntriesStore {
  entries: Entry[];
  currentEntry: Entry

  create(newEntry: Entry) {
    this.entries = [...this.entries, newEntry];
  }

  delete(deleteEntry: Entry) {
    // delete user
  }

  edit(entry: Entry) {
    // edit user
  }

  load(allEntries: Entry[]) {
    this.entries = allEntries;
  }

}


interface EntriesState {
  entries: Entry[];
  currentEntry: Entry;
}

let tag: [string, number] = ['', 0];