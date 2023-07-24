import CollegeGellary from "../CollegeGellary/CollegeGellary";
import CollegeReview from "../CollegeReview/CollegeReview";
import Header from "../Header/Header";
import UnearthingColleges from "../UnearthingColleges/UnearthingColleges";

const Home = () => {
  return (
    <>
      <Header />
      <UnearthingColleges />
      <CollegeGellary />
      <CollegeReview />
    </>
  );
};

export default Home;