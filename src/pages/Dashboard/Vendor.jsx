import React from "react";
import { useGetAllPublicVendorsQuery } from "../../redux/vendors/vendorApi";
import Loader from "../../common/Loader";

function Vendor() {
  const { data, isLoading, isError } = useGetAllPublicVendorsQuery();

  if (isLoading) {
    return <Loader />;
  }

  return <h2>Vendor</h2>;
}

export default Vendor;
