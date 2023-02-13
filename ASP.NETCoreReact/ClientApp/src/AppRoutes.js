import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { TrademarkAddition } from "./components/TrademarkAddition";
import { Trademark } from "./components/Trademarks";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/trademarks/add',
    element: <TrademarkAddition />
  },
  {
    path: '/trademarks/get',
    element: <Trademark />
  }
];

export default AppRoutes;
