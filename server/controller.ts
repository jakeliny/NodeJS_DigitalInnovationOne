import model from './model';

class Controller {

    constructor() { }


    //select
    getCrushs() {
        return model.find({});
    }

    select(req, res) {
        this.getCrushs()
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }));
    }


    //selectone
    getCrushsByID(id) {
        return model.find(id);
    }

    selectOne(req, res) {
        const id = { _id: req.params.id }

        this.getCrushsByID(id)
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

    //delete
    deleteByID(id) {
        return model.deleteOne(id);
    }

    delete(req, res) {
        const id = { _id: req.params.id }

        this.deleteByID(id)
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }));
    }


    //update
    updateCrush(id, data) {
        return model.findOneAndUpdate(id, data);
    }

    update(req, res) {
        const id = { _id: req.params.id }
        const crush = req.body;

        this.updateCrush(id, crush)
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }));
    }


    //insert
    createCrush(data) {
        return model.create(data);
    }

    insert(req, res) {
        const crush = req.body;

        this.createCrush(crush)
            .then(crushs => res.status(200).json({ 'result': crushs }))
            .catch(err => res.status(400).json({ 'result': err }));
    }

}

export default Controller;