require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const {HoldingsModel}=require('./model/HoldingsModel');
const {PositionsModel}=require('./model/PositionsModel');
const bodyparser=require("body-parser");
const cors=require("cors");
const PORT=process.env.PORT ||8080;
const MONGO_URL=process.env.MONGO_URL; 
const app=express();
app.use(cors());
app.use(bodyparser.json());


app.get('/allHoldings',async  (req,res)=>{
    let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  });
  app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
  
    newOrder.save();
  
    res.send("Order saved!");
  });
  

app.listen(PORT,()=>{
    console.log("app is started");
    
});
try{
  mongoose.connect(MONGO_URL);
}
catch(error){
  console.log(error);
}
