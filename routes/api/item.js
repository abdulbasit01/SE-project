const express=require('express');
const router=express.Router();



const item=require('../../models/items');

router.get('/' , (req,res)=>{

    item.find()
        .sort({date:-1})
        .then(item=>res.json(item))

});
router.post('/' , (req,res)=>{
    const newItem=new item({
        name:req.body.name
    })
    newItem.save().then(item=>res.json())
});
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
      .then(item => item.remove().then(() => res.json({ success: true })))
      .catch(err => res.status(404).json({ success: false }));
});
module.exports=router