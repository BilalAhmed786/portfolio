import { Schema, model } from "mongoose";

const leadSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message:{ type: String, required: true }
  },
  { timestamps: true } // optional: adds createdAt & updatedAt
);

const Leads = model("Lead", leadSchema);

export default Leads;
