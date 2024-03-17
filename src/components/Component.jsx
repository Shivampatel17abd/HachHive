/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sh9fkEWi2SX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="grid md:grid-cols-2 items-start gap-4">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Welcome to the Community</h1>
          <p className="text-gray-500 dark:text-gray-400">A place for connection, support, and opportunity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Community Groups</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Join groups based on your interests and connect with others.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 p-2 hover:shadow-md transition-colors"
              href="#"
            >
              <span>View All Groups</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <img
                alt="Profile"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Music Lovers</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  A group for those who are passionate about music of all genres.
                </p>
              </div>
              <Button size="sm">Join</Button>
            </div>
            <hr className="border-gray-200 dark:border-gray-800" />
            <div className="flex items-center space-x-4">
              <img
                alt="Profile"
                className="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Book Club</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Share your love for literature with fellow bookworms.
                </p>
              </div>
              <Button size="sm">Join</Button>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Job Opportunities</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Explore employment opportunities from inclusive employers.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 p-2 hover:shadow-md transition-colors"
              href="#"
            >
              <span>Browse Jobs</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <img
                alt="Company Logo"
                className="rounded"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Accessibility Advocate - Brighter Future Co.</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Join a team dedicated to creating a more inclusive world.
                </p>
              </div>
              <Button size="sm">Apply</Button>
            </div>
            <hr className="border-gray-200 dark:border-gray-800" />
            <div className="flex items-center space-x-4">
              <img
                alt="Company Logo"
                className="rounded"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Customer Service Representative - Global Connections Inc.</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Exciting opportunity to assist customers from around the world.
                </p>
              </div>
              <Button size="sm">Apply</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Events</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Discover accessible events and social gatherings in your area.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 p-2 hover:shadow-md transition-colors"
              href="#"
            >
              <span>View All Events</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4">
              <div className="flex items-center space-x-4">
                <img
                  alt="Event"
                  className="rounded"
                  height="64"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Concert in the Park</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Enjoy live music in an inclusive outdoor setting. Date: August 20th, 2023
                  </p>
                </div>
                <Link className="text-sm font-medium underline hover:no-underline" href="#">
                  View
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  alt="Event"
                  className="rounded"
                  height="64"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "64/64",
                    objectFit: "cover",
                  }}
                  width="64"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Audio Described Museum Tour</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Experience art through vivid descriptions. Date: July 15th, 2023
                  </p>
                </div>
                <Link className="text-sm font-medium underline hover:no-underline" href="#">
                  View
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-semibold">Resources</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Access helpful tools and information for the visually impaired community.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              className="inline-flex items-center space-x-2 text-sm font-medium rounded-lg bg-gray-100 dark:bg-gray-800 p-2 hover:shadow-md transition-colors"
              href="#"
            >
              <span>Explore Resources</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <TextIcon className="w-6 h-6" />
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold">Guide to Accessible Technology</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tips for using technology with vision loss.</p>
              </div>
              <Button size="sm">Download</Button>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800" />
            <div className="flex items-center space-x-4">
              <TextIcon className="w-6 h-6" />
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold">Braille Learning Resources</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tools and courses for mastering Braille.</p>
              </div>
              <Button size="sm">Download</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function TextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}