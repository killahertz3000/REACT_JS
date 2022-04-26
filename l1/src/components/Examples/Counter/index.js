import React, { useCallback, useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alex");

  const updateCount = useCallback(() => {
    console.log("before: ", count);
    setCount((prevCount) => prevCount + 1);
  }, [count]);

  useEffect(() => {
    console.log("after: ", count);

    console.log("counter did mount OR count changed");
  }, [count]);

  useEffect(() => {
    console.log("counter did mount");
  }, []);

  useEffect(() => {
    console.log("counter did mount + did update");
  });

  useEffect(() => {
    console.log("counter did mount OR name changed");
  }, [name]);

  useEffect(() => {
    console.log("counter did mount OR name changed OR counter changed");
  }, [name, count]);

  useEffect(() => {
    return () => {
      console.log("counter will unmount");
    };
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <h3>{name}</h3>
      <button onClick={updateCount}>Click</button>
      <button
        onClick={() => {
          setName((prevName) => prevName + count);
        }}
      >
        Click
      </button>
    </div>
  );
};