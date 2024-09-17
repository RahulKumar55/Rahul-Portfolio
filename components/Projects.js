const projects = [
  {
    title: 'Beyond Borders',
    description: 'A guidebook and a social media application built to help immigrants beginning their life in Canada.',
    technologies: ['MERN Stack', 'Tailwind CSS', 'Web Sockets', 'react-simple-chatbot'],
    image: '/projects/beyondborders.jpg',
    link: 'https://beyond-borders-client.vercel.app',
  },
  {
    title: 'Format Converter',
    description: 'A free unlimited image format converter. jpg to png to webp etc.',
    technologies: ['Next.js', 'Bootstrap', 'Sharp', 'Multer'],
    image: '/projects/formatconverter.jpg',
    link: 'https://format-converter.vercel.app',
  },
  {
    title: 'Travel Journal',
    description: 'A local desktop travel journal application created with javafx.',
    technologies: ['Java', 'Javafx', 'Auth'],
    image: '/projects/journal.jpg',
    link: 'https://github.com/RahulKumar55/travel-journal',
  },
  {
    title: 'Online Art Museum',
    description: 'The Metropolitan Museum of Art made available to you online. Search all different artifacts and categories and save your favorites.',
    technologies: ['Next.js', 'MongoDB', 'Express', 'Bootstrap'],
    image: '/projects/museum.jpg',
    link: 'https://rahuls-art-museum.vercel.app',
  },
  {
    title: 'Shared Online Blog',
    description: 'A n online blog for everyone to share posts on their desired categories.',
    technologies: ['Handlebars', 'MongoDB', 'PostgreSQL', 'Multer'],
    image: '/projects/blog.jpg',
    link: 'https://shared-blog-production.up.railway.app',
  },
  {
    title: 'Library Application Template',
    description: 'A template to create a cross platform mobile application for a library.',
    technologies: ['C#', 'Xaml', 'Xamarin', 'Android', 'ios'],
    image: '/projects/library.jpg',
    link: 'https://github.com/RahulKumar55/library-app-template',
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="bg-blackCustom text-goldCustom p-8 md:mx-20 p-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-greyCustom rounded-lg p-6 transition transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 rounded-md"
              style={{ objectFit: 'contain' }}
            />
            <h3 className="mt-4 text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-goldCustom font-bold text-blackCustom px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
