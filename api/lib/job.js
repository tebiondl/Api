const Job = require('../models/job')

module.exports = {
    async getJobs() {
        const Jobs = await Job.find({}).sort({ "releaseDate": -1 })
        // El sort se encaraga de ordenar los posts de más reciente a menos usando releaseDate, que es la fecha de lanzamiento de estos.
        return Jobs
    },
    async getJob(id) {
        const currentJob = await Job.findById(id)
        return currentJob
    },
    async createOrUpdateJob(job) {
        if(job._id) {
            const updatedJob = await Job.findByIdAndUpdate(job._id, job, { new: true })
            return updatedJob
        }

        const newJob = await Job.create(job)
        return newJob
    },
    async deleteJob(id) {
        const deletedJob = await Job.findByIdAndRemove(id)
        return deletedJob
    }
}