import React, { useEffect } from 'react';

const JupiterTerminal = () => {
  useEffect(() => {
    if (!window.Jupiter || !window.Jupiter.init) {
      console.error('Jupiter Terminal script not loaded yet');
      return;
    }

    window.Jupiter.init({
      displayMode: 'integrated',
      integratedTargetId: 'integrated-terminal',
      endpoint: 'https://mainnet.helius-rpc.com/?api-key=558cc937-d2ab-400c-bd0c-b4e0fcac7b68',
      defaultExplorer: 'Solscan',
      enableWalletPassthrough: false,
      strictTokenList: false,
      formProps: {
        fixedInputMint: true,
        initialInputMint: 'So11111111111111111111111111111111111111112',
        fixedOutputMint: true,
        initialOutputMint: 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263',
        initialSlippageBps: 500,
      },
    });
  }, []);

  return <div id="integrated-terminal"></div>;
};

export default JupiterTerminal;
