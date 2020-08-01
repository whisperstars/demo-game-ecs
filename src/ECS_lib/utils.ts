export function fastSplice<T>(array: Array<T>, startIndex: number, removeCount: number) {
  let len = array.length;
  let removeLen = 0;
  
  if (startIndex >= len || removeCount === 0) {
    return;
  }
  
  removeCount = startIndex + removeCount > len ?
    (len - startIndex) : removeCount;
  removeLen = len - removeCount;
  
  for (let i = startIndex; i < len; i += 1) {
    array[i] = array[i + removeCount];
  }
  
  array.length = removeLen;
}

export function assertNever(value: never, noThrow?: boolean): never {
  if (noThrow) {
    return value
  }
  
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`,
  );
}