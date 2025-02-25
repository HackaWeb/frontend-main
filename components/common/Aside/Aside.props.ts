import { Theme } from "@/components/ui/ThemeSwitch/ThemeSwitch.props";
import { UserProfile } from "@/types/user.interface";

export interface AsideProps {
    profile: UserProfile | null;
    theme: Theme | null;
}
