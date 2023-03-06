import { PageState } from "../../state"


export default function PageOptionsTab(){
    let pageOptions = PageState((state) => state.pageOptions);
    let updatePageOptions = PageState((state) => state.updatePageOptions);
    
    function handleChange(e) {
        updatePageOptions({ [e.target.name]: e.target.value })
    }
    
    return (
        <div className="flex-1 pl-2">
            <label className="block">Title:</label>
            <input className="block mb-3 p-2 rounded-lg" type="text" name="title" value={pageOptions.title} onChange={handleChange} />
            <label className="block">Icon:</label>
            <input className="block mb-3 p-2 rounded-lg" type="text" name="icon" value={pageOptions.icon} onChange={handleChange} />
            <label className="block">Author:</label>
            <input className="block mb-3 p-2 rounded-lg" type="text" name="author" value={pageOptions.author} onChange={handleChange} />
            <label className="block">Description:</label>
            <input className="block mb-3 p-2 rounded-lg" type="text" name="description" value={pageOptions.description} onChange={handleChange} />
            <label className="block">Language:</label>
            <input className="block p-2 rounded-lg" type="text" name="language" value={pageOptions.language} onChange={handleChange} />
        </div>
    )
}