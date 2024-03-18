// By default this is a server component.

import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <Link href="/">HOME</Link>
      <h1>Page not found</h1>
      <p>Could not find requested resource.</p>
    </div>
  );
}
