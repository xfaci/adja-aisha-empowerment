import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = "",
    onClick,
    strength = 0.5
}) => {
    const ref = useRef<HTMLDivElement>(null);

    // Use motion values for subtle spring physics
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate distance from center of the button
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Apply magnetic strength
        const newX = (clientX - centerX) * strength;
        const newY = (clientY - centerY) * strength;

        x.set(newX);
        y.set(newY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        // Reserved for future hover states if needed
    };

    // On mobile devices, disable the magnetic effect
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(pointer: coarse)').matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Also animate the inner elements slightly based on button movement
    const innerX = useTransform(mouseXSpring, (v) => v * 0.3);
    const innerY = useTransform(mouseYSpring, (v) => v * 0.3);

    if (isMobile) {
        return (
            <div className={className} onClick={onClick}>
                {children}
            </div>
        );
    }

    return (
        <motion.div
            ref={ref}
            className={`relative flex items-center justify-center cursor-pointer ${className}`}
            style={{ x: mouseXSpring, y: mouseYSpring }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                className="flex items-center justify-center w-full h-full pointer-events-none"
                style={{ x: innerX, y: innerY }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default MagneticButton;
