const express = require('express');
const Router = express.Router();
const {getList,addChanges,DeleteList} = require('../Controllers/GetList');
const {addList} = require('../Controllers/Addlist');

Router.route('/').get(getList);
Router.route('/').post(DeleteList);
Router.route('/list').post(addList);
Router.route('/:id').post(addChanges);


module.exports = Router;