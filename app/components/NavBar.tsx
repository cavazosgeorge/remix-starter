import { Link } from "@remix-run/react";

function HeaderLink({to, children } : {to: string; children: string}) {
    return (
      <Link className="mr-4 hover:underline md:mr-6 " to={to}>
        {children}
      </Link>
    );
  }

// create nav bar 
export default function Navigation() {
    return (
        <header className="flex flex-row bg-purple-100 p-2">
            <div className="flex-1">
                <HeaderLink to="/">Home</HeaderLink>
                <HeaderLink to="/about">About</HeaderLink>
                <HeaderLink to="/projects">Projects</HeaderLink>
                <HeaderLink to="/contact">Contact</HeaderLink>
            </div>
            <h3 className="flex-0">George Cavazos</h3>
        </header>
    );
}

