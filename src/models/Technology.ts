import { Schema, model } from 'mongoose'
import ITechnology from '../interfaces/ITechnology'

const TechnologySchema = new Schema<ITechnology>({
  technology: { type: String, required: true },
  value: { type: Number, required: true },
  iconName: { type: String, required: true },
  iconSize: { type: Number, required: true },
  fontSize: { type: Number, required: true },
})

const Technology = model<ITechnology>('Technology', TechnologySchema)

export default Technology
