import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3">{title}</Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Tech Stack & Skills',
  description: 'An overview of the technologies I use and my skill set.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="My Tech Stack"
      intro="Here's a list of languages, frameworks, and tools I use to build software, design, and stay productive."
    >
      <div className="space-y-20">
        <ToolsSection title="Languages">
          <Tool title="Python">
            My go-to language for data science, machine learning, and automation.
          </Tool>
          <Tool title="R">
            Used primarily for statistical analysis and data visualization.
          </Tool>
          <Tool title="Java">
            I leverage Java for building robust backend applications.
          </Tool>
          <Tool title="HTML/CSS & Javascript">
            The foundation of all my web development projects.
          </Tool>
          <Tool title="Typescript & JSX">
            I rely on these for type-safe frontend development in frameworks like React.
          </Tool>
          <Tool title="Svelte">
            A powerful, reactive framework I enjoy using for lightweight web apps.
          </Tool>
          <Tool title="LaTeX">
            My choice for creating professional and academic documents.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Frameworks & Tools">
          <Tool title="Git">
            Version control for managing code changes across projects.
          </Tool>
          <Tool title="React & Redux">
            Core frameworks I use to build dynamic UIs with state management.
          </Tool>
          <Tool title="SvelteKit & Next.js">
            My go-to frameworks for modern frontend development with SSR capabilities.
          </Tool>
          <Tool title="Tailwind & Bootstrap 5">
            CSS frameworks for rapid UI development with responsive design.
          </Tool>
          <Tool title="SASS">
            Helps me manage CSS more efficiently by introducing variables and nesting.
          </Tool>
          <Tool title="Chart.js">
            I use this for visualizing data within web apps.
          </Tool>
          <Tool title="Maven">
            A tool I use for building and managing Java-based projects.
          </Tool>
          <Tool title="Firebase Storage/Auth/Database">
            I leverage Firebase for backend services like authentication and data storage.
          </Tool>
          <Tool title="Vercel">
            My preferred platform for deploying Next.js applications.
          </Tool>
          <Tool title="Prisma">
            An ORM tool I use to simplify database operations.
          </Tool>
          <Tool title="Stripe">
            A powerful API I use to integrate payment processing.
          </Tool>
          <Tool title="Clerk Authentication">
            A modern authentication solution I use for user management.
          </Tool>
        </ToolsSection>

        <ToolsSection title="Design Tools">
          <Tool title="Adobe Premiere Pro, Illustrator, Photoshop, Lightroom, AfterEffects">
            I use these tools for video editing, graphic design, and photo editing.
          </Tool>
          <Tool title="Figma">
            My go-to design tool for UI/UX projects and collaborative work.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
