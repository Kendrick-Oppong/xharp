import { RemixiconComponentType } from "@remixicon/react";

export interface NavItem {
  name: string;
  href: string;
  icon: RemixiconComponentType;
}

export interface ImageUploadProps {
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearError: () => void;
}
