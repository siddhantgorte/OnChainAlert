import axios from "axios";
import { ethers } from "ethers";

// Backend API URL
const BACKEND_URL = "http://localhost:8000/events";

export async function handleTransfer(from, to, value) {
  try {
    const amount = Number(ethers.formatUnits(value, 18));

    const eventData = {
      from,
      to,
      amount,
      type: "Transfer"
    };

    console.log("📡 Event captured:", eventData);

    // Send to backend
    await axios.post(BACKEND_URL, eventData);

    console.log("✅ Event sent to backend");
  } catch (error) {
    console.error("❌ Failed to send event:", error.message);
  }
}
