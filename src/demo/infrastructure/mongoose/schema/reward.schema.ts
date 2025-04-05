import { Schema } from 'mongoose';

export const RewardSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    pointRequired: {
      type: Number,
    },
    stock: {
      type: Number,
    },
    isActive: {
      type: Boolean,
    },
  },
  { timestamps: true },
);
