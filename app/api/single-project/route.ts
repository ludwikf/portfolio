import connectMongoDB from "@/libs/mongodb";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  const project = await Project.findById(id);
  try {
    return new NextResponse(JSON.stringify(project), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
