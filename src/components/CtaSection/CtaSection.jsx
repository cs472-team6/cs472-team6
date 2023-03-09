import './GradientText.css';


export default function CtaSection() {
  const link = "www.google.com"
  const word = "Let's Work Together"
  return (
    <div className= "cta-section">
      <div style={{ textAlign: "left" }}>
      <h2>See the impact of good, conversion-oriented design on your business.</h2> 
      <a href={link} style={{fontSize: '18px', fontWeight: 'bold' }}><span className="gradient-link">{word}</span></a>
      </div>
    </div>
  );
}