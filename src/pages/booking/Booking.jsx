import React, { useEffect } from 'react';

function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/shotbymoire/30min"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
}


export default Booking;
