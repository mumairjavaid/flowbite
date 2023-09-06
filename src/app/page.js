import React from "react";
import Flownav from "./components/Flownav";
import Heronav from "./components/Heronav";
import Flowteam from "./components/Flowteam";
import Flowplan from "./components/Flowplan";
import FLowcustomers from "./components/FLowcustomers";
import Flowfooter from "./components/Flowfooter";

const page = () => {
  return (
    <>
      <Flownav />
      <Heronav />
      <Flowteam />
      <Flowplan />
      <FLowcustomers />
      <Flowfooter />
    </>
  );
};

export default page;
