"use client";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import Select from "react-select";
import Link from "next/link";
import Image from "next/image";
import ShopModal from "../../components/Modal/Admin/Shop/Update";
import DeleteShopModal from "../../components/Modal/Admin/Delete";
import Pagination from "../../components/Pagination/Pagination";
import Profile from "../../components/Profile/Profile";
import Tooltip from "../../components/ToolTip/ToolTip";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ToastNotification from "../../components/Notification/ToastNotification";
import { customSelectStyles } from "../../utilities/constants";
import { customDELModalStyles } from "../../utilities/constants";

import {
  fetchShops,
  deleteShop,
  bulkDeleteShops,
} from "../../reducers/Shop/shopSlice";
import { fetchCategories } from "../../reducers/Category/categorySlice";
import { fetchSpecialitiesByCategory } from "../../reducers/Speciality/specialitySlice";
import { fetchServicesBySpeciality } from "../../reducers/Service/serviceSlice";
import { fetchAmenities } from "../../reducers/Amenity/amenitySlice";
import Facebook from "../../assets/images/icons/facebookIcon.png";
import X from "../../assets/images/icons/twittericon.png";
import ThreeDots from "../../assets/images/icons/threedot.png";
import ThreadId from "../../assets/images/icons/threadId.png";
import CallIcon from "../../assets/images/icons/callIcon.png";
import EmailIcon from "../../assets/images/icons/emailIcon.png";
import Location from "../../assets/images/icons/location.png";
import DeleteIcon from "../../assets/images/icons/deleteIcon.png";
import AvatarIcon from "../../assets/images/avatar.png";
import filter from "../../assets/images/icons/filter.svg";
import FilterIcon from "../../assets/images/icons/filtericon.png";
import DummyIcon from "../../assets/images/blank.png";

export default function ListShops() {
  const LIMIT = 10;
  const { shops, count } = useSelector((state) => state.shop);
  const { categories } = useSelector((state) => state.category);
  const { specialities } = useSelector((state) => state.speciality);
  const { services } = useSelector((state) => state.service);
  const { amenities } = useSelector((state) => state.amenity);
  const [selectedShops, setSelectedShops] = useState([]);
  const [bulkDeleteModal, setBulkDeleteModal] = useState(false);
  const onCloseModal = () => setBulkDeleteModal(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [specialityOptions, setSpecialityOptions] = useState([]);
  const [serviceOptions, setServiceOptions] = useState([]);
  const [amenityOptions, setAmenityOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSpecialities, setSelectedSpecialities] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategoryOptions(
      categories.map((category) => ({
        value: category.id,
        label: category.name,
      }))
    );
  }, [categories]);

  useEffect(() => {
    setSpecialityOptions(
      specialities.map((speciality) => ({
        value: speciality.id,
        label: speciality.name,
      }))
    );
  }, [specialities]);

  useEffect(() => {
    setServiceOptions(
      services.map((service) => ({
        value: service.id,
        label: service.name,
      }))
    );
  }, [services]);

  useEffect(() => {
    setAmenityOptions(
      amenities.map((amenity) => ({
        value: amenity.id,
        label: amenity.name,
      }))
    );
  }, [amenities]);

  const modalCustomStyles = {
    modal: {
      padding: "0px",
      margin: "110px",
      borderRadius: "20px",
      overflow: "hidden",
    },
  };

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  useEffect(() => {
    const closeDropdowns = (event) => {
      if (
        openDropdownIndex !== null &&
        !event.target.closest(
          `.relative.z-40[data-index="${openDropdownIndex}"]`
        )
      ) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("click", closeDropdowns);

    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, [openDropdownIndex]);

  const [selectedShopImages, setSelectedShopImages] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  const [searchText, setSearchText] = useState("");

  const handleCheckboxChange = (e, shop) => {
    if (e.target.checked) {
      setSelectedShops([...selectedShops, shop]);
    } else {
      setSelectedShops(selectedShops.filter((shp) => shp.id !== shop.id));
    }
  };

  const handleBulkDelete = (e) => {
    e.preventDefault();

    dispatch(bulkDeleteShops(selectedShops.map((shp) => shp.id)));
    setBulkDeleteModal(false);
    setSelectedShops([]);
  };
  const handlePageChange = (selectedPage) => {
    dispatch(fetchShops({ limit: LIMIT, offset: LIMIT * selectedPage }));
  };

  const [showmodal, setShowmodal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  const handleDeleteItem = async () => {
    dispatch(action(itemId));
    setBulkDeleteModal(false);
  };

  const handleSearchShops = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchShops({ limit: LIMIT, offset: 0, search: searchText }));
    }
  };

  const handleFilterClick = (e) => {
    e.preventDefault();

    setFilterModal(true);
    dispatch(fetchCategories());
    dispatch(fetchAmenities());
  };

  const handleOnCategoriesSelect = (selectedOptions) => {
    const ids = selectedOptions.map((opt) => opt.value);
    setSelectedCategory(ids);
    setSelectedSpecialities([]);
    setSelectedServices([]);

    dispatch(fetchSpecialitiesByCategory(ids));
  };

  const handleOnSpecialitiesSelect = (selectedOptions) => {
    const ids = selectedOptions.map((opt) => opt.value);
    setSelectedSpecialities(ids);
    setSelectedServices([]);

    dispatch(fetchServicesBySpeciality(ids));
  };

  const handleShopFilters = (e) => {
    e.preventDefault();

    dispatch(
      fetchShops({
        limit: LIMIT,
        offset: 0,
        filter: true,
        categories: selectedCategory,
        specialities: selectedSpecialities,
        services: selectedServices,
        amenities: selectedAmenities,
      })
    );
    setFilterModal(false);
  };

  useEffect(() => {
    dispatch(fetchShops({ limit: LIMIT, offset: 0 }));
  }, [dispatch]);

  return (
    <>
      <ToastNotification />
      <div className="bg-[#fafbff] sm:p-0 px-1 md:px-8 lg:px-6 xl:px-8 2xl:px-12 py-4 md:py-5 lg:py-7 xl:py-10 2xl:py-12">
        <div className="px-2">
          <Profile />
        </div>

        <div className="flex px-4 md:flex-row gap-2 sm:gap-4 items-center ml-2 md:ml-10 mt-4">
          <p className="font-poppinsmedium font-medium text-base text-[#212427]">
            <Link href="/admin" passHref>
              <p className="font-poppinsmedium font-medium text-sm sm:text-base text-[#212427]">
                Home
              </p>
            </Link>
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mt-1 md:mt-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          <p className="font-poppinsmedium font-medium text-sm sm:text-base text-[#212427]">
            Shop
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 mt-1 md:mt-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>

          <p className="font-poppinsmedium font-medium text-sm sm:text-base text-[#21242780]">
            Details
          </p>
        </div>

        <div className="pt-[30px] bg-white flex flex-col sm:overflow-x-auto mt-8 rounded-3xl h-full">
          <div className="px-4 sm:pl-14">
            <h1 className="font-poppinsmedium font-semibold text-2xl text-[#000000]">
              Shops
            </h1>
            <div className="flex gap-4 sm:pr-6 justify-between mt-4 sm:mt-8 flex-wrap">
              <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                <div className="flex gap-4">
                  {selectedShops.length > 0 && (
                    <div>
                      <button
                        className="group flex gap-2 py-3 px-4 items-center rounded-lg text-base font-medium font-poppinsmedium bg-white hover:bg-[#B42318] text-[#B42318] hover:text-white border border-[#B42318]"
                        onClick={(e) => setBulkDeleteModal(true)}
                      >
                        <span>Delete</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-[#B42318] group-hover:text-white transition-all duration-300"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      {bulkDeleteModal ? (
                        <>
                          <Modal
                            open={bulkDeleteModal}
                            onClose={onCloseModal}
                            styles={customDELModalStyles}
                            showCloseIcon={true}
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                          >
                            <div
                              style={{ maxHeight: "80vh", overflowY: "auto" }}
                              className="relative my-6 mx-auto w-full md:w-[400px]"
                            >
                              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5">
                                  <Image
                                    src={DeleteIcon}
                                    alt=""
                                    height={64}
                                    width={64}
                                  />
                                </div>
                                <div className="relative px-6 flex-auto">
                                  <h2 className="text-[#101828] font-poppinssemibold text-xl font-semibold ">
                                    Delete Shops
                                  </h2>
                                  <p className="my-4 font-poppinsregular font-normal text-base text-[#475467]">
                                    Are you sure you want to delete this ?
                                  </p>
                                </div>
                                {selectedShops.map((shop, index) => (
                                  <div
                                    key={`shop-${index + 1}`}
                                    className="flex justify-between px-6 mb-3"
                                  >
                                    <div className="flex gap-3">
                                      <div className="w-10 h-10 overflow-hidden rounded-full border border-[#078C89]">
                                        <Image
                                          src={shop.icon || DummyIcon}
                                          alt="Category Icon"
                                          height={40}
                                          width={40}
                                        />
                                      </div>
                                      <div>
                                        <h2 className="text-sm font-poppinssemibold font-semibold text-[#344054]">
                                          {shop.name}
                                        </h2>
                                        <p className="text-sm font-poppinsregular font-normal text-[#475467]">
                                          {shop.slug}
                                        </p>
                                      </div>
                                    </div>
                                    <button
                                      className="text-[#B42318] text-sm font-poppinssemibold font-semibold"
                                      onClick={() =>
                                        setSelectedShops(
                                          selectedShops.filter(
                                            (a) => a.id !== shop.id
                                          )
                                        )
                                      }
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                ))}
                                <div className="flex items-center gap-4 justify-between p-6 pt-12 mt-7 rounded-b">
                                  <button
                                    className="text-slate-700 text-base font-semibold font-poppinssemibold py-[10px] sm:px-14 px-5 rounded-lg border border-[#D0D5DD] leading-normal"
                                    type="button"
                                    onClick={() => setBulkDeleteModal(false)}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    className="text-white text-base font-semibold
                                              font-poppinssemibold py-[10px] sm:px-14 px-5
                                              rounded-lg border border-[#D0D5DD]
                                              leading-normal bg-[#D92D20]"
                                    type="button"
                                    onClick={handleBulkDelete}
                                  >
                                    Confirm
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Modal>
                          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                        </>
                      ) : null}
                    </div>
                  )}
                </div>
                <div className="flex gap-4">
                  <button
                    className="flex gap-2 py-2 relative text-center px-4 border border-neutral-200 rounded-lg text-zinc-800 text-base font-medium font-poppins items-center"
                    type="button"
                    onClick={handleFilterClick}
                  >
                    <Image src={filter} alt="" height={24} width={24} />
                    <span className="text-zinc-800 text-base leading-[18px] font-medium font-poppinsmedium">
                      {" "}
                      Filters
                    </span>
                    {selectedCategory.length +
                      selectedAmenities.length +
                      selectedServices.length +
                      selectedSpecialities.length >
                      0 && (
                      <div className="flex justify-center items-center w-5 h-5 absolute -top-3 -right-2 z-10 rounded-full bg-red-500 text-white text-xs">
                        {selectedCategory.length +
                          selectedAmenities.length +
                          selectedServices.length +
                          selectedSpecialities.length}
                      </div>
                    )}
                  </button>
                  {filterModal && (
                    <>
                      <Modal
                        open={filterModal}
                        onClose={() => setFilterModal(false)}
                        styles={modalCustomStyles}
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          <div className="flex items-start justify-between p-5">
                            <Image
                              src={FilterIcon}
                              alt=""
                              height={64}
                              width={64}
                            />
                          </div>
                          <div className="relative px-6 flex-auto">
                            <h2 className="text-[#101828] font-poppinssemibold text-xl font-semibold ">
                              Filter by
                            </h2>
                            <p className="my-4 font-poppinsregular font-normal text-base text-[#475467]">
                              You can filter out the shops based on the
                              following options
                            </p>
                          </div>
                          <div className="px-10 mb-3">
                            <label
                              htmlFor="category"
                              className="block font-poppinssemibold font-semibold text-base text-[#344054] "
                            >
                              Categories
                            </label>
                            <Select
                              key={selectedCategory.join("-cat-") || "0"}
                              name="category"
                              options={categoryOptions}
                              styles={customSelectStyles}
                              defaultValue={categoryOptions.filter((opt) =>
                                selectedCategory.includes(opt.value)
                              )}
                              onChange={handleOnCategoriesSelect}
                              className="w-full py-[6px] text-base font-normal font-poppinsregular leading-normal rounded-md text-[#757575]"
                              isMulti={true}
                              isSearchable={true}
                              closeMenuOnSelect={false}
                            />
                          </div>
                          <div className="px-10 mb-3">
                            <label
                              htmlFor="specialities"
                              className="block font-poppinssemibold font-semibold text-base text-[#344054] "
                            >
                              Specialities
                            </label>
                            <Select
                              key={selectedCategory.join("-spec-") || "0"}
                              name="specialities"
                              options={specialityOptions}
                              styles={customSelectStyles}
                              defaultValue={specialityOptions.filter((opt) =>
                                selectedSpecialities.includes(opt.value)
                              )}
                              onChange={handleOnSpecialitiesSelect}
                              className="w-full py-[6px] text-base font-normal font-poppinsregular leading-normal rounded-md text-[#757575]"
                              isMulti={true}
                              isSearchable={true}
                              closeMenuOnSelect={false}
                            />
                          </div>
                          <div className="px-10 mb-3">
                            <label
                              htmlFor="services"
                              className="block font-poppinssemibold font-semibold text-base text-[#344054] "
                            >
                              Services
                            </label>
                            <Select
                              key={selectedSpecialities.join("-serv-") || "0"}
                              name="services"
                              options={serviceOptions}
                              styles={customSelectStyles}
                              defaultValue={serviceOptions.filter((opt) =>
                                selectedServices.includes(opt.value)
                              )}
                              onChange={(selectedOptions) => {
                                setSelectedServices(
                                  selectedOptions.map((opt) => opt.value)
                                );
                              }}
                              className="w-full py-[6px] text-base font-normal font-poppinsregular leading-normal rounded-md text-[#757575]"
                              isMulti={true}
                              isSearchable={true}
                              closeMenuOnSelect={false}
                            />
                          </div>
                          <div className="px-10 mb-3">
                            <label
                              htmlFor="services"
                              className="block font-poppinssemibold font-semibold text-base text-[#344054] "
                            >
                              Amenities
                            </label>
                            <Select
                              key={selectedAmenities.join("-amen-") || "0"}
                              name="services"
                              options={amenityOptions}
                              styles={customSelectStyles}
                              defaultValue={amenityOptions.filter((opt) =>
                                selectedAmenities.includes(opt.value)
                              )}
                              onChange={(selectedOptions) => {
                                setSelectedAmenities(
                                  selectedOptions.map((opt) => opt.value)
                                );
                              }}
                              className="w-full py-[6px] text-base font-normal font-poppinsregular leading-normal rounded-md text-[#757575]"
                              isMulti={true}
                              isSearchable={true}
                              closeMenuOnSelect={false}
                            />
                          </div>
                          <div className="flex items-center justify-between p-6 rounded-b">
                            <button
                              className="text-slate-700
                          text-base
                          font-semibold
                          font-poppinssemibold py-[10px] px-14 rounded-lg border border-[#D0D5DD]
                          leading-normal"
                              type="button"
                              onClick={() => {
                                setFilterModal(false);
                                setSelectedCategory([]);
                                setSelectedSpecialities([]);
                                setSelectedServices([]);
                                setSelectedAmenities([]);
                              }}
                            >
                              Cancel
                            </button>
                            <button
                              className="text-white
                          text-base
                          font-semibold
                          font-poppinssemibold py-[10px] px-14 rounded-lg border border-[#D0D5DD]
                          leading-normal bg-[#078C89]"
                              type="button"
                              onClick={handleShopFilters}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </Modal>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                <div className="flex items-center rounded-lg gap">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 py-3.5 ps-14 bg-[#FAFAFAED] text-zinc-700 text-base font-normal rounded-lg outline-none focus:ring-2 focus:ring-[#078C89]"
                      placeholder="Search"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={handleSearchShops}
                    />
                    <button
                      type="submit"
                      className="text-gray-700 absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-[#078C89] font-medium rounded-lg text-sm px-3 py-1"
                    ></button>
                  </div>
                </div>
                <Link href="/admin/shops/new" passHref>
                  <button
                    className="flex rounded-lg gap-4 bg-[#078C89] border items-center py-[12px] px-[35px] sm:px-[18px] justify-center text-white text-base font-semibold"
                    type="button"
                  >
                    <span>Create</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto sm:overflow-x-visible ">
            <table className="min-w-full mt-5 w-full">
              <thead className="bg-[#FAFBFF]">
                <th
                  scope="col"
                  className="py-3.5 px-2 md:px-4 text-left rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
                ></th>
                <th
                  scope="col"
                  className="py-3.5 px-2 md:px-4 text-left rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-2 md:px-4 text-left rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-2 md:px-4 text-left rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-2 md:px-4 text-left rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-2 md:px-4 text-left rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
                >
                  Specialities
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-2 md:px-4 text-left rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
                >
                  Amenities
                </th>
                <th
                  scope="col"
                  className="py-3.5 px-2 md:px-4 text-center rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
                >
                  Actions
                </th>
              </thead>
              <tbody className="bg-white divide-y w-full divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                {shops.length > 0 ? (
                  shops.map((shop, index) => (
                    <tr key={shop.id}>
                      <td className="pl-2 md:pl-4 ">
                        <label key={index} className="relative">
                          <input
                            type="checkbox"
                            className="checkbox"
                            onChange={(e) => handleCheckboxChange(e, shop)}
                            checked={
                              !!selectedShops.find((shp) => shp.id === shop.id)
                            }
                          />
                        </label>
                      </td>
                      <td className="py-3.5 flex mt-1.5 gap-2 items-center px-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                        <div>
                          <button
                            onClick={() => {
                              setShowmodal(true);
                              setSelectedShop(shop);
                              setSelectedShopImages(
                                shop.media_gallery.relevant_imgs.filter(Boolean)
                              );
                            }}
                            className="flex items-center rounded-lg bg-white text-teal-600"
                          >
                            <Image
                              src={shop.media_gallery.shop_logo}
                              alt=""
                              height={20}
                              width={20}
                              className="rounded-2xl"
                            />
                          </button>
                          {showmodal && selectedShop ? (
                            <>
                              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                <div className="relative my-6 mx-auto w-[50%]">
                                  <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5">
                                      <button
                                        className="p-1 ml-auto bg-transparent border-0 text-[#667085] float-right"
                                        onClick={() => setShowmodal(false)}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="w-5 h-5 text-[#667085]"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                    <ImageCarousel
                                      visibleImages={selectedShopImages}
                                      startIndex={index}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                          ) : null}
                        </div>
                        <div className="flex items-center gap-x-2 md:gap-x-3">
                          <p className="font-poppinsmedium font-medium text-base md:text-lg text-[#078C89]">
                            {shop.name}
                          </p>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-sm text-gray-500 dark:text-gray-400">
                        <p className="font-poppinsmedium font-medium text-lg text-[#292D32]">
                          <Tooltip
                            content={
                              <>
                                <h3 className="font-poppinssemibold font-semibold text-[#101828] text-xl">
                                  Description:
                                </h3>
                                <p className="font-poppinsmedium mt-4 font-medium text-base text-[#292D32]">
                                  {shop.description}
                                </p>
                              </>
                            }
                            placement="bottom"
                          >
                            <button className="hover:underline focus:outline-none">
                              {shop.description.length > 15
                                ? `${shop.description.slice(0, 15)}...`
                                : shop.description}
                            </button>
                          </Tooltip>
                        </p>
                      </td>
                      <td>
                        <div className="text-center">
                          <Tooltip
                            content={
                              <>
                                <h3 className="font-poppinssemibold font-semibold text-[#101828] text-xl">
                                  Location Details:
                                </h3>
                                <p className="font-poppinsmedium mt-4 font-medium text-base text-[#292D32]">
                                  <span className="text-[#B5B7C0]">
                                    Address:
                                  </span>{" "}
                                  {shop.address}
                                  <br />
                                  <span className="text-[#B5B7C0]">
                                    Region:{" "}
                                  </span>{" "}
                                  {shop.region}
                                  <br />
                                  <span className="text-[#B5B7C0]">
                                    Postal Code:
                                  </span>{" "}
                                  {shop.postal_code}
                                  <br />
                                  <span className="text-[#B5B7C0]">
                                    City:
                                  </span>{" "}
                                  {shop.city ? shop.city.name : "NA"}
                                </p>
                              </>
                            }
                            placement="bottom"
                            className="specific-tooltip"
                          >
                            <button className="flex gap-2 text-[#292D32] font-poppinsmedium font-medium text-lg">
                              <Image
                                src={Location}
                                alt=""
                                height={24}
                                width={24}
                              />
                              {shop.city ? shop.city.name : "NA"}
                            </button>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="font-poppinsmedium font-medium text-lg">
                        {shop.status ? shop.status : "NA"}
                        <div className="flex gap-1 text-[#B5B7C0]">
                          Claimed:{" "}
                          <div
                            className={` ${
                              shop.is_claimed
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {shop.is_claimed ? " True" : " False"}
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="specific-tooltip-wrapper text-center">
                          <Tooltip
                            content={
                              <>
                                <h3 className="font-poppinssemibold font-semibold text-[#101828] text-xl">
                                  Specialities
                                </h3>
                                <p className="font-poppinsmedium mt-4 font-medium text-base text-[#292D32]">
                                  {shop.specialities &&
                                  shop.specialities.length > 0 ? (
                                    shop.specialities.map((speciality) => (
                                      <span key={speciality.id}>
                                        {speciality.name}
                                        <br />
                                      </span>
                                    ))
                                  ) : (
                                    <span>NA</span>
                                  )}
                                </p>
                              </>
                            }
                            placement="bottom"
                          >
                            <button className="text-[#292D32] font-poppinsmedium font-medium text-lg">
                              {shop.specialities && shop.specialities.length > 0
                                ? shop.specialities
                                    .map((speciality) => speciality.name)
                                    .join(", ")
                                    .slice(0, 8)
                                : "NA"}

                              {shop.specialities &&
                                shop.specialities.some(
                                  (speciality) => speciality.name.length > 8
                                ) &&
                                "..."}
                            </button>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="specific-tooltip-wrapper text-center">
                          <Tooltip
                            content={
                              <>
                                <h3 className="font-poppinssemibold font-semibold text-[#101828] text-xl">
                                  Amenities
                                </h3>
                                <p className="font-poppinsmedium mt-4 font-medium text-base text-[#292D32]">
                                  {shop.amenities &&
                                  shop.amenities.length > 0 ? (
                                    shop.amenities.map((amenity) => (
                                      <span key={amenity.id}>
                                        {amenity.name}
                                        <br />
                                      </span>
                                    ))
                                  ) : (
                                    <span>NA</span>
                                  )}
                                </p>
                              </>
                            }
                            placement="bottom"
                            className="specific-tooltip"
                          >
                            <button className="text-[#292D32] font-poppinsmedium font-medium text-lg">
                              {shop.amenities && shop.amenities.length > 0
                                ? shop.amenities
                                    .map((amenity) => amenity.name)
                                    .join(", ")
                                    .slice(0, 8)
                                : "NA"}

                              {shop.amenities &&
                                shop.amenities.some(
                                  (amenity) => amenity.name.length > 8
                                ) &&
                                "..."}
                            </button>
                          </Tooltip>
                        </div>
                      </td>
                      <td className="text-center text-lg font-medium text-gray-900 dark:text-gray-300">
                        <div className="flex items-center text-center gap-2 justify-end">
                          <ShopModal shopId={shop.id} />
                          <DeleteShopModal
                            itemId={shop.id}
                            action={deleteShop}
                            text="Shop"
                            name={shop.name}
                          />

                          <div className="relative z-40">
                            <button onClick={() => toggleDropdown(index)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-10 h-10 text-[#B5B7C0]"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                />
                              </svg>
                            </button>
                            {openDropdownIndex === index && (
                              <div className="absolute right-[30px] w-96 top-0 mt-10">
                                <div className="bg-white shadow-md pl-6 pr-16 pt-5 pb-8">
                                  <h3 className="font-poppinssemibold text-left pb-3 font-semibold text-[#101828] text-xl">
                                    Contact & Socials
                                  </h3>
                                  <p className="font-poppinsmedium font-medium text-base text-[#B5B7C0]">
                                    <div className="flex gap-[14px]">
                                      <Image
                                        src={Facebook}
                                        alt=""
                                        height={20}
                                        width={20}
                                      />
                                      {shop.facebook ? (
                                        <a href={shop.facebook} target="_blank">
                                          {shop.facebook}
                                        </a>
                                      ) : (
                                        "NA"
                                      )}
                                    </div>
                                    <div className="flex gap-[14px] mt-4">
                                      <Image
                                        src={X}
                                        alt=""
                                        height={20}
                                        width={20}
                                      />
                                      {shop.x ? (
                                        <a href={shop.x} target="_blank">
                                          {shop.x}
                                        </a>
                                      ) : (
                                        "NA"
                                      )}
                                    </div>
                                    <div className="flex gap-[14px] mt-4">
                                      <Image
                                        src={ThreadId}
                                        alt=""
                                        height={20}
                                        width={20}
                                      />
                                      {shop.tick_tok ? (
                                        <a href={shop.tick_tok} target="_blank">
                                          {shop.tick_tok}
                                        </a>
                                      ) : (
                                        "NA"
                                      )}
                                    </div>
                                    <div className="flex gap-[14px] mt-4">
                                      <Image
                                        src={ThreeDots}
                                        alt=""
                                        height={20}
                                        width={20}
                                      />
                                      {shop.other ? (
                                        <a href={shop.other} target="_blank">
                                          {shop.other}
                                        </a>
                                      ) : (
                                        "NA"
                                      )}
                                    </div>
                                    <div className="flex gap-[14px] mt-4">
                                      <Image
                                        src={CallIcon}
                                        alt=""
                                        height={20}
                                        width={20}
                                      />
                                      {shop.phone_1 ? shop.phone_1 : "NA"}
                                    </div>
                                    <div className="flex gap-[14px] mt-4">
                                      <Image
                                        src={EmailIcon}
                                        alt=""
                                        height={20}
                                        width={20}
                                      />
                                      {shop.email_1 ? shop.email_1 : "NA"}
                                    </div>
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="py-3.5 px-4 text-sm text-gray-500 dark:text-gray-400"
                    >
                      No shops found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex mt-28 mb-12 items-center justify-between py-2 sm:py-4 px-4 sm:px-14">
            <p className="font-poppinsmedium text-lg text-[#21242780] font-medium">
              Total: {count}
            </p>
            <Pagination
              pageCount={Math.ceil(count / LIMIT)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
