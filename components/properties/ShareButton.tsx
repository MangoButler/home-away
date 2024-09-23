"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LuShare2 } from "react-icons/lu";
import {
  TwitterShareButton,
  LineShareButton,
  EmailShareButton,
  LinkedinShareButton,
  XIcon,
  LineIcon,
  EmailIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

function ShareButton({
  propertyId,
  name,
}: {
  propertyId: string;
  name: string;
}) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/properties/${propertyId}`;
  const message = `Check out ${name} on home-away retreats`;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="p-2">
          <LuShare2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="top"
        align="end"
        sideOffset={10}
        className="flex items-center gap-x-2 justify-center w-full"
      >
        <TwitterShareButton url={shareLink} title={message}>
          <XIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <LineShareButton url={shareLink} title={message}>
          <LineIcon size={32} round />
        </LineShareButton>
        <WhatsappShareButton url={shareLink} title={message}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <EmailShareButton url={shareLink} title={message}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  );
}

export default ShareButton;
