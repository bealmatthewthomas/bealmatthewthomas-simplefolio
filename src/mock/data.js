import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matthew Beal', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, I am',
  name: 'Matthew Beal',
  subtitle: 'I am a Full-Stack Engineer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'bealskier.png',
  paragraphOne:
    'I graduated from the University of Vermont in 2016 with a double major in Computer Science, and Political Science',
  paragraphTwo:
    'I then worked for Lord Corporation as a Web Developer for 2 years in Vermont before moving to Boston',
  paragraphThree: 'There, I began working for Butcherbox, where I am currently employed!',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tellmyrep.png',
    title: 'Tell My Rep',
    info:
      'Tell my rep is a collaborative project between me and my girlfriend Somer Brown. Currently it is just a government representative lookup tool powered by the google civics api',
    info2:
      'The next step will be to hook the Prismic CMS up to it and allow Somer to publish talking points about issues she and I care about so people have a place to start when the reach out.',
    url: 'https://tellmyrep.com',
    repo: 'https://github.com/rep-contact/rep-template/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bealphotos.png',
    title: 'BealPhotos',
    info:
      'BealPhotos was my first personal web project. My objective was to gain more knowledge with personally deploying a website from scratch, and to gain a greater understanding of Laravel.',
    info2: '',
    url: 'https://bealphotos.com',
    repo: 'https://github.com/bealmatthewthomas/bealphotos', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
