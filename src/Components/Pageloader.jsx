import React, { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";

const Pageloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false); // Set loading to false after the operation is complete
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <HashLoader color="#000000" loading size={51} />
        </div>
      ) : (
        // Your actual content goes here once loading is complete
        <div>
          {/* Other components and content */}
        </div>
      )}
    </div>
  );
};

export default Pageloader;
