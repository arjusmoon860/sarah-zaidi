"use client";
import { ReactNode } from "react";
import { useCustomCursor } from "../hooks/useGlobalCursor";

interface CustomCursorTriggerProps {
    children: ReactNode;
    title?: string;
    customCursor?: boolean;
    className?: string;
    color?: string;
    onClick?: () => void;
}

const CustomCursorTrigger: React.FC<CustomCursorTriggerProps> = ({
    children,
    title,
    customCursor = true,
    className = "",
    color,
    onClick,
}) => {
    const cursor = useCustomCursor();

    const handleMouseEnter = () => {
        if (customCursor) cursor.show(title, color);
    };

    const handleMouseLeave = () => {
        if (customCursor) cursor.hide();
    };

    return (
        <div
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default CustomCursorTrigger;