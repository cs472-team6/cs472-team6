import starSVG from "./star.svg";
export default function Banner({options}) {
    const {words, gradient} = options;
    let content = words.split(',').map(word => word.trim()).filter(word => word);
    
    if (content.length > 0){
        content = content.join(",star,").split(',');
        content.push("star");
        let content2 = Array.from(content)
        for (let i = 0; i < 9; i++){
            content = content.concat(content2);
        }
    }
    
    

    return (
        <div className="w-full overflow-x-clip relative">
            <div className={`w-full h-[120px] bg-gradient-to-r ${gradient}`}></div>
            <div className={`flex items-center absolute top-0 w-[120%] h-[100px] bg-white -rotate-[4deg] -translate-x-4 z-10`}>
                {content.map((item, index) => {
                    if (item === "star"){
                        return <img key={index} src={starSVG} alt="" />
                    } else {
                        return <div key={index} className="text-3xl mx-2 whitespace-nowrap font-main">{item}</div>
                    }
                })}
            </div>
        </div>
    )
}