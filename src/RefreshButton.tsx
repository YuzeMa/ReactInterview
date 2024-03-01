import React, { useCallback, useEffect, useMemo } from "react";


// @ts-ignore
const RefreshButton = ({handleRefresh}) => {
    console.log('Button Re-rendered')
    return <button onClick={handleRefresh}>Refresh</button>
}

export default RefreshButton