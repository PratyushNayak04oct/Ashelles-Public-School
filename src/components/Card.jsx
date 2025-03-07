import React, { useState } from "react"

const Card = ({icon: Icon, heading, description, bgImage, solidColor}) => {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <div 
            className="relative w-[360px] h-[320px] overflow-hidden rounded-[16px] cursor-pointer p-[4px] shadow-2xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                    backgroundImage: `url(${bgImage})`,
                }}
            />
            <div 
                className={`absolute inset-0 bg-black transition-all duration-500 ease-in-out ${
                    isHovered ? 'opacity-50 translate-y-0' : 'opacity-70'
                }`} 
            />

            <div 
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    isHovered 
                        ? 'opacity-75 translate-y-0' 
                        : 'opacity-0 translate-y-full'
                }`}
                style={{ 
                    backgroundColor: solidColor,
                }}
            />

            {/* Card Content */}
            <div className="relative z-10 h-full w-full flex flex-col justify-center items-center text-center">
                {/* Icon and Heading Container */}
                <div className={`flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${ isHovered ? 'translate-y-[-24px]' : 'translate-y-0' }`}> 
                    {Icon && <Icon className="w-12 h-auto text-white" />}
                    <h3 className="text-white text-[28px] font-extrabold">{heading}</h3>
                </div>

                {/* Description */}
                <div 
                    className={`text-white text-center w-full transition-all duration-500 ease-in-out overflow-hidden ${
                        isHovered 
                            ? 'opacity-100 max-h-40' 
                            : 'opacity-0 max-h-0'
                    }`}
                >
                    <p className="font-[600] px-2">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;