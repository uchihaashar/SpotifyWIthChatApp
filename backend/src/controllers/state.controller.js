
import { Song } from '../models/song.model.js'
import { User } from '../models/user.model.js'
import { Album } from '../models/album.model.js'

export const getState  =  async(req,res,next)=>{
    try {
     
        const [totalSongs, totalUsers, totalAlbums, uniqueArtists] = await Promise.all([
        Song.countDocuments(),
        Album.countDocuments(),
         User.countDocuments(),



         Song.aggregate([
            {
                $unionWith :{
                    coll : "Albums",
                    pipeline : []
                }
            },{
                $group :{
                    _id : "$artist",
                }
            },{
                $count: "count"
            },
         ])

        ]);

        res,status(200).json({totalSongs, totalUsers, totalAlbums, uniqueArtists :uniqueArtists[0]?.$count ||0  })
    } catch (error) {
        next(error)
    }
}