const todolistModel = require('../Model/todoList');

const addList = async(req,res) => {
    const newList = req.body;
    try {
        const existingList = await todolistModel.findOne({title:newList.title});
        if(!existingList)
        {
            const addList = await new todolistModel(newList);
            const insertList = await addList.save();
            console.log(insertList);
            return res.status(201).json(insertList);
        }
        else
        {
            return res.status(409).json({message:'the list already exist'});
        }
    } catch (error) {
        return res.status(409).json({message:error})
    }
}


module.exports = {addList};