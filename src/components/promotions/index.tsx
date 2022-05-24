import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect, useRef,MutableRefObject } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";
const messages = [
  "20% off on your first order!",
  "Summer sale starts now, visit any store.",
  "Free shipping on all orders over $100.",
];
function Promotions() {
  const containerRef =   React.useRef<HTMLInputElement>(null)

  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
    const interval = setInterval(() => {
      setMessageIndex((index) => (index + 1) % messages.length);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <PromotionsContainer ref={containerRef}>
      <Slide
        container={containerRef.current}
        direction={show ? "left" : "right"}
        timeout={{ enter: 200, exit: 500 }}
        in={show}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </PromotionsContainer>
  );
}

export default Promotions;
