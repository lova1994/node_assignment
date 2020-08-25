
const lowdb = require("lowdb");
const fileSync = require("lowdb/adapters/FileSync");
const adapter = new fileSync("db.json");
const db = lowdb(adapter);


const getProducts = async () =>   {
return await db.get("products");
};


module.exports = {
    getProducts
};