import React from "react";
import team, { TeamMember } from "@/app/team/data"; 

const TeamCard: React.FC = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "10px auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {team.map((member: TeamMember, index: number) => (
        <div key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <h2 style={{ marginBottom: "10px", fontSize: '1.2rem', fontWeight: 'bold' }}>{member.name}</h2>
          <p><strong>Domains:</strong> {member.domains}</p>
          <p><strong>Languages:</strong> {member.languages}</p>
          <p><strong>Frameworks/Libraries:</strong> {member.frameworks}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
