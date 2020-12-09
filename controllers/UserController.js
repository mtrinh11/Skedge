const {User} = require('../models')

const CreateUser = async (request, response) => {
    try{
        const body = request.body
        const user = await User.create(body)
        console.log('BACKEND: UserController: CreateUser')
        response.send(user)
    }catch(error){throw error}
}

const GetUser = async (request, response) => {
    try{
        const user = await User.findByPk(request.params.user_id)
        console.log('BACKEND: UserController: GetUser')
        response.send(user)
    }catch(error){
        console.log('BACKEND: UserController: GetUser')    
        throw error
    }
}

const LoginUser = async (request, response) => {
    try{
        const user = await User.findOne({
            where: {email: request.body.email}
        })
        console.log('BACKEND: UserController: LoginUser --email received', user)
        const payload = {
            _id: user.id,
            name: user.name
        }
        user && await(
            (request.body.password_digest === user.password_digest)
            ? response.send(payload) : response.status(401).send({message: 'nope, try again'})
            )
        }catch(error){
        console.log('BACKEND: UserController: LoginUser fails')
            
        throw error
    }
}

module.exports = {
    CreateUser,
    GetUser,
    LoginUser
}