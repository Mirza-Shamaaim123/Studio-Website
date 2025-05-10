import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function RotatingCube() {
    const [rotation, setRotation] = useState<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => ({
                x: prev.x + 1.2,
                y: prev.y + 1.5,
                z: prev.z + 0.8,
            }));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="relative w-[300px] h-[300px]"
            style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
            }}
        >
            {["front", "back", "right", "left", "top", "bottom"].map((face, i) => (
                <motion.div
                    key={face}
                    className="absolute w-[300px] h-[300px]"
                    style={{
                        background: "linear-gradient(45deg, #303F9F, #9C27B0)",
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "visible",
                        transform: {
                            front: "translateZ(150px)",
                            back: "translateZ(-150px) rotateY(180deg)",
                            right: "translateX(150px) rotateY(90deg)",
                            left: "translateX(-150px) rotateY(-90deg)",
                            top: "translateY(-150px) rotateX(90deg)",
                            bottom: "translateY(150px) rotateX(-90deg)",
                        }[face],
                        boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                    }}
                />
            ))}
        </motion.div>
    );
}