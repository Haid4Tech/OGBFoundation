import { navItems, iconsList } from "../../common/data";
import { Link } from "react-router";
import Icon from "../../assets/OGlogo.png";

export default function Footer() {
  return (
    <div className="flex flex-col gap-5 mx-5 md:mx-28 py-18">
      <div className="border-y border-gray-300 py-12">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="flex flex-row gap-4 items-center">
            <img src={Icon} alt="" />
            <p className="font-semibold">OMAA Foundation</p>
          </div>

          <div className="flex flex-row gap-5 md:gap-15">
            {navItems.map(({ id, label, link }) => {
              return (
                <Link
                  className="text-sm md:text-base text-neutral-500 hover:text-black"
                  key={id}
                  to={link}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
        <p className="text-xs md:text-sm text-neutral-400">
          2025 OMAA Foundation. All rights reserved.
        </p>

        <div className="flex flex-row gap-5">
          {iconsList.map(({ id, icon, url }) => {
            return (
              <Link
                className="text-neutral-400 hover:text-black"
                key={id}
                to={url}
              >
                {icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
