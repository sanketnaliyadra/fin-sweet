import { ScreenSize } from "../ScreenSize";

export const isMobile = (screenWidth) => {
    const isMobileScreen = screenWidth <= ScreenSize.TabletLandscape;
    return isMobileScreen;
};
