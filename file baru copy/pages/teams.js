import Link from 'next/link';
'use client'
import { useState, useEffect } from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

export default function Teams() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const res = await fetch('https://randomuser.me/api/?results=4'); 
      const data = await res.json();
      setTeamMembers(data.results);
    };

    fetchTeamMembers();
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}
