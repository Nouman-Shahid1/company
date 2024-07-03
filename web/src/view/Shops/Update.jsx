"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShopForm from "../../components/Form/Shop";
import Loader from "../../components/Loader/Loader";
import { fetchShopById } from "../../reducers/Shop/shopSlice";

const ShopUpdate = ({ shopId }) => {
  const dispatch = useDispatch();

  const { selectedShop } = useSelector((state) => state.shop);

  useEffect(() => {
    if (shopId) {
      dispatch(fetchShopById(shopId));
    }
  }, [shopId]);

  if (selectedShop?.id)
    return <ShopForm shop={selectedShop} />;

  return <Loader visible={true} />;
};

export default ShopUpdate;
