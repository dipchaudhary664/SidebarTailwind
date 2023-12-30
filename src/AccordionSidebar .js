// Import necessary dependencies
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import productIconOutline from "@iconify-icons/mdi/cart-outline";
import userIconOutline from "@iconify-icons/mdi/account-outline";
import shippingIconOutline from "@iconify-icons/mdi/truck-outline";

// AccordionItem component
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState("home");

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <li className="mb-2 text-slate-500">
      <div
        className={`flex items-center justify-between p-1 pl-2 cursor-pointer rounded-lg ${
          isOpen ? "" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-semibold">{title}</span>
        <Icon
          icon="iconamoon:arrow-up-2-thin"
          color={isOpen ? "gray" : "gray"}
          width="30"
          height="30"
          rotate={isOpen ? 2 : 0}
        />
      </div>
      {isOpen && <ul className="mt-2">{children}</ul>}
    </li>
  );
};

// AccordionSidebar component
const AccordionSidebar = () => {
  return (
    <div className="h-screen w-1/6 border-r-2 border-blue-600">
      <div className="mx-5 pt-5">
        {/* Logo */}
        <div className="mb-4">
          <img
            className="rounded-full w-12 h-12"
            src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Logo"
          />
        </div>

        {/* Sidebar List */}
        <ul className="space-y-2 text-slate-500 cursor-pointer">
          {/* Regular items */}
          <li className="flex items-center text-sm font-semibold bg-green-500 p-2 rounded-lg">
            <Icon icon="octicon:home-24" color="gray" width="20" height="20" />
            <span className="ml-2">หน้าแรก</span>
          </li>

          <li className="flex items-center text-sm font-semibold hover:bg-gray-100 p-2 transition duration-300">
            <Icon
              icon="iconamoon:category-thin"
              color="gray"
              width="20"
              height="20"
            />
            <span className="ml-2">หมวดหมู่</span>
          </li>

          {/* Accordion items */}
          <AccordionItem
            title={
              <div className="flex items-center">
                <Icon
                  icon={productIconOutline}
                  className="text-xl mr-2"
                  style={{ color: "gray" }}
                />
                สินค่า
              </div>
            }
          >
            {/* Submenu items for Product */}
            <li className="text-xs p-2 bg-slate-200 rounded-lg">Services</li>
            {/* Add more submenu items as needed */}
          </AccordionItem>

          <AccordionItem
            title={
              <div className="flex items-center">
                <Icon
                  icon={userIconOutline}
                  className="text-xl mr-2"
                  style={{ color: "gray" }}
                />
                User
              </div>
            }
          >
            {/* Submenu items for User */}
            <li className="text-xs p-2 bg-slate-200 rounded-lg">Services</li>
            {/* Add more submenu items as needed */}
          </AccordionItem>

          <AccordionItem
            title={
              <div className="flex items-center">
                <Icon
                  icon={shippingIconOutline}
                  className="text-xl mr-2"
                  style={{ color: "gray" }}
                />
                สถานะขนส่ง
              </div>
            }
          >
            <li className="text-xs p-2 bg-slate-200 rounded-lg">Services</li>
          </AccordionItem>

          {/* Regular items */}
          <li className="flex items-center text-sm font-semibold hover:bg-gray-100 p-2 transition duration-300">
            <Icon icon="clarity:tag-line" color="gray" width="20" height="20" />
            <span className="ml-2">ราคาโปรโมชั่น</span>
          </li>
          <li className="flex items-center text-sm font-semibold hover:bg-gray-100 p-2 transition duration-300">
            <Icon icon="ph:bell-ringing" color="gray" width="20" height="20" />
            <span className="ml-2">การแจ้งเตือน</span>
          </li>
          <li className="flex items-center text-sm font-semibold hover:bg-gray-100 p-2 transition duration-300">
            <Icon
              icon="healthicons:money-bag-outline"
              color="gray"
              width="20"
              height="20"
            />
            <span className="ml-2">ราคาขนส่ง</span>
          </li>
          <li className="flex items-center text-sm font-semibold hover:bg-gray-100 p-2 transition duration-300">
            <Icon icon="ep:setting" color="gray" width="20" height="20" />
            <span className="ml-2">ตั้งค่า</span>
          </li>
        </ul>

        {/* Logout Button */}
        <button className="flex items-center text-gray-500 pt-36 px-2 py-2 rounded-md">
          <Icon
            icon="material-symbols-light:logout"
            color="gray"
            width="20"
            height="20"
          />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AccordionSidebar;
