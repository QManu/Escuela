import { connect } from "mongoose"; 
import { MONGOBD_URI } from "./config";

(async () => {
    try {
        const db = await connect(MONGOBD_URI);
        console.log("Database Connected to", db.connection.name);
    } catch (error) {
        console.error(error);

        

    }
})();  