import { Box, Typography, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useState, useEffect } from "react";

export default function App() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutesStr = minutes < 10 ? '0' + minutes : minutes;
      
      setCurrentTime(`${hours}:${minutesStr} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "radial-gradient(circle at top,#f8fafc,#e5e7eb)",
        p: { xs: 1, sm: 2 }
      }}
    >
        <Box
        sx={{
          width: { xs: "95%", sm: 360 },
          maxWidth: 360,
          height: { xs: "auto", sm: 740 },
          minHeight: { xs: 600, sm: 740 },
          borderRadius: { xs: "40px", sm: "56px" },
          background: "linear-gradient(145deg,#f9fafb,#e5e7eb)",
          boxShadow: {
            xs: "0 30px 60px rgba(0,0,0,0.3), inset 0 0 0 3px #d1d5db",
            sm: "0 60px 120px rgba(0,0,0,0.4), inset 0 0 0 4px #d1d5db"
          },
          transform: { xs: "none", md: "rotateY(-25deg) rotateX(12deg)" },
          transition: "0.6s cubic-bezier(.2,.8,.2,1)",
          "&:hover": { transform: { xs: "none", md: "rotateY(0deg) rotateX(0deg)" } },
          overflow: "hidden",
          position: "relative"
        }}
      >
        {/* Side Shine */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(120deg,transparent 30%,rgba(255,255,255,0.25),transparent 70%)",
            pointerEvents: "none",
            display: { xs: "none", md: "block" }
          }}
        />

        
        <Box
          sx={{
            position: "absolute",
            top: { xs: 10, sm: 14 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: 120, sm: 140 },
            height: { xs: 28, sm: 32 },
            bgcolor: "#000",
            borderRadius: { xs: "16px", sm: "20px" },
            zIndex: 10
          }}
        />

        
        <Box
          sx={{
            position: "absolute",
            inset: { xs: "8px", sm: "10px" },
            borderRadius: { xs: "34px", sm: "48px" },
            background: "linear-gradient(180deg,#dbeafe,#eff6ff)",
            paddingTop: { xs: 7, sm: 9 },
            px: { xs: 2, sm: 3 },
            paddingBottom: { xs: 3, sm: 4 },
            overflowY: "auto"
          }}
        >
          {/* Time */}
          <Typography
            textAlign="center"
            fontSize={{ xs: 32, sm: 38 }}
            fontWeight={600}
            mb={{ xs: 1.5, sm: 2 }}
          >
            {currentTime || "9:41"}
          </Typography>

          {/* Contact Card */}
          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(20px)",
              borderRadius: { xs: 4, sm: 5 },
              p: { xs: 2.5, sm: 3 },
              boxShadow: "0 25px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.3)"
            }}
          >
            <Typography 
              variant="h6" 
              fontWeight={700} 
              textAlign="center" 
              mb={1}
              sx={{ 
                fontSize: { xs: "1.2rem", sm: "1.4rem" },
                color: "#2563eb"
              }}
            >
              Contact Us
            </Typography>



            <TextField
              fullWidth
              placeholder="Your Name"
              margin="dense"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                  </InputAdornment>
                ),
                sx: { 
                  borderRadius: 3, 
                  bgcolor: "#fff",
                  fontSize: { xs: "0.9rem", sm: "1rem" }
                }
              }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "0.9rem", sm: "1rem" }
                }
              }}
            />

            <TextField
              fullWidth
              placeholder="Email Address"
              margin="dense"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                  </InputAdornment>
                ),
                sx: { 
                  borderRadius: 3, 
                  bgcolor: "#fff",
                  fontSize: { xs: "0.9rem", sm: "1rem" }
                }
              }}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "0.9rem", sm: "1rem" }
                }
              }}
            />

            <Button
              fullWidth
              sx={{
                mt: 2,
                py: { xs: 1.2, sm: 1.4 },
                borderRadius: 3,
                fontWeight: 600,
                fontSize: { xs: "0.9rem", sm: "1rem" },
                background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                boxShadow: "0 10px 30px rgba(37,99,235,0.4)",
                "&:hover": { 
                  background: "linear-gradient(135deg,#1d4ed8,#1e40af)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 15px 40px rgba(37,99,235,0.6)"
                },
                transition: "all 0.3s"
              }}
              variant="contained"
            >
              Submit
            </Button>

            {/* Follow Us Text */}
            <Typography 
              textAlign="center" 
              fontWeight={600}
              mt={{ xs: 2.5, sm: 3 }}
              mb={1.5}
              sx={{ 
                fontSize: { xs: "0.85rem", sm: "0.95rem" },
                color: "#2563eb",
                letterSpacing: "0.5px"
              }}
            >
              Follow Us
            </Typography>

            {/* Social Icons */}
            <Box display="flex" justifyContent="center" gap={{ xs: 1.5, sm: 2 }}>
              {[
                { Icon: InstagramIcon, url: "https://www.instagram.com/", color: "#E4405F" },
                { Icon: TwitterIcon, url: "https://twitter.com/", color: "#1DA1F2" },
                { Icon: FacebookIcon, url: "https://www.facebook.com/", color: "#1877F2" }
              ].map(({ Icon, url, color }, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "#fff",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                    width: { xs: 44, sm: 52 },
                    height: { xs: 44, sm: 52 },
                    border: "2px solid transparent",
                    "&:hover": {
                      transform: "scale(1.25) rotate(10deg)",
                      bgcolor: color,
                      color: "#fff",
                      boxShadow: `0 15px 35px ${color}66`,
                      borderColor: color
                    }
                  }}
                >
                  <Icon sx={{ fontSize: { xs: 22, sm: 26 } }} />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Home Indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 14, sm: 18 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: 100, sm: 120 },
            height: { xs: 4, sm: 5 },
            bgcolor: "#fff",
            borderRadius: 10,
            opacity: 0.95
          }}
        />
      </Box>
    </Box>
  );
}