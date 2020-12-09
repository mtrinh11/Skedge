const {Calendar} = require('../models')

const GetOneCalendar = async (request, response) => {
    try{
        let oneCalendar = await Calendar.findByPk(request.params.calendarId)
        response.send(oneCalendar)
        console.log('BACKEND: CalendarController Calendar')
    }catch(error){
        console.log('BACKEND: CalendarController GetOneCalendar fails')
        throw error
    }
}

const GetAllCalendars = async (request, response) => {
    try{
        let allCalendars = await Calendar.findAll()
        console.log('BACKEND: CalendarController Calendar')
    }catch(error){
        console.log('BACKEND: CalendarController GetAllCalendars fails')
        throw error
    }
}



module.exports = {
    GetOneCalendar,
    GetAllCalendars
}