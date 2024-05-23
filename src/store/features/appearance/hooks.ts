import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


export const useThemeColors = () => useSelector((state : RootState) => state.appearance.themeColors)
export const useActiveTheme = () => useSelector((state : RootState) => state.appearance.preferredTheme)