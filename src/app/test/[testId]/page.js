"use client";  // Ensure the component is rendered client-side
import { startTest } from "@/services/api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

 const TestPage =  ({ params }) => {
 // const {testId}  = params;
  const unwrappedParams = React.use(params);
  const router = useRouter();

  console.log("uu",unwrappedParams.testId)

  useEffect(() => {
    startTests()
    if (router.location?.state) {
      console.log("lll",router)
      //setData(router.location.state);
    }
    // Ensure that the component is mounted and running on the client-side
  }, []);
  const startTests = async() => {

  let res=  await     startTest('f59b2d32-2387-433c-b6ae-91a1c0bdfcc3')
  console.log("rr",res)


  }
 

  // Return loading or placeholder until client-side mounted

  return <div>Register or Start Test</div>;
};

export default TestPage;
