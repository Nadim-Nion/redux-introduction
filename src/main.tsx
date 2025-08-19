import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { BrowserRouter } from "react-router";
import BasicRoute from "./routes/BasicRoute.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        {/* <App /> */}
        <BrowserRouter>
          <BasicRoute />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
