import React, { FC } from "react";
import { TooltipOptions } from "./typings";
import { useTooltip } from "./useTooltip";
import { TooltipContext } from "./useTooltipContext";

interface Props extends TooltipOptions {
    children: React.ReactNode
}

export const Tooltip: FC<Props> = ({
    children,
    ...options
}) => {
    // This can accept any props as options, e.g. `placement`,
    // or other positioning options.
    const tooltip = useTooltip(options);
    return (
        <TooltipContext.Provider value={tooltip}>
            {children}
        </TooltipContext.Provider>
    );
}