import mongoose, { Types } from "mongoose";

const albumSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },         // Change `Type` to `type`
    imageUrl: { type: String, required: true },      // Change `Type` to `type`
    artist: { type: String, required: true },        // Change `Type` to `type`
    releaseYear: { type: Number, required: true },   // Change `Type` to `type`
    songs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
      },
    ],
  },
  { timestamps: true }
);

export const Album = mongoose.model("Album", albumSchema);
