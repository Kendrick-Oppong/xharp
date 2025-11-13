import z from "zod";

export const formSchema = z.object({
  eventName: z.string().min(1, "Event name is required"),
  eventCategory: z.string().min(1, "Event category is required"),
  customURL: z
    .string()
    .min(1, "Custom URL is required"),
   
  eventDescription: z.string().min(1, "Description is required"),
  eventImage: z
    .any()
    .refine(
      (files) => files instanceof FileList && files.length > 0,
      "Image is required"
    )
    .refine(
      (files) =>
        files?.[0]?.size <= 4000 * 1024 &&
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          files?.[0]?.type
        ),
      "Image must be under 4MB and in JPG, PNG, or WebP format"
    ),
});

export type EventFormData = z.infer<typeof formSchema>;
