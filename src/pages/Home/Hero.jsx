    import React, { useState, useEffect } from "react";
    import TyperWriter from "./TyperWriter";

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
    
        const maxRotation = 1;
        const rotation = (mousePosition[axis] / window.innerWidth - 1) * maxRotation;
        return rotation;
    };

    return (
        <div className=" h-[100vh]  bg-white " style={{ transform: `rotateX(${calculateRotation("y")}deg) rotateY(${-calculateRotation("x")}deg)` }}>
        
        <div className="flex justify-between items-center left-container" >
                <div className="p-20 flex flex-col bg-white">
                    <h2 className="flex font-semibold">Opportunity to Bring Your</h2>
                        <h1>Creative Passion to Life</h1>
                        <div>
                        <h2 className="flex font-semibold">You Will Learn Here</h2>
                            <TyperWriter />
                            </div>
        </div>
                <div className=" bg-orange-500 right-container">
                zero</div>
                </div>
                </div>
        
    );
    };

    export default Hero;
