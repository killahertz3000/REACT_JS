import { SharedNetworkData } from "./SharedNetworkData";
import { useNetworkData } from "./useNetworkData";

export const ButtonWithNetwork = () => {
  return (
    <SharedNetworkData
      render={(isConnected) => {
        if (!isConnected) {
          return <button disabled={true}>Not connected</button>;
        }

        return <button>Press me</button>;
      }}
    />
  );
};

export const ButtonWithNetwork2 = () => {
  const { connection } = useNetworkData();
  if (!connection) {
    return <button disabled={true}>Not connected</button>;
  }

  return <button>Press me</button>;
};