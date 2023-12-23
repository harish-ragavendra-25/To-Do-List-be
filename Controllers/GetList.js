const initialData = require('../data/initialData');
const todoListModel = require('../Model/todoList');

const getList = async(req,res) => {
    try {
        const lists = await todoListModel.find();
        res.status(201).json(lists);
    } catch (error) {
        console.log(error);
    }
}

const DeleteList = async(req,res) => {
    const l = req.body;
    try {
        const list = await todoListModel.deleteOne(l);
        const lists = await todoListModel.find();
        return res.status(201).json(lists);
    } catch (error) {
        console.log(error);
    }
}

const addChanges = async(req,res) => {
    const id = req.params.id;
    try
    {
        const lists = await todoListModel.find();
        const list = await todoListModel.findOne({_id:id});
        list.completed = !list.completed;
        const updatedList = await list.save();
        return res.status(201).json(lists);
    }
    catch(err) 
    {
        console.log(err);
    }

}





module.exports = {getList,addChanges,DeleteList};