import React from 'react'

type Props = {}

export default function Reviews(props: {
  params: { id: string };
  searchParams: { country: string };
}) {
  console.log(props);
  return (
    <h1>
      Reviews Page and productId : {props.params.id}, Country:{" "}
      {props.searchParams.country}
    </h1>
  );
}