import { ReactNode } from "react";
import Navbar from "../components/Navbar";

type LayoutProps = {
    readonly children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <main>
            <Navbar/>
            {children}
        </main>
    );
}