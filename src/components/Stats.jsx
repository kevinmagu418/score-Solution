"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Work, AirplaneTicket,ContactMail } from "@mui/icons-material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
const statsData = [
  { stat: 1250, label: "Clients Served", icon: <ContactMail fontSize="large" /> },
  { stat: 22, label: "Countries Reached", icon: <AirplaneTicket fontSize="large" /> },
  { stat: 8, label: "Years Experience", icon: <Work fontSize="large" /> },
  { stat: 1850, label: "Cases Processed", icon: <VerifiedUserIcon fontSize="large" /> },
];

function AnimatedNumber({ value }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString());
  useEffect(() => {
    const controls = animate(count, value, { duration: 20, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);
  return <motion.span>{rounded}</motion.span>;
}

export default function StatsSection() {
  const canvasRef = useRef(null);

  // simple floating particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = 500);
    let particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 2 + 1,
      s: Math.random() * 0.5 + 0.2,
    }));
    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255,215,120,0.4)";
        ctx.fill();
        p.y -= p.s;
        if (p.y < -2) p.y = h + 2;
      });
      requestAnimationFrame(draw);
    }
    draw();
    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = 500;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#652319] via-[#41160F] to-[#220A05] text-[var(--neutral-beige)]">
      {/* moving gold dust layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      ></canvas>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide"
        >
          Our Proven <span className="text-[var(--accent-gold)]">Impact</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 10, delay: 0.2 }}
          className="text-lg text-[var(--neutral-beige)]/80 max-w-2xl mx-auto mb-14"
        >
          Empowering individuals and organizations to reach their immigration goals
          with integrity, precision, and heart.
        </motion.p>

        {/* Stats grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.25 },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-5xl mx-auto"
        >
          {statsData.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.07, boxShadow: "0 0 25px rgba(255,215,120,0.2)" }}
              className="flex flex-col items-center bg-white/10 backdrop-blur-xl rounded-2xl py-10 px-6 border border-[var(--accent-gold)] shadow-[0_0_15px_rgba(255,215,120,0.05)]"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-[var(--accent-gold)] mb-4 drop-shadow-[0_0_6px_rgba(255,215,120,0.4)]"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
  <AnimatedNumber value={item.stat} />+
</h3>
<p className="text-xs sm:text-sm md:text-base mt-2 text-[var(--neutral-beige)]/80">
  {item.label}
</p>

            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* glowing bottom accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[2px] origin-left bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent"
      />
    </section>
  );
}
