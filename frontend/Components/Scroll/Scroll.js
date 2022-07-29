import React, { useEffect, useState } from "react";

// This component tracks the y offset scroll property, and stores it in a number.
// the further the user scrolls, the higher the number.
// could be used for later functionality

function ScrollTracker() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset, "Page Y offset value");
}

export default ScrollTracker;
