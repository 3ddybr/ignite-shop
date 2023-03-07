import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Container } from "./styles";

export function Product() {
  const { query, route } = useRouter();
  return (
    <Container>
      <h1>Product {query} </h1>
    </Container>
  );
}
