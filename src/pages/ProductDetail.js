import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
  const paramsOnj = useParams();
  return (
    <>
      <h1> Product details!</h1>
      <p> {paramsOnj.productId}</p>
    </>
  );
}
