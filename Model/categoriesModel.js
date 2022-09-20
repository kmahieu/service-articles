import mongoose from "mongoose";

const categorieShema = mongoose.Schema({

    "name": String
});

const Categorie = mongoose.model('categorie', categorieShema);

export default Categorie;