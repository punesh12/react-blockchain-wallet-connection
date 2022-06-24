import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import CustomModal from "../customModal/customModal";
import { formatAddress } from "../helpers";
import { connectorsByName, Metamask } from "./connectors";
import { AddressCont, ConnectWalletCont, StyledButton } from "./style";

const ConnectWallet = (props: any) => {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [showDisconnectWalllet, setShowDisconnectWallet] = useState(false);

  const { active, account, activate, deactivate } = useWeb3React();

  useEffect(() => {
    /*
    Reconnect to metamask wallet after refresh if aready connected
    */
    const walletConnectStatus: string =
      localStorage.getItem("walletConnect") || "";

    try {
      if (walletConnectStatus === "true")
        Metamask.isAuthorized().then((isAuthorized: boolean) => {
          if (isAuthorized) {
            activate(Metamask, undefined, true).catch(() => {});
          } else {
            deactivate();
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []); //eslint-disable-line

  const handleWalletConnect = (currentConnector: any) => {
    activate(currentConnector.connector, (error) => {
      if (error) {
        console.log("error", error);
      }
    });
    if (currentConnector.name === "Metamask")
      localStorage.setItem("walletConnect", "true");
    setShowWalletOptions(false);
  };

  const handleWalletDisconnect = () => {
    deactivate();
    setShowDisconnectWallet(false);
    localStorage.setItem("walletConnect", "false");
  };

  return (
    <ConnectWalletCont>
      {active ? (
        <AddressCont onClick={() => setShowDisconnectWallet(true)}>
          {formatAddress(account)}
        </AddressCont>
      ) : (
        <StyledButton onClick={() => setShowWalletOptions(true)}>
          Connect wallet
        </StyledButton>
      )}

      <CustomModal
        show={showWalletOptions}
        toggleModal={() => setShowWalletOptions(false)}
      >
        {connectorsByName.map((connector: any, key: number) => {
          const clickCallback = () => handleWalletConnect(connector);
          return (
            <StyledButton key={key} onClick={() => clickCallback()}>
              {connector.name}
            </StyledButton>
          );
        })}
      </CustomModal>

      <CustomModal
        show={showDisconnectWalllet}
        toggleModal={() => setShowDisconnectWallet(false)}
      >
        {account}
        <StyledButton onClick={() => handleWalletDisconnect()}>
          Disconnect
        </StyledButton>
      </CustomModal>
    </ConnectWalletCont>
  );
};

export default ConnectWallet;
