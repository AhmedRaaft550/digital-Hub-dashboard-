"use client";
import { Provider } from "react-redux";
import { reduxStore, presistStore } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { SpinnerCustom } from "@/components/Loader/Spinner";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={<SpinnerCustom />} persistor={presistStore}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
