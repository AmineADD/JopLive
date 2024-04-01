import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    email,
    title,
    description,
    latitude,
    longitude,
    type,
    streamUrl,
    startTime,
    endTime,
  } = await request.json();

  if (!["EVENT", "INFO", "LIVE"].includes(type)) {
    return new Response(
      JSON.stringify({ error: "Invalid marker type provided." }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return NextResponse.error();
  }

  try {
    const marker = await prisma.marker.create({
      data: {
        title,
        description,
        latitude,
        longitude,
        type,
        streamUrl,
        startTime: startTime ? new Date(startTime) : undefined,
        endTime: endTime ? new Date(endTime) : undefined,
        userId: user.id,
      },
    });

    return new Response(JSON.stringify({ success: true, marker }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to create marker:", error);
    return new Response(JSON.stringify({ error: "Failed to create marker." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
