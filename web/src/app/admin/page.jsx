"use client";
import Profile from "../../components/Profile/Profile";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Icon from "../../assets/images/Icon.png";
import City from "../../assets/images/city.png";
import Services from "../../assets/images/services.png";
import Amenities from "../../assets/images/amenities.png";

export default function Dashboard() {
  return (
    <>
      <div className="bg-[#fafbff]  sm:p-0 px-1  md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12">
        <div className="px-2">
          <Profile />
        </div>
        <div className="md:px-0 max-w-screen-2xl mb-11">
          <div className="flex flex-wrap md:w-full mt-8 px-6">
            <DashboardCard
              details={{
                name: "Jobs",
                count: "20",
                src: Icon,
              }}
            />
            <DashboardCard
              details={{
                name: "Blogs",
                count: "10",
                src: Amenities,
              }}
            />
            <div className="flex flex-wrap md:w-full md:mt-8 ">
              <DashboardCard
                details={{
                  name: "Projects",
                  count: "40",
                  src: Services,
                }}
              />
              <DashboardCard
                details={{
                  name: "Courses",
                  count: "60",
                  src: City,
                }}
              />
            </div>
            <div className="flex flex-wrap md:w-full md:mt-8 ">
              <DashboardCard
                details={{
                  name: "Users",
                  count: "60",
                  src: Services,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
