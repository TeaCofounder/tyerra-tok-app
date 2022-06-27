import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const VideoSchema = new mongoose.Schema({
  src: {
    type: String,
    required: [true, 'Please provide a url for video.']
  }
})

export default mongoose.models.Video || mongoose.model('Video', VideoSchema)
