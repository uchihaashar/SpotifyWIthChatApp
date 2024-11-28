import { Router} from 'express'
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js'
import { getState } from '../controllers/state.controller.js'


const router = Router()

router.get('/',protectRoute,requireAdmin,getState)

export default router