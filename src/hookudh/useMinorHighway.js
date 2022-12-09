import { Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Wait4Me from "../components/wait4meS.jsx";
import {
  HomeDesc,
  WhatIReadDesc,
  WhatIHaveDoneDesc,
  WhatIHaveHeardDesc,
} from "../components/whereAmI.jsx";

const useMinorHighway = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <HomeDesc />
        </Suspense>
      ),
    },
    {
      path: "/what-i-read",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <WhatIReadDesc />
        </Suspense>
      ),
    },
    {
      path: "/what-i-have-done",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <WhatIHaveDoneDesc />
        </Suspense>
      ),
    },
    {
      path: "/what-i-have-heard",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <WhatIHaveHeardDesc />
        </Suspense>
      ),
    },

    {
      path: "*",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <Navigate to="/" replace />
        </Suspense>
      ),
    },
  ]);

export default useMinorHighway;
