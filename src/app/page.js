import CourseList from '@/app/components/CourseList'; 
import FilterButton from '@/app/components/FilterButton'; 

const Page = () => {
  return (
    <main className="container mx-auto p-4">
      <FilterButton />
      <CourseList />
    </main>
  );
};

export default Page;
