import HomeLayout from "@/modules/home/ui/home-layout";

interface LayoutProps {
    children: React.ReactNode;
};

export const layout = ({ children }: LayoutProps) => {
    return (
        <HomeLayout>
            {children}
        </HomeLayout>
    )
}

export default layout;
