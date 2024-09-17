const Experience = () => {
  return (
    <div id="experience" className="md:mx-20 p-10">
      <h2 className="text-xl font-bold mb-4">Experience</h2>
      <div className="bg-greyCustom p-6 rounded-lg md:flex justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg">QA Analyst at Ontario Ministry of Education</p>
        </div>
        <div className="text-right md:text-right">
          <p className="text-lg">Jan 2023 - Aug 2023</p>
        </div>
      </div>

      <br/>

      <div className="bg-greyCustom p-6 rounded-lg md:flex justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-lg">C Programming Lab Assistant at Seneca College</p>
        </div>
        <div className="text-right md:text-right">
          <p className="text-lg">Sept 2024 - Apr 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
