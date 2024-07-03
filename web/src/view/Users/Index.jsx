"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-responsive-modal";
import Link from "next/link";
import Image from "next/image";
import DeleteModal from "../../components/Modal/Admin/Delete";
import Pagination from "../../components/Pagination/Pagination";
import Profile from "../../components/Profile/Profile";
import EditUserIcon from "../../components/Modal/Admin/User/Update";
import ToastNotification from "../../components/Notification/ToastNotification";
import { customDELModalStyles } from "../../utilities/constants";
import {
  bulkDeleteUser,
  deleteUser,
  fetchUsers,
} from "../../reducers/User/userSlice";
import DummyIcon from "../../assets/images/blank.png";
import DeleteIcon from "../../assets/images/icons/deleteIcon.png";

const ListUsers = () => {
  const LIMIT = 10;

  const dispatch = useDispatch();
  const { users, count } = useSelector((state) => state.user);

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [bulkDeleteModal, setBulkDeleteModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onCloseModal = () => setBulkDeleteModal(false);

  const handleCheckboxChange = (e, user) => {
    if (e.target.checked) {
      setSelectedUsers([...selectedUsers, user]);
    } else {
      setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
    }
  };

  const handleSearchUsers = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchUsers({ limit: LIMIT, offset: 0, search: searchText }));
    }
  };

  const handlePageChange = (selectedPage) => {
    dispatch(fetchUsers({ limit: LIMIT, offset: LIMIT * selectedPage }));
  };

  const handleBulkDelete = (e) => {
    e.preventDefault();

    dispatch(bulkDeleteUser(selectedUsers.map((u) => u.id)));
    setBulkDeleteModal(false);
    setSelectedUsers([]);
  };

  useEffect(() => {
    dispatch(fetchUsers({ limit: LIMIT, offset: 0 }));
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
            Users
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
        <div className="pt-[30px] bg-white flex flex-col overflow-x-auto mt-8 rounded-3xl h-full">
          <div className="px-4 sm:pl-14">
            <h1 className="font-poppinsmedium font-semibold text-2xl text-[#000000]">
              Users
            </h1>
            <div className="flex lg:flex-row gap-4 sm:pr-6 justify-between mt-4 sm:mt-8 flex-wrap">
              <div className="flex gap-4">
                {selectedUsers.length > 0 && (
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
                              Delete Users
                            </h2>
                            <p className="my-4 font-poppinsregular font-normal text-base text-[#475467]">
                              Are you sure you want to delete this ?
                            </p>
                          </div>
                          {selectedUsers.map((u, index) => (
                            <div
                              key={`user-${index + 1}`}
                              className="flex justify-between px-6 mb-3"
                            >
                              <div className="flex gap-3">
                                <div className="w-10 h-10 overflow-hidden rounded-full border border-[#078C89]">
                                  <Image
                                    src={u.icon || DummyIcon}
                                    alt="User Image"
                                    height={40}
                                    width={40}
                                  />
                                </div>
                                <div>
                                  <h2 className="text-sm font-poppinssemibold font-semibold text-[#344054]">
                                    {u.user_name}
                                  </h2>
                                  <p className="text-sm font-poppinsregular font-normal text-[#475467]">
                                    {u.email}
                                  </p>
                                </div>
                              </div>
                              <button
                                className="text-[#B42318] text-sm font-poppinssemibold font-semibold"
                                onClick={() => {
                                  setSelectedUsers(
                                    selectedUsers.filter(
                                      (user) => user.id !== u.id
                                    )
                                  );
                                  if (selectedUsers.length === 1) {
                                    setBulkDeleteModal(false);
                                  }
                                }}
                              >
                                Cancel
                              </button>
                            </div>
                          ))}
                          <div className="flex items-center gap-4 justify-between p-6 mt-7 rounded-b">
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
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-wrap sm:flex-row gap-4">
                <div className="flex items-center rounded-lg gap">
                  <label
                    fo="default-search"
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
                      id="user-search"
                      className="block w-full p-4 py-3.5 ps-14 bg-[#FAFAFAED] text-zinc-700 text-base font-normal rounded-lg outline-none focus:ring-2 focus:ring-[#078C89]"
                      placeholder="Search"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={handleSearchUsers}
                    />
                    <button
                      type="submit"
                      className="text-gray-700 absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none focus:ring-[#078C89] font-medium rounded-lg text-sm px-3 py-1"
                    ></button>
                  </div>
                </div>
                <Link href="/admin/users/new" passHref>
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

          <table className="min-w-full mt-5 w-full table-auto">
            <thead className="bg-[#FAFBFF] ">
              <th
                scope="col"
                className="py-3.5 px-2 md:px-4 text-left rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
              ></th>
              <th
                scope="col"
                className="py-3.5 px-2 md:px-4 text-left rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
              >
                User Name
              </th>
              <th
                scope="col"
                className="py-3.5 px-2 md:px-4 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0] text-left rtl:text-right dark:text-gray-400"
              >
                Email
              </th>
              <th
                scope="col"
                className="py-3.5 px-2 md:px-4 text-left rtl:text-right font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0] dark:text-gray-400"
              >
                Role
              </th>
              <th
                scope="col"
                className="py-3.5 px-2 md:px-4 text-center rtl:text-right dark:text-gray-400 font-poppinsmedium font-medium text-base md:text-lg text-[#B5B7C0]"
              >
                Actions
              </th>
            </thead>
            <tbody className="bg-white divide-y w-full divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="pl-2 md:pl-4">
                      <label key={index} className="relative">
                        <input
                          id={`checkbox-${index + 1}`}
                          name={`checkbox-${index + 1}`}
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) => handleCheckboxChange(e, user)}
                          checked={
                            !!selectedUsers.find((u) => u.id === user.id)
                          }
                        />
                      </label>
                    </td>
                    <td className="py-3.5 px-2 md:px-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="flex items-center gap-x-2 md:gap-x-3">
                        <p className="font-poppinsmedium font-medium text-base md:text-lg text-[#292D32]">
                          {user.user_name}
                        </p>
                      </div>
                    </td>
                    <td className="py-3.5 px-2 md:px-4 text-sm text-gray-500 dark:text-gray-400">
                      <p className="font-poppinsmedium font-medium text-base md:text-lg text-[#292D32]">
                        {user.email}
                      </p>
                    </td>
                    <td className="py-3.5 px-2 md:px-4 text-sm text-gray-500 dark:text-gray-400">
                      <p className="font-poppinsmedium font-medium text-base md:text-lg text-[#292D32]">
                        {user.role_type?.replace("_", " ")}
                      </p>
                    </td>
                    <td className="py-3.5 px-2 md:px-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                      <div className="flex items-center justify-center gap-x-2">
                        <EditUserIcon userId={user.id} />

                        <DeleteModal
                          itemId={user.id}
                          action={deleteUser}
                          text="User"
                          name={user.user_name}
                        />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="py-3.5 px-2 md:px-4 text-sm text-gray-500 dark:text-gray-400"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="flex sm:flex-row flex-col mt-20 items-center justify-between py-2 sm:py-4 px-4 sm:px-14">
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
};

export default ListUsers;
