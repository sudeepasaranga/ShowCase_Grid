"use client";

import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import FilterButton from './FilterButton';

const filters = [
  "All courses",
  "Project Management",
  "Business Management",
  "Employability Skills",
  "Life Learning",
  "HR & Leadership"
];

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://66fcfeedc3a184a84d18a7f4.mockapi.io/imperial/api/v1/courses');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>Error loading courses: {error}</div>;

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <section className="flex flex-col justify-center items-center px-20 py-32 w-full bg-red-50 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col items-center mb-0 w-full max-w-[1453px] max-md:mb-2.5 max-md:max-w-full">
          <h1 className="text-4xl font-bold text-center leading-[50px] text-zinc-900 w-[957px] max-md:max-w-full">
            Master Your Career Growth with Our Top-Rated, Expert-Led Courses
          </h1>
          <div className="flex flex-wrap gap-6 items-start mt-28 ml-8 max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col text-base font-medium leading-none text-black min-w-[240px] w-[960px] max-md:max-w-full">
              <div className="flex gap-2 items-start max-md:max-w-full">
                {filters.map((filter, index) => (
                  <FilterButton key={index} text={filter} active={index === 0} />
                ))}
              </div>
            </div>
            <button className="flex w-10 h-10 bg-black rounded-full min-h-[40px]" aria-label="Filter options" />
          </div>
          <div className="self-stretch mt-16 max-md:mt-10 max-md:max-w-full">
            <div className="course-list" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px', 
              margin: '0 auto', 
              padding: '0 20px' 
            }}>
    
            </div>
          </div>
          <div className="flex gap-4 items-start mt-14 text-lg font-bold max-md:mt-10">
            <button className="flex gap-1.5 justify-center items-center px-4 py-2.5 text-white rounded-lg bg-zinc-900">
              Show more
              <img loading="lazy" src="#" alt="" />
            </button>
            <button className="gap-1.5 self-stretch px-4 py-2.5 rounded-lg border border-solid border-zinc-900 text-zinc-900">
              View all
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CourseList;