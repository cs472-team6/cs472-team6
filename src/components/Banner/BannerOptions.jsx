import { Gradients } from "../../utils/utils";

export default function BannerOptions({options, updateComponent}) {
    let {words, gradient} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }

    console.log(Array.from(Object.entries(Gradients)))
    return (
        <div className="p-3">
            <label className="block">Words:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-gray-200`} type="text" name="words" value={words} onChange={(handleChange)} />
            <label className="block">Gradient:</label>
            <select name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value], index) => {
                    if(value === gradient) {
                        return <option value={value} selected>{key}</option>
                    } else {
                        return <option value={value}>{key}</option>
                    }
                })}
            </select>
        </div>
    )
}