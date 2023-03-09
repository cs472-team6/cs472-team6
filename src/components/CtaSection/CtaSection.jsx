import './GradientText.css';


export default function CtaSection({options}) {
  return (
    <div className= "cta-section">
      <div style={{ textAlign: "left" }}>
      <h2>See the impact of good, conversion-oriented design on your business.</h2> 
      <a href="www.google.com" style={{fontSize: '18px', fontWeight: 'bold' }}><span className="gradient-link">Ler's Work Together</span></a>
      </div>
    </div>
  );
}