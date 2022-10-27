import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../App";
import { setProducts } from "../store/actions/user";

function NewComp() {
  const products = useSelector((state: any) => state.userReducer.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(setProducts());
  });
  // console.log(products);

  return <button>asdasd</button>;
}

export default NewComp;
