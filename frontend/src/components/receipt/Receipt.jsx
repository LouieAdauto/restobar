import React from "react";
import {
  Br,
  Cut,
  Line,
  Printer,
  Text,
  Row,
  render,
} from "react-thermal-printer";
async function Receipt() {
  const receipt = (
    <Printer type="epson" width={42} characterSet="korea">
      <Text size={{ width: 2, height: 2 }}>Roulette Cafe</Text>
      <Text bold={true}>Recibo de Compra</Text>
      <Br />
      <Line />
      <Row left="Cafe Americano" right="$30" />
      <Row left="Cheesecake Choco" right="$52" />
      <Row left="Cheesecake Fram" right="$52" />
      <Row left="Hamburguesa Sirloin" right="$75" />
      <Row left="Papas Gajo" right="$40" />
      <Row left="Crepa Nutella" right="$60" />
      <Line />
      <Row left="Total" right="$309" />
      <Text>옵션1(500)/옵션2/메모</Text>
      <Row left="(-) 할인" right="- 500" />
      <Br />
      <Line />
      <Br />
      <Text align="center">Wifi: RouletteCafe / PW: expresso12</Text>
      <Cut />
    </Printer>
  );
  const data = await render(receipt);
  return data;
}

export default Receipt;
