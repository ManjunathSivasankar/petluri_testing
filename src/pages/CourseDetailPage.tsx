
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

// Course data
const coursesData = [
  {
    id: "1",
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js to become a full-stack web developer.",
    longDescription: "This comprehensive bootcamp takes you from beginner to professional web developer in just 12 weeks. Starting with the fundamentals of HTML, CSS, and JavaScript, you'll progress to building dynamic, interactive web applications with React and Node.js. By the end of the course, you'll have a portfolio of projects to showcase your skills to potential employers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    price: "$499",
    duration: "12 weeks",
    category: "development",
    instructor: "John Smith",
    instructorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    instructorBio: "John is a senior developer with over 10 years of industry experience at companies like Google and Facebook. He specializes in frontend development and has helped hundreds of students launch their tech careers.",
    learningOutcomes: [
      "Build responsive websites with HTML5 and CSS3",
      "Create interactive web applications with JavaScript",
      "Develop full-stack applications with React and Node.js",
      "Work with databases including MongoDB and MySQL",
      "Deploy applications to the cloud",
      "Implement authentication and security best practices"
    ],
    curriculum: [
      {
        week: 1,
        title: "HTML & CSS Fundamentals",
        lessons: ["Introduction to HTML5", "CSS Styling Basics", "Responsive Design Principles", "CSS Flexbox and Grid"]
      },
      {
        week: 2,
        title: "JavaScript Essentials",
        lessons: ["JavaScript Syntax", "DOM Manipulation", "Event Handling", "Asynchronous JavaScript"]
      },
      {
        week: 3,
        title: "Frontend Frameworks",
        lessons: ["Introduction to React", "React Components", "State and Props", "Hooks and Context API"]
      },
      {
        week: 4,
        title: "Backend Development",
        lessons: ["Node.js Basics", "Express Framework", "RESTful API Design", "Server-Side Rendering"]
      }
    ]
  },
  {
    id: "2",
    title: "Graphic Design Masterclass",
    description: "Master Adobe Photoshop, Illustrator, and InDesign to create stunning visual designs.",
    longDescription: "This masterclass takes you through the entire graphic design process, from ideation to execution. You'll learn to use the Adobe Creative Suite professionally while developing your creative eye and design thinking. By completing real-world projects, you'll build a portfolio showcasing your versatility as a designer.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    price: "$399",
    duration: "10 weeks",
    category: "design",
    instructor: "Sarah Johnson",
    instructorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    instructorBio: "Sarah is an award-winning designer with experience working for major brands like Nike and Apple. With a background in both print and digital design, she brings a wealth of practical knowledge to her teaching.",
    learningOutcomes: [
      "Master Adobe Photoshop for image manipulation",
      "Create vector illustrations with Adobe Illustrator",
      "Design print materials with Adobe InDesign",
      "Understand design principles and typography",
      "Develop a consistent brand identity",
      "Create a professional design portfolio"
    ],
    curriculum: [
      {
        week: 1,
        title: "Design Foundations",
        lessons: ["Design Principles", "Color Theory", "Typography Basics", "Layout Fundamentals"]
      },
      {
        week: 2,
        title: "Adobe Photoshop",
        lessons: ["Interface and Tools", "Selection and Masking", "Photo Manipulation", "Digital Painting"]
      },
      {
        week: 3,
        title: "Adobe Illustrator",
        lessons: ["Vector Basics", "Pen Tool Mastery", "Logo Design", "Illustration Techniques"]
      },
      {
        week: 4,
        title: "Adobe InDesign",
        lessons: ["Document Setup", "Master Pages", "Typography in InDesign", "Preparing for Print"]
      }
    ]
  },
  // Additional courses would be here
];

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call
    const fetchCourse = () => {
      const foundCourse = coursesData.find(c => c.id === id);
      
      setTimeout(() => {
        setCourse(foundCourse);
        setLoading(false);
      }, 300);
    };
    
    fetchCourse();
  }, [id]);
  
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-fade-in">Loading course details...</div>
        </div>
      </>
    );
  }
  
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Course not found</h2>
            <p className="mb-6">The course you are looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/courses">Browse All Courses</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gray-50 py-12">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 animate-fade-in">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gray-200 to-gray-400 opacity-30 blur-xl"></div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-xl shadow-lg relative w-full"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  {course.title}
                </h1>
                <p className="text-gray-600 mb-6">
                  {course.longDescription}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-500">Price</div>
                    <div className="text-xl font-semibold">{course.price}</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="text-xl font-semibold">{course.duration}</div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800"
                    asChild
                  >
                    <Link to="/contact">Enroll Now</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-black text-black hover:bg-gray-100"
                    asChild
                  >
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Details Tabs */}
        <section className="container max-w-7xl mx-auto px-4 py-12">
          <Tabs defaultValue="overview" className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <TabsList className="mb-8 w-full grid grid-cols-3 bg-gray-100">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {course.learningOutcomes.map((outcome: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle2 className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="curriculum" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                  <div className="space-y-6">
                    {course.curriculum.map((section: any, index: number) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                          <h3 className="font-semibold">Week {section.week}: {section.title}</h3>
                        </div>
                        <div className="p-6">
                          <ul className="space-y-2">
                            {section.lessons.map((lesson: string, lessonIndex: number) => (
                              <li key={lessonIndex} className="flex items-center">
                                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-xs font-medium mr-3">
                                  {lessonIndex + 1}
                                </span>
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="instructor" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden">
                      <img
                        src={course.instructorImage}
                        alt={course.instructor}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{course.instructor}</h2>
                      <div className="text-gray-500 mb-4">Course Instructor</div>
                      <p className="text-gray-700">
                        {course.instructorBio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CourseDetailPage;
