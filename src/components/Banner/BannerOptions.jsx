import { Gradients } from "../../utils/utils";

export default function BannerOptions({options, updateComponent}) {
    let {words, gradient} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    
    return (
        <div className="p-3">
            <label className="block">Words:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="words" value={words} onChange={(handleChange)} />
            <label className="block">Gradient:</label>
            <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
        </div>
    )
}