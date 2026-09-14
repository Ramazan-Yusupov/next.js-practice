import { cn } from "@/shared/lib";
import NextImage, { type ImageProps as NextImageProps } from "next/image";
import { forwardRef } from "react";

interface ImageProps extends Omit<NextImageProps, "alt" | "fill" | "sizes"> {
  containerClassName?: string;
  alt?: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, containerClassName, alt = "", ...props }, ref) => {
    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        <NextImage
          ref={ref}
          alt={alt}
          fill
          sizes="100vw"
          className={cn(
            "w-full h-full object-cover transition-transform hover:scale-105",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Image.displayName = "Image";
