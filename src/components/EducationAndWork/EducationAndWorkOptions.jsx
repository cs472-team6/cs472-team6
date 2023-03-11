import { Gradients } from "../../utils/utils";
export default function EducationWorkExperienceOptions({
  options,
  updateComponent,
}) {
  let { school1, school2, school3, job1, job2, job3, gradient } = options;

  function handleChange(e) {
    updateComponent({ [e.target.name]: e.target.value });
  }

  return (
    <div className="pl-3 pb-3">
      <details className="bg-white w-[300px] rounded-lg">
        <summary className="pl-1 mb-2 cursor-pointer">Education</summary>
          <div className="pl-6">
            <label className="block">School 1:</label>
            <input
              className={`block mb-3 p-2 rounded-lg bg-gray-200`}
              type="text"
              name="school1"
              value={school1}
              onChange={handleChange}
            />
            <label className="block">School 2:</label>
            <input
              className={`block mb-3 p-2 rounded-lg bg-gray-200`}
              type="text"
              name="school2"
              value={school2}
              onChange={handleChange}
            />
            <label className="block">School 3:</label>
            <input
              className={`block mb-3 p-2 rounded-lg bg-gray-200`}
              type="text"
              name="school3"
              value={school3}
              onChange={handleChange}
            />
          </div>
      </details>
      <details className="bg-white w-[300px] rounded-lg">
        <summary className="pl-1 mb-2 cursor-pointer">Work Experience</summary>
          <div className="pl-6">
            <label className="block">Job 1:</label>
            <input
              className={`block mb-3 p-2 rounded-lg bg-gray-200`}
              type="text"
              name="job1"
              value={job1}
              onChange={handleChange}
            />
            <label className="block">Job 2:</label>
            <input
              className={`block mb-3 p-2 rounded-lg bg-gray-200`}
              type="text"
              name="job2"
              value={job2}
              onChange={handleChange}
            />
            <label className="block">Job 3:</label>
            <input
              className={`block mb-3 p-2 rounded-lg bg-gray-200`}
              type="text"
              name="job3"
              value={job3}
              onChange={handleChange}
            />
          </div>
      </details>
      <label className="block">Gradient:</label>
      <select value={gradient} name="gradient" onChange={handleChange} className='p-2 rounded-lg bg-gray-200'>
                {Array.from(Object.entries(Gradients)).map(([key, value]) => <option key={key} value={value}>{key}</option>)}
            </select>
    </div>
  );
}
