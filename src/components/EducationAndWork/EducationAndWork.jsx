export default function EducationWorkExperience({ options }) {
    const { school1, school2, school3, job1, job2, job3, gradient } = options;

    let school1_content = school1.split(';').map(school1 => school1.trim());
    let school2_content = school2.split(';').map(school2 => school2.trim());
    let school3_content = school3.split(';').map(school3 => school3.trim());
    let job1_content = job1.split(';').map(job1 => job1.trim());
    let job2_content = job2.split(';').map(job2 => job2.trim());
    let job3_content = job3.split(';').map(job3 => job3.trim());

    let school_list = [school1_content, school2_content, school3_content];
    let job_list = [job1_content, job2_content, job3_content];
    let school_iterator = 0;
    let job_iterator = 0;

    console.log("edu/work called");
    console.log(school1_content);
    console.log(school2_content);
    console.log(school3_content);

    let isSchool = true;

    function dot(str){
        if(str.length > 0)
        {
            return (<span>&#x2022</span>);
        }
    }

    function returnSchoolOrJob(array){
        let dot;
        console.log(array);
        if(array.length == 3 && array[2].length > 0)
        {
            dot = <span>&#x2022;</span>;
        }

        return( 
            <div>
                <div className={`font-main text-[20px]`}> {array[0]} </div>
                <p className={`float-left font-secondary pb-3 text-[15px]`}> {array[1]} </p>
                <p className={`float-right font-secondary pb-3 text-[15px]`}> {dot} {array[2]} </p>
                <hr className={`border-black dark:border-white clear-both`}></hr>
            </div>
        );
    }

    function isEmpty(array){
        console.log(array);
        for(let i = 0; i < array.length; i++)
        {
            if(array[i].length > 0 )
            {
                return false;
            }
        }
        
        return true;
    }

    function returnEntry(){

        if(isSchool == true)
        {
            isSchool = false;
            
            while(school_iterator < 2 && isEmpty(school_list[school_iterator]))
            {
                ++school_iterator;
            }
            ++school_iterator;

            if(school_iterator > 3 || isEmpty(school_list[school_iterator-1]))
            {
                return(<div></div>);
            }
            else
            {
                return returnSchoolOrJob(school_list[school_iterator-1]);
            }
        }
        else
        {
            isSchool = true;
            
            while(job_iterator < 2 && isEmpty(job_list[job_iterator]))
            {
                ++job_iterator;
            }
            ++job_iterator;

            if(job_iterator > 3 || isEmpty(job_list[job_iterator-1]))
            {
                return(<div></div>);
            }
            else
            {
                return returnSchoolOrJob(job_list[job_iterator-1]);
            }
        }
    }

    return(
        <div className="w-full overflow-x-clip relative">
            <div className={`flex items-center top-0 w-[100%] h-[480px] bg-white text-black dark:bg-black dark:text-white`}>
                <div className={'p-20 grid grid-cols-2 gap-5 w-[100%] content-center'}>
                    <div className={`pb-6 text-3xl whitespace-nowrap font-main text-transparent bg-clip-text w-[150px] bg-gradient-to-r ${gradient}`} >Education</div>
                    <div className={`pb-6 text-3xl whitespace-nowrap font-main text-transparent bg-clip-text w-[250px] bg-gradient-to-r ${gradient}`} >Work Experience</div>
                        {returnEntry()}
                        {returnEntry()}
                        {returnEntry()}
                        {returnEntry()}
                        {returnEntry()}
                        {returnEntry()}
                </div>
            </div>
        </div>
        
    )
    
}
