/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false,  // Change this to false if you don't want Splash screen.
};


//Home Page
const greeting = {
	title: "Paulo Bruny Lima",
	logo_name: "pb",
	nickname: "pbruny",
	subTitle:
		"Hey there! I'm Paulo Bruny Lima, Computer Engineering student, learning fullstack web development, (not)guitar player on free time and duck lover.",
	resumeLink:
		"https://drive.google.com/open?id=1TdRUm8j2WpgDPEe0_VITBlYTuB8imUK7",
	portfolio_repository: "https://github.com/pbruny/pbruny.github.io",
};

const socialMediaLinks = {
	/* Your Social Media Link */
	github: "https://github.com/pbruny",
	linkedin: "https://www.linkedin.com/in/paulobruny/",
	gmail: "paulobruny@gmail.com",
	twitter: "https://twitter.com/PauloBruny",
};

const skills = {
  data: [
    {
      title: "Full Stack Web Development",
      fileName: "ProgrammerImg",
      skills: [
        "⚡ Building responsive website front-end using React",
        "⚡ Developing mobile applications using React Native",
        "⚡ Creating application backend in Node & Express and PHP & Laravel"
			],
			id: 1,
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E"
					},
					id: 1,
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB"
					},
					id: 2,
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933"
					},
					id: 3,
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6"
					},
					id: 4,
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#474A8A"
					},
					id: 5,
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#fb503b "
					},
					id: 6,
        },
      ]
    },
  ]
};


// Education Page
const competitiveSites = {
  competitiveSites: []
}

const degrees = {
  degrees : []
}

const certifications = {
	certifications: []
};


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work and Internship experience",
	description:
		"I have worked mainly as a intern in Federal University of Vale do São Francisco (UNIVASF) helping IT sectors and keep systems up and running. I also worked as a Sales Representative for Fabrinova - Velas Rainha.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Sales Representative",
					company: "Fabrinova - Velas Rainha, Bahia, Brazil",
					duration: "January 2014 - PRESENT",
					logo_path: "velas.jpg",
					location: "Petrolina, Pernambuco, Brazil",
					description:
						"I work exclusively with one big wholesale company giving support in sales, strategy and marketing campaigns",
					color: "#0879bf",
				}
			],
		},
		{
			title: "Internships",
			experiences: [
				{
					title: "CPA IT Intern",
					company: "Federal University of Vale do São Francisco (UNIVASF)",
					company_url: "http://portais.univasf.edu.br/",
					logo_path: "univasf.jpg",
					duration: "July 2019 - August 2020",
					location: "Juazeiro, Bahia, Brazil",
					description:
						"The Intern team was made of 2 people. I have worked mainly maintaining an evaluation system up and running. It was built with Groovy/Grails technologies and I improved UI desing with HTML5, CSS3 and JS. We also worked on a system with php and mysql to keep all the data consistent and safe.",
					color: "#fb503b",
				},
			],
		},
		
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"My projects is made in majority with JS, PHP, React and Node. You can explore my github and see what I have built.",
	avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
	
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};
