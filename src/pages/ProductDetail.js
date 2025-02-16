import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const paramsOnj = useParams();
  return (
    <>
      <h1> Product details!</h1>
      <div>
        <p> {paramsOnj.productId}</p>
      </div>
      <Link to = '..' relative="path"> Back to Product</Link>
    </>
  );
}
