export default function CtaSectionOptions({ options, updateComponent }) {
    let { link, word1, word2 } = options;
  
    function handleChange(e) {
      updateComponent({ [e.target.name]: e.target.value });
    }
  
    return (
      <div className="p-3">
        <label className="block">Link:</label>
        <input
          className={`block mb-3 p-2 rounded-lg bg-gray-200`}
          type="text"
          name="link"
          value={link}
          onChange={handleChange}
        />
        <label className="block">Word1:</label>
        <input
          className={`block mb-3 p-2 rounded-lg bg-gray-200`}
          type="text"
          name="word1"
          value={word1}
          onChange={handleChange}
        />
        <label className="block">Word2:</label>
        <input
          className={`block mb-3 p-2 rounded-lg bg-gray-200`}
          type="text"
          name="word2"
          value={word2}
          onChange={handleChange}
        />
      </div>
    );
  }
