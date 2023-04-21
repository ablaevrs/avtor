import User from '../model/User.js'

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (
            !name && name.trim() === '' &&
            !email && email.trim() === '' &&
            !password && password.length < 3
        ) {
            return res.status(422).json({ message: 'Invalid data' })
        }

        // check whether the user exists or not
        let user = await User.findOne({ email: email })

        if(user) {
            return res.status(400).json({ message: 'User have already register'})
        } 

        user = await User.create({
            name,
            email,
            password
        })

        return res.status(201).json({ message: 'User created'})
        
    } catch (error) {
        res.status(500).json({ message: 'Error:' + error })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body

    if (
        !email && email.trim() === '' &&
        !password && password.length < 3
    ) {
        return res.status(422).json({ message: 'Invalid data' })
    }

    let existingUser
    try {
        existingUser = await User.findOne({ email, password })

        if (!existingUser) {
            res.status(422).json({ message: 'Wrong email or password'})
        } 

        return res.status(200).json({ id: existingUser._id, message: 'Login successfull' })


    } catch (error) {
        res.status(500).json({ message: 'Error:' + error })
    }

}