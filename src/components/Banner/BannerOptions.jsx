export default function BannerOptions({options, updateComponent}) {
    let {words, gradient} = options;

    function handleChange(e) {
        updateComponent({ [e.target.name]: e.target.value});
    }
    return (
        <div className="p-3">
            <label className="block">Words:</label>
            <input className={`block mb-3 p-2 rounded-lg bg-slate-200`} type="text" name="words" value={words} onChange={(handleChange)} />
            {/* <select name="gradient">

            </select> */}
        </div>
    )
}