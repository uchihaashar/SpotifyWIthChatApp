
import {Song } from "../models/song.model.js";
export const getAllSongs = async (req, res, next) => {
    try {
        // -1 for sorting in descending order -> newest to oldest
        // 1 for sorting in ascending order -> oldest to newest 
       const songs = await Song.find().sort({createdAt : -1})
       res.json(songs)
    } catch (error) {
        next(error)
    }
}

export const getfeaturedSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample : {
                    size : 6
                }
            },{
                $project:{
                    __id : 1,
                    title : 1,
                    artist : 1,
                    imageUrl : 1,
                    audioUrl : 1
                }
            }
        ])

        res.json(songs)
    } catch (error) {
        next(error)
    }
}


export const getMadeForYouSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample : {
                    size : 4,
                }
            },{
                $project:{
                    __id : 1,
                    title : 1,
                    artist : 1,
                    imageUrl : 1,
                    audioUrl : 1
                }
            }
        ])

        res.json(songs)
    } catch (error) {
        next(error)
    }
    
}

export const getTrendingSongs = async (req, res, next) => {
    try {
        const songs = await Song.aggregate([
            {
                $sample : {
                    size : 4
                }
            },{
                $project:{
                    __id : 1,
                    title : 1, 
                    artist : 1,
                    imageUrl : 1,
                    audioUrl : 1
                }
            }
        ])

        res.json(songs)
    } catch (error) {
        next(error)
    }
}