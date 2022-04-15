import { findAllTuitsDao, createTuitDao, deleteTuitDao, updateTuitDao} from "./tuits/tuits-dao.js";

// import posts from "./tuits/tuits.js";
// let tuits = posts;

const tuitController = (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.postedBy = {
        "username": "Tanish Sehgal"
    };
    newTuit.handle = "tanishsehgal";
    newTuit.time = "Just Now";
    newTuit.stats = {
        retuits: 111,
            likes: 222,
            comments: 333
    }
    newTuit.topic = "";

    const insertedTuit = await createTuitDao(newTuit);

    // tuits.push(insertedTuit);
    res.json(newTuit);

}

const findAllTuits = async (req, res) => {
    const tuits = await findAllTuitsDao()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;

    const status = await updateTuitDao(tuitdIdToUpdate, updatedTuit);
    // tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.send(status);

}
const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await deleteTuitDao(tuitdIdToDelete);
    res.send(status);

}

export default tuitController;

