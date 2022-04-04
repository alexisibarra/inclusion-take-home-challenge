import { useEffect, useRef } from "react";

// Based on  https://overreacted.io/making-setinterval-declarative-with-react-hooks/

type TUseInterval = (callback: () => void, delay: number) => void;

export const useInterval: TUseInterval = (callback, delay) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    const id = setInterval(tick, delay * 1000);

    return () => clearInterval(id);
  }, [delay]);
};
