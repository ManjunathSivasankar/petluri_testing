
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js to become a full-stack web developer.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
    price: "$499",
    duration: "12 weeks"
  },
  {
    id: 2,
    title: "Graphic Design Masterclass",
    description: "Master Adobe Photoshop, Illustrator, and InDesign to create stunning visual designs.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    price: "$399",
    duration: "10 weeks"
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    description: "Learn SEO, social media marketing, email marketing, and PPC to grow your business online.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    price: "$349",
    duration: "8 weeks"
  }
];

const FeaturedCourses = () => {
  return (
    <section className="section bg-background">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Courses
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Discover our most popular courses designed to help you acquire in-demand skills and advance your career.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              className="border border-primary/20 overflow-hidden hover-scale"
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
                <p className="text-foreground/80 mb-4">{course.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{course.price}</span>
                  <span>{course.duration}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-primary text-foreground hover:bg-accent"
                  asChild
                >
                  <Link to={`/course/${course.id}`}>View Course</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-foreground hover:bg-primary/10"
            asChild
          >
            <Link to="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
