const Dbr = require('../lib/job')

module.exports = {
    loadJobs: async (req, res) => {
        const Entries = await Dbr.getJobs()
        res.status(200) // 200 => Todo está O.K.
        res.json(Entries)
    },
    loadJob: async (req, res) => {
        const Entry = await Dbr.getJob(req.params.id)
        res.status(200)
        res.json(Entry)
    },
    newJob: async (req, res) => {
        const newEntry = await Dbr.createOrUpdateJob(req.body)
        res.status(201) // 201 => Hay nuevo contenido.
        res.json(newEntry)
    },
    updateJob: async (req, res) => {
        const updatedEntry = await Dbr.createOrUpdateJob(req.body)
        res.status(201)
        res.json(updatedEntry)
    },
    deleteJob: async (req, res) => {
        const deletedEntry = await Dbr.deleteJob(req.params.id)
        res.status(204) // 204 => No existe contenido.
        res.json(deletedEntry)
    }
}