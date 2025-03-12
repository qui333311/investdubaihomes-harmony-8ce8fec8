
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8">
      <div className="glass-panel p-8 md:p-12 rounded-xl text-center max-w-md">
        <div className="mb-6">
          <h1 className="font-serif text-7xl font-light text-primary mb-4">404</h1>
          <p className="text-xl mb-8">The page you're looking for doesn't exist</p>
          <p className="text-muted-foreground mb-8">
            The page you were trying to view at {location.pathname} may have been moved or removed.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all hover-lift"
        >
          <HomeIcon className="mr-2 h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
