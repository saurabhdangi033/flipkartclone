import React, { useState } from "react";

import { ButtonGroup, Button, styled } from "@mui/material";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({ quantity, setQuantity }) => {

    const handleIncrement = () => {
        setQuantity(prev => prev + 1); // Increase quantity
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1); // Decrease quantity but keep it >= 1
        }
    };

    return (
        <Component>
            <StyledButton onClick={handleDecrement} disabled={quantity <= 1}>-</StyledButton>
            <Button disabled>{quantity}</Button>
            <StyledButton onClick={handleIncrement}>+</StyledButton>
        </Component>
    );
};

export default GroupedButton;