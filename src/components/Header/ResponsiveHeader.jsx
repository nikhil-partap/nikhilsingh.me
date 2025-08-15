import React from "react";
import Header from "./Header.jsx";
import OldHeader from "./OldHeader.jsx";
import { useMediaQuery } from "../../hooks/useMediaQuery.js";

export default function ResponsiveHeader() {
    // Mobile if viewport is <= 767px
    const isMobile = useMediaQuery("(max-width: 767px)");
    return isMobile ? <Header /> : <OldHeader />;
}
