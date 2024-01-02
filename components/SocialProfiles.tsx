/** @format */

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {links} from "@/lib/links"

const images = [
  { path: "github.png", url: links.git, size: 30 },
  {
    path: "linkedin.png",
    url: links.linkedin,
    size: 30,
  },
  {
    path: "Email.png",
    url: `mailto: ${links.email}`,
    size: 40,
  },
  {
    path: "yt.png",
    url: "https://www.youtube.com/@shreelearning3274",
    size: 35,
  },
];
type SocialProfilesPops = {
  displayType?: string;
};
export default function SocialProfiles({
  displayType = "flex-col",
}: SocialProfilesPops) {
  return (
    <div className={cn("flex  justify-center items-center gap-4", displayType)}>
      {images?.map((item) => {
        return (
          <div
            key={item?.path}
            className="hover:scale-125 transition duration-500 cursor-pointer "
          >
            <Link target="_blank" href={item?.url}>
              <Image
                src={item?.path}
                width={item.size}
                height={item.size}
                alt={item?.path?.split('')[1].split(".")[0]}
                className="cursor-pointer bg-transparent "
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
