import User from '../model/User.js'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        // simple validation
        if (
            !name && name.trim() === '' &&
            !email && email.trim() === '' &&
            !password && password.length < 3
        ) {
            return res.status(400).send({ 
                success: false,
                message: 'Please fill all fields' 
            })
        }

        // check whether the user exists or not
        let user = await User.findOne({ email: email })

        if(user) {
            return res.status(401).send({ 
                success: false,
                message: 'User already exists'
            })
        } 

        const hashPassword = bcrypt.hash(password, 10)

        // save user
        user = await User.create({
            name,
            email,
            password: hashPassword
        })

        return res.status(201).send({
            success: true, 
            message: 'User created',
            user
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
    const { email, password } = req.body

    // simple validation
    if (
        !email && email.trim() === '' &&
        !password && password.length < 3
    ) {
        return res.status(401).send({ 
            success: false,
            message: 'Fill fields correct'
        })
    }

    let existingUser
    try {
        existingUser = await User.findOne({ email, password })

        if (!existingUser) {
            return res.status(401).send({ 
                success: false,
                message: 'Wrong email or password'
            })
        } 

        // check password
        const isMatch = await bcrypt.compare(password, existingUser.password)
        if (!isMatch) {
            return res.status(401).send({ 
                success: false,
                message: 'Wrong email or password'
            })
        } 

        return res.status(200).send({
            success: true, 
            message: 'Login successfull',
            existingUser
        })

    } catch (error) {
        return res.status(500).send({ 
            message: 'Error in Login callback',
            success: false,
            error
        })
    }

}