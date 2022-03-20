const express = require('express')
const Building = require('../model/Building')
const router = express.Router()

const getBuildings = async function (req, res, next) {
  const building = await Building.find({})
  res.status(200).send(building)
//   res.send('respond with a resource')
}

const addBuilding = async function (req, res, next) {
  try {
    const building = new Building({
      name: req.body.name,
      level: req.body.level
    })
    await building.save()
    res.status(201).send(building)
  } catch (e) {
    res.status(409).json({ message: e.message })
  }
}

const getBuilding = async function (req, res, next) {
  const building = await Building.findById(req.params.id)
  res.status(200).json(building)
}

const updateBuilding = async function (req, res, next) {
  const building = await Building.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (building !== null) {
    res.status(200).json(building)
  } else {
    res.status(404).json({ message: 'Unable to update ' + req.params.id })
  }
  // const building = Building.findById(req.params.id)
  // building.name = req.body.name
  // building.level = req.body.level
  // await building.save()
}

const updatePatialBuilding = async function (req, res, next) {
  const building = await Building.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (building !== null) {
    res.status(200).json(building)
  } else {
    res.status(404).json({ message: 'Unable to update ' + req.params.id })
  }
}

const deleteBuilding = async function (req, res, next) {
  await Building.findByIdAndDelete(req.params.id)
  res.status(200).json({ message: 'deleted ' + req.params.id })
}

/* GET users listing. */
router.get('/', getBuildings)
router.post('/', addBuilding)
router.get('/:id', getBuilding)
router.put('/:id', updateBuilding)
router.patch('/:id', updatePatialBuilding)
router.delete('/:id', deleteBuilding)

module.exports = router
