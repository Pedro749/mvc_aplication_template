import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
});


export const HomeModel = mongoose.model('Home', HomeSchema);

export class Home {

}

