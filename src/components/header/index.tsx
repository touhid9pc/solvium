import { type FC } from "react";

interface NavBarProps {
  title: string;
  description: string;
}

const Header: FC<NavBarProps> = ({ title, description }) => {
  return (
    <div className="">
      <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">
        {title}
      </h1>
      <span className="font-medium text-primary-foreground">{description}</span>
    </div>
  );
};

export default Header;
