import * as mongoose from 'mongoose';

const CrushSchema = new mongoose.Schema({
    nome: {type: String, required: true },
    apelido: {type: String, required: true, unique: true},
    whatsapp: {type: String, required: true, unique: true},
    createdAt: {type: Date, default: Date.now}
})

export default mongoose.model('Crush', CrushSchema);