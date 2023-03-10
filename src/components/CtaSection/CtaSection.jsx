import './GradientText.css';


export default function CtaSection({options}) {
  const {link, word1, word2} = options;
  return (
    <div className= "cta-section">
      <div className= "gradient-link">
      <div className={`bg-white text-black dark:bg-black dark:text-white`}>
      <h2>{word1}</h2> 
      </div>
      </div>
      <a href={link} className="cta-button">{word2}</a>
    </div>
  );
}