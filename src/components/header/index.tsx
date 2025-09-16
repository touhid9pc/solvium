import { type FC } from "react";

interface NavBarProps {
  title: string;
  description: string;
}

const Header: FC<NavBarProps> = ({ title, description }) => {
  return (
    <div className="">
      <p className="text-4xl font-bold text-primary-foreground">{title}</p>
      <span className="font-medium text-primary-foreground">{description}</span>
    </div>
  );
};

export default Header;
