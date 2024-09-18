import type { MenuItem as MenuItemType } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
<<<<<<< HEAD
        ৳{(menuItem.price ).toFixed(2)}
=======
        ৳{(menuItem.price).toFixed(2)}
>>>>>>> 19ad1d2203a7feab919b0bd6207c8138e340d8ad
      </CardContent>
    </Card>
  );
};

export default MenuItem;
