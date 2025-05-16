
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Course data
const coursesData = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js to become a full-stack web developer.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    price: "$499",
    duration: "12 weeks",
    category: "development"
  },
  {
    id: 2,
    title: "Graphic Design Masterclass",
    description: "Master Adobe Photoshop, Illustrator, and InDesign to create stunning visual designs.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    price: "$399",
    duration: "10 weeks",
    category: "design"
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    description: "Learn SEO, social media marketing, email marketing, and PPC to grow your business online.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    price: "$349",
    duration: "8 weeks",
    category: "marketing"
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    description: "Learn the principles of user-centered design and create intuitive user interfaces.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80",
    price: "$449",
    duration: "10 weeks",
    category: "design"
  },
  {
    id: 5,
    title: "Advanced JavaScript",
    description: "Master advanced JavaScript concepts including ES6+, async programming, and functional programming.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "$399",
    duration: "8 weeks",
    category: "development"
  },
  {
    id: 6,
    title: "Social Media Marketing",
    description: "Create effective social media campaigns and build a strong online presence for your brand.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: "$299",
    duration: "6 weeks",
    category: "marketing"
  }
];

const categories = ["all", "development", "design", "marketing"];

const CoursesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = activeCategory === "all" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our Courses
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our selection of expert-led courses designed to help you advance your skills and career.
            </p>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search courses..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={
                    activeCategory === category 
                      ? "bg-black text-white hover:bg-gray-800" 
                      : "border-black text-black hover:bg-gray-100"
                  }
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              {filteredCourses.map((course) => (
                <Card 
                  key={course.id}
                  className="border border-gray-200 overflow-hidden hover-scale"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{course.price}</span>
                      <span>{course.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-black text-white hover:bg-gray-800"
                      asChild
                    >
                      <Link to={`/course/${course.id}`}>View Course</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-600 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              No courses found matching your criteria. Try a different search term or category.
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CoursesPage;
