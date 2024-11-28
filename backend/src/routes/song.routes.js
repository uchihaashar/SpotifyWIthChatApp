import { Router} from 'express'
import { getAllSongs, getfeaturedSongs, getMadeForYouSongs, getTrendingSongs } from '../controllers/song.controller.js'
import { protectRoute, requireAdmin } from '../middleware/auth.middleware.js'

const router = Router()

router.get('/',protectRoute,requireAdmin,getAllSongs )
router.get('/featured', getfeaturedSongs )
router.get('/made-for-you', getMadeForYouSongs  )
router.get('/trending', getTrendingSongs)


export default router