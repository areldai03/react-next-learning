import Link from "next/link"

export function Header() {
    return (
        <header className="border-b-4 border-black p-3">
            <Link className="mx-2" href="/">
              Index
            </Link>
            <Link href="about">
              About
            </Link>
        </header>
    );
}