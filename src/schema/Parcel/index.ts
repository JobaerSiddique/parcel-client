import z from "zod";

export const parcelSchema = z.object({
  pickupAddress: z.string().min(1, "Pickup address is required"),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  parcelType: z.enum(["document", "package", "fragile", "other"]),
  parcelSize: z.enum(["small", "medium", "large", "xlarge"]),
  paymentMethod: z.enum(["cod", "prepaid"]),
  codAmount: z.number().min(0).optional()
}).refine(data => {
  return data.paymentMethod !== 'cod' || (data.codAmount !== undefined && data.codAmount > 0);
}, {
  message: "COD amount is required when payment method is COD",
  path: ["codAmount"]
});