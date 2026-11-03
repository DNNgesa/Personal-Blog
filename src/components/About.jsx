import { useState } from 'react'

export default function About({ image = "https://placeholder.com", about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}