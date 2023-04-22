import User from '../model/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { name, email } = req.body

        // simple validation
        if (
            !name && name.trim() === '' &&
            !email && email.trim() === '' &&
            !req.body.password && req.body.password.length < 3
        ) {
            return res.status(400).send({ 
                success: false,
                message: 'Please fill all fields' 
            })
        }

        // check whether the user exists or not
        let existsUser = await User.findOne({ email: email })

        if(existsUser) {
            return res.status(401).send({ 
                success: false,
                message: 'User already exists'
            })
        } 

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password, salt)

        // save user
        const doc = new User({
            name,
            email,
            password: hash
        })

        const user = await doc.save()

        // create token
        // save userId in the token, secret key and expire time
        const token = jwt.sign({
            _id: user._id
        }, 
        'secret123',
        {
            expiresIn: '30d'
        })

        const { password, ...userData } = user._doc

        return res.status(201).send({
            success: true, 
            message: 'User created',
            ...userData,
            token
        })
        
    } catch (error) {
        return res.status(500).send({ 
            message: 'Error in Register callback',
            success: false,
            error
        })
    }
}

export const login = async (req, res) => {
    const { email } = req.body

    // simple validation
    if (
        !email && email.trim() === '' &&
        !req.body.password && req.body.password.length < 3
    ) {
        return res.status(401).send({ 
            success: false,
            message: 'Fill fields correct'
        })
    }

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(403).send({ 
                success: false,
                message: 'Wrong email or password'
            })
        } 

        // check password
        const isValidPass = await bcrypt.compare(req.body.password, user._doc.password)
        if (!isValidPass) {
            return res.status(403).send({ 
                success: false,
                message: 'Wrong email or password'
            })
        } 

        const token = jwt.sign({
            _id: user._id
        }, 
        'secret123',
        {
            expiresIn: '30d'
        })

        const { password, ...userData } = user._doc

        return res.status(200).send({
            success: true, 
            message: 'Login successfull',
            ...userData,
            token
        })

    } catch (error) {
        return res.status(500).send({ 
            message: 'Error in Login callback',
            success: false,
            error
        })
    }

}

export const me = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if (!user) {
            return res.status(404).json({ 
                message: 'User not found',
            })
        }

        const { password, ...userData } = user._doc

        return res.status(200).send({
            success: true, 
            message: 'Successfull',
            ...userData,
        })

    } catch (error) {
        return res.status(500).send({ 
            message: 'Access Denied',
            success: false,
            error
        })
    }

}