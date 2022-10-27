import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../App";
import { setProducts } from "../store/actions/example";

function NewComp() {
  const products = useSelector((state: any) => state.userReducer.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setProducts());
  });
  return <div>Hello, world</div>;
}

export default NewComp;
