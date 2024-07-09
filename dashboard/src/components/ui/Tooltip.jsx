import { Tooltip as TooltipUi, TooltipContent, TooltipProvider, TooltipTrigger } from "@/shadcn/ui/tooltip";
import { CircleCheckIcon } from "lucide-react";
import React from "react";

const Tooltip = ({ children, text }) => {
    return (
        <TooltipProvider>
            <TooltipUi>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {text}
                </TooltipContent>
            </TooltipUi>
        </TooltipProvider>
    );
}

export default Tooltip;