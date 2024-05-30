import Link from "next/link";

export default function Test4() {
  return (
    <>
      <h1>Test 4</h1>
      <Link href="/test3">Go to Test 3</Link>
      <Link href="/about">Go to About</Link>
    </>
  );
}