const Education = () => {
  return (
    <div className="md:mx-20 p-10" id="education"> {/* No margin for mobile, only for larger screens */}
      <h2 className="text-xl font-bold mb-4">Education</h2>
      <div className="bg-greyCustom p-6 rounded-lg md:flex justify-between items-center">
        {/* Degree and University on left */}
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-bold">Advanced Diploma in Computer Programming and Analysis with Hgh Honours</p>
          <p className="text-lg">-Seneca Polytechnic College</p>
        </div>
        {/* Graduation Date on right for larger screens */}
        <div className="text-right md:text-right">
          <p className="text-lg">Graduated: August 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
