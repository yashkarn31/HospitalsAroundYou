const mongoose = require("mongoose");

"mongodb+srv://yashkarn3133:nidXDvuu06FBhmlD@cluster0.gut1ir3.mongodb.net/";

const uri = "mongodb+srv://<username>:<password>@cluster0.gut1ir3.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=Cluster0";

let dbURL = uri.replace("<username>", process.env.DB_USERNAME);
dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD);
dbURL = dbURL.replace("<dbName>", process.env.DB_NAME);

mongoose.connect(dbURL).then(() => {
    console.log("-----------database connected-----------");
})
    .catch((err) => {
        console.log("-----------database not connected-----------");
        console.log(err);
    })