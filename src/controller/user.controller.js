import User from '../model/user.model.js';

const registerUser = async ( req, res ) => {
    const {name, email, password} = req.body;
    if(!name || !email || !password) {
        return res.status(400).json({message: "Please fill all the fields"}); 
     }

     const user = await User.findOne({email});
     if(user) {
        return res.status(400).json({message: "User already exists"});
     }
      

     const newUser = new User({
        name,
        email,
        password
     })
    await newUser.save();
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        }
    });
}
    
const loginUser = async (req, res) => {
    console.log(req.body);
    try {
        
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: "Please fill all the fields"}); 
         }
        const user = await User.findOne({email});
        console.log(user);
        if(!user) {
            return res.status(400).json({message: "User does not exist please register first "});
    
        }
        const isMatched = await user.comparePassword(password);
        await console.log(password)
         
        if (!isMatched) {
          return res.status(400).json({ message: "Invalid credentials" });
        }
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        res.status(200).json({ accessToken, refreshToken });
    }
     catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
     }
}

export {
    registerUser,
    loginUser
   }
 