import { useRef, useEffect } from "react";
import { ArrowKeys } from "../typescript/types";

export function Tab({
  children,
  active,
  pos,
  controls,
  onClick,
  id,
  className = "",
  activeClassname = "active"
}: {
  children: React.ReactNode;
  active: boolean;
  controls: string;
  pos: number;
  id: string;
  onClick: () => void;
  className?: string;
  activeClassname?: string;
}) {
  const tabRef = useRef<null | HTMLButtonElement>(null);

  useEffect(() => {
    if (active) {
      tabRef.current!.focus();
    }
  }, [active]);

  if (active) className += " " + activeClassname;

  return (
    <button
      role="tab"
      ref={tabRef}
      id={id}
      className={className}
      aria-selected={active}
      aria-posinset={pos}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TabList({
  className = "",
  children,
  label,
  orientation = "horizontal",
  style = {},
  onArrowDown,
  onHomeDown = () => {},
  onEndDown = () => {},
}: {
  className?: string;
  children: React.ReactNode;
  label: string;
  orientation?: "horizontal" | "vertical";
  style?: React.CSSProperties
  onArrowDown: (key: ArrowKeys) => void;
  onHomeDown: () => void;
  onEndDown: () => void;
}) {
  return (
    <div
      role="tablist"
      className={className}
      aria-label={label}
      onKeyDown={(e) => {
        switch (e.key) {
          case "ArrowDown":
          case "ArrowUp": {
            if (orientation === "vertical") {
              e.preventDefault();
            }
          }
          case "ArrowLeft":
          case "ArrowRight": {
            onArrowDown(e.key);
            break;
          }
          case "Home": {
            e.preventDefault();
            onHomeDown();
            break;
          }
          case "End": {
            e.preventDefault();
            onEndDown();
            break;
          }
        }
      }}
      aria-orientation={orientation}
      style={style}
    >
      {children}
    </div>
  );
}

export function TabPanel({
  className = "",
  id,
  labelledBy,
  children,
  active,
}: {
  className?: string;
  id: string;
  labelledBy: string;
  children: React.ReactNode;
  active: boolean;
}) {
  /* #################################################### */
  /* maybe you need tabIndex={-1} instead, look for it */
  /* maybe you also need to style the tabpanel when it has focus */
  /* #################################################### */
  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={className}
      id={id}
      aria-labelledby={labelledBy}
      hidden={!active}
    >
      {children}
    </div>
  );
}
