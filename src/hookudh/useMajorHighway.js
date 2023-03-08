import { lazy, Suspense } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Wait4Me from "../components/wait4meS.jsx";
const HomePage = lazy(() => import("../components/homePage.jsx"));
const WhatIRead = lazy(() => import("../components/whatIRead.jsx"));
const WhatIHaveDone = lazy(() => import("../components/whatIHaveDone.jsx"));
const WhatIHaveHeard = lazy(() => import("../components/whatIHaveHeard.jsx"));
const ChaosMonkeys = lazy(() => import("../components/chaosMonkeys.jsx"));

const useMajorHighway = () =>
  useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/what-i-read",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <WhatIRead />
        </Suspense>
      ),
    },
    {
      path: "/what-i-have-done",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <WhatIHaveDone />
        </Suspense>
      ),
    },
    {
      path: "/what-i-have-heard",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <WhatIHaveHeard />
        </Suspense>
      ),
    },
    {
      path: "/entropy",
      element: (
        <Suspense fallback={<Wait4Me />}>
          <ChaosMonkeys />
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

export default useMajorHighway;
