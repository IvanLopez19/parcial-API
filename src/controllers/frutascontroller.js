const frutasCtrl={};

const frutamodel= require('../models/frutasM');

frutasCtrl.getfrutas=(async(req,res)=>{
    const frutas = await frutamodel.find();
    res.json(frutas);
    })


frutasCtrl.getfruta=(async(req,res)=>{
    const fruta= await frutamodel.findById(req.params.id);
    res.json(fruta);
})

frutasCtrl.postfruta=(async(req,res)=>{
    const {nombre, peso, color, arboles, calorias}= req.body
    const newfruta= new frutamodel({
        nombre: nombre,
        peso: peso,
        color: color,
        arboles: arboles,
        calorias: calorias
    })
    await newfruta.save()
    res.json({title:'sadmksd'});})

frutasCtrl.deletefruta=(async(req,res)=>{
    await frutamodel.findByIdAndDelete(req.params.id);
    res.json({message:'objeto borrado'});
})

module.exports= frutasCtrl;



