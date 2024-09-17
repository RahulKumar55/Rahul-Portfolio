import Link from 'next/link';

const MyInfo = () => {
  return (
    <section id="myInfo" className="w-full h-screen flex flex-col items-center justify-center">
    <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-32">
      <div className="mb-4 md:mb-0 md:mr-8">
        <img
          src="/images/Rahul.jpeg"
          alt="My Photo"
          className="w-48 h-48 md:w-72 md:h-80 rounded"
        />
      </div>
      <div className="max-w-lg">
        <h1 className='text-3xl font-bold'>Rahul Kumar</h1>
        <h3 className='text-xl font-bold'>FullStack Developer</h3>

        <div className="flex items-center bg-blackCustom py-2 rounded-lg">
          <img src="/images/location.png" alt="Phone" className="w-8 h-8 mr-4" />
          <p className="text-lg font-bold">
            Toronto, Ontario
          </p>
        </div>
        
        <br/>
        <hr/>
        <br/>
        <p className="mb-6 text-lg">
          Hello! I'm an aspiring software developer with a strong background in computer programming, as well as a 
          thorough understanding of web development, mobile development, and data structures.
        </p>
        <hr/>
        <br/>
        <div className="flex space-x-4 justify-center md:justify-start">
          <a
            href="/resume/Rahul_resume.docx"
            className="bg-goldCustom font-bold text-blackCustom py-2 px-6 rounded"
            download
          >
            Download Resume
          </a>
          <Link href="#contacts" scroll={true} className="bg-goldCustom font-bold text-blackCustom py-2 px-6 rounded">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
    </section>
  );

};

export default MyInfo;
