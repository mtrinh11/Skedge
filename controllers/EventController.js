const {Event} = require('../models')

const CreateEvent = async (request, response) => {
    try {
        const body = request.body
        const newEvent = await Event.create(body)
        console.log('BACKEND: EventController CreateEvent')
        response.send(newEvent)
    } catch (error) {
        console.log('BACKEND: EventController CreateEvent fails')
        throw error
    }
}

const GetOneEvent = async (request, response) => {
    try {
        const eventToGet = await Event.findByPk(request.param.eventId)
        console.log('BACKEND: EventController GetOneEvent')
        response.send(eventToGet)
    } catch (error) {
        console.log('BACKEND: EventController GetOneEvent fails')
        throw error
    }
}

const GetAllEvents = async (request, response) => {
    try {
        let allEvents = await Event.findAll()        
        console.log('BACKEND: EventController GetAllEvents')
        response.send(allEvents)
    } catch (error) {
        console.log('BACKEND: EventController GetAllEvents fails')
        throw error
    }
}

const EditEvent = async (request, response) => {
    try {
        let eventId = parseInt(request.params.eventId)
        let updatedDetails = request.body
        let editedEvent = await Event.update(updatedDetails,{
            where: {
                id: eventId
            }
        })
        console.log('BACKEND: EventController EditEvent')
        response.send(editedEvent)
    } catch (error) {
        console.log('BACKEND: EventController EditEvent fails')
        throw error
    }
}

const DeleteEvent = async (request, response) => {
    try {
        let eventId = parseInt(request.paramseventId)
        await Event.destroy({
            where: {
                id: eventId
            }
        })
        console.log('BACKEND: EventController DeleteEvent')
        response.send()
    } catch (error) {
        console.log('BACKEND: EventController DeleteEvent fails')
        throw error
    }
}

const EventRouteTest = async (request, response) => {
    try {
        console.log('BACKEND: EventController EventRouteTest')
        response.send({message:'Route Test Works'})
    } catch (error) {
        console.log('BACKEND: EventController EventRouteTest fails')
        throw error
    }
}



module.exports = {
    CreateEvent,
    GetOneEvent,
    GetAllEvents,
    EditEvent,
    DeleteEvent,
    EventRouteTest
}