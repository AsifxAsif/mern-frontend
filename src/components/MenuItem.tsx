import { MenuItem as MenuItemType } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItemComponent = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        TK {(menuItem.price).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItemComponent;
