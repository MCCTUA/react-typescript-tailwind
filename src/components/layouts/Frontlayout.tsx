import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

type Props = {
  // JSX.Element : เป็น JSX element
  // JSX.Element[] : ส่งเป็น JSX element แบบ object
  // ? คือเช็คว่า มีการส่งค่ามาหรือไม่
  children?: JSX.Element | JSX.Element[];
};

const Frontlayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="sm:pt-20 lg:pt-8">{children}</div>
      <Footer />
    </>
  );
};

export default Frontlayout;
