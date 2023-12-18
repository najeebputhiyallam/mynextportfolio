import { PuzzlePieceIcon, RectangleGroupIcon, CodeBracketIcon, PaintBrushIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Next.js Developer',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Elementor Expert',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: RectangleGroupIcon,
  },
  {
    name: 'Front-End Developer',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Web Designer',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: PaintBrushIcon,
  },
]

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Experienced. Passionate. Excellence.</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Something about me
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Hi there! I'm Najeeb, currently residing in Dubai and originally from India. I have been passionate about web development since 2006. I started coding in 2002 with Visual Studio 6.0, initially creating software before transitioning to web development. My journey includes roles as a designer, JavaScript and jQuery developer, PHP developer, and frontend developer. I gained experience with LowCode tools like Elementor, finding them transformative. With expertise in hosting and domains, I can handle end-to-end website projects. Currently, I'm learning Next.js, recognizing its potential for the future. While not an expert yet, I have successfully built this website using Next.js.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
