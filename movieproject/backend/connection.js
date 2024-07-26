const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://smmruthyannageorge:annaelza03@cluster0.jwcbxgd.mongodb.net/movieDB?retryWrites=true&w=majority&appName=Cluster0')
.then((res)=>{
    console.log('DB connected');
})
.catch((res)=>{
    console.log('DB not connected');
})