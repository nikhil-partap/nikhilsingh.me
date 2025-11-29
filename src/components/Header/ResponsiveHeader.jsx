import MobileHeader from "./MobileHeader.jsx";
import DesktopHeader from "./DesktopHeader.jsx";
import {useMediaQuery} from "../../hooks/useMediaQuery.js";

export default function ResponsiveHeader() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
