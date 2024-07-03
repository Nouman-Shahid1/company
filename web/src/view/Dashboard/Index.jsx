"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminHomeData } from "../../reducers/Admin/adminSlice";
import Profile from "../../components/Profile/Profile";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import ToastNotification from "../../components/Notification/ToastNotification";
import Icon from "../../assets/images/Icon.png";
import City from "../../assets/images/city.png";
import Shop from "../../assets/images/shop.png";
import Services from "../../assets/images/services.png";
import Amenities from "../../assets/images/amenities.png";

export default function Dashboard() {
  const dispatch = useDispatch();

  const {
    category_count,
    amenity_count,
    service_count,
    shop_count,
    speciality_count,
    city_count,
  } = useSelector((state) => state.admin.adminHomeData);

  useEffect(() => {
    dispatch(fetchAdminHomeData());
  }, [dispatch]);

  return (
    <>
      <ToastNotification />
      <div className="bg-[#fafbff] sm:p-0 px-1 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12">
        <div className="px-2">
          <Profile />
        </div>
        <div className="md:px-0 max-w-screen-2xl">
          <div className="flex flex-wrap md:w-full mt-8 px-6">
            <DashboardCard
              details={{
                name: "Categories",
                count: category_count,
                src: Icon,
              }}
            />
            <DashboardCard
              details={{
                name: "Amenities",
                count: amenity_count,
                src: Amenities,
              }}
            />
            <div className="flex flex-wrap md:w-full md:mt-8">
              <DashboardCard
                details={{
                  name: "Services",
                  count: service_count,
                  src: Services,
                }}
              />
              <DashboardCard
                details={{
                  name: "Specialities",
                  count: speciality_count,
                  src: Services,
                }}
              />
            </div>
            <div className="flex flex-wrap md:w-full md:mt-8">
              <DashboardCard
                details={{
                  name: "Cities",
                  count: city_count,
                  src: City,
                }}
              />
              <DashboardCard
                details={{
                  name: "Shops",
                  count: shop_count,
                  src: Shop,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
