import React from "react";
import { Br, Cut, Line, Printer, Text, Row } from "react-thermal-printer";
async function createReceipt(order) {
  const receipt = (
    <Printer type="epson" width={42} characterSet="CP1250">
      <Text size={{ width: 2, height: 2 }}>Roulette Cafe</Text>
      <Text bold={true}>Recibo de Compra Mesa {order.table.name}</Text>
      <Br />
      <Line />
      {order.products.map((product, index) => (
        <Row
          key={index}
          left={product.name.substring(0, 15)}
          right={`$${product.price}`}
        />
      ))}
      <Line />
      <Row left={"Total"} right={`$${order.total}`} />
      <Line />
      <Br />
      <Text align="center">Wifi: RouletteCafe / PW: expresso12</Text>
      <Cut />
    </Printer>
  );
  return receipt;
}

export { createReceipt };
