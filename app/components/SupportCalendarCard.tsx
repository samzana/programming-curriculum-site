import React from "react";
import { SupportHour } from "@/app/team/data"; // Adjust path if necessary

interface SupportCalendarProps {
  day: string; // e.g., "Monday", "Tuesday"
  supportHours: SupportHour[];
}

const SupportCalendarCard: React.FC<SupportCalendarProps> = ({ day, supportHours }) => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6", marginBottom: "100px" }}>
      <h2 style={{ marginBottom: "20px", fontSize: "1.2rem", fontWeight: "bold", paddingBottom: "0px" }}>
        {day} 
      </h2>
      {supportHours.length > 0 ? (
        supportHours.map((session: SupportHour, index: number) => (
          <div key={index} style={{ marginBottom: "30px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
            <p><strong>Time:</strong> {session.time}</p>
            <p><strong>Instructor:</strong> {session.instructor}</p>
            {session.googlemeetLink ? (
              <p>
                <strong>Google Meet:</strong>{" "}
                <a href={session.googlemeetLink} target="_blank" rel="noopener noreferrer" style={{ color: "blue", textDecoration: "underline" }}>
                  Join
                </a>
              </p>
            ) : (
              <p><strong>Google Meet:</strong> Not available</p>
            )}
          </div>
        ))
      ) : (
        <p style={{ color: "#666" }}>No support hours available for {day}.</p>
      )}
    </div>
  );
};

export default SupportCalendarCard;