import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function cnForNewComponent(...inputs) {
    const additionalClasses = "bg-blue-500 text-white";
    return cn(additionalClasses, ...inputs);
}

