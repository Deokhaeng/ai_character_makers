"use client";

import { ChangeEvent, useState } from "react";

export default function Nickname() {
  const [nickname, setNicname] = useState<string>("");

  const handleNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNicname(e.target.value);
  };

  return (
    <div className="flex items-center h-screen bg-white">
      <div className="grid justify-items-center w-full">
        <p className="text-title font-normal">
          당신의 <span className="font-semibold">닉네임</span>을
        </p>
        <p className="text-title font-normal">작성해 주세요.</p>
        <input
          type="text"
          name="nickname"
          className="w-3/4 border-1 rounded h-10 mt-4 caret-line-color focus:outline-none focus:ring-1 focus:ring-primary px-3 text-center placeholder:text-center placeholder:text-04-dimmed"
          placeholder="닉네임을 작성해 주세요."
          onChange={handleNickname}
        />
        <button
          type="button"
          className={`rounded ${!!nickname ? "bg-primary" : "bg-04-dimmed"} mt-8 py-3 text-white ${
            !!nickname && "hover:bg-opacity-70"
          } w-36`}
          disabled={!nickname}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
