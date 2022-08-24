import React from "react";
import { useParams } from "react-router-dom";

export default function Index() {
  let { abc } = useParams();
  console.log(abc);
  return <div>Dasboard page</div>;
}
