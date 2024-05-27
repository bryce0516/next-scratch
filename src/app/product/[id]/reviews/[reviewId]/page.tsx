import React from 'react'
import { notFound } from "next/navigation";

type Props = {}

export default function ReviewDetails({
  params,
}: {
  params: {
    id: string;
    reviewId: string;
  };
}) {
  console.log(params);

  // 아래 코드 부분이 강제로 notFound 함수를 실행시킨겁니다.
  if (parseInt(params.reviewId) > 100) {
    notFound();
  }
  return (
    <>
      <h1>Product Id : {params.id}</h1>
      <h1>Review Id : {params.reviewId}</h1>
    </>
  );
}