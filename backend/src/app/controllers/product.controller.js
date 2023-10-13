const Product = require('../models/product.model.js');

const addProduct = async (req, res) => {
    const {id, name, idCl, quantity, price, idM, idCo, desc} = req.body;
    try {
        const isExist = await Product.findOne({P_ID});
        if(isExist) {
            return res.status(409).json('Product already exists');
        }

        const product = await Product.create({
            id,
            name,
            idCl,
            quantity,
            price,
            idM,
            idCo,
            desc,
        });
        return res.status(201).json(product);
    } catch (error) {
        return res.status(500).json(error);
    }
}

// const signin = async(req, res) => {
//     const {username, password} = req.body;
//     try {
//         const user = await User.findOne({
//             username
//         });

//         const isValid = await bcrypt.compare(password, user.password);
//         if(!isValid) {
//             return res.status(401).json('Wrong password');
//         }
        
//         return res.status(200).json(user);
//     } catch (error) {
//         return res.status(500).json(error);
//     }
// }

module.exports = {
    addProduct
}