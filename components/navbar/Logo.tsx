import Link from "next/link";
import { Button } from "../ui/button";
import { GiBarracksTent } from "react-icons/gi";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <GiBarracksTent className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
