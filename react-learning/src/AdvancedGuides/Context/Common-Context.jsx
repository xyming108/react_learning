import React from "react";

const Context = React.createContext({
        time: 'light',
        background: 'red',
    },
);
//在 DevTools 中将显示为 MyDisplayName
Context.displayName = "MyDisplayName";

export default Context;