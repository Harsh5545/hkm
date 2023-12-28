    import React, { useState, useEffect } from "react";


    const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const calculateRotation = (axis) => {
        // Adjust these values based on your desired rotation range
        const maxRotation = 2;
        const rotation = (mousePosition[axis] / window.innerWidth - 1) * maxRotation;
        return rotation;
    };

    return (
        <div className=" h-[100rem] flex flex-col justify-center items-center bg-green-500 " style={{ transform: `rotateX(${calculateRotation("y")}deg) rotateY(${-calculateRotation("x")}deg)` }}>
        <div className="flex justify-between items-center " >
                <div className="w-1/2 p-8  bg-white">
                    hero
        </div>
                <div className="w-1/2 bg-orange-500">{/* Add your 3D model component here */}
                zero</div>
        </div>
        </div>
    );
    };

    export default Hero;
