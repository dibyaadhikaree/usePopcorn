import { useEffect } from "react";

export function useKey(key, callback) {
  useEffect(
    function () {
      function event(evt) {
        if (evt.key.toLowerCase() === key.toLowerCase()) {
          callback();
        }
      }

      document.addEventListener("keydown", event);
      return () => {
        document.removeEventListener("keydown", event);
      };
    },
    [callback, key]
  );
}
