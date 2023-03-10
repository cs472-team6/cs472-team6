import './GradientText.css';


export default function CtaSection({options}) {
  const {link, word1, word2} = options;
  
  return (
    <div className= "cta-section">
      <div style={{ textAlign: "left", fontSize: '18px', fontWeight: 'bold', display: 'flex', flexDirection: 'column', width: '100%', height: '100%',flexGrow: 1}}>
      <h2>{word1}</h2> 
      <a href={link} style={{fontSize: '18px', fontWeight: 'bold' }}><span className="gradient-link">{word2}</span></a>
      </div>
    </div>
  );
}