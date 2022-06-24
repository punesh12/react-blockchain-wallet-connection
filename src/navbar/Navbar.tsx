import Icon from "../assets/icons/ethereum.svg";
import ConnectWallet from "../connectWallet/ConnectWallet";
import { IconImg, NavbarContainer } from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <IconImg src={Icon} alt="icon" />
      <ConnectWallet />
    </NavbarContainer>
  );
};

export default Navbar;
