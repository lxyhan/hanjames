import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait-3.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-5xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          My name is James.          
          </h1>
          <h1 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-xl dark:text-zinc-100">
          I am a sophomore computer science and economics student at the University of Toronto.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            My philosophy is to embrace being multi-disciplinary and adaptable.
            </p>
            <p>
            As a programmer, I try to avoid dogmatic specialization. I love learning about design, full-stack development, machine learning, and project management. As an athlete, I aim for hybrid training. I swam competitively for 3 years, run a 5-day strength training schedule, and try to <a href="/articles/finding-strength"><u>average 20-30km</u></a> weekly running.
            </p>
            <p>
            In doing so, I really hope to synthesize technologies and skills that enable me to adapt in a rapidly changing tech landscape amongst a sea of students seeking optimization. The trait I admire most is resilience.
            </p>
            <p>
            In high school, I spent much of my time involved in competitive debate. Since then, that interest has shifted, but my love for writing remains. This site is an attempt at presenting <a href="/articles"><u> a few underdeveloped thoughts</u></a> of my own, and many more [better ideas](/) from my readings.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/_lxyhan/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/lxyhan" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/jameshan27/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hanlyu2005@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hanlyu2005@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
