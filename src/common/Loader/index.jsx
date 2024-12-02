import { cn } from "../../lib/utils";

const Loader = ({ classes }) => (
  <div className={cn("flex min-h-full items-center justify-center", classes)}>
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" />
  </div>
);

export default Loader;
