export function roundResult(value) {
  return value.toFixed(2);
}

export function checkStatus(status) {
  return !status;
}

export function UnitTests() {
  const result = 25.64356456;

  return (
    <div>
      <h1>unitTests</h1>
      <div role="result-value">result: {roundResult(result)}</div>
    </div>
  );
}
