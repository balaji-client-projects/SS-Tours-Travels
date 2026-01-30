import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [bookingData, setBookingData] = useState({});

    const openBookingModal = (data = {}) => {
        setBookingData(data);
        setIsBookingOpen(true);
    };

    const closeBookingModal = () => {
        setIsBookingOpen(false);
        setBookingData({});
    };

    return (
        <BookingContext.Provider value={{ isBookingOpen, bookingData, openBookingModal, closeBookingModal }}>
            {children}
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    return useContext(BookingContext);
};
