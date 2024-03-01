import "./styles.css";
import React, { useCallback, useEffect, useMemo } from "react";
import RefreshButton from './RefreshButton'


export default function App() {
  const [count, setCount] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);



  const handleRefresh = () => {
    setIsLoading(true);
    setCount(count + 1);
  };

  return (
    <div>
      <div><RefreshButton handleRefresh={handleRefresh}/><h1>{isLoading ? "refreshing..." : "loaded"} </h1></div>
      <div className="wrapper">
        {/* Add your card here */}
      </div>
    </div>
  );
}
