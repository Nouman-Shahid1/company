"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserForm from "../../components/Form/User";
import Loader from "../../components/Loader/Loader";
import { fetchUserById } from "../../reducers/User/userSlice";

const UserUpdate = ({ userId }) => {
  const dispatch = useDispatch();

  const { selectedUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  }, [userId]);

  if (selectedUser?.id) {
    return <UserForm user={selectedUser} />;
  }

  return <Loader visible={true} />;
};

export default UserUpdate;
