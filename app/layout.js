import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community."
};
  
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader/>
        {children}
      </body>
    </html>
  );
}


//why children prop is used here : 
/* 
here is an example given : 

import React from "react";

const ChildComponent = ({ children }) => {
  return (
    <>
      {React.cloneElement(children, {
        onClick: () => console.log("click"),
      })}
    </>
  );
};

const Layout = () => {
  return (
    <div>
      <ChildComponent>
        <p>Blablabla</p>
      </ChildComponent>
    </div>
  );
};
*/