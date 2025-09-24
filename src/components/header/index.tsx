import { type FC } from "react";

interface NavBarProps {
  title: string;
  description?: string;
  titleStyle?: string;
  descStyle?: string;
}

const Header: FC<NavBarProps> = ({
  title,
  description,
  titleStyle,
  descStyle,
}) => {
  return (
    <div>
      <h1
        className={`text-2xl md:text-4xl font-bold text-primary-foreground ${titleStyle}`}
      >
        {title}
      </h1>
      <span className={`font-medium text-primary-foreground ${descStyle}`}>
        {description}
      </span>
    </div>
  );
};

export default Header;
