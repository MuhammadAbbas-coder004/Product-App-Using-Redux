import { Box, Typography, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "radial-gradient(circle at top,#f8fafc,#e5e7eb)",
        p: 2
      }}
    >
      {/* 3D iPhone */}
      <Box
        sx={{
          width: { xs: "100%", sm: 360 },
          height: { xs: "auto", sm: 740 },
          borderRadius: "56px",
          background: "linear-gradient(145deg,#f9fafb,#e5e7eb)",
          boxShadow: `
            0 60px 120px rgba(0,0,0,0.4),
            inset 0 0 0 4px #d1d5db
          `,
          transform: "rotateY(-25deg) rotateX(12deg)",
          transition: "0.6s cubic-bezier(.2,.8,.2,1)",
          "&:hover": { transform: "rotateY(0deg) rotateX(0deg)" },
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
            pointerEvents: "none"
          }}
        />

        {/* Dynamic Island / Notch */}
        <Box
          sx={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 140,
            height: 32,
            bgcolor: "#000",
            borderRadius: 20,
            zIndex: 10
          }}
        />

        {/* Screen */}
        <Box
          sx={{
            position: "absolute",
            inset: 10,
            borderRadius: "48px",
            background: "linear-gradient(180deg,#dbeafe,#eff6ff)",
            paddingTop: 9,
            px: 3
          }}
        >
          {/* Time */}
          <Typography
            textAlign="center"
            fontSize={38}
            fontWeight={600}
            mb={2}
          >
            9:41
          </Typography>

          {/* Contact Card */}
          <Box
            sx={{
              bgcolor: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(18px)",
              borderRadius: 5,
              p: 3,
              boxShadow: "0 20px 50px rgba(0,0,0,0.25)"
            }}
          >
            <Typography variant="h6" fontWeight={700} textAlign="center" mb={1}>
              Contact Us
            </Typography>

            <Typography variant="body2" color="text.secondary" textAlign="center" mb={2}>
              Join us today
            </Typography>

            <TextField
              fullWidth
              placeholder="Your Name"
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutlineIcon />
                  </InputAdornment>
                ),
                sx: { borderRadius: 3, bgcolor: "#fff" }
              }}
            />

            <TextField
              fullWidth
              placeholder="Email Address"
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon />
                  </InputAdornment>
                ),
                sx: { borderRadius: 3, bgcolor: "#fff" }
              }}
            />

            <Button
              fullWidth
              sx={{
                mt: 2,
                py: 1.4,
                borderRadius: 3,
                fontWeight: 600,
                background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
                "&:hover": { background: "linear-gradient(135deg,#1d4ed8,#2563eb)" }
              }}
              variant="contained"
            >
              Submit
            </Button>

            {/* Social Icons */}
            <Box display="flex" justifyContent="center" gap={2} mt={3}>
              {[InstagramIcon, TwitterIcon, FacebookIcon].map((Icon, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={
                    i === 0 ? "https://www.instagram.com/" :
                    i === 1 ? "https://twitter.com/" :
                    "https://www.facebook.com/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    bgcolor: "#fff",
                    boxShadow: "0 10px 22px rgba(0,0,0,0.25)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.3)",
                      bgcolor: "#e0e7ff",
                      boxShadow: "0 14px 28px rgba(0,0,0,0.35)"
                    }
                  }}
                >
                  <Icon fontSize="large" />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Home Indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 18,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 5,
            bgcolor: "#fff",
            borderRadius: 10,
            opacity: 0.95
          }}
        />
      </Box>
    </Box>
  );
}
