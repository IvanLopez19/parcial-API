const{Router}=require('express');
const router= Router();

const {getfrutas, getfruta, postfruta, deletefruta}=require('../controllers/frutascontroller')

router.route('/:id')
    .get(getfruta)
    .delete(deletefruta);
    
router.route('/')
    .get(getfrutas)
    .post(postfruta);



module.exports=router;