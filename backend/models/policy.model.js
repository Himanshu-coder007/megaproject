import mongoose from "mongoose";

// Main Policy Schema
const policySchema = new mongoose.Schema(
  {
    policyNumber: {
      type: String,
      required: true,
      unique: true,
    },
    policyName: {
      type: String,
      required: true,
    },
    policyType: {
      type: String,
      required: true,
      enum: ["health", "life", "auto", "home"], // Extendable for different types
    },
    provider: {
      type: String,
      required: true, // Insurance company/provider
    },
    startDate: {
      type: Date,
      required: true, // Policy start date
    },
    endDate: {
      type: Date,
      required: true, // Policy end date or renewal date
    },
    status: {
      type: String,
      enum: ["active", "inactive", "expired"],
      default: "active",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User who owns the policy
      required: true,
    },
    
    // Installment-related fields
    installmentDuration: {
      type: String,
      enum: ["monthly", "3 months", "annually"], // Frequency of installment payments
      required: true,
    },
    installmentAmount: {
      type: Number,
      required: true, // The amount due for each installment
    },
  },
  { timestamps: true }
);

export const Policy = mongoose.model("Policy", policySchema);
