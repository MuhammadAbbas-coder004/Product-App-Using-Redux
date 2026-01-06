import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + 3) % 3);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box 
      sx={{ 
        position: "relative", 
        width: "100%",
        overflow: "hidden",
        mb: 0
      }}
    >
      {/* Images Container */}
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "transform 0.8s cubic-bezier(0.45, 0, 0.55, 1)",
          width: "100%"
        }}
      >
        {/* Image 1 - Mountain Dew */}
        <Box
          component="img"
          src="https://i.pinimg.com/1200x/ca/c4/8c/cac48ccd5181fa1c47f107dbb9b25c1c.jpg"
          alt="Mountain Dew"
          sx={{
            width: "100%",
            minWidth: "100%",
            maxWidth: "100%",
            height: { xs: 280, sm: 380, md: 480, lg: 580 },
            objectFit: "cover",
            flexShrink: 0,
            display: "block"
          }}
        />
        
        {/* Image 2 - Apple Watch Series 6 */}
        <Box
          component="img"
          src="https://i.pinimg.com/1200x/62/67/c1/6267c131ed61754ce4deee25bd2463e4.jpg"
          alt="Apple Watch Series 6"
          sx={{
            width: "100%",
            minWidth: "100%",
            maxWidth: "100%",
            height: { xs: 280, sm: 380, md: 480, lg: 580 },
            objectFit: "cover",
            flexShrink: 0,
            display: "block"
          }}
        />
        
        {/* Image 3 - Nike Shoes 3D */}
        <Box
          component="img"
          src="https://i.pinimg.com/736x/3a/ad/7c/3aad7c9d3e6c1a6e38d97e0fd70c3360.jpg"
          alt="Nike Shoes"
          sx={{
            width: "100%",
            minWidth: "100%",
            maxWidth: "100%",
            height: { xs: 280, sm: 380, md: 480, lg: 580 },
            objectFit: "cover",
            flexShrink: 0,
            display: "block"
          }}
        />
      </Box>

      {/* Left Arrow */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 8, sm: 20 },
          transform: "translateY(-50%)",
          bgcolor: "rgba(25, 118, 210, 0.8)",
          color: "white",
          width: { xs: 40, sm: 50 },
          height: { xs: 40, sm: 50 },
          transition: "all 0.3s ease",
          zIndex: 10,
          "&:hover": { 
            bgcolor: "rgba(25, 118, 210, 1)",
            transform: "translateY(-50%) scale(1.15)",
          },
        }}
      >
        <KeyboardArrowLeft sx={{ fontSize: { xs: 28, sm: 35 } }} />
      </IconButton>

      {/* Right Arrow */}
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: 8, sm: 20 },
          transform: "translateY(-50%)",
          bgcolor: "rgba(25, 118, 210, 0.8)",
          color: "white",
          width: { xs: 40, sm: 50 },
          height: { xs: 40, sm: 50 },
          transition: "all 0.3s ease",
          zIndex: 10,
          "&:hover": { 
            bgcolor: "rgba(25, 118, 210, 1)",
            transform: "translateY(-50%) scale(1.15)",
          },
        }}
      >
        <KeyboardArrowRight sx={{ fontSize: { xs: 28, sm: 35 } }} />
      </IconButton>

      {/* Dots Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 15, sm: 25 },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: { xs: 1, sm: 1.5 },
          zIndex: 10,
        }}
      >
        <Box
          onClick={() => goToSlide(0)}
          sx={{
            width: activeIndex === 0 ? { xs: 30, sm: 40 } : { xs: 10, sm: 12 },
            height: { xs: 10, sm: 12 },
            borderRadius: 10,
            bgcolor: activeIndex === 0 ? "white" : "rgba(255,255,255,0.5)",
            cursor: "pointer",
            transition: "all 0.4s ease",
            border: "1px solid rgba(255,255,255,0.3)",
            "&:hover": {
              bgcolor: "white",
              transform: "scale(1.2)",
            },
          }}
        />
        <Box
          onClick={() => goToSlide(1)}
          sx={{
            width: activeIndex === 1 ? { xs: 30, sm: 40 } : { xs: 10, sm: 12 },
            height: { xs: 10, sm: 12 },
            borderRadius: 10,
            bgcolor: activeIndex === 1 ? "white" : "rgba(255,255,255,0.5)",
            cursor: "pointer",
            transition: "all 0.4s ease",
            border: "1px solid rgba(255,255,255,0.3)",
            "&:hover": {
              bgcolor: "white",
              transform: "scale(1.2)",
            },
          }}
        />
        <Box
          onClick={() => goToSlide(2)}
          sx={{
            width: activeIndex === 2 ? { xs: 30, sm: 40 } : { xs: 10, sm: 12 },
            height: { xs: 10, sm: 12 },
            borderRadius: 10,
            bgcolor: activeIndex === 2 ? "white" : "rgba(255,255,255,0.5)",
            cursor: "pointer",
            transition: "all 0.4s ease",
            border: "1px solid rgba(255,255,255,0.3)",
            "&:hover": {
              bgcolor: "white",
              transform: "scale(1.2)",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Carousel;