import { ImageUploadProps } from "@/interfaces/navigation";
import { RiAddLine } from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";

export const ImageUpload = ({
  error,
  onChange,
  clearError,
}: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    onChange(e);

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    setFileName("");
    clearError();
    const input = document.getElementById("eventImage") as HTMLInputElement;
    if (input) input.value = "";
  };

  return (
    <div>
      <label className="block text-sm font-medium">Event Image</label>
      <div
        className={`mt-1 border-dashed border-[1.5px] rounded-lg flex items-center justify-center overflow-hidden h-40 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <input
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          onChange={handleChange}
          className="hidden"
          id="eventImage"
        />

        {preview ? (
          <div className="relative w-full h-full group">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
              title="Remove image"
            >
              ×
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 bg-opacity-50 text-white p-2 text-xs truncate">
              {fileName}
            </div>
          </div>
        ) : (
          <label
            htmlFor="eventImage"
            className="cursor-pointer flex flex-col items-center"
          >
            <span className="text-3xl bg-gray-100 p-1 rounded-full mb-[20px]">
              <RiAddLine className="text-primary-foreground" />
            </span>
            <p>Upload event image</p>
            <p className="text-sm text-primary-foreground">
              Recommended: 400x400px
            </p>
          </label>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
