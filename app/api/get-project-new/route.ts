import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectMongoDB();
    const data = await Project.find().sort({ createdAt: -1 }).limit(1);

    return new NextResponse(JSON.stringify(data));
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
