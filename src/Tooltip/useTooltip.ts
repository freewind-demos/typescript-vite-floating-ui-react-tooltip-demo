import { autoUpdate, flip, offset, shift, useDismiss, useFloating, useFocus, useHover, useInteractions, useRole } from '@floating-ui/react';
import React from 'react';
import { type TooltipOptions } from './typings';

export function useTooltip({
    initialOpen = false,
    placement = "top",
    open: controlledOpen,
    onOpenChange: setControlledOpen
}: TooltipOptions = {}) {
    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

    const open = controlledOpen ?? uncontrolledOpen;
    const setOpen = setControlledOpen ?? setUncontrolledOpen;

    const data = useFloating({
        placement,
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({
                fallbackAxisSideDirection: "start"
            }),
            shift({ padding: 5 })
        ]
    });

    const context = data.context;

    const hover = useHover(context, {
        move: false,
        enabled: controlledOpen == null
    });
    const focus = useFocus(context, {
        enabled: controlledOpen == null
    });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "tooltip" });

    const interactions = useInteractions([hover, focus, dismiss, role]);

    return React.useMemo(
        () => ({
            open,
            setOpen,
            ...interactions,
            ...data
        }),
        [open, setOpen, interactions, data]
    );
}