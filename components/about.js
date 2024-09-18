const About = () => {
    return (
        <section id="about" className="bg-blackCustom text-goldCustom md:mx-20 p-10">
            {/* About Me Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p className="text-lg">
                My name is Rahul. I'm a software developer and a QA Analyst based in Ontario, Canada.
              </p>
              <br/>
              <p className="text-lg">
                Throughout my education, I have gained experience in various development technologies and programming languages 
                such as Python, javascript, c++, java, etc and have worked on multiple web and mobile applications. 
                I excel at backend roles and my main passion lies in creating logic and solving problems. 
                I am excited to leverage my skills and experience to help organizations create user friendly problem solving applications.
              </p>
            </section>
        
            {/* Education Section */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                <div className="bg-greyCustom p-6 rounded-lg md:flex justify-between items-center">
                  {/* Degree and University on left */}
                  <div className="mb-4 md:mb-0">
                    <p className="text-lg font-bold">Advanced Diploma in Computer Programming and Analysis with High Honours</p>
                    <p className="text-lg">Seneca Polytechnic College</p>
                  </div>
                  {/* Graduation Date on right for larger screens */}
                  <div className="text-right md:text-right">
                    <p className="text-lg">Graduated: August 2024</p>
                  </div>
                </div>
            </section>
        
            {/* Experience Section */}
            <section>
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
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
            </section>
        </section>
    );
  };
  
  export default About;
  