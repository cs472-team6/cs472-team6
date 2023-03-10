import './GradientText.css';


export default function CtaSection({options}) {
  let link = "www.google.com";
  let word1 = "See the impoact of good, conversion-oriented design on your business."
  let word2 = "Let's Work Together"
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