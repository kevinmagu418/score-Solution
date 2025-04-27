"use client";

import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Work, AirplaneTicket, Apartment, ContactMail } from "@mui/icons-material";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const statsData = [
  { stat: "1,250+", label: "Clients Served", icon: <ContactMail fontSize="medium"  style={{ color: "var(--accent-orange)" }}/> },
  { stat: "22", label: "Countries Reached", icon: <AirplaneTicket fontSize="medium" style={{ color: "var(--accent-orange)" }} /> },
  { stat: "8+", label: "Years Experience", icon: <Work fontSize="medium" style={{ color: "var(--accent-orange)" }} /> },
  { stat: "1,850+", label: "Successful Projects", icon: <Apartment fontSize="medium"  style={{ color: "var(--accent-orange)"}}/> },
];

const chartData = {
  labels: ['2021', '2022', '2023', '2024', '2025'],
  datasets: [
    {
      label: 'Projects Over Time',
      data: [500, 1200, 1400, 1500, 1800],
      backgroundColor: 'rgba(210, 105, 30, 0.6)', // soft accent-orange
      borderColor: 'rgba(210, 105, 30, 1)', // solid accent-orange
      borderWidth: 1,
      borderRadius: 8,
      barThickness: 40,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: 'var(--color-neutral-beige)',
      },
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'var(--color-primary-brown)',
      titleColor: 'var(--color-neutral-beige)',
      bodyColor: 'var(--color-neutral-beige)',
    },
  },
  scales: {
    x: {
      ticks: {
        color: 'var(--color-neutral-beige)',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
    y: {
      ticks: {
        color: 'var(--color-neutral-beige)',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
};

export default function StatsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-[var(--color-primary-brown)] text-[var(--color-neutral-beige)] text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
          Trusted by Over <span style={{ color: "var(--accent-orange)" }}>1,250+ Clients</span> Worldwide
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-4xl font-bold">{item.stat}</h3>
              <p className="text-lg mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="mt-20 max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
            Projects Over Time
          </h3>
          <div className="w-full max-w-[600px] mx-auto">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
