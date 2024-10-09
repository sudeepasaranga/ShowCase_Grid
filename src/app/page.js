import CourseList from '@/app/components/CourseList'; 
import FilterButton from '@/app/components/FilterButton'; 
import './globals.css';

const Page = () => {
  return (
    <main className="container mx-auto p-4">
      <FilterButton />
      <CourseList />
    </main>
  );
};

export default Page;
