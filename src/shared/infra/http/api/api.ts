import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
  return res.json({message: 'Hello you are up'})
})

export { router }