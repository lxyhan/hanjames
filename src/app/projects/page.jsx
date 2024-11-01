import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoMarkyt from '@/images/logos/markyt.png'
import logoHarled from '@/images/logos/harled.png'
import logoReact from '@/images/logos/react.png' 
import logoSvelte from '@/images/logos/svelte.png' 
import logoJs from '@/images/logos/js.png' 

const projects = [
  {
    name: 'Markyt',
    description:
      'As a the lead developer at Markyt, my work involved building and maintaining a web app using industry standard practices, implementing Stripe payment integration, and ensuring proper user authentication protocols. Working with SvelteKit and Firebase (storage, firestore, auth) tools have allowed me to speed up development immensely without sacrificing the scalability and quality of my code.',
    link: { href: 'https://github.com/lxyhan/markyt-development', label: 'https://github.com/lxyhan/markyt-development' },
    logo: logoMarkyt,
  },
  {
    name: 'Close to Home',
    description:
      'Close to Home offers a comprehensive disaster management platform that uses AI-powered heatmaps to identify high-impact zones while also serving as a hub for user-generated stories, articles, and donation links. Our interactive map displays real-time disaster updates through geotagged posts, allowing users to not only see where aid is needed but also engage emotionally through personal narratives.',
    link: { href: 'https://github.com/lxyhan/NewHacks', label: 'https://github.com/lxyhan/NewHacks' },
    logo: logoHelioStream,
  },
  {
    name: 'Harled Equipment Tracking System',
    description:
      'UI Design Internship project and backend architecture planning for a Equipment Tracking System for the Royal Canadian Air Force.',
    link: { href: 'https://harled.ca/projects/equipment_tracking_system', label: 'https://harled.ca/projects/' },
    logo: logoHarled,
  },
  {
    name: 'Weather Forecast App',
    description:
      'Developed a weather dashboard with real-time analytics using Chart.js, integrating OpenWeatherAPI for data and Unsplash API for dynamic imagery. Tracks Sunrise / Sunset, Precipitation Data, and 12-hour realtime Forecast.',
    link: { href: 'https://lxyhan.github.io/Weather-App/src/index.html', label: 'https://lxyhan.github.io/Weather-App/src/index.html' },
    logo: logoJs,
  },
  {
    name: 'Todo-List',
    description:
      'Developed a feature-rich task management app with full CRUD functionality, utilizing Firebase Firestore for real-time data persistence and Firebase Authentication for secure user access. Used Sveltekit, a modern front-end framework to ensure proper state management and secure API routes.',
    link: { href: 'https://lxyhan2.vercel.app/todo', label: 'https://lxyhan2.vercel.app/todo' },
    logo: logoSvelte,
  },
  {
    name: 'Personal Site (this website lol)',
    description:
      'Next JS / React Website developed for my personal blog and portfolio. Utilizes Tailwind CSS for styling, prism.js, and Vercel for deployment.',
    link: { href: '/projects', label: 'https://hanjames.vercel.app/projects' },
    logo: logoReact,
  },
  {
    name: 'YiRenovate',
    description:
      'A Front-End Static Site I developed for a local Toronto Renovation Company using Boostrap 5',
    link: { href: 'https://yirenovation.ca/', label: 'https://yirenovation.ca/' },
    logo: logoJs,
  },
  {
    name: 'Country Image API Map',
    description:
      'A Front-End Static Site I developed to learn more about fast Image rendering using Svelte and Unsplash API',
    link: { href: 'https://lxyhan2.vercel.app/blog/', label: 'https://lxyhan2.vercel.app/blog' },
    logo: logoOpenShuttle,
  },
  {
    name: 'ScholarLink',
    description:
      'A Full=Stack Web App I developed to help students find tutoring. Utilizes SASS, Firebase, and Boostrap JS.',
    link: { href: 'https://www.youtube.com/watch?v=Yl0gZv1QwDc', label: 'https://www.youtube.com/watch?v=Yl0gZv1QwDc' },
    logo: logoJs,
  },
]


function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Recent Projects"
      intro="My main area of expertise is in front-end web/mobile development, but I have experience in full-stack development as well. Here are some of the projects I have worked on."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
