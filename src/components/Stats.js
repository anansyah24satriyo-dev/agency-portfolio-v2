import React, { useEffect, useState } from 'react';
import './Stats.css';

const stats = [
  { icon: '📊', number: 20, text: 'Completed Projects' },
  { icon: '😊', number: 15, text: 'Happy Clients' },
  { icon: '⏰', number: 5, text: 'Years of Experience' },
];

const Stats = () => {

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((val, i) =>
          val < stats[i].number ? val + 1 : val
        )
      );
    }, 80);

    return () => clearInterval(interval);
  }, []); // aman, tidak perlu stats

  return (
    <section className="stats section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <h3>{counts[index]}+</h3>
            <p>{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
