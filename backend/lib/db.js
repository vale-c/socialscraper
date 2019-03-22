import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

//Setup the DATABASE
const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ twitter: [], instagram: [] }).write()

export default db;
