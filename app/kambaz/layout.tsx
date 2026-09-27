import Navigation from './Navigation';

export default function KambazLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navigation />
            <main>
                {children}
            </main>
        </div>
    );
}