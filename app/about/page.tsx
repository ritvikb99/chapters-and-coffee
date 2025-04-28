import Image from "next/image";
import Link from "next/link";
import { FiBook, FiCoffee, FiMail, FiMapPin } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "About Us | Chapters & Coffee",
  description: "Learn about our passion for books and coffee, and the story behind Chapters & Coffee.",
};

const team = [
  {
    name: "Riya Singh",
    role: "Founder & Editor",
    image: "/images/author-riya.png",
    bio: "Certified coffee expert who believes in the perfect marriage of good books and great coffee. Riya contributes articles on a multitude of topics.",
  },
  {
    name: "Nandani Agarwal",
    role: "Founder & Editor",
    image: "/images/author-nandani.png",
    bio: "Passionate storyteller and lifelong book lover, Nandini finds joy in weaving words that inspire and connect. When not writing, Nandini can be found exploring hidden literary gems and sharing insights with fellow readers.",
  },
  {
    name: "Vaishnavi Chauhan",
    role: "Founder & Editor",
    image: "/images/author-vaishnavi.png",
    bio: "Book lover, coffee enthusiast, and advocate for slow living. Vaishnavi founded Chapters & Coffee in 2025 to create a space where readers could explore the connection between literature and coffee culture.",
  },
  {
    name: "Pranjal Sharma",
    role: "Founder & Editor",
    image: "/images/author-pranjal.png",
    bio: "Author specializing in the cultural impact of literature, with a particular focus on book's role in society. Pranjal explores the historical connections between cafes and literature.",
  },
  {
    name: "Anjali Singh",
    role: "Founder & Editor",
    image: "/images/author-anjali.png",
    bio: "MBA student with a passion for classic literature. Anjali is a sucker for perfect reading environment and bookish home decor.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-2 mb-4">
              <FiBook className="h-6 w-6 text-stone-800" />
              <FiCoffee className="h-6 w-6 text-stone-800" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Our Story
            </h1>
            <p className="text-lg text-stone-600 mb-6">
              Welcome to Chapters & Coffee, where the love for literature meets the appreciation for a perfectly brewed cup of coffee.
            </p>
            <p className="text-stone-600 mb-6">
              Founded in 2025, our blog began as a passion project that quickly evolved into a community of book lovers and coffee enthusiasts. 
              We believe that reading and coffee drinking are both rituals that deserve to be savored slowly and mindfully.
            </p>
            <p className="text-stone-600">
              Our mission is to create a cozy corner of the internet where readers can find thoughtful book discussions, 
              brewing guides, and reflections on the reading life. Whether you&apos;re looking for your next great read or tips on 
              brewing the perfect cup to accompany it, we&apos;re here to enhance your reading experience.
            </p>
          </div>

          <div className="lg:w-1/2">
            <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden">
              <Image 
                src="/images/about-hero.png" 
                alt="Coffee and books arranged on a wooden table" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Values section */}
        <div className="max-w-4xl mx-auto my-20">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            What We Value
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-stone-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiBook className="h-7 w-7 text-stone-800" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Thoughtful Reading</h3>
              <p className="text-stone-600">
                We believe in taking time to truly engage with literature and form meaningful connections with the written word.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-stone-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCoffee className="h-7 w-7 text-stone-800" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Quality Coffee</h3>
              <p className="text-stone-600">
                We&apos;re passionate about the art and craft of coffee brewing, and the ways it enhances the reading experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-stone-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-7 w-7 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Community</h3>
              <p className="text-stone-600">
                We foster a welcoming space for readers to connect, share recommendations, and engage in meaningful discussions.
              </p>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-md h-full flex flex-col">
                <div className="flex flex-col items-center flex-grow">
                  <Avatar className="h-20 w-20 mb-4">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold text-stone-900 text-center">{member.name}</h3>
                  <p className="text-stone-500 mb-3 text-center text-sm">{member.role}</p>
                  <Separator className="mb-3" />
                  <p className="text-stone-600 text-center text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div className="bg-stone-100 rounded-xl p-8 md:p-12 my-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-stone-600 mb-8">
              Have questions, suggestions, or just want to say hello? We&apos;d love to hear from you. 
              You can reach out through any of the channels below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <FiMail className="h-6 w-6 text-stone-800" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Email Us</h3>
                <p className="text-stone-600">vaishnavichauhan0011@gmail.com</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-center mb-4">
                  <FiMapPin className="h-6 w-6 text-stone-800" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">Find Us</h3>
                <p className="text-stone-600">
                  Follow our journey on social media <br/>
                  @chaptersandcoffee
                </p>
              </div>
            </div>

            <Button 
              asChild
              className="bg-stone-800 hover:bg-stone-700 text-white"
            >
              <Link href="/blog">
                Explore Our Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 