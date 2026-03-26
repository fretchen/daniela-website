import "./panda.css";
import React from "react";
import { layout } from "./styles";

export default function LayoutDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={layout.main}>
      <div className={layout.content}>{children}</div>
    </div>
  );
}
