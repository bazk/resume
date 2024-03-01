import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <h1>Choose a language:</h1>
      <p>
        <Link href="/en">English</Link>
      </p>
      <p>
        <Link href="/pt">Português</Link>
      </p>
    </>
  );
}
