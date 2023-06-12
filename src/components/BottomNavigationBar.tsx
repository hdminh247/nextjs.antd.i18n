// External Libraries
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { maximizeChat } from "../utils/help-center";

export default function BottomNavigationBar({ className }: Props) {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const navigateTo = (url: string) => {
    router.push(url);
  };

  // Toggle chat bar
  const toggleChat = () => {
    maximizeChat();
  };

  return (
    <div className={`bottom-navigation-bar ${className}`}>
      <div
        className={"bottom-navigation-bar__item"}
        onClick={() => {
          setShowModal(true);
        }}
      >
        <Image src={"/icons/navigate-burger.svg"} width={17} height={12} />
        <div>Menu</div>
      </div>
      <div
        className={"bottom-navigation-bar__item"}
        onClick={() => {
          navigateTo("/html5-games/xe88");
        }}
      >
        <Image src={"/icons/all-games.svg"} width={12} height={16} />
        <div>HTML Games</div>
      </div>
      <div
        className={"bottom-navigation-bar__item"}
        onClick={() => {
          navigateTo("/mobile-games/xe88");
        }}
      >
        <Image src={"/icons/diamond.svg"} width={13} height={12} />
        <div>Mobile Games</div>
      </div>

      <div className={"bottom-navigation-bar__item"} onClick={toggleChat}>
        <Image src={"/icons/navigate-chat.svg"} width={12} height={12} />
        <div>Chat</div>
      </div>
    </div>
  );
}

interface Props {
  className?: string;
}
