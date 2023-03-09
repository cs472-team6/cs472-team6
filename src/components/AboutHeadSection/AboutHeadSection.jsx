import React from 'react';
import './styles.css';

function AboutPage() {
  const name = 'Kartik Bansal';
  const description = `Over the past 12 years, I\'ve worked with a diverse 
                      range of clients, from startups to Fortune 500 companies.
                      I love crafting interfaces that delight users and help 
                      businesses grow.`;

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-6xl font-bold mb-4">
        Hi, I am
        <br />
        {name}
        </h1>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default AboutPage;