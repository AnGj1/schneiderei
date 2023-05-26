module.exports = {


    friendlyName: 'Find    ',


    description: 'Find appointment.',


    inputs: {

    },


    exits: {

    },


    fn: async function (inputs) {
        console.log("Find Appointment")
        

        let appointment = this.req.session.appointment

        let result = {
            "action": this.req.session.action,
            "date": this.req.session.date,
            "time": this.req.session.time,
        }
        return result;
    }
};
