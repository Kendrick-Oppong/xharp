"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiArrowDownSLine, RiCloseLine } from "@remixicon/react";
import { EventFormData, formSchema } from "@/lib/validators/form";
import { ImageUpload } from "./image-upload";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const CreateEventForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      eventCategory: "",
      customURL: "",
      eventDescription: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const validFormats = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

    if (!validFormats.includes(file.type)) {
      alert("Invalid image format. Please upload JPG, PNG, or WebP only.");
      e.target.value = "";
      return;
    }

    if (file.size > 4000 * 1024) {
      alert("Image size must be under 4MB.");
      e.target.value = "";
      return;
    }

    form.setValue("eventImage", files);
    form.clearErrors("eventImage");
    form.trigger("eventImage");
  };

  const onSubmit = (data: EventFormData) => {
    console.log("Form submitted successfully:", data);
  };

  return (
    <>
      <div className="border-b border-b-gray-300">
        <div className="flex items-center justify-between max-w-[67%] mx-auto py-4">
          <Image
            src="/xharp.png"
            width={94}
            height={35}
            alt="xharp"
            className=""
          />
          <div className="p-1 bg-gray-200 rounded-full">
            <RiCloseLine size={20} onClick={() => router.push("/dashboard")} />
          </div>
        </div>
      </div>
      <div className="max-w-[515px] mx-auto p-6">
        <header className="mb-[47px] text-center">
          <h1 className="font-medium font-serif text-[32px]">
            Basic Event Details
          </h1>
          <p className="text-primary-foreground">
            Add the basic information about your event name, description, and
            key highlights.
          </p>
        </header>

        <div className="space-y-6">
          {/* Event Name */}
          <div>
            <label className="block text-sm font-medium">Event Name</label>
            <input
              {...form.register("eventName")}
              className={`mt-1 p-3 w-full border rounded-lg ${
                form.formState.errors.eventName
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Afrochella 2025"
            />
            {form.formState.errors.eventName && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.eventName.message}
              </p>
            )}
          </div>

          {/* Event Category */}
          <div>
            <label className="block text-sm font-medium">Event Category</label>
            <select
              {...form.register("eventCategory")}
              className={`mt-1 p-3 w-full border rounded-lg ${
                form.formState.errors.eventCategory
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              defaultValue=""
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="music">Music</option>
              <option value="festival">Festival</option>
              <option value="conference">Conference</option>
            </select>
            {form.formState.errors.eventCategory && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.eventCategory.message}
              </p>
            )}
          </div>

          {/* Custom URL */}
          <div>
            <label className="block text-sm font-medium">Custom URL</label>
            <input
              {...form.register("customURL")}
              className={`mt-1 p-3 w-full border rounded-lg ${
                form.formState.errors.customURL
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="usexharp.io/discover/your-custom-name"
            />
            {form.formState.errors.customURL && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.customURL.message}
              </p>
            )}
          </div>

          {/* Event Description */}
          <div>
            <label className="block text-sm font-medium">
              Event Description
            </label>
            <textarea
              {...form.register("eventDescription")}
              className={`mt-1 p-3 w-full border rounded-lg h-[194px] ${
                form.formState.errors.eventDescription
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Enter description..."
            />
            {form.formState.errors.eventDescription && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.eventDescription.message}
              </p>
            )}
          </div>

          {/*Event Image */}
          <ImageUpload
            error={form.formState.errors.eventImage?.message as string}
            onChange={handleImageChange}
            clearError={() => form.clearErrors("eventImage")}
          />

          <div className="flex items-center gap-2.5">
            <span className="flex-1 bg-gray-100 h-0.5" />
            <button
              type="button"
              className="text-sm flex items-center gap-1 px-2 py-1.5 border border-gray-400 rounded-[8px] flex-shrink-0"
            >
              Advanced Settings{" "}
              <RiArrowDownSLine className="text-primary-foreground" />
            </button>
            <span className="flex-1 bg-gray-100 h-0.5" />
          </div>

          {/* Continue Button */}
          <button
            onClick={form.handleSubmit(onSubmit)}
            className="bg-black/90 mt-[17px] w-full text-white font-medium py-2.5 px-4 rounded-[10px] hover:bg-black/85 text-sm"
          >
            Continue
          </button>

          <div className="flex items-center justify-center gap-[7px] mt-[52px] mb-4">
            <span className="w-[49px] h-[5px] bg-black/90 block rounded-[40px]" />
            <span className="w-[49px] h-[5px] bg-gray-200 block rounded-[40px]" />
            <span className="w-[49px] h-[5px] bg-gray-200 block rounded-[40px]" />
          </div>
        </div>
      </div>
    </>
  );
};

