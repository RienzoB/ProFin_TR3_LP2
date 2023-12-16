import { TaskModel } from '../models/tasks-models.js';
import { UserModel } from '../models/user-models.js';

export  const ctrlrCreateTask = async (req, res) => {
    try{

        const user = await UserModel.findById(req.body.user)
        if(!user){
            return res.status(404);
        };
            
        const newTask = new TaskModel(req.body);

        await newTask.save();
        await user.updateOne({ $push: { tasks: newTask.id } },)
//OTra Manera de realizar el Create
//user.tasks.push(newTask._id); 
        await user.save(); 


        res.status(201).json(newTask);
    }catch(err){
        console.log(err);
    res.status(500).json(err);
    }

}
export const ctrlrFindAllTask = async (req, res) => {
    try{
        const tasks = await TaskModel.find();
        res.status(200).json(tasks);
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}

export const ctrlrDeleteTask = async (req, res) => {
    try{
        const  { taskId } = req.params;
        
        const task = await TaskModel.findById(taskId);
        if(!task){
            return res.status(404);
        };

        const user = await userModel.byId(task.user);
       
        await task.deleteOne();

        await user.updateOne({ $pull: { tasks: task.id } },)
    
        await user.save(); 

        res.status(200).json({message: 'Task deleted'});
    
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}