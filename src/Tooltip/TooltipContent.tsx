import { FloatingPortal, useMergeRefs } from "@floating-ui/react";
import React from "react";
import { useTooltipContext } from "./useTooltipContext";
import './Tooltip.css';

export const TooltipContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLProps<HTMLDivElement>
>(function TooltipContent(props, propRef) {
    const context = useTooltipContext();
    const ref = useMergeRefs([context.refs.setFloating, propRef]);

    return (
        <FloatingPortal>
            {context.open && (
                <div
                    ref={ref}
                    style={{
                        position: context.strategy,
                        top: context.y ?? 0,
                        left: context.x ?? 0,
                        visibility: context.x == null ? "hidden" : "visible",
                        ...props.style
                    }}
                    className="Tooltip"
                    {...context.getFloatingProps(props)}
                />
            )}
        </FloatingPortal>
    );
});
