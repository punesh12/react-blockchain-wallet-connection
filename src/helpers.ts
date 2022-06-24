export const formatAddress = (address: any) => {
  if (address) {
    const add1 = address.substring(0, 4);
    const add2 = address.substring(address.length - 4);
    const finalAddress = `${add1}...${add2}`;
    return finalAddress;
  }
};
