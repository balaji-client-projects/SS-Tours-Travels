import React from 'react';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
    return (
        <div className="relative bg-primary text-white h-[50vh] min-h-[400px] flex items-center justify-center text-center">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <img
                    src={backgroundImage || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-20 max-w-7xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
                <p className="text-xl text-gray-200">{subtitle}</p>
            </div>
        </div>
    );
};

export default PageHeader;
