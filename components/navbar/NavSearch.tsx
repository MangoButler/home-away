import { Input } from "../ui/input";

function NavSearch() {
  return (
    <Input
      type="text"
      placeholder="Find a property..."
      className="max-w-xs dark:bg-muted"
    />
  );
}

export default NavSearch;
